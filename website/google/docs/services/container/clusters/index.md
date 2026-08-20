--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - container
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.container.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_clusters_get"
    values={[
        { label: 'projects_locations_clusters_get', value: 'projects_locations_clusters_get' },
        { label: 'projects_zones_clusters_get', value: 'projects_zones_clusters_get' },
        { label: 'projects_locations_clusters_list', value: 'projects_locations_clusters_list' },
        { label: 'projects_zones_clusters_list', value: 'projects_zones_clusters_list' }
    ]}
>
<TabItem value="projects_locations_clusters_get">

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
    <td>Output only. Unique id for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this cluster. The name must be unique within this project and location (e.g. zone or region), and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter.</td>
</tr>
<tr>
    <td><CopyableCode code="addonsConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the various addons available to run in the cluster. (id: AddonsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="alphaClusterFeatureGates" /></td>
    <td><code>array</code></td>
    <td>The list of user specified Kubernetes feature gates. Each string represents the activation status of a feature gate (e.g. "featureX=true" or "featureX=false")</td>
</tr>
<tr>
    <td><CopyableCode code="anonymousAuthenticationConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for limiting anonymous access to all endpoints except the health checks. (id: AnonymousAuthenticationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="authenticatorGroupsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration controlling RBAC group membership information. (id: AuthenticatorGroupsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="autopilot" /></td>
    <td><code>object</code></td>
    <td>Autopilot configuration for the cluster. (id: Autopilot)</td>
</tr>
<tr>
    <td><CopyableCode code="autoscaling" /></td>
    <td><code>object</code></td>
    <td>Cluster-level autoscaling configuration. (id: ClusterAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="binaryAuthorization" /></td>
    <td><code>object</code></td>
    <td>Configuration for Binary Authorization. (id: BinaryAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterIpv4Cidr" /></td>
    <td><code>string</code></td>
    <td>The IP address range of the container pods in this cluster, in [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`.</td>
</tr>
<tr>
    <td><CopyableCode code="compliancePostureConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Deprecated: Compliance Posture is no longer supported. For more details, see https://cloud.google.com/kubernetes-engine/docs/deprecations/posture-management-deprecation. Enable/Disable Compliance Posture features for the cluster. (id: CompliancePostureConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Which conditions caused the current cluster state.</td>
</tr>
<tr>
    <td><CopyableCode code="confidentialNodes" /></td>
    <td><code>object</code></td>
    <td>Configuration of Confidential Nodes. All the nodes in the cluster will be Confidential VM once enabled. (id: ConfidentialNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneEgress" /></td>
    <td><code>object</code></td>
    <td>Configuration for control plane egress control. (id: ControlPlaneEgress)</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneEndpointsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for all cluster's control plane endpoints. (id: ControlPlaneEndpointsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="costManagementConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the fine-grained cost management feature. (id: CostManagementConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.</td>
</tr>
<tr>
    <td><CopyableCode code="currentEmulatedVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The current emulated version of the master endpoint. The version is in minor version format, e.g. 1.30. No value or empty string means the cluster has no emulated version.</td>
</tr>
<tr>
    <td><CopyableCode code="currentMasterVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The current software version of the master endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="currentNodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information.</td>
</tr>
<tr>
    <td><CopyableCode code="currentNodeVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated, use [NodePools.version](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they're in the process of being upgraded, this reflects the minimum version of all nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseEncryption" /></td>
    <td><code>object</code></td>
    <td>Configuration of etcd encryption. (id: DatabaseEncryption)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultMaxPodsConstraint" /></td>
    <td><code>object</code></td>
    <td>The default constraint on the maximum number of pods that can be run simultaneously on a node in the node pool of this cluster. Only honored if cluster created with IP Alias support. (id: MaxPodsConstraint)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="enableK8sBetaApis" /></td>
    <td><code>object</code></td>
    <td>Beta APIs Config (id: K8sBetaAPIConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="enableKubernetesAlpha" /></td>
    <td><code>boolean</code></td>
    <td>Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1alpha1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="enableTpu" /></td>
    <td><code>boolean</code></td>
    <td>Enable the ability to use Cloud TPUs in this cluster. This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address of this cluster's master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`. See the `masterAuth` property of this resource for username and password information.</td>
</tr>
<tr>
    <td><CopyableCode code="enterpriseConfig" /></td>
    <td><code>object</code></td>
    <td>GKE Enterprise Configuration. Deprecated: GKE Enterprise features are now available without an Enterprise tier. (id: EnterpriseConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet" /></td>
    <td><code>object</code></td>
    <td>Fleet information for the cluster. (id: Fleet)</td>
</tr>
<tr>
    <td><CopyableCode code="gkeAutoUpgradeConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for GKE auto upgrades. (id: GkeAutoUpgradeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="identityServiceConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for Identity Service component. (id: IdentityServiceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="initialClusterVersion" /></td>
    <td><code>string</code></td>
    <td>The initial Kubernetes version for this cluster. Valid versions are those found in validMasterVersions returned by getServerConfig. The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "","-": picks the default Kubernetes version</td>
</tr>
<tr>
    <td><CopyableCode code="initialNodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "node_config") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. This field is deprecated, use node_pool.initial_node_count instead.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceGroupUrls" /></td>
    <td><code>array</code></td>
    <td>Output only. Deprecated. Use node_pools.instance_group_urls.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAllocationPolicy" /></td>
    <td><code>object</code></td>
    <td>Configuration for cluster IP allocation. (id: IPAllocationPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="labelFingerprint" /></td>
    <td><code>string</code></td>
    <td>The fingerprint of the set of labels for this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="legacyAbac" /></td>
    <td><code>object</code></td>
    <td>Configuration for the legacy ABAC authorization mode. (id: LegacyAbac)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This field provides a default value if [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) are not specified during node pool creation. Warning: changing cluster locations will update the [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) of all node pools and will result in nodes being added and/or removed.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingConfig" /></td>
    <td><code>object</code></td>
    <td>Logging configuration for the cluster. (id: LoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="loggingService" /></td>
    <td><code>string</code></td>
    <td>The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenancePolicy" /></td>
    <td><code>object</code></td>
    <td>Configure the maintenance policy for this cluster. (id: MaintenancePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="managedMachineLearningDiagnosticsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for Managed Machine Learning Diagnostics. (id: ManagedMachineLearningDiagnosticsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="managedOpentelemetryConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for Managed OpenTelemetry pipeline. (id: ManagedOpenTelemetryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="masterAuth" /></td>
    <td><code>object</code></td>
    <td>The authentication information for accessing the master endpoint. If unspecified, the defaults are used: For clusters before v1.12, if master_auth is unspecified, `username` will be set to "admin", a random password will be generated, and a client certificate will be issued. (id: MasterAuth)</td>
</tr>
<tr>
    <td><CopyableCode code="masterAuthorizedNetworksConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration options for master authorized networks feature. Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.authorized_networks_config instead. (id: MasterAuthorizedNetworksConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="meshCertificates" /></td>
    <td><code>object</code></td>
    <td>Configuration for issuance of mTLS keys and certificates to Kubernetes pods. (id: MeshCertificates)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringConfig" /></td>
    <td><code>object</code></td>
    <td>Monitoring configuration for the cluster. (id: MonitoringConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringService" /></td>
    <td><code>string</code></td>
    <td>The monitoring service the cluster should use to write metrics. Currently available options: * `monitoring.googleapis.com/kubernetes` - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the `default` network will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for cluster networking. (id: NetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="networkPolicy" /></td>
    <td><code>object</code></td>
    <td>Configuration options for the NetworkPolicy feature. (id: NetworkPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeConfig" /></td>
    <td><code>object</code></td>
    <td>Parameters used in creating the cluster's nodes. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "initial_node_count") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. For responses, this field will be populated with the node configuration of the first node pool. (For configuration of each node pool, see `node_pool.config`) If unspecified, the defaults are used. This field is deprecated, use node_pool.config instead. (id: NodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCreationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for Node Creation Mode. (id: NodeCreationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeIpv4CidrSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The size of the address space on each node for hosting containers. This is provisioned from within the `container_ipv4_cidr` range. This field will only be set when cluster is in route-based network mode.</td>
</tr>
<tr>
    <td><CopyableCode code="nodePoolAutoConfig" /></td>
    <td><code>object</code></td>
    <td>Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. (id: NodePoolAutoConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodePoolDefaults" /></td>
    <td><code>object</code></td>
    <td>Default NodePool settings for the entire cluster. These settings are overridden if specified on the specific NodePool object. (id: NodePoolDefaults)</td>
</tr>
<tr>
    <td><CopyableCode code="nodePools" /></td>
    <td><code>array</code></td>
    <td>The node pools associated with this cluster. This field should not be set if "node_config" or "initial_node_count" are specified.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationConfig" /></td>
    <td><code>object</code></td>
    <td>Notification configuration of the cluster. (id: NotificationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="parentProductConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of the parent product of the cluster. This field is used by Google internal products that are built on top of the GKE cluster and take the ownership of the cluster. (id: ParentProductConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="podAutoscaling" /></td>
    <td><code>object</code></td>
    <td>The config for pod autoscaling. (id: PodAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="privateClusterConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for private cluster. (id: PrivateClusterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="rbacBindingConfig" /></td>
    <td><code>object</code></td>
    <td>RBACBindingConfig allows user to restrict ClusterRoleBindings an RoleBindings that can be created. (id: RBACBindingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="releaseChannel" /></td>
    <td><code>object</code></td>
    <td>Release channel configuration. If left unspecified on cluster creation and a version is specified, the cluster is enrolled in the most mature release channel where the version is available (first checking STABLE, then REGULAR, and finally RAPID). Otherwise, if no release channel configuration and no version is specified, the cluster is enrolled in the REGULAR channel with its default version. (id: ReleaseChannel)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceLabels" /></td>
    <td><code>object</code></td>
    <td>The resource labels for the cluster to use to annotate any related Google Compute Engine resources.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceUsageExportConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for exporting resource usages. Resource usage export is disabled when this config is unspecified. (id: ResourceUsageExportConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="rollbackSafeUpgrade" /></td>
    <td><code>object</code></td>
    <td>Optional. The rollback safe upgrade information of the cluster. This field is used when user manually triggers a rollback safe upgrade. (id: RollbackSafeUpgrade)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleUpgradeConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for scheduled upgrades. (id: ScheduleUpgradeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="secretManagerConfig" /></td>
    <td><code>object</code></td>
    <td>Secret CSI driver configuration. (id: SecretManagerConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="secretSyncConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for sync Secret Manager secrets as k8s secrets. (id: SecretSyncConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="securityPostureConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Enable/Disable Security Posture API features for the cluster. (id: SecurityPostureConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="servicesIpv4Cidr" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address range of the Kubernetes services in this cluster, in [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last `/16` from the container CIDR.</td>
</tr>
<tr>
    <td><CopyableCode code="shieldedNodes" /></td>
    <td><code>object</code></td>
    <td>Shielded Nodes configuration. (id: ShieldedNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. The current status of this cluster. (STATUS_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated. Use conditions instead. Additional information about the current status of this cluster, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetwork" /></td>
    <td><code>string</code></td>
    <td>The name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/subnetworks) to which the cluster is connected.</td>
</tr>
<tr>
    <td><CopyableCode code="tpuIpv4CidrBlock" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address range of the Cloud TPUs in this cluster, in [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25.</td>
</tr>
<tr>
    <td><CopyableCode code="userManagedKeysConfig" /></td>
    <td><code>object</code></td>
    <td>The Custom keys configuration for the cluster. (id: UserManagedKeysConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="verticalPodAutoscaling" /></td>
    <td><code>object</code></td>
    <td>Cluster-level Vertical Pod Autoscaling configuration. (id: VerticalPodAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="workloadIdentityConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the use of Kubernetes Service Accounts in IAM policies. (id: WorkloadIdentityConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_zones_clusters_get">

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
    <td>Output only. Unique id for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this cluster. The name must be unique within this project and location (e.g. zone or region), and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter.</td>
</tr>
<tr>
    <td><CopyableCode code="addonsConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the various addons available to run in the cluster. (id: AddonsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="alphaClusterFeatureGates" /></td>
    <td><code>array</code></td>
    <td>The list of user specified Kubernetes feature gates. Each string represents the activation status of a feature gate (e.g. "featureX=true" or "featureX=false")</td>
</tr>
<tr>
    <td><CopyableCode code="anonymousAuthenticationConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for limiting anonymous access to all endpoints except the health checks. (id: AnonymousAuthenticationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="authenticatorGroupsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration controlling RBAC group membership information. (id: AuthenticatorGroupsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="autopilot" /></td>
    <td><code>object</code></td>
    <td>Autopilot configuration for the cluster. (id: Autopilot)</td>
</tr>
<tr>
    <td><CopyableCode code="autoscaling" /></td>
    <td><code>object</code></td>
    <td>Cluster-level autoscaling configuration. (id: ClusterAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="binaryAuthorization" /></td>
    <td><code>object</code></td>
    <td>Configuration for Binary Authorization. (id: BinaryAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterIpv4Cidr" /></td>
    <td><code>string</code></td>
    <td>The IP address range of the container pods in this cluster, in [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`.</td>
</tr>
<tr>
    <td><CopyableCode code="compliancePostureConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Deprecated: Compliance Posture is no longer supported. For more details, see https://cloud.google.com/kubernetes-engine/docs/deprecations/posture-management-deprecation. Enable/Disable Compliance Posture features for the cluster. (id: CompliancePostureConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Which conditions caused the current cluster state.</td>
</tr>
<tr>
    <td><CopyableCode code="confidentialNodes" /></td>
    <td><code>object</code></td>
    <td>Configuration of Confidential Nodes. All the nodes in the cluster will be Confidential VM once enabled. (id: ConfidentialNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneEgress" /></td>
    <td><code>object</code></td>
    <td>Configuration for control plane egress control. (id: ControlPlaneEgress)</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneEndpointsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for all cluster's control plane endpoints. (id: ControlPlaneEndpointsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="costManagementConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the fine-grained cost management feature. (id: CostManagementConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.</td>
</tr>
<tr>
    <td><CopyableCode code="currentEmulatedVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The current emulated version of the master endpoint. The version is in minor version format, e.g. 1.30. No value or empty string means the cluster has no emulated version.</td>
</tr>
<tr>
    <td><CopyableCode code="currentMasterVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The current software version of the master endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="currentNodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information.</td>
</tr>
<tr>
    <td><CopyableCode code="currentNodeVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated, use [NodePools.version](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they're in the process of being upgraded, this reflects the minimum version of all nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseEncryption" /></td>
    <td><code>object</code></td>
    <td>Configuration of etcd encryption. (id: DatabaseEncryption)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultMaxPodsConstraint" /></td>
    <td><code>object</code></td>
    <td>The default constraint on the maximum number of pods that can be run simultaneously on a node in the node pool of this cluster. Only honored if cluster created with IP Alias support. (id: MaxPodsConstraint)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="enableK8sBetaApis" /></td>
    <td><code>object</code></td>
    <td>Beta APIs Config (id: K8sBetaAPIConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="enableKubernetesAlpha" /></td>
    <td><code>boolean</code></td>
    <td>Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1alpha1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="enableTpu" /></td>
    <td><code>boolean</code></td>
    <td>Enable the ability to use Cloud TPUs in this cluster. This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address of this cluster's master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`. See the `masterAuth` property of this resource for username and password information.</td>
</tr>
<tr>
    <td><CopyableCode code="enterpriseConfig" /></td>
    <td><code>object</code></td>
    <td>GKE Enterprise Configuration. Deprecated: GKE Enterprise features are now available without an Enterprise tier. (id: EnterpriseConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet" /></td>
    <td><code>object</code></td>
    <td>Fleet information for the cluster. (id: Fleet)</td>
</tr>
<tr>
    <td><CopyableCode code="gkeAutoUpgradeConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for GKE auto upgrades. (id: GkeAutoUpgradeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="identityServiceConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for Identity Service component. (id: IdentityServiceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="initialClusterVersion" /></td>
    <td><code>string</code></td>
    <td>The initial Kubernetes version for this cluster. Valid versions are those found in validMasterVersions returned by getServerConfig. The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "","-": picks the default Kubernetes version</td>
</tr>
<tr>
    <td><CopyableCode code="initialNodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "node_config") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. This field is deprecated, use node_pool.initial_node_count instead.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceGroupUrls" /></td>
    <td><code>array</code></td>
    <td>Output only. Deprecated. Use node_pools.instance_group_urls.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAllocationPolicy" /></td>
    <td><code>object</code></td>
    <td>Configuration for cluster IP allocation. (id: IPAllocationPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="labelFingerprint" /></td>
    <td><code>string</code></td>
    <td>The fingerprint of the set of labels for this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="legacyAbac" /></td>
    <td><code>object</code></td>
    <td>Configuration for the legacy ABAC authorization mode. (id: LegacyAbac)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This field provides a default value if [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) are not specified during node pool creation. Warning: changing cluster locations will update the [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) of all node pools and will result in nodes being added and/or removed.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingConfig" /></td>
    <td><code>object</code></td>
    <td>Logging configuration for the cluster. (id: LoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="loggingService" /></td>
    <td><code>string</code></td>
    <td>The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenancePolicy" /></td>
    <td><code>object</code></td>
    <td>Configure the maintenance policy for this cluster. (id: MaintenancePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="managedMachineLearningDiagnosticsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for Managed Machine Learning Diagnostics. (id: ManagedMachineLearningDiagnosticsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="managedOpentelemetryConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for Managed OpenTelemetry pipeline. (id: ManagedOpenTelemetryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="masterAuth" /></td>
    <td><code>object</code></td>
    <td>The authentication information for accessing the master endpoint. If unspecified, the defaults are used: For clusters before v1.12, if master_auth is unspecified, `username` will be set to "admin", a random password will be generated, and a client certificate will be issued. (id: MasterAuth)</td>
</tr>
<tr>
    <td><CopyableCode code="masterAuthorizedNetworksConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration options for master authorized networks feature. Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.authorized_networks_config instead. (id: MasterAuthorizedNetworksConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="meshCertificates" /></td>
    <td><code>object</code></td>
    <td>Configuration for issuance of mTLS keys and certificates to Kubernetes pods. (id: MeshCertificates)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringConfig" /></td>
    <td><code>object</code></td>
    <td>Monitoring configuration for the cluster. (id: MonitoringConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringService" /></td>
    <td><code>string</code></td>
    <td>The monitoring service the cluster should use to write metrics. Currently available options: * `monitoring.googleapis.com/kubernetes` - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the `default` network will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for cluster networking. (id: NetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="networkPolicy" /></td>
    <td><code>object</code></td>
    <td>Configuration options for the NetworkPolicy feature. (id: NetworkPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeConfig" /></td>
    <td><code>object</code></td>
    <td>Parameters used in creating the cluster's nodes. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "initial_node_count") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. For responses, this field will be populated with the node configuration of the first node pool. (For configuration of each node pool, see `node_pool.config`) If unspecified, the defaults are used. This field is deprecated, use node_pool.config instead. (id: NodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCreationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for Node Creation Mode. (id: NodeCreationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeIpv4CidrSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The size of the address space on each node for hosting containers. This is provisioned from within the `container_ipv4_cidr` range. This field will only be set when cluster is in route-based network mode.</td>
</tr>
<tr>
    <td><CopyableCode code="nodePoolAutoConfig" /></td>
    <td><code>object</code></td>
    <td>Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. (id: NodePoolAutoConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodePoolDefaults" /></td>
    <td><code>object</code></td>
    <td>Default NodePool settings for the entire cluster. These settings are overridden if specified on the specific NodePool object. (id: NodePoolDefaults)</td>
</tr>
<tr>
    <td><CopyableCode code="nodePools" /></td>
    <td><code>array</code></td>
    <td>The node pools associated with this cluster. This field should not be set if "node_config" or "initial_node_count" are specified.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationConfig" /></td>
    <td><code>object</code></td>
    <td>Notification configuration of the cluster. (id: NotificationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="parentProductConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of the parent product of the cluster. This field is used by Google internal products that are built on top of the GKE cluster and take the ownership of the cluster. (id: ParentProductConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="podAutoscaling" /></td>
    <td><code>object</code></td>
    <td>The config for pod autoscaling. (id: PodAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="privateClusterConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for private cluster. (id: PrivateClusterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="rbacBindingConfig" /></td>
    <td><code>object</code></td>
    <td>RBACBindingConfig allows user to restrict ClusterRoleBindings an RoleBindings that can be created. (id: RBACBindingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="releaseChannel" /></td>
    <td><code>object</code></td>
    <td>Release channel configuration. If left unspecified on cluster creation and a version is specified, the cluster is enrolled in the most mature release channel where the version is available (first checking STABLE, then REGULAR, and finally RAPID). Otherwise, if no release channel configuration and no version is specified, the cluster is enrolled in the REGULAR channel with its default version. (id: ReleaseChannel)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceLabels" /></td>
    <td><code>object</code></td>
    <td>The resource labels for the cluster to use to annotate any related Google Compute Engine resources.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceUsageExportConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for exporting resource usages. Resource usage export is disabled when this config is unspecified. (id: ResourceUsageExportConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="rollbackSafeUpgrade" /></td>
    <td><code>object</code></td>
    <td>Optional. The rollback safe upgrade information of the cluster. This field is used when user manually triggers a rollback safe upgrade. (id: RollbackSafeUpgrade)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleUpgradeConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for scheduled upgrades. (id: ScheduleUpgradeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="secretManagerConfig" /></td>
    <td><code>object</code></td>
    <td>Secret CSI driver configuration. (id: SecretManagerConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="secretSyncConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for sync Secret Manager secrets as k8s secrets. (id: SecretSyncConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="securityPostureConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Enable/Disable Security Posture API features for the cluster. (id: SecurityPostureConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="servicesIpv4Cidr" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address range of the Kubernetes services in this cluster, in [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last `/16` from the container CIDR.</td>
</tr>
<tr>
    <td><CopyableCode code="shieldedNodes" /></td>
    <td><code>object</code></td>
    <td>Shielded Nodes configuration. (id: ShieldedNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. The current status of this cluster. (STATUS_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated. Use conditions instead. Additional information about the current status of this cluster, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetwork" /></td>
    <td><code>string</code></td>
    <td>The name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/subnetworks) to which the cluster is connected.</td>
</tr>
<tr>
    <td><CopyableCode code="tpuIpv4CidrBlock" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address range of the Cloud TPUs in this cluster, in [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25.</td>
</tr>
<tr>
    <td><CopyableCode code="userManagedKeysConfig" /></td>
    <td><code>object</code></td>
    <td>The Custom keys configuration for the cluster. (id: UserManagedKeysConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="verticalPodAutoscaling" /></td>
    <td><code>object</code></td>
    <td>Cluster-level Vertical Pod Autoscaling configuration. (id: VerticalPodAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="workloadIdentityConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the use of Kubernetes Service Accounts in IAM policies. (id: WorkloadIdentityConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_clusters_list">

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
    <td>Output only. Unique id for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this cluster. The name must be unique within this project and location (e.g. zone or region), and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter.</td>
</tr>
<tr>
    <td><CopyableCode code="addonsConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for the various addons available to run in the cluster. (id: AddonsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="alphaClusterFeatureGates" /></td>
    <td><code>array</code></td>
    <td>The list of user specified Kubernetes feature gates. Each string represents the activation status of a feature gate (e.g. "featureX=true" or "featureX=false")</td>
</tr>
<tr>
    <td><CopyableCode code="anonymousAuthenticationConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for limiting anonymous access to all endpoints except the health checks. (id: AnonymousAuthenticationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="authenticatorGroupsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration controlling RBAC group membership information. (id: AuthenticatorGroupsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="autopilot" /></td>
    <td><code>object</code></td>
    <td>Autopilot configuration for the cluster. (id: Autopilot)</td>
</tr>
<tr>
    <td><CopyableCode code="autoscaling" /></td>
    <td><code>object</code></td>
    <td>Cluster-level autoscaling configuration. (id: ClusterAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="binaryAuthorization" /></td>
    <td><code>object</code></td>
    <td>Configuration for Binary Authorization. (id: BinaryAuthorization)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterIpv4Cidr" /></td>
    <td><code>string</code></td>
    <td>The IP address range of the container pods in this cluster, in [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`.</td>
</tr>
<tr>
    <td><CopyableCode code="compliancePostureConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Deprecated: Compliance Posture is no longer supported. For more details, see https://cloud.google.com/kubernetes-engine/docs/deprecations/posture-management-deprecation. Enable/Disable Compliance Posture features for the cluster. (id: CompliancePostureConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>Which conditions caused the current cluster state.</td>
</tr>
<tr>
    <td><CopyableCode code="confidentialNodes" /></td>
    <td><code>object</code></td>
    <td>Configuration of Confidential Nodes. All the nodes in the cluster will be Confidential VM once enabled. (id: ConfidentialNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneEgress" /></td>
    <td><code>object</code></td>
    <td>Configuration for control plane egress control. (id: ControlPlaneEgress)</td>
</tr>
<tr>
    <td><CopyableCode code="controlPlaneEndpointsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for all cluster's control plane endpoints. (id: ControlPlaneEndpointsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="costManagementConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the fine-grained cost management feature. (id: CostManagementConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.</td>
</tr>
<tr>
    <td><CopyableCode code="currentEmulatedVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The current emulated version of the master endpoint. The version is in minor version format, e.g. 1.30. No value or empty string means the cluster has no emulated version.</td>
</tr>
<tr>
    <td><CopyableCode code="currentMasterVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. The current software version of the master endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="currentNodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information.</td>
</tr>
<tr>
    <td><CopyableCode code="currentNodeVersion" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated, use [NodePools.version](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they're in the process of being upgraded, this reflects the minimum version of all nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseEncryption" /></td>
    <td><code>object</code></td>
    <td>Configuration of etcd encryption. (id: DatabaseEncryption)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultMaxPodsConstraint" /></td>
    <td><code>object</code></td>
    <td>The default constraint on the maximum number of pods that can be run simultaneously on a node in the node pool of this cluster. Only honored if cluster created with IP Alias support. (id: MaxPodsConstraint)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="enableK8sBetaApis" /></td>
    <td><code>object</code></td>
    <td>Beta APIs Config (id: K8sBetaAPIConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="enableKubernetesAlpha" /></td>
    <td><code>boolean</code></td>
    <td>Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1alpha1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="enableTpu" /></td>
    <td><code>boolean</code></td>
    <td>Enable the ability to use Cloud TPUs in this cluster. This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address of this cluster's master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`. See the `masterAuth` property of this resource for username and password information.</td>
</tr>
<tr>
    <td><CopyableCode code="enterpriseConfig" /></td>
    <td><code>object</code></td>
    <td>GKE Enterprise Configuration. Deprecated: GKE Enterprise features are now available without an Enterprise tier. (id: EnterpriseConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.</td>
</tr>
<tr>
    <td><CopyableCode code="expireTime" /></td>
    <td><code>string</code></td>
    <td>Output only. The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet" /></td>
    <td><code>object</code></td>
    <td>Fleet information for the cluster. (id: Fleet)</td>
</tr>
<tr>
    <td><CopyableCode code="gkeAutoUpgradeConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for GKE auto upgrades. (id: GkeAutoUpgradeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="identityServiceConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for Identity Service component. (id: IdentityServiceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="initialClusterVersion" /></td>
    <td><code>string</code></td>
    <td>The initial Kubernetes version for this cluster. Valid versions are those found in validMasterVersions returned by getServerConfig. The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "","-": picks the default Kubernetes version</td>
</tr>
<tr>
    <td><CopyableCode code="initialNodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "node_config") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. This field is deprecated, use node_pool.initial_node_count instead.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceGroupUrls" /></td>
    <td><code>array</code></td>
    <td>Output only. Deprecated. Use node_pools.instance_group_urls.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAllocationPolicy" /></td>
    <td><code>object</code></td>
    <td>Configuration for cluster IP allocation. (id: IPAllocationPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="labelFingerprint" /></td>
    <td><code>string</code></td>
    <td>The fingerprint of the set of labels for this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="legacyAbac" /></td>
    <td><code>object</code></td>
    <td>Configuration for the legacy ABAC authorization mode. (id: LegacyAbac)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This field provides a default value if [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) are not specified during node pool creation. Warning: changing cluster locations will update the [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) of all node pools and will result in nodes being added and/or removed.</td>
</tr>
<tr>
    <td><CopyableCode code="loggingConfig" /></td>
    <td><code>object</code></td>
    <td>Logging configuration for the cluster. (id: LoggingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="loggingService" /></td>
    <td><code>string</code></td>
    <td>The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenancePolicy" /></td>
    <td><code>object</code></td>
    <td>Configure the maintenance policy for this cluster. (id: MaintenancePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="managedMachineLearningDiagnosticsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for Managed Machine Learning Diagnostics. (id: ManagedMachineLearningDiagnosticsConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="managedOpentelemetryConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for Managed OpenTelemetry pipeline. (id: ManagedOpenTelemetryConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="masterAuth" /></td>
    <td><code>object</code></td>
    <td>The authentication information for accessing the master endpoint. If unspecified, the defaults are used: For clusters before v1.12, if master_auth is unspecified, `username` will be set to "admin", a random password will be generated, and a client certificate will be issued. (id: MasterAuth)</td>
</tr>
<tr>
    <td><CopyableCode code="masterAuthorizedNetworksConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration options for master authorized networks feature. Deprecated: Use ControlPlaneEndpointsConfig.IPEndpointsConfig.authorized_networks_config instead. (id: MasterAuthorizedNetworksConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="meshCertificates" /></td>
    <td><code>object</code></td>
    <td>Configuration for issuance of mTLS keys and certificates to Kubernetes pods. (id: MeshCertificates)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringConfig" /></td>
    <td><code>object</code></td>
    <td>Monitoring configuration for the cluster. (id: MonitoringConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="monitoringService" /></td>
    <td><code>string</code></td>
    <td>The monitoring service the cluster should use to write metrics. Currently available options: * `monitoring.googleapis.com/kubernetes` - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the `default` network will be used.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for cluster networking. (id: NetworkConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="networkPolicy" /></td>
    <td><code>object</code></td>
    <td>Configuration options for the NetworkPolicy feature. (id: NetworkPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeConfig" /></td>
    <td><code>object</code></td>
    <td>Parameters used in creating the cluster's nodes. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "initial_node_count") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. For responses, this field will be populated with the node configuration of the first node pool. (For configuration of each node pool, see `node_pool.config`) If unspecified, the defaults are used. This field is deprecated, use node_pool.config instead. (id: NodeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCreationConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for Node Creation Mode. (id: NodeCreationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeIpv4CidrSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>Output only. The size of the address space on each node for hosting containers. This is provisioned from within the `container_ipv4_cidr` range. This field will only be set when cluster is in route-based network mode.</td>
</tr>
<tr>
    <td><CopyableCode code="nodePoolAutoConfig" /></td>
    <td><code>object</code></td>
    <td>Node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters. (id: NodePoolAutoConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="nodePoolDefaults" /></td>
    <td><code>object</code></td>
    <td>Default NodePool settings for the entire cluster. These settings are overridden if specified on the specific NodePool object. (id: NodePoolDefaults)</td>
</tr>
<tr>
    <td><CopyableCode code="nodePools" /></td>
    <td><code>array</code></td>
    <td>The node pools associated with this cluster. This field should not be set if "node_config" or "initial_node_count" are specified.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationConfig" /></td>
    <td><code>object</code></td>
    <td>Notification configuration of the cluster. (id: NotificationConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="parentProductConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of the parent product of the cluster. This field is used by Google internal products that are built on top of the GKE cluster and take the ownership of the cluster. (id: ParentProductConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="podAutoscaling" /></td>
    <td><code>object</code></td>
    <td>The config for pod autoscaling. (id: PodAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="privateClusterConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for private cluster. (id: PrivateClusterConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="rbacBindingConfig" /></td>
    <td><code>object</code></td>
    <td>RBACBindingConfig allows user to restrict ClusterRoleBindings an RoleBindings that can be created. (id: RBACBindingConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="releaseChannel" /></td>
    <td><code>object</code></td>
    <td>Release channel configuration. If left unspecified on cluster creation and a version is specified, the cluster is enrolled in the most mature release channel where the version is available (first checking STABLE, then REGULAR, and finally RAPID). Otherwise, if no release channel configuration and no version is specified, the cluster is enrolled in the REGULAR channel with its default version. (id: ReleaseChannel)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceLabels" /></td>
    <td><code>object</code></td>
    <td>The resource labels for the cluster to use to annotate any related Google Compute Engine resources.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceUsageExportConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for exporting resource usages. Resource usage export is disabled when this config is unspecified. (id: ResourceUsageExportConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="rollbackSafeUpgrade" /></td>
    <td><code>object</code></td>
    <td>Optional. The rollback safe upgrade information of the cluster. This field is used when user manually triggers a rollback safe upgrade. (id: RollbackSafeUpgrade)</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzi" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="satisfiesPzs" /></td>
    <td><code>boolean</code></td>
    <td>Output only. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleUpgradeConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for scheduled upgrades. (id: ScheduleUpgradeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="secretManagerConfig" /></td>
    <td><code>object</code></td>
    <td>Secret CSI driver configuration. (id: SecretManagerConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="secretSyncConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for sync Secret Manager secrets as k8s secrets. (id: SecretSyncConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="securityPostureConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Enable/Disable Security Posture API features for the cluster. (id: SecurityPostureConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="selfLink" /></td>
    <td><code>string</code></td>
    <td>Output only. Server-defined URL for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="servicesIpv4Cidr" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address range of the Kubernetes services in this cluster, in [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last `/16` from the container CIDR.</td>
</tr>
<tr>
    <td><CopyableCode code="shieldedNodes" /></td>
    <td><code>object</code></td>
    <td>Shielded Nodes configuration. (id: ShieldedNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Output only. The current status of this cluster. (STATUS_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR, DEGRADED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>Output only. Deprecated. Use conditions instead. Additional information about the current status of this cluster, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetwork" /></td>
    <td><code>string</code></td>
    <td>The name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/subnetworks) to which the cluster is connected.</td>
</tr>
<tr>
    <td><CopyableCode code="tpuIpv4CidrBlock" /></td>
    <td><code>string</code></td>
    <td>Output only. The IP address range of the Cloud TPUs in this cluster, in [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). This field is deprecated due to the deprecation of 2VM TPU. The end of life date for 2VM TPU is 2025-04-25.</td>
</tr>
<tr>
    <td><CopyableCode code="userManagedKeysConfig" /></td>
    <td><code>object</code></td>
    <td>The Custom keys configuration for the cluster. (id: UserManagedKeysConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="verticalPodAutoscaling" /></td>
    <td><code>object</code></td>
    <td>Cluster-level Vertical Pod Autoscaling configuration. (id: VerticalPodAutoscaling)</td>
</tr>
<tr>
    <td><CopyableCode code="workloadIdentityConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration for the use of Kubernetes Service Accounts in IAM policies. (id: WorkloadIdentityConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_zones_clusters_list">

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
    <td><CopyableCode code="clusters" /></td>
    <td><code>array</code></td>
    <td>A list of clusters in the project in the specified zone, or across all ones.</td>
</tr>
<tr>
    <td><CopyableCode code="missingZones" /></td>
    <td><code>array</code></td>
    <td>If any zones are listed here, the list of clusters returned may be missing those zones.</td>
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
    <td><a href="#projects_locations_clusters_get"><CopyableCode code="projects_locations_clusters_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td>Gets the details of a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_get"><CopyableCode code="projects_zones_clusters_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Gets the details of a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_list"><CopyableCode code="projects_locations_clusters_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td>Lists all clusters owned by a project in either the specified zone or all zones.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_list"><CopyableCode code="projects_zones_clusters_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td><a href="#parameter-parent"><code>parent</code></a></td>
    <td>Lists all clusters owned by a project in either the specified zone or all zones.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_create"><CopyableCode code="projects_locations_clusters_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_create"><CopyableCode code="projects_zones_clusters_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td></td>
    <td>Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_update"><CopyableCode code="projects_locations_clusters_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Updates the settings of a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_update"><CopyableCode code="projects_zones_clusters_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Updates the settings of a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_delete"><CopyableCode code="projects_locations_clusters_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td>Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_delete"><CopyableCode code="projects_zones_clusters_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_check_autopilot_compatibility"><CopyableCode code="projects_locations_clusters_check_autopilot_compatibility" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Checks the cluster compatibility with Autopilot mode, and returns a list of compatibility issues.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_complete_control_plane_upgrade"><CopyableCode code="projects_locations_clusters_complete_control_plane_upgrade" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>CompleteControlPlaneUpgrade completes the rollback-safe upgrade by performing the step two upgrade for a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_complete_ip_rotation"><CopyableCode code="projects_locations_clusters_complete_ip_rotation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Completes master IP rotation.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_set_addons"><CopyableCode code="projects_locations_clusters_set_addons" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Sets the addons for a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_set_legacy_abac"><CopyableCode code="projects_locations_clusters_set_legacy_abac" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Enables or disables the ABAC authorization mechanism on a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_set_locations"><CopyableCode code="projects_locations_clusters_set_locations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_set_logging"><CopyableCode code="projects_locations_clusters_set_logging" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Sets the logging service for a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_set_maintenance_policy"><CopyableCode code="projects_locations_clusters_set_maintenance_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Sets the maintenance policy for a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_set_master_auth"><CopyableCode code="projects_locations_clusters_set_master_auth" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_set_monitoring"><CopyableCode code="projects_locations_clusters_set_monitoring" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Sets the monitoring service for a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_set_network_policy"><CopyableCode code="projects_locations_clusters_set_network_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Enables or disables Network Policy for a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_set_resource_labels"><CopyableCode code="projects_locations_clusters_set_resource_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Sets labels on a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_start_ip_rotation"><CopyableCode code="projects_locations_clusters_start_ip_rotation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Starts master IP rotation.</td>
</tr>
<tr>
    <td><a href="#projects_locations_clusters_update_master"><CopyableCode code="projects_locations_clusters_update_master" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>Updates the master for a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_addons"><CopyableCode code="projects_zones_clusters_addons" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Sets the addons for a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_complete_control_plane_upgrade"><CopyableCode code="projects_zones_clusters_complete_control_plane_upgrade" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-zonesId"><code>zonesId</code></a>, <a href="#parameter-clustersId"><code>clustersId</code></a></td>
    <td></td>
    <td>CompleteControlPlaneUpgrade completes the rollback-safe upgrade by performing the step two upgrade for a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_complete_ip_rotation"><CopyableCode code="projects_zones_clusters_complete_ip_rotation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Completes master IP rotation.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_legacy_abac"><CopyableCode code="projects_zones_clusters_legacy_abac" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Enables or disables the ABAC authorization mechanism on a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_locations"><CopyableCode code="projects_zones_clusters_locations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_logging"><CopyableCode code="projects_zones_clusters_logging" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Sets the logging service for a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_master"><CopyableCode code="projects_zones_clusters_master" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Updates the master for a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_monitoring"><CopyableCode code="projects_zones_clusters_monitoring" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Sets the monitoring service for a specific cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_resource_labels"><CopyableCode code="projects_zones_clusters_resource_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Sets labels on a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_set_maintenance_policy"><CopyableCode code="projects_zones_clusters_set_maintenance_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Sets the maintenance policy for a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_set_master_auth"><CopyableCode code="projects_zones_clusters_set_master_auth" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_set_network_policy"><CopyableCode code="projects_zones_clusters_set_network_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Enables or disables Network Policy for a cluster.</td>
</tr>
<tr>
    <td><a href="#projects_zones_clusters_start_ip_rotation"><CopyableCode code="projects_zones_clusters_start_ip_rotation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a></td>
    <td></td>
    <td>Starts master IP rotation.</td>
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
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clustersId">
    <td><CopyableCode code="clustersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectsId">
    <td><CopyableCode code="projectsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zonesId">
    <td><CopyableCode code="zonesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-parent">
    <td><CopyableCode code="parent" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_clusters_get"
    values={[
        { label: 'projects_locations_clusters_get', value: 'projects_locations_clusters_get' },
        { label: 'projects_zones_clusters_get', value: 'projects_zones_clusters_get' },
        { label: 'projects_locations_clusters_list', value: 'projects_locations_clusters_list' },
        { label: 'projects_zones_clusters_list', value: 'projects_zones_clusters_list' }
    ]}
>
<TabItem value="projects_locations_clusters_get">

Gets the details of a specific cluster.

```sql
SELECT
id,
name,
addonsConfig,
alphaClusterFeatureGates,
anonymousAuthenticationConfig,
authenticatorGroupsConfig,
autopilot,
autoscaling,
binaryAuthorization,
clusterIpv4Cidr,
compliancePostureConfig,
conditions,
confidentialNodes,
controlPlaneEgress,
controlPlaneEndpointsConfig,
costManagementConfig,
createTime,
currentEmulatedVersion,
currentMasterVersion,
currentNodeCount,
currentNodeVersion,
databaseEncryption,
defaultMaxPodsConstraint,
description,
enableK8sBetaApis,
enableKubernetesAlpha,
enableTpu,
endpoint,
enterpriseConfig,
etag,
expireTime,
fleet,
gkeAutoUpgradeConfig,
identityServiceConfig,
initialClusterVersion,
initialNodeCount,
instanceGroupUrls,
ipAllocationPolicy,
labelFingerprint,
legacyAbac,
location,
locations,
loggingConfig,
loggingService,
maintenancePolicy,
managedMachineLearningDiagnosticsConfig,
managedOpentelemetryConfig,
masterAuth,
masterAuthorizedNetworksConfig,
meshCertificates,
monitoringConfig,
monitoringService,
network,
networkConfig,
networkPolicy,
nodeConfig,
nodeCreationConfig,
nodeIpv4CidrSize,
nodePoolAutoConfig,
nodePoolDefaults,
nodePools,
notificationConfig,
parentProductConfig,
podAutoscaling,
privateClusterConfig,
rbacBindingConfig,
releaseChannel,
resourceLabels,
resourceUsageExportConfig,
rollbackSafeUpgrade,
satisfiesPzi,
satisfiesPzs,
scheduleUpgradeConfig,
secretManagerConfig,
secretSyncConfig,
securityPostureConfig,
selfLink,
servicesIpv4Cidr,
shieldedNodes,
status,
statusMessage,
subnetwork,
tpuIpv4CidrBlock,
userManagedKeysConfig,
verticalPodAutoscaling,
workloadIdentityConfig,
zone
FROM google.container.clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND clustersId = '{{ clustersId }}' -- required
AND clusterId = '{{ clusterId }}'
AND projectId = '{{ projectId }}'
AND zone = '{{ zone }}'
;
```
</TabItem>
<TabItem value="projects_zones_clusters_get">

Gets the details of a specific cluster.

```sql
SELECT
id,
name,
addonsConfig,
alphaClusterFeatureGates,
anonymousAuthenticationConfig,
authenticatorGroupsConfig,
autopilot,
autoscaling,
binaryAuthorization,
clusterIpv4Cidr,
compliancePostureConfig,
conditions,
confidentialNodes,
controlPlaneEgress,
controlPlaneEndpointsConfig,
costManagementConfig,
createTime,
currentEmulatedVersion,
currentMasterVersion,
currentNodeCount,
currentNodeVersion,
databaseEncryption,
defaultMaxPodsConstraint,
description,
enableK8sBetaApis,
enableKubernetesAlpha,
enableTpu,
endpoint,
enterpriseConfig,
etag,
expireTime,
fleet,
gkeAutoUpgradeConfig,
identityServiceConfig,
initialClusterVersion,
initialNodeCount,
instanceGroupUrls,
ipAllocationPolicy,
labelFingerprint,
legacyAbac,
location,
locations,
loggingConfig,
loggingService,
maintenancePolicy,
managedMachineLearningDiagnosticsConfig,
managedOpentelemetryConfig,
masterAuth,
masterAuthorizedNetworksConfig,
meshCertificates,
monitoringConfig,
monitoringService,
network,
networkConfig,
networkPolicy,
nodeConfig,
nodeCreationConfig,
nodeIpv4CidrSize,
nodePoolAutoConfig,
nodePoolDefaults,
nodePools,
notificationConfig,
parentProductConfig,
podAutoscaling,
privateClusterConfig,
rbacBindingConfig,
releaseChannel,
resourceLabels,
resourceUsageExportConfig,
rollbackSafeUpgrade,
satisfiesPzi,
satisfiesPzs,
scheduleUpgradeConfig,
secretManagerConfig,
secretSyncConfig,
securityPostureConfig,
selfLink,
servicesIpv4Cidr,
shieldedNodes,
status,
statusMessage,
subnetwork,
tpuIpv4CidrBlock,
userManagedKeysConfig,
verticalPodAutoscaling,
workloadIdentityConfig,
zone
FROM google.container.clusters
WHERE projectId = '{{ projectId }}' -- required
AND zone = '{{ zone }}' -- required
AND clusterId = '{{ clusterId }}' -- required
AND name = '{{ name }}'
;
```
</TabItem>
<TabItem value="projects_locations_clusters_list">

Lists all clusters owned by a project in either the specified zone or all zones.

```sql
SELECT
id,
name,
addonsConfig,
alphaClusterFeatureGates,
anonymousAuthenticationConfig,
authenticatorGroupsConfig,
autopilot,
autoscaling,
binaryAuthorization,
clusterIpv4Cidr,
compliancePostureConfig,
conditions,
confidentialNodes,
controlPlaneEgress,
controlPlaneEndpointsConfig,
costManagementConfig,
createTime,
currentEmulatedVersion,
currentMasterVersion,
currentNodeCount,
currentNodeVersion,
databaseEncryption,
defaultMaxPodsConstraint,
description,
enableK8sBetaApis,
enableKubernetesAlpha,
enableTpu,
endpoint,
enterpriseConfig,
etag,
expireTime,
fleet,
gkeAutoUpgradeConfig,
identityServiceConfig,
initialClusterVersion,
initialNodeCount,
instanceGroupUrls,
ipAllocationPolicy,
labelFingerprint,
legacyAbac,
location,
locations,
loggingConfig,
loggingService,
maintenancePolicy,
managedMachineLearningDiagnosticsConfig,
managedOpentelemetryConfig,
masterAuth,
masterAuthorizedNetworksConfig,
meshCertificates,
monitoringConfig,
monitoringService,
network,
networkConfig,
networkPolicy,
nodeConfig,
nodeCreationConfig,
nodeIpv4CidrSize,
nodePoolAutoConfig,
nodePoolDefaults,
nodePools,
notificationConfig,
parentProductConfig,
podAutoscaling,
privateClusterConfig,
rbacBindingConfig,
releaseChannel,
resourceLabels,
resourceUsageExportConfig,
rollbackSafeUpgrade,
satisfiesPzi,
satisfiesPzs,
scheduleUpgradeConfig,
secretManagerConfig,
secretSyncConfig,
securityPostureConfig,
selfLink,
servicesIpv4Cidr,
shieldedNodes,
status,
statusMessage,
subnetwork,
tpuIpv4CidrBlock,
userManagedKeysConfig,
verticalPodAutoscaling,
workloadIdentityConfig,
zone
FROM google.container.clusters
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND projectId = '{{ projectId }}'
AND zone = '{{ zone }}'
;
```
</TabItem>
<TabItem value="projects_zones_clusters_list">

Lists all clusters owned by a project in either the specified zone or all zones.

```sql
SELECT
clusters,
missingZones
FROM google.container.clusters
WHERE projectId = '{{ projectId }}' -- required
AND zone = '{{ zone }}' -- required
AND parent = '{{ parent }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_clusters_create"
    values={[
        { label: 'projects_locations_clusters_create', value: 'projects_locations_clusters_create' },
        { label: 'projects_zones_clusters_create', value: 'projects_zones_clusters_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_clusters_create">

Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.

```sql
INSERT INTO google.container.clusters (
data__cluster,
data__parent,
data__projectId,
data__zone,
projectsId,
locationsId
)
SELECT 
'{{ cluster }}',
'{{ parent }}',
'{{ projectId }}',
'{{ zone }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
clusterConditions,
detail,
endTime,
error,
location,
nodepoolConditions,
operationType,
progress,
selfLink,
startTime,
status,
statusMessage,
targetLink,
zone
;
```
</TabItem>
<TabItem value="projects_zones_clusters_create">

Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.

```sql
INSERT INTO google.container.clusters (
data__cluster,
data__parent,
data__projectId,
data__zone,
projectId,
zone
)
SELECT 
'{{ cluster }}',
'{{ parent }}',
'{{ projectId }}',
'{{ zone }}',
'{{ projectId }}',
'{{ zone }}'
RETURNING
name,
clusterConditions,
detail,
endTime,
error,
location,
nodepoolConditions,
operationType,
progress,
selfLink,
startTime,
status,
statusMessage,
targetLink,
zone
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: clusters
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the clusters resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the clusters resource.
    - name: projectId
      value: "{{ projectId }}"
      description: Required parameter for the clusters resource.
    - name: zone
      value: "{{ zone }}"
      description: Required parameter for the clusters resource.
    - name: cluster
      description: |
        Required. A [cluster resource](https://cloud.google.com/container-engine/reference/rest/v1/projects.locations.clusters)
      value:
        addonsConfig:
          agentSandboxConfig:
            enabled: {{ enabled }}
          cloudRunConfig:
            disabled: {{ disabled }}
            loadBalancerType: "{{ loadBalancerType }}"
          configConnectorConfig:
            enabled: {{ enabled }}
          dnsCacheConfig:
            enabled: {{ enabled }}
          gcePersistentDiskCsiDriverConfig:
            enabled: {{ enabled }}
          gcpFilestoreCsiDriverConfig:
            enabled: {{ enabled }}
          gcsFuseCsiDriverConfig:
            enabled: {{ enabled }}
          gkeBackupAgentConfig:
            enabled: {{ enabled }}
          highScaleCheckpointingConfig:
            enabled: {{ enabled }}
          horizontalPodAutoscaling:
            disabled: {{ disabled }}
          httpLoadBalancing:
            disabled: {{ disabled }}
          kubernetesDashboard:
            disabled: {{ disabled }}
          lustreCsiDriverConfig:
            disableMultiNic: {{ disableMultiNic }}
            enableLegacyLustrePort: {{ enableLegacyLustrePort }}
            enabled: {{ enabled }}
          networkPolicyConfig:
            disabled: {{ disabled }}
          nodeReadinessConfig:
            enabled: {{ enabled }}
          parallelstoreCsiDriverConfig:
            enabled: {{ enabled }}
          podSnapshotConfig:
            enabled: {{ enabled }}
          rayOperatorConfig:
            enabled: {{ enabled }}
            rayClusterLoggingConfig:
              enabled: {{ enabled }}
            rayClusterMonitoringConfig:
              enabled: {{ enabled }}
          sliceControllerConfig:
            enabled: {{ enabled }}
          slurmOperatorConfig:
            enabled: {{ enabled }}
          statefulHaConfig:
            enabled: {{ enabled }}
        alphaClusterFeatureGates:
          - "{{ alphaClusterFeatureGates }}"
        anonymousAuthenticationConfig:
          mode: "{{ mode }}"
        authenticatorGroupsConfig:
          enabled: {{ enabled }}
          securityGroup: "{{ securityGroup }}"
        autopilot:
          clusterPolicyConfig:
            noStandardNodePools: {{ noStandardNodePools }}
            noSystemImpersonation: {{ noSystemImpersonation }}
            noSystemMutation: {{ noSystemMutation }}
            noUnsafeWebhooks: {{ noUnsafeWebhooks }}
          enabled: {{ enabled }}
          privilegedAdmissionConfig:
            allowlistPaths:
              - "{{ allowlistPaths }}"
          workloadPolicyConfig:
            allowNetAdmin: {{ allowNetAdmin }}
            autopilotCompatibilityAuditingEnabled: {{ autopilotCompatibilityAuditingEnabled }}
        autoscaling:
          autopilotGeneralProfile: "{{ autopilotGeneralProfile }}"
          autoprovisioningLocations:
            - "{{ autoprovisioningLocations }}"
          autoprovisioningNodePoolDefaults:
            bootDiskKmsKey: "{{ bootDiskKmsKey }}"
            diskSizeGb: {{ diskSizeGb }}
            diskType: "{{ diskType }}"
            imageType: "{{ imageType }}"
            insecureKubeletReadonlyPortEnabled: {{ insecureKubeletReadonlyPortEnabled }}
            management:
              autoRepair: {{ autoRepair }}
              autoUpgrade: {{ autoUpgrade }}
              upgradeOptions:
                autoUpgradeStartTime: "{{ autoUpgradeStartTime }}"
                description: "{{ description }}"
            minCpuPlatform: "{{ minCpuPlatform }}"
            oauthScopes:
              - "{{ oauthScopes }}"
            serviceAccount: "{{ serviceAccount }}"
            shieldedInstanceConfig:
              enableIntegrityMonitoring: {{ enableIntegrityMonitoring }}
              enableSecureBoot: {{ enableSecureBoot }}
            upgradeSettings:
              blueGreenSettings:
                autoscaledRolloutPolicy: "{{ autoscaledRolloutPolicy }}"
                nodePoolSoakDuration: "{{ nodePoolSoakDuration }}"
                standardRolloutPolicy: "{{ standardRolloutPolicy }}"
              maxSurge: {{ maxSurge }}
              maxUnavailable: {{ maxUnavailable }}
              strategy: "{{ strategy }}"
          autoscalingProfile: "{{ autoscalingProfile }}"
          defaultComputeClassConfig:
            enabled: {{ enabled }}
          enableNodeAutoprovisioning: {{ enableNodeAutoprovisioning }}
          resourceLimits:
            - maximum: "{{ maximum }}"
              minimum: "{{ minimum }}"
              resourceType: "{{ resourceType }}"
        binaryAuthorization:
          enabled: {{ enabled }}
          evaluationMode: "{{ evaluationMode }}"
        clusterIpv4Cidr: "{{ clusterIpv4Cidr }}"
        compliancePostureConfig:
          complianceStandards:
            - standard: "{{ standard }}"
          mode: "{{ mode }}"
        conditions:
          - canonicalCode: "{{ canonicalCode }}"
            code: "{{ code }}"
            message: "{{ message }}"
        confidentialNodes:
          confidentialInstanceType: "{{ confidentialInstanceType }}"
          enabled: {{ enabled }}
        controlPlaneEgress:
          mode: "{{ mode }}"
        controlPlaneEndpointsConfig:
          dnsEndpointConfig:
            allowExternalTraffic: {{ allowExternalTraffic }}
            enableK8sCertsViaDns: {{ enableK8sCertsViaDns }}
            enableK8sTokensViaDns: {{ enableK8sTokensViaDns }}
            endpoint: "{{ endpoint }}"
          ipEndpointsConfig:
            authorizedNetworksConfig:
              cidrBlocks:
                - cidrBlock: "{{ cidrBlock }}"
                  displayName: "{{ displayName }}"
              enabled: {{ enabled }}
              gcpPublicCidrsAccessEnabled: {{ gcpPublicCidrsAccessEnabled }}
              privateEndpointEnforcementEnabled: {{ privateEndpointEnforcementEnabled }}
            enablePublicEndpoint: {{ enablePublicEndpoint }}
            enabled: {{ enabled }}
            globalAccess: {{ globalAccess }}
            privateEndpoint: "{{ privateEndpoint }}"
            privateEndpointSubnetwork: "{{ privateEndpointSubnetwork }}"
            publicEndpoint: "{{ publicEndpoint }}"
        costManagementConfig:
          enabled: {{ enabled }}
        createTime: "{{ createTime }}"
        currentEmulatedVersion: "{{ currentEmulatedVersion }}"
        currentMasterVersion: "{{ currentMasterVersion }}"
        currentNodeCount: {{ currentNodeCount }}
        currentNodeVersion: "{{ currentNodeVersion }}"
        databaseEncryption:
          currentState: "{{ currentState }}"
          decryptionKeys:
            - "{{ decryptionKeys }}"
          keyName: "{{ keyName }}"
          lastOperationErrors:
            - errorMessage: "{{ errorMessage }}"
              keyName: "{{ keyName }}"
              timestamp: "{{ timestamp }}"
          state: "{{ state }}"
        defaultMaxPodsConstraint:
          maxPodsPerNode: "{{ maxPodsPerNode }}"
        description: "{{ description }}"
        enableK8sBetaApis:
          enabledApis:
            - "{{ enabledApis }}"
        enableKubernetesAlpha: {{ enableKubernetesAlpha }}
        enableTpu: {{ enableTpu }}
        endpoint: "{{ endpoint }}"
        enterpriseConfig:
          clusterTier: "{{ clusterTier }}"
          desiredTier: "{{ desiredTier }}"
        etag: "{{ etag }}"
        expireTime: "{{ expireTime }}"
        fleet:
          membership: "{{ membership }}"
          membershipType: "{{ membershipType }}"
          preRegistered: {{ preRegistered }}
          project: "{{ project }}"
        gkeAutoUpgradeConfig:
          patchMode: "{{ patchMode }}"
        id: "{{ id }}"
        identityServiceConfig:
          enabled: {{ enabled }}
        initialClusterVersion: "{{ initialClusterVersion }}"
        initialNodeCount: {{ initialNodeCount }}
        instanceGroupUrls:
          - "{{ instanceGroupUrls }}"
        ipAllocationPolicy:
          additionalIpRangesConfigs:
            - podIpv4RangeNames: "{{ podIpv4RangeNames }}"
              status: "{{ status }}"
              subnetwork: "{{ subnetwork }}"
          additionalPodRangesConfig:
            podRangeInfo:
              - rangeName: "{{ rangeName }}"
                utilization: {{ utilization }}
            podRangeNames:
              - "{{ podRangeNames }}"
          autoIpamConfig:
            enabled: {{ enabled }}
          clusterIpv4Cidr: "{{ clusterIpv4Cidr }}"
          clusterIpv4CidrBlock: "{{ clusterIpv4CidrBlock }}"
          clusterSecondaryRangeName: "{{ clusterSecondaryRangeName }}"
          createSubnetwork: {{ createSubnetwork }}
          defaultPodIpv4RangeUtilization: {{ defaultPodIpv4RangeUtilization }}
          ipv6AccessType: "{{ ipv6AccessType }}"
          networkTierConfig:
            networkTier: "{{ networkTier }}"
          nodeIpv4Cidr: "{{ nodeIpv4Cidr }}"
          nodeIpv4CidrBlock: "{{ nodeIpv4CidrBlock }}"
          podCidrOverprovisionConfig:
            disable: {{ disable }}
          servicesIpv4Cidr: "{{ servicesIpv4Cidr }}"
          servicesIpv4CidrBlock: "{{ servicesIpv4CidrBlock }}"
          servicesIpv6CidrBlock: "{{ servicesIpv6CidrBlock }}"
          servicesSecondaryRangeName: "{{ servicesSecondaryRangeName }}"
          stackType: "{{ stackType }}"
          subnetIpv6CidrBlock: "{{ subnetIpv6CidrBlock }}"
          subnetworkName: "{{ subnetworkName }}"
          tpuIpv4CidrBlock: "{{ tpuIpv4CidrBlock }}"
          useIpAliases: {{ useIpAliases }}
          useRoutes: {{ useRoutes }}
        labelFingerprint: "{{ labelFingerprint }}"
        legacyAbac:
          enabled: {{ enabled }}
        location: "{{ location }}"
        locations:
          - "{{ locations }}"
        loggingConfig:
          componentConfig:
            enableComponents:
              - "{{ enableComponents }}"
        loggingService: "{{ loggingService }}"
        maintenancePolicy:
          disruptionBudget:
            lastDisruptionTime: "{{ lastDisruptionTime }}"
            lastMinorVersionDisruptionTime: "{{ lastMinorVersionDisruptionTime }}"
            minorVersionDisruptionInterval: "{{ minorVersionDisruptionInterval }}"
            patchVersionDisruptionInterval: "{{ patchVersionDisruptionInterval }}"
          resourceVersion: "{{ resourceVersion }}"
          window:
            dailyMaintenanceWindow:
              duration: "{{ duration }}"
              startTime: "{{ startTime }}"
            maintenanceExclusions: "{{ maintenanceExclusions }}"
            recurringMaintenanceWindow:
              delayUntil:
                day: {{ day }}
                month: {{ month }}
                year: {{ year }}
              recurrence: "{{ recurrence }}"
              windowDuration: "{{ windowDuration }}"
              windowStartTime:
                hours: {{ hours }}
                minutes: {{ minutes }}
                nanos: {{ nanos }}
                seconds: {{ seconds }}
            recurringWindow:
              recurrence: "{{ recurrence }}"
              window:
                endTime: "{{ endTime }}"
                maintenanceExclusionOptions: "{{ maintenanceExclusionOptions }}"
                startTime: "{{ startTime }}"
        managedMachineLearningDiagnosticsConfig:
          enabled: {{ enabled }}
        managedOpentelemetryConfig:
          scope: "{{ scope }}"
        masterAuth:
          clientCertificate: "{{ clientCertificate }}"
          clientCertificateConfig:
            issueClientCertificate: {{ issueClientCertificate }}
          clientKey: "{{ clientKey }}"
          clusterCaCertificate: "{{ clusterCaCertificate }}"
          password: "{{ password }}"
          username: "{{ username }}"
        masterAuthorizedNetworksConfig:
          cidrBlocks:
            - cidrBlock: "{{ cidrBlock }}"
              displayName: "{{ displayName }}"
          enabled: {{ enabled }}
          gcpPublicCidrsAccessEnabled: {{ gcpPublicCidrsAccessEnabled }}
          privateEndpointEnforcementEnabled: {{ privateEndpointEnforcementEnabled }}
        meshCertificates:
          enableCertificates: {{ enableCertificates }}
        monitoringConfig:
          advancedDatapathObservabilityConfig:
            enableMetrics: {{ enableMetrics }}
            enableRelay: {{ enableRelay }}
            relayMode: "{{ relayMode }}"
          componentConfig:
            enableComponents:
              - "{{ enableComponents }}"
          managedPrometheusConfig:
            autoMonitoringConfig:
              scope: "{{ scope }}"
            enabled: {{ enabled }}
        monitoringService: "{{ monitoringService }}"
        name: "{{ name }}"
        network: "{{ network }}"
        networkConfig:
          datapathProvider: "{{ datapathProvider }}"
          dataplaneV2Config:
            scalabilityMode: "{{ scalabilityMode }}"
          defaultEnablePrivateNodes: {{ defaultEnablePrivateNodes }}
          defaultSnatStatus:
            disabled: {{ disabled }}
          disableL4LbFirewallReconciliation: {{ disableL4LbFirewallReconciliation }}
          dnsConfig:
            additiveVpcScopeDnsDomain: "{{ additiveVpcScopeDnsDomain }}"
            clusterDns: "{{ clusterDns }}"
            clusterDnsDomain: "{{ clusterDnsDomain }}"
            clusterDnsScope: "{{ clusterDnsScope }}"
          enableCiliumClusterwideNetworkPolicy: {{ enableCiliumClusterwideNetworkPolicy }}
          enableFqdnNetworkPolicy: {{ enableFqdnNetworkPolicy }}
          enableIntraNodeVisibility: {{ enableIntraNodeVisibility }}
          enableL4ilbSubsetting: {{ enableL4ilbSubsetting }}
          enableMultiNetworking: {{ enableMultiNetworking }}
          gatewayApiConfig:
            channel: "{{ channel }}"
          inTransitEncryptionConfig: "{{ inTransitEncryptionConfig }}"
          network: "{{ network }}"
          networkPerformanceConfig:
            totalEgressBandwidthTier: "{{ totalEgressBandwidthTier }}"
          privateIpv6GoogleAccess: "{{ privateIpv6GoogleAccess }}"
          serviceExternalIpsConfig:
            enabled: {{ enabled }}
          subnetwork: "{{ subnetwork }}"
        networkPolicy:
          enabled: {{ enabled }}
          provider: "{{ provider }}"
        nodeConfig:
          accelerators:
            - acceleratorCount: "{{ acceleratorCount }}"
              acceleratorType: "{{ acceleratorType }}"
              gpuDriverInstallationConfig:
                gpuDriverVersion: "{{ gpuDriverVersion }}"
              gpuPartitionSize: "{{ gpuPartitionSize }}"
              gpuSharingConfig:
                gpuSharingStrategy: "{{ gpuSharingStrategy }}"
                maxSharedClientsPerGpu: "{{ maxSharedClientsPerGpu }}"
          advancedMachineFeatures:
            enableNestedVirtualization: {{ enableNestedVirtualization }}
            performanceMonitoringUnit: "{{ performanceMonitoringUnit }}"
            threadsPerCore: "{{ threadsPerCore }}"
          bootDisk:
            diskType: "{{ diskType }}"
            provisionedIops: "{{ provisionedIops }}"
            provisionedThroughput: "{{ provisionedThroughput }}"
            sizeGb: "{{ sizeGb }}"
          bootDiskKmsKey: "{{ bootDiskKmsKey }}"
          confidentialNodes:
            confidentialInstanceType: "{{ confidentialInstanceType }}"
            enabled: {{ enabled }}
          consolidationDelay: "{{ consolidationDelay }}"
          containerdConfig:
            privateRegistryAccessConfig:
              certificateAuthorityDomainConfig:
                - fqdns: "{{ fqdns }}"
                  gcpSecretManagerCertificateConfig:
                    secretUri: "{{ secretUri }}"
              enabled: {{ enabled }}
            registryHosts:
              - hosts: "{{ hosts }}"
                server: "{{ server }}"
            writableCgroups:
              enabled: {{ enabled }}
          diskSizeGb: {{ diskSizeGb }}
          diskType: "{{ diskType }}"
          effectiveCgroupMode: "{{ effectiveCgroupMode }}"
          enableConfidentialStorage: {{ enableConfidentialStorage }}
          ephemeralStorageLocalSsdConfig:
            dataCacheCount: {{ dataCacheCount }}
            localSsdCount: {{ localSsdCount }}
          fastSocket:
            enabled: {{ enabled }}
          flexStart: {{ flexStart }}
          gcfsConfig:
            enabled: {{ enabled }}
          gpuDirectConfig:
            gpuDirectStrategy: "{{ gpuDirectStrategy }}"
          gvnic:
            enabled: {{ enabled }}
          imageType: "{{ imageType }}"
          kubeletConfig:
            allowedUnsafeSysctls:
              - "{{ allowedUnsafeSysctls }}"
            containerLogMaxFiles: {{ containerLogMaxFiles }}
            containerLogMaxSize: "{{ containerLogMaxSize }}"
            cpuCfsQuota: {{ cpuCfsQuota }}
            cpuCfsQuotaPeriod: "{{ cpuCfsQuotaPeriod }}"
            cpuManagerPolicy: "{{ cpuManagerPolicy }}"
            crashLoopBackOff:
              maxContainerRestartPeriod: "{{ maxContainerRestartPeriod }}"
            evictionMaxPodGracePeriodSeconds: {{ evictionMaxPodGracePeriodSeconds }}
            evictionMinimumReclaim:
              imagefsAvailable: "{{ imagefsAvailable }}"
              imagefsInodesFree: "{{ imagefsInodesFree }}"
              memoryAvailable: "{{ memoryAvailable }}"
              nodefsAvailable: "{{ nodefsAvailable }}"
              nodefsInodesFree: "{{ nodefsInodesFree }}"
              pidAvailable: "{{ pidAvailable }}"
            evictionSoft:
              imagefsAvailable: "{{ imagefsAvailable }}"
              imagefsInodesFree: "{{ imagefsInodesFree }}"
              memoryAvailable: "{{ memoryAvailable }}"
              nodefsAvailable: "{{ nodefsAvailable }}"
              nodefsInodesFree: "{{ nodefsInodesFree }}"
              pidAvailable: "{{ pidAvailable }}"
            evictionSoftGracePeriod:
              imagefsAvailable: "{{ imagefsAvailable }}"
              imagefsInodesFree: "{{ imagefsInodesFree }}"
              memoryAvailable: "{{ memoryAvailable }}"
              nodefsAvailable: "{{ nodefsAvailable }}"
              nodefsInodesFree: "{{ nodefsInodesFree }}"
              pidAvailable: "{{ pidAvailable }}"
            imageGcHighThresholdPercent: {{ imageGcHighThresholdPercent }}
            imageGcLowThresholdPercent: {{ imageGcLowThresholdPercent }}
            imageMaximumGcAge: "{{ imageMaximumGcAge }}"
            imageMinimumGcAge: "{{ imageMinimumGcAge }}"
            insecureKubeletReadonlyPortEnabled: {{ insecureKubeletReadonlyPortEnabled }}
            maxParallelImagePulls: {{ maxParallelImagePulls }}
            memoryManager:
              policy: "{{ policy }}"
            podPidsLimit: "{{ podPidsLimit }}"
            shutdownGracePeriodCriticalPodsSeconds: {{ shutdownGracePeriodCriticalPodsSeconds }}
            shutdownGracePeriodSeconds: {{ shutdownGracePeriodSeconds }}
            singleProcessOomKill: {{ singleProcessOomKill }}
            topologyManager:
              policy: "{{ policy }}"
              scope: "{{ scope }}"
          labels: "{{ labels }}"
          linuxNodeConfig:
            accurateTimeConfig:
              enablePtpKvmTimeSync: {{ enablePtpKvmTimeSync }}
            cgroupMode: "{{ cgroupMode }}"
            customNodeInit:
              initScript:
                args: "{{ args }}"
                gcpSecretManagerSecretUri: "{{ gcpSecretManagerSecretUri }}"
                gcsGeneration: "{{ gcsGeneration }}"
                gcsUri: "{{ gcsUri }}"
            diskIoScheduler:
              nodeAttachedDiskIoScheduler: "{{ nodeAttachedDiskIoScheduler }}"
              nodeSystemIoScheduler: "{{ nodeSystemIoScheduler }}"
            hugepages:
              hugepageSize1g: {{ hugepageSize1g }}
              hugepageSize2m: {{ hugepageSize2m }}
            nodeKernelModuleLoading:
              policy: "{{ policy }}"
            nodeVfioConfig:
              dmaEntryLimit: {{ dmaEntryLimit }}
            swapConfig:
              bootDiskProfile:
                swapSizeGib: "{{ swapSizeGib }}"
                swapSizePercent: {{ swapSizePercent }}
              dedicatedLocalSsdProfile:
                diskCount: "{{ diskCount }}"
              enabled: {{ enabled }}
              encryptionConfig:
                disabled: {{ disabled }}
              ephemeralLocalSsdProfile:
                swapSizeGib: "{{ swapSizeGib }}"
                swapSizePercent: {{ swapSizePercent }}
            sysctls: "{{ sysctls }}"
            transparentHugepageDefrag: "{{ transparentHugepageDefrag }}"
            transparentHugepageEnabled: "{{ transparentHugepageEnabled }}"
          localNvmeSsdBlockConfig:
            localSsdCount: {{ localSsdCount }}
          localSsdCount: {{ localSsdCount }}
          localSsdEncryptionMode: "{{ localSsdEncryptionMode }}"
          loggingConfig:
            variantConfig:
              variant: "{{ variant }}"
          machineType: "{{ machineType }}"
          maxRunDuration: "{{ maxRunDuration }}"
          metadata: "{{ metadata }}"
          minCpuPlatform: "{{ minCpuPlatform }}"
          nodeGroup: "{{ nodeGroup }}"
          nodeImageConfig:
            image: "{{ image }}"
            imageProject: "{{ imageProject }}"
          oauthScopes:
            - "{{ oauthScopes }}"
          preemptible: {{ preemptible }}
          reservationAffinity:
            consumeReservationType: "{{ consumeReservationType }}"
            key: "{{ key }}"
            values:
              - "{{ values }}"
          resourceLabels: "{{ resourceLabels }}"
          resourceManagerTags:
            tags: "{{ tags }}"
          sandboxConfig:
            type: "{{ type }}"
          secondaryBootDiskUpdateStrategy: "{{ secondaryBootDiskUpdateStrategy }}"
          secondaryBootDisks:
            - diskImage: "{{ diskImage }}"
              mode: "{{ mode }}"
          serviceAccount: "{{ serviceAccount }}"
          shieldedInstanceConfig:
            enableIntegrityMonitoring: {{ enableIntegrityMonitoring }}
            enableSecureBoot: {{ enableSecureBoot }}
          soleTenantConfig:
            minNodeCpus: {{ minNodeCpus }}
            nodeAffinities:
              - key: "{{ key }}"
                operator: "{{ operator }}"
                values: "{{ values }}"
          spot: {{ spot }}
          storagePools:
            - "{{ storagePools }}"
          tags:
            - "{{ tags }}"
          taintConfig:
            architectureTaintBehavior: "{{ architectureTaintBehavior }}"
          taints:
            - effect: "{{ effect }}"
              key: "{{ key }}"
              value: "{{ value }}"
          windowsNodeConfig:
            osVersion: "{{ osVersion }}"
          workloadMetadataConfig:
            mode: "{{ mode }}"
        nodeCreationConfig:
          nodeCreationMode: "{{ nodeCreationMode }}"
        nodeIpv4CidrSize: {{ nodeIpv4CidrSize }}
        nodePoolAutoConfig:
          linuxNodeConfig:
            accurateTimeConfig:
              enablePtpKvmTimeSync: {{ enablePtpKvmTimeSync }}
            cgroupMode: "{{ cgroupMode }}"
            customNodeInit:
              initScript:
                args: "{{ args }}"
                gcpSecretManagerSecretUri: "{{ gcpSecretManagerSecretUri }}"
                gcsGeneration: "{{ gcsGeneration }}"
                gcsUri: "{{ gcsUri }}"
            diskIoScheduler:
              nodeAttachedDiskIoScheduler: "{{ nodeAttachedDiskIoScheduler }}"
              nodeSystemIoScheduler: "{{ nodeSystemIoScheduler }}"
            hugepages:
              hugepageSize1g: {{ hugepageSize1g }}
              hugepageSize2m: {{ hugepageSize2m }}
            nodeKernelModuleLoading:
              policy: "{{ policy }}"
            nodeVfioConfig:
              dmaEntryLimit: {{ dmaEntryLimit }}
            swapConfig:
              bootDiskProfile:
                swapSizeGib: "{{ swapSizeGib }}"
                swapSizePercent: {{ swapSizePercent }}
              dedicatedLocalSsdProfile:
                diskCount: "{{ diskCount }}"
              enabled: {{ enabled }}
              encryptionConfig:
                disabled: {{ disabled }}
              ephemeralLocalSsdProfile:
                swapSizeGib: "{{ swapSizeGib }}"
                swapSizePercent: {{ swapSizePercent }}
            sysctls: "{{ sysctls }}"
            transparentHugepageDefrag: "{{ transparentHugepageDefrag }}"
            transparentHugepageEnabled: "{{ transparentHugepageEnabled }}"
          networkTags:
            tags:
              - "{{ tags }}"
          nodeKubeletConfig:
            allowedUnsafeSysctls:
              - "{{ allowedUnsafeSysctls }}"
            containerLogMaxFiles: {{ containerLogMaxFiles }}
            containerLogMaxSize: "{{ containerLogMaxSize }}"
            cpuCfsQuota: {{ cpuCfsQuota }}
            cpuCfsQuotaPeriod: "{{ cpuCfsQuotaPeriod }}"
            cpuManagerPolicy: "{{ cpuManagerPolicy }}"
            crashLoopBackOff:
              maxContainerRestartPeriod: "{{ maxContainerRestartPeriod }}"
            evictionMaxPodGracePeriodSeconds: {{ evictionMaxPodGracePeriodSeconds }}
            evictionMinimumReclaim:
              imagefsAvailable: "{{ imagefsAvailable }}"
              imagefsInodesFree: "{{ imagefsInodesFree }}"
              memoryAvailable: "{{ memoryAvailable }}"
              nodefsAvailable: "{{ nodefsAvailable }}"
              nodefsInodesFree: "{{ nodefsInodesFree }}"
              pidAvailable: "{{ pidAvailable }}"
            evictionSoft:
              imagefsAvailable: "{{ imagefsAvailable }}"
              imagefsInodesFree: "{{ imagefsInodesFree }}"
              memoryAvailable: "{{ memoryAvailable }}"
              nodefsAvailable: "{{ nodefsAvailable }}"
              nodefsInodesFree: "{{ nodefsInodesFree }}"
              pidAvailable: "{{ pidAvailable }}"
            evictionSoftGracePeriod:
              imagefsAvailable: "{{ imagefsAvailable }}"
              imagefsInodesFree: "{{ imagefsInodesFree }}"
              memoryAvailable: "{{ memoryAvailable }}"
              nodefsAvailable: "{{ nodefsAvailable }}"
              nodefsInodesFree: "{{ nodefsInodesFree }}"
              pidAvailable: "{{ pidAvailable }}"
            imageGcHighThresholdPercent: {{ imageGcHighThresholdPercent }}
            imageGcLowThresholdPercent: {{ imageGcLowThresholdPercent }}
            imageMaximumGcAge: "{{ imageMaximumGcAge }}"
            imageMinimumGcAge: "{{ imageMinimumGcAge }}"
            insecureKubeletReadonlyPortEnabled: {{ insecureKubeletReadonlyPortEnabled }}
            maxParallelImagePulls: {{ maxParallelImagePulls }}
            memoryManager:
              policy: "{{ policy }}"
            podPidsLimit: "{{ podPidsLimit }}"
            shutdownGracePeriodCriticalPodsSeconds: {{ shutdownGracePeriodCriticalPodsSeconds }}
            shutdownGracePeriodSeconds: {{ shutdownGracePeriodSeconds }}
            singleProcessOomKill: {{ singleProcessOomKill }}
            topologyManager:
              policy: "{{ policy }}"
              scope: "{{ scope }}"
          resourceManagerTags:
            tags: "{{ tags }}"
        nodePoolDefaults:
          nodeConfigDefaults:
            containerdConfig:
              privateRegistryAccessConfig:
                certificateAuthorityDomainConfig: "{{ certificateAuthorityDomainConfig }}"
                enabled: {{ enabled }}
              registryHosts:
                - hosts: "{{ hosts }}"
                  server: "{{ server }}"
              writableCgroups:
                enabled: {{ enabled }}
            gcfsConfig:
              enabled: {{ enabled }}
            loggingConfig:
              variantConfig:
                variant: "{{ variant }}"
            nodeKubeletConfig:
              allowedUnsafeSysctls:
                - "{{ allowedUnsafeSysctls }}"
              containerLogMaxFiles: {{ containerLogMaxFiles }}
              containerLogMaxSize: "{{ containerLogMaxSize }}"
              cpuCfsQuota: {{ cpuCfsQuota }}
              cpuCfsQuotaPeriod: "{{ cpuCfsQuotaPeriod }}"
              cpuManagerPolicy: "{{ cpuManagerPolicy }}"
              crashLoopBackOff:
                maxContainerRestartPeriod: "{{ maxContainerRestartPeriod }}"
              evictionMaxPodGracePeriodSeconds: {{ evictionMaxPodGracePeriodSeconds }}
              evictionMinimumReclaim:
                imagefsAvailable: "{{ imagefsAvailable }}"
                imagefsInodesFree: "{{ imagefsInodesFree }}"
                memoryAvailable: "{{ memoryAvailable }}"
                nodefsAvailable: "{{ nodefsAvailable }}"
                nodefsInodesFree: "{{ nodefsInodesFree }}"
                pidAvailable: "{{ pidAvailable }}"
              evictionSoft:
                imagefsAvailable: "{{ imagefsAvailable }}"
                imagefsInodesFree: "{{ imagefsInodesFree }}"
                memoryAvailable: "{{ memoryAvailable }}"
                nodefsAvailable: "{{ nodefsAvailable }}"
                nodefsInodesFree: "{{ nodefsInodesFree }}"
                pidAvailable: "{{ pidAvailable }}"
              evictionSoftGracePeriod:
                imagefsAvailable: "{{ imagefsAvailable }}"
                imagefsInodesFree: "{{ imagefsInodesFree }}"
                memoryAvailable: "{{ memoryAvailable }}"
                nodefsAvailable: "{{ nodefsAvailable }}"
                nodefsInodesFree: "{{ nodefsInodesFree }}"
                pidAvailable: "{{ pidAvailable }}"
              imageGcHighThresholdPercent: {{ imageGcHighThresholdPercent }}
              imageGcLowThresholdPercent: {{ imageGcLowThresholdPercent }}
              imageMaximumGcAge: "{{ imageMaximumGcAge }}"
              imageMinimumGcAge: "{{ imageMinimumGcAge }}"
              insecureKubeletReadonlyPortEnabled: {{ insecureKubeletReadonlyPortEnabled }}
              maxParallelImagePulls: {{ maxParallelImagePulls }}
              memoryManager:
                policy: "{{ policy }}"
              podPidsLimit: "{{ podPidsLimit }}"
              shutdownGracePeriodCriticalPodsSeconds: {{ shutdownGracePeriodCriticalPodsSeconds }}
              shutdownGracePeriodSeconds: {{ shutdownGracePeriodSeconds }}
              singleProcessOomKill: {{ singleProcessOomKill }}
              topologyManager:
                policy: "{{ policy }}"
                scope: "{{ scope }}"
        nodePools:
          - autopilotConfig:
              enabled: {{ enabled }}
            autoscaling:
              autoprovisioned: {{ autoprovisioned }}
              enabled: {{ enabled }}
              locationPolicy: "{{ locationPolicy }}"
              maxNodeCount: {{ maxNodeCount }}
              minNodeCount: {{ minNodeCount }}
              totalMaxNodeCount: {{ totalMaxNodeCount }}
              totalMinNodeCount: {{ totalMinNodeCount }}
            bestEffortProvisioning:
              enabled: {{ enabled }}
              minProvisionNodes: {{ minProvisionNodes }}
            conditions: "{{ conditions }}"
            config:
              accelerators:
                - acceleratorCount: "{{ acceleratorCount }}"
                  acceleratorType: "{{ acceleratorType }}"
                  gpuDriverInstallationConfig:
                    gpuDriverVersion: "{{ gpuDriverVersion }}"
                  gpuPartitionSize: "{{ gpuPartitionSize }}"
                  gpuSharingConfig:
                    gpuSharingStrategy: "{{ gpuSharingStrategy }}"
                    maxSharedClientsPerGpu: "{{ maxSharedClientsPerGpu }}"
              advancedMachineFeatures:
                enableNestedVirtualization: {{ enableNestedVirtualization }}
                performanceMonitoringUnit: "{{ performanceMonitoringUnit }}"
                threadsPerCore: "{{ threadsPerCore }}"
              bootDisk:
                diskType: "{{ diskType }}"
                provisionedIops: "{{ provisionedIops }}"
                provisionedThroughput: "{{ provisionedThroughput }}"
                sizeGb: "{{ sizeGb }}"
              bootDiskKmsKey: "{{ bootDiskKmsKey }}"
              confidentialNodes:
                confidentialInstanceType: "{{ confidentialInstanceType }}"
                enabled: {{ enabled }}
              consolidationDelay: "{{ consolidationDelay }}"
              containerdConfig:
                privateRegistryAccessConfig:
                  certificateAuthorityDomainConfig: "{{ certificateAuthorityDomainConfig }}"
                  enabled: {{ enabled }}
                registryHosts:
                  - hosts: "{{ hosts }}"
                    server: "{{ server }}"
                writableCgroups:
                  enabled: {{ enabled }}
              diskSizeGb: {{ diskSizeGb }}
              diskType: "{{ diskType }}"
              effectiveCgroupMode: "{{ effectiveCgroupMode }}"
              enableConfidentialStorage: {{ enableConfidentialStorage }}
              ephemeralStorageLocalSsdConfig:
                dataCacheCount: {{ dataCacheCount }}
                localSsdCount: {{ localSsdCount }}
              fastSocket:
                enabled: {{ enabled }}
              flexStart: {{ flexStart }}
              gcfsConfig:
                enabled: {{ enabled }}
              gpuDirectConfig:
                gpuDirectStrategy: "{{ gpuDirectStrategy }}"
              gvnic:
                enabled: {{ enabled }}
              imageType: "{{ imageType }}"
              kubeletConfig:
                allowedUnsafeSysctls:
                  - "{{ allowedUnsafeSysctls }}"
                containerLogMaxFiles: {{ containerLogMaxFiles }}
                containerLogMaxSize: "{{ containerLogMaxSize }}"
                cpuCfsQuota: {{ cpuCfsQuota }}
                cpuCfsQuotaPeriod: "{{ cpuCfsQuotaPeriod }}"
                cpuManagerPolicy: "{{ cpuManagerPolicy }}"
                crashLoopBackOff:
                  maxContainerRestartPeriod: "{{ maxContainerRestartPeriod }}"
                evictionMaxPodGracePeriodSeconds: {{ evictionMaxPodGracePeriodSeconds }}
                evictionMinimumReclaim:
                  imagefsAvailable: "{{ imagefsAvailable }}"
                  imagefsInodesFree: "{{ imagefsInodesFree }}"
                  memoryAvailable: "{{ memoryAvailable }}"
                  nodefsAvailable: "{{ nodefsAvailable }}"
                  nodefsInodesFree: "{{ nodefsInodesFree }}"
                  pidAvailable: "{{ pidAvailable }}"
                evictionSoft:
                  imagefsAvailable: "{{ imagefsAvailable }}"
                  imagefsInodesFree: "{{ imagefsInodesFree }}"
                  memoryAvailable: "{{ memoryAvailable }}"
                  nodefsAvailable: "{{ nodefsAvailable }}"
                  nodefsInodesFree: "{{ nodefsInodesFree }}"
                  pidAvailable: "{{ pidAvailable }}"
                evictionSoftGracePeriod:
                  imagefsAvailable: "{{ imagefsAvailable }}"
                  imagefsInodesFree: "{{ imagefsInodesFree }}"
                  memoryAvailable: "{{ memoryAvailable }}"
                  nodefsAvailable: "{{ nodefsAvailable }}"
                  nodefsInodesFree: "{{ nodefsInodesFree }}"
                  pidAvailable: "{{ pidAvailable }}"
                imageGcHighThresholdPercent: {{ imageGcHighThresholdPercent }}
                imageGcLowThresholdPercent: {{ imageGcLowThresholdPercent }}
                imageMaximumGcAge: "{{ imageMaximumGcAge }}"
                imageMinimumGcAge: "{{ imageMinimumGcAge }}"
                insecureKubeletReadonlyPortEnabled: {{ insecureKubeletReadonlyPortEnabled }}
                maxParallelImagePulls: {{ maxParallelImagePulls }}
                memoryManager:
                  policy: "{{ policy }}"
                podPidsLimit: "{{ podPidsLimit }}"
                shutdownGracePeriodCriticalPodsSeconds: {{ shutdownGracePeriodCriticalPodsSeconds }}
                shutdownGracePeriodSeconds: {{ shutdownGracePeriodSeconds }}
                singleProcessOomKill: {{ singleProcessOomKill }}
                topologyManager:
                  policy: "{{ policy }}"
                  scope: "{{ scope }}"
              labels: "{{ labels }}"
              linuxNodeConfig:
                accurateTimeConfig:
                  enablePtpKvmTimeSync: {{ enablePtpKvmTimeSync }}
                cgroupMode: "{{ cgroupMode }}"
                customNodeInit:
                  initScript: "{{ initScript }}"
                diskIoScheduler:
                  nodeAttachedDiskIoScheduler: "{{ nodeAttachedDiskIoScheduler }}"
                  nodeSystemIoScheduler: "{{ nodeSystemIoScheduler }}"
                hugepages:
                  hugepageSize1g: {{ hugepageSize1g }}
                  hugepageSize2m: {{ hugepageSize2m }}
                nodeKernelModuleLoading:
                  policy: "{{ policy }}"
                nodeVfioConfig:
                  dmaEntryLimit: {{ dmaEntryLimit }}
                swapConfig:
                  bootDiskProfile: "{{ bootDiskProfile }}"
                  dedicatedLocalSsdProfile: "{{ dedicatedLocalSsdProfile }}"
                  enabled: {{ enabled }}
                  encryptionConfig: "{{ encryptionConfig }}"
                  ephemeralLocalSsdProfile: "{{ ephemeralLocalSsdProfile }}"
                sysctls: "{{ sysctls }}"
                transparentHugepageDefrag: "{{ transparentHugepageDefrag }}"
                transparentHugepageEnabled: "{{ transparentHugepageEnabled }}"
              localNvmeSsdBlockConfig:
                localSsdCount: {{ localSsdCount }}
              localSsdCount: {{ localSsdCount }}
              localSsdEncryptionMode: "{{ localSsdEncryptionMode }}"
              loggingConfig:
                variantConfig:
                  variant: "{{ variant }}"
              machineType: "{{ machineType }}"
              maxRunDuration: "{{ maxRunDuration }}"
              metadata: "{{ metadata }}"
              minCpuPlatform: "{{ minCpuPlatform }}"
              nodeGroup: "{{ nodeGroup }}"
              nodeImageConfig:
                image: "{{ image }}"
                imageProject: "{{ imageProject }}"
              oauthScopes:
                - "{{ oauthScopes }}"
              preemptible: {{ preemptible }}
              reservationAffinity:
                consumeReservationType: "{{ consumeReservationType }}"
                key: "{{ key }}"
                values:
                  - "{{ values }}"
              resourceLabels: "{{ resourceLabels }}"
              resourceManagerTags:
                tags: "{{ tags }}"
              sandboxConfig:
                type: "{{ type }}"
              secondaryBootDiskUpdateStrategy: "{{ secondaryBootDiskUpdateStrategy }}"
              secondaryBootDisks:
                - diskImage: "{{ diskImage }}"
                  mode: "{{ mode }}"
              serviceAccount: "{{ serviceAccount }}"
              shieldedInstanceConfig:
                enableIntegrityMonitoring: {{ enableIntegrityMonitoring }}
                enableSecureBoot: {{ enableSecureBoot }}
              soleTenantConfig:
                minNodeCpus: {{ minNodeCpus }}
                nodeAffinities:
                  - key: "{{ key }}"
                    operator: "{{ operator }}"
                    values: "{{ values }}"
              spot: {{ spot }}
              storagePools:
                - "{{ storagePools }}"
              tags:
                - "{{ tags }}"
              taintConfig:
                architectureTaintBehavior: "{{ architectureTaintBehavior }}"
              taints:
                - effect: "{{ effect }}"
                  key: "{{ key }}"
                  value: "{{ value }}"
              windowsNodeConfig:
                osVersion: "{{ osVersion }}"
              workloadMetadataConfig:
                mode: "{{ mode }}"
            etag: "{{ etag }}"
            initialNodeCount: {{ initialNodeCount }}
            instanceGroupUrls: "{{ instanceGroupUrls }}"
            kubeletCertInfo:
              nonTpmBootstrapCertExpireTime: "{{ nonTpmBootstrapCertExpireTime }}"
              tpmBootstrapCertExpireTime: "{{ tpmBootstrapCertExpireTime }}"
            locations: "{{ locations }}"
            maintenancePolicy:
              exclusionUntilEndOfSupport:
                enabled: {{ enabled }}
                endTime: "{{ endTime }}"
                startTime: "{{ startTime }}"
            management:
              autoRepair: {{ autoRepair }}
              autoUpgrade: {{ autoUpgrade }}
              upgradeOptions:
                autoUpgradeStartTime: "{{ autoUpgradeStartTime }}"
                description: "{{ description }}"
            maxPodsConstraint:
              maxPodsPerNode: "{{ maxPodsPerNode }}"
            name: "{{ name }}"
            networkConfig:
              acceleratorNetworkProfile: "{{ acceleratorNetworkProfile }}"
              additionalNodeNetworkConfigs:
                - network: "{{ network }}"
                  subnetwork: "{{ subnetwork }}"
              additionalPodNetworkConfigs:
                - maxPodsPerNode:
                    maxPodsPerNode: "{{ maxPodsPerNode }}"
                  networkAttachment: "{{ networkAttachment }}"
                  secondaryPodRange: "{{ secondaryPodRange }}"
                  subnetwork: "{{ subnetwork }}"
              createPodRange: {{ createPodRange }}
              enablePrivateNodes: {{ enablePrivateNodes }}
              network: "{{ network }}"
              networkPerformanceConfig:
                totalEgressBandwidthTier: "{{ totalEgressBandwidthTier }}"
              networkTierConfig:
                networkTier: "{{ networkTier }}"
              podCidrOverprovisionConfig:
                disable: {{ disable }}
              podIpv4CidrBlock: "{{ podIpv4CidrBlock }}"
              podIpv4RangeUtilization: {{ podIpv4RangeUtilization }}
              podRange: "{{ podRange }}"
              subnetwork: "{{ subnetwork }}"
            nodeDrainConfig:
              graceTerminationDuration: "{{ graceTerminationDuration }}"
              pdbTimeoutDuration: "{{ pdbTimeoutDuration }}"
              respectPdbDuringNodePoolDeletion: {{ respectPdbDuringNodePoolDeletion }}
            placementPolicy:
              policyName: "{{ policyName }}"
              tpuTopology: "{{ tpuTopology }}"
              type: "{{ type }}"
            podIpv4CidrSize: {{ podIpv4CidrSize }}
            queuedProvisioning:
              enabled: {{ enabled }}
            selfLink: "{{ selfLink }}"
            status: "{{ status }}"
            statusMessage: "{{ statusMessage }}"
            updateInfo:
              blueGreenInfo:
                blueInstanceGroupUrls:
                  - "{{ blueInstanceGroupUrls }}"
                bluePoolDeletionStartTime: "{{ bluePoolDeletionStartTime }}"
                greenInstanceGroupUrls:
                  - "{{ greenInstanceGroupUrls }}"
                greenPoolVersion: "{{ greenPoolVersion }}"
                phase: "{{ phase }}"
            upgradeSettings:
              blueGreenSettings:
                autoscaledRolloutPolicy:
                  waitForDrainDuration: "{{ waitForDrainDuration }}"
                nodePoolSoakDuration: "{{ nodePoolSoakDuration }}"
                standardRolloutPolicy:
                  batchNodeCount: {{ batchNodeCount }}
                  batchPercentage: {{ batchPercentage }}
                  batchSoakDuration: "{{ batchSoakDuration }}"
              maxSurge: {{ maxSurge }}
              maxUnavailable: {{ maxUnavailable }}
              strategy: "{{ strategy }}"
            version: "{{ version }}"
        notificationConfig:
          pubsub:
            enabled: {{ enabled }}
            filter:
              eventType:
                - "{{ eventType }}"
            topic: "{{ topic }}"
        parentProductConfig:
          labels: "{{ labels }}"
          productName: "{{ productName }}"
        podAutoscaling:
          hpaProfile: "{{ hpaProfile }}"
        privateClusterConfig:
          enablePrivateEndpoint: {{ enablePrivateEndpoint }}
          enablePrivateNodes: {{ enablePrivateNodes }}
          masterGlobalAccessConfig:
            enabled: {{ enabled }}
          masterIpv4CidrBlock: "{{ masterIpv4CidrBlock }}"
          peeringName: "{{ peeringName }}"
          privateEndpoint: "{{ privateEndpoint }}"
          privateEndpointSubnetwork: "{{ privateEndpointSubnetwork }}"
          publicEndpoint: "{{ publicEndpoint }}"
        rbacBindingConfig:
          enableInsecureBindingSystemAuthenticated: {{ enableInsecureBindingSystemAuthenticated }}
          enableInsecureBindingSystemUnauthenticated: {{ enableInsecureBindingSystemUnauthenticated }}
        releaseChannel:
          channel: "{{ channel }}"
        resourceLabels: "{{ resourceLabels }}"
        resourceUsageExportConfig:
          bigqueryDestination:
            datasetId: "{{ datasetId }}"
          consumptionMeteringConfig:
            enabled: {{ enabled }}
          enableNetworkEgressMetering: {{ enableNetworkEgressMetering }}
        rollbackSafeUpgrade:
          controlPlaneSoakDuration: "{{ controlPlaneSoakDuration }}"
        satisfiesPzi: {{ satisfiesPzi }}
        satisfiesPzs: {{ satisfiesPzs }}
        scheduleUpgradeConfig:
          enabled: {{ enabled }}
        secretManagerConfig:
          enabled: {{ enabled }}
          rotationConfig:
            enabled: {{ enabled }}
            rotationInterval: "{{ rotationInterval }}"
        secretSyncConfig:
          enabled: {{ enabled }}
          rotationConfig:
            enabled: {{ enabled }}
            rotationInterval: "{{ rotationInterval }}"
        securityPostureConfig:
          mode: "{{ mode }}"
          vulnerabilityMode: "{{ vulnerabilityMode }}"
        selfLink: "{{ selfLink }}"
        servicesIpv4Cidr: "{{ servicesIpv4Cidr }}"
        shieldedNodes:
          enabled: {{ enabled }}
        status: "{{ status }}"
        statusMessage: "{{ statusMessage }}"
        subnetwork: "{{ subnetwork }}"
        tpuIpv4CidrBlock: "{{ tpuIpv4CidrBlock }}"
        userManagedKeysConfig:
          aggregationCa: "{{ aggregationCa }}"
          clusterCa: "{{ clusterCa }}"
          controlPlaneDiskEncryptionKey: "{{ controlPlaneDiskEncryptionKey }}"
          controlPlaneDiskEncryptionKeyVersions:
            - "{{ controlPlaneDiskEncryptionKeyVersions }}"
          etcdApiCa: "{{ etcdApiCa }}"
          etcdPeerCa: "{{ etcdPeerCa }}"
          gkeopsEtcdBackupEncryptionKey: "{{ gkeopsEtcdBackupEncryptionKey }}"
          serviceAccountSigningKeys:
            - "{{ serviceAccountSigningKeys }}"
          serviceAccountVerificationKeys:
            - "{{ serviceAccountVerificationKeys }}"
        verticalPodAutoscaling:
          enabled: {{ enabled }}
        workloadIdentityConfig:
          workloadPool: "{{ workloadPool }}"
        zone: "{{ zone }}"
    - name: parent
      value: "{{ parent }}"
      description: |
        The parent (project and location) where the cluster will be created. Specified in the format \`projects/*/locations/*\`.
    - name: projectId
      value: "{{ projectId }}"
      description: |
        Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
    - name: zone
      value: "{{ zone }}"
      description: |
        Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="projects_locations_clusters_update"
    values={[
        { label: 'projects_locations_clusters_update', value: 'projects_locations_clusters_update' },
        { label: 'projects_zones_clusters_update', value: 'projects_zones_clusters_update' }
    ]}
>
<TabItem value="projects_locations_clusters_update">

Updates the settings of a specific cluster.

```sql
REPLACE google.container.clusters
SET 
data__clusterId = '{{ clusterId }}',
data__name = '{{ name }}',
data__projectId = '{{ projectId }}',
data__update = '{{ update }}',
data__zone = '{{ zone }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
RETURNING
name,
clusterConditions,
detail,
endTime,
error,
location,
nodepoolConditions,
operationType,
progress,
selfLink,
startTime,
status,
statusMessage,
targetLink,
zone;
```
</TabItem>
<TabItem value="projects_zones_clusters_update">

Updates the settings of a specific cluster.

```sql
REPLACE google.container.clusters
SET 
data__clusterId = '{{ clusterId }}',
data__name = '{{ name }}',
data__projectId = '{{ projectId }}',
data__update = '{{ update }}',
data__zone = '{{ zone }}'
WHERE 
projectId = '{{ projectId }}' --required
AND zone = '{{ zone }}' --required
AND clusterId = '{{ clusterId }}' --required
RETURNING
name,
clusterConditions,
detail,
endTime,
error,
location,
nodepoolConditions,
operationType,
progress,
selfLink,
startTime,
status,
statusMessage,
targetLink,
zone;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_clusters_delete"
    values={[
        { label: 'projects_locations_clusters_delete', value: 'projects_locations_clusters_delete' },
        { label: 'projects_zones_clusters_delete', value: 'projects_zones_clusters_delete' }
    ]}
>
<TabItem value="projects_locations_clusters_delete">

Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.

```sql
DELETE FROM google.container.clusters
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND clustersId = '{{ clustersId }}' --required
AND clusterId = '{{ clusterId }}'
AND projectId = '{{ projectId }}'
AND zone = '{{ zone }}'
;
```
</TabItem>
<TabItem value="projects_zones_clusters_delete">

Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.

```sql
DELETE FROM google.container.clusters
WHERE projectId = '{{ projectId }}' --required
AND zone = '{{ zone }}' --required
AND clusterId = '{{ clusterId }}' --required
AND name = '{{ name }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_locations_clusters_check_autopilot_compatibility"
    values={[
        { label: 'projects_locations_clusters_check_autopilot_compatibility', value: 'projects_locations_clusters_check_autopilot_compatibility' },
        { label: 'projects_locations_clusters_complete_control_plane_upgrade', value: 'projects_locations_clusters_complete_control_plane_upgrade' },
        { label: 'projects_locations_clusters_complete_ip_rotation', value: 'projects_locations_clusters_complete_ip_rotation' },
        { label: 'projects_locations_clusters_set_addons', value: 'projects_locations_clusters_set_addons' },
        { label: 'projects_locations_clusters_set_legacy_abac', value: 'projects_locations_clusters_set_legacy_abac' },
        { label: 'projects_locations_clusters_set_locations', value: 'projects_locations_clusters_set_locations' },
        { label: 'projects_locations_clusters_set_logging', value: 'projects_locations_clusters_set_logging' },
        { label: 'projects_locations_clusters_set_maintenance_policy', value: 'projects_locations_clusters_set_maintenance_policy' },
        { label: 'projects_locations_clusters_set_master_auth', value: 'projects_locations_clusters_set_master_auth' },
        { label: 'projects_locations_clusters_set_monitoring', value: 'projects_locations_clusters_set_monitoring' },
        { label: 'projects_locations_clusters_set_network_policy', value: 'projects_locations_clusters_set_network_policy' },
        { label: 'projects_locations_clusters_set_resource_labels', value: 'projects_locations_clusters_set_resource_labels' },
        { label: 'projects_locations_clusters_start_ip_rotation', value: 'projects_locations_clusters_start_ip_rotation' },
        { label: 'projects_locations_clusters_update_master', value: 'projects_locations_clusters_update_master' },
        { label: 'projects_zones_clusters_addons', value: 'projects_zones_clusters_addons' },
        { label: 'projects_zones_clusters_complete_control_plane_upgrade', value: 'projects_zones_clusters_complete_control_plane_upgrade' },
        { label: 'projects_zones_clusters_complete_ip_rotation', value: 'projects_zones_clusters_complete_ip_rotation' },
        { label: 'projects_zones_clusters_legacy_abac', value: 'projects_zones_clusters_legacy_abac' },
        { label: 'projects_zones_clusters_locations', value: 'projects_zones_clusters_locations' },
        { label: 'projects_zones_clusters_logging', value: 'projects_zones_clusters_logging' },
        { label: 'projects_zones_clusters_master', value: 'projects_zones_clusters_master' },
        { label: 'projects_zones_clusters_monitoring', value: 'projects_zones_clusters_monitoring' },
        { label: 'projects_zones_clusters_resource_labels', value: 'projects_zones_clusters_resource_labels' },
        { label: 'projects_zones_clusters_set_maintenance_policy', value: 'projects_zones_clusters_set_maintenance_policy' },
        { label: 'projects_zones_clusters_set_master_auth', value: 'projects_zones_clusters_set_master_auth' },
        { label: 'projects_zones_clusters_set_network_policy', value: 'projects_zones_clusters_set_network_policy' },
        { label: 'projects_zones_clusters_start_ip_rotation', value: 'projects_zones_clusters_start_ip_rotation' }
    ]}
>
<TabItem value="projects_locations_clusters_check_autopilot_compatibility">

Checks the cluster compatibility with Autopilot mode, and returns a list of compatibility issues.

```sql
EXEC google.container.clusters.projects_locations_clusters_check_autopilot_compatibility 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_clusters_complete_control_plane_upgrade">

CompleteControlPlaneUpgrade completes the rollback-safe upgrade by performing the step two upgrade for a specific cluster.

```sql
EXEC google.container.clusters.projects_locations_clusters_complete_control_plane_upgrade 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"version": "{{ version }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_clusters_complete_ip_rotation">

Completes master IP rotation.

```sql
EXEC google.container.clusters.projects_locations_clusters_complete_ip_rotation 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_clusters_set_addons">

Sets the addons for a specific cluster.

```sql
EXEC google.container.clusters.projects_locations_clusters_set_addons 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"addonsConfig": "{{ addonsConfig }}", 
"clusterId": "{{ clusterId }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_clusters_set_legacy_abac">

Enables or disables the ABAC authorization mechanism on a cluster.

```sql
EXEC google.container.clusters.projects_locations_clusters_set_legacy_abac 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"enabled": {{ enabled }}, 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_clusters_set_locations">

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.

```sql
EXEC google.container.clusters.projects_locations_clusters_set_locations 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"locations": "{{ locations }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_clusters_set_logging">

Sets the logging service for a specific cluster.

```sql
EXEC google.container.clusters.projects_locations_clusters_set_logging 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"loggingService": "{{ loggingService }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_clusters_set_maintenance_policy">

Sets the maintenance policy for a cluster.

```sql
EXEC google.container.clusters.projects_locations_clusters_set_maintenance_policy 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"maintenancePolicy": "{{ maintenancePolicy }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_clusters_set_master_auth">

Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.

```sql
EXEC google.container.clusters.projects_locations_clusters_set_master_auth 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"action": "{{ action }}", 
"clusterId": "{{ clusterId }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"update": "{{ update }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_clusters_set_monitoring">

Sets the monitoring service for a specific cluster.

```sql
EXEC google.container.clusters.projects_locations_clusters_set_monitoring 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"monitoringService": "{{ monitoringService }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_clusters_set_network_policy">

Enables or disables Network Policy for a cluster.

```sql
EXEC google.container.clusters.projects_locations_clusters_set_network_policy 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"name": "{{ name }}", 
"networkPolicy": "{{ networkPolicy }}", 
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_clusters_set_resource_labels">

Sets labels on a cluster.

```sql
EXEC google.container.clusters.projects_locations_clusters_set_resource_labels 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"labelFingerprint": "{{ labelFingerprint }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"resourceLabels": "{{ resourceLabels }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_clusters_start_ip_rotation">

Starts master IP rotation.

```sql
EXEC google.container.clusters.projects_locations_clusters_start_ip_rotation 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"rotateCredentials": {{ rotateCredentials }}, 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_locations_clusters_update_master">

Updates the master for a specific cluster.

```sql
EXEC google.container.clusters.projects_locations_clusters_update_master 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"masterVersion": "{{ masterVersion }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_zones_clusters_addons">

Sets the addons for a specific cluster.

```sql
EXEC google.container.clusters.projects_zones_clusters_addons 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"addonsConfig": "{{ addonsConfig }}", 
"clusterId": "{{ clusterId }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_zones_clusters_complete_control_plane_upgrade">

CompleteControlPlaneUpgrade completes the rollback-safe upgrade by performing the step two upgrade for a specific cluster.

```sql
EXEC google.container.clusters.projects_zones_clusters_complete_control_plane_upgrade 
@projectsId='{{ projectsId }}' --required, 
@zonesId='{{ zonesId }}' --required, 
@clustersId='{{ clustersId }}' --required 
@@json=
'{
"version": "{{ version }}"
}'
;
```
</TabItem>
<TabItem value="projects_zones_clusters_complete_ip_rotation">

Completes master IP rotation.

```sql
EXEC google.container.clusters.projects_zones_clusters_complete_ip_rotation 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_zones_clusters_legacy_abac">

Enables or disables the ABAC authorization mechanism on a cluster.

```sql
EXEC google.container.clusters.projects_zones_clusters_legacy_abac 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"enabled": {{ enabled }}, 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_zones_clusters_locations">

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.

```sql
EXEC google.container.clusters.projects_zones_clusters_locations 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"locations": "{{ locations }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_zones_clusters_logging">

Sets the logging service for a specific cluster.

```sql
EXEC google.container.clusters.projects_zones_clusters_logging 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"loggingService": "{{ loggingService }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_zones_clusters_master">

Updates the master for a specific cluster.

```sql
EXEC google.container.clusters.projects_zones_clusters_master 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"masterVersion": "{{ masterVersion }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_zones_clusters_monitoring">

Sets the monitoring service for a specific cluster.

```sql
EXEC google.container.clusters.projects_zones_clusters_monitoring 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"monitoringService": "{{ monitoringService }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_zones_clusters_resource_labels">

Sets labels on a cluster.

```sql
EXEC google.container.clusters.projects_zones_clusters_resource_labels 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"labelFingerprint": "{{ labelFingerprint }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"resourceLabels": "{{ resourceLabels }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_zones_clusters_set_maintenance_policy">

Sets the maintenance policy for a cluster.

```sql
EXEC google.container.clusters.projects_zones_clusters_set_maintenance_policy 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"maintenancePolicy": "{{ maintenancePolicy }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_zones_clusters_set_master_auth">

Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.

```sql
EXEC google.container.clusters.projects_zones_clusters_set_master_auth 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"action": "{{ action }}", 
"clusterId": "{{ clusterId }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"update": "{{ update }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_zones_clusters_set_network_policy">

Enables or disables Network Policy for a cluster.

```sql
EXEC google.container.clusters.projects_zones_clusters_set_network_policy 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"name": "{{ name }}", 
"networkPolicy": "{{ networkPolicy }}", 
"projectId": "{{ projectId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="projects_zones_clusters_start_ip_rotation">

Starts master IP rotation.

```sql
EXEC google.container.clusters.projects_zones_clusters_start_ip_rotation 
@projectId='{{ projectId }}' --required, 
@zone='{{ zone }}' --required, 
@clusterId='{{ clusterId }}' --required 
@@json=
'{
"clusterId": "{{ clusterId }}", 
"name": "{{ name }}", 
"projectId": "{{ projectId }}", 
"rotateCredentials": {{ rotateCredentials }}, 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
</Tabs>
