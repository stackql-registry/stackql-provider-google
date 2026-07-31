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
    defaultValue="organizations_sources_findings_list"
    values={[
        { label: 'organizations_sources_findings_list', value: 'organizations_sources_findings_list' },
        { label: 'projects_sources_findings_list', value: 'projects_sources_findings_list' },
        { label: 'folders_sources_findings_list', value: 'folders_sources_findings_list' }
    ]}
>
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
    <td><a href="#organizations_sources_findings_list"><CopyableCode code="organizations_sources_findings_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-readTime"><code>readTime</code></a>, <a href="#parameter-compareDuration"><code>compareDuration</code></a>, <a href="#parameter-fieldMask"><code>fieldMask</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#projects_sources_findings_list"><CopyableCode code="projects_sources_findings_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-fieldMask"><code>fieldMask</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-compareDuration"><code>compareDuration</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-readTime"><code>readTime</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#folders_sources_findings_list"><CopyableCode code="folders_sources_findings_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
    <td><a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-readTime"><code>readTime</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-fieldMask"><code>fieldMask</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-compareDuration"><code>compareDuration</code></a></td>
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
    <td><a href="#folders_sources_findings_patch"><CopyableCode code="folders_sources_findings_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
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
    <td><a href="#organizations_sources_findings_set_mute"><CopyableCode code="organizations_sources_findings_set_mute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
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
    <td><a href="#organizations_sources_findings_set_state"><CopyableCode code="organizations_sources_findings_set_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
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
<tr>
    <td><a href="#projects_findings_bulk_mute"><CopyableCode code="projects_findings_bulk_mute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
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
    <td><a href="#folders_sources_findings_set_state"><CopyableCode code="folders_sources_findings_set_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a>, <a href="#parameter-findingsId"><code>findingsId</code></a></td>
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
    <td><a href="#folders_sources_findings_group"><CopyableCode code="folders_sources_findings_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-foldersId"><code>foldersId</code></a>, <a href="#parameter-sourcesId"><code>sourcesId</code></a></td>
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
    defaultValue="organizations_sources_findings_list"
    values={[
        { label: 'organizations_sources_findings_list', value: 'organizations_sources_findings_list' },
        { label: 'projects_sources_findings_list', value: 'projects_sources_findings_list' },
        { label: 'folders_sources_findings_list', value: 'folders_sources_findings_list' }
    ]}
>
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
AND pageToken = '{{ pageToken }}'
AND orderBy = '{{ orderBy }}'
AND readTime = '{{ readTime }}'
AND compareDuration = '{{ compareDuration }}'
AND fieldMask = '{{ fieldMask }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}'
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
AND filter = '{{ filter }}'
AND fieldMask = '{{ fieldMask }}'
AND pageSize = '{{ pageSize }}'
AND compareDuration = '{{ compareDuration }}'
AND orderBy = '{{ orderBy }}'
AND readTime = '{{ readTime }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
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
AND orderBy = '{{ orderBy }}'
AND readTime = '{{ readTime }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND fieldMask = '{{ fieldMask }}'
AND pageSize = '{{ pageSize }}'
AND compareDuration = '{{ compareDuration }}'
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
data__mute,
data__moduleName,
data__kubernetes,
data__aiModel,
data__agentAnomaly,
data__externalExposure,
data__job,
data__agentSessions,
data__state,
data__dataAccessEvents,
data__secret,
data__severity,
data__compliances,
data__orgPolicies,
data__loadBalancers,
data__complianceDetails,
data__agent,
data__dataRetentionDeletionEvents,
data__createTime,
data__containers,
data__agentDataAccessEvents,
data__iamDetails,
data__artifactGuardPolicies,
data__cloudArmor,
data__cloudDlpInspection,
data__discoveredWorkload,
data__kernelRootkit,
data__notebook,
data__muteInitiator,
data__networks,
data__connections,
data__disk,
data__exfiltration,
data__mitreAttack,
data__processes,
data__parent,
data__groupMemberships,
data__dataFlowEvents,
data__findingClass,
data__cloudDlpDataProfile,
data__canonicalName,
data__iamBindings,
data__securityPosture,
data__files,
data__sourceProperties,
data__name,
data__category,
data__application,
data__description,
data__database,
data__ipRules,
data__externalUri,
data__nextSteps,
data__eventTime,
data__logEntries,
data__vulnerability,
data__attackExposure,
data__vertexAi,
data__indicator,
data__resourceName,
data__toxicCombination,
data__chokepoint,
data__policyViolationSummary,
data__affectedResources,
data__access,
data__backupDisasterRecovery,
organizationsId,
sourcesId,
findingId
)
SELECT 
'{{ mute }}',
'{{ moduleName }}',
'{{ kubernetes }}',
'{{ aiModel }}',
'{{ agentAnomaly }}',
'{{ externalExposure }}',
'{{ job }}',
'{{ agentSessions }}',
'{{ state }}',
'{{ dataAccessEvents }}',
'{{ secret }}',
'{{ severity }}',
'{{ compliances }}',
'{{ orgPolicies }}',
'{{ loadBalancers }}',
'{{ complianceDetails }}',
'{{ agent }}',
'{{ dataRetentionDeletionEvents }}',
'{{ createTime }}',
'{{ containers }}',
'{{ agentDataAccessEvents }}',
'{{ iamDetails }}',
'{{ artifactGuardPolicies }}',
'{{ cloudArmor }}',
'{{ cloudDlpInspection }}',
'{{ discoveredWorkload }}',
'{{ kernelRootkit }}',
'{{ notebook }}',
'{{ muteInitiator }}',
'{{ networks }}',
'{{ connections }}',
'{{ disk }}',
'{{ exfiltration }}',
'{{ mitreAttack }}',
'{{ processes }}',
'{{ parent }}',
'{{ groupMemberships }}',
'{{ dataFlowEvents }}',
'{{ findingClass }}',
'{{ cloudDlpDataProfile }}',
'{{ canonicalName }}',
'{{ iamBindings }}',
'{{ securityPosture }}',
'{{ files }}',
'{{ sourceProperties }}',
'{{ name }}',
'{{ category }}',
'{{ application }}',
'{{ description }}',
'{{ database }}',
'{{ ipRules }}',
'{{ externalUri }}',
'{{ nextSteps }}',
'{{ eventTime }}',
'{{ logEntries }}',
'{{ vulnerability }}',
'{{ attackExposure }}',
'{{ vertexAi }}',
'{{ indicator }}',
'{{ resourceName }}',
'{{ toxicCombination }}',
'{{ chokepoint }}',
'{{ policyViolationSummary }}',
'{{ affectedResources }}',
'{{ access }}',
'{{ backupDisasterRecovery }}',
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
    - name: mute
      value: "{{ mute }}"
      valid_values: ['MUTE_UNSPECIFIED', 'MUTED', 'UNMUTED', 'UNDEFINED']
    - name: moduleName
      value: "{{ moduleName }}"
    - name: kubernetes
      value:
        roles:
          - ns: "{{ ns }}"
            kind: "{{ kind }}"
            name: "{{ name }}"
        accessReviews:
          - resource: "{{ resource }}"
            ns: "{{ ns }}"
            version: "{{ version }}"
            group: "{{ group }}"
            verb: "{{ verb }}"
            subresource: "{{ subresource }}"
            name: "{{ name }}"
        bindings:
          - subjects: "{{ subjects }}"
            ns: "{{ ns }}"
            name: "{{ name }}"
            role:
              ns: "{{ ns }}"
              kind: "{{ kind }}"
              name: "{{ name }}"
        pods:
          - name: "{{ name }}"
            ns: "{{ ns }}"
            labels: "{{ labels }}"
            containers: "{{ containers }}"
        objects:
          - group: "{{ group }}"
            containers: "{{ containers }}"
            kind: "{{ kind }}"
            name: "{{ name }}"
            ns: "{{ ns }}"
        nodePools:
          - name: "{{ name }}"
            nodes: "{{ nodes }}"
        nodes:
          - name: "{{ name }}"
    - name: aiModel
      value:
        domain: "{{ domain }}"
        displayName: "{{ displayName }}"
        name: "{{ name }}"
        deploymentPlatform: "{{ deploymentPlatform }}"
        location: "{{ location }}"
        publisher: "{{ publisher }}"
        usageCategory: "{{ usageCategory }}"
        library: "{{ library }}"
    - name: agentAnomaly
      value:
        detectorReferences:
          - severity: "{{ severity }}"
            displayName: "{{ displayName }}"
            recommendation: "{{ recommendation }}"
            explanation: "{{ explanation }}"
            detectorId: "{{ detectorId }}"
        invocationReferences:
          - invocationId: "{{ invocationId }}"
        confidenceScore: {{ confidenceScore }}
    - name: externalExposure
      value:
        loadBalancerFirewallPolicy: "{{ loadBalancerFirewallPolicy }}"
        serviceFirewallPolicy: "{{ serviceFirewallPolicy }}"
        privatePort: "{{ privatePort }}"
        instanceGroup: "{{ instanceGroup }}"
        networkIngressFirewallPolicy: "{{ networkIngressFirewallPolicy }}"
        networkPathInsightsGenerationTime: "{{ networkPathInsightsGenerationTime }}"
        exposedService: "{{ exposedService }}"
        backendBucket: "{{ backendBucket }}"
        networkEndpointGroup: "{{ networkEndpointGroup }}"
        hostnameUri: "{{ hostnameUri }}"
        pscNetworkAttachment: "{{ pscNetworkAttachment }}"
        forwardingRule: "{{ forwardingRule }}"
        publicPort: "{{ publicPort }}"
        httpResponse:
          - statusCode: "{{ statusCode }}"
            path: "{{ path }}"
        privateIpAddress: "{{ privateIpAddress }}"
        exposedEndpoint: "{{ exposedEndpoint }}"
        publicIpAddress: "{{ publicIpAddress }}"
        pscServiceAttachment: "{{ pscServiceAttachment }}"
        internalBackendService: "{{ internalBackendService }}"
        backendService: "{{ backendService }}"
        exposedApplication: "{{ exposedApplication }}"
    - name: job
      value:
        errorCode: {{ errorCode }}
        location: "{{ location }}"
        name: "{{ name }}"
        state: "{{ state }}"
    - name: agentSessions
      value:
        - sessionId: "{{ sessionId }}"
    - name: state
      value: "{{ state }}"
      valid_values: ['STATE_UNSPECIFIED', 'ACTIVE', 'INACTIVE']
    - name: dataAccessEvents
      value:
        - principalEmail: "{{ principalEmail }}"
          eventTime: "{{ eventTime }}"
          eventId: "{{ eventId }}"
          operation: "{{ operation }}"
    - name: secret
      value:
        status:
          lastUpdatedTime: "{{ lastUpdatedTime }}"
          validity: "{{ validity }}"
        environmentVariable:
          key: "{{ key }}"
        type: "{{ type }}"
        filePath:
          path: "{{ path }}"
    - name: severity
      value: "{{ severity }}"
      valid_values: ['SEVERITY_UNSPECIFIED', 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW']
    - name: compliances
      value:
        - standard: "{{ standard }}"
          version: "{{ version }}"
          ids: "{{ ids }}"
    - name: orgPolicies
      value:
        - name: "{{ name }}"
    - name: loadBalancers
      value:
        - name: "{{ name }}"
    - name: complianceDetails
      value:
        cloudControl:
          type: "{{ type }}"
          policyType: "{{ policyType }}"
          cloudControlName: "{{ cloudControlName }}"
          version: {{ version }}
        cloudControlDeploymentNames:
          - "{{ cloudControlDeploymentNames }}"
        frameworks:
          - type: "{{ type }}"
            name: "{{ name }}"
            category: "{{ category }}"
            controls: "{{ controls }}"
            displayName: "{{ displayName }}"
    - name: agent
      value:
        id: "{{ id }}"
        displayName: "{{ displayName }}"
    - name: dataRetentionDeletionEvents
      value:
        - maxRetentionAllowed: "{{ maxRetentionAllowed }}"
          minRetentionAllowed: "{{ minRetentionAllowed }}"
          eventDetectionTime: "{{ eventDetectionTime }}"
          dataObjectCount: "{{ dataObjectCount }}"
          eventType: "{{ eventType }}"
    - name: createTime
      value: "{{ createTime }}"
    - name: containers
      value:
        - createTime: "{{ createTime }}"
          name: "{{ name }}"
          labels: "{{ labels }}"
          uri: "{{ uri }}"
          imageId: "{{ imageId }}"
    - name: agentDataAccessEvents
      value:
        - eventTime: "{{ eventTime }}"
          eventId: "{{ eventId }}"
          principalSubject: "{{ principalSubject }}"
          operation: "{{ operation }}"
    - name: iamDetails
      value:
        iamRolePermissions:
          - name: "{{ name }}"
            role: "{{ role }}"
    - name: artifactGuardPolicies
      value:
        failingPolicies:
          - type: "{{ type }}"
            policyId: "{{ policyId }}"
            failureReason: "{{ failureReason }}"
        resourceId: "{{ resourceId }}"
    - name: cloudArmor
      value:
        duration: "{{ duration }}"
        requests:
          ratio: {{ ratio }}
          shortTermAllowed: {{ shortTermAllowed }}
          longTermAllowed: {{ longTermAllowed }}
          longTermDenied: {{ longTermDenied }}
        securityPolicy:
          type: "{{ type }}"
          preview: {{ preview }}
          name: "{{ name }}"
        attack:
          volumeBpsLong: "{{ volumeBpsLong }}"
          volumeBps: {{ volumeBps }}
          volumePpsLong: "{{ volumePpsLong }}"
          classification: "{{ classification }}"
          volumePps: {{ volumePps }}
        threatVector: "{{ threatVector }}"
        adaptiveProtection:
          confidence: {{ confidence }}
    - name: cloudDlpInspection
      value:
        fullScan: {{ fullScan }}
        inspectJob: "{{ inspectJob }}"
        infoTypeCount: "{{ infoTypeCount }}"
        infoType: "{{ infoType }}"
    - name: discoveredWorkload
      value:
        confidence: "{{ confidence }}"
        detectedRelevantKeywords: {{ detectedRelevantKeywords }}
        detectedRelevantPackages: {{ detectedRelevantPackages }}
        workloadType: "{{ workloadType }}"
        detectedRelevantHardware: {{ detectedRelevantHardware }}
    - name: kernelRootkit
      value:
        unexpectedInterruptHandler: {{ unexpectedInterruptHandler }}
        unexpectedReadOnlyDataModification: {{ unexpectedReadOnlyDataModification }}
        unexpectedCodeModification: {{ unexpectedCodeModification }}
        unexpectedKprobeHandler: {{ unexpectedKprobeHandler }}
        unexpectedSystemCallHandler: {{ unexpectedSystemCallHandler }}
        unexpectedFtraceHandler: {{ unexpectedFtraceHandler }}
        name: "{{ name }}"
        unexpectedProcessesInRunqueue: {{ unexpectedProcessesInRunqueue }}
        unexpectedKernelCodePages: {{ unexpectedKernelCodePages }}
    - name: notebook
      value:
        name: "{{ name }}"
        service: "{{ service }}"
        lastAuthor: "{{ lastAuthor }}"
        notebookUpdateTime: "{{ notebookUpdateTime }}"
    - name: muteInitiator
      value: "{{ muteInitiator }}"
    - name: networks
      value:
        - name: "{{ name }}"
    - name: connections
      value:
        - destinationPort: {{ destinationPort }}
          protocol: "{{ protocol }}"
          sourceIp: "{{ sourceIp }}"
          sourcePort: {{ sourcePort }}
          destinationIp: "{{ destinationIp }}"
    - name: disk
      value:
        name: "{{ name }}"
    - name: exfiltration
      value:
        targets:
          - name: "{{ name }}"
            components: "{{ components }}"
        sources:
          - name: "{{ name }}"
            components: "{{ components }}"
        totalExfiltratedBytes: "{{ totalExfiltratedBytes }}"
    - name: mitreAttack
      value:
        primaryTechniques:
          - "{{ primaryTechniques }}"
        additionalTactics:
          - "{{ additionalTactics }}"
        primaryTactic: "{{ primaryTactic }}"
        additionalTechniques:
          - "{{ additionalTechniques }}"
        version: "{{ version }}"
    - name: processes
      value:
        - binary:
            diskPath:
              partitionUuid: "{{ partitionUuid }}"
              relativePath: "{{ relativePath }}"
            sha256: "{{ sha256 }}"
            partiallyHashed: {{ partiallyHashed }}
            path: "{{ path }}"
            contents: "{{ contents }}"
            size: "{{ size }}"
            hashedSize: "{{ hashedSize }}"
            operations:
              - type: "{{ type }}"
            fileLoadState: "{{ fileLoadState }}"
          envVariables: "{{ envVariables }}"
          envVariablesTruncated: {{ envVariablesTruncated }}
          parentPid: "{{ parentPid }}"
          userId: "{{ userId }}"
          argumentsTruncated: {{ argumentsTruncated }}
          libraries: "{{ libraries }}"
          args: "{{ args }}"
          pid: "{{ pid }}"
          script:
            diskPath:
              partitionUuid: "{{ partitionUuid }}"
              relativePath: "{{ relativePath }}"
            sha256: "{{ sha256 }}"
            partiallyHashed: {{ partiallyHashed }}
            path: "{{ path }}"
            contents: "{{ contents }}"
            size: "{{ size }}"
            hashedSize: "{{ hashedSize }}"
            operations:
              - type: "{{ type }}"
            fileLoadState: "{{ fileLoadState }}"
          name: "{{ name }}"
    - name: parent
      value: "{{ parent }}"
    - name: groupMemberships
      value:
        - groupType: "{{ groupType }}"
          groupId: "{{ groupId }}"
    - name: dataFlowEvents
      value:
        - operation: "{{ operation }}"
          principalEmail: "{{ principalEmail }}"
          eventTime: "{{ eventTime }}"
          violatedLocation: "{{ violatedLocation }}"
          eventId: "{{ eventId }}"
    - name: findingClass
      value: "{{ findingClass }}"
      valid_values: ['FINDING_CLASS_UNSPECIFIED', 'THREAT', 'VULNERABILITY', 'MISCONFIGURATION', 'OBSERVATION', 'SCC_ERROR', 'POSTURE_VIOLATION', 'TOXIC_COMBINATION', 'SENSITIVE_DATA_RISK', 'CHOKEPOINT', 'EXTERNAL_EXPOSURE', 'SECRET']
    - name: cloudDlpDataProfile
      value:
        parentType: "{{ parentType }}"
        dataProfile: "{{ dataProfile }}"
        infoTypes:
          - version: "{{ version }}"
            name: "{{ name }}"
            sensitivityScore:
              score: "{{ score }}"
    - name: canonicalName
      value: "{{ canonicalName }}"
    - name: iamBindings
      value:
        - action: "{{ action }}"
          role: "{{ role }}"
          member: "{{ member }}"
    - name: securityPosture
      value:
        name: "{{ name }}"
        postureDeployment: "{{ postureDeployment }}"
        policySet: "{{ policySet }}"
        policy: "{{ policy }}"
        revisionId: "{{ revisionId }}"
        changedPolicy: "{{ changedPolicy }}"
        policyDriftDetails:
          - detectedValue: "{{ detectedValue }}"
            field: "{{ field }}"
            expectedValue: "{{ expectedValue }}"
        postureDeploymentResource: "{{ postureDeploymentResource }}"
    - name: files
      value:
        - diskPath:
            partitionUuid: "{{ partitionUuid }}"
            relativePath: "{{ relativePath }}"
          sha256: "{{ sha256 }}"
          partiallyHashed: {{ partiallyHashed }}
          path: "{{ path }}"
          contents: "{{ contents }}"
          size: "{{ size }}"
          hashedSize: "{{ hashedSize }}"
          operations: "{{ operations }}"
          fileLoadState: "{{ fileLoadState }}"
    - name: sourceProperties
      value: "{{ sourceProperties }}"
    - name: name
      value: "{{ name }}"
    - name: category
      value: "{{ category }}"
    - name: application
      value:
        baseUri: "{{ baseUri }}"
        fullUri: "{{ fullUri }}"
    - name: description
      value: "{{ description }}"
    - name: database
      value:
        query: "{{ query }}"
        grantees:
          - "{{ grantees }}"
        version: "{{ version }}"
        name: "{{ name }}"
        userName: "{{ userName }}"
        displayName: "{{ displayName }}"
    - name: ipRules
      value:
        allowed:
          ipRules:
            - protocol: "{{ protocol }}"
              portRanges: "{{ portRanges }}"
        direction: "{{ direction }}"
        denied:
          ipRules:
            - protocol: "{{ protocol }}"
              portRanges: "{{ portRanges }}"
        destinationIpRanges:
          - "{{ destinationIpRanges }}"
        sourceIpRanges:
          - "{{ sourceIpRanges }}"
        exposedServices:
          - "{{ exposedServices }}"
    - name: externalUri
      value: "{{ externalUri }}"
    - name: nextSteps
      value: "{{ nextSteps }}"
    - name: eventTime
      value: "{{ eventTime }}"
    - name: logEntries
      value:
        - cloudLoggingEntry:
            logId: "{{ logId }}"
            insertId: "{{ insertId }}"
            resourceContainer: "{{ resourceContainer }}"
            timestamp: "{{ timestamp }}"
    - name: vulnerability
      value:
        cve:
          impact: "{{ impact }}"
          zeroDay: {{ zeroDay }}
          references:
            - source: "{{ source }}"
              uri: "{{ uri }}"
          id: "{{ id }}"
          cvssv3:
            privilegesRequired: "{{ privilegesRequired }}"
            userInteraction: "{{ userInteraction }}"
            baseScore: {{ baseScore }}
            availabilityImpact: "{{ availabilityImpact }}"
            scope: "{{ scope }}"
            attackVector: "{{ attackVector }}"
            integrityImpact: "{{ integrityImpact }}"
            attackComplexity: "{{ attackComplexity }}"
            confidentialityImpact: "{{ confidentialityImpact }}"
          observedInTheWild: {{ observedInTheWild }}
          exploitReleaseDate: "{{ exploitReleaseDate }}"
          exploitationActivity: "{{ exploitationActivity }}"
          upstreamFixAvailable: {{ upstreamFixAvailable }}
          firstExploitationDate: "{{ firstExploitationDate }}"
        securityBulletin:
          submissionTime: "{{ submissionTime }}"
          bulletinId: "{{ bulletinId }}"
          suggestedUpgradeVersion: "{{ suggestedUpgradeVersion }}"
        providerRiskScore: "{{ providerRiskScore }}"
        reachable: {{ reachable }}
        cwes:
          - id: "{{ id }}"
            references: "{{ references }}"
        offendingPackage:
          packageVersion: "{{ packageVersion }}"
          packageName: "{{ packageName }}"
          cpeUri: "{{ cpeUri }}"
          packageType: "{{ packageType }}"
        fixedPackage:
          packageVersion: "{{ packageVersion }}"
          packageName: "{{ packageName }}"
          cpeUri: "{{ cpeUri }}"
          packageType: "{{ packageType }}"
    - name: attackExposure
      value:
        attackExposureResult: "{{ attackExposureResult }}"
        exposedLowValueResourcesCount: {{ exposedLowValueResourcesCount }}
        exposedHighValueResourcesCount: {{ exposedHighValueResourcesCount }}
        exposedMediumValueResourcesCount: {{ exposedMediumValueResourcesCount }}
        latestCalculationTime: "{{ latestCalculationTime }}"
        state: "{{ state }}"
        score: {{ score }}
    - name: vertexAi
      value:
        datasets:
          - name: "{{ name }}"
            source: "{{ source }}"
            displayName: "{{ displayName }}"
        pipelines:
          - displayName: "{{ displayName }}"
            name: "{{ name }}"
    - name: indicator
      value:
        signatures:
          - signatureType: "{{ signatureType }}"
            yaraRuleSignature:
              yaraRule: "{{ yaraRule }}"
            memoryHashSignature:
              binaryFamily: "{{ binaryFamily }}"
              detections:
                - binary: "{{ binary }}"
                  percentPagesMatched: {{ percentPagesMatched }}
        uris:
          - "{{ uris }}"
        domains:
          - "{{ domains }}"
        ipAddresses:
          - "{{ ipAddresses }}"
    - name: resourceName
      value: "{{ resourceName }}"
    - name: toxicCombination
      value:
        attackExposureScore: {{ attackExposureScore }}
        relatedFindings:
          - "{{ relatedFindings }}"
    - name: chokepoint
      value:
        relatedFindings:
          - "{{ relatedFindings }}"
    - name: policyViolationSummary
      value:
        policyViolationsCount: "{{ policyViolationsCount }}"
        outOfScopeResourcesCount: "{{ outOfScopeResourcesCount }}"
        conformantResourcesCount: "{{ conformantResourcesCount }}"
        evaluationErrorsCount: "{{ evaluationErrorsCount }}"
    - name: affectedResources
      value:
        count: "{{ count }}"
    - name: access
      value:
        callerIpGeo:
          regionCode: "{{ regionCode }}"
        userAgentFamily: "{{ userAgentFamily }}"
        serviceAccountKeyName: "{{ serviceAccountKeyName }}"
        methodName: "{{ methodName }}"
        userAgent: "{{ userAgent }}"
        principalSubject: "{{ principalSubject }}"
        serviceName: "{{ serviceName }}"
        principalEmail: "{{ principalEmail }}"
        serviceAccountDelegationInfo:
          - principalEmail: "{{ principalEmail }}"
            principalSubject: "{{ principalSubject }}"
        callerIp: "{{ callerIp }}"
        userName: "{{ userName }}"
    - name: backupDisasterRecovery
      value:
        appliance: "{{ appliance }}"
        profile: "{{ profile }}"
        policies:
          - "{{ policies }}"
        host: "{{ host }}"
        backupCreateTime: "{{ backupCreateTime }}"
        applications:
          - "{{ applications }}"
        backupType: "{{ backupType }}"
        policyOptions:
          - "{{ policyOptions }}"
        backupTemplate: "{{ backupTemplate }}"
        storagePool: "{{ storagePool }}"
    - name: findingId
      value: "{{ findingId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="organizations_sources_findings_patch"
    values={[
        { label: 'organizations_sources_findings_patch', value: 'organizations_sources_findings_patch' },
        { label: 'projects_sources_findings_patch', value: 'projects_sources_findings_patch' },
        { label: 'folders_sources_findings_patch', value: 'folders_sources_findings_patch' }
    ]}
>
<TabItem value="organizations_sources_findings_patch">

No description available.

```sql
UPDATE google.securitycenter.findings
SET 
data__mute = '{{ mute }}',
data__moduleName = '{{ moduleName }}',
data__kubernetes = '{{ kubernetes }}',
data__aiModel = '{{ aiModel }}',
data__agentAnomaly = '{{ agentAnomaly }}',
data__externalExposure = '{{ externalExposure }}',
data__job = '{{ job }}',
data__agentSessions = '{{ agentSessions }}',
data__state = '{{ state }}',
data__dataAccessEvents = '{{ dataAccessEvents }}',
data__secret = '{{ secret }}',
data__severity = '{{ severity }}',
data__compliances = '{{ compliances }}',
data__orgPolicies = '{{ orgPolicies }}',
data__loadBalancers = '{{ loadBalancers }}',
data__complianceDetails = '{{ complianceDetails }}',
data__agent = '{{ agent }}',
data__dataRetentionDeletionEvents = '{{ dataRetentionDeletionEvents }}',
data__createTime = '{{ createTime }}',
data__containers = '{{ containers }}',
data__agentDataAccessEvents = '{{ agentDataAccessEvents }}',
data__iamDetails = '{{ iamDetails }}',
data__artifactGuardPolicies = '{{ artifactGuardPolicies }}',
data__cloudArmor = '{{ cloudArmor }}',
data__cloudDlpInspection = '{{ cloudDlpInspection }}',
data__discoveredWorkload = '{{ discoveredWorkload }}',
data__kernelRootkit = '{{ kernelRootkit }}',
data__notebook = '{{ notebook }}',
data__muteInitiator = '{{ muteInitiator }}',
data__networks = '{{ networks }}',
data__connections = '{{ connections }}',
data__disk = '{{ disk }}',
data__exfiltration = '{{ exfiltration }}',
data__mitreAttack = '{{ mitreAttack }}',
data__processes = '{{ processes }}',
data__parent = '{{ parent }}',
data__groupMemberships = '{{ groupMemberships }}',
data__dataFlowEvents = '{{ dataFlowEvents }}',
data__findingClass = '{{ findingClass }}',
data__cloudDlpDataProfile = '{{ cloudDlpDataProfile }}',
data__canonicalName = '{{ canonicalName }}',
data__iamBindings = '{{ iamBindings }}',
data__securityPosture = '{{ securityPosture }}',
data__files = '{{ files }}',
data__sourceProperties = '{{ sourceProperties }}',
data__name = '{{ name }}',
data__category = '{{ category }}',
data__application = '{{ application }}',
data__description = '{{ description }}',
data__database = '{{ database }}',
data__ipRules = '{{ ipRules }}',
data__externalUri = '{{ externalUri }}',
data__nextSteps = '{{ nextSteps }}',
data__eventTime = '{{ eventTime }}',
data__logEntries = '{{ logEntries }}',
data__vulnerability = '{{ vulnerability }}',
data__attackExposure = '{{ attackExposure }}',
data__vertexAi = '{{ vertexAi }}',
data__indicator = '{{ indicator }}',
data__resourceName = '{{ resourceName }}',
data__toxicCombination = '{{ toxicCombination }}',
data__chokepoint = '{{ chokepoint }}',
data__policyViolationSummary = '{{ policyViolationSummary }}',
data__affectedResources = '{{ affectedResources }}',
data__access = '{{ access }}',
data__backupDisasterRecovery = '{{ backupDisasterRecovery }}'
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
data__mute = '{{ mute }}',
data__moduleName = '{{ moduleName }}',
data__kubernetes = '{{ kubernetes }}',
data__aiModel = '{{ aiModel }}',
data__agentAnomaly = '{{ agentAnomaly }}',
data__externalExposure = '{{ externalExposure }}',
data__job = '{{ job }}',
data__agentSessions = '{{ agentSessions }}',
data__state = '{{ state }}',
data__dataAccessEvents = '{{ dataAccessEvents }}',
data__secret = '{{ secret }}',
data__severity = '{{ severity }}',
data__compliances = '{{ compliances }}',
data__orgPolicies = '{{ orgPolicies }}',
data__loadBalancers = '{{ loadBalancers }}',
data__complianceDetails = '{{ complianceDetails }}',
data__agent = '{{ agent }}',
data__dataRetentionDeletionEvents = '{{ dataRetentionDeletionEvents }}',
data__createTime = '{{ createTime }}',
data__containers = '{{ containers }}',
data__agentDataAccessEvents = '{{ agentDataAccessEvents }}',
data__iamDetails = '{{ iamDetails }}',
data__artifactGuardPolicies = '{{ artifactGuardPolicies }}',
data__cloudArmor = '{{ cloudArmor }}',
data__cloudDlpInspection = '{{ cloudDlpInspection }}',
data__discoveredWorkload = '{{ discoveredWorkload }}',
data__kernelRootkit = '{{ kernelRootkit }}',
data__notebook = '{{ notebook }}',
data__muteInitiator = '{{ muteInitiator }}',
data__networks = '{{ networks }}',
data__connections = '{{ connections }}',
data__disk = '{{ disk }}',
data__exfiltration = '{{ exfiltration }}',
data__mitreAttack = '{{ mitreAttack }}',
data__processes = '{{ processes }}',
data__parent = '{{ parent }}',
data__groupMemberships = '{{ groupMemberships }}',
data__dataFlowEvents = '{{ dataFlowEvents }}',
data__findingClass = '{{ findingClass }}',
data__cloudDlpDataProfile = '{{ cloudDlpDataProfile }}',
data__canonicalName = '{{ canonicalName }}',
data__iamBindings = '{{ iamBindings }}',
data__securityPosture = '{{ securityPosture }}',
data__files = '{{ files }}',
data__sourceProperties = '{{ sourceProperties }}',
data__name = '{{ name }}',
data__category = '{{ category }}',
data__application = '{{ application }}',
data__description = '{{ description }}',
data__database = '{{ database }}',
data__ipRules = '{{ ipRules }}',
data__externalUri = '{{ externalUri }}',
data__nextSteps = '{{ nextSteps }}',
data__eventTime = '{{ eventTime }}',
data__logEntries = '{{ logEntries }}',
data__vulnerability = '{{ vulnerability }}',
data__attackExposure = '{{ attackExposure }}',
data__vertexAi = '{{ vertexAi }}',
data__indicator = '{{ indicator }}',
data__resourceName = '{{ resourceName }}',
data__toxicCombination = '{{ toxicCombination }}',
data__chokepoint = '{{ chokepoint }}',
data__policyViolationSummary = '{{ policyViolationSummary }}',
data__affectedResources = '{{ affectedResources }}',
data__access = '{{ access }}',
data__backupDisasterRecovery = '{{ backupDisasterRecovery }}'
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
<TabItem value="folders_sources_findings_patch">

No description available.

```sql
UPDATE google.securitycenter.findings
SET 
data__mute = '{{ mute }}',
data__moduleName = '{{ moduleName }}',
data__kubernetes = '{{ kubernetes }}',
data__aiModel = '{{ aiModel }}',
data__agentAnomaly = '{{ agentAnomaly }}',
data__externalExposure = '{{ externalExposure }}',
data__job = '{{ job }}',
data__agentSessions = '{{ agentSessions }}',
data__state = '{{ state }}',
data__dataAccessEvents = '{{ dataAccessEvents }}',
data__secret = '{{ secret }}',
data__severity = '{{ severity }}',
data__compliances = '{{ compliances }}',
data__orgPolicies = '{{ orgPolicies }}',
data__loadBalancers = '{{ loadBalancers }}',
data__complianceDetails = '{{ complianceDetails }}',
data__agent = '{{ agent }}',
data__dataRetentionDeletionEvents = '{{ dataRetentionDeletionEvents }}',
data__createTime = '{{ createTime }}',
data__containers = '{{ containers }}',
data__agentDataAccessEvents = '{{ agentDataAccessEvents }}',
data__iamDetails = '{{ iamDetails }}',
data__artifactGuardPolicies = '{{ artifactGuardPolicies }}',
data__cloudArmor = '{{ cloudArmor }}',
data__cloudDlpInspection = '{{ cloudDlpInspection }}',
data__discoveredWorkload = '{{ discoveredWorkload }}',
data__kernelRootkit = '{{ kernelRootkit }}',
data__notebook = '{{ notebook }}',
data__muteInitiator = '{{ muteInitiator }}',
data__networks = '{{ networks }}',
data__connections = '{{ connections }}',
data__disk = '{{ disk }}',
data__exfiltration = '{{ exfiltration }}',
data__mitreAttack = '{{ mitreAttack }}',
data__processes = '{{ processes }}',
data__parent = '{{ parent }}',
data__groupMemberships = '{{ groupMemberships }}',
data__dataFlowEvents = '{{ dataFlowEvents }}',
data__findingClass = '{{ findingClass }}',
data__cloudDlpDataProfile = '{{ cloudDlpDataProfile }}',
data__canonicalName = '{{ canonicalName }}',
data__iamBindings = '{{ iamBindings }}',
data__securityPosture = '{{ securityPosture }}',
data__files = '{{ files }}',
data__sourceProperties = '{{ sourceProperties }}',
data__name = '{{ name }}',
data__category = '{{ category }}',
data__application = '{{ application }}',
data__description = '{{ description }}',
data__database = '{{ database }}',
data__ipRules = '{{ ipRules }}',
data__externalUri = '{{ externalUri }}',
data__nextSteps = '{{ nextSteps }}',
data__eventTime = '{{ eventTime }}',
data__logEntries = '{{ logEntries }}',
data__vulnerability = '{{ vulnerability }}',
data__attackExposure = '{{ attackExposure }}',
data__vertexAi = '{{ vertexAi }}',
data__indicator = '{{ indicator }}',
data__resourceName = '{{ resourceName }}',
data__toxicCombination = '{{ toxicCombination }}',
data__chokepoint = '{{ chokepoint }}',
data__policyViolationSummary = '{{ policyViolationSummary }}',
data__affectedResources = '{{ affectedResources }}',
data__access = '{{ access }}',
data__backupDisasterRecovery = '{{ backupDisasterRecovery }}'
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
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="organizations_findings_bulk_mute"
    values={[
        { label: 'organizations_findings_bulk_mute', value: 'organizations_findings_bulk_mute' },
        { label: 'organizations_sources_findings_set_mute', value: 'organizations_sources_findings_set_mute' },
        { label: 'organizations_sources_findings_group', value: 'organizations_sources_findings_group' },
        { label: 'organizations_sources_findings_set_state', value: 'organizations_sources_findings_set_state' },
        { label: 'projects_sources_findings_group', value: 'projects_sources_findings_group' },
        { label: 'projects_sources_findings_set_mute', value: 'projects_sources_findings_set_mute' },
        { label: 'projects_sources_findings_set_state', value: 'projects_sources_findings_set_state' },
        { label: 'projects_findings_bulk_mute', value: 'projects_findings_bulk_mute' },
        { label: 'folders_findings_bulk_mute', value: 'folders_findings_bulk_mute' },
        { label: 'folders_sources_findings_set_state', value: 'folders_sources_findings_set_state' },
        { label: 'folders_sources_findings_set_mute', value: 'folders_sources_findings_set_mute' },
        { label: 'folders_sources_findings_group', value: 'folders_sources_findings_group' }
    ]}
>
<TabItem value="organizations_findings_bulk_mute">

Successful response

```sql
EXEC google.securitycenter.findings.organizations_findings_bulk_mute 
@organizationsId='{{ organizationsId }}' --required 
@@json=
'{
"muteAnnotation": "{{ muteAnnotation }}", 
"muteState": "{{ muteState }}", 
"filter": "{{ filter }}"
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
<TabItem value="organizations_sources_findings_group">

Successful response

```sql
EXEC google.securitycenter.findings.organizations_sources_findings_group 
@organizationsId='{{ organizationsId }}' --required, 
@sourcesId='{{ sourcesId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"groupBy": "{{ groupBy }}", 
"compareDuration": "{{ compareDuration }}", 
"pageSize": {{ pageSize }}, 
"readTime": "{{ readTime }}", 
"pageToken": "{{ pageToken }}"
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
"state": "{{ state }}", 
"startTime": "{{ startTime }}"
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
"filter": "{{ filter }}", 
"groupBy": "{{ groupBy }}", 
"compareDuration": "{{ compareDuration }}", 
"pageSize": {{ pageSize }}, 
"readTime": "{{ readTime }}", 
"pageToken": "{{ pageToken }}"
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
"state": "{{ state }}", 
"startTime": "{{ startTime }}"
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
"muteAnnotation": "{{ muteAnnotation }}", 
"muteState": "{{ muteState }}", 
"filter": "{{ filter }}"
}'
;
```
</TabItem>
<TabItem value="folders_findings_bulk_mute">

Successful response

```sql
EXEC google.securitycenter.findings.folders_findings_bulk_mute 
@foldersId='{{ foldersId }}' --required 
@@json=
'{
"muteAnnotation": "{{ muteAnnotation }}", 
"muteState": "{{ muteState }}", 
"filter": "{{ filter }}"
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
"state": "{{ state }}", 
"startTime": "{{ startTime }}"
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
<TabItem value="folders_sources_findings_group">

Successful response

```sql
EXEC google.securitycenter.findings.folders_sources_findings_group 
@foldersId='{{ foldersId }}' --required, 
@sourcesId='{{ sourcesId }}' --required 
@@json=
'{
"filter": "{{ filter }}", 
"groupBy": "{{ groupBy }}", 
"compareDuration": "{{ compareDuration }}", 
"pageSize": {{ pageSize }}, 
"readTime": "{{ readTime }}", 
"pageToken": "{{ pageToken }}"
}'
;
```
</TabItem>
</Tabs>
