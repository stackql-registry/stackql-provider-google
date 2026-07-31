--- 
title: service_account
hide_title: false
hide_table_of_contents: false
keywords:
  - service_account
  - bigquery
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

Creates, updates, deletes, gets or lists a <code>service_account</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_account" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.bigquery.service_account" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_account"
    values={[
        { label: 'get_service_account', value: 'get_service_account' }
    ]}
>
<TabItem value="get_service_account">

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
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The service account email address.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The resource type of the response. (default: bigquery#getServiceAccountResponse)</td>
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
    <td><a href="#get_service_account"><CopyableCode code="get_service_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a></td>
    <td></td>
    <td>RPC to get the service account for a project used for interactions with Google Cloud KMS. Requires the `bigquery.jobs.create` permission on the project resource. This permission is required to authorize the retrieval of the project's service identity for technical management tasks like encryption configuration.</td>
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
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_service_account"
    values={[
        { label: 'get_service_account', value: 'get_service_account' }
    ]}
>
<TabItem value="get_service_account">

RPC to get the service account for a project used for interactions with Google Cloud KMS. Requires the `bigquery.jobs.create` permission on the project resource. This permission is required to authorize the retrieval of the project's service identity for technical management tasks like encryption configuration.

```sql
SELECT
email,
kind
FROM google.bigquery.service_account
WHERE projectId = '{{ projectId }}' -- required
;
```
</TabItem>
</Tabs>
