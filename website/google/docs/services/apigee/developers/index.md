--- 
title: developers
hide_title: false
hide_table_of_contents: false
keywords:
  - developers
  - apigee
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

Creates, updates, deletes, gets or lists a <code>developers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="developers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.apigee.developers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_developers_get"
    values={[
        { label: 'organizations_developers_get', value: 'organizations_developers_get' },
        { label: 'organizations_developers_list', value: 'organizations_developers_list' }
    ]}
>
<TabItem value="organizations_developers_get">

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
    <td><CopyableCode code="accessType" /></td>
    <td><code>string</code></td>
    <td>Access type.</td>
</tr>
<tr>
    <td><CopyableCode code="appFamily" /></td>
    <td><code>string</code></td>
    <td>Developer app family.</td>
</tr>
<tr>
    <td><CopyableCode code="apps" /></td>
    <td><code>array</code></td>
    <td>List of apps associated with the developer.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>array</code></td>
    <td>Optional. Developer attributes (name/value pairs). The custom attribute limit is 18.</td>
</tr>
<tr>
    <td><CopyableCode code="companies" /></td>
    <td><code>array</code></td>
    <td>List of companies associated with the developer.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time at which the developer was created in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="developerId" /></td>
    <td><code>string</code></td>
    <td>ID of the developer. **Note**: IDs are generated internally by Apigee and are not guaranteed to stay the same over time.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Required. Email address of the developer. This value is used to uniquely identify the developer in Apigee hybrid. Note that the email address has to be in lowercase only.</td>
</tr>
<tr>
    <td><CopyableCode code="firstName" /></td>
    <td><code>string</code></td>
    <td>Required. First name of the developer.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Time at which the developer was last modified in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="lastName" /></td>
    <td><code>string</code></td>
    <td>Required. Last name of the developer.</td>
</tr>
<tr>
    <td><CopyableCode code="organizationName" /></td>
    <td><code>string</code></td>
    <td>Output only. Name of the Apigee organization in which the developer resides.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. Status of the developer. Valid values are `active` and `inactive`.</td>
</tr>
<tr>
    <td><CopyableCode code="userName" /></td>
    <td><code>string</code></td>
    <td>Required. User name of the developer. Not used by Apigee hybrid.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_developers_list">

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
    <td><CopyableCode code="developer" /></td>
    <td><code>array</code></td>
    <td>List of developers.</td>
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
    <td><a href="#organizations_developers_get"><CopyableCode code="organizations_developers_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a></td>
    <td><a href="#parameter-action"><code>action</code></a></td>
    <td>Returns the developer details, including the developer's name, email address, apps, and other information. **Note**: The response includes only the first 100 developer apps.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_list"><CopyableCode code="organizations_developers_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td><a href="#parameter-ids"><code>ids</code></a>, <a href="#parameter-expand"><code>expand</code></a>, <a href="#parameter-count"><code>count</code></a>, <a href="#parameter-startKey"><code>startKey</code></a>, <a href="#parameter-app"><code>app</code></a>, <a href="#parameter-includeCompany"><code>includeCompany</code></a></td>
    <td>Lists all developers in an organization by email address. By default, the response does not include company developers. Set the `includeCompany` query parameter to `true` to include company developers. **Note**: A maximum of 1000 developers are returned in the response. You paginate the list of developers returned using the `startKey` and `count` query parameters.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_create"><CopyableCode code="organizations_developers_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td>Creates a developer. Once created, the developer can register an app and obtain an API key. At creation time, a developer is set as `active`. To change the developer status, use the SetDeveloperStatus API.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_update"><CopyableCode code="organizations_developers_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a></td>
    <td></td>
    <td>Updates a developer. This API replaces the existing developer details with those specified in the request. Include or exclude any existing details that you want to retain or delete, respectively. The custom attribute limit is 18. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds. **Note:** We recommend that you avoid making concurrent update requests for the same resource. Near-simultaneous writes to the same entity can result in conflicts and unexpected behavior. Ensure operations are sequential when modifying a single resource.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_delete"><CopyableCode code="organizations_developers_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a></td>
    <td></td>
    <td>Deletes a developer. All apps and API keys associated with the developer are also removed. **Warning**: This API will permanently delete the developer and related artifacts. To avoid permanently deleting developers and their artifacts, set the developer status to `inactive` using the SetDeveloperStatus API. **Note**: The delete operation is asynchronous. The developer is deleted immediately, but its associated resources, such as apps and API keys, may take anywhere from a few seconds to a few minutes to be deleted.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_attributes"><CopyableCode code="organizations_developers_attributes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a></td>
    <td></td>
    <td>Updates developer attributes. This API replaces the existing attributes with those specified in the request. Add new attributes, and include or exclude any existing attributes that you want to retain or remove, respectively. The custom attribute limit is 18. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.</td>
</tr>
<tr>
    <td><a href="#organizations_developers_set_developer_status"><CopyableCode code="organizations_developers_set_developer_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-developersId"><code>developersId</code></a></td>
    <td><a href="#parameter-action"><code>action</code></a></td>
    <td>Sets the status of a developer. A developer is `active` by default. If you set a developer's status to `inactive`, the API keys assigned to the developer apps are no longer valid even though the API keys are set to `approved`. Inactive developers can still sign in to the developer portal and create apps; however, any new API keys generated during app creation won't work. To set the status of a developer, set the `action` query parameter to `active` or `inactive`, and the `Content-Type` header to `application/octet-stream`. If successful, the API call returns the following HTTP status code: `204 No Content`</td>
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
<tr id="parameter-developersId">
    <td><CopyableCode code="developersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-action">
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-app">
    <td><CopyableCode code="app" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-count">
    <td><CopyableCode code="count" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-expand">
    <td><CopyableCode code="expand" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-ids">
    <td><CopyableCode code="ids" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeCompany">
    <td><CopyableCode code="includeCompany" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-startKey">
    <td><CopyableCode code="startKey" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="organizations_developers_get"
    values={[
        { label: 'organizations_developers_get', value: 'organizations_developers_get' },
        { label: 'organizations_developers_list', value: 'organizations_developers_list' }
    ]}
>
<TabItem value="organizations_developers_get">

Returns the developer details, including the developer's name, email address, apps, and other information. **Note**: The response includes only the first 100 developer apps.

```sql
SELECT
accessType,
appFamily,
apps,
attributes,
companies,
createdAt,
developerId,
email,
firstName,
lastModifiedAt,
lastName,
organizationName,
status,
userName
FROM google.apigee.developers
WHERE organizationsId = '{{ organizationsId }}' -- required
AND developersId = '{{ developersId }}' -- required
AND action = '{{ action }}'
;
```
</TabItem>
<TabItem value="organizations_developers_list">

Lists all developers in an organization by email address. By default, the response does not include company developers. Set the `includeCompany` query parameter to `true` to include company developers. **Note**: A maximum of 1000 developers are returned in the response. You paginate the list of developers returned using the `startKey` and `count` query parameters.

```sql
SELECT
developer
FROM google.apigee.developers
WHERE organizationsId = '{{ organizationsId }}' -- required
AND ids = '{{ ids }}'
AND expand = '{{ expand }}'
AND count = '{{ count }}'
AND startKey = '{{ startKey }}'
AND app = '{{ app }}'
AND includeCompany = '{{ includeCompany }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_developers_create"
    values={[
        { label: 'organizations_developers_create', value: 'organizations_developers_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_developers_create">

Creates a developer. Once created, the developer can register an app and obtain an API key. At creation time, a developer is set as `active`. To change the developer status, use the SetDeveloperStatus API.

```sql
INSERT INTO google.apigee.developers (
data__appFamily,
data__accessType,
data__developerId,
data__firstName,
data__userName,
data__lastName,
data__attributes,
data__email,
data__companies,
data__apps,
organizationsId
)
SELECT 
'{{ appFamily }}',
'{{ accessType }}',
'{{ developerId }}',
'{{ firstName }}',
'{{ userName }}',
'{{ lastName }}',
'{{ attributes }}',
'{{ email }}',
'{{ companies }}',
'{{ apps }}',
'{{ organizationsId }}'
RETURNING
accessType,
appFamily,
apps,
attributes,
companies,
createdAt,
developerId,
email,
firstName,
lastModifiedAt,
lastName,
organizationName,
status,
userName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: developers
  props:
    - name: organizationsId
      value: "{{ organizationsId }}"
      description: Required parameter for the developers resource.
    - name: appFamily
      value: "{{ appFamily }}"
      description: |
        Developer app family.
    - name: accessType
      value: "{{ accessType }}"
      description: |
        Access type.
    - name: developerId
      value: "{{ developerId }}"
      description: |
        ID of the developer. **Note**: IDs are generated internally by Apigee and are not guaranteed to stay the same over time.
    - name: firstName
      value: "{{ firstName }}"
      description: |
        Required. First name of the developer.
    - name: userName
      value: "{{ userName }}"
      description: |
        Required. User name of the developer. Not used by Apigee hybrid.
    - name: lastName
      value: "{{ lastName }}"
      description: |
        Required. Last name of the developer.
    - name: attributes
      description: |
        Optional. Developer attributes (name/value pairs). The custom attribute limit is 18.
      value:
        - name: "{{ name }}"
          value: "{{ value }}"
    - name: email
      value: "{{ email }}"
      description: |
        Required. Email address of the developer. This value is used to uniquely identify the developer in Apigee hybrid. Note that the email address has to be in lowercase only.
    - name: companies
      value:
        - "{{ companies }}"
      description: |
        List of companies associated with the developer.
    - name: apps
      value:
        - "{{ apps }}"
      description: |
        List of apps associated with the developer.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="organizations_developers_update"
    values={[
        { label: 'organizations_developers_update', value: 'organizations_developers_update' }
    ]}
>
<TabItem value="organizations_developers_update">

Updates a developer. This API replaces the existing developer details with those specified in the request. Include or exclude any existing details that you want to retain or delete, respectively. The custom attribute limit is 18. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds. **Note:** We recommend that you avoid making concurrent update requests for the same resource. Near-simultaneous writes to the same entity can result in conflicts and unexpected behavior. Ensure operations are sequential when modifying a single resource.

```sql
REPLACE google.apigee.developers
SET 
data__appFamily = '{{ appFamily }}',
data__accessType = '{{ accessType }}',
data__developerId = '{{ developerId }}',
data__firstName = '{{ firstName }}',
data__userName = '{{ userName }}',
data__lastName = '{{ lastName }}',
data__attributes = '{{ attributes }}',
data__email = '{{ email }}',
data__companies = '{{ companies }}',
data__apps = '{{ apps }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND developersId = '{{ developersId }}' --required
RETURNING
accessType,
appFamily,
apps,
attributes,
companies,
createdAt,
developerId,
email,
firstName,
lastModifiedAt,
lastName,
organizationName,
status,
userName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="organizations_developers_delete"
    values={[
        { label: 'organizations_developers_delete', value: 'organizations_developers_delete' }
    ]}
>
<TabItem value="organizations_developers_delete">

Deletes a developer. All apps and API keys associated with the developer are also removed. **Warning**: This API will permanently delete the developer and related artifacts. To avoid permanently deleting developers and their artifacts, set the developer status to `inactive` using the SetDeveloperStatus API. **Note**: The delete operation is asynchronous. The developer is deleted immediately, but its associated resources, such as apps and API keys, may take anywhere from a few seconds to a few minutes to be deleted.

```sql
DELETE FROM google.apigee.developers
WHERE organizationsId = '{{ organizationsId }}' --required
AND developersId = '{{ developersId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_developers_attributes"
    values={[
        { label: 'organizations_developers_attributes', value: 'organizations_developers_attributes' },
        { label: 'organizations_developers_set_developer_status', value: 'organizations_developers_set_developer_status' }
    ]}
>
<TabItem value="organizations_developers_attributes">

Updates developer attributes. This API replaces the existing attributes with those specified in the request. Add new attributes, and include or exclude any existing attributes that you want to retain or remove, respectively. The custom attribute limit is 18. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.

```sql
EXEC google.apigee.developers.organizations_developers_attributes 
@organizationsId='{{ organizationsId }}' --required, 
@developersId='{{ developersId }}' --required 
@@json=
'{
"attribute": "{{ attribute }}"
}'
;
```
</TabItem>
<TabItem value="organizations_developers_set_developer_status">

Sets the status of a developer. A developer is `active` by default. If you set a developer's status to `inactive`, the API keys assigned to the developer apps are no longer valid even though the API keys are set to `approved`. Inactive developers can still sign in to the developer portal and create apps; however, any new API keys generated during app creation won't work. To set the status of a developer, set the `action` query parameter to `active` or `inactive`, and the `Content-Type` header to `application/octet-stream`. If successful, the API call returns the following HTTP status code: `204 No Content`

```sql
EXEC google.apigee.developers.organizations_developers_set_developer_status 
@organizationsId='{{ organizationsId }}' --required, 
@developersId='{{ developersId }}' --required, 
@action='{{ action }}'
;
```
</TabItem>
</Tabs>
