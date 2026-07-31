--- 
title: data_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - data_domains
  - dataplex
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

Creates, updates, deletes, gets or lists a <code>data_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.data_domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_data_domains_get"
    values={[
        { label: 'projects_locations_data_domains_get', value: 'projects_locations_data_domains_get' },
        { label: 'projects_locations_data_domains_list', value: 'projects_locations_data_domains_list' }
    ]}
>
<TabItem value="projects_locations_data_domains_get">

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
    <td>Identifier. The relative resource name of the DataDomain, of the form: projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/dataDomains/&#123;data_domain_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="contacts" /></td>
    <td><code>object</code></td>
    <td>Required. Contact info for the Data Domains. (id: GoogleCloudDataplexV1Contacts)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the DataDomain was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-provided description of the DataDomain.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. User-friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the DataDomain.</td>
</tr>
<tr>
    <td><CopyableCode code="parentDataDomain" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The resource name of the parent DataDomain. Empty if this is a top-level DataDomain. Format: projects/&#123;project_id_or_number&#125;/locations/&#123;location&#125;/dataDomains/&#123;parent_data_domain_id&#125; This field is immutable after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="policyMember" /></td>
    <td><code>object</code></td>
    <td>Output only. Output-only policy member strings of this resource. (id: GoogleIamV1ResourcePolicyMember)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-generated globally unique ID for the DataDomain.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the DataDomain was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_domains_list">

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
    <td>Identifier. The relative resource name of the DataDomain, of the form: projects/&#123;project_id_or_number&#125;/locations/&#123;location_id&#125;/dataDomains/&#123;data_domain_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="contacts" /></td>
    <td><code>object</code></td>
    <td>Required. Contact info for the Data Domains. (id: GoogleCloudDataplexV1Contacts)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the DataDomain was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. User-provided description of the DataDomain.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Required. User-friendly display name.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>Optional. User-defined labels for the DataDomain.</td>
</tr>
<tr>
    <td><CopyableCode code="parentDataDomain" /></td>
    <td><code>string</code></td>
    <td>Optional. Immutable. The resource name of the parent DataDomain. Empty if this is a top-level DataDomain. Format: projects/&#123;project_id_or_number&#125;/locations/&#123;location&#125;/dataDomains/&#123;parent_data_domain_id&#125; This field is immutable after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="policyMember" /></td>
    <td><code>object</code></td>
    <td>Output only. Output-only policy member strings of this resource. (id: GoogleIamV1ResourcePolicyMember)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-generated globally unique ID for the DataDomain.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the DataDomain was last updated.</td>
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
    <td><a href="#projects_locations_data_domains_get"><CopyableCode code="projects_locations_data_domains_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataDomainsId"><code>dataDomainsId</code></a></td>
    <td></td>
    <td>Retrieves a DataDomain resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_domains_list"><CopyableCode code="projects_locations_data_domains_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists DataDomain resources in a project and location.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_domains_create"><CopyableCode code="projects_locations_data_domains_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-dataDomainId"><code>dataDomainId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a DataDomain resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_domains_patch"><CopyableCode code="projects_locations_data_domains_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataDomainsId"><code>dataDomainsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Updates a DataDomain resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_domains_delete"><CopyableCode code="projects_locations_data_domains_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataDomainsId"><code>dataDomainsId</code></a></td>
    <td></td>
    <td>Deletes a DataDomain resource (allowed only when there are no bindings).</td>
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
<tr id="parameter-dataDomainsId">
    <td><CopyableCode code="dataDomainsId" /></td>
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
<tr id="parameter-dataDomainId">
    <td><CopyableCode code="dataDomainId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_data_domains_get"
    values={[
        { label: 'projects_locations_data_domains_get', value: 'projects_locations_data_domains_get' },
        { label: 'projects_locations_data_domains_list', value: 'projects_locations_data_domains_list' }
    ]}
>
<TabItem value="projects_locations_data_domains_get">

Retrieves a DataDomain resource.

```sql
SELECT
name,
contacts,
createTime,
description,
displayName,
labels,
parentDataDomain,
policyMember,
uid,
updateTime
FROM google.dataplex.data_domains
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataDomainsId = '{{ dataDomainsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_data_domains_list">

Lists DataDomain resources in a project and location.

```sql
SELECT
name,
contacts,
createTime,
description,
displayName,
labels,
parentDataDomain,
policyMember,
uid,
updateTime
FROM google.dataplex.data_domains
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_data_domains_create"
    values={[
        { label: 'projects_locations_data_domains_create', value: 'projects_locations_data_domains_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_data_domains_create">

Creates a DataDomain resource.

```sql
INSERT INTO google.dataplex.data_domains (
data__labels,
data__contacts,
data__displayName,
data__parentDataDomain,
data__name,
data__description,
projectsId,
locationsId,
dataDomainId,
validateOnly
)
SELECT 
'{{ labels }}',
'{{ contacts }}',
'{{ displayName }}',
'{{ parentDataDomain }}',
'{{ name }}',
'{{ description }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dataDomainId }}',
'{{ validateOnly }}'
RETURNING
name,
done,
error,
metadata,
response
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_domains
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the data_domains resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the data_domains resource.
    - name: labels
      value: "{{ labels }}"
      description: |
        Optional. User-defined labels for the DataDomain.
    - name: contacts
      description: |
        Required. Contact info for the Data Domains.
      value:
        identities:
          - contactRole: "{{ contactRole }}"
            contactName: "{{ contactName }}"
            contactId: "{{ contactId }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Required. User-friendly display name.
    - name: parentDataDomain
      value: "{{ parentDataDomain }}"
      description: |
        Optional. Immutable. The resource name of the parent DataDomain. Empty if this is a top-level DataDomain. Format: projects/{project_id_or_number}/locations/{location}/dataDomains/{parent_data_domain_id} This field is immutable after creation.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The relative resource name of the DataDomain, of the form: projects/{project_id_or_number}/locations/{location_id}/dataDomains/{data_domain_id}
    - name: description
      value: "{{ description }}"
      description: |
        Optional. User-provided description of the DataDomain.
    - name: dataDomainId
      value: "{{ dataDomainId }}"
    - name: validateOnly
      value: {{ validateOnly }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_data_domains_patch"
    values={[
        { label: 'projects_locations_data_domains_patch', value: 'projects_locations_data_domains_patch' }
    ]}
>
<TabItem value="projects_locations_data_domains_patch">

Updates a DataDomain resource.

```sql
UPDATE google.dataplex.data_domains
SET 
data__labels = '{{ labels }}',
data__contacts = '{{ contacts }}',
data__displayName = '{{ displayName }}',
data__parentDataDomain = '{{ parentDataDomain }}',
data__name = '{{ name }}',
data__description = '{{ description }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataDomainsId = '{{ dataDomainsId }}' --required
AND updateMask = '{{ updateMask}}'
AND validateOnly = {{ validateOnly}}
RETURNING
name,
done,
error,
metadata,
response;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_data_domains_delete"
    values={[
        { label: 'projects_locations_data_domains_delete', value: 'projects_locations_data_domains_delete' }
    ]}
>
<TabItem value="projects_locations_data_domains_delete">

Deletes a DataDomain resource (allowed only when there are no bindings).

```sql
DELETE FROM google.dataplex.data_domains
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataDomainsId = '{{ dataDomainsId }}' --required
;
```
</TabItem>
</Tabs>
