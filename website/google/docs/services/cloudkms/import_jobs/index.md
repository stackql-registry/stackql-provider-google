--- 
title: import_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - import_jobs
  - cloudkms
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

Creates, updates, deletes, gets or lists an <code>import_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="import_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudkms.import_jobs" /></td></tr>
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
    <td>Output only. The resource name for this ImportJob in the format `projects/*/locations/*/keyRings/*/importJobs/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="attestation" /></td>
    <td><code>object</code></td>
    <td>Output only. Statement that was generated and signed by the key creator (for example, an HSM) at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only present if the chosen ImportMethod is one with a protection level of HSM. (id: KeyOperationAttestation)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this ImportJob was created.</td>
</tr>
<tr>
    <td><CopyableCode code="cryptoKeyBackend" /></td>
    <td><code>string</code></td>
    <td>Immutable. The resource name of the backend environment where the key material for the wrapping key resides and where all related cryptographic operations are performed. Currently, this field is only populated for keys stored in HSM_SINGLE_TENANT. Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future. Supported resources: * `"projects/*/locations/*/singleTenantHsmInstances/*"`</td>
</tr>
<tr>
    <td><CopyableCode code="expireEventTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this ImportJob expired. Only present if state is EXPIRED.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this ImportJob is scheduled for expiration and can no longer be used to import key material.</td>
</tr>
<tr>
    <td><CopyableCode code="generateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this ImportJob's key material was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="importMethod" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The wrapping method to be used for incoming key material. (IMPORT_METHOD_UNSPECIFIED, RSA_OAEP_3072_SHA1_AES_256, RSA_OAEP_4096_SHA1_AES_256, RSA_OAEP_3072_SHA256_AES_256, RSA_OAEP_4096_SHA256_AES_256, RSA_OAEP_3072_SHA256, RSA_OAEP_4096_SHA256, HPKE_KEM_ML_KEM_768_HKDF_SHA256_AES_256_GCM, HPKE_KEM_ML_KEM_1024_HKDF_SHA256_AES_256_GCM, HPKE_KEM_XWING_HKDF_SHA256_AES_256_GCM)</td>
</tr>
<tr>
    <td><CopyableCode code="protectionLevel" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The protection level of the ImportJob. This must match the protection_level of the version_template on the CryptoKey you attempt to import into. (PROTECTION_LEVEL_UNSPECIFIED, SOFTWARE, HSM, EXTERNAL, EXTERNAL_VPC, HSM_SINGLE_TENANT)</td>
</tr>
<tr>
    <td><CopyableCode code="publicKey" /></td>
    <td><code>object</code></td>
    <td>Output only. The public key with which to wrap key material prior to import. Only returned if state is ACTIVE. (id: WrappingPublicKey)</td>
</tr>
<tr>
    <td><CopyableCode code="publicKeyFormat" /></td>
    <td><code>string</code></td>
    <td>Output only. Specifies the WrappingPublicKey format provided by the customer in the KeyManagementService.GetImportJob request. (PUBLIC_KEY_FORMAT_UNSPECIFIED, PEM, DER, NIST_PQC, XWING_RAW_BYTES)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the ImportJob, indicating if it can be used. (IMPORT_JOB_STATE_UNSPECIFIED, PENDING_GENERATION, ACTIVE, EXPIRED)</td>
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
    <td>Output only. The resource name for this ImportJob in the format `projects/*/locations/*/keyRings/*/importJobs/*`.</td>
</tr>
<tr>
    <td><CopyableCode code="attestation" /></td>
    <td><code>object</code></td>
    <td>Output only. Statement that was generated and signed by the key creator (for example, an HSM) at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only present if the chosen ImportMethod is one with a protection level of HSM. (id: KeyOperationAttestation)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this ImportJob was created.</td>
</tr>
<tr>
    <td><CopyableCode code="cryptoKeyBackend" /></td>
    <td><code>string</code></td>
    <td>Immutable. The resource name of the backend environment where the key material for the wrapping key resides and where all related cryptographic operations are performed. Currently, this field is only populated for keys stored in HSM_SINGLE_TENANT. Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future. Supported resources: * `"projects/*/locations/*/singleTenantHsmInstances/*"`</td>
</tr>
<tr>
    <td><CopyableCode code="expireEventTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this ImportJob expired. Only present if state is EXPIRED.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which this ImportJob is scheduled for expiration and can no longer be used to import key material.</td>
</tr>
<tr>
    <td><CopyableCode code="generateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this ImportJob's key material was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="importMethod" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The wrapping method to be used for incoming key material. (IMPORT_METHOD_UNSPECIFIED, RSA_OAEP_3072_SHA1_AES_256, RSA_OAEP_4096_SHA1_AES_256, RSA_OAEP_3072_SHA256_AES_256, RSA_OAEP_4096_SHA256_AES_256, RSA_OAEP_3072_SHA256, RSA_OAEP_4096_SHA256, HPKE_KEM_ML_KEM_768_HKDF_SHA256_AES_256_GCM, HPKE_KEM_ML_KEM_1024_HKDF_SHA256_AES_256_GCM, HPKE_KEM_XWING_HKDF_SHA256_AES_256_GCM)</td>
</tr>
<tr>
    <td><CopyableCode code="protectionLevel" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The protection level of the ImportJob. This must match the protection_level of the version_template on the CryptoKey you attempt to import into. (PROTECTION_LEVEL_UNSPECIFIED, SOFTWARE, HSM, EXTERNAL, EXTERNAL_VPC, HSM_SINGLE_TENANT)</td>
</tr>
<tr>
    <td><CopyableCode code="publicKey" /></td>
    <td><code>object</code></td>
    <td>Output only. The public key with which to wrap key material prior to import. Only returned if state is ACTIVE. (id: WrappingPublicKey)</td>
</tr>
<tr>
    <td><CopyableCode code="publicKeyFormat" /></td>
    <td><code>string</code></td>
    <td>Output only. Specifies the WrappingPublicKey format provided by the customer in the KeyManagementService.GetImportJob request. (PUBLIC_KEY_FORMAT_UNSPECIFIED, PEM, DER, NIST_PQC, XWING_RAW_BYTES)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The current state of the ImportJob, indicating if it can be used. (IMPORT_JOB_STATE_UNSPECIFIED, PENDING_GENERATION, ACTIVE, EXPIRED)</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a>, <a href="#parameter-importJobsId"><code>importJobsId</code></a></td>
    <td><a href="#parameter-publicKeyFormat"><code>publicKeyFormat</code></a></td>
    <td>Returns metadata for a given ImportJob.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists ImportJobs.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-keyRingsId"><code>keyRingsId</code></a></td>
    <td><a href="#parameter-importJobId"><code>importJobId</code></a></td>
    <td>Create a new ImportJob within a KeyRing. ImportJob.import_method is required.</td>
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
<tr id="parameter-importJobsId">
    <td><CopyableCode code="importJobsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-keyRingsId">
    <td><CopyableCode code="keyRingsId" /></td>
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
<tr id="parameter-importJobId">
    <td><CopyableCode code="importJobId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-orderBy">
    <td><CopyableCode code="orderBy" /></td>
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
<tr id="parameter-publicKeyFormat">
    <td><CopyableCode code="publicKeyFormat" /></td>
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

Returns metadata for a given ImportJob.

```sql
SELECT
name,
attestation,
createTime,
cryptoKeyBackend,
expireEventTime,
expireTime,
generateTime,
importMethod,
protectionLevel,
publicKey,
publicKeyFormat,
state
FROM google.cloudkms.import_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND keyRingsId = '{{ keyRingsId }}' -- required
AND importJobsId = '{{ importJobsId }}' -- required
AND publicKeyFormat = '{{ publicKeyFormat }}'
;
```
</TabItem>
<TabItem value="list">

Lists ImportJobs.

```sql
SELECT
name,
attestation,
createTime,
cryptoKeyBackend,
expireEventTime,
expireTime,
generateTime,
importMethod,
protectionLevel,
publicKey,
publicKeyFormat,
state
FROM google.cloudkms.import_jobs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND keyRingsId = '{{ keyRingsId }}' -- required
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
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

Create a new ImportJob within a KeyRing. ImportJob.import_method is required.

```sql
INSERT INTO google.cloudkms.import_jobs (
data__cryptoKeyBackend,
data__importMethod,
data__protectionLevel,
projectsId,
locationsId,
keyRingsId,
importJobId
)
SELECT 
'{{ cryptoKeyBackend }}',
'{{ importMethod }}',
'{{ protectionLevel }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ keyRingsId }}',
'{{ importJobId }}'
RETURNING
name,
attestation,
createTime,
cryptoKeyBackend,
expireEventTime,
expireTime,
generateTime,
importMethod,
protectionLevel,
publicKey,
publicKeyFormat,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: import_jobs
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the import_jobs resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the import_jobs resource.
    - name: keyRingsId
      value: "{{ keyRingsId }}"
      description: Required parameter for the import_jobs resource.
    - name: cryptoKeyBackend
      value: "{{ cryptoKeyBackend }}"
      description: |
        Immutable. The resource name of the backend environment where the key material for the wrapping key resides and where all related cryptographic operations are performed. Currently, this field is only populated for keys stored in HSM_SINGLE_TENANT. Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future. Supported resources: * \`"projects/*/locations/*/singleTenantHsmInstances/*"\`
    - name: importMethod
      value: "{{ importMethod }}"
      description: |
        Required. Immutable. The wrapping method to be used for incoming key material.
      valid_values: ['IMPORT_METHOD_UNSPECIFIED', 'RSA_OAEP_3072_SHA1_AES_256', 'RSA_OAEP_4096_SHA1_AES_256', 'RSA_OAEP_3072_SHA256_AES_256', 'RSA_OAEP_4096_SHA256_AES_256', 'RSA_OAEP_3072_SHA256', 'RSA_OAEP_4096_SHA256', 'HPKE_KEM_ML_KEM_768_HKDF_SHA256_AES_256_GCM', 'HPKE_KEM_ML_KEM_1024_HKDF_SHA256_AES_256_GCM', 'HPKE_KEM_XWING_HKDF_SHA256_AES_256_GCM']
    - name: protectionLevel
      value: "{{ protectionLevel }}"
      description: |
        Required. Immutable. The protection level of the ImportJob. This must match the protection_level of the version_template on the CryptoKey you attempt to import into.
      valid_values: ['PROTECTION_LEVEL_UNSPECIFIED', 'SOFTWARE', 'HSM', 'EXTERNAL', 'EXTERNAL_VPC', 'HSM_SINGLE_TENANT']
    - name: importJobId
      value: "{{ importJobId }}"
`}</CodeBlock>

</TabItem>
</Tabs>
