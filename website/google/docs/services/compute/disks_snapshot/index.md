--- 
title: disks_snapshot
hide_title: false
hide_table_of_contents: false
keywords:
  - disks_snapshot
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

Creates, updates, deletes, gets or lists a <code>disks_snapshot</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="disks_snapshot" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.disks_snapshot" /></td></tr>
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
    <td><a href="#create_snapshot"><CopyableCode code="create_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-disk"><code>disk</code></a></td>
    <td><a href="#parameter-guestFlush"><code>guestFlush</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a snapshot of a specified persistent disk. For regular snapshot<br />creation, consider using snapshots.insert<br />instead, as that method supports more features, such as creating snapshots<br />in a project different from the source disk project.</td>
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
<tr id="parameter-disk">
    <td><CopyableCode code="disk" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-guestFlush">
    <td><CopyableCode code="guestFlush" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-requestId">
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_snapshot"
    values={[
        { label: 'create_snapshot', value: 'create_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_snapshot">

Creates a snapshot of a specified persistent disk. For regular snapshot<br />creation, consider using snapshots.insert<br />instead, as that method supports more features, such as creating snapshots<br />in a project different from the source disk project.

```sql
INSERT INTO google.compute.disks_snapshot (
data__chainName,
data__description,
data__guestFlush,
data__labelFingerprint,
data__labels,
data__locationHint,
data__name,
data__params,
data__snapshotEncryptionKey,
data__snapshotType,
data__sourceDisk,
data__sourceDiskEncryptionKey,
data__sourceDiskForRecoveryCheckpoint,
data__sourceInstantSnapshot,
data__sourceInstantSnapshotEncryptionKey,
data__storageLocations,
project,
zone,
disk,
guestFlush,
requestId
)
SELECT 
'{{ chainName }}',
'{{ description }}',
{{ guestFlush }},
'{{ labelFingerprint }}',
'{{ labels }}',
'{{ locationHint }}',
'{{ name }}',
'{{ params }}',
'{{ snapshotEncryptionKey }}',
'{{ snapshotType }}',
'{{ sourceDisk }}',
'{{ sourceDiskEncryptionKey }}',
'{{ sourceDiskForRecoveryCheckpoint }}',
'{{ sourceInstantSnapshot }}',
'{{ sourceInstantSnapshotEncryptionKey }}',
'{{ storageLocations }}',
'{{ project }}',
'{{ zone }}',
'{{ disk }}',
'{{ guestFlush }}',
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
- name: disks_snapshot
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the disks_snapshot resource.
    - name: zone
      value: "{{ zone }}"
      description: Required parameter for the disks_snapshot resource.
    - name: disk
      value: "{{ disk }}"
      description: Required parameter for the disks_snapshot resource.
    - name: chainName
      value: "{{ chainName }}"
      description: |
        Creates the new snapshot in the snapshot chain labeled with the
        specified name. The chain name must be 1-63 characters long and comply
        with RFC1035. This is an uncommon option only for advanced service
        owners who needs to create separate snapshot chains, for example,
        for chargeback tracking. When you describe your snapshot resource, this
        field is visible only if it has a non-empty value.
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of this resource. Provide this property when you
        create the resource.
    - name: guestFlush
      value: {{ guestFlush }}
      description: |
        [Input Only] Whether to attempt an application consistent snapshot by
        informing the OS to prepare for the snapshot process.
    - name: labelFingerprint
      value: "{{ labelFingerprint }}"
      description: |
        A fingerprint for the labels being applied to this snapshot, which is
        essentially a hash of the labels set used for optimistic locking. The
        fingerprint is initially generated by Compute Engine and changes after
        every request to modify or update labels. You must always provide an
        up-to-date fingerprint hash in order to update or change labels,
        otherwise the request will fail with error412 conditionNotMet.
        To see the latest fingerprint, make a get() request to
        retrieve a snapshot.
    - name: labels
      value: "{{ labels }}"
      description: |
        Labels to apply to this snapshot. These can be later modified by
        the setLabels method.
        Label values may be empty.
    - name: locationHint
      value: "{{ locationHint }}"
      description: |
        An opaque location hint used to place the snapshot close to other
        resources.
        This field is for use by internal tools that use the public API.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the resource; provided by the client when the resource is created.
        The name must be 1-63 characters long, and comply withRFC1035.
        Specifically, the name must be 1-63 characters long and match the regular
        expression \`[a-z]([-a-z0-9]*[a-z0-9])?\` which means the first
        character must be a lowercase letter, and all following characters must be
        a dash, lowercase letter, or digit, except the last character, which cannot
        be a dash.
    - name: params
      description: |
        Input only. [Input Only] Additional params passed with the request, but not persisted
        as part of resource payload.
      value:
        resourceManagerTags: "{{ resourceManagerTags }}"
    - name: snapshotEncryptionKey
      description: |
        Encrypts the snapshot using acustomer-supplied
        encryption key.
        After you encrypt a snapshot using a customer-supplied key, you must
        provide the same key if you use the snapshot later. For example, you must
        provide the encryption key when you create a disk from the encrypted
        snapshot in a future request.
        Customer-supplied encryption keys do not protect access to metadata
        of the snapshot.
        If you do not provide an encryption key when creating the snapshot, then
        the snapshot will be encrypted using an automatically generated key and you
        do not need to provide a key to use the snapshot later.
      value:
        kmsKeyName: "{{ kmsKeyName }}"
        kmsKeyServiceAccount: "{{ kmsKeyServiceAccount }}"
        rawKey: "{{ rawKey }}"
        rsaEncryptedKey: "{{ rsaEncryptedKey }}"
        sha256: "{{ sha256 }}"
    - name: snapshotType
      value: "{{ snapshotType }}"
      description: |
        Indicates the type of the snapshot.
      valid_values: ['ARCHIVE', 'STANDARD']
    - name: sourceDisk
      value: "{{ sourceDisk }}"
      description: |
        The source disk used to create this snapshot.
    - name: sourceDiskEncryptionKey
      description: |
        The customer-supplied
        encryption key of the source disk. Required if the source disk is
        protected by a customer-supplied encryption key.
      value:
        kmsKeyName: "{{ kmsKeyName }}"
        kmsKeyServiceAccount: "{{ kmsKeyServiceAccount }}"
        rawKey: "{{ rawKey }}"
        rsaEncryptedKey: "{{ rsaEncryptedKey }}"
        sha256: "{{ sha256 }}"
    - name: sourceDiskForRecoveryCheckpoint
      value: "{{ sourceDiskForRecoveryCheckpoint }}"
      description: |
        The source disk whose recovery checkpoint will be used to create this
        snapshot.
    - name: sourceInstantSnapshot
      value: "{{ sourceInstantSnapshot }}"
      description: |
        The source instant snapshot used to create this snapshot. You can provide
        this as a partial or full URL to the resource. For example, the following
        are valid values:
        - https://www.googleapis.com/compute/v1/projects/project/zones/zone/instantSnapshots/instantSnapshot
        - projects/project/zones/zone/instantSnapshots/instantSnapshot
        - zones/zone/instantSnapshots/instantSnapshot
    - name: sourceInstantSnapshotEncryptionKey
      description: |
        Customer provided encryption key when creating Snapshot from Instant
        Snapshot.
      value:
        kmsKeyName: "{{ kmsKeyName }}"
        kmsKeyServiceAccount: "{{ kmsKeyServiceAccount }}"
        rawKey: "{{ rawKey }}"
        rsaEncryptedKey: "{{ rsaEncryptedKey }}"
        sha256: "{{ sha256 }}"
    - name: storageLocations
      value:
        - "{{ storageLocations }}"
      description: |
        Cloud Storage bucket storage location of the snapshot (regional or
        multi-regional).
    - name: guestFlush
      value: {{ guestFlush }}
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

</TabItem>
</Tabs>
