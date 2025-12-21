--- 
title: instances_entra_id_certificate
hide_title: false
hide_table_of_contents: false
keywords:
  - instances_entra_id_certificate
  - sqladmin
  - google
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage google resources using SQL
custom_edit_url: null
image: /img/stackql-google-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>instances_entra_id_certificate</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>instances_entra_id_certificate</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.sqladmin.instances_entra_id_certificate" /></td></tr>
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
    <td><a href="#add_entra_id_certificate"><CopyableCode code="add_entra_id_certificate" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-instance"><code>instance</code></a></td>
    <td></td>
    <td>Adds a new Entra ID certificate for the specified instance. If an Entra ID certificate was previously added but never used in a certificate rotation, this operation replaces that version.</td>
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
<tr id="parameter-instance">
    <td><CopyableCode code="instance" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="add_entra_id_certificate"
    values={[
        { label: 'add_entra_id_certificate', value: 'add_entra_id_certificate' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_entra_id_certificate">

Adds a new Entra ID certificate for the specified instance. If an Entra ID certificate was previously added but never used in a certificate rotation, this operation replaces that version.

```sql
INSERT INTO google.sqladmin.instances_entra_id_certificate (
project,
instance
)
SELECT 
'{{ project }}',
'{{ instance }}'
RETURNING
name,
acquireSsrsLeaseContext,
apiWarning,
backupContext,
endTime,
error,
exportContext,
importContext,
insertTime,
kind,
operationType,
preCheckMajorVersionUpgradeContext,
selfLink,
startTime,
status,
subOperationType,
targetId,
targetLink,
targetProject,
user
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: instances_entra_id_certificate
  props:
    - name: project
      value: string
      description: Required parameter for the instances_entra_id_certificate resource.
    - name: instance
      value: string
      description: Required parameter for the instances_entra_id_certificate resource.
```
</TabItem>
</Tabs>
