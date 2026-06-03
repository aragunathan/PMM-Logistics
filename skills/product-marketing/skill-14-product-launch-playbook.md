# SKILL FILE 14: Product Launch Playbook
Category: Product Marketing
Focus: TMS repositioning and new module launches
Save to: skills/product-marketing/skill-14-product-launch-playbook.md

## When to Use
Run this skill when:
- Launching a new module or major feature update
- Repositioning an existing module (TMS priority for next 12 months)
- Entering a new region with an existing product
- Responding to a competitor launch that requires counter-positioning

## Inputs Required
- inputs/input.json
- inputs/persona-definitions.md
- skills/product-marketing/skill-17-messaging-positioning-framework.md
- Product details: what is launching, what changed, why now
- Launch date and hard deadline

## The 3 Launch Types This Skill Covers
Type 1: Major launch — new module goes to market (full playbook, 12 weeks)
Type 2: Feature launch — significant update to existing module (6 weeks)
Type 3: Repositioning — existing module, new messaging and market angle (8 weeks)

Current priority: TMS repositioning (Type 3)

## LAUNCH TIER FRAMEWORK

Tier 1 — Major Launch (new module, new region entry)
Full 12-week playbook. Involves: product, marketing, sales, CS, leadership.
Deliverables: positioning doc, messaging matrix, launch deck, sales kit,
press release, 3 blog posts, 2 customer emails, 1 webinar, updated website.

Tier 2 — Feature Launch (significant capability update)
6-week playbook. Involves: marketing and sales.
Deliverables: updated messaging, 1 blog post, sales one-pager update,
customer email, LinkedIn post series.

Tier 3 — Repositioning (TMS priority)
8-week playbook. No new product — new story.
Deliverables: new positioning doc, updated messaging matrix, new hero page,
updated ad copy, sales deck refresh, 2 blog posts, outbound sequence refresh.

---
## TMS REPOSITIONING PLAYBOOK — 8-WEEK TIMELINE

Week 1 and 2 — Research and Positioning
- Run messaging agent to audit current TMS messaging vs competitors
- Identify the repositioning angle (run skill-17 first)
- Draft new TMS positioning statement and test with 2 to 3 AEs
- Deliverable: approved TMS positioning document

Week 3 and 4 — Asset Creation
- Rewrite TMS website hero page copy (H1, subhead, bullets, CTA)
- Rewrite TMS ad copy for all 3 regions (run skill-10 with new positioning)
- Update TMS sales deck — first 5 slides (problem, solution, differentiation)
- Refresh outbound LinkedIn sequences for CIO and COO with new angle
- Deliverable: all written assets approved by sales lead

Week 5 and 6 — Enablement and Amplification
- Run 1 internal sales enablement session — new TMS story walkthrough
- Publish 1 blog post with new TMS angle (SEO-optimised)
- Send 1 customer email: existing customers see new capabilities framing
- Update LinkedIn company page banner and about section
- Launch updated TMS ad campaigns in Google and LinkedIn
- Deliverable: all channels live with new positioning

Week 7 and 8 — Outbound Push and Measure
- Begin refreshed outbound sequences to Tier 1 TMS prospects
- Monitor: CTR on new ads vs old, reply rate on new sequences
- First signal check: is new positioning resonating better than old?
- Deliverable: 2-week performance report and go/no-go on full rollout

---
## PRE-LAUNCH CHECKLIST

Internal alignment (must be done before any external launch):
[ ] Sales team briefed on new positioning — can articulate it in one sentence
[ ] AEs reviewed and approved new outbound messages
[ ] Customer success team knows what is changing (no surprises for existing customers)
[ ] Legal reviewed any new claims (especially ROI statistics)

Assets ready (must be complete before go-live date):
[ ] Website copy updated and live
[ ] Ad copy updated in Google Ads and LinkedIn Campaign Manager
[ ] Sales deck first 5 slides updated
[ ] Outbound sequences updated in HubSpot
[ ] Blog post published and indexed
[ ] Customer email drafted and scheduled

Tracking ready (must be in place before launch):
[ ] UTM parameters on all new launch links
[ ] HubSpot source tracking for launch traffic
[ ] Baseline metrics captured from pre-launch period for comparison

## CLAUDE PROMPTS FOR THIS SKILL

### Prompt 1 — Generate Launch Plan for Any Module or Repositioning
---PROMPT START---
You are the product marketing manager for Ramco Systems Logistics Software.
Read inputs/input.json and inputs/persona-definitions.md before starting.

Generate a complete launch plan for:
Launch type: [REPLACE: Major / Feature / Repositioning]
Module: [REPLACE: TMS / WMS / Fleet / Hub Management / Rating and Billing]
What is changing or being repositioned: [REPLACE]
Target regions: [REPLACE: AU / ID / SA / PH]
Launch date: [REPLACE]
Primary persona for this launch: [REPLACE: CIO / COO / CEO]

Deliver:
1. Launch tier recommendation (1, 2, or 3) with reasoning
2. Week-by-week launch timeline with owner for each task
3. Complete asset list — every deliverable needed before go-live
4. Pre-launch checklist for internal alignment
5. Success metrics — what does a successful launch look like at 30 and 60 days?
6. Risk: what could go wrong and how to mitigate each risk

Make every task specific — no vague steps like "create content".
Every task must have: what exactly to create, who creates it, when it is due.
---PROMPT END---

### Prompt 2 — Generate TMS Repositioning Brief
---PROMPT START---
You are a product marketing strategist for Ramco Systems.
Read inputs/persona-definitions.md and
skills/product-marketing/skill-17-messaging-positioning-framework.md

Ramco's TMS is being repositioned for the next 12 months.
Current perception: a logistics software vendor with TMS among several modules.
Desired perception: THE integrated TMS built exclusively for 3PL companies —
  no generic ERP, no freight forwarder tool, purpose-built for 3PL operations.

Generate a TMS repositioning brief including:
1. The single repositioning statement (one sentence, max 20 words)
   that the entire team can memorize and repeat
2. What we are moving AWAY from (old messaging to retire)
3. What we are moving TOWARD (new angle to lead with)
4. The 3 proof points that make this repositioning credible
5. How this repositioning lands differently for each persona:
   - CIO: what does it mean for their technology evaluation?
   - COO: what does it mean for their operations outcomes?
   - CEO: what does it mean for their business competitiveness?
6. Competitive context: how does this repositioning
   differentiate from Oracle TM, SAP TM, and WiseTech CargoWise?
7. What NOT to say — messaging landmines that undermine the repositioning

Save to: strategy/tms-repositioning-brief.md
---PROMPT END---

### Prompt 3 — Generate Launch Email to Sales Team
---PROMPT START---
Write an internal launch announcement email for Ramco's sales team
announcing the TMS repositioning.

Audience: AEs and SDRs
From: Head of Marketing
Tone: Direct, energizing, confident — not corporate

Include:
- What is changing and why (2 sentences max)
- The new TMS positioning statement
- What this means for their outbound conversations
- 3 specific things that are changing: website, ad copy, outbound sequences
- When each goes live
- Where to find the new assets (file paths in the repository)
- One thing to stop saying immediately (old messaging)
- One thing to start saying immediately (new hook)

Max 300 words. No bullet point overload.
Every sentence must be something a salesperson actually wants to read.
---PROMPT END---

## METRICS
| Metric | Target | Review |
|--------|--------|--------|
| TMS page conversion rate (visitor to demo) | +25% vs pre-launch | Monthly |
| CTR on new TMS ad copy vs old | +30% improvement | Week 2 |
| Reply rate on new outbound sequences | +20% improvement | Week 3 |
| AE messaging consistency score | Above 8 out of 10 in call reviews | Monthly |
| New TMS opportunities created | +15% vs prior quarter | Quarterly |

## FAILURE MODES
Failure 1: Launch without sales alignment
Result: New website says one thing, AE says another. Prospect confused.
Fix: Sales enablement session is non-negotiable before any external launch.

Failure 2: Repositioning without proof points
Result: New claims without evidence. Sophisticated buyers dismiss it.
Fix: Every repositioning claim must have a supporting proof point before launch.

Failure 3: Changing everything at once with no baseline
Result: Cannot tell what caused any improvement or decline.
Fix: Capture baseline metrics for CTR, reply rate, and conversion rate
the week before launch. Compare weekly for 4 weeks post-launch.
