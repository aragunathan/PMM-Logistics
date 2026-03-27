# Email Nurture Sequence — IT Director | All Purpose | Australia
## Ramco Logistics Software | Track 1: Technology Persona

**Account:** All Purpose (allpurpose.com.au)
**Persona:** IT Director (Technology Persona — Gatekeeper / Influencer)
**Region:** Australia
**Sequence length:** 3 emails over 14 days
**Goal:** Book a 30-minute technical walkthrough
**Skill reference:** skill-04-email-nurture-sequences.md (Track 1 adaptation), skill-03-persona-messaging-architecture.md
**Save path:** campaigns/accounts/all-purpose/email-nurture-it-director.md

---

## Copy Rules Applied
- Subject lines: under 50 characters, no spam triggers
- Preview text: under 90 characters, adds context (does not repeat subject)
- Opening line: does not start with "I", "We", or "My name is"
- Body length: 100–180 words (Technology Persona standard) — aim for lower end; emails must be sharp, poised, and to the point (Skill 04 updated rule)
- CTA: one per email; emails 1–2 are low-friction; email 3 asks for meeting
- Tone: peer-level, direct, technically credible — no fluff
- Australia nuances applied: plain English, no superlatives, data sovereignty acknowledged, ANZ-relevant context
- Forbidden: "plug-and-play", "seamless", "world-class", "cutting-edge", "robust", "revolutionary", "we integrate with everything"

---

## Email 1 — Day 0
**Trigger:** Enrol immediately on contact creation

```
Subject: How AU 3PL IT teams are handling platform sprawl
Preview: The integration problem that gets worse as the business grows

[First Name],

Most 3PL IT teams in Australia are managing 3–5 disconnected systems — TMS, WMS, fleet, billing, ERP — held together with middleware and manual reconciliation.

It holds. Until peak season, a new customer onboard, or a report that needs data pulled from four systems at once.

Here are the three integration patterns we see most often at 3PLs at your scale — with the trade-offs of each.

[Link: Download — Integration Architecture Guide for 3PL IT Teams]

[Sender Name]
[Title] | Ramco Systems
[Phone] | [Email]

PS — If you're already mid-evaluation, I can send API docs and integration specs directly. Just reply.
```

---

## Email 2 — Day 5
**Trigger:** Send 5 days after Email 1, regardless of open/click (unless reply received — pause sequence)

```
Subject: Real implementation timeline: 3PL platform consolidation
Preview: What the IT lead said six months after go-live

[First Name],

Before any vendor pitch, the question that matters most: "What does implementation actually cost my team in time and resource?"

One 3PL ran a phased TMS/WMS consolidation with ERP integration over 18 months — two-person IT team. The case study covers what they integrated, how they kept BAU running, and what the IT lead flagged six months post go-live.

Not a polished success story. An honest account.

[Link: Download — 3PL Platform Consolidation: Implementation Case Study]

[Sender Name]
[Title] | Ramco Systems
[Phone] | [Email]
```

---

## Email 3 — Day 14
**Trigger:** Send 9 days after Email 2. This is the meeting ask email.

```
Subject: 30 minutes — architecture questions, no pitch
Preview: Happy to share API docs and talk through what integration looks like

[First Name],

If any of what I've shared was relevant to All Purpose's environment, I'm happy to set up a 30-minute technical walkthrough with one of our implementation architects — data model, ERP integration, phased rollout. No sales pitch.

Two questions I'd want to understand first: what does your current architecture look like, and where does the integration friction actually sit?

[Link: Book a 30-Minute Technical Walkthrough]

Or just reply and I'll find a time.

[Sender Name]
[Title] | Ramco Systems
[Phone] | [Email]

PS — I can also arrange a reference call with an IT lead at an Australian 3PL that's been through this. Sometimes that's more useful than talking to the vendor.
```

---

## HubSpot Enrolment Notes

| Setting | Value |
|---------|-------|
| Sequence name | `Nurture | Tech Persona | AU | All Purpose` |
| Enrolment trigger | `abm_persona_category = Technology` AND `abm_region = Australia` AND `company = All Purpose` AND `no open deal` |
| Send days | Tuesday–Thursday preferred |
| Send window | 9am–11am AEST |
| Pause trigger | Any reply from contact → route to SDR within 4 business hours |
| Intent trigger | Link click without conversion → same-day SDR task |
| Suppression | Existing customers, active deal contacts, unsubscribers |
| Subscription type | B2B Marketing Emails — Ramco Logistics |

---

## Intent Signals to Watch

| Signal | Action |
|--------|--------|
| Opens Email 1 + clicks integration guide | Route to SDR: "warm on integration architecture content" |
| Opens 2+ emails, no click | Flag as warm; SDR LinkedIn outreach |
| Replies to any email | Pause sequence; SDR owns within 4 hours |
| Clicks "Book Walkthrough" (Email 3) | CRM task: confirm meeting; prep architecture brief |

---

## Sender Guidance

- Send from a named individual (e.g., Account Executive or SDR), not a generic address
- Use `[name]@engage.ramco.com` or equivalent subdomain — not `@ramco.com` directly
- Signature must include real name, real title, real direct phone number
- Do not mention competitors by name
- If prospect engages and asks about data hosting: confirm Australian data residency capability upfront — this is a common first question from AU IT teams
