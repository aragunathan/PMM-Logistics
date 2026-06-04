# Ramco Logistics Marketing System — User Manual

**Version:** 1.0 | **Last Updated:** June 2026 | **Owner:** ragunathan.a@ramco.com

This manual explains how to use every component of this repository: agents, scripts, skills, prompts, templates, and campaigns. Read this before starting any new task.

---

## Table of Contents

1. [System Overview](#1-system-overview)
2. [How the System Works](#2-how-the-system-works)
3. [Agents — Automated Workflows](#3-agents--automated-workflows)
4. [Skills — Modular Playbooks](#4-skills--modular-playbooks)
5. [Prompts — Reusable AI Templates](#5-prompts--reusable-ai-templates)
6. [Scripts — Command-Line Runners](#6-scripts--command-line-runners)
7. [Campaigns — Output Storage](#7-campaigns--output-storage)
8. [Strategy Files](#8-strategy-files)
9. [Templates](#9-templates)
10. [Analytics](#10-analytics)
11. [Quick Command Reference](#11-quick-command-reference)
12. [Common Workflows](#12-common-workflows)
13. [Directory Map](#13-directory-map)
14. [Rules and Constraints](#14-rules-and-constraints)

---

## 1. System Overview

This repository is an AI-powered B2B marketing execution engine for **Ramco Systems — Logistics Software division**. It is designed to be run inside Claude Code (this CLI tool).

**What it does:**
- Researches new target accounts and generates outreach assets
- Produces Google Ads, LinkedIn paid campaigns, and retargeting ads
- Runs competitive intelligence and sales battlecards
- Prepares event outreach and follow-up sequences
- Produces case studies, messaging frameworks, and product launch assets
- Generates annual and quarterly marketing plans

**Target market:** 3PL companies with $100M+ revenue in Australia, Indonesia, Saudi Arabia, Philippines, and India.

**CRM:** HubSpot. Every agent includes HubSpot import instructions as a final step.

---

## 2. How the System Works

The system has four layers:

```
AGENTS       → Automated multi-step workflows (say a trigger phrase → full output)
SKILLS       → Playbooks that agents read before executing
PROMPTS      → Reusable Claude prompt templates for single tasks
CAMPAIGNS    → Where all output files are saved
```

**How Claude uses this system:**

1. You say a trigger phrase (e.g. "Run the new account research agent for Allied Express in Australia")
2. Claude reads CLAUDE.md (always loaded), then reads the agent file
3. The agent file tells Claude which skill files and input files to read
4. Claude executes all workflow steps in sequence without pausing
5. Claude saves output files to the specified paths
6. Claude prints a summary with all file paths created

**Key rule:** Claude never asks for confirmation between steps. If data is missing, it notes the gap and continues.

---

## 3. Agents — Automated Workflows

Agents are end-to-end workflows. Each agent file lives in `/agents/` and contains: trigger command, skill files to read, workflow steps, and output file paths.

### Agent 1: New Account Research

**File:** `agents/new-account-research-agent.md`

**When to use:** A new 3PL company has been identified as a potential target account.

**Trigger command:**
```
Run the new account research agent for [COMPANY NAME] in [COUNTRY]
```

**Example:**
```
Run the new account research agent for Mainfreight in Australia
```

**What it produces (6 steps):**
1. ICP Scoring — Tier 1 / 2 / 3 / Not a fit (if Not a fit, stops here)
2. Account Brief — 1-page company overview, ops profile, tech signals, pain points
3. Contact Map — Table of personas, titles, LinkedIn search strings, priority ranking
4. LinkedIn Outreach Messages — 3 messages (one per persona), max 300 chars each
5. HubSpot Import Record — Company properties, contact properties, HubSpot actions
6. Summary — Account tier, contacts to find, file paths

**Output saved to:** `campaigns/accounts/[company-name]/`

**Reads:** `skill-01`, `skill-03`, `inputs/input.json`, `inputs/persona-definitions.md`

---

### Agent 2: Event Prep

**File:** `agents/event-prep-agent.md`

**When to use:** You are attending or speaking at a logistics industry event. Run this 4–6 weeks before the event.

**Trigger command:**
```
Run the event prep agent for [EVENT NAME] in [REGION]
```

**Example:**
```
Run the event prep agent for Transport and Logistics Australia 2026 in Australia
```

**What it produces (7 steps):**
1. Event Brief — 1-page overview, strategic rationale, timeline, meeting targets
2. Pre-Event LinkedIn Outreach — 3 messages (one per persona), max 300 chars each
3. Pre-Event Email Sequence — 3 emails at 4-weeks, 2-weeks, and 3-days before event
4. Speaking Abstract — 200–250 words, outcome-led, with format recommendation
5. Post-Event Follow-Up Templates — 3 templates: Hot / Warm / Cold leads
6. HubSpot Tagging Instructions — Contact logging rules, nurture enrollment triggers
7. Summary — Event details, all assets created, file paths

**Output saved to:** `campaigns/events/[event-name]/`

**Reads:** `skill-05`, `skill-03`, `inputs/persona-definitions.md`

---

### Agent 3: Competitive Intel

**File:** `agents/competitive-intel-agent.md`

**When to use:** You need a battlecard for a new competitor, or a deal is stalled because a competitor is involved.

**Two modes:**

#### Mode A — Full Battlecard (new competitor or refresh)

**Trigger command:**
```
Run the competitive intel agent for [COMPETITOR NAME]
```

**Example:**
```
Run the competitive intel agent for SAP Transportation Management
```

**What it produces (7 steps):**
1. Competitor Profile — 1-page: HQ, revenue, ICP, pricing, threat level per region
2. Win/Loss Analysis — Where they win vs. where Ramco wins
3. Discovery Questions — 5 questions that expose competitor weaknesses
4. Objection Handling Scripts — 5 scripts for common objections
5. Persona-Specific Positioning — CIO, COO, CEO angles
6. Internal Champion Support — Email template (150 words max) for champion to use internally
7. Summary

**Output saved to:** `strategy/competitive/[competitor-name]-battlecard.md` and `strategy/competitive/[competitor-name]-champion-email-template.md`

#### Mode B — Deal Diagnosis (stalled deal)

**Trigger command:**
```
Run the competitive intel agent — deal diagnosis for [DEAL NAME]
```

**Example:**
```
Run the competitive intel agent — deal diagnosis for Followmont TMS
```

**What to paste before running:**
- Deal name and company
- Competitor involved
- Current HubSpot stage
- Last activity date
- Which personas have engaged
- Known objections

**What it produces (5 steps):**
1. Reads existing battlecard (or runs Mode A first if none exists)
2. Deal Diagnosis — Identifies stall reason: champion, price, IT team, urgency, persona, or messaging issue
3. Re-engagement Plan — 3 specific actions with owners and timelines
4. Competitive Response Assets — Pulls relevant content from battlecard
5. Summary

**Output saved to:** `campaigns/accounts/[company-name]/[deal-name]-competitive-response.md`

**Reads:** `skill-12`, `skill-03`, `skill-06`, `inputs/persona-definitions.md`

---

### Agent 4: Case Study Production

**File:** `agents/case-study-agent.md`

**When to use:** A customer has been live on Ramco for 3–6 months and has measurable results. Run this to produce the full case study suite.

**Trigger command:**
```
Run the case study agent for [CUSTOMER NAME]
```

**Example:**
```
Run the case study agent for Kings Transport in Australia
```

**What it produces (6 steps):**
1. Candidate Scoring — Scores against skill-15 criteria; if below 40, stops
2. Full Case Study — Long-form PDF-ready case study
3. One-Page Summary — Condensed version for sales use
4. LinkedIn Post — Social post version
5. HubSpot Actions — Instructions for logging, tagging, and using the case study in HubSpot
6. Summary — Score, all files, file paths

**Output saved to:** `campaigns/case-studies/[customer-slug]/`

**Reads:** `skill-15`, `skill-17`, `inputs/persona-definitions.md`

---

### Agent 5: Product Launch

**File:** `agents/product-launch-agent.md`

**When to use:** Launching a new module, or repositioning an existing one (e.g. TMS repositioning). Run 8–12 weeks before launch date.

**Trigger command:**
```
Run the product launch agent for [MODULE] — [LAUNCH TYPE]
```

**Example:**
```
Run the product launch agent for TMS — Repositioning
```

**What to include:**
- Launch date
- Primary region
- Primary persona

**What it produces (6 steps):**
1. Positioning Check — Reads skill-17; generates messaging matrix if one doesn't exist
2. Launch Plan — Full launch timeline and asset list
3. Asset Production — For TMS repositioning: brief, website copy, ad copy
4. Sales Enablement — Internal sales launch email
5. Pre-Launch Checklist — Go/no-go checklist
6. Summary

**Output saved to:** `campaigns/launches/[module]-[date]-*.md`

**Reads:** `skill-17`, `skill-14`, `skill-16`

---

### Agent 6: Messaging and Positioning

**File:** `agents/messaging-agent.md`

**Two modes:**

#### Mode A — Generate Messaging Matrix

**Trigger command:**
```
Run the messaging agent for [MODULE] in [REGION]
```

**Example:**
```
Run the messaging agent for TMS in Australia
```

**What it produces:**
1. Full messaging matrix → `strategy/messaging-matrix-[module]-[region]-[date].md`
2. Website hero copy → `campaigns/[module]-website-copy-[date].md`
3. Alignment check against existing skill files
4. Summary with any misalignments flagged

#### Mode B — Messaging Audit

**Trigger command:**
```
Run the messaging audit
```

**How to use:** Paste the assets you want audited (emails, ads, web copy, LinkedIn posts) into the chat, then run this command.

**What it produces:**
1. Audit report → `strategy/messaging-audit-[date].md`
2. List of every asset scoring below 7/10
3. Summary: overall score, top 3 issues, priority fixes

**Reads:** `skill-17`

---

### Agent 7: Win-Loss Analysis

**File:** `agents/win-loss-agent.md`

**Status:** File exists but is currently empty. This agent is not yet configured. Use `skill-18-win-loss-analysis.md` directly for win-loss work until this agent is built out.

---

## 4. Skills — Modular Playbooks

Skills are detailed playbooks that define how to execute a specific marketing function. Agents read them automatically. You can also reference skills directly when doing ad-hoc work.

**Rule:** Always tell Claude which skill to read before doing work that maps to a skill. Claude reads these to know the rules, constraints, and output formats.

### Acquisition Skills

| File | What It Covers |
|------|----------------|
| `skills/acquisition/skill-01-abm-account-list-building.md` | ICP scoring, account research, contact mapping |
| `skills/acquisition/skill-07-paid-linkedin-campaigns.md` | LinkedIn campaign structure, ad copy, targeting |
| `skills/acquisition/skill-08-regional-seo-content.md` | SEO content strategy by region |
| `skills/acquisition/skill-09-google-ads-keyword-research.md` | Keyword tiers, match types, regional variants, negative lists |
| `skills/acquisition/skill-10-google-ads-copy.md` | RSA copy rules (30-char headlines, 90-char descriptions), pinning |
| `skills/acquisition/skill-11-retargeting-campaigns.md` | Google Display + LinkedIn retargeting, audience stages 1–3 |

### Activation Skills

| File | What It Covers |
|------|----------------|
| `skills/activation/skill-03-persona-messaging-architecture.md` | Per-persona messaging rules for CIO, COO, CEO |
| `skills/activation/skill-04-email-nurture-sequences.md` | Email sequence structure, cadences, copy rules |

### Revenue Skills

| File | What It Covers |
|------|----------------|
| `skills/revenue/skill-05-event-activation-playbook.md` | Event strategy, pre/post outreach, follow-up |
| `skills/revenue/skill-06-sales-enablement-kit.md` | Sales collateral, one-pagers, objection scripts |
| `skills/revenue/skill-12-competitive-intel.md` | Competitive research, battlecard format, deal diagnosis |

### Product Marketing Skills

| File | What It Covers |
|------|----------------|
| `skills/product-marketing/skill-14-product-launch-playbook.md` | Launch planning, asset sequencing, go-to-market |
| `skills/product-marketing/skill-15-case-study-reference-program.md` | Case study scoring, production format, distribution |
| `skills/product-marketing/skill-16-sales-battlecard-system.md` | Battlecard structure, competitive positioning, sales scripts |
| `skills/product-marketing/skill-17-messaging-positioning-framework.md` | Core messaging matrix, tone, positioning angles |
| `skills/product-marketing/skill-18-win-loss-analysis.md` | Win-loss interview guide, deal pattern analysis |
| `skills/product-marketing/skill-19-analyst-pr-relations.md` | Analyst briefings, PR strategy, media relations |

### Operations Skills

| File | What It Covers |
|------|----------------|
| `skills/ops/skill-13-annual-marketing-plan.md` | Annual plan structure, budget, channel mix, KPIs |
| `skills/ops/skill-attribution-reporting.md` | Attribution model, reporting cadence |
| `skills/ops/skill-hubspot-pipeline-setup.md` | HubSpot pipeline configuration, lifecycle stages |

### Retention Skills

| File | What It Covers |
|------|----------------|
| `skills/retention/skill-expansion-playbook.md` | Customer expansion strategy, upsell/cross-sell plays |

---

## 5. Prompts — Reusable AI Templates

Prompts are single-purpose Claude templates. Use these when you need one specific output, not an end-to-end workflow.

**How to use:** Tell Claude "Use `prompts/[folder]/[file].md` to generate [X]" and paste in the required inputs.

### Ads Prompts (`prompts/ads/`)

| File | When to Use |
|------|-------------|
| `ab-test-variants-generator.md` | Generate A/B test variants for a headline or ad |
| `keyword-expansion-prompt.md` | Expand an existing keyword list |
| `landing-page-copy-generator.md` | Write a landing page for a module and region |
| `linkedin-ad-copy-generator.md` | Write LinkedIn sponsored content |
| `low-ctr-diagnosis.md` | Diagnose why a Google Ads campaign has low CTR |
| `monthly-keyword-audit-prompt.md` | Monthly Google Ads keyword health check |
| `new-ad-set-generator.md` | Generate a new RSA ad set from scratch |
| `retargeting-ad-copy-generator.md` | Write retargeting ads for a specific audience and stage |
| `retargeting-low-conversion-diagnosis.md` | Diagnose low retargeting conversion rates |
| `retargeting-monthly-audit.md` | Monthly retargeting performance review |
| `search-term-analysis-prompt.md` | Analyze search term reports to find new keywords or negatives |

**Quick commands (from CLAUDE.md):**
```
Generate keywords for TMS Australia
Analyze my search terms
Monthly keyword audit
Generate ad set for [MODULE] [REGION]
AB test my headline [TEXT]
Diagnose CTR for [CAMPAIGN]
Write landing page for [MODULE] [REGION]
Generate retargeting ads for [AUDIENCE] [STAGE] [REGION]
Diagnose low retargeting conversions for [CAMPAIGN]
Monthly retargeting audit
Check audience setup
```

### Content Prompts (`prompts/content/`)

| File | When to Use |
|------|-------------|
| `blog-post-generator.md` | Write a long-form blog post |
| `case-study-template.md` | Structure a case study manually |
| `whitepaper-outline-generator.md` | Generate a whitepaper outline |

### Outbound Prompts (`prompts/outbound/`)

| File | When to Use |
|------|-------------|
| `linkedin-sequence-ceo.md` | Multi-touch LinkedIn sequence for CEO/Owner persona |
| `linkedin-sequence-cio.md` | Multi-touch LinkedIn sequence for CIO/VP IT persona |
| `linkedin-sequence-coo.md` | Multi-touch LinkedIn sequence for COO/VP Ops persona |

### Sales Enablement Prompts (`prompts/sales-enablement/`)

| File | When to Use |
|------|-------------|
| `competitive-battlecard-generator.md` | Generate a battlecard for a specific competitor |
| `executive-onepager-generator.md` | Generate a one-page executive summary for a deal |

### Strategy Prompts (`prompts/strategy/`)

| File | When to Use |
|------|-------------|
| `annual-plan-generator.md` | Generate the annual marketing plan |
| `mid-year-review.md` | Run a mid-year plan review |
| `quarterly-plan-generator.md` | Generate a quarterly plan |

**Quick commands (from CLAUDE.md):**
```
Generate annual marketing plan for [YEAR]
Generate Q[N] marketing plan
Run mid-year plan review
```

---

## 6. Scripts — Command-Line Runners

Scripts in `/scripts/` are bash wrappers that invoke Claude via the CLI with pre-built prompts. They are designed to be run from the terminal, not from within this Claude Code session.

> **Note:** These scripts use `cd ~/Documents/Logistics-marketing` which may need to be updated to match your actual directory path.

### `scripts/run-case-study.sh`

Runs the case study agent for a customer.

**Usage:**
```bash
./scripts/run-case-study.sh "Customer Name" "Region"
```

**Example:**
```bash
./scripts/run-case-study.sh "Kings Transport" "Australia"
```

**What it does:** Reads CLAUDE.md and the case study agent file, scores the candidate, and if above 40, produces all case study assets.

**Output:** `campaigns/case-studies/[customer-slug]/`

---

### `scripts/run-product-launch.sh`

Runs the product launch agent for a module.

**Usage:**
```bash
./scripts/run-product-launch.sh "Module" "Launch Type" "Date"
```

**Example:**
```bash
./scripts/run-product-launch.sh "TMS" "Repositioning" "October 2026"
```

**What it does:** Reads CLAUDE.md and the product launch agent file, executes all workflow steps, and saves all output files.

**Output:** `campaigns/launches/`

**Default settings in script:** Primary region: Australia and Saudi Arabia | Primary persona: COO

---

### `scripts/run-win-loss.sh`

**Status:** Script file exists but is currently empty. Not yet usable.

---

### `generate-annual-plan-2026.js`

A standalone Node.js script that generates the 2026 annual marketing plan as a PowerPoint deck.

**Usage:**
```bash
node generate-annual-plan-2026.js
```

**Output:** `strategy/annual-plan-2026.pptx`

**Dependencies:** Requires `pptxgenjs` (listed in `package.json`). Run `npm install` first if not already done.

---

## 7. Campaigns — Output Storage

The `/campaigns/` folder is where all generated assets are saved. Never edit files here manually unless correcting a specific error — let agents write to them.

### Folder Structure

```
campaigns/
├── accounts/           ← Account-specific assets (one subfolder per company)
│   ├── [company]/
│   │   ├── [company]-account-brief.md
│   │   ├── [company]-outreach-messages.md
│   │   └── [company]-hubspot-import.md
├── case-studies/       ← Case study assets (one subfolder per customer)
├── events/             ← Event prep assets (one subfolder per event)
├── google-ads/         ← Google Ads keywords and ad copy
├── launches/           ← Product launch assets
├── linkedin-paid/      ← LinkedIn campaign briefs and ad copy
├── q1-launch/          ← Q1 launch campaign assets
└── retargeting/        ← Retargeting audience setup and ad sets
```

### Active Accounts

These accounts already have research and outreach assets in `campaigns/accounts/`:

| Account | Files Available |
|---------|----------------|
| Allied Express | Email nurture (IT Director) |
| CTI Logistics | Account brief, outreach messages, HubSpot import |
| FM Global Logistics | Account brief, 3-part email sequence |
| Followmont | IT Director nurture, integration guide, COR data architecture, TMS evaluation checklist |
| Kings Transport | Account brief, outreach messages, HubSpot import |
| OTLSB | Account brief |
| Sadliers Transport | LinkedIn sequence (CIO) |

### Active LinkedIn Paid Campaigns

Five campaigns exist in `campaigns/linkedin-paid/`:
1. Billing & Tax compliance angle
2. Managing blind (visibility gap angle)
3. Competitor won the deal (retargeting angle)
4. One platform, five problems (product angle)
5. Scale without headcount (efficiency angle)

### Retargeting Setup

Five files in `campaigns/retargeting/`:
- `audience-setup-checklist.md` — How to build audiences in Google and LinkedIn
- `google-display-ad-sets.md` — Live Google Display ad sets
- `linkedin-retargeting-ad-sets.md` — Live LinkedIn retargeting ad sets
- `performance-log.md` — Performance tracking log
- `stage-sequence-tracker.md` — Stage 1/2/3 progression tracker

---

## 8. Strategy Files

The `/strategy/` folder contains long-term strategic documents. Update these when strategy changes, not every campaign cycle.

| File | Purpose |
|------|---------|
| `strategy.md` | Master GTM strategy document. Update this when asked to "update strategy" |
| `annual-plan-2026.md` | Full annual plan in Markdown |
| `annual-plan-2026.pptx` | PowerPoint version of the 2026 plan |
| `channel-prioritization.md` | Channel ranking and budget allocation rationale |
| `competitive-landscape.md` | High-level competitor overview |
| `competitive/master-competitor-list.md` | Full list of tracked competitors |
| `competitive/regional-competitive-analysis.md` | Region-by-region competitive breakdown |
| `competitive/oracle-transportation-management-battlecard.md` | Live battlecard for Oracle TMS |
| `competitive/oracle-transportation-management-champion-email-template.md` | Champion email for Oracle TMS deals |

**When to update `strategy.md`:** When asked to "update strategy" — Claude will write to this file directly.

**When to add to `competitive/`:** Every time the competitive intel agent produces a new battlecard.

---

## 9. Templates

The `/templates/` folder contains reusable message templates that are not account-specific. Use these as starting points when creating outreach for new accounts.

| File | Purpose |
|------|---------|
| `email-nurture-track1.md` | Nurture track 1 (awareness stage) |
| `email-nurture-track2.md` | Nurture track 2 (consideration stage) |
| `email-nurture-track3.md` | Nurture track 3 (decision stage) |
| `event-follow-up-email.md` | Post-event follow-up template |
| `linkedin-message-templates.md` | LinkedIn message templates by persona |

**Note:** These differ from account files in `/campaigns/accounts/` in that they contain placeholder-based templates. Account files contain fully personalized, ready-to-send messages.

---

## 10. Analytics

The `/analytics/` folder contains reporting frameworks. These are not auto-generated — they are reference documents and templates.

| File | Purpose |
|------|---------|
| `kpi-dashboard.md` | KPI targets and current performance baselines |
| `attribution-model.md` | How pipeline is attributed across channels |
| `weekly-reporting-template.md` | Template for weekly marketing reports |

**Important:** The `kpi-dashboard.md` is read by the annual plan skill (skill-13) to set baselines. Keep this file updated with actual performance data.

---

## 11. Quick Command Reference

Copy and paste any of these trigger phrases directly into Claude Code.

### Agents

```
# New account research
Run the new account research agent for [COMPANY NAME] in [COUNTRY]

# Event prep (run 4-6 weeks before event)
Run the event prep agent for [EVENT NAME] in [REGION]

# Competitive intel — new battlecard
Run the competitive intel agent for [COMPETITOR NAME]

# Competitive intel — stalled deal
Run the competitive intel agent — deal diagnosis for [DEAL NAME]

# Case study
Run the case study agent for [CUSTOMER NAME]

# Product launch
Run the product launch agent for [MODULE] — [LAUNCH TYPE]

# Messaging matrix
Run the messaging agent for [MODULE] in [REGION]

# Messaging audit (paste assets first)
Run the messaging audit
```

### Google Ads

```
Generate keywords for TMS Australia
Generate keywords for WMS Indonesia
Analyze my search terms
Monthly keyword audit
Generate ad set for TMS Australia
Generate ad set for WMS Saudi Arabia
AB test my headline [HEADLINE TEXT]
Diagnose CTR for [CAMPAIGN NAME]
Write landing page for TMS Australia
```

### Retargeting

```
Generate retargeting ads for [AUDIENCE] [STAGE] [REGION]
Diagnose low retargeting conversions for [CAMPAIGN NAME]
Monthly retargeting audit
Check audience setup
```

### Strategy and Planning

```
Generate annual marketing plan for 2027
Generate Q3 marketing plan
Run mid-year plan review
Update strategy
```

### Content and Outbound

```
# Use prompts/outbound/linkedin-sequence-cio.md to write a LinkedIn sequence for [NAME] at [COMPANY]
# Use prompts/content/blog-post-generator.md to write a blog post on [TOPIC] for [REGION]
# Use prompts/sales-enablement/executive-onepager-generator.md for [DEAL NAME]
```

---

## 12. Common Workflows

### Workflow A: New Target Account

Use this when you identify a new 3PL company to pursue.

1. **Research the account:**
   ```
   Run the new account research agent for [COMPANY] in [COUNTRY]
   ```
2. **Review output** in `campaigns/accounts/[company]/` — check the ICP score and account brief
3. **Import to HubSpot** using the `[company]-hubspot-import.md` file
4. **Send LinkedIn outreach** using the `[company]-outreach-messages.md` file

---

### Workflow B: Deal Acceleration (Stalled Deal)

Use when a deal has been in the same HubSpot stage for 4+ weeks.

1. **Check if a battlecard exists** for the competitor in `strategy/competitive/`
2. **If no battlecard:** Run Mode A of competitive intel agent
3. **Run deal diagnosis:**
   ```
   Run the competitive intel agent — deal diagnosis for [DEAL NAME]
   ```
   Paste: deal name, company, competitor, HubSpot stage, last activity, persona engagement, known objections
4. **Execute the re-engagement plan** from the output file

---

### Workflow C: Event Preparation

Use when you are attending a trade show, conference, or roadshow.

1. **6 weeks before:** Run event prep agent:
   ```
   Run the event prep agent for [EVENT NAME] in [REGION]
   ```
2. **4 weeks before:** Send pre-event LinkedIn messages (from output file)
3. **3 weeks before:** Send pre-event email 1 (from output file)
4. **1 week before:** Send pre-event email 2 (from output file)
5. **Day before:** Send final pre-event email (from output file)
6. **After event:** Send follow-up emails using Hot/Warm/Cold templates (from output file)
7. **Log in HubSpot** using tagging instructions (from output file)

---

### Workflow D: Google Ads — New Campaign

Use when adding a new module or region to Google Ads.

1. **Keyword research:**
   ```
   Generate keywords for [MODULE] [REGION]
   ```
   Output saved to `campaigns/google-ads/`
2. **Write ad copy:**
   ```
   Generate ad set for [MODULE] [REGION]
   ```
   Output saved to `campaigns/google-ads/`
3. **Set up retargeting** (after campaign has 1,000+ website visitors):
   ```
   Generate retargeting ads for [AUDIENCE] Stage 1 [REGION]
   ```

---

### Workflow E: Case Study Production

Use when a customer has been live 3–6 months with measurable results.

1. **Run case study agent:**
   ```
   Run the case study agent for [CUSTOMER NAME]
   ```
2. **If score is above 40:** All assets are produced automatically
3. **If score is below 40:** Agent will stop and explain why — fix the gap (usually: no metrics available)
4. **Distribute:** Use HubSpot actions file to log, tag, and enroll contacts in the case study nurture sequence

---

### Workflow F: Product Launch or Repositioning

Use when launching a new module or repositioning an existing one.

1. **8–12 weeks before launch:**
   ```
   Run the product launch agent for [MODULE] — [LAUNCH TYPE]
   ```
   Include: launch date, primary region, primary persona
2. **Review outputs** in `campaigns/launches/`
3. **Update messaging** if the agent flagged misalignments:
   ```
   Run the messaging agent for [MODULE] in [REGION]
   ```
4. **Distribute sales enablement assets** using the internal sales launch email

---

## 13. Directory Map

```
PMM-Logistics/
│
├── CLAUDE.md                           ← System config — read by Claude automatically
├── MANUAL.md                           ← This file
├── generate-annual-plan-2026.js        ← Node.js script → generates strategy/annual-plan-2026.pptx
├── package.json                        ← Node.js dependencies
│
├── agents/                             ← Automated multi-step workflows
│   ├── case-study-agent.md
│   ├── competitive-intel-agent.md
│   ├── event-prep-agent.md
│   ├── messaging-agent.md
│   ├── new-account-research-agent.md
│   ├── product-launch-agent.md
│   └── win-loss-agent.md               ← Empty — not yet configured
│
├── scripts/                            ← Bash CLI runners
│   ├── run-case-study.sh
│   ├── run-product-launch.sh
│   └── run-win-loss.sh                 ← Empty — not yet configured
│
├── skills/                             ← Playbooks read by agents
│   ├── acquisition/                    ← Skills 01, 07, 08, 09, 10, 11
│   ├── activation/                     ← Skills 03, 04
│   ├── ops/                            ← Skills 13, attribution, hubspot
│   ├── product-marketing/              ← Skills 14, 15, 16, 17, 18, 19
│   ├── retention/                      ← Expansion playbook
│   └── revenue/                        ← Skills 05, 06, 12
│
├── prompts/                            ← Single-purpose Claude prompt templates
│   ├── ads/                            ← 11 prompts (keywords, copy, retargeting, diagnosis)
│   ├── content/                        ← 3 prompts (blog, case study, whitepaper)
│   ├── outbound/                       ← 3 prompts (LinkedIn sequences by persona)
│   ├── sales-enablement/               ← 2 prompts (battlecard, one-pager)
│   └── strategy/                       ← 3 prompts (annual plan, quarterly plan, mid-year)
│
├── inputs/                             ← Source of truth — do not edit without reason
│   ├── input.json                      ← Company, ICP, personas, goals, channels
│   ├── persona-definitions.md          ← Detailed persona profiles
│   └── target-account-list-template.csv ← Template for building account lists
│
├── campaigns/                          ← All generated output lives here
│   ├── accounts/                       ← Per-account assets (brief, outreach, HubSpot import)
│   ├── case-studies/                   ← Case study assets per customer
│   ├── events/                         ← Event prep assets per event
│   ├── google-ads/                     ← Keyword lists and ad copy
│   ├── launches/                       ← Product launch assets
│   ├── linkedin-paid/                  ← LinkedIn campaign briefs and ad sets
│   ├── q1-launch/                      ← Q1 2026 launch campaign
│   └── retargeting/                    ← Retargeting audience setup and ad sets
│
├── strategy/                           ← Long-term strategic documents
│   ├── strategy.md                     ← Master GTM strategy (update with "Update strategy")
│   ├── annual-plan-2026.md
│   ├── annual-plan-2026.pptx
│   ├── channel-prioritization.md
│   ├── competitive-landscape.md
│   └── competitive/                    ← Battlecards and competitive analysis
│
├── templates/                          ← Reusable message templates
├── analytics/                          ← KPI dashboard, attribution model, reporting
└── experiments/                        ← A/B test results and experiment log
```

---

## 14. Rules and Constraints

These rules apply to every output generated by this system.

### Content Rules
- No generic content — everything must be specific to 3PLs in the named region
- Use business outcome language (not feature language) unless writing for a CIO
- Never use: world-class, cutting-edge, revolutionary, robust, seamless
- No placeholders — all content must be immediately usable
- All Claude prompts must be ready to copy-paste

### Character Limits (enforced by Claude)
- Google Ads headlines: 30 characters max
- Google Ads descriptions: 90 characters max
- Google Display short headline: 30 characters max
- Google Display long headline: 90 characters max
- LinkedIn intro text: 150 characters max
- LinkedIn headline: 70 characters max
- LinkedIn Message Ad body: 500 characters max
- LinkedIn outreach messages: 300 characters max
- Speaking abstracts: 200–250 words

### Google Ads Match Types
- Tier 1 keywords: Exact Match and Phrase Match only — never Broad Match

### Regional Rules
- Always generate regional modifier variants for the requested region
- For Indonesia and Saudi Arabia: always generate local language variants
- For India: English only — no local language variants needed for enterprise B2B
- Every Google Ads set must include at least 1 regional reference

### HubSpot Rules
- Every account agent workflow ends with HubSpot import instructions
- Every event agent workflow ends with HubSpot tagging instructions

### File Saving Rules
- Agents save output before printing the summary
- If data is missing, the agent notes the gap and continues with remaining steps
- Never save to a path different from the one specified in the agent file

### Input Files
- `inputs/input.json` — Read before generating any strategy output
- `inputs/persona-definitions.md` — Read before generating any copy or messaging
- `inputs/target-account-list-template.csv` — Use when building account lists

---

*For questions or issues, contact ragunathan.a@ramco.com*
