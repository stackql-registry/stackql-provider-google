--- 
title: findings
hide_title: false
hide_table_of_contents: false
keywords:
  - findings
  - securitycenter
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

Creates, updates, deletes, gets or lists a <code>findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.securitycenter.findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="folders_sources_findings_list"
    values={[
        { label: 'folders_sources_findings_list', value: 'folders_sources_findings_list' },
        { label: 'organizations_sources_findings_list', value: 'organizations_sources_findings_list' },
        { label: 'projects_sources_findings_list', value: 'projects_sources_findings_list' }
    ]}
>
<TabItem value="folders_sources_findings_list">

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
    <td><CopyableCode code="finding" /></td>
    <td><code>object</code></td>
    <td> (id: Finding)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td> (id: Resource)</td>
</tr>
<tr>
    <td><CopyableCode code="stateChange" /></td>
    <td><code>string</code></td>
    <td> (UNUSED, CHANGED, UNCHANGED, ADDED, REMOVED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_sources_findings_list">

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
    <td><CopyableCode code="finding" /></td>
    <td><code>object</code></td>
    <td> (id: Finding)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td> (id: Resource)</td>
</tr>
<tr>
    <td><CopyableCode code="stateChange" /></td>
    <td><code>string</code></td>
    <td> (UNUSED, CHANGED, UNCHANGED, ADDED, REMOVED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_sources_findings_list">

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
    <td><CopyableCode code="finding" /></td>
    <td><code>object</code></td>
    <td> (id: Finding)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td> (id: Resource)</td>
</tr>
<tr>
    <td><CopyableCode code="stateChange" /></td>
    <td><code>string</code></td>
    <td> (UNUSED, CHANGED, UNCHANGED, ADDED, REMOVED)</td>
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
    <td><a href="#folders_sources_findings_list"><CopyableCode code="folders_sources_findings_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-compareDuration"><code>compareDuration</code></a>, <a href="#parameter-fieldMask"><code>fieldMask</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-readTime"><code>readTime</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_sources_findings_list"><CopyableCode code="organizations_sources_findings_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-compareDuration"><code>compareDuration</code></a>, <a href="#parameter-fieldMask"><code>fieldMask</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-readTime"><code>readTime</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_sources_findings_list"><CopyableCode code="projects_sources_findings_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-compareDuration"><code>compareDuration</code></a>, <a href="#parameter-fieldMask"><code>fieldMask</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-readTime"><code>readTime</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_sources_findings_create"><CopyableCode code="organizations_sources_findings_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-findingId"><code>findingId</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_sources_findings_patch"><CopyableCode code="folders_sources_findings_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_sources_findings_patch"><CopyableCode code="organizations_sources_findings_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_sources_findings_patch"><CopyableCode code="projects_sources_findings_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_findings_bulk_mute"><CopyableCode code="folders_findings_bulk_mute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_sources_findings_group"><CopyableCode code="folders_sources_findings_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_sources_findings_set_mute"><CopyableCode code="folders_sources_findings_set_mute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_sources_findings_set_state"><CopyableCode code="folders_sources_findings_set_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_findings_bulk_mute"><CopyableCode code="organizations_findings_bulk_mute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_sources_findings_group"><CopyableCode code="organizations_sources_findings_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_sources_findings_set_mute"><CopyableCode code="organizations_sources_findings_set_mute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#organizations_sources_findings_set_state"><CopyableCode code="organizations_sources_findings_set_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_findings_bulk_mute"><CopyableCode code="projects_findings_bulk_mute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_sources_findings_group"><CopyableCode code="projects_sources_findings_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_sources_findings_set_mute"><CopyableCode code="projects_sources_findings_set_mute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_sources_findings_set_state"><CopyableCode code="projects_sources_findings_set_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td></td>
    <td></td>
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
<tr id="parameter-findingsId">
    <td><CopyableCode code="findingsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-foldersId">
    <td><CopyableCode code="foldersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-organizationsId">
    <td><CopyableCode code="organizationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sourcesId">
    <td><CopyableCode code="sourcesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-compareDuration">
    <td><CopyableCode code="compareDuration" /></td>
    <td><code>string (google-duration)</code></td>
    <td></td>
</tr>
<tr id="parameter-fieldMask">
    <td><CopyableCode code="fieldMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-findingId">
    <td><CopyableCode code="findingId" /></td>
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
<tr id="parameter-readTime">
    <td><CopyableCode code="readTime" /></td>
    <td><code>string (google-datetime)</code></td>
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
    defaultValue="folders_sources_findings_list"
    values={[
        { label: 'folders_sources_findings_list', value: 'folders_sources_findings_list' },
        { label: 'organizations_sources_findings_list', value: 'organizations_sources_findings_list' },
        { label: 'projects_sources_findings_list', value: 'projects_sources_findings_list' }
    ]}
>
<TabItem value="folders_sources_findings_list">

Successful response

```sql
SELECT
finding,
resource,
stateChange
FROM google.securitycenter.findings
WHERE foldersId = '{{ foldersId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
AND compareDuration = '{{ compareDuration }}'
AND fieldMask = '{{ fieldMask }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND readTime = '{{ readTime }}'
;
```
</TabItem>
<TabItem value="organizations_sources_findings_list">

Successful response

```sql
SELECT
finding,
resource,
stateChange
FROM google.securitycenter.findings
WHERE organizationsId = '{{ organizationsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
AND compareDuration = '{{ compareDuration }}'
AND fieldMask = '{{ fieldMask }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND readTime = '{{ readTime }}'
;
```
</TabItem>
<TabItem value="projects_sources_findings_list">

Successful response

```sql
SELECT
finding,
resource,
stateChange
FROM google.securitycenter.findings
WHERE projectsId = '{{ projectsId }}' -- required
AND sourcesId = '{{ sourcesId }}' -- required
AND compareDuration = '{{ compareDuration }}'
AND fieldMask = '{{ fieldMask }}'
AND filter = '{{ filter }}'
AND orderBy = '{{ orderBy }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND readTime = '{{ readTime }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_sources_findings_create"
    values={[
        { label: 'organizations_sources_findings_create', value: 'organizations_sources_findings_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_sources_findings_create">

No description available.

```sql
INSERT INTO google.securitycenter.findings (
data__access,
data__affectedResources,
data__agent,
data__agentAnomaly,
data__agentDataAccessEvents,
data__agentSessions,
data__aiModel,
data__application,
data__artifactGuardPolicies,
data__attackExposure,
data__backupDisasterRecovery,
data__canonicalName,
data__category,
data__chokepoint,
data__cloudArmor,
data__cloudDlpDataProfile,
data__cloudDlpInspection,
data__complianceDetails,
data__compliances,
data__connections,
data__containers,
data__createTime,
data__dataAccessEvents,
data__dataFlowEvents,
data__dataRetentionDeletionEvents,
data__database,
data__description,
data__discoveredWorkload,
data__disk,
data__eventTime,
data__exfiltration,
data__externalExposure,
data__externalUri,
data__files,
data__findingClass,
data__groupMemberships,
data__iamBindings,
data__iamDetails,
data__indicator,
data__ipRules,
data__job,
data__kernelRootkit,
data__kubernetes,
data__loadBalancers,
data__logEntries,
data__mitreAttack,
data__moduleName,
data__mute,
data__muteInitiator,
data__name,
data__networks,
data__nextSteps,
data__notebook,
data__orgPolicies,
data__parent,
data__policyViolationSummary,
data__processes,
data__resourceName,
data__secret,
data__securityPosture,
data__severity,
data__sourceProperties,
data__state,
data__toxicCombination,
data__vertexAi,
data__vulnerability,
organizationsId,
sourcesId,
findingId
)
SELECT 
'{{ access }}',
'{{ affectedResources }}',
'{{ agent }}',
'{{ agentAnomaly }}',
'{{ agentDataAccessEvents }}',
'{{ agentSessions }}',
'{{ aiModel }}',
'{{ application }}',
'{{ artifactGuardPolicies }}',
'{{ attackExposure }}',
'{{ backupDisasterRecovery }}',
'{{ canonicalName }}',
'{{ category }}',
'{{ chokepoint }}',
'{{ cloudArmor }}',
'{{ cloudDlpDataProfile }}',
'{{ cloudDlpInspection }}',
'{{ complianceDetails }}',
'{{ compliances }}',
'{{ connections }}',
'{{ containers }}',
'{{ createTime }}',
'{{ dataAccessEvents }}',
'{{ dataFlowEvents }}',
'{{ dataRetentionDeletionEvents }}',
'{{ database }}',
'{{ description }}',
'{{ discoveredWorkload }}',
'{{ disk }}',
'{{ eventTime }}',
'{{ exfiltration }}',
'{{ externalExposure }}',
'{{ externalUri }}',
'{{ files }}',
'{{ findingClass }}',
'{{ groupMemberships }}',
'{{ iamBindings }}',
'{{ iamDetails }}',
'{{ indicator }}',
'{{ ipRules }}',
'{{ job }}',
'{{ kernelRootkit }}',
'{{ kubernetes }}',
'{{ loadBalancers }}',
'{{ logEntries }}',
'{{ mitreAttack }}',
'{{ moduleName }}',
'{{ mute }}',
'{{ muteInitiator }}',
'{{ name }}',
'{{ networks }}',
'{{ nextSteps }}',
'{{ notebook }}',
'{{ orgPolicies }}',
'{{ parent }}',
'{{ policyViolationSummary }}',
'{{ processes }}',
'{{ resourceName }}',
'{{ secret }}',
'{{ securityPosture }}',
'{{ severity }}',
'{{ sourceProperties }}',
'{{ state }}',
'{{ toxicCombination }}',
'{{ vertexAi }}',
'{{ vulnerability }}',
'{{ organizationsId }}',
'{{ sourcesId }}',
'{{ findingId }}'
RETURNING
name,
access,
affectedResources,
agent,
agentAnomaly,
agentDataAccessEvents,
agentSessions,
aiModel,
application,
artifactGuardPolicies,
attackExposure,
backupDisasterRecovery,
canonicalName,
category,
chokepoint,
cloudArmor,
cloudDlpDataProfile,
cloudDlpInspection,
complianceDetails,
compliances,
connections,
contacts,
containers,
createTime,
dataAccessEvents,
dataFlowEvents,
dataRetentionDeletionEvents,
database,
description,
discoveredWorkload,
disk,
eventTime,
exfiltration,
externalExposure,
externalSystems,
externalUri,
files,
findingClass,
groupMemberships,
iamBindings,
iamDetails,
indicator,
ipRules,
job,
kernelRootkit,
kubernetes,
loadBalancers,
logEntries,
mitreAttack,
moduleName,
mute,
muteInfo,
muteInitiator,
muteUpdateTime,
networks,
nextSteps,
notebook,
orgPolicies,
parent,
parentDisplayName,
policyViolationSummary,
processes,
resourceName,
secret,
securityMarks,
securityPosture,
severity,
sourceProperties,
state,
toxicCombination,
vertexAi,
vulnerability
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: findings
  props:
    - name: organizationsId
      value: "{{ organizationsId }}"
      description: Required parameter for the findings resource.
    - name: sourcesId
      value: "{{ sourcesId }}"
      description: Required parameter for the findings resource.
    - name: access
      value:
        callerIp: "{{ callerIp }}"
        callerIpGeo:
          regionCode: "{{ regionCode }}"
        methodName: "{{ methodName }}"
        principalEmail: "{{ principalEmail }}"
        principalSubject: "{{ principalSubject }}"
        serviceAccountDelegationInfo:
          - principalEmail: "{{ principalEmail }}"
            principalSubject: "{{ principalSubject }}"
        serviceAccountKeyName: "{{ serviceAccountKeyName }}"
        serviceName: "{{ serviceName }}"
        userAgent: "{{ userAgent }}"
        userAgentFamily: "{{ userAgentFamily }}"
        userName: "{{ userName }}"
    - name: affectedResources
      value:
        count: "{{ count }}"
    - name: agent
      value:
        displayName: "{{ displayName }}"
        id: "{{ id }}"
    - name: agentAnomaly
      value:
        confidenceScore: {{ confidenceScore }}
        detectorReferences:
          - detectorId: "{{ detectorId }}"
            displayName: "{{ displayName }}"
            explanation: "{{ explanation }}"
            recommendation: "{{ recommendation }}"
            severity: "{{ severity }}"
        invocationReferences:
          - invocationId: "{{ invocationId }}"
    - name: agentDataAccessEvents
      value:
        - eventId: "{{ eventId }}"
          eventTime: "{{ eventTime }}"
          operation: "{{ operation }}"
          principalSubject: "{{ principalSubject }}"
    - name: agentSessions
      value:
        - sessionId: "{{ sessionId }}"
    - name: aiModel
      value:
        deploymentPlatform: "{{ deploymentPlatform }}"
        displayName: "{{ displayName }}"
        domain: "{{ domain }}"
        library: "{{ library }}"
        location: "{{ location }}"
        name: "{{ name }}"
        publisher: "{{ publisher }}"
        usageCategory: "{{ usageCategory }}"
    - name: application
      value:
        baseUri: "{{ baseUri }}"
        fullUri: "{{ fullUri }}"
    - name: artifactGuardPolicies
      value:
        failingPolicies:
          - failureReason: "{{ failureReason }}"
            policyId: "{{ policyId }}"
            type: "{{ type }}"
        resourceId: "{{ resourceId }}"
    - name: attackExposure
      value:
        attackExposureResult: "{{ attackExposureResult }}"
        exposedHighValueResourcesCount: {{ exposedHighValueResourcesCount }}
        exposedLowValueResourcesCount: {{ exposedLowValueResourcesCount }}
        exposedMediumValueResourcesCount: {{ exposedMediumValueResourcesCount }}
        latestCalculationTime: "{{ latestCalculationTime }}"
        score: {{ score }}
        state: "{{ state }}"
    - name: backupDisasterRecovery
      value:
        appliance: "{{ appliance }}"
        applications:
          - "{{ applications }}"
        backupCreateTime: "{{ backupCreateTime }}"
        backupTemplate: "{{ backupTemplate }}"
        backupType: "{{ backupType }}"
        host: "{{ host }}"
        policies:
          - "{{ policies }}"
        policyOptions:
          - "{{ policyOptions }}"
        profile: "{{ profile }}"
        storagePool: "{{ storagePool }}"
    - name: canonicalName
      value: "{{ canonicalName }}"
    - name: category
      value: "{{ category }}"
    - name: chokepoint
      value:
        relatedFindings:
          - "{{ relatedFindings }}"
    - name: cloudArmor
      value:
        adaptiveProtection:
          confidence: {{ confidence }}
        attack:
          classification: "{{ classification }}"
          volumeBps: {{ volumeBps }}
          volumeBpsLong: "{{ volumeBpsLong }}"
          volumePps: {{ volumePps }}
          volumePpsLong: "{{ volumePpsLong }}"
        duration: "{{ duration }}"
        requests:
          longTermAllowed: {{ longTermAllowed }}
          longTermDenied: {{ longTermDenied }}
          ratio: {{ ratio }}
          shortTermAllowed: {{ shortTermAllowed }}
        securityPolicy:
          name: "{{ name }}"
          preview: {{ preview }}
          type: "{{ type }}"
        threatVector: "{{ threatVector }}"
    - name: cloudDlpDataProfile
      value:
        dataProfile: "{{ dataProfile }}"
        infoTypes:
          - name: "{{ name }}"
            sensitivityScore:
              score: "{{ score }}"
            version: "{{ version }}"
        parentType: "{{ parentType }}"
    - name: cloudDlpInspection
      value:
        fullScan: {{ fullScan }}
        infoType: "{{ infoType }}"
        infoTypeCount: "{{ infoTypeCount }}"
        inspectJob: "{{ inspectJob }}"
    - name: complianceDetails
      value:
        cloudControl:
          cloudControlName: "{{ cloudControlName }}"
          policyType: "{{ policyType }}"
          type: "{{ type }}"
          version: {{ version }}
        cloudControlDeploymentNames:
          - "{{ cloudControlDeploymentNames }}"
        frameworks:
          - category: "{{ category }}"
            controls: "{{ controls }}"
            displayName: "{{ displayName }}"
            name: "{{ name }}"
            type: "{{ type }}"
    - name: compliances
      value:
        - ids: "{{ ids }}"
          standard: "{{ standard }}"
          version: "{{ version }}"
    - name: connections
      value:
        - destinationIp: "{{ destinationIp }}"
          destinationPort: {{ destinationPort }}
          protocol: "{{ protocol }}"
          sourceIp: "{{ sourceIp }}"
          sourcePort: {{ sourcePort }}
    - name: containers
      value:
        - createTime: "{{ createTime }}"
          imageId: "{{ imageId }}"
          labels: "{{ labels }}"
          name: "{{ name }}"
          uri: "{{ uri }}"
    - name: createTime
      value: "{{ createTime }}"
    - name: dataAccessEvents
      value:
        - eventId: "{{ eventId }}"
          eventTime: "{{ eventTime }}"
          operation: "{{ operation }}"
          principalEmail: "{{ principalEmail }}"
    - name: dataFlowEvents
      value:
        - eventId: "{{ eventId }}"
          eventTime: "{{ eventTime }}"
          operation: "{{ operation }}"
          principalEmail: "{{ principalEmail }}"
          violatedLocation: "{{ violatedLocation }}"
    - name: dataRetentionDeletionEvents
      value:
        - dataObjectCount: "{{ dataObjectCount }}"
          eventDetectionTime: "{{ eventDetectionTime }}"
          eventType: "{{ eventType }}"
          maxRetentionAllowed: "{{ maxRetentionAllowed }}"
          minRetentionAllowed: "{{ minRetentionAllowed }}"
    - name: database
      value:
        displayName: "{{ displayName }}"
        grantees:
          - "{{ grantees }}"
        name: "{{ name }}"
        query: "{{ query }}"
        userName: "{{ userName }}"
        version: "{{ version }}"
    - name: description
      value: "{{ description }}"
    - name: discoveredWorkload
      value:
        confidence: "{{ confidence }}"
        detectedRelevantHardware: {{ detectedRelevantHardware }}
        detectedRelevantKeywords: {{ detectedRelevantKeywords }}
        detectedRelevantPackages: {{ detectedRelevantPackages }}
        workloadType: "{{ workloadType }}"
    - name: disk
      value:
        name: "{{ name }}"
    - name: eventTime
      value: "{{ eventTime }}"
    - name: exfiltration
      value:
        sources:
          - components: "{{ components }}"
            name: "{{ name }}"
        targets:
          - components: "{{ components }}"
            name: "{{ name }}"
        totalExfiltratedBytes: "{{ totalExfiltratedBytes }}"
    - name: externalExposure
      value:
        backendBucket: "{{ backendBucket }}"
        backendService: "{{ backendService }}"
        exposedApplication: "{{ exposedApplication }}"
        exposedEndpoint: "{{ exposedEndpoint }}"
        exposedService: "{{ exposedService }}"
        forwardingRule: "{{ forwardingRule }}"
        hostnameUri: "{{ hostnameUri }}"
        httpResponse:
          - path: "{{ path }}"
            statusCode: "{{ statusCode }}"
        instanceGroup: "{{ instanceGroup }}"
        internalBackendService: "{{ internalBackendService }}"
        loadBalancerFirewallPolicy: "{{ loadBalancerFirewallPolicy }}"
        networkEndpointGroup: "{{ networkEndpointGroup }}"
        networkIngressFirewallPolicy: "{{ networkIngressFirewallPolicy }}"
        networkPathInsightsGenerationTime: "{{ networkPathInsightsGenerationTime }}"
        privateIpAddress: "{{ privateIpAddress }}"
        privatePort: "{{ privatePort }}"
        pscNetworkAttachment: "{{ pscNetworkAttachment }}"
        pscServiceAttachment: "{{ pscServiceAttachment }}"
        publicIpAddress: "{{ publicIpAddress }}"
        publicPort: "{{ publicPort }}"
        serviceFirewallPolicy: "{{ serviceFirewallPolicy }}"
    - name: externalUri
      value: "{{ externalUri }}"
    - name: files
      value:
        - contents: "{{ contents }}"
          diskPath:
            partitionUuid: "{{ partitionUuid }}"
            relativePath: "{{ relativePath }}"
          fileLoadState: "{{ fileLoadState }}"
          hashedSize: "{{ hashedSize }}"
          operations: "{{ operations }}"
          partiallyHashed: {{ partiallyHashed }}
          path: "{{ path }}"
          sha256: "{{ sha256 }}"
          size: "{{ size }}"
    - name: findingClass
      value: "{{ findingClass }}"
      valid_values: ['FINDING_CLASS_UNSPECIFIED', 'THREAT', 'VULNERABILITY', 'MISCONFIGURATION', 'OBSERVATION', 'SCC_ERROR', 'POSTURE_VIOLATION', 'TOXIC_COMBINATION', 'SENSITIVE_DATA_RISK', 'CHOKEPOINT', 'EXTERNAL_EXPOSURE', 'SECRET']
    - name: groupMemberships
      value:
        - groupId: "{{ groupId }}"
          groupType: "{{ groupType }}"
    - name: iamBindings
      value:
        - action: "{{ action }}"
          member: "{{ member }}"
          role: "{{ role }}"
    - name: iamDetails
      value:
        iamRolePermissions:
          - name: "{{ name }}"
            role: "{{ role }}"
    - name: indicator
      value:
        domains:
          - "{{ domains }}"
        ipAddresses:
          - "{{ ipAddresses }}"
        signatures:
          - memoryHashSignature:
              binaryFamily: "{{ binaryFamily }}"
              detections:
                - binary: "{{ binary }}"
                  percentPagesMatched: {{ percentPagesMatched }}
            signatureType: "{{ signatureType }}"
            yaraRuleSignature:
              yaraRule: "{{ yaraRule }}"
        uris:
          - "{{ uris }}"
    - name: ipRules
      value:
        allowed:
          ipRules:
            - portRanges: "{{ portRanges }}"
              protocol: "{{ protocol }}"
        denied:
          ipRules:
            - portRanges: "{{ portRanges }}"
              protocol: "{{ protocol }}"
        destinationIpRanges:
          - "{{ destinationIpRanges }}"
        direction: "{{ direction }}"
        exposedServices:
          - "{{ exposedServices }}"
        sourceIpRanges:
          - "{{ sourceIpRanges }}"
    - name: job
      value:
        errorCode: {{ errorCode }}
        location: "{{ location }}"
        name: "{{ name }}"
        state: "{{ state }}"
    - name: kernelRootkit
      value:
        name: "{{ name }}"
        unexpectedCodeModification: {{ unexpectedCodeModification }}
        unexpectedFtraceHandler: {{ unexpectedFtraceHandler }}
        unexpectedInterruptHandler: {{ unexpectedInterruptHandler }}
        unexpectedKernelCodePages: {{ unexpectedKernelCodePages }}
        unexpectedKprobeHandler: {{ unexpectedKprobeHandler }}
        unexpectedProcessesInRunqueue: {{ unexpectedProcessesInRunqueue }}
        unexpectedReadOnlyDataModification: {{ unexpectedReadOnlyDataModification }}
        unexpectedSystemCallHandler: {{ unexpectedSystemCallHandler }}
    - name: kubernetes
      value:
        accessReviews:
          - group: "{{ group }}"
            name: "{{ name }}"
            ns: "{{ ns }}"
            resource: "{{ resource }}"
            subresource: "{{ subresource }}"
            verb: "{{ verb }}"
            version: "{{ version }}"
        bindings:
          - name: "{{ name }}"
            ns: "{{ ns }}"
            role:
              kind: "{{ kind }}"
              name: "{{ name }}"
              ns: "{{ ns }}"
            subjects: "{{ subjects }}"
        nodePools:
          - name: "{{ name }}"
            nodes: "{{ nodes }}"
        nodes:
          - name: "{{ name }}"
        objects:
          - containers: "{{ containers }}"
            group: "{{ group }}"
            kind: "{{ kind }}"
            name: "{{ name }}"
            ns: "{{ ns }}"
        pods:
          - containers: "{{ containers }}"
            labels: "{{ labels }}"
            name: "{{ name }}"
            ns: "{{ ns }}"
        roles:
          - kind: "{{ kind }}"
            name: "{{ name }}"
            ns: "{{ ns }}"
    - name: loadBalancers
      value:
        - name: "{{ name }}"
    - name: logEntries
      value:
        - cloudLoggingEntry:
            insertId: "{{ insertId }}"
            logId: "{{ logId }}"
            resourceContainer: "{{ resourceContainer }}"
            timestamp: "{{ timestamp }}"
    - name: mitreAttack
      value:
        additionalTactics:
          - "{{ additionalTactics }}"
        additionalTechniques:
          - "{{ additionalTechniques }}"
        primaryTactic: "{{ primaryTactic }}"
        primaryTechniques:
          - "{{ primaryTechniques }}"
        version: "{{ version }}"
    - name: moduleName
      value: "{{ moduleName }}"
    - name: mute
      value: "{{ mute }}"
      valid_values: ['MUTE_UNSPECIFIED', 'MUTED', 'UNMUTED', 'UNDEFINED']
    - name: muteInitiator
      value: "{{ muteInitiator }}"
    - name: name
      value: "{{ name }}"
    - name: networks
      value:
        - name: "{{ name }}"
    - name: nextSteps
      value: "{{ nextSteps }}"
    - name: notebook
      value:
        lastAuthor: "{{ lastAuthor }}"
        name: "{{ name }}"
        notebookUpdateTime: "{{ notebookUpdateTime }}"
        service: "{{ service }}"
    - name: orgPolicies
      value:
        - name: "{{ name }}"
    - name: parent
      value: "{{ parent }}"
    - name: policyViolationSummary
      value:
        conformantResourcesCount: "{{ conformantResourcesCount }}"
        evaluationErrorsCount: "{{ evaluationErrorsCount }}"
        outOfScopeResourcesCount: "{{ outOfScopeResourcesCount }}"
        policyViolationsCount: "{{ policyViolationsCount }}"
    - name: processes
      value:
        - args: "{{ args }}"
          argumentsTruncated: {{ argumentsTruncated }}
          binary:
            contents: "{{ contents }}"
            diskPath:
              partitionUuid: "{{ partitionUuid }}"
              relativePath: "{{ relativePath }}"
            fileLoadState: "{{ fileLoadState }}"
            hashedSize: "{{ hashedSize }}"
            operations:
              - type: "{{ type }}"
            partiallyHashed: {{ partiallyHashed }}
            path: "{{ path }}"
            sha256: "{{ sha256 }}"
            size: "{{ size }}"
          envVariables: "{{ envVariables }}"
          envVariablesTruncated: {{ envVariablesTruncated }}
          libraries: "{{ libraries }}"
          name: "{{ name }}"
          parentPid: "{{ parentPid }}"
          pid: "{{ pid }}"
          script:
            contents: "{{ contents }}"
            diskPath:
              partitionUuid: "{{ partitionUuid }}"
              relativePath: "{{ relativePath }}"
            fileLoadState: "{{ fileLoadState }}"
            hashedSize: "{{ hashedSize }}"
            operations:
              - type: "{{ type }}"
            partiallyHashed: {{ partiallyHashed }}
            path: "{{ path }}"
            sha256: "{{ sha256 }}"
            size: "{{ size }}"
          userId: "{{ userId }}"
    - name: resourceName
      value: "{{ resourceName }}"
    - name: secret
      value:
        environmentVariable:
          key: "{{ key }}"
        filePath:
          path: "{{ path }}"
        status:
          lastUpdatedTime: "{{ lastUpdatedTime }}"
          validity: "{{ validity }}"
        type: "{{ type }}"
    - name: securityPosture
      value:
        changedPolicy: "{{ changedPolicy }}"
        name: "{{ name }}"
        policy: "{{ policy }}"
        policyDriftDetails:
          - detectedValue: "{{ detectedValue }}"
            expectedValue: "{{ expectedValue }}"
            field: "{{ field }}"
        policySet: "{{ policySet }}"
        postureDeployment: "{{ postureDeployment }}"
        postureDeploymentResource: "{{ postureDeploymentResource }}"
        revisionId: "{{ revisionId }}"
    - name: severity
      value: "{{ severity }}"
      valid_values: ['SEVERITY_UNSPECIFIED', 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW']
    - name: sourceProperties
      value: "{{ sourceProperties }}"
    - name: state
      value: "{{ state }}"
      valid_values: ['STATE_UNSPECIFIED', 'ACTIVE', 'INACTIVE']
    - name: toxicCombination
      value:
        attackExposureScore: {{ attackExposureScore }}
        relatedFindings:
          - "{{ relatedFindings }}"
    - name: vertexAi
      value:
        datasets:
          - displayName: "{{ displayName }}"
            name: "{{ name }}"
            source: "{{ source }}"
        pipelines:
          - displayName: "{{ displayName }}"
            name: "{{ name }}"
    - name: vulnerability
      value:
        cve:
          cvssv3:
            attackComplexity: "{{ attackComplexity }}"
            attackVector: "{{ attackVector }}"
            availabilityImpact: "{{ availabilityImpact }}"
            baseScore: {{ baseScore }}
            confidentialityImpact: "{{ confidentialityImpact }}"
            integrityImpact: "{{ integrityImpact }}"
            privilegesRequired: "{{ privilegesRequired }}"
            scope: "{{ scope }}"
            userInteraction: "{{ userInteraction }}"
          exploitReleaseDate: "{{ exploitReleaseDate }}"
          exploitationActivity: "{{ exploitationActivity }}"
          firstExploitationDate: "{{ firstExploitationDate }}"
          id: "{{ id }}"
          impact: "{{ impact }}"
          observedInTheWild: {{ observedInTheWild }}
          references:
            - source: "{{ source }}"
              uri: "{{ uri }}"
          upstreamFixAvailable: {{ upstreamFixAvailable }}
          zeroDay: {{ zeroDay }}
        cwes:
          - id: "{{ id }}"
            references: "{{ references }}"
        fixedPackage:
          cpeUri: "{{ cpeUri }}"
          packageName: "{{ packageName }}"
          packageType: "{{ packageType }}"
          packageVersion: "{{ packageVersion }}"
        offendingPackage:
          cpeUri: "{{ cpeUri }}"
          packageName: "{{ packageName }}"
          packageType: "{{ packageType }}"
          packageVersion: "{{ packageVersion }}"
        providerRiskScore: "{{ providerRiskScore }}"
        reachable: {{ reachable }}
        securityBulletin:
          bulletinId: "{{ bulletinId }}"
          submissionTime: "{{ submissionTime }}"
          suggestedUpgradeVersion: "{{ suggestedUpgradeVersion }}"
    - name: findingId
      value: "{{ findingId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="folders_sources_findings_patch"
    values={[
        { label: 'folders_sources_findings_patch', value: 'folders_sources_findings_patch' },
        { label: 'organizations_sources_findings_patch', value: 'organizations_sources_findings_patch' },
        { label: 'projects_sources_findings_patch', value: 'projects_sources_findings_patch' }
    ]}
>
<TabItem value="folders_sources_findings_patch">

No description available.

```sql
UPDATE google.securitycenter.findings
SET 
data__access = '{{ access }}',
data__affectedResources = '{{ affectedResources }}',
data__agent = '{{ agent }}',
data__agentAnomaly = '{{ agentAnomaly }}',
data__agentDataAccessEvents = '{{ agentDataAccessEvents }}',
data__agentSessions = '{{ agentSessions }}',
data__aiModel = '{{ aiModel }}',
data__application = '{{ application }}',
data__artifactGuardPolicies = '{{ artifactGuardPolicies }}',
data__attackExposure = '{{ attackExposure }}',
data__backupDisasterRecovery = '{{ backupDisasterRecovery }}',
data__canonicalName = '{{ canonicalName }}',
data__category = '{{ category }}',
data__chokepoint = '{{ chokepoint }}',
data__cloudArmor = '{{ cloudArmor }}',
data__cloudDlpDataProfile = '{{ cloudDlpDataProfile }}',
data__cloudDlpInspection = '{{ cloudDlpInspection }}',
data__complianceDetails = '{{ complianceDetails }}',
data__compliances = '{{ compliances }}',
data__connections = '{{ connections }}',
data__containers = '{{ containers }}',
data__createTime = '{{ createTime }}',
data__dataAccessEvents = '{{ dataAccessEvents }}',
data__dataFlowEvents = '{{ dataFlowEvents }}',
data__dataRetentionDeletionEvents = '{{ dataRetentionDeletionEvents }}',
data__database = '{{ database }}',
data__description = '{{ description }}',
data__discoveredWorkload = '{{ discoveredWorkload }}',
data__disk = '{{ disk }}',
data__eventTime = '{{ eventTime }}',
data__exfiltration = '{{ exfiltration }}',
data__externalExposure = '{{ externalExposure }}',
data__externalUri = '{{ externalUri }}',
data__files = '{{ files }}',
data__findingClass = '{{ findingClass }}',
data__groupMemberships = '{{ groupMemberships }}',
data__iamBindings = '{{ iamBindings }}',
data__iamDetails = '{{ iamDetails }}',
data__indicator = '{{ indicator }}',
data__ipRules = '{{ ipRules }}',
data__job = '{{ job }}',
data__kernelRootkit = '{{ kernelRootkit }}',
data__kubernetes = '{{ kubernetes }}',
data__loadBalancers = '{{ loadBalancers }}',
data__logEntries = '{{ logEntries }}',
data__mitreAttack = '{{ mitreAttack }}',
data__moduleName = '{{ moduleName }}',
data__mute = '{{ mute }}',
data__muteInitiator = '{{ muteInitiator }}',
data__name = '{{ name }}',
data__networks = '{{ networks }}',
data__nextSteps = '{{ nextSteps }}',
data__notebook = '{{ notebook }}',
data__orgPolicies = '{{ orgPolicies }}',
data__parent = '{{ parent }}',
data__policyViolationSummary = '{{ policyViolationSummary }}',
data__processes = '{{ processes }}',
data__resourceName = '{{ resourceName }}',
data__secret = '{{ secret }}',
data__securityPosture = '{{ securityPosture }}',
data__severity = '{{ severity }}',
data__sourceProperties = '{{ sourceProperties }}',
data__state = '{{ state }}',
data__toxicCombination = '{{ toxicCombination }}',
data__vertexAi = '{{ vertexAi }}',
data__vulnerability = '{{ vulnerability }}'
WHERE 
foldersId = '{{ foldersId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
AND findingsId = '{{ findingsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
access,
affectedResources,
agent,
agentAnomaly,
agentDataAccessEvents,
agentSessions,
aiModel,
application,
artifactGuardPolicies,
attackExposure,
backupDisasterRecovery,
canonicalName,
category,
chokepoint,
cloudArmor,
cloudDlpDataProfile,
cloudDlpInspection,
complianceDetails,
compliances,
connections,
contacts,
containers,
createTime,
dataAccessEvents,
dataFlowEvents,
dataRetentionDeletionEvents,
database,
description,
discoveredWorkload,
disk,
eventTime,
exfiltration,
externalExposure,
externalSystems,
externalUri,
files,
findingClass,
groupMemberships,
iamBindings,
iamDetails,
indicator,
ipRules,
job,
kernelRootkit,
kubernetes,
loadBalancers,
logEntries,
mitreAttack,
moduleName,
mute,
muteInfo,
muteInitiator,
muteUpdateTime,
networks,
nextSteps,
notebook,
orgPolicies,
parent,
parentDisplayName,
policyViolationSummary,
processes,
resourceName,
secret,
securityMarks,
securityPosture,
severity,
sourceProperties,
state,
toxicCombination,
vertexAi,
vulnerability;
```
</TabItem>
<TabItem value="organizations_sources_findings_patch">

No description available.

```sql
UPDATE google.securitycenter.findings
SET 
data__access = '{{ access }}',
data__affectedResources = '{{ affectedResources }}',
data__agent = '{{ agent }}',
data__agentAnomaly = '{{ agentAnomaly }}',
data__agentDataAccessEvents = '{{ agentDataAccessEvents }}',
data__agentSessions = '{{ agentSessions }}',
data__aiModel = '{{ aiModel }}',
data__application = '{{ application }}',
data__artifactGuardPolicies = '{{ artifactGuardPolicies }}',
data__attackExposure = '{{ attackExposure }}',
data__backupDisasterRecovery = '{{ backupDisasterRecovery }}',
data__canonicalName = '{{ canonicalName }}',
data__category = '{{ category }}',
data__chokepoint = '{{ chokepoint }}',
data__cloudArmor = '{{ cloudArmor }}',
data__cloudDlpDataProfile = '{{ cloudDlpDataProfile }}',
data__cloudDlpInspection = '{{ cloudDlpInspection }}',
data__complianceDetails = '{{ complianceDetails }}',
data__compliances = '{{ compliances }}',
data__connections = '{{ connections }}',
data__containers = '{{ containers }}',
data__createTime = '{{ createTime }}',
data__dataAccessEvents = '{{ dataAccessEvents }}',
data__dataFlowEvents = '{{ dataFlowEvents }}',
data__dataRetentionDeletionEvents = '{{ dataRetentionDeletionEvents }}',
data__database = '{{ database }}',
data__description = '{{ description }}',
data__discoveredWorkload = '{{ discoveredWorkload }}',
data__disk = '{{ disk }}',
data__eventTime = '{{ eventTime }}',
data__exfiltration = '{{ exfiltration }}',
data__externalExposure = '{{ externalExposure }}',
data__externalUri = '{{ externalUri }}',
data__files = '{{ files }}',
data__findingClass = '{{ findingClass }}',
data__groupMemberships = '{{ groupMemberships }}',
data__iamBindings = '{{ iamBindings }}',
data__iamDetails = '{{ iamDetails }}',
data__indicator = '{{ indicator }}',
data__ipRules = '{{ ipRules }}',
data__job = '{{ job }}',
data__kernelRootkit = '{{ kernelRootkit }}',
data__kubernetes = '{{ kubernetes }}',
data__loadBalancers = '{{ loadBalancers }}',
data__logEntries = '{{ logEntries }}',
data__mitreAttack = '{{ mitreAttack }}',
data__moduleName = '{{ moduleName }}',
data__mute = '{{ mute }}',
data__muteInitiator = '{{ muteInitiator }}',
data__name = '{{ name }}',
data__networks = '{{ networks }}',
data__nextSteps = '{{ nextSteps }}',
data__notebook = '{{ notebook }}',
data__orgPolicies = '{{ orgPolicies }}',
data__parent = '{{ parent }}',
data__policyViolationSummary = '{{ policyViolationSummary }}',
data__processes = '{{ processes }}',
data__resourceName = '{{ resourceName }}',
data__secret = '{{ secret }}',
data__securityPosture = '{{ securityPosture }}',
data__severity = '{{ severity }}',
data__sourceProperties = '{{ sourceProperties }}',
data__state = '{{ state }}',
data__toxicCombination = '{{ toxicCombination }}',
data__vertexAi = '{{ vertexAi }}',
data__vulnerability = '{{ vulnerability }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
AND findingsId = '{{ findingsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
access,
affectedResources,
agent,
agentAnomaly,
agentDataAccessEvents,
agentSessions,
aiModel,
application,
artifactGuardPolicies,
attackExposure,
backupDisasterRecovery,
canonicalName,
category,
chokepoint,
cloudArmor,
cloudDlpDataProfile,
cloudDlpInspection,
complianceDetails,
compliances,
connections,
contacts,
containers,
createTime,
dataAccessEvents,
dataFlowEvents,
dataRetentionDeletionEvents,
database,
description,
discoveredWorkload,
disk,
eventTime,
exfiltration,
externalExposure,
externalSystems,
externalUri,
files,
findingClass,
groupMemberships,
iamBindings,
iamDetails,
indicator,
ipRules,
job,
kernelRootkit,
kubernetes,
loadBalancers,
logEntries,
mitreAttack,
moduleName,
mute,
muteInfo,
muteInitiator,
muteUpdateTime,
networks,
nextSteps,
notebook,
orgPolicies,
parent,
parentDisplayName,
policyViolationSummary,
processes,
resourceName,
secret,
securityMarks,
securityPosture,
severity,
sourceProperties,
state,
toxicCombination,
vertexAi,
vulnerability;
```
</TabItem>
<TabItem value="projects_sources_findings_patch">

No description available.

```sql
UPDATE google.securitycenter.findings
SET 
data__access = '{{ access }}',
data__affectedResources = '{{ affectedResources }}',
data__agent = '{{ agent }}',
data__agentAnomaly = '{{ agentAnomaly }}',
data__agentDataAccessEvents = '{{ agentDataAccessEvents }}',
data__agentSessions = '{{ agentSessions }}',
data__aiModel = '{{ aiModel }}',
data__application = '{{ application }}',
data__artifactGuardPolicies = '{{ artifactGuardPolicies }}',
data__attackExposure = '{{ attackExposure }}',
data__backupDisasterRecovery = '{{ backupDisasterRecovery }}',
data__canonicalName = '{{ canonicalName }}',
data__category = '{{ category }}',
data__chokepoint = '{{ chokepoint }}',
data__cloudArmor = '{{ cloudArmor }}',
data__cloudDlpDataProfile = '{{ cloudDlpDataProfile }}',
data__cloudDlpInspection = '{{ cloudDlpInspection }}',
data__complianceDetails = '{{ complianceDetails }}',
data__compliances = '{{ compliances }}',
data__connections = '{{ connections }}',
data__containers = '{{ containers }}',
data__createTime = '{{ createTime }}',
data__dataAccessEvents = '{{ dataAccessEvents }}',
data__dataFlowEvents = '{{ dataFlowEvents }}',
data__dataRetentionDeletionEvents = '{{ dataRetentionDeletionEvents }}',
data__database = '{{ database }}',
data__description = '{{ description }}',
data__discoveredWorkload = '{{ discoveredWorkload }}',
data__disk = '{{ disk }}',
data__eventTime = '{{ eventTime }}',
data__exfiltration = '{{ exfiltration }}',
data__externalExposure = '{{ externalExposure }}',
data__externalUri = '{{ externalUri }}',
data__files = '{{ files }}',
data__findingClass = '{{ findingClass }}',
data__groupMemberships = '{{ groupMemberships }}',
data__iamBindings = '{{ iamBindings }}',
data__iamDetails = '{{ iamDetails }}',
data__indicator = '{{ indicator }}',
data__ipRules = '{{ ipRules }}',
data__job = '{{ job }}',
data__kernelRootkit = '{{ kernelRootkit }}',
data__kubernetes = '{{ kubernetes }}',
data__loadBalancers = '{{ loadBalancers }}',
data__logEntries = '{{ logEntries }}',
data__mitreAttack = '{{ mitreAttack }}',
data__moduleName = '{{ moduleName }}',
data__mute = '{{ mute }}',
data__muteInitiator = '{{ muteInitiator }}',
data__name = '{{ name }}',
data__networks = '{{ networks }}',
data__nextSteps = '{{ nextSteps }}',
data__notebook = '{{ notebook }}',
data__orgPolicies = '{{ orgPolicies }}',
data__parent = '{{ parent }}',
data__policyViolationSummary = '{{ policyViolationSummary }}',
data__processes = '{{ processes }}',
data__resourceName = '{{ resourceName }}',
data__secret = '{{ secret }}',
data__securityPosture = '{{ securityPosture }}',
data__severity = '{{ severity }}',
data__sourceProperties = '{{ sourceProperties }}',
data__state = '{{ state }}',
data__toxicCombination = '{{ toxicCombination }}',
data__vertexAi = '{{ vertexAi }}',
data__vulnerability = '{{ vulnerability }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND sourcesId = '{{ sourcesId }}' --required
AND findingsId = '{{ findingsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
access,
affectedResources,
agent,
agentAnomaly,
agentDataAccessEvents,
agentSessions,
aiModel,
application,
artifactGuardPolicies,
attackExposure,
backupDisasterRecovery,
canonicalName,
category,
chokepoint,
cloudArmor,
cloudDlpDataProfile,
cloudDlpInspection,
complianceDetails,
compliances,
connections,
contacts,
containers,
createTime,
dataAccessEvents,
dataFlowEvents,
dataRetentionDeletionEvents,
database,
description,
discoveredWorkload,
disk,
eventTime,
exfiltration,
externalExposure,
externalSystems,
externalUri,
files,
findingClass,
groupMemberships,
iamBindings,
iamDetails,
indicator,
ipRules,
job,
kernelRootkit,
kubernetes,
loadBalancers,
logEntries,
mitreAttack,
moduleName,
mute,
muteInfo,
muteInitiator,
muteUpdateTime,
networks,
nextSteps,
notebook,
orgPolicies,
parent,
parentDisplayName,
policyViolationSummary,
processes,
resourceName,
secret,
securityMarks,
securityPosture,
severity,
sourceProperties,
state,
toxicCombination,
vertexAi,
vulnerability;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="folders_findings_bulk_mute"
    values={[
        { label: 'folders_findings_bulk_mute', value: 'folders_findings_bulk_mute' },
        { label: 'folders_sources_findings_group', value: 'folders_sources_findings_group' },
        { label: 'folders_sources_findings_set_mute', value: 'folders_sources_findings_set_mute' },
        { label: 'folders_sources_findings_set_state', value: 'folders_sources_findings_set_state' },
        { label: 'organizations_findings_bulk_mute', value: 'organizations_findings_bulk_mute' },
        { label: 'organizations_sources_findings_group', value: 'organizations_sources_findings_group' },
        { label: 'organizations_sources_findings_set_mute', value: 'organizations_sources_findings_set_mute' },
        { label: 'organizations_sources_findings_set_state', value: 'organizations_sources_findings_set_state' },
        { label: 'projects_findings_bulk_mute', value: 'projects_findings_bulk_mute' },
        { label: 'projects_sources_findings_group', value: 'projects_sources_findings_group' },
        { label: 'projects_sources_findings_set_mute', value: 'projects_sources_findings_set_mute' },
        { label: 'projects_sources_findings_set_state', value: 'projects_sources_findings_set_state' }
    ]}
>
<TabItem value="folders_findings_bulk_mute">

Successful response

```sql
EXEC google.securitycenter.findings.folders_findings_bulk_mute 
@foldersId='{{ foldersId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"muteAnnotation": "{{ muteAnnotation }}", 
"muteState": "{{ muteState }}"
}'
;
```
</TabItem>
<TabItem value="folders_sources_findings_group">

Successful response

```sql
EXEC google.securitycenter.findings.folders_sources_findings_group 
@foldersId='{{ foldersId }}' --required, 
@sourcesId='{{ sourcesId }}' --required 
@@json=
'{
"compareDuration": "{{ compareDuration }}", 
"filter": "{{ filter }}", 
"groupBy": "{{ groupBy }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"readTime": "{{ readTime }}"
}'
;
```
</TabItem>
<TabItem value="folders_sources_findings_set_mute">

Successful response

```sql
EXEC google.securitycenter.findings.folders_sources_findings_set_mute 
@foldersId='{{ foldersId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@findingsId='{{ findingsId }}' --required 
@@json=
'{
"mute": "{{ mute }}"
}'
;
```
</TabItem>
<TabItem value="folders_sources_findings_set_state">

Successful response

```sql
EXEC google.securitycenter.findings.folders_sources_findings_set_state 
@foldersId='{{ foldersId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@findingsId='{{ findingsId }}' --required 
@@json=
'{
"startTime": "{{ startTime }}", 
"state": "{{ state }}"
}'
;
```
</TabItem>
<TabItem value="organizations_findings_bulk_mute">

Successful response

```sql
EXEC google.securitycenter.findings.organizations_findings_bulk_mute 
@organizationsId='{{ organizationsId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"muteAnnotation": "{{ muteAnnotation }}", 
"muteState": "{{ muteState }}"
}'
;
```
</TabItem>
<TabItem value="organizations_sources_findings_group">

Successful response

```sql
EXEC google.securitycenter.findings.organizations_sources_findings_group 
@organizationsId='{{ organizationsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required 
@@json=
'{
"compareDuration": "{{ compareDuration }}", 
"filter": "{{ filter }}", 
"groupBy": "{{ groupBy }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"readTime": "{{ readTime }}"
}'
;
```
</TabItem>
<TabItem value="organizations_sources_findings_set_mute">

Successful response

```sql
EXEC google.securitycenter.findings.organizations_sources_findings_set_mute 
@organizationsId='{{ organizationsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@findingsId='{{ findingsId }}' --required 
@@json=
'{
"mute": "{{ mute }}"
}'
;
```
</TabItem>
<TabItem value="organizations_sources_findings_set_state">

Successful response

```sql
EXEC google.securitycenter.findings.organizations_sources_findings_set_state 
@organizationsId='{{ organizationsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@findingsId='{{ findingsId }}' --required 
@@json=
'{
"startTime": "{{ startTime }}", 
"state": "{{ state }}"
}'
;
```
</TabItem>
<TabItem value="projects_findings_bulk_mute">

Successful response

```sql
EXEC google.securitycenter.findings.projects_findings_bulk_mute 
@projectsId='{{ projectsId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"muteAnnotation": "{{ muteAnnotation }}", 
"muteState": "{{ muteState }}"
}'
;
```
</TabItem>
<TabItem value="projects_sources_findings_group">

Successful response

```sql
EXEC google.securitycenter.findings.projects_sources_findings_group 
@projectsId='{{ projectsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required 
@@json=
'{
"compareDuration": "{{ compareDuration }}", 
"filter": "{{ filter }}", 
"groupBy": "{{ groupBy }}", 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"readTime": "{{ readTime }}"
}'
;
```
</TabItem>
<TabItem value="projects_sources_findings_set_mute">

Successful response

```sql
EXEC google.securitycenter.findings.projects_sources_findings_set_mute 
@projectsId='{{ projectsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@findingsId='{{ findingsId }}' --required 
@@json=
'{
"mute": "{{ mute }}"
}'
;
```
</TabItem>
<TabItem value="projects_sources_findings_set_state">

Successful response

```sql
EXEC google.securitycenter.findings.projects_sources_findings_set_state 
@projectsId='{{ projectsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required, 
@findingsId='{{ findingsId }}' --required 
@@json=
'{
"startTime": "{{ startTime }}", 
"state": "{{ state }}"
}'
;
```
</TabItem>
</Tabs>
