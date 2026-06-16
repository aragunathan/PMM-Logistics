# Repository Architecture — Ramco Logistics Marketing System
## Phase 5: Complete File Map, Dependencies, and Execution Logic
**Generated:** 2026-06-16 | **Version:** 2.0

---

## Overview

This document is the master reference for the repository structure. It defines:
- What every file does and when to use it
- How files depend on each other
- The correct execution order for every workflow
- Naming conventions and file creation rules

Read this document when: onboarding a new team member, debugging why an output doesn't match expectations, or planning a new skill or agent.

---

## Full Directory Structure

```
/PMM-Logistics
├── CLAUDE.md                          ← Master instruction file — Claude reads this first every session
├── MANUAL.md                          ← Human-readable setup and usage guide
├── inputs/
│   ├── input.json                     ← Company, market, goals, channels, constraints — source of truth
│   ├── normalized-input.json          ← Validated + gap-analysed version of input.json (Phase 0-1 output)
│   ├── persona-definitions.md         ← PERSONA SOURCE OF TRUTH — read before any copy output
│   └── target-account-list-template.csv ← TAL structure (T1/T2, region, persona contacts)
├── strategy/
│   ├── strategy.md                    ← GTM strategy, funnel math, budget, milestones
│   ├── strategic-mapping.md           ← Phase 2-3 output: bottlenecks, channel priority, skill selection
│   ├── repository-architecture.md     ← This file
│   ├── annual-plan-2026.md            ← Full annual marketing plan
│   ├── annual-plan-2026-template.md   ← Blank template for future years
│   ├── channel-prioritization.md      ← Channel scoring and investment rationale
│   ├── competitive-landscape.md       ← Competitor overview across all regions
│   └── competitive/
│       ├── master-competitor-list.md
│       ├── oracle-transportation-management-battlecard.md
│       ├── oracle-transportation-management-champion-email-template.md
│       └── regional-competitive-analysis.md
├── skills/
│   ├── acquisition/
│   │   ├── skill-01-abm-account-list-building.md
│   │   ├── skill-02-sdr-outbound-linkedin.md     ← NEW (generated 2026-06-16)
│   │   ├── skill-07-paid-linkedin-campaigns.md
│   │   ├── skill-08-regional-seo-content.md
│   │   ├── skill-09-google-ads-keyword-research.md
│   │   ├── skill-10-google-ads-copy.md
│   │   └── skill-11-retargeting-campaigns.md
│   ├── activation/
│   │   ├── skill-03-persona-messaging-architecture.md
│   │   └── skill-04-email-nurture-sequences.md
│   ├── retention/
│   │   └── skill-expansion-playbook.md
│   ├── revenue/
│   │   ├── skill-05-event-activation-playbook.md
│   │   ├── skill-06-sales-enablement-kit.md
│   │   └── skill-12-competitive-intel.md
│   ├── ops/
│   │   ├── skill-13-annual-marketing-plan.md
│   │   ├── skill-attribution-reporting.md
│   │   ├── skill-hubspot-pipeline-setup.md
│   │   └── skill-registry.md                     ← Skill selection engine reference
│   └── product-marketing/
│       ├── skill-14-product-launch-playbook.md
│       ├── skill-15-case-study-reference-program.md
│       ├── skill-16-sales-battlecard-system.md
│       ├── skill-17-messaging-positioning-framework.md
│       ├── skill-18-win-loss-analysis.md
│       └── skill-19-analyst-pr-relations.md
├── agents/
│   ├── new-account-research-agent.md
│   ├── event-prep-agent.md
│   ├── competitive-intel-agent.md
│   ├── product-launch-agent.md
│   ├── case-study-agent.md
│   ├── messaging-agent.md
│   └── win-loss-agent.md
├── campaigns/
│   ├── accounts/                      ← Named account work (one subfolder per account)
│   │   ├── [company-name]/
│   │   │   ├── [company]-account-brief.md
│   │   │   ├── [company]-outreach-messages.md
│   │   │   └── [company]-email-nurture.md
│   ├── google-ads/                    ← Google Ads keyword sets + ad copy per region/module
│   │   ├── account-structure.md
│   │   └── [region]-[module]-keywords.md
│   ├── linkedin-paid/                 ← LinkedIn paid campaign briefs
│   ├── retargeting/                   ← Retargeting audience setup + ad sets
│   ├── event-series/                  ← Pre/post event templates
│   ├── case-studies/                  ← Published case study assets
│   ├── launches/                      ← Product launch campaign assets
│   └── q3-2026-campaign-assembly.md  ← NEW: Phase 6 campaign plan
├── prompts/
│   ├── ads/                           ← Ready-to-use AI prompts for ad generation, analysis
│   ├── content/                       ← Prompts for blog posts, whitepapers, case studies
│   ├── outbound/                      ← LinkedIn + email sequence prompts per persona
│   ├── sales-enablement/              ← Battlecard, one-pager generator prompts
│   └── strategy/                      ← Annual plan, quarterly plan, mid-year review prompts
├── templates/
│   ├── email-nurture-track1.md        ← CIO/IT persona nurture track
│   ├── email-nurture-track2.md        ← COO/Ops persona nurture track
│   ├── email-nurture-track3.md        ← CEO persona nurture track
│   ├── event-follow-up-email.md
│   └── linkedin-message-templates.md
├── analytics/
│   ├── kpi-dashboard.md               ← Full-funnel KPIs, RAG thresholds, reporting cadence
│   ├── attribution-model.md
│   ├── weekly-reporting-template.md
│   └── iteration-feedback-system.md  ← NEW: Phase 7 optimization engine
├── experiments/
│   ├── experiment-log.md              ← All A/B tests and experiments with results
│   └── ab-test-results.md
└── scripts/
    ├── run-case-study.sh
    ├── run-product-launch.sh
    └── run-win-loss.sh
```

---

## File Relationships — Read Order by Task

### Task: Write any marketing copy (email, ad, LinkedIn message, one-pager)
**Read in this order:**
1. `inputs/persona-definitions.md` — persona pain, language, what NOT to say
2. `skills/product-marketing/skill-17-messaging-positioning-framework.md` — positioning pillars
3. Relevant skill file for the output type (email → Skill 04, LinkedIn → Skill 02, ad → Skill 10)

### Task: Build or update a campaign for a named account
**Read in this order:**
1. `inputs/input.json` — region and ICP
2. `inputs/persona-definitions.md` — persona for this account
3. `skills/acquisition/skill-01-abm-account-list-building.md` — T1/T2 designation
4. `campaigns/accounts/[company]/[company]-account-brief.md` — if it exists
5. Relevant skill files (Skill 02 for LinkedIn, Skill 04 for email)

### Task: Launch or update a Google Ads campaign
**Read in this order:**
1. `skills/acquisition/skill-09-google-ads-keyword-research.md`
2. `skills/acquisition/skill-10-google-ads-copy.md`
3. `inputs/persona-definitions.md`
4. `campaigns/google-ads/account-structure.md`
5. Save outputs to: `campaigns/google-ads/[region]-[module]-keywords.md`

### Task: Prepare for an event
**Read in this order:**
1. `skills/revenue/skill-05-event-activation-playbook.md`
2. `skills/activation/skill-03-persona-messaging-architecture.md`
3. `inputs/persona-definitions.md`
4. Run: `agents/event-prep-agent.md`
5. Save to: `campaigns/events/[event-name]/`

### Task: Respond to a competitive objection or diagnose a deal loss
**Read in this order:**
1. `skills/revenue/skill-12-competitive-intel.md`
2. `strategy/competitive/master-competitor-list.md`
3. `skills/product-marketing/skill-16-sales-battlecard-system.md`
4. Run: `agents/competitive-intel-agent.md`
5. Save to: `strategy/competitive/[competitor]-battlecard.md`

### Task: Update or generate the annual/quarterly plan
**Read in this order:**
1. `strategy/strategy.md`
2. `analytics/kpi-dashboard.md`
3. `skills/ops/skill-13-annual-marketing-plan.md`
4. Use prompt: `prompts/strategy/annual-plan-generator.md` or `quarterly-plan-generator.md`
5. Save to: `strategy/annual-plan-[YEAR].md` or `campaigns/q[N]-[YEAR]-marketing-plan.md`

---

## Naming Conventions

### Files
| Type | Convention | Example |
|------|-----------|---------|
| Skill files | `skill-[number]-[hyphenated-name].md` | `skill-02-sdr-outbound-linkedin.md` |
| Account briefs | `[company-name]-account-brief.md` | `kings-transport-account-brief.md` |
| LinkedIn sequences | `linkedin-sequence-[persona].md` | `linkedin-sequence-coo.md` |
| Email sequences | `email-nurture-[persona/track].md` | `email-nurture-track2.md` |
| Campaign briefs | `campaign-[number]-[topic].md` | `campaign-04-one-platform-five-problems.md` |
| Google Ads outputs | `[region]-[module]-keywords.md` | `au-tms-keywords.md` |
| Retargeting outputs | Prefixed by audience type | `google-display-ad-sets.md` |
| Monthly scorecards | `scorecard-[mmm-yyyy].md` | `scorecard-jun-2026.md` |
| Experiment records | `exp-[number]-[topic].md` | `exp-001-subject-line-ab-test.md` |

### Folder naming
- Account folders: lowercase, hyphenated `kings-transport/`
- Event folders: lowercase, hyphenated `sclaa-national-2026/`
- All folders: no spaces, no uppercase

---

## Dependency Logic — Execution Order

### Cold-start order (building from scratch)
If starting with a new region or new account with no existing assets:

```
Step 1: inputs/input.json → inputs/persona-definitions.md
Step 2: Skill 01 (ABM list) → target-account-list-template.csv
Step 3: Skill 17 (messaging framework) → messaging matrix for the region
Step 4: Skill 03 (persona messaging) → confirm pain/hook/CTA per persona
Step 5: Skill 02 (SDR LinkedIn) → connection requests + sequences
Step 6: Skill 04 (email nurture) → HubSpot sequences
Step 7: Skill 09 + 10 (Google Ads) → keyword set + RSA ad copy
Step 8: Skill 07 (LinkedIn paid) → campaign brief + ad copy
Step 9: Skill 11 (retargeting) → audience setup + ad sets
Step 10: Skill 15 (case study) → proof point asset for the region
Step 11: Skill 06 (sales enablement) → AE kit (battlecard, one-pager, ROI data)
```

### Campaign refresh order (ongoing, quarterly)
```
Month 1 of quarter:
- Review KPI dashboard → identify red metrics
- Apply iteration-feedback-system.md decision logic
- Fix red metrics first (email deliverability, CTR, conversion rate)

Month 2 of quarter:
- Refresh underperforming ad creative (Skills 10, 07)
- Update LinkedIn sequences if reply rate below target (Skill 02)
- Publish new content asset (Skill 08)

Month 3 of quarter:
- Win/loss analysis (Skill 18)
- Quarterly plan review (Skill 13 + quarterly-plan-generator.md)
- Update TAL for next quarter (Skill 01)
```

### Reusability rules
- **Persona definitions** (inputs/persona-definitions.md) — universal input to every skill. Never generate persona-specific content without reading this file first.
- **Messaging framework** (Skill 17) — must be read before any campaign that introduces new positioning language or targets a new region.
- **Reference accounts** (VISY, PT Cipta Krida, Kanoo) — reusable across all channels without modification. Ensure approval to use each reference is current before deploying.
- **Prompt files** (`prompts/`) — all prompts are designed to be copy-pasted directly into Claude. Never edit prompts inline — update the prompt file and use the updated version.
- **Account briefs** — once written, an account brief is the single source of truth for that account. All SDR sequences, emails, and ad targeting for that account reference the brief. Update the brief when new intel is gathered.

---

## Agent Quick Reference

| Agent | Trigger | Reads | Saves To |
|-------|---------|-------|---------|
| new-account-research-agent | "Run the new account research agent for [COMPANY] in [COUNTRY]" | Skills 01, 03; input.json; persona-definitions.md | campaigns/accounts/[company]/ |
| event-prep-agent | "Run the event prep agent for [EVENT] in [REGION]" | Skills 05, 03; persona-definitions.md | campaigns/events/[event-name]/ |
| competitive-intel-agent | "Run the competitive intel agent for [COMPETITOR]" | Skills 12, 03, 06; persona-definitions.md | strategy/competitive/ and campaigns/accounts/ |
| product-launch-agent | "Run the product launch agent for [PRODUCT]" | Skills 14, 17; persona-definitions.md | campaigns/launches/ |
| case-study-agent | "Run the case study agent for [CUSTOMER] in [REGION]" | Skill 15; persona-definitions.md | campaigns/case-studies/ |
| messaging-agent | "Run the messaging agent for [MODULE] in [REGION]" | Skills 17, 03; persona-definitions.md | campaigns/ (messaging matrix) |
| win-loss-agent | "Run the win-loss agent" | Skill 18; HubSpot data; competitive-landscape.md | experiments/experiment-log.md |

---

## What NOT to Create

- Do not create separate CSS/JS files — keep all HTML assets single-file
- Do not create README.md files in subfolders unless explicitly requested
- Do not save draft content to the root directory — all outputs go to their correct folder
- Do not create new skills without reading existing skill files first — check for overlap
- Do not create account briefs for companies not on the T1 or T2 TAL — focus resources
- Do not create new prompt files unless the prompt cannot be composed from existing ones

---

## Maintenance Cadence

| Action | Frequency | Owner |
|--------|-----------|-------|
| Update inputs/input.json with actual pipeline and win rate data | Monthly | Marketing Lead |
| Update strategy/strategy.md milestones | Quarterly | Marketing Lead |
| Archive completed experiments to experiments/archive/ | Quarterly | Marketing Ops |
| Review and refresh LinkedIn sequences (Skill 02) | Every 90 days | SDR Lead |
| Refresh Google Ads keywords (Skill 09) | Monthly | Campaign Marketing Manager |
| Update competitive landscape (strategy/competitive/) | When a competitive deal is lost | Competitive Intel |
| Update KPI dashboard benchmark targets | Quarterly (first week of Q) | Marketing Ops |
