--- 
title: ssl_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - ssl_policies
  - compute
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

Creates, updates, deletes, gets or lists a <code>ssl_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ssl_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.ssl_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>Output only. [Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="customFeatures" /></td>
    <td><code>array</code></td>
    <td>A list of features enabled when the selected profile is CUSTOM. The  method returns the set of features that can be specified in this list. This field must be empty if the profile is notCUSTOM.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="enabledFeatures" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] The list of features enabled in the SSL policy.</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a SslPolicy. An up-to-date fingerprint must be provided in order to update the SslPolicy, otherwise the request will fail with error 412 conditionNotMet.  To see the latest fingerprint, make a get() request to retrieve an SslPolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output only] Type of the resource. Alwayscompute#sslPolicyfor SSL policies. (default: compute#sslPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="minTlsVersion" /></td>
    <td><code>string</code></td>
    <td>The minimum version of SSL protocol that can be used by the clients to establish a connection with the load balancer. This can be one ofTLS_1_0, TLS_1_1, TLS_1_2,TLS_1_3. When set to TLS_1_3, the profile field must be set to RESTRICTED. (TLS_1_0, TLS_1_1, TLS_1_2, TLS_1_3)</td>
</tr>
<tr>
    <td><CopyableCode code="postQuantumKeyExchange" /></td>
    <td><code>string</code></td>
    <td>One of DEFAULT, ENABLED, orDEFERRED. Controls whether the load balancer negotiates X25519MLKEM768 key exchange when clients advertise support for it. When set to DEFAULT, or if no SSL Policy is attached to the target proxy, the load balancer disallows X25519MLKEM768 key exchange before October 2026, and allows it afterward. When set to ENABLED, the load balancer allows X25519MLKEM768 key exchange. When set toDEFERRED, the load balancer disallows X25519MLKEM768 key exchange until October 2027, and allows it afterward. (DEFAULT, DEFERRED, ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="profile" /></td>
    <td><code>string</code></td>
    <td>Profile specifies the set of SSL features that can be used by the load balancer when negotiating SSL with clients. This can be one ofCOMPATIBLE, MODERN, RESTRICTED,FIPS_202205, or CUSTOM. If usingCUSTOM, the set of SSL features to enable must be specified in the customFeatures field. If using FIPS_202205, the min_tls_version field must be set to TLS_1_2. (COMPATIBLE, CUSTOM, FIPS_202205, MODERN, RESTRICTED)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] URL of the region where the regional SSL policy resides. This field is not applicable to global SSL policies.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] If potential misconfigurations are detected for this SSL policy, this field will be populated with warning messages.</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>Output only. A list of SslPolicy resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Alwayscompute#sslPoliciesList for lists of sslPolicies. (default: compute#sslPoliciesList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger thanmaxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>object</code></td>
    <td>[Output Only] Informational warning message.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="aggregated_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>Output only. [Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="customFeatures" /></td>
    <td><code>array</code></td>
    <td>A list of features enabled when the selected profile is CUSTOM. The  method returns the set of features that can be specified in this list. This field must be empty if the profile is notCUSTOM.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this resource. Provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="enabledFeatures" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] The list of features enabled in the SSL policy.</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string (byte)</code></td>
    <td>Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a SslPolicy. An up-to-date fingerprint must be provided in order to update the SslPolicy, otherwise the request will fail with error 412 conditionNotMet.  To see the latest fingerprint, make a get() request to retrieve an SslPolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output only] Type of the resource. Alwayscompute#sslPolicyfor SSL policies. (default: compute#sslPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="minTlsVersion" /></td>
    <td><code>string</code></td>
    <td>The minimum version of SSL protocol that can be used by the clients to establish a connection with the load balancer. This can be one ofTLS_1_0, TLS_1_1, TLS_1_2,TLS_1_3. When set to TLS_1_3, the profile field must be set to RESTRICTED. (TLS_1_0, TLS_1_1, TLS_1_2, TLS_1_3)</td>
</tr>
<tr>
    <td><CopyableCode code="postQuantumKeyExchange" /></td>
    <td><code>string</code></td>
    <td>One of DEFAULT, ENABLED, orDEFERRED. Controls whether the load balancer negotiates X25519MLKEM768 key exchange when clients advertise support for it. When set to DEFAULT, or if no SSL Policy is attached to the target proxy, the load balancer disallows X25519MLKEM768 key exchange before October 2026, and allows it afterward. When set to ENABLED, the load balancer allows X25519MLKEM768 key exchange. When set toDEFERRED, the load balancer disallows X25519MLKEM768 key exchange until October 2027, and allows it afterward. (DEFAULT, DEFERRED, ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="profile" /></td>
    <td><code>string</code></td>
    <td>Profile specifies the set of SSL features that can be used by the load balancer when negotiating SSL with clients. This can be one ofCOMPATIBLE, MODERN, RESTRICTED,FIPS_202205, or CUSTOM. If usingCUSTOM, the set of SSL features to enable must be specified in the customFeatures field. If using FIPS_202205, the min_tls_version field must be set to TLS_1_2. (COMPATIBLE, CUSTOM, FIPS_202205, MODERN, RESTRICTED)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] URL of the region where the regional SSL policy resides. This field is not applicable to global SSL policies.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>Output only. [Output Only] If potential misconfigurations are detected for this SSL policy, this field will be populated with warning messages.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sslPolicy"><code>sslPolicy</code></a></td>
    <td></td>
    <td>Lists all of the ordered rules present in a single specified policy.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Lists all the SSL policies that have been configured for the specified<br />project and region.</td>
</tr>
<tr>
    <td><a href="#aggregated_list"><CopyableCode code="aggregated_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a></td>
    <td><a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-serviceProjectNumber"><code>serviceProjectNumber</code></a>, <a href="#parameter-includeAllScopes"><code>includeAllScopes</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a></td>
    <td>Retrieves the list of all SslPolicy resources, regional and global,<br />available to the specified project.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a new policy in the specified project and region using the data<br />included in the request.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sslPolicy"><code>sslPolicy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Patches the specified SSL policy with the data included in the request.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sslPolicy"><code>sslPolicy</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Deletes the specified SSL policy. The SSL policy resource can be deleted<br />only if it is not in use by any TargetHttpsProxy or TargetSslProxy<br />resources.</td>
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
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sslPolicy">
    <td><CopyableCode code="sslPolicy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-includeAllScopes">
    <td><CopyableCode code="includeAllScopes" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer (uint32)</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-returnPartialSuccess">
    <td><CopyableCode code="returnPartialSuccess" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-serviceProjectNumber">
    <td><CopyableCode code="serviceProjectNumber" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' },
        { label: 'aggregated_list', value: 'aggregated_list' }
    ]}
>
<TabItem value="get">

Lists all of the ordered rules present in a single specified policy.

```sql
SELECT
id,
name,
creationTimestamp,
customFeatures,
description,
enabledFeatures,
fingerprint,
kind,
minTlsVersion,
postQuantumKeyExchange,
profile,
region,
selfLink,
warnings
FROM google.compute.ssl_policies
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND sslPolicy = '{{ sslPolicy }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all the SSL policies that have been configured for the specified<br />project and region.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.ssl_policies
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND filter = '{{ filter }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
;
```
</TabItem>
<TabItem value="aggregated_list">

Retrieves the list of all SslPolicy resources, regional and global,<br />available to the specified project.<br /><br />To prevent failure, Google recommends that you set the<br />`returnPartialSuccess` parameter to `true`.

```sql
SELECT
id,
name,
creationTimestamp,
customFeatures,
description,
enabledFeatures,
fingerprint,
kind,
minTlsVersion,
postQuantumKeyExchange,
profile,
region,
selfLink,
warnings
FROM google.compute.ssl_policies
WHERE project = '{{ project }}' -- required
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND serviceProjectNumber = '{{ serviceProjectNumber }}'
AND includeAllScopes = '{{ includeAllScopes }}'
AND orderBy = '{{ orderBy }}'
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

Creates a new policy in the specified project and region using the data<br />included in the request.

```sql
INSERT INTO google.compute.ssl_policies (
data__profile,
data__customFeatures,
data__postQuantumKeyExchange,
data__fingerprint,
data__description,
data__minTlsVersion,
data__name,
project,
region,
requestId
)
SELECT 
'{{ profile }}',
'{{ customFeatures }}',
'{{ postQuantumKeyExchange }}',
'{{ fingerprint }}',
'{{ description }}',
'{{ minTlsVersion }}',
'{{ name }}',
'{{ project }}',
'{{ region }}',
'{{ requestId }}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
getVersionOperationMetadata,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ssl_policies
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the ssl_policies resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ssl_policies resource.
    - name: profile
      value: "{{ profile }}"
      description: |
        Profile specifies the set of SSL features that can be used by the load
        balancer when negotiating SSL with clients. This can be one ofCOMPATIBLE, MODERN, RESTRICTED,FIPS_202205, or CUSTOM. If usingCUSTOM, the set of SSL features to enable must be specified in
        the customFeatures field. If using FIPS_202205,
        the min_tls_version field must be set to TLS_1_2.
      valid_values: ['COMPATIBLE', 'CUSTOM', 'FIPS_202205', 'MODERN', 'RESTRICTED']
    - name: customFeatures
      value:
        - "{{ customFeatures }}"
      description: |
        A list of features enabled when the selected profile is CUSTOM. The
        method returns the set of features that can be
        specified in this list. This field must be empty if the profile is notCUSTOM.
    - name: postQuantumKeyExchange
      value: "{{ postQuantumKeyExchange }}"
      description: |
        One of DEFAULT, ENABLED, orDEFERRED. Controls whether the load balancer negotiates
        X25519MLKEM768 key exchange when clients advertise support for it. When set
        to DEFAULT, or if no SSL Policy is attached to the target
        proxy, the load balancer disallows X25519MLKEM768 key exchange before
        October 2026, and allows it afterward. When set to ENABLED,
        the load balancer allows X25519MLKEM768 key exchange. When set toDEFERRED, the load balancer disallows X25519MLKEM768 key
        exchange until October 2027, and allows it afterward.
      valid_values: ['DEFAULT', 'DEFERRED', 'ENABLED']
    - name: fingerprint
      value: "{{ fingerprint }}"
      description: |
        Fingerprint of this resource. A hash of the contents stored in this object.
        This field is used in optimistic locking. This field will be ignored when
        inserting a SslPolicy. An up-to-date fingerprint must be
        provided in order to update the SslPolicy, otherwise the
        request will fail with error 412 conditionNotMet.
        To see the latest fingerprint, make a get() request to
        retrieve an SslPolicy.
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource. Provide this property when you
        create the resource.
    - name: minTlsVersion
      value: "{{ minTlsVersion }}"
      description: |
        The minimum version of SSL protocol that can be used by the clients to
        establish a connection with the load balancer. This can be one ofTLS_1_0, TLS_1_1, TLS_1_2,TLS_1_3. When set to TLS_1_3, the profile field
        must be set to RESTRICTED.
      valid_values: ['TLS_1_0', 'TLS_1_1', 'TLS_1_2', 'TLS_1_3']
    - name: name
      value: "{{ name }}"
      description: |
        Name of the resource. The name must be 1-63 characters long, and comply
        with RFC1035. Specifically, the name must be 1-63 characters
        long and match the regular expression
        \`[a-z]([-a-z0-9]*[a-z0-9])?\` which means the first character
        must be a lowercase letter, and all following characters must be a dash,
        lowercase letter, or digit, except the last character, which cannot be a
        dash.
    - name: requestId
      value: "{{ requestId }}"
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

Patches the specified SSL policy with the data included in the request.

```sql
UPDATE google.compute.ssl_policies
SET 
data__profile = '{{ profile }}',
data__customFeatures = '{{ customFeatures }}',
data__postQuantumKeyExchange = '{{ postQuantumKeyExchange }}',
data__fingerprint = '{{ fingerprint }}',
data__description = '{{ description }}',
data__minTlsVersion = '{{ minTlsVersion }}',
data__name = '{{ name }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND sslPolicy = '{{ sslPolicy }}' --required
AND requestId = '{{ requestId}}'
RETURNING
id,
name,
clientOperationId,
creationTimestamp,
description,
endTime,
error,
getVersionOperationMetadata,
httpErrorMessage,
httpErrorStatusCode,
insertTime,
instancesBulkInsertOperationMetadata,
kind,
operationGroupId,
operationType,
progress,
region,
selfLink,
setCommonInstanceMetadataOperationMetadata,
startTime,
status,
statusMessage,
targetId,
targetLink,
user,
warnings,
zone;
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

Deletes the specified SSL policy. The SSL policy resource can be deleted<br />only if it is not in use by any TargetHttpsProxy or TargetSslProxy<br />resources.

```sql
DELETE FROM google.compute.ssl_policies
WHERE project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND sslPolicy = '{{ sslPolicy }}' --required
AND requestId = '{{ requestId }}'
;
```
</TabItem>
</Tabs>
