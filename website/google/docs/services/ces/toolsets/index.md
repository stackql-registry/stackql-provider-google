--- 
title: toolsets
hide_title: false
hide_table_of_contents: false
keywords:
  - toolsets
  - ces
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

Creates, updates, deletes, gets or lists a <code>toolsets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="toolsets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.ces.toolsets" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. The unique identifier of the toolset. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/toolsets/&#123;toolset&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="connectorToolset" /></td>
    <td><code>object</code></td>
    <td>Optional. A toolset that generates tools from an Integration Connectors Connection. (id: ConnectorToolset)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the toolset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the toolset.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the toolset. Must be unique within the same app.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.</td>
</tr>
<tr>
    <td><CopyableCode code="executionType" /></td>
    <td><code>string</code></td>
    <td>Optional. The execution type of the tools in the toolset. (EXECUTION_TYPE_UNSPECIFIED, SYNCHRONOUS, ASYNCHRONOUS)</td>
</tr>
<tr>
    <td><CopyableCode code="mcpToolset" /></td>
    <td><code>object</code></td>
    <td>Optional. A toolset that contains a list of tools that are offered by the MCP server. (id: McpToolset)</td>
</tr>
<tr>
    <td><CopyableCode code="openApiToolset" /></td>
    <td><code>object</code></td>
    <td>Optional. A toolset that contains a list of tools that are defined by an OpenAPI schema. (id: OpenApiToolset)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. The timeout for the toolset execution. If not set, the default timeout is 30 seconds for `SYNCHRONOUS` toolsets and 60 seconds for `ASYNCHRONOUS` toolsets.</td>
</tr>
<tr>
    <td><CopyableCode code="toolFakeConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for tools behavior in fake mode. (id: ToolFakeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the toolset was last updated.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Identifier. The unique identifier of the toolset. Format: `projects/&#123;project&#125;/locations/&#123;location&#125;/apps/&#123;app&#125;/toolsets/&#123;toolset&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="connectorToolset" /></td>
    <td><code>object</code></td>
    <td>Optional. A toolset that generates tools from an Integration Connectors Connection. (id: ConnectorToolset)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the toolset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional. The description of the toolset.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Optional. The display name of the toolset. Must be unique within the same app.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>ETag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.</td>
</tr>
<tr>
    <td><CopyableCode code="executionType" /></td>
    <td><code>string</code></td>
    <td>Optional. The execution type of the tools in the toolset. (EXECUTION_TYPE_UNSPECIFIED, SYNCHRONOUS, ASYNCHRONOUS)</td>
</tr>
<tr>
    <td><CopyableCode code="mcpToolset" /></td>
    <td><code>object</code></td>
    <td>Optional. A toolset that contains a list of tools that are offered by the MCP server. (id: McpToolset)</td>
</tr>
<tr>
    <td><CopyableCode code="openApiToolset" /></td>
    <td><code>object</code></td>
    <td>Optional. A toolset that contains a list of tools that are defined by an OpenAPI schema. (id: OpenApiToolset)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>string (google-duration)</code></td>
    <td>Optional. The timeout for the toolset execution. If not set, the default timeout is 30 seconds for `SYNCHRONOUS` toolsets and 60 seconds for `ASYNCHRONOUS` toolsets.</td>
</tr>
<tr>
    <td><CopyableCode code="toolFakeConfig" /></td>
    <td><code>object</code></td>
    <td>Optional. Configuration for tools behavior in fake mode. (id: ToolFakeConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. Timestamp when the toolset was last updated.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-toolsetsId"><code>toolsetsId</code></a></td>
    <td></td>
    <td>Gets details of the specified toolset.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists toolsets in the given app.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a></td>
    <td><a href="#parameter-toolsetId"><code>toolsetId</code></a></td>
    <td>Creates a new toolset in the given app.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-toolsetsId"><code>toolsetsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates the specified toolset.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-appsId"><code>appsId</code></a>, <a href="#parameter-toolsetsId"><code>toolsetsId</code></a></td>
    <td><a href="#parameter-etag"><code>etag</code></a>, <a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes the specified toolset.</td>
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
<tr id="parameter-toolsetsId">
    <td><CopyableCode code="toolsetsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-etag">
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
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
<tr id="parameter-toolsetId">
    <td><CopyableCode code="toolsetId" /></td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets details of the specified toolset.

```sql
SELECT
name,
connectorToolset,
createTime,
description,
displayName,
etag,
executionType,
mcpToolset,
openApiToolset,
timeout,
toolFakeConfig,
updateTime
FROM google.ces.toolsets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND appsId = '{{ appsId }}' -- required
AND toolsetsId = '{{ toolsetsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists toolsets in the given app.

```sql
SELECT
name,
connectorToolset,
createTime,
description,
displayName,
etag,
executionType,
mcpToolset,
openApiToolset,
timeout,
toolFakeConfig,
updateTime
FROM google.ces.toolsets
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND appsId = '{{ appsId }}' -- required
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
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new toolset in the given app.

```sql
INSERT INTO google.ces.toolsets (
data__connectorToolset,
data__description,
data__displayName,
data__etag,
data__executionType,
data__mcpToolset,
data__name,
data__openApiToolset,
data__timeout,
data__toolFakeConfig,
projectsId,
locationsId,
appsId,
toolsetId
)
SELECT 
'{{ connectorToolset }}',
'{{ description }}',
'{{ displayName }}',
'{{ etag }}',
'{{ executionType }}',
'{{ mcpToolset }}',
'{{ name }}',
'{{ openApiToolset }}',
'{{ timeout }}',
'{{ toolFakeConfig }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ appsId }}',
'{{ toolsetId }}'
RETURNING
name,
connectorToolset,
createTime,
description,
displayName,
etag,
executionType,
mcpToolset,
openApiToolset,
timeout,
toolFakeConfig,
updateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: toolsets
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the toolsets resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the toolsets resource.
    - name: appsId
      value: "{{ appsId }}"
      description: Required parameter for the toolsets resource.
    - name: connectorToolset
      description: |
        Optional. A toolset that generates tools from an Integration Connectors Connection.
      value:
        authConfig:
          oauth2AuthCodeConfig:
            oauthToken: "{{ oauthToken }}"
          oauth2JwtBearerConfig:
            clientKey: "{{ clientKey }}"
            issuer: "{{ issuer }}"
            subject: "{{ subject }}"
        connection: "{{ connection }}"
        connectorActions:
          - connectionActionId: "{{ connectionActionId }}"
            entityOperation:
              entityId: "{{ entityId }}"
              operation: "{{ operation }}"
            inputFields: "{{ inputFields }}"
            outputFields: "{{ outputFields }}"
    - name: description
      value: "{{ description }}"
      description: |
        Optional. The description of the toolset.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Optional. The display name of the toolset. Must be unique within the same app.
    - name: etag
      value: "{{ etag }}"
      description: |
        ETag used to ensure the object hasn't changed during a read-modify-write operation. If the etag is empty, the update will overwrite any concurrent changes.
    - name: executionType
      value: "{{ executionType }}"
      description: |
        Optional. The execution type of the tools in the toolset.
      valid_values: ['EXECUTION_TYPE_UNSPECIFIED', 'SYNCHRONOUS', 'ASYNCHRONOUS']
    - name: mcpToolset
      description: |
        Optional. A toolset that contains a list of tools that are offered by the MCP server.
      value:
        apiAuthentication:
          apiKeyConfig:
            apiKeySecretVersion: "{{ apiKeySecretVersion }}"
            keyName: "{{ keyName }}"
            requestLocation: "{{ requestLocation }}"
          bearerTokenConfig:
            token: "{{ token }}"
          oauthConfig:
            clientId: "{{ clientId }}"
            clientSecretVersion: "{{ clientSecretVersion }}"
            oauthGrantType: "{{ oauthGrantType }}"
            scopes:
              - "{{ scopes }}"
            tokenEndpoint: "{{ tokenEndpoint }}"
          serviceAccountAuthConfig:
            scopes:
              - "{{ scopes }}"
            serviceAccount: "{{ serviceAccount }}"
          serviceAgentIdTokenAuthConfig: "{{ serviceAgentIdTokenAuthConfig }}"
        customHeaders: "{{ customHeaders }}"
        serverAddress: "{{ serverAddress }}"
        serviceDirectoryConfig:
          service: "{{ service }}"
        tlsConfig:
          caCerts:
            - cert: "{{ cert }}"
              displayName: "{{ displayName }}"
        toolOverrides:
          - descriptionOverride: "{{ descriptionOverride }}"
            nameOverride: "{{ nameOverride }}"
            snapshot:
              description: "{{ description }}"
              inputSchema:
                additionalProperties:
                  additionalProperties: "{{ additionalProperties }}"
                  anyOf: "{{ anyOf }}"
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum: "{{ enum }}"
                  items: "{{ items }}"
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems: "{{ prefixItems }}"
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required: "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
                anyOf:
                  - additionalProperties:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                default: "{{ default }}"
                defs: "{{ defs }}"
                description: "{{ description }}"
                enum:
                  - "{{ enum }}"
                items:
                  additionalProperties: "{{ additionalProperties }}"
                  anyOf: "{{ anyOf }}"
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum: "{{ enum }}"
                  items: "{{ items }}"
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems: "{{ prefixItems }}"
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required: "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
                maxItems: "{{ maxItems }}"
                maximum: {{ maximum }}
                minItems: "{{ minItems }}"
                minimum: {{ minimum }}
                nullable: {{ nullable }}
                prefixItems:
                  - additionalProperties:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                properties: "{{ properties }}"
                ref: "{{ ref }}"
                required:
                  - "{{ required }}"
                title: "{{ title }}"
                type: "{{ type }}"
                uniqueItems: {{ uniqueItems }}
              outputSchema:
                additionalProperties:
                  additionalProperties: "{{ additionalProperties }}"
                  anyOf: "{{ anyOf }}"
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum: "{{ enum }}"
                  items: "{{ items }}"
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems: "{{ prefixItems }}"
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required: "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
                anyOf:
                  - additionalProperties:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                default: "{{ default }}"
                defs: "{{ defs }}"
                description: "{{ description }}"
                enum:
                  - "{{ enum }}"
                items:
                  additionalProperties: "{{ additionalProperties }}"
                  anyOf: "{{ anyOf }}"
                  default: "{{ default }}"
                  defs: "{{ defs }}"
                  description: "{{ description }}"
                  enum: "{{ enum }}"
                  items: "{{ items }}"
                  maxItems: "{{ maxItems }}"
                  maximum: {{ maximum }}
                  minItems: "{{ minItems }}"
                  minimum: {{ minimum }}
                  nullable: {{ nullable }}
                  prefixItems: "{{ prefixItems }}"
                  properties: "{{ properties }}"
                  ref: "{{ ref }}"
                  required: "{{ required }}"
                  title: "{{ title }}"
                  type: "{{ type }}"
                  uniqueItems: {{ uniqueItems }}
                maxItems: "{{ maxItems }}"
                maximum: {{ maximum }}
                minItems: "{{ minItems }}"
                minimum: {{ minimum }}
                nullable: {{ nullable }}
                prefixItems:
                  - additionalProperties:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    anyOf: "{{ anyOf }}"
                    default: "{{ default }}"
                    defs: "{{ defs }}"
                    description: "{{ description }}"
                    enum: "{{ enum }}"
                    items:
                      additionalProperties: "{{ additionalProperties }}"
                      anyOf: "{{ anyOf }}"
                      default: "{{ default }}"
                      defs: "{{ defs }}"
                      description: "{{ description }}"
                      enum: "{{ enum }}"
                      items: "{{ items }}"
                      maxItems: "{{ maxItems }}"
                      maximum: {{ maximum }}
                      minItems: "{{ minItems }}"
                      minimum: {{ minimum }}
                      nullable: {{ nullable }}
                      prefixItems: "{{ prefixItems }}"
                      properties: "{{ properties }}"
                      ref: "{{ ref }}"
                      required: "{{ required }}"
                      title: "{{ title }}"
                      type: "{{ type }}"
                      uniqueItems: {{ uniqueItems }}
                    maxItems: "{{ maxItems }}"
                    maximum: {{ maximum }}
                    minItems: "{{ minItems }}"
                    minimum: {{ minimum }}
                    nullable: {{ nullable }}
                    prefixItems: "{{ prefixItems }}"
                    properties: "{{ properties }}"
                    ref: "{{ ref }}"
                    required: "{{ required }}"
                    title: "{{ title }}"
                    type: "{{ type }}"
                    uniqueItems: {{ uniqueItems }}
                properties: "{{ properties }}"
                ref: "{{ ref }}"
                required:
                  - "{{ required }}"
                title: "{{ title }}"
                type: "{{ type }}"
                uniqueItems: {{ uniqueItems }}
            tool: "{{ tool }}"
    - name: name
      value: "{{ name }}"
      description: |
        Identifier. The unique identifier of the toolset. Format: \`projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}\`
    - name: openApiToolset
      description: |
        Optional. A toolset that contains a list of tools that are defined by an OpenAPI schema.
      value:
        apiAuthentication:
          apiKeyConfig:
            apiKeySecretVersion: "{{ apiKeySecretVersion }}"
            keyName: "{{ keyName }}"
            requestLocation: "{{ requestLocation }}"
          bearerTokenConfig:
            token: "{{ token }}"
          oauthConfig:
            clientId: "{{ clientId }}"
            clientSecretVersion: "{{ clientSecretVersion }}"
            oauthGrantType: "{{ oauthGrantType }}"
            scopes:
              - "{{ scopes }}"
            tokenEndpoint: "{{ tokenEndpoint }}"
          serviceAccountAuthConfig:
            scopes:
              - "{{ scopes }}"
            serviceAccount: "{{ serviceAccount }}"
          serviceAgentIdTokenAuthConfig: "{{ serviceAgentIdTokenAuthConfig }}"
        ignoreUnknownFields: {{ ignoreUnknownFields }}
        openApiSchema: "{{ openApiSchema }}"
        serviceDirectoryConfig:
          service: "{{ service }}"
        tlsConfig:
          caCerts:
            - cert: "{{ cert }}"
              displayName: "{{ displayName }}"
        url: "{{ url }}"
    - name: timeout
      value: "{{ timeout }}"
      description: |
        Optional. The timeout for the toolset execution. If not set, the default timeout is 30 seconds for \`SYNCHRONOUS\` toolsets and 60 seconds for \`ASYNCHRONOUS\` toolsets.
    - name: toolFakeConfig
      description: |
        Optional. Configuration for tools behavior in fake mode.
      value:
        codeBlock:
          pythonCode: "{{ pythonCode }}"
        enableFakeMode: {{ enableFakeMode }}
    - name: toolsetId
      value: "{{ toolsetId }}"
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

Updates the specified toolset.

```sql
UPDATE google.ces.toolsets
SET 
data__connectorToolset = '{{ connectorToolset }}',
data__description = '{{ description }}',
data__displayName = '{{ displayName }}',
data__etag = '{{ etag }}',
data__executionType = '{{ executionType }}',
data__mcpToolset = '{{ mcpToolset }}',
data__name = '{{ name }}',
data__openApiToolset = '{{ openApiToolset }}',
data__timeout = '{{ timeout }}',
data__toolFakeConfig = '{{ toolFakeConfig }}'
WHERE 
projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND appsId = '{{ appsId }}' --required
AND toolsetsId = '{{ toolsetsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
connectorToolset,
createTime,
description,
displayName,
etag,
executionType,
mcpToolset,
openApiToolset,
timeout,
toolFakeConfig,
updateTime;
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

Deletes the specified toolset.

```sql
DELETE FROM google.ces.toolsets
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND appsId = '{{ appsId }}' --required
AND toolsetsId = '{{ toolsetsId }}' --required
AND etag = '{{ etag }}'
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>
