--- 
title: license_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - license_configs
  - discoveryengine
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

Creates, updates, deletes, gets or lists a <code>license_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>license_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.discoveryengine.license_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_license_configs_get"
    values={[
        { label: 'projects_locations_license_configs_get', value: 'projects_locations_license_configs_get' }
    ]}
>
<TabItem value="projects_locations_license_configs_get">

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
    <td>Immutable. Identifier. The fully qualified resource name of the license config. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/licenseConfigs/&#123;license_config&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="autoRenew" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the license config should be auto renewed when it reaches the end date.</td>
</tr>
<tr>
    <td><CopyableCode code="endDate" /></td>
    <td><code>object</code></td>
    <td>Optional. The planed end date. (id: GoogleTypeDate)</td>
</tr>
<tr>
    <td><CopyableCode code="freeTrial" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Whether the license config is for free trial.</td>
</tr>
<tr>
    <td><CopyableCode code="geminiBundle" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Whether the license config is for Gemini bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseCount" /></td>
    <td><code>string (int64)</code></td>
    <td>Required. Number of licenses purchased.</td>
</tr>
<tr>
    <td><CopyableCode code="startDate" /></td>
    <td><code>object</code></td>
    <td>Required. The start date. (id: GoogleTypeDate)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the license config.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionTerm" /></td>
    <td><code>string</code></td>
    <td>Required. Subscription term.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionTier" /></td>
    <td><code>string</code></td>
    <td>Required. Subscription tier information for the license config.</td>
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
    <td><a href="#projects_locations_license_configs_get"><CopyableCode code="projects_locations_license_configs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-licenseConfigsId"><code>licenseConfigsId</code></a></td>
    <td></td>
    <td>Gets a LicenseConfig.</td>
</tr>
<tr>
    <td><a href="#projects_locations_license_configs_create"><CopyableCode code="projects_locations_license_configs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-licenseConfigId"><code>licenseConfigId</code></a></td>
    <td>Creates a LicenseConfig</td>
</tr>
<tr>
    <td><a href="#projects_locations_license_configs_patch"><CopyableCode code="projects_locations_license_configs_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-licenseConfigsId"><code>licenseConfigsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the LicenseConfig</td>
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
<tr id="parameter-licenseConfigsId">
    <td><CopyableCode code="licenseConfigsId" /></td>
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
<tr id="parameter-licenseConfigId">
    <td><CopyableCode code="licenseConfigId" /></td>
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
    defaultValue="projects_locations_license_configs_get"
    values={[
        { label: 'projects_locations_license_configs_get', value: 'projects_locations_license_configs_get' }
    ]}
>
<TabItem value="projects_locations_license_configs_get">

Gets a LicenseConfig.

```sql
SELECT
name,
autoRenew,
endDate,
freeTrial,
geminiBundle,
licenseCount,
startDate,
state,
subscriptionTerm,
subscriptionTier
FROM google.discoveryengine.license_configs
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND licenseConfigsId = '{{ licenseConfigsId }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_license_configs_create"
    values={[
        { label: 'projects_locations_license_configs_create', value: 'projects_locations_license_configs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_license_configs_create">

Creates a LicenseConfig

```sql
INSERT INTO google.discoveryengine.license_configs (
data__endDate,
data__licenseCount,
data__name,
data__startDate,
data__subscriptionTier,
data__subscriptionTerm,
data__freeTrial,
data__autoRenew,
projectsId,
locationsId,
licenseConfigId
)
SELECT 
'{{ endDate }}',
'{{ licenseCount }}',
'{{ name }}',
'{{ startDate }}',
'{{ subscriptionTier }}',
'{{ subscriptionTerm }}',
{{ freeTrial }},
{{ autoRenew }},
'{{ projectsId }}',
'{{ locationsId }}',
'{{ licenseConfigId }}'
RETURNING
name,
autoRenew,
endDate,
freeTrial,
geminiBundle,
licenseCount,
startDate,
state,
subscriptionTerm,
subscriptionTier
;
```
</TabItem>
<TabItem value="manifest">

```yaml
# Description fields are for documentation purposes
- name: license_configs
  props:
    - name: projectsId
      value: string
      description: Required parameter for the license_configs resource.
    - name: locationsId
      value: string
      description: Required parameter for the license_configs resource.
    - name: endDate
      value: object
      description: >
        Optional. The planed end date.
        
    - name: licenseCount
      value: string
      description: >
        Required. Number of licenses purchased.
        
    - name: name
      value: string
      description: >
        Immutable. Identifier. The fully qualified resource name of the license config. Format: `projects/{project}/locations/{location}/licenseConfigs/{license_config}`
        
    - name: startDate
      value: object
      description: >
        Required. The start date.
        
    - name: subscriptionTier
      value: string
      description: >
        Required. Subscription tier information for the license config.
        
      valid_values: ['SUBSCRIPTION_TIER_UNSPECIFIED', 'SUBSCRIPTION_TIER_SEARCH', 'SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT', 'SUBSCRIPTION_TIER_NOTEBOOK_LM', 'SUBSCRIPTION_TIER_FRONTLINE_WORKER', 'SUBSCRIPTION_TIER_AGENTSPACE_STARTER', 'SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS', 'SUBSCRIPTION_TIER_ENTERPRISE', 'SUBSCRIPTION_TIER_EDU', 'SUBSCRIPTION_TIER_EDU_PRO', 'SUBSCRIPTION_TIER_EDU_EMERGING', 'SUBSCRIPTION_TIER_EDU_PRO_EMERGING', 'SUBSCRIPTION_TIER_FRONTLINE_STARTER']
    - name: subscriptionTerm
      value: string
      description: >
        Required. Subscription term.
        
      valid_values: ['SUBSCRIPTION_TERM_UNSPECIFIED', 'SUBSCRIPTION_TERM_ONE_MONTH', 'SUBSCRIPTION_TERM_ONE_YEAR', 'SUBSCRIPTION_TERM_THREE_YEARS']
    - name: freeTrial
      value: boolean
      description: >
        Optional. Whether the license config is for free trial.
        
    - name: autoRenew
      value: boolean
      description: >
        Optional. Whether the license config should be auto renewed when it reaches the end date.
        
    - name: licenseConfigId
      value: string
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_license_configs_patch"
    values={[
        { label: 'projects_locations_license_configs_patch', value: 'projects_locations_license_configs_patch' }
    ]}
>
<TabItem value="projects_locations_license_configs_patch">

Updates the LicenseConfig

```sql
UPDATE google.discoveryengine.license_configs
SET 
data__endDate = '{{ endDate }}',
data__licenseCount = '{{ licenseCount }}',
data__name = '{{ name }}',
data__startDate = '{{ startDate }}',
data__subscriptionTier = '{{ subscriptionTier }}',
data__subscriptionTerm = '{{ subscriptionTerm }}',
data__freeTrial = {{ freeTrial }},
data__autoRenew = {{ autoRenew }}
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND licenseConfigsId = '{{ licenseConfigsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
autoRenew,
endDate,
freeTrial,
geminiBundle,
licenseCount,
startDate,
state,
subscriptionTerm,
subscriptionTier;
```
</TabItem>
</Tabs>
