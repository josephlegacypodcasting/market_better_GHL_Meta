/* Market Better — The Content Funnel
   Shared runtime for the application funnel:
     1. Application page  →  2. Booking page  →  3. Thank You page

   The funnel is hosted here, not in GHL. Every step reports to GHL over a
   webhook, so all lead data has to be carried across pages by this file. */
(function (global) {
  'use strict';

  var THEME_KEY  = 'mbs_theme';   // shared with the Studio pages so the choice follows the visitor
  var LEAD_KEY   = 'mb_lead';
  var UTM_KEY    = 'mb_utm';
  var BOOKED_KEY = 'mb_booked';

  /* Meta pixel id. Leaving this empty makes every track() call a silent no-op,
     which is what we want before the dataset exists. The campaign's conversion
     event in Ads Manager is "Submit Application", fired from the booking page. */
  var META_PIXEL_ID = '2111555462783713';

  /* Both GHL webhooks. The application posts to the first, a confirmed booking
     to the second. Same endpoints the Studio funnel uses; the payload's
     campaign_name and system_id are what tell the two funnels apart. */
  var WEBHOOKS = {
    application: 'https://services.leadconnectorhq.com/hooks/uE8iQeezklYV7hJanEiE/webhook-trigger/a9f73de4-fc83-44fe-86ca-7f25775ecad6',
    booking:     'https://services.leadconnectorhq.com/hooks/uE8iQeezklYV7hJanEiE/webhook-trigger/cb4a54c4-508b-4071-8350-c3f657fbb175'
  };

  var CALENDAR_URL = 'https://api.leadconnectorhq.com/widget/booking/vJSj6VX7HHYfmAeL6dUI';

  /* Constant on every payload, so one GHL workflow can route by campaign. */
  var CAMPAIGN = {
    campaign_name: 'Market Better - The Content Funnel - Meta',
    client_name:   'Market Better',
    system_name:   'Market Better Content Funnel',
    system_id:     'MBCF',
    offer_name:    'The Content Funnel'
  };

  /* Meta appends these through the ad's URL parameters. utm_content carries the
     ad name (H1 / H2), which is how we learn which of Mike's two hooks wins. */
  var UTM_FIELDS = [
    'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
    'campaign_id', 'ad_id', 'adset_id', 'fbclid'
  ];

  /* ── storage helpers ───────────────────────────────────────────────
     Every read and write is guarded: Safari private mode and blocked
     site data make these throw rather than return empty. */

  function readJSON(key) {
    try {
      var raw = sessionStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function writeJSON(key, value) {
    try { sessionStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  /* ── theme ── */

  function initTheme() {
    var root = document.documentElement;
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function current() {
      return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    }

    function apply(theme) {
      if (theme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        btn.setAttribute('aria-label', 'Switch to light theme');
      } else {
        root.removeAttribute('data-theme');
        btn.setAttribute('aria-label', 'Switch to dark theme');
      }
      try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
    }

    apply(current());
    btn.addEventListener('click', function () {
      apply(current() === 'dark' ? 'light' : 'dark');
    });
  }

  /* ── attribution ──
     Captured once on the page the ad lands on, then replayed from session
     storage on the booking and thank-you pages, which have no query string. */

  function captureUtms() {
    var params = new URLSearchParams(global.location.search);
    var found = {};
    var any = false;

    UTM_FIELDS.forEach(function (field) {
      var value = params.get(field);
      if (value) { found[field] = value; any = true; }
    });

    if (any) {
      found.landing_page_url = global.location.origin + global.location.pathname;
      found.referrer = document.referrer || '';
      writeJSON(UTM_KEY, found);
      return found;
    }

    return readJSON(UTM_KEY) || {};
  }

  function getUtms() {
    return readJSON(UTM_KEY) || {};
  }

  /* ── lead ── */

  function saveLead(lead) { writeJSON(LEAD_KEY, lead); }
  function getLead() { return readJSON(LEAD_KEY) || {}; }

  function markBooked() {
    try { sessionStorage.setItem(BOOKED_KEY, '1'); } catch (e) {}
  }

  /* True only when this visitor actually booked: either the booking page saw
     the confirmation, or GHL's calendar redirected here with ?booked=1.
     Guards the Schedule pixel event from firing on a page someone merely opened. */
  function hasBooked() {
    try {
      if (sessionStorage.getItem(BOOKED_KEY) === '1') return true;
    } catch (e) {}
    return new URLSearchParams(global.location.search).get('booked') === '1';
  }

  /* ── Meta pixel ── */

  function initPixel() {
    if (!META_PIXEL_ID) return;

    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
    (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */

    global.fbq('init', META_PIXEL_ID);
    global.fbq('track', 'PageView');
  }

  function track(event, params) {
    if (typeof global.fbq !== 'function') return;
    global.fbq('track', event, params || {});
  }

  /* ── webhook ──
     keepalive matters: the application page redirects to the booking page
     immediately after, and without it the browser cancels the request. */

  function post(url, payload) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true
    }).then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res;
    });
  }

  /* Merges the campaign constants, the captured attribution and the step's own
     fields into one flat object, which is what GHL's inbound webhook expects. */
  function buildPayload(fields) {
    var payload = {};
    var utms = getUtms();
    var key;

    for (key in CAMPAIGN) { if (CAMPAIGN.hasOwnProperty(key)) payload[key] = CAMPAIGN[key]; }
    for (key in utms) { if (utms.hasOwnProperty(key)) payload[key] = utms[key]; }
    for (key in fields) { if (fields.hasOwnProperty(key)) payload[key] = fields[key]; }

    payload.page_url = global.location.origin + global.location.pathname;
    payload.submitted_at = new Date().toISOString();
    return payload;
  }

  /* ── boot ── */

  /* The pixel and the attribution store have to be live before each page's own
     script runs, and that happens while the document is still parsing — earlier
     than DOMContentLoaded. Deferring them would leave fbq undefined when the
     booking page fires SubmitApplication, and track() would drop it silently.
     Neither needs the DOM, so both run now; only the theme toggle waits. */
  captureUtms();
  initPixel();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  global.MBFunnel = {
    WEBHOOKS: WEBHOOKS,
    CALENDAR_URL: CALENDAR_URL,
    CAMPAIGN: CAMPAIGN,
    getUtms: getUtms,
    saveLead: saveLead,
    getLead: getLead,
    markBooked: markBooked,
    hasBooked: hasBooked,
    track: track,
    post: post,
    buildPayload: buildPayload
  };

})(window);
