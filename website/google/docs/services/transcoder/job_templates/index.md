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
    <td><a href="#parameter-orderBy"><code>orderBy</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
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
AND orderBy = '{{ orderBy }}'
AND filter = '{{ filter }}'
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
data__name,
data__config,
data__labels,
projectsId,
locationsId,
jobTemplateId
)
SELECT 
'{{ name }}',
'{{ config }}',
'{{ labels }}',
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
    - name: name
      value: "{{ name }}"
      description: |
        The resource name of the job template. Format: \`projects/{project_number}/locations/{location}/jobTemplates/{job_template}\`
    - name: config
      description: |
        The configuration for this template.
      value:
        muxStreams:
          - fileName: "{{ fileName }}"
            container: "{{ container }}"
            fmp4:
              codecTag: "{{ codecTag }}"
            segmentSettings:
              segmentDuration: "{{ segmentDuration }}"
              individualSegments: {{ individualSegments }}
            key: "{{ key }}"
            encryptionId: "{{ encryptionId }}"
            elementaryStreams: "{{ elementaryStreams }}"
        overlays:
          - image:
              uri: "{{ uri }}"
              resolution:
                x: {{ x }}
                y: {{ y }}
              alpha: {{ alpha }}
            animations: "{{ animations }}"
        manifests:
          - fileName: "{{ fileName }}"
            muxStreams: "{{ muxStreams }}"
            type: "{{ type }}"
            dash:
              segmentReferenceScheme: "{{ segmentReferenceScheme }}"
        spriteSheets:
          - columnCount: {{ columnCount }}
            startTimeOffset: "{{ startTimeOffset }}"
            spriteWidthPixels: {{ spriteWidthPixels }}
            rowCount: {{ rowCount }}
            endTimeOffset: "{{ endTimeOffset }}"
            totalCount: {{ totalCount }}
            format: "{{ format }}"
            interval: "{{ interval }}"
            filePrefix: "{{ filePrefix }}"
            spriteHeightPixels: {{ spriteHeightPixels }}
            quality: {{ quality }}
        output:
          uri: "{{ uri }}"
        encryptions:
          - drmSystems:
              fairplay: "{{ fairplay }}"
              widevine: "{{ widevine }}"
              playready: "{{ playready }}"
              clearkey: "{{ clearkey }}"
            aes128: "{{ aes128 }}"
            secretManagerKeySource:
              secretVersion: "{{ secretVersion }}"
            id: "{{ id }}"
            sampleAes: "{{ sampleAes }}"
            mpegCenc:
              scheme: "{{ scheme }}"
        adBreaks:
          - startTimeOffset: "{{ startTimeOffset }}"
        inputs:
          - uri: "{{ uri }}"
            preprocessingConfig:
              audio:
                highBoost: {{ highBoost }}
                lufs: {{ lufs }}
                lowBoost: {{ lowBoost }}
              deinterlace:
                yadif:
                  mode: "{{ mode }}"
                  disableSpatialInterlacing: {{ disableSpatialInterlacing }}
                  parity: "{{ parity }}"
                  deinterlaceAllFrames: {{ deinterlaceAllFrames }}
                bwdif:
                  mode: "{{ mode }}"
                  parity: "{{ parity }}"
                  deinterlaceAllFrames: {{ deinterlaceAllFrames }}
              color:
                contrast: {{ contrast }}
                brightness: {{ brightness }}
                saturation: {{ saturation }}
              denoise:
                strength: {{ strength }}
                tune: "{{ tune }}"
              deblock:
                enabled: {{ enabled }}
                strength: {{ strength }}
              crop:
                topPixels: {{ topPixels }}
                bottomPixels: {{ bottomPixels }}
                leftPixels: {{ leftPixels }}
                rightPixels: {{ rightPixels }}
              pad:
                leftPixels: {{ leftPixels }}
                rightPixels: {{ rightPixels }}
                topPixels: {{ topPixels }}
                bottomPixels: {{ bottomPixels }}
            key: "{{ key }}"
            attributes:
              trackDefinitions:
                - languages: "{{ languages }}"
                  detectedLanguages: "{{ detectedLanguages }}"
                  inputTrack: {{ inputTrack }}
                  detectLanguages: {{ detectLanguages }}
        elementaryStreams:
          - key: "{{ key }}"
            textStream:
              codec: "{{ codec }}"
              mapping:
                - atomKey: "{{ atomKey }}"
                  inputKey: "{{ inputKey }}"
                  inputTrack: {{ inputTrack }}
              displayName: "{{ displayName }}"
              languageCode: "{{ languageCode }}"
            videoStream:
              h264:
                bitrateBps: {{ bitrateBps }}
                vbvFullnessBits: {{ vbvFullnessBits }}
                aqStrength: {{ aqStrength }}
                entropyCoder: "{{ entropyCoder }}"
                widthPixels: {{ widthPixels }}
                pixelFormat: "{{ pixelFormat }}"
                bPyramid: {{ bPyramid }}
                bFrameCount: {{ bFrameCount }}
                rateControlMode: "{{ rateControlMode }}"
                hlg: "{{ hlg }}"
                heightPixels: {{ heightPixels }}
                gopFrameCount: {{ gopFrameCount }}
                profile: "{{ profile }}"
                sdr: "{{ sdr }}"
                vbvSizeBits: {{ vbvSizeBits }}
                frameRateConversionStrategy: "{{ frameRateConversionStrategy }}"
                tune: "{{ tune }}"
                allowOpenGop: {{ allowOpenGop }}
                frameRate: {{ frameRate }}
                gopDuration: "{{ gopDuration }}"
                enableTwoPass: {{ enableTwoPass }}
                crfLevel: {{ crfLevel }}
                preset: "{{ preset }}"
              h265:
                frameRateConversionStrategy: "{{ frameRateConversionStrategy }}"
                hdr10: "{{ hdr10 }}"
                tune: "{{ tune }}"
                allowOpenGop: {{ allowOpenGop }}
                frameRate: {{ frameRate }}
                gopDuration: "{{ gopDuration }}"
                enableTwoPass: {{ enableTwoPass }}
                crfLevel: {{ crfLevel }}
                preset: "{{ preset }}"
                bitrateBps: {{ bitrateBps }}
                vbvFullnessBits: {{ vbvFullnessBits }}
                aqStrength: {{ aqStrength }}
                widthPixels: {{ widthPixels }}
                pixelFormat: "{{ pixelFormat }}"
                bPyramid: {{ bPyramid }}
                bFrameCount: {{ bFrameCount }}
                heightPixels: {{ heightPixels }}
                rateControlMode: "{{ rateControlMode }}"
                hlg: "{{ hlg }}"
                profile: "{{ profile }}"
                gopFrameCount: {{ gopFrameCount }}
                vbvSizeBits: {{ vbvSizeBits }}
                sdr: "{{ sdr }}"
              vp9:
                frameRate: {{ frameRate }}
                gopDuration: "{{ gopDuration }}"
                crfLevel: {{ crfLevel }}
                frameRateConversionStrategy: "{{ frameRateConversionStrategy }}"
                rateControlMode: "{{ rateControlMode }}"
                hlg: "{{ hlg }}"
                heightPixels: {{ heightPixels }}
                gopFrameCount: {{ gopFrameCount }}
                profile: "{{ profile }}"
                sdr: "{{ sdr }}"
                bitrateBps: {{ bitrateBps }}
                widthPixels: {{ widthPixels }}
                pixelFormat: "{{ pixelFormat }}"
            audioStream:
              codec: "{{ codec }}"
              mapping:
                - inputTrack: {{ inputTrack }}
                  inputChannel: {{ inputChannel }}
                  gainDb: {{ gainDb }}
                  inputKey: "{{ inputKey }}"
                  atomKey: "{{ atomKey }}"
                  outputChannel: {{ outputChannel }}
              displayName: "{{ displayName }}"
              channelCount: {{ channelCount }}
              channelLayout:
                - "{{ channelLayout }}"
              languageCode: "{{ languageCode }}"
              bitrateBps: {{ bitrateBps }}
              sampleRateHertz: {{ sampleRateHertz }}
        pubsubDestination:
          topic: "{{ topic }}"
        editList:
          - startTimeOffset: "{{ startTimeOffset }}"
            endTimeOffset: "{{ endTimeOffset }}"
            key: "{{ key }}"
            inputs: "{{ inputs }}"
    - name: labels
      value: "{{ labels }}"
      description: |
        The labels associated with this job template. You can use these to organize and group your job templates.
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
