--- 
title: occurrences
hide_title: false
hide_table_of_contents: false
keywords:
  - occurrences
  - containeranalysis
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

Creates, updates, deletes, gets or lists an <code>occurrences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="occurrences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.containeranalysis.occurrences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_occurrences_get"
    values={[
        { label: 'projects_locations_occurrences_get', value: 'projects_locations_occurrences_get' },
        { label: 'projects_locations_notes_occurrences_list', value: 'projects_locations_notes_occurrences_list' },
        { label: 'projects_occurrences_get', value: 'projects_occurrences_get' },
        { label: 'projects_locations_occurrences_list', value: 'projects_locations_occurrences_list' },
        { label: 'projects_notes_occurrences_list', value: 'projects_notes_occurrences_list' },
        { label: 'projects_occurrences_list', value: 'projects_occurrences_list' }
    ]}
>
<TabItem value="projects_locations_occurrences_get">

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
    <td>Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.</td>
</tr>
<tr>
    <td><CopyableCode code="advisoryPublishTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time this advisory was published by the source.</td>
</tr>
<tr>
    <td><CopyableCode code="aiSkillAnalysis" /></td>
    <td><code>object</code></td>
    <td>Describes an AI skill analysis. (id: AISkillAnalysisOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="attestation" /></td>
    <td><code>object</code></td>
    <td>Describes an attestation of an artifact. (id: AttestationOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="build" /></td>
    <td><code>object</code></td>
    <td>Describes a verifiable build. (id: BuildOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="compliance" /></td>
    <td><code>object</code></td>
    <td>Describes a compliance violation on a linked resource. (id: ComplianceOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this occurrence was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>object</code></td>
    <td>Describes the deployment of an artifact on a runtime. (id: DeploymentOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="discovery" /></td>
    <td><code>object</code></td>
    <td>Describes when a resource was discovered. (id: DiscoveryOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="dsseAttestation" /></td>
    <td><code>object</code></td>
    <td>Describes an attestation of an artifact using dsse. (id: DSSEAttestationOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="envelope" /></td>
    <td><code>object</code></td>
    <td>https://github.com/secure-systems-lab/dsse (id: Envelope)</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>object</code></td>
    <td>Describes how this resource derives from the basis in the associated note. (id: ImageOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests. (NOTE_KIND_UNSPECIFIED, VULNERABILITY, BUILD, IMAGE, PACKAGE, DEPLOYMENT, DISCOVERY, ATTESTATION, UPGRADE, COMPLIANCE, DSSE_ATTESTATION, VULNERABILITY_ASSESSMENT, SBOM_REFERENCE, SECRET, AI_SKILL_ANALYSIS)</td>
</tr>
<tr>
    <td><CopyableCode code="noteName" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests.</td>
</tr>
<tr>
    <td><CopyableCode code="package" /></td>
    <td><code>object</code></td>
    <td>Describes the installation of a package on the linked resource. (id: PackageOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="remediation" /></td>
    <td><code>string</code></td>
    <td>A description of actions that can be taken to remedy the note.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceUri" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, `https://gcr.io/project/image@sha256:123abc` for a Docker image.</td>
</tr>
<tr>
    <td><CopyableCode code="sbomReference" /></td>
    <td><code>object</code></td>
    <td>Describes a specific SBOM reference occurrences. (id: SBOMReferenceOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="secret" /></td>
    <td><code>object</code></td>
    <td>Describes a secret. (id: SecretOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this occurrence was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="upgrade" /></td>
    <td><code>object</code></td>
    <td>Describes an available package upgrade on the linked resource. (id: UpgradeOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerability" /></td>
    <td><code>object</code></td>
    <td>Describes a security vulnerability. (id: VulnerabilityOccurrence)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_notes_occurrences_list">

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
    <td>Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.</td>
</tr>
<tr>
    <td><CopyableCode code="advisoryPublishTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time this advisory was published by the source.</td>
</tr>
<tr>
    <td><CopyableCode code="aiSkillAnalysis" /></td>
    <td><code>object</code></td>
    <td>Describes an AI skill analysis. (id: AISkillAnalysisOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="attestation" /></td>
    <td><code>object</code></td>
    <td>Describes an attestation of an artifact. (id: AttestationOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="build" /></td>
    <td><code>object</code></td>
    <td>Describes a verifiable build. (id: BuildOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="compliance" /></td>
    <td><code>object</code></td>
    <td>Describes a compliance violation on a linked resource. (id: ComplianceOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this occurrence was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>object</code></td>
    <td>Describes the deployment of an artifact on a runtime. (id: DeploymentOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="discovery" /></td>
    <td><code>object</code></td>
    <td>Describes when a resource was discovered. (id: DiscoveryOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="dsseAttestation" /></td>
    <td><code>object</code></td>
    <td>Describes an attestation of an artifact using dsse. (id: DSSEAttestationOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="envelope" /></td>
    <td><code>object</code></td>
    <td>https://github.com/secure-systems-lab/dsse (id: Envelope)</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>object</code></td>
    <td>Describes how this resource derives from the basis in the associated note. (id: ImageOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests. (NOTE_KIND_UNSPECIFIED, VULNERABILITY, BUILD, IMAGE, PACKAGE, DEPLOYMENT, DISCOVERY, ATTESTATION, UPGRADE, COMPLIANCE, DSSE_ATTESTATION, VULNERABILITY_ASSESSMENT, SBOM_REFERENCE, SECRET, AI_SKILL_ANALYSIS)</td>
</tr>
<tr>
    <td><CopyableCode code="noteName" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests.</td>
</tr>
<tr>
    <td><CopyableCode code="package" /></td>
    <td><code>object</code></td>
    <td>Describes the installation of a package on the linked resource. (id: PackageOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="remediation" /></td>
    <td><code>string</code></td>
    <td>A description of actions that can be taken to remedy the note.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceUri" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, `https://gcr.io/project/image@sha256:123abc` for a Docker image.</td>
</tr>
<tr>
    <td><CopyableCode code="sbomReference" /></td>
    <td><code>object</code></td>
    <td>Describes a specific SBOM reference occurrences. (id: SBOMReferenceOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="secret" /></td>
    <td><code>object</code></td>
    <td>Describes a secret. (id: SecretOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this occurrence was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="upgrade" /></td>
    <td><code>object</code></td>
    <td>Describes an available package upgrade on the linked resource. (id: UpgradeOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerability" /></td>
    <td><code>object</code></td>
    <td>Describes a security vulnerability. (id: VulnerabilityOccurrence)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_occurrences_get">

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
    <td>Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.</td>
</tr>
<tr>
    <td><CopyableCode code="advisoryPublishTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time this advisory was published by the source.</td>
</tr>
<tr>
    <td><CopyableCode code="aiSkillAnalysis" /></td>
    <td><code>object</code></td>
    <td>Describes an AI skill analysis. (id: AISkillAnalysisOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="attestation" /></td>
    <td><code>object</code></td>
    <td>Describes an attestation of an artifact. (id: AttestationOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="build" /></td>
    <td><code>object</code></td>
    <td>Describes a verifiable build. (id: BuildOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="compliance" /></td>
    <td><code>object</code></td>
    <td>Describes a compliance violation on a linked resource. (id: ComplianceOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this occurrence was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>object</code></td>
    <td>Describes the deployment of an artifact on a runtime. (id: DeploymentOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="discovery" /></td>
    <td><code>object</code></td>
    <td>Describes when a resource was discovered. (id: DiscoveryOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="dsseAttestation" /></td>
    <td><code>object</code></td>
    <td>Describes an attestation of an artifact using dsse. (id: DSSEAttestationOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="envelope" /></td>
    <td><code>object</code></td>
    <td>https://github.com/secure-systems-lab/dsse (id: Envelope)</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>object</code></td>
    <td>Describes how this resource derives from the basis in the associated note. (id: ImageOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests. (NOTE_KIND_UNSPECIFIED, VULNERABILITY, BUILD, IMAGE, PACKAGE, DEPLOYMENT, DISCOVERY, ATTESTATION, UPGRADE, COMPLIANCE, DSSE_ATTESTATION, VULNERABILITY_ASSESSMENT, SBOM_REFERENCE, SECRET, AI_SKILL_ANALYSIS)</td>
</tr>
<tr>
    <td><CopyableCode code="noteName" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests.</td>
</tr>
<tr>
    <td><CopyableCode code="package" /></td>
    <td><code>object</code></td>
    <td>Describes the installation of a package on the linked resource. (id: PackageOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="remediation" /></td>
    <td><code>string</code></td>
    <td>A description of actions that can be taken to remedy the note.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceUri" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, `https://gcr.io/project/image@sha256:123abc` for a Docker image.</td>
</tr>
<tr>
    <td><CopyableCode code="sbomReference" /></td>
    <td><code>object</code></td>
    <td>Describes a specific SBOM reference occurrences. (id: SBOMReferenceOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="secret" /></td>
    <td><code>object</code></td>
    <td>Describes a secret. (id: SecretOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this occurrence was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="upgrade" /></td>
    <td><code>object</code></td>
    <td>Describes an available package upgrade on the linked resource. (id: UpgradeOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerability" /></td>
    <td><code>object</code></td>
    <td>Describes a security vulnerability. (id: VulnerabilityOccurrence)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_occurrences_list">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
</tbody>
</table>
</TabItem>
<TabItem value="projects_notes_occurrences_list">

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
    <td>Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.</td>
</tr>
<tr>
    <td><CopyableCode code="advisoryPublishTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>The time this advisory was published by the source.</td>
</tr>
<tr>
    <td><CopyableCode code="aiSkillAnalysis" /></td>
    <td><code>object</code></td>
    <td>Describes an AI skill analysis. (id: AISkillAnalysisOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="attestation" /></td>
    <td><code>object</code></td>
    <td>Describes an attestation of an artifact. (id: AttestationOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="build" /></td>
    <td><code>object</code></td>
    <td>Describes a verifiable build. (id: BuildOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="compliance" /></td>
    <td><code>object</code></td>
    <td>Describes a compliance violation on a linked resource. (id: ComplianceOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this occurrence was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>object</code></td>
    <td>Describes the deployment of an artifact on a runtime. (id: DeploymentOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="discovery" /></td>
    <td><code>object</code></td>
    <td>Describes when a resource was discovered. (id: DiscoveryOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="dsseAttestation" /></td>
    <td><code>object</code></td>
    <td>Describes an attestation of an artifact using dsse. (id: DSSEAttestationOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="envelope" /></td>
    <td><code>object</code></td>
    <td>https://github.com/secure-systems-lab/dsse (id: Envelope)</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>object</code></td>
    <td>Describes how this resource derives from the basis in the associated note. (id: ImageOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests. (NOTE_KIND_UNSPECIFIED, VULNERABILITY, BUILD, IMAGE, PACKAGE, DEPLOYMENT, DISCOVERY, ATTESTATION, UPGRADE, COMPLIANCE, DSSE_ATTESTATION, VULNERABILITY_ASSESSMENT, SBOM_REFERENCE, SECRET, AI_SKILL_ANALYSIS)</td>
</tr>
<tr>
    <td><CopyableCode code="noteName" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests.</td>
</tr>
<tr>
    <td><CopyableCode code="package" /></td>
    <td><code>object</code></td>
    <td>Describes the installation of a package on the linked resource. (id: PackageOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="remediation" /></td>
    <td><code>string</code></td>
    <td>A description of actions that can be taken to remedy the note.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceUri" /></td>
    <td><code>string</code></td>
    <td>Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, `https://gcr.io/project/image@sha256:123abc` for a Docker image.</td>
</tr>
<tr>
    <td><CopyableCode code="sbomReference" /></td>
    <td><code>object</code></td>
    <td>Describes a specific SBOM reference occurrences. (id: SBOMReferenceOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="secret" /></td>
    <td><code>object</code></td>
    <td>Describes a secret. (id: SecretOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The time this occurrence was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="upgrade" /></td>
    <td><code>object</code></td>
    <td>Describes an available package upgrade on the linked resource. (id: UpgradeOccurrence)</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerability" /></td>
    <td><code>object</code></td>
    <td>Describes a security vulnerability. (id: VulnerabilityOccurrence)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_occurrences_list">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
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
    <td><a href="#projects_locations_occurrences_get"><CopyableCode code="projects_locations_occurrences_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-occurrencesId"><code>occurrencesId</code></a></td>
    <td></td>
    <td>Gets the specified occurrence.</td>
</tr>
<tr>
    <td><a href="#projects_locations_notes_occurrences_list"><CopyableCode code="projects_locations_notes_occurrences_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-notesId"><code>notesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.</td>
</tr>
<tr>
    <td><a href="#projects_occurrences_get"><CopyableCode code="projects_occurrences_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-occurrencesId"><code>occurrencesId</code></a></td>
    <td></td>
    <td>Gets the specified occurrence.</td>
</tr>
<tr>
    <td><a href="#projects_locations_occurrences_list"><CopyableCode code="projects_locations_occurrences_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists occurrences for the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_notes_occurrences_list"><CopyableCode code="projects_notes_occurrences_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-notesId"><code>notesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.</td>
</tr>
<tr>
    <td><a href="#projects_occurrences_list"><CopyableCode code="projects_occurrences_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists occurrences for the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_occurrences_create"><CopyableCode code="projects_locations_occurrences_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a new occurrence.</td>
</tr>
<tr>
    <td><a href="#projects_locations_occurrences_batch_create"><CopyableCode code="projects_locations_occurrences_batch_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates new occurrences in batch.</td>
</tr>
<tr>
    <td><a href="#projects_occurrences_batch_create"><CopyableCode code="projects_occurrences_batch_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates new occurrences in batch.</td>
</tr>
<tr>
    <td><a href="#projects_occurrences_create"><CopyableCode code="projects_occurrences_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a new occurrence.</td>
</tr>
<tr>
    <td><a href="#projects_locations_occurrences_patch"><CopyableCode code="projects_locations_occurrences_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-occurrencesId"><code>occurrencesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified occurrence.</td>
</tr>
<tr>
    <td><a href="#projects_occurrences_patch"><CopyableCode code="projects_occurrences_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-occurrencesId"><code>occurrencesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified occurrence.</td>
</tr>
<tr>
    <td><a href="#projects_locations_occurrences_delete"><CopyableCode code="projects_locations_occurrences_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-occurrencesId"><code>occurrencesId</code></a></td>
    <td></td>
    <td>Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.</td>
</tr>
<tr>
    <td><a href="#projects_occurrences_delete"><CopyableCode code="projects_occurrences_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-occurrencesId"><code>occurrencesId</code></a></td>
    <td></td>
    <td>Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.</td>
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
<tr id="parameter-notesId">
    <td><CopyableCode code="notesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-occurrencesId">
    <td><CopyableCode code="occurrencesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
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
    defaultValue="projects_locations_occurrences_get"
    values={[
        { label: 'projects_locations_occurrences_get', value: 'projects_locations_occurrences_get' },
        { label: 'projects_locations_notes_occurrences_list', value: 'projects_locations_notes_occurrences_list' },
        { label: 'projects_occurrences_get', value: 'projects_occurrences_get' },
        { label: 'projects_locations_occurrences_list', value: 'projects_locations_occurrences_list' },
        { label: 'projects_notes_occurrences_list', value: 'projects_notes_occurrences_list' },
        { label: 'projects_occurrences_list', value: 'projects_occurrences_list' }
    ]}
>
<TabItem value="projects_locations_occurrences_get">

Gets the specified occurrence.

```sql
SELECT
name,
advisoryPublishTime,
aiSkillAnalysis,
attestation,
build,
compliance,
createTime,
deployment,
discovery,
dsseAttestation,
envelope,
image,
kind,
noteName,
package,
remediation,
resourceUri,
sbomReference,
secret,
updateTime,
upgrade,
vulnerability
FROM google.containeranalysis.occurrences
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND occurrencesId = '{{ occurrencesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_notes_occurrences_list">

Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.

```sql
SELECT
name,
advisoryPublishTime,
aiSkillAnalysis,
attestation,
build,
compliance,
createTime,
deployment,
discovery,
dsseAttestation,
envelope,
image,
kind,
noteName,
package,
remediation,
resourceUri,
sbomReference,
secret,
updateTime,
upgrade,
vulnerability
FROM google.containeranalysis.occurrences
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND notesId = '{{ notesId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="projects_occurrences_get">

Gets the specified occurrence.

```sql
SELECT
name,
advisoryPublishTime,
aiSkillAnalysis,
attestation,
build,
compliance,
createTime,
deployment,
discovery,
dsseAttestation,
envelope,
image,
kind,
noteName,
package,
remediation,
resourceUri,
sbomReference,
secret,
updateTime,
upgrade,
vulnerability
FROM google.containeranalysis.occurrences
WHERE projectsId = '{{ projectsId }}' -- required
AND occurrencesId = '{{ occurrencesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_occurrences_list">

Lists occurrences for the specified project.

```sql
SELECT
*
FROM google.containeranalysis.occurrences
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND filter = '{{ filter }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="projects_notes_occurrences_list">

Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.

```sql
SELECT
name,
advisoryPublishTime,
aiSkillAnalysis,
attestation,
build,
compliance,
createTime,
deployment,
discovery,
dsseAttestation,
envelope,
image,
kind,
noteName,
package,
remediation,
resourceUri,
sbomReference,
secret,
updateTime,
upgrade,
vulnerability
FROM google.containeranalysis.occurrences
WHERE projectsId = '{{ projectsId }}' -- required
AND notesId = '{{ notesId }}' -- required
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
;
```
</TabItem>
<TabItem value="projects_occurrences_list">

Lists occurrences for the specified project.

```sql
SELECT
*
FROM google.containeranalysis.occurrences
WHERE projectsId = '{{ projectsId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_occurrences_create"
    values={[
        { label: 'projects_locations_occurrences_create', value: 'projects_locations_occurrences_create' },
        { label: 'projects_locations_occurrences_batch_create', value: 'projects_locations_occurrences_batch_create' },
        { label: 'projects_occurrences_batch_create', value: 'projects_occurrences_batch_create' },
        { label: 'projects_occurrences_create', value: 'projects_occurrences_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_occurrences_create">

Creates a new occurrence.

```sql
INSERT INTO google.containeranalysis.occurrences (
data__build,
data__deployment,
data__name,
data__image,
data__updateTime,
data__upgrade,
data__remediation,
data__sbomReference,
data__secret,
data__createTime,
data__envelope,
data__advisoryPublishTime,
data__noteName,
data__discovery,
data__kind,
data__package,
data__compliance,
data__aiSkillAnalysis,
data__resourceUri,
data__attestation,
data__vulnerability,
data__dsseAttestation,
projectsId,
locationsId
)
SELECT 
'{{ build }}',
'{{ deployment }}',
'{{ name }}',
'{{ image }}',
'{{ updateTime }}',
'{{ upgrade }}',
'{{ remediation }}',
'{{ sbomReference }}',
'{{ secret }}',
'{{ createTime }}',
'{{ envelope }}',
'{{ advisoryPublishTime }}',
'{{ noteName }}',
'{{ discovery }}',
'{{ kind }}',
'{{ package }}',
'{{ compliance }}',
'{{ aiSkillAnalysis }}',
'{{ resourceUri }}',
'{{ attestation }}',
'{{ vulnerability }}',
'{{ dsseAttestation }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
advisoryPublishTime,
aiSkillAnalysis,
attestation,
build,
compliance,
createTime,
deployment,
discovery,
dsseAttestation,
envelope,
image,
kind,
noteName,
package,
remediation,
resourceUri,
sbomReference,
secret,
updateTime,
upgrade,
vulnerability
;
```
</TabItem>
<TabItem value="projects_locations_occurrences_batch_create">

Creates new occurrences in batch.

```sql
INSERT INTO google.containeranalysis.occurrences (
data__occurrences,
projectsId,
locationsId
)
SELECT 
'{{ occurrences }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
occurrences
;
```
</TabItem>
<TabItem value="projects_occurrences_batch_create">

Creates new occurrences in batch.

```sql
INSERT INTO google.containeranalysis.occurrences (
data__occurrences,
projectsId
)
SELECT 
'{{ occurrences }}',
'{{ projectsId }}'
RETURNING
occurrences
;
```
</TabItem>
<TabItem value="projects_occurrences_create">

Creates a new occurrence.

```sql
INSERT INTO google.containeranalysis.occurrences (
data__build,
data__deployment,
data__name,
data__image,
data__updateTime,
data__upgrade,
data__remediation,
data__sbomReference,
data__secret,
data__createTime,
data__envelope,
data__advisoryPublishTime,
data__noteName,
data__discovery,
data__kind,
data__package,
data__compliance,
data__aiSkillAnalysis,
data__resourceUri,
data__attestation,
data__vulnerability,
data__dsseAttestation,
projectsId
)
SELECT 
'{{ build }}',
'{{ deployment }}',
'{{ name }}',
'{{ image }}',
'{{ updateTime }}',
'{{ upgrade }}',
'{{ remediation }}',
'{{ sbomReference }}',
'{{ secret }}',
'{{ createTime }}',
'{{ envelope }}',
'{{ advisoryPublishTime }}',
'{{ noteName }}',
'{{ discovery }}',
'{{ kind }}',
'{{ package }}',
'{{ compliance }}',
'{{ aiSkillAnalysis }}',
'{{ resourceUri }}',
'{{ attestation }}',
'{{ vulnerability }}',
'{{ dsseAttestation }}',
'{{ projectsId }}'
RETURNING
name,
advisoryPublishTime,
aiSkillAnalysis,
attestation,
build,
compliance,
createTime,
deployment,
discovery,
dsseAttestation,
envelope,
image,
kind,
noteName,
package,
remediation,
resourceUri,
sbomReference,
secret,
updateTime,
upgrade,
vulnerability
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: occurrences
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the occurrences resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the occurrences resource.
    - name: build
      description: |
        Describes a verifiable build.
      value:
        intotoProvenance:
          recipe:
            environment: "{{ environment }}"
            entryPoint: "{{ entryPoint }}"
            definedInMaterial: "{{ definedInMaterial }}"
            type: "{{ type }}"
            arguments: "{{ arguments }}"
          metadata:
            buildFinishedOn: "{{ buildFinishedOn }}"
            buildInvocationId: "{{ buildInvocationId }}"
            buildStartedOn: "{{ buildStartedOn }}"
            completeness:
              arguments: {{ arguments }}
              environment: {{ environment }}
              materials: {{ materials }}
            reproducible: {{ reproducible }}
          materials:
            - "{{ materials }}"
          builderConfig:
            id: "{{ id }}"
        intotoStatement:
          provenance:
            recipe:
              environment: "{{ environment }}"
              entryPoint: "{{ entryPoint }}"
              definedInMaterial: "{{ definedInMaterial }}"
              type: "{{ type }}"
              arguments: "{{ arguments }}"
            metadata:
              buildFinishedOn: "{{ buildFinishedOn }}"
              buildInvocationId: "{{ buildInvocationId }}"
              buildStartedOn: "{{ buildStartedOn }}"
              completeness:
                arguments: {{ arguments }}
                environment: {{ environment }}
                materials: {{ materials }}
              reproducible: {{ reproducible }}
            materials:
              - "{{ materials }}"
            builderConfig:
              id: "{{ id }}"
          slsaProvenanceZeroTwo:
            builder:
              id: "{{ id }}"
            buildConfig: "{{ buildConfig }}"
            metadata:
              buildStartedOn: "{{ buildStartedOn }}"
              completeness:
                parameters: {{ parameters }}
                environment: {{ environment }}
                materials: {{ materials }}
              reproducible: {{ reproducible }}
              buildInvocationId: "{{ buildInvocationId }}"
              buildFinishedOn: "{{ buildFinishedOn }}"
            materials:
              - uri: "{{ uri }}"
                digest: "{{ digest }}"
            buildType: "{{ buildType }}"
            invocation:
              configSource:
                entryPoint: "{{ entryPoint }}"
                uri: "{{ uri }}"
                digest: "{{ digest }}"
              parameters: "{{ parameters }}"
              environment: "{{ environment }}"
          predicateType: "{{ predicateType }}"
          _type: "{{ _type }}"
          slsaProvenance:
            builder:
              id: "{{ id }}"
            recipe:
              definedInMaterial: "{{ definedInMaterial }}"
              type: "{{ type }}"
              arguments: "{{ arguments }}"
              environment: "{{ environment }}"
              entryPoint: "{{ entryPoint }}"
            metadata:
              buildFinishedOn: "{{ buildFinishedOn }}"
              buildStartedOn: "{{ buildStartedOn }}"
              completeness:
                environment: {{ environment }}
                materials: {{ materials }}
                arguments: {{ arguments }}
              reproducible: {{ reproducible }}
              buildInvocationId: "{{ buildInvocationId }}"
            materials:
              - uri: "{{ uri }}"
                digest: "{{ digest }}"
          subject:
            - name: "{{ name }}"
              digest: "{{ digest }}"
        provenanceBytes: "{{ provenanceBytes }}"
        inTotoSlsaProvenanceV1:
          subject:
            - name: "{{ name }}"
              digest: "{{ digest }}"
          predicateType: "{{ predicateType }}"
          predicate:
            buildDefinition:
              buildType: "{{ buildType }}"
              externalParameters: "{{ externalParameters }}"
              internalParameters: "{{ internalParameters }}"
              resolvedDependencies:
                - mediaType: "{{ mediaType }}"
                  annotations: "{{ annotations }}"
                  content: "{{ content }}"
                  name: "{{ name }}"
                  uri: "{{ uri }}"
                  digest: "{{ digest }}"
                  downloadLocation: "{{ downloadLocation }}"
            runDetails:
              builder:
                version: "{{ version }}"
                builderDependencies: "{{ builderDependencies }}"
                id: "{{ id }}"
              metadata:
                invocationId: "{{ invocationId }}"
                finishedOn: "{{ finishedOn }}"
                startedOn: "{{ startedOn }}"
              byproducts:
                - mediaType: "{{ mediaType }}"
                  annotations: "{{ annotations }}"
                  content: "{{ content }}"
                  name: "{{ name }}"
                  uri: "{{ uri }}"
                  digest: "{{ digest }}"
                  downloadLocation: "{{ downloadLocation }}"
          _type: "{{ _type }}"
        provenance:
          commands:
            - waitFor: "{{ waitFor }}"
              name: "{{ name }}"
              id: "{{ id }}"
              args: "{{ args }}"
              env: "{{ env }}"
              dir: "{{ dir }}"
          builtArtifacts:
            - checksum: "{{ checksum }}"
              names: "{{ names }}"
              id: "{{ id }}"
          createTime: "{{ createTime }}"
          triggerId: "{{ triggerId }}"
          creator: "{{ creator }}"
          sourceProvenance:
            artifactStorageSourceUri: "{{ artifactStorageSourceUri }}"
            fileHashes: "{{ fileHashes }}"
            context:
              labels: "{{ labels }}"
              git:
                revisionId: "{{ revisionId }}"
                url: "{{ url }}"
              cloudRepo:
                repoId: "{{ repoId }}"
                revisionId: "{{ revisionId }}"
                aliasContext: "{{ aliasContext }}"
              gerrit:
                hostUri: "{{ hostUri }}"
                revisionId: "{{ revisionId }}"
                aliasContext: "{{ aliasContext }}"
                gerritProject: "{{ gerritProject }}"
            additionalContexts:
              - labels: "{{ labels }}"
                git:
                  revisionId: "{{ revisionId }}"
                  url: "{{ url }}"
                cloudRepo:
                  repoId: "{{ repoId }}"
                  revisionId: "{{ revisionId }}"
                  aliasContext: "{{ aliasContext }}"
                gerrit:
                  hostUri: "{{ hostUri }}"
                  revisionId: "{{ revisionId }}"
                  aliasContext: "{{ aliasContext }}"
                  gerritProject: "{{ gerritProject }}"
          builderVersion: "{{ builderVersion }}"
          buildOptions: "{{ buildOptions }}"
          logsUri: "{{ logsUri }}"
          endTime: "{{ endTime }}"
          projectId: "{{ projectId }}"
          startTime: "{{ startTime }}"
          id: "{{ id }}"
    - name: deployment
      description: |
        Describes the deployment of an artifact on a runtime.
      value:
        deployTime: "{{ deployTime }}"
        undeployTime: "{{ undeployTime }}"
        config: "{{ config }}"
        platform: "{{ platform }}"
        resourceUri:
          - "{{ resourceUri }}"
        address: "{{ address }}"
        userEmail: "{{ userEmail }}"
    - name: name
      value: "{{ name }}"
      description: |
        Output only. The name of the occurrence in the form of \`projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]\`.
    - name: image
      description: |
        Describes how this resource derives from the basis in the associated note.
      value:
        distance: {{ distance }}
        baseResourceUrl: "{{ baseResourceUrl }}"
        fingerprint:
          v1Name: "{{ v1Name }}"
          v2Name: "{{ v2Name }}"
          v2Blob:
            - "{{ v2Blob }}"
        layerInfo:
          - arguments: "{{ arguments }}"
            directive: "{{ directive }}"
    - name: updateTime
      value: "{{ updateTime }}"
      description: |
        Output only. The time this occurrence was last updated.
    - name: upgrade
      description: |
        Describes an available package upgrade on the linked resource.
      value:
        windowsUpdate:
          lastPublishedTimestamp: "{{ lastPublishedTimestamp }}"
          title: "{{ title }}"
          description: "{{ description }}"
          categories:
            - name: "{{ name }}"
              categoryId: "{{ categoryId }}"
          supportUrl: "{{ supportUrl }}"
          identity:
            revision: {{ revision }}
            updateId: "{{ updateId }}"
          kbArticleIds:
            - "{{ kbArticleIds }}"
        package: "{{ package }}"
        parsedVersion:
          epoch: {{ epoch }}
          name: "{{ name }}"
          inclusive: {{ inclusive }}
          kind: "{{ kind }}"
          revision: "{{ revision }}"
          fullName: "{{ fullName }}"
        distribution:
          cve:
            - "{{ cve }}"
          cpeUri: "{{ cpeUri }}"
          classification: "{{ classification }}"
          severity: "{{ severity }}"
    - name: remediation
      value: "{{ remediation }}"
      description: |
        A description of actions that can be taken to remedy the note.
    - name: sbomReference
      description: |
        Describes a specific SBOM reference occurrences.
      value:
        payload:
          predicateType: "{{ predicateType }}"
          subject:
            - name: "{{ name }}"
              digest: "{{ digest }}"
          predicate:
            location: "{{ location }}"
            digest: "{{ digest }}"
            mimeType: "{{ mimeType }}"
            referrerId: "{{ referrerId }}"
          _type: "{{ _type }}"
        payloadType: "{{ payloadType }}"
        signatures:
          - sig: "{{ sig }}"
            keyid: "{{ keyid }}"
    - name: secret
      description: |
        Describes a secret.
      value:
        kind: "{{ kind }}"
        locations:
          - fileLocation:
              lineNumber: {{ lineNumber }}
              filePath: "{{ filePath }}"
              layerDetails:
                index: {{ index }}
                command: "{{ command }}"
                diffId: "{{ diffId }}"
                chainId: "{{ chainId }}"
                baseImages:
                  - layerCount: {{ layerCount }}
                    registry: "{{ registry }}"
                    name: "{{ name }}"
                    repository: "{{ repository }}"
        statuses:
          - message: "{{ message }}"
            status: "{{ status }}"
            updateTime: "{{ updateTime }}"
    - name: createTime
      value: "{{ createTime }}"
      description: |
        Output only. The time this occurrence was created.
    - name: envelope
      description: |
        https://github.com/secure-systems-lab/dsse
      value:
        signatures:
          - sig: "{{ sig }}"
            keyid: "{{ keyid }}"
        payload: "{{ payload }}"
        payloadType: "{{ payloadType }}"
    - name: advisoryPublishTime
      value: "{{ advisoryPublishTime }}"
      description: |
        The time this advisory was published by the source.
    - name: noteName
      value: "{{ noteName }}"
      description: |
        Required. Immutable. The analysis note associated with this occurrence, in the form of \`projects/[PROVIDER_ID]/notes/[NOTE_ID]\`. This field can be used as a filter in list requests.
    - name: discovery
      description: |
        Describes when a resource was discovered.
      value:
        lastVulnerabilityUpdateTime: "{{ lastVulnerabilityUpdateTime }}"
        analysisStatus: "{{ analysisStatus }}"
        cpe: "{{ cpe }}"
        archiveTime: "{{ archiveTime }}"
        analysisCompleted:
          analysisType:
            - "{{ analysisType }}"
        continuousAnalysis: "{{ continuousAnalysis }}"
        files:
          - name: "{{ name }}"
            digest: "{{ digest }}"
        analysisStatusError:
          message: "{{ message }}"
          code: {{ code }}
          details: "{{ details }}"
        lastScanTime: "{{ lastScanTime }}"
        sbomStatus:
          sbomState: "{{ sbomState }}"
          error: "{{ error }}"
        analysisError:
          - message: "{{ message }}"
            code: {{ code }}
            details: "{{ details }}"
    - name: kind
      value: "{{ kind }}"
      description: |
        Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests.
      valid_values: ['NOTE_KIND_UNSPECIFIED', 'VULNERABILITY', 'BUILD', 'IMAGE', 'PACKAGE', 'DEPLOYMENT', 'DISCOVERY', 'ATTESTATION', 'UPGRADE', 'COMPLIANCE', 'DSSE_ATTESTATION', 'VULNERABILITY_ASSESSMENT', 'SBOM_REFERENCE', 'SECRET', 'AI_SKILL_ANALYSIS']
    - name: package
      description: |
        Describes the installation of a package on the linked resource.
      value:
        location:
          - cpeUri: "{{ cpeUri }}"
            path: "{{ path }}"
            version:
              epoch: {{ epoch }}
              name: "{{ name }}"
              inclusive: {{ inclusive }}
              kind: "{{ kind }}"
              revision: "{{ revision }}"
              fullName: "{{ fullName }}"
        architecture: "{{ architecture }}"
        packageType: "{{ packageType }}"
        license:
          expression: "{{ expression }}"
          comments: "{{ comments }}"
        name: "{{ name }}"
        version:
          epoch: {{ epoch }}
          name: "{{ name }}"
          inclusive: {{ inclusive }}
          kind: "{{ kind }}"
          revision: "{{ revision }}"
          fullName: "{{ fullName }}"
        cpeUri: "{{ cpeUri }}"
    - name: compliance
      description: |
        Describes a compliance violation on a linked resource.
      value:
        nonComplianceReason: "{{ nonComplianceReason }}"
        nonCompliantFiles:
          - path: "{{ path }}"
            reason: "{{ reason }}"
            displayCommand: "{{ displayCommand }}"
        version:
          benchmarkDocument: "{{ benchmarkDocument }}"
          version: "{{ version }}"
          cpeUri: "{{ cpeUri }}"
    - name: aiSkillAnalysis
      description: |
        Describes an AI skill analysis.
      value:
        maxSeverity: "{{ maxSeverity }}"
        skillName: "{{ skillName }}"
        findings:
          - scanner: "{{ scanner }}"
            location:
              filePath: "{{ filePath }}"
              lineNumber: "{{ lineNumber }}"
            severity: "{{ severity }}"
            category: "{{ category }}"
            details: "{{ details }}"
    - name: resourceUri
      value: "{{ resourceUri }}"
      description: |
        Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, \`https://gcr.io/project/image@sha256:123abc\` for a Docker image.
    - name: attestation
      description: |
        Describes an attestation of an artifact.
      value:
        serializedPayload: "{{ serializedPayload }}"
        signatures:
          - publicKeyId: "{{ publicKeyId }}"
            signature: "{{ signature }}"
        jwts:
          - compactJwt: "{{ compactJwt }}"
    - name: vulnerability
      description: |
        Describes a security vulnerability.
      value:
        risk:
          cisaKev:
            knownRansomwareCampaignUse: "{{ knownRansomwareCampaignUse }}"
          epss:
            score: {{ score }}
            percentile: {{ percentile }}
        fixAvailable: {{ fixAvailable }}
        severity: "{{ severity }}"
        packageIssue:
          - fixedCpeUri: "{{ fixedCpeUri }}"
            fixedVersion:
              epoch: {{ epoch }}
              name: "{{ name }}"
              inclusive: {{ inclusive }}
              kind: "{{ kind }}"
              revision: "{{ revision }}"
              fullName: "{{ fullName }}"
            affectedPackage: "{{ affectedPackage }}"
            packageType: "{{ packageType }}"
            affectedCpeUri: "{{ affectedCpeUri }}"
            fixAvailable: {{ fixAvailable }}
            fixedPackage: "{{ fixedPackage }}"
            fileLocation: "{{ fileLocation }}"
            affectedVersion:
              epoch: {{ epoch }}
              name: "{{ name }}"
              inclusive: {{ inclusive }}
              kind: "{{ kind }}"
              revision: "{{ revision }}"
              fullName: "{{ fullName }}"
            effectiveSeverity: "{{ effectiveSeverity }}"
        relatedUrls:
          - url: "{{ url }}"
            label: "{{ label }}"
        vexAssessment:
          vulnerabilityId: "{{ vulnerabilityId }}"
          relatedUris:
            - url: "{{ url }}"
              label: "{{ label }}"
          noteName: "{{ noteName }}"
          remediations:
            - details: "{{ details }}"
              remediationType: "{{ remediationType }}"
              remediationUri:
                url: "{{ url }}"
                label: "{{ label }}"
          impacts:
            - "{{ impacts }}"
          justification:
            justificationType: "{{ justificationType }}"
            details: "{{ details }}"
          cve: "{{ cve }}"
          state: "{{ state }}"
        cvssV4:
          vulnerableSystemIntegrityImpact: "{{ vulnerableSystemIntegrityImpact }}"
          attackVector: "{{ attackVector }}"
          impactScore: {{ impactScore }}
          authentication: "{{ authentication }}"
          subsequentSystemAvailabilityImpact: "{{ subsequentSystemAvailabilityImpact }}"
          subsequentSystemIntegrityImpact: "{{ subsequentSystemIntegrityImpact }}"
          baseScore: {{ baseScore }}
          integrityImpact: "{{ integrityImpact }}"
          availabilityImpact: "{{ availabilityImpact }}"
          vulnerableSystemConfidentialityImpact: "{{ vulnerableSystemConfidentialityImpact }}"
          subsequentSystemConfidentialityImpact: "{{ subsequentSystemConfidentialityImpact }}"
          exploitMaturity: "{{ exploitMaturity }}"
          scope: "{{ scope }}"
          attackRequirements: "{{ attackRequirements }}"
          userInteraction: "{{ userInteraction }}"
          vulnerableSystemAvailabilityImpact: "{{ vulnerableSystemAvailabilityImpact }}"
          exploitabilityScore: {{ exploitabilityScore }}
          privilegesRequired: "{{ privilegesRequired }}"
          attackComplexity: "{{ attackComplexity }}"
          confidentialityImpact: "{{ confidentialityImpact }}"
        cvssVersion: "{{ cvssVersion }}"
        extraDetails: "{{ extraDetails }}"
        type: "{{ type }}"
        shortDescription: "{{ shortDescription }}"
        longDescription: "{{ longDescription }}"
        cvssV2:
          vulnerableSystemIntegrityImpact: "{{ vulnerableSystemIntegrityImpact }}"
          attackVector: "{{ attackVector }}"
          impactScore: {{ impactScore }}
          authentication: "{{ authentication }}"
          subsequentSystemAvailabilityImpact: "{{ subsequentSystemAvailabilityImpact }}"
          subsequentSystemIntegrityImpact: "{{ subsequentSystemIntegrityImpact }}"
          baseScore: {{ baseScore }}
          integrityImpact: "{{ integrityImpact }}"
          availabilityImpact: "{{ availabilityImpact }}"
          vulnerableSystemConfidentialityImpact: "{{ vulnerableSystemConfidentialityImpact }}"
          subsequentSystemConfidentialityImpact: "{{ subsequentSystemConfidentialityImpact }}"
          exploitMaturity: "{{ exploitMaturity }}"
          scope: "{{ scope }}"
          attackRequirements: "{{ attackRequirements }}"
          userInteraction: "{{ userInteraction }}"
          vulnerableSystemAvailabilityImpact: "{{ vulnerableSystemAvailabilityImpact }}"
          exploitabilityScore: {{ exploitabilityScore }}
          privilegesRequired: "{{ privilegesRequired }}"
          attackComplexity: "{{ attackComplexity }}"
          confidentialityImpact: "{{ confidentialityImpact }}"
        cvssScore: {{ cvssScore }}
        cvssv3:
          vulnerableSystemIntegrityImpact: "{{ vulnerableSystemIntegrityImpact }}"
          attackVector: "{{ attackVector }}"
          impactScore: {{ impactScore }}
          authentication: "{{ authentication }}"
          subsequentSystemAvailabilityImpact: "{{ subsequentSystemAvailabilityImpact }}"
          subsequentSystemIntegrityImpact: "{{ subsequentSystemIntegrityImpact }}"
          baseScore: {{ baseScore }}
          integrityImpact: "{{ integrityImpact }}"
          availabilityImpact: "{{ availabilityImpact }}"
          vulnerableSystemConfidentialityImpact: "{{ vulnerableSystemConfidentialityImpact }}"
          subsequentSystemConfidentialityImpact: "{{ subsequentSystemConfidentialityImpact }}"
          exploitMaturity: "{{ exploitMaturity }}"
          scope: "{{ scope }}"
          attackRequirements: "{{ attackRequirements }}"
          userInteraction: "{{ userInteraction }}"
          vulnerableSystemAvailabilityImpact: "{{ vulnerableSystemAvailabilityImpact }}"
          exploitabilityScore: {{ exploitabilityScore }}
          privilegesRequired: "{{ privilegesRequired }}"
          attackComplexity: "{{ attackComplexity }}"
          confidentialityImpact: "{{ confidentialityImpact }}"
        effectiveSeverity: "{{ effectiveSeverity }}"
    - name: dsseAttestation
      description: |
        Describes an attestation of an artifact using dsse.
      value:
        envelope:
          signatures:
            - sig: "{{ sig }}"
              keyid: "{{ keyid }}"
          payload: "{{ payload }}"
          payloadType: "{{ payloadType }}"
        statement:
          provenance:
            recipe:
              environment: "{{ environment }}"
              entryPoint: "{{ entryPoint }}"
              definedInMaterial: "{{ definedInMaterial }}"
              type: "{{ type }}"
              arguments: "{{ arguments }}"
            metadata:
              buildFinishedOn: "{{ buildFinishedOn }}"
              buildInvocationId: "{{ buildInvocationId }}"
              buildStartedOn: "{{ buildStartedOn }}"
              completeness:
                arguments: {{ arguments }}
                environment: {{ environment }}
                materials: {{ materials }}
              reproducible: {{ reproducible }}
            materials:
              - "{{ materials }}"
            builderConfig:
              id: "{{ id }}"
          slsaProvenanceZeroTwo:
            builder:
              id: "{{ id }}"
            buildConfig: "{{ buildConfig }}"
            metadata:
              buildStartedOn: "{{ buildStartedOn }}"
              completeness:
                parameters: {{ parameters }}
                environment: {{ environment }}
                materials: {{ materials }}
              reproducible: {{ reproducible }}
              buildInvocationId: "{{ buildInvocationId }}"
              buildFinishedOn: "{{ buildFinishedOn }}"
            materials:
              - uri: "{{ uri }}"
                digest: "{{ digest }}"
            buildType: "{{ buildType }}"
            invocation:
              configSource:
                entryPoint: "{{ entryPoint }}"
                uri: "{{ uri }}"
                digest: "{{ digest }}"
              parameters: "{{ parameters }}"
              environment: "{{ environment }}"
          predicateType: "{{ predicateType }}"
          _type: "{{ _type }}"
          slsaProvenance:
            builder:
              id: "{{ id }}"
            recipe:
              definedInMaterial: "{{ definedInMaterial }}"
              type: "{{ type }}"
              arguments: "{{ arguments }}"
              environment: "{{ environment }}"
              entryPoint: "{{ entryPoint }}"
            metadata:
              buildFinishedOn: "{{ buildFinishedOn }}"
              buildStartedOn: "{{ buildStartedOn }}"
              completeness:
                environment: {{ environment }}
                materials: {{ materials }}
                arguments: {{ arguments }}
              reproducible: {{ reproducible }}
              buildInvocationId: "{{ buildInvocationId }}"
            materials:
              - uri: "{{ uri }}"
                digest: "{{ digest }}"
          subject:
            - name: "{{ name }}"
              digest: "{{ digest }}"
    - name: occurrences
      description: |
        Required. The occurrences to create. Max allowed length is 1000.
      value:
        - build:
            intotoProvenance:
              recipe:
                environment: "{{ environment }}"
                entryPoint: "{{ entryPoint }}"
                definedInMaterial: "{{ definedInMaterial }}"
                type: "{{ type }}"
                arguments: "{{ arguments }}"
              metadata:
                buildFinishedOn: "{{ buildFinishedOn }}"
                buildInvocationId: "{{ buildInvocationId }}"
                buildStartedOn: "{{ buildStartedOn }}"
                completeness:
                  arguments: {{ arguments }}
                  environment: {{ environment }}
                  materials: {{ materials }}
                reproducible: {{ reproducible }}
              materials:
                - "{{ materials }}"
              builderConfig:
                id: "{{ id }}"
            intotoStatement:
              provenance:
                recipe:
                  environment: "{{ environment }}"
                  entryPoint: "{{ entryPoint }}"
                  definedInMaterial: "{{ definedInMaterial }}"
                  type: "{{ type }}"
                  arguments: "{{ arguments }}"
                metadata:
                  buildFinishedOn: "{{ buildFinishedOn }}"
                  buildInvocationId: "{{ buildInvocationId }}"
                  buildStartedOn: "{{ buildStartedOn }}"
                  completeness: "{{ completeness }}"
                  reproducible: {{ reproducible }}
                materials:
                  - "{{ materials }}"
                builderConfig:
                  id: "{{ id }}"
              slsaProvenanceZeroTwo:
                builder:
                  id: "{{ id }}"
                buildConfig: "{{ buildConfig }}"
                metadata:
                  buildStartedOn: "{{ buildStartedOn }}"
                  completeness: "{{ completeness }}"
                  reproducible: {{ reproducible }}
                  buildInvocationId: "{{ buildInvocationId }}"
                  buildFinishedOn: "{{ buildFinishedOn }}"
                materials:
                  - uri: "{{ uri }}"
                    digest: "{{ digest }}"
                buildType: "{{ buildType }}"
                invocation:
                  configSource: "{{ configSource }}"
                  parameters: "{{ parameters }}"
                  environment: "{{ environment }}"
              predicateType: "{{ predicateType }}"
              _type: "{{ _type }}"
              slsaProvenance:
                builder:
                  id: "{{ id }}"
                recipe:
                  definedInMaterial: "{{ definedInMaterial }}"
                  type: "{{ type }}"
                  arguments: "{{ arguments }}"
                  environment: "{{ environment }}"
                  entryPoint: "{{ entryPoint }}"
                metadata:
                  buildFinishedOn: "{{ buildFinishedOn }}"
                  buildStartedOn: "{{ buildStartedOn }}"
                  completeness: "{{ completeness }}"
                  reproducible: {{ reproducible }}
                  buildInvocationId: "{{ buildInvocationId }}"
                materials:
                  - uri: "{{ uri }}"
                    digest: "{{ digest }}"
              subject:
                - name: "{{ name }}"
                  digest: "{{ digest }}"
            provenanceBytes: "{{ provenanceBytes }}"
            inTotoSlsaProvenanceV1:
              subject:
                - name: "{{ name }}"
                  digest: "{{ digest }}"
              predicateType: "{{ predicateType }}"
              predicate:
                buildDefinition:
                  buildType: "{{ buildType }}"
                  externalParameters: "{{ externalParameters }}"
                  internalParameters: "{{ internalParameters }}"
                  resolvedDependencies: "{{ resolvedDependencies }}"
                runDetails:
                  builder: "{{ builder }}"
                  metadata: "{{ metadata }}"
                  byproducts: "{{ byproducts }}"
              _type: "{{ _type }}"
            provenance:
              commands:
                - waitFor: "{{ waitFor }}"
                  name: "{{ name }}"
                  id: "{{ id }}"
                  args: "{{ args }}"
                  env: "{{ env }}"
                  dir: "{{ dir }}"
              builtArtifacts:
                - checksum: "{{ checksum }}"
                  names: "{{ names }}"
                  id: "{{ id }}"
              createTime: "{{ createTime }}"
              triggerId: "{{ triggerId }}"
              creator: "{{ creator }}"
              sourceProvenance:
                artifactStorageSourceUri: "{{ artifactStorageSourceUri }}"
                fileHashes: "{{ fileHashes }}"
                context:
                  labels: "{{ labels }}"
                  git: "{{ git }}"
                  cloudRepo: "{{ cloudRepo }}"
                  gerrit: "{{ gerrit }}"
                additionalContexts:
                  - labels: "{{ labels }}"
                    git:
                      revisionId: "{{ revisionId }}"
                      url: "{{ url }}"
                    cloudRepo:
                      repoId: "{{ repoId }}"
                      revisionId: "{{ revisionId }}"
                      aliasContext: "{{ aliasContext }}"
                    gerrit:
                      hostUri: "{{ hostUri }}"
                      revisionId: "{{ revisionId }}"
                      aliasContext: "{{ aliasContext }}"
                      gerritProject: "{{ gerritProject }}"
              builderVersion: "{{ builderVersion }}"
              buildOptions: "{{ buildOptions }}"
              logsUri: "{{ logsUri }}"
              endTime: "{{ endTime }}"
              projectId: "{{ projectId }}"
              startTime: "{{ startTime }}"
              id: "{{ id }}"
          deployment:
            deployTime: "{{ deployTime }}"
            undeployTime: "{{ undeployTime }}"
            config: "{{ config }}"
            platform: "{{ platform }}"
            resourceUri:
              - "{{ resourceUri }}"
            address: "{{ address }}"
            userEmail: "{{ userEmail }}"
          name: "{{ name }}"
          image:
            distance: {{ distance }}
            baseResourceUrl: "{{ baseResourceUrl }}"
            fingerprint:
              v1Name: "{{ v1Name }}"
              v2Name: "{{ v2Name }}"
              v2Blob:
                - "{{ v2Blob }}"
            layerInfo:
              - arguments: "{{ arguments }}"
                directive: "{{ directive }}"
          updateTime: "{{ updateTime }}"
          upgrade:
            windowsUpdate:
              lastPublishedTimestamp: "{{ lastPublishedTimestamp }}"
              title: "{{ title }}"
              description: "{{ description }}"
              categories:
                - name: "{{ name }}"
                  categoryId: "{{ categoryId }}"
              supportUrl: "{{ supportUrl }}"
              identity:
                revision: {{ revision }}
                updateId: "{{ updateId }}"
              kbArticleIds:
                - "{{ kbArticleIds }}"
            package: "{{ package }}"
            parsedVersion:
              epoch: {{ epoch }}
              name: "{{ name }}"
              inclusive: {{ inclusive }}
              kind: "{{ kind }}"
              revision: "{{ revision }}"
              fullName: "{{ fullName }}"
            distribution:
              cve:
                - "{{ cve }}"
              cpeUri: "{{ cpeUri }}"
              classification: "{{ classification }}"
              severity: "{{ severity }}"
          remediation: "{{ remediation }}"
          sbomReference:
            payload:
              predicateType: "{{ predicateType }}"
              subject:
                - name: "{{ name }}"
                  digest: "{{ digest }}"
              predicate:
                location: "{{ location }}"
                digest: "{{ digest }}"
                mimeType: "{{ mimeType }}"
                referrerId: "{{ referrerId }}"
              _type: "{{ _type }}"
            payloadType: "{{ payloadType }}"
            signatures:
              - sig: "{{ sig }}"
                keyid: "{{ keyid }}"
          secret:
            kind: "{{ kind }}"
            locations:
              - fileLocation:
                  lineNumber: {{ lineNumber }}
                  filePath: "{{ filePath }}"
                  layerDetails:
                    index: {{ index }}
                    command: "{{ command }}"
                    diffId: "{{ diffId }}"
                    chainId: "{{ chainId }}"
                    baseImages: "{{ baseImages }}"
            statuses:
              - message: "{{ message }}"
                status: "{{ status }}"
                updateTime: "{{ updateTime }}"
          createTime: "{{ createTime }}"
          envelope:
            signatures:
              - sig: "{{ sig }}"
                keyid: "{{ keyid }}"
            payload: "{{ payload }}"
            payloadType: "{{ payloadType }}"
          advisoryPublishTime: "{{ advisoryPublishTime }}"
          noteName: "{{ noteName }}"
          discovery:
            lastVulnerabilityUpdateTime: "{{ lastVulnerabilityUpdateTime }}"
            analysisStatus: "{{ analysisStatus }}"
            cpe: "{{ cpe }}"
            archiveTime: "{{ archiveTime }}"
            analysisCompleted:
              analysisType:
                - "{{ analysisType }}"
            continuousAnalysis: "{{ continuousAnalysis }}"
            files:
              - name: "{{ name }}"
                digest: "{{ digest }}"
            analysisStatusError:
              message: "{{ message }}"
              code: {{ code }}
              details: "{{ details }}"
            lastScanTime: "{{ lastScanTime }}"
            sbomStatus:
              sbomState: "{{ sbomState }}"
              error: "{{ error }}"
            analysisError:
              - message: "{{ message }}"
                code: {{ code }}
                details: "{{ details }}"
          kind: "{{ kind }}"
          package:
            location:
              - cpeUri: "{{ cpeUri }}"
                path: "{{ path }}"
                version:
                  epoch: {{ epoch }}
                  name: "{{ name }}"
                  inclusive: {{ inclusive }}
                  kind: "{{ kind }}"
                  revision: "{{ revision }}"
                  fullName: "{{ fullName }}"
            architecture: "{{ architecture }}"
            packageType: "{{ packageType }}"
            license:
              expression: "{{ expression }}"
              comments: "{{ comments }}"
            name: "{{ name }}"
            version:
              epoch: {{ epoch }}
              name: "{{ name }}"
              inclusive: {{ inclusive }}
              kind: "{{ kind }}"
              revision: "{{ revision }}"
              fullName: "{{ fullName }}"
            cpeUri: "{{ cpeUri }}"
          compliance:
            nonComplianceReason: "{{ nonComplianceReason }}"
            nonCompliantFiles:
              - path: "{{ path }}"
                reason: "{{ reason }}"
                displayCommand: "{{ displayCommand }}"
            version:
              benchmarkDocument: "{{ benchmarkDocument }}"
              version: "{{ version }}"
              cpeUri: "{{ cpeUri }}"
          aiSkillAnalysis:
            maxSeverity: "{{ maxSeverity }}"
            skillName: "{{ skillName }}"
            findings:
              - scanner: "{{ scanner }}"
                location:
                  filePath: "{{ filePath }}"
                  lineNumber: "{{ lineNumber }}"
                severity: "{{ severity }}"
                category: "{{ category }}"
                details: "{{ details }}"
          resourceUri: "{{ resourceUri }}"
          attestation:
            serializedPayload: "{{ serializedPayload }}"
            signatures:
              - publicKeyId: "{{ publicKeyId }}"
                signature: "{{ signature }}"
            jwts:
              - compactJwt: "{{ compactJwt }}"
          vulnerability:
            risk:
              cisaKev:
                knownRansomwareCampaignUse: "{{ knownRansomwareCampaignUse }}"
              epss:
                score: {{ score }}
                percentile: {{ percentile }}
            fixAvailable: {{ fixAvailable }}
            severity: "{{ severity }}"
            packageIssue:
              - fixedCpeUri: "{{ fixedCpeUri }}"
                fixedVersion:
                  epoch: {{ epoch }}
                  name: "{{ name }}"
                  inclusive: {{ inclusive }}
                  kind: "{{ kind }}"
                  revision: "{{ revision }}"
                  fullName: "{{ fullName }}"
                affectedPackage: "{{ affectedPackage }}"
                packageType: "{{ packageType }}"
                affectedCpeUri: "{{ affectedCpeUri }}"
                fixAvailable: {{ fixAvailable }}
                fixedPackage: "{{ fixedPackage }}"
                fileLocation: "{{ fileLocation }}"
                affectedVersion:
                  epoch: {{ epoch }}
                  name: "{{ name }}"
                  inclusive: {{ inclusive }}
                  kind: "{{ kind }}"
                  revision: "{{ revision }}"
                  fullName: "{{ fullName }}"
                effectiveSeverity: "{{ effectiveSeverity }}"
            relatedUrls:
              - url: "{{ url }}"
                label: "{{ label }}"
            vexAssessment:
              vulnerabilityId: "{{ vulnerabilityId }}"
              relatedUris:
                - url: "{{ url }}"
                  label: "{{ label }}"
              noteName: "{{ noteName }}"
              remediations:
                - details: "{{ details }}"
                  remediationType: "{{ remediationType }}"
                  remediationUri:
                    url: "{{ url }}"
                    label: "{{ label }}"
              impacts:
                - "{{ impacts }}"
              justification:
                justificationType: "{{ justificationType }}"
                details: "{{ details }}"
              cve: "{{ cve }}"
              state: "{{ state }}"
            cvssV4:
              vulnerableSystemIntegrityImpact: "{{ vulnerableSystemIntegrityImpact }}"
              attackVector: "{{ attackVector }}"
              impactScore: {{ impactScore }}
              authentication: "{{ authentication }}"
              subsequentSystemAvailabilityImpact: "{{ subsequentSystemAvailabilityImpact }}"
              subsequentSystemIntegrityImpact: "{{ subsequentSystemIntegrityImpact }}"
              baseScore: {{ baseScore }}
              integrityImpact: "{{ integrityImpact }}"
              availabilityImpact: "{{ availabilityImpact }}"
              vulnerableSystemConfidentialityImpact: "{{ vulnerableSystemConfidentialityImpact }}"
              subsequentSystemConfidentialityImpact: "{{ subsequentSystemConfidentialityImpact }}"
              exploitMaturity: "{{ exploitMaturity }}"
              scope: "{{ scope }}"
              attackRequirements: "{{ attackRequirements }}"
              userInteraction: "{{ userInteraction }}"
              vulnerableSystemAvailabilityImpact: "{{ vulnerableSystemAvailabilityImpact }}"
              exploitabilityScore: {{ exploitabilityScore }}
              privilegesRequired: "{{ privilegesRequired }}"
              attackComplexity: "{{ attackComplexity }}"
              confidentialityImpact: "{{ confidentialityImpact }}"
            cvssVersion: "{{ cvssVersion }}"
            extraDetails: "{{ extraDetails }}"
            type: "{{ type }}"
            shortDescription: "{{ shortDescription }}"
            longDescription: "{{ longDescription }}"
            cvssV2:
              vulnerableSystemIntegrityImpact: "{{ vulnerableSystemIntegrityImpact }}"
              attackVector: "{{ attackVector }}"
              impactScore: {{ impactScore }}
              authentication: "{{ authentication }}"
              subsequentSystemAvailabilityImpact: "{{ subsequentSystemAvailabilityImpact }}"
              subsequentSystemIntegrityImpact: "{{ subsequentSystemIntegrityImpact }}"
              baseScore: {{ baseScore }}
              integrityImpact: "{{ integrityImpact }}"
              availabilityImpact: "{{ availabilityImpact }}"
              vulnerableSystemConfidentialityImpact: "{{ vulnerableSystemConfidentialityImpact }}"
              subsequentSystemConfidentialityImpact: "{{ subsequentSystemConfidentialityImpact }}"
              exploitMaturity: "{{ exploitMaturity }}"
              scope: "{{ scope }}"
              attackRequirements: "{{ attackRequirements }}"
              userInteraction: "{{ userInteraction }}"
              vulnerableSystemAvailabilityImpact: "{{ vulnerableSystemAvailabilityImpact }}"
              exploitabilityScore: {{ exploitabilityScore }}
              privilegesRequired: "{{ privilegesRequired }}"
              attackComplexity: "{{ attackComplexity }}"
              confidentialityImpact: "{{ confidentialityImpact }}"
            cvssScore: {{ cvssScore }}
            cvssv3:
              vulnerableSystemIntegrityImpact: "{{ vulnerableSystemIntegrityImpact }}"
              attackVector: "{{ attackVector }}"
              impactScore: {{ impactScore }}
              authentication: "{{ authentication }}"
              subsequentSystemAvailabilityImpact: "{{ subsequentSystemAvailabilityImpact }}"
              subsequentSystemIntegrityImpact: "{{ subsequentSystemIntegrityImpact }}"
              baseScore: {{ baseScore }}
              integrityImpact: "{{ integrityImpact }}"
              availabilityImpact: "{{ availabilityImpact }}"
              vulnerableSystemConfidentialityImpact: "{{ vulnerableSystemConfidentialityImpact }}"
              subsequentSystemConfidentialityImpact: "{{ subsequentSystemConfidentialityImpact }}"
              exploitMaturity: "{{ exploitMaturity }}"
              scope: "{{ scope }}"
              attackRequirements: "{{ attackRequirements }}"
              userInteraction: "{{ userInteraction }}"
              vulnerableSystemAvailabilityImpact: "{{ vulnerableSystemAvailabilityImpact }}"
              exploitabilityScore: {{ exploitabilityScore }}
              privilegesRequired: "{{ privilegesRequired }}"
              attackComplexity: "{{ attackComplexity }}"
              confidentialityImpact: "{{ confidentialityImpact }}"
            effectiveSeverity: "{{ effectiveSeverity }}"
          dsseAttestation:
            envelope:
              signatures:
                - sig: "{{ sig }}"
                  keyid: "{{ keyid }}"
              payload: "{{ payload }}"
              payloadType: "{{ payloadType }}"
            statement:
              provenance:
                recipe:
                  environment: "{{ environment }}"
                  entryPoint: "{{ entryPoint }}"
                  definedInMaterial: "{{ definedInMaterial }}"
                  type: "{{ type }}"
                  arguments: "{{ arguments }}"
                metadata:
                  buildFinishedOn: "{{ buildFinishedOn }}"
                  buildInvocationId: "{{ buildInvocationId }}"
                  buildStartedOn: "{{ buildStartedOn }}"
                  completeness: "{{ completeness }}"
                  reproducible: {{ reproducible }}
                materials:
                  - "{{ materials }}"
                builderConfig:
                  id: "{{ id }}"
              slsaProvenanceZeroTwo:
                builder:
                  id: "{{ id }}"
                buildConfig: "{{ buildConfig }}"
                metadata:
                  buildStartedOn: "{{ buildStartedOn }}"
                  completeness: "{{ completeness }}"
                  reproducible: {{ reproducible }}
                  buildInvocationId: "{{ buildInvocationId }}"
                  buildFinishedOn: "{{ buildFinishedOn }}"
                materials:
                  - uri: "{{ uri }}"
                    digest: "{{ digest }}"
                buildType: "{{ buildType }}"
                invocation:
                  configSource: "{{ configSource }}"
                  parameters: "{{ parameters }}"
                  environment: "{{ environment }}"
              predicateType: "{{ predicateType }}"
              _type: "{{ _type }}"
              slsaProvenance:
                builder:
                  id: "{{ id }}"
                recipe:
                  definedInMaterial: "{{ definedInMaterial }}"
                  type: "{{ type }}"
                  arguments: "{{ arguments }}"
                  environment: "{{ environment }}"
                  entryPoint: "{{ entryPoint }}"
                metadata:
                  buildFinishedOn: "{{ buildFinishedOn }}"
                  buildStartedOn: "{{ buildStartedOn }}"
                  completeness: "{{ completeness }}"
                  reproducible: {{ reproducible }}
                  buildInvocationId: "{{ buildInvocationId }}"
                materials:
                  - uri: "{{ uri }}"
                    digest: "{{ digest }}"
              subject:
                - name: "{{ name }}"
                  digest: "{{ digest }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_occurrences_patch"
    values={[
        { label: 'projects_locations_occurrences_patch', value: 'projects_locations_occurrences_patch' },
        { label: 'projects_occurrences_patch', value: 'projects_occurrences_patch' }
    ]}
>
<TabItem value="projects_locations_occurrences_patch">

Updates the specified occurrence.

```sql
UPDATE google.containeranalysis.occurrences
SET 
data__build = '{{ build }}',
data__deployment = '{{ deployment }}',
data__name = '{{ name }}',
data__image = '{{ image }}',
data__updateTime = '{{ updateTime }}',
data__upgrade = '{{ upgrade }}',
data__remediation = '{{ remediation }}',
data__sbomReference = '{{ sbomReference }}',
data__secret = '{{ secret }}',
data__createTime = '{{ createTime }}',
data__envelope = '{{ envelope }}',
data__advisoryPublishTime = '{{ advisoryPublishTime }}',
data__noteName = '{{ noteName }}',
data__discovery = '{{ discovery }}',
data__kind = '{{ kind }}',
data__package = '{{ package }}',
data__compliance = '{{ compliance }}',
data__aiSkillAnalysis = '{{ aiSkillAnalysis }}',
data__resourceUri = '{{ resourceUri }}',
data__attestation = '{{ attestation }}',
data__vulnerability = '{{ vulnerability }}',
data__dsseAttestation = '{{ dsseAttestation }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND occurrencesId = '{{ occurrencesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
advisoryPublishTime,
aiSkillAnalysis,
attestation,
build,
compliance,
createTime,
deployment,
discovery,
dsseAttestation,
envelope,
image,
kind,
noteName,
package,
remediation,
resourceUri,
sbomReference,
secret,
updateTime,
upgrade,
vulnerability;
```
</TabItem>
<TabItem value="projects_occurrences_patch">

Updates the specified occurrence.

```sql
UPDATE google.containeranalysis.occurrences
SET 
data__build = '{{ build }}',
data__deployment = '{{ deployment }}',
data__name = '{{ name }}',
data__image = '{{ image }}',
data__updateTime = '{{ updateTime }}',
data__upgrade = '{{ upgrade }}',
data__remediation = '{{ remediation }}',
data__sbomReference = '{{ sbomReference }}',
data__secret = '{{ secret }}',
data__createTime = '{{ createTime }}',
data__envelope = '{{ envelope }}',
data__advisoryPublishTime = '{{ advisoryPublishTime }}',
data__noteName = '{{ noteName }}',
data__discovery = '{{ discovery }}',
data__kind = '{{ kind }}',
data__package = '{{ package }}',
data__compliance = '{{ compliance }}',
data__aiSkillAnalysis = '{{ aiSkillAnalysis }}',
data__resourceUri = '{{ resourceUri }}',
data__attestation = '{{ attestation }}',
data__vulnerability = '{{ vulnerability }}',
data__dsseAttestation = '{{ dsseAttestation }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND occurrencesId = '{{ occurrencesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
advisoryPublishTime,
aiSkillAnalysis,
attestation,
build,
compliance,
createTime,
deployment,
discovery,
dsseAttestation,
envelope,
image,
kind,
noteName,
package,
remediation,
resourceUri,
sbomReference,
secret,
updateTime,
upgrade,
vulnerability;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_occurrences_delete"
    values={[
        { label: 'projects_locations_occurrences_delete', value: 'projects_locations_occurrences_delete' },
        { label: 'projects_occurrences_delete', value: 'projects_occurrences_delete' }
    ]}
>
<TabItem value="projects_locations_occurrences_delete">

Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.

```sql
DELETE FROM google.containeranalysis.occurrences
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND occurrencesId = '{{ occurrencesId }}' --required
;
```
</TabItem>
<TabItem value="projects_occurrences_delete">

Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.

```sql
DELETE FROM google.containeranalysis.occurrences
WHERE projectsId = '{{ projectsId }}' --required
AND occurrencesId = '{{ occurrencesId }}' --required
;
```
</TabItem>
</Tabs>
