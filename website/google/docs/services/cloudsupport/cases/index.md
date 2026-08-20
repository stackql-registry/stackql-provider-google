--- 
title: cases
hide_title: false
hide_table_of_contents: false
keywords:
  - cases
  - cloudsupport
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

Creates, updates, deletes, gets or lists a <code>cases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudsupport.cases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
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
    <td>Identifier. The resource name for the case.</td>
</tr>
<tr>
    <td><CopyableCode code="classification" /></td>
    <td><code>object</code></td>
    <td>The issue classification applicable to this case. (id: CaseClassification)</td>
</tr>
<tr>
    <td><CopyableCode code="contactEmail" /></td>
    <td><code>string</code></td>
    <td>A user-supplied email address to send case update notifications for. This should only be used in BYOID flows, where we cannot infer the user's email address directly from their EUCs.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this case was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>The user who created the case. Note: The name and email will be obfuscated if the case was created by Google Support. (id: Actor)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A broad description of the issue.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The short summary of the issue reported in this case.</td>
</tr>
<tr>
    <td><CopyableCode code="escalated" /></td>
    <td><code>boolean</code></td>
    <td>Whether the case is currently escalated.</td>
</tr>
<tr>
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td>The language the user has requested to receive support in. This should be a BCP 47 language code (e.g., `"en"`, `"zh-CN"`, `"zh-TW"`, `"ja"`, `"ko"`). If no language or an unsupported language is specified, this field defaults to English (en). Language selection during case creation may affect your available support options. For a list of supported languages and their support working hours, see: https://cloud.google.com/support/docs/language-working-hours</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string</code></td>
    <td>The priority of this case. (PRIORITY_UNSPECIFIED, P0, P1, P2, P3, P4)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current status of the support case. (STATE_UNSPECIFIED, NEW, IN_PROGRESS_GOOGLE_SUPPORT, ACTION_REQUIRED, SOLUTION_PROVIDED, CLOSED)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriberEmailAddresses" /></td>
    <td><code>array</code></td>
    <td>The email addresses to receive updates on this case.</td>
</tr>
<tr>
    <td><CopyableCode code="testCase" /></td>
    <td><code>boolean</code></td>
    <td>Whether this case was created for internal API testing and should not be acted on by the support team.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>The timezone of the user who created the support case. It should be in a format IANA recognizes: https://www.iana.org/time-zones. There is no additional validation done by the API.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this case was last updated.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Retrieve all cases under a parent, but not its children. For example, listing cases under an organization only returns the cases that are directly parented by that organization. To retrieve cases under an organization and its projects, use `cases.search`. EXAMPLES: cURL: ```shell parent="projects/some-project" curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudsupport.googleapis.com/v2/$parent/cases" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version=&#123;api_version&#125;", ) request = supportApiService.cases().list(parent="projects/some-project") print(request.execute()) ```</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-parentType"><code>parentType</code></a>, <a href="#parameter-parent"><code>parent</code></a></td>
    <td></td>
    <td>Create a new case and associate it with a parent. It must have the following fields set: `display_name`, `description`, `classification`, and `priority`. If you're just testing the API and don't want to route your case to an agent, set `testCase=true`. EXAMPLES: cURL: ```shell parent="projects/some-project" curl \ --request POST \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header 'Content-Type: application/json' \ --data '&#123; "display_name": "Test case created by me.", "description": "a random test case, feel free to close", "classification": &#123; "id": "100IK2AKCLHMGRJ9CDGMOCGP8DM6UTB4BT262T31BT1M2T31DHNMENPO6KS36CPJ786L2TBFEHGN6NPI64R3CDHN8880G08I1H3MURR7DHII0GRCDTQM8" &#125;, "time_zone": "-07:00", "subscriber_email_addresses": [ "foo@domain.com", "bar@domain.com" ], "testCase": true, "priority": "P3" &#125;' \ "https://cloudsupport.googleapis.com/v2/$parent/cases" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version=&#123;api_version&#125;", ) request = supportApiService.cases().create( parent="projects/some-project", body=&#123; "displayName": "A Test Case", "description": "This is a test case.", "testCase": True, "priority": "P2", "classification": &#123; "id": "100IK2AKCLHMGRJ9CDGMOCGP8DM6UTB4BT262T31BT1M2T31DHNMENPO6KS36CPJ786L2TBFEHGN6NPI64R3CDHN8880G08I1H3MURR7DHII0GRCDTQM8" &#125;, &#125;, ) print(request.execute()) ```</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Update a case. Only some fields can be updated. EXAMPLES: cURL: ```shell case="projects/some-project/cases/43595344" curl \ --request PATCH \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header "Content-Type: application/json" \ --data '&#123; "priority": "P1" &#125;' \ "https://cloudsupport.googleapis.com/v2/$case?updateMask=priority" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version=&#123;api_version&#125;", ) request = supportApiService.cases().patch( name="projects/some-project/cases/43112854", body=&#123; "displayName": "This is Now a New Title", "priority": "P2", &#125;, ) print(request.execute()) ```</td>
</tr>
<tr>
    <td><a href="#close"><CopyableCode code="close" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Close a case. EXAMPLES: cURL: ```shell case="projects/some-project/cases/43595344" curl \ --request POST \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudsupport.googleapis.com/v2/$case:close" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version=&#123;api_version&#125;", ) request = supportApiService.cases().close( name="projects/some-project/cases/43595344" ) print(request.execute()) ```</td>
</tr>
<tr>
    <td><a href="#escalate"><CopyableCode code="escalate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Escalate a case, starting the Google Cloud Support escalation management process. This operation is only available for some support services. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which ones let you do that. EXAMPLES: cURL: ```shell case="projects/some-project/cases/43595344" curl \ --request POST \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header "Content-Type: application/json" \ --data '&#123; "escalation": &#123; "reason": "BUSINESS_IMPACT", "justification": "This is a test escalation." &#125; &#125;' \ "https://cloudsupport.googleapis.com/v2/$case:escalate" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version=&#123;api_version&#125;", ) request = supportApiService.cases().escalate( name="projects/some-project/cases/43595344", body=&#123; "escalation": &#123; "reason": "BUSINESS_IMPACT", "justification": "This is a test escalation.", &#125;, &#125;, ) print(request.execute()) ```</td>
</tr>
<tr>
    <td><a href="#search"><CopyableCode code="search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-query"><code>query</code></a></td>
    <td>Retrieve valid classifications to use when creating a support case. Classifications are hierarchical. Each classification is a string containing all levels of the hierarchy separated by `" > "`. For example, `"Technical Issue > Compute > Compute Engine"`. Classification IDs returned by this endpoint are valid for at least six months. When a classification is deactivated, this endpoint immediately stops returning it. After six months, `case.create` requests using the classification will fail. EXAMPLES: cURL: ```shell curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ 'https://cloudsupport.googleapis.com/v2/caseClassifications:search?query=display_name:"*Compute%20Engine*"' ``` Python: ```python import googleapiclient.discovery supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version="v2", discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version=v2", ) request = supportApiService.caseClassifications().search( query='display_name:"*Compute Engine*"' ) print(request.execute()) ```</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parentType">
    <td><CopyableCode code="parentType" /></td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Retrieve all cases under a parent, but not its children. For example, listing cases under an organization only returns the cases that are directly parented by that organization. To retrieve cases under an organization and its projects, use `cases.search`. EXAMPLES: cURL: ```shell parent="projects/some-project" curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudsupport.googleapis.com/v2/$parent/cases" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version=&#123;api_version&#125;", ) request = supportApiService.cases().list(parent="projects/some-project") print(request.execute()) ```

```sql
SELECT
name,
classification,
contactEmail,
createTime,
creator,
description,
displayName,
escalated,
languageCode,
priority,
state,
subscriberEmailAddresses,
testCase,
timeZone,
updateTime
FROM google.cloudsupport.cases
WHERE parentType = '{{ parentType }}' -- required
AND parent = '{{ parent }}' -- required
AND filter = '{{ filter }}'
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

Create a new case and associate it with a parent. It must have the following fields set: `display_name`, `description`, `classification`, and `priority`. If you're just testing the API and don't want to route your case to an agent, set `testCase=true`. EXAMPLES: cURL: ```shell parent="projects/some-project" curl \ --request POST \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header 'Content-Type: application/json' \ --data '&#123; "display_name": "Test case created by me.", "description": "a random test case, feel free to close", "classification": &#123; "id": "100IK2AKCLHMGRJ9CDGMOCGP8DM6UTB4BT262T31BT1M2T31DHNMENPO6KS36CPJ786L2TBFEHGN6NPI64R3CDHN8880G08I1H3MURR7DHII0GRCDTQM8" &#125;, "time_zone": "-07:00", "subscriber_email_addresses": [ "foo@domain.com", "bar@domain.com" ], "testCase": true, "priority": "P3" &#125;' \ "https://cloudsupport.googleapis.com/v2/$parent/cases" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version=&#123;api_version&#125;", ) request = supportApiService.cases().create( parent="projects/some-project", body=&#123; "displayName": "A Test Case", "description": "This is a test case.", "testCase": True, "priority": "P2", "classification": &#123; "id": "100IK2AKCLHMGRJ9CDGMOCGP8DM6UTB4BT262T31BT1M2T31DHNMENPO6KS36CPJ786L2TBFEHGN6NPI64R3CDHN8880G08I1H3MURR7DHII0GRCDTQM8" &#125;, &#125;, ) print(request.execute()) ```

```sql
INSERT INTO google.cloudsupport.cases (
data__classification,
data__contactEmail,
data__creator,
data__description,
data__displayName,
data__escalated,
data__languageCode,
data__name,
data__priority,
data__subscriberEmailAddresses,
data__testCase,
data__timeZone,
parentType,
parent
)
SELECT 
'{{ classification }}',
'{{ contactEmail }}',
'{{ creator }}',
'{{ description }}',
'{{ displayName }}',
{{ escalated }},
'{{ languageCode }}',
'{{ name }}',
'{{ priority }}',
'{{ subscriberEmailAddresses }}',
{{ testCase }},
'{{ timeZone }}',
'{{ parentType }}',
'{{ parent }}'
RETURNING
name,
classification,
contactEmail,
createTime,
creator,
description,
displayName,
escalated,
languageCode,
priority,
state,
subscriberEmailAddresses,
testCase,
timeZone,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cases
  props:
    - name: parentType
      value: "{{ parentType }}"
      description: Required parameter for the cases resource.
    - name: parent
      value: "{{ parent }}"
      description: Required parameter for the cases resource.
    - name: classification
      description: |
        The issue classification applicable to this case.
      value:
        displayName: "{{ displayName }}"
        id: "{{ id }}"
    - name: contactEmail
      value: "{{ contactEmail }}"
      description: |
        A user-supplied email address to send case update notifications for. This should only be used in BYOID flows, where we cannot infer the user's email address directly from their EUCs.
    - name: creator
      description: |
        The user who created the case. Note: The name and email will be obfuscated if the case was created by Google Support.
      value:
        displayName: "{{ displayName }}"
        email: "{{ email }}"
        googleSupport: {{ googleSupport }}
        username: "{{ username }}"
    - name: description
      value: "{{ description }}"
      description: |
        A broad description of the issue.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The short summary of the issue reported in this case.
    - name: escalated
      value: {{ escalated }}
      description: |
        Whether the case is currently escalated.
    - name: languageCode
      value: "{{ languageCode }}"
      description: |
        The language the user has requested to receive support in. This should be a BCP 47 language code (e.g., \`"en"\`, \`"zh-CN"\`, \`"zh-TW"\`, \`"ja"\`, \`"ko"\`). If no language or an unsupported language is specified, this field defaults to English (en). Language selection during case creation may affect your available support options. For a list of supported languages and their support working hours, see: https://cloud.google.com/support/docs/language-working-hours
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The resource name for the case.
    - name: priority
      value: "{{ priority }}"
      description: |
        The priority of this case.
      valid_values: ['PRIORITY_UNSPECIFIED', 'P0', 'P1', 'P2', 'P3', 'P4']
    - name: subscriberEmailAddresses
      value:
        - "{{ subscriberEmailAddresses }}"
      description: |
        The email addresses to receive updates on this case.
    - name: testCase
      value: {{ testCase }}
      description: |
        Whether this case was created for internal API testing and should not be acted on by the support team.
    - name: timeZone
      value: "{{ timeZone }}"
      description: |
        The timezone of the user who created the support case. It should be in a format IANA recognizes: https://www.iana.org/time-zones. There is no additional validation done by the API.
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

Update a case. Only some fields can be updated. EXAMPLES: cURL: ```shell case="projects/some-project/cases/43595344" curl \ --request PATCH \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header "Content-Type: application/json" \ --data '&#123; "priority": "P1" &#125;' \ "https://cloudsupport.googleapis.com/v2/$case?updateMask=priority" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version=&#123;api_version&#125;", ) request = supportApiService.cases().patch( name="projects/some-project/cases/43112854", body=&#123; "displayName": "This is Now a New Title", "priority": "P2", &#125;, ) print(request.execute()) ```

```sql
UPDATE google.cloudsupport.cases
SET 
data__classification = '{{ classification }}',
data__contactEmail = '{{ contactEmail }}',
data__creator = '{{ creator }}',
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__escalated = {{ escalated }},
data__languageCode = '{{ languageCode }}',
data__name = '{{ name }}',
data__priority = '{{ priority }}',
data__subscriberEmailAddresses = '{{ subscriberEmailAddresses }}',
data__testCase = {{ testCase }},
data__timeZone = '{{ timeZone }}'
WHERE 
name = '{{ name }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
classification,
contactEmail,
createTime,
creator,
description,
displayName,
escalated,
languageCode,
priority,
state,
subscriberEmailAddresses,
testCase,
timeZone,
updateTime;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="close"
    values={[
        { label: 'close', value: 'close' },
        { label: 'escalate', value: 'escalate' },
        { label: 'search', value: 'search' }
    ]}
>
<TabItem value="close">

Close a case. EXAMPLES: cURL: ```shell case="projects/some-project/cases/43595344" curl \ --request POST \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudsupport.googleapis.com/v2/$case:close" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version=&#123;api_version&#125;", ) request = supportApiService.cases().close( name="projects/some-project/cases/43595344" ) print(request.execute()) ```

```sql
EXEC google.cloudsupport.cases.close 
@name='{{ name }}' --required
;
```
</TabItem>
<TabItem value="escalate">

Escalate a case, starting the Google Cloud Support escalation management process. This operation is only available for some support services. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which ones let you do that. EXAMPLES: cURL: ```shell case="projects/some-project/cases/43595344" curl \ --request POST \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header "Content-Type: application/json" \ --data '&#123; "escalation": &#123; "reason": "BUSINESS_IMPACT", "justification": "This is a test escalation." &#125; &#125;' \ "https://cloudsupport.googleapis.com/v2/$case:escalate" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version=&#123;api_version&#125;", ) request = supportApiService.cases().escalate( name="projects/some-project/cases/43595344", body=&#123; "escalation": &#123; "reason": "BUSINESS_IMPACT", "justification": "This is a test escalation.", &#125;, &#125;, ) print(request.execute()) ```

```sql
EXEC google.cloudsupport.cases.escalate 
@name='{{ name }}' --required 
@@json=
'{
"escalation": "{{ escalation }}"
}'
;
```
</TabItem>
<TabItem value="search">

Retrieve valid classifications to use when creating a support case. Classifications are hierarchical. Each classification is a string containing all levels of the hierarchy separated by `" > "`. For example, `"Technical Issue > Compute > Compute Engine"`. Classification IDs returned by this endpoint are valid for at least six months. When a classification is deactivated, this endpoint immediately stops returning it. After six months, `case.create` requests using the classification will fail. EXAMPLES: cURL: ```shell curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ 'https://cloudsupport.googleapis.com/v2/caseClassifications:search?query=display_name:"*Compute%20Engine*"' ``` Python: ```python import googleapiclient.discovery supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version="v2", discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version=v2", ) request = supportApiService.caseClassifications().search( query='display_name:"*Compute Engine*"' ) print(request.execute()) ```

```sql
EXEC google.cloudsupport.cases.search 
@pageSize='{{ pageSize }}', 
@pageToken='{{ pageToken }}', 
@query='{{ query }}'
;
```
</TabItem>
</Tabs>
