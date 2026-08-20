--- 
title: assessments
hide_title: false
hide_table_of_contents: false
keywords:
  - assessments
  - recaptchaenterprise
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

Creates, updates, deletes, gets or lists an <code>assessments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assessments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.recaptchaenterprise.assessments" /></td></tr>
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
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates an Assessment of the likelihood an event is legitimate.</td>
</tr>
<tr>
    <td><a href="#annotate"><CopyableCode code="annotate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-assessmentsId"><code>assessmentsId</code></a></td>
    <td></td>
    <td>Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.</td>
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
<tr id="parameter-assessmentsId">
    <td><CopyableCode code="assessmentsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates an Assessment of the likelihood an event is legitimate.

```sql
INSERT INTO google.recaptchaenterprise.assessments (
data__accountVerification,
data__assessmentEnvironment,
data__event,
data__privatePasswordLeakVerification,
projectsId
)
SELECT 
'{{ accountVerification }}',
'{{ assessmentEnvironment }}',
'{{ event }}',
'{{ privatePasswordLeakVerification }}',
'{{ projectsId }}'
RETURNING
name,
accountDefenderAssessment,
accountVerification,
assessmentEnvironment,
event,
firewallPolicyAssessment,
fraudPreventionAssessment,
fraudSignals,
phoneFraudAssessment,
policyEvaluation,
privatePasswordLeakVerification,
riskAnalysis,
tokenProperties
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: assessments
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the assessments resource.
    - name: accountVerification
      description: |
        Optional. Account verification information for identity verification. The assessment event must include a token and site key to use this feature.
      value:
        endpoints:
          - emailAddress: "{{ emailAddress }}"
            lastVerificationTime: "{{ lastVerificationTime }}"
            phoneNumber: "{{ phoneNumber }}"
            requestToken: "{{ requestToken }}"
        languageCode: "{{ languageCode }}"
        latestVerificationResult: "{{ latestVerificationResult }}"
        username: "{{ username }}"
    - name: assessmentEnvironment
      description: |
        Optional. The environment creating the assessment. This describes your environment (the system invoking CreateAssessment), NOT the environment of your user.
      value:
        client: "{{ client }}"
        version: "{{ version }}"
    - name: event
      description: |
        Optional. The event being assessed.
      value:
        expectedAction: "{{ expectedAction }}"
        express: {{ express }}
        firewallPolicyEvaluation: {{ firewallPolicyEvaluation }}
        fraudPrevention: "{{ fraudPrevention }}"
        hashedAccountId: "{{ hashedAccountId }}"
        headers:
          - "{{ headers }}"
        ja3: "{{ ja3 }}"
        ja4: "{{ ja4 }}"
        requestedUri: "{{ requestedUri }}"
        siteKey: "{{ siteKey }}"
        token: "{{ token }}"
        transactionData:
          billingAddress:
            address:
              - "{{ address }}"
            administrativeArea: "{{ administrativeArea }}"
            locality: "{{ locality }}"
            postalCode: "{{ postalCode }}"
            recipient: "{{ recipient }}"
            regionCode: "{{ regionCode }}"
          cardBin: "{{ cardBin }}"
          cardLastFour: "{{ cardLastFour }}"
          currencyCode: "{{ currencyCode }}"
          gatewayInfo:
            avsResponseCode: "{{ avsResponseCode }}"
            cvvResponseCode: "{{ cvvResponseCode }}"
            gatewayResponseCode: "{{ gatewayResponseCode }}"
            name: "{{ name }}"
          items:
            - merchantAccountId: "{{ merchantAccountId }}"
              name: "{{ name }}"
              quantity: "{{ quantity }}"
              value: {{ value }}
          merchants:
            - accountId: "{{ accountId }}"
              creationMs: "{{ creationMs }}"
              email: "{{ email }}"
              emailVerified: {{ emailVerified }}
              phoneNumber: "{{ phoneNumber }}"
              phoneVerified: {{ phoneVerified }}
          paymentMethod: "{{ paymentMethod }}"
          shippingAddress:
            address:
              - "{{ address }}"
            administrativeArea: "{{ administrativeArea }}"
            locality: "{{ locality }}"
            postalCode: "{{ postalCode }}"
            recipient: "{{ recipient }}"
            regionCode: "{{ regionCode }}"
          shippingValue: {{ shippingValue }}
          transactionId: "{{ transactionId }}"
          user:
            accountId: "{{ accountId }}"
            creationMs: "{{ creationMs }}"
            email: "{{ email }}"
            emailVerified: {{ emailVerified }}
            phoneNumber: "{{ phoneNumber }}"
            phoneVerified: {{ phoneVerified }}
          value: {{ value }}
        userAgent: "{{ userAgent }}"
        userInfo:
          accountId: "{{ accountId }}"
          createAccountTime: "{{ createAccountTime }}"
          userIds:
            - email: "{{ email }}"
              phoneNumber: "{{ phoneNumber }}"
              username: "{{ username }}"
        userIpAddress: "{{ userIpAddress }}"
        wafTokenAssessment: {{ wafTokenAssessment }}
    - name: privatePasswordLeakVerification
      description: |
        Optional. The private password leak verification field contains the parameters that are used to to check for leaks privately without sharing user credentials.
      value:
        encryptedLeakMatchPrefixes:
          - "{{ encryptedLeakMatchPrefixes }}"
        encryptedUserCredentialsHash: "{{ encryptedUserCredentialsHash }}"
        lookupHashPrefix: "{{ lookupHashPrefix }}"
        reencryptedUserCredentialsHash: "{{ reencryptedUserCredentialsHash }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="annotate"
    values={[
        { label: 'annotate', value: 'annotate' }
    ]}
>
<TabItem value="annotate">

Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.

```sql
EXEC google.recaptchaenterprise.assessments.annotate 
@projectsId='{{ projectsId }}' --required, 
@assessmentsId='{{ assessmentsId }}' --required 
@@json=
'{
"accountId": "{{ accountId }}", 
"annotation": "{{ annotation }}", 
"hashedAccountId": "{{ hashedAccountId }}", 
"phoneAuthenticationEvent": "{{ phoneAuthenticationEvent }}", 
"reasons": "{{ reasons }}", 
"transactionEvent": "{{ transactionEvent }}"
}'
;
```
</TabItem>
</Tabs>
