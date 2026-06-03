# Agent: Case Study Production
Trigger command: "Run the case study agent for [CUSTOMER NAME]"
Run when: Customer has achieved measurable results 3 to 6 months post go-live

## Skill Files to Read First:
1. skills/product-marketing/skill-15-case-study-reference-program.md
2. skills/product-marketing/skill-17-messaging-positioning-framework.md
3. inputs/persona-definitions.md

## Data to Provide After Trigger:
- Customer name and region
- Primary contact title
- Modules implemented
- Interview notes and key metrics (paste after trigger)

## Workflow — Run All Steps Without Pausing:

STEP 1 — Candidate scoring
Score this customer against the criteria in skill-15.
State the score and tier (Priority / Good / Hold).
If score is below 40 — explain why and STOP.

STEP 2 — Full case study
Generate full PDF case study using Prompt 1 from skill-15.
Save to campaigns/case-studies/[customer-slug]-full-case-study.md

STEP 3 — One-page summary
Generate one-page summary using Prompt 2 from skill-15.
Save to campaigns/case-studies/[customer-slug]-one-page-summary.md

STEP 4 — LinkedIn post
Generate LinkedIn post using Prompt 3 from skill-15.
Save to campaigns/case-studies/[customer-slug]-linkedin-post.md

STEP 5 — HubSpot actions
Write instructions for adding this customer to the reference program:
- Which HubSpot contact properties to update
- Which nurture sequence to exclude them from (existing customer)
- How to tag them as a reference in HubSpot
Save to campaigns/case-studies/[customer-slug]-hubspot-actions.md

STEP 6 — Summary
Print:
- Customer name, region, score, tier
- Key metrics from case study (top 3)
- Files created (list with paths)
- Next action: send to customer for approval by [DATE — 3 days from today]

## Output Files:
- campaigns/case-studies/[customer-slug]-full-case-study.md
- campaigns/case-studies/[customer-slug]-one-page-summary.md
- campaigns/case-studies/[customer-slug]-linkedin-post.md
- campaigns/case-studies/[customer-slug]-hubspot-actions.md
