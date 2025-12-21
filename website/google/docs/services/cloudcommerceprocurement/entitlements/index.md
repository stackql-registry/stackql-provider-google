--- 
title: entitlements
hide_title: false
hide_table_of_contents: false
keywords:
  - entitlements
  - cloudcommerceprocurement
  - google
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage google resources using SQL
custom_edit_url: null
image: /img/stackql-google-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>entitlements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>entitlements</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.cloudcommerceprocurement.entitlements" /></td></tr>
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
    <td>Output only. The resource name of the entitlement. Entitlement names have the form `providers/&#123;provider_id&#125;/entitlements/&#123;entitlement_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="account" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the account that this entitlement is based on, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="cancellationReason" /></td>
    <td><code>string</code></td>
    <td>Output only. The reason the entitlement was cancelled. If this entitlement wasn't cancelled, this field is empty. Possible values include "unknown", "expired", "user-cancelled", "account-closed", "billing-disabled" (if the customer has manually disabled billing to their resources), "user-aborted", and "migrated" (if the entitlement has migrated across products). Values of this field are subject to change, and we recommend that you don't build your technical integration to rely on these fields.</td>
</tr>
<tr>
    <td><CopyableCode code="consumers" /></td>
    <td><code>array</code></td>
    <td>Output only. The resources using this entitlement, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlementBenefitIds" /></td>
    <td><code>array</code></td>
    <td>Output only. The entitlement benefit IDs associated with the purchase.</td>
</tr>
<tr>
    <td><CopyableCode code="inputProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. The custom properties that were collected from the user to create this entitlement.</td>
</tr>
<tr>
    <td><CopyableCode code="messageToUser" /></td>
    <td><code>string</code></td>
    <td>Provider-supplied message that is displayed to the end user. Currently this is used to communicate progress and ETA for provisioning. This field can be updated only when a user is waiting for an action from the provider, i.e. entitlement state is EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED or EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL. This field is cleared automatically when the entitlement state changes.</td>
</tr>
<tr>
    <td><CopyableCode code="newOfferEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The end time of the new offer, determined from the offer's specified end date. If the offer des not have a specified end date then this field is not set. This field is populated even if the entitlement isn't active yet. If there's no upcoming offer, the field is empty. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, ENTITLEMENT_ACTIVE, or ENTITLEMENT_PENDING_CANCELLATION, then this field is empty. * If the entitlement is in the state ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL or ENTITLEMENT_PENDING_PLAN_CHANGE, and the upcoming offer has a specified end date, then this field is populated with the expected end time of the upcoming offer, in the future. Otherwise, this field is empty. * If the entitlement is in the state ENTITLEMENT_CANCELLED, then this field is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="newOfferStartTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the new offer becomes effective. This field is populated even if the entitlement isn't active yet. If there's no upcoming offer, the field is empty. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, this field isn't populated when the entitlement isn't yet approved. After the entitlement is approved, this field is populated with the effective time of the upcoming offer. * If the entitlement is in the state ENTITLEMENT_ACTIVE or ENTITLEMENT_PENDING_CANCELLATION, this field isn't populated. * If the entitlement is in the state ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL, this field isn't populated, because the entitlement change is waiting on approval. * If the entitlement is in the state ENTITLEMENT_PENDING_PLAN_CHANGE, this field is populated with the expected effective time of the upcoming offer, which is in the future. * If the entitlement is in the state ENTITLEMENT_CANCELLED, then this field is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="newPendingOffer" /></td>
    <td><code>string</code></td>
    <td>Output only. Upon a pending plan change, the name of the offer that the entitlement is switching to. Only exists if the pending plan change is moving to an offer. This field isn't populated for entitlements which aren't active yet. Format: 'projects/&#123;project&#125;/services/&#123;service&#125;/privateOffers/&#123;offer&#125;' OR 'projects/&#123;project&#125;/services/&#123;service&#125;/standardOffers/&#123;offer&#125;', depending on whether the offer is private or public. The &#123;service&#125; in the name is the listing service of the offer. It could be either the product service that the offer is referencing, or a generic private offer parent service. We recommend that you don't build your integration to rely on the meaning of this &#123;service&#125; part. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, ENTITLEMENT_ACTIVE or ENTITLEMENT_PENDING_CANCELLATION, then this field is empty. * If the entitlement is in the state ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL or ENTITLEMENT_PENDING_PLAN_CHANGE, then this field is populated with the upcoming offer. * If the entitlement is in the state ENTITLEMENT_CANCELLED, then this is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="newPendingOfferDuration" /></td>
    <td><code>string</code></td>
    <td>Output only. The duration of the new offer, in ISO 8601 duration format. This field is populated for pending offer changes. It isn't populated for entitlements which aren't active yet. If the offer has a specified end date instead of a duration, this field is empty. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, ENTITLEMENT_ACTIVE, or ENTITLEMENT_PENDING_CANCELLATION, this field is empty. * If the entitlement is in the state ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL or ENTITLEMENT_PENDING_PLAN_CHANGE, and the upcoming offer doesn't have a specified end date, then this field is populated with the duration of the upcoming offer. Otherwise, this field is empty. * If the entitlement is in the state ENTITLEMENT_CANCELLED, then this field is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="newPendingPlan" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the pending new plan. Required if the product has plans and the entitlement has a pending plan change.</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the offer that was procured. Field is empty if order wasn't made using an offer. Format: 'projects/&#123;project&#125;/services/&#123;service&#125;/privateOffers/&#123;offer&#125;' OR 'projects/&#123;project&#125;/services/&#123;service&#125;/standardOffers/&#123;offer&#125;', depending on whether the offer is private or public. The &#123;service&#125; in the name is the listing service of the offer. It could be either the product service that the offer is referencing, or a generic private offer parent service. We recommend that you don't build your integration to rely on the meaning of this &#123;service&#125; part. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, this field is populated with the upcoming offer. * If the entitlement is in the state ENTITLEMENT_ACTIVE, ENTITLEMENT_PENDING_CANCELLATION, ENTITLEMENT_PENDING_PLAN_CHANGE, or ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL, this field is populated with the current offer. * If the entitlement is in the state ENTITLEMENT_CANCELLED, then this field is populated with the latest offer that the order was associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="offerDuration" /></td>
    <td><code>string</code></td>
    <td>Output only. The offer duration of the current offer, in ISO 8601 duration format. This is empty if the entitlement wasn't made using an offer, or if the offer has a specified end date instead of a duration. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, and the upcoming offer doesn't have a specified end date, then this field is populated with the duration of the upcoming offer. Otherwise, this field is empty. * If the entitlement is in the state ENTITLEMENT_ACTIVE, ENTITLEMENT_PENDING_CANCELLATION, ENTITLEMENT_PENDING_PLAN_CHANGE, or ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL, and the current offer doesn't have a specified end date, then this field contains the duration of the current offer. Otherwise, this field is empty. * If the entitlement is in the state ENTITLEMENT_CANCELLED, and the offer doesn't have a specified end date, then this field is populated with the duration of the latest offer that the order was associated with. Otherwise, this field is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="offerEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. End time for the current term of the Offer associated with this entitlement. The value of this field can change naturally over time due to auto-renewal, even if the offer isn't changed. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, then: * If the entitlement isn't approved yet approved, and the offer has a specified end date, then this field is populated with the expected end time of the upcoming offer, in the future. Otherwise, this field is empty. * If the entitlement is approved, then this field is populated with the expected end time of the upcoming offer, in the future. This means that this field and the field offer_duration can both exist. * If the entitlement is in the state ENTITLEMENT_ACTIVE or ENTITLEMENT_PENDING_CANCELLATION, then this field is populated with the expected end time of the current offer, in the future. This field's value is set regardless of whether the offer has a specific end date or a duration. This means that this field and the field offer_duration can both exist. * If the entitlement is in the state ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL or ENTITLEMENT_PENDING_PLAN_CHANGE: * If the entitlement's pricing model is usage based and the associated offer is a private offer whose term has ended, then this field reflects the ACTUAL end time of the entitlement's associated offer (in the past), even though the entitlement associated with this private offer does not terminate at the end of that private offer's term. * Otherwise, this is the expected end date of the current offer, in the future. * If the entitlement is in the state ENTITLEMENT_CANCELLED, then this field is populated with the end time, in the past, of the latest offer that the order was associated with. If the entitlement was cancelled before any offer started, then this field is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="orderId" /></td>
    <td><code>string</code></td>
    <td>Output only. The order ID of this entitlement, without any `orders/` resource name prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the plan that was procured. Required if the product has plans.</td>
</tr>
<tr>
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the entity that was purchased. This may actually represent a product, quote, or offer. We strongly recommend that you use the following more explicit fields: productExternalName, quoteExternalName, or offer.</td>
</tr>
<tr>
    <td><CopyableCode code="productExternalName" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the product that was procured.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the service provider that this entitlement was created against. Each service provider is assigned a unique provider value when they onboard with Cloud Commerce platform.</td>
</tr>
<tr>
    <td><CopyableCode code="quoteExternalName" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the quote that was used to procure. Empty if the order is not purchased using a quote.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the entitlement.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. End time for the subscription corresponding to this entitlement.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="usageReportingId" /></td>
    <td><code>string</code></td>
    <td>Output only. The consumerId to use when reporting usage through the Service Control API. See the consumerId field at [Reporting Metrics](https://cloud.google.com/service-control/reporting-metrics) for more details. This field is present only if the product has usage-based billing configured.</td>
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
    <td>Output only. The resource name of the entitlement. Entitlement names have the form `providers/&#123;provider_id&#125;/entitlements/&#123;entitlement_id&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="account" /></td>
    <td><code>string</code></td>
    <td>Output only. The resource name of the account that this entitlement is based on, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="cancellationReason" /></td>
    <td><code>string</code></td>
    <td>Output only. The reason the entitlement was cancelled. If this entitlement wasn't cancelled, this field is empty. Possible values include "unknown", "expired", "user-cancelled", "account-closed", "billing-disabled" (if the customer has manually disabled billing to their resources), "user-aborted", and "migrated" (if the entitlement has migrated across products). Values of this field are subject to change, and we recommend that you don't build your technical integration to rely on these fields.</td>
</tr>
<tr>
    <td><CopyableCode code="consumers" /></td>
    <td><code>array</code></td>
    <td>Output only. The resources using this entitlement, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlementBenefitIds" /></td>
    <td><code>array</code></td>
    <td>Output only. The entitlement benefit IDs associated with the purchase.</td>
</tr>
<tr>
    <td><CopyableCode code="inputProperties" /></td>
    <td><code>object</code></td>
    <td>Output only. The custom properties that were collected from the user to create this entitlement.</td>
</tr>
<tr>
    <td><CopyableCode code="messageToUser" /></td>
    <td><code>string</code></td>
    <td>Provider-supplied message that is displayed to the end user. Currently this is used to communicate progress and ETA for provisioning. This field can be updated only when a user is waiting for an action from the provider, i.e. entitlement state is EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED or EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL. This field is cleared automatically when the entitlement state changes.</td>
</tr>
<tr>
    <td><CopyableCode code="newOfferEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The end time of the new offer, determined from the offer's specified end date. If the offer des not have a specified end date then this field is not set. This field is populated even if the entitlement isn't active yet. If there's no upcoming offer, the field is empty. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, ENTITLEMENT_ACTIVE, or ENTITLEMENT_PENDING_CANCELLATION, then this field is empty. * If the entitlement is in the state ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL or ENTITLEMENT_PENDING_PLAN_CHANGE, and the upcoming offer has a specified end date, then this field is populated with the expected end time of the upcoming offer, in the future. Otherwise, this field is empty. * If the entitlement is in the state ENTITLEMENT_CANCELLED, then this field is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="newOfferStartTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The timestamp when the new offer becomes effective. This field is populated even if the entitlement isn't active yet. If there's no upcoming offer, the field is empty. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, this field isn't populated when the entitlement isn't yet approved. After the entitlement is approved, this field is populated with the effective time of the upcoming offer. * If the entitlement is in the state ENTITLEMENT_ACTIVE or ENTITLEMENT_PENDING_CANCELLATION, this field isn't populated. * If the entitlement is in the state ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL, this field isn't populated, because the entitlement change is waiting on approval. * If the entitlement is in the state ENTITLEMENT_PENDING_PLAN_CHANGE, this field is populated with the expected effective time of the upcoming offer, which is in the future. * If the entitlement is in the state ENTITLEMENT_CANCELLED, then this field is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="newPendingOffer" /></td>
    <td><code>string</code></td>
    <td>Output only. Upon a pending plan change, the name of the offer that the entitlement is switching to. Only exists if the pending plan change is moving to an offer. This field isn't populated for entitlements which aren't active yet. Format: 'projects/&#123;project&#125;/services/&#123;service&#125;/privateOffers/&#123;offer&#125;' OR 'projects/&#123;project&#125;/services/&#123;service&#125;/standardOffers/&#123;offer&#125;', depending on whether the offer is private or public. The &#123;service&#125; in the name is the listing service of the offer. It could be either the product service that the offer is referencing, or a generic private offer parent service. We recommend that you don't build your integration to rely on the meaning of this &#123;service&#125; part. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, ENTITLEMENT_ACTIVE or ENTITLEMENT_PENDING_CANCELLATION, then this field is empty. * If the entitlement is in the state ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL or ENTITLEMENT_PENDING_PLAN_CHANGE, then this field is populated with the upcoming offer. * If the entitlement is in the state ENTITLEMENT_CANCELLED, then this is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="newPendingOfferDuration" /></td>
    <td><code>string</code></td>
    <td>Output only. The duration of the new offer, in ISO 8601 duration format. This field is populated for pending offer changes. It isn't populated for entitlements which aren't active yet. If the offer has a specified end date instead of a duration, this field is empty. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, ENTITLEMENT_ACTIVE, or ENTITLEMENT_PENDING_CANCELLATION, this field is empty. * If the entitlement is in the state ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL or ENTITLEMENT_PENDING_PLAN_CHANGE, and the upcoming offer doesn't have a specified end date, then this field is populated with the duration of the upcoming offer. Otherwise, this field is empty. * If the entitlement is in the state ENTITLEMENT_CANCELLED, then this field is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="newPendingPlan" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the pending new plan. Required if the product has plans and the entitlement has a pending plan change.</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Output only. The name of the offer that was procured. Field is empty if order wasn't made using an offer. Format: 'projects/&#123;project&#125;/services/&#123;service&#125;/privateOffers/&#123;offer&#125;' OR 'projects/&#123;project&#125;/services/&#123;service&#125;/standardOffers/&#123;offer&#125;', depending on whether the offer is private or public. The &#123;service&#125; in the name is the listing service of the offer. It could be either the product service that the offer is referencing, or a generic private offer parent service. We recommend that you don't build your integration to rely on the meaning of this &#123;service&#125; part. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, this field is populated with the upcoming offer. * If the entitlement is in the state ENTITLEMENT_ACTIVE, ENTITLEMENT_PENDING_CANCELLATION, ENTITLEMENT_PENDING_PLAN_CHANGE, or ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL, this field is populated with the current offer. * If the entitlement is in the state ENTITLEMENT_CANCELLED, then this field is populated with the latest offer that the order was associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="offerDuration" /></td>
    <td><code>string</code></td>
    <td>Output only. The offer duration of the current offer, in ISO 8601 duration format. This is empty if the entitlement wasn't made using an offer, or if the offer has a specified end date instead of a duration. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, and the upcoming offer doesn't have a specified end date, then this field is populated with the duration of the upcoming offer. Otherwise, this field is empty. * If the entitlement is in the state ENTITLEMENT_ACTIVE, ENTITLEMENT_PENDING_CANCELLATION, ENTITLEMENT_PENDING_PLAN_CHANGE, or ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL, and the current offer doesn't have a specified end date, then this field contains the duration of the current offer. Otherwise, this field is empty. * If the entitlement is in the state ENTITLEMENT_CANCELLED, and the offer doesn't have a specified end date, then this field is populated with the duration of the latest offer that the order was associated with. Otherwise, this field is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="offerEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. End time for the current term of the Offer associated with this entitlement. The value of this field can change naturally over time due to auto-renewal, even if the offer isn't changed. * If the entitlement is in the state ENTITLEMENT_ACTIVATION_REQUESTED, then: * If the entitlement isn't approved yet approved, and the offer has a specified end date, then this field is populated with the expected end time of the upcoming offer, in the future. Otherwise, this field is empty. * If the entitlement is approved, then this field is populated with the expected end time of the upcoming offer, in the future. This means that this field and the field offer_duration can both exist. * If the entitlement is in the state ENTITLEMENT_ACTIVE or ENTITLEMENT_PENDING_CANCELLATION, then this field is populated with the expected end time of the current offer, in the future. This field's value is set regardless of whether the offer has a specific end date or a duration. This means that this field and the field offer_duration can both exist. * If the entitlement is in the state ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL or ENTITLEMENT_PENDING_PLAN_CHANGE: * If the entitlement's pricing model is usage based and the associated offer is a private offer whose term has ended, then this field reflects the ACTUAL end time of the entitlement's associated offer (in the past), even though the entitlement associated with this private offer does not terminate at the end of that private offer's term. * Otherwise, this is the expected end date of the current offer, in the future. * If the entitlement is in the state ENTITLEMENT_CANCELLED, then this field is populated with the end time, in the past, of the latest offer that the order was associated with. If the entitlement was cancelled before any offer started, then this field is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="orderId" /></td>
    <td><code>string</code></td>
    <td>Output only. The order ID of this entitlement, without any `orders/` resource name prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the plan that was procured. Required if the product has plans.</td>
</tr>
<tr>
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the entity that was purchased. This may actually represent a product, quote, or offer. We strongly recommend that you use the following more explicit fields: productExternalName, quoteExternalName, or offer.</td>
</tr>
<tr>
    <td><CopyableCode code="productExternalName" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the product that was procured.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the service provider that this entitlement was created against. Each service provider is assigned a unique provider value when they onboard with Cloud Commerce platform.</td>
</tr>
<tr>
    <td><CopyableCode code="quoteExternalName" /></td>
    <td><code>string</code></td>
    <td>Output only. The identifier of the quote that was used to procure. Empty if the order is not purchased using a quote.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Output only. The state of the entitlement.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionEndTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. End time for the subscription corresponding to this entitlement.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (google-datetime)</code></td>
    <td>Output only. The last update timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="usageReportingId" /></td>
    <td><code>string</code></td>
    <td>Output only. The consumerId to use when reporting usage through the Service Control API. See the consumerId field at [Reporting Metrics](https://cloud.google.com/service-control/reporting-metrics) for more details. This field is present only if the product has usage-based billing configured.</td>
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
    <td><a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-entitlementsId"><code>entitlementsId</code></a></td>
    <td></td>
    <td>Gets a requested Entitlement resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-providersId"><code>providersId</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Lists Entitlements for which the provider has read access.</td>
</tr>
<tr>
    <td><a href="#patch"><CopyableCode code="patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-entitlementsId"><code>entitlementsId</code></a></td>
    <td><a href="#parameter-updateMask"><code>updateMask</code></a></td>
    <td>Updates an existing Entitlement.</td>
</tr>
<tr>
    <td><a href="#reject"><CopyableCode code="reject" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-entitlementsId"><code>entitlementsId</code></a></td>
    <td></td>
    <td>Rejects an entitlement that is in the EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED state. This method is invoked by the provider to reject the creation of the entitlement resource.</td>
</tr>
<tr>
    <td><a href="#approve"><CopyableCode code="approve" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-entitlementsId"><code>entitlementsId</code></a></td>
    <td></td>
    <td>Approves an entitlement that is in the EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED state. This method is invoked by the provider to approve the creation of the entitlement resource.</td>
</tr>
<tr>
    <td><a href="#reject_plan_change"><CopyableCode code="reject_plan_change" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-entitlementsId"><code>entitlementsId</code></a></td>
    <td></td>
    <td>Rejects an entitlement plan change that is in the EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL state. This method is invoked by the provider to reject the plan change on the entitlement resource.</td>
</tr>
<tr>
    <td><a href="#approve_plan_change"><CopyableCode code="approve_plan_change" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-entitlementsId"><code>entitlementsId</code></a></td>
    <td></td>
    <td>Approves an entitlement plan change that is in the EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL state. This method is invoked by the provider to approve the plan change on the entitlement resource.</td>
</tr>
<tr>
    <td><a href="#suspend"><CopyableCode code="suspend" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-providersId"><code>providersId</code></a>, <a href="#parameter-entitlementsId"><code>entitlementsId</code></a></td>
    <td></td>
    <td>Requests suspension of an active Entitlement. This is not yet supported.</td>
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
<tr id="parameter-entitlementsId">
    <td><CopyableCode code="entitlementsId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-providersId">
    <td><CopyableCode code="providersId" /></td>
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

Gets a requested Entitlement resource.

```sql
SELECT
name,
account,
cancellationReason,
consumers,
createTime,
entitlementBenefitIds,
inputProperties,
messageToUser,
newOfferEndTime,
newOfferStartTime,
newPendingOffer,
newPendingOfferDuration,
newPendingPlan,
offer,
offerDuration,
offerEndTime,
orderId,
plan,
product,
productExternalName,
provider,
quoteExternalName,
state,
subscriptionEndTime,
updateTime,
usageReportingId
FROM google.cloudcommerceprocurement.entitlements
WHERE providersId = '{{ providersId }}' -- required
AND entitlementsId = '{{ entitlementsId }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists Entitlements for which the provider has read access.

```sql
SELECT
name,
account,
cancellationReason,
consumers,
createTime,
entitlementBenefitIds,
inputProperties,
messageToUser,
newOfferEndTime,
newOfferStartTime,
newPendingOffer,
newPendingOfferDuration,
newPendingPlan,
offer,
offerDuration,
offerEndTime,
orderId,
plan,
product,
productExternalName,
provider,
quoteExternalName,
state,
subscriptionEndTime,
updateTime,
usageReportingId
FROM google.cloudcommerceprocurement.entitlements
WHERE providersId = '{{ providersId }}' -- required
AND pageToken = '{{ pageToken }}'
AND pageSize = '{{ pageSize }}'
AND filter = '{{ filter }}'
;
```
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

Updates an existing Entitlement.

```sql
UPDATE google.cloudcommerceprocurement.entitlements
SET 
data__name = '{{ name }}',
data__updateTime = '{{ updateTime }}',
data__account = '{{ account }}',
data__usageReportingId = '{{ usageReportingId }}',
data__createTime = '{{ createTime }}',
data__provider = '{{ provider }}',
data__product = '{{ product }}',
data__state = '{{ state }}',
data__newPendingPlan = '{{ newPendingPlan }}',
data__consumers = '{{ consumers }}',
data__plan = '{{ plan }}',
data__messageToUser = '{{ messageToUser }}',
data__inputProperties = '{{ inputProperties }}'
WHERE 
providersId = '{{ providersId }}' --required
AND entitlementsId = '{{ entitlementsId }}' --required
AND updateMask = '{{ updateMask}}'
RETURNING
name,
account,
cancellationReason,
consumers,
createTime,
entitlementBenefitIds,
inputProperties,
messageToUser,
newOfferEndTime,
newOfferStartTime,
newPendingOffer,
newPendingOfferDuration,
newPendingPlan,
offer,
offerDuration,
offerEndTime,
orderId,
plan,
product,
productExternalName,
provider,
quoteExternalName,
state,
subscriptionEndTime,
updateTime,
usageReportingId;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reject"
    values={[
        { label: 'reject', value: 'reject' },
        { label: 'approve', value: 'approve' },
        { label: 'reject_plan_change', value: 'reject_plan_change' },
        { label: 'approve_plan_change', value: 'approve_plan_change' },
        { label: 'suspend', value: 'suspend' }
    ]}
>
<TabItem value="reject">

Rejects an entitlement that is in the EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED state. This method is invoked by the provider to reject the creation of the entitlement resource.

```sql
EXEC google.cloudcommerceprocurement.entitlements.reject 
@providersId='{{ providersId }}' --required, 
@entitlementsId='{{ entitlementsId }}' --required 
@@json=
'{
"reason": "{{ reason }}"
}'
;
```
</TabItem>
<TabItem value="approve">

Approves an entitlement that is in the EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED state. This method is invoked by the provider to approve the creation of the entitlement resource.

```sql
EXEC google.cloudcommerceprocurement.entitlements.approve 
@providersId='{{ providersId }}' --required, 
@entitlementsId='{{ entitlementsId }}' --required 
@@json=
'{
"properties": "{{ properties }}", 
"entitlementMigrated": "{{ entitlementMigrated }}"
}'
;
```
</TabItem>
<TabItem value="reject_plan_change">

Rejects an entitlement plan change that is in the EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL state. This method is invoked by the provider to reject the plan change on the entitlement resource.

```sql
EXEC google.cloudcommerceprocurement.entitlements.reject_plan_change 
@providersId='{{ providersId }}' --required, 
@entitlementsId='{{ entitlementsId }}' --required 
@@json=
'{
"pendingPlanName": "{{ pendingPlanName }}", 
"reason": "{{ reason }}"
}'
;
```
</TabItem>
<TabItem value="approve_plan_change">

Approves an entitlement plan change that is in the EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL state. This method is invoked by the provider to approve the plan change on the entitlement resource.

```sql
EXEC google.cloudcommerceprocurement.entitlements.approve_plan_change 
@providersId='{{ providersId }}' --required, 
@entitlementsId='{{ entitlementsId }}' --required 
@@json=
'{
"pendingPlanName": "{{ pendingPlanName }}"
}'
;
```
</TabItem>
<TabItem value="suspend">

Requests suspension of an active Entitlement. This is not yet supported.

```sql
EXEC google.cloudcommerceprocurement.entitlements.suspend 
@providersId='{{ providersId }}' --required, 
@entitlementsId='{{ entitlementsId }}' --required 
@@json=
'{
"reason": "{{ reason }}"
}'
;
```
</TabItem>
</Tabs>
