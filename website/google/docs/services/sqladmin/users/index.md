--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - sqladmin
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.sqladmin.users" /></td></tr>
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
    <td>The name of the user in the Cloud SQL instance. Can be omitted for `update` because it is already specified in the URL.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseRoles" /></td>
    <td><code>array</code></td>
    <td>Optional. Role memberships of the user</td>
</tr>
<tr>
    <td><CopyableCode code="dualPasswordType" /></td>
    <td><code>string</code></td>
    <td>Dual password status for the user. (DUAL_PASSWORD_TYPE_UNSPECIFIED, NO_MODIFY_DUAL_PASSWORD, NO_DUAL_PASSWORD, DUAL_PASSWORD)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This field is deprecated and will be removed from a future version of the API.</td>
</tr>
<tr>
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>Optional. The host from which the user can connect. For `insert` operations, host defaults to an empty string. For `update` operations, host is specified as part of the request URL. The host name cannot be updated after insertion. For a MySQL instance, it's required; for a PostgreSQL or SQL Server instance, it's optional.</td>
</tr>
<tr>
    <td><CopyableCode code="iamEmail" /></td>
    <td><code>string</code></td>
    <td>Optional. The full email for an IAM user. For normal database users, this will not be filled. Only applicable to MySQL database users.</td>
</tr>
<tr>
    <td><CopyableCode code="iamStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates if a group is active or inactive for IAM database authentication. (IAM_STATUS_UNSPECIFIED, INACTIVE, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td>The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for `update` because it is already specified on the URL.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `sql#user`.</td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td>The password for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="passwordPolicy" /></td>
    <td><code>object</code></td>
    <td>User level password validation policy. (id: UserPasswordValidationPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td>The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for `update` because it is already specified on the URL.</td>
</tr>
<tr>
    <td><CopyableCode code="serverRoles" /></td>
    <td><code>array</code></td>
    <td>Optional. The server roles for the SQL Server login.</td>
</tr>
<tr>
    <td><CopyableCode code="sqlserverUserDetails" /></td>
    <td><code>object</code></td>
    <td>Represents a Sql Server user on the Cloud SQL instance. (id: SqlServerUserDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The user type. It determines the method to authenticate the user during login. The default is the database's built-in user type. (BUILT_IN, CLOUD_IAM_USER, CLOUD_IAM_SERVICE_ACCOUNT, CLOUD_IAM_GROUP, CLOUD_IAM_GROUP_USER, CLOUD_IAM_GROUP_SERVICE_ACCOUNT, CLOUD_IAM_WORKFORCE_IDENTITY, ENTRAID_USER)</td>
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
    <td>The name of the user in the Cloud SQL instance. Can be omitted for `update` because it is already specified in the URL.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseRoles" /></td>
    <td><code>array</code></td>
    <td>Optional. Role memberships of the user</td>
</tr>
<tr>
    <td><CopyableCode code="dualPasswordType" /></td>
    <td><code>string</code></td>
    <td>Dual password status for the user. (DUAL_PASSWORD_TYPE_UNSPECIFIED, NO_MODIFY_DUAL_PASSWORD, NO_DUAL_PASSWORD, DUAL_PASSWORD)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This field is deprecated and will be removed from a future version of the API.</td>
</tr>
<tr>
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>Optional. The host from which the user can connect. For `insert` operations, host defaults to an empty string. For `update` operations, host is specified as part of the request URL. The host name cannot be updated after insertion. For a MySQL instance, it's required; for a PostgreSQL or SQL Server instance, it's optional.</td>
</tr>
<tr>
    <td><CopyableCode code="iamEmail" /></td>
    <td><code>string</code></td>
    <td>Optional. The full email for an IAM user. For normal database users, this will not be filled. Only applicable to MySQL database users.</td>
</tr>
<tr>
    <td><CopyableCode code="iamStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates if a group is active or inactive for IAM database authentication. (IAM_STATUS_UNSPECIFIED, INACTIVE, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td>The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for `update` because it is already specified on the URL.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>This is always `sql#user`.</td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td>The password for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="passwordPolicy" /></td>
    <td><code>object</code></td>
    <td>User level password validation policy. (id: UserPasswordValidationPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td>The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for `update` because it is already specified on the URL.</td>
</tr>
<tr>
    <td><CopyableCode code="serverRoles" /></td>
    <td><code>array</code></td>
    <td>Optional. The server roles for the SQL Server login.</td>
</tr>
<tr>
    <td><CopyableCode code="sqlserverUserDetails" /></td>
    <td><code>object</code></td>
    <td>Represents a Sql Server user on the Cloud SQL instance. (id: SqlServerUserDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The user type. It determines the method to authenticate the user during login. The default is the database's built-in user type. (BUILT_IN, CLOUD_IAM_USER, CLOUD_IAM_SERVICE_ACCOUNT, CLOUD_IAM_GROUP, CLOUD_IAM_GROUP_USER, CLOUD_IAM_GROUP_SERVICE_ACCOUNT, CLOUD_IAM_WORKFORCE_IDENTITY, ENTRAID_USER)</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-host"><code>host</code></a></td>
    <td>Retrieves a resource containing information about a user.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Lists users in the specified Cloud SQL instance.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Creates a new user in a Cloud SQL instance.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td><a href="#parameter-databaseRoles"><code>databaseRoles</code></a>, <a href="#parameter-host"><code>host</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-revokeExistingRoles"><code>revokeExistingRoles</code></a>, <a href="#parameter-revokeExistingServerRoles"><code>revokeExistingServerRoles</code></a>, <a href="#parameter-serverRoles"><code>serverRoles</code></a></td>
    <td>Updates an existing user in a Cloud SQL instance.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td><a href="#parameter-host"><code>host</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>Deletes a user from a Cloud SQL instance.</td>
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
<tr id="parameter-instance">
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-databaseRoles">
    <td><CopyableCode code="databaseRoles" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-host">
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-revokeExistingRoles">
    <td><CopyableCode code="revokeExistingRoles" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-revokeExistingServerRoles">
    <td><CopyableCode code="revokeExistingServerRoles" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-serverRoles">
    <td><CopyableCode code="serverRoles" /></td>
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

Retrieves a resource containing information about a user.

```sql
SELECT
name,
databaseRoles,
dualPasswordType,
etag,
host,
iamEmail,
iamStatus,
instance,
kind,
password,
passwordPolicy,
project,
serverRoles,
sqlserverUserDetails,
type
FROM google.sqladmin.users
WHERE project = '{{ project }}' -- required
AND instance = '{{ instance }}' -- required
AND name = '{{ name }}' -- required
AND host = '{{ host }}'
;
```
</TabItem>
<TabItem value="list">

Lists users in the specified Cloud SQL instance.

```sql
SELECT
name,
databaseRoles,
dualPasswordType,
etag,
host,
iamEmail,
iamStatus,
instance,
kind,
password,
passwordPolicy,
project,
serverRoles,
sqlserverUserDetails,
type
FROM google.sqladmin.users
WHERE project = '{{ project }}' -- required
AND instance = '{{ instance }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="insert"
    values={[
        { label: 'insert', value: 'insert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="insert">

Creates a new user in a Cloud SQL instance.

```sql
INSERT INTO google.sqladmin.users (
data__databaseRoles,
data__dualPasswordType,
data__etag,
data__host,
data__iamEmail,
data__iamStatus,
data__instance,
data__kind,
data__name,
data__password,
data__passwordPolicy,
data__project,
data__serverRoles,
data__sqlserverUserDetails,
data__type,
project,
instance
)
SELECT 
'{{ databaseRoles }}',
'{{ dualPasswordType }}',
'{{ etag }}',
'{{ host }}',
'{{ iamEmail }}',
'{{ iamStatus }}',
'{{ instance }}',
'{{ kind }}',
'{{ name }}',
'{{ password }}',
'{{ passwordPolicy }}',
'{{ project }}',
'{{ serverRoles }}',
'{{ sqlserverUserDetails }}',
'{{ type }}',
'{{ project }}',
'{{ instance }}'
RETURNING
name,
acquireSsrsLeaseContext,
apiWarning,
backupContext,
endTime,
error,
exportContext,
importContext,
insertTime,
kind,
operationType,
preCheckMajorVersionUpgradeContext,
selfLink,
startTime,
status,
subOperationType,
targetId,
targetLink,
targetProject,
user
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the users resource.
    - name: instance
      value: "{{ instance }}"
      description: Required parameter for the users resource.
    - name: databaseRoles
      value:
        - "{{ databaseRoles }}"
      description: |
        Optional. Role memberships of the user
    - name: dualPasswordType
      value: "{{ dualPasswordType }}"
      description: |
        Dual password status for the user.
      valid_values: ['DUAL_PASSWORD_TYPE_UNSPECIFIED', 'NO_MODIFY_DUAL_PASSWORD', 'NO_DUAL_PASSWORD', 'DUAL_PASSWORD']
    - name: etag
      value: "{{ etag }}"
      description: |
        This field is deprecated and will be removed from a future version of the API.
    - name: host
      value: "{{ host }}"
      description: |
        Optional. The host from which the user can connect. For \`insert\` operations, host defaults to an empty string. For \`update\` operations, host is specified as part of the request URL. The host name cannot be updated after insertion. For a MySQL instance, it's required; for a PostgreSQL or SQL Server instance, it's optional.
    - name: iamEmail
      value: "{{ iamEmail }}"
      description: |
        Optional. The full email for an IAM user. For normal database users, this will not be filled. Only applicable to MySQL database users.
    - name: iamStatus
      value: "{{ iamStatus }}"
      description: |
        Indicates if a group is active or inactive for IAM database authentication.
      valid_values: ['IAM_STATUS_UNSPECIFIED', 'INACTIVE', 'ACTIVE']
    - name: instance
      value: "{{ instance }}"
      description: |
        The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for \`update\` because it is already specified on the URL.
    - name: kind
      value: "{{ kind }}"
      description: |
        This is always \`sql#user\`.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the user in the Cloud SQL instance. Can be omitted for \`update\` because it is already specified in the URL.
    - name: password
      value: "{{ password }}"
      description: |
        The password for the user.
    - name: passwordPolicy
      description: |
        User level password validation policy.
      value:
        allowedFailedAttempts: {{ allowedFailedAttempts }}
        enableFailedAttemptsCheck: {{ enableFailedAttemptsCheck }}
        enablePasswordVerification: {{ enablePasswordVerification }}
        passwordExpirationDuration: "{{ passwordExpirationDuration }}"
        status:
          locked: {{ locked }}
          passwordExpirationTime: "{{ passwordExpirationTime }}"
    - name: project
      value: "{{ project }}"
      description: |
        The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for \`update\` because it is already specified on the URL.
    - name: serverRoles
      value:
        - "{{ serverRoles }}"
      description: |
        Optional. The server roles for the SQL Server login.
    - name: sqlserverUserDetails
      description: |
        Represents a Sql Server user on the Cloud SQL instance.
      value:
        disabled: {{ disabled }}
        serverRoles:
          - "{{ serverRoles }}"
    - name: type
      value: "{{ type }}"
      description: |
        The user type. It determines the method to authenticate the user during login. The default is the database's built-in user type.
      valid_values: ['BUILT_IN', 'CLOUD_IAM_USER', 'CLOUD_IAM_SERVICE_ACCOUNT', 'CLOUD_IAM_GROUP', 'CLOUD_IAM_GROUP_USER', 'CLOUD_IAM_GROUP_SERVICE_ACCOUNT', 'CLOUD_IAM_WORKFORCE_IDENTITY', 'ENTRAID_USER']
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates an existing user in a Cloud SQL instance.

```sql
REPLACE google.sqladmin.users
SET 
data__databaseRoles = '{{ databaseRoles }}',
data__dualPasswordType = '{{ dualPasswordType }}',
data__etag = '{{ etag }}',
data__host = '{{ host }}',
data__iamEmail = '{{ iamEmail }}',
data__iamStatus = '{{ iamStatus }}',
data__instance = '{{ instance }}',
data__kind = '{{ kind }}',
data__name = '{{ name }}',
data__password = '{{ password }}',
data__passwordPolicy = '{{ passwordPolicy }}',
data__project = '{{ project }}',
data__serverRoles = '{{ serverRoles }}',
data__sqlserverUserDetails = '{{ sqlserverUserDetails }}',
data__type = '{{ type }}'
WHERE 
project = '{{ project }}' --required
AND instance = '{{ instance }}' --required
AND databaseRoles = '{{ databaseRoles}}'
AND host = '{{ host}}'
AND name = '{{ name}}'
AND revokeExistingRoles = {{ revokeExistingRoles}}
AND revokeExistingServerRoles = {{ revokeExistingServerRoles}}
AND serverRoles = '{{ serverRoles}}'
RETURNING
name,
acquireSsrsLeaseContext,
apiWarning,
backupContext,
endTime,
error,
exportContext,
importContext,
insertTime,
kind,
operationType,
preCheckMajorVersionUpgradeContext,
selfLink,
startTime,
status,
subOperationType,
targetId,
targetLink,
targetProject,
user;
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

Deletes a user from a Cloud SQL instance.

```sql
DELETE FROM google.sqladmin.users
WHERE project = '{{ project }}' --required
AND instance = '{{ instance }}' --required
AND host = '{{ host }}'
AND name = '{{ name }}'
;
```
</TabItem>
</Tabs>
