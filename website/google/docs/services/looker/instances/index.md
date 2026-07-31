--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - looker
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.looker.instances" /></td></tr>
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
    <td>Output only. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/instances/&#123;instance&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="acceleratedSecurityPatchEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Accelerated security patch enabled for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="adminSettings" /></td>
    <td><code>object</code></td>
    <td>Looker Instance Admin settings. (id: AdminSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="catalogIntegrationOptOut" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates whether catalog integration is disabled for the Looker instance.</td>
</tr>
<tr>
    <td><CopyableCode code="classType" /></td>
    <td><code>string</code></td>
    <td>Optional. Storage class of the instance. (CLASS_TYPE_UNSPECIFIED, R1, P1)</td>
</tr>
<tr>
    <td><CopyableCode code="consumerNetwork" /></td>
    <td><code>string</code></td>
    <td>Network name in the consumer project. Format: `projects/&#123;project&#125;/global/networks/&#123;network&#125;`. Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="controlledEgressConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Controlled egress configuration. (id: ControlledEgressConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="controlledEgressEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether controlled egress is enabled on the Looker instance.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the Looker instance provisioning was first requested.</td>
</tr>
<tr>
    <td><CopyableCode code="customDomain" /></td>
    <td><code>object</code></td>
    <td>Custom domain configuration for the instance. (id: CustomDomain)</td>
</tr>
<tr>
    <td><CopyableCode code="denyMaintenancePeriod" /></td>
    <td><code>object</code></td>
    <td>Maintenance denial period for this instance. (id: DenyMaintenancePeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="egressPublicIp" /></td>
    <td><code>string</code></td>
    <td>Output only. Public Egress IP (IPv4).</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfig" /></td>
    <td><code>object</code></td>
    <td>Encryption configuration (CMEK). Only set if CMEK has been enabled on the instance. (id: EncryptionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="fipsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether FIPS is enabled on the Looker instance.</td>
</tr>
<tr>
    <td><CopyableCode code="geminiEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether Gemini feature is enabled on the Looker instance or not.</td>
</tr>
<tr>
    <td><CopyableCode code="ingressIpAllowlistConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Ingress IP allowlist configuration for the Looker instance. (id: IngressIpAllowlistConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="ingressPrivateIp" /></td>
    <td><code>string</code></td>
    <td>Output only. Private Ingress IP (IPv4).</td>
</tr>
<tr>
    <td><CopyableCode code="ingressPublicIp" /></td>
    <td><code>string</code></td>
    <td>Output only. Public Ingress IP (IPv4).</td>
</tr>
<tr>
    <td><CopyableCode code="lastDenyMaintenancePeriod" /></td>
    <td><code>object</code></td>
    <td>Output only. Last computed maintenance denial period for this instance. (id: DenyMaintenancePeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedLspProjectNumber" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Linked Google Cloud Project Number for Looker Studio Pro.</td>
</tr>
<tr>
    <td><CopyableCode code="lookerUri" /></td>
    <td><code>string</code></td>
    <td>Output only. Looker instance URI which can be used to access the Looker Instance UI.</td>
</tr>
<tr>
    <td><CopyableCode code="lookerVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The Looker version that the instance is using.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceSchedule" /></td>
    <td><code>object</code></td>
    <td>Maintenance schedule for this instance. (id: MaintenanceSchedule)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceWindow" /></td>
    <td><code>object</code></td>
    <td>Maintenance window for this instance. (id: MaintenanceWindow)</td>
</tr>
<tr>
    <td><CopyableCode code="oauthConfig" /></td>
    <td><code>object</code></td>
    <td>Looker instance OAuth login settings. (id: OAuthConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="periodicExportConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for periodic export. (id: PeriodicExportConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="platformEdition" /></td>
    <td><code>string</code></td>
    <td>Platform edition. (PLATFORM_EDITION_UNSPECIFIED, LOOKER_CORE_TRIAL, LOOKER_CORE_STANDARD, LOOKER_CORE_STANDARD_ANNUAL, LOOKER_CORE_ENTERPRISE_ANNUAL, LOOKER_CORE_EMBED_ANNUAL, LOOKER_CORE_NONPROD_STANDARD_ANNUAL, LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL, LOOKER_CORE_NONPROD_EMBED_ANNUAL, LOOKER_CORE_TRIAL_STANDARD, LOOKER_CORE_TRIAL_ENTERPRISE, LOOKER_CORE_TRIAL_EMBED)</td>
</tr>
<tr>
    <td><CopyableCode code="privateIpEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether private IP is enabled on the Looker instance.</td>
</tr>
<tr>
    <td><CopyableCode code="pscConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. PSC configuration. Used when `psc_enabled` is true. (id: PscConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="pscEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether to use Private Service Connect (PSC) for private IP connectivity. If true, neither `public_ip_enabled` nor `private_ip_enabled` can be true.</td>
</tr>
<tr>
    <td><CopyableCode code="publicIpEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether public IP is enabled on the Looker instance.</td>
</tr>
<tr>
    <td><CopyableCode code="releaseChannel" /></td>
    <td><code>string</code></td>
    <td>Optional. The selected release channel for the instance. (RELEASE_CHANNEL_UNSPECIFIED, RAPID, REGULAR, STABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="reservedRange" /></td>
    <td><code>string</code></td>
    <td>Name of a reserved IP address range within the Instance.consumer_network, to be used for private services access connection. May or may not be specified in a create request.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="softDeleteReason" /></td>
    <td><code>string</code></td>
    <td>Output only. The reason for the instance being in a soft-deleted state. (SOFT_DELETE_REASON_UNSPECIFIED, BILLING_ACCOUNT_ISSUE, TRIAL_EXPIRED, CUSTOMER_REQUEST)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the instance. (STATE_UNSPECIFIED, ACTIVE, CREATING, FAILED, SUSPENDED, UPDATING, DELETING, EXPORTING, IMPORTING)</td>
</tr>
<tr>
    <td><CopyableCode code="suspendedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the Looker instance was suspended (soft deleted).</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the Looker instance was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="userMetadata" /></td>
    <td><code>object</code></td>
    <td>Optional. User metadata. (id: UserMetadata)</td>
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
    <td>Output only. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/instances/&#123;instance&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="acceleratedSecurityPatchEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Accelerated security patch enabled for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="adminSettings" /></td>
    <td><code>object</code></td>
    <td>Looker Instance Admin settings. (id: AdminSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="catalogIntegrationOptOut" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Indicates whether catalog integration is disabled for the Looker instance.</td>
</tr>
<tr>
    <td><CopyableCode code="classType" /></td>
    <td><code>string</code></td>
    <td>Optional. Storage class of the instance. (CLASS_TYPE_UNSPECIFIED, R1, P1)</td>
</tr>
<tr>
    <td><CopyableCode code="consumerNetwork" /></td>
    <td><code>string</code></td>
    <td>Network name in the consumer project. Format: `projects/&#123;project&#125;/global/networks/&#123;network&#125;`. Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="controlledEgressConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Controlled egress configuration. (id: ControlledEgressConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="controlledEgressEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether controlled egress is enabled on the Looker instance.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the Looker instance provisioning was first requested.</td>
</tr>
<tr>
    <td><CopyableCode code="customDomain" /></td>
    <td><code>object</code></td>
    <td>Custom domain configuration for the instance. (id: CustomDomain)</td>
</tr>
<tr>
    <td><CopyableCode code="denyMaintenancePeriod" /></td>
    <td><code>object</code></td>
    <td>Maintenance denial period for this instance. (id: DenyMaintenancePeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="egressPublicIp" /></td>
    <td><code>string</code></td>
    <td>Output only. Public Egress IP (IPv4).</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfig" /></td>
    <td><code>object</code></td>
    <td>Encryption configuration (CMEK). Only set if CMEK has been enabled on the instance. (id: EncryptionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="fipsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether FIPS is enabled on the Looker instance.</td>
</tr>
<tr>
    <td><CopyableCode code="geminiEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether Gemini feature is enabled on the Looker instance or not.</td>
</tr>
<tr>
    <td><CopyableCode code="ingressIpAllowlistConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Ingress IP allowlist configuration for the Looker instance. (id: IngressIpAllowlistConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="ingressPrivateIp" /></td>
    <td><code>string</code></td>
    <td>Output only. Private Ingress IP (IPv4).</td>
</tr>
<tr>
    <td><CopyableCode code="ingressPublicIp" /></td>
    <td><code>string</code></td>
    <td>Output only. Public Ingress IP (IPv4).</td>
</tr>
<tr>
    <td><CopyableCode code="lastDenyMaintenancePeriod" /></td>
    <td><code>object</code></td>
    <td>Output only. Last computed maintenance denial period for this instance. (id: DenyMaintenancePeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedLspProjectNumber" /></td>
    <td><code>string (int64)</code></td>
    <td>Optional. Linked Google Cloud Project Number for Looker Studio Pro.</td>
</tr>
<tr>
    <td><CopyableCode code="lookerUri" /></td>
    <td><code>string</code></td>
    <td>Output only. Looker instance URI which can be used to access the Looker Instance UI.</td>
</tr>
<tr>
    <td><CopyableCode code="lookerVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The Looker version that the instance is using.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceSchedule" /></td>
    <td><code>object</code></td>
    <td>Maintenance schedule for this instance. (id: MaintenanceSchedule)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceWindow" /></td>
    <td><code>object</code></td>
    <td>Maintenance window for this instance. (id: MaintenanceWindow)</td>
</tr>
<tr>
    <td><CopyableCode code="oauthConfig" /></td>
    <td><code>object</code></td>
    <td>Looker instance OAuth login settings. (id: OAuthConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="periodicExportConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for periodic export. (id: PeriodicExportConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="platformEdition" /></td>
    <td><code>string</code></td>
    <td>Platform edition. (PLATFORM_EDITION_UNSPECIFIED, LOOKER_CORE_TRIAL, LOOKER_CORE_STANDARD, LOOKER_CORE_STANDARD_ANNUAL, LOOKER_CORE_ENTERPRISE_ANNUAL, LOOKER_CORE_EMBED_ANNUAL, LOOKER_CORE_NONPROD_STANDARD_ANNUAL, LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL, LOOKER_CORE_NONPROD_EMBED_ANNUAL, LOOKER_CORE_TRIAL_STANDARD, LOOKER_CORE_TRIAL_ENTERPRISE, LOOKER_CORE_TRIAL_EMBED)</td>
</tr>
<tr>
    <td><CopyableCode code="privateIpEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether private IP is enabled on the Looker instance.</td>
</tr>
<tr>
    <td><CopyableCode code="pscConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. PSC configuration. Used when `psc_enabled` is true. (id: PscConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="pscEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether to use Private Service Connect (PSC) for private IP connectivity. If true, neither `public_ip_enabled` nor `private_ip_enabled` can be true.</td>
</tr>
<tr>
    <td><CopyableCode code="publicIpEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether public IP is enabled on the Looker instance.</td>
</tr>
<tr>
    <td><CopyableCode code="releaseChannel" /></td>
    <td><code>string</code></td>
    <td>Optional. The selected release channel for the instance. (RELEASE_CHANNEL_UNSPECIFIED, RAPID, REGULAR, STABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="reservedRange" /></td>
    <td><code>string</code></td>
    <td>Name of a reserved IP address range within the Instance.consumer_network, to be used for private services access connection. May or may not be specified in a create request.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="softDeleteReason" /></td>
    <td><code>string</code></td>
    <td>Output only. The reason for the instance being in a soft-deleted state. (SOFT_DELETE_REASON_UNSPECIFIED, BILLING_ACCOUNT_ISSUE, TRIAL_EXPIRED, CUSTOMER_REQUEST)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the instance. (STATE_UNSPECIFIED, ACTIVE, CREATING, FAILED, SUSPENDED, UPDATING, DELETING, EXPORTING, IMPORTING)</td>
</tr>
<tr>
    <td><CopyableCode code="suspendedTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the Looker instance was suspended (soft deleted).</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time when the Looker instance was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="userMetadata" /></td>
    <td><code>object</code></td>
    <td>Optional. User metadata. (id: UserMetadata)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Gets details of a single Instance.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-showDeleted"><code>showDeleted</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists Instances in a given project and location.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a></td>
    <td>Creates a new Instance in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update Instance.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Delete instance.</td>
</tr>
<tr>
    <td><a href="#restart"><CopyableCode code="restart" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Restart instance.</td>
</tr>
<tr>
    <td><a href="#undelete"><CopyableCode code="undelete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Undeletes Looker instance.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Import instance.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Restore Looker instance.</td>
</tr>
<tr>
    <td><a href="#export"><CopyableCode code="export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-instancesId"><code>instancesId</code></a></td>
    <td></td>
    <td>Export instance.</td>
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
<tr id="parameter-instancesId">
    <td><CopyableCode code="instancesId" /></td>
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
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
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
<tr id="parameter-showDeleted">
    <td><CopyableCode code="showDeleted" /></td>
    <td><code>boolean</code></td>
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

Gets details of a single Instance.

```sql
SELECT
name,
acceleratedSecurityPatchEnabled,
adminSettings,
catalogIntegrationOptOut,
classType,
consumerNetwork,
controlledEgressConfig,
controlledEgressEnabled,
createTime,
customDomain,
denyMaintenancePeriod,
egressPublicIp,
encryptionConfig,
fipsEnabled,
geminiEnabled,
ingressIpAllowlistConfig,
ingressPrivateIp,
ingressPublicIp,
lastDenyMaintenancePeriod,
linkedLspProjectNumber,
lookerUri,
lookerVersion,
maintenanceSchedule,
maintenanceWindow,
oauthConfig,
periodicExportConfig,
platformEdition,
privateIpEnabled,
pscConfig,
pscEnabled,
publicIpEnabled,
releaseChannel,
reservedRange,
satisfiesPzi,
satisfiesPzs,
softDeleteReason,
state,
suspendedTime,
updateTime,
userMetadata
FROM google.looker.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND instancesId = '{{ instancesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Instances in a given project and location.

```sql
SELECT
name,
acceleratedSecurityPatchEnabled,
adminSettings,
catalogIntegrationOptOut,
classType,
consumerNetwork,
controlledEgressConfig,
controlledEgressEnabled,
createTime,
customDomain,
denyMaintenancePeriod,
egressPublicIp,
encryptionConfig,
fipsEnabled,
geminiEnabled,
ingressIpAllowlistConfig,
ingressPrivateIp,
ingressPublicIp,
lastDenyMaintenancePeriod,
linkedLspProjectNumber,
lookerUri,
lookerVersion,
maintenanceSchedule,
maintenanceWindow,
oauthConfig,
periodicExportConfig,
platformEdition,
privateIpEnabled,
pscConfig,
pscEnabled,
publicIpEnabled,
releaseChannel,
reservedRange,
satisfiesPzi,
satisfiesPzs,
softDeleteReason,
state,
suspendedTime,
updateTime,
userMetadata
FROM google.looker.instances
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND showDeleted = '{{ showDeleted }}'
AND pageSize = '{{ pageSize }}'
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

Creates a new Instance in a given project and location.

```sql
INSERT INTO google.looker.instances (
data__consumerNetwork,
data__customDomain,
data__releaseChannel,
data__controlledEgressConfig,
data__userMetadata,
data__controlledEgressEnabled,
data__ingressIpAllowlistConfig,
data__publicIpEnabled,
data__adminSettings,
data__catalogIntegrationOptOut,
data__platformEdition,
data__geminiEnabled,
data__pscEnabled,
data__linkedLspProjectNumber,
data__classType,
data__oauthConfig,
data__encryptionConfig,
data__reservedRange,
data__privateIpEnabled,
data__pscConfig,
data__periodicExportConfig,
data__denyMaintenancePeriod,
data__acceleratedSecurityPatchEnabled,
data__maintenanceWindow,
data__fipsEnabled,
data__maintenanceSchedule,
projectsId,
locationsId,
instanceId
)
SELECT 
'{{ consumerNetwork }}',
'{{ customDomain }}',
'{{ releaseChannel }}',
'{{ controlledEgressConfig }}',
'{{ userMetadata }}',
{{ controlledEgressEnabled }},
'{{ ingressIpAllowlistConfig }}',
{{ publicIpEnabled }},
'{{ adminSettings }}',
{{ catalogIntegrationOptOut }},
'{{ platformEdition }}',
{{ geminiEnabled }},
{{ pscEnabled }},
'{{ linkedLspProjectNumber }}',
'{{ classType }}',
'{{ oauthConfig }}',
'{{ encryptionConfig }}',
'{{ reservedRange }}',
{{ privateIpEnabled }},
'{{ pscConfig }}',
'{{ periodicExportConfig }}',
'{{ denyMaintenancePeriod }}',
{{ acceleratedSecurityPatchEnabled }},
'{{ maintenanceWindow }}',
{{ fipsEnabled }},
'{{ maintenanceSchedule }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ instanceId }}'
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
- name: instances
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the instances resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the instances resource.
    - name: consumerNetwork
      value: "{{ consumerNetwork }}"
      description: |
        Network name in the consumer project. Format: \`projects/{project}/global/networks/{network}\`. Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance.
    - name: customDomain
      description: |
        Custom domain configuration for the instance.
      value:
        domain: "{{ domain }}"
        state: "{{ state }}"
    - name: releaseChannel
      value: "{{ releaseChannel }}"
      description: |
        Optional. The selected release channel for the instance.
      valid_values: ['RELEASE_CHANNEL_UNSPECIFIED', 'RAPID', 'REGULAR', 'STABLE']
    - name: controlledEgressConfig
      description: |
        Optional. Controlled egress configuration.
      value:
        webProxyIps:
          - "{{ webProxyIps }}"
        egressFqdns:
          - "{{ egressFqdns }}"
        marketplaceEnabled: {{ marketplaceEnabled }}
    - name: userMetadata
      description: |
        Optional. User metadata.
      value:
        additionalDeveloperUserCount: {{ additionalDeveloperUserCount }}
        additionalViewerUserCount: {{ additionalViewerUserCount }}
        additionalStandardUserCount: {{ additionalStandardUserCount }}
    - name: controlledEgressEnabled
      value: {{ controlledEgressEnabled }}
      description: |
        Optional. Whether controlled egress is enabled on the Looker instance.
    - name: ingressIpAllowlistConfig
      description: |
        Optional. Ingress IP allowlist configuration for the Looker instance.
      value:
        enabled: {{ enabled }}
        googleServicesEnabled: {{ googleServicesEnabled }}
        allowlistRules:
          - description: "{{ description }}"
            ipRange: "{{ ipRange }}"
    - name: publicIpEnabled
      value: {{ publicIpEnabled }}
      description: |
        Whether public IP is enabled on the Looker instance.
    - name: adminSettings
      description: |
        Looker Instance Admin settings.
      value:
        allowedEmailDomains:
          - "{{ allowedEmailDomains }}"
    - name: catalogIntegrationOptOut
      value: {{ catalogIntegrationOptOut }}
      description: |
        Optional. Indicates whether catalog integration is disabled for the Looker instance.
    - name: platformEdition
      value: "{{ platformEdition }}"
      description: |
        Platform edition.
      valid_values: ['PLATFORM_EDITION_UNSPECIFIED', 'LOOKER_CORE_TRIAL', 'LOOKER_CORE_STANDARD', 'LOOKER_CORE_STANDARD_ANNUAL', 'LOOKER_CORE_ENTERPRISE_ANNUAL', 'LOOKER_CORE_EMBED_ANNUAL', 'LOOKER_CORE_NONPROD_STANDARD_ANNUAL', 'LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL', 'LOOKER_CORE_NONPROD_EMBED_ANNUAL', 'LOOKER_CORE_TRIAL_STANDARD', 'LOOKER_CORE_TRIAL_ENTERPRISE', 'LOOKER_CORE_TRIAL_EMBED']
    - name: geminiEnabled
      value: {{ geminiEnabled }}
      description: |
        Optional. Whether Gemini feature is enabled on the Looker instance or not.
    - name: pscEnabled
      value: {{ pscEnabled }}
      description: |
        Optional. Whether to use Private Service Connect (PSC) for private IP connectivity. If true, neither \`public_ip_enabled\` nor \`private_ip_enabled\` can be true.
    - name: linkedLspProjectNumber
      value: "{{ linkedLspProjectNumber }}"
      description: |
        Optional. Linked Google Cloud Project Number for Looker Studio Pro.
    - name: classType
      value: "{{ classType }}"
      description: |
        Optional. Storage class of the instance.
      valid_values: ['CLASS_TYPE_UNSPECIFIED', 'R1', 'P1']
    - name: oauthConfig
      description: |
        Looker instance OAuth login settings.
      value:
        clientSecret: "{{ clientSecret }}"
        sharedOauthClientEnabled: {{ sharedOauthClientEnabled }}
        clientId: "{{ clientId }}"
    - name: encryptionConfig
      description: |
        Encryption configuration (CMEK). Only set if CMEK has been enabled on the instance.
      value:
        kmsKeyState: "{{ kmsKeyState }}"
        kmsKeyName: "{{ kmsKeyName }}"
        kmsKeyNameVersion: "{{ kmsKeyNameVersion }}"
    - name: reservedRange
      value: "{{ reservedRange }}"
      description: |
        Name of a reserved IP address range within the Instance.consumer_network, to be used for private services access connection. May or may not be specified in a create request.
    - name: privateIpEnabled
      value: {{ privateIpEnabled }}
      description: |
        Whether private IP is enabled on the Looker instance.
    - name: pscConfig
      description: |
        Optional. PSC configuration. Used when \`psc_enabled\` is true.
      value:
        serviceAttachments:
          - localFqdn: "{{ localFqdn }}"
            connectionStatus: "{{ connectionStatus }}"
            localFqdns: "{{ localFqdns }}"
            failureReason: "{{ failureReason }}"
            targetServiceAttachmentUri: "{{ targetServiceAttachmentUri }}"
        lookerServiceAttachmentUri: "{{ lookerServiceAttachmentUri }}"
        allowedVpcs:
          - "{{ allowedVpcs }}"
    - name: periodicExportConfig
      description: |
        Optional. Configuration for periodic export.
      value:
        startTime:
          minutes: {{ minutes }}
          seconds: {{ seconds }}
          hours: {{ hours }}
          nanos: {{ nanos }}
        gcsUri: "{{ gcsUri }}"
        kmsKey: "{{ kmsKey }}"
    - name: denyMaintenancePeriod
      description: |
        Maintenance denial period for this instance.
      value:
        startDate:
          month: {{ month }}
          year: {{ year }}
          day: {{ day }}
        endDate:
          month: {{ month }}
          year: {{ year }}
          day: {{ day }}
        time:
          minutes: {{ minutes }}
          seconds: {{ seconds }}
          hours: {{ hours }}
          nanos: {{ nanos }}
    - name: acceleratedSecurityPatchEnabled
      value: {{ acceleratedSecurityPatchEnabled }}
      description: |
        Optional. Accelerated security patch enabled for the instance.
    - name: maintenanceWindow
      description: |
        Maintenance window for this instance.
      value:
        dayOfWeek: "{{ dayOfWeek }}"
        startTime:
          minutes: {{ minutes }}
          seconds: {{ seconds }}
          hours: {{ hours }}
          nanos: {{ nanos }}
    - name: fipsEnabled
      value: {{ fipsEnabled }}
      description: |
        Optional. Whether FIPS is enabled on the Looker instance.
    - name: maintenanceSchedule
      description: |
        Maintenance schedule for this instance.
      value:
        startTime: "{{ startTime }}"
        endTime: "{{ endTime }}"
    - name: instanceId
      value: "{{ instanceId }}"
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

Update Instance.

```sql
UPDATE google.looker.instances
SET 
data__consumerNetwork = '{{ consumerNetwork }}',
data__customDomain = '{{ customDomain }}',
data__releaseChannel = '{{ releaseChannel }}',
data__controlledEgressConfig = '{{ controlledEgressConfig }}',
data__userMetadata = '{{ userMetadata }}',
data__controlledEgressEnabled = {{ controlledEgressEnabled }},
data__ingressIpAllowlistConfig = '{{ ingressIpAllowlistConfig }}',
data__publicIpEnabled = {{ publicIpEnabled }},
data__adminSettings = '{{ adminSettings }}',
data__catalogIntegrationOptOut = {{ catalogIntegrationOptOut }},
data__platformEdition = '{{ platformEdition }}',
data__geminiEnabled = {{ geminiEnabled }},
data__pscEnabled = {{ pscEnabled }},
data__linkedLspProjectNumber = '{{ linkedLspProjectNumber }}',
data__classType = '{{ classType }}',
data__oauthConfig = '{{ oauthConfig }}',
data__encryptionConfig = '{{ encryptionConfig }}',
data__reservedRange = '{{ reservedRange }}',
data__privateIpEnabled = {{ privateIpEnabled }},
data__pscConfig = '{{ pscConfig }}',
data__periodicExportConfig = '{{ periodicExportConfig }}',
data__denyMaintenancePeriod = '{{ denyMaintenancePeriod }}',
data__acceleratedSecurityPatchEnabled = {{ acceleratedSecurityPatchEnabled }},
data__maintenanceWindow = '{{ maintenanceWindow }}',
data__fipsEnabled = {{ fipsEnabled }},
data__maintenanceSchedule = '{{ maintenanceSchedule }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
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

Delete instance.

```sql
DELETE FROM google.looker.instances
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND instancesId = '{{ instancesId }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restart"
    values={[
        { label: 'restart', value: 'restart' },
        { label: 'undelete', value: 'undelete' },
        { label: 'import', value: 'import' },
        { label: 'restore', value: 'restore' },
        { label: 'export', value: 'export' }
    ]}
>
<TabItem value="restart">

Restart instance.

```sql
EXEC google.looker.instances.restart 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required
;
```
</TabItem>
<TabItem value="undelete">

Undeletes Looker instance.

```sql
EXEC google.looker.instances.undelete 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required
;
```
</TabItem>
<TabItem value="import">

Import instance.

```sql
EXEC google.looker.instances.import 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"gcsUri": "{{ gcsUri }}"
}'
;
```
</TabItem>
<TabItem value="restore">

Restore Looker instance.

```sql
EXEC google.looker.instances.restore 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"backup": "{{ backup }}"
}'
;
```
</TabItem>
<TabItem value="export">

Export instance.

```sql
EXEC google.looker.instances.export 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@instancesId='{{ instancesId }}' --required 
@@json=
'{
"gcsUri": "{{ gcsUri }}", 
"encryptionConfig": "{{ encryptionConfig }}"
}'
;
```
</TabItem>
</Tabs>
