# Campaign Timeline — The 3PL Transformation Report
## Ramco Logistics Software | Q1 ABM Campaign | 12-Week Execution Plan

> **Campaign dates:** 1 April – 30 June 2026
> **Structure:** 5-week production sprint (Weeks 1–5) + 7-week live execution (Weeks 6–12) + 1-week close-out
> **Reference:** Read `/campaigns/q1-launch/campaign-brief.md` before this file. This timeline operationalises the strategy in the brief.
> **How to use:** Each week has a summary table row and a full narrative section. The go/no-go decision point is the gate that must clear before the next week's work begins.

---

## Master Summary Table

| Week | Dates | Phase | Primary Activation | Primary Owner | Critical Go/No-Go |
|---|---|---|---|---|---|
| 1 | Apr 1–6 | Production | Strategy lock, account list, briefs issued | Campaign Marketing Manager | T1 account list approved by Sales Lead |
| 2 | Apr 7–13 | Production | LinkedIn audiences built, report data gathered, ad copy drafted | Campaign Marketing Manager + Product Marketing | LinkedIn audience lists confirmed; report data sources locked |
| 3 | Apr 14–20 | Production | Report first draft, HubSpot workflows built, SDR sequences configured | Product Marketing + Marketing Ops + SDR Lead | HubSpot workflow architecture signed off by Marketing Ops |
| 4 | Apr 21–27 | Production | Report reviewed, ad creative delivered, landing page copy approved | Product Marketing + Design + Campaign Marketing Manager | Report approved by Sales Lead; ad creative approved |
| 5 | Apr 28–May 4 | Pre-launch | Final QA, SDR + AE briefing, all assets approved and staged | Marketing Ops + All teams | All workflows QA'd, all teams briefed → GO for May 6 launch |
| 6 | May 5–11 | **LAUNCH** | LinkedIn campaigns live, landing page live, SDR sequences begin | Campaign Marketing Manager + SDR Lead | CTR ≥ 0.3% by end of Week 6 across all regions |
| 7 | May 12–18 | Execution | T1 outreach sprint, report PDF delivery to T1 connections, first MQLs | SDR Lead + AEs | ≥ 20 MQLs logged by end of Week 7 |
| 8 | May 19–25 | Execution + Event | SCLAA National Conference (AU), T1 follow-up, LinkedIn A/B test results | AE (AU) + Campaign Marketing Manager | All 50 T1 accounts contacted at least once by end of Week 8 |
| 9 | May 26–Jun 1 | Execution + Event + Review | Saudi Logistics Expo (SA), ISCL (ID), mid-campaign full-funnel review | AE (SA) + Campaign Marketing Manager + Sales Lead | ≥ 10 opportunities created by end of Week 9; budget reallocation confirmed |
| 10 | Jun 2–8 | Acceleration | T1 AE discovery calls, T2 MQL follow-through, ad creative refresh | AEs + SDR Lead + Campaign Marketing Manager | ≥ 15 opportunities created by end of Week 10 |
| 11 | Jun 9–15 | Acceleration + Event | SCMAP Conference (PH), final LinkedIn push, T1 escalation for stalled accounts | AE (PH) + SDR Lead | ≥ 18 opportunities created by end of Week 11 |
| 12 | Jun 16–22 | Final push | Campaigns close, final discovery calls, opportunity creation complete | AEs + Campaign Marketing Manager | ≥ 20 opportunities created by June 22 |
| Close-out | Jun 23–30 | Wrap-up | Close-out report, pipeline handover to AEs, lessons captured | Campaign Marketing Manager | Final report delivered July 7 |

---

## Week-by-Week Narrative

---

### Week 1 — April 1–6 | Strategy Lock and Briefs

**What is being activated:**
The campaign gets its formal go signal this week. All briefs are issued and all owners confirm their deliverables and deadlines. No assets are built yet — this week is about alignment and removing ambiguity before production begins.

**Actions by owner:**

*Campaign Marketing Manager:*
- Issue campaign brief (this document + `/campaigns/q1-launch/campaign-brief.md`) to all stakeholders by April 1
- Schedule T1 account list validation session with Sales Lead (April 2 or 3 — 60 minutes)
- Issue production brief to Design: report layout, LinkedIn carousel (10 slides), ad creative (12 assets), landing page design
- Issue content brief to Product Marketing: report structure, key findings, data sources required, word count, tone
- Issue workflow brief to Marketing Ops: HubSpot form, landing page, 3 email sequences, T1 notification workflow, MQL lifecycle automation
- Issue sequence brief to SDR Lead: which sequences to build for each region (reference `/prompts/outbound/`)

*Sales Lead:*
- Review T1 account list draft (50 accounts) and confirm, replace, or reprioritise accounts by April 7
- Flag any T1 accounts with existing open deals, prior outreach, or competitor relationships — these need custom handling notes

*SDR Lead:*
- Assign regional SDR ownership: AU SDR, SA SDR, ID SDR, PH SDR (or SA + PH combined if team is smaller)
- Begin T1 contact data validation in Apollo.io or Cognism — target: 50 accounts × 3 contacts (CIO/COO/CEO) = 150 records with verified name, title, LinkedIn URL, and business email
- Flag any T1 contacts already in HubSpot — check deal history and any suppression flags

*AEs (all regions):*
- Review T1 account list for assigned region
- Submit to Campaign Marketing Manager by April 5: (a) any account where the AE has an existing relationship, (b) any account where a prior conversation happened in the last 12 months, (c) any account currently in a competitive evaluation

**Assets needed this week:**
- `/campaigns/q1-launch/campaign-brief.md` — must be final before briefs are issued
- T1 account list draft — Campaign Marketing Manager and SDR Lead co-own this
- Brief templates for Design, Product Marketing, Marketing Ops (Campaign Marketing Manager creates)

**What gets logged in HubSpot:**
- Create campaign in HubSpot: name = `3PL Transformation Report Q1 2026`
- Set up custom campaign tracking URL source: `utm_campaign=3pl-transformation-report-q1-2026`
- Tag all 50 T1 accounts with HubSpot company property: `Campaign: Q1 2026 T1 Account` = True
- Create HubSpot task for SDR Lead: "T1 contact validation complete" → due April 14

**Go/No-Go Decision Point:**
> **Gate 1 — April 7:** T1 account list approved by Sales Lead (50 accounts confirmed with tier assignments). All production briefs issued and acknowledged by respective owners. If Sales Lead cannot approve the account list this week, Week 2 begins with a provisional list and a hard deadline of April 10 for final approval.

---

### Week 2 — April 7–13 | Digital Architecture and Report Data

**What is being activated:**
LinkedIn campaign structure is built (not live), HubSpot digital architecture begins, report data is gathered, and ad copy is drafted. The goal is to have all production inputs locked so Week 3 can be pure output.

**Actions by owner:**

*Campaign Marketing Manager:*
- Build LinkedIn Campaign Manager structure: 4 campaign groups (one per region), 3 layers per group (ABM/Persona/Retargeting), naming convention applied — all paused, no budget running
- Upload T1 company list as LinkedIn Matched Audience (CSV upload from HubSpot T1 list export) — audiences typically take 24–48 hours to populate; upload early
- Upload T2 company list as second LinkedIn Matched Audience
- Build LinkedIn Insight Tag verification: confirm tag fires on ramco.com/products/logistics-software/ and the report landing page URL (even though it doesn't exist yet, configure it for the planned URL)
- Draft ad copy for all 12 Sponsored Content variants using `/prompts/ads/linkedin-ad-copy-generator.md` — submit to Product Marketing for review

*Product Marketing:*
- Gather report data: pull Ramco customer implementation data (time-to-go-live averages, billing recovery figures from closed won customers), cross-reference with publicly available 3PL market research
- Lock the 5 headline statistics for the report — these must be defensible before the report is written around them
- Pull annual reports for named 3PLs (Mainfreight, 2GO, Toll Group where publicly available) to validate headcount-to-revenue scaling ratios
- Deliver data pack to Campaign Marketing Manager by April 13: confirmed stats, sources, and confidence level for each

*Marketing Ops:*
- Create HubSpot custom contact properties for campaign tracking:
  - `Q1 2026 Campaign Source` (single select: LinkedIn Paid / SDR Outreach / Event / Email / Organic / Other)
  - `T1 Account Flag` (checkbox)
  - `Report Delivered — T1 Direct` (checkbox + date)
  - `Report Downloaded — Landing Page` (checkbox + date, auto-populated on form submit)
  - `MQL Source — Q1 2026` (single select)
- Create HubSpot active lists:
  - `Q1 Campaign — T1 Accounts AU` (50 T1 accounts filtered by country = Australia)
  - `Q1 Campaign — T1 Accounts SA`, `…ID`, `…PH`
  - `Q1 Campaign — All MQLs` (lifecycle stage = MQL AND campaign source contains Q1 2026)
  - `Q1 Campaign — SQLs` (lifecycle stage = SQL AND campaign source contains Q1 2026)
  - `Q1 Campaign — Opportunities` (associated deal created AND deal source contains Q1 2026)

*SDR Lead:*
- Complete T1 contact validation: all 150 records (50 accounts × 3 personas) verified with LinkedIn URL and email
- Build SDR LinkedIn sequences in HubSpot Sales: import message templates from `/prompts/outbound/linkedin-sequence-cio.md`, `/prompts/outbound/linkedin-sequence-coo.md`, `/prompts/outbound/linkedin-sequence-ceo.md` for all 4 regions
- Confirm SDR tools are ready: LinkedIn Sales Navigator lists by region, HubSpot sequences configured, Apollo.io/Cognism active

**Assets needed this week:**
- T1 and T2 company list CSVs (from HubSpot export, formatted for LinkedIn Matched Audience upload)
- `/prompts/ads/linkedin-ad-copy-generator.md` — for ad copy drafting
- Access to Ramco CRM deal history (for Product Marketing data pull)
- Publicly available 3PL annual reports (Mainfreight, 2GO Holdings, Toll Group)

**What gets logged in HubSpot:**
- All 50 T1 accounts tagged with `T1 Account Flag` = True
- All 150 T1 contacts created (if not already in HubSpot) with correct title and region
- LinkedIn Matched Audience IDs saved in campaign notes field in HubSpot campaign record
- HubSpot campaign goal set: `Contacts Influenced` = 120 MQL target

**Go/No-Go Decision Point:**
> **Gate 2 — April 14:** LinkedIn Matched Audience for T1 accounts (AU, SA, ID, PH) has populated to ≥ 80% match rate. Report data pack (5 confirmed statistics with sources) delivered by Product Marketing. All 150 T1 contacts validated and in HubSpot. If LinkedIn audience match rate is below 80%, investigate data quality issues in T1 list before building campaigns further.

---

### Week 3 — April 14–20 | Report Draft, HubSpot Workflows, SDR Sequences

**What is being activated:**
The three most complex build tasks run in parallel this week: the report first draft, the full HubSpot workflow architecture, and the SDR sequence setup in HubSpot. These are the critical path items — delays here push the launch date.

**Actions by owner:**

*Product Marketing:*
- Write report first draft (target: 3,000–4,000 words, 12 sections per campaign brief) — due April 21
- Write landing page copy: headline, 5 preview stats, form intro text, below-fold section, thank-you page message
- Write LinkedIn carousel captions (10 slides): each slide = one key finding, phrased as a standalone stat or insight

*Marketing Ops:*
- Build HubSpot landing page (content placeholder — design arrives in Week 4): form embedded, UTM parameters firing, thank-you page redirect configured
- Build HubSpot report download workflow (full if/then logic per campaign brief Section 5.3):
  - Branch 1: T1 Account Flag = True → immediate SDR + AE notification + manual handling task
  - Branch 2: ICP job title match + company revenue ≥ $100M → enrol in 3-touch ICP nurture sequence + set lifecycle = MQL + SDR task (24-hour follow-up)
  - Branch 3: No ICP match → enrol in 2-touch non-ICP sequence + do not notify SDR
- Build 3-touch ICP email nurture sequence in HubSpot:
  - Email 1 (Day 0): Auto-send PDF attachment + thank-you message
  - Email 2 (Day 3): One key finding excerpt (personalised by region via HubSpot smart content — AU/ID/SA/PH variant)
  - Email 3 (Day 7): Regional benchmark stat + meeting link CTA
- Build 2-touch non-ICP sequence:
  - Email 1 (Day 0): Auto-send PDF + thank-you
  - Email 2 (Day 5): Ramco blog content link (no meeting CTA)
- Build T1 SDR daily task workflow: when `Report Delivered — T1 Direct` = True → create task for assigned SDR: "Follow up on report delivery within 24 hours"

*SDR Lead:*
- Load all 12 LinkedIn outreach sequences into HubSpot Sales (4 regions × 3 personas = 12 sequences, 5 touches each)
- Confirm each sequence is assigned to the correct sender for each region (names from `/prompts/outbound/` — James Whitfield AU, Rama Santoso ID, Khalid Mansour SA, Paolo Reyes PH for CIO sequences; equivalents for COO and CEO)
- Test 2 sequences end-to-end in a staging contact before signing off

*Design:*
- Begin report layout in InDesign or Figma — use Product Marketing content when available, placeholder blocks where draft is pending
- Begin LinkedIn ad creative: 12 Sponsored Content assets (3 variants × 4 regions) — single image format, 1200×627px, per creative specs from `/skills/acquisition/skill-07-paid-linkedin-campaigns.md`

*Campaign Marketing Manager:*
- Review LinkedIn campaign structure built in Week 2 — confirm audience targeting logic for each layer (ABM / Persona / Retargeting) using targeting rules from `skill-07`
- Set LinkedIn conversion tracking: confirm 5 conversion events (report download, demo request, contact us, pricing page, product page 60-second dwell) are firing correctly via Insight Tag
- Brief Marketing Ops on email smart content personalisation rules (which stat to show to which country segment)

**Assets needed this week:**
- Report data pack (from Product Marketing, Week 2 output)
- HubSpot smart content setup guide (Marketing Ops internal reference)
- SDR sequence message templates from `/prompts/outbound/` — all three persona files
- LinkedIn ad specs (from `skill-07`)

**What gets logged in HubSpot:**
- HubSpot workflows created (in Draft status — not live): report download workflow, ICP nurture sequence, non-ICP sequence, T1 notification workflow
- HubSpot email sequences created (in Draft): 3-touch ICP, 2-touch non-ICP, 12 SDR LinkedIn sequences
- Campaign Marketing Manager logs: LinkedIn campaign structure status = "Built, not live" in campaign notes

**Go/No-Go Decision Point:**
> **Gate 3 — April 21:** HubSpot workflow architecture reviewed and approved by Marketing Ops Lead — all branches confirmed, all notifications routing correctly in test environment. Report first draft delivered by Product Marketing (even if incomplete — a 70% draft is sufficient to continue to design). If workflow architecture is not approved, do NOT proceed to loading live data — debug first.

---

### Week 4 — April 21–27 | Review, Approval, and Creative Delivery

**What is being activated:**
All assets move through review and approval this week. Report gets Sales Lead feedback incorporated. Ad creative is delivered and approved. Landing page design is completed. This is the last week where major changes can be made — after this, only minor edits.

**Actions by owner:**

*Product Marketing:*
- Deliver report first draft to Sales Lead and Campaign Marketing Manager (April 21)
- Incorporate feedback (target: April 22–24, one round of revision)
- Write AE email introduction template (for when AE is introduced to a qualified T1 contact): 3 variants (CIO / COO / CEO), referencing report finding relevant to the persona
- Write event follow-up email template for SCLAA (AU) and Saudi Logistics Expo (SA) — pre-fill based on event context; AE personalises name and specific conversation reference

*Sales Lead:*
- Review and approve report draft by April 23 — flag any claims that cannot be substantiated or that present regulatory or competitive risk
- Approve final T1 account list with any last additions or removals
- Confirm AE assignments per T1 account (which AE owns which T1 account in each region)

*Design:*
- Deliver 12 LinkedIn Sponsored Content assets by April 24 (all regions, all variants)
- Deliver landing page visual design by April 25
- Deliver report layout v1 with Product Marketing's approved copy incorporated — April 25

*Campaign Marketing Manager:*
- Review and approve ad creative by April 26
- Upload approved ad creative to LinkedIn Campaign Manager (still paused)
- Set LinkedIn campaign budgets per regional allocation from campaign brief Section 7.2
- Approve landing page design and send to Marketing Ops for implementation
- Brief AEs on their T1 account assignments — send each AE their regional list with HubSpot links and engagement instructions

*Marketing Ops:*
- Implement landing page design (from Design delivery April 25)
- QA landing page form submission end-to-end: submit test form → confirm HubSpot record created → confirm workflow triggers correctly → confirm thank-you page loads → confirm PDF email sends
- QA T1 notification workflow with test contact flagged as T1

*SDR Lead:*
- Complete sequence dry-run: each SDR sends all 5 touches of one sequence to a test contact, confirms formatting and links are correct, confirms HubSpot task creation after each touch
- Confirm LinkedIn Sales Navigator T1 account lists are saved and updated

**Assets needed this week:**
- Report first draft (from Product Marketing, due April 21)
- Ad creative brief from Week 1 (Design reference)
- Landing page copy (from Product Marketing, due this week)
- HubSpot workflow from Week 3 (Marketing Ops references)

**What gets logged in HubSpot:**
- Sales Lead account assignments: update `Deal Owner` or `AE Assigned` custom property on all 50 T1 company records
- LinkedIn campaign status updated in campaign notes: "Creative uploaded, campaigns paused — ready for Week 5 QA"
- HubSpot landing page set to "Draft" status — URL live but password-protected until May 5

**Go/No-Go Decision Point:**
> **Gate 4 — April 27:** Report approved by Sales Lead (no outstanding claims to validate). Ad creative (12 assets) approved by Campaign Marketing Manager. Landing page form submission QA'd end-to-end — form submits, workflow fires, PDF email sends. If any of these three are not complete, Week 5 pre-launch QA is extended and launch date is pushed to May 11 (one-week delay is acceptable; two weeks is not).

---

### Week 5 — April 28–May 4 | Pre-Launch QA, Team Briefings, Final Staging

**What is being activated:**
All systems go live in staging. The entire campaign is tested, all teams are briefed, and the go/no-go for launch is made on Friday May 1. If all gates clear, the campaign launches Tuesday May 6 (Monday is a buffer for any last-minute fixes).

**Actions by owner:**

*Marketing Ops:*
- Full end-to-end QA of all HubSpot workflows (test every branch, every notification, every email):
  - T1 download trigger → AE + SDR notification fires within 5 minutes
  - ICP match download → lifecycle changes to MQL → ICP nurture sequence enrols → SDR task created for 24-hour follow-up
  - Non-ICP download → non-ICP sequence enrols → no SDR notification
  - Smart content personalisation: submit form with Country = Australia, confirm AU-specific stat shows in Email 2; repeat for SA, ID, PH
- Landing page: remove password protection, submit UTM-tagged test visit, confirm campaign attribution fires in HubSpot
- LinkedIn conversion tracking: fire test conversion on landing page, confirm it registers in LinkedIn Campaign Manager within 24 hours
- HubSpot campaign goal: confirm "Contacts Influenced" counter is active and tracking

*Campaign Marketing Manager:*
- Final LinkedIn campaign QA: confirm all 4 regions have correct audience targeting, correct creative loaded, correct bid strategy, budget pacing set to "even" for Week 6
- Confirm LinkedIn Insight Tag is firing on report landing page URL
- Set LinkedIn campaigns to "scheduled" start date of May 6 — do not start early
- Send Week 5 stakeholder update: "All systems ready for May 6 launch. Final sign-off required from Sales Lead by May 1."

*SDR Lead + All SDRs (60-minute joint briefing — April 29 or 30):*
- Review campaign mechanics: what the report is, why it exists, how it positions relative to the SDR's sequence
- Walk through each regional sequence: Touch 1 rules (no pitch, connection only), when to deliver the report (Touch 2 or after connection accept), how to log T1 direct delivery in HubSpot
- Demo HubSpot sequence workflow: how to enrol a contact, how to pause a sequence if a response comes in, how to log a positive reply as SQL
- Q&A: every SDR must be able to answer: "What are the 3 most interesting findings in the report?" before they begin outreach
- Confirm daily activity targets: 5 new connection requests + 3 follow-ups + 2 HubSpot tasks per SDR per day

*AEs (30-minute briefing — April 29 or 30, separate from SDR session):*
- Review T1 account assignments and confirm no conflicts or surprises
- Briefing on when AE gets involved: only on SQL handoff from SDR (except SA and AU T1 CEO contacts — AE sends report personally)
- Review discovery question bank from `/skills/revenue/skill-06-sales-enablement-kit.md` — AEs expected to have this open during first calls
- Confirm reporting expectation: all discovery calls logged in HubSpot within 24 hours, deal created on qualification

*Design:*
- Deliver final report PDF (print-ready and web-optimised) by April 30
- Deliver ungated 5-page executive summary PDF by April 30
- Upload both to HubSpot Files; confirm download links are correct

*Sales Lead:*
- Final campaign go/no-go sign-off by May 1 (end of day)
- Confirm AE T1 assignments are final
- Flag any accounts to exclude from outreach (competitor conflicts, live tender processes, board-level sensitivities)

**Assets needed this week:**
- Final report PDF (Design delivery April 30)
- Ungated executive summary PDF (Design delivery April 30)
- All LinkedIn ad creative (confirmed uploaded in Week 4)

**What gets logged in HubSpot:**
- HubSpot campaign status updated to "Active" (even though it starts May 6 — set the start date correctly)
- All SDR sequences set to "Active" status — ready to enrol contacts
- LinkedIn campaign start date set to May 6 in Campaign Manager
- Report PDF and exec summary uploaded to HubSpot Files with correct file names: `ramco-3pl-digital-maturity-benchmark-2026.pdf` and `ramco-3pl-benchmark-2026-executive-summary.pdf`

**Go/No-Go Decision Point:**
> **Gate 5 — May 1 (end of day): THE LAUNCH GATE.**
> All of the following must be confirmed GO before the campaign launches:
> - [ ] HubSpot workflows QA'd — all branches tested and confirmed by Marketing Ops
> - [ ] LinkedIn campaigns ready — audiences populated, creative approved, budgets set, start date May 6
> - [ ] Report PDF delivered and download link confirmed
> - [ ] Landing page live and form-to-workflow chain confirmed
> - [ ] All SDRs briefed — confirmed they can answer the three report findings question
> - [ ] Sales Lead sign-off received
> - [ ] AE T1 assignments confirmed
>
> If any item is NOT confirmed, the launch date moves to May 11. Do not launch a half-ready campaign.

---

### Week 6 — May 5–11 | LAUNCH WEEK

**What is being activated:**
Everything goes live. LinkedIn campaigns activate at market open on May 6. The landing page is publicly accessible. SDRs begin T1 outreach. The first MQL notifications start firing. The first 48 hours require close monitoring.

**Actions by owner:**

*Campaign Marketing Manager:*
- **May 6 morning:** Activate LinkedIn campaigns across all 4 regions (remove scheduled hold, confirm campaigns move to Active status within 30 minutes)
- Monitor LinkedIn hourly for first 48 hours: impressions, clicks, CPL
- Check landing page form submission volume every 4 hours on Day 1
- Send "Campaign is live" notification to Sales Lead and all AEs (include landing page URL and UTM tracking link)
- If CTR is below 0.2% after 48 hours on any region: pause that region's campaigns, review audience targeting, and test a new headline variant before re-activating (do not let a low-performing creative run for a full week)
- **End of Week 6:** Send first weekly status email (template from campaign brief Section 9.2)

*SDR Lead + All SDRs:*
- **May 6:** Begin T1 LinkedIn connection requests — all 4 regions simultaneously
  - AU SDR: start with top 5 T1 accounts (Linfox, Toll, Mainfreight, Qube, K&S), 3 personas each = 15 connection requests in Day 1
  - SA SDR: start with top 5 T1 accounts (Almajdouie, Bahri, Saudi Logistics Co., Naqel, SPL), 3 personas each = 15 requests
  - ID SDR: start with top 5 T1 accounts (JNE, Puninar, RPX, Pos Logistik, CKB), 3 personas each = 15 requests
  - PH SDR: start with top 5 T1 accounts (2GO, LBC, Air21, Ninja Van, Entrego), 3 personas each = 15 requests
- Use Touch 1 from the relevant persona sequence — connection request message only, no report reference yet
- Log every outreach attempt in HubSpot within 24 hours: contact record → Activity → LinkedIn connection request sent → date

*AEs (SA and AU — CEO persona outreach):*
- AU AE: send personalised LinkedIn connection request to CEO/MD contacts at top 5 AU T1 accounts personally (not through SDR) — use CEO sequence Touch 1 from `/prompts/outbound/linkedin-sequence-ceo.md`
- SA AE / Sales Lead: send personalised connection request to CEO contacts at top 5 SA T1 accounts — use formal SA CEO sequence

*Marketing Ops:*
- Monitor HubSpot workflow execution logs for first 3 days: confirm each form submission is triggering the correct workflow branch
- Flag any misfired notifications (T1 contact downloading without SDR being notified) immediately
- Confirm MQL lifecycle changes are recording correctly on contact timeline

**Assets needed this week:**
- All campaigns, sequences, and workflows (built in Weeks 3–5)
- Weekly status email template (from campaign brief)

**What gets logged in HubSpot:**
- Every T1 LinkedIn connection request: contact activity log → `LinkedIn connection request sent` + date + sender name
- First report downloads: auto-logged via HubSpot form workflow
- First MQL records: lifecycle stage = MQL auto-set by workflow; Campaign Marketing Manager reviews MQL quality daily
- LinkedIn performance data: Campaign Marketing Manager logs Day 1 and Day 3 metrics in campaign notes (impressions, CTR, CPL per region)

**Go/No-Go Decision Point:**
> **Gate 6 — May 11 (end of Week 6):**
> - LinkedIn CTR ≥ 0.3% in at least 2 of 4 regions. If below 0.3% in all regions, creative refresh required before Week 7.
> - HubSpot workflows firing correctly — no misfired notifications or stuck workflows
> - T1 outreach volume on track: ≥ 50 connection requests sent across all regions by end of Week 6
> - First MQLs logged: ≥ 5 MQLs from form submissions by end of Week 6 (this is a low bar — it confirms the funnel is working, not that volume is sufficient)

---

### Week 7 — May 12–18 | T1 Outreach Sprint, First MQL Wave, Report Delivery Begins

**What is being activated:**
The SDR pipeline is in full motion. Connections accepted in Week 6 now receive the report (Touch 2). The first MQL notifications are being followed up. LinkedIn optimisation begins based on first week's data.

**Actions by owner:**

*SDR Lead + All SDRs:*
- For every LinkedIn connection accepted from Week 6: send Touch 2 (report delivery) within 24 hours of acceptance — include PDF link and personalised note referencing a relevant finding
- For every T1 contact who accepts and reads the report (LinkedIn message opened, or they reply): log as positive engagement in HubSpot → notify assigned AE immediately
- Continue T1 outreach: send next batch of connection requests to T1 accounts not yet contacted (accounts 6–10 in each region)
- For any non-T1 MQL that has downloaded the report and received the automated email sequence: SDR calls or messages on Day 14 (triggered by HubSpot task from the ICP nurture workflow)
- Daily HubSpot log: connection requests sent, acceptances, responses, report deliveries

*Campaign Marketing Manager:*
- LinkedIn Week 1 analysis: review CTR, CPL, impressions frequency per region
  - If frequency > 3 in any audience segment: add 5 new companies to the exclusion audience (people who've already seen the ad 3+ times get diminishing returns)
  - If one creative variant is outperforming others by > 30% CTR: pause the weaker variants and increase budget on the winner
- Begin LinkedIn A/B test: test a new headline on the top-performing ad format (pain-led vs. outcome-led — swap one variant this week and observe for 7 days)
- Prepare SCLAA logistics: confirm booth setup, materials (report PDF printed copies, exec summaries, one-pager PDFs), SDR/AE attendance confirmed

*AEs:*
- Review HubSpot engagement data for T1 accounts in their region — which accounts have been contacted, which have accepted, which have opened the report
- Respond to any SQL handoffs from SDR within 4 hours: review the contact's HubSpot record (engagement history, pages visited, report delivered) before making contact
- For T1 accounts where the CEO connection has been accepted: send Touch 2 (resource share) personally — do not hand to SDR for CEO follow-up at T1 accounts

*Marketing Ops:*
- Pull Week 1 HubSpot report: MQL volume by channel (LinkedIn vs. SDR vs. organic), lifecycle conversion rates, email open and click rates on Day 0 and Day 3 emails
- Share with Campaign Marketing Manager for weekly status email

**Assets needed this week:**
- Report PDF (already in HubSpot Files — SDRs use this link for direct delivery)
- Printed report copies + exec summaries (for SCLAA — order print by this week for May 19–25 delivery)

**What gets logged in HubSpot:**
- All report deliveries by SDR: contact record → `Report Delivered — T1 Direct` = True + date
- All positive T1 responses: contact record → activity log → `Positive LinkedIn response — report mentioned` + AE notified
- LinkedIn A/B test variant IDs logged in campaign notes (for attribution when results are reviewed Week 9)
- First SQL conversions: SDR logs qualified conversations as SQL (lifecycle stage = SQL + HubSpot task created for AE)

**Go/No-Go Decision Point:**
> **Gate 7 — May 18 (end of Week 7):**
> - ≥ 20 MQLs logged (cumulative, all channels) — if below 20, investigate: is the landing page converting? Is LinkedIn delivering qualified clicks? Are SDR messages getting responses?
> - ≥ 30 T1 contacts have received the report (LinkedIn acceptance + direct PDF delivery)
> - ≥ 3 SQLs logged (any region) — confirms the funnel from download to sales conversation is working
> - LinkedIn CPL trending towards target (<$80 AU / <$90 SA / <$50 ID / <$60 PH)

---

### Week 8 — May 19–25 | SCLAA National Conference (AU) + Full Execution

**What is being activated:**
SCLAA National Conference is the campaign's first major event activation. The Australian pipeline accelerates this week from the combination of LinkedIn outreach, report delivery, and in-person conversations. The rest of the regions continue execution on the standard track.

**Actions by owner:**

*AU AE + AU SDR (at SCLAA):*
- Distribute ungated executive summary at booth — no form, no friction; collect business cards (enter in HubSpot post-event)
- Identify and approach contacts from T1 AU accounts attending the conference — pull the AU T1 list before travelling and cross-reference the SCLAA attendee list
- For any T1 contact met at the booth: immediately flag in HubSpot as `Event — SCLAA 2026` + `T1 In-Person Meeting` = True
- For any non-T1 contact who shows strong interest: scan their badge/collect card, enter in HubSpot post-event as MQL (ICP match + interest signal)
- Post-event: for every contact met, the AU AE sends a personalised follow-up email within 24 hours of returning — references the specific conversation, attaches the full report PDF
- Follow event activation playbook from `/skills/revenue/skill-05-event-activation-playbook.md`

*Campaign Marketing Manager:*
- Conduct LinkedIn A/B test read after 7 days (test started Week 7): if one headline variant has ≥ 30% higher CTR, pause the loser and scale the winner
- Monitor total campaign budget pacing: if any region is burning faster than expected, adjust daily budget cap (not total budget)
- Mid-Week 8: preliminary check — are we on track for 10 opportunities by end of Week 9?

*SDR Lead + all non-AU SDRs:*
- Continue T1 outreach — by end of Week 8, all 50 T1 accounts must have been contacted at least once on at least one persona
- For T1 accounts where Touch 2 was sent (report delivery) and no response after 7 days: send Touch 3 (insight follow-up, not another report push)
- Log all outreach attempts — even unanswered ones — in HubSpot (this data is needed for the mid-campaign review)

**Assets needed this week:**
- Printed report copies (100) and exec summaries (200) for SCLAA booth
- AU AE pre-event T1 attendee cross-reference list (pulled from SCLAA registration list vs. HubSpot AU T1 accounts)
- Event follow-up email template (written by Product Marketing in Week 4)

**What gets logged in HubSpot:**
- All SCLAA booth contacts: create contact record → add to static list `Event — SCLAA 2026` → set lifecycle stage based on ICP match
- T1 contacts met at event: update `T1 In-Person Meeting` = True + meeting notes in contact record
- AU SDR: update outreach status on all 15 AU T1 accounts by end of Week 8

**Go/No-Go Decision Point:**
> **Gate 8 — May 25 (end of Week 8):**
> - **All 50 T1 accounts contacted at least once** — this is a hard target. If any T1 account has not been contacted (any persona, any channel), flag it and determine why. Uncovered T1 accounts are a gap in the plan.
> - ≥ 40 MQLs logged (cumulative)
> - ≥ 8 SQLs logged (cumulative)
> - SCLAA: ≥ 20 qualified contacts captured in HubSpot post-event

---

### Week 9 — May 26–June 1 | Saudi Logistics Expo + ISCL + MID-CAMPAIGN REVIEW

**What is being activated:**
Two events run simultaneously this week — Saudi Logistics Expo (SA) and ISCL (ID). The mid-campaign full-funnel review happens on Friday May 29 or Monday June 1. Budget reallocation decisions are made this week — the campaign has enough data to make informed adjustments.

**Actions by owner:**

*SA AE + SA SDR (at Saudi Logistics Expo):*
- Pre-event: cross-reference Saudi Logistics Expo attendee list against SA T1 account list — flag any T1 contacts attending and schedule a meeting request before the event if possible
- At booth: distribute Arabic executive summary to Arabic-speaking attendees; English version to international attendees
- Formal register at all SA interactions — follow cultural protocol from persona-definitions.md SA section
- For any T1 Saudi CEO-level contact met at the expo: offer a formal follow-up meeting in Riyadh the following week (not a video call — in-person is preferred in SA)
- Post-event: SA AE personalised follow-up email within 24 hours; reference conversation + attach full report

*ID SDR (at ISCL or attending virtually):*
- Represent Ramco at ISCL — if attendance is confirmed, distribute Bahasa Indonesia exec summary
- Identify contacts from T1 ID accounts and initiate conversation; log in HubSpot post-event
- If ISCL is not confirmed for Ramco attendance: ID SDR runs event-week LinkedIn sequence instead — message T1 ID contacts referencing ISCL themes

*Campaign Marketing Manager + Sales Lead (Mid-Campaign Review — May 29 or June 1):*
- Pull full-funnel report from HubSpot: downloads / MQLs / SQLs / opportunities by region and by channel
- Compare to targets (target at Week 9: ≥ 10 opportunities)
- Channel performance review: which channel is producing the best MQL quality? (assessed by MQL-to-SQL conversion rate, not just volume)
- Budget reallocation decision:
  - If AU LinkedIn CPL is on target AND producing high-quality MQLs: maintain budget
  - If SA LinkedIn is underperforming: shift 30% of SA remaining budget to SA SDR enrichment (Apollo credits for T2 SA contacts)
  - If any region has already hit its opportunity target: shift remaining budget to the region furthest behind
- Output: revised channel budget allocation for Weeks 10–12, signed off by Sales Lead

*SDR Lead:*
- T2 acceleration: identify all T2 accounts that have downloaded the report but have not responded to the 3-touch automated email sequence → SDR manual follow-up call or message this week
- T1 accounts with no response after 3 touches (Touch 1 connection request, Touch 2 report, Touch 3 follow-up): SDR tries alternate persona (if COO hasn't responded, try CIO or CEO) or alternate channel (if LinkedIn sequence has had no response, try email)

**Assets needed this week:**
- Printed materials for Saudi Logistics Expo: report copies in both English and Arabic
- HubSpot MQL/SQL/Opportunity report (Marketing Ops pulls this for mid-campaign review)
- Budget tracking spreadsheet (Campaign Marketing Manager maintains)

**What gets logged in HubSpot:**
- All Saudi Logistics Expo contacts: static list `Event — Saudi Logistics Expo 2026`
- All ISCL contacts: static list `Event — ISCL 2026`
- Mid-campaign review outcomes: Campaign Marketing Manager logs revised budget allocation and any strategic changes in HubSpot campaign record notes
- T2 SDR manual follow-up attempts: logged as activities on contact records

**Go/No-Go Decision Point:**
> **Gate 9 — June 1 (end of Week 9):**
> - ≥ 10 opportunities created (cumulative, all regions) — **this is the campaign's primary mid-point gate.** If below 10, emergency escalation meeting required (see below).
> - ≥ 60 MQLs logged (cumulative)
> - ≥ 15 SQLs logged (cumulative)
> - Budget reallocation confirmed by Sales Lead for Weeks 10–12
>
> **Emergency escalation if < 10 opportunities at Week 9:**
> - Sales Lead and Campaign Marketing Manager: same-day 60-minute review
> - Assess: is the gap in MQL volume (top-funnel), MQL quality (mid-funnel), or SQL-to-opp conversion (AE conversion rate)?
> - Option A (top-funnel gap): increase LinkedIn budget by 40%, expand T2 list with 50 additional accounts
> - Option B (MQL quality gap): tighten LinkedIn targeting (add job seniority = Director+ filter), increase SDR manual qualification before MQL is logged
> - Option C (AE conversion gap): Sales Lead joins next 3 AE discovery calls as observer; identify and fix the conversion issue

---

### Week 10 — June 2–8 | AE Discovery Calls, T2 MQL Sweep, Creative Refresh

**What is being activated:**
The pipeline is built. This week is about converting the pipeline into opportunities. AEs run discovery calls. SDRs sweep T2 MQLs who have been in the nurture sequence but haven't converted. The LinkedIn creative is refreshed with new variants to avoid audience fatigue.

**Actions by owner:**

*AEs (all regions):*
- Target: run at least 3 discovery calls per AE this week — all pending SQLs must be in a scheduled or completed discovery call by June 8
- Before each discovery call: review the contact's HubSpot record — which report findings they were sent, which emails they opened, whether they visited the pricing page or demo page
- During discovery: use the question bank from `/skills/revenue/skill-06-sales-enablement-kit.md` — persona-matched questions for the specific buyer
- After each discovery call: log call outcome in HubSpot within 24 hours — either create an opportunity (deal stage = Discovery) or update the contact with reason for non-qualification and next follow-up date
- Send post-call one-pager (persona-matched from `/prompts/sales-enablement/executive-onepager-generator.md`) within 2 hours of call

*SDR Lead + all SDRs:*
- T2 MQL sweep: pull HubSpot list `Q1 Campaign — All MQLs` — filter for: lifecycle = MQL AND no AE activity logged AND MQL date > 14 days ago → these contacts have been nurtured but not followed up
- SDR makes manual outreach to all contacts in this list this week — LinkedIn message or email — "I noticed you downloaded our 3PL benchmark — I had a question about finding #4 (enterprise RFP readiness) that I thought might be relevant to what you're doing this year. Worth a quick call?"
- T1 accounts: any T1 account with a positive engagement signal but no SQL yet → escalate to AE this week — "This account has opened every email and accepted the LinkedIn connection but hasn't taken a next step. Can you reach out personally?"

*Campaign Marketing Manager:*
- LinkedIn creative refresh: after 5 weeks of running, the original 12 creative assets are likely showing audience fatigue (frequency rising, CTR declining). Create 3 new headline/image combinations using the top-performing angle from Week 7 A/B test.
  - New variant format: Proof-led — use a specific metric from the report ("The 3PLs recovering this margin aren't the biggest in the market. They're the most digitally connected.")
  - Upload new creative to Campaign Manager; pause the 3 weakest-performing original variants
- Adjust LinkedIn budgets for final 3 weeks: concentrate spend on top-performing region × layer combination (likely ABM Layer in AU and SA)
- Prepare end-of-campaign close-out report structure (blank template) — will be filled Week 12

**Assets needed this week:**
- HubSpot MQL list (Marketing Ops query)
- Post-call one-pager PDFs (from `/prompts/sales-enablement/executive-onepager-generator.md` — all 3 personas × 4 regions already written)
- Discovery question bank (from `/skills/revenue/skill-06-sales-enablement-kit.md`)
- New LinkedIn creative variants (Campaign Marketing Manager writes new copy; Design produces 3 new assets)

**What gets logged in HubSpot:**
- All discovery calls: HubSpot deal created → deal stage = Discovery → associated with T1 or T2 account → campaign source tagged
- Post-call one-pager sent: contact record → Document viewed (HubSpot Documents tracking)
- T2 SDR sweep completions: activity log on each contacted T2 MQL
- LinkedIn creative refresh: new variant IDs logged in campaign notes

**Go/No-Go Decision Point:**
> **Gate 10 — June 8 (end of Week 10):**
> - ≥ 15 opportunities created (cumulative) — if still below 15 after the T2 sweep and AE discovery push, the Week 11 SCMAP event and final SDR push are the last significant levers
> - All pending SQLs (≥ 30 days old with no AE activity) are either in discovery or disqualified — no stalled SQLs
> - LinkedIn creative refresh live by June 5 — if not, pause the fatigued creative rather than run it another week at declining performance

---

### Week 11 — June 9–15 | SCMAP Conference (PH) + Final LinkedIn Push

**What is being activated:**
SCMAP is the last major event of the campaign. LinkedIn enters its final 10-day window. All SDR energy shifts to in-progress conversations — no new T1 or T2 cold outreach unless a high-priority account is uncovered at SCMAP.

**Actions by owner:**

*PH AE + PH SDR (at SCMAP):*
- Attend SCMAP Annual Conference — Philippine logistics community; distribute exec summary
- SCMAP is the highest-density event for PH T1 account contacts — cross-reference attendee list against PH T1 accounts before travelling
- For any PH T1 contact met at SCMAP: AE personally follows up within same day or next morning; reference both the conference conversation and the relevant report finding
- For non-T1 SCMAP contacts who are ICP matches: capture in HubSpot → add to post-SCMAP SDR sequence (3-touch)

*Campaign Marketing Manager:*
- LinkedIn: final 10-day window — consolidate to the 4–6 best-performing ad sets only (one per region). Pause everything else. Concentrate remaining budget.
- Set LinkedIn campaign end date: June 22 (campaigns shut down automatically)
- For any region that has already met its opportunity target: pause LinkedIn for that region and reallocate remaining budget to under-achieving regions

*SDR Lead + all SDRs:*
- No new cold T1 outreach — only follow-through on existing open conversations
- For T1 accounts that have engaged (accepted connection, opened report, replied to at least one touch) but have not yet reached SQL: SDR makes one final attempt this week — a direct question: "I've been trying to connect you with our team given the interest you showed in the report. Is this on your radar for the next 90 days, or should I check back later in the year?"
  - YES → immediate AE introduction
  - NO / Not now → mark contact as `Re-engage Q3 2026` in HubSpot; remove from active sequence
- T2 MQLs who responded to the Week 10 sweep but haven't scheduled a call: follow up once more with a direct meeting link

*AEs:*
- Push all in-progress T1 conversations to a first AE discovery call by June 15 — if the first meeting hasn't happened yet, this week is the last real chance within the campaign window
- For SA AEs: any T1 account where a strong relationship has been established but no formal meeting has occurred — offer an in-person meeting in Riyadh for the week of June 22–26 (post-campaign, but pipeline attribution still counts)

**Assets needed this week:**
- SCMAP event materials: printed exec summaries (PH) and report PDFs
- AE post-SCMAP follow-up email template (personalise from the event template written in Week 4)
- HubSpot `Re-engage Q3 2026` contact list — Marketing Ops creates this filter

**What gets logged in HubSpot:**
- All SCMAP contacts: static list `Event — SCMAP 2026`
- T1 "not now" contacts: property `Re-engage Date` = Q3 2026; removed from active campaign sequences
- Discovery calls booked from SCMAP: deal created → campaign source = `3PL Transformation Report Q1 2026` + `Event — SCMAP 2026`
- LinkedIn final creative performance snapshot logged in campaign notes

**Go/No-Go Decision Point:**
> **Gate 11 — June 15 (end of Week 11):**
> - ≥ 18 opportunities created (cumulative) — within 2 of the target; if at 18, the final week push should deliver the remaining 2
> - All in-progress T1 conversations have a next step scheduled (discovery call, demo, or follow-up date) — nothing is "in progress" without a defined next action in HubSpot
> - LinkedIn campaigns are pacing correctly — not depleting budget early before June 22; if budget is running low, reduce daily cap rather than pausing campaigns entirely

---

### Week 12 — June 16–22 | Campaign Close, Final Opportunity Push, LinkedIn End

**What is being activated:**
The campaign's active execution ends. LinkedIn campaigns run until June 22 and shut down. All remaining qualified prospects receive a final SDR or AE touchpoint. Opportunity count is finalised.

**Actions by owner:**

*AEs (all regions):*
- Complete all outstanding discovery calls this week — every SQL that has not yet reached a first AE meeting must have one by June 19
- For any new opportunity created this week: deal stage = Discovery, tagged with campaign source, associated with relevant account
- For SA AEs: in-person meetings booked from Saudi Logistics Expo follow-through can happen this week in Riyadh
- End-of-week AE report to Sales Lead: opportunity count in their region, pipeline value, next steps on top 3 deals

*SDR Lead + all SDRs:*
- Final activity log sweep: review all T1 contacts and confirm every outreach attempt (accepted, declined, no response) is logged in HubSpot — this data is used for the close-out report
- Final T2 MQL check: any MQL from Week 10 or 11 who showed interest but hasn't had an AE call — SDR makes one last contact this week
- No new cold outreach — SDR bandwidth goes to follow-through only

*Campaign Marketing Manager:*
- **June 22:** LinkedIn campaigns end (scheduled shut-down)
- Pull final LinkedIn campaign performance report from Campaign Manager — download CSV for all campaigns, all regions
- Pull final HubSpot campaign report: contacts influenced, MQLs, SQLs, opportunities, pipeline value by region and by channel
- Begin assembling close-out report (structure from campaign brief Section 9.4)
- Send final weekly status email to Sales Lead and AEs: final numbers vs. targets, any opportunities that are close to creation but not yet formal

*Marketing Ops:*
- Pull final HubSpot metrics: confirm all opportunity deals have correct campaign source attribution
- Export T1 account coverage report: for each of the 50 T1 accounts, how many contacts were reached, what was the best engagement signal, what is the current status
- Archive HubSpot campaign: set status to "Completed" and lock the campaign so no new contacts are accidentally enrolled after June 30

**Assets needed this week:**
- HubSpot reports (Marketing Ops exports)
- LinkedIn Campaign Manager final performance CSV
- Close-out report template (Campaign Marketing Manager)

**What gets logged in HubSpot:**
- All final opportunity deals: confirmed with correct stage (Discovery), campaign source, associated contacts and company
- T1 account final status: `Q1 2026 Account Status` = Opportunity / SQL / MQL / Contacted — No Response / Not Contacted
- LinkedIn campaigns: status set to Ended in campaign notes
- HubSpot campaign status set to Completed after June 30

**Go/No-Go Decision Point:**
> **Gate 12 — June 22 (campaign close):**
> - **≥ 20 opportunities created** — this is the campaign target. Anything at 20 or above is a win. If at 18–19, Sales Lead and Campaign Marketing Manager discuss whether any in-progress conversations are close enough to count within June 30.
> - All T1 account statuses logged in HubSpot — no T1 account with an unknown status
> - All LinkedIn campaigns confirmed ended
> - Close-out report draft assembled — delivery to all stakeholders by July 7

---

### Close-Out — June 23–30 | Reporting and Pipeline Handover

**What is being activated:**
No new outreach. The campaign is over. All energy goes to documenting what happened, capturing pipeline accurately, and setting up Q2 with the intelligence gathered.

**Actions by owner:**

*Campaign Marketing Manager (by July 7):*
- Complete close-out report: final funnel metrics, channel-level ROI, T1 account penetration, top 5 opportunities, top 3 things that worked, top 3 that didn't, report asset performance
- Save close-out report to `/campaigns/q1-launch/` — file name: `q1-campaign-closeout-jul2026.md`
- Log experiment results from any A/B tests (headline variants, LinkedIn creative) in `/experiments/experiment-log.md`

*Sales Lead + AEs:*
- Pipeline handover meeting (June 24 or 25): review all 20 opportunities, confirm AE ownership and next steps, estimate probability and expected close date
- Any T1 "not now" accounts with a Q3 re-engage flag: schedule follow-up task in HubSpot for the relevant SDR — do not let this list get lost in the transition

*SDR Lead:*
- Export T1 account coverage report — share with Sales Lead: which T1 accounts are warm, which are cold, which have said "contact me in Q3"
- Brief Q2 SDR plan: which T1 accounts are carry-forward priorities?

*Product Marketing:*
- Review which report findings generated the most SDR responses (based on SDR notes in HubSpot) — this insight informs what topics to lead with in Q2 content and the next gated asset

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Report production delayed past April 30 | Medium | High — launch pushed 1 week | Production sprint structure (5 weeks) builds in buffer; hard April 26 approval deadline |
| LinkedIn audience match rate < 80% for a region | Medium | Medium — reduces reach to T1 accounts | Enrich T1 account data with Apollo before upload; use company name list + domain matching |
| SDR response rates below target (< 15% T1) | Medium | High — core pipeline mechanism | Switch to email outreach for non-responding LinkedIn T1 contacts at Week 7; escalate CIO/CEO contacts to AE level |
| LinkedIn CPL exceeds target by > 30% in any region | Medium | Medium — budget overrun | Pre-set daily budget caps; weekly CPL review; reallocate to SDR enrichment if LinkedIn underperforms |
| Key T1 account already in active evaluation with competitor | Low | High — deal at risk | AE flags in Week 1 review; competitive battlecard deployed immediately from `/prompts/sales-enablement/competitive-battlecard-generator.md` |
| SCLAA or Saudi Logistics Expo attendance lower than expected | Low | Medium — event pipeline contribution reduced | LinkedIn and SDR outreach to event registrants as virtual attendees using pre-event sequences from `skill-05` |
| Sales Lead delays T1 account list approval past April 7 | Low | Medium — delays T1 contact validation | Provisional T1 list used for Weeks 2–3; final approval required before SDR sequences launch (May 6) |
| AE discovery call conversion rate below 50% | Medium | High — opp count falls short | Sales Lead joins calls as observer at Week 10; identify specific objection or qualification issue; deploy relevant battlecard |
