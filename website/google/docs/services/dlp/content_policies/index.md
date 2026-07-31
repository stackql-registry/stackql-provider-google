--- 
title: content_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - content_policies
  - dlp
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

Creates, updates, deletes, gets or lists a <code>content_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="content_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dlp.content_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_content_policies_get"
    values={[
        { label: 'projects_locations_content_policies_get', value: 'projects_locations_content_policies_get' },
        { label: 'projects_locations_content_policies_list', value: 'projects_locations_content_policies_list' }
    ]}
>
<TabItem value="projects_locations_content_policies_get">

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
    <td>Output only. Resource name of the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of a contentPolicy; output-only field.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultAction" /></td>
    <td><code>object</code></td>
    <td>Action to take if the content is scanned and no rules match. Defaults to returning an ALLOW verdict if not set. (id: GooglePrivacyDlpV2PolicyAction)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Display name (max 63 chars)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. A stream of errors encountered when the policy was applied. Output only field. Will return the last 100 errors. Whenever the policy is modified this list will be cleared.</td>
</tr>
<tr>
    <td><CopyableCode code="failedToScanSupportedFileType" /></td>
    <td><code>object</code></td>
    <td>Optional. Action to take if the content is a supported file type and size but fails to be scanned, for example because the file is encrypted or corrupted. (id: GooglePrivacyDlpV2PolicyAction)</td>
</tr>
<tr>
    <td><CopyableCode code="inputTooLarge" /></td>
    <td><code>object</code></td>
    <td>Optional. Action to take if the content is a supported file type but is too large to be scanned. (id: GooglePrivacyDlpV2PolicyAction)</td>
</tr>
<tr>
    <td><CopyableCode code="inspectConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. InspectConfig to use to produce findings. (id: GooglePrivacyDlpV2InspectConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="inspectTemplate" /></td>
    <td><code>object</code></td>
    <td>Optional. InspectTemplate to use to produce findings. Deprecated: use inspect_config instead. (id: GooglePrivacyDlpV2InspectTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="loggingConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Log the actions taken by the content policy to external systems.</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>Required. Policies to apply, based on the findings returned by inspection. The first rule to match applies.</td>
</tr>
<tr>
    <td><CopyableCode code="unsupportedFileType" /></td>
    <td><code>object</code></td>
    <td>Optional. Action to take if the content is an unsupported file type. (id: GooglePrivacyDlpV2PolicyAction)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of a contentPolicy; output-only field.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_content_policies_list">

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
    <td>Output only. Resource name of the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of a contentPolicy; output-only field.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultAction" /></td>
    <td><code>object</code></td>
    <td>Action to take if the content is scanned and no rules match. Defaults to returning an ALLOW verdict if not set. (id: GooglePrivacyDlpV2PolicyAction)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. Display name (max 63 chars)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. A stream of errors encountered when the policy was applied. Output only field. Will return the last 100 errors. Whenever the policy is modified this list will be cleared.</td>
</tr>
<tr>
    <td><CopyableCode code="failedToScanSupportedFileType" /></td>
    <td><code>object</code></td>
    <td>Optional. Action to take if the content is a supported file type and size but fails to be scanned, for example because the file is encrypted or corrupted. (id: GooglePrivacyDlpV2PolicyAction)</td>
</tr>
<tr>
    <td><CopyableCode code="inputTooLarge" /></td>
    <td><code>object</code></td>
    <td>Optional. Action to take if the content is a supported file type but is too large to be scanned. (id: GooglePrivacyDlpV2PolicyAction)</td>
</tr>
<tr>
    <td><CopyableCode code="inspectConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. InspectConfig to use to produce findings. (id: GooglePrivacyDlpV2InspectConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="inspectTemplate" /></td>
    <td><code>object</code></td>
    <td>Optional. InspectTemplate to use to produce findings. Deprecated: use inspect_config instead. (id: GooglePrivacyDlpV2InspectTemplate)</td>
</tr>
<tr>
    <td><CopyableCode code="loggingConfigs" /></td>
    <td><code>array</code></td>
    <td>Optional. Log the actions taken by the content policy to external systems.</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>Required. Policies to apply, based on the findings returned by inspection. The first rule to match applies.</td>
</tr>
<tr>
    <td><CopyableCode code="unsupportedFileType" /></td>
    <td><code>object</code></td>
    <td>Optional. Action to take if the content is an unsupported file type. (id: GooglePrivacyDlpV2PolicyAction)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of a contentPolicy; output-only field.</td>
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
    <td><a href="#projects_locations_content_policies_get"><CopyableCode code="projects_locations_content_policies_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-contentPoliciesId"><code>contentPoliciesId</code></a></td>
    <td></td>
    <td>Get a ContentPolicy.</td>
</tr>
<tr>
    <td><a href="#projects_locations_content_policies_list"><CopyableCode code="projects_locations_content_policies_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists ContentPolicies in a parent.</td>
</tr>
<tr>
    <td><a href="#projects_locations_content_policies_create"><CopyableCode code="projects_locations_content_policies_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Create a ContentPolicy.</td>
</tr>
<tr>
    <td><a href="#projects_locations_content_policies_patch"><CopyableCode code="projects_locations_content_policies_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-contentPoliciesId"><code>contentPoliciesId</code></a></td>
    <td></td>
    <td>Update a ContentPolicy.</td>
</tr>
<tr>
    <td><a href="#projects_locations_content_policies_delete"><CopyableCode code="projects_locations_content_policies_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-contentPoliciesId"><code>contentPoliciesId</code></a></td>
    <td></td>
    <td>Delete a ContentPolicy.</td>
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
<tr id="parameter-contentPoliciesId">
    <td><CopyableCode code="contentPoliciesId" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_content_policies_get"
    values={[
        { label: 'projects_locations_content_policies_get', value: 'projects_locations_content_policies_get' },
        { label: 'projects_locations_content_policies_list', value: 'projects_locations_content_policies_list' }
    ]}
>
<TabItem value="projects_locations_content_policies_get">

Get a ContentPolicy.

```sql
SELECT
name,
createTime,
defaultAction,
displayName,
errors,
failedToScanSupportedFileType,
inputTooLarge,
inspectConfig,
inspectTemplate,
loggingConfigs,
rules,
unsupportedFileType,
updateTime
FROM google.dlp.content_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND contentPoliciesId = '{{ contentPoliciesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_content_policies_list">

Lists ContentPolicies in a parent.

```sql
SELECT
name,
createTime,
defaultAction,
displayName,
errors,
failedToScanSupportedFileType,
inputTooLarge,
inspectConfig,
inspectTemplate,
loggingConfigs,
rules,
unsupportedFileType,
updateTime
FROM google.dlp.content_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_content_policies_create"
    values={[
        { label: 'projects_locations_content_policies_create', value: 'projects_locations_content_policies_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_content_policies_create">

Create a ContentPolicy.

```sql
INSERT INTO google.dlp.content_policies (
data__contentPolicy,
data__contentPolicyId,
projectsId,
locationsId
)
SELECT 
'{{ contentPolicy }}',
'{{ contentPolicyId }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
createTime,
defaultAction,
displayName,
errors,
failedToScanSupportedFileType,
inputTooLarge,
inspectConfig,
inspectTemplate,
loggingConfigs,
rules,
unsupportedFileType,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: content_policies
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the content_policies resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the content_policies resource.
    - name: contentPolicy
      description: |
        Required. The content_policy resource.
      value:
        updateTime: "{{ updateTime }}"
        unsupportedFileType:
          returnVerdict: "{{ returnVerdict }}"
        failedToScanSupportedFileType:
          returnVerdict: "{{ returnVerdict }}"
        inspectTemplate:
          updateTime: "{{ updateTime }}"
          inspectConfig:
            minLikelihoodPerInfoType:
              - infoType:
                  name: "{{ name }}"
                  version: "{{ version }}"
                  sensitivityScore: "{{ sensitivityScore }}"
                minLikelihood: "{{ minLikelihood }}"
            infoTypes:
              - name: "{{ name }}"
                version: "{{ version }}"
                sensitivityScore:
                  score: "{{ score }}"
            contentOptions:
              - "{{ contentOptions }}"
            minLikelihood: "{{ minLikelihood }}"
            excludeInfoTypes: {{ excludeInfoTypes }}
            customInfoTypes:
              - likelihood: "{{ likelihood }}"
                exclusionType: "{{ exclusionType }}"
                surrogateType: "{{ surrogateType }}"
                sensitivityScore:
                  score: "{{ score }}"
                storedType:
                  name: "{{ name }}"
                  createTime: "{{ createTime }}"
                metadataKeyValueExpression:
                  valueRegex: "{{ valueRegex }}"
                  keyRegex: "{{ keyRegex }}"
                fileLabelInfoType:
                  sensitivityLabel: "{{ sensitivityLabel }}"
                  googleDriveLabel: "{{ googleDriveLabel }}"
                detectionRules: "{{ detectionRules }}"
                infoType:
                  name: "{{ name }}"
                  version: "{{ version }}"
                  sensitivityScore: "{{ sensitivityScore }}"
                regex:
                  pattern: "{{ pattern }}"
                  groupIndexes: "{{ groupIndexes }}"
                dictionary:
                  wordList: "{{ wordList }}"
                  cloudStoragePath: "{{ cloudStoragePath }}"
            limits:
              maxFindingsPerInfoType:
                - maxFindings: {{ maxFindings }}
                  infoType:
                    name: "{{ name }}"
                    version: "{{ version }}"
                    sensitivityScore: "{{ sensitivityScore }}"
              maxFindingsPerRequest: {{ maxFindingsPerRequest }}
              maxFindingsPerItem: {{ maxFindingsPerItem }}
            ruleSet:
              - rules: "{{ rules }}"
                infoTypes: "{{ infoTypes }}"
            includeQuote: {{ includeQuote }}
          description: "{{ description }}"
          createTime: "{{ createTime }}"
          displayName: "{{ displayName }}"
          allowLimitedAvailabilityInfoTypes: {{ allowLimitedAvailabilityInfoTypes }}
          name: "{{ name }}"
        defaultAction:
          returnVerdict: "{{ returnVerdict }}"
        inspectConfig:
          minLikelihoodPerInfoType:
            - infoType:
                name: "{{ name }}"
                version: "{{ version }}"
                sensitivityScore:
                  score: "{{ score }}"
              minLikelihood: "{{ minLikelihood }}"
          infoTypes:
            - name: "{{ name }}"
              version: "{{ version }}"
              sensitivityScore:
                score: "{{ score }}"
          contentOptions:
            - "{{ contentOptions }}"
          minLikelihood: "{{ minLikelihood }}"
          excludeInfoTypes: {{ excludeInfoTypes }}
          customInfoTypes:
            - likelihood: "{{ likelihood }}"
              exclusionType: "{{ exclusionType }}"
              surrogateType: "{{ surrogateType }}"
              sensitivityScore:
                score: "{{ score }}"
              storedType:
                name: "{{ name }}"
                createTime: "{{ createTime }}"
              metadataKeyValueExpression:
                valueRegex: "{{ valueRegex }}"
                keyRegex: "{{ keyRegex }}"
              fileLabelInfoType:
                sensitivityLabel:
                  guid: "{{ guid }}"
                googleDriveLabel:
                  labelFieldsToMatch: "{{ labelFieldsToMatch }}"
                  labelId: "{{ labelId }}"
              detectionRules: "{{ detectionRules }}"
              infoType:
                name: "{{ name }}"
                version: "{{ version }}"
                sensitivityScore:
                  score: "{{ score }}"
              regex:
                pattern: "{{ pattern }}"
                groupIndexes:
                  - {{ groupIndexes }}
              dictionary:
                wordList:
                  words: "{{ words }}"
                cloudStoragePath:
                  path: "{{ path }}"
          limits:
            maxFindingsPerInfoType:
              - maxFindings: {{ maxFindings }}
                infoType:
                  name: "{{ name }}"
                  version: "{{ version }}"
                  sensitivityScore: "{{ sensitivityScore }}"
            maxFindingsPerRequest: {{ maxFindingsPerRequest }}
            maxFindingsPerItem: {{ maxFindingsPerItem }}
          ruleSet:
            - rules: "{{ rules }}"
              infoTypes: "{{ infoTypes }}"
          includeQuote: {{ includeQuote }}
        createTime: "{{ createTime }}"
        rules:
          - returnVerdict: "{{ returnVerdict }}"
            action:
              returnVerdict: "{{ returnVerdict }}"
            conditions: "{{ conditions }}"
        errors:
          - timestamps: "{{ timestamps }}"
            extraInfo: "{{ extraInfo }}"
            details:
              message: "{{ message }}"
              details: "{{ details }}"
              code: {{ code }}
        loggingConfigs:
          - logToBigQuery:
              tableId: "{{ tableId }}"
              projectId: "{{ projectId }}"
              datasetId: "{{ datasetId }}"
        name: "{{ name }}"
        inputTooLarge:
          returnVerdict: "{{ returnVerdict }}"
        displayName: "{{ displayName }}"
    - name: contentPolicyId
      value: "{{ contentPolicyId }}"
      description: |
        Optional. The content policy ID can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: \`[a-zA-Zd-_]+\`. The maximum length is 100 characters. If empty, the system will generate a random id.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_content_policies_patch"
    values={[
        { label: 'projects_locations_content_policies_patch', value: 'projects_locations_content_policies_patch' }
    ]}
>
<TabItem value="projects_locations_content_policies_patch">

Update a ContentPolicy.

```sql
UPDATE google.dlp.content_policies
SET 
data__contentPolicy = '{{ contentPolicy }}',
data__updateMask = '{{ updateMask }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND contentPoliciesId = '{{ contentPoliciesId }}' --required
RETURNING
name,
createTime,
defaultAction,
displayName,
errors,
failedToScanSupportedFileType,
inputTooLarge,
inspectConfig,
inspectTemplate,
loggingConfigs,
rules,
unsupportedFileType,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_content_policies_delete"
    values={[
        { label: 'projects_locations_content_policies_delete', value: 'projects_locations_content_policies_delete' }
    ]}
>
<TabItem value="projects_locations_content_policies_delete">

Delete a ContentPolicy.

```sql
DELETE FROM google.dlp.content_policies
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND contentPoliciesId = '{{ contentPoliciesId }}' --required
;
```
</TabItem>
</Tabs>
