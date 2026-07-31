--- 
title: commitments
hide_title: false
hide_table_of_contents: false
keywords:
  - commitments
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

Creates, updates, deletes, gets or lists a <code>commitments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="commitments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.compute.commitments" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uint64)</code></td>
    <td>Output only. [Output Only] The unique identifier for the resource. This identifier is defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the commitment. You must specify a name when you purchase the commitment. The name must be 1-63 characters long, and comply withRFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. (pattern: <code>&#91;a-z&#93;(?:&#91;-a-z0-9&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="autoRenew" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to automatically renew the commitment at the end of its current term. The default value is false. If you set the field to true, each time your commitment reaches the end of its term, Compute Engine automatically renews it for another term. You can update this field anytime before the commitment expires. For example, if the commitment is set to expire at 12 AM UTC-8 on January 3, 2027, you can update this field until 11:59 PM UTC-8 on January 2, 2027.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category of the commitment; specifies whether the commitment is for hardware or software resources. Category MACHINE specifies that you are committing to hardware machine resources such asVCPU or MEMORY, listed in resources. Category LICENSE specifies that you are committing to software licenses, listed in licenseResources. Note that if you specify MACHINE commitments, then you must also specify a type to indicate the machine series of the hardware resource that you are committing to. (CATEGORY_UNSPECIFIED, LICENSE, MACHINE)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Creation timestamp inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="customEndTimestamp" /></td>
    <td><code>string</code></td>
    <td>[Input Only] Optional, specifies the requested commitment end time inRFC3339 text format. Use this option when the desired commitment's end date is later than the start date + term duration.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of the commitment. You can provide this property when you create the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="endTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Commitment end time inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="existingReservations" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of the resource. Always compute#commitment for commitments. (default: compute#commitment)</td>
</tr>
<tr>
    <td><CopyableCode code="licenseResource" /></td>
    <td><code>object</code></td>
    <td>The license specification required as part of a license commitment. (id: LicenseResourceCommitment)</td>
</tr>
<tr>
    <td><CopyableCode code="mergeSourceCommitments" /></td>
    <td><code>array</code></td>
    <td>The list of source commitments that you are merging to create the new merged commitment. For more information, see Merging commitments.</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>object</code></td>
    <td>Input only. Additional params passed with the request, but not persisted as part of resource payload. (id: CommitmentParams)</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td>The minimum time duration that you commit to purchasing resources. The plan that you choose determines the preset term length of the commitment (which is 1 year or 3 years) and affects the discount rate that you receive for your resources. Committing to a longer time duration typically gives you a higher discount rate. The supported values for this field are TWELVE_MONTH (1 year), andTHIRTY_SIX_MONTH (3 years). (INVALID, THIRTY_SIX_MONTH, TWELVE_MONTH)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] URL of the region where the commitment and committed resources are located.</td>
</tr>
<tr>
    <td><CopyableCode code="reservations" /></td>
    <td><code>array</code></td>
    <td>The list of new reservations that you want to create and attach to this commitment.  You must attach reservations to your commitment if your commitment specifies any GPUs or Local SSD disks. For more information, see  Attach reservations to resource-based commitments.  Specify this property only if you want to create new reservations to attach. To attach existing reservations, specify theexistingReservations property instead.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceStatus" /></td>
    <td><code>object</code></td>
    <td>Output only. [Output Only] Status information for Commitment resource. (id: CommitmentResourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>The list of all the hardware resources, with their types and amounts, that you want to commit to. Specify as a separate entry in the list for each individual resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="splitSourceCommitment" /></td>
    <td><code>string</code></td>
    <td>The source commitment from which you are transferring resources to create the new split commitment. For more information, see  Split commitments.</td>
</tr>
<tr>
    <td><CopyableCode code="startTimestamp" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Commitment start time inRFC3339 text format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Status of the commitment with regards to eventual expiration (each commitment has an end date defined). Status can be one of the following values: NOT_YET_ACTIVE, ACTIVE, orEXPIRED. (ACTIVE, CANCELLED, CREATING, EXPIRED, NOT_YET_ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] An optional, human-readable explanation of the status.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of commitment; specifies the machine series for which you want to commit to purchasing resources. The choice of machine series affects the discount rate and the eligible resource types.   The type must be one of the following:ACCELERATOR_OPTIMIZED, ACCELERATOR_OPTIMIZED_A3,ACCELERATOR_OPTIMIZED_A3_MEGA,COMPUTE_OPTIMIZED, COMPUTE_OPTIMIZED_C2D,  COMPUTE_OPTIMIZED_C3, COMPUTE_OPTIMIZED_C3D,COMPUTE_OPTIMIZED_H3, GENERAL_PURPOSE,GENERAL_PURPOSE_C4, GENERAL_PURPOSE_E2,GENERAL_PURPOSE_N2, GENERAL_PURPOSE_N2D,GENERAL_PURPOSE_N4, GENERAL_PURPOSE_T2D,GRAPHICS_OPTIMIZED, GRAPHICS_OPTIMIZED_G4,GRAPHICS_OPTIMIZED_G4_VGPU,MEMORY_OPTIMIZED, MEMORY_OPTIMIZED_M3,MEMORY_OPTIMIZED_X4, STORAGE_OPTIMIZED_Z3. For example, type MEMORY_OPTIMIZED specifies a commitment that applies only to eligible resources of memory optimized M1 and M2 machine series. Type GENERAL_PURPOSE specifies a commitment that applies only to eligible resources of general purpose N1 machine series. (ACCELERATOR_OPTIMIZED, ACCELERATOR_OPTIMIZED_A3, ACCELERATOR_OPTIMIZED_A3_MEGA, ACCELERATOR_OPTIMIZED_A3_ULTRA, ACCELERATOR_OPTIMIZED_A4, COMPUTE_OPTIMIZED, COMPUTE_OPTIMIZED_C2D, COMPUTE_OPTIMIZED_C3, COMPUTE_OPTIMIZED_C3D, COMPUTE_OPTIMIZED_H3, COMPUTE_OPTIMIZED_H4D, GENERAL_PURPOSE, GENERAL_PURPOSE_C4, GENERAL_PURPOSE_C4A, GENERAL_PURPOSE_C4D, GENERAL_PURPOSE_E2, GENERAL_PURPOSE_N2, GENERAL_PURPOSE_N2D, GENERAL_PURPOSE_N4, GENERAL_PURPOSE_N4A, GENERAL_PURPOSE_N4D, GENERAL_PURPOSE_T2D, GRAPHICS_OPTIMIZED, GRAPHICS_OPTIMIZED_G4, GRAPHICS_OPTIMIZED_G4_VGPU, MEMORY_OPTIMIZED, MEMORY_OPTIMIZED_M3, MEMORY_OPTIMIZED_M4, MEMORY_OPTIMIZED_M4_6TB, MEMORY_OPTIMIZED_X4_1440_24T, MEMORY_OPTIMIZED_X4_16TB, MEMORY_OPTIMIZED_X4_1920_32T, MEMORY_OPTIMIZED_X4_24TB, MEMORY_OPTIMIZED_X4_32TB, MEMORY_OPTIMIZED_X4_480_6T, MEMORY_OPTIMIZED_X4_480_8T, MEMORY_OPTIMIZED_X4_960_12T, MEMORY_OPTIMIZED_X4_960_16T, NETWORK_OPTIMIZED_C4N, STORAGE_OPTIMIZED_Z3, TYPE_UNSPECIFIED)</td>
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
    <td>[Output Only] Unique identifier for the resource; defined by the server.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>A list of Commitment resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. [Output Only] Type of resource. Always compute#commitmentList for lists of commitments. (default: compute#commitmentList)</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>[Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger thanmaxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.</td>
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
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-commitment"><code>commitment</code></a></td>
    <td></td>
    <td>Returns the specified commitment resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Retrieves a list of commitments contained within<br />the specified region.</td>
</tr>
<tr>
    <td><a href="#insert"><CopyableCode code="insert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-requestId"><code>requestId</code></a></td>
    <td>Creates a commitment in the specified project using the data<br />included in the request.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-commitment"><code>commitment</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-paths"><code>paths</code></a></td>
    <td>Updates the specified commitment with the data included in the request.<br />Update is performed only on selected fields included as part of<br />update-mask. Only the following fields can be updated: auto_renew and plan.</td>
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
<tr id="parameter-commitment">
    <td><CopyableCode code="commitment" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
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
<tr id="parameter-paths">
    <td><CopyableCode code="paths" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
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

Returns the specified commitment resource.

```sql
SELECT
id,
name,
autoRenew,
category,
creationTimestamp,
customEndTimestamp,
description,
endTimestamp,
existingReservations,
kind,
licenseResource,
mergeSourceCommitments,
params,
plan,
region,
reservations,
resourceStatus,
resources,
selfLink,
splitSourceCommitment,
startTimestamp,
status,
statusMessage,
type
FROM google.compute.commitments
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND commitment = '{{ commitment }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieves a list of commitments contained within<br />the specified region.

```sql
SELECT
id,
items,
kind,
nextPageToken,
selfLink,
warning
FROM google.compute.commitments
WHERE project = '{{ project }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
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

Creates a commitment in the specified project using the data<br />included in the request.

```sql
INSERT INTO google.compute.commitments (
data__customEndTimestamp,
data__params,
data__name,
data__resources,
data__type,
data__licenseResource,
data__splitSourceCommitment,
data__description,
data__existingReservations,
data__mergeSourceCommitments,
data__autoRenew,
data__category,
data__reservations,
data__plan,
project,
region,
requestId
)
SELECT 
'{{ customEndTimestamp }}',
'{{ params }}',
'{{ name }}',
'{{ resources }}',
'{{ type }}',
'{{ licenseResource }}',
'{{ splitSourceCommitment }}',
'{{ description }}',
'{{ existingReservations }}',
'{{ mergeSourceCommitments }}',
{{ autoRenew }},
'{{ category }}',
'{{ reservations }}',
'{{ plan }}',
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
- name: commitments
  props:
    - name: project
      value: "{{ project }}"
      description: Required parameter for the commitments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the commitments resource.
    - name: customEndTimestamp
      value: "{{ customEndTimestamp }}"
      description: |
        [Input Only] Optional, specifies the requested commitment end time inRFC3339 text format. Use this option when the desired
        commitment's end date is later than the start date + term duration.
    - name: params
      description: |
        Input only. Additional params passed with the request, but not persisted
        as part of resource payload.
      value:
        resourceManagerTags: "{{ resourceManagerTags }}"
    - name: name
      value: "{{ name }}"
      description: |
        Name of the commitment. You must specify a name when you purchase the
        commitment. The name must be 1-63 characters long, and comply withRFC1035.
        Specifically, the name must be 1-63 characters long and match the regular
        expression \`[a-z]([-a-z0-9]*[a-z0-9])?\` which means the first
        character must be a lowercase letter, and all following characters must
        be a dash, lowercase letter, or digit, except the last character, which
        cannot be a dash.
    - name: resources
      description: |
        The list of all the hardware resources, with their types and amounts, that
        you want to commit to. Specify as a separate entry in the list for each
        individual resource type.
      value:
        - acceleratorType: "{{ acceleratorType }}"
          type: "{{ type }}"
          amount: "{{ amount }}"
    - name: type
      value: "{{ type }}"
      description: |
        The type of commitment; specifies the
        machine series for which you want to commit to purchasing resources.
        The choice of machine series affects the discount rate and the eligible
        resource types.
        The type must be one of the following:ACCELERATOR_OPTIMIZED, ACCELERATOR_OPTIMIZED_A3,ACCELERATOR_OPTIMIZED_A3_MEGA,COMPUTE_OPTIMIZED, COMPUTE_OPTIMIZED_C2D,
        COMPUTE_OPTIMIZED_C3, COMPUTE_OPTIMIZED_C3D,COMPUTE_OPTIMIZED_H3, GENERAL_PURPOSE,GENERAL_PURPOSE_C4, GENERAL_PURPOSE_E2,GENERAL_PURPOSE_N2, GENERAL_PURPOSE_N2D,GENERAL_PURPOSE_N4, GENERAL_PURPOSE_T2D,GRAPHICS_OPTIMIZED, GRAPHICS_OPTIMIZED_G4,GRAPHICS_OPTIMIZED_G4_VGPU,MEMORY_OPTIMIZED, MEMORY_OPTIMIZED_M3,MEMORY_OPTIMIZED_X4, STORAGE_OPTIMIZED_Z3. For
        example, type MEMORY_OPTIMIZED specifies a commitment that
        applies only to eligible resources of memory optimized M1 and M2 machine
        series. Type GENERAL_PURPOSE specifies a commitment that
        applies only to eligible resources of general purpose N1 machine series.
      valid_values: ['ACCELERATOR_OPTIMIZED', 'ACCELERATOR_OPTIMIZED_A3', 'ACCELERATOR_OPTIMIZED_A3_MEGA', 'ACCELERATOR_OPTIMIZED_A3_ULTRA', 'ACCELERATOR_OPTIMIZED_A4', 'COMPUTE_OPTIMIZED', 'COMPUTE_OPTIMIZED_C2D', 'COMPUTE_OPTIMIZED_C3', 'COMPUTE_OPTIMIZED_C3D', 'COMPUTE_OPTIMIZED_H3', 'COMPUTE_OPTIMIZED_H4D', 'GENERAL_PURPOSE', 'GENERAL_PURPOSE_C4', 'GENERAL_PURPOSE_C4A', 'GENERAL_PURPOSE_C4D', 'GENERAL_PURPOSE_E2', 'GENERAL_PURPOSE_N2', 'GENERAL_PURPOSE_N2D', 'GENERAL_PURPOSE_N4', 'GENERAL_PURPOSE_N4A', 'GENERAL_PURPOSE_N4D', 'GENERAL_PURPOSE_T2D', 'GRAPHICS_OPTIMIZED', 'GRAPHICS_OPTIMIZED_G4', 'GRAPHICS_OPTIMIZED_G4_VGPU', 'MEMORY_OPTIMIZED', 'MEMORY_OPTIMIZED_M3', 'MEMORY_OPTIMIZED_M4', 'MEMORY_OPTIMIZED_M4_6TB', 'MEMORY_OPTIMIZED_X4_1440_24T', 'MEMORY_OPTIMIZED_X4_16TB', 'MEMORY_OPTIMIZED_X4_1920_32T', 'MEMORY_OPTIMIZED_X4_24TB', 'MEMORY_OPTIMIZED_X4_32TB', 'MEMORY_OPTIMIZED_X4_480_6T', 'MEMORY_OPTIMIZED_X4_480_8T', 'MEMORY_OPTIMIZED_X4_960_12T', 'MEMORY_OPTIMIZED_X4_960_16T', 'NETWORK_OPTIMIZED_C4N', 'STORAGE_OPTIMIZED_Z3', 'TYPE_UNSPECIFIED']
    - name: licenseResource
      description: |
        The license specification required as part of a license commitment.
      value:
        coresPerLicense: "{{ coresPerLicense }}"
        license: "{{ license }}"
        amount: "{{ amount }}"
    - name: splitSourceCommitment
      value: "{{ splitSourceCommitment }}"
      description: |
        The source commitment from which you are transferring resources to create
        the new split commitment. For more information, see
        Split commitments.
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of the commitment. You can provide this property
        when you create the resource.
    - name: existingReservations
      value:
        - "{{ existingReservations }}"
    - name: mergeSourceCommitments
      value:
        - "{{ mergeSourceCommitments }}"
      description: |
        The list of source commitments that you are merging to create the new
        merged commitment. For more information, see
        Merging commitments.
    - name: autoRenew
      value: {{ autoRenew }}
      description: |
        Specifies whether to automatically renew the commitment at the end of its
        current term. The default value is false. If you set the field
        to true, each time your commitment reaches the end of its
        term, Compute Engine automatically renews it for another term. You can
        update this field anytime before the commitment expires. For example, if
        the commitment is set to expire at 12 AM UTC-8 on January 3, 2027, you can
        update this field until 11:59 PM UTC-8 on January 2, 2027.
    - name: category
      value: "{{ category }}"
      description: |
        The category of the commitment; specifies whether the commitment is for
        hardware or software resources. Category MACHINE specifies
        that you are committing to hardware machine resources such asVCPU or MEMORY, listed in resources.
        Category LICENSE specifies that you are committing to software
        licenses, listed in licenseResources.
        Note that if you specify MACHINE commitments, then you must
        also specify a type to indicate the machine series of the
        hardware resource that you are committing to.
      valid_values: ['CATEGORY_UNSPECIFIED', 'LICENSE', 'MACHINE']
    - name: reservations
      description: |
        The list of new reservations that you want to create and attach to this
        commitment.
        You must attach reservations to your commitment if your commitment
        specifies any GPUs or Local SSD disks. For more information, see
        Attach reservations to resource-based commitments.
        Specify this property only if you want to create new
        reservations to attach. To attach existing reservations, specify theexistingReservations property instead.
      value:
        - deleteAtTime: "{{ deleteAtTime }}"
          status: "{{ status }}"
          name: "{{ name }}"
          resourceStatus:
            specificSkuAllocation:
              sourceInstanceTemplateId: "{{ sourceInstanceTemplateId }}"
              utilizations: "{{ utilizations }}"
            reservationBlockCount: {{ reservationBlockCount }}
            reservationMaintenance:
              maintenanceOngoingCount: {{ maintenanceOngoingCount }}
              maintenancePendingCount: {{ maintenancePendingCount }}
              subblockInfraMaintenanceOngoingCount: {{ subblockInfraMaintenanceOngoingCount }}
              instanceMaintenancePendingCount: {{ instanceMaintenancePendingCount }}
              schedulingType: "{{ schedulingType }}"
              instanceMaintenanceOngoingCount: {{ instanceMaintenanceOngoingCount }}
              upcomingGroupMaintenance:
                windowStartTime: "{{ windowStartTime }}"
                canReschedule: {{ canReschedule }}
                windowEndTime: "{{ windowEndTime }}"
                maintenanceReasons:
                  - "{{ maintenanceReasons }}"
                type: "{{ type }}"
                latestWindowStartTime: "{{ latestWindowStartTime }}"
                maintenanceStatus: "{{ maintenanceStatus }}"
                maintenanceOnShutdown: {{ maintenanceOnShutdown }}
              subblockInfraMaintenancePendingCount: {{ subblockInfraMaintenancePendingCount }}
            healthInfo:
              healthStatus: "{{ healthStatus }}"
              healthyBlockCount: {{ healthyBlockCount }}
              degradedBlockCount: {{ degradedBlockCount }}
          confidentialComputeType: "{{ confidentialComputeType }}"
          description: "{{ description }}"
          deleteAfterDuration:
            nanos: {{ nanos }}
            seconds: "{{ seconds }}"
          id: "{{ id }}"
          schedulingType: "{{ schedulingType }}"
          earlyAccessMaintenance: "{{ earlyAccessMaintenance }}"
          creationTimestamp: "{{ creationTimestamp }}"
          resourcePolicies: "{{ resourcePolicies }}"
          advancedDeploymentControl:
            reservationOperationalMode: "{{ reservationOperationalMode }}"
          deploymentType: "{{ deploymentType }}"
          commitment: "{{ commitment }}"
          protectionTier: "{{ protectionTier }}"
          kind: "{{ kind }}"
          shareSettings:
            shareType: "{{ shareType }}"
            projectMap: "{{ projectMap }}"
          reservationSharingPolicy:
            serviceShareType: "{{ serviceShareType }}"
          params:
            resourceManagerTags: "{{ resourceManagerTags }}"
          zone: "{{ zone }}"
          selfLink: "{{ selfLink }}"
          aggregateReservation:
            inUseResources:
              - accelerator:
                  acceleratorCount: {{ acceleratorCount }}
                  acceleratorType: "{{ acceleratorType }}"
            workloadType: "{{ workloadType }}"
            vmFamily: "{{ vmFamily }}"
            reservedResources:
              - accelerator:
                  acceleratorCount: {{ acceleratorCount }}
                  acceleratorType: "{{ acceleratorType }}"
          linkedCommitments: "{{ linkedCommitments }}"
          satisfiesPzs: {{ satisfiesPzs }}
          enableEmergentMaintenance: {{ enableEmergentMaintenance }}
          specificReservation:
            assuredCount: "{{ assuredCount }}"
            instanceProperties:
              minCpuPlatform: "{{ minCpuPlatform }}"
              guestAccelerators:
                - acceleratorType: "{{ acceleratorType }}"
                  acceleratorCount: {{ acceleratorCount }}
              localSsds:
                - diskSizeGb: "{{ diskSizeGb }}"
                  interface: "{{ interface }}"
              machineType: "{{ machineType }}"
              locationHint: "{{ locationHint }}"
            inUseCount: "{{ inUseCount }}"
            sourceInstanceTemplate: "{{ sourceInstanceTemplate }}"
            count: "{{ count }}"
          specificReservationRequired: {{ specificReservationRequired }}
    - name: plan
      value: "{{ plan }}"
      description: |
        The minimum time duration that you commit to purchasing resources.
        The plan that you choose determines the preset term length of the
        commitment (which is 1 year or 3 years) and affects the discount rate that
        you receive for your resources. Committing to a longer time duration
        typically gives you a higher discount rate. The supported values for this
        field are TWELVE_MONTH (1 year), andTHIRTY_SIX_MONTH (3 years).
      valid_values: ['INVALID', 'THIRTY_SIX_MONTH', 'TWELVE_MONTH']
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates the specified commitment with the data included in the request.<br />Update is performed only on selected fields included as part of<br />update-mask. Only the following fields can be updated: auto_renew and plan.

```sql
UPDATE google.compute.commitments
SET 
data__customEndTimestamp = '{{ customEndTimestamp }}',
data__params = '{{ params }}',
data__name = '{{ name }}',
data__resources = '{{ resources }}',
data__type = '{{ type }}',
data__licenseResource = '{{ licenseResource }}',
data__splitSourceCommitment = '{{ splitSourceCommitment }}',
data__description = '{{ description }}',
data__existingReservations = '{{ existingReservations }}',
data__mergeSourceCommitments = '{{ mergeSourceCommitments }}',
data__autoRenew = {{ autoRenew }},
data__category = '{{ category }}',
data__reservations = '{{ reservations }}',
data__plan = '{{ plan }}'
WHERE 
project = '{{ project }}' --required
AND region = '{{ region }}' --required
AND commitment = '{{ commitment }}' --required
AND updateMask = '{{ updateMask}}'
AND requestId = '{{ requestId}}'
AND paths = '{{ paths}}'
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
