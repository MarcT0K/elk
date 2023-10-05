/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// AUTOGENERATED BY glean_parser v8.1.1. DO NOT EDIT. DO NOT COMMIT.

import StringMetricType from "@mozilla/glean/private/metrics/string";
import EventMetricType from "@mozilla/glean/private/metrics/event";

/**
 * Event triggered when a user taps/clicks on a UI element, triggering a change in
 * app state.
 *
 * Generated from `moso_events.engagement`.
 */
export const engagement = new EventMetricType<{
    corpus_recommendation_id?: string,
    engagement_type?: string,
    engagement_value?: string,
    mastodon_status_id?: number,
    ui_additional_detail?: string,
    ui_identifier?: string,
}>({
    category: "moso_events",
    name: "engagement",
    sendInPings: ["events"],
    lifetime: "ping",
    disabled: false,
}, ["corpus_recommendation_id", "engagement_type", "engagement_value", "mastodon_status_id", "ui_additional_detail", "ui_identifier"]);

/**
 * Event triggered when a user views a notable UI element. Triggered once per page
 * load, as soon as any pixel of that UI element is visible in the foreground for
 * any length of time. UI elements may include: content, pages, CTAs, etc.
 *
 * Generated from `moso_events.impression`.
 */
export const impression = new EventMetricType<{
    corpus_recommendation_id?: string,
    mastodon_status_id?: number,
    ui_additional_detail?: string,
    ui_identifier?: string,
}>({
    category: "moso_events",
    name: "impression",
    sendInPings: ["events"],
    lifetime: "ping",
    disabled: false,
}, ["corpus_recommendation_id", "mastodon_status_id", "ui_additional_detail", "ui_identifier"]);

/**
 * Event triggered when a user clicks a link on a web page.
 *
 * Generated from `moso_events.link_click`.
 */
export const linkClick = new EventMetricType<{
    element_id?: string,
    target_url?: string,
}>({
    category: "moso_events",
    name: "link_click",
    sendInPings: ["events"],
    lifetime: "ping",
    disabled: false,
}, ["element_id", "target_url"]);

/**
 * The user's account ID from Mastodon.
 *
 * Generated from `moso_events.mastodon_account_id`.
 */
export const mastodonAccountId = new StringMetricType({
    category: "moso_events",
    name: "mastodon_account_id",
    sendInPings: ["events", "glean_internal_info"],
    lifetime: "application",
    disabled: false,
});

/**
 * The user's account handle.
 *
 * Generated from `moso_events.mastodon_handle`.
 */
export const mastodonHandle = new StringMetricType({
    category: "moso_events",
    name: "mastodon_handle",
    sendInPings: ["events", "glean_internal_info"],
    lifetime: "application",
    disabled: false,
});

/**
 * The domain of the Mastodon instance where the user's Mastodon account is hosted
 * (e.g. `mozilla.social`).
 *
 * Generated from `moso_events.mastodon_instance_domain`.
 */
export const mastodonInstanceDomain = new StringMetricType({
    category: "moso_events",
    name: "mastodon_instance_domain",
    sendInPings: ["events", "glean_internal_info"],
    lifetime: "application",
    disabled: false,
});

/**
 * Event triggered by the backend to record the change in state of an object (e.g.
 * API requests to the mozilla.social Mastodon server). In the future, we could
 * potentially use this event to track changes in state to core Mastodon objects
 * (e.g. accounts and posts).
 *
 * Generated from `moso_events.object_update`.
 */
export const objectUpdate = new EventMetricType<{
    object_state?: string,
    object_type?: string,
}>({
    category: "moso_events",
    name: "object_update",
    sendInPings: ["events"],
    lifetime: "ping",
    disabled: false,
}, ["object_state", "object_type"]);

/**
 * The page the user visited
 *
 * Generated from `moso_events.page_url`.
 */
export const pageUrl = new StringMetricType({
    category: "moso_events",
    name: "page_url",
    sendInPings: ["events"],
    lifetime: "application",
    disabled: false,
});

/**
 * Event triggered when a user requests to load a web page.
 *
 * Generated from `moso_events.page_view`.
 */
export const pageView = new EventMetricType<{
    page_url?: string,
    referrer_url?: string,
}>({
    category: "moso_events",
    name: "page_view",
    sendInPings: ["events"],
    lifetime: "ping",
    disabled: false,
}, ["page_url", "referrer_url"]);

/**
 * The page the user came from
 *
 * Generated from `moso_events.referrer_url`.
 */
export const referrerUrl = new StringMetricType({
    category: "moso_events",
    name: "referrer_url",
    sendInPings: ["events"],
    lifetime: "application",
    disabled: false,
});


