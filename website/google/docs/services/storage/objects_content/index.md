--- 
title: objects_content
hide_title: false
hide_table_of_contents: false
keywords:
  - objects_content
  - storage
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

Creates, updates, deletes, gets or lists an <code>objects_content</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="objects_content" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.storage.objects_content" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="download"
    values={[
        { label: 'download', value: 'download' }
    ]}
>
<TabItem value="download">

The raw content of the object.

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
    <td><CopyableCode code="contents" /></td>
    <td><code>string</code></td>
    <td>The text content of the object.</td>
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
    <td><a href="#download"><CopyableCode code="download" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-object"><code>object</code></a></td>
    <td><a href="#parameter-generation"><code>generation</code></a>, <a href="#parameter-ifGenerationMatch"><code>ifGenerationMatch</code></a>, <a href="#parameter-ifGenerationNotMatch"><code>ifGenerationNotMatch</code></a>, <a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-restoreToken"><code>restoreToken</code></a>, <a href="#parameter-softDeleted"><code>softDeleted</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Downloads the content of an object as text and returns it in the contents field. Text (non-binary) objects only: content is read as a string, so binary object content is unsupported and may be mangled (base64 encoding is not supported). Object names containing slashes must be URL-encoded in the object parameter (for example env%2Fterraform.tfstate), as with the objects get method.</td>
</tr>
<tr>
    <td><a href="#upload"><CopyableCode code="upload" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-data__contents"><code>data__contents</code></a></td>
    <td><a href="#parameter-contentEncoding"><code>contentEncoding</code></a>, <a href="#parameter-ifGenerationMatch"><code>ifGenerationMatch</code></a>, <a href="#parameter-ifGenerationNotMatch"><code>ifGenerationNotMatch</code></a>, <a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a>, <a href="#parameter-kmsKeyName"><code>kmsKeyName</code></a>, <a href="#parameter-predefinedAcl"><code>predefinedAcl</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Uploads object content provided as a text string in the contents field, creating the object or overwriting the content of an existing object (use ifGenerationMatch = 0 for a create-only conditional write). Text (non-binary) content only: binary content is unsupported and may be mangled (base64 encoding is not supported). When the content is itself valid JSON (for example a terraform.tfstate file), wrap the value in the string() function - for example data__contents = string('&#123;...&#125;') - to store it byte-for-byte; without string() the stackql parser interprets valid JSON values as objects and the content is stored as normalized (compact) JSON.</td>
</tr>
<tr>
    <td><a href="#upload"><CopyableCode code="upload" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-data__contents"><code>data__contents</code></a></td>
    <td><a href="#parameter-contentEncoding"><code>contentEncoding</code></a>, <a href="#parameter-ifGenerationMatch"><code>ifGenerationMatch</code></a>, <a href="#parameter-ifGenerationNotMatch"><code>ifGenerationNotMatch</code></a>, <a href="#parameter-ifMetagenerationMatch"><code>ifMetagenerationMatch</code></a>, <a href="#parameter-ifMetagenerationNotMatch"><code>ifMetagenerationNotMatch</code></a>, <a href="#parameter-kmsKeyName"><code>kmsKeyName</code></a>, <a href="#parameter-predefinedAcl"><code>predefinedAcl</code></a>, <a href="#parameter-projection"><code>projection</code></a>, <a href="#parameter-userProject"><code>userProject</code></a></td>
    <td>Uploads object content provided as a text string in the contents field, creating the object or overwriting the content of an existing object (use ifGenerationMatch = 0 for a create-only conditional write). Text (non-binary) content only: binary content is unsupported and may be mangled (base64 encoding is not supported). When the content is itself valid JSON (for example a terraform.tfstate file), wrap the value in the string() function - for example data__contents = string('&#123;...&#125;') - to store it byte-for-byte; without string() the stackql parser interprets valid JSON values as objects and the content is stored as normalized (compact) JSON.</td>
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
<tr id="parameter-bucket">
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-object">
    <td><CopyableCode code="object" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-contentEncoding">
    <td><CopyableCode code="contentEncoding" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-generation">
    <td><CopyableCode code="generation" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-ifGenerationMatch">
    <td><CopyableCode code="ifGenerationMatch" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-ifGenerationNotMatch">
    <td><CopyableCode code="ifGenerationNotMatch" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-ifMetagenerationMatch">
    <td><CopyableCode code="ifMetagenerationMatch" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-ifMetagenerationNotMatch">
    <td><CopyableCode code="ifMetagenerationNotMatch" /></td>
    <td><code>string (int64)</code></td>
    <td></td>
</tr>
<tr id="parameter-kmsKeyName">
    <td><CopyableCode code="kmsKeyName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-predefinedAcl">
    <td><CopyableCode code="predefinedAcl" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projection">
    <td><CopyableCode code="projection" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-restoreToken">
    <td><CopyableCode code="restoreToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-softDeleted">
    <td><CopyableCode code="softDeleted" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-userProject">
    <td><CopyableCode code="userProject" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="download"
    values={[
        { label: 'download', value: 'download' }
    ]}
>
<TabItem value="download">

Downloads the content of an object as text and returns it in the contents field. Text (non-binary) objects only: content is read as a string, so binary object content is unsupported and may be mangled (base64 encoding is not supported). Object names containing slashes must be URL-encoded in the object parameter (for example env%2Fterraform.tfstate), as with the objects get method.

```sql
SELECT
contents
FROM google.storage.objects_content
WHERE bucket = '{{ bucket }}' -- required
AND object = '{{ object }}' -- required
AND generation = '{{ generation }}'
AND ifGenerationMatch = '{{ ifGenerationMatch }}'
AND ifGenerationNotMatch = '{{ ifGenerationNotMatch }}'
AND ifMetagenerationMatch = '{{ ifMetagenerationMatch }}'
AND ifMetagenerationNotMatch = '{{ ifMetagenerationNotMatch }}'
AND projection = '{{ projection }}'
AND restoreToken = '{{ restoreToken }}'
AND softDeleted = '{{ softDeleted }}'
AND userProject = '{{ userProject }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="upload"
    values={[
        { label: 'upload', value: 'upload' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="upload">

Uploads object content provided as a text string in the contents field, creating the object or overwriting the content of an existing object (use ifGenerationMatch = 0 for a create-only conditional write). Text (non-binary) content only: binary content is unsupported and may be mangled (base64 encoding is not supported). When the content is itself valid JSON (for example a terraform.tfstate file), wrap the value in the string() function - for example data__contents = string('&#123;...&#125;') - to store it byte-for-byte; without string() the stackql parser interprets valid JSON values as objects and the content is stored as normalized (compact) JSON.

```sql
INSERT INTO google.storage.objects_content (
data__contents,
bucket,
name,
contentEncoding,
ifGenerationMatch,
ifGenerationNotMatch,
ifMetagenerationMatch,
ifMetagenerationNotMatch,
kmsKeyName,
predefinedAcl,
projection,
userProject
)
SELECT 
'{{ contents }}' /* required */,
'{{ bucket }}',
'{{ name }}',
'{{ contentEncoding }}',
'{{ ifGenerationMatch }}',
'{{ ifGenerationNotMatch }}',
'{{ ifMetagenerationMatch }}',
'{{ ifMetagenerationNotMatch }}',
'{{ kmsKeyName }}',
'{{ predefinedAcl }}',
'{{ projection }}',
'{{ userProject }}'
RETURNING
id,
name,
acl,
bucket,
cacheControl,
componentCount,
contentDisposition,
contentEncoding,
contentLanguage,
contentType,
contexts,
crc32c,
customTime,
customerEncryption,
etag,
eventBasedHold,
generation,
hardDeleteTime,
kind,
kmsKeyName,
md5Hash,
mediaLink,
metadata,
metageneration,
owner,
restoreToken,
retention,
retentionExpirationTime,
selfLink,
size,
softDeleteTime,
storageClass,
temporaryHold,
timeCreated,
timeDeleted,
timeFinalized,
timeStorageClassUpdated,
updated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: objects_content
  props:
    - name: bucket
      value: "{{ bucket }}"
      description: Required parameter for the objects_content resource.
    - name: name
      value: "{{ name }}"
      description: Required parameter for the objects_content resource.
    - name: contents
      value: "{{ contents }}"
      description: |
        The text content of the object. Text (non-binary) content only.
    - name: contentEncoding
      value: "{{ contentEncoding }}"
    - name: ifGenerationMatch
      value: "{{ ifGenerationMatch }}"
    - name: ifGenerationNotMatch
      value: "{{ ifGenerationNotMatch }}"
    - name: ifMetagenerationMatch
      value: "{{ ifMetagenerationMatch }}"
    - name: ifMetagenerationNotMatch
      value: "{{ ifMetagenerationNotMatch }}"
    - name: kmsKeyName
      value: "{{ kmsKeyName }}"
    - name: predefinedAcl
      value: "{{ predefinedAcl }}"
    - name: projection
      value: "{{ projection }}"
    - name: userProject
      value: "{{ userProject }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="upload"
    values={[
        { label: 'upload', value: 'upload' }
    ]}
>
<TabItem value="upload">

Uploads object content provided as a text string in the contents field, creating the object or overwriting the content of an existing object (use ifGenerationMatch = 0 for a create-only conditional write). Text (non-binary) content only: binary content is unsupported and may be mangled (base64 encoding is not supported). When the content is itself valid JSON (for example a terraform.tfstate file), wrap the value in the string() function - for example data__contents = string('&#123;...&#125;') - to store it byte-for-byte; without string() the stackql parser interprets valid JSON values as objects and the content is stored as normalized (compact) JSON.

```sql
REPLACE google.storage.objects_content
SET 
data__contents = '{{ contents }}'
WHERE 
bucket = '{{ bucket }}' --required
AND name = '{{ name }}' --required
AND data__contents = '{{ contents }}' --required
AND contentEncoding = '{{ contentEncoding}}'
AND ifGenerationMatch = '{{ ifGenerationMatch}}'
AND ifGenerationNotMatch = '{{ ifGenerationNotMatch}}'
AND ifMetagenerationMatch = '{{ ifMetagenerationMatch}}'
AND ifMetagenerationNotMatch = '{{ ifMetagenerationNotMatch}}'
AND kmsKeyName = '{{ kmsKeyName}}'
AND predefinedAcl = '{{ predefinedAcl}}'
AND projection = '{{ projection}}'
AND userProject = '{{ userProject}}'
RETURNING
id,
name,
acl,
bucket,
cacheControl,
componentCount,
contentDisposition,
contentEncoding,
contentLanguage,
contentType,
contexts,
crc32c,
customTime,
customerEncryption,
etag,
eventBasedHold,
generation,
hardDeleteTime,
kind,
kmsKeyName,
md5Hash,
mediaLink,
metadata,
metageneration,
owner,
restoreToken,
retention,
retentionExpirationTime,
selfLink,
size,
softDeleteTime,
storageClass,
temporaryHold,
timeCreated,
timeDeleted,
timeFinalized,
timeStorageClassUpdated,
updated;
```
</TabItem>
</Tabs>
