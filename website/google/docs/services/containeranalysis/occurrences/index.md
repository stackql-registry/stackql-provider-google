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
    defaultValue="projects_locations_notes_occurrences_list"
    values={[
        { label: 'projects_locations_notes_occurrences_list', value: 'projects_locations_notes_occurrences_list' },
        { label: 'projects_locations_occurrences_get', value: 'projects_locations_occurrences_get' },
        { label: 'projects_locations_occurrences_list', value: 'projects_locations_occurrences_list' },
        { label: 'projects_notes_occurrences_list', value: 'projects_notes_occurrences_list' },
        { label: 'projects_occurrences_get', value: 'projects_occurrences_get' },
        { label: 'projects_occurrences_list', value: 'projects_occurrences_list' }
    ]}
>
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
    <td><a href="#projects_locations_notes_occurrences_list"><CopyableCode code="projects_locations_notes_occurrences_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-notesId"><code>notesId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.</td>
</tr>
<tr>
    <td><a href="#projects_locations_occurrences_get"><CopyableCode code="projects_locations_occurrences_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-occurrencesId"><code>occurrencesId</code></a></td>
    <td></td>
    <td>Gets the specified occurrence.</td>
</tr>
<tr>
    <td><a href="#projects_locations_occurrences_list"><CopyableCode code="projects_locations_occurrences_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
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
    <td><a href="#projects_occurrences_get"><CopyableCode code="projects_occurrences_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-occurrencesId"><code>occurrencesId</code></a></td>
    <td></td>
    <td>Gets the specified occurrence.</td>
</tr>
<tr>
    <td><a href="#projects_occurrences_list"><CopyableCode code="projects_occurrences_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-returnPartialSuccess"><code>returnPartialSuccess</code></a></td>
    <td>Lists occurrences for the specified project.</td>
</tr>
<tr>
    <td><a href="#projects_locations_occurrences_batch_create"><CopyableCode code="projects_locations_occurrences_batch_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates new occurrences in batch.</td>
</tr>
<tr>
    <td><a href="#projects_locations_occurrences_create"><CopyableCode code="projects_locations_occurrences_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a new occurrence.</td>
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
    defaultValue="projects_locations_notes_occurrences_list"
    values={[
        { label: 'projects_locations_notes_occurrences_list', value: 'projects_locations_notes_occurrences_list' },
        { label: 'projects_locations_occurrences_get', value: 'projects_locations_occurrences_get' },
        { label: 'projects_locations_occurrences_list', value: 'projects_locations_occurrences_list' },
        { label: 'projects_notes_occurrences_list', value: 'projects_notes_occurrences_list' },
        { label: 'projects_occurrences_get', value: 'projects_occurrences_get' },
        { label: 'projects_occurrences_list', value: 'projects_occurrences_list' }
    ]}
>
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
<TabItem value="projects_locations_occurrences_list">

Lists occurrences for the specified project.

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
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
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
<TabItem value="projects_occurrences_list">

Lists occurrences for the specified project.

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
AND filter = '{{ filter }}'
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND returnPartialSuccess = '{{ returnPartialSuccess }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_occurrences_batch_create"
    values={[
        { label: 'projects_locations_occurrences_batch_create', value: 'projects_locations_occurrences_batch_create' },
        { label: 'projects_locations_occurrences_create', value: 'projects_locations_occurrences_create' },
        { label: 'projects_occurrences_batch_create', value: 'projects_occurrences_batch_create' },
        { label: 'projects_occurrences_create', value: 'projects_occurrences_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
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
<TabItem value="projects_locations_occurrences_create">

Creates a new occurrence.

```sql
INSERT INTO google.containeranalysis.occurrences (
data__advisoryPublishTime,
data__aiSkillAnalysis,
data__attestation,
data__build,
data__compliance,
data__createTime,
data__deployment,
data__discovery,
data__dsseAttestation,
data__envelope,
data__image,
data__kind,
data__name,
data__noteName,
data__package,
data__remediation,
data__resourceUri,
data__sbomReference,
data__secret,
data__updateTime,
data__upgrade,
data__vulnerability,
projectsId,
locationsId
)
SELECT 
'{{ advisoryPublishTime }}',
'{{ aiSkillAnalysis }}',
'{{ attestation }}',
'{{ build }}',
'{{ compliance }}',
'{{ createTime }}',
'{{ deployment }}',
'{{ discovery }}',
'{{ dsseAttestation }}',
'{{ envelope }}',
'{{ image }}',
'{{ kind }}',
'{{ name }}',
'{{ noteName }}',
'{{ package }}',
'{{ remediation }}',
'{{ resourceUri }}',
'{{ sbomReference }}',
'{{ secret }}',
'{{ updateTime }}',
'{{ upgrade }}',
'{{ vulnerability }}',
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
data__advisoryPublishTime,
data__aiSkillAnalysis,
data__attestation,
data__build,
data__compliance,
data__createTime,
data__deployment,
data__discovery,
data__dsseAttestation,
data__envelope,
data__image,
data__kind,
data__name,
data__noteName,
data__package,
data__remediation,
data__resourceUri,
data__sbomReference,
data__secret,
data__updateTime,
data__upgrade,
data__vulnerability,
projectsId
)
SELECT 
'{{ advisoryPublishTime }}',
'{{ aiSkillAnalysis }}',
'{{ attestation }}',
'{{ build }}',
'{{ compliance }}',
'{{ createTime }}',
'{{ deployment }}',
'{{ discovery }}',
'{{ dsseAttestation }}',
'{{ envelope }}',
'{{ image }}',
'{{ kind }}',
'{{ name }}',
'{{ noteName }}',
'{{ package }}',
'{{ remediation }}',
'{{ resourceUri }}',
'{{ sbomReference }}',
'{{ secret }}',
'{{ updateTime }}',
'{{ upgrade }}',
'{{ vulnerability }}',
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
    - name: occurrences
      description: |
        Required. The occurrences to create. Max allowed length is 1000.
      value:
        - advisoryPublishTime: "{{ advisoryPublishTime }}"
          aiSkillAnalysis:
            findings:
              - category: "{{ category }}"
                details: "{{ details }}"
                location:
                  filePath: "{{ filePath }}"
                  lineNumber: "{{ lineNumber }}"
                scanner: "{{ scanner }}"
                severity: "{{ severity }}"
            maxSeverity: "{{ maxSeverity }}"
            perScannerVerdict:
              maliciousContentLlmResult:
                maxSeverity: "{{ maxSeverity }}"
                scanStatus: "{{ scanStatus }}"
              maliciousContentStaticResult:
                maxSeverity: "{{ maxSeverity }}"
                scanStatus: "{{ scanStatus }}"
              malwareScan:
                scanStatus: "{{ scanStatus }}"
                verdict: "{{ verdict }}"
              workspacePolicy:
                scanStatus: "{{ scanStatus }}"
                verdict: "{{ verdict }}"
            skillName: "{{ skillName }}"
          attestation:
            jwts:
              - compactJwt: "{{ compactJwt }}"
            serializedPayload: "{{ serializedPayload }}"
            signatures:
              - publicKeyId: "{{ publicKeyId }}"
                signature: "{{ signature }}"
          build:
            inTotoSlsaProvenanceV1:
              _type: "{{ _type }}"
              predicate:
                buildDefinition:
                  buildType: "{{ buildType }}"
                  externalParameters: "{{ externalParameters }}"
                  internalParameters: "{{ internalParameters }}"
                  resolvedDependencies: "{{ resolvedDependencies }}"
                runDetails:
                  builder: "{{ builder }}"
                  byproducts: "{{ byproducts }}"
                  metadata: "{{ metadata }}"
              predicateType: "{{ predicateType }}"
              subject:
                - digest: "{{ digest }}"
                  name: "{{ name }}"
            intotoProvenance:
              builderConfig:
                id: "{{ id }}"
              materials:
                - "{{ materials }}"
              metadata:
                buildFinishedOn: "{{ buildFinishedOn }}"
                buildInvocationId: "{{ buildInvocationId }}"
                buildStartedOn: "{{ buildStartedOn }}"
                completeness:
                  arguments: {{ arguments }}
                  environment: {{ environment }}
                  materials: {{ materials }}
                reproducible: {{ reproducible }}
              recipe:
                arguments: "{{ arguments }}"
                definedInMaterial: "{{ definedInMaterial }}"
                entryPoint: "{{ entryPoint }}"
                environment: "{{ environment }}"
                type: "{{ type }}"
            intotoStatement:
              _type: "{{ _type }}"
              predicateType: "{{ predicateType }}"
              provenance:
                builderConfig:
                  id: "{{ id }}"
                materials:
                  - "{{ materials }}"
                metadata:
                  buildFinishedOn: "{{ buildFinishedOn }}"
                  buildInvocationId: "{{ buildInvocationId }}"
                  buildStartedOn: "{{ buildStartedOn }}"
                  completeness: "{{ completeness }}"
                  reproducible: {{ reproducible }}
                recipe:
                  arguments: "{{ arguments }}"
                  definedInMaterial: "{{ definedInMaterial }}"
                  entryPoint: "{{ entryPoint }}"
                  environment: "{{ environment }}"
                  type: "{{ type }}"
              slsaProvenance:
                builder:
                  id: "{{ id }}"
                materials:
                  - digest: "{{ digest }}"
                    uri: "{{ uri }}"
                metadata:
                  buildFinishedOn: "{{ buildFinishedOn }}"
                  buildInvocationId: "{{ buildInvocationId }}"
                  buildStartedOn: "{{ buildStartedOn }}"
                  completeness: "{{ completeness }}"
                  reproducible: {{ reproducible }}
                recipe:
                  arguments: "{{ arguments }}"
                  definedInMaterial: "{{ definedInMaterial }}"
                  entryPoint: "{{ entryPoint }}"
                  environment: "{{ environment }}"
                  type: "{{ type }}"
              slsaProvenanceZeroTwo:
                buildConfig: "{{ buildConfig }}"
                buildType: "{{ buildType }}"
                builder:
                  id: "{{ id }}"
                invocation:
                  configSource: "{{ configSource }}"
                  environment: "{{ environment }}"
                  parameters: "{{ parameters }}"
                materials:
                  - digest: "{{ digest }}"
                    uri: "{{ uri }}"
                metadata:
                  buildFinishedOn: "{{ buildFinishedOn }}"
                  buildInvocationId: "{{ buildInvocationId }}"
                  buildStartedOn: "{{ buildStartedOn }}"
                  completeness: "{{ completeness }}"
                  reproducible: {{ reproducible }}
              subject:
                - digest: "{{ digest }}"
                  name: "{{ name }}"
            provenance:
              buildOptions: "{{ buildOptions }}"
              builderVersion: "{{ builderVersion }}"
              builtArtifacts:
                - checksum: "{{ checksum }}"
                  id: "{{ id }}"
                  names: "{{ names }}"
              commands:
                - args: "{{ args }}"
                  dir: "{{ dir }}"
                  env: "{{ env }}"
                  id: "{{ id }}"
                  name: "{{ name }}"
                  waitFor: "{{ waitFor }}"
              createTime: "{{ createTime }}"
              creator: "{{ creator }}"
              endTime: "{{ endTime }}"
              id: "{{ id }}"
              logsUri: "{{ logsUri }}"
              projectId: "{{ projectId }}"
              sourceProvenance:
                additionalContexts:
                  - cloudRepo:
                      aliasContext: "{{ aliasContext }}"
                      repoId: "{{ repoId }}"
                      revisionId: "{{ revisionId }}"
                    gerrit:
                      aliasContext: "{{ aliasContext }}"
                      gerritProject: "{{ gerritProject }}"
                      hostUri: "{{ hostUri }}"
                      revisionId: "{{ revisionId }}"
                    git:
                      revisionId: "{{ revisionId }}"
                      url: "{{ url }}"
                    labels: "{{ labels }}"
                artifactStorageSourceUri: "{{ artifactStorageSourceUri }}"
                context:
                  cloudRepo: "{{ cloudRepo }}"
                  gerrit: "{{ gerrit }}"
                  git: "{{ git }}"
                  labels: "{{ labels }}"
                fileHashes: "{{ fileHashes }}"
              startTime: "{{ startTime }}"
              triggerId: "{{ triggerId }}"
            provenanceBytes: "{{ provenanceBytes }}"
          compliance:
            nonComplianceReason: "{{ nonComplianceReason }}"
            nonCompliantFiles:
              - displayCommand: "{{ displayCommand }}"
                path: "{{ path }}"
                reason: "{{ reason }}"
            version:
              benchmarkDocument: "{{ benchmarkDocument }}"
              cpeUri: "{{ cpeUri }}"
              version: "{{ version }}"
          createTime: "{{ createTime }}"
          deployment:
            address: "{{ address }}"
            config: "{{ config }}"
            deployTime: "{{ deployTime }}"
            platform: "{{ platform }}"
            resourceUri:
              - "{{ resourceUri }}"
            undeployTime: "{{ undeployTime }}"
            userEmail: "{{ userEmail }}"
          discovery:
            analysisCompleted:
              analysisType:
                - "{{ analysisType }}"
            analysisError:
              - code: {{ code }}
                details: "{{ details }}"
                message: "{{ message }}"
            analysisStatus: "{{ analysisStatus }}"
            analysisStatusError:
              code: {{ code }}
              details: "{{ details }}"
              message: "{{ message }}"
            archiveTime: "{{ archiveTime }}"
            continuousAnalysis: "{{ continuousAnalysis }}"
            cpe: "{{ cpe }}"
            files:
              - digest: "{{ digest }}"
                name: "{{ name }}"
            lastScanTime: "{{ lastScanTime }}"
            lastVulnerabilityUpdateTime: "{{ lastVulnerabilityUpdateTime }}"
            sbomStatus:
              error: "{{ error }}"
              sbomState: "{{ sbomState }}"
          dsseAttestation:
            envelope:
              payload: "{{ payload }}"
              payloadType: "{{ payloadType }}"
              signatures:
                - keyid: "{{ keyid }}"
                  sig: "{{ sig }}"
            statement:
              _type: "{{ _type }}"
              predicateType: "{{ predicateType }}"
              provenance:
                builderConfig:
                  id: "{{ id }}"
                materials:
                  - "{{ materials }}"
                metadata:
                  buildFinishedOn: "{{ buildFinishedOn }}"
                  buildInvocationId: "{{ buildInvocationId }}"
                  buildStartedOn: "{{ buildStartedOn }}"
                  completeness: "{{ completeness }}"
                  reproducible: {{ reproducible }}
                recipe:
                  arguments: "{{ arguments }}"
                  definedInMaterial: "{{ definedInMaterial }}"
                  entryPoint: "{{ entryPoint }}"
                  environment: "{{ environment }}"
                  type: "{{ type }}"
              slsaProvenance:
                builder:
                  id: "{{ id }}"
                materials:
                  - digest: "{{ digest }}"
                    uri: "{{ uri }}"
                metadata:
                  buildFinishedOn: "{{ buildFinishedOn }}"
                  buildInvocationId: "{{ buildInvocationId }}"
                  buildStartedOn: "{{ buildStartedOn }}"
                  completeness: "{{ completeness }}"
                  reproducible: {{ reproducible }}
                recipe:
                  arguments: "{{ arguments }}"
                  definedInMaterial: "{{ definedInMaterial }}"
                  entryPoint: "{{ entryPoint }}"
                  environment: "{{ environment }}"
                  type: "{{ type }}"
              slsaProvenanceZeroTwo:
                buildConfig: "{{ buildConfig }}"
                buildType: "{{ buildType }}"
                builder:
                  id: "{{ id }}"
                invocation:
                  configSource: "{{ configSource }}"
                  environment: "{{ environment }}"
                  parameters: "{{ parameters }}"
                materials:
                  - digest: "{{ digest }}"
                    uri: "{{ uri }}"
                metadata:
                  buildFinishedOn: "{{ buildFinishedOn }}"
                  buildInvocationId: "{{ buildInvocationId }}"
                  buildStartedOn: "{{ buildStartedOn }}"
                  completeness: "{{ completeness }}"
                  reproducible: {{ reproducible }}
              subject:
                - digest: "{{ digest }}"
                  name: "{{ name }}"
          envelope:
            payload: "{{ payload }}"
            payloadType: "{{ payloadType }}"
            signatures:
              - keyid: "{{ keyid }}"
                sig: "{{ sig }}"
          image:
            baseResourceUrl: "{{ baseResourceUrl }}"
            distance: {{ distance }}
            fingerprint:
              v1Name: "{{ v1Name }}"
              v2Blob:
                - "{{ v2Blob }}"
              v2Name: "{{ v2Name }}"
            layerInfo:
              - arguments: "{{ arguments }}"
                directive: "{{ directive }}"
          kind: "{{ kind }}"
          name: "{{ name }}"
          noteName: "{{ noteName }}"
          package:
            architecture: "{{ architecture }}"
            cpeUri: "{{ cpeUri }}"
            license:
              comments: "{{ comments }}"
              expression: "{{ expression }}"
            location:
              - cpeUri: "{{ cpeUri }}"
                path: "{{ path }}"
                version:
                  epoch: {{ epoch }}
                  fullName: "{{ fullName }}"
                  inclusive: {{ inclusive }}
                  kind: "{{ kind }}"
                  name: "{{ name }}"
                  revision: "{{ revision }}"
            name: "{{ name }}"
            packageType: "{{ packageType }}"
            version:
              epoch: {{ epoch }}
              fullName: "{{ fullName }}"
              inclusive: {{ inclusive }}
              kind: "{{ kind }}"
              name: "{{ name }}"
              revision: "{{ revision }}"
          remediation: "{{ remediation }}"
          resourceUri: "{{ resourceUri }}"
          sbomReference:
            payload:
              _type: "{{ _type }}"
              predicate:
                digest: "{{ digest }}"
                location: "{{ location }}"
                mimeType: "{{ mimeType }}"
                referrerId: "{{ referrerId }}"
              predicateType: "{{ predicateType }}"
              subject:
                - digest: "{{ digest }}"
                  name: "{{ name }}"
            payloadType: "{{ payloadType }}"
            signatures:
              - keyid: "{{ keyid }}"
                sig: "{{ sig }}"
          secret:
            kind: "{{ kind }}"
            locations:
              - fileLocation:
                  filePath: "{{ filePath }}"
                  layerDetails:
                    baseImages: "{{ baseImages }}"
                    chainId: "{{ chainId }}"
                    command: "{{ command }}"
                    diffId: "{{ diffId }}"
                    index: {{ index }}
                  lineNumber: {{ lineNumber }}
            statuses:
              - message: "{{ message }}"
                status: "{{ status }}"
                updateTime: "{{ updateTime }}"
          updateTime: "{{ updateTime }}"
          upgrade:
            distribution:
              classification: "{{ classification }}"
              cpeUri: "{{ cpeUri }}"
              cve:
                - "{{ cve }}"
              severity: "{{ severity }}"
            package: "{{ package }}"
            parsedVersion:
              epoch: {{ epoch }}
              fullName: "{{ fullName }}"
              inclusive: {{ inclusive }}
              kind: "{{ kind }}"
              name: "{{ name }}"
              revision: "{{ revision }}"
            windowsUpdate:
              categories:
                - categoryId: "{{ categoryId }}"
                  name: "{{ name }}"
              description: "{{ description }}"
              identity:
                revision: {{ revision }}
                updateId: "{{ updateId }}"
              kbArticleIds:
                - "{{ kbArticleIds }}"
              lastPublishedTimestamp: "{{ lastPublishedTimestamp }}"
              supportUrl: "{{ supportUrl }}"
              title: "{{ title }}"
          vulnerability:
            cvssScore: {{ cvssScore }}
            cvssV2:
              attackComplexity: "{{ attackComplexity }}"
              attackRequirements: "{{ attackRequirements }}"
              attackVector: "{{ attackVector }}"
              authentication: "{{ authentication }}"
              availabilityImpact: "{{ availabilityImpact }}"
              baseScore: {{ baseScore }}
              confidentialityImpact: "{{ confidentialityImpact }}"
              exploitMaturity: "{{ exploitMaturity }}"
              exploitabilityScore: {{ exploitabilityScore }}
              impactScore: {{ impactScore }}
              integrityImpact: "{{ integrityImpact }}"
              privilegesRequired: "{{ privilegesRequired }}"
              scope: "{{ scope }}"
              subsequentSystemAvailabilityImpact: "{{ subsequentSystemAvailabilityImpact }}"
              subsequentSystemConfidentialityImpact: "{{ subsequentSystemConfidentialityImpact }}"
              subsequentSystemIntegrityImpact: "{{ subsequentSystemIntegrityImpact }}"
              userInteraction: "{{ userInteraction }}"
              vulnerableSystemAvailabilityImpact: "{{ vulnerableSystemAvailabilityImpact }}"
              vulnerableSystemConfidentialityImpact: "{{ vulnerableSystemConfidentialityImpact }}"
              vulnerableSystemIntegrityImpact: "{{ vulnerableSystemIntegrityImpact }}"
            cvssV4:
              attackComplexity: "{{ attackComplexity }}"
              attackRequirements: "{{ attackRequirements }}"
              attackVector: "{{ attackVector }}"
              authentication: "{{ authentication }}"
              availabilityImpact: "{{ availabilityImpact }}"
              baseScore: {{ baseScore }}
              confidentialityImpact: "{{ confidentialityImpact }}"
              exploitMaturity: "{{ exploitMaturity }}"
              exploitabilityScore: {{ exploitabilityScore }}
              impactScore: {{ impactScore }}
              integrityImpact: "{{ integrityImpact }}"
              privilegesRequired: "{{ privilegesRequired }}"
              scope: "{{ scope }}"
              subsequentSystemAvailabilityImpact: "{{ subsequentSystemAvailabilityImpact }}"
              subsequentSystemConfidentialityImpact: "{{ subsequentSystemConfidentialityImpact }}"
              subsequentSystemIntegrityImpact: "{{ subsequentSystemIntegrityImpact }}"
              userInteraction: "{{ userInteraction }}"
              vulnerableSystemAvailabilityImpact: "{{ vulnerableSystemAvailabilityImpact }}"
              vulnerableSystemConfidentialityImpact: "{{ vulnerableSystemConfidentialityImpact }}"
              vulnerableSystemIntegrityImpact: "{{ vulnerableSystemIntegrityImpact }}"
            cvssVersion: "{{ cvssVersion }}"
            cvssv3:
              attackComplexity: "{{ attackComplexity }}"
              attackRequirements: "{{ attackRequirements }}"
              attackVector: "{{ attackVector }}"
              authentication: "{{ authentication }}"
              availabilityImpact: "{{ availabilityImpact }}"
              baseScore: {{ baseScore }}
              confidentialityImpact: "{{ confidentialityImpact }}"
              exploitMaturity: "{{ exploitMaturity }}"
              exploitabilityScore: {{ exploitabilityScore }}
              impactScore: {{ impactScore }}
              integrityImpact: "{{ integrityImpact }}"
              privilegesRequired: "{{ privilegesRequired }}"
              scope: "{{ scope }}"
              subsequentSystemAvailabilityImpact: "{{ subsequentSystemAvailabilityImpact }}"
              subsequentSystemConfidentialityImpact: "{{ subsequentSystemConfidentialityImpact }}"
              subsequentSystemIntegrityImpact: "{{ subsequentSystemIntegrityImpact }}"
              userInteraction: "{{ userInteraction }}"
              vulnerableSystemAvailabilityImpact: "{{ vulnerableSystemAvailabilityImpact }}"
              vulnerableSystemConfidentialityImpact: "{{ vulnerableSystemConfidentialityImpact }}"
              vulnerableSystemIntegrityImpact: "{{ vulnerableSystemIntegrityImpact }}"
            effectiveSeverity: "{{ effectiveSeverity }}"
            extraDetails: "{{ extraDetails }}"
            fixAvailable: {{ fixAvailable }}
            longDescription: "{{ longDescription }}"
            packageIssue:
              - affectedCpeUri: "{{ affectedCpeUri }}"
                affectedPackage: "{{ affectedPackage }}"
                affectedVersion:
                  epoch: {{ epoch }}
                  fullName: "{{ fullName }}"
                  inclusive: {{ inclusive }}
                  kind: "{{ kind }}"
                  name: "{{ name }}"
                  revision: "{{ revision }}"
                effectiveSeverity: "{{ effectiveSeverity }}"
                fileLocation: "{{ fileLocation }}"
                fixAvailable: {{ fixAvailable }}
                fixedCpeUri: "{{ fixedCpeUri }}"
                fixedPackage: "{{ fixedPackage }}"
                fixedVersion:
                  epoch: {{ epoch }}
                  fullName: "{{ fullName }}"
                  inclusive: {{ inclusive }}
                  kind: "{{ kind }}"
                  name: "{{ name }}"
                  revision: "{{ revision }}"
                packageType: "{{ packageType }}"
            relatedUrls:
              - label: "{{ label }}"
                url: "{{ url }}"
            risk:
              cisaKev:
                knownRansomwareCampaignUse: "{{ knownRansomwareCampaignUse }}"
              epss:
                percentile: {{ percentile }}
                score: {{ score }}
            severity: "{{ severity }}"
            shortDescription: "{{ shortDescription }}"
            type: "{{ type }}"
            vexAssessment:
              cve: "{{ cve }}"
              impacts:
                - "{{ impacts }}"
              justification:
                details: "{{ details }}"
                justificationType: "{{ justificationType }}"
              noteName: "{{ noteName }}"
              relatedUris:
                - label: "{{ label }}"
                  url: "{{ url }}"
              remediations:
                - details: "{{ details }}"
                  remediationType: "{{ remediationType }}"
                  remediationUri:
                    label: "{{ label }}"
                    url: "{{ url }}"
              state: "{{ state }}"
              vulnerabilityId: "{{ vulnerabilityId }}"
    - name: advisoryPublishTime
      value: "{{ advisoryPublishTime }}"
      description: |
        The time this advisory was published by the source.
    - name: aiSkillAnalysis
      description: |
        Describes an AI skill analysis.
      value:
        findings:
          - category: "{{ category }}"
            details: "{{ details }}"
            location:
              filePath: "{{ filePath }}"
              lineNumber: "{{ lineNumber }}"
            scanner: "{{ scanner }}"
            severity: "{{ severity }}"
        maxSeverity: "{{ maxSeverity }}"
        perScannerVerdict:
          maliciousContentLlmResult:
            maxSeverity: "{{ maxSeverity }}"
            scanStatus: "{{ scanStatus }}"
          maliciousContentStaticResult:
            maxSeverity: "{{ maxSeverity }}"
            scanStatus: "{{ scanStatus }}"
          malwareScan:
            scanStatus: "{{ scanStatus }}"
            verdict: "{{ verdict }}"
          workspacePolicy:
            scanStatus: "{{ scanStatus }}"
            verdict: "{{ verdict }}"
        skillName: "{{ skillName }}"
    - name: attestation
      description: |
        Describes an attestation of an artifact.
      value:
        jwts:
          - compactJwt: "{{ compactJwt }}"
        serializedPayload: "{{ serializedPayload }}"
        signatures:
          - publicKeyId: "{{ publicKeyId }}"
            signature: "{{ signature }}"
    - name: build
      description: |
        Describes a verifiable build.
      value:
        inTotoSlsaProvenanceV1:
          _type: "{{ _type }}"
          predicate:
            buildDefinition:
              buildType: "{{ buildType }}"
              externalParameters: "{{ externalParameters }}"
              internalParameters: "{{ internalParameters }}"
              resolvedDependencies:
                - annotations: "{{ annotations }}"
                  content: "{{ content }}"
                  digest: "{{ digest }}"
                  downloadLocation: "{{ downloadLocation }}"
                  mediaType: "{{ mediaType }}"
                  name: "{{ name }}"
                  uri: "{{ uri }}"
            runDetails:
              builder:
                builderDependencies: "{{ builderDependencies }}"
                id: "{{ id }}"
                version: "{{ version }}"
              byproducts:
                - annotations: "{{ annotations }}"
                  content: "{{ content }}"
                  digest: "{{ digest }}"
                  downloadLocation: "{{ downloadLocation }}"
                  mediaType: "{{ mediaType }}"
                  name: "{{ name }}"
                  uri: "{{ uri }}"
              metadata:
                finishedOn: "{{ finishedOn }}"
                invocationId: "{{ invocationId }}"
                startedOn: "{{ startedOn }}"
          predicateType: "{{ predicateType }}"
          subject:
            - digest: "{{ digest }}"
              name: "{{ name }}"
        intotoProvenance:
          builderConfig:
            id: "{{ id }}"
          materials:
            - "{{ materials }}"
          metadata:
            buildFinishedOn: "{{ buildFinishedOn }}"
            buildInvocationId: "{{ buildInvocationId }}"
            buildStartedOn: "{{ buildStartedOn }}"
            completeness:
              arguments: {{ arguments }}
              environment: {{ environment }}
              materials: {{ materials }}
            reproducible: {{ reproducible }}
          recipe:
            arguments: "{{ arguments }}"
            definedInMaterial: "{{ definedInMaterial }}"
            entryPoint: "{{ entryPoint }}"
            environment: "{{ environment }}"
            type: "{{ type }}"
        intotoStatement:
          _type: "{{ _type }}"
          predicateType: "{{ predicateType }}"
          provenance:
            builderConfig:
              id: "{{ id }}"
            materials:
              - "{{ materials }}"
            metadata:
              buildFinishedOn: "{{ buildFinishedOn }}"
              buildInvocationId: "{{ buildInvocationId }}"
              buildStartedOn: "{{ buildStartedOn }}"
              completeness:
                arguments: {{ arguments }}
                environment: {{ environment }}
                materials: {{ materials }}
              reproducible: {{ reproducible }}
            recipe:
              arguments: "{{ arguments }}"
              definedInMaterial: "{{ definedInMaterial }}"
              entryPoint: "{{ entryPoint }}"
              environment: "{{ environment }}"
              type: "{{ type }}"
          slsaProvenance:
            builder:
              id: "{{ id }}"
            materials:
              - digest: "{{ digest }}"
                uri: "{{ uri }}"
            metadata:
              buildFinishedOn: "{{ buildFinishedOn }}"
              buildInvocationId: "{{ buildInvocationId }}"
              buildStartedOn: "{{ buildStartedOn }}"
              completeness:
                arguments: {{ arguments }}
                environment: {{ environment }}
                materials: {{ materials }}
              reproducible: {{ reproducible }}
            recipe:
              arguments: "{{ arguments }}"
              definedInMaterial: "{{ definedInMaterial }}"
              entryPoint: "{{ entryPoint }}"
              environment: "{{ environment }}"
              type: "{{ type }}"
          slsaProvenanceZeroTwo:
            buildConfig: "{{ buildConfig }}"
            buildType: "{{ buildType }}"
            builder:
              id: "{{ id }}"
            invocation:
              configSource:
                digest: "{{ digest }}"
                entryPoint: "{{ entryPoint }}"
                uri: "{{ uri }}"
              environment: "{{ environment }}"
              parameters: "{{ parameters }}"
            materials:
              - digest: "{{ digest }}"
                uri: "{{ uri }}"
            metadata:
              buildFinishedOn: "{{ buildFinishedOn }}"
              buildInvocationId: "{{ buildInvocationId }}"
              buildStartedOn: "{{ buildStartedOn }}"
              completeness:
                environment: {{ environment }}
                materials: {{ materials }}
                parameters: {{ parameters }}
              reproducible: {{ reproducible }}
          subject:
            - digest: "{{ digest }}"
              name: "{{ name }}"
        provenance:
          buildOptions: "{{ buildOptions }}"
          builderVersion: "{{ builderVersion }}"
          builtArtifacts:
            - checksum: "{{ checksum }}"
              id: "{{ id }}"
              names: "{{ names }}"
          commands:
            - args: "{{ args }}"
              dir: "{{ dir }}"
              env: "{{ env }}"
              id: "{{ id }}"
              name: "{{ name }}"
              waitFor: "{{ waitFor }}"
          createTime: "{{ createTime }}"
          creator: "{{ creator }}"
          endTime: "{{ endTime }}"
          id: "{{ id }}"
          logsUri: "{{ logsUri }}"
          projectId: "{{ projectId }}"
          sourceProvenance:
            additionalContexts:
              - cloudRepo:
                  aliasContext: "{{ aliasContext }}"
                  repoId: "{{ repoId }}"
                  revisionId: "{{ revisionId }}"
                gerrit:
                  aliasContext: "{{ aliasContext }}"
                  gerritProject: "{{ gerritProject }}"
                  hostUri: "{{ hostUri }}"
                  revisionId: "{{ revisionId }}"
                git:
                  revisionId: "{{ revisionId }}"
                  url: "{{ url }}"
                labels: "{{ labels }}"
            artifactStorageSourceUri: "{{ artifactStorageSourceUri }}"
            context:
              cloudRepo:
                aliasContext: "{{ aliasContext }}"
                repoId: "{{ repoId }}"
                revisionId: "{{ revisionId }}"
              gerrit:
                aliasContext: "{{ aliasContext }}"
                gerritProject: "{{ gerritProject }}"
                hostUri: "{{ hostUri }}"
                revisionId: "{{ revisionId }}"
              git:
                revisionId: "{{ revisionId }}"
                url: "{{ url }}"
              labels: "{{ labels }}"
            fileHashes: "{{ fileHashes }}"
          startTime: "{{ startTime }}"
          triggerId: "{{ triggerId }}"
        provenanceBytes: "{{ provenanceBytes }}"
    - name: compliance
      description: |
        Describes a compliance violation on a linked resource.
      value:
        nonComplianceReason: "{{ nonComplianceReason }}"
        nonCompliantFiles:
          - displayCommand: "{{ displayCommand }}"
            path: "{{ path }}"
            reason: "{{ reason }}"
        version:
          benchmarkDocument: "{{ benchmarkDocument }}"
          cpeUri: "{{ cpeUri }}"
          version: "{{ version }}"
    - name: createTime
      value: "{{ createTime }}"
      description: |
        Output only. The time this occurrence was created.
    - name: deployment
      description: |
        Describes the deployment of an artifact on a runtime.
      value:
        address: "{{ address }}"
        config: "{{ config }}"
        deployTime: "{{ deployTime }}"
        platform: "{{ platform }}"
        resourceUri:
          - "{{ resourceUri }}"
        undeployTime: "{{ undeployTime }}"
        userEmail: "{{ userEmail }}"
    - name: discovery
      description: |
        Describes when a resource was discovered.
      value:
        analysisCompleted:
          analysisType:
            - "{{ analysisType }}"
        analysisError:
          - code: {{ code }}
            details: "{{ details }}"
            message: "{{ message }}"
        analysisStatus: "{{ analysisStatus }}"
        analysisStatusError:
          code: {{ code }}
          details: "{{ details }}"
          message: "{{ message }}"
        archiveTime: "{{ archiveTime }}"
        continuousAnalysis: "{{ continuousAnalysis }}"
        cpe: "{{ cpe }}"
        files:
          - digest: "{{ digest }}"
            name: "{{ name }}"
        lastScanTime: "{{ lastScanTime }}"
        lastVulnerabilityUpdateTime: "{{ lastVulnerabilityUpdateTime }}"
        sbomStatus:
          error: "{{ error }}"
          sbomState: "{{ sbomState }}"
    - name: dsseAttestation
      description: |
        Describes an attestation of an artifact using dsse.
      value:
        envelope:
          payload: "{{ payload }}"
          payloadType: "{{ payloadType }}"
          signatures:
            - keyid: "{{ keyid }}"
              sig: "{{ sig }}"
        statement:
          _type: "{{ _type }}"
          predicateType: "{{ predicateType }}"
          provenance:
            builderConfig:
              id: "{{ id }}"
            materials:
              - "{{ materials }}"
            metadata:
              buildFinishedOn: "{{ buildFinishedOn }}"
              buildInvocationId: "{{ buildInvocationId }}"
              buildStartedOn: "{{ buildStartedOn }}"
              completeness:
                arguments: {{ arguments }}
                environment: {{ environment }}
                materials: {{ materials }}
              reproducible: {{ reproducible }}
            recipe:
              arguments: "{{ arguments }}"
              definedInMaterial: "{{ definedInMaterial }}"
              entryPoint: "{{ entryPoint }}"
              environment: "{{ environment }}"
              type: "{{ type }}"
          slsaProvenance:
            builder:
              id: "{{ id }}"
            materials:
              - digest: "{{ digest }}"
                uri: "{{ uri }}"
            metadata:
              buildFinishedOn: "{{ buildFinishedOn }}"
              buildInvocationId: "{{ buildInvocationId }}"
              buildStartedOn: "{{ buildStartedOn }}"
              completeness:
                arguments: {{ arguments }}
                environment: {{ environment }}
                materials: {{ materials }}
              reproducible: {{ reproducible }}
            recipe:
              arguments: "{{ arguments }}"
              definedInMaterial: "{{ definedInMaterial }}"
              entryPoint: "{{ entryPoint }}"
              environment: "{{ environment }}"
              type: "{{ type }}"
          slsaProvenanceZeroTwo:
            buildConfig: "{{ buildConfig }}"
            buildType: "{{ buildType }}"
            builder:
              id: "{{ id }}"
            invocation:
              configSource:
                digest: "{{ digest }}"
                entryPoint: "{{ entryPoint }}"
                uri: "{{ uri }}"
              environment: "{{ environment }}"
              parameters: "{{ parameters }}"
            materials:
              - digest: "{{ digest }}"
                uri: "{{ uri }}"
            metadata:
              buildFinishedOn: "{{ buildFinishedOn }}"
              buildInvocationId: "{{ buildInvocationId }}"
              buildStartedOn: "{{ buildStartedOn }}"
              completeness:
                environment: {{ environment }}
                materials: {{ materials }}
                parameters: {{ parameters }}
              reproducible: {{ reproducible }}
          subject:
            - digest: "{{ digest }}"
              name: "{{ name }}"
    - name: envelope
      description: |
        https://github.com/secure-systems-lab/dsse
      value:
        payload: "{{ payload }}"
        payloadType: "{{ payloadType }}"
        signatures:
          - keyid: "{{ keyid }}"
            sig: "{{ sig }}"
    - name: image
      description: |
        Describes how this resource derives from the basis in the associated note.
      value:
        baseResourceUrl: "{{ baseResourceUrl }}"
        distance: {{ distance }}
        fingerprint:
          v1Name: "{{ v1Name }}"
          v2Blob:
            - "{{ v2Blob }}"
          v2Name: "{{ v2Name }}"
        layerInfo:
          - arguments: "{{ arguments }}"
            directive: "{{ directive }}"
    - name: kind
      value: "{{ kind }}"
      description: |
        Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests.
      valid_values: ['NOTE_KIND_UNSPECIFIED', 'VULNERABILITY', 'BUILD', 'IMAGE', 'PACKAGE', 'DEPLOYMENT', 'DISCOVERY', 'ATTESTATION', 'UPGRADE', 'COMPLIANCE', 'DSSE_ATTESTATION', 'VULNERABILITY_ASSESSMENT', 'SBOM_REFERENCE', 'SECRET', 'AI_SKILL_ANALYSIS']
    - name: name
      value: "{{ name }}"
      description: |
        Output only. The name of the occurrence in the form of \`projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]\`.
    - name: noteName
      value: "{{ noteName }}"
      description: |
        Required. Immutable. The analysis note associated with this occurrence, in the form of \`projects/[PROVIDER_ID]/notes/[NOTE_ID]\`. This field can be used as a filter in list requests.
    - name: package
      description: |
        Describes the installation of a package on the linked resource.
      value:
        architecture: "{{ architecture }}"
        cpeUri: "{{ cpeUri }}"
        license:
          comments: "{{ comments }}"
          expression: "{{ expression }}"
        location:
          - cpeUri: "{{ cpeUri }}"
            path: "{{ path }}"
            version:
              epoch: {{ epoch }}
              fullName: "{{ fullName }}"
              inclusive: {{ inclusive }}
              kind: "{{ kind }}"
              name: "{{ name }}"
              revision: "{{ revision }}"
        name: "{{ name }}"
        packageType: "{{ packageType }}"
        version:
          epoch: {{ epoch }}
          fullName: "{{ fullName }}"
          inclusive: {{ inclusive }}
          kind: "{{ kind }}"
          name: "{{ name }}"
          revision: "{{ revision }}"
    - name: remediation
      value: "{{ remediation }}"
      description: |
        A description of actions that can be taken to remedy the note.
    - name: resourceUri
      value: "{{ resourceUri }}"
      description: |
        Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, \`https://gcr.io/project/image@sha256:123abc\` for a Docker image.
    - name: sbomReference
      description: |
        Describes a specific SBOM reference occurrences.
      value:
        payload:
          _type: "{{ _type }}"
          predicate:
            digest: "{{ digest }}"
            location: "{{ location }}"
            mimeType: "{{ mimeType }}"
            referrerId: "{{ referrerId }}"
          predicateType: "{{ predicateType }}"
          subject:
            - digest: "{{ digest }}"
              name: "{{ name }}"
        payloadType: "{{ payloadType }}"
        signatures:
          - keyid: "{{ keyid }}"
            sig: "{{ sig }}"
    - name: secret
      description: |
        Describes a secret.
      value:
        kind: "{{ kind }}"
        locations:
          - fileLocation:
              filePath: "{{ filePath }}"
              layerDetails:
                baseImages:
                  - layerCount: {{ layerCount }}
                    name: "{{ name }}"
                    registry: "{{ registry }}"
                    repository: "{{ repository }}"
                chainId: "{{ chainId }}"
                command: "{{ command }}"
                diffId: "{{ diffId }}"
                index: {{ index }}
              lineNumber: {{ lineNumber }}
        statuses:
          - message: "{{ message }}"
            status: "{{ status }}"
            updateTime: "{{ updateTime }}"
    - name: updateTime
      value: "{{ updateTime }}"
      description: |
        Output only. The time this occurrence was last updated.
    - name: upgrade
      description: |
        Describes an available package upgrade on the linked resource.
      value:
        distribution:
          classification: "{{ classification }}"
          cpeUri: "{{ cpeUri }}"
          cve:
            - "{{ cve }}"
          severity: "{{ severity }}"
        package: "{{ package }}"
        parsedVersion:
          epoch: {{ epoch }}
          fullName: "{{ fullName }}"
          inclusive: {{ inclusive }}
          kind: "{{ kind }}"
          name: "{{ name }}"
          revision: "{{ revision }}"
        windowsUpdate:
          categories:
            - categoryId: "{{ categoryId }}"
              name: "{{ name }}"
          description: "{{ description }}"
          identity:
            revision: {{ revision }}
            updateId: "{{ updateId }}"
          kbArticleIds:
            - "{{ kbArticleIds }}"
          lastPublishedTimestamp: "{{ lastPublishedTimestamp }}"
          supportUrl: "{{ supportUrl }}"
          title: "{{ title }}"
    - name: vulnerability
      description: |
        Describes a security vulnerability.
      value:
        cvssScore: {{ cvssScore }}
        cvssV2:
          attackComplexity: "{{ attackComplexity }}"
          attackRequirements: "{{ attackRequirements }}"
          attackVector: "{{ attackVector }}"
          authentication: "{{ authentication }}"
          availabilityImpact: "{{ availabilityImpact }}"
          baseScore: {{ baseScore }}
          confidentialityImpact: "{{ confidentialityImpact }}"
          exploitMaturity: "{{ exploitMaturity }}"
          exploitabilityScore: {{ exploitabilityScore }}
          impactScore: {{ impactScore }}
          integrityImpact: "{{ integrityImpact }}"
          privilegesRequired: "{{ privilegesRequired }}"
          scope: "{{ scope }}"
          subsequentSystemAvailabilityImpact: "{{ subsequentSystemAvailabilityImpact }}"
          subsequentSystemConfidentialityImpact: "{{ subsequentSystemConfidentialityImpact }}"
          subsequentSystemIntegrityImpact: "{{ subsequentSystemIntegrityImpact }}"
          userInteraction: "{{ userInteraction }}"
          vulnerableSystemAvailabilityImpact: "{{ vulnerableSystemAvailabilityImpact }}"
          vulnerableSystemConfidentialityImpact: "{{ vulnerableSystemConfidentialityImpact }}"
          vulnerableSystemIntegrityImpact: "{{ vulnerableSystemIntegrityImpact }}"
        cvssV4:
          attackComplexity: "{{ attackComplexity }}"
          attackRequirements: "{{ attackRequirements }}"
          attackVector: "{{ attackVector }}"
          authentication: "{{ authentication }}"
          availabilityImpact: "{{ availabilityImpact }}"
          baseScore: {{ baseScore }}
          confidentialityImpact: "{{ confidentialityImpact }}"
          exploitMaturity: "{{ exploitMaturity }}"
          exploitabilityScore: {{ exploitabilityScore }}
          impactScore: {{ impactScore }}
          integrityImpact: "{{ integrityImpact }}"
          privilegesRequired: "{{ privilegesRequired }}"
          scope: "{{ scope }}"
          subsequentSystemAvailabilityImpact: "{{ subsequentSystemAvailabilityImpact }}"
          subsequentSystemConfidentialityImpact: "{{ subsequentSystemConfidentialityImpact }}"
          subsequentSystemIntegrityImpact: "{{ subsequentSystemIntegrityImpact }}"
          userInteraction: "{{ userInteraction }}"
          vulnerableSystemAvailabilityImpact: "{{ vulnerableSystemAvailabilityImpact }}"
          vulnerableSystemConfidentialityImpact: "{{ vulnerableSystemConfidentialityImpact }}"
          vulnerableSystemIntegrityImpact: "{{ vulnerableSystemIntegrityImpact }}"
        cvssVersion: "{{ cvssVersion }}"
        cvssv3:
          attackComplexity: "{{ attackComplexity }}"
          attackRequirements: "{{ attackRequirements }}"
          attackVector: "{{ attackVector }}"
          authentication: "{{ authentication }}"
          availabilityImpact: "{{ availabilityImpact }}"
          baseScore: {{ baseScore }}
          confidentialityImpact: "{{ confidentialityImpact }}"
          exploitMaturity: "{{ exploitMaturity }}"
          exploitabilityScore: {{ exploitabilityScore }}
          impactScore: {{ impactScore }}
          integrityImpact: "{{ integrityImpact }}"
          privilegesRequired: "{{ privilegesRequired }}"
          scope: "{{ scope }}"
          subsequentSystemAvailabilityImpact: "{{ subsequentSystemAvailabilityImpact }}"
          subsequentSystemConfidentialityImpact: "{{ subsequentSystemConfidentialityImpact }}"
          subsequentSystemIntegrityImpact: "{{ subsequentSystemIntegrityImpact }}"
          userInteraction: "{{ userInteraction }}"
          vulnerableSystemAvailabilityImpact: "{{ vulnerableSystemAvailabilityImpact }}"
          vulnerableSystemConfidentialityImpact: "{{ vulnerableSystemConfidentialityImpact }}"
          vulnerableSystemIntegrityImpact: "{{ vulnerableSystemIntegrityImpact }}"
        effectiveSeverity: "{{ effectiveSeverity }}"
        extraDetails: "{{ extraDetails }}"
        fixAvailable: {{ fixAvailable }}
        longDescription: "{{ longDescription }}"
        packageIssue:
          - affectedCpeUri: "{{ affectedCpeUri }}"
            affectedPackage: "{{ affectedPackage }}"
            affectedVersion:
              epoch: {{ epoch }}
              fullName: "{{ fullName }}"
              inclusive: {{ inclusive }}
              kind: "{{ kind }}"
              name: "{{ name }}"
              revision: "{{ revision }}"
            effectiveSeverity: "{{ effectiveSeverity }}"
            fileLocation: "{{ fileLocation }}"
            fixAvailable: {{ fixAvailable }}
            fixedCpeUri: "{{ fixedCpeUri }}"
            fixedPackage: "{{ fixedPackage }}"
            fixedVersion:
              epoch: {{ epoch }}
              fullName: "{{ fullName }}"
              inclusive: {{ inclusive }}
              kind: "{{ kind }}"
              name: "{{ name }}"
              revision: "{{ revision }}"
            packageType: "{{ packageType }}"
        relatedUrls:
          - label: "{{ label }}"
            url: "{{ url }}"
        risk:
          cisaKev:
            knownRansomwareCampaignUse: "{{ knownRansomwareCampaignUse }}"
          epss:
            percentile: {{ percentile }}
            score: {{ score }}
        severity: "{{ severity }}"
        shortDescription: "{{ shortDescription }}"
        type: "{{ type }}"
        vexAssessment:
          cve: "{{ cve }}"
          impacts:
            - "{{ impacts }}"
          justification:
            details: "{{ details }}"
            justificationType: "{{ justificationType }}"
          noteName: "{{ noteName }}"
          relatedUris:
            - label: "{{ label }}"
              url: "{{ url }}"
          remediations:
            - details: "{{ details }}"
              remediationType: "{{ remediationType }}"
              remediationUri:
                label: "{{ label }}"
                url: "{{ url }}"
          state: "{{ state }}"
          vulnerabilityId: "{{ vulnerabilityId }}"
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
data__advisoryPublishTime = '{{ advisoryPublishTime }}',
data__aiSkillAnalysis = '{{ aiSkillAnalysis }}',
data__attestation = '{{ attestation }}',
data__build = '{{ build }}',
data__compliance = '{{ compliance }}',
data__createTime = '{{ createTime }}',
data__deployment = '{{ deployment }}',
data__discovery = '{{ discovery }}',
data__dsseAttestation = '{{ dsseAttestation }}',
data__envelope = '{{ envelope }}',
data__image = '{{ image }}',
data__kind = '{{ kind }}',
data__name = '{{ name }}',
data__noteName = '{{ noteName }}',
data__package = '{{ package }}',
data__remediation = '{{ remediation }}',
data__resourceUri = '{{ resourceUri }}',
data__sbomReference = '{{ sbomReference }}',
data__secret = '{{ secret }}',
data__updateTime = '{{ updateTime }}',
data__upgrade = '{{ upgrade }}',
data__vulnerability = '{{ vulnerability }}'
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
data__advisoryPublishTime = '{{ advisoryPublishTime }}',
data__aiSkillAnalysis = '{{ aiSkillAnalysis }}',
data__attestation = '{{ attestation }}',
data__build = '{{ build }}',
data__compliance = '{{ compliance }}',
data__createTime = '{{ createTime }}',
data__deployment = '{{ deployment }}',
data__discovery = '{{ discovery }}',
data__dsseAttestation = '{{ dsseAttestation }}',
data__envelope = '{{ envelope }}',
data__image = '{{ image }}',
data__kind = '{{ kind }}',
data__name = '{{ name }}',
data__noteName = '{{ noteName }}',
data__package = '{{ package }}',
data__remediation = '{{ remediation }}',
data__resourceUri = '{{ resourceUri }}',
data__sbomReference = '{{ sbomReference }}',
data__secret = '{{ secret }}',
data__updateTime = '{{ updateTime }}',
data__upgrade = '{{ upgrade }}',
data__vulnerability = '{{ vulnerability }}'
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
