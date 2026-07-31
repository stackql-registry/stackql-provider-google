--- 
title: submissions
hide_title: false
hide_table_of_contents: false
keywords:
  - submissions
  - webrisk
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

Creates, updates, deletes, gets or lists a <code>submissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="submissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.webrisk.submissions" /></td></tr>
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
    <td>Creates a Submission of a URI suspected of containing phishing content for review. If the review confirms malicious phishing content, Google adds the site to [Google's Social Engineering lists](https://support.google.com/webmasters/answer/6350487/) to help protect users. Only allowlisted projects can use this method during Early Access. To obtain access, contact Sales or your customer engineer.</td>
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

Creates a Submission of a URI suspected of containing phishing content for review. If the review confirms malicious phishing content, Google adds the site to [Google's Social Engineering lists](https://support.google.com/webmasters/answer/6350487/) to help protect users. Only allowlisted projects can use this method during Early Access. To obtain access, contact Sales or your customer engineer.

```sql
INSERT INTO google.webrisk.submissions (
data__uri,
projectsId
)
SELECT 
'{{ uri }}',
'{{ projectsId }}'
RETURNING
uri
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: submissions
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the submissions resource.
    - name: uri
      value: "{{ uri }}"
      description: |
        Required. The URI that is being reported for malicious content to be analyzed.
`}</CodeBlock>

</TabItem>
</Tabs>
