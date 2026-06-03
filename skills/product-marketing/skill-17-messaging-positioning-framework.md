# SKILL FILE 17: Product Messaging and Positioning Framework
Category: Product Marketing
This is the master messaging skill — all other skills read this first.
Save to: skills/product-marketing/skill-17-messaging-positioning-framework.md

## When to Use
- Before any product launch (Skill 14 depends on this)
- Before writing any ad copy, outbound sequence, or website copy
- When messaging feels inconsistent across sales and marketing
- When entering a new region where language and context differ
- Annual refresh: review and update every 12 months

## Ramco TMS Positioning Statement (Current — to be refreshed)

Current statement (update via repositioning prompt):
"Ramco is an integrated logistics software platform built exclusively
for third-party logistics companies — combining TMS, WMS, Fleet Management,
Hub Management, and Rating and Billing in one system — enabling 3PLs to
reduce operational costs, improve visibility, and scale competitively."

Repositioning target (12-month goal):
Lead with the 3PL exclusivity angle harder. Competitors serve everyone.
Ramco serves one industry, deeply. That is the differentiation.
Target new statement: "The only enterprise logistics platform built
exclusively for 3PLs — not adapted, not generic. Built for 3PL complexity
from the ground up."

## Messaging House Structure

ROOF — The one thing Ramco stands for:
Built exclusively for 3PLs. Not adapted. Built for this.

THREE PILLARS — The proof points that hold the roof up:

Pillar 1: Complete (no gaps, no bolt-ons)
Supporting messages:
- TMS + WMS + Fleet + Hub + Rating and Billing — fully integrated
- One platform, one data model, one support team
- No integrations to build and maintain between modules
Proof: "Our customers manage transport, warehouse, fleet, and billing
from one screen — zero manual reconciliation between systems."

Pillar 2: Precise (built for 3PL operations specifically)
Supporting messages:
- Multi-client billing — handles complex 3PL rate structures
- Multi-site warehouse management — built for 3PL not single-shipper
- Fleet management built for contract logistics fleets, not company cars
Proof: "Every workflow in Ramco was designed for how 3PLs actually operate
— not adapted from a generic ERP or freight forwarder tool."

Pillar 3: Proven (evidence from 3PL customers in their markets)
Supporting messages:
- Customers in AU, ID, SA, PH — same regions, same challenges
- Implementation team with logistics operations experience
- Customer results in operational metrics that matter to 3PLs
Proof: Customer case studies with before/after metrics.

FOUNDATION — The supporting facts that make claims credible:
- [X] years of logistics software experience
- [X] 3PL customers across APAC and Middle East
- Dedicated implementation team per region
- 24/7 support included

## Persona Message Map

For each persona, the messaging house lands differently:

CIO — leads with Pillar 1 (Complete):
Hook: "One platform. One vendor. One integration project."
Their fear: buying 3 systems that don't talk to each other
Their win: reduces IT overhead, one contract, one upgrade cycle
What NOT to say: anything about operational efficiency (not their job)

COO — leads with Pillar 2 (Precise):
Hook: "Built for how 3PLs actually operate — not how ERPs assume they do."
Their fear: a system that doesn't handle their complex rate structures
  or multi-client warehouse operations
Their win: visibility across transport and warehouse, reduced manual work
What NOT to say: anything about IT architecture or vendor consolidation

CEO — leads with Pillar 3 (Proven):
Hook: "3PL peers in [REGION] are using this to win contracts they couldn't before."
Their fear: expensive technology that doesn't deliver ROI
Their win: competitive advantage, ability to scale without proportional cost increase
What NOT to say: any feature detail — they do not care

## Regional Messaging Variants

Australia:
Angle: Operational efficiency in a high-labour-cost market
Context: Labour costs are the #1 concern for Australian 3PL operations leaders
Hook addition: "In a market where labour costs are rising, the 3PLs winning
are those who automate what used to require headcount."

Indonesia:
Angle: Scale and visibility across a complex multi-island geography
Context: Managing freight across Java, Sumatra, and beyond requires
visibility tools that generic software was not built for
Hook addition: "Built for the complexity of Indonesian logistics —
multi-island, multi-carrier, multi-currency in one platform."

Saudi Arabia:
Angle: Vision 2030 logistics modernization and competitive readiness
Context: Saudi 3PLs are under pressure to modernize as foreign logistics
companies enter the market under Vision 2030
Hook addition: "As Vision 2030 transforms Saudi logistics, the 3PLs
investing in integrated technology now will own the contracts of tomorrow."

Philippines:
Angle: E-commerce growth and last-mile complexity
Context: The Philippine e-commerce boom is creating demand for 3PLs
who can handle complex, high-volume, island-distributed fulfilment
Hook addition: "As Philippine e-commerce grows 30%+ annually, 3PLs need
a platform built for volume, complexity, and speed — not spreadsheets."

## CLAUDE PROMPTS FOR THIS SKILL

### Prompt 1 — Generate Full Messaging Matrix
---PROMPT START---
You are the head of product marketing for Ramco Systems Logistics Software.
Read inputs/persona-definitions.md and inputs/input.json.

Build a complete messaging matrix for:
Module: [REPLACE: TMS / WMS / Fleet / full platform]
Region: [REPLACE]

Deliver a complete messaging matrix with:
For each of the 3 personas (CIO, COO, CEO):
- Primary pain (what keeps them up at night)
- Primary desired outcome (what winning looks like for them)
- How Ramco specifically addresses their pain
- Headline value proposition (max 12 words)
- 3 supporting proof points (metric-driven where possible)
- 1 proof statement (a sentence they could say to a colleague)
- What NOT to say to this persona (messaging landmines)
- Preferred content formats for this persona
- Best channel to reach them (LinkedIn / email / event / referral)

Then produce:
- The messaging house for this module (roof + 3 pillars + foundation)
- Regional variants for each of: AU, ID, SA, PH
- 3 headline options for the website hero for this module

Save to: strategy/messaging-matrix-[module]-[date].md
---PROMPT END---

### Prompt 2 — Audit Existing Messaging for Consistency
---PROMPT START---
You are a product marketing auditor for Ramco Systems.
Read skills/product-marketing/skill-17-messaging-positioning-framework.md

Audit the following assets for messaging consistency:
[PASTE: website copy, ad headlines, outbound email subjects, LinkedIn post text]

For each asset evaluate:
1. Does it lead with the correct pillar for the intended persona?
2. Does it use approved language from the messaging house?
3. Does it contain any messaging landmines (things NOT to say)?
4. Consistency score: 1 to 10 against the messaging framework
5. Recommended rewrite for any asset scoring below 7

Output a messaging audit report.
Save to: strategy/messaging-audit-[date].md
---PROMPT END---

### Prompt 3 — Generate Website Hero Copy for Any Module
---PROMPT START---
Read skills/product-marketing/skill-17-messaging-positioning-framework.md
and inputs/persona-definitions.md.

Write website hero section copy for:
Module: [REPLACE]
Region focus: [REPLACE]
Primary persona arriving on this page: [REPLACE]

Deliver:
- H1: max 10 words, leads with outcome not feature
- H2/subhead: max 20 words, expands on H1 with specificity
- 3 benefit bullets: outcome-led, start with a verb, max 12 words each
- CTA button: max 4 words
- Secondary CTA: max 6 words (for not-ready visitors)
- Social proof line: 1 sentence (customer logos or a metric)

Write 3 alternative H1 options for A/B testing.
All copy must align with the messaging house in this skill file.
Do not use: world-class, cutting-edge, powerful, robust, seamless, revolutionary.
---PROMPT END---

## METRICS
| Metric | Target | Review |
|--------|--------|--------|
| Messaging consistency score across assets | Above 8 out of 10 | Quarterly audit |
| Sales team messaging alignment | Above 80% use approved messaging in calls | Monthly |
| Website hero conversion rate improvement | +20% after messaging refresh | Monthly |
| Demo request quality (SQL rate from demos) | Above 25% | Monthly |
