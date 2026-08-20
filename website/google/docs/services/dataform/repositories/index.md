--- 
title: repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - repositories
  - dataform
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

Creates, updates, deletes, gets or lists a <code>repositories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repositories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataform.repositories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'query_directory_contents', value: 'query_directory_contents' },
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
    <td>Identifier. The repository's name.</td>
</tr>
<tr>
    <td><CopyableCode code="containingFolder" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the containing folder of the repository. The field is immutable and it can be modified via a MoveRepository operation. Format: `projects/*/locations/*/folders/*`. or `projects/*/locations/*/teamFolders/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the repository was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataEncryptionState" /></td>
    <td><code>object</code></td>
    <td>Output only. A data encryption state of a Git repository if this Repository is protected by a KMS key. (id: DataEncryptionState)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The repository's user-friendly name.</td>
</tr>
<tr>
    <td><CopyableCode code="gitRemoteSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. If set, configures this repository to be linked to a Git remote. (id: GitRemoteSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="internalMetadata" /></td>
    <td><code>string</code></td>
    <td>Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Optional. The reference to a KMS encryption key. If provided, it will be used to encrypt user data in the repository and all child resources. It is not possible to add or update the encryption key after the repository is created. Example: `projects/&#123;kms_project&#125;/locations/&#123;location&#125;/keyRings/&#123;key_location&#125;/cryptoKeys/&#123;key&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Repository user labels.</td>
</tr>
<tr>
    <td><CopyableCode code="npmrcEnvironmentVariablesSecretVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format `projects/*/secrets/*/versions/*`. The file itself must be in a JSON format.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Optional. The service account to run workflow invocations under.</td>
</tr>
<tr>
    <td><CopyableCode code="setAuthenticatedUserAdmin" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Input only. If set to true, the authenticated user will be granted the roles/dataform.admin role on the created repository.</td>
</tr>
<tr>
    <td><CopyableCode code="teamFolderName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the TeamFolder that this Repository is associated with. This should take the format: projects/&#123;project&#125;/locations/&#123;location&#125;/teamFolders/&#123;teamFolder&#125;. If this is not set, the Repository is not associated with a TeamFolder.</td>
</tr>
<tr>
    <td><CopyableCode code="workspaceCompilationOverrides" /></td>
    <td><code>object</code></td>
    <td>Optional. If set, fields of `workspace_compilation_overrides` override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results. See documentation for `WorkspaceCompilationOverrides` for more information. (id: WorkspaceCompilationOverrides)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="query_directory_contents">

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
    <td><CopyableCode code="directoryEntries" /></td>
    <td><code>array</code></td>
    <td>List of entries in the directory.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.</td>
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
    <td>Identifier. The repository's name.</td>
</tr>
<tr>
    <td><CopyableCode code="containingFolder" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the containing folder of the repository. The field is immutable and it can be modified via a MoveRepository operation. Format: `projects/*/locations/*/folders/*`. or `projects/*/locations/*/teamFolders/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of when the repository was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataEncryptionState" /></td>
    <td><code>object</code></td>
    <td>Output only. A data encryption state of a Git repository if this Repository is protected by a KMS key. (id: DataEncryptionState)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The repository's user-friendly name.</td>
</tr>
<tr>
    <td><CopyableCode code="gitRemoteSettings" /></td>
    <td><code>object</code></td>
    <td>Optional. If set, configures this repository to be linked to a Git remote. (id: GitRemoteSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="internalMetadata" /></td>
    <td><code>string</code></td>
    <td>Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td>Optional. The reference to a KMS encryption key. If provided, it will be used to encrypt user data in the repository and all child resources. It is not possible to add or update the encryption key after the repository is created. Example: `projects/&#123;kms_project&#125;/locations/&#123;location&#125;/keyRings/&#123;key_location&#125;/cryptoKeys/&#123;key&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Repository user labels.</td>
</tr>
<tr>
    <td><CopyableCode code="npmrcEnvironmentVariablesSecretVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format `projects/*/secrets/*/versions/*`. The file itself must be in a JSON format.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>Optional. The service account to run workflow invocations under.</td>
</tr>
<tr>
    <td><CopyableCode code="setAuthenticatedUserAdmin" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Input only. If set to true, the authenticated user will be granted the roles/dataform.admin role on the created repository.</td>
</tr>
<tr>
    <td><CopyableCode code="teamFolderName" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the TeamFolder that this Repository is associated with. This should take the format: projects/&#123;project&#125;/locations/&#123;location&#125;/teamFolders/&#123;teamFolder&#125;. If this is not set, the Repository is not associated with a TeamFolder.</td>
</tr>
<tr>
    <td><CopyableCode code="workspaceCompilationOverrides" /></td>
    <td><code>object</code></td>
    <td>Optional. If set, fields of `workspace_compilation_overrides` override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results. See documentation for `WorkspaceCompilationOverrides` for more information. (id: WorkspaceCompilationOverrides)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td></td>
    <td>Fetches a single Repository.</td>
</tr>
<tr>
    <td><a href="#query_directory_contents"><CopyableCode code="query_directory_contents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-commitSha"><code>commitSha</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td>Returns the contents of a given Repository directory. The Repository must not have a value for `git_remote_settings.url`.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Repositories in a given project and location. **Note:** *This method can return repositories not shown in the [Dataform UI](https://console.cloud.google.com/bigquery/dataform)*.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-repositoryId"><code>repositoryId</code></a></td>
    <td>Creates a new Repository in a given project and location.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a single Repository. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes a single Repository.</td>
</tr>
<tr>
    <td><a href="#commit"><CopyableCode code="commit" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td></td>
    <td>Applies a Git commit to a Repository. The Repository must not have a value for `git_remote_settings.url`.</td>
</tr>
<tr>
    <td><a href="#compute_access_token_status"><CopyableCode code="compute_access_token_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td></td>
    <td>Computes a Repository's Git access token status.</td>
</tr>
<tr>
    <td><a href="#move"><CopyableCode code="move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td></td>
    <td>Moves a Repository to a new location.</td>
</tr>
<tr>
    <td><a href="#read_file"><CopyableCode code="read_file" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-repositoriesId"><code>repositoriesId</code></a></td>
    <td><a href="#parameter-commitSha"><code>commitSha</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td>Returns the contents of a file (inside a Repository). The Repository must not have a value for `git_remote_settings.url`.</td>
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
<tr id="parameter-repositoriesId">
    <td><CopyableCode code="repositoriesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-commitSha">
    <td><CopyableCode code="commitSha" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-path">
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-repositoryId">
    <td><CopyableCode code="repositoryId" /></td>
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
        { label: 'query_directory_contents', value: 'query_directory_contents' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Fetches a single Repository.

```sql
SELECT
name,
containingFolder,
createTime,
dataEncryptionState,
displayName,
gitRemoteSettings,
internalMetadata,
kmsKeyName,
labels,
npmrcEnvironmentVariablesSecretVersion,
serviceAccount,
setAuthenticatedUserAdmin,
teamFolderName,
workspaceCompilationOverrides
FROM google.dataform.repositories
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
;
```
</TabItem>
<TabItem value="query_directory_contents">

Returns the contents of a given Repository directory. The Repository must not have a value for `git_remote_settings.url`.

```sql
SELECT
directoryEntries,
nextPageToken
FROM google.dataform.repositories
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND repositoriesId = '{{ repositoriesId }}' -- required
AND commitSha = '{{ commitSha }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND path = '{{ path }}'
;
```
</TabItem>
<TabItem value="list">

Lists Repositories in a given project and location. **Note:** *This method can return repositories not shown in the [Dataform UI](https://console.cloud.google.com/bigquery/dataform)*.

```sql
SELECT
name,
containingFolder,
createTime,
dataEncryptionState,
displayName,
gitRemoteSettings,
internalMetadata,
kmsKeyName,
labels,
npmrcEnvironmentVariablesSecretVersion,
serviceAccount,
setAuthenticatedUserAdmin,
teamFolderName,
workspaceCompilationOverrides
FROM google.dataform.repositories
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

Creates a new Repository in a given project and location.

```sql
INSERT INTO google.dataform.repositories (
data__containingFolder,
data__displayName,
data__gitRemoteSettings,
data__kmsKeyName,
data__labels,
data__name,
data__npmrcEnvironmentVariablesSecretVersion,
data__serviceAccount,
data__setAuthenticatedUserAdmin,
data__workspaceCompilationOverrides,
projectsId,
locationsId,
repositoryId
)
SELECT 
'{{ containingFolder }}',
'{{ displayName }}',
'{{ gitRemoteSettings }}',
'{{ kmsKeyName }}',
'{{ labels }}',
'{{ name }}',
'{{ npmrcEnvironmentVariablesSecretVersion }}',
'{{ serviceAccount }}',
{{ setAuthenticatedUserAdmin }},
'{{ workspaceCompilationOverrides }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ repositoryId }}'
RETURNING
name,
containingFolder,
createTime,
dataEncryptionState,
displayName,
gitRemoteSettings,
internalMetadata,
kmsKeyName,
labels,
npmrcEnvironmentVariablesSecretVersion,
serviceAccount,
setAuthenticatedUserAdmin,
teamFolderName,
workspaceCompilationOverrides
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: repositories
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the repositories resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the repositories resource.
    - name: containingFolder
      value: "{{ containingFolder }}"
      description: |
        Optional. The name of the containing folder of the repository. The field is immutable and it can be modified via a MoveRepository operation. Format: \`projects/*/locations/*/folders/*\`. or \`projects/*/locations/*/teamFolders/*\`.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. The repository's user-friendly name.
    - name: gitRemoteSettings
      description: |
        Optional. If set, configures this repository to be linked to a Git remote.
      value:
        authenticationTokenSecretVersion: "{{ authenticationTokenSecretVersion }}"
        defaultBranch: "{{ defaultBranch }}"
        effectiveDefaultBranch: "{{ effectiveDefaultBranch }}"
        gitRepositoryLink: "{{ gitRepositoryLink }}"
        sshAuthenticationConfig:
          hostPublicKey: "{{ hostPublicKey }}"
          userPrivateKeySecretVersion: "{{ userPrivateKeySecretVersion }}"
        tokenStatus: "{{ tokenStatus }}"
        url: "{{ url }}"
    - name: kmsKeyName
      value: "{{ kmsKeyName }}"
      description: |
        Optional. The reference to a KMS encryption key. If provided, it will be used to encrypt user data in the repository and all child resources. It is not possible to add or update the encryption key after the repository is created. Example: \`projects/{kms_project}/locations/{location}/keyRings/{key_location}/cryptoKeys/{key}\`
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Repository user labels.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The repository's name.
    - name: npmrcEnvironmentVariablesSecretVersion
      value: "{{ npmrcEnvironmentVariablesSecretVersion }}"
      description: |
        Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format \`projects/*/secrets/*/versions/*\`. The file itself must be in a JSON format.
    - name: serviceAccount
      value: "{{ serviceAccount }}"
      description: |
        Optional. The service account to run workflow invocations under.
    - name: setAuthenticatedUserAdmin
      value: {{ setAuthenticatedUserAdmin }}
      description: |
        Optional. Input only. If set to true, the authenticated user will be granted the roles/dataform.admin role on the created repository.
    - name: workspaceCompilationOverrides
      description: |
        Optional. If set, fields of \`workspace_compilation_overrides\` override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results. See documentation for \`WorkspaceCompilationOverrides\` for more information.
      value:
        defaultDatabase: "{{ defaultDatabase }}"
        schemaSuffix: "{{ schemaSuffix }}"
        tablePrefix: "{{ tablePrefix }}"
    - name: repositoryId
      value: "{{ repositoryId }}"
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

Updates a single Repository. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*

```sql
UPDATE google.dataform.repositories
SET 
data__containingFolder = '{{ containingFolder }}',
data__displayName = '{{ displayName }}',
data__gitRemoteSettings = '{{ gitRemoteSettings }}',
data__kmsKeyName = '{{ kmsKeyName }}',
data__labels = '{{ labels }}',
data__name = '{{ name }}',
data__npmrcEnvironmentVariablesSecretVersion = '{{ npmrcEnvironmentVariablesSecretVersion }}',
data__serviceAccount = '{{ serviceAccount }}',
data__setAuthenticatedUserAdmin = {{ setAuthenticatedUserAdmin }},
data__workspaceCompilationOverrides = '{{ workspaceCompilationOverrides }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND repositoriesId = '{{ repositoriesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
containingFolder,
createTime,
dataEncryptionState,
displayName,
gitRemoteSettings,
internalMetadata,
kmsKeyName,
labels,
npmrcEnvironmentVariablesSecretVersion,
serviceAccount,
setAuthenticatedUserAdmin,
teamFolderName,
workspaceCompilationOverrides;
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

Deletes a single Repository.

```sql
DELETE FROM google.dataform.repositories
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND repositoriesId = '{{ repositoriesId }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="commit"
    values={[
        { label: 'commit', value: 'commit' },
        { label: 'compute_access_token_status', value: 'compute_access_token_status' },
        { label: 'move', value: 'move' },
        { label: 'read_file', value: 'read_file' }
    ]}
>
<TabItem value="commit">

Applies a Git commit to a Repository. The Repository must not have a value for `git_remote_settings.url`.

```sql
EXEC google.dataform.repositories.commit 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required 
@@json=
'{
"commitMetadata": "{{ commitMetadata }}", 
"fileOperations": "{{ fileOperations }}", 
"requiredHeadCommitSha": "{{ requiredHeadCommitSha }}"
}'
;
```
</TabItem>
<TabItem value="compute_access_token_status">

Computes a Repository's Git access token status.

```sql
EXEC google.dataform.repositories.compute_access_token_status 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required
;
```
</TabItem>
<TabItem value="move">

Moves a Repository to a new location.

```sql
EXEC google.dataform.repositories.move 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required 
@@json=
'{
"destinationContainingFolder": "{{ destinationContainingFolder }}"
}'
;
```
</TabItem>
<TabItem value="read_file">

Returns the contents of a file (inside a Repository). The Repository must not have a value for `git_remote_settings.url`.

```sql
EXEC google.dataform.repositories.read_file 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@repositoriesId='{{ repositoriesId }}' --required, 
@commitSha='{{ commitSha }}', 
@path='{{ path }}'
;
```
</TabItem>
</Tabs>
