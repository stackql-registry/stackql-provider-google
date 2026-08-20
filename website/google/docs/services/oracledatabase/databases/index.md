--- 
title: databases
hide_title: false
hide_table_of_contents: false
keywords:
  - databases
  - oracledatabase
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

Creates, updates, deletes, gets or lists a <code>databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.oracledatabase.databases" /></td></tr>
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
    <td>Identifier. The name of the Database resource in the following format: projects/&#123;project&#125;/locations/&#123;region&#125;/databases/&#123;database&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="adminPassword" /></td>
    <td><code>string</code></td>
    <td>Optional. The password for the default ADMIN user. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="adminPasswordSecretVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of a secret version in Secret Manager which contains the database admin user's password. Format: projects/&#123;project&#125;/secrets/&#123;secret&#125;/versions/&#123;version&#125;. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="characterSet" /></td>
    <td><code>string</code></td>
    <td>Optional. The character set for the database. The default is AL32UTF8.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The date and time that the Database was created.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseId" /></td>
    <td><code>string</code></td>
    <td>Optional. The database ID of the Database.</td>
</tr>
<tr>
    <td><CopyableCode code="dbHomeName" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the DbHome resource associated with the Database.</td>
</tr>
<tr>
    <td><CopyableCode code="dbName" /></td>
    <td><code>string</code></td>
    <td>Optional. The database name. The name must begin with an alphabetic character and can contain a maximum of eight alphanumeric characters. Special characters are not permitted.</td>
</tr>
<tr>
    <td><CopyableCode code="dbUniqueName" /></td>
    <td><code>string</code></td>
    <td>Optional. The DB_UNIQUE_NAME of the Oracle Database being backed up.</td>
</tr>
<tr>
    <td><CopyableCode code="gcpOracleZone" /></td>
    <td><code>string</code></td>
    <td>Output only. The GCP Oracle zone where the Database is created.</td>
</tr>
<tr>
    <td><CopyableCode code="ncharacterSet" /></td>
    <td><code>string</code></td>
    <td>Optional. The national character set for the database. The default is AL16UTF16.</td>
</tr>
<tr>
    <td><CopyableCode code="ociUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. HTTPS link to OCI resources exposed to Customer via UI Interface.</td>
</tr>
<tr>
    <td><CopyableCode code="opsInsightsStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. The Status of Operations Insights for this Database. (OPERATIONS_INSIGHTS_STATUS_UNSPECIFIED, ENABLING, ENABLED, DISABLING, NOT_ENABLED, FAILED_ENABLING, FAILED_DISABLING)</td>
</tr>
<tr>
    <td><CopyableCode code="pluggableDatabaseId" /></td>
    <td><code>string</code></td>
    <td>Optional. The ID of the pluggable database associated with the Database. The ID must be unique within the project and location.</td>
</tr>
<tr>
    <td><CopyableCode code="pluggableDatabaseName" /></td>
    <td><code>string</code></td>
    <td>Optional. The pluggable database associated with the Database. The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Optional. The properties of the Database. (id: DatabaseProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="tdeWalletPassword" /></td>
    <td><code>string</code></td>
    <td>Optional. The TDE wallet password for the database. Note: Only one of `tde_wallet_password_secret_version` or `tde_wallet_password` can be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="tdeWalletPasswordSecretVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of a secret version in Secret Manager which contains the TDE wallet password for the database. Format: projects/&#123;project&#125;/secrets/&#123;secret&#125;/versions/&#123;version&#125;. Note: Only one of `tde_wallet_password_secret_version` or `tde_wallet_password` can be populated.</td>
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
    <td>Identifier. The name of the Database resource in the following format: projects/&#123;project&#125;/locations/&#123;region&#125;/databases/&#123;database&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="adminPassword" /></td>
    <td><code>string</code></td>
    <td>Optional. The password for the default ADMIN user. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="adminPasswordSecretVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of a secret version in Secret Manager which contains the database admin user's password. Format: projects/&#123;project&#125;/secrets/&#123;secret&#125;/versions/&#123;version&#125;. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="characterSet" /></td>
    <td><code>string</code></td>
    <td>Optional. The character set for the database. The default is AL32UTF8.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The date and time that the Database was created.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseId" /></td>
    <td><code>string</code></td>
    <td>Optional. The database ID of the Database.</td>
</tr>
<tr>
    <td><CopyableCode code="dbHomeName" /></td>
    <td><code>string</code></td>
    <td>Optional. The name of the DbHome resource associated with the Database.</td>
</tr>
<tr>
    <td><CopyableCode code="dbName" /></td>
    <td><code>string</code></td>
    <td>Optional. The database name. The name must begin with an alphabetic character and can contain a maximum of eight alphanumeric characters. Special characters are not permitted.</td>
</tr>
<tr>
    <td><CopyableCode code="dbUniqueName" /></td>
    <td><code>string</code></td>
    <td>Optional. The DB_UNIQUE_NAME of the Oracle Database being backed up.</td>
</tr>
<tr>
    <td><CopyableCode code="gcpOracleZone" /></td>
    <td><code>string</code></td>
    <td>Output only. The GCP Oracle zone where the Database is created.</td>
</tr>
<tr>
    <td><CopyableCode code="ncharacterSet" /></td>
    <td><code>string</code></td>
    <td>Optional. The national character set for the database. The default is AL16UTF16.</td>
</tr>
<tr>
    <td><CopyableCode code="ociUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. HTTPS link to OCI resources exposed to Customer via UI Interface.</td>
</tr>
<tr>
    <td><CopyableCode code="opsInsightsStatus" /></td>
    <td><code>string</code></td>
    <td>Output only. The Status of Operations Insights for this Database. (OPERATIONS_INSIGHTS_STATUS_UNSPECIFIED, ENABLING, ENABLED, DISABLING, NOT_ENABLED, FAILED_ENABLING, FAILED_DISABLING)</td>
</tr>
<tr>
    <td><CopyableCode code="pluggableDatabaseId" /></td>
    <td><code>string</code></td>
    <td>Optional. The ID of the pluggable database associated with the Database. The ID must be unique within the project and location.</td>
</tr>
<tr>
    <td><CopyableCode code="pluggableDatabaseName" /></td>
    <td><code>string</code></td>
    <td>Optional. The pluggable database associated with the Database. The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>Optional. The properties of the Database. (id: DatabaseProperties)</td>
</tr>
<tr>
    <td><CopyableCode code="tdeWalletPassword" /></td>
    <td><code>string</code></td>
    <td>Optional. The TDE wallet password for the database. Note: Only one of `tde_wallet_password_secret_version` or `tde_wallet_password` can be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="tdeWalletPasswordSecretVersion" /></td>
    <td><code>string</code></td>
    <td>Optional. The resource name of a secret version in Secret Manager which contains the TDE wallet password for the database. Format: projects/&#123;project&#125;/secrets/&#123;secret&#125;/versions/&#123;version&#125;. Note: Only one of `tde_wallet_password_secret_version` or `tde_wallet_password` can be populated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-databasesId"><code>databasesId</code></a></td>
    <td></td>
    <td>Gets details of a single Database.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists all the Databases for the given project, location and DbSystem.</td>
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
<tr id="parameter-databasesId">
    <td><CopyableCode code="databasesId" /></td>
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

Gets details of a single Database.

```sql
SELECT
name,
adminPassword,
adminPasswordSecretVersion,
characterSet,
createTime,
databaseId,
dbHomeName,
dbName,
dbUniqueName,
gcpOracleZone,
ncharacterSet,
ociUrl,
opsInsightsStatus,
pluggableDatabaseId,
pluggableDatabaseName,
properties,
tdeWalletPassword,
tdeWalletPasswordSecretVersion
FROM google.oracledatabase.databases
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND databasesId = '{{ databasesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all the Databases for the given project, location and DbSystem.

```sql
SELECT
name,
adminPassword,
adminPasswordSecretVersion,
characterSet,
createTime,
databaseId,
dbHomeName,
dbName,
dbUniqueName,
gcpOracleZone,
ncharacterSet,
ociUrl,
opsInsightsStatus,
pluggableDatabaseId,
pluggableDatabaseName,
properties,
tdeWalletPassword,
tdeWalletPasswordSecretVersion
FROM google.oracledatabase.databases
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>
