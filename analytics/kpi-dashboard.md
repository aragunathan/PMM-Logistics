# KPI Dashboard — Ramco Logistics Software Marketing
## Full-Funnel Performance Tracking | All Channels | All Regions

> **Purpose:** Single source of truth for marketing performance across all channels, regions, and funnel stages. Every metric in this file is tracked in a named tool, reviewed on a defined cadence, and evaluated against a specific green/amber/red threshold.
> **Owner:** Campaign Marketing Manager (compiles) + Sales Lead (reviews pipeline section) + Demand Gen (reviews channel sections)
> **Reporting cadence:** Daily pulse (key metrics only) → Weekly snapshot → Monthly scorecard
> **Source files:** HubSpot (primary CRM + marketing automation) | LinkedIn Campaign Manager | Google Analytics 4 | Google Search Console | LinkedIn Sales Navigator

---

## How to Read This Dashboard

### RAG Status Definitions

Every metric has three status levels. These are not subjective — they are calculated against target.

| Status | Definition | Threshold | Required Action |
|---|---|---|---|
| 🟢 Green | On track or ahead of target | ≥ 90% of target | No action required; document what is working |
| 🟡 Amber | Below target — monitor closely | 70–89% of target | Identify root cause; present fix in next weekly review |
| 🔴 Red | Significantly below target — intervene | < 70% of target | Escalate to Sales Lead within 48 hours; implement fix within 5 business days |

**How to calculate RAG status:**
`Actual ÷ Target × 100 = % of target → apply threshold above`

Example: MQL target = 40/month. Actual = 32. 32 ÷ 40 = 80% → 🟡 Amber.

### Leading vs. Lagging Indicators

This dashboard separates leading indicators (activity and early-funnel metrics — predictive of future pipeline) from lagging indicators (pipeline and revenue — reflect decisions already made). When lagging indicators are red, the problem started 30–90 days ago. Fix leading indicators to protect future pipeline.

| Type | Examples | Fix Horizon |
|---|---|---|
| Leading | LinkedIn CTR, SDR connection rate, email open rate, MQL volume | Fix this week → see results in 3–6 weeks |
| Lagging | Opportunities created, pipeline value, win rate | Fix now → see results in 60–180 days |

---

## Section 1 — Full Funnel Overview

**Reporting frequency:** Weekly (in full) | Monthly (with trend analysis)
**Primary tool:** HubSpot

| Funnel Stage | Metric | Monthly Target | Quarterly Target | Tool | RAG Threshold |
|---|---|---|---|---|---|
| Awareness | Website sessions (total) | 3,500 | 10,500 | GA4 | 🟢 ≥3,150 / 🟡 2,450–3,149 / 🔴 <2,450 |
| Awareness | LinkedIn impressions (paid) | 180,000 | 540,000 | LinkedIn CM | 🟢 ≥162,000 / 🟡 126,000–161,999 / 🔴 <126,000 |
| Awareness | Organic impressions (GSC) | 12,000 | 36,000 | Google Search Console | 🟢 ≥10,800 / 🟡 8,400–10,799 / 🔴 <8,400 |
| Acquisition | Report downloads / gated asset downloads | 135 | 400 | HubSpot | 🟢 ≥120 / 🟡 95–119 / 🔴 <95 |
| Acquisition | MQLs generated (all channels) | 40 | 120 | HubSpot | 🟢 ≥36 / 🟡 28–35 / 🔴 <28 |
| Acquisition | Cost per MQL (paid channels) | <$120 | <$120 | LinkedIn CM + HubSpot | 🟢 ≤$108 / 🟡 $109–$156 / 🔴 >$156 |
| Activation | SQLs generated (all channels) | 14 | 40 | HubSpot | 🟢 ≥12 / 🟡 10–11 / 🔴 <10 |
| Activation | MQL → SQL conversion rate | 33% | 33% | HubSpot | 🟢 ≥30% / 🟡 23–29% / 🔴 <23% |
| Pipeline | Opportunities created | 7 | 20 | HubSpot | 🟢 ≥6 / 🟡 5 / 🔴 ≤4 |
| Pipeline | SQL → Opportunity rate | 50% | 50% | HubSpot | 🟢 ≥45% / 🟡 35–44% / 🔴 <35% |
| Pipeline | Pipeline value generated | $1.05M | $3.0M | HubSpot | 🟢 ≥$945K / 🟡 $735K–$944K / 🔴 <$735K |
| Revenue | Opportunities progressed to Proposal | 2 | 6 | HubSpot | 🟢 ≥2 / 🟡 1 / 🔴 0 |
| Revenue | Closed Won (marketing-sourced) | 0–1* | 2–3* | HubSpot | *180-day cycle; track quarterly, not monthly |
| Revenue | Marketing-sourced revenue (ACV) | $150K* | $300–450K* | HubSpot | *Lagging; review quarterly |

**Interpretation note:** At a 180-day sales cycle, marketing-sourced revenue in any given month reflects deals that entered pipeline 6 months earlier. Evaluate pipeline health (opportunities and SQL volume) as the primary performance signal. Revenue is a confirmation, not a control.

---

## Section 2 — Outbound / SDR Metrics

**Reporting frequency:** Daily (activity) | Weekly (conversion) | Monthly (pipeline contribution)
**Primary tool:** HubSpot Sales + LinkedIn Sales Navigator

### 2a. LinkedIn SDR Outreach Performance

| Metric | Definition | Weekly Target | Monthly Target | Tool | RAG Threshold |
|---|---|---|---|---|---|
| Connection requests sent (T1) | New LinkedIn connection requests to T1 account contacts | 60/week (all regions) | 240 | LinkedIn Sales Nav + HubSpot log | 🟢 ≥54 / 🟡 42–53 / 🔴 <42 |
| Connection requests sent (T2) | New LinkedIn connection requests to T2 account contacts | 40/week (all regions) | 160 | LinkedIn Sales Nav + HubSpot log | 🟢 ≥36 / 🟡 28–35 / 🔴 <28 |
| Connection accept rate — T1 | Accepted ÷ sent, T1 accounts | 30% | 30% | HubSpot (activity log) | 🟢 ≥27% / 🟡 21–26% / 🔴 <21% |
| Connection accept rate — T2 | Accepted ÷ sent, T2 accounts | 20% | 20% | HubSpot (activity log) | 🟢 ≥18% / 🟡 14–17% / 🔴 <14% |
| Positive reply rate — T1 | Any positive response ÷ messages sent, T1 | 15% | 15% | HubSpot (activity log) | 🟢 ≥13% / 🟡 10–12% / 🔴 <10% |
| Positive reply rate — T2 | Any positive response ÷ messages sent, T2 | 8% | 8% | HubSpot (activity log) | 🟢 ≥7% / 🟡 5–6% / 🔴 <5% |
| Report delivered (T1 direct) | T1 contacts who received report PDF directly (no form) | 50/month (full T1 list first month; 15/month ongoing) | 50 first month; 15 ongoing | HubSpot (custom property) | 🟢 On-pace / 🟡 20% behind / 🔴 40%+ behind |
| SDR-sourced MQLs | MQLs where first touch = SDR outreach | 15/month | 15/month | HubSpot (lead source) | 🟢 ≥13 / 🟡 10–12 / 🔴 <10 |
| SDR-sourced SQLs | SQLs where first touch = SDR outreach | 5/month | 5/month | HubSpot (lifecycle) | 🟢 ≥4 / 🟡 3 / 🔴 ≤2 |

### 2b. SDR Daily Activity Minimums (per SDR)

These are activity floors — minimums required per SDR per day. They are not targets to optimise against; they are the baseline that guarantees pipeline volume.

| Activity | Per SDR Per Day | Tracking Method |
|---|---|---|
| LinkedIn connection requests sent | 5 | HubSpot activity log: "LinkedIn connection request sent" |
| Follow-up messages sent (existing connections) | 3 | HubSpot activity log: "LinkedIn message sent" |
| HubSpot tasks completed (call attempts, email follow-ups) | 2 | HubSpot task completion log |
| Report deliveries logged (T1 direct) | As applicable | HubSpot custom property: `Report Delivered — T1 Direct` |
| Contact records updated (after any response) | All responses same day | HubSpot contact activity timeline |

**How to monitor:** HubSpot → Sales → Activity Feed. Filter by SDR owner. If an SDR's daily activity count is consistently below these floors for 3+ days, escalate to SDR Lead.

### 2c. Regional SDR Performance (track per region)

| Region | Monthly MQL Target | Monthly SQL Target | Connection Rate Target | Response Rate Target |
|---|---|---|---|---|
| Australia | 6 | 2 | 30% T1 / 20% T2 | 18% T1 / 10% T2 |
| Saudi Arabia | 5 | 2 | 25% T1 / 18% T2 | 15% T1 / 8% T2 |
| Indonesia | 3 | 1 | 30% T1 / 22% T2 | 14% T1 / 7% T2 |
| Philippines | 1 | 0.5 | 28% T1 / 20% T2 | 14% T1 / 7% T2 |

*Note: Monthly SQL targets are averages. Track quarterly — monthly fluctuation is normal given the 3–4 week SDR-to-SQL cycle.*

---

## Section 3 — Email Nurture Metrics

**Reporting frequency:** Weekly (open rate, CTR) | Monthly (sequence completion, MQL contribution)
**Primary tool:** HubSpot Email Analytics

### 3a. Automated Nurture Sequences (HubSpot)

| Metric | Definition | Target | Tool | RAG Threshold |
|---|---|---|---|---|
| Sequence open rate — Email 1 (Day 0) | First email opened ÷ delivered | 45% | HubSpot | 🟢 ≥40% / 🟡 32–39% / 🔴 <32% |
| Sequence open rate — Email 2 (Day 3) | Second email opened ÷ delivered | 35% | HubSpot | 🟢 ≥31% / 🟡 24–30% / 🔴 <24% |
| Sequence open rate — Email 3 (Day 7) | Third email opened ÷ delivered | 28% | HubSpot | 🟢 ≥25% / 🟡 19–24% / 🔴 <19% |
| Click-through rate (CTR) — Email 2 | Clicks ÷ delivered, Email 2 | 6% | HubSpot | 🟢 ≥5.4% / 🟡 4.2–5.3% / 🔴 <4.2% |
| Click-through rate (CTR) — Email 3 | Clicks on meeting link ÷ delivered | 4% | HubSpot | 🟢 ≥3.6% / 🟡 2.8–3.5% / 🔴 <2.8% |
| Meeting booked rate (Email 3) | Meetings booked ÷ delivered, Email 3 | 1.5% | HubSpot | 🟢 ≥1.3% / 🟡 1.0–1.2% / 🔴 <1.0% |
| Unsubscribe rate (per email) | Unsubscribes ÷ delivered | <0.3% | HubSpot | 🟢 ≤0.3% / 🟡 0.31–0.5% / 🔴 >0.5% |
| Hard bounce rate | Bounces ÷ sent | <2% | HubSpot | 🟢 ≤2% / 🟡 2.1–4% / 🔴 >4% |
| Spam complaint rate | Spam reports ÷ delivered | <0.08% | HubSpot | 🟢 ≤0.08% / 🟡 0.09–0.15% / 🔴 >0.15% |
| Email-sourced MQLs | MQLs where first meaningful touch = email click | 8/month | HubSpot | 🟢 ≥7 / 🟡 5–6 / 🔴 <5 |

### 3b. Database Health (review monthly)

| Metric | Target | Tool | Action If Red |
|---|---|---|---|
| Total contacts in HubSpot | Growing ≥ 5% MoM | HubSpot | Review MQL intake sources |
| ICP-matched contacts (title + company filters) | ≥ 60% of total database | HubSpot | Run enrichment pass on unqualified contacts |
| Email deliverability rate | ≥ 97% | HubSpot / mail testing tool | Check SPF/DKIM/DMARC; suppress unengaged contacts > 6 months |
| Contacts with valid email | ≥ 90% of ICP contacts | HubSpot | Enrichment via Apollo.io or Cognism |
| Contacts with LinkedIn URL | ≥ 75% of ICP contacts | HubSpot | SDR enrichment during outreach |
| Contacts engaged (opened email or clicked in last 90 days) | ≥ 25% of database | HubSpot | Suppress non-engaged contacts; review nurture content quality |

### 3c. Regional Email Benchmarks

Open rate and CTR vary by region — use these region-specific targets rather than the global average:

| Region | Email 1 Open Rate Target | Email 3 CTR Target | Best Send Time (local) | Send Days to Avoid |
|---|---|---|---|---|
| Australia | 42% | 4.5% | Tue–Thu 9–11am AEST | Public holidays; Christmas shutdown (mid-Dec to mid-Jan) |
| Indonesia | 38% | 3.8% | Tue–Thu 10am–12pm WIB | Ramadan (reduce frequency); Lebaran week (pause entirely) |
| Saudi Arabia | 35% | 3.5% | Sun–Tue 10am–12pm AST | Ramadan (adjust content, reduce frequency); Eid Al-Fitr + Eid Al-Adha (pause) |
| Philippines | 40% | 4.2% | Tue–Thu 10am–12pm PHT | Holy Week (pause); 12.12 peak ops period (SDR sequences OK; mass email reduce) |

---

## Section 4 — Paid LinkedIn Campaign Metrics

**Reporting frequency:** Daily (budget pacing, CTR anomalies) | Weekly (full channel review) | Monthly (CPL, pipeline contribution)
**Primary tool:** LinkedIn Campaign Manager (primary) + HubSpot (MQL attribution)

### 4a. Campaign-Level Performance

| Metric | Definition | Target | Tool | RAG Threshold |
|---|---|---|---|---|
| Impressions (total, all regions) | Total ad impressions served per month | 180,000 | LinkedIn CM | 🟢 ≥162,000 / 🟡 126,000–161,999 / 🔴 <126,000 |
| Click-through rate (CTR) — AU | Clicks ÷ impressions, Australia campaigns | 0.65% | LinkedIn CM | 🟢 ≥0.59% / 🟡 0.45–0.58% / 🔴 <0.45% |
| Click-through rate (CTR) — SA | Clicks ÷ impressions, Saudi Arabia campaigns | 0.55% | LinkedIn CM | 🟢 ≥0.50% / 🟡 0.38–0.49% / 🔴 <0.38% |
| Click-through rate (CTR) — ID | Clicks ÷ impressions, Indonesia campaigns | 0.45% | LinkedIn CM | 🟢 ≥0.41% / 🟡 0.31–0.40% / 🔴 <0.31% |
| Click-through rate (CTR) — PH | Clicks ÷ impressions, Philippines campaigns | 0.50% | LinkedIn CM | 🟢 ≥0.45% / 🟡 0.35–0.44% / 🔴 <0.35% |
| Cost per click (CPC) — AU | Spend ÷ clicks, AU | <$12 | LinkedIn CM | 🟢 ≤$10.80 / 🟡 $10.81–$15.60 / 🔴 >$15.60 |
| Cost per click (CPC) — SA | Spend ÷ clicks, SA | <$14 | LinkedIn CM | 🟢 ≤$12.60 / 🟡 $12.61–$18.20 / 🔴 >$18.20 |
| Cost per click (CPC) — ID | Spend ÷ clicks, ID | <$8 | LinkedIn CM | 🟢 ≤$7.20 / 🟡 $7.21–$10.40 / 🔴 >$10.40 |
| Cost per click (CPC) — PH | Spend ÷ clicks, PH | <$9 | LinkedIn CM | 🟢 ≤$8.10 / 🟡 $8.11–$11.70 / 🔴 >$11.70 |
| Cost per MQL (landing page form, LinkedIn source) — AU | LinkedIn spend ÷ MQLs from LinkedIn, AU | <$80 | LinkedIn CM + HubSpot | 🟢 ≤$72 / 🟡 $73–$104 / 🔴 >$104 |
| Cost per MQL — SA | | <$90 | LinkedIn CM + HubSpot | 🟢 ≤$81 / 🟡 $82–$117 / 🔴 >$117 |
| Cost per MQL — ID | | <$50 | LinkedIn CM + HubSpot | 🟢 ≤$45 / 🟡 $46–$65 / 🔴 >$65 |
| Cost per MQL — PH | | <$60 | LinkedIn CM + HubSpot | 🟢 ≤$54 / 🟡 $55–$78 / 🔴 >$78 |
| Landing page conversion rate | Form submissions ÷ ad clicks to landing page | 30% | HubSpot + GA4 | 🟢 ≥27% / 🟡 21–26% / 🔴 <21% |
| LinkedIn-sourced MQLs | MQLs where last touch before conversion = LinkedIn ad | 15/month | HubSpot | 🟢 ≥13 / 🟡 10–12 / 🔴 <10 |
| Lead Gen Form completion rate | LGF completions ÷ LGF opens (Message Ads) | 12% | LinkedIn CM | 🟢 ≥11% / 🟡 8–10% / 🔴 <8% |
| Message Ad open rate | Opens ÷ delivered (Message Ads) | 38% | LinkedIn CM | 🟢 ≥34% / 🟡 27–33% / 🔴 <27% |

### 4b. Audience Health (review monthly)

| Metric | Target | Action If Below Target |
|---|---|---|
| T1 Matched Audience match rate | ≥ 80% | Refresh CSV with updated company names; check LinkedIn company page URLs in list |
| T2 Matched Audience match rate | ≥ 70% | Re-enrich T2 list with Apollo; update domain and company name fields |
| Audience size — ABM Layer (per region) | T1 contacts: 300–600 per region (3 personas × T1 accounts) | If below 300: T1 account list may need expanding; check suppression audience size |
| Audience frequency (impressions per person) | 3–8 per month | <3: increase budget or narrow audience. >8: add frequency cap; refresh creative |
| Audience overlap — ABM vs. Persona Layer | <30% overlap | Use LinkedIn's Audience Overlap tool; adjust job title targeting if ABM and Persona audiences are too similar |

### 4c. Campaign Layer Performance Benchmarks

Each LinkedIn campaign layer serves a different purpose and has different performance expectations:

| Layer | Purpose | Expected CTR | Expected CPL | How to Evaluate |
|---|---|---|---|---|
| ABM Layer (T1 accounts) | Awareness among named T1 accounts | Lower CTR (0.3–0.5%) is acceptable — small, highly targeted audience | Higher CPL is acceptable ($120–180) — every click is a T1 account | Evaluate by T1 account coverage and engagement, not CTR alone |
| Persona Layer (T2 accounts) | Demand generation among ICP job titles | Normal CTR (0.4–0.65%) expected | Target CPL applies directly | Primary driver of LinkedIn MQL volume |
| Retargeting Layer | Conversion of warm website/content visitors | Higher CTR expected (0.8–1.2%) — warm audience | Lower CPL expected ($40–70) — warm audience | Evaluate by MQL quality; retargeting MQLs should convert to SQL faster |

---

## Section 5 — Event Metrics

**Reporting frequency:** Per event (within 7 days of event close) | Monthly (pipeline contribution)
**Primary tool:** HubSpot (event static lists + deal attribution) + event platform attendance data

### 5a. Per-Event Metrics (fill in after each event)

| Metric | Definition | Target | Tool |
|---|---|---|---|
| Total event contacts captured | New contacts created in HubSpot from event | 40+ (major event) / 15+ (minor) | HubSpot static list |
| ICP-matched contacts (event) | Contacts with matching job title + 3PL company | ≥ 50% of contacts captured | HubSpot filter on event list |
| T1 account contacts met | Contacts from named T1 accounts met at event | ≥ 5 per major event | HubSpot (cross-ref event list vs. T1 list) |
| Meetings booked at/from event | Formal meetings booked as a direct result of event conversation | ≥ 4 per major event | HubSpot task log — "Meeting booked: [event name]" |
| Event MQLs (within 30 days) | MQLs created where last event touch = this event | ≥ 8 per major event | HubSpot lifecycle + lead source |
| Event SQLs (within 60 days) | SQLs where pipeline entry was event-sourced | ≥ 3 per major event | HubSpot lifecycle |
| Event-sourced opportunities (within 90 days) | Opportunities with event as first or last touch | ≥ 1.5 per major event | HubSpot deals |
| Cost per event MQL | Total event cost ÷ event MQLs | <$350 (major) / <$200 (minor) | HubSpot + budget tracker |
| Cost per event opportunity | Total event cost ÷ event opportunities | <$2,500 | HubSpot + budget tracker |
| Follow-up completion rate | % of event contacts who received a personalised follow-up within 48 hours | 100% | HubSpot task completion |

### 5b. Event Calendar Tracking

Review this table monthly. Upcoming events should have confirmed attendance/booth decisions made at least 8 weeks out.

| Event | Region | Month | Status | Ramco Presence | Budget Allocated | MQL Target |
|---|---|---|---|---|---|---|
| SCLAA National Conference | AU | May 2026 | Confirmed | Sponsorship + booth + speaker | [Budget] | 10 |
| Saudi Logistics Expo | SA | May 2026 | Confirmed | Exhibition booth | [Budget] | 8 |
| ISCL (Indonesian Supply Chain & Logistics) | ID | May 2026 | Confirmed | Attendance | [Budget] | 5 |
| SCMAP Annual Conference | PH | Jun 2026 | Confirmed | Exhibition booth | [Budget] | 6 |
| LAA (Logistics Association Australia) events | AU | Ongoing | Review quarterly | Membership + speaking | [Budget] | 3/event |
| LogiSYM | Regional | Sep 2026 | TBC | TBC | TBC | TBC |
| Future Logistics Summit (KSA) | SA | Nov 2026 | TBC | TBC | TBC | TBC |

---

## Section 6 — SEO and Organic Content Metrics

**Reporting frequency:** Weekly (rankings, traffic) | Monthly (full organic review)
**Primary tool:** Google Search Console (impressions, rankings) | Google Analytics 4 (sessions, behaviour, conversions) | HubSpot (organic MQLs)

### 6a. Organic Search Performance

| Metric | Definition | Monthly Target | Tool | RAG Threshold |
|---|---|---|---|---|
| Organic sessions | Sessions from organic search (Google) | 2,000 | GA4 | 🟢 ≥1,800 / 🟡 1,400–1,799 / 🔴 <1,400 |
| Organic impressions | Total impressions in Google Search Console | 12,000 | GSC | 🟢 ≥10,800 / 🟡 8,400–10,799 / 🔴 <8,400 |
| Average click-through rate (organic) | Clicks ÷ impressions (GSC) | 3.5% | GSC | 🟢 ≥3.2% / 🟡 2.5–3.1% / 🔴 <2.5% |
| Average position (target keywords) | Mean ranking across tracked keyword set | Top 20 avg | GSC | 🟢 ≤18 avg / 🟡 18–25 avg / 🔴 >25 avg |
| Keywords ranking page 1 (positions 1–10) | Number of tracked keywords with position 1–10 | 15 keywords | GSC | 🟢 ≥13 / 🟡 10–12 / 🔴 <10 |
| Keywords ranking page 2 (positions 11–20) | Number of tracked keywords with position 11–20 | 25 keywords | GSC | 🟢 ≥22 / 🟡 17–21 / 🔴 <17 |
| Organic session → MQL rate | MQLs from organic ÷ total organic sessions | 1.0% | GA4 + HubSpot | 🟢 ≥0.9% / 🟡 0.7–0.89% / 🔴 <0.7% |
| Organic-sourced MQLs | MQLs where first touch = organic search | 10/month | HubSpot | 🟢 ≥9 / 🟡 7–8 / 🔴 <7 |
| Blog posts published | New articles published meeting content brief standards | 4/month | CMS | 🟢 ≥4 / 🟡 2–3 / 🔴 ≤1 |
| Backlinks acquired | New referring domains (domain authority ≥ 30) | 3/month | Ahrefs / Semrush | 🟢 ≥3 / 🟡 1–2 / 🔴 0 |
| Core Web Vitals — LCP | Largest Contentful Paint (page speed) | < 2.5s | GSC / PageSpeed Insights | 🟢 <2.5s / 🟡 2.5–4.0s / 🔴 >4.0s |

### 6b. Priority Keyword Tracking (review monthly)

Track these keywords by region each month in GSC. Record the position and month-over-month delta.

**Australia priority keywords:**
| Keyword | Current Position | Target Position | Monthly Delta |
|---|---|---|---|
| logistics software australia | — | Top 5 | — |
| 3pl software australia | — | Top 5 | — |
| tms software australia | — | Top 10 | — |
| wms software australia | — | Top 10 | — |
| freight management system australia | — | Top 10 | — |
| chain of responsibility compliance software | — | Top 5 | — |
| transport management system australia | — | Top 10 | — |

**Saudi Arabia priority keywords:**
| Keyword | Current Position | Target Position | Monthly Delta |
|---|---|---|---|
| logistics software saudi arabia | — | Top 5 | — |
| نظام إدارة النقل | — | Top 10 | — |
| warehouse management system ksa | — | Top 5 | — |
| 3pl software middle east | — | Top 10 | — |
| zatca compliant logistics software | — | Top 5 | — |

**Indonesia priority keywords:**
| Keyword | Current Position | Target Position | Monthly Delta |
|---|---|---|---|
| software logistik indonesia | — | Top 5 | — |
| sistem manajemen transportasi | — | Top 5 | — |
| software 3pl indonesia | — | Top 10 | — |
| wms indonesia | — | Top 10 | — |
| software gudang indonesia | — | Top 10 | — |

**Philippines priority keywords:**
| Keyword | Current Position | Target Position | Monthly Delta |
|---|---|---|---|
| logistics software philippines | — | Top 5 | — |
| tms philippines | — | Top 5 | — |
| 3pl software philippines | — | Top 10 | — |
| warehouse management system philippines | — | Top 10 | — |

---

## Section 7 — Pipeline and Revenue Metrics

**Reporting frequency:** Weekly (opportunity count, pipeline value) | Monthly (conversion rates, velocity, forecast)
**Primary tool:** HubSpot Deals

### 7a. Pipeline Health

| Metric | Definition | Monthly Target | Quarterly Target | Tool | RAG Threshold |
|---|---|---|---|---|---|
| New opportunities created | New deals reaching Discovery stage in the month | 7 | 20 | HubSpot | 🟢 ≥6 / 🟡 5 / 🔴 ≤4 |
| Total pipeline value (open) | Sum of deal amounts for all open opportunities | $4.5M | $4.5M (rolling) | HubSpot | 🟢 ≥$4.0M / 🟡 $3.1–$3.9M / 🔴 <$3.1M |
| Average deal size | Sum of deal amounts ÷ number of open deals | $150K | $150K | HubSpot | 🟢 ≥$135K / 🟡 $105–$134K / 🔴 <$105K |
| Pipeline by region — AU | Open deal value in Australia | $1.57M | $1.57M | HubSpot | 🟢 ≥35% share / track vs. regional target |
| Pipeline by region — SA | Open deal value in Saudi Arabia | $1.35M | $1.35M | HubSpot | 🟢 ≥30% share |
| Pipeline by region — ID | Open deal value in Indonesia | $900K | $900K | HubSpot | 🟢 ≥20% share |
| Pipeline by region — PH | Open deal value in Philippines | $675K | $675K | HubSpot | 🟢 ≥15% share |
| Deals by stage — Discovery | Opportunities in Discovery stage | 10–15 (healthy range) | — | HubSpot | Flag if >20 (pipeline bloat) or <5 (pipeline gap) |
| Deals by stage — Proposal | Opportunities in Proposal/Commercial Review | 3–6 | — | HubSpot | Flag if <2 (conversion problem) |
| Deals by stage — Negotiation | Opportunities in Negotiation | 1–3 | — | HubSpot | Flag if 0 for 6+ weeks (velocity problem) |

### 7b. Pipeline Velocity Metrics

Pipeline velocity = how quickly opportunities move from creation to close. Low velocity means pipeline is stalling, not converting.

| Metric | Definition | Benchmark | Tool | Action If Red |
|---|---|---|---|---|
| Average days Discovery → Proposal | Average time for a deal to move from Discovery to Proposal stage | 45 days | HubSpot | If >60 days: review discovery call quality; are the right stakeholders engaged? |
| Average days Proposal → Negotiation | Average time from Proposal to Negotiation stage | 30 days | HubSpot | If >45 days: pricing or commercial concern; deploy CEO one-pager or ROI calculator |
| Average days Negotiation → Close | Average time from Negotiation to Close Won or Lost | 45 days | HubSpot | If >60 days: legal/procurement delay; escalate to Sales Lead + regional AE |
| Total average sales cycle (Discovery → Close) | End-to-end from opportunity creation to close | 180 days | HubSpot | Benchmark only; do not try to compress artificially |
| Deal stall rate | % of open deals with no activity logged in >21 days | <15% | HubSpot | If >15%: weekly deal review required; AE accountability |
| Opportunity → Close Won rate (marketing-sourced) | Closed Won ÷ (Closed Won + Closed Lost) | 25% | HubSpot | If <20% for 2 consecutive quarters: review ICP targeting and qualification criteria |

### 7c. Channel Attribution

Track where opportunities are sourced from — this informs budget allocation for the next quarter.

| Channel | Monthly Opportunity Target | % of Total Target | How to Tag in HubSpot |
|---|---|---|---|
| SDR LinkedIn Outbound | 3 opps/month | 42% | Deal source = "SDR Outbound — LinkedIn" |
| Paid LinkedIn | 2 opps/month | 29% | Deal source = "LinkedIn Paid" |
| Events | 1 opp/month | 14% | Deal source = "Event — [event name]" |
| Organic / SEO | 0.5 opp/month | 7% | Deal source = "Organic Search" |
| Email Nurture / Database | 0.5 opp/month | 7% | Deal source = "Email Nurture" |
| **Total** | **7 opps/month** | **100%** | |

*Note: Attribution model is last touch (the channel that generated the final conversion to MQL). First-touch attribution is tracked in parallel for channel planning purposes. Use the `/analytics/attribution-model.md` file for multi-touch attribution methodology.*

---

## Section 8 — HubSpot Reports to Create

Create each of these reports in HubSpot and save them to the "Marketing Dashboard" report collection. Add all reports to a shared HubSpot Dashboard accessible to Campaign Marketing Manager, Sales Lead, and all AEs.

### 8a. Funnel Reports

**Report 1: Full Funnel — Monthly Volume**
- Type: Bar chart
- Metric: Contact count at each lifecycle stage
- Filters: Lifecycle stage = Subscriber / MQL / SQL / Opportunity / Customer. Date range = current month vs. prior month
- Group by: Lifecycle stage
- Purpose: Visualise funnel volume and month-over-month change at a glance

**Report 2: MQL Source Breakdown**
- Type: Pie chart
- Metric: MQL volume
- Filters: Lifecycle stage became MQL = last 30 days. Group by: `Q1 2026 Campaign Source` (or equivalent campaign source property)
- Purpose: Show which channels are producing MQLs

**Report 3: MQL → SQL → Opportunity Conversion Funnel**
- Type: Funnel chart
- Stages: MQL count → SQL count → Opportunity count
- Filters: Date range = current quarter
- Purpose: Identify where the biggest conversion drop-off is happening

**Report 4: MQL Volume Trend (12 months)**
- Type: Line chart
- Metric: New MQLs per month
- Filters: Lifecycle stage became MQL, date range = last 12 months, group by month
- Purpose: Identify seasonality and overall trajectory

### 8b. Channel-Level Reports

**Report 5: LinkedIn Paid — MQLs and CPL by Region**
- Type: Table
- Metrics: LinkedIn spend (pulled from campaign notes or deal property), MQLs from LinkedIn, CPL
- Filters: Lead source = LinkedIn Paid, group by Country
- Purpose: Compare LinkedIn performance by region; identify which region is most efficient

**Report 6: SDR Activity Log — Weekly**
- Type: Table
- Metrics: LinkedIn messages sent, email sequences enrolled, tasks completed, by SDR owner
- Filters: Activity date = this week, type = LinkedIn message / email sent / task completed. Group by contact owner
- Purpose: Monitor SDR daily activity compliance

**Report 7: SDR Conversion — Connection → MQL → SQL**
- Type: Funnel chart
- Metrics: LinkedIn connections sent, MQLs from SDR source, SQLs from SDR source
- Filters: Lead source = SDR Outbound, date range = last 90 days
- Purpose: Track SDR funnel efficiency end-to-end

**Report 8: Email Nurture — Open and CTR by Sequence**
- Type: Table
- Metrics: Emails sent, open rate, CTR, unsubscribes, by email sequence name
- Filters: Email type = automated/sequence. Group by: email name
- Purpose: Identify which nurture sequences are performing and which need copy refreshing

**Report 9: Event Pipeline Attribution**
- Type: Table
- Metrics: Contacts created per event (static list count), MQLs from event, SQLs from event, opportunities associated with event contacts
- Filters: Contact in static list [event name] AND lifecycle stage
- Purpose: Measure event ROI per event over time

**Report 10: Organic Sessions → MQL**
- Type: Table
- Metrics: Organic sessions (from GA4 source dimension in HubSpot or manual input), MQLs from organic source, session-to-MQL rate
- Filters: Lead source = Organic Search, group by month
- Purpose: Track whether SEO investment is producing leads

### 8c. Pipeline Reports

**Report 11: Open Pipeline by Stage and Region**
- Type: Table
- Metrics: Deal count, deal amount, average deal age (days since created)
- Filters: Deal stage ≠ Closed Won / Closed Lost. Group by: Deal Stage and Country
- Purpose: Weekly pipeline health view; spot stalled deals by stage

**Report 12: Deal Velocity — Average Days per Stage**
- Type: Table
- Metrics: Average days in each deal stage (Discovery, Proposal, Negotiation)
- Filters: Deals created in last 6 months. Group by: Deal Stage
- Purpose: Identify which stage is creating the most friction

**Report 13: Pipeline Attribution by Channel**
- Type: Bar chart
- Metric: Deal amount and deal count
- Filters: All open deals + closed won in last 6 months. Group by: Deal Source property
- Purpose: Quarterly channel attribution review; informs next-quarter budget allocation

**Report 14: New Opportunities Created — Weekly Trend**
- Type: Line chart
- Metric: New deals created (count)
- Filters: Deal stage became Discovery, group by week, last 13 weeks
- Purpose: Monitor opportunity creation velocity; spot gaps before they become pipeline shortfalls

**Report 15: T1 Account Engagement Scorecard**
- Type: Table
- Metrics: Company name, most recent activity date, number of contacts engaged, lifecycle stage of furthest-progressed contact, any open deal
- Filters: Company property `T1 Account Flag` = True
- Sort by: Most recent activity (ascending — least recently touched at top)
- Purpose: Weekly T1 account coverage review; ensure no T1 account goes dark

### 8d. Monthly Review Reports (run on the first Monday of each month)

**Report 16: Monthly Marketing Scorecard**
- Type: Custom table (template in Section 9 below)
- Metrics: All section targets vs. actuals for the prior month
- Filters: All contacts, deals, and activities where date = prior calendar month
- Purpose: Executive-level monthly performance review

**Report 17: Closed Lost Reasons — Quarterly**
- Type: Pie chart
- Metric: Closed Lost deal count
- Filters: Deal stage = Closed Lost, close date = last 90 days. Group by: `Closed Lost Reason` deal property
- Purpose: Identify systemic loss patterns; informs messaging, battlecards, and ICP refinement

**Report 18: Campaign-Specific Attribution**
- Type: Table
- Metrics: Campaign name, contacts influenced, MQLs, SQLs, opportunities, pipeline value
- Filters: HubSpot campaign = [specific campaign name]. Date range = campaign active dates
- Purpose: Full ROI review per campaign; required for campaign close-out reports

---

## Section 9 — Monthly Marketing Scorecard

Complete this scorecard on the first Monday of each month. Share with Sales Lead and all AEs. File in `/analytics/` with the format: `scorecard-[mmm-yyyy].md` (e.g., `scorecard-may-2026.md`).

---

```
═══════════════════════════════════════════════════════
RAMCO LOGISTICS MARKETING — MONTHLY SCORECARD
Month: [Month Year] | Prepared by: [Name] | Date: [Date]
═══════════════════════════════════════════════════════

SECTION A — FULL FUNNEL SUMMARY
┌─────────────────────────────┬────────┬────────┬──────────┬────────────────┐
│ Metric                      │ Target │ Actual │ % Target │ Status         │
├─────────────────────────────┼────────┼────────┼──────────┼────────────────┤
│ Website sessions (organic)  │ 2,000  │        │          │ 🟢 / 🟡 / 🔴  │
│ Gated asset downloads       │ 135    │        │          │ 🟢 / 🟡 / 🔴  │
│ MQLs generated (all ch.)    │ 40     │        │          │ 🟢 / 🟡 / 🔴  │
│ SQLs generated (all ch.)    │ 14     │        │          │ 🟢 / 🟡 / 🔴  │
│ MQL → SQL conversion rate   │ 33%    │        │          │ 🟢 / 🟡 / 🔴  │
│ Opportunities created       │ 7      │        │          │ 🟢 / 🟡 / 🔴  │
│ SQL → Opp conversion rate   │ 50%    │        │          │ 🟢 / 🟡 / 🔴  │
│ Pipeline generated ($)      │ $1.05M │        │          │ 🟢 / 🟡 / 🔴  │
└─────────────────────────────┴────────┴────────┴──────────┴────────────────┘

SECTION B — CHANNEL PERFORMANCE
┌─────────────────────────────┬────────┬────────┬──────────┬────────────────┐
│ Channel Metric              │ Target │ Actual │ % Target │ Status         │
├─────────────────────────────┼────────┼────────┼──────────┼────────────────┤
│ SDR connection accept — T1  │ 30%    │        │          │ 🟢 / 🟡 / 🔴  │
│ SDR positive reply rate—T1  │ 15%    │        │          │ 🟢 / 🟡 / 🔴  │
│ SDR-sourced MQLs            │ 15     │        │          │ 🟢 / 🟡 / 🔴  │
│ LinkedIn CTR (weighted avg) │ 0.54%  │        │          │ 🟢 / 🟡 / 🔴  │
│ LinkedIn CPL (weighted avg) │ <$75   │        │          │ 🟢 / 🟡 / 🔴  │
│ LinkedIn-sourced MQLs       │ 15     │        │          │ 🟢 / 🟡 / 🔴  │
│ Email open rate (avg)       │ 38%    │        │          │ 🟢 / 🟡 / 🔴  │
│ Email CTR (avg)             │ 5.5%   │        │          │ 🟢 / 🟡 / 🔴  │
│ Email-sourced MQLs          │ 8      │        │          │ 🟢 / 🟡 / 🔴  │
│ Organic sessions            │ 2,000  │        │          │ 🟢 / 🟡 / 🔴  │
│ Organic-sourced MQLs        │ 10     │        │          │ 🟢 / 🟡 / 🔴  │
│ Event MQLs (if event month) │ 8+     │        │          │ 🟢 / 🟡 / 🔴  │
└─────────────────────────────┴────────┴────────┴──────────┴────────────────┘

SECTION C — REGIONAL BREAKDOWN
┌─────────────────────────────┬────────┬────────┬────────┬────────┐
│ Metric                      │  AU    │  SA    │  ID    │  PH    │
├─────────────────────────────┼────────┼────────┼────────┼────────┤
│ MQLs this month             │ 16     │ 14     │ 7      │ 3      │
│ Actual                      │        │        │        │        │
│ SQLs this month             │ 5      │ 5      │ 2      │ 2      │
│ Actual                      │        │        │        │        │
│ Opportunities created       │ 2–3    │ 2      │ 1      │ 0–1    │
│ Actual                      │        │        │        │        │
│ T1 accounts active (open    │        │        │        │        │
│ deal or SQL in last 30 days)│        │        │        │        │
│ Status                      │        │        │        │        │
└─────────────────────────────┴────────┴────────┴────────┴────────┘

SECTION D — PIPELINE STATUS
┌─────────────────────────────┬────────┬────────┬──────────┬────────────────┐
│ Pipeline Metric             │ Target │ Actual │ % Target │ Status         │
├─────────────────────────────┼────────┼────────┼──────────┼────────────────┤
│ Total open pipeline value   │ $4.5M  │        │          │ 🟢 / 🟡 / 🔴  │
│ Deals in Discovery          │ 10–15  │        │          │ 🟢 / 🟡 / 🔴  │
│ Deals in Proposal           │ 3–6    │        │          │ 🟢 / 🟡 / 🔴  │
│ Deals in Negotiation        │ 1–3    │        │          │ 🟢 / 🟡 / 🔴  │
│ Closed Won this month       │ 0–1    │        │          │ Track only     │
│ Closed Lost this month      │ —      │        │          │ Track only     │
│ Average deal age (open)     │ <90d   │        │          │ 🟢 / 🟡 / 🔴  │
│ Deals stalled >21 days      │ <15%   │        │          │ 🟢 / 🟡 / 🔴  │
└─────────────────────────────┴────────┴────────┴──────────┴────────────────┘

SECTION E — CONTENT AND SEO
┌─────────────────────────────┬────────┬────────┬──────────┬────────────────┐
│ Content/SEO Metric          │ Target │ Actual │ % Target │ Status         │
├─────────────────────────────┼────────┼────────┼──────────┼────────────────┤
│ Blog posts published        │ 4      │        │          │ 🟢 / 🟡 / 🔴  │
│ Organic sessions            │ 2,000  │        │          │ 🟢 / 🟡 / 🔴  │
│ Keywords ranking page 1     │ 15     │        │          │ 🟢 / 🟡 / 🔴  │
│ New backlinks (DA ≥ 30)     │ 3      │        │          │ 🟢 / 🟡 / 🔴  │
│ Organic MQLs                │ 10     │        │          │ 🟢 / 🟡 / 🔴  │
└─────────────────────────────┴────────┴────────┴──────────┴────────────────┘

SECTION F — WHAT HAPPENED THIS MONTH

TOP 3 WINS (be specific — reference real accounts, metrics, or tactics):
1.
2.
3.

TOP 3 GAPS (be honest — use data from the report, not instinct):
1.
2.
3.

CAUSE ANALYSIS (for any 🔴 metric — one sentence per red):
• [Metric] was red because: [specific cause]. Fix: [specific action] by [owner] by [date].

NEXT MONTH FOCUS (top 3 priorities for the coming month):
1.
2.
3.

SECTION G — QUARTERLY FORECAST (update monthly)

┌─────────────────────┬──────────┬────────┬────────┬─────────────────┐
│ Metric              │ Q Target │ M1 Act │ M2 Act │ M3 Fcst (needed)│
├─────────────────────┼──────────┼────────┼────────┼─────────────────┤
│ MQLs                │ 120      │        │        │                 │
│ SQLs                │ 40       │        │        │                 │
│ Opportunities       │ 20       │        │        │                 │
│ Pipeline value      │ $3.0M    │        │        │                 │
└─────────────────────┴──────────┴────────┴────────┴─────────────────┘

The "M3 Fcst (needed)" column is calculated automatically:
M3 Needed = Q Target − M1 Actual − M2 Actual

If M3 Needed for Opportunities exceeds 10 (more than 50% of quarterly target required in a single month): escalate to Sales Lead — quarterly target is at risk.

═══════════════════════════════════════════════════════
END OF SCORECARD
Save as: /analytics/scorecard-[mmm-yyyy].md
═══════════════════════════════════════════════════════
```

---

## Section 10 — Daily Monitoring Checklist

Run this check every morning (Campaign Marketing Manager or Marketing Ops — 10 minutes maximum):

```
DAILY MARKETING PULSE — [Date]

LINKEDIN (2 minutes):
□ Check LinkedIn Campaign Manager: any campaign paused due to budget or policy issue?
□ CTR anomaly check: any campaign with CTR > 1.5% (investigate — may be audience too narrow) or CTR < 0.1% (investigate — creative or audience problem)
□ Budget pacing: are campaigns on track to spend allocated daily budget? Under-pacing = audience too small or bid too low. Over-pacing = daily cap may need lowering.

HUBSPOT (5 minutes):
□ New MQLs today: review each new MQL — is it ICP? Was the SDR notification triggered? Is the contact already in a sequence?
□ T1 flag check: any new form submission or email click from a T1 account? → Notify the assigned AE immediately.
□ Workflow errors: go to HubSpot → Automation → Workflows → check for any workflow with error status. Fix before end of day.
□ SDR tasks overdue: check HubSpot task list filtered by SDR owners — any task more than 24 hours overdue? Flag to SDR Lead.

GA4 (2 minutes):
□ Today's organic sessions vs. 7-day average (realtime view): significant drop? Check Google Search Console for manual action or indexing issue.
□ Landing page conversion rate today vs. last 7-day average: drop of >20%? Check that the HubSpot form is live and not returning an error.

FLAG ANYTHING UNUSUAL:
□ Bounce from a T1 company domain (email bounce from known T1 contact) → SDR uses LinkedIn only for this contact
□ Negative LinkedIn comment on a promoted post → flag to Campaign Marketing Manager; do not delete; respond within 2 hours
□ Spam complaint → remove contact from all sequences; investigate if bulk email triggered it
```

---

## Section 11 — Dashboard Maintenance

### Quarterly Review (first week of each new quarter)

1. Review all benchmark targets — are they still realistic based on the prior quarter's actual performance? Adjust if there is a sustained pattern over 2+ quarters.
2. Review RAG thresholds — if a metric is chronically amber (80–89%) every month and is not improvable, recalibrate the threshold or the target.
3. Archive prior quarter's scorecards to `/analytics/archive/`
4. Update keyword tracking table in Section 6b with current positions from GSC
5. Update event calendar in Section 5b with confirmed events for the next quarter
6. Review HubSpot report accuracy: pull a sample of 20 MQL records and verify that lead source and campaign attribution are correctly populated. If attribution is >15% blank/unknown, investigate tracking gaps.

### Responsible Owners

| Section | Data Owner | Review Owner |
|---|---|---|
| Full Funnel (Section 1) | Marketing Ops | Campaign Marketing Manager |
| Outbound / SDR (Section 2) | SDR Lead | Campaign Marketing Manager |
| Email Nurture (Section 3) | Marketing Ops | Campaign Marketing Manager |
| Paid LinkedIn (Section 4) | Campaign Marketing Manager | Sales Lead |
| Events (Section 5) | Campaign Marketing Manager | Sales Lead |
| SEO / Content (Section 6) | Content Manager / Marketing Ops | Campaign Marketing Manager |
| Pipeline / Revenue (Section 7) | Sales Lead | Sales Lead + Campaign Marketing Manager |
| Monthly Scorecard (Section 9) | Campaign Marketing Manager | Sales Lead |
