# Sadleirs — CIO / Technology Leader Email Sequence
**Account:** Sadleirs (sadleirs.com.au)
**Region:** Australia | **Date built:** 2026-06-16
**Track:** Technology Persona (CIO / Head of IT / Director of Technology)
**Target contact:** Troy [Last Name TBC] — Technology Leadership
**Sequence length:** 5 emails over 21 days
**Goal:** 30-minute technical architecture walkthrough

---

## Account Intelligence

| Field | Detail |
|-------|--------|
| Full name | Lionel Samson Sadleirs Group |
| Founded | 1829 — Australia's oldest family-owned logistics company |
| Revenue | ~$163M (2026) |
| Employees | 201–500 |
| CEO | Ian Kent |
| Tech lead | Troy [Last Name TBC] — 20+ years, background in mining / industrial / construction |
| Ownership | Privately held family business |
| Locations | Adelaide, Brisbane, Melbourne, Perth, Sydney |
| Services | Road freight, rail, air, sea, warehousing, 3PL, customs brokerage, packaging |
| Specialist ops | WA resource sector — Pilbara / Gascoyne triple road trains |
| ERP status | Implementing Oracle Cloud with PrimeQ — first AU transport company to do so |
| CEO quote | "Many disparate legacy systems that historically restricted growth" |
| Expansion | National expansion announced |
| Current tech | Microsoft 365, Oracle Cloud (in progress) |

**Strategic angle:** Oracle Cloud handles ERP — financials, HR, procurement. It does not cover 3PL-specific TMS, WMS, Fleet Management, Rating and Billing at operational depth. Ramco is the logistics execution layer that integrates with Oracle via documented APIs. Troy's background is outside logistics — the conversation should educate, not assume.

---

## Sequence Rules Applied (Skill 04 — Track 1: CIO)

- Subject lines: under 50 characters, no exclamation marks, no spam triggers
- Preview text: under 90 characters
- No opening line beginning with "I", "We", or "My name is"
- Body length: 100–180 words per email
- One CTA per email — low friction (read / download) for emails 1–3; meeting request from email 4
- PS line in emails 1 and 4
- Send time (AEST): Tuesday–Thursday, 7:30–9:00am or 1:00–2:00pm
- Suppress: existing customers, active deals, previous unsubscribes
- HubSpot naming: `NUR | T1 | CIO | AU | Sadleirs | E[N]`

---

## EMAIL 1 — Day 0

```
Subject: Oracle Cloud + the logistics layer
Preview: What the ERP doesn't cover for a 3PL at your scale

Troy,

The Oracle Cloud implementation is the right foundation — financials, procurement, and HR on a unified platform instead of legacy systems held together with middleware.

What Oracle Cloud doesn't cover is the logistics execution layer.

Rating and billing for multi-client 3PL contracts. TMS with driver and fleet management built in. WMS that shares a data model with transport so your team isn't manually reconciling what actually moved versus what the system recorded. These aren't ERP functions — they're specialist logistics modules that sit alongside Oracle and feed clean operational data into it.

For a 3PL running national freight, WA resource sector operations, warehousing, and customs brokerage across five capital cities, getting that integration architecture right — without building custom middleware — is where the real IT complexity lives post-go-live.

I've put together a short overview of how 3PLs on Oracle Cloud are handling this architecture decision.

[Link: Download — Logistics Platform Architecture Guide for 3PLs on Oracle Cloud | ramco.com/en-au]

[Sender Name]
[Title] | Ramco Systems
+61 4XX XXX XXX

PS — If you're already mapping the logistics layer as part of the Oracle rollout, I can send our Oracle integration specifications directly. Just reply.
```

---

## EMAIL 2 — Day 4

```
Subject: National expansion + a clean data model
Preview: The IT complexity that growth at scale creates

Troy,

National expansion and a major ERP rollout running in parallel — that's not a small IT programme.

The challenge isn't Oracle Cloud in isolation. It's what happens to the data model as new hubs come online, new clients get configured, and new service lines get added on top of a system that was designed for a smaller, simpler operation.

Every new location needs to plug into the same architecture. Every new client configuration needs to be reproducible without creating a one-off that IT has to maintain indefinitely.

For 3PLs going through exactly this phase, the cleanest path is a clear boundary between ERP and logistics execution — with documented APIs between them. Oracle handles financials and procurement. The logistics platform handles TMS, WMS, fleet, and billing. Clean handoff, no bespoke integration work that accrues technical debt as the business grows.

Here's a breakdown of the three most common integration patterns at 3PLs your scale, and the trade-offs of each.

[Link: Read — 3PL Integration Patterns: What Works at Scale | ramco.com/en-au]

[Sender Name]
[Title] | Ramco Systems
+61 4XX XXX XXX
```

---

## EMAIL 3 — Day 9

```
Subject: What the IT lead said 6 months post go-live
Preview: A case study that doesn't pretend implementation was easy

Troy,

One question IT leaders ask before committing to any logistics platform: "How much of my team's time will this consume, and for how long?" — especially when a parallel ERP rollout is already stretching IT capacity.

I've put together a case study from a mid-market 3PL that ran a TMS and WMS consolidation alongside an ERP migration. It covers the integration architecture, what the IT team actually had to deliver, and what the IT lead said when we checked in six months after go-live.

The implementation had its complications. The IT lead will tell you that. But an honest account of how they navigated competing priorities and a constrained team is more useful than a polished vendor success story.

[Link: Download — 3PL Platform Consolidation Case Study | ramco.com/en-au]

[Sender Name]
[Title] | Ramco Systems
+61 4XX XXX XXX
```

---

## EMAIL 4 — Day 14

```
Subject: Before you shortlist the logistics layer
Preview: A checklist built for 3PL IT teams — use it on us too

Troy,

If the logistics execution platform is on the roadmap — this year or next — there are a few questions that consistently separate vendors who can integrate cleanly with Oracle from those who make it sound straightforward in demos.

I've put together a short evaluation checklist for 3PL IT teams. It covers API documentation standards, Oracle integration architecture, implementation methodology, phased rollout options, and post-go-live support SLAs.

For an operation like Sadleirs — national footprint, WA resource sector, multi-modal across road, rail, air, and sea — the Chain of Responsibility data requirements are worth building into the evaluation early. Audit trail, driver behaviour logs, and load compliance data need to come from the logistics platform natively. That's harder to retrofit later.

Use the checklist however is useful — including to evaluate Ramco.

[Link: Download — 3PL Platform Evaluation Checklist for IT Teams | ramco.com/en-au]

[Sender Name]
[Title] | Ramco Systems
+61 4XX XXX XXX

PS — If you'd like to run through this against Ramco specifically, I can set up a 30-minute technical walkthrough with one of our implementation architects. No sales agenda — just architecture, integration specs, and your questions. Reply to book a time.
```

---

## EMAIL 5 — Day 21 (Final touch)

```
Subject: Last one from me, Troy
Preview: Leaving the door open

Troy,

Over the past few weeks I've shared a few things — Oracle integration architecture, a case study, a vendor evaluation checklist.

If none of it landed at the right time, completely understandable. With a major Oracle rollout underway and national expansion in progress, the last thing you need is another vendor in your inbox.

When the logistics layer does move up the priority list — this quarter or next year — I'm at [email] or on +61 4XX XXX XXX. Happy to answer technical questions directly, walk through our Oracle integration specs, or arrange a reference call with an IT counterpart at a comparable Australian 3PL.

I'll leave it there.

[Sender Name]
[Title] | Ramco Systems
+61 4XX XXX XXX
```

---

## HubSpot Setup Notes

**Sequence name:** `NUR | T1 | CIO | AU | Sadleirs`

**Enrollment:** Manual — enrol Troy directly from contact record once verified in HubSpot

**Suppression check before enrolling:**
- [ ] Confirm no open deal against Sadleirs account
- [ ] Confirm no previous unsubscribe
- [ ] Confirm Troy is not an existing customer contact

**Intent triggers to watch:**
- Any email reply → pause sequence, create SDR task within 4 business hours
- Any link click without conversion → create same-day SDR task
- 3+ opens without a click → flag as warm, SDR to connect on LinkedIn

**Suggested LinkedIn parallel touch:**
After Email 2 (Day 4), connect with Troy on LinkedIn using the Skill 02 connection request template. Reference the Oracle Cloud / logistics architecture angle as the hook — not Ramco.

---

## Next Steps

- [ ] Verify Troy's full name and title on LinkedIn / ZoomInfo
- [ ] Confirm his direct email in HubSpot
- [ ] Build Oracle Cloud integration guide asset (if not already in /campaigns/accounts/followmont/ — check asset-01)
- [ ] Build or locate 3PL platform consolidation case study PDF
- [ ] Build TMS vendor evaluation checklist (available at followmont/asset-04 — confirm it covers Oracle integration)
- [ ] Enrol in HubSpot once contact record is complete
