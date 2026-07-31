--- 
title: users_guest
hide_title: false
hide_table_of_contents: false
keywords:
  - users_guest
  - directory
  - googleadmin
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage googleadmin resources using SQL
custom_edit_url: null
image: /img/stackql-googleadmin-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>users_guest</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users_guest" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="googleadmin.directory.users_guest" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_guest"><CopyableCode code="create_guest" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Create a guest user with access to a [subset of Workspace capabilities](https://support.google.com/a/answer/16558545). This feature is currently in Open Beta.</td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_guest"
    values={[
        { label: 'create_guest', value: 'create_guest' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_guest">

Create a guest user with access to a [subset of Workspace capabilities](https://support.google.com/a/answer/16558545). This feature is currently in Open Beta.

```sql
INSERT INTO googleadmin.directory.users_guest (
data__primaryGuestEmail,
data__customer
)
SELECT 
'{{ primaryGuestEmail }}',
'{{ customer }}'
RETURNING
id,
name,
addresses,
agreedToTerms,
aliases,
archivalTime,
archived,
changePasswordAtNextLogin,
creationTime,
customSchemas,
customerId,
deletionTime,
emails,
etag,
externalIds,
gender,
guestAccountInfo,
hashFunction,
ims,
includeInGlobalAddressList,
ipWhitelisted,
isAdmin,
isDelegatedAdmin,
isEnforcedIn2Sv,
isEnrolledIn2Sv,
isGuestUser,
isMailboxSetup,
keywords,
kind,
languages,
lastLoginTime,
locations,
nonEditableAliases,
notes,
orgUnitPath,
organizations,
password,
phones,
posixAccounts,
primaryEmail,
recoveryEmail,
recoveryPhone,
relations,
sshPublicKeys,
suspended,
suspensionReason,
suspensionTime,
thumbnailPhotoEtag,
thumbnailPhotoUrl,
websites
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users_guest
  props:
    - name: primaryGuestEmail
      value: "{{ primaryGuestEmail }}"
      description: |
        Required. External email of the guest user being created.
    - name: customer
      value: "{{ customer }}"
      description: |
        Optional. Immutable ID of the Google Workspace account. Only required when request is created by a service account. Defaults to the authenticated user's customer ID otherwise.
`}</CodeBlock>

</TabItem>
</Tabs>
