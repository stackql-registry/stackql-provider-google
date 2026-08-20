--- 
title: versions
hide_title: false
hide_table_of_contents: false
keywords:
  - versions
  - appengine
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

Creates, updates, deletes, gets or lists a <code>versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.appengine.versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
    <td>Relative name of the version within the service. Example: v1. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names: "default", "latest", and any name with the prefix "ah-".</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. Full path to the Version resource in the API. Example: apps/myapp/services/default/versions/v1.@OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="apiConfig" /></td>
    <td><code>object</code></td>
    <td>Serving configuration for Google Cloud Endpoints (https://cloud.google.com/endpoints).Only returned in GET requests if view=FULL is set. (id: ApiConfigHandler)</td>
</tr>
<tr>
    <td><CopyableCode code="appEngineApis" /></td>
    <td><code>boolean</code></td>
    <td>Allows App Engine second generation runtimes to access the legacy bundled services.</td>
</tr>
<tr>
    <td><CopyableCode code="appEngineBundledServices" /></td>
    <td><code>array</code></td>
    <td>List of specific App Engine Bundled Services that are enabled for this Version.</td>
</tr>
<tr>
    <td><CopyableCode code="automaticScaling" /></td>
    <td><code>object</code></td>
    <td>Automatic scaling is based on request rate, response latencies, and other application metrics. Instances are dynamically created and destroyed as needed in order to handle traffic. (id: AutomaticScaling)</td>
</tr>
<tr>
    <td><CopyableCode code="basicScaling" /></td>
    <td><code>object</code></td>
    <td>A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity. (id: BasicScaling)</td>
</tr>
<tr>
    <td><CopyableCode code="betaSettings" /></td>
    <td><code>object</code></td>
    <td>Metadata settings that are supplied to this version to enable beta runtime features.</td>
</tr>
<tr>
    <td><CopyableCode code="buildEnvVariables" /></td>
    <td><code>object</code></td>
    <td>Environment variables available to the build environment.Only returned in GET requests if view=FULL is set.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time that this version was created.@OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the user who created this version.@OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="defaultExpiration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Duration that static files should be cached by web proxies and browsers. Only applicable if the corresponding StaticFilesHandler (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StaticFilesHandler) does not specify its own expiration time.Only returned in GET requests if view=FULL is set.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>object</code></td>
    <td>Code and application artifacts that make up this version.Only returned in GET requests if view=FULL is set. (id: Deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="diskUsageBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Total size in bytes of all the files that are included in this version and currently hosted on the App Engine disk.@OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="endpointsApiService" /></td>
    <td><code>object</code></td>
    <td>Cloud Endpoints configuration.If endpoints_api_service is set, the Cloud Endpoints Extensible Service Proxy will be provided to serve the API implemented by the app. (id: EndpointsApiService)</td>
</tr>
<tr>
    <td><CopyableCode code="entrypoint" /></td>
    <td><code>object</code></td>
    <td>The entrypoint for the application. (id: Entrypoint)</td>
</tr>
<tr>
    <td><CopyableCode code="env" /></td>
    <td><code>string</code></td>
    <td>App Engine execution environment for this version.Defaults to standard.</td>
</tr>
<tr>
    <td><CopyableCode code="envVariables" /></td>
    <td><code>object</code></td>
    <td>Environment variables available to the application.Only returned in GET requests if view=FULL is set.</td>
</tr>
<tr>
    <td><CopyableCode code="errorHandlers" /></td>
    <td><code>array</code></td>
    <td>Custom static error pages. Limited to 10KB per page.Only returned in GET requests if view=FULL is set.</td>
</tr>
<tr>
    <td><CopyableCode code="flexibleRuntimeSettings" /></td>
    <td><code>object</code></td>
    <td>Settings for App Engine flexible runtimes. (id: FlexibleRuntimeSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="generatedCustomerMetadata" /></td>
    <td><code>object</code></td>
    <td>Additional Google Generated Customer Metadata, this field won't be provided by default and can be requested by setting the IncludeExtraData field in GetVersionRequest</td>
</tr>
<tr>
    <td><CopyableCode code="handlers" /></td>
    <td><code>array</code></td>
    <td>An ordered list of URL-matching patterns that should be applied to incoming requests. The first matching URL handles the request and other request handlers are not attempted.Only returned in GET requests if view=FULL is set.</td>
</tr>
<tr>
    <td><CopyableCode code="healthCheck" /></td>
    <td><code>object</code></td>
    <td>Configures health checking for instances. Unhealthy instances are stopped and replaced with new instances. Only applicable in the App Engine flexible environment. (id: HealthCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="inboundServices" /></td>
    <td><code>array</code></td>
    <td>Before an application can receive email or XMPP messages, the application must be configured to enable the service.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceClass" /></td>
    <td><code>string</code></td>
    <td>Instance class that is used to run this version. Valid values are: AutomaticScaling: F1, F2, F4, F4_1G ManualScaling or BasicScaling: B1, B2, B4, B8, B4_1GDefaults to F1 for AutomaticScaling and B1 for ManualScaling or BasicScaling.</td>
</tr>
<tr>
    <td><CopyableCode code="libraries" /></td>
    <td><code>array</code></td>
    <td>Configuration for third-party Python runtime libraries that are required by the application.Only returned in GET requests if view=FULL is set.</td>
</tr>
<tr>
    <td><CopyableCode code="livenessCheck" /></td>
    <td><code>object</code></td>
    <td>Configures liveness health checking for instances. Unhealthy instances are stopped and replaced with new instances (id: LivenessCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="manualScaling" /></td>
    <td><code>object</code></td>
    <td>A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time. Manually scaled versions are sometimes referred to as "backends". (id: ManualScaling)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>object</code></td>
    <td>Extra network settings. Only applicable in the App Engine flexible environment. (id: Network)</td>
</tr>
<tr>
    <td><CopyableCode code="nobuildFilesRegex" /></td>
    <td><code>string</code></td>
    <td>Files that match this pattern will not be built into this version. Only applicable for Go runtimes.Only returned in GET requests if view=FULL is set.</td>
</tr>
<tr>
    <td><CopyableCode code="readinessCheck" /></td>
    <td><code>object</code></td>
    <td>Configures readiness health checking for instances. Unhealthy instances are not put into the backend traffic rotation. (id: ReadinessCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>object</code></td>
    <td>Machine resources for this version. Only applicable in the App Engine flexible environment. (id: Resources)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime" /></td>
    <td><code>string</code></td>
    <td>Desired runtime. Example: python27.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeApiVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the API in the given runtime environment. Please see the app.yaml reference for valid values at https://cloud.google.com/appengine/docs/standard//config/appref</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeChannel" /></td>
    <td><code>string</code></td>
    <td>The channel of the runtime to use. Only available for some runtimes. Defaults to the default channel.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeMainExecutablePath" /></td>
    <td><code>string</code></td>
    <td>The path or name of the app's main executable.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.</td>
</tr>
<tr>
    <td><CopyableCode code="servingStatus" /></td>
    <td><code>string</code></td>
    <td>Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.SERVING_STATUS_UNSPECIFIED is an invalid value. Defaults to SERVING. (SERVING_STATUS_UNSPECIFIED, SERVING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="threadsafe" /></td>
    <td><code>boolean</code></td>
    <td>Whether multiple requests can be dispatched to this version at once.</td>
</tr>
<tr>
    <td><CopyableCode code="versionUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. Serving URL for this version. Example: "https://myversion-dot-myservice-dot-myapp.appspot.com"@OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="vm" /></td>
    <td><code>boolean</code></td>
    <td>Whether to deploy this version in a container on a virtual machine.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcAccessConnector" /></td>
    <td><code>object</code></td>
    <td>Enables VPC connectivity for standard apps. (id: VpcAccessConnector)</td>
</tr>
<tr>
    <td><CopyableCode code="zones" /></td>
    <td><code>array</code></td>
    <td>The Google Compute Engine zones that are supported by this version in the App Engine flexible environment. Deprecated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>Relative name of the version within the service. Example: v1. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names: "default", "latest", and any name with the prefix "ah-".</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Output only. Full path to the Version resource in the API. Example: apps/myapp/services/default/versions/v1.@OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="apiConfig" /></td>
    <td><code>object</code></td>
    <td>Serving configuration for Google Cloud Endpoints (https://cloud.google.com/endpoints).Only returned in GET requests if view=FULL is set. (id: ApiConfigHandler)</td>
</tr>
<tr>
    <td><CopyableCode code="appEngineApis" /></td>
    <td><code>boolean</code></td>
    <td>Allows App Engine second generation runtimes to access the legacy bundled services.</td>
</tr>
<tr>
    <td><CopyableCode code="appEngineBundledServices" /></td>
    <td><code>array</code></td>
    <td>List of specific App Engine Bundled Services that are enabled for this Version.</td>
</tr>
<tr>
    <td><CopyableCode code="automaticScaling" /></td>
    <td><code>object</code></td>
    <td>Automatic scaling is based on request rate, response latencies, and other application metrics. Instances are dynamically created and destroyed as needed in order to handle traffic. (id: AutomaticScaling)</td>
</tr>
<tr>
    <td><CopyableCode code="basicScaling" /></td>
    <td><code>object</code></td>
    <td>A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity. (id: BasicScaling)</td>
</tr>
<tr>
    <td><CopyableCode code="betaSettings" /></td>
    <td><code>object</code></td>
    <td>Metadata settings that are supplied to this version to enable beta runtime features.</td>
</tr>
<tr>
    <td><CopyableCode code="buildEnvVariables" /></td>
    <td><code>object</code></td>
    <td>Environment variables available to the build environment.Only returned in GET requests if view=FULL is set.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Time that this version was created.@OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>Output only. Email address of the user who created this version.@OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="defaultExpiration" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Duration that static files should be cached by web proxies and browsers. Only applicable if the corresponding StaticFilesHandler (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StaticFilesHandler) does not specify its own expiration time.Only returned in GET requests if view=FULL is set.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>object</code></td>
    <td>Code and application artifacts that make up this version.Only returned in GET requests if view=FULL is set. (id: Deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="diskUsageBytes" /></td>
    <td><code>string (int64)</code></td>
    <td>Output only. Total size in bytes of all the files that are included in this version and currently hosted on the App Engine disk.@OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="endpointsApiService" /></td>
    <td><code>object</code></td>
    <td>Cloud Endpoints configuration.If endpoints_api_service is set, the Cloud Endpoints Extensible Service Proxy will be provided to serve the API implemented by the app. (id: EndpointsApiService)</td>
</tr>
<tr>
    <td><CopyableCode code="entrypoint" /></td>
    <td><code>object</code></td>
    <td>The entrypoint for the application. (id: Entrypoint)</td>
</tr>
<tr>
    <td><CopyableCode code="env" /></td>
    <td><code>string</code></td>
    <td>App Engine execution environment for this version.Defaults to standard.</td>
</tr>
<tr>
    <td><CopyableCode code="envVariables" /></td>
    <td><code>object</code></td>
    <td>Environment variables available to the application.Only returned in GET requests if view=FULL is set.</td>
</tr>
<tr>
    <td><CopyableCode code="errorHandlers" /></td>
    <td><code>array</code></td>
    <td>Custom static error pages. Limited to 10KB per page.Only returned in GET requests if view=FULL is set.</td>
</tr>
<tr>
    <td><CopyableCode code="flexibleRuntimeSettings" /></td>
    <td><code>object</code></td>
    <td>Settings for App Engine flexible runtimes. (id: FlexibleRuntimeSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="generatedCustomerMetadata" /></td>
    <td><code>object</code></td>
    <td>Additional Google Generated Customer Metadata, this field won't be provided by default and can be requested by setting the IncludeExtraData field in GetVersionRequest</td>
</tr>
<tr>
    <td><CopyableCode code="handlers" /></td>
    <td><code>array</code></td>
    <td>An ordered list of URL-matching patterns that should be applied to incoming requests. The first matching URL handles the request and other request handlers are not attempted.Only returned in GET requests if view=FULL is set.</td>
</tr>
<tr>
    <td><CopyableCode code="healthCheck" /></td>
    <td><code>object</code></td>
    <td>Configures health checking for instances. Unhealthy instances are stopped and replaced with new instances. Only applicable in the App Engine flexible environment. (id: HealthCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="inboundServices" /></td>
    <td><code>array</code></td>
    <td>Before an application can receive email or XMPP messages, the application must be configured to enable the service.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceClass" /></td>
    <td><code>string</code></td>
    <td>Instance class that is used to run this version. Valid values are: AutomaticScaling: F1, F2, F4, F4_1G ManualScaling or BasicScaling: B1, B2, B4, B8, B4_1GDefaults to F1 for AutomaticScaling and B1 for ManualScaling or BasicScaling.</td>
</tr>
<tr>
    <td><CopyableCode code="libraries" /></td>
    <td><code>array</code></td>
    <td>Configuration for third-party Python runtime libraries that are required by the application.Only returned in GET requests if view=FULL is set.</td>
</tr>
<tr>
    <td><CopyableCode code="livenessCheck" /></td>
    <td><code>object</code></td>
    <td>Configures liveness health checking for instances. Unhealthy instances are stopped and replaced with new instances (id: LivenessCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="manualScaling" /></td>
    <td><code>object</code></td>
    <td>A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time. Manually scaled versions are sometimes referred to as "backends". (id: ManualScaling)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>object</code></td>
    <td>Extra network settings. Only applicable in the App Engine flexible environment. (id: Network)</td>
</tr>
<tr>
    <td><CopyableCode code="nobuildFilesRegex" /></td>
    <td><code>string</code></td>
    <td>Files that match this pattern will not be built into this version. Only applicable for Go runtimes.Only returned in GET requests if view=FULL is set.</td>
</tr>
<tr>
    <td><CopyableCode code="readinessCheck" /></td>
    <td><code>object</code></td>
    <td>Configures readiness health checking for instances. Unhealthy instances are not put into the backend traffic rotation. (id: ReadinessCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>object</code></td>
    <td>Machine resources for this version. Only applicable in the App Engine flexible environment. (id: Resources)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime" /></td>
    <td><code>string</code></td>
    <td>Desired runtime. Example: python27.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeApiVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the API in the given runtime environment. Please see the app.yaml reference for valid values at https://cloud.google.com/appengine/docs/standard//config/appref</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeChannel" /></td>
    <td><code>string</code></td>
    <td>The channel of the runtime to use. Only available for some runtimes. Defaults to the default channel.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeMainExecutablePath" /></td>
    <td><code>string</code></td>
    <td>The path or name of the app's main executable.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.</td>
</tr>
<tr>
    <td><CopyableCode code="servingStatus" /></td>
    <td><code>string</code></td>
    <td>Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.SERVING_STATUS_UNSPECIFIED is an invalid value. Defaults to SERVING. (SERVING_STATUS_UNSPECIFIED, SERVING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="threadsafe" /></td>
    <td><code>boolean</code></td>
    <td>Whether multiple requests can be dispatched to this version at once.</td>
</tr>
<tr>
    <td><CopyableCode code="versionUrl" /></td>
    <td><code>string</code></td>
    <td>Output only. Serving URL for this version. Example: "https://myversion-dot-myservice-dot-myapp.appspot.com"@OutputOnly</td>
</tr>
<tr>
    <td><CopyableCode code="vm" /></td>
    <td><code>boolean</code></td>
    <td>Whether to deploy this version in a container on a virtual machine.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcAccessConnector" /></td>
    <td><code>object</code></td>
    <td>Enables VPC connectivity for standard apps. (id: VpcAccessConnector)</td>
</tr>
<tr>
    <td><CopyableCode code="zones" /></td>
    <td><code>array</code></td>
    <td>The Google Compute Engine zones that are supported by this version in the App Engine flexible environment. Deprecated.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-view"><code>view</code></a></td>
    <td>Lists the versions of a service.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a></td>
    <td></td>
    <td>Deploys code and resource files to a new version.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Deletes an existing Version resource.</td>
</tr>
<tr>
    <td><a href="#export_app_image"><CopyableCode code="export_app_image" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-applicationsId"><code>applicationsId</code></a>, <a href="#parameter-servicesId"><code>servicesId</code></a>, <a href="#parameter-versionsId"><code>versionsId</code></a></td>
    <td></td>
    <td>Exports a user image to Artifact Registry.</td>
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
<tr id="parameter-applicationsId">
    <td><CopyableCode code="applicationsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-appsId">
    <td><CopyableCode code="appsId" /></td>
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
<tr id="parameter-servicesId">
    <td><CopyableCode code="servicesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-versionsId">
    <td><CopyableCode code="versionsId" /></td>
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
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.

```sql
SELECT
id,
name,
apiConfig,
appEngineApis,
appEngineBundledServices,
automaticScaling,
basicScaling,
betaSettings,
buildEnvVariables,
createTime,
createdBy,
defaultExpiration,
deployment,
diskUsageBytes,
endpointsApiService,
entrypoint,
env,
envVariables,
errorHandlers,
flexibleRuntimeSettings,
generatedCustomerMetadata,
handlers,
healthCheck,
inboundServices,
instanceClass,
libraries,
livenessCheck,
manualScaling,
network,
nobuildFilesRegex,
readinessCheck,
resources,
runtime,
runtimeApiVersion,
runtimeChannel,
runtimeMainExecutablePath,
serviceAccount,
servingStatus,
threadsafe,
versionUrl,
vm,
vpcAccessConnector,
zones
FROM google.appengine.versions
WHERE appsId = '{{ appsId }}' -- required
AND servicesId = '{{ servicesId }}' -- required
AND versionsId = '{{ versionsId }}' -- required
AND view = '{{ view }}'
;
```
</TabItem>
<TabItem value="list">

Lists the versions of a service.

```sql
SELECT
id,
name,
apiConfig,
appEngineApis,
appEngineBundledServices,
automaticScaling,
basicScaling,
betaSettings,
buildEnvVariables,
createTime,
createdBy,
defaultExpiration,
deployment,
diskUsageBytes,
endpointsApiService,
entrypoint,
env,
envVariables,
errorHandlers,
flexibleRuntimeSettings,
generatedCustomerMetadata,
handlers,
healthCheck,
inboundServices,
instanceClass,
libraries,
livenessCheck,
manualScaling,
network,
nobuildFilesRegex,
readinessCheck,
resources,
runtime,
runtimeApiVersion,
runtimeChannel,
runtimeMainExecutablePath,
serviceAccount,
servingStatus,
threadsafe,
versionUrl,
vm,
vpcAccessConnector,
zones
FROM google.appengine.versions
WHERE appsId = '{{ appsId }}' -- required
AND servicesId = '{{ servicesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}'
AND view = '{{ view }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Deploys code and resource files to a new version.

```sql
INSERT INTO google.appengine.versions (
data__apiConfig,
data__appEngineApis,
data__appEngineBundledServices,
data__automaticScaling,
data__basicScaling,
data__betaSettings,
data__buildEnvVariables,
data__createTime,
data__defaultExpiration,
data__deployment,
data__endpointsApiService,
data__entrypoint,
data__env,
data__envVariables,
data__errorHandlers,
data__flexibleRuntimeSettings,
data__generatedCustomerMetadata,
data__handlers,
data__healthCheck,
data__id,
data__inboundServices,
data__instanceClass,
data__libraries,
data__livenessCheck,
data__manualScaling,
data__network,
data__nobuildFilesRegex,
data__readinessCheck,
data__resources,
data__runtime,
data__runtimeApiVersion,
data__runtimeChannel,
data__runtimeMainExecutablePath,
data__serviceAccount,
data__servingStatus,
data__threadsafe,
data__vm,
data__vpcAccessConnector,
data__zones,
appsId,
servicesId
)
SELECT 
'{{ apiConfig }}',
{{ appEngineApis }},
'{{ appEngineBundledServices }}',
'{{ automaticScaling }}',
'{{ basicScaling }}',
'{{ betaSettings }}',
'{{ buildEnvVariables }}',
'{{ createTime }}',
'{{ defaultExpiration }}',
'{{ deployment }}',
'{{ endpointsApiService }}',
'{{ entrypoint }}',
'{{ env }}',
'{{ envVariables }}',
'{{ errorHandlers }}',
'{{ flexibleRuntimeSettings }}',
'{{ generatedCustomerMetadata }}',
'{{ handlers }}',
'{{ healthCheck }}',
'{{ id }}',
'{{ inboundServices }}',
'{{ instanceClass }}',
'{{ libraries }}',
'{{ livenessCheck }}',
'{{ manualScaling }}',
'{{ network }}',
'{{ nobuildFilesRegex }}',
'{{ readinessCheck }}',
'{{ resources }}',
'{{ runtime }}',
'{{ runtimeApiVersion }}',
'{{ runtimeChannel }}',
'{{ runtimeMainExecutablePath }}',
'{{ serviceAccount }}',
'{{ servingStatus }}',
{{ threadsafe }},
{{ vm }},
'{{ vpcAccessConnector }}',
'{{ zones }}',
'{{ appsId }}',
'{{ servicesId }}'
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
- name: versions
  props:
    - name: appsId
      value: "{{ appsId }}"
      description: Required parameter for the versions resource.
    - name: servicesId
      value: "{{ servicesId }}"
      description: Required parameter for the versions resource.
    - name: apiConfig
      description: |
        Serving configuration for Google Cloud Endpoints (https://cloud.google.com/endpoints).Only returned in GET requests if view=FULL is set.
      value:
        authFailAction: "{{ authFailAction }}"
        login: "{{ login }}"
        script: "{{ script }}"
        securityLevel: "{{ securityLevel }}"
        url: "{{ url }}"
    - name: appEngineApis
      value: {{ appEngineApis }}
      description: |
        Allows App Engine second generation runtimes to access the legacy bundled services.
    - name: appEngineBundledServices
      value:
        - "{{ appEngineBundledServices }}"
      description: |
        List of specific App Engine Bundled Services that are enabled for this Version.
    - name: automaticScaling
      description: |
        Automatic scaling is based on request rate, response latencies, and other application metrics. Instances are dynamically created and destroyed as needed in order to handle traffic.
      value:
        coolDownPeriod: "{{ coolDownPeriod }}"
        cpuUtilization:
          aggregationWindowLength: "{{ aggregationWindowLength }}"
          targetUtilization: {{ targetUtilization }}
        diskUtilization:
          targetReadBytesPerSecond: {{ targetReadBytesPerSecond }}
          targetReadOpsPerSecond: {{ targetReadOpsPerSecond }}
          targetWriteBytesPerSecond: {{ targetWriteBytesPerSecond }}
          targetWriteOpsPerSecond: {{ targetWriteOpsPerSecond }}
        maxConcurrentRequests: {{ maxConcurrentRequests }}
        maxIdleInstances: {{ maxIdleInstances }}
        maxPendingLatency: "{{ maxPendingLatency }}"
        maxTotalInstances: {{ maxTotalInstances }}
        minIdleInstances: {{ minIdleInstances }}
        minPendingLatency: "{{ minPendingLatency }}"
        minTotalInstances: {{ minTotalInstances }}
        networkUtilization:
          targetReceivedBytesPerSecond: {{ targetReceivedBytesPerSecond }}
          targetReceivedPacketsPerSecond: {{ targetReceivedPacketsPerSecond }}
          targetSentBytesPerSecond: {{ targetSentBytesPerSecond }}
          targetSentPacketsPerSecond: {{ targetSentPacketsPerSecond }}
        requestUtilization:
          targetConcurrentRequests: {{ targetConcurrentRequests }}
          targetRequestCountPerSecond: {{ targetRequestCountPerSecond }}
        standardSchedulerSettings:
          maxInstances: {{ maxInstances }}
          minInstances: {{ minInstances }}
          targetCpuUtilization: {{ targetCpuUtilization }}
          targetThroughputUtilization: {{ targetThroughputUtilization }}
    - name: basicScaling
      description: |
        A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
      value:
        idleTimeout: "{{ idleTimeout }}"
        maxInstances: {{ maxInstances }}
    - name: betaSettings
      value: "{{ betaSettings }}"
      description: |
        Metadata settings that are supplied to this version to enable beta runtime features.
    - name: buildEnvVariables
      value: "{{ buildEnvVariables }}"
      description: |
        Environment variables available to the build environment.Only returned in GET requests if view=FULL is set.
    - name: createTime
      value: "{{ createTime }}"
      description: |
        Time that this version was created.@OutputOnly
    - name: defaultExpiration
      value: "{{ defaultExpiration }}"
      description: |
        Duration that static files should be cached by web proxies and browsers. Only applicable if the corresponding StaticFilesHandler (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StaticFilesHandler) does not specify its own expiration time.Only returned in GET requests if view=FULL is set.
    - name: deployment
      description: |
        Code and application artifacts that make up this version.Only returned in GET requests if view=FULL is set.
      value:
        cloudBuildOptions:
          appYamlPath: "{{ appYamlPath }}"
          cloudBuildTimeout: "{{ cloudBuildTimeout }}"
        container:
          image: "{{ image }}"
        files: "{{ files }}"
        zip:
          filesCount: {{ filesCount }}
          sourceUrl: "{{ sourceUrl }}"
    - name: endpointsApiService
      description: |
        Cloud Endpoints configuration.If endpoints_api_service is set, the Cloud Endpoints Extensible Service Proxy will be provided to serve the API implemented by the app.
      value:
        configId: "{{ configId }}"
        disableTraceSampling: {{ disableTraceSampling }}
        name: "{{ name }}"
        rolloutStrategy: "{{ rolloutStrategy }}"
    - name: entrypoint
      description: |
        The entrypoint for the application.
      value:
        shell: "{{ shell }}"
    - name: env
      value: "{{ env }}"
      description: |
        App Engine execution environment for this version.Defaults to standard.
    - name: envVariables
      value: "{{ envVariables }}"
      description: |
        Environment variables available to the application.Only returned in GET requests if view=FULL is set.
    - name: errorHandlers
      description: |
        Custom static error pages. Limited to 10KB per page.Only returned in GET requests if view=FULL is set.
      value:
        - errorCode: "{{ errorCode }}"
          mimeType: "{{ mimeType }}"
          staticFile: "{{ staticFile }}"
    - name: flexibleRuntimeSettings
      description: |
        Settings for App Engine flexible runtimes.
      value:
        operatingSystem: "{{ operatingSystem }}"
        runtimeVersion: "{{ runtimeVersion }}"
    - name: generatedCustomerMetadata
      value: "{{ generatedCustomerMetadata }}"
      description: |
        Additional Google Generated Customer Metadata, this field won't be provided by default and can be requested by setting the IncludeExtraData field in GetVersionRequest
    - name: handlers
      description: |
        An ordered list of URL-matching patterns that should be applied to incoming requests. The first matching URL handles the request and other request handlers are not attempted.Only returned in GET requests if view=FULL is set.
      value:
        - apiEndpoint:
            scriptPath: "{{ scriptPath }}"
          authFailAction: "{{ authFailAction }}"
          login: "{{ login }}"
          redirectHttpResponseCode: "{{ redirectHttpResponseCode }}"
          script:
            scriptPath: "{{ scriptPath }}"
          securityLevel: "{{ securityLevel }}"
          staticFiles:
            applicationReadable: {{ applicationReadable }}
            expiration: "{{ expiration }}"
            httpHeaders: "{{ httpHeaders }}"
            mimeType: "{{ mimeType }}"
            path: "{{ path }}"
            requireMatchingFile: {{ requireMatchingFile }}
            uploadPathRegex: "{{ uploadPathRegex }}"
          urlRegex: "{{ urlRegex }}"
    - name: healthCheck
      description: |
        Configures health checking for instances. Unhealthy instances are stopped and replaced with new instances. Only applicable in the App Engine flexible environment.
      value:
        checkInterval: "{{ checkInterval }}"
        disableHealthCheck: {{ disableHealthCheck }}
        healthyThreshold: {{ healthyThreshold }}
        host: "{{ host }}"
        restartThreshold: {{ restartThreshold }}
        timeout: "{{ timeout }}"
        unhealthyThreshold: {{ unhealthyThreshold }}
    - name: id
      value: "{{ id }}"
      description: |
        Relative name of the version within the service. Example: v1. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names: "default", "latest", and any name with the prefix "ah-".
    - name: inboundServices
      value:
        - "{{ inboundServices }}"
      description: |
        Before an application can receive email or XMPP messages, the application must be configured to enable the service.
    - name: instanceClass
      value: "{{ instanceClass }}"
      description: |
        Instance class that is used to run this version. Valid values are: AutomaticScaling: F1, F2, F4, F4_1G ManualScaling or BasicScaling: B1, B2, B4, B8, B4_1GDefaults to F1 for AutomaticScaling and B1 for ManualScaling or BasicScaling.
    - name: libraries
      description: |
        Configuration for third-party Python runtime libraries that are required by the application.Only returned in GET requests if view=FULL is set.
      value:
        - name: "{{ name }}"
          version: "{{ version }}"
    - name: livenessCheck
      description: |
        Configures liveness health checking for instances. Unhealthy instances are stopped and replaced with new instances
      value:
        checkInterval: "{{ checkInterval }}"
        failureThreshold: {{ failureThreshold }}
        host: "{{ host }}"
        initialDelay: "{{ initialDelay }}"
        path: "{{ path }}"
        successThreshold: {{ successThreshold }}
        timeout: "{{ timeout }}"
    - name: manualScaling
      description: |
        A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time. Manually scaled versions are sometimes referred to as "backends".
      value:
        instances: {{ instances }}
    - name: network
      description: |
        Extra network settings. Only applicable in the App Engine flexible environment.
      value:
        forwardedPorts:
          - "{{ forwardedPorts }}"
        instanceIpMode: "{{ instanceIpMode }}"
        instanceTag: "{{ instanceTag }}"
        name: "{{ name }}"
        sessionAffinity: {{ sessionAffinity }}
        subnetworkName: "{{ subnetworkName }}"
    - name: nobuildFilesRegex
      value: "{{ nobuildFilesRegex }}"
      description: |
        Files that match this pattern will not be built into this version. Only applicable for Go runtimes.Only returned in GET requests if view=FULL is set.
    - name: readinessCheck
      description: |
        Configures readiness health checking for instances. Unhealthy instances are not put into the backend traffic rotation.
      value:
        appStartTimeout: "{{ appStartTimeout }}"
        checkInterval: "{{ checkInterval }}"
        failureThreshold: {{ failureThreshold }}
        host: "{{ host }}"
        path: "{{ path }}"
        successThreshold: {{ successThreshold }}
        timeout: "{{ timeout }}"
    - name: resources
      description: |
        Machine resources for this version. Only applicable in the App Engine flexible environment.
      value:
        cpu: {{ cpu }}
        diskGb: {{ diskGb }}
        kmsKeyReference: "{{ kmsKeyReference }}"
        memoryGb: {{ memoryGb }}
        volumes:
          - name: "{{ name }}"
            sizeGb: {{ sizeGb }}
            volumeType: "{{ volumeType }}"
    - name: runtime
      value: "{{ runtime }}"
      description: |
        Desired runtime. Example: python27.
    - name: runtimeApiVersion
      value: "{{ runtimeApiVersion }}"
      description: |
        The version of the API in the given runtime environment. Please see the app.yaml reference for valid values at https://cloud.google.com/appengine/docs/standard//config/appref
    - name: runtimeChannel
      value: "{{ runtimeChannel }}"
      description: |
        The channel of the runtime to use. Only available for some runtimes. Defaults to the default channel.
    - name: runtimeMainExecutablePath
      value: "{{ runtimeMainExecutablePath }}"
      description: |
        The path or name of the app's main executable.
    - name: serviceAccount
      value: "{{ serviceAccount }}"
      description: |
        The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.
    - name: servingStatus
      value: "{{ servingStatus }}"
      description: |
        Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.SERVING_STATUS_UNSPECIFIED is an invalid value. Defaults to SERVING.
      valid_values: ['SERVING_STATUS_UNSPECIFIED', 'SERVING', 'STOPPED']
    - name: threadsafe
      value: {{ threadsafe }}
      description: |
        Whether multiple requests can be dispatched to this version at once.
    - name: vm
      value: {{ vm }}
      description: |
        Whether to deploy this version in a container on a virtual machine.
    - name: vpcAccessConnector
      description: |
        Enables VPC connectivity for standard apps.
      value:
        egressSetting: "{{ egressSetting }}"
        name: "{{ name }}"
    - name: zones
      value:
        - "{{ zones }}"
      description: |
        The Google Compute Engine zones that are supported by this version in the App Engine flexible environment. Deprecated.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch"
    values={[
        { label: 'patch', value: 'patch' }
    ]}
>
<TabItem value="patch">

Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling)

```sql
UPDATE google.appengine.versions
SET 
data__apiConfig = '{{ apiConfig }}',
data__appEngineApis = {{ appEngineApis }},
data__appEngineBundledServices = '{{ appEngineBundledServices }}',
data__automaticScaling = '{{ automaticScaling }}',
data__basicScaling = '{{ basicScaling }}',
data__betaSettings = '{{ betaSettings }}',
data__buildEnvVariables = '{{ buildEnvVariables }}',
data__createTime = '{{ createTime }}',
data__defaultExpiration = '{{ defaultExpiration }}',
data__deployment = '{{ deployment }}',
data__endpointsApiService = '{{ endpointsApiService }}',
data__entrypoint = '{{ entrypoint }}',
data__env = '{{ env }}',
data__envVariables = '{{ envVariables }}',
data__errorHandlers = '{{ errorHandlers }}',
data__flexibleRuntimeSettings = '{{ flexibleRuntimeSettings }}',
data__generatedCustomerMetadata = '{{ generatedCustomerMetadata }}',
data__handlers = '{{ handlers }}',
data__healthCheck = '{{ healthCheck }}',
data__id = '{{ id }}',
data__inboundServices = '{{ inboundServices }}',
data__instanceClass = '{{ instanceClass }}',
data__libraries = '{{ libraries }}',
data__livenessCheck = '{{ livenessCheck }}',
data__manualScaling = '{{ manualScaling }}',
data__network = '{{ network }}',
data__nobuildFilesRegex = '{{ nobuildFilesRegex }}',
data__readinessCheck = '{{ readinessCheck }}',
data__resources = '{{ resources }}',
data__runtime = '{{ runtime }}',
data__runtimeApiVersion = '{{ runtimeApiVersion }}',
data__runtimeChannel = '{{ runtimeChannel }}',
data__runtimeMainExecutablePath = '{{ runtimeMainExecutablePath }}',
data__serviceAccount = '{{ serviceAccount }}',
data__servingStatus = '{{ servingStatus }}',
data__threadsafe = {{ threadsafe }},
data__vm = {{ vm }},
data__vpcAccessConnector = '{{ vpcAccessConnector }}',
data__zones = '{{ zones }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND applicationsId = '{{ applicationsId }}' --required
AND servicesId = '{{ servicesId }}' --required
AND versionsId = '{{ versionsId }}' --required
AND updateMask = '{{ updateMask}}'
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
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes an existing Version resource.

```sql
DELETE FROM google.appengine.versions
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND applicationsId = '{{ applicationsId }}' --required
AND servicesId = '{{ servicesId }}' --required
AND versionsId = '{{ versionsId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_app_image"
    values={[
        { label: 'export_app_image', value: 'export_app_image' }
    ]}
>
<TabItem value="export_app_image">

Exports a user image to Artifact Registry.

```sql
EXEC google.appengine.versions.export_app_image 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@applicationsId='{{ applicationsId }}' --required, 
@servicesId='{{ servicesId }}' --required, 
@versionsId='{{ versionsId }}' --required 
@@json=
'{
"destinationRepository": "{{ destinationRepository }}"
}'
;
```
</TabItem>
</Tabs>
