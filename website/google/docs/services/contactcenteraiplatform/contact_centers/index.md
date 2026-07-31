--- 
title: contact_centers
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_centers
  - contactcenteraiplatform
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

Creates, updates, deletes, gets or lists a <code>contact_centers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contact_centers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.contactcenteraiplatform.contact_centers" /></td></tr>
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
    <td>name of resource</td>
</tr>
<tr>
    <td><CopyableCode code="adminUser" /></td>
    <td><code>object</code></td>
    <td>Optional. Info about the first admin user, such as given name and family name. (id: AdminUser)</td>
</tr>
<tr>
    <td><CopyableCode code="advancedReportingEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the advanced reporting feature is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="ccaipManagedUsers" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether to enable users to be created in the CCAIP-instance concurrently to having users in Cloud identity</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Create time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="critical" /></td>
    <td><code>object</code></td>
    <td>Optional. Critical release channel. (id: Critical)</td>
</tr>
<tr>
    <td><CopyableCode code="customerDomainPrefix" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. At least 2 and max 16 char long, must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt).</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp in UTC of when this resource was soft-deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. A user friendly name for the ContactCenter.</td>
</tr>
<tr>
    <td><CopyableCode code="early" /></td>
    <td><code>object</code></td>
    <td>Optional. Early release channel. (id: Early)</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp in UTC of when this resource is considered expired.</td>
</tr>
<tr>
    <td><CopyableCode code="featureConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Feature configuration to populate the feature flags. (id: FeatureConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of this instance, it is currently immutable once created. (id: InstanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKey" /></td>
    <td><code>string</code></td>
    <td>Immutable. The KMS key name to encrypt the user input (`ContactCenter`).</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="normal" /></td>
    <td><code>object</code></td>
    <td>Optional. Normal release channel. (id: Normal)</td>
</tr>
<tr>
    <td><CopyableCode code="privateAccess" /></td>
    <td><code>object</code></td>
    <td>Optional. VPC-SC related networking configuration. (id: PrivateAccess)</td>
</tr>
<tr>
    <td><CopyableCode code="privateComponents" /></td>
    <td><code>array</code></td>
    <td>Output only. TODO(b/283407860) Deprecate this field.</td>
</tr>
<tr>
    <td><CopyableCode code="purgeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp in UTC of when this resource is going to be hard-deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="releaseVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. UJET release version, unique for each new release.</td>
</tr>
<tr>
    <td><CopyableCode code="samlParams" /></td>
    <td><code>object</code></td>
    <td>Optional. Params that sets up Google as IdP. (id: SAMLParams)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of this contact center. (STATE_UNSPECIFIED, STATE_DEPLOYING, STATE_DEPLOYED, STATE_TERMINATING, STATE_FAILED, STATE_TERMINATING_FAILED, STATE_TERMINATED, STATE_IN_GRACE_PERIOD, STATE_FAILING_OVER, STATE_DEGRADED, STATE_REPAIRING, STATE_EXPIRING)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Update time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="uris" /></td>
    <td><code>object</code></td>
    <td>Output only. URIs to access the deployed ContactCenters. (id: URIs)</td>
</tr>
<tr>
    <td><CopyableCode code="userEmail" /></td>
    <td><code>string</code></td>
    <td>Optional. Email address of the first admin user.</td>
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
    <td>name of resource</td>
</tr>
<tr>
    <td><CopyableCode code="adminUser" /></td>
    <td><code>object</code></td>
    <td>Optional. Info about the first admin user, such as given name and family name. (id: AdminUser)</td>
</tr>
<tr>
    <td><CopyableCode code="advancedReportingEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the advanced reporting feature is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="ccaipManagedUsers" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether to enable users to be created in the CCAIP-instance concurrently to having users in Cloud identity</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Create time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="critical" /></td>
    <td><code>object</code></td>
    <td>Optional. Critical release channel. (id: Critical)</td>
</tr>
<tr>
    <td><CopyableCode code="customerDomainPrefix" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. At least 2 and max 16 char long, must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt).</td>
</tr>
<tr>
    <td><CopyableCode code="deleteTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp in UTC of when this resource was soft-deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. A user friendly name for the ContactCenter.</td>
</tr>
<tr>
    <td><CopyableCode code="early" /></td>
    <td><code>object</code></td>
    <td>Optional. Early release channel. (id: Early)</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp in UTC of when this resource is considered expired.</td>
</tr>
<tr>
    <td><CopyableCode code="featureConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Feature configuration to populate the feature flags. (id: FeatureConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of this instance, it is currently immutable once created. (id: InstanceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKey" /></td>
    <td><code>string</code></td>
    <td>Immutable. The KMS key name to encrypt the user input (`ContactCenter`).</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Labels as key value pairs</td>
</tr>
<tr>
    <td><CopyableCode code="normal" /></td>
    <td><code>object</code></td>
    <td>Optional. Normal release channel. (id: Normal)</td>
</tr>
<tr>
    <td><CopyableCode code="privateAccess" /></td>
    <td><code>object</code></td>
    <td>Optional. VPC-SC related networking configuration. (id: PrivateAccess)</td>
</tr>
<tr>
    <td><CopyableCode code="privateComponents" /></td>
    <td><code>array</code></td>
    <td>Output only. TODO(b/283407860) Deprecate this field.</td>
</tr>
<tr>
    <td><CopyableCode code="purgeTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp in UTC of when this resource is going to be hard-deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="releaseVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. UJET release version, unique for each new release.</td>
</tr>
<tr>
    <td><CopyableCode code="samlParams" /></td>
    <td><code>object</code></td>
    <td>Optional. Params that sets up Google as IdP. (id: SAMLParams)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of this contact center. (STATE_UNSPECIFIED, STATE_DEPLOYING, STATE_DEPLOYED, STATE_TERMINATING, STATE_FAILED, STATE_TERMINATING_FAILED, STATE_TERMINATED, STATE_IN_GRACE_PERIOD, STATE_FAILING_OVER, STATE_DEGRADED, STATE_REPAIRING, STATE_EXPIRING)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. [Output only] Update time stamp</td>
</tr>
<tr>
    <td><CopyableCode code="uris" /></td>
    <td><code>object</code></td>
    <td>Output only. URIs to access the deployed ContactCenters. (id: URIs)</td>
</tr>
<tr>
    <td><CopyableCode code="userEmail" /></td>
    <td><code>string</code></td>
    <td>Optional. Email address of the first admin user.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-contactCentersId"><code>contactCentersId</code></a></td>
    <td></td>
    <td>Gets details of a single ContactCenter.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists ContactCenters in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-contactCenterId"><code>contactCenterId</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new ContactCenter in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-contactCentersId"><code>contactCentersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the parameters of a single ContactCenter.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-contactCentersId"><code>contactCentersId</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes a single ContactCenter.</td>
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
<tr id="parameter-contactCentersId">
    <td><CopyableCode code="contactCentersId" /></td>
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
<tr id="parameter-contactCenterId">
    <td><CopyableCode code="contactCenterId" /></td>
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

Gets details of a single ContactCenter.

```sql
SELECT
name,
adminUser,
advancedReportingEnabled,
ccaipManagedUsers,
createTime,
critical,
customerDomainPrefix,
deleteTime,
displayName,
early,
expireTime,
featureConfig,
instanceConfig,
kmsKey,
labels,
normal,
privateAccess,
privateComponents,
purgeTime,
releaseVersion,
samlParams,
state,
updateTime,
uris,
userEmail
FROM google.contactcenteraiplatform.contact_centers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND contactCentersId = '{{ contactCentersId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists ContactCenters in a given project and location.

```sql
SELECT
name,
adminUser,
advancedReportingEnabled,
ccaipManagedUsers,
createTime,
critical,
customerDomainPrefix,
deleteTime,
displayName,
early,
expireTime,
featureConfig,
instanceConfig,
kmsKey,
labels,
normal,
privateAccess,
privateComponents,
purgeTime,
releaseVersion,
samlParams,
state,
updateTime,
uris,
userEmail
FROM google.contactcenteraiplatform.contact_centers
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

Creates a new ContactCenter in a given project and location.

```sql
INSERT INTO google.contactcenteraiplatform.contact_centers (
data__adminUser,
data__kmsKey,
data__samlParams,
data__userEmail,
data__featureConfig,
data__instanceConfig,
data__name,
data__labels,
data__displayName,
data__critical,
data__early,
data__customerDomainPrefix,
data__advancedReportingEnabled,
data__ccaipManagedUsers,
data__privateAccess,
data__normal,
projectsId,
locationsId,
contactCenterId,
requestId
)
SELECT 
'{{ adminUser }}',
'{{ kmsKey }}',
'{{ samlParams }}',
'{{ userEmail }}',
'{{ featureConfig }}',
'{{ instanceConfig }}',
'{{ name }}',
'{{ labels }}',
'{{ displayName }}',
'{{ critical }}',
'{{ early }}',
'{{ customerDomainPrefix }}',
{{ advancedReportingEnabled }},
{{ ccaipManagedUsers }},
'{{ privateAccess }}',
'{{ normal }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ contactCenterId }}',
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
- name: contact_centers
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the contact_centers resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the contact_centers resource.
    - name: adminUser
      description: |
        Optional. Info about the first admin user, such as given name and family name.
      value:
        givenName: "{{ givenName }}"
        familyName: "{{ familyName }}"
    - name: kmsKey
      value: "{{ kmsKey }}"
      description: |
        Immutable. The KMS key name to encrypt the user input (\`ContactCenter\`).
    - name: samlParams
      description: |
        Optional. Params that sets up Google as IdP.
      value:
        authenticationContexts:
          - "{{ authenticationContexts }}"
        certificate: "{{ certificate }}"
        userEmail: "{{ userEmail }}"
        emailMapping: "{{ emailMapping }}"
        ssoUri: "{{ ssoUri }}"
        entityId: "{{ entityId }}"
    - name: userEmail
      value: "{{ userEmail }}"
      description: |
        Optional. Email address of the first admin user.
    - name: featureConfig
      description: |
        Optional. Feature configuration to populate the feature flags.
      value:
        agentDesktopEnabled: {{ agentDesktopEnabled }}
    - name: instanceConfig
      description: |
        The configuration of this instance, it is currently immutable once created.
      value:
        instanceSize: "{{ instanceSize }}"
    - name: name
      value: "{{ name }}"
      description: |
        name of resource
    - name: labels
      value: "{{ labels }}"
      description: |
        Labels as key value pairs
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. A user friendly name for the ContactCenter.
    - name: critical
      description: |
        Optional. Critical release channel.
      value:
        peakHours:
          - startTime:
              hours: {{ hours }}
              minutes: {{ minutes }}
              seconds: {{ seconds }}
              nanos: {{ nanos }}
            endTime:
              hours: {{ hours }}
              minutes: {{ minutes }}
              seconds: {{ seconds }}
              nanos: {{ nanos }}
            days: "{{ days }}"
            duration: "{{ duration }}"
    - name: early
      value: "{{ early }}"
      description: |
        Optional. Early release channel.
    - name: customerDomainPrefix
      value: "{{ customerDomainPrefix }}"
      description: |
        Required. Immutable. At least 2 and max 16 char long, must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt).
    - name: advancedReportingEnabled
      value: {{ advancedReportingEnabled }}
      description: |
        Optional. Whether the advanced reporting feature is enabled.
    - name: ccaipManagedUsers
      value: {{ ccaipManagedUsers }}
      description: |
        Optional. Whether to enable users to be created in the CCAIP-instance concurrently to having users in Cloud identity
    - name: privateAccess
      description: |
        Optional. VPC-SC related networking configuration.
      value:
        ingressSettings:
          - name: "{{ name }}"
            serviceAttachmentNames: "{{ serviceAttachmentNames }}"
        pscSetting:
          allowedConsumerProjectIds:
            - "{{ allowedConsumerProjectIds }}"
          producerProjectIds:
            - "{{ producerProjectIds }}"
        egressSettings:
          - name: "{{ name }}"
            serviceAttachmentNames: "{{ serviceAttachmentNames }}"
    - name: normal
      value: "{{ normal }}"
      description: |
        Optional. Normal release channel.
    - name: contactCenterId
      value: "{{ contactCenterId }}"
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

Updates the parameters of a single ContactCenter.

```sql
UPDATE google.contactcenteraiplatform.contact_centers
SET 
data__adminUser = '{{ adminUser }}',
data__kmsKey = '{{ kmsKey }}',
data__samlParams = '{{ samlParams }}',
data__userEmail = '{{ userEmail }}',
data__featureConfig = '{{ featureConfig }}',
data__instanceConfig = '{{ instanceConfig }}',
data__name = '{{ name }}',
data__labels = '{{ labels }}',
data__displayName = '{{ displayName }}',
data__critical = '{{ critical }}',
data__early = '{{ early }}',
data__customerDomainPrefix = '{{ customerDomainPrefix }}',
data__advancedReportingEnabled = {{ advancedReportingEnabled }},
data__ccaipManagedUsers = {{ ccaipManagedUsers }},
data__privateAccess = '{{ privateAccess }}',
data__normal = '{{ normal }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND contactCentersId = '{{ contactCentersId }}' --required
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

Deletes a single ContactCenter.

```sql
DELETE FROM google.contactcenteraiplatform.contact_centers
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND contactCentersId = '{{ contactCentersId }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
