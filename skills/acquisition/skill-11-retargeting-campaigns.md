---
# SKILL FILE 11: Retargeting Campaigns
Category: Acquisition
Depends on: Skill 09, Skill 10, inputs/persona-definitions.md
Platforms: Google Display Network + LinkedIn Retargeting
Save to: skills/acquisition/skill-11-retargeting-campaigns.md

## When to Use
Activate retargeting as soon as Google Search campaigns (Skill 09)
and LinkedIn outbound (Skill 02) are live and generating traffic.
Retargeting re-engages visitors who showed intent but did not convert.
At 180+ day sales cycles, most visitors will NOT convert on first visit.
Retargeting keeps Ramco visible throughout the entire evaluation window.

## Inputs Required
- Google Ads account with conversion tracking already installed
- Google Tag Manager or Google Ads tag installed on ramco.com
- LinkedIn Campaign Manager account
- LinkedIn Insight Tag installed on ramco.com
- HubSpot connected to both Google Ads and LinkedIn
- Regions in scope: Australia, Indonesia, Saudi Arabia
- Modules in scope: TMS, WMS
- Conversion goal: Book a Demo

## The Core Principle
Someone who visited your TMS page is 10x more likely to book a demo
than someone who has never heard of Ramco.
Retargeting is not about chasing people — it is about staying present
for buyers who are in a 180+ day evaluation cycle and will return
when they are ready to make a decision.

## The 4 Audience Types This Skill Covers
Audience 1: Visited TMS page — did not book demo
Audience 2: Visited WMS page — did not book demo
Audience 3: Downloaded a report or gated asset — did not book demo
Audience 4: Visited any product page — did not book demo
---

## AUDIENCE SETUP

Set up these audiences BEFORE building any campaigns.
Audiences need time to populate — build them now, run ads in 2 weeks.

---
### GOOGLE ADS AUDIENCE SETUP

Go to: Google Ads → Tools → Shared Library → Audience Manager
Click + to create each audience below.

AUDIENCE G1: TMS Page Visitors — No Demo
Type: Website visitors
Rules:
  INCLUDE: Users who visited
  URL contains: /transportation-management-tms
  Membership duration: 90 days
  EXCLUDE: Users who visited
  URL contains: [your demo thank-you page URL]
Name this audience: "Ramco | TMS Page | No Demo | 90d"

AUDIENCE G2: WMS Page Visitors — No Demo
Type: Website visitors
Rules:
  INCLUDE: Users who visited
  URL contains: /warehouse-management-wms
  Membership duration: 90 days
  EXCLUDE: Users who visited
  URL contains: [your demo thank-you page URL]
Name this audience: "Ramco | WMS Page | No Demo | 90d"

AUDIENCE G3: Report Downloaders — No Demo
Type: Website visitors
Rules:
  INCLUDE: Users who visited
  URL contains: [your gated asset thank-you page URL]
  Membership duration: 60 days
  EXCLUDE: Users who visited
  URL contains: [your demo thank-you page URL]
Name this audience: "Ramco | Report Download | No Demo | 60d"

AUDIENCE G4: All Product Page Visitors — No Demo
Type: Website visitors
Rules:
  INCLUDE: Users who visited
  URL contains: /products/logistics-software
  Membership duration: 30 days
  EXCLUDE: Users who visited
  URL contains: [your demo thank-you page URL]
Name this audience: "Ramco | All Product Pages | No Demo | 30d"

AUDIENCE G5: Existing Customers — Exclusion Only
Type: Website visitors
Rules:
  INCLUDE: Users who visited
  URL contains: [your customer login or support portal URL]
  Membership duration: 540 days
Name this audience: "Ramco | Existing Customers | Exclude"
Apply this as an EXCLUSION to all retargeting campaigns.
Never retarget existing customers with acquisition ads.

---
### LINKEDIN AUDIENCE SETUP

Go to: LinkedIn Campaign Manager → Plan → Audiences
Click + Create Audience for each below.

AUDIENCE L1: TMS Page Visitors — No Demo
Type: Website retargeting
Rules:
  INCLUDE: People who visited
  URL contains: /transportation-management-tms
  Lookback window: 90 days
Name: "Ramco | TMS Page Visitors | 90d"

AUDIENCE L2: WMS Page Visitors — No Demo
Type: Website retargeting
Rules:
  INCLUDE: People who visited
  URL contains: /warehouse-management-wms
  Lookback window: 90 days
Name: "Ramco | WMS Page Visitors | 90d"

AUDIENCE L3: Report Downloaders — No Demo
Type: Website retargeting
Rules:
  INCLUDE: People who visited
  URL contains: [your gated asset thank-you page URL]
  Lookback window: 60 days
Name: "Ramco | Report Downloaders | 60d"

AUDIENCE L4: All Product Page Visitors — No Demo
Type: Website retargeting
Rules:
  INCLUDE: People who visited
  URL contains: /products/logistics-software
  Lookback window: 30 days
Name: "Ramco | All Product Pages | 30d"

AUDIENCE L5: Matched Accounts — TAL Upload
Type: Company list upload
Upload: Your Tier 1 and Tier 2 target account list CSV
  Required columns: Company Name, Website Domain
  Minimum 300 companies for LinkedIn to match effectively
Name: "Ramco | TAL Upload | Tier 1 + Tier 2"
Use this to NARROW all LinkedIn retargeting audiences:
  Retarget only people who are ALSO from your target accounts.
  This prevents wasting budget on non-ICP visitors.

MINIMUM AUDIENCE SIZE NOTE:
LinkedIn requires 300+ matched members before a campaign can run.
If an audience is below 300, wait and let it grow before activating.
Google Display requires 100+ users for Search and 1,000+ for Display.
Check audience sizes weekly for the first 4 weeks.
---

## GOOGLE DISPLAY RETARGETING — CAMPAIGN STRUCTURE

Build exactly these 4 campaigns in Google Ads.

---
CAMPAIGN GD1: Ramco | Retargeting | TMS | All Regions
Goal: Book a Demo
Bid Strategy: Target CPA — set at $400 to start
Daily Budget: $30 USD/day
Networks: Display Network only (uncheck Search)
Locations: Australia + Indonesia + Saudi Arabia (combined —
  retargeting audiences are small so combine regions)
Audience targeting: Audience G1 (TMS Page Visitors — No Demo)
Exclusion: Audience G5 (Existing Customers)
Ad rotation: Optimize — prefer best performing ads
Frequency cap: 3 impressions per user per day maximum
  (More than this becomes annoying and hurts brand perception)

Ad Group GD1.1: TMS Retargeting — Demo CTA
  Audience: G1 (TMS Page — No Demo)
  Ads: Responsive Display Ads (instructions in Step 6)
  Bid adjustment: none needed with Target CPA

---
CAMPAIGN GD2: Ramco | Retargeting | WMS | All Regions
Goal: Book a Demo
Bid Strategy: Target CPA — set at $400 to start
Daily Budget: $30 USD/day
Networks: Display Network only
Locations: Australia + Indonesia + Saudi Arabia
Audience targeting: Audience G2 (WMS Page Visitors — No Demo)
Exclusion: Audience G5 (Existing Customers)
Frequency cap: 3 impressions per user per day

Ad Group GD2.1: WMS Retargeting — Demo CTA
  Audience: G2 (WMS Page — No Demo)
  Ads: Responsive Display Ads

---
CAMPAIGN GD3: Ramco | Retargeting | Report Downloaders | All Regions
Goal: Book a Demo
Bid Strategy: Target CPA — set at $350 (warmer audience)
Daily Budget: $20 USD/day
Networks: Display Network only
Locations: Australia + Indonesia + Saudi Arabia
Audience targeting: Audience G3 (Report Downloaders — No Demo)
Exclusion: Audience G5 (Existing Customers)
Frequency cap: 2 impressions per user per day
Note: This is your warmest audience — they gave you their details
  already. Lighter frequency, more personalised message.

Ad Group GD3.1: Report Downloaders — Next Step is Demo
  Audience: G3 (Report Downloaders — No Demo)
  Ads: Responsive Display Ads (Step 6 — use warm audience copy)

---
CAMPAIGN GD4: Ramco | Retargeting | All Product Pages | All Regions
Goal: Book a Demo
Bid Strategy: Target CPA — set at $450 (coldest retargeting audience)
Daily Budget: $20 USD/day
Networks: Display Network only
Locations: Australia + Indonesia + Saudi Arabia
Audience targeting: Audience G4 (All Product Pages — No Demo)
Exclusion: Audiences G1 + G2 + G3 + G5
  (Exclude TMS, WMS and Report audiences — they have their own campaigns)
  (Exclude Existing Customers)
Frequency cap: 2 impressions per user per day

Ad Group GD4.1: General Product Interest — Introduce Value
  Audience: G4 (All Product Pages — No Demo)
  Ads: Responsive Display Ads (Step 6 — use awareness copy)
---

## GOOGLE DISPLAY AD COPY

Google Display uses Responsive Display Ads (RDA).
Each RDA contains:
- Short headlines: up to 5 (max 30 characters each)
- Long headline: 1 (max 90 characters)
- Descriptions: up to 5 (max 90 characters each)
- Business name: Ramco Systems (max 25 characters)
- Images: provided by your design team (specs below)
Google tests combinations automatically.

---
### RDA SET 1: TMS Retargeting (Campaign GD1)
Audience: Visited TMS page, did not book demo
Tone: Reminder — they already know Ramco. Skip the introduction.

Short Headlines (5 — max 30 chars each):
H1: Still Evaluating TMS?           (25 chars) ✓
H2: See Ramco TMS in 30 Minutes     (29 chars) ✓
H3: Book Your Personalised Demo     (29 chars) ✓
H4: TMS Built for 3PLs              (20 chars) ✓
H5: Cut Transport Costs Today       (27 chars) ✓

Long Headline (1 — max 90 chars):
"Still researching TMS software? See how Ramco cuts transport costs for 3PLs — book a demo." (90 chars) ✓

Descriptions (3 — max 90 chars each):
D1: "You visited our TMS page. Ready to see it live? 30-minute personalised demo — book today." (89 chars) ✓
D2: "3PLs using Ramco TMS cut cost per shipment & eliminate billing disputes. See it in action." (90 chars) ✓
D3: "Integrated TMS + WMS + Fleet on one platform. Built exclusively for 3PLs. Book your demo." (89 chars) ✓

Business Name: Ramco Systems

---
### RDA SET 2: WMS Retargeting (Campaign GD2)
Audience: Visited WMS page, did not book demo
Tone: Reminder — skip introduction, go straight to value.

Short Headlines (5 — max 30 chars each):
H1: Still Evaluating WMS?           (25 chars) ✓
H2: See Ramco WMS in 30 Minutes     (29 chars) ✓
H3: Book Your Personalised Demo     (29 chars) ✓
H4: WMS Built for 3PLs              (20 chars) ✓
H5: Improve Warehouse Throughput    (29 chars) ✓

Long Headline (1 — max 90 chars):
"Researching WMS? See how Ramco improves warehouse efficiency for 3PLs — book your demo." (86 chars) ✓

Descriptions (3 — max 90 chars each):
D1: "You visited our WMS page. Ready to see it live? 30-minute personalised demo — book today." (89 chars) ✓
D2: "3PLs using Ramco WMS report higher throughput, fewer errors & lower labour costs. See it." (89 chars) ✓
D3: "Multi-client warehouse management for 3PLs. Integrates with TMS + Fleet. Book your demo." (88 chars) ✓

Business Name: Ramco Systems

---
### RDA SET 3: Report Downloaders (Campaign GD3)
Audience: Downloaded a report — did not book demo
Tone: Warm follow-up. They know Ramco. Move them to next step.

Short Headlines (5 — max 30 chars each):
H1: Ready for the Next Step?        (28 chars) ✓
H2: See the Platform in Action      (28 chars) ✓
H3: Book Your Personalised Demo     (29 chars) ✓
H4: From Report to Real Results     (28 chars) ✓
H5: 30-Minute Live Walkthrough      (28 chars) ✓

Long Headline (1 — max 90 chars):
"You downloaded our 3PL report. Ready to see how Ramco delivers these results live?" (82 chars) ✓

Descriptions (3 — max 90 chars each):
D1: "You already know the benchmarks. Now see how Ramco delivers them for 3PLs — book a demo." (88 chars) ✓
D2: "The report showed what's possible. See how in a 30-min personalised Ramco demo." (79 chars) ✓
D3: "TMS + WMS + Fleet for 3PLs. See the platform behind the benchmarks. Book a demo." (80 chars) ✓

Business Name: Ramco Systems

---
### RDA SET 4: All Product Pages (Campaign GD4)
Audience: Visited any product page — coldest retargeting audience
Tone: Value reminder. Re-introduce Ramco's core proposition.

Short Headlines (5 — max 30 chars each):
H1: Ramco — Built for 3PLs          (25 chars) ✓
H2: See Ramco in 30 Minutes         (27 chars) ✓
H3: TMS + WMS + Fleet — One App     (27 chars) ✓
H4: Book a Personalised Demo        (27 chars) ✓
H5: Trusted by APAC 3PLs            (23 chars) ✓

Long Headline (1 — max 90 chars):
"The only integrated TMS + WMS + Fleet platform built exclusively for 3PLs. Book a demo." (87 chars) ✓

Descriptions (3 — max 90 chars each):
D1: "Still researching logistics software? Ramco is built for 3PLs. Book a 30-min demo." (83 chars) ✓
D2: "3PLs using Ramco cut transport costs & scale faster. See how in a personalised demo." (84 chars) ✓
D3: "Trusted by 3PL leaders across APAC & Middle East. See the platform live. Book your demo." (88 chars) ✓

Business Name: Ramco Systems

---
### IMAGE SPECS FOR DISPLAY ADS
Send these specs to your design team. You need all 3 sizes per ad set.

Required sizes:
- 1200 x 628 px (landscape — most common placement)
- 1200 x 1200 px (square — social and display)
- 628 x 1200 px (portrait — mobile)

Design guidelines:
- Background: Ramco brand colour (not white — white blends into page)
- Include: Ramco logo top left
- Include: One outcome headline in large text centre
  Examples: "Built for 3PLs" / "TMS + WMS + Fleet — One Platform" /
  "Cut Transport Costs by 20%+"
- Include: One CTA button bottom right: "Book a Demo"
- Do NOT include: Small text, busy backgrounds, stock warehouse photos
- Keep it simple — display ads are seen for 2-3 seconds maximum
---

## LINKEDIN RETARGETING — CAMPAIGN STRUCTURE

LinkedIn retargeting is more expensive than Google Display but
significantly more precise — you can see the company and title
of who is clicking. For $150k+ ACV enterprise deals this precision
is worth the higher CPL.

Build exactly these 3 LinkedIn retargeting campaigns.

---
CAMPAIGN LI1: LinkedIn | Retargeting | TMS + WMS | Warm Visitors
Goal: Book a Demo
Objective: Website conversions
Bid Strategy: Maximum delivery to start — switch to Manual CPC
  after 50+ clicks
Daily Budget: $50 USD/day
Audience: L1 (TMS Page Visitors) + L2 (WMS Page Visitors) combined
  AND narrowed by: L5 (TAL Upload — Tier 1 + Tier 2 accounts)
  This means: only retarget website visitors who are ALSO from
  your target account list
Title targeting: CIO, VP IT, Director IT, COO, VP Operations,
  Head of Transportation, Head of Warehousing, CEO, President
  (Add all — you are retargeting known visitors, cast wide net
  within your personas)
Location: Australia, Indonesia, Saudi Arabia
Frequency cap: 4 impressions per member per week
  (LinkedIn weekly cap — do not exceed this)
Ad format: Single image ads + Message ads (alternate — see Step 8)

---
CAMPAIGN LI2: LinkedIn | Retargeting | Report Downloaders | Warm
Goal: Book a Demo
Objective: Website conversions
Bid Strategy: Maximum delivery to start
Daily Budget: $30 USD/day
Audience: L3 (Report Downloaders)
  AND narrowed by: L5 (TAL Upload)
Title targeting: Same as LI1
Location: Australia, Indonesia, Saudi Arabia
Frequency cap: 2 impressions per member per week
  (Warmer audience — lighter frequency, higher personalisation)
Ad format: Message ads preferred for this warm audience (see Step 8)

---
CAMPAIGN LI3: LinkedIn | Retargeting | All Product Pages | Cold
Goal: Book a Demo — secondary goal: content engagement
Objective: Website conversions
Bid Strategy: Maximum delivery
Daily Budget: $30 USD/day
Audience: L4 (All Product Pages)
  AND narrowed by: L5 (TAL Upload)
  EXCLUDE: L1 + L2 + L3 (TMS, WMS, Report audiences have own campaigns)
Title targeting: Same as LI1
Location: Australia, Indonesia, Saudi Arabia
Frequency cap: 2 impressions per member per week
Ad format: Single image ads (see Step 8)
---

## LINKEDIN RETARGETING AD COPY

LinkedIn uses two ad formats for retargeting.
Use both — they appear in different places and complement each other.

FORMAT 1: Single Image Ads
Appear in the LinkedIn feed. Include introductory text, image, headline, CTA.

FORMAT 2: Message Ads (formerly InMail)
Delivered directly to LinkedIn inbox. Higher perceived personalisation.
Use only for warm audiences (report downloaders, TMS/WMS page visitors).
LinkedIn limits Message Ads to 1 per member per 30 days per sender.

---
### SINGLE IMAGE AD SET 1: TMS + WMS Warm Visitors (Campaign LI1)

Introductory text (max 150 chars):
"Still evaluating logistics software for your 3PL? See how Ramco's integrated TMS + WMS + Fleet platform works — 30-minute live demo."
(132 chars) ✓

Headline (max 70 chars):
"See Ramco TMS + WMS in Action — Book a 30-Minute Demo"
(54 chars) ✓

Image: Use 1200 x 627 px brand image — "Built for 3PLs" headline version

CTA button: Book a demo

Destination URL: ramco.com/products/logistics-software/transportation-management-tms/

---
### SINGLE IMAGE AD SET 2: Report Downloaders (Campaign LI2)

Introductory text (max 150 chars):
"You downloaded our 3PL logistics report. The next step is seeing how Ramco delivers those results in your operation — 30-min live demo."
(134 chars) ✓

Headline (max 70 chars):
"From Benchmarks to Results — See Ramco Live in 30 Minutes"
(57 chars) ✓

Image: Use 1200 x 627 px brand image — "TMS + WMS + Fleet — One Platform" version

CTA button: Book a demo

Destination URL: ramco.com/products/logistics-software/

---
### SINGLE IMAGE AD SET 3: All Product Pages Cold (Campaign LI3)

Introductory text (max 150 chars):
"Ramco is the only integrated TMS + WMS + Fleet platform built exclusively for 3PLs. Trusted across APAC and the Middle East. See it live."
(136 chars) ✓

Headline (max 70 chars):
"The Only Integrated Logistics Platform Built for 3PLs — Book a Demo"
(67 chars) ✓

Image: Use 1200 x 627 px brand image — "Trusted by APAC 3PL Leaders" version

CTA button: Book a demo

Destination URL: ramco.com/products/logistics-software/

---
### MESSAGE ADS — For Warm Audiences Only (Campaigns LI1 + LI2)

MESSAGE AD M1: For TMS/WMS Page Visitors (Campaign LI1)
Sender: Use a named Ramco AE or regional sales lead (not a generic company page)
  Message ads from a real person get 3x higher open rates than company senders.

Subject line (max 60 chars):
"Quick question about your TMS evaluation"
(40 chars) ✓

Message body (max 500 chars):
"Hi [First Name],

I noticed you recently explored Ramco's TMS platform.

Most 3PL operations leaders we speak with are evaluating 2-3 vendors right now — and the biggest challenge is seeing how each platform handles the complexity of their specific operation.

If that's where you are, I'd like to offer a 30-minute personalised walkthrough of Ramco TMS for [REGION] 3PLs specifically.

No pitch — just a live demo configured to your operation type.

Would [DAY] or [DAY] work for a quick call?

[AE FIRST NAME]
Ramco Systems"
(496 chars) ✓

CTA button text: Book a Demo
CTA URL: ramco.com demo booking page

---
MESSAGE AD M2: For Report Downloaders (Campaign LI2)
Sender: Named Ramco AE

Subject line (max 60 chars):
"Following up on the 3PL Technology Report"
(41 chars) ✓

Message body (max 500 chars):
"Hi [First Name],

You recently downloaded our 3PL Technology Benchmarking Report — thank you for your interest.

Many operations leaders who read the report ask us one question: how do leading 3PLs actually implement this in practice?

The fastest way to answer that is a 30-minute live walkthrough of how Ramco delivers these outcomes for 3PLs in [REGION].

I'd like to set that up for you — personalised to your operation type and team size.

Would [DAY] or [DAY] work?

[AE FIRST NAME]
Ramco Systems"
(497 chars) ✓

CTA button text: Book a Demo
CTA URL: ramco.com demo booking page

Note: Personalise [REGION], [DAY], [DAY], and [AE FIRST NAME]
before sending. LinkedIn Message Ads support some dynamic fields
but manual review before activation is recommended.
---

## AUDIENCE SEQUENCING LOGIC

Retargeting works best when ad messages change as the prospect
moves through the funnel. Do not show the same ad to someone
for 90 days — match the message to where they are.

---
### THE 3-STAGE RETARGETING SEQUENCE

STAGE 1 — Days 1 to 14 after visit: VALUE REMINDER
Goal: Remind them what Ramco does. Re-establish relevance.
Message angle: "Here is what you were looking at"
Ad format: Single image display + LinkedIn single image
Audience: All 4 audience types
Example headline: "Still Evaluating TMS?" / "Built for 3PLs"

STAGE 2 — Days 15 to 45 after visit: PROOF + DIFFERENTIATION
Goal: Show evidence. Give them a reason to act now.
Message angle: "Here is proof it works for 3PLs like yours"
Ad format: LinkedIn single image + Google Display
Audience: Audiences who saw Stage 1 but did not convert
Example headline: "3PLs Using Ramco Cut Costs by 20%+" /
  "See How [REGION] 3PLs Use Ramco"
How to build this in Google Ads:
  Create a new audience: people in G1 who also visited the site
  more than 14 days ago
  Exclude: anyone who converted (booked demo)

STAGE 3 — Days 46 to 90 after visit: DIRECT ASK
Goal: Make a clear, direct ask for the demo.
Message angle: "You have been researching long enough — let us show you"
Ad format: LinkedIn Message Ad + Google Display
Audience: Audiences who saw Stages 1 and 2 but did not convert
Example headline: "Ready to See Ramco Live?" /
  "Book a 30-Min Demo — No Commitment"
How to build this in Google Ads:
  Create audience: visited site 45+ days ago, still in membership window
  Exclude: converted audiences

---
### HOW TO BUILD STAGE AUDIENCES IN GOOGLE ADS

Stage 2 Audience (Days 15-45):
Go to Audience Manager → + New Audience → Combined Audience
  Rule 1: INCLUDE Audience G1 (TMS Page Visitors 90d)
  Rule 2: EXCLUDE anyone who visited site in last 14 days
  Rule 3: EXCLUDE Audience G5 (Existing Customers)
  Rule 4: EXCLUDE [Demo thank-you page visitors]
Name: "Ramco | TMS | Stage 2 | Days 15-45"

Stage 3 Audience (Days 46-90):
Go to Audience Manager → + New Audience → Combined Audience
  Rule 1: INCLUDE Audience G1 (TMS Page Visitors 90d)
  Rule 2: EXCLUDE anyone who visited site in last 45 days
  Rule 3: EXCLUDE all converted audiences
Name: "Ramco | TMS | Stage 3 | Days 46-90"

Repeat this for WMS, Report Downloaders, and All Product Pages audiences.

---
### HubSpot INTEGRATION FOR RETARGETING

Every retargeting conversion (demo booked) must flow into HubSpot.

Tag each contact with:
  Source: Retargeting
  Platform: Google Display / LinkedIn Retargeting
  Audience: [Which audience triggered the retargeting]
  Original Source: [What they did before retargeting — visited TMS page etc]

This allows you to report on:
  "How many demos came from retargeting vs cold search?"
  "Which retargeting audience has the highest demo-to-opp rate?"
  "What was the average days between first visit and demo booking?"

Build this report in HubSpot:
  Go to Reports → Create Report → Contacts
  Filter: Original Source = Paid Social OR Paid Search
  Add column: Create Date, Deal Stage, Days to First Deal
  Group by: Source drill-down (Google Display vs LinkedIn Retargeting)
---

## CLAUDE PROMPTS FOR THIS SKILL

### Prompt 1 — Generate Retargeting Ad Copy for a New Audience
Use this when adding a new audience segment or expanding to Philippines.

---PROMPT START---
You are a digital advertising copywriter for Ramco Systems.
Ramco sells enterprise logistics software (TMS and WMS) to 3PL companies
with $100M+ revenue. ACV is $150k+. Sales cycle is 180+ days.
Conversion goal: Book a Demo.

Read inputs/persona-definitions.md before writing.

Generate retargeting ad copy for:
Platform: [REPLACE: Google Display / LinkedIn Single Image / LinkedIn Message Ad]
Audience: [REPLACE: TMS Page Visitors / WMS Page Visitors /
           Report Downloaders / All Product Pages]
Stage: [REPLACE: Stage 1 Value Reminder / Stage 2 Proof / Stage 3 Direct Ask]
Region: [REPLACE: Australia / Indonesia / Saudi Arabia / Philippines]
Persona: [REPLACE: CIO / COO / CEO]

For Google Display — deliver:
- 5 short headlines (max 30 chars each — flag if over)
- 1 long headline (max 90 chars — flag if over)
- 3 descriptions (max 90 chars each — flag if over)
- Business name: Ramco Systems

For LinkedIn Single Image Ad — deliver:
- Introductory text (max 150 chars)
- Headline (max 70 chars)
- CTA button text (max 4 words)
- Destination URL from ramco.com

For LinkedIn Message Ad — deliver:
- Subject line (max 60 chars)
- Message body (max 500 chars)
- CTA button text (max 4 words)
- Tone: peer-to-peer from a named AE, not corporate

Rules:
- Stage 1 tone: reminder and relevance — do not pitch hard
- Stage 2 tone: proof and social evidence — use outcomes and numbers
- Stage 3 tone: direct and confident — clear ask for the demo
- Regional context must appear at least once
- Never use: world-class, cutting-edge, revolutionary, seamless
---PROMPT END---

### Prompt 2 — Diagnose Low Retargeting Conversion Rate
Use this when retargeting campaigns have clicks but demos are not converting.
Get data from: Google Ads → Campaigns → filter by campaign name.

---PROMPT START---
My retargeting campaign for Ramco Logistics Software has low conversion rate.

Campaign details:
Platform: [REPLACE: Google Display / LinkedIn]
Audience type: [REPLACE: TMS Page Visitors / WMS Page Visitors / Report Downloaders]
Campaign stage: [REPLACE: Stage 1 / Stage 2 / Stage 3]
Clicks this month: [REPLACE]
Demos booked: [REPLACE]
Conversion rate: [REPLACE]% — target is above 5% for retargeting

Current ad headlines running (top by impressions):
1. [REPLACE]
2. [REPLACE]
3. [REPLACE]

Current landing page URL: [REPLACE]
Demo form conversion rate on landing page: [REPLACE]%

Diagnose why conversions are low and give me:
1. Most likely root cause (ad message / landing page / audience quality / frequency)
2. 3 specific ad copy changes to test this week
3. Whether the landing page needs to change and what specifically
4. Whether the audience definition needs to change
5. One structural campaign change to improve conversion rate
---PROMPT END---

### Prompt 3 — Monthly Retargeting Audit
Run this at the end of every month using Google Ads + LinkedIn + HubSpot data.

---PROMPT START---
I am running retargeting campaigns for Ramco Logistics Software.
Here is my monthly performance data:

Google Display retargeting (from Google Ads dashboard):
Campaign | Impressions | Clicks | CTR | Conversions | Cost | CPA
[PASTE YOUR DATA HERE]

LinkedIn retargeting (from LinkedIn Campaign Manager):
Campaign | Impressions | Clicks | CTR | Conversions | Cost | CPL
[PASTE YOUR DATA HERE]

HubSpot retargeting pipeline (from HubSpot Paid Source report):
Demos from retargeting: [NUMBER]
Opps created from retargeting demos: [NUMBER]
Pipeline value from retargeting: [VALUE]

Based on this data answer:
1. Which retargeting campaign has the best demo-to-opp rate?
2. Which campaigns should I increase budget on?
3. Which campaigns should I pause or reduce?
4. Is the 3-stage sequence working — are Stage 3 audiences converting
   at a higher rate than Stage 1?
5. What is my actual cost per pipeline opportunity from retargeting?
6. Three specific changes to make next month.
---PROMPT END---
---

## METRICS

| Metric | Target | Platform | Review Frequency |
|--------|--------|----------|-----------------|
| Google Display CTR | Above 0.35% | Google Ads | Weekly |
| Google Display Cost per Demo | Below $400 | Google Ads | Weekly |
| LinkedIn Retargeting CTR | Above 0.6% | LinkedIn CM | Weekly |
| LinkedIn Message Ad open rate | Above 30% | LinkedIn CM | Weekly |
| LinkedIn Message Ad reply rate | Above 8% | LinkedIn CM | Weekly |
| LinkedIn Cost per Demo | Below $600 | LinkedIn CM | Weekly |
| Retargeting Demo to Opp rate | Above 25% | HubSpot | Monthly |
| Stage 3 conversion rate | Above 5% | Google Ads | Monthly |
| Frequency — Google Display | Below 3 per day | Google Ads | Weekly |
| Frequency — LinkedIn | Below 4 per week | LinkedIn CM | Weekly |
| Audience size — minimum | Above 1000 Google, 300 LinkedIn | Both | Weekly |

## FAILURE MODES

Failure 1: Retargeting existing customers
Result: Wastes budget. Confuses and annoys people who already pay you.
Fix: Always add Audience G5 (Existing Customers) as an exclusion
  to every retargeting campaign before going live.
  Check this exclusion is applied every time you create a new campaign.

Failure 2: Audience size too small to run
Result: Google Display needs 1000+ users. LinkedIn needs 300+ members.
  Below these thresholds campaigns will not run or will have very limited reach.
Fix: Wait for audiences to grow before activating campaigns.
  Meanwhile run only LinkedIn Matched Audience (TAL upload) which
  does not require website traffic to populate.

Failure 3: Showing the same ad for 90 days straight
Result: Ad fatigue. CTR drops every week. Brand starts to feel like spam.
Fix: Implement the 3-stage sequence from Step 9.
  Change message every 14-30 days. Rotate creative monthly.
  Set frequency caps: max 3 impressions per day on Display,
  max 4 per week on LinkedIn.

Failure 4: Retargeting without TAL narrowing on LinkedIn
Result: LinkedIn retargeting shows ads to any professional who visited
  the site — including competitors, job seekers, students, analysts.
  Budget wasted on non-ICP visitors.
Fix: Always narrow LinkedIn audiences with L5 (TAL Upload).
  INCLUDE: Website visitors who are ALSO from target accounts.
  This is set in the Audience section of LinkedIn Campaign Manager.

Failure 5: Sending retargeting clicks to the homepage
Result: Visitor sees a generic page. Loses connection to what they
  originally viewed. Conversion rate drops significantly.
Fix: Send TMS audience clicks to TMS page.
  Send WMS audience clicks to WMS page.
  Send Report Downloader clicks to a dedicated follow-up page
  that references the report they downloaded.

Failure 6: Not excluding converted audiences
Result: You keep spending money retargeting people who already booked
  a demo or are already in your HubSpot pipeline as active deals.
Fix: Create a converted audience in Google Ads:
  URL contains: [demo thank-you page]
  Exclude this from all retargeting campaigns.
  In LinkedIn: exclude anyone who submitted a Lead Gen Form.
  Review exclusions monthly and update as new conversion pages are added.

## HOW THIS SKILL CONNECTS TO OTHER SKILLS

Skill 09 (Google Search) → generates first visit traffic to TMS/WMS pages
                ↓
Skill 02 (LinkedIn Outbound) → drives profile visits and website visits
                ↓
Skill 11 (Retargeting) → re-engages visitors who did not convert
                ↓
Demo booked → HubSpot contact tagged with full source journey
                ↓
Skill 04 (Email Nurture Track 2) → activated for demo-booked contacts
                ↓
Skill 06 (Sales Enablement) — AE follows up within 24 hours
---
