--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - cloudbuild
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudbuild.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_connections_get"
    values={[
        { label: 'projects_locations_connections_get', value: 'projects_locations_connections_get' },
        { label: 'projects_locations_connections_list', value: 'projects_locations_connections_list' }
    ]}
>
<TabItem value="projects_locations_connections_get">

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
    <td>Immutable. The resource name of the connection, in the format `projects/&#123;project&#125;/locations/&#123;location&#125;/connections/&#123;connection_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Allows clients to store small amounts of arbitrary data.</td>
</tr>
<tr>
    <td><CopyableCode code="bitbucketCloudConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for connections to Bitbucket Cloud. (id: BitbucketCloudConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="bitbucketDataCenterConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for connections to Bitbucket Data Center. (id: BitbucketDataCenterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Server assigned timestamp for when the connection was created.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Optional. If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="githubConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for connections to github.com. (id: GitHubConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="githubEnterpriseConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for connections to an instance of GitHub Enterprise. (id: GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="gitlabConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for connections to gitlab.com or an instance of GitLab Enterprise. (id: GoogleDevtoolsCloudbuildV2GitLabConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="installationState" /></td>
    <td><code>object</code></td>
    <td>Output only. Installation state of the Connection. (id: InstallationState)</td>
</tr>
<tr>
    <td><CopyableCode code="reconciling" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Set to true when the connection is being set up or updated in the background.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Server assigned timestamp for when the connection was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_connections_list">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
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
    <td><a href="#projects_locations_connections_get"><CopyableCode code="projects_locations_connections_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td></td>
    <td>Gets details of a single connection.</td>
</tr>
<tr>
    <td><a href="#projects_locations_connections_list"><CopyableCode code="projects_locations_connections_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists Connections in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_connections_create"><CopyableCode code="projects_locations_connections_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-connectionId"><code>connectionId</code></a></td>
    <td>Creates a Connection.</td>
</tr>
<tr>
    <td><a href="#projects_locations_connections_patch"><CopyableCode code="projects_locations_connections_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-allowMissing"><code>allowMissing</code></a>, <a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a single connection.</td>
</tr>
<tr>
    <td><a href="#projects_locations_connections_delete"><CopyableCode code="projects_locations_connections_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-connectionsId"><code>connectionsId</code></a></td>
    <td><a href="#parameter-validateOnly"><code>validateOnly</code></a>, <a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a single connection.</td>
</tr>
<tr>
    <td><a href="#projects_locations_connections_process_webhook"><CopyableCode code="projects_locations_connections_process_webhook" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-webhookKey"><code>webhookKey</code></a></td>
    <td>ProcessWebhook is called by the external SCM for notifying of events.</td>
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
<tr id="parameter-connectionsId">
    <td><CopyableCode code="connectionsId" /></td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-connectionId">
    <td><CopyableCode code="connectionId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
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
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-webhookKey">
    <td><CopyableCode code="webhookKey" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_connections_get"
    values={[
        { label: 'projects_locations_connections_get', value: 'projects_locations_connections_get' },
        { label: 'projects_locations_connections_list', value: 'projects_locations_connections_list' }
    ]}
>
<TabItem value="projects_locations_connections_get">

Gets details of a single connection.

```sql
SELECT
name,
annotations,
bitbucketCloudConfig,
bitbucketDataCenterConfig,
createTime,
disabled,
etag,
githubConfig,
githubEnterpriseConfig,
gitlabConfig,
installationState,
reconciling,
updateTime
FROM google.cloudbuild.connections
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND connectionsId = '{{ connectionsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_connections_list">

Lists Connections in a given project and location.

```sql
SELECT
*
FROM google.cloudbuild.connections
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_connections_create"
    values={[
        { label: 'projects_locations_connections_create', value: 'projects_locations_connections_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_connections_create">

Creates a Connection.

```sql
INSERT INTO google.cloudbuild.connections (
data__bitbucketDataCenterConfig,
data__bitbucketCloudConfig,
data__annotations,
data__etag,
data__name,
data__githubConfig,
data__gitlabConfig,
data__disabled,
data__githubEnterpriseConfig,
projectsId,
locationsId,
connectionId
)
SELECT 
'{{ bitbucketDataCenterConfig }}',
'{{ bitbucketCloudConfig }}',
'{{ annotations }}',
'{{ etag }}',
'{{ name }}',
'{{ githubConfig }}',
'{{ gitlabConfig }}',
{{ disabled }},
'{{ githubEnterpriseConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ connectionId }}'
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
- name: connections
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the connections resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the connections resource.
    - name: bitbucketDataCenterConfig
      description: |
        Configuration for connections to Bitbucket Data Center.
      value:
        sslCa: "{{ sslCa }}"
        hostUri: "{{ hostUri }}"
        webhookSecretSecretVersion: "{{ webhookSecretSecretVersion }}"
        serviceDirectoryConfig:
          service: "{{ service }}"
        authorizerCredential:
          userTokenSecretVersion: "{{ userTokenSecretVersion }}"
          username: "{{ username }}"
        serverVersion: "{{ serverVersion }}"
        readAuthorizerCredential:
          userTokenSecretVersion: "{{ userTokenSecretVersion }}"
          username: "{{ username }}"
    - name: bitbucketCloudConfig
      description: |
        Configuration for connections to Bitbucket Cloud.
      value:
        workspace: "{{ workspace }}"
        authorizerCredential:
          userTokenSecretVersion: "{{ userTokenSecretVersion }}"
          username: "{{ username }}"
        webhookSecretSecretVersion: "{{ webhookSecretSecretVersion }}"
        readAuthorizerCredential:
          userTokenSecretVersion: "{{ userTokenSecretVersion }}"
          username: "{{ username }}"
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Optional. Allows clients to store small amounts of arbitrary data.
    - name: etag
      value: "{{ etag }}"
      description: |
        This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
    - name: name
      value: "{{ name }}"
      description: |
        Immutable. The resource name of the connection, in the format \`projects/{project}/locations/{location}/connections/{connection_id}\`.
    - name: githubConfig
      description: |
        Configuration for connections to github.com.
      value:
        authorizerCredential:
          username: "{{ username }}"
          oauthTokenSecretVersion: "{{ oauthTokenSecretVersion }}"
        appInstallationId: "{{ appInstallationId }}"
    - name: gitlabConfig
      description: |
        Configuration for connections to gitlab.com or an instance of GitLab Enterprise.
      value:
        authorizerCredential:
          userTokenSecretVersion: "{{ userTokenSecretVersion }}"
          username: "{{ username }}"
        serverVersion: "{{ serverVersion }}"
        readAuthorizerCredential:
          userTokenSecretVersion: "{{ userTokenSecretVersion }}"
          username: "{{ username }}"
        hostUri: "{{ hostUri }}"
        webhookSecretSecretVersion: "{{ webhookSecretSecretVersion }}"
        serviceDirectoryConfig:
          service: "{{ service }}"
        sslCa: "{{ sslCa }}"
    - name: disabled
      value: {{ disabled }}
      description: |
        Optional. If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.
    - name: githubEnterpriseConfig
      description: |
        Configuration for connections to an instance of GitHub Enterprise.
      value:
        apiKey: "{{ apiKey }}"
        sslCa: "{{ sslCa }}"
        appSlug: "{{ appSlug }}"
        serviceDirectoryConfig:
          service: "{{ service }}"
        serverVersion: "{{ serverVersion }}"
        privateKeySecretVersion: "{{ privateKeySecretVersion }}"
        appId: "{{ appId }}"
        webhookSecretSecretVersion: "{{ webhookSecretSecretVersion }}"
        hostUri: "{{ hostUri }}"
        appInstallationId: "{{ appInstallationId }}"
    - name: connectionId
      value: "{{ connectionId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_connections_patch"
    values={[
        { label: 'projects_locations_connections_patch', value: 'projects_locations_connections_patch' }
    ]}
>
<TabItem value="projects_locations_connections_patch">

Updates a single connection.

```sql
UPDATE google.cloudbuild.connections
SET 
data__bitbucketDataCenterConfig = '{{ bitbucketDataCenterConfig }}',
data__bitbucketCloudConfig = '{{ bitbucketCloudConfig }}',
data__annotations = '{{ annotations }}',
data__etag = '{{ etag }}',
data__name = '{{ name }}',
data__githubConfig = '{{ githubConfig }}',
data__gitlabConfig = '{{ gitlabConfig }}',
data__disabled = {{ disabled }},
data__githubEnterpriseConfig = '{{ githubEnterpriseConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionsId = '{{ connectionsId }}' --required
AND etag = '{{ etag}}'
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
    defaultValue="projects_locations_connections_delete"
    values={[
        { label: 'projects_locations_connections_delete', value: 'projects_locations_connections_delete' }
    ]}
>
<TabItem value="projects_locations_connections_delete">

Deletes a single connection.

```sql
DELETE FROM google.cloudbuild.connections
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND connectionsId = '{{ connectionsId }}' --required
AND validateOnly = '{{ validateOnly }}'
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_connections_process_webhook"
    values={[
        { label: 'projects_locations_connections_process_webhook', value: 'projects_locations_connections_process_webhook' }
    ]}
>
<TabItem value="projects_locations_connections_process_webhook">

ProcessWebhook is called by the external SCM for notifying of events.

```sql
EXEC google.cloudbuild.connections.projects_locations_connections_process_webhook 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@webhookKey='{{ webhookKey }}' 
@@json=
'{
"data": "{{ data }}", 
"extensions": "{{ extensions }}", 
"contentType": "{{ contentType }}"
}'
;
```
</TabItem>
</Tabs>
