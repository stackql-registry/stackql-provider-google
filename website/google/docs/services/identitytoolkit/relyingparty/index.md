--- 
title: relyingparty
hide_title: false
hide_table_of_contents: false
keywords:
  - relyingparty
  - identitytoolkit
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

Creates, updates, deletes, gets or lists a <code>relyingparty</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="relyingparty" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.identitytoolkit.relyingparty" /></td></tr>
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
    <td><a href="#verify_custom_token"><CopyableCode code="verify_custom_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Verifies the developer asserted ID token.</td>
</tr>
<tr>
    <td><a href="#verify_assertion"><CopyableCode code="verify_assertion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Verifies the assertion returned by the IdP.</td>
</tr>
<tr>
    <td><a href="#email_link_signin"><CopyableCode code="email_link_signin" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Reset password for a user.</td>
</tr>
<tr>
    <td><a href="#reset_password"><CopyableCode code="reset_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Reset password for a user.</td>
</tr>
<tr>
    <td><a href="#set_account_info"><CopyableCode code="set_account_info" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Set account info for a user.</td>
</tr>
<tr>
    <td><a href="#verify_password"><CopyableCode code="verify_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Verifies the user entered password.</td>
</tr>
<tr>
    <td><a href="#set_project_config"><CopyableCode code="set_project_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Set project configuration.</td>
</tr>
<tr>
    <td><a href="#download_account"><CopyableCode code="download_account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Batch download user accounts.</td>
</tr>
<tr>
    <td><a href="#send_verification_code"><CopyableCode code="send_verification_code" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Send SMS verification code.</td>
</tr>
<tr>
    <td><a href="#sign_out_user"><CopyableCode code="sign_out_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Sign out user.</td>
</tr>
<tr>
    <td><a href="#upload_account"><CopyableCode code="upload_account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Batch upload existing user accounts.</td>
</tr>
<tr>
    <td><a href="#signup_new_user"><CopyableCode code="signup_new_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Signup new user.</td>
</tr>
<tr>
    <td><a href="#verify_phone_number"><CopyableCode code="verify_phone_number" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Verifies ownership of a phone number and creates/updates the user account accordingly.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="verify_custom_token"
    values={[
        { label: 'verify_custom_token', value: 'verify_custom_token' },
        { label: 'verify_assertion', value: 'verify_assertion' },
        { label: 'email_link_signin', value: 'email_link_signin' },
        { label: 'reset_password', value: 'reset_password' },
        { label: 'set_account_info', value: 'set_account_info' },
        { label: 'verify_password', value: 'verify_password' },
        { label: 'set_project_config', value: 'set_project_config' },
        { label: 'download_account', value: 'download_account' },
        { label: 'send_verification_code', value: 'send_verification_code' },
        { label: 'sign_out_user', value: 'sign_out_user' },
        { label: 'upload_account', value: 'upload_account' },
        { label: 'signup_new_user', value: 'signup_new_user' },
        { label: 'verify_phone_number', value: 'verify_phone_number' }
    ]}
>
<TabItem value="verify_custom_token">

Verifies the developer asserted ID token.

```sql
EXEC google.identitytoolkit.relyingparty.verify_custom_token 
@@json=
'{
"returnSecureToken": {{ returnSecureToken }}, 
"delegatedProjectNumber": "{{ delegatedProjectNumber }}", 
"instanceId": "{{ instanceId }}", 
"token": "{{ token }}"
}'
;
```
</TabItem>
<TabItem value="verify_assertion">

Verifies the assertion returned by the IdP.

```sql
EXEC google.identitytoolkit.relyingparty.verify_assertion 
@@json=
'{
"autoCreate": {{ autoCreate }}, 
"delegatedProjectNumber": "{{ delegatedProjectNumber }}", 
"instanceId": "{{ instanceId }}", 
"pendingIdToken": "{{ pendingIdToken }}", 
"tenantId": "{{ tenantId }}", 
"tenantProjectNumber": "{{ tenantProjectNumber }}", 
"requestUri": "{{ requestUri }}", 
"returnRefreshToken": {{ returnRefreshToken }}, 
"sessionId": "{{ sessionId }}", 
"postBody": "{{ postBody }}", 
"returnSecureToken": {{ returnSecureToken }}, 
"returnIdpCredential": {{ returnIdpCredential }}, 
"idToken": "{{ idToken }}"
}'
;
```
</TabItem>
<TabItem value="email_link_signin">

Reset password for a user.

```sql
EXEC google.identitytoolkit.relyingparty.email_link_signin 
@@json=
'{
"idToken": "{{ idToken }}", 
"email": "{{ email }}", 
"oobCode": "{{ oobCode }}"
}'
;
```
</TabItem>
<TabItem value="reset_password">

Reset password for a user.

```sql
EXEC google.identitytoolkit.relyingparty.reset_password 
@@json=
'{
"email": "{{ email }}", 
"oobCode": "{{ oobCode }}", 
"newPassword": "{{ newPassword }}", 
"oldPassword": "{{ oldPassword }}"
}'
;
```
</TabItem>
<TabItem value="set_account_info">

Set account info for a user.

```sql
EXEC google.identitytoolkit.relyingparty.set_account_info 
@@json=
'{
"validSince": "{{ validSince }}", 
"lastLoginAt": "{{ lastLoginAt }}", 
"createdAt": "{{ createdAt }}", 
"oobCode": "{{ oobCode }}", 
"idToken": "{{ idToken }}", 
"customAttributes": "{{ customAttributes }}", 
"displayName": "{{ displayName }}", 
"password": "{{ password }}", 
"photoUrl": "{{ photoUrl }}", 
"returnSecureToken": {{ returnSecureToken }}, 
"deleteAttribute": "{{ deleteAttribute }}", 
"upgradeToFederatedLogin": {{ upgradeToFederatedLogin }}, 
"email": "{{ email }}", 
"localId": "{{ localId }}", 
"delegatedProjectNumber": "{{ delegatedProjectNumber }}", 
"instanceId": "{{ instanceId }}", 
"captchaChallenge": "{{ captchaChallenge }}", 
"disableUser": {{ disableUser }}, 
"provider": "{{ provider }}", 
"captchaResponse": "{{ captchaResponse }}", 
"phoneNumber": "{{ phoneNumber }}", 
"emailVerified": {{ emailVerified }}, 
"deleteProvider": "{{ deleteProvider }}"
}'
;
```
</TabItem>
<TabItem value="verify_password">

Verifies the user entered password.

```sql
EXEC google.identitytoolkit.relyingparty.verify_password 
@@json=
'{
"tenantId": "{{ tenantId }}", 
"password": "{{ password }}", 
"returnSecureToken": {{ returnSecureToken }}, 
"idToken": "{{ idToken }}", 
"tenantProjectNumber": "{{ tenantProjectNumber }}", 
"captchaResponse": "{{ captchaResponse }}", 
"captchaChallenge": "{{ captchaChallenge }}", 
"delegatedProjectNumber": "{{ delegatedProjectNumber }}", 
"instanceId": "{{ instanceId }}", 
"pendingIdToken": "{{ pendingIdToken }}", 
"email": "{{ email }}"
}'
;
```
</TabItem>
<TabItem value="set_project_config">

Set project configuration.

```sql
EXEC google.identitytoolkit.relyingparty.set_project_config 
@@json=
'{
"verifyEmailTemplate": "{{ verifyEmailTemplate }}", 
"allowPasswordUser": {{ allowPasswordUser }}, 
"apiKey": "{{ apiKey }}", 
"delegatedProjectNumber": "{{ delegatedProjectNumber }}", 
"authorizedDomains": "{{ authorizedDomains }}", 
"enableAnonymousUser": {{ enableAnonymousUser }}, 
"useEmailSending": {{ useEmailSending }}, 
"resetPasswordTemplate": "{{ resetPasswordTemplate }}", 
"legacyResetPasswordTemplate": "{{ legacyResetPasswordTemplate }}", 
"changeEmailTemplate": "{{ changeEmailTemplate }}", 
"idpConfig": "{{ idpConfig }}"
}'
;
```
</TabItem>
<TabItem value="download_account">

Batch download user accounts.

```sql
EXEC google.identitytoolkit.relyingparty.download_account 
@@json=
'{
"maxResults": {{ maxResults }}, 
"nextPageToken": "{{ nextPageToken }}", 
"delegatedProjectNumber": "{{ delegatedProjectNumber }}", 
"targetProjectId": "{{ targetProjectId }}"
}'
;
```
</TabItem>
<TabItem value="send_verification_code">

Send SMS verification code.

```sql
EXEC google.identitytoolkit.relyingparty.send_verification_code 
@@json=
'{
"recaptchaToken": "{{ recaptchaToken }}", 
"iosReceipt": "{{ iosReceipt }}", 
"iosSecret": "{{ iosSecret }}", 
"phoneNumber": "{{ phoneNumber }}"
}'
;
```
</TabItem>
<TabItem value="sign_out_user">

Sign out user.

```sql
EXEC google.identitytoolkit.relyingparty.sign_out_user 
@@json=
'{
"localId": "{{ localId }}", 
"instanceId": "{{ instanceId }}"
}'
;
```
</TabItem>
<TabItem value="upload_account">

Batch upload existing user accounts.

```sql
EXEC google.identitytoolkit.relyingparty.upload_account 
@@json=
'{
"parallelization": {{ parallelization }}, 
"hashAlgorithm": "{{ hashAlgorithm }}", 
"dkLen": {{ dkLen }}, 
"targetProjectId": "{{ targetProjectId }}", 
"allowOverwrite": {{ allowOverwrite }}, 
"blockSize": {{ blockSize }}, 
"cpuMemCost": {{ cpuMemCost }}, 
"rounds": {{ rounds }}, 
"users": "{{ users }}", 
"signerKey": "{{ signerKey }}", 
"delegatedProjectNumber": "{{ delegatedProjectNumber }}", 
"memoryCost": {{ memoryCost }}, 
"saltSeparator": "{{ saltSeparator }}", 
"sanityCheck": {{ sanityCheck }}
}'
;
```
</TabItem>
<TabItem value="signup_new_user">

Signup new user.

```sql
EXEC google.identitytoolkit.relyingparty.signup_new_user 
@@json=
'{
"displayName": "{{ displayName }}", 
"password": "{{ password }}", 
"photoUrl": "{{ photoUrl }}", 
"idToken": "{{ idToken }}", 
"disabled": {{ disabled }}, 
"tenantId": "{{ tenantId }}", 
"tenantProjectNumber": "{{ tenantProjectNumber }}", 
"emailVerified": {{ emailVerified }}, 
"captchaChallenge": "{{ captchaChallenge }}", 
"instanceId": "{{ instanceId }}", 
"phoneNumber": "{{ phoneNumber }}", 
"captchaResponse": "{{ captchaResponse }}", 
"email": "{{ email }}", 
"localId": "{{ localId }}"
}'
;
```
</TabItem>
<TabItem value="verify_phone_number">

Verifies ownership of a phone number and creates/updates the user account accordingly.

```sql
EXEC google.identitytoolkit.relyingparty.verify_phone_number 
@@json=
'{
"phoneNumber": "{{ phoneNumber }}", 
"verificationProof": "{{ verificationProof }}", 
"code": "{{ code }}", 
"sessionInfo": "{{ sessionInfo }}", 
"temporaryProof": "{{ temporaryProof }}", 
"idToken": "{{ idToken }}", 
"operation": "{{ operation }}"
}'
;
```
</TabItem>
</Tabs>
