# SKILL FILE 16: Sales Battlecard Creation System
Category: Product Marketing
Depends on: skill-12-competitive-intel.md, persona-definitions.md
Save to: skills/product-marketing/skill-16-sales-battlecard-system.md

## When to Use
- When a competitor is named in 3+ deals in one quarter
- When entering a new region where a specific competitor dominates
- When a deal is lost to a competitor and the reason reveals a messaging gap
- Quarterly refresh of all existing battlecards

## Battlecard Types

Type 1 — Head-to-Head Battlecard (one competitor vs Ramco)
Format: 2-page PDF — one side for AE, one side for champion to use internally
Audience: AEs and SDRs for live deal conversations

Type 2 — Competitive Landscape Overview Card
Format: 1-page summary of all competitors in one region
Audience: new AE onboarding, event preparation

Type 3 — Objection Handling Card (deal-stage specific)
Format: Single page — top 5 objections + Ramco responses + follow-up questions
Audience: AEs in active deals where competitor is shortlisted

## Battlecard Structure (Type 1 — Standard)

FRONT PAGE (AE-facing):
Section 1: Competitor snapshot (5 lines max)
  - Who they are, their primary product, where they are strongest
  - Threat level per region: AU / ID / SA / PH (High / Medium / Low)

Section 2: Where they win (be brutally honest — 3 to 4 points)
  - What they genuinely do better or are perceived to do better
  - Why: which persona cares about this and why it matters to them

Section 3: Where Ramco wins (5 to 7 points — specific and defensible)
  - Each point must have a proof statement or customer evidence
  - Map each point to the persona it resonates with most

Section 4: The 3-sentence Ramco positioning against this competitor
  - Sentence 1: Acknowledge the competitor (not dismissively)
  - Sentence 2: The key differentiation
  - Sentence 3: What that means for a 3PL in their region

Section 5: 5 discovery questions (surface their weaknesses naturally)
Section 6: 5 objection handling scripts (most common competitive objections)

BACK PAGE (champion-facing — send to internal champion):
A short, non-salesy brief the CIO or COO can use to justify
choosing Ramco to the CEO or board. Written in their voice, not Ramco's.

## Battlecard Maintenance Rules
- Review all battlecards quarterly
- Refresh immediately when: competitor launches a major product update,
  a deal is lost to that competitor, competitor enters a new region
- Never share outdated battlecards — date-stamp every card
- Store in: strategy/competitive/[competitor-slug]-battlecard.md
- Notify sales team whenever a battlecard is updated

## CLAUDE PROMPTS FOR THIS SKILL

### Prompt 1 — Generate Full Head-to-Head Battlecard
---PROMPT START---
You are a product marketing strategist for Ramco Systems Logistics Software.
Read these files before starting:
- inputs/persona-definitions.md
- inputs/input.json
- skills/revenue/skill-12-competitive-intel.md

Generate a complete head-to-head battlecard for:
Competitor: [REPLACE]
Primary competing product: [REPLACE]
Regions where they compete with Ramco: [REPLACE]
Most common deal stage where they appear: [REPLACE]

Deliver the complete battlecard in this exact structure:

SECTION 1 — Competitor Snapshot (5 lines max):
Company overview, primary product, strongest region, pricing model if known,
implementation approach (direct / partner / SI).

SECTION 2 — Where They Win (be honest — 3 to 4 points):
For each point: what the advantage is, which persona cares most, why it matters.

SECTION 3 — Where Ramco Wins (5 to 7 points, specific and defensible):
For each point: the Ramco advantage, the proof or evidence, which persona it resonates with.

SECTION 4 — The 3-Sentence Ramco Positioning vs This Competitor:
Sentence 1: Acknowledge competitor (not dismissively)
Sentence 2: Key differentiation in one clear statement
Sentence 3: What that means for a 3PL in [REGION]

SECTION 5 — 5 Discovery Questions:
Questions that naturally surface competitor weaknesses without naming the competitor.
For each: the question + why it works (one sentence).

SECTION 6 — 5 Objection Handling Scripts:
Format: Objection | Persona | Ramco Response (max 60 words) | Follow-up question

SECTION 7 — Champion Brief (back page — written in champion's voice):
A 150-word brief a CIO or COO can adapt to justify choosing Ramco to their CEO.
Tone: peer-to-peer, not marketing copy.
Leave [COMPANY NAME] and [SPECIFIC METRIC] as fillable placeholders.

Save to: strategy/competitive/[competitor-slug]-battlecard.md
---PROMPT END---

### Prompt 2 — Generate Competitive Landscape Overview Card
---PROMPT START---
Read strategy/competitive/master-competitor-list.md and all existing
battlecard files in strategy/competitive/

Generate a 1-page competitive landscape overview for:
Region: [REPLACE: Australia / Indonesia / Saudi Arabia / Philippines]

Include:
- Table of all competitors present in this region with:
  Competitor | Primary product | Strength | Weakness | Ramco win angle
- The 1 competitor Ramco most frequently encounters in this region
- The 1 competitor that is growing fastest in this region
- The 3 most common competitive objections in this region + Ramco responses
- Recommended talking points for AEs at regional events

Save to: strategy/competitive/[region]-competitive-landscape.md
---PROMPT END---

### Prompt 3 — Refresh an Existing Battlecard
---PROMPT START---
Read the existing battlecard at: strategy/competitive/[COMPETITOR-SLUG]-battlecard.md

A significant update has occurred:
[REPLACE WITH: competitor launched new feature / we lost a deal / competitor dropped price / competitor entered new region]

Update the battlecard to reflect this change:
1. Update the relevant section(s) only — do not rewrite the whole card
2. Add a "Last updated" line at the top with today's date
3. Flag what changed with a [UPDATED] marker next to each changed section
4. Add 1 new objection handling script specific to this new development
5. Write a 3-line internal alert message marketing can send to the sales team:
   "Heads up — [COMPETITOR] has [done X]. Here is how to handle it: [response]"

Save the updated card back to the same file path.
---PROMPT END---

## METRICS
| Metric | Target | Review |
|--------|--------|--------|
| Battlecards built (all Tier 1 competitors) | 4 battlecards complete | Quarter 1 |
| Battlecard usage per deal (HubSpot tracked) | Used in above 60% of competitive deals | Monthly |
| Win rate — deals where battlecard was used | Above 40% | Quarterly |
| Win rate — deals where no battlecard used | Establish baseline | Quarterly |
| Battlecard freshness | No card older than 90 days | Monthly check |
