--- 
title: secrets
hide_title: false
hide_table_of_contents: false
keywords:
  - secrets
  - secretmanager
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

Creates, updates, deletes, gets or lists a <code>secrets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="secrets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.secretmanager.secrets" /></td></tr>
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
    <td>Output only. The resource name of the Secret in the format `projects/*/secrets/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Custom metadata about the secret. Annotations are distinct from various forms of labels. Annotations exist to allow client tools to store their own state information without requiring a database. Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and may have dashes (-), underscores (_), dots (.), and alphanumerics in between these symbols. The total size of annotation keys and values must be less than 16KiB.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the Secret was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customerManagedEncryption" /></td>
    <td><code>object</code></td>
    <td>Optional. The customer-managed encryption configuration of the regionalized secrets. If no configuration is provided, Google-managed default encryption is used. Updates to the Secret encryption configuration only apply to SecretVersions added afterwards. They do not apply retroactively to existing SecretVersions. (id: CustomerManagedEncryption)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Etag of the currently stored Secret.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Timestamp in UTC when the Secret is scheduled to expire. This is always provided on output, regardless of what was sent on input.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels assigned to this Secret. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: `\p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125;` Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: `[\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125;` No more than 64 labels can be assigned to a given resource.</td>
</tr>
<tr>
    <td><CopyableCode code="policyMember" /></td>
    <td><code>object</code></td>
    <td>Output only. Defines the policy member for the secret. This will be used to check if the caller has the permission to perform certain operations on the typed secret. (id: ResourcePolicyMember)</td>
</tr>
<tr>
    <td><CopyableCode code="replication" /></td>
    <td><code>object</code></td>
    <td>Optional. Immutable. The replication policy of the secret data attached to the Secret. The replication policy cannot be changed after the Secret has been created. (id: Replication)</td>
</tr>
<tr>
    <td><CopyableCode code="rotation" /></td>
    <td><code>object</code></td>
    <td>Optional. Rotation policy attached to the Secret. May be excluded if there is no rotation policy. (id: Rotation)</td>
</tr>
<tr>
    <td><CopyableCode code="secretType" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. This defines the type of the secret. Enforces certain structural requirements on the SecretVersions. For secret of type UNSPECIFIED, the SecretVersions can be of any type. (SECRET_TYPE_UNSPECIFIED, CLOUD_SQL_DB_CREDENTIALS, ACCESS_KEY, CERTIFICATE, OTHER_DB_CREDENTIALS, OTHER)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Mapping of Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing" Tags are used to organize and group resources. Tags can be used to control policy evaluation for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="topics" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of up to 10 Pub/Sub topics to which messages are published when control plane operations are called on the secret or its versions.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Input only. The TTL for the Secret.</td>
</tr>
<tr>
    <td><CopyableCode code="versionAliases" /></td>
    <td><code>object</code></td>
    <td>Optional. Mapping from version alias to version name. A version alias is a string with a maximum length of 63 characters and can contain uppercase and lowercase letters, numerals, and the hyphen (`-`) and underscore ('_') characters. An alias string must start with a letter and cannot be the string 'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret. Version-Alias pairs will be viewable via GetSecret and modifiable via UpdateSecret. Access by alias is only be supported on GetSecretVersion and AccessSecretVersion.</td>
</tr>
<tr>
    <td><CopyableCode code="versionDestroyTtl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Secret Version TTL after destruction request This is a part of the Delayed secret version destroy feature. For secret with TTL&gt;0, version destruction doesn't happen immediately on calling destroy instead the version goes to a disabled state and destruction happens after the TTL expires.</td>
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
    <td>Output only. The resource name of the Secret in the format `projects/*/secrets/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Optional. Custom metadata about the secret. Annotations are distinct from various forms of labels. Annotations exist to allow client tools to store their own state information without requiring a database. Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and may have dashes (-), underscores (_), dots (.), and alphanumerics in between these symbols. The total size of annotation keys and values must be less than 16KiB.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the Secret was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customerManagedEncryption" /></td>
    <td><code>object</code></td>
    <td>Optional. The customer-managed encryption configuration of the regionalized secrets. If no configuration is provided, Google-managed default encryption is used. Updates to the Secret encryption configuration only apply to SecretVersions added afterwards. They do not apply retroactively to existing SecretVersions. (id: CustomerManagedEncryption)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>Optional. Etag of the currently stored Secret.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Optional. Timestamp in UTC when the Secret is scheduled to expire. This is always provided on output, regardless of what was sent on input.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels assigned to this Secret. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: `\p&#123;Ll&#125;\p&#123;Lo&#125;&#123;0,62&#125;` Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: `[\p&#123;Ll&#125;\p&#123;Lo&#125;\p&#123;N&#125;_-]&#123;0,63&#125;` No more than 64 labels can be assigned to a given resource.</td>
</tr>
<tr>
    <td><CopyableCode code="policyMember" /></td>
    <td><code>object</code></td>
    <td>Output only. Defines the policy member for the secret. This will be used to check if the caller has the permission to perform certain operations on the typed secret. (id: ResourcePolicyMember)</td>
</tr>
<tr>
    <td><CopyableCode code="replication" /></td>
    <td><code>object</code></td>
    <td>Optional. Immutable. The replication policy of the secret data attached to the Secret. The replication policy cannot be changed after the Secret has been created. (id: Replication)</td>
</tr>
<tr>
    <td><CopyableCode code="rotation" /></td>
    <td><code>object</code></td>
    <td>Optional. Rotation policy attached to the Secret. May be excluded if there is no rotation policy. (id: Rotation)</td>
</tr>
<tr>
    <td><CopyableCode code="secretType" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. This defines the type of the secret. Enforces certain structural requirements on the SecretVersions. For secret of type UNSPECIFIED, the SecretVersions can be of any type. (SECRET_TYPE_UNSPECIFIED, CLOUD_SQL_DB_CREDENTIALS, ACCESS_KEY, CERTIFICATE, OTHER_DB_CREDENTIALS, OTHER)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Optional. Input only. Immutable. Mapping of Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing" Tags are used to organize and group resources. Tags can be used to control policy evaluation for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="topics" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of up to 10 Pub/Sub topics to which messages are published when control plane operations are called on the secret or its versions.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Input only. The TTL for the Secret.</td>
</tr>
<tr>
    <td><CopyableCode code="versionAliases" /></td>
    <td><code>object</code></td>
    <td>Optional. Mapping from version alias to version name. A version alias is a string with a maximum length of 63 characters and can contain uppercase and lowercase letters, numerals, and the hyphen (`-`) and underscore ('_') characters. An alias string must start with a letter and cannot be the string 'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret. Version-Alias pairs will be viewable via GetSecret and modifiable via UpdateSecret. Access by alias is only be supported on GetSecretVersion and AccessSecretVersion.</td>
</tr>
<tr>
    <td><CopyableCode code="versionDestroyTtl" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. Secret Version TTL after destruction request This is a part of the Delayed secret version destroy feature. For secret with TTL&gt;0, version destruction doesn't happen immediately on calling destroy instead the version goes to a disabled state and destruction happens after the TTL expires.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-secretsId"><code>secretsId</code></a></td>
    <td></td>
    <td>Gets metadata for a given Secret.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists Secrets.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-secretId"><code>secretId</code></a></td>
    <td>Creates a new Secret containing no SecretVersions.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-secretsId"><code>secretsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates metadata of an existing Secret.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-secretsId"><code>secretsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a></td>
    <td>Deletes a Secret.</td>
</tr>
<tr>
    <td><a href="#enable_managed_rotation"><CopyableCode code="enable_managed_rotation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-secretsId"><code>secretsId</code></a></td>
    <td></td>
    <td>Enables the managed rotation feature for a Secret. This method can only be triggered once for a secret. In order to do further rotations, RotateSecret should be used. This method will add a secret version and update the password in Cloud SQL.</td>
</tr>
<tr>
    <td><a href="#rotate_secret"><CopyableCode code="rotate_secret" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-secretsId"><code>secretsId</code></a></td>
    <td></td>
    <td>Do a managed rotation for a Secret. This can only be triggered after Managed rotation has been enabled. This method will add a secret version and update the password in Cloud SQL.</td>
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
<tr id="parameter-secretsId">
    <td><CopyableCode code="secretsId" /></td>
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
<tr id="parameter-secretId">
    <td><CopyableCode code="secretId" /></td>
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

Gets metadata for a given Secret.

```sql
SELECT
name,
annotations,
createTime,
customerManagedEncryption,
etag,
expireTime,
labels,
policyMember,
replication,
rotation,
secretType,
tags,
topics,
ttl,
versionAliases,
versionDestroyTtl
FROM google.secretmanager.secrets
WHERE projectsId = '{{ projectsId }}' -- required
AND secretsId = '{{ secretsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Secrets.

```sql
SELECT
name,
annotations,
createTime,
customerManagedEncryption,
etag,
expireTime,
labels,
policyMember,
replication,
rotation,
secretType,
tags,
topics,
ttl,
versionAliases,
versionDestroyTtl
FROM google.secretmanager.secrets
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}'
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

Creates a new Secret containing no SecretVersions.

```sql
INSERT INTO google.secretmanager.secrets (
data__labels,
data__tags,
data__etag,
data__annotations,
data__customerManagedEncryption,
data__versionAliases,
data__versionDestroyTtl,
data__secretType,
data__expireTime,
data__topics,
data__ttl,
data__replication,
data__rotation,
projectsId,
secretId
)
SELECT 
'{{ labels }}',
'{{ tags }}',
'{{ etag }}',
'{{ annotations }}',
'{{ customerManagedEncryption }}',
'{{ versionAliases }}',
'{{ versionDestroyTtl }}',
'{{ secretType }}',
'{{ expireTime }}',
'{{ topics }}',
'{{ ttl }}',
'{{ replication }}',
'{{ rotation }}',
'{{ projectsId }}',
'{{ secretId }}'
RETURNING
name,
annotations,
createTime,
customerManagedEncryption,
etag,
expireTime,
labels,
policyMember,
replication,
rotation,
secretType,
tags,
topics,
ttl,
versionAliases,
versionDestroyTtl
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: secrets
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the secrets resource.
    - name: labels
      value: "{{ labels }}"
      description: |
        The labels assigned to this Secret. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \`p{Ll}p{Lo}{0,62}\` Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \`[p{Ll}p{Lo}p{N}_-]{0,63}\` No more than 64 labels can be assigned to a given resource.
    - name: tags
      value: "{{ tags }}"
      description: |
        Optional. Input only. Immutable. Mapping of Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing" Tags are used to organize and group resources. Tags can be used to control policy evaluation for the resource.
    - name: etag
      value: "{{ etag }}"
      description: |
        Optional. Etag of the currently stored Secret.
    - name: annotations
      value: "{{ annotations }}"
      description: |
        Optional. Custom metadata about the secret. Annotations are distinct from various forms of labels. Annotations exist to allow client tools to store their own state information without requiring a database. Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and may have dashes (-), underscores (_), dots (.), and alphanumerics in between these symbols. The total size of annotation keys and values must be less than 16KiB.
    - name: customerManagedEncryption
      description: |
        Optional. The customer-managed encryption configuration of the regionalized secrets. If no configuration is provided, Google-managed default encryption is used. Updates to the Secret encryption configuration only apply to SecretVersions added afterwards. They do not apply retroactively to existing SecretVersions.
      value:
        kmsKeyName: "{{ kmsKeyName }}"
    - name: versionAliases
      value: "{{ versionAliases }}"
      description: |
        Optional. Mapping from version alias to version name. A version alias is a string with a maximum length of 63 characters and can contain uppercase and lowercase letters, numerals, and the hyphen (\`-\`) and underscore ('_') characters. An alias string must start with a letter and cannot be the string 'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret. Version-Alias pairs will be viewable via GetSecret and modifiable via UpdateSecret. Access by alias is only be supported on GetSecretVersion and AccessSecretVersion.
    - name: versionDestroyTtl
      value: "{{ versionDestroyTtl }}"
      description: |
        Optional. Secret Version TTL after destruction request This is a part of the Delayed secret version destroy feature. For secret with TTL>0, version destruction doesn't happen immediately on calling destroy instead the version goes to a disabled state and destruction happens after the TTL expires.
    - name: secretType
      value: "{{ secretType }}"
      description: |
        Optional. Immutable. This defines the type of the secret. Enforces certain structural requirements on the SecretVersions. For secret of type UNSPECIFIED, the SecretVersions can be of any type.
      valid_values: ['SECRET_TYPE_UNSPECIFIED', 'CLOUD_SQL_DB_CREDENTIALS', 'ACCESS_KEY', 'CERTIFICATE', 'OTHER_DB_CREDENTIALS', 'OTHER']
    - name: expireTime
      value: "{{ expireTime }}"
      description: |
        Optional. Timestamp in UTC when the Secret is scheduled to expire. This is always provided on output, regardless of what was sent on input.
    - name: topics
      description: |
        Optional. A list of up to 10 Pub/Sub topics to which messages are published when control plane operations are called on the secret or its versions.
      value:
        - name: "{{ name }}"
    - name: ttl
      value: "{{ ttl }}"
      description: |
        Input only. The TTL for the Secret.
    - name: replication
      description: |
        Optional. Immutable. The replication policy of the secret data attached to the Secret. The replication policy cannot be changed after the Secret has been created.
      value:
        automatic:
          customerManagedEncryption:
            kmsKeyName: "{{ kmsKeyName }}"
        userManaged:
          replicas:
            - location: "{{ location }}"
              customerManagedEncryption:
                kmsKeyName: "{{ kmsKeyName }}"
    - name: rotation
      description: |
        Optional. Rotation policy attached to the Secret. May be excluded if there is no rotation policy.
      value:
        nextRotationTime: "{{ nextRotationTime }}"
        managedRotationStatus:
          state: "{{ state }}"
          error:
            details: "{{ details }}"
            code: {{ code }}
            message: "{{ message }}"
        rotationPeriod: "{{ rotationPeriod }}"
    - name: secretId
      value: "{{ secretId }}"
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

Updates metadata of an existing Secret.

```sql
UPDATE google.secretmanager.secrets
SET 
data__labels = '{{ labels }}',
data__tags = '{{ tags }}',
data__etag = '{{ etag }}',
data__annotations = '{{ annotations }}',
data__customerManagedEncryption = '{{ customerManagedEncryption }}',
data__versionAliases = '{{ versionAliases }}',
data__versionDestroyTtl = '{{ versionDestroyTtl }}',
data__secretType = '{{ secretType }}',
data__expireTime = '{{ expireTime }}',
data__topics = '{{ topics }}',
data__ttl = '{{ ttl }}',
data__replication = '{{ replication }}',
data__rotation = '{{ rotation }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND secretsId = '{{ secretsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
annotations,
createTime,
customerManagedEncryption,
etag,
expireTime,
labels,
policyMember,
replication,
rotation,
secretType,
tags,
topics,
ttl,
versionAliases,
versionDestroyTtl;
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

Deletes a Secret.

```sql
DELETE FROM google.secretmanager.secrets
WHERE projectsId = '{{ projectsId }}' --required
AND secretsId = '{{ secretsId }}' --required
AND etag = '{{ etag }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="enable_managed_rotation"
    values={[
        { label: 'enable_managed_rotation', value: 'enable_managed_rotation' },
        { label: 'rotate_secret', value: 'rotate_secret' }
    ]}
>
<TabItem value="enable_managed_rotation">

Enables the managed rotation feature for a Secret. This method can only be triggered once for a secret. In order to do further rotations, RotateSecret should be used. This method will add a secret version and update the password in Cloud SQL.

```sql
EXEC google.secretmanager.secrets.enable_managed_rotation 
@projectsId='{{ projectsId }}' --required, 
@secretsId='{{ secretsId }}' --required 
@@json=
'{
"cloudSqlSingleUserCredentials": "{{ cloudSqlSingleUserCredentials }}"
}'
;
```
</TabItem>
<TabItem value="rotate_secret">

Do a managed rotation for a Secret. This can only be triggered after Managed rotation has been enabled. This method will add a secret version and update the password in Cloud SQL.

```sql
EXEC google.secretmanager.secrets.rotate_secret 
@projectsId='{{ projectsId }}' --required, 
@secretsId='{{ secretsId }}' --required
;
```
</TabItem>
</Tabs>
