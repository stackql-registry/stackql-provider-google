--- 
title: source_uploads
hide_title: false
hide_table_of_contents: false
keywords:
  - source_uploads
  - run
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

Creates, updates, deletes, gets or lists a <code>source_uploads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="source_uploads" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.run.source_uploads" /></td></tr>
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
    <td><a href="#upload"><CopyableCode code="upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Uploads a source archive to a Google Cloud Storage bucket through Cloud Run. The uploaded source object should be used for Cloud Run resource deployments. User is responsible for managing the lifecycle of the uploaded object. If uploading through the Cloud Run API to Cloud Storage is not desired, you can use the IAM Deny Policy to deny the `run.locations.uploadSource` permission for all principals.</td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="upload"
    values={[
        { label: 'upload', value: 'upload' }
    ]}
>
<TabItem value="upload">

Uploads a source archive to a Google Cloud Storage bucket through Cloud Run. The uploaded source object should be used for Cloud Run resource deployments. User is responsible for managing the lifecycle of the uploaded object. If uploading through the Cloud Run API to Cloud Storage is not desired, you can use the IAM Deny Policy to deny the `run.locations.uploadSource` permission for all principals.

```sql
EXEC google.run.source_uploads.upload 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required 
@@json=
'{
"service": "{{ service }}"
}'
;
```
</TabItem>
</Tabs>
