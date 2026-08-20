--- 
title: alert_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - alert_policies
  - monitoring
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

Creates, updates, deletes, gets or lists an <code>alert_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alert_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.monitoring.alert_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="projects_alert_policies_get"
    values={[
        { label: 'projects_alert_policies_get', value: 'projects_alert_policies_get' },
        { label: 'projects_alert_policies_list', value: 'projects_alert_policies_list' }
    ]}
>
<TabItem value="projects_alert_policies_get">

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
    <td>Identifier. Required if the policy exists. The resource name for this policy. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID] [ALERT_POLICY_ID] is assigned by Cloud Monitoring when the policy is created. When calling the alertPolicies.create method, do not include the name field in the alerting policy passed as part of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="alertStrategy" /></td>
    <td><code>object</code></td>
    <td>Control over how this alerting policy's notification channels are notified. (id: AlertStrategy)</td>
</tr>
<tr>
    <td><CopyableCode code="combiner" /></td>
    <td><code>string</code></td>
    <td>How to combine the results of multiple conditions to determine if an incident should be opened. If condition_time_series_query_language is present, this must be COMBINE_UNSPECIFIED. (COMBINE_UNSPECIFIED, AND, OR, AND_WITH_MATCHING_RESOURCE)</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>A list of conditions for the policy. The conditions are combined by AND or OR according to the combiner field. If the combined conditions evaluate to true, then an incident is created. A policy can have from one to six conditions. If condition_time_series_query_language is present, it must be the only condition. If condition_monitoring_query_language is present, it must be the only condition.</td>
</tr>
<tr>
    <td><CopyableCode code="creationRecord" /></td>
    <td><code>object</code></td>
    <td>A read-only record of the creation of the alerting policy. If provided in a call to create or update, this field will be ignored. (id: MutationRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A short name or phrase used to identify the policy in dashboards, notifications, and incidents. To avoid confusion, don't use the same display name for multiple policies in the same project. The name is limited to 512 Unicode characters.The convention for the display_name of a PrometheusQueryLanguageCondition is "&#123;rule group name&#125;/&#123;alert name&#125;", where the &#123;rule group name&#125; and &#123;alert name&#125; should be taken from the corresponding Prometheus configuration file. This convention is not enforced. In any case the display_name is not a unique key of the AlertPolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="documentation" /></td>
    <td><code>object</code></td>
    <td>Documentation that is included with notifications and incidents related to this policy. Best practice is for the documentation to include information to help responders understand, mitigate, escalate, and correct the underlying problems detected by the alerting policy. Notification channels that have limited capacity might not show this documentation. (id: Documentation)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the policy is enabled. On write, the default interpretation if unset is that the policy is enabled. On read, clients should not make any assumption about the state if it has not been populated. The field should always be populated on List and Get operations, unless a field projection has been specified that strips it out.</td>
</tr>
<tr>
    <td><CopyableCode code="mutationRecord" /></td>
    <td><code>object</code></td>
    <td>A read-only record of the most recent change to the alerting policy. If provided in a call to create or update, this field will be ignored. (id: MutationRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="notificationChannels" /></td>
    <td><code>array</code></td>
    <td>Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident. Each element of this array corresponds to the name field in each of the NotificationChannel objects that are returned from the ListNotificationChannels method. The format of the entries in this field is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] </td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>Optional. The severity of an alerting policy indicates how important incidents generated by that policy are. The severity level will be displayed on the Incident detail page and in notifications. (SEVERITY_UNSPECIFIED, CRITICAL, ERROR, WARNING)</td>
</tr>
<tr>
    <td><CopyableCode code="userLabels" /></td>
    <td><code>object</code></td>
    <td>User-supplied key/value data to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.Note that Prometheus &#123;alert name&#125; is a valid Prometheus label names (https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels), whereas Prometheus &#123;rule group&#125; is an unrestricted UTF-8 string. This means that they cannot be stored as-is in user labels, because they may contain characters that are not allowed in user-label values.</td>
</tr>
<tr>
    <td><CopyableCode code="validity" /></td>
    <td><code>object</code></td>
    <td>Read-only description of how the alerting policy is invalid. This field is only set when the alerting policy is invalid. An invalid alerting policy will not generate incidents. (id: Status)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="projects_alert_policies_list">

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
    <td>Identifier. Required if the policy exists. The resource name for this policy. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID] [ALERT_POLICY_ID] is assigned by Cloud Monitoring when the policy is created. When calling the alertPolicies.create method, do not include the name field in the alerting policy passed as part of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="alertStrategy" /></td>
    <td><code>object</code></td>
    <td>Control over how this alerting policy's notification channels are notified. (id: AlertStrategy)</td>
</tr>
<tr>
    <td><CopyableCode code="combiner" /></td>
    <td><code>string</code></td>
    <td>How to combine the results of multiple conditions to determine if an incident should be opened. If condition_time_series_query_language is present, this must be COMBINE_UNSPECIFIED. (COMBINE_UNSPECIFIED, AND, OR, AND_WITH_MATCHING_RESOURCE)</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td>A list of conditions for the policy. The conditions are combined by AND or OR according to the combiner field. If the combined conditions evaluate to true, then an incident is created. A policy can have from one to six conditions. If condition_time_series_query_language is present, it must be the only condition. If condition_monitoring_query_language is present, it must be the only condition.</td>
</tr>
<tr>
    <td><CopyableCode code="creationRecord" /></td>
    <td><code>object</code></td>
    <td>A read-only record of the creation of the alerting policy. If provided in a call to create or update, this field will be ignored. (id: MutationRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A short name or phrase used to identify the policy in dashboards, notifications, and incidents. To avoid confusion, don't use the same display name for multiple policies in the same project. The name is limited to 512 Unicode characters.The convention for the display_name of a PrometheusQueryLanguageCondition is "&#123;rule group name&#125;/&#123;alert name&#125;", where the &#123;rule group name&#125; and &#123;alert name&#125; should be taken from the corresponding Prometheus configuration file. This convention is not enforced. In any case the display_name is not a unique key of the AlertPolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="documentation" /></td>
    <td><code>object</code></td>
    <td>Documentation that is included with notifications and incidents related to this policy. Best practice is for the documentation to include information to help responders understand, mitigate, escalate, and correct the underlying problems detected by the alerting policy. Notification channels that have limited capacity might not show this documentation. (id: Documentation)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the policy is enabled. On write, the default interpretation if unset is that the policy is enabled. On read, clients should not make any assumption about the state if it has not been populated. The field should always be populated on List and Get operations, unless a field projection has been specified that strips it out.</td>
</tr>
<tr>
    <td><CopyableCode code="mutationRecord" /></td>
    <td><code>object</code></td>
    <td>A read-only record of the most recent change to the alerting policy. If provided in a call to create or update, this field will be ignored. (id: MutationRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="notificationChannels" /></td>
    <td><code>array</code></td>
    <td>Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident. Each element of this array corresponds to the name field in each of the NotificationChannel objects that are returned from the ListNotificationChannels method. The format of the entries in this field is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] </td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>Optional. The severity of an alerting policy indicates how important incidents generated by that policy are. The severity level will be displayed on the Incident detail page and in notifications. (SEVERITY_UNSPECIFIED, CRITICAL, ERROR, WARNING)</td>
</tr>
<tr>
    <td><CopyableCode code="userLabels" /></td>
    <td><code>object</code></td>
    <td>User-supplied key/value data to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.Note that Prometheus &#123;alert name&#125; is a valid Prometheus label names (https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels), whereas Prometheus &#123;rule group&#125; is an unrestricted UTF-8 string. This means that they cannot be stored as-is in user labels, because they may contain characters that are not allowed in user-label values.</td>
</tr>
<tr>
    <td><CopyableCode code="validity" /></td>
    <td><code>object</code></td>
    <td>Read-only description of how the alerting policy is invalid. This field is only set when the alerting policy is invalid. An invalid alerting policy will not generate incidents. (id: Status)</td>
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
    <td><a href="#projects_alert_policies_get"><CopyableCode code="projects_alert_policies_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-alertPoliciesId"><code>alertPoliciesId</code></a></td>
    <td></td>
    <td>Gets a single alerting policy.</td>
</tr>
<tr>
    <td><a href="#projects_alert_policies_list"><CopyableCode code="projects_alert_policies_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists the existing alerting policies for the workspace.</td>
</tr>
<tr>
    <td><a href="#projects_alert_policies_create"><CopyableCode code="projects_alert_policies_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a></td>
    <td></td>
    <td>Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.</td>
</tr>
<tr>
    <td><a href="#projects_alert_policies_patch"><CopyableCode code="projects_alert_policies_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-alertPoliciesId"><code>alertPoliciesId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an alerting policy. You can either replace the entire policy with a new one or replace only certain fields in the current alerting policy by specifying the fields to be updated via updateMask. Returns the updated alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.</td>
</tr>
<tr>
    <td><a href="#projects_alert_policies_delete"><CopyableCode code="projects_alert_policies_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-alertPoliciesId"><code>alertPoliciesId</code></a></td>
    <td></td>
    <td>Deletes an alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.</td>
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
<tr id="parameter-alertPoliciesId">
    <td><CopyableCode code="alertPoliciesId" /></td>
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
<tr id="parameter-updateMask">
    <td><CopyableCode code="updateMask" /></td>
    <td><code>string (google-fieldmask)</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="projects_alert_policies_get"
    values={[
        { label: 'projects_alert_policies_get', value: 'projects_alert_policies_get' },
        { label: 'projects_alert_policies_list', value: 'projects_alert_policies_list' }
    ]}
>
<TabItem value="projects_alert_policies_get">

Gets a single alerting policy.

```sql
SELECT
name,
alertStrategy,
combiner,
conditions,
creationRecord,
displayName,
documentation,
enabled,
mutationRecord,
notificationChannels,
severity,
userLabels,
validity
FROM google.monitoring.alert_policies
WHERE projectsId = '{{ projectsId }}' -- required
AND alertPoliciesId = '{{ alertPoliciesId }}' -- required
;
```
</TabItem>
<TabItem value="projects_alert_policies_list">

Lists the existing alerting policies for the workspace.

```sql
SELECT
name,
alertStrategy,
combiner,
conditions,
creationRecord,
displayName,
documentation,
enabled,
mutationRecord,
notificationChannels,
severity,
userLabels,
validity
FROM google.monitoring.alert_policies
WHERE projectsId = '{{ projectsId }}' -- required
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
    defaultValue="projects_alert_policies_create"
    values={[
        { label: 'projects_alert_policies_create', value: 'projects_alert_policies_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="projects_alert_policies_create">

Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.

```sql
INSERT INTO google.monitoring.alert_policies (
data__alertStrategy,
data__combiner,
data__conditions,
data__creationRecord,
data__displayName,
data__documentation,
data__enabled,
data__mutationRecord,
data__name,
data__notificationChannels,
data__severity,
data__userLabels,
data__validity,
projectsId
)
SELECT 
'{{ alertStrategy }}',
'{{ combiner }}',
'{{ conditions }}',
'{{ creationRecord }}',
'{{ displayName }}',
'{{ documentation }}',
{{ enabled }},
'{{ mutationRecord }}',
'{{ name }}',
'{{ notificationChannels }}',
'{{ severity }}',
'{{ userLabels }}',
'{{ validity }}',
'{{ projectsId }}'
RETURNING
name,
alertStrategy,
combiner,
conditions,
creationRecord,
displayName,
documentation,
enabled,
mutationRecord,
notificationChannels,
severity,
userLabels,
validity
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: alert_policies
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the alert_policies resource.
    - name: alertStrategy
      description: |
        Control over how this alerting policy's notification channels are notified.
      value:
        autoClose: "{{ autoClose }}"
        notificationChannelStrategy:
          - notificationChannelNames: "{{ notificationChannelNames }}"
            renotifyInterval: "{{ renotifyInterval }}"
        notificationPrompts:
          - "{{ notificationPrompts }}"
        notificationRateLimit:
          period: "{{ period }}"
    - name: combiner
      value: "{{ combiner }}"
      description: |
        How to combine the results of multiple conditions to determine if an incident should be opened. If condition_time_series_query_language is present, this must be COMBINE_UNSPECIFIED.
      valid_values: ['COMBINE_UNSPECIFIED', 'AND', 'OR', 'AND_WITH_MATCHING_RESOURCE']
    - name: conditions
      description: |
        A list of conditions for the policy. The conditions are combined by AND or OR according to the combiner field. If the combined conditions evaluate to true, then an incident is created. A policy can have from one to six conditions. If condition_time_series_query_language is present, it must be the only condition. If condition_monitoring_query_language is present, it must be the only condition.
      value:
        - conditionAbsent:
            aggregations:
              - alignmentPeriod: "{{ alignmentPeriod }}"
                crossSeriesReducer: "{{ crossSeriesReducer }}"
                groupByFields: "{{ groupByFields }}"
                perSeriesAligner: "{{ perSeriesAligner }}"
            duration: "{{ duration }}"
            filter: "{{ filter }}"
            trigger:
              count: {{ count }}
              percent: {{ percent }}
          conditionMatchedLog:
            filter: "{{ filter }}"
            labelExtractors: "{{ labelExtractors }}"
          conditionMonitoringQueryLanguage:
            duration: "{{ duration }}"
            evaluationMissingData: "{{ evaluationMissingData }}"
            query: "{{ query }}"
            trigger:
              count: {{ count }}
              percent: {{ percent }}
          conditionPrometheusQueryLanguage:
            alertRule: "{{ alertRule }}"
            disableMetricValidation: {{ disableMetricValidation }}
            duration: "{{ duration }}"
            evaluationInterval: "{{ evaluationInterval }}"
            labels: "{{ labels }}"
            query: "{{ query }}"
            ruleGroup: "{{ ruleGroup }}"
          conditionSql:
            booleanTest:
              column: "{{ column }}"
            daily:
              executionTime:
                hours: {{ hours }}
                minutes: {{ minutes }}
                nanos: {{ nanos }}
                seconds: {{ seconds }}
              periodicity: {{ periodicity }}
            hourly:
              minuteOffset: {{ minuteOffset }}
              periodicity: {{ periodicity }}
            minutes:
              periodicity: {{ periodicity }}
            query: "{{ query }}"
            rowCountTest:
              comparison: "{{ comparison }}"
              threshold: "{{ threshold }}"
          conditionThreshold:
            aggregations:
              - alignmentPeriod: "{{ alignmentPeriod }}"
                crossSeriesReducer: "{{ crossSeriesReducer }}"
                groupByFields: "{{ groupByFields }}"
                perSeriesAligner: "{{ perSeriesAligner }}"
            comparison: "{{ comparison }}"
            denominatorAggregations:
              - alignmentPeriod: "{{ alignmentPeriod }}"
                crossSeriesReducer: "{{ crossSeriesReducer }}"
                groupByFields: "{{ groupByFields }}"
                perSeriesAligner: "{{ perSeriesAligner }}"
            denominatorFilter: "{{ denominatorFilter }}"
            duration: "{{ duration }}"
            evaluationMissingData: "{{ evaluationMissingData }}"
            filter: "{{ filter }}"
            forecastOptions:
              forecastHorizon: "{{ forecastHorizon }}"
            thresholdValue: {{ thresholdValue }}
            trigger:
              count: {{ count }}
              percent: {{ percent }}
          displayName: "{{ displayName }}"
          name: "{{ name }}"
    - name: creationRecord
      description: |
        A read-only record of the creation of the alerting policy. If provided in a call to create or update, this field will be ignored.
      value:
        mutateTime: "{{ mutateTime }}"
        mutatedBy: "{{ mutatedBy }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A short name or phrase used to identify the policy in dashboards, notifications, and incidents. To avoid confusion, don't use the same display name for multiple policies in the same project. The name is limited to 512 Unicode characters.The convention for the display_name of a PrometheusQueryLanguageCondition is "{rule group name}/{alert name}", where the {rule group name} and {alert name} should be taken from the corresponding Prometheus configuration file. This convention is not enforced. In any case the display_name is not a unique key of the AlertPolicy.
    - name: documentation
      description: |
        Documentation that is included with notifications and incidents related to this policy. Best practice is for the documentation to include information to help responders understand, mitigate, escalate, and correct the underlying problems detected by the alerting policy. Notification channels that have limited capacity might not show this documentation.
      value:
        content: "{{ content }}"
        links:
          - displayName: "{{ displayName }}"
            url: "{{ url }}"
        mimeType: "{{ mimeType }}"
        subject: "{{ subject }}"
    - name: enabled
      value: {{ enabled }}
      description: |
        Whether or not the policy is enabled. On write, the default interpretation if unset is that the policy is enabled. On read, clients should not make any assumption about the state if it has not been populated. The field should always be populated on List and Get operations, unless a field projection has been specified that strips it out.
    - name: mutationRecord
      description: |
        A read-only record of the most recent change to the alerting policy. If provided in a call to create or update, this field will be ignored.
      value:
        mutateTime: "{{ mutateTime }}"
        mutatedBy: "{{ mutatedBy }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. Required if the policy exists. The resource name for this policy. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID] [ALERT_POLICY_ID] is assigned by Cloud Monitoring when the policy is created. When calling the alertPolicies.create method, do not include the name field in the alerting policy passed as part of the request.
    - name: notificationChannels
      value:
        - "{{ notificationChannels }}"
      description: |
        Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident. Each element of this array corresponds to the name field in each of the NotificationChannel objects that are returned from the ListNotificationChannels method. The format of the entries in this field is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID]
    - name: severity
      value: "{{ severity }}"
      description: |
        Optional. The severity of an alerting policy indicates how important incidents generated by that policy are. The severity level will be displayed on the Incident detail page and in notifications.
      valid_values: ['SEVERITY_UNSPECIFIED', 'CRITICAL', 'ERROR', 'WARNING']
    - name: userLabels
      value: "{{ userLabels }}"
      description: |
        User-supplied key/value data to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.Note that Prometheus {alert name} is a valid Prometheus label names (https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels), whereas Prometheus {rule group} is an unrestricted UTF-8 string. This means that they cannot be stored as-is in user labels, because they may contain characters that are not allowed in user-label values.
    - name: validity
      description: |
        Read-only description of how the alerting policy is invalid. This field is only set when the alerting policy is invalid. An invalid alerting policy will not generate incidents.
      value:
        code: {{ code }}
        details: "{{ details }}"
        message: "{{ message }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="projects_alert_policies_patch"
    values={[
        { label: 'projects_alert_policies_patch', value: 'projects_alert_policies_patch' }
    ]}
>
<TabItem value="projects_alert_policies_patch">

Updates an alerting policy. You can either replace the entire policy with a new one or replace only certain fields in the current alerting policy by specifying the fields to be updated via updateMask. Returns the updated alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.

```sql
UPDATE google.monitoring.alert_policies
SET 
data__alertStrategy = '{{ alertStrategy }}',
data__combiner = '{{ combiner }}',
data__conditions = '{{ conditions }}',
data__creationRecord = '{{ creationRecord }}',
data__displayName = '{{ displayName }}',
data__documentation = '{{ documentation }}',
data__enabled = {{ enabled }},
data__mutationRecord = '{{ mutationRecord }}',
data__name = '{{ name }}',
data__notificationChannels = '{{ notificationChannels }}',
data__severity = '{{ severity }}',
data__userLabels = '{{ userLabels }}',
data__validity = '{{ validity }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND alertPoliciesId = '{{ alertPoliciesId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
alertStrategy,
combiner,
conditions,
creationRecord,
displayName,
documentation,
enabled,
mutationRecord,
notificationChannels,
severity,
userLabels,
validity;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="projects_alert_policies_delete"
    values={[
        { label: 'projects_alert_policies_delete', value: 'projects_alert_policies_delete' }
    ]}
>
<TabItem value="projects_alert_policies_delete">

Deletes an alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.

```sql
DELETE FROM google.monitoring.alert_policies
WHERE projectsId = '{{ projectsId }}' --required
AND alertPoliciesId = '{{ alertPoliciesId }}' --required
;
```
</TabItem>
</Tabs>
