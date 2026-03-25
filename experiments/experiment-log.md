# Experiment Log — Ramco Logistics Software Marketing
## Systematic Testing and Learning System

> **Purpose:** Track every controlled experiment the marketing team runs, record results with statistical rigour, and systematically promote winning variants into the live skill files so the whole team benefits from what we learn.
> **Owner:** Campaign Marketing Manager (log maintenance) + channel owners (experiment execution)
> **Rule:** No experiment result — win or loss — is wasted. Every completed experiment gets a documented learning and an action. "No significant difference" is still a result worth recording.
> **Update frequency:** Update status and interim data weekly for active experiments. Add results within 5 business days of an experiment closing.

---

## Part 1 — How Experiments Work Here

### The Experiment Discipline

Running experiments without discipline produces noise, not insight. Three rules govern every experiment in this system:

**Rule 1: One variable at a time.** Change the subject line OR the CTA OR the send time — never two things simultaneously. If you change two variables and see a result, you don't know which variable caused it. That result is worthless for future decisions.

**Rule 2: Decide the success metric before you start.** The metric that determines the winner is fixed when the experiment is designed, not after the results come in. Post-hoc metric selection is how confirmation bias produces false positives that waste the team's time.

**Rule 3: Reach significance before promoting a winner.** A 3% lift with a p-value of 0.3 is noise. A 6% lift with p ≤ 0.05 is a finding. Use the sample size calculator in Part 2 before launching an experiment so you know how long to run it.

### What Gets Tested

Good candidates for experiments:
- Email subject lines and preview text (high volume, fast feedback)
- LinkedIn Touch 1 message opening line or framing
- CTA copy and placement in emails
- LinkedIn ad headline and creative angle
- Event follow-up timing (24 hours vs. 48 hours)
- Landing page form length or headline
- SDR sequence send time (day of week, time of day)
- Report findings used as conversation openers

Poor candidates for experiments (too slow to read / too many confounding variables):
- Full sales sequences end-to-end (180-day sales cycle makes attribution impossible)
- Complete LinkedIn campaign strategy (too many variables)
- Persona targeting at the account level

---

## Part 2 — Statistical Significance Rules

### Minimum Requirements to Call a Winner

An experiment result is only valid if ALL of the following conditions are met:

| Requirement | Threshold | Why It Matters |
|---|---|---|
| Sample size (each variant) | ≥ 100 contacts/impressions per variant | Below 100, random variation is too large to distinguish from real differences |
| Test duration | ≥ 7 days (email / LinkedIn sequences); ≥ 14 days (LinkedIn paid) | Prevents day-of-week bias; ensures you're measuring steady-state, not a day-1 novelty effect |
| Statistical significance | p ≤ 0.05 (95% confidence) | This means there is at most a 5% probability the result was caused by random chance |
| Minimum detectable effect | ≥ 10% relative lift for email open rate; ≥ 15% for CTR; ≥ 20% for conversion rate | Lifts smaller than these are real but not commercially significant enough to act on |

### How to Calculate Significance (Without a Statistics Degree)

Use this free tool: **[Neil Patel A/B Testing Calculator](https://neilpatel.com/ab-testing-calculator/)** or any equivalent two-proportion z-test calculator.

**Input fields:**
- Visitors/Impressions (variant A): [sample size A]
- Conversions (variant A): [open count A / click count A / form submission count A]
- Visitors/Impressions (variant B): [sample size B]
- Conversions (variant B): [open count B / click count B / form submission count B]

**Interpreting the output:**
- p-value ≤ 0.05: Result is statistically significant. The variant with the higher conversion rate is the winner.
- p-value 0.06–0.10: Borderline. Extend the experiment for another week if possible. Do not call a winner yet.
- p-value > 0.10: No significant difference. Record as "No significant result." Do not promote either variant based on this experiment. Run again with a larger sample or test a more dramatically different variable.

### Sample Size Reference Table

How many contacts/impressions do you need before starting? Use this table to estimate:

| Baseline conversion rate | Minimum detectable lift | Minimum sample per variant |
|---|---|---|
| 20% (email open rate) | 15% relative (i.e., 20% → 23%) | 650 per variant |
| 20% (email open rate) | 25% relative (i.e., 20% → 25%) | 240 per variant |
| 5% (email CTR) | 20% relative (i.e., 5% → 6%) | 1,900 per variant |
| 5% (email CTR) | 40% relative (i.e., 5% → 7%) | 500 per variant |
| 0.5% (LinkedIn CTR) | 50% relative (i.e., 0.5% → 0.75%) | 10,000 impressions per variant |
| 30% (LinkedIn connection accept) | 20% relative (i.e., 30% → 36%) | 400 per variant |
| 1.5% (landing page conversion) | 30% relative (i.e., 1.5% → 1.95%) | 2,500 per variant |

**Practical implication for Ramco:** With a relatively small ICP (3PL companies, $100M+ revenue, 4 regions), sample sizes for conversion rate experiments are the limiting constraint. Prioritise experiments where you can reach 100+ per variant quickly — email subject lines on a warm list and LinkedIn ad CTR at scale.

---

## Part 3 — Master Experiment Log

### Active Experiments

| ID | Started | Channel | Hypothesis | Variant A (Control) | Variant B (Test) | Sample Target | Owner | Status |
|---|---|---|---|---|---|---|---|---|
| EXP-001 | 6 May 2026 | Email (nurture sequence) | Pain-led subject lines will outperform curiosity-led subject lines on open rate for the COO persona | "Why 3PL billing leakage is harder to find than you think" | "The metric your COO peers are tracking that you're probably not" | 200 per variant | Campaign Marketing Manager | Active |
| EXP-002 | 6 May 2026 | LinkedIn outbound (SDR) | A Touch 1 message that leads with a relevant industry stat will get higher acceptance + positive reply than one that leads with a peer reference | Stat-led: "I saw a finding in a recent 3PL benchmark study that made me think of [company]..." | Peer-led: "I've been working with a few 3PL operators in [region] at similar scale to [company]..." | 100 T1 connections per variant (split by SDR) | SDR Lead | Active |
| EXP-003 | 6 May 2026 | Email (nurture — Email 3) | A CTA offering a specific, time-boxed conversation ("20-minute operational walkthrough built around your freight profile") will convert better than a generic meeting link | Generic: "Book a time to speak with our team" + Calendly link | Specific: "Book a 20-minute walkthrough — I'll build it around your freight type and customer profile" + Calendly link | 200 per variant | Campaign Marketing Manager | Active |
| EXP-004 | 6 May 2026 | LinkedIn Paid (Sponsored Content) | An ad headline that leads with a specific quantified cost ("$2–5M in recoverable EBITDA") will outperform one that leads with a competitive framing ("Win the contracts your competitors are winning") for the CEO persona | Control headline: "Win the Enterprise Contracts Your Competitors Are Winning" | Test headline: "Most $150M–$300M 3PL Operators Have $2–5M in Recoverable EBITDA. Here's Where It's Going." | 10,000 impressions per variant | Campaign Marketing Manager | Active |
| EXP-005 | 6 May 2026 | Event outreach (post-event email) | Sending the post-event follow-up email within 6 hours of the event close (same day) will produce a higher open rate than sending it the following morning | Control: Follow-up sent next business morning (9am local time) | Test: Follow-up sent within 6 hours of the last session of the event ending | 60 event contacts per variant (split across SCLAA and Saudi Logistics Expo) | AU AE / SA AE | Active |

### Completed Experiments

*(Fill in as experiments conclude — see template in Part 4)*

| ID | Closed | Channel | Hypothesis | Winner | Lift | Confidence | Action Taken | Skill File Updated |
|---|---|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — | — | — |

---

## Part 4 — Experiment Detail Records

---

### EXP-001 — Email Subject Line: Pain-Led vs. Curiosity-Led (COO Persona)

**Status:** Active
**Started:** 6 May 2026
**Expected close:** When each variant reaches 200 sends and ≥ 7 days have elapsed
**Owner:** Campaign Marketing Manager
**Channel:** HubSpot email nurture — Email 2 (Day 3) of the ICP nurture sequence

---

**Hypothesis:**
> If we use a pain-led subject line that references a specific 3PL operational cost (billing leakage), then the open rate for the COO persona will be higher than a curiosity-led subject line, because COO contacts respond to specific operational language over abstract intrigue.

**Variable being tested:** Email subject line (and preview text)
**Everything else is identical:** Same body copy, same CTA, same send time, same persona segment

**Variant A — Control (Curiosity-led):**
- Subject: `The metric your COO peers are tracking that you're probably not`
- Preview text: `What the best-performing 3PL operators measure that most don't`

**Variant B — Test (Pain-led):**
- Subject: `Why 3PL billing leakage is harder to find than you think`
- Preview text: `Most 3PLs lose 2–5% of freight under management to billing errors. Here's why it doesn't show up on a P&L.`

**Audience:** COO/VP Ops/Head of Transport contacts who have downloaded the 3PL Transformation Report and entered the ICP nurture sequence. Country = any.

**How to split in HubSpot:**
- Create two versions of Email 2 in the nurture workflow
- Use HubSpot's A/B email test feature (50/50 split)
- Set winner criteria: manually review after 7 days and ≥ 200 total sends

**Success metric (primary):** Open rate (Variant B open rate > Variant A open rate by ≥ 15% relative lift)
**Success metric (secondary):** CTR on the email body link (same 15% relative lift threshold)
**Sample size required:** 200 per variant (400 total) — see sample size table, 20% baseline open rate, 25% relative lift detection

**Interim data (update weekly):**

| Date | Variant A sends | Variant A open rate | Variant B sends | Variant B open rate | p-value | Status |
|---|---|---|---|---|---|---|
| Week 1 | | | | | | Interim — do not call winner |
| Week 2 | | | | | | Interim — do not call winner |
| Final | | | | | | Call winner if p ≤ 0.05 |

**Result:** *(Fill in on close)*
**Winner:** *(Variant A / Variant B / No significant difference)*
**Action:** *(Update Email 2 subject line in HubSpot sequence / Run follow-up experiment / No action)*
**Skill file to update:** `/skills/activation/skill-04-email-nurture-sequences.md` — Email 2 subject line
**Prompt file to update:** None (the nurture sequence is a live HubSpot email, not a prompt)

---

### EXP-002 — LinkedIn Touch 1: Stat-Led vs. Peer-Led Opening (T1 COO/CEO Persona)

**Status:** Active
**Started:** 6 May 2026
**Expected close:** When each variant reaches 100 connection requests and ≥ 14 days have elapsed
**Owner:** SDR Lead
**Channel:** LinkedIn SDR outreach — Touch 1 connection request message (COO and CEO personas only)

---

**Hypothesis:**
> If the Touch 1 LinkedIn message opens with a specific industry benchmark statistic from the 3PL report (stat-led), the connection acceptance rate and positive reply rate will be higher than a message that opens with a peer operator reference (peer-led), because the stat creates curiosity and feels less like a sales opener.

**Variable being tested:** First sentence framing and opening hook of Touch 1
**Everything else is identical:** Same tone, same length (under 300 characters), same lack of pitch

**Variant A — Control (Peer reference-led):**
*(Full message — AU COO example; regional variants follow the same A/B split)*
> Hi [First Name], I've been working with a few 3PL operators in Australia at similar scale to [Company] — the ones running multi-client transport and warehouse together. Interesting to compare notes on how you're handling the visibility and billing side of operations. Happy to connect?

**Variant B — Test (Stat / insight-led):**
*(Full message — AU COO example; regional variants follow the same A/B split)*
> Hi [First Name], we recently published a benchmark study of 200+ 3PL operators across Australia and Southeast Asia — one of the findings surprised us. Thought it might be relevant to what you're managing at [Company]. Happy to connect and share?

**Regional execution:**
- AU SDR: sends Variant A to the first 50 COO/CEO T1 contacts in their sequence; Variant B to the next 50
- SA SDR: same split
- ID and PH SDRs: combined, same split — 50 A / 50 B

**Important:** SDRs must NOT split the same account across variants. If Linfox COO receives Variant A, all Linfox contacts in T1 receive Variant A. This prevents cross-contamination within the same account.

**Success metric (primary):** Connection acceptance rate (Variant B accept rate > Variant A by ≥ 20% relative lift — e.g., 30% → 36%)
**Success metric (secondary):** Positive reply rate within 7 days of acceptance
**Sample size required:** 100 per variant (200 total) — see sample size table

**How to track in HubSpot:**
- Create two SDR message templates in HubSpot: `Touch 1 — Variant A — COO/CEO` and `Touch 1 — Variant B — COO/CEO`
- When logging connection request sent: note which template was used in the activity log
- After 14 days: count connection requests sent vs. accepted for each template across all SDRs
- Calculate acceptance rate per variant; run significance test

**Interim data (update weekly):**

| Date | Variant A sent | Variant A accepted | Accept rate A | Variant B sent | Variant B accepted | Accept rate B | p-value |
|---|---|---|---|---|---|---|---|
| Week 1 | | | | | | | Interim |
| Week 2 | | | | | | | Call if p ≤ 0.05 |

**Result:** *(Fill in on close)*
**Winner:** *(Variant A / Variant B / No significant difference)*
**Action:** *(Update Touch 1 template in all regional SDR sequences / Run follow-up / No action)*
**Skill file to update:** `/prompts/outbound/linkedin-sequence-coo.md` and `/prompts/outbound/linkedin-sequence-ceo.md` — Touch 1 opening line for all regions

---

### EXP-003 — Email CTA: Generic Meeting Link vs. Specific Framed Offer (ICP Nurture, Email 3)

**Status:** Active
**Started:** 6 May 2026
**Expected close:** When each variant reaches 200 sends and ≥ 7 days have elapsed
**Owner:** Campaign Marketing Manager
**Channel:** HubSpot email nurture — Email 3 (Day 7) of the ICP nurture sequence

---

**Hypothesis:**
> If the CTA in Email 3 frames the meeting as a specific, personalised, time-boxed offer ("20-minute walkthrough built around your freight profile") rather than a generic meeting invitation, the meeting booking rate will be higher, because specificity reduces perceived risk and sets clearer expectations for the prospect.

**Variable being tested:** CTA copy and framing only
**Everything else is identical:** Same email body, same send time, same persona, same region

**Variant A — Control (Generic):**
- CTA text: `Book a time to speak with our team →`
- Button: `Book a meeting`
- Link: Calendly/HubSpot meeting link (generic team calendar)

**Variant B — Test (Specific and framed):**
- CTA text: `If any of this matches what you're dealing with, I'd suggest a 20-minute walkthrough — I'll build it around your freight type and customer profile. No slides, no generic demo.`
- Button: `Book a 20-minute walkthrough`
- Link: Same Calendly/HubSpot meeting link

**Audience:** All ICP-matched contacts in the Email 3 nurture step, any region, any persona (CIO / COO / CEO)
**Split:** 50/50 HubSpot A/B email test

**Success metric (primary):** Meeting booking rate (clicks that result in a confirmed Calendly/HubSpot meeting) — Variant B booking rate > Variant A by ≥ 20% relative lift
**Success metric (secondary):** Email CTR (click on any link in the email) — secondary only; booking rate is the primary
**Sample size required:** 200 per variant — note: meeting booking rate will be low (1–2% baseline); this experiment may need longer to reach significance

**Tracking note:** HubSpot tracks email clicks but not Calendly bookings natively. Configure a HubSpot tracking URL for the meeting link (use `?utm_content=cta-variant-a` and `?utm_content=cta-variant-b` as URL parameters). The booking confirmation page thank-you message should be linked to a HubSpot form submission that logs `CTA Variant` = A or B on the contact record.

**Interim data (update weekly):**

| Date | Variant A sends | Variant A CTR | Variant A bookings | Variant B sends | Variant B CTR | Variant B bookings | p-value (booking rate) |
|---|---|---|---|---|---|---|---|
| Week 1 | | | | | | | Interim |
| Week 2 | | | | | | | Interim |
| Week 3 | | | | | | | Call if p ≤ 0.05 |

**Expected close:** This experiment may run 3–4 weeks to reach significance on booking rate. Open rate and CTR will show results sooner but are secondary metrics — do not call a winner on CTR alone.

**Result:** *(Fill in on close)*
**Winner:** *(Variant A / Variant B / No significant difference)*
**Action:** *(Update Email 3 CTA in all nurture tracks / No action)*
**Skill file to update:** `/skills/activation/skill-04-email-nurture-sequences.md` — CTA copy in Email 3 of all three tracks (Technology, Operations, CEO)

---

### EXP-004 — LinkedIn Ad Headline: Quantified Cost vs. Competitive Framing (CEO Persona, Sponsored Content)

**Status:** Active
**Started:** 6 May 2026
**Expected close:** When each variant reaches 10,000 impressions and ≥ 14 days have elapsed
**Owner:** Campaign Marketing Manager
**Channel:** LinkedIn Paid — Sponsored Content, CEO persona targeting, all 4 regions

---

**Hypothesis:**
> If the LinkedIn ad headline quantifies a specific recoverable cost ("$2–5M in recoverable EBITDA") rather than framing the message competitively ("Win the contracts your competitors are winning"), the CTR will be higher for the CEO persona, because CEOs respond to tangible financial framing over vague competitive urgency.

**Variable being tested:** Ad headline only (intro text, image, and CTA button are identical across both variants)
**Everything else is identical:** Audience targeting (CEO/MD/President, 3PL companies, all 4 regions), bid strategy, daily budget

**Variant A — Control (Competitive framing):**
- Headline: `Win the Enterprise Contracts Your Competitors Are Already Winning`
- Intro text (identical to Variant B): `3PL operators across Australia, Indonesia, Saudi Arabia, and the Philippines are using technology to win RFPs that their competitors can't compete on. Ramco's 3PL Digital Maturity Benchmark shows you where the gap is.`
- Image: Report cover visual
- CTA button: `Download the Report`

**Variant B — Test (Quantified cost framing):**
- Headline: `Most $150M–$300M 3PL Operators Have $2–5M in Recoverable EBITDA. Here's Where It's Going.`
- Intro text (identical to Variant A): same
- Image: same
- CTA button: `Download the Report`

**Setup in LinkedIn Campaign Manager:**
- Create two separate ads within the same CEO Persona campaign in each region
- Set budget split: 50/50 (LinkedIn's ad rotation should handle this if both ads are in the same campaign)
- Do NOT use LinkedIn's automated A/B testing tool for this — run manually so you have full control over the pause decision
- Name ads clearly: `CEO | Headline Test | Variant A — Competitive` and `CEO | Headline Test | Variant B — Quantified Cost`

**Success metric (primary):** CTR (Variant B CTR > Variant A CTR by ≥ 15% relative lift — e.g., 0.55% → 0.63%)
**Success metric (secondary):** Report downloads (form submissions attributed to this ad) — higher CTR does not always mean better-quality clicks; track downloads as a sanity check
**Sample size required:** 10,000 impressions per variant (see sample size table — 0.5% baseline CTR, 50% relative lift detection). With a $35K LinkedIn budget for CEO layer across 4 regions, this should be reached within 2–3 weeks.

**Interim data (update weekly):**

| Date | Variant A impressions | Variant A CTR | Variant B impressions | Variant B CTR | Relative lift | p-value |
|---|---|---|---|---|---|---|
| Week 1 | | | | | | Interim — do not call |
| Week 2 | | | | | | Call if p ≤ 0.05 and 10K+ impressions each |

**Regional note:** Run this test across all 4 regions simultaneously. If the winner varies by region (e.g., quantified cost wins in AU but competitive framing wins in SA), record this as a regional insight. The skill file update should specify which headline works in which region.

**Result:** *(Fill in on close)*
**Winner:** *(Variant A / Variant B / No significant difference / Regional split)*
**Action:** *(Update CEO Sponsored Content headline in active campaigns; note any regional variation)*
**Skill file to update:** `/prompts/ads/linkedin-ad-copy-generator.md` — CEO Sponsored Content, all 4 regions, Variant 1 headline
**Prompt to update:** Add winning headline angle as recommended approach in the New Ad Variant Generator prompt

---

### EXP-005 — Event Follow-Up Timing: Same-Day (Within 6 Hours) vs. Next Morning

**Status:** Active
**Started:** 19 May 2026 (post-SCLAA) and 26 May 2026 (post-Saudi Logistics Expo)
**Expected close:** 14 days after the second event follow-up is sent
**Owner:** AU AE (SCLAA cohort) + SA AE (Saudi Logistics Expo cohort)
**Channel:** Post-event follow-up email (personalised, 1:1 from AE)

---

**Hypothesis:**
> If the post-event follow-up email is sent within 6 hours of the event ending (same day), the open rate will be higher than if it is sent the following morning at 9am, because the contact's memory of the conversation is fresher, and "same-day" sends signal responsiveness that creates a positive impression.

**Variable being tested:** Timing of post-event follow-up email only
**Everything else is identical:** The email template (referencing specific conversation + attaching report) is the same; only the send time differs

**How to split:**
- At SCLAA: AU AE randomly assigns the first 30 contacts met at the booth to Variant A (next morning, 9am AEST) and the next 30 contacts to Variant B (same day, within 6 hours)
- At Saudi Logistics Expo: SA AE does the same with the first 60 SA contacts met at the expo
- "Random" means: alternate assignment — contact 1 → A, contact 2 → B, contact 3 → A, etc. Do not self-select by quality of conversation; that introduces bias.

**Important:** This experiment requires AEs to be disciplined about the assignment and timing. For Variant B contacts, the AE must send the email from their phone before leaving the event venue on the same day. For Variant A contacts, the email is scheduled to send at 9am the next morning.

**Variant A — Control (Next morning):**
- Send time: 9:00am local time the morning after the event
- Template: Standard event follow-up email (from campaign brief, written Week 4)

**Variant B — Test (Same day, within 6 hours):**
- Send time: Within 6 hours of the final session ending (before 7pm local time — do not send after 7pm)
- Template: Same event follow-up email

**Success metric (primary):** Email open rate (Variant B open rate > Variant A by ≥ 15% relative lift)
**Success metric (secondary):** Meeting booked within 14 days of email send
**Sample size required:** 60 per variant (120 total across both events). This is below the ideal 200 per variant but is the realistic maximum given event attendance. Treat this as a directional experiment — if the result is significant, it is meaningful; if borderline, do not call a winner and repeat at the next event.

**Data collection:**
- Use HubSpot email tracking for both variants (HubSpot one-to-one email with tracking enabled)
- Tag each email in HubSpot: property `Event Follow-Up Variant` = A or B on the contact record
- After 14 days: pull open rate per variant from HubSpot email activity; pull meeting bookings per variant from HubSpot deal/task records

**Interim data:**

| Event | Variant A sent | Variant A opens | Open rate A | Variant B sent | Variant B opens | Open rate B | p-value |
|---|---|---|---|---|---|---|---|
| SCLAA (AU) | | | | | | | |
| Saudi Expo (SA) | | | | | | | |
| Combined | | | | | | | Call if p ≤ 0.05 |

**Result:** *(Fill in on close)*
**Winner:** *(Variant A / Variant B / No significant difference)*
**Action:** *(Update event follow-up timing guidance in playbook / No action / Run at next event)*
**Skill file to update:** `/skills/revenue/skill-05-event-activation-playbook.md` — Step 5 (Post-Event Follow-Up), timing instruction

---

## Part 5 — Experiment Roadmap (Planned but Not Yet Active)

These experiments are identified as high-value but have not started. Launch after Q1 active experiments close, or run in parallel if sample size allows.

| Priority | ID | Channel | What to Test | Earliest Start | Estimated Sample Needed |
|---|---|---|---|---|---|
| High | EXP-006 | LinkedIn SDR (ID/SA) | Bahasa Indonesian opener vs. English opener in Touch 1 for Indonesian T1 accounts | Q2 2026 | 80 per variant (limited by ID T1 count) |
| High | EXP-007 | LinkedIn Paid (Retargeting) | Ad format test: Single image vs. Carousel for retargeting layer (website visitors) | Q2 2026 | 5,000 impressions per variant |
| High | EXP-008 | Email (nurture) | Regional smart content vs. no regional personalisation — does showing AU-specific stat in Email 2 outperform a generic stat? | Q2 2026 | 300 per variant (all regions combined) |
| Medium | EXP-009 | LinkedIn SDR | Touch 3 framing: Insight delivery vs. direct meeting ask — which produces more positive replies? | Q2 2026 | 100 per variant |
| Medium | EXP-010 | LinkedIn Paid | Lead Gen Form vs. landing page: Do LGFs produce higher volume but lower quality MQLs than landing page forms? | Q2 2026 | 200 form completions per variant |
| Medium | EXP-011 | Email (nurture — SA) | Arabic-language subject line vs. English subject line for SA COO contacts | Q2 2026 | 100 per variant (SA segment only) |
| Low | EXP-012 | LinkedIn SDR | Connection request WITH a note vs. connection request WITHOUT a note — which gets more accepts? | Q3 2026 | 150 per variant |
| Low | EXP-013 | Events | Pre-event LinkedIn sequence: 3-touch pre-event outreach vs. no pre-event outreach — does it increase booth visits from T1 contacts? | Next major event | 40 T1 contacts per variant |

---

## Part 6 — How to Promote a Winner to the Main Skill File

When an experiment produces a statistically significant winner, the result must be written into the relevant skill file or prompt file within 5 business days. Here is the exact process:

### Step 1: Confirm the result meets the promotion criteria

Before touching any file, confirm all of the following:
- [ ] p-value ≤ 0.05 (run the significance calculator; paste the result in the experiment record)
- [ ] Minimum detectable effect was met (the relative lift is ≥ the threshold set when the experiment was designed)
- [ ] Minimum sample size was met (both variants reached the required number)
- [ ] Minimum test duration was met (≥ 7 days for email; ≥ 14 days for LinkedIn paid)
- [ ] No external confound is obvious (e.g., the test ran during a public holiday that might have skewed opens in one variant)

If all boxes are checked: proceed to promote. If any box is unchecked: do not promote. Either extend the experiment or note it as inconclusive.

### Step 2: Write the winning variant into the skill or prompt file

Open the relevant file. Find the specific section where the tested element lives. Replace the control variant with the winning variant. Do not delete the control — add a commented note:

```
<!-- Replaced [date]: EXP-[ID] — Variant B outperformed Variant A by [X]% on [metric].
     Old text: "[old variant]"
     See /experiments/experiment-log.md EXP-[ID] for full results. -->
```

Mark the change date in the file's header or a "Last Updated" line at the top.

**File update map:**

| Experiment type | File to update | Section to update |
|---|---|---|
| Email subject line | `/skills/activation/skill-04-email-nurture-sequences.md` | The relevant track (Technology/Operations/CEO) — subject line field |
| Email CTA copy | `/skills/activation/skill-04-email-nurture-sequences.md` | Email 3 CTA in all three tracks |
| LinkedIn Touch 1 message | `/prompts/outbound/linkedin-sequence-[persona].md` | Touch 1 for the relevant region(s) |
| LinkedIn ad headline | `/prompts/ads/linkedin-ad-copy-generator.md` | Relevant persona × region Sponsored Content section |
| Event follow-up timing | `/skills/revenue/skill-05-event-activation-playbook.md` | Step 5 — Post-Event Follow-Up timing |
| Landing page headline | Campaign brief — relevant campaign | Landing page section |
| SDR sequence (any touch) | `/prompts/outbound/linkedin-sequence-[persona].md` | Relevant touch for the relevant region |

### Step 3: Update the experiment log

Mark the experiment as Complete in the Completed Experiments table at the top of Part 3. Fill in:
- Winner (A / B / No significant difference)
- Lift (e.g., "+22% open rate relative lift")
- Confidence level (e.g., "p = 0.03")
- Action taken (what file was updated, which section)
- Skill file updated (Yes/No + file name)

### Step 4: Brief the team

Send a 3–5 line Slack message or email to the relevant channel owner and SDR/AE Lead:

```
Subject: Experiment result: EXP-[ID] — [channel] — [outcome]

We closed [experiment name] today with a clear winner.

What we tested: [one sentence]
Winner: Variant [A/B] — [specific result, e.g., "22% higher open rate, p = 0.03"]
What it means: [one sentence on the implication]
What's changed: [specific file and section updated]

This is now the live version in [file name]. No action needed from you — it's already updated.
```

### Step 5: Add the learning to the team's knowledge base

Add one line to the "Validated Learnings" section in Part 7 below. This is the permanent memory of what this team has proven to be true through testing — not what someone thinks is true, not what a blog post says is true. What this team tested and confirmed.

---

## Part 7 — Validated Learnings (Accumulate Over Time)

This section grows as experiments complete. Every entry here is a proven truth — backed by statistical significance and real Ramco data. These learnings inform creative briefs, prompt updates, and strategic decisions.

*(Empty at campaign launch — first entries will be added as Q1 experiments close. Expected first entries: May–June 2026.)*

| Date | Learning | Evidence | Applies To |
|---|---|---|---|
| — | — | — | — |

**Format for new entries:**
> `[Date] | [Short declarative statement of what is true, e.g., "Pain-led subject lines outperform curiosity-led by 24% open rate for COO persona"] | EXP-[ID], p=[value], n=[sample] | [Which channel / persona / region this applies to]`

---

## Part 8 — Experiment Governance

### Who Can Launch an Experiment

Any member of the marketing or SDR team can propose an experiment by completing the experiment detail template in Part 4 (hypothesis, variable, success metric, sample size required). The Campaign Marketing Manager reviews and approves before the experiment starts.

**Approval checklist for Campaign Marketing Manager:**
- [ ] The hypothesis is testable and falsifiable
- [ ] Only one variable is being changed
- [ ] The success metric is defined and measurable before the experiment starts
- [ ] The required sample size is realistic given the current audience size
- [ ] The experiment does not conflict with an active experiment testing the same variable on the same audience (avoid testing two email subject line variants in the same sequence simultaneously)

### Experiment ID Convention

`EXP-[3-digit sequential number]`

Examples: EXP-001, EXP-002, EXP-023, EXP-100

Do not reuse IDs. Once an experiment is closed, its ID is retired — it exists only in the Completed table and the detail record.

### Quarterly Experiment Review

At the end of each quarter:
1. Review all completed experiments: what did we learn? Are the learnings reflected in the active skill files?
2. Review all inconclusive experiments (no significant result): should they be rerun with a larger sample? Was the hypothesis wrong? Is the variable worth testing?
3. Reprioritise the experiment roadmap in Part 5: does the next quarter's planned experiment set still reflect the team's highest-value unknowns?
4. Add a quarterly summary note to this file below: one paragraph on the most important learnings from the quarter and how they changed the team's approach.

### Quarterly Learning Summaries

*(Add one paragraph per quarter as the team accumulates results)*

**Q1 2026 (April–June):** *(To be written June 30, 2026)*
**Q2 2026 (July–September):** *(Pending)*
**Q3 2026 (October–December):** *(Pending)*
