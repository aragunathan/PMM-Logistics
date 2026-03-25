# Skill 07 — Paid LinkedIn Campaigns
## Ramco Logistics Software | Acquisition

> **Purpose:** Build, launch, and optimise LinkedIn paid campaigns that generate pipeline from 3PL decision-makers across Australia, Indonesia, Saudi Arabia, and Philippines — using a combination of ABM matched audiences, persona-targeted job title campaigns, and retargeting to drive qualified demo requests and content downloads.
> **Output:** Live LinkedIn campaigns per region and per persona with approved copy, optimised audiences, conversion tracking connected to HubSpot, and a weekly performance reporting cadence.
> **Owner:** Demand Gen / Paid Media (builds and manages) + Product Marketing (approves copy) + Sales Lead (validates audience quality)
> **Estimated time to complete:** 8–10 hours for initial build across all regions; 2–3 hours/week for ongoing optimisation

---

## Prerequisites
- [ ] LinkedIn Campaign Manager account with billing configured
- [ ] HubSpot Marketing Hub Professional or Enterprise with LinkedIn Ads integration connected
- [ ] `/inputs/persona-definitions.md` — read before writing any ad copy
- [ ] `/skills/activation/skill-03-persona-messaging-architecture.md` — approved messaging matrix must exist before ad copy is written
- [ ] `/skills/acquisition/skill-01-abm-account-list-building.md` — ABM contact lists must be uploaded to HubSpot for matched audience creation
- [ ] LinkedIn Insight Tag installed on `ramco.com` — verify this before any campaign goes live
- [ ] At least one content asset per persona for lead gen campaigns (case study, guide, or ROI tool)
- [ ] Landing pages or LinkedIn Lead Gen Forms configured per persona before launch

---

## LinkedIn's Role in Ramco's GTM

LinkedIn is the highest-value paid channel for Ramco's ICP. No other platform lets you target "Head of Transport at a 3PL company with 500+ employees in Jakarta" with both display advertising and message delivery simultaneously. At a $150k+ ACV and 180+ day sales cycle, LinkedIn does not generate instant pipeline — it generates awareness and intent that feeds into outbound sequences, nurture tracks, and event attendance.

**What LinkedIn paid can do for Ramco:**
- Keep Ramco visible to T1 and T2 account contacts throughout a 6–12 month buying cycle
- Warm cold outbound prospects so SDR first touches land on a name they've seen, not a cold brand
- Generate inbound demo requests and content downloads from in-market buyers
- Re-engage website visitors and video viewers who've shown intent but haven't responded to outreach

**What LinkedIn paid cannot do alone:**
- Close enterprise deals — this is a multi-touch motion; LinkedIn is one layer
- Replace outbound SDR work — it amplifies it
- Generate enough volume at low enough CPL to be the only acquisition channel

**Budget allocation principle:** LinkedIn paid should represent 30–40% of the total digital acquisition budget. If it exceeds 50%, the programme is over-indexed on a single channel.

---

## Campaign Architecture Overview

Run campaigns across three layers simultaneously:

**Layer 1 — ABM (Account-Based):** Targeted at matched audiences from the HubSpot ABM account list. Small audience, high intent signal, highest CPL, highest deal quality. Primary KPI: meetings booked, pipeline influenced.

**Layer 2 — Persona Targeting (Broad ICP):** Targeted at job title + company size + industry criteria beyond the named ABM list. Larger audience, lower CPL, used for pipeline building and brand awareness. Primary KPI: demo requests, content downloads, MQL volume.

**Layer 3 — Retargeting:** Targeted at website visitors, video viewers, and Lead Gen Form openers who have not converted. Lowest CPL, highest conversion rate from warm traffic. Primary KPI: conversion rate, CPL.

Run all three layers per region. Never combine regions in a single campaign — CPL, competition, and optimal bid strategies differ significantly across Australia, Indonesia, Saudi Arabia, and Philippines.

---

## Step-by-Step Execution Workflow

---

### STEP 1: LinkedIn Campaign Manager Account Structure
**Time:** 60 minutes | **Owner:** Paid Media / Marketing Ops

A clean account structure prevents reporting confusion and budget bleed as campaigns scale.

#### Account Hierarchy

```
LinkedIn Campaign Manager Account: Ramco Systems
  │
  ├── Campaign Group: RAMCO | Australia | ABM
  │     ├── Campaign: AU | ABM | CIO | Sponsored Content
  │     ├── Campaign: AU | ABM | Ops | Sponsored Content
  │     └── Campaign: AU | ABM | CEO | Message Ad
  │
  ├── Campaign Group: RAMCO | Australia | Persona
  │     ├── Campaign: AU | Persona | CIO | Sponsored Content
  │     ├── Campaign: AU | Persona | Ops | Sponsored Content
  │     └── Campaign: AU | Persona | CEO | Sponsored Content
  │
  ├── Campaign Group: RAMCO | Australia | Retargeting
  │     └── Campaign: AU | Retargeting | All Personas | Sponsored Content
  │
  ├── Campaign Group: RAMCO | Indonesia | ABM
  │     [same structure]
  │
  ├── Campaign Group: RAMCO | Saudi Arabia | ABM
  │     [same structure]
  │
  └── Campaign Group: RAMCO | Philippines | ABM
        [same structure]
```

**Naming convention (strict — never deviate):**
```
[REGION ABBREVIATION] | [LAYER] | [PERSONA] | [FORMAT]

AU = Australia
ID = Indonesia
SA = Saudi Arabia
PH = Philippines

LAYER: ABM / Persona / Retargeting
PERSONA: CIO / Ops / CEO / All
FORMAT: SC (Sponsored Content) / MA (Message Ad) / CA (Conversation Ad) / LGF (Lead Gen Form)

Example: SA | ABM | CEO | SC
Example: PH | Persona | Ops | LGF
```

---

### STEP 2: Install and Verify LinkedIn Insight Tag
**Time:** 30 minutes | **Owner:** Web / Marketing Ops
**Do this before launching any campaign.**

The Insight Tag is LinkedIn's tracking pixel. Without it, you cannot:
- Track website conversions from LinkedIn ads
- Build website visitor retargeting audiences
- Pass conversion data back into Campaign Manager for optimisation

**Installation:**
1. Navigate to: **LinkedIn Campaign Manager → Account Assets → Insight Tag → Install My Insight Tag**
2. Copy the JavaScript snippet
3. Install in the `<head>` section of every page on `ramco.com` (use Google Tag Manager for deployment — add a new tag, trigger: All Pages)
4. Verify installation: Navigate to Insight Tag → View Tag Status — should show "Active" within 24 hours of installation
5. Test using the LinkedIn Insight Tag Chrome extension — open `ramco.com/products/logistics-software/` and confirm the tag fires green

**Conversion events to configure:**
Navigate to: **Campaign Manager → Account Assets → Conversions → Create Conversion**

| Conversion Name | Type | Value | Attribution |
|----------------|------|-------|-------------|
| Demo Request | Lead | $500 (proxy) | Last touch, 30-day window |
| Content Download | Lead | $50 | Last touch, 30-day window |
| Contact Us Form | Lead | $200 | Last touch, 30-day window |
| Pricing Page Visit | Website visit | — | Last touch, 7-day window |
| LinkedIn LGF Submit | Lead Gen Form | — | Auto-tracked |

---

### STEP 3: Build LinkedIn Audiences
**Time:** 2 hours | **Owner:** Paid Media / Marketing Ops

Audience quality is the most important variable in LinkedIn campaign performance. Poor targeting wastes budget faster than poor creative.

#### 3a: ABM Matched Audiences (Layer 1)

**From HubSpot:**
1. Navigate to: **HubSpot → Marketing → Ads → Audiences → Create Audience → Contact List**
2. Select the relevant contact list (built in `skill-01-abm-account-list-building.md`):
   - `ABM | All Contacts | T1+T2`
   - `ABM | Operations Persona | T1`
   - `ABM | CEO Persona | T1`
   - `ABM | Tech Persona | T1`
3. Sync to LinkedIn via HubSpot Ads integration
4. Allow 24–48 hours for LinkedIn to process the match
5. **Minimum viable matched audience size:** 300 members (LinkedIn's minimum to serve ads). If matched audience is below 300, expand the underlying list or combine T1 + T2.
6. Expected match rate: 40–60% of contacts will match to LinkedIn profiles

**From LinkedIn Campaign Manager directly (Company List upload):**
For T1 accounts where contact-level matching is insufficient, upload a company list:
1. Navigate to: **Campaign Manager → Account Assets → Matched Audiences → Upload a List → Company**
2. CSV format: Company Name, Company Website (domain only, no https://)
3. LinkedIn matches on company name AND domain — include both columns for best match rate
4. Expected match rate: 60–80% of companies
5. Layer a job title filter on top of the company list to ensure only CIO/COO/CEO titles are served ads

#### 3b: Persona Targeting Audiences (Layer 2)

Build saved audiences for each persona using LinkedIn's targeting criteria. Do not use "OR" logic across incompatible attributes — this broadens audiences incorrectly.

**Technology Persona Audience:**
```
Job Title (OR logic within this group):
  Chief Information Officer
  VP IT
  Vice President Information Technology
  Director Information Technology
  Head of IT
  IT Director

AND

Job Seniority (OR logic):
  Director
  VP
  C-Suite
  Owner
  Partner

AND

Industry (OR logic):
  Transportation, Trucking & Railroad
  Logistics & Supply Chain
  Warehousing

AND

Company Size (OR logic):
  201–500 employees
  501–1,000 employees
  1,001–5,000 employees
  5,001–10,000 employees

AND

Location: [Select target region]

Audience expansion: OFF (always off — audience expansion dilutes targeting precision)
LinkedIn Audience Network: OFF for ABM campaigns; can test ON for Persona campaigns
```

**Operations Persona Audience:**
```
Job Title (OR logic):
  Chief Operating Officer
  VP Operations
  Vice President Operations
  Head of Transportation
  Head of Transport
  Head of Warehousing
  General Manager Operations
  Director of Operations
  Operations Director
  Transport Manager (Senior level only — layer seniority filter)
  Warehouse Manager (Senior level only — layer seniority filter)

AND Job Seniority: Director / VP / C-Suite / Owner
AND Industry: Transportation, Trucking & Railroad / Logistics & Supply Chain / Warehousing
AND Company Size: 201–5,000 employees
AND Location: [Target region]
```

**CEO Persona Audience:**
```
Job Title (OR logic):
  Chief Executive Officer
  Managing Director
  President
  Owner
  Founder (for owner-operated 3PLs)
  General Manager (for smaller 3PLs where GM = CEO equivalent)

AND Job Seniority: C-Suite / Owner / Partner
AND Industry: Transportation, Trucking & Railroad / Logistics & Supply Chain
AND Company Size: 201–5,000 employees
AND Location: [Target region]
```

**Audience size targets (before launch):**
| Region | Target Audience Size (Persona Layer) |
|--------|-------------------------------------|
| Australia | 5,000 – 25,000 per persona |
| Indonesia | 8,000 – 40,000 per persona |
| Saudi Arabia | 3,000 – 15,000 per persona |
| Philippines | 5,000 – 20,000 per persona |

If audience is below the lower bound, loosen job title criteria (add adjacent titles). If above the upper bound, tighten industry or add a skills filter (`Supply Chain Management`, `Logistics Management`, `Transportation Management`).

#### 3c: Retargeting Audiences (Layer 3)

Navigate to: **Campaign Manager → Account Assets → Matched Audiences → Website → Create Audience**

| Audience Name | Rule | Lookback Window |
|--------------|------|-----------------|
| `RT | Logistics Product Page` | URL contains `/logistics-software` | 90 days |
| `RT | All Website Visitors` | Any ramco.com page visited | 60 days |
| `RT | Pricing or Demo Page` | URL contains `/demo` OR `/pricing` | 30 days |
| `RT | LGF Openers` | Opened a Lead Gen Form but did not submit | 30 days |
| `RT | Video 50% Viewers` | Watched 50%+ of any LinkedIn video ad | 60 days |

**Exclusion audiences (always exclude from all campaigns):**
- Current Ramco customers (upload customer email list as a matched audience, then exclude)
- Contacts who have already booked a demo (HubSpot list: contacted with `Meeting Booked` status)
- Contacts who have unsubscribed from email (sync HubSpot unsubscribe list as an exclusion)

---

### STEP 4: Write Ad Creative and Copy
**Time:** 3–4 hours | **Owner:** Copywriter / Demand Gen (use Claude Prompt 1 to accelerate)

**Before writing any ad:** Read the approved messaging matrix in `/skills/activation/skill-03-persona-messaging-architecture.md` for the relevant persona. All ad copy must trace back to an approved messaging pillar.

#### LinkedIn Ad Formats for Ramco

**Format 1 — Single Image Sponsored Content**
Best for: Awareness, content promotion, demo request
Specs: 1200×627px image; headline ≤150 chars (70 chars shows without truncation); intro text ≤150 chars (shows before "see more"); description ≤70 chars

**Format 2 — Lead Gen Form (LGF)**
Best for: Content downloads, demo requests — removes the landing page step
Specs: Same image/copy as Sponsored Content, form opens natively in LinkedIn
Form fields for Ramco: First Name (pre-filled), Last Name (pre-filled), Email (pre-filled), Company (pre-filled), Job Title (pre-filled), Phone (optional — reduces conversion rate; use only for T1 ABM campaigns)

**Format 3 — Message Ad (InMail)**
Best for: ABM Layer 1 only — direct outreach to named T1 accounts
Specs: Subject line ≤60 chars; body ≤1,500 chars (aim for 300–500); one CTA button ≤20 chars
Frequency cap: 1 per member per 30 days (LinkedIn-enforced)

**Format 4 — Conversation Ad**
Best for: Mid-funnel re-engagement of warm audiences
Specs: Opening message ≤500 chars; up to 5 CTA buttons per message; branching conversation paths
Use case: "What's your biggest operational challenge?" → three persona-specific paths → relevant content offer per path

**Format 5 — Video Ad**
Best for: Awareness and retargeting; higher engagement than static
Specs: 15–30 seconds for awareness; up to 2 minutes for mid-funnel; subtitles required (80% of LinkedIn video watched without sound)
Content: Customer testimonial clip, product walkthrough highlight, or a "day-in-the-life" operations scenario

---

#### Ad Copy Framework: All Formats

**The PPCO Formula (for Sponsored Content intro text and Message Ad body):**
- **P**ain — open with the problem in the persona's language
- **P**roof — one specific claim or reference that makes you credible
- **C**hange — what changes when they use Ramco (outcome, not feature)
- **O**ffer — what they get by clicking (specific, low-friction)

**Copy rules (non-negotiable for every ad):**
- Never start the intro text with "Ramco" or "We" — start with the prospect's world
- No superlatives: no "world-class", "industry-leading", "best-in-class", "cutting-edge"
- Every ad must have one CTA. Never two.
- Headlines must be outcome-led, not feature-led
- For ABM Layer 1 ads: reference the audience segment (e.g., "For 3PL operations teams...") — this increases relevance and reduces wasted impressions
- For retargeting ads: acknowledge prior engagement implicitly ("If you've been looking at logistics platform options...")

---

#### Ad Copy Sets — Technology Persona (CIO / VP IT)

**Ad Set 1 — Awareness / Pain (Sponsored Content)**

*Intro text (150 chars):*
> Most 3PL IT teams are managing 3–5 point solutions that don't share a data model. It works — until it doesn't.

*Headline (70 chars):*
> One Platform. Clean APIs. No Rip-and-Replace.

*Description (70 chars):*
> See how mid-market 3PLs are consolidating.

*CTA Button:* Learn More → Links to `/logistics-software` product page

---

**Ad Set 2 — Content / Lead Gen (LGF)**

*Intro text:*
> Before shortlisting any logistics platform, IT leaders at 3PLs need answers to 12 specific questions. API documentation, implementation methodology, data residency, support SLAs. We built the checklist.

*Headline:*
> 3PL Platform Evaluation Checklist for IT Teams

*Description:*
> Download free. 12 questions your vendor must answer.

*CTA Button:* Download → Opens LinkedIn Lead Gen Form

*Form headline:* Get the 3PL IT Evaluation Checklist
*Form description:* 12 questions to ask any TMS/WMS vendor. Takes 2 minutes to download.
*Thank you message:* Your checklist is on its way. We'll also send a copy to your email.

---

**Ad Set 3 — Demo Request (ABM Layer 1 only)**

*Intro text:*
> For IT leaders at 3PLs evaluating platforms: Ramco's technical walkthrough is built around your architecture — not a generic product demo. API documentation, ERP integration, and implementation methodology. 30 minutes.

*Headline:*
> Book a Technical Walkthrough — Built Around Your Stack

*Description:*
> 30 minutes. Specific to your ERP and integration environment.

*CTA Button:* Book Now → Links to Calendly / HubSpot Meetings

---

**Message Ad — ABM Layer 1, Technology Persona**

*Subject:* 3PL platform evaluation — something specific for IT teams

*Body:*
> [First Name],
>
> I'm reaching out to a small group of IT leaders at 3PLs evaluating or planning to evaluate logistics platforms.
>
> Before committing to a demo cycle, most CIOs and VP ITs want to see two things first: the API documentation and an honest account of what implementation actually requires from the IT team.
>
> I've put together both — a technical integration overview and an implementation resource guide specific to 3PL environments. No sales pitch in either document.
>
> Happy to send them directly, or if you'd prefer to start with a 30-minute architecture conversation with one of our implementation leads, I can arrange that too.
>
> Either way — worth a response?

*CTA Button (20 chars):* Send Me the Docs

---

#### Ad Copy Sets — Operations Persona (COO / VP Ops / Head of Transport / Head of Warehousing)

**Ad Set 1 — Awareness / Pain (Sponsored Content)**

*Intro text:*
> For 3PL operations teams: billing disputes, manual rate reconciliation, and zero real-time visibility across transport and warehouse. The cost of this isn't abstract — it's sitting in your P&L every month.

*Headline:*
> See Your Whole Operation. Bill Accurately. Scale Without Headcount.

*Description:*
> Built for 3PLs running transport and warehouse together.

*CTA Button:* Learn More

---

**Ad Set 2 — Content / Lead Gen (LGF)**

*Intro text:*
> 3PL operations leaders at $100M–$500M revenue: how much is manual billing and operational fragmentation actually costing you? Most don't know — until they calculate it. We built a calculator that takes 5 minutes.

*Headline:*
> Calculate Your 3PL Operations Cost Leakage

*Description:*
> Billing disputes, manual headcount, onboarding delays. See the number.

*CTA Button:* Calculate Now → Opens LGF
*Form headline:* Get Your 3PL Cost Leakage Calculator
*Form description:* 5-minute tool. Calculates billing revenue leakage, manual process cost, and onboarding inefficiency.

---

**Ad Set 3 — Demo Request (Sponsored Content + LGF)**

*Intro text:*
> Most 3PL demos show you a product. Ours starts with your operation — transport model, warehouse configuration, billing structure, customer SLAs. Then we show you exactly how it runs in Ramco. 20 minutes.

*Headline:*
> A 3PL Operations Demo Built Around Your Business

*Description:*
> Not a generic demo. Specific to how your operation runs.

*CTA Button:* Book a Demo

---

**Ad Set 4 — Case Study / Social Proof (Video or Static)**

*Intro text:*
> How a $180M 3PL reduced billing disputes by 70% and cut new customer onboarding from 14 weeks to 3. Same headcount. Different platform.

*Headline:*
> Case Study: $180M 3PL. 70% Fewer Billing Disputes.

*Description:*
> See the before/after and the 12-month outcome.

*CTA Button:* Read Case Study

---

#### Ad Copy Sets — CEO Persona

**Ad Set 1 — Awareness / Pain (Sponsored Content)**

*Intro text:*
> Enterprise shippers are requiring real-time visibility, digital POD, and automated invoicing as table stakes. 3PLs that can't demonstrate this capability are losing contracts they should win on relationships alone.

*Headline:*
> The Digital Capability Gap Costing 3PLs Enterprise Contracts

*Description:*
> How mid-market 3PLs are closing the gap — and winning.

*CTA Button:* Read More

---

**Ad Set 2 — Content / Lead Gen (LGF)**

*Intro text:*
> For 3PL CEOs: the one operational metric that separates 3PLs that scale profitably from those that grow and lose margin. Most can't calculate it in under 24 hours. Here's how to fix that.

*Headline:*
> The 3PL Profitability Metric You Should Know in Real Time

*Description:*
> One-page executive guide. 5-minute read.

*CTA Button:* Download Guide

---

**Ad Set 3 — Executive Briefing (ABM Layer 1, Message Ad)**

*Subject:* 3PL market in [Region] — 15 minutes with our regional lead

*Body:*
> [First Name],
>
> I lead Ramco's [Region] business. We work with 3PLs at your revenue scale across [region] on platform consolidation — TMS, WMS, Fleet, and Billing in one system.
>
> I'm not reaching out to pitch. I'd like 15 minutes to share what we're seeing in the [Region] 3PL market — where the competitive pressure is coming from, what the 3PLs winning enterprise contracts are doing differently, and where technology sits in that picture.
>
> No preparation required on your side. A direct conversation — peer to peer.
>
> Worth 15 minutes?

*CTA Button (20 chars):* Yes — Book a Time

---

### STEP 5: Campaign Setup in LinkedIn Campaign Manager
**Time:** 2 hours | **Owner:** Paid Media

#### 5a: Campaign Objective Selection

| Campaign Layer | Objective | Why |
|---------------|-----------|-----|
| ABM Layer 1 — Awareness | Brand Awareness | Optimises for impressions and frequency among named accounts |
| ABM Layer 1 — Conversion | Website Conversions | Optimises for demo requests from named account contacts |
| Persona Layer 2 — Content | Lead Generation | Optimises for LGF submissions — lower cost than sending to website |
| Persona Layer 2 — Awareness | Brand Awareness | Reach campaign — keep Ramco visible to broad ICP |
| Retargeting Layer 3 | Website Conversions | Optimises for conversion from warm traffic |
| Message Ad | Message (objective is auto-set) | LinkedIn sets this automatically for Message Ad format |

#### 5b: Bid Strategy by Campaign Type

| Campaign Type | Bid Strategy | Starting Bid | Notes |
|--------------|-------------|-------------|-------|
| ABM Brand Awareness | Maximum Delivery | N/A | Auto-optimised for reach within budget |
| ABM Conversion | Enhanced CPC or Max Delivery | — | Start with Maximum Delivery; switch to Manual CPC if CPL is too high after 2 weeks |
| Persona LGF | Maximum Delivery | — | Let LinkedIn optimise; review after 500 impressions |
| Persona Brand Awareness | CPM Manual | $8–14 CPM (AU/SA), $3–6 CPM (ID/PH) | Manual CPM for reach campaigns keeps cost predictable |
| Retargeting | Enhanced CPC | — | Higher bid floor than cold audiences; audience is warm |
| Message Ad | CPM (auto) | $0.30–$0.60 per send | LinkedIn charges per message send; set a daily cap |

#### 5c: Budget Allocation

**Starting budget allocation per region (monthly):**

| Layer | % of Regional Budget | Rationale |
|-------|---------------------|-----------|
| ABM Layer 1 | 40% | Highest deal quality; direct targeting of named accounts |
| Persona Layer 2 | 45% | Volume pipeline building; content downloads for nurture |
| Retargeting Layer 3 | 15% | Low budget needed; high conversion from warm traffic |

**Regional budget allocation (as % of total LinkedIn budget):**

| Region | % of Total | Rationale |
|--------|-----------|-----------|
| Australia | 35% | Highest ACV expectation; most mature digital buying behaviour |
| Saudi Arabia | 30% | Highest growth priority; expensive market to reach |
| Indonesia | 20% | Larger audience; lower CPL; higher volume strategy |
| Philippines | 15% | Smaller T1 universe; supplement with outbound-heavy approach |

**Minimum viable monthly budget per region:** AUD $3,000 / USD $2,000. Below this, audience frequency is too low to build awareness and the algorithm cannot optimise effectively.

#### 5d: Frequency and Scheduling Settings

- **Frequency cap (Sponsored Content):** 4 impressions per member per 30 days for ABM; 6–8 per member for Persona targeting. More than this and you get negative brand sentiment — "why does Ramco keep following me?"
- **Schedule:** No specific dayparting needed for LinkedIn — unlike search ads, LinkedIn feed timing is less predictable. Let the algorithm serve when members are active.
- **Campaign dates:** Set campaigns as ongoing with a monthly budget cap. Do not set end dates — campaigns that end restart with cold learning periods.

#### 5e: A/B Test Structure

Never run a single creative without a test variant. LinkedIn's testing capabilities are limited compared to Meta — run manual A/B tests by duplicating campaigns and changing one variable.

**What to test in order of priority:**
1. Intro text angle — pain-led vs. outcome-led vs. proof-led
2. Headline — feature-adjacent vs. pure outcome
3. Visual — static image vs. no image (dark post with text only often outperforms for B2B)
4. CTA copy — "Book a Demo" vs. "See How It Works" vs. "Get the Guide"
5. Offer — case study vs. checklist vs. ROI calculator vs. direct demo

Run each test for a minimum of 2 weeks and 500 impressions per variant before drawing conclusions. Do not stop a test early because one variant is leading — LinkedIn needs sufficient data to show statistical significance.

---

### STEP 6: HubSpot Integration and Lead Routing
**Time:** 60–90 minutes | **Owner:** Marketing Ops / HubSpot Admin

#### 6a: Connect LinkedIn Ads to HubSpot

Navigate to: **HubSpot → Marketing → Ads → Connect Account → LinkedIn**

Follow the OAuth connection flow. Once connected:
- All LinkedIn ad spend, impressions, clicks, and conversions will sync to HubSpot automatically
- LinkedIn Lead Gen Form submissions will create new HubSpot contacts automatically
- Contact source will be set to "Paid Social" for LGF leads

#### 6b: Create Custom Properties for LinkedIn Ad Tracking

Navigate to: **HubSpot → Settings → Properties → Contact Properties**

| Property Label | Internal Name | Field Type | Options |
|---------------|--------------|------------|---------|
| LinkedIn Ad Campaign | li_ad_campaign | Single-line text | Auto-populated via HubSpot Ads |
| LinkedIn Ad Lead Gen Form | li_lgf_name | Single-line text | Auto-populated |
| LinkedIn Audience Layer | li_audience_layer | Dropdown | ABM, Persona, Retargeting |
| LinkedIn Ad Region | li_ad_region | Dropdown | Australia, Indonesia, Saudi Arabia, Philippines |
| LinkedIn Ad Persona | li_ad_persona | Dropdown | Technology, Operations, CEO |
| LinkedIn MQL Source | linkedin_mql | Checkbox | True/False — set to True when LGF lead qualifies as MQL |

#### 6c: Build HubSpot Workflows for LinkedIn Lead Processing

Navigate to: **HubSpot → Automation → Workflows → Create → Contact-based**

**Workflow 1: LinkedIn LGF Lead — Immediate Processing**

Name: `LINKEDIN | LGF Lead — Intake and Route`

Trigger: Contact property `Original Source` = Paid Social AND `Original Source Drill-Down 1` contains "LinkedIn"

Steps:
```
Trigger fires (new LinkedIn LGF contact created)
  ↓
Set property: li_audience_layer = [from UTM or campaign name — use regex to parse]
  ↓
Set property: li_ad_persona = [parse from campaign name]
  ↓
Set property: li_ad_region = [parse from campaign name or IP geolocation]
  ↓
Set property: abm_persona_category = [map from li_ad_persona]
  ↓
If/then branch: Is this contact already in HubSpot with an associated deal?
  → YES: Add note to existing deal: "LinkedIn LGF conversion — [campaign name]" → Notify deal owner → End
  → NO: Continue
  ↓
If/then branch: Does the contact's company match any T1 or T2 account in HubSpot?
  → YES: Set ABM Account Tier from associated company → Set li_audience_layer = ABM → Create task for SDR: "LinkedIn ABM lead — [Company] — [Persona]" → End
  → NO: Continue (standard nurture enrollment)
  ↓
Send internal notification to regional SDR: "New LinkedIn lead — [Name] | [Company] | [Title] | [Region]"
  ↓
Enroll contact in persona-matched nurture sequence (see skill-04)
  ↓
Set abm_sequence_status = Active
  ↓
End
```

**Workflow 2: LinkedIn Lead — MQL Qualification**

Name: `LINKEDIN | Lead — MQL Scoring`

Trigger: Contact enrolled via LinkedIn AND any of the following:
- Downloads 2+ content assets
- Opens 4+ nurture emails
- Visits `/demo` or `/pricing` page after ad click
- Clicks a demo CTA in a LinkedIn ad

Steps:
```
Trigger fires
  ↓
Set property: linkedin_mql = True
  ↓
Set Lifecycle Stage = Marketing Qualified Lead
  ↓
Create SDR task: "LinkedIn MQL — high intent signal — [Name] | [Company] | [Action taken]"
  ↓
Notify SDR via email: [include contact summary, company tier, LinkedIn campaign source, actions taken]
  ↓
End
```

#### 6d: UTM Parameter Structure

Every LinkedIn ad click must carry UTM parameters so HubSpot can attribute pipeline correctly.

**UTM structure for LinkedIn campaigns:**
```
utm_source    = linkedin
utm_medium    = paid-social
utm_campaign  = [Campaign Group name — e.g., au-abm-cio-q1]
utm_content   = [Ad Set name — e.g., au-abm-cio-sc-pain-v1]
utm_term      = [Persona — e.g., cio / ops / ceo]
```

**Example full URL:**
```
https://www.ramco.com/products/logistics-software/?utm_source=linkedin&utm_medium=paid-social&utm_campaign=au-abm-cio-q1&utm_content=au-abm-cio-sc-pain-v1&utm_term=cio
```

Build UTM links using HubSpot's UTM builder or a shared Google Sheet with a formula. Never manually type UTM parameters into LinkedIn ad URLs — one typo breaks attribution for an entire campaign.

#### 6e: Build LinkedIn Reporting Dashboard in HubSpot

Navigate to: **HubSpot → Reports → Dashboards → Create Dashboard**

Name: `LinkedIn Paid — Performance Dashboard`

| Report | Type | Metrics |
|--------|------|---------|
| LinkedIn Spend by Region | Bar chart | Weekly spend per region |
| Impressions & Reach by Campaign Layer | Bar chart | ABM vs. Persona vs. Retargeting |
| CTR by Ad Creative | Table | Sort by CTR descending — identify top performers |
| CPL by Campaign | Bar chart | Cost per LinkedIn LGF submission |
| LinkedIn Leads by Persona | Donut chart | Tech / Ops / CEO breakdown |
| LinkedIn MQLs (Week over Week) | Line chart | MQL count from LinkedIn source |
| LinkedIn-Influenced Pipeline | Single number | Deals where contact source = LinkedIn |
| LinkedIn ROI | Single number | Pipeline influenced ÷ LinkedIn spend |

---

### STEP 7: Region-Specific Campaign Instructions
**Time:** Review before building each region's campaigns | **Owner:** Paid Media + Regional Sales

---

#### Australia

**Audience characteristics:**
- LinkedIn penetration among Australian logistics professionals is high — most C-suite and VP-level 3PL contacts have active LinkedIn profiles
- Australian audiences respond well to direct, specific copy — generic B2B language underperforms; numbers and specifics outperform
- ABM matched audiences in Australia tend to achieve 55–65% match rates — higher than other regions due to strong LinkedIn professional data

**Campaign adjustments:**
- Use AUD-denominated figures in any ROI or financial references in ad copy — USD feels impersonal to Australian buyers
- Reference local competitive context where possible: "As the major national 3PLs invest in digital infrastructure, mid-market operators face a capability gap that's affecting enterprise contract wins"
- Sponsored Content performs strongest — Message Ads in Australia have a lower acceptance rate; use sparingly for T1 ABM only
- Test creative that references specific Australian logistics pain points: CoR compliance audit trails, FMCG/retail customer SLA requirements, interstate linehaul visibility

**LinkedIn audience refinement for AU:**
- Add `Australia` as location — do not add New Zealand unless there is a specific NZ sales motion
- Skills refinement: add `Supply Chain Management`, `Logistics Management`, `Transportation Management` to sharpen the Operations Persona audience in AU where job title data can be inconsistent
- Company list audience: supplement with ASX-listed logistics companies for T1 ABM — public companies have cleaner LinkedIn data

**Benchmarks (AU):**
| Metric | Target |
|--------|--------|
| CPM (ABM) | $30–50 AUD |
| CPM (Persona) | $15–25 AUD |
| CTR (Sponsored Content) | >0.55% |
| CPL (LGF) | <$120 AUD |
| Message Ad open rate | >40% |

---

#### Indonesia

**Audience characteristics:**
- LinkedIn is used professionally in Indonesia but penetration among operations-level logistics staff is lower than in Australia — the C-suite and VP level are well-represented; mid-management less so
- Indonesian LinkedIn profiles often have job titles in Bahasa Indonesia — include both English and Indonesian title variants in targeting
- Mobile-first market — over 80% of Indonesian LinkedIn usage is on mobile; all creative must render well on mobile and all landing pages must be mobile-optimised

**Campaign adjustments:**
- **Bahasa Indonesia ad copy is recommended for Operations and CEO personas** — English is acceptable at C-suite level but Bahasa resonates more strongly and often achieves 20–30% higher CTR in testing
- Indonesian LinkedIn users are more receptive to content-focused ads (guides, whitepapers) than direct demo request ads — lead with value, not the ask
- Message Ads perform well in Indonesia — the WhatsApp-native culture means direct messages feel natural
- Ad imagery: use visuals that reflect Indonesian logistics context — port infrastructure, inter-island freight, Jakarta warehouse operations — not generic stock photography from Western markets

**Bahasa Indonesia title variants to add to targeting:**
```
Kepala Operasional (Head of Operations)
Direktur Operasional (Operations Director)
Manajer Logistik (Logistics Manager — senior filter)
Kepala Teknologi Informasi (Head of IT)
Direktur IT (IT Director)
```

**Landing page requirement:** Any Indonesian LinkedIn ad that drives to a website page should link to a page with a Bahasa Indonesia language option. If this does not exist, use LinkedIn Lead Gen Forms instead of sending traffic to the website — LGFs convert within LinkedIn and bypass the language barrier.

**Benchmarks (ID):**
| Metric | Target |
|--------|--------|
| CPM (Persona) | $6–12 USD |
| CTR (Sponsored Content) | >0.45% |
| CPL (LGF) | <$60 USD |
| Message Ad open rate | >45% |

---

#### Saudi Arabia

**Audience characteristics:**
- LinkedIn professional penetration among Saudi logistics executives is moderate — growing rapidly but not as saturated as Australia; this means less competition for impressions and lower CPMs
- Saudi C-suite executives use LinkedIn actively for professional development and peer networking; they are receptive to executive-level content
- Arabic-language profiles are common — Saudi LinkedIn users often have both English and Arabic in their profiles; LinkedIn targeting works in both

**Campaign adjustments:**
- **Arabic-language ad copy is required for Operations Persona and recommended for CEO Persona** — English-only campaigns in Saudi Arabia underperform against Arabic-language campaigns by a measurable margin
- Vision 2030 references in ad copy are highly relevant and should be woven into CEO and CIO campaigns: "Supporting Saudi Arabia's National Transport and Logistics Strategy"
- Ad imagery: use visuals that are regionally appropriate — Saudi logistics infrastructure, modern warehouse facilities, Saudi flag context if relevant — avoid any imagery that could be culturally misaligned (no alcohol, no mixed-gender imagery without context, no Western holiday references)
- Message Ads: Saudi executives respond well to formal, respectful outreach from a named senior Ramco representative — ensure the Message Ad sender is a named, senior person (Director level or above) with a professional LinkedIn profile
- Run campaigns Sunday through Thursday — Friday and Saturday are the Saudi weekend; ad serving continues but engagement drops significantly

**Arabic ad copy example (Operations Persona):**
> Intro text (Arabic): شركات اللوجستيات من الطرف الثالث التي تجمع بين إدارة النقل والمستودعات في منصة واحدة تقلل أخطاء الفوترة وتحسن رؤية العمليات في الوقت الفعلي.
> Headline (Arabic): رؤية كاملة. فوترة دقيقة. نمو بدون زيادة في الطاقم.

**PDPL compliance note:** LinkedIn ad targeting in Saudi Arabia collects personal data on Saudi residents. Ensure Ramco's privacy policy covers Saudi data subjects and references PDPL compliance. Include a brief compliance note in Lead Gen Form descriptions.

**Benchmarks (SA):**
| Metric | Target |
|--------|--------|
| CPM (ABM) | $25–40 USD |
| CPM (Persona) | $12–20 USD |
| CTR (Sponsored Content) | >0.50% |
| CPL (LGF) | <$90 USD |
| Message Ad open rate | >50% |

---

#### Philippines

**Audience characteristics:**
- LinkedIn penetration in the Philippines is high among business professionals in Metro Manila — logistics executives at mid-to-large companies are well-represented
- Filipino LinkedIn users are highly active — the Philippines consistently ranks among the highest LinkedIn engagement markets in Southeast Asia
- Mobile-first: Philippine LinkedIn usage is predominantly mobile; prioritise mobile-optimised creative and LGFs over website link ads

**Campaign adjustments:**
- English-language ad copy is appropriate and expected in the Philippines — no translation required
- Filipino professionals respond well to aspirational copy tied to professional achievement and business growth — frame Ramco as enabling the prospect's career success and business expansion, not just solving a problem
- References to local competitive context resonate: "Philippine 3PLs competing for enterprise accounts from SM, Jollibee, and Ayala are being evaluated on their digital infrastructure"
- Peer social proof works exceptionally well — a named Filipino logistics executive in a testimonial ad or quote ad will outperform any product-focused creative
- Community references: SCMAP membership, Ateneo/La Salle/UP alumni angle in Message Ad copy for contacts where this connection is known (pull from LinkedIn profile before sending)
- Typhoon resilience / business continuity can be a differentiating ad angle for the CIO persona — unique to Philippine context and rarely addressed by competitors

**Budget note:** CPLs in the Philippines are the lowest of the four regions — budget efficiency is high here, but total T1 universe is also smaller. Do not over-invest; cap Philippines at 15–20% of total LinkedIn budget.

**Benchmarks (PH):**
| Metric | Target |
|--------|--------|
| CPM (Persona) | $5–10 USD |
| CTR (Sponsored Content) | >0.60% |
| CPL (LGF) | <$45 USD |
| Message Ad open rate | >45% |

---

### STEP 8: Ongoing Optimisation Cadence
**Time:** 2–3 hours/week | **Owner:** Paid Media

**Weekly actions (every Monday):**
- [ ] Review spend pacing — are campaigns on track to hit monthly budget? Adjust daily budgets if underpacing or overpacing
- [ ] Pull CTR by ad creative — pause any ad with CTR <0.30% after 500+ impressions; duplicate and test a new variant
- [ ] Review CPL by campaign — any campaign with CPL >2× target: check audience size, check creative, check landing page
- [ ] Check LinkedIn lead quality — review the week's LGF submissions with the regional SDR; flag any irrelevant titles or companies to tighten audience targeting
- [ ] Check frequency — any campaign with frequency >5 impressions/member in the last 30 days: refresh creative or reduce budget

**Monthly actions (first week of month):**
- [ ] Review matched audience sizes — re-sync HubSpot contact lists to LinkedIn; check if match rate has dropped
- [ ] Refresh at least one ad creative per campaign — LinkedIn audiences fatigue on static creative after 4–6 weeks
- [ ] Review pipeline attribution — how much pipeline was influenced by LinkedIn in the prior month?
- [ ] Review audience composition report — LinkedIn shows the job titles, seniorities, and companies that are seeing your ads; check alignment with ICP
- [ ] Update exclusion lists — add any new customer contacts and active deal contacts to exclusion audiences

**Quarterly actions:**
- [ ] Full creative refresh — replace all active ads with new copy and visuals
- [ ] Audience expansion review — are there new job title variants or company segments worth adding?
- [ ] Budget reallocation review — shift budget toward the region and layer delivering the best pipeline ROI
- [ ] Competitor ad audit — use LinkedIn's Ad Library to see what competitors are running (linkedin.com/ad-library) — update battlecards if new messaging is observed

---

## Ready-to-Use Claude Prompts

---

### Claude Prompt 1 — LinkedIn Ad Copy Generator

```
You are a B2B paid social copywriter specialising in LinkedIn advertising for enterprise software companies with long sales cycles.

Write a complete set of LinkedIn ad copy for the following campaign. Every ad must be immediately usable — no placeholders except for standard LinkedIn personalisation fields.

Company: Ramco Systems — Logistics Software (TMS, WMS, Fleet Management, Hub Management, Rating & Billing)
ICP: 3PL companies with $100M+ annual revenue

Campaign details:
- Target persona: [PERSONA — e.g., COO / Head of Operations]
- Target region: [REGION — e.g., Australia]
- Campaign layer: [ABM / Persona / Retargeting]
- Campaign objective: [Brand Awareness / Lead Generation / Website Conversions / Demo Requests]
- Format: [Sponsored Content / Lead Gen Form / Message Ad / Conversation Ad]
- Offer / CTA: [e.g., Download 3PL Ops Evaluation Guide / Book a 20-min operations demo]

Persona context:
- Primary pains: [PASTE TOP 3 FROM persona-definitions.md]
- Desired outcomes: [PASTE TOP 3 FROM persona-definitions.md]
- What NOT to say: [PASTE FORBIDDEN PHRASES]
- Regional nuance: [PASTE REGIONAL CONTEXT FOR THIS PERSONA/REGION]

For Sponsored Content / Lead Gen Form, write:
1. Intro text — 3 variants (each under 150 characters — the line visible before "see more")
2. Headline — 3 variants per intro text (under 70 characters — what shows without truncation)
3. Description — 2 variants (under 70 characters)
4. CTA button text — 2 options (Learn More / Download / Sign Up / Register / Request Demo — LinkedIn's fixed options)
5. Lead Gen Form headline (if LGF) — under 60 characters
6. Lead Gen Form description (if LGF) — under 160 characters
7. Thank-you message (if LGF) — under 160 characters

For Message Ad, write:
1. Subject line — 3 variants (under 60 characters)
2. Full message body — 3 variants (300–500 characters — short enough to read in the LinkedIn message preview)
3. CTA button text — 2 options (under 20 characters)

Rules for all copy:
- Never open intro text with "Ramco" or "We"
- Never use: "world-class", "industry-leading", "best-in-class", "cutting-edge", "game-changing", "revolutionary", "seamless", "robust"
- Every ad must reference a specific 3PL pain or outcome — not a generic logistics statement
- Tone must reflect [REGION] communication style: [describe — e.g., "direct and unembellished for Australia" or "formal and Vision 2030-aware for Saudi Arabia"]
- If the region is Indonesia or Saudi Arabia, also provide one Bahasa Indonesia / Arabic translation of the highest-performing English variant
- Mark each variant as: Pain-led / Outcome-led / Proof-led / Curiosity-led — this helps with A/B test interpretation

After writing the ads, recommend:
- Which 2 variants to A/B test first and why
- What visual direction to pair with each variant (describe the image concept — do not source actual images)
```

---

### Claude Prompt 2 — LinkedIn Audience Targeting Strategy

```
You are a LinkedIn paid media strategist with expertise in B2B enterprise software campaigns targeting logistics decision-makers.

Build a complete LinkedIn audience targeting strategy for the following campaign.

Company: Ramco Systems — Logistics Software
ICP: 3PL companies with $100M+ annual revenue

Campaign details:
- Target persona: [PERSONA]
- Target region: [REGION]
- Campaign layer: [ABM / Persona / Retargeting]
- Monthly budget: [BUDGET in USD]
- Campaign objective: [OBJECTIVE]

ABM list status: [e.g., "300 contacts uploaded as matched audience — 52% match rate — 156 matched" / "No matched audience yet"]

Produce the following:

1. PRIMARY AUDIENCE BUILD
   List every LinkedIn targeting criterion with the exact LinkedIn field name:
   - Job Titles (list each one as it appears in LinkedIn targeting)
   - Job Seniority levels
   - Industries
   - Company sizes
   - Location
   - Skills (if adding for refinement)
   State the AND/OR logic between each attribute group.
   Estimate the resulting audience size range for [REGION].

2. AUDIENCE EXPANSION OPTIONS (if primary audience is below 1,000)
   List 3 ways to expand the audience while maintaining ICP quality:
   - Option A: [Additional titles]
   - Option B: [Adjacent industry]
   - Option C: [Skills-based expansion]

3. AUDIENCE EXCLUSIONS (list all)
   - Existing customers
   - Competitor employees (list specific competitor company names to exclude)
   - Job functions that would dilute quality (e.g., Sales, HR, Finance — unless they are the persona)

4. RETARGETING AUDIENCE SETUP
   For each retargeting layer, specify:
   - Audience source (website / video / LGF)
   - URL rule or engagement trigger
   - Lookback window
   - Minimum audience size needed to serve ads

5. LAYERING STRATEGY
   How to layer the ABM matched audience on top of persona targeting to maximise T1 account reach while maintaining volume for the broader Persona layer.

6. FREQUENCY AND BUDGET RECOMMENDATIONS
   - Recommended daily budget given the audience size
   - Frequency cap recommendation
   - CPM or CPL bid strategy recommendation with rationale
   - When to switch bid strategies as the campaign matures

7. AUDIENCE HEALTH CHECKS (monthly)
   List 5 signals that indicate the audience targeting needs adjustment, and the specific fix for each.
```

---

### Claude Prompt 3 — LinkedIn Campaign Performance Audit

```
You are a B2B paid media analyst auditing a LinkedIn campaign programme for an enterprise logistics software company.

Review the following campaign performance data and produce a structured audit with specific, actionable recommendations.

Company: Ramco Systems — Logistics Software
ICP: 3PL companies with $100M+ annual revenue
Sales cycle: 180+ days | ACV: $150k+

Campaign period reviewed: [DATE RANGE]
Total LinkedIn spend in period: [AMOUNT]

Campaign performance data:
[PASTE PERFORMANCE DATA — campaign name, impressions, clicks, CTR, spend, CPL, leads, conversions — or describe what's available]

Pipeline data (from HubSpot):
- LinkedIn-influenced pipeline created in period: [AMOUNT]
- Deals created from LinkedIn leads: [NUMBER]
- LinkedIn MQLs in period: [NUMBER]
- LinkedIn-sourced meetings booked: [NUMBER]

Audience composition data (from LinkedIn Campaign Manager → Demographics):
[PASTE or describe: top job titles, seniority levels, industries, company sizes seeing your ads]

Produce the following audit:

1. PERFORMANCE SUMMARY (5 bullets — what the numbers actually say, not what you hope they say)

2. AUDIENCE QUALITY ASSESSMENT
   Based on the demographic data: are the right people seeing the ads?
   Flag any titles, seniority levels, or industries that appear in significant volume but don't match the ICP.
   Recommend specific targeting exclusions or refinements.

3. CREATIVE PERFORMANCE ANALYSIS
   Which ads are working and why? Which are underperforming and why?
   What is the CTR benchmark for this audience and format?
   What creative themes are winning vs. losing?

4. FUNNEL CONVERSION ANALYSIS
   Where is the biggest drop-off in the funnel: impressions → clicks → leads → MQLs → meetings → pipeline?
   What is the primary cause of each drop-off point?
   What is the specific fix?

5. BUDGET EFFICIENCY ASSESSMENT
   Is budget allocated correctly across regions and campaign layers?
   Which region/layer has the best pipeline ROI?
   Which region/layer should have budget shifted away from it?

6. TOP 5 PRIORITY ACTIONS (ranked by expected impact on pipeline ROI)
   For each action:
   - What to do (specific, not generic)
   - Why it will improve performance
   - How long before results are visible
   - Who owns the action

7. 90-DAY FORECAST
   If the top 5 actions are implemented, what is the expected improvement in:
   - CPL
   - MQL volume
   - LinkedIn-influenced pipeline

Be direct. Do not soften findings. A flattering audit is useless.
```

---

## KPIs

### Setup KPIs (measure before campaign launch)
| Metric | Target | How to Measure |
|--------|--------|----------------|
| Insight Tag verified active on all product pages | 100% | LinkedIn Insight Tag checker |
| Conversion events configured | All 5 conversion types | Campaign Manager → Conversions |
| ABM matched audiences above 300 members | 100% of ABM audiences | Campaign Manager → Matched Audiences |
| HubSpot LinkedIn Ads integration connected | Active | HubSpot → Marketing → Ads |
| UTM parameters on all ad destination URLs | 100% | Pre-launch URL audit |
| Exclusion audiences configured | Customers + active deals + unsubscribes | Campaign Manager → Audiences |

### Delivery KPIs (measure weekly)
| Metric | Target | How to Measure |
|--------|--------|----------------|
| Impressions per T1 account per month (ABM) | >15 | Campaign Manager → Demographics |
| Frequency (ABM campaigns) | 3–6 per 30 days | Campaign Manager → Campaign metrics |
| Frequency (Persona campaigns) | 4–8 per 30 days | Campaign Manager |
| LinkedIn Audience Network % of spend | <10% | Campaign Manager — turn off if above |
| % of spend on non-ICP audiences | <15% | Demographic report audit |

### Engagement KPIs (measure weekly)
| Metric | Target AU | Target ID | Target SA | Target PH |
|--------|----------|----------|----------|----------|
| CTR (Sponsored Content) | >0.55% | >0.45% | >0.50% | >0.60% |
| Message Ad open rate | >40% | >45% | >50% | >45% |
| LGF conversion rate | >10% | >12% | >10% | >12% |
| Video completion rate (if running) | >25% | >20% | >25% | >25% |

### Pipeline KPIs (measure monthly and quarterly)
| Metric | Target | How to Measure |
|--------|--------|----------------|
| CPL (cost per LinkedIn lead) | <$120 AUD / <$90 USD (varies by region) | Campaign Manager + HubSpot |
| LinkedIn MQLs per month | >15 across all regions | HubSpot — LinkedIn source + MQL stage |
| LinkedIn-influenced pipeline per quarter | >3× quarterly LinkedIn spend | HubSpot campaign ROI report |
| Meetings booked from LinkedIn leads | >8% of LinkedIn LGF leads | HubSpot meetings — LinkedIn source |
| LinkedIn ROI | >4× (pipeline ÷ spend) | HubSpot campaign report |

---

## Failure Modes and How to Fix Them

| Failure Mode | Symptom | Fix |
|-------------|---------|-----|
| Audience too broad — wrong people seeing ads | Demographic report shows Logistics Coordinators, Freight Brokers, Sales Executives in high volume; low CPL but zero pipeline | Add Job Seniority = Director/VP/C-Suite filter; add specific Industry exclusions; layer on company size minimum 201+ employees |
| LinkedIn Audience Network burning budget | CPL looks good but lead quality is poor; company names on leads don't match ICP | Turn off LinkedIn Audience Network in all campaigns — always; it serves ads on third-party apps and sites with no ICP relevance |
| Matched audience below 300 — ads not serving | Campaign shows "audience too small" warning in Campaign Manager | Expand the underlying HubSpot contact list (add T2 accounts); supplement with company list upload on top of job title targeting |
| Low match rate on uploaded lists | Uploaded 500 contacts — only 150 matched | Check email format (work email required, not personal); ensure LinkedIn profiles are public; try uploading company domain list as supplement |
| Creative fatigue — CTR declining week over week | CTR drops below 0.30% on previously performing ads | Refresh creative every 4–6 weeks; pause ads with CTR <0.30% after 500+ impressions; never run fewer than 3 active ad variants per campaign |
| Message Ads going to spam / no opens | Open rate below 20% | Check sender's LinkedIn profile completeness — a sparse profile kills open rates; ensure message is personalised in first sentence; reduce frequency (max 1 per member per 30 days) |
| LGF leads are not syncing to HubSpot | Leads appear in LinkedIn but not in HubSpot | Reconnect LinkedIn Ads integration in HubSpot; check that the LGF is associated with the correct LinkedIn Ads account in HubSpot |
| Pipeline attribution is zero | LinkedIn spend is high but zero pipeline attributed in HubSpot | Check UTM parameters on all destination URLs; check HubSpot Ads integration is pulling conversion data; run a manual check: search HubSpot contacts by original source = Paid Social |
| High CPL with no pipeline impact | Spending budget, generating leads, but zero deals in HubSpot | Audit lead quality with Sales — are the titles and companies right? If yes, check if SDR follow-up is happening within SLA; if no, tighten audience targeting immediately |
| Indonesia / SA campaigns serving English-only ads to non-English-first audiences | Low CTR and LGF conversion in ID and SA despite sufficient audience | Produce Bahasa Indonesia and Arabic ad variants; A/B test language; expect 20–30% CTR improvement from native-language creative |
| Budget overspent on low-priority region | Month-end shows Philippines consumed 40% of total budget | Set hard monthly budget caps per region in Campaign Manager; review pacing weekly; reallocate toward pipeline-generating regions |

---

## Tools Required

| Tool | Purpose | Required / Optional |
|------|---------|-------------------|
| LinkedIn Campaign Manager | Campaign build, audience creation, creative upload, reporting | Required |
| HubSpot Marketing Hub Pro | LinkedIn Ads integration, lead routing, pipeline attribution, dashboard | Required |
| LinkedIn Sales Navigator | ABM list building and contact enrichment for matched audiences | Required |
| Google Tag Manager | LinkedIn Insight Tag deployment and conversion event tracking | Required |
| LinkedIn Ad Library (linkedin.com/ad-library) | Competitive ad intelligence — see what competitors are running | Required (free) |
| Canva or Adobe Express | Ad creative design (1200×627px static images, video thumbnails) | Required |
| CapCut or Adobe Premiere | Video ad editing for 15–30 second LinkedIn video formats | Optional |
| Google Sheets | UTM parameter management, budget tracking, performance logging | Required |
| mail-tester equivalent for LinkedIn: Shield App (shield.app) | LinkedIn organic + paid analytics beyond Campaign Manager | Optional |
| LinkedIn Insight Tag Helper (Chrome extension) | Verify Insight Tag is firing on all pages before launch | Required (free) |
| DeepL | Arabic and Bahasa Indonesia ad copy translation and review | Required for SA and ID |

---

## Related Files
- `/inputs/persona-definitions.md` — Source for all ad copy persona language and regional nuances
- `/inputs/input.json` — ICP criteria, region list, and channel definitions
- `/skills/activation/skill-03-persona-messaging-architecture.md` — Approved messaging matrix; all LinkedIn ad copy must align
- `/skills/acquisition/skill-01-abm-account-list-building.md` — ABM contact lists that feed LinkedIn matched audiences
- `/skills/activation/skill-04-email-nurture-sequences.md` — Nurture sequences that LinkedIn LGF leads are enrolled into
- `/skills/ops/skill-hubspot-pipeline-setup.md` — HubSpot property and workflow configuration
- `/skills/ops/skill-attribution-reporting.md` — How LinkedIn pipeline attribution is tracked and reported
- `/prompts/ads/linkedin-ad-copy-generator.md` — Standalone prompt file for ad copy generation
- `/analytics/attribution-model.md` — Multi-touch attribution model that LinkedIn feeds into
- `/experiments/experiment-log.md` — Log all A/B tests on LinkedIn ad creative and audiences
