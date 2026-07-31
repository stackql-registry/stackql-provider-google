--- 
title: job_triggers
hide_title: false
hide_table_of_contents: false
keywords:
  - job_triggers
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

Creates, updates, deletes, gets or lists a <code>job_triggers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_triggers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.dlp.job_triggers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_locations_job_triggers_get"
    values={[
        { label: 'projects_locations_job_triggers_get', value: 'projects_locations_job_triggers_get' },
        { label: 'organizations_locations_job_triggers_get', value: 'organizations_locations_job_triggers_get' },
        { label: 'projects_job_triggers_get', value: 'projects_job_triggers_get' },
        { label: 'projects_locations_job_triggers_list', value: 'projects_locations_job_triggers_list' },
        { label: 'organizations_locations_job_triggers_list', value: 'organizations_locations_job_triggers_list' },
        { label: 'projects_job_triggers_list', value: 'projects_job_triggers_list' }
    ]}
>
<TabItem value="projects_locations_job_triggers_get">

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
    <td>Output only. Unique resource name for the triggeredJob, assigned by the service when the triggeredJob is created, for example `projects/dlp-test-project/jobTriggers/53234423`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of a triggeredJob.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User provided description (max 256 chars)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 100 chars)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. A stream of errors encountered when the trigger was activated. Repeated errors may result in the JobTrigger automatically being paused. Will return the last 100 errors. Whenever the JobTrigger is modified this list will be cleared.</td>
</tr>
<tr>
    <td><CopyableCode code="inspectJob" /></td>
    <td><code>object</code></td>
    <td>For inspect jobs, a snapshot of the configuration. (id: GooglePrivacyDlpV2InspectJobConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="lastRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of the last time this trigger executed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Required. A status for this trigger. (STATUS_UNSPECIFIED, HEALTHY, PAUSED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="triggers" /></td>
    <td><code>array</code></td>
    <td>A list of triggers which will be OR'ed together. Only one in the list needs to trigger for a job to be started. The list may contain only a single Schedule trigger and must have at least one object.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of a triggeredJob.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_job_triggers_get">

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
    <td>Output only. Unique resource name for the triggeredJob, assigned by the service when the triggeredJob is created, for example `projects/dlp-test-project/jobTriggers/53234423`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of a triggeredJob.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User provided description (max 256 chars)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 100 chars)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. A stream of errors encountered when the trigger was activated. Repeated errors may result in the JobTrigger automatically being paused. Will return the last 100 errors. Whenever the JobTrigger is modified this list will be cleared.</td>
</tr>
<tr>
    <td><CopyableCode code="inspectJob" /></td>
    <td><code>object</code></td>
    <td>For inspect jobs, a snapshot of the configuration. (id: GooglePrivacyDlpV2InspectJobConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="lastRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of the last time this trigger executed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Required. A status for this trigger. (STATUS_UNSPECIFIED, HEALTHY, PAUSED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="triggers" /></td>
    <td><code>array</code></td>
    <td>A list of triggers which will be OR'ed together. Only one in the list needs to trigger for a job to be started. The list may contain only a single Schedule trigger and must have at least one object.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of a triggeredJob.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_job_triggers_get">

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
    <td>Output only. Unique resource name for the triggeredJob, assigned by the service when the triggeredJob is created, for example `projects/dlp-test-project/jobTriggers/53234423`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of a triggeredJob.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User provided description (max 256 chars)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 100 chars)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. A stream of errors encountered when the trigger was activated. Repeated errors may result in the JobTrigger automatically being paused. Will return the last 100 errors. Whenever the JobTrigger is modified this list will be cleared.</td>
</tr>
<tr>
    <td><CopyableCode code="inspectJob" /></td>
    <td><code>object</code></td>
    <td>For inspect jobs, a snapshot of the configuration. (id: GooglePrivacyDlpV2InspectJobConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="lastRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of the last time this trigger executed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Required. A status for this trigger. (STATUS_UNSPECIFIED, HEALTHY, PAUSED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="triggers" /></td>
    <td><code>array</code></td>
    <td>A list of triggers which will be OR'ed together. Only one in the list needs to trigger for a job to be started. The list may contain only a single Schedule trigger and must have at least one object.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of a triggeredJob.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_locations_job_triggers_list">

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
    <td>Output only. Unique resource name for the triggeredJob, assigned by the service when the triggeredJob is created, for example `projects/dlp-test-project/jobTriggers/53234423`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of a triggeredJob.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User provided description (max 256 chars)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 100 chars)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. A stream of errors encountered when the trigger was activated. Repeated errors may result in the JobTrigger automatically being paused. Will return the last 100 errors. Whenever the JobTrigger is modified this list will be cleared.</td>
</tr>
<tr>
    <td><CopyableCode code="inspectJob" /></td>
    <td><code>object</code></td>
    <td>For inspect jobs, a snapshot of the configuration. (id: GooglePrivacyDlpV2InspectJobConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="lastRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of the last time this trigger executed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Required. A status for this trigger. (STATUS_UNSPECIFIED, HEALTHY, PAUSED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="triggers" /></td>
    <td><code>array</code></td>
    <td>A list of triggers which will be OR'ed together. Only one in the list needs to trigger for a job to be started. The list may contain only a single Schedule trigger and must have at least one object.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of a triggeredJob.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="organizations_locations_job_triggers_list">

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
    <td>Output only. Unique resource name for the triggeredJob, assigned by the service when the triggeredJob is created, for example `projects/dlp-test-project/jobTriggers/53234423`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of a triggeredJob.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User provided description (max 256 chars)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 100 chars)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. A stream of errors encountered when the trigger was activated. Repeated errors may result in the JobTrigger automatically being paused. Will return the last 100 errors. Whenever the JobTrigger is modified this list will be cleared.</td>
</tr>
<tr>
    <td><CopyableCode code="inspectJob" /></td>
    <td><code>object</code></td>
    <td>For inspect jobs, a snapshot of the configuration. (id: GooglePrivacyDlpV2InspectJobConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="lastRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of the last time this trigger executed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Required. A status for this trigger. (STATUS_UNSPECIFIED, HEALTHY, PAUSED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="triggers" /></td>
    <td><code>array</code></td>
    <td>A list of triggers which will be OR'ed together. Only one in the list needs to trigger for a job to be started. The list may contain only a single Schedule trigger and must have at least one object.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of a triggeredJob.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_job_triggers_list">

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
    <td>Output only. Unique resource name for the triggeredJob, assigned by the service when the triggeredJob is created, for example `projects/dlp-test-project/jobTriggers/53234423`.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp of a triggeredJob.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User provided description (max 256 chars)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name (max 100 chars)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Output only. A stream of errors encountered when the trigger was activated. Repeated errors may result in the JobTrigger automatically being paused. Will return the last 100 errors. Whenever the JobTrigger is modified this list will be cleared.</td>
</tr>
<tr>
    <td><CopyableCode code="inspectJob" /></td>
    <td><code>object</code></td>
    <td>For inspect jobs, a snapshot of the configuration. (id: GooglePrivacyDlpV2InspectJobConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="lastRunTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp of the last time this trigger executed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Required. A status for this trigger. (STATUS_UNSPECIFIED, HEALTHY, PAUSED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="triggers" /></td>
    <td><code>array</code></td>
    <td>A list of triggers which will be OR'ed together. Only one in the list needs to trigger for a job to be started. The list may contain only a single Schedule trigger and must have at least one object.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp of a triggeredJob.</td>
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
    <td><a href="#projects_locations_job_triggers_get"><CopyableCode code="projects_locations_job_triggers_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobTriggersId"><code>jobTriggersId</code></a></td>
    <td></td>
    <td>Gets a job trigger. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_job_triggers_get"><CopyableCode code="organizations_locations_job_triggers_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobTriggersId"><code>jobTriggersId</code></a></td>
    <td></td>
    <td>Gets a job trigger. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_job_triggers_get"><CopyableCode code="projects_job_triggers_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-jobTriggersId"><code>jobTriggersId</code></a></td>
    <td></td>
    <td>Gets a job trigger. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_job_triggers_list"><CopyableCode code="projects_locations_job_triggers_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-locationId"><code>locationId</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists job triggers. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_job_triggers_list"><CopyableCode code="organizations_locations_job_triggers_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-locationId"><code>locationId</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists job triggers. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_job_triggers_list"><CopyableCode code="projects_job_triggers_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-locationId"><code>locationId</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a></td>
    <td>Lists job triggers. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_job_triggers_create"><CopyableCode code="projects_locations_job_triggers_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_job_triggers_create"><CopyableCode code="organizations_locations_job_triggers_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td></td>
    <td>Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_job_triggers_create"><CopyableCode code="projects_job_triggers_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_job_triggers_patch"><CopyableCode code="projects_locations_job_triggers_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobTriggersId"><code>jobTriggersId</code></a></td>
    <td></td>
    <td>Updates a job trigger. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_job_triggers_patch"><CopyableCode code="organizations_locations_job_triggers_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobTriggersId"><code>jobTriggersId</code></a></td>
    <td></td>
    <td>Updates a job trigger. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_job_triggers_patch"><CopyableCode code="projects_job_triggers_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-jobTriggersId"><code>jobTriggersId</code></a></td>
    <td></td>
    <td>Updates a job trigger. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_locations_job_triggers_delete"><CopyableCode code="projects_locations_job_triggers_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobTriggersId"><code>jobTriggersId</code></a></td>
    <td></td>
    <td>Deletes a job trigger. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.</td>
</tr>
<tr>
    <td><a href="#organizations_locations_job_triggers_delete"><CopyableCode code="organizations_locations_job_triggers_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organizationsId"><code>organizationsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobTriggersId"><code>jobTriggersId</code></a></td>
    <td></td>
    <td>Deletes a job trigger. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_job_triggers_delete"><CopyableCode code="projects_job_triggers_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-jobTriggersId"><code>jobTriggersId</code></a></td>
    <td></td>
    <td>Deletes a job trigger. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.</td>
</tr>
<tr>
    <td><a href="#projects_job_triggers_activate"><CopyableCode code="projects_job_triggers_activate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-jobTriggersId"><code>jobTriggersId</code></a></td>
    <td></td>
    <td>Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur.</td>
</tr>
<tr>
    <td><a href="#projects_locations_job_triggers_activate"><CopyableCode code="projects_locations_job_triggers_activate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobTriggersId"><code>jobTriggersId</code></a></td>
    <td></td>
    <td>Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur.</td>
</tr>
<tr>
    <td><a href="#projects_locations_job_triggers_hybrid_inspect"><CopyableCode code="projects_locations_job_triggers_hybrid_inspect" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobTriggersId"><code>jobTriggersId</code></a></td>
    <td></td>
    <td>Inspect hybrid content and store findings to a trigger. The inspection will be processed asynchronously. To review the findings monitor the jobs within the trigger.</td>
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
<tr id="parameter-jobTriggersId">
    <td><CopyableCode code="jobTriggersId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationsId">
    <td><CopyableCode code="locationsId" /></td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-locationId">
    <td><CopyableCode code="locationId" /></td>
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
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_locations_job_triggers_get"
    values={[
        { label: 'projects_locations_job_triggers_get', value: 'projects_locations_job_triggers_get' },
        { label: 'organizations_locations_job_triggers_get', value: 'organizations_locations_job_triggers_get' },
        { label: 'projects_job_triggers_get', value: 'projects_job_triggers_get' },
        { label: 'projects_locations_job_triggers_list', value: 'projects_locations_job_triggers_list' },
        { label: 'organizations_locations_job_triggers_list', value: 'organizations_locations_job_triggers_list' },
        { label: 'projects_job_triggers_list', value: 'projects_job_triggers_list' }
    ]}
>
<TabItem value="projects_locations_job_triggers_get">

Gets a job trigger. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.

```sql
SELECT
name,
createTime,
description,
displayName,
errors,
inspectJob,
lastRunTime,
status,
triggers,
updateTime
FROM google.dlp.job_triggers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND jobTriggersId = '{{ jobTriggersId }}' -- required
;
```
</TabItem>
<TabItem value="organizations_locations_job_triggers_get">

Gets a job trigger. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.

```sql
SELECT
name,
createTime,
description,
displayName,
errors,
inspectJob,
lastRunTime,
status,
triggers,
updateTime
FROM google.dlp.job_triggers
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND jobTriggersId = '{{ jobTriggersId }}' -- required
;
```
</TabItem>
<TabItem value="projects_job_triggers_get">

Gets a job trigger. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.

```sql
SELECT
name,
createTime,
description,
displayName,
errors,
inspectJob,
lastRunTime,
status,
triggers,
updateTime
FROM google.dlp.job_triggers
WHERE projectsId = '{{ projectsId }}' -- required
AND jobTriggersId = '{{ jobTriggersId }}' -- required
;
```
</TabItem>
<TabItem value="projects_locations_job_triggers_list">

Lists job triggers. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.

```sql
SELECT
name,
createTime,
description,
displayName,
errors,
inspectJob,
lastRunTime,
status,
triggers,
updateTime
FROM google.dlp.job_triggers
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND orderBy = '{{ orderBy }}'
AND type = '{{ type }}'
AND pageSize = '{{ pageSize }}'
AND locationId = '{{ locationId }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
;
```
</TabItem>
<TabItem value="organizations_locations_job_triggers_list">

Lists job triggers. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.

```sql
SELECT
name,
createTime,
description,
displayName,
errors,
inspectJob,
lastRunTime,
status,
triggers,
updateTime
FROM google.dlp.job_triggers
WHERE organizationsId = '{{ organizationsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND orderBy = '{{ orderBy }}'
AND type = '{{ type }}'
AND pageSize = '{{ pageSize }}'
AND locationId = '{{ locationId }}'
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
;
```
</TabItem>
<TabItem value="projects_job_triggers_list">

Lists job triggers. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.

```sql
SELECT
name,
createTime,
description,
displayName,
errors,
inspectJob,
lastRunTime,
status,
triggers,
updateTime
FROM google.dlp.job_triggers
WHERE projectsId = '{{ projectsId }}' -- required
AND pageToken = '{{ pageToken }}'
AND filter = '{{ filter }}'
AND type = '{{ type }}'
AND orderBy = '{{ orderBy }}'
AND locationId = '{{ locationId }}'
AND pageSize = '{{ pageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="projects_locations_job_triggers_create"
    values={[
        { label: 'projects_locations_job_triggers_create', value: 'projects_locations_job_triggers_create' },
        { label: 'organizations_locations_job_triggers_create', value: 'organizations_locations_job_triggers_create' },
        { label: 'projects_job_triggers_create', value: 'projects_job_triggers_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_locations_job_triggers_create">

Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.

```sql
INSERT INTO google.dlp.job_triggers (
data__jobTrigger,
data__locationId,
data__triggerId,
projectsId,
locationsId
)
SELECT 
'{{ jobTrigger }}',
'{{ locationId }}',
'{{ triggerId }}',
'{{ projectsId }}',
'{{ locationsId }}'
RETURNING
name,
createTime,
description,
displayName,
errors,
inspectJob,
lastRunTime,
status,
triggers,
updateTime
;
```
</TabItem>
<TabItem value="organizations_locations_job_triggers_create">

Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.

```sql
INSERT INTO google.dlp.job_triggers (
data__jobTrigger,
data__locationId,
data__triggerId,
organizationsId,
locationsId
)
SELECT 
'{{ jobTrigger }}',
'{{ locationId }}',
'{{ triggerId }}',
'{{ organizationsId }}',
'{{ locationsId }}'
RETURNING
name,
createTime,
description,
displayName,
errors,
inspectJob,
lastRunTime,
status,
triggers,
updateTime
;
```
</TabItem>
<TabItem value="projects_job_triggers_create">

Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.

```sql
INSERT INTO google.dlp.job_triggers (
data__jobTrigger,
data__locationId,
data__triggerId,
projectsId
)
SELECT 
'{{ jobTrigger }}',
'{{ locationId }}',
'{{ triggerId }}',
'{{ projectsId }}'
RETURNING
name,
createTime,
description,
displayName,
errors,
inspectJob,
lastRunTime,
status,
triggers,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: job_triggers
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the job_triggers resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the job_triggers resource.
    - name: organizationsId
      value: "{{ organizationsId }}"
      description: Required parameter for the job_triggers resource.
    - name: jobTrigger
      description: |
        Contains a configuration to make API calls on a repeating basis. See https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-job-triggers to learn more.
      value:
        name: "{{ name }}"
        description: "{{ description }}"
        lastRunTime: "{{ lastRunTime }}"
        errors:
          - timestamps: "{{ timestamps }}"
            extraInfo: "{{ extraInfo }}"
            details:
              message: "{{ message }}"
              details: "{{ details }}"
              code: {{ code }}
        updateTime: "{{ updateTime }}"
        displayName: "{{ displayName }}"
        status: "{{ status }}"
        triggers:
          - schedule:
              recurrencePeriodDuration: "{{ recurrencePeriodDuration }}"
            manual: "{{ manual }}"
        createTime: "{{ createTime }}"
        inspectJob:
          inspectTemplateName: "{{ inspectTemplateName }}"
          actions:
            - publishToStackdriver: "{{ publishToStackdriver }}"
              publishSummaryToCscc: "{{ publishSummaryToCscc }}"
              publishFindingsToCloudDataCatalog: "{{ publishFindingsToCloudDataCatalog }}"
              saveFindings:
                outputConfig:
                  storagePath: "{{ storagePath }}"
                  outputSchema: "{{ outputSchema }}"
                  table: "{{ table }}"
              pubSub:
                topic: "{{ topic }}"
              publishFindingsToDataplexCatalog: "{{ publishFindingsToDataplexCatalog }}"
              deidentify:
                fileTypesToTransform:
                  - "{{ fileTypesToTransform }}"
                cloudStorageOutput: "{{ cloudStorageOutput }}"
                transformationConfig:
                  deidentifyTemplate: "{{ deidentifyTemplate }}"
                  imageRedactTemplate: "{{ imageRedactTemplate }}"
                  structuredDeidentifyTemplate: "{{ structuredDeidentifyTemplate }}"
                transformationDetailsStorageConfig:
                  table: "{{ table }}"
              jobNotificationEmails: "{{ jobNotificationEmails }}"
          storageConfig:
            bigQueryOptions:
              tableReference:
                projectId: "{{ projectId }}"
                datasetId: "{{ datasetId }}"
                tableId: "{{ tableId }}"
              identifyingFields:
                - name: "{{ name }}"
              excludedFields:
                - name: "{{ name }}"
              rowsLimit: "{{ rowsLimit }}"
              rowsLimitPercent: {{ rowsLimitPercent }}
              sampleMethod: "{{ sampleMethod }}"
              includedFields:
                - name: "{{ name }}"
            datastoreOptions:
              partitionId:
                projectId: "{{ projectId }}"
                namespaceId: "{{ namespaceId }}"
              kind:
                name: "{{ name }}"
            cloudStorageOptions:
              bytesLimitPerFilePercent: {{ bytesLimitPerFilePercent }}
              bytesLimitPerFile: "{{ bytesLimitPerFile }}"
              fileTypes:
                - "{{ fileTypes }}"
              fileSet:
                regexFileSet: "{{ regexFileSet }}"
                url: "{{ url }}"
              filesLimitPercent: {{ filesLimitPercent }}
              sampleMethod: "{{ sampleMethod }}"
            timespanConfig:
              enableAutoPopulationOfTimespanConfig: {{ enableAutoPopulationOfTimespanConfig }}
              startTime: "{{ startTime }}"
              timestampField:
                name: "{{ name }}"
              endTime: "{{ endTime }}"
            hybridOptions:
              labels: "{{ labels }}"
              requiredFindingLabelKeys:
                - "{{ requiredFindingLabelKeys }}"
              tableOptions:
                identifyingFields: "{{ identifyingFields }}"
              description: "{{ description }}"
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
    - name: locationId
      value: "{{ locationId }}"
      description: |
        Deprecated. This field has no effect.
    - name: triggerId
      value: "{{ triggerId }}"
      description: |
        The trigger id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: \`[a-zA-Zd-_]+\`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_locations_job_triggers_patch"
    values={[
        { label: 'projects_locations_job_triggers_patch', value: 'projects_locations_job_triggers_patch' },
        { label: 'organizations_locations_job_triggers_patch', value: 'organizations_locations_job_triggers_patch' },
        { label: 'projects_job_triggers_patch', value: 'projects_job_triggers_patch' }
    ]}
>
<TabItem value="projects_locations_job_triggers_patch">

Updates a job trigger. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.

```sql
UPDATE google.dlp.job_triggers
SET 
data__jobTrigger = '{{ jobTrigger }}',
data__updateMask = '{{ updateMask }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND jobTriggersId = '{{ jobTriggersId }}' --required
RETURNING
name,
createTime,
description,
displayName,
errors,
inspectJob,
lastRunTime,
status,
triggers,
updateTime;
```
</TabItem>
<TabItem value="organizations_locations_job_triggers_patch">

Updates a job trigger. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.

```sql
UPDATE google.dlp.job_triggers
SET 
data__jobTrigger = '{{ jobTrigger }}',
data__updateMask = '{{ updateMask }}'
WHERE 
organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND jobTriggersId = '{{ jobTriggersId }}' --required
RETURNING
name,
createTime,
description,
displayName,
errors,
inspectJob,
lastRunTime,
status,
triggers,
updateTime;
```
</TabItem>
<TabItem value="projects_job_triggers_patch">

Updates a job trigger. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.

```sql
UPDATE google.dlp.job_triggers
SET 
data__jobTrigger = '{{ jobTrigger }}',
data__updateMask = '{{ updateMask }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND jobTriggersId = '{{ jobTriggersId }}' --required
RETURNING
name,
createTime,
description,
displayName,
errors,
inspectJob,
lastRunTime,
status,
triggers,
updateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_locations_job_triggers_delete"
    values={[
        { label: 'projects_locations_job_triggers_delete', value: 'projects_locations_job_triggers_delete' },
        { label: 'organizations_locations_job_triggers_delete', value: 'organizations_locations_job_triggers_delete' },
        { label: 'projects_job_triggers_delete', value: 'projects_job_triggers_delete' }
    ]}
>
<TabItem value="projects_locations_job_triggers_delete">

Deletes a job trigger. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.

```sql
DELETE FROM google.dlp.job_triggers
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND jobTriggersId = '{{ jobTriggersId }}' --required
;
```
</TabItem>
<TabItem value="organizations_locations_job_triggers_delete">

Deletes a job trigger. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.

```sql
DELETE FROM google.dlp.job_triggers
WHERE organizationsId = '{{ organizationsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND jobTriggersId = '{{ jobTriggersId }}' --required
;
```
</TabItem>
<TabItem value="projects_job_triggers_delete">

Deletes a job trigger. See https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.

```sql
DELETE FROM google.dlp.job_triggers
WHERE projectsId = '{{ projectsId }}' --required
AND jobTriggersId = '{{ jobTriggersId }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="projects_job_triggers_activate"
    values={[
        { label: 'projects_job_triggers_activate', value: 'projects_job_triggers_activate' },
        { label: 'projects_locations_job_triggers_activate', value: 'projects_locations_job_triggers_activate' },
        { label: 'projects_locations_job_triggers_hybrid_inspect', value: 'projects_locations_job_triggers_hybrid_inspect' }
    ]}
>
<TabItem value="projects_job_triggers_activate">

Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur.

```sql
EXEC google.dlp.job_triggers.projects_job_triggers_activate 
@projectsId='{{ projectsId }}' --required, 
@jobTriggersId='{{ jobTriggersId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_job_triggers_activate">

Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur.

```sql
EXEC google.dlp.job_triggers.projects_locations_job_triggers_activate 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@jobTriggersId='{{ jobTriggersId }}' --required
;
```
</TabItem>
<TabItem value="projects_locations_job_triggers_hybrid_inspect">

Inspect hybrid content and store findings to a trigger. The inspection will be processed asynchronously. To review the findings monitor the jobs within the trigger.

```sql
EXEC google.dlp.job_triggers.projects_locations_job_triggers_hybrid_inspect 
@projectsId='{{ projectsId }}' --required, 
@locationsId='{{ locationsId }}' --required, 
@jobTriggersId='{{ jobTriggersId }}' --required 
@@json=
'{
"hybridItem": "{{ hybridItem }}"
}'
;
```
</TabItem>
</Tabs>
