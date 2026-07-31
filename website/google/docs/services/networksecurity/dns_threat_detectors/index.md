--- 
title: dns_threat_detectors
hide_title: false
hide_table_of_contents: false
keywords:
  - dns_threat_detectors
  - networksecurity
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

Creates, updates, deletes, gets or lists a <code>dns_threat_detectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dns_threat_detectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.networksecurity.dns_threat_detectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_dns_threat_detectors_get"
    values={[
        { label: 'projects_locations_dns_threat_detectors_get', value: 'projects_locations_dns_threat_detectors_get' },
        { label: 'projects_locations_dns_threat_detectors_list', value: 'projects_locations_dns_threat_detectors_list' }
    ]}
>
<TabItem value="projects_locations_dns_threat_detectors_get">

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
    <td>Immutable. Identifier. Name of the DnsThreatDetector resource.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time stamp.</td>
</tr>
<tr>
    <td><CopyableCode code="excludedNetworks" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of network resource names which aren't monitored by this DnsThreatDetector. Example: `projects/PROJECT_ID/global/networks/NETWORK_NAME`.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Any labels associated with the DnsThreatDetector, listed as key value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Required. The provider used for DNS threat analysis. (PROVIDER_UNSPECIFIED, INFOBLOX)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time stamp.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_dns_threat_detectors_list">

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
    <td>Immutable. Identifier. Name of the DnsThreatDetector resource.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Create time stamp.</td>
</tr>
<tr>
    <td><CopyableCode code="excludedNetworks" /></td>
    <td><code>array</code></td>
    <td>Optional. A list of network resource names which aren't monitored by this DnsThreatDetector. Example: `projects/PROJECT_ID/global/networks/NETWORK_NAME`.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. Any labels associated with the DnsThreatDetector, listed as key value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Required. The provider used for DNS threat analysis. (PROVIDER_UNSPECIFIED, INFOBLOX)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Update time stamp.</td>
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
    <td><a href="#projects_locations_dns_threat_detectors_get"><CopyableCode code="projects_locations_dns_threat_detectors_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dnsThreatDetectorsId"><code>dnsThreatDetectorsId</code></a></td>
    <td></td>
    <td>Gets the details of a single DnsThreatDetector.</td>
</tr>
<tr>
    <td><a href="#projects_locations_dns_threat_detectors_list"><CopyableCode code="projects_locations_dns_threat_detectors_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists DnsThreatDetectors in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_dns_threat_detectors_create"><CopyableCode code="projects_locations_dns_threat_detectors_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-dnsThreatDetectorId"><code>dnsThreatDetectorId</code></a></td>
    <td>Creates a new DnsThreatDetector in a given project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_dns_threat_detectors_patch"><CopyableCode code="projects_locations_dns_threat_detectors_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dnsThreatDetectorsId"><code>dnsThreatDetectorsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates a single DnsThreatDetector.</td>
</tr>
<tr>
    <td><a href="#projects_locations_dns_threat_detectors_delete"><CopyableCode code="projects_locations_dns_threat_detectors_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dnsThreatDetectorsId"><code>dnsThreatDetectorsId</code></a></td>
    <td></td>
    <td>Deletes a single DnsThreatDetector.</td>
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
<tr id="parameter-dnsThreatDetectorsId">
    <td><CopyableCode code="dnsThreatDetectorsId" /></td>
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
<tr id="parameter-dnsThreatDetectorId">
    <td><CopyableCode code="dnsThreatDetectorId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_dns_threat_detectors_get"
    values={[
        { label: 'projects_locations_dns_threat_detectors_get', value: 'projects_locations_dns_threat_detectors_get' },
        { label: 'projects_locations_dns_threat_detectors_list', value: 'projects_locations_dns_threat_detectors_list' }
    ]}
>
<TabItem value="projects_locations_dns_threat_detectors_get">

Gets the details of a single DnsThreatDetector.

```sql
SELECT
name,
createTime,
excludedNetworks,
labels,
provider,
updateTime
FROM google.networksecurity.dns_threat_detectors
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dnsThreatDetectorsId = '{{ dnsThreatDetectorsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_dns_threat_detectors_list">

Lists DnsThreatDetectors in a given project and location.

```sql
SELECT
name,
createTime,
excludedNetworks,
labels,
provider,
updateTime
FROM google.networksecurity.dns_threat_detectors
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_dns_threat_detectors_create"
    values={[
        { label: 'projects_locations_dns_threat_detectors_create', value: 'projects_locations_dns_threat_detectors_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_dns_threat_detectors_create">

Creates a new DnsThreatDetector in a given project and location.

```sql
INSERT INTO google.networksecurity.dns_threat_detectors (
data__name,
data__provider,
data__labels,
data__excludedNetworks,
projectsId,
locationsId,
dnsThreatDetectorId
)
SELECT 
'{{ name }}',
'{{ provider }}',
'{{ labels }}',
'{{ excludedNetworks }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dnsThreatDetectorId }}'
RETURNING
name,
createTime,
excludedNetworks,
labels,
provider,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dns_threat_detectors
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the dns_threat_detectors resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the dns_threat_detectors resource.
    - name: name
      value: "{{ name }}"
      description: |
        Immutable. Identifier. Name of the DnsThreatDetector resource.
    - name: provider
      value: "{{ provider }}"
      description: |
        Required. The provider used for DNS threat analysis.
      valid_values: ['PROVIDER_UNSPECIFIED', 'INFOBLOX']
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. Any labels associated with the DnsThreatDetector, listed as key value pairs.
    - name: excludedNetworks
      value:
        - "{{ excludedNetworks }}"
      description: |
        Optional. A list of network resource names which aren't monitored by this DnsThreatDetector. Example: \`projects/PROJECT_ID/global/networks/NETWORK_NAME\`.
    - name: dnsThreatDetectorId
      value: "{{ dnsThreatDetectorId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_dns_threat_detectors_patch"
    values={[
        { label: 'projects_locations_dns_threat_detectors_patch', value: 'projects_locations_dns_threat_detectors_patch' }
    ]}
>
<TabItem value="projects_locations_dns_threat_detectors_patch">

Updates a single DnsThreatDetector.

```sql
UPDATE google.networksecurity.dns_threat_detectors
SET 
data__name = '{{ name }}',
data__provider = '{{ provider }}',
data__labels = '{{ labels }}',
data__excludedNetworks = '{{ excludedNetworks }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dnsThreatDetectorsId = '{{ dnsThreatDetectorsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
createTime,
excludedNetworks,
labels,
provider,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_dns_threat_detectors_delete"
    values={[
        { label: 'projects_locations_dns_threat_detectors_delete', value: 'projects_locations_dns_threat_detectors_delete' }
    ]}
>
<TabItem value="projects_locations_dns_threat_detectors_delete">

Deletes a single DnsThreatDetector.

```sql
DELETE FROM google.networksecurity.dns_threat_detectors
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dnsThreatDetectorsId = '{{ dnsThreatDetectorsId }}' --required
;
```
</TabItem>
</Tabs>
