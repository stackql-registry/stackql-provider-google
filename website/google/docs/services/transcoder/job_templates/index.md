--- 
title: job_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - job_templates
  - transcoder
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

Creates, updates, deletes, gets or lists a <code>job_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.transcoder.job_templates" /></td></tr>
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
    <td>The resource name of the job template. Format: `projects/&#123;project_number&#125;/locations/&#123;location&#125;/jobTemplates/&#123;job_template&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>The configuration for this template. (id: JobConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels associated with this job template. You can use these to organize and group your job templates.</td>
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
    <td>The resource name of the job template. Format: `projects/&#123;project_number&#125;/locations/&#123;location&#125;/jobTemplates/&#123;job_template&#125;`</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>The configuration for this template. (id: JobConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The labels associated with this job template. You can use these to organize and group your job templates.</td>
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
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobTemplatesId"><code>jobTemplatesId</code></a></td>
    <td></td>
    <td>Returns the job template data.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists job templates in the specified region.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a></td>
    <td><a href="#parameter-jobTemplateId"><code>jobTemplateId</code></a></td>
    <td>Creates a job template in the specified region.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-projectsId"><code>projectsId</code></a>, <a href="#parameter-locationsId"><code>locationsId</code></a>, <a href="#parameter-jobTemplatesId"><code>jobTemplatesId</code></a></td>
    <td><a href="#parameter-allowMissing"><code>allowMissing</code></a></td>
    <td>Deletes a job template.</td>
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
<tr id="parameter-jobTemplatesId">
    <td><CopyableCode code="jobTemplatesId" /></td>
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
<tr id="parameter-allowMissing">
    <td><CopyableCode code="allowMissing" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-jobTemplateId">
    <td><CopyableCode code="jobTemplateId" /></td>
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

Returns the job template data.

```sql
SELECT
name,
config,
labels
FROM google.transcoder.job_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
AND jobTemplatesId = '{{ jobTemplatesId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists job templates in the specified region.

```sql
SELECT
name,
config,
labels
FROM google.transcoder.job_templates
WHERE projectsId = '{{ projectsId }}' -- required
AND locationsId = '{{ locationsId }}' -- required
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

Creates a job template in the specified region.

```sql
INSERT INTO google.transcoder.job_templates (
data__config,
data__labels,
data__name,
projectsId,
locationsId,
jobTemplateId
)
SELECT 
'{{ config }}',
'{{ labels }}',
'{{ name }}',
'{{ projectsId }}',
'{{ locationsId }}',
'{{ jobTemplateId }}'
RETURNING
name,
config,
labels
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: job_templates
  props:
    - name: projectsId
      value: "{{ projectsId }}"
      description: Required parameter for the job_templates resource.
    - name: locationsId
      value: "{{ locationsId }}"
      description: Required parameter for the job_templates resource.
    - name: config
      description: |
        The configuration for this template.
      value:
        adBreaks:
          - startTimeOffset: "{{ startTimeOffset }}"
        editList:
          - endTimeOffset: "{{ endTimeOffset }}"
            inputs: "{{ inputs }}"
            key: "{{ key }}"
            startTimeOffset: "{{ startTimeOffset }}"
        elementaryStreams:
          - audioStream:
              bitrateBps: {{ bitrateBps }}
              channelCount: {{ channelCount }}
              channelLayout:
                - "{{ channelLayout }}"
              codec: "{{ codec }}"
              displayName: "{{ displayName }}"
              languageCode: "{{ languageCode }}"
              mapping:
                - atomKey: "{{ atomKey }}"
                  gainDb: {{ gainDb }}
                  inputChannel: {{ inputChannel }}
                  inputKey: "{{ inputKey }}"
                  inputTrack: {{ inputTrack }}
                  outputChannel: {{ outputChannel }}
              sampleRateHertz: {{ sampleRateHertz }}
            key: "{{ key }}"
            textStream:
              codec: "{{ codec }}"
              displayName: "{{ displayName }}"
              languageCode: "{{ languageCode }}"
              mapping:
                - atomKey: "{{ atomKey }}"
                  inputKey: "{{ inputKey }}"
                  inputTrack: {{ inputTrack }}
            videoStream:
              h264:
                allowOpenGop: {{ allowOpenGop }}
                aqStrength: {{ aqStrength }}
                bFrameCount: {{ bFrameCount }}
                bPyramid: {{ bPyramid }}
                bitrateBps: {{ bitrateBps }}
                crfLevel: {{ crfLevel }}
                enableTwoPass: {{ enableTwoPass }}
                entropyCoder: "{{ entropyCoder }}"
                frameRate: {{ frameRate }}
                frameRateConversionStrategy: "{{ frameRateConversionStrategy }}"
                gopDuration: "{{ gopDuration }}"
                gopFrameCount: {{ gopFrameCount }}
                heightPixels: {{ heightPixels }}
                hlg: "{{ hlg }}"
                pixelFormat: "{{ pixelFormat }}"
                preset: "{{ preset }}"
                profile: "{{ profile }}"
                rateControlMode: "{{ rateControlMode }}"
                sdr: "{{ sdr }}"
                tune: "{{ tune }}"
                vbvFullnessBits: {{ vbvFullnessBits }}
                vbvSizeBits: {{ vbvSizeBits }}
                widthPixels: {{ widthPixels }}
              h265:
                allowOpenGop: {{ allowOpenGop }}
                aqStrength: {{ aqStrength }}
                bFrameCount: {{ bFrameCount }}
                bPyramid: {{ bPyramid }}
                bitrateBps: {{ bitrateBps }}
                crfLevel: {{ crfLevel }}
                enableTwoPass: {{ enableTwoPass }}
                frameRate: {{ frameRate }}
                frameRateConversionStrategy: "{{ frameRateConversionStrategy }}"
                gopDuration: "{{ gopDuration }}"
                gopFrameCount: {{ gopFrameCount }}
                hdr10: "{{ hdr10 }}"
                heightPixels: {{ heightPixels }}
                hlg: "{{ hlg }}"
                pixelFormat: "{{ pixelFormat }}"
                preset: "{{ preset }}"
                profile: "{{ profile }}"
                rateControlMode: "{{ rateControlMode }}"
                sdr: "{{ sdr }}"
                tune: "{{ tune }}"
                vbvFullnessBits: {{ vbvFullnessBits }}
                vbvSizeBits: {{ vbvSizeBits }}
                widthPixels: {{ widthPixels }}
              vp9:
                bitrateBps: {{ bitrateBps }}
                crfLevel: {{ crfLevel }}
                frameRate: {{ frameRate }}
                frameRateConversionStrategy: "{{ frameRateConversionStrategy }}"
                gopDuration: "{{ gopDuration }}"
                gopFrameCount: {{ gopFrameCount }}
                heightPixels: {{ heightPixels }}
                hlg: "{{ hlg }}"
                pixelFormat: "{{ pixelFormat }}"
                profile: "{{ profile }}"
                rateControlMode: "{{ rateControlMode }}"
                sdr: "{{ sdr }}"
                widthPixels: {{ widthPixels }}
        encryptions:
          - aes128: "{{ aes128 }}"
            drmSystems:
              clearkey: "{{ clearkey }}"
              fairplay: "{{ fairplay }}"
              playready: "{{ playready }}"
              widevine: "{{ widevine }}"
            id: "{{ id }}"
            mpegCenc:
              scheme: "{{ scheme }}"
            sampleAes: "{{ sampleAes }}"
            secretManagerKeySource:
              secretVersion: "{{ secretVersion }}"
        inputs:
          - attributes:
              trackDefinitions:
                - detectLanguages: {{ detectLanguages }}
                  detectedLanguages: "{{ detectedLanguages }}"
                  inputTrack: {{ inputTrack }}
                  languages: "{{ languages }}"
            key: "{{ key }}"
            preprocessingConfig:
              audio:
                highBoost: {{ highBoost }}
                lowBoost: {{ lowBoost }}
                lufs: {{ lufs }}
              color:
                brightness: {{ brightness }}
                contrast: {{ contrast }}
                saturation: {{ saturation }}
              crop:
                bottomPixels: {{ bottomPixels }}
                leftPixels: {{ leftPixels }}
                rightPixels: {{ rightPixels }}
                topPixels: {{ topPixels }}
              deblock:
                enabled: {{ enabled }}
                strength: {{ strength }}
              deinterlace:
                bwdif:
                  deinterlaceAllFrames: {{ deinterlaceAllFrames }}
                  mode: "{{ mode }}"
                  parity: "{{ parity }}"
                yadif:
                  deinterlaceAllFrames: {{ deinterlaceAllFrames }}
                  disableSpatialInterlacing: {{ disableSpatialInterlacing }}
                  mode: "{{ mode }}"
                  parity: "{{ parity }}"
              denoise:
                strength: {{ strength }}
                tune: "{{ tune }}"
              pad:
                bottomPixels: {{ bottomPixels }}
                leftPixels: {{ leftPixels }}
                rightPixels: {{ rightPixels }}
                topPixels: {{ topPixels }}
            uri: "{{ uri }}"
        manifests:
          - dash:
              segmentReferenceScheme: "{{ segmentReferenceScheme }}"
            fileName: "{{ fileName }}"
            muxStreams: "{{ muxStreams }}"
            type: "{{ type }}"
        muxStreams:
          - container: "{{ container }}"
            elementaryStreams: "{{ elementaryStreams }}"
            encryptionId: "{{ encryptionId }}"
            fileName: "{{ fileName }}"
            fmp4:
              codecTag: "{{ codecTag }}"
            key: "{{ key }}"
            segmentSettings:
              individualSegments: {{ individualSegments }}
              segmentDuration: "{{ segmentDuration }}"
        output:
          uri: "{{ uri }}"
        overlays:
          - animations: "{{ animations }}"
            image:
              alpha: {{ alpha }}
              resolution:
                x: {{ x }}
                y: {{ y }}
              uri: "{{ uri }}"
        pubsubDestination:
          topic: "{{ topic }}"
        spriteSheets:
          - columnCount: {{ columnCount }}
            endTimeOffset: "{{ endTimeOffset }}"
            filePrefix: "{{ filePrefix }}"
            format: "{{ format }}"
            interval: "{{ interval }}"
            quality: {{ quality }}
            rowCount: {{ rowCount }}
            spriteHeightPixels: {{ spriteHeightPixels }}
            spriteWidthPixels: {{ spriteWidthPixels }}
            startTimeOffset: "{{ startTimeOffset }}"
            totalCount: {{ totalCount }}
    - name: labels
      value: "{{ labels }}"
      description: |
        The labels associated with this job template. You can use these to organize and group your job templates.
    - name: name
      value: "{{ name }}"
      description: |
        The resource name of the job template. Format: \`projects/{project_number}/locations/{location}/jobTemplates/{job_template}\`
    - name: jobTemplateId
      value: "{{ jobTemplateId }}"
`}</CodeBlock>

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

Deletes a job template.

```sql
DELETE FROM google.transcoder.job_templates
WHERE projectsId = '{{ projectsId }}' --required
AND locationsId = '{{ locationsId }}' --required
AND jobTemplatesId = '{{ jobTemplatesId }}' --required
AND allowMissing = '{{ allowMissing }}'
;
```
</TabItem>
</Tabs>
