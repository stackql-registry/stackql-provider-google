--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - ces
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

Creates, updates, deletes, gets or lists a <code>deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.ces.deployments" /></td></tr>
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
    <td>Identifier. The resource name of the deployment. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/deployments/&#123;deployment&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="appVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of the app version to deploy. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/versions/&#123;version&#125;` Use `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/versions/-` to use the draft app.</td>
</tr>
<tr>
    <td><CopyableCode code="channelProfile" /></td>
    <td><code>object</code></td>
    <td>Required. The channel profile used in the deployment. (id: ChannelProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this deployment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.</td>
</tr>
<tr>
    <td><CopyableCode code="experimentConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Experiment configuration for the deployment. (id: ExperimentConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="instagramCredentials" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Ephemeral Instagram credentials required when configuring a Instagram channel profile. (id: InstagramCredentials)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this deployment was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="whatsappCredentials" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Ephemeral WhatsApp credentials required when configuring a WhatsApp channel profile. (id: WhatsAppCredentials)</td>
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
    <td>Identifier. The resource name of the deployment. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/deployments/&#123;deployment&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="appVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of the app version to deploy. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/versions/&#123;version&#125;` Use `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/versions/-` to use the draft app.</td>
</tr>
<tr>
    <td><CopyableCode code="channelProfile" /></td>
    <td><code>object</code></td>
    <td>Required. The channel profile used in the deployment. (id: ChannelProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this deployment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. Display name of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Output only. Etag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.</td>
</tr>
<tr>
    <td><CopyableCode code="experimentConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Experiment configuration for the deployment. (id: ExperimentConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="instagramCredentials" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Ephemeral Instagram credentials required when configuring a Instagram channel profile. (id: InstagramCredentials)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when this deployment was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="whatsappCredentials" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Ephemeral WhatsApp credentials required when configuring a WhatsApp channel profile. (id: WhatsAppCredentials)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td></td>
    <td>Gets details of the specified deployment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists deployments in the given app.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-deploymentId"><code>deploymentId</code></a></td>
    <td>Creates a new deployment in the given app.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified deployment.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-deploymentsId"><code>deploymentsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes the specified deployment.</td>
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
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deploymentsId">
    <td><CopyableCode code="deploymentsId" /></td>
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
<tr id="parameter-deploymentId">
    <td><CopyableCode code="deploymentId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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

Gets details of the specified deployment.

```sql
SELECT
name,
appVersion,
channelProfile,
createTime,
displayName,
etag,
experimentConfig,
instagramCredentials,
updateTime,
whatsappCredentials
FROM google.ces.deployments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND deploymentsId = '{{ deploymentsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists deployments in the given app.

```sql
SELECT
name,
appVersion,
channelProfile,
createTime,
displayName,
etag,
experimentConfig,
instagramCredentials,
updateTime,
whatsappCredentials
FROM google.ces.deployments
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
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

Creates a new deployment in the given app.

```sql
INSERT INTO google.ces.deployments (
data__experimentConfig,
data__whatsappCredentials,
data__instagramCredentials,
data__channelProfile,
data__name,
data__displayName,
data__appVersion,
projectsId,
locationsId,
appsId,
deploymentId
)
SELECT 
'{{ experimentConfig }}',
'{{ whatsappCredentials }}',
'{{ instagramCredentials }}',
'{{ channelProfile }}',
'{{ name }}',
'{{ displayName }}',
'{{ appVersion }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ appsId }}',
'{{ deploymentId }}'
RETURNING
name,
appVersion,
channelProfile,
createTime,
displayName,
etag,
experimentConfig,
instagramCredentials,
updateTime,
whatsappCredentials
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: deployments
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the deployments resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the deployments resource.
    - name: appsId
      value: "{{ appsId }}"
      description: Required parameter for the deployments resource.
    - name: experimentConfig
      description: |
        Optional. Experiment configuration for the deployment.
      value:
        versionRelease:
          state: "{{ state }}"
          trafficAllocations:
            - id: "{{ id }}"
              trafficPercentage: {{ trafficPercentage }}
              appVersion: "{{ appVersion }}"
    - name: whatsappCredentials
      description: |
        Optional. Input only. Ephemeral WhatsApp credentials required when configuring a WhatsApp channel profile.
      value:
        authCode: "{{ authCode }}"
        pin: "{{ pin }}"
        wabaId: "{{ wabaId }}"
        conversationProfileId: "{{ conversationProfileId }}"
        businessAccountId: "{{ businessAccountId }}"
        phoneNumber: "{{ phoneNumber }}"
    - name: instagramCredentials
      description: |
        Optional. Input only. Ephemeral Instagram credentials required when configuring a Instagram channel profile.
      value:
        conversationProfileId: "{{ conversationProfileId }}"
        authCode: "{{ authCode }}"
    - name: channelProfile
      description: |
        Required. The channel profile used in the deployment.
      value:
        channelType: "{{ channelType }}"
        disableBargeInControl: {{ disableBargeInControl }}
        webWidgetConfig:
          theme: "{{ theme }}"
          webWidgetTitle: "{{ webWidgetTitle }}"
          modality: "{{ modality }}"
          securitySettings:
            enableRecaptcha: {{ enableRecaptcha }}
            allowedOrigins:
              - "{{ allowedOrigins }}"
            enablePublicAccess: {{ enablePublicAccess }}
            enableOriginCheck: {{ enableOriginCheck }}
        noiseSuppressionLevel: "{{ noiseSuppressionLevel }}"
        profileId: "{{ profileId }}"
        whatsappConfig:
          phoneNumber: "{{ phoneNumber }}"
          displayName: "{{ displayName }}"
          wabaId: "{{ wabaId }}"
          phoneNumberId: "{{ phoneNumberId }}"
          thumbnailUrl: "{{ thumbnailUrl }}"
          description: "{{ description }}"
        instagramConfig:
          instagramAccountId: "{{ instagramAccountId }}"
          thumbnailUrl: "{{ thumbnailUrl }}"
          description: "{{ description }}"
          displayName: "{{ displayName }}"
        personaProperty:
          persona: "{{ persona }}"
        disableDtmf: {{ disableDtmf }}
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name of the deployment. Format: \`projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. Display name of the deployment.
    - name: appVersion
      value: "{{ appVersion }}"
      description: |
        Optional. The resource name of the app version to deploy. Format: \`projects/{project}/locations/{location}/apps/{app}/versions/{version}\` Use \`projects/{project}/locations/{location}/apps/{app}/versions/-\` to use the draft app.
    - name: deploymentId
      value: "{{ deploymentId }}"
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

Updates the specified deployment.

```sql
UPDATE google.ces.deployments
SET 
data__experimentConfig = '{{ experimentConfig }}',
data__whatsappCredentials = '{{ whatsappCredentials }}',
data__instagramCredentials = '{{ instagramCredentials }}',
data__channelProfile = '{{ channelProfile }}',
data__name = '{{ name }}',
data__displayName = '{{ displayName }}',
data__appVersion = '{{ appVersion }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND appsId = '{{ appsId }}' --required
AND deploymentsId = '{{ deploymentsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
appVersion,
channelProfile,
createTime,
displayName,
etag,
experimentConfig,
instagramCredentials,
updateTime,
whatsappCredentials;
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

Deletes the specified deployment.

```sql
DELETE FROM google.ces.deployments
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND appsId = '{{ appsId }}' --required
AND deploymentsId = '{{ deploymentsId }}' --required
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>
