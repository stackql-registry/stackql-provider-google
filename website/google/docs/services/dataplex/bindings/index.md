--- 
title: bindings
hide_title: false
hide_table_of_contents: false
keywords:
  - bindings
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

Creates, updates, deletes, gets or lists a <code>bindings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bindings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dataplex.bindings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_data_domains_bindings_get"
    values={[
        { label: 'projects_locations_data_domains_bindings_get', value: 'projects_locations_data_domains_bindings_get' },
        { label: 'projects_locations_data_domains_bindings_list', value: 'projects_locations_data_domains_bindings_list' }
    ]}
>
<TabItem value="projects_locations_data_domains_bindings_get">

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
    <td>Identifier. The relative resource name of the DataDomainBinding. Format: projects/&#123;project_id_or_number&#125;/locations/&#123;location&#125;/dataDomains/&#123;data_domain_id&#125;/bindings/&#123;binding_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the DataDomainBinding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The full resource name of the Google Cloud resource to be bound (i.e. included together with its contents) to the DataDomain.Format: IAM Full resource name (https://docs.cloud.google.com/iam/docs/full-resource-names) Examples: - GCP Project: //cloudresourcemanager.googleapis.com/projects/&#123;project-id&#125; - BigQuery Dataset: //bigquery.googleapis.com/projects/&#123;project-id&#125;/datasets/&#123;dataset-id&#125; - BigQuery Table: //bigquery.googleapis.com/projects/&#123;project-id&#125;/datasets/&#123;dataset-id&#125;/tables/&#123;table-id&#125; - Dataplex Data Product: //dataplex.googleapis.com/projects/&#123;project-number&#125;/locations/&#123;location&#125;/dataProducts/&#123;data-product-id&#125;Authorization: the resource to be bound must first grant an IAM role with the resource-specific setIamPolicy permission to the DataDomain. Example: - resource: //bigquery.googleapis.com/projects/&#123;project-id&#125;/datasets/&#123;dataset-id&#125; - IAM role: with bigquery.datasets.setIamPolicy permission (e.g. roles/owner) - IAM member: principal://dataplex.googleapis.com/projects/&#123;project-number&#125;/name/locations/&#123;location&#125;/dataDomains/&#123;data-domain-id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-generated unique ID.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_data_domains_bindings_list">

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
    <td>Identifier. The relative resource name of the DataDomainBinding. Format: projects/&#123;project_id_or_number&#125;/locations/&#123;location&#125;/dataDomains/&#123;data_domain_id&#125;/bindings/&#123;binding_id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time at which the DataDomainBinding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The full resource name of the Google Cloud resource to be bound (i.e. included together with its contents) to the DataDomain.Format: IAM Full resource name (https://docs.cloud.google.com/iam/docs/full-resource-names) Examples: - GCP Project: //cloudresourcemanager.googleapis.com/projects/&#123;project-id&#125; - BigQuery Dataset: //bigquery.googleapis.com/projects/&#123;project-id&#125;/datasets/&#123;dataset-id&#125; - BigQuery Table: //bigquery.googleapis.com/projects/&#123;project-id&#125;/datasets/&#123;dataset-id&#125;/tables/&#123;table-id&#125; - Dataplex Data Product: //dataplex.googleapis.com/projects/&#123;project-number&#125;/locations/&#123;location&#125;/dataProducts/&#123;data-product-id&#125;Authorization: the resource to be bound must first grant an IAM role with the resource-specific setIamPolicy permission to the DataDomain. Example: - resource: //bigquery.googleapis.com/projects/&#123;project-id&#125;/datasets/&#123;dataset-id&#125; - IAM role: with bigquery.datasets.setIamPolicy permission (e.g. roles/owner) - IAM member: principal://dataplex.googleapis.com/projects/&#123;project-number&#125;/name/locations/&#123;location&#125;/dataDomains/&#123;data-domain-id&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Output only. System-generated unique ID.</td>
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
    <td><a href="#projects_locations_data_domains_bindings_get"><CopyableCode code="projects_locations_data_domains_bindings_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataDomainsId"><code>dataDomainsId</code></a>, <a href="#parameter-bindingsId"><code>bindingsId</code></a></td>
    <td></td>
    <td>Retrieves a DataDomainBinding resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_domains_bindings_list"><CopyableCode code="projects_locations_data_domains_bindings_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataDomainsId"><code>dataDomainsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists DataDomainBinding resources under a DataDomain.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_domains_bindings_create"><CopyableCode code="projects_locations_data_domains_bindings_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataDomainsId"><code>dataDomainsId</code></a></td>
    <td><a href="#parameter-dataDomainBindingId"><code>dataDomainBindingId</code></a>, <a href="#parameter-validateOnly"><code>validateOnly</code></a></td>
    <td>Creates a DataDomainBinding resource.</td>
</tr>
<tr>
    <td><a href="#projects_locations_data_domains_bindings_delete"><CopyableCode code="projects_locations_data_domains_bindings_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-dataDomainsId"><code>dataDomainsId</code></a>, <a href="#parameter-bindingsId"><code>bindingsId</code></a></td>
    <td></td>
    <td>Deletes a DataDomainBinding resource.</td>
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
<tr id="parameter-bindingsId">
    <td><CopyableCode code="bindingsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
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
<tr id="parameter-dataDomainBindingId">
    <td><CopyableCode code="dataDomainBindingId" /></td>
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
<tr id="parameter-validateOnly">
    <td><CopyableCode code="validateOnly" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_data_domains_bindings_get"
    values={[
        { label: 'projects_locations_data_domains_bindings_get', value: 'projects_locations_data_domains_bindings_get' },
        { label: 'projects_locations_data_domains_bindings_list', value: 'projects_locations_data_domains_bindings_list' }
    ]}
>
<TabItem value="projects_locations_data_domains_bindings_get">

Retrieves a DataDomainBinding resource.

```sql
SELECT
name,
createTime,
resource,
uid
FROM google.dataplex.bindings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataDomainsId = '{{ dataDomainsId }}' -- required
AND bindingsId = '{{ bindingsId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_data_domains_bindings_list">

Lists DataDomainBinding resources under a DataDomain.

```sql
SELECT
name,
createTime,
resource,
uid
FROM google.dataplex.bindings
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND dataDomainsId = '{{ dataDomainsId }}' -- required
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
    defaultValue="projects_locations_data_domains_bindings_create"
    values={[
        { label: 'projects_locations_data_domains_bindings_create', value: 'projects_locations_data_domains_bindings_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_data_domains_bindings_create">

Creates a DataDomainBinding resource.

```sql
INSERT INTO google.dataplex.bindings (
data__name,
data__resource,
projectsId,
locationsId,
dataDomainsId,
dataDomainBindingId,
validateOnly
)
SELECT 
'{{ name }}',
'{{ resource }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ dataDomainsId }}',
'{{ dataDomainBindingId }}',
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
- name: bindings
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the bindings resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the bindings resource.
    - name: dataDomainsId
      value: "{{ dataDomainsId }}"
      description: Required parameter for the bindings resource.
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The relative resource name of the DataDomainBinding. Format: projects/{project_id_or_number}/locations/{location}/dataDomains/{data_domain_id}/bindings/{binding_id}
    - name: resource
      value: "{{ resource }}"
      description: |
        Required. Immutable. The full resource name of the Google Cloud resource to be bound (i.e. included together with its contents) to the DataDomain.Format: IAM Full resource name (https://docs.cloud.google.com/iam/docs/full-resource-names) Examples: - GCP Project: //cloudresourcemanager.googleapis.com/projects/{project-id} - BigQuery Dataset: //bigquery.googleapis.com/projects/{project-id}/datasets/{dataset-id} - BigQuery Table: //bigquery.googleapis.com/projects/{project-id}/datasets/{dataset-id}/tables/{table-id} - Dataplex Data Product: //dataplex.googleapis.com/projects/{project-number}/locations/{location}/dataProducts/{data-product-id}Authorization: the resource to be bound must first grant an IAM role with the resource-specific setIamPolicy permission to the DataDomain. Example: - resource: //bigquery.googleapis.com/projects/{project-id}/datasets/{dataset-id} - IAM role: with bigquery.datasets.setIamPolicy permission (e.g. roles/owner) - IAM member: principal://dataplex.googleapis.com/projects/{project-number}/name/locations/{location}/dataDomains/{data-domain-id}
    - name: dataDomainBindingId
      value: "{{ dataDomainBindingId }}"
    - name: validateOnly
      value: {{ validateOnly }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_data_domains_bindings_delete"
    values={[
        { label: 'projects_locations_data_domains_bindings_delete', value: 'projects_locations_data_domains_bindings_delete' }
    ]}
>
<TabItem value="projects_locations_data_domains_bindings_delete">

Deletes a DataDomainBinding resource.

```sql
DELETE FROM google.dataplex.bindings
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND dataDomainsId = '{{ dataDomainsId }}' --required
AND bindingsId = '{{ bindingsId }}' --required
;
```
</TabItem>
</Tabs>
