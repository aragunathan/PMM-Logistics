# Email Nurture Sequence — IT Director | Followmont Transport | TMS Pitch
**Account:** Followmont Transport (followmont.com.au)
**Persona:** Technology Persona — IT Director
**Region:** Australia (Queensland-based, eastern seaboard road freight)
**Product:** Ramco TMS
**Track:** Track 1 — Technology Persona
**Goal:** Book a 30-minute technical walkthrough with a Ramco implementation architect
**Cadence:** 5 emails over 21 days
**Skill Reference:** skills/activation/skill-04-email-nurture-sequences.md

---

## Account Context
Followmont Transport is one of Queensland's largest road freight carriers, operating linehaul and depot services across Brisbane, Sydney, Melbourne, and South Australia. They manage a large fleet, handle general freight, temperature-sensitive cargo, and dangerous goods, and operate multiple depot facilities across eastern Australia. At this scale, the IT Director is typically managing a patchwork of TMS, freight billing, driver management, and ERP systems — all requiring integration — while keeping a lean IT team running.

**Key pain points for this account:**
- Legacy TMS that doesn't share data cleanly with billing and fleet systems
- Chain of Responsibility (CoR) compliance requires auditable driver behaviour and load records — harder across fragmented systems
- Australian data residency expectations for operational and freight data
- Implementation risk — a carrier of this size cannot afford extended downtime or a disruptive go-live
- Lean IT team (typically 3–8 people) — implementation resource availability is a real constraint

**Sender:** Use an Australian-based Ramco team member. Include an Australian mobile (+61 4XX XXX XXX) in signature.

---

## Email Sequence

---

### Email 1 — Day 0 (Send immediately on enrollment)

```
Subject: TMS data silos at a road freight carrier
Preview: One architecture question worth answering early

{{contact.firstname}},

Running linehaul and depot operations across multiple states means your transport data is living in more places than it should.

TMS handles movement. Billing handles rating. Fleet management handles drivers. Something else handles CoR records. And somewhere above all of it sits your ERP, with middleware doing its best to hold the joins together.

It works — until a new customer needs onboarding fast, or an audit requires pulling CoR data across six months of mixed-system records, or someone in operations needs a report that requires four exports and a spreadsheet.

I've put together a short overview of how road freight carriers at your scale are consolidating this architecture without a rip-and-replace migration. Worth 5 minutes if integration complexity is on your radar.

[Link: Download — Integration Architecture Guide for Road Freight IT Teams]

{{owner.full_name}}
{{owner.title}} | Ramco Systems
{{owner.phone}}

PS — If you're actively evaluating TMS platforms, I'm happy to send our API documentation and integration specs directly. Reply and I'll get them across.
```

---

### Email 2 — Day 4

```
Subject: CoR compliance and your transport data
Preview: The audit trail most TMS platforms can't produce cleanly

{{contact.firstname}},

Chain of Responsibility compliance has raised the bar on what your systems need to produce — not just operationally, but evidentially.

When an incident occurs, or when the NHVR asks questions, the data trail needs to span driver behaviour, load records, fatigue management, and vehicle condition — ideally from a single system that produces a clean, timestamped record.

For most carriers, that data is spread across a TMS, a separate fleet or telematics platform, and manual paper-based records at the depot level. Pulling it together under pressure isn't a process problem. It's an architecture problem.

Here's a breakdown of the three most common data integration patterns we see in Australian road freight operators — and which one produces a defensible CoR audit trail without rebuilding everything from scratch.

[Link: Read — CoR Data Architecture for Australian Road Freight Carriers]

{{owner.full_name}}
{{owner.title}} | Ramco Systems
{{owner.phone}}
```

---

### Email 3 — Day 9

```
Subject: [Case study] TMS consolidation at a road freight carrier
Preview: What the IT lead said six months after go-live

{{contact.firstname}},

The question I hear most from IT leaders before a platform decision: "What does implementation actually look like — and how much will it pull my team away from day-to-day operations?"

It's the right question. At a carrier the size of Followmont, a badly scoped implementation affects the whole business, not just the IT team.

I've attached a case study from a road freight operator that ran a phased TMS consolidation — connecting transport, billing, and fleet data into a single platform over 14 months. It covers the integration approach, what connected to their existing ERP, how they handled the depot-by-depot rollout, and what the IT lead said at the six-month mark.

The implementation had rough patches — they'll tell you that. But the honest account is more useful than a polished success story.

[Link: Download — Road Freight TMS Consolidation Case Study]

{{owner.full_name}}
{{owner.title}} | Ramco Systems
{{owner.phone}}
```

---

### Email 4 — Day 14

```
Subject: Before you shortlist a TMS — a checklist
Preview: Built for 3PL IT teams. Use it on us too.

{{contact.firstname}},

If you're evaluating transport management platforms — or expect to be in the next 6–12 months — there are a few questions that consistently separate vendors who can actually deliver from the ones who make it look straightforward in demos.

I put together a vendor evaluation checklist specifically for Australian road freight IT teams. It covers API documentation standards, data residency and hosting location, implementation methodology, CoR compliance data model, post-go-live support SLAs, and upgrade/release cadence.

Use it however you like — including to evaluate Ramco.

[Link: Download — TMS Vendor Evaluation Checklist for Road Freight IT Teams]

{{owner.full_name}}
{{owner.title}} | Ramco Systems
{{owner.phone}}

PS — If you'd like to run through the checklist against our platform specifically, I can set up a 30-minute technical walkthrough with one of our implementation architects. No sales conversation — just architecture, integration, and technical questions. Reply and I'll organise it.
```

---

### Email 5 — Day 21 (Final touch)

```
Subject: Last one from me, {{contact.firstname}}
Preview: Leaving the door open

{{contact.firstname}},

Over the past few weeks I've shared a few things — integration architecture, CoR data considerations, a case study, and a vendor evaluation checklist.

If none of it landed at the right time, no problem at all. Platform decisions have their own timelines, and for a carrier the size of Followmont, the timing needs to be right for the business — not the vendor.

If you do revisit this in the next quarter or two, I'm at {{owner.email}} or {{owner.phone}}. Happy to answer technical questions directly, share API documentation, or arrange a reference call with an IT counterpart at a similar road freight operator in Australia.

Either way, I'll stop filling your inbox now.

{{owner.full_name}}
{{owner.title}} | Ramco Systems
{{owner.phone}}
```

---

## HubSpot Setup Notes

**Sequence naming (HubSpot convention):**
```
NUR | T1 | CIO | AU | E1 — Followmont TMS integration intro
NUR | T1 | CIO | AU | E2 — CoR compliance data architecture
NUR | T1 | CIO | AU | E3 — Road freight TMS case study
NUR | T1 | CIO | AU | E4 — TMS vendor evaluation checklist
NUR | T1 | CIO | AU | E5 — Final touch / graceful exit
```

**Workflow name:**
```
NURTURE | CIO | AU | Track 1 — Followmont
```

**Send time (AEST):**
- Best days: Tuesday, Wednesday, Thursday
- Best times: 7:30–9:00am AEST or 1:00–2:00pm AEST
- Avoid: Friday afternoons, Monday mornings, Queensland public holidays

**Enrollment trigger:**
- Contact is IT Director at Followmont Transport
- No open deal associated with Followmont in HubSpot
- Contact has not unsubscribed

**Exit conditions:**
- Contact replies to any email → pause immediately, route to SDR within 4 business hours
- Contact clicks CTA link without converting → same-day SDR task created
- Contact books a meeting → exit workflow, mark as Meeting Booked
- Deal created for Followmont → exit workflow

**Suppression:**
- Do not enrol if Followmont is an existing Ramco customer
- Do not enrol if contact has an associated open deal

---

## Content Assets Required

Before launching this sequence, the following assets need to exist or be created:

| Email | Asset Required | Status |
|-------|---------------|--------|
| Email 1 | Integration Architecture Guide for Road Freight IT Teams (PDF) | To create |
| Email 2 | CoR Data Architecture for Australian Road Freight Carriers (article or PDF) | To create |
| Email 3 | Road Freight TMS Consolidation Case Study (PDF) | To create / adapt from existing |
| Email 4 | TMS Vendor Evaluation Checklist for Road Freight IT Teams (PDF) | To create |
| Email 5 | No asset required | — |

---

## SDR Handoff Notes

When SDR receives a task from this sequence:
- Reference Followmont's Queensland/eastern seaboard operations in outreach
- Lead with CoR compliance or integration consolidation — these are the highest-credibility entry points for an IT Director at a road freight carrier
- Offer a 30-minute technical walkthrough with an implementation architect, not a sales demo
- If contact has clicked the vendor evaluation checklist (Email 4), open the SDR call by offering to walk through the checklist against Ramco's platform specifically
- Australian mobile in signature; offer a direct call rather than a calendar link as first preference
