# Iteration & Feedback System — Ramco Logistics Marketing
## Phase 7: Tracking, Feedback Loops, and Optimization Engine
**Generated:** 2026-06-16 | **Owner:** Campaign Marketing Manager + Marketing Ops

---

## Purpose

This document defines exactly:
1. What to measure (and when)
2. What triggers a change
3. What the change should be
4. How to validate that the change worked

Without this system, performance data sits in dashboards and nothing improves. With it, every red metric has a clear path from diagnosis to fix to result.

**The governing principle:** Fix leading indicators this week. Lagging indicators will follow in 30–90 days.

---

## SECTION 1 — TRACKING SYSTEM

### 1a. Measurement Cadence

| Cadence | What to Measure | Tool | Owner |
|---------|----------------|------|-------|
| **Daily (10 min)** | LinkedIn CTR anomalies, HubSpot workflow errors, new MQL ICP check, T1 signal alerts | LinkedIn CM + HubSpot | Marketing Ops |
| **Weekly (30 min)** | SDR activity floors, email open rate, Google Ads CTR, pipeline volume change | HubSpot + LinkedIn CM + Google Ads | Campaign Marketing Manager |
| **Monthly (2 hours)** | Full scorecard, channel attribution, MQL→SQL→Opp conversion, win/loss review | HubSpot + all channels | Campaign Marketing Manager + Sales Lead |
| **Quarterly (half day)** | Strategy review, budget reallocation, skill and sequence refresh, benchmark recalibration | All tools | Marketing Lead + Sales Lead |

### 1b. Metrics Hierarchy

**Tier 1 — Daily watch (act within 24 hours if red)**
- LinkedIn campaign paused (budget or policy issue)
- HubSpot workflow error
- New MQL from T1 account (immediate AE notification)
- Bounce rate >4% on active email send

**Tier 2 — Weekly review (act within 5 business days if red)**
- Email open rate below 22% (threshold = 🔴 red)
- LinkedIn CTR below 0.45% AU, 0.31% ID
- SDR connection accept rate below 21% T1
- Google Ads CTR below 2.7% AU
- Opportunities created below 5 for the week (warning — quarterly target at risk)

**Tier 3 — Monthly review (act within 2 weeks if red)**
- MQL volume below 108/quarter (green threshold)
- MQL → SQL conversion below 30%
- Cost per MQL above $156
- Win rate below 20% for the quarter
- Organic sessions below 1,800/month

**Tier 4 — Quarterly review (adjust for next quarter)**
- Budget allocation rebalancing
- Channel switching (move budget from underperforming to overperforming)
- ICP refinement (if loss rate is high on certain company profiles)
- Sequence retirement and rebuild

---

### 1c. Implied Tools

| Tool | What It Tracks | Reports Referenced |
|------|---------------|-------------------|
| HubSpot | MQLs, SQLs, opps, sequences, email performance, deal stages, attribution | Sections 1–9 of kpi-dashboard.md |
| LinkedIn Campaign Manager | Impressions, CTR, CPL, frequency, audience health | Section 4 of kpi-dashboard.md |
| Google Ads | Search CTR, Quality Score, impression share, conversion rate | Skills 09, 10 |
| Google Analytics 4 | Organic sessions, landing page conversion rate, traffic sources | Section 6 of kpi-dashboard.md |
| Google Search Console | Keyword rankings, organic impressions, CTR | Section 6b keyword tracking table |
| LinkedIn Sales Navigator | SDR connection volume, InMail metrics | Section 2 of kpi-dashboard.md |
| HubSpot Sales | Deal velocity, stage conversion, stall rate, win/loss reasons | Section 7 of kpi-dashboard.md |

---

## SECTION 2 — FEEDBACK LOOPS

### Loop 1: Email Deliverability + Open Rate

**Trigger:** Open rate below 22% (🔴 red threshold is <22% on automated sequences)

**Diagnosis sequence:**
```
Step 1: Check SPF/DKIM/DMARC authentication in HubSpot → Settings → Email → Domains
  → If failing: fix DNS records. This alone may recover 10–15% open rate.
Step 2: Check sending domain reputation → MXToolbox + Google Postmaster Tools
  → If domain reputation is damaged: warm a new subdomain (use mail.ramco.com or similar)
Step 3: Check suppression list → Are non-engaged contacts (>6 months no open) still being sent?
  → If yes: suppress all contacts with 0 opens in 180 days
Step 4: Check subject lines → Are they using the contact's first name? Pain-specific language?
  → Run A/B test: current subject vs. new pain-first subject line (see Loop 5)
```

**Fix timeline:** 5 business days for technical fix. 2 weeks for subject line A/B result.

**When to close the loop:** Open rate returns to ≥25% for 3 consecutive weeks.

---

### Loop 2: LinkedIn SDR Reply Rate

**Trigger:** T1 positive reply rate below 10% (🔴 threshold)

**Diagnosis sequence:**
```
Step 1: Review Message 1 of the active sequence — does it contain a CTA? (It must not.)
  → If yes: remove CTA from Message 1 immediately
Step 2: Review connection request — is it generic or personalised?
  → Pull last 20 connection requests. Count how many reference a specific detail about the person.
  → If <70% are personalised: require SDR to research each contact before sending
Step 3: Review Message 2 — does it include a specific proof point with a real metric?
  → If metric is vague ("significant improvement") → rewrite with VISY actual metric
Step 4: Review targeting — are T1 contacts actually ICP-matched?
  → Pull list of contacts who didn't reply → check title + company revenue
  → If >20% don't match ICP: T1 list needs cleansing
```

**Fix timeline:** Rewrite messages in Week 1. Measure impact over next 3 weeks.

**When to close the loop:** T1 reply rate ≥13% for 4 consecutive weeks.

---

### Loop 3: Google Ads CTR + Quality Score

**Trigger:** CTR below 2.7% AU (🔴 red, target 3%+) OR Quality Score below 6 on high-spend keywords

**Diagnosis sequence:**
```
Step 1: Check search terms report → are there irrelevant searches triggering ads?
  → Add negative keywords (use prompts/ads/search-term-analysis-prompt.md)
Step 2: Check headline performance → which headlines have lowest engagement rate?
  → Pause bottom 3 headlines; add 3 new ones using Skill 10 format
Step 3: Check ad-to-landing page alignment → does the landing page headline match the ad headline?
  → If mismatch: update landing page to mirror the top-performing ad headline
Step 4: Check device performance → is mobile CTR dragging the average down?
  → If mobile CTR <2%: add mobile bid adjustment (-20%) until mobile landing page is optimised
```

**Fix timeline:** Negative keyword additions show impact within 7 days. Creative changes show impact in 14–21 days.

**When to close the loop:** CTR ≥3.0% for 3 consecutive weeks AND Quality Score ≥7 on all exact match keywords.

---

### Loop 4: MQL → SQL Conversion Rate

**Trigger:** MQL → SQL rate below 30% (🔴 threshold is <23%)

**Diagnosis sequence:**
```
Step 1: Pull all MQLs from last 90 days not yet converted to SQL → check their titles and companies
  → If >20% are not ICP-matched (wrong title, wrong company size): MQL definition is too loose
  → Fix: tighten MQL criteria in HubSpot (add company revenue filter; add seniority filter)
Step 2: Check nurture sequence performance → what content are MQLs engaging with?
  → If MQLs are opening email 1 but not clicking email 2: the CTA in email 2 is wrong or too vague
  → Rewrite CTA in email 2 with a more specific, lower-friction offer
Step 3: Check SDR follow-up lag → how quickly are MQLs being contacted by SDR?
  → Target: SDR LinkedIn outreach within 24 hours of MQL designation
  → If lag >48 hours: add HubSpot workflow: MQL created → task to SDR assigned within 1 hour
Step 4: Check the offer → what are MQLs being asked to do?
  → If CTA = "Book a 30-minute demo": too high commitment for early MQL
  → Change to: "Watch a 5-minute product walkthrough" or "Download the case study"
```

**Fix timeline:** MQL definition fix takes effect immediately. Nurture CTA changes show results in 3–4 weeks.

**When to close the loop:** MQL → SQL rate ≥30% for 2 consecutive months.

---

### Loop 5: A/B Testing Protocol

**How to initiate an experiment:**
1. Write a hypothesis: "If we change [element X] to [variant B], we expect [metric] to improve by [X%] because [reason]"
2. Log it in `experiments/experiment-log.md` with date, hypothesis, control, variant, and metric being tested
3. Run for minimum 2 weeks; minimum 200 impressions/opens per variant
4. Declare winner only if result is ≥95% confidence (use HubSpot A/B test significance calculator)
5. Roll winner to all active sequences/campaigns; log result in experiment-log.md

**What to A/B test (priority order for Q3 2026):**

| Priority | Element | Control | Variant | Metric |
|----------|---------|---------|---------|--------|
| 1 | Email subject line (all persona sequences) | Current subject | Pain-first subject with first name | Open rate |
| 2 | LinkedIn Message 1 — Ops persona | Current template | VISY metric-led opening | Reply rate |
| 3 | Google Ads headline category A | Feature headline | Outcome/cost-reduction headline | CTR |
| 4 | Landing page CTA | "Request a Demo" | "Download the Case Study" | Conversion rate |
| 5 | LinkedIn connection request | Current template | Regional news hook version | Accept rate |

**A/B test capacity rule:** Run no more than 2 simultaneous A/B tests per channel. Too many concurrent tests make it impossible to isolate cause.

---

### Loop 6: Win Rate + Loss Reason

**Trigger:** Win rate below 22% in any rolling 90-day period OR "price" cited in >40% of lost deals

**Diagnosis sequence:**
```
Step 1: Run agents/win-loss-agent.md for last 90 days of Closed Lost deals
Step 2: Categorise every lost deal by reason: price / competitor / no decision / wrong ICP / timing
Step 3: If price >40% of losses:
  → Check: was the ROI calculator deployed before the commercial conversation?
  → Check: was the VISY case study shared before proposal stage?
  → If neither: sales enablement (Skill 06) is not being deployed early enough
  → Fix: add HubSpot deal stage trigger — when deal moves to "Proposal", auto-create task 
    "Deploy VISY case study + ROI calculator" assigned to AE
Step 4: If competitor losses >30% (e.g., CargoWise):
  → Update battlecard (Skill 16) for that competitor
  → Ensure every AE has the battlecard in their CRM (HubSpot document library)
  → Add competitive counter-move to the SDR sequence for contacts at companies known to use that competitor
Step 5: If "no decision" >25% of losses:
  → Pipeline health issue: deals are stalling, not converting
  → Identify the stage where stall happens (use HubSpot deal velocity report)
  → Deploy CEO one-pager at that exact stage to re-engage the economic buyer
```

**Fix timeline:** Process changes take effect immediately. Win rate improvement visible in 90–180 days (given sales cycle length).

**When to close the loop:** Win rate ≥25% for 2 consecutive quarters.

---

## SECTION 3 — OPTIMISATION ENGINE

### How to Improve Campaigns Over Time

**The three levers — in priority order:**

**Lever 1: Eliminate Waste (always first)**
Before adding budget or volume, eliminate what isn't working.
- Pause LinkedIn ad sets with CTR <0.3% after 2,000 impressions
- Pause Google Ads keywords with CPC >$20 and 0 conversions after 30 days
- Remove contacts from sequences who have been non-engaged for >180 days
- Archive skill files and prompts that are not being used (quarterly review)

**Lever 2: Double Down on What Works**
Identify the 20% of inputs generating 80% of results and amplify them.
- Identify: which LinkedIn ad creative has the highest CTR? → Create 3 more variants with the same format and angle
- Identify: which email subject line has the highest open rate? → Apply the pattern to all sequences
- Identify: which roundtable event produced the most qualified conversations? → Run it again in Q4; increase budget
- Identify: which SDR message generated the most replies? → Make it the template for all new sequences

**Lever 3: Test and Scale**
Only after Levers 1 and 2 are applied, test new things. Use A/B protocol from Section 2, Loop 5.

---

### Monthly Optimisation Workflow

Run this workflow on the first Monday of each month:

```
STEP 1 (30 min): Pull the Monthly Scorecard from analytics/kpi-dashboard.md
  → Complete all "Actual" fields
  → Calculate RAG status for every metric
  → Identify all 🔴 red metrics

STEP 2 (30 min): For each red metric — apply the relevant feedback loop from Section 2
  → Write the diagnosis in the "CAUSE ANALYSIS" section of the scorecard
  → Assign the fix to a named owner with a deadline
  → Log any A/B test that will result from the fix in experiments/experiment-log.md

STEP 3 (15 min): Pull the channel attribution report (HubSpot → Reports → Pipeline Attribution)
  → Which channel produced the most SQLs last month?
  → Is it getting enough budget relative to its output?
  → Flag any channel with 0 SQLs for 30 days for audit

STEP 4 (15 min): Review active deals
  → Any deal stalled >21 days? → Flag to Sales Lead; deploy acceleration asset
  → Any deal in Proposal >30 days without AE activity? → Escalate

STEP 5 (30 min): Plan next month's content and campaign adjustments
  → Write "NEXT MONTH FOCUS" section of the scorecard
  → Update campaigns/q[N]-[YEAR]-campaign-assembly.md if adjustments affect the quarterly plan
```

---

### Quarterly Optimisation Workflow

Run in the first week of each new quarter:

```
STEP 1: Archive prior quarter's scorecard to /analytics/archive/
STEP 2: Run win/loss analysis (agents/win-loss-agent.md) on all closed deals from prior quarter
STEP 3: Recalibrate benchmark targets if sustained pattern shows targets need adjusting
  → Rule: only recalibrate DOWN if the same metric has been amber/red for 3 consecutive months
  → Rule: never recalibrate a target UP without evidence from at least 1 green month
STEP 4: Review and refresh all active LinkedIn sequences (Skill 02) — retire any sequence >90 days old
STEP 5: Google Ads keyword audit (prompts/ads/monthly-keyword-audit-prompt.md)
STEP 6: Review budget allocation → is spend proportional to pipeline contribution per channel?
  → If LinkedIn produced 40% of SQLs but only received 20% of budget → increase LinkedIn
  → If Events produced 10% of SQLs and received 15% of budget → reduce events, redirect to LinkedIn
STEP 7: Update strategy/strategic-mapping.md with Q results and any strategic changes
STEP 8: Build the next quarter's campaign assembly plan using this template
```

---

### Campaign-Level Optimisation Rules

**Rule 1: Creative fatigue threshold**
If a LinkedIn ad has been running for >30 days AND CTR has declined >20% from its Week 2 peak → retire creative and replace. Rotate every 6 weeks regardless.

**Rule 2: Sequence retirement**
If a 4-message LinkedIn sequence has been running >90 days AND reply rate has declined >30% from Week 1 result → retire and rebuild using Skill 02 + fresh research.

**Rule 3: Budget reallocation trigger**
If any paid channel fails to produce MQLs for 3 consecutive weeks → pause that channel and reallocate budget to the highest-performing active channel. Document the pause in experiments/experiment-log.md.

**Rule 4: ICP drift check**
Monthly: pull the last 20 MQLs from HubSpot. Check each one: title match? company revenue match? 3PL specifically?
- If >30% don't match ICP: audit the lead source that produced them and tighten the targeting
- Common culprits: LinkedIn broad job title targeting, generic content with no 3PL-specific hook

**Rule 5: Reference account freshness**
Every 6 months: confirm with the account manager that VISY, PT Cipta Krida, and Kanoo are still referenceable. If a reference account churns, remove all references from active campaigns immediately and notify all AEs.

---

### Long-Term Improvement Targets (2026)

| Metric | Q1 Baseline | Q4 2026 Target | Primary Lever |
|--------|------------|----------------|---------------|
| Email open rate | 5% (critical) | 30%+ | Fix deliverability; rewrite subject lines |
| LinkedIn T1 reply rate | Unknown | 15%+ | Personalised sequences; proof points |
| Google Ads AU CTR | Baseline TBD | 3.5%+ | Negative keywords; headline testing |
| MQL → SQL rate | ~33% (target) | 38%+ | Tighter MQL definition; faster SDR follow-up |
| Win rate | 20% | 28%+ | ROI calculator; VISY proof; battlecards deployed earlier |
| Average ACV | $150K floor | $275K+ | Bigger accounts targeted; multi-module deals |
| Marketing-sourced opps/Q | 20 (target) | 25+ | Add India H2 2026; partner channel operational |

---

### Experiment Log Summary (link)

All A/B tests, experiments, and optimisation decisions are logged in:
`experiments/experiment-log.md`

Format for each entry:
```
## Experiment: [Short name]
**Date started:** [date]
**Date ended:** [date]
**Channel:** [email / LinkedIn / Google Ads / landing page]
**Hypothesis:** If we change [X] to [Y], we expect [metric] to improve by [Z]% because [reason]
**Control:** [describe]
**Variant:** [describe]
**Sample size:** [impressions / opens / contacts]
**Result:** [Control metric] vs. [Variant metric]
**Winner:** Control / Variant / No significant difference
**Action:** [Roll out winner / retire variant / run follow-on test]
**Impact on pipeline:** [MQLs, SQLs, opps generated from winning variant]
```
