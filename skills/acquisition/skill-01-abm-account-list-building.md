# Skill 01 — ABM Account List Building
## Ramco Logistics Software | Acquisition

> **Purpose:** Build a prioritized, researched, and CRM-ready list of 3PL target accounts across Australia, Indonesia, Saudi Arabia, Philippines, and India.
> **Output:** Tiered account list (T1/T2/T3) loaded into HubSpot with custom properties populated, ready for SDR sequencing and paid campaign audience upload.
> **Owner:** Demand Gen / Marketing Ops
> **Estimated time to complete:** 5–8 hours per region for initial build; 2 hours/month for ongoing maintenance

---

## Prerequisites
- [ ] LinkedIn Sales Navigator (Team or Advanced license)
- [ ] Apollo.io account (or equivalent: Lusha, Cognism, ZoomInfo)
- [ ] HubSpot Marketing Hub + CRM (Professional or Enterprise)
- [ ] Access to `/inputs/input.json` (ICP criteria)
- [ ] Access to `/inputs/persona-definitions.md` (persona titles per region)
- [ ] Access to `/inputs/target-account-list-template.csv` (import format)
- [ ] Google Sheets or Excel for staging before HubSpot import

---

## Step-by-Step Execution Workflow

---

### STEP 1: Define ICP Filter Criteria
**Time:** 30 minutes | **Owner:** Marketing or RevOps

Before sourcing any accounts, lock the filter criteria so the list is consistent and auditable.

**Mandatory filters (apply to all regions):**
- Industry: Freight & Logistics / Supply Chain / Transportation / Warehousing
- Business model: Third-Party Logistics (3PL) provider — not asset-only carriers, not freight forwarders unless they have a 3PL division
- Annual revenue: $100M USD equivalent or above (adjust for local currency using current FX)
- Employee count proxy: 200+ employees (use as a secondary filter where revenue is unavailable)
- Operational model: Must operate at least one of — contract warehousing, managed transport, or fleet operations. Exclude pure brokers and freight marketplaces.

**Disqualifying signals (exclude these accounts):**
- Government-owned logistics entities (unless they have a commercial 3PL division)
- Pure courier / parcel companies with no B2B logistics contracts
- Companies currently contracted with Ramco (check HubSpot before importing)
- Companies that have formally rejected Ramco in the last 12 months (check HubSpot deal history)

**Tier definitions — assign during sourcing, validate during enrichment:**
- **Tier 1:** $300M+ revenue, multi-modal operations (transport + warehousing), 500+ employees, clear technology buying signal or upcoming contract/renewal
- **Tier 2:** $100M–$300M revenue, at least one core operational vertical, 200–500 employees
- **Tier 3:** $80M–$100M revenue (slightly below floor but strategically relevant), or $100M+ with limited operational complexity

---

### STEP 2: Source Accounts by Region
**Time:** 1–2 hours per region | **Owner:** Marketing or SDR Lead

Use the sources below in sequence. Cross-reference to deduplicate. Log each account in the staging spreadsheet using the `/inputs/target-account-list-template.csv` column format.

---

#### Australia

**LinkedIn Sales Navigator search string:**
- Industry: Transportation, Trucking & Railroad / Logistics & Supply Chain
- Job title of employee (proxy for company type): "Head of Warehousing" OR "Head of Transport" OR "Fleet Manager" OR "3PL"
- Company headcount: 201–500, 501–1000, 1001–5000
- Geography: Australia
- Keywords in company name/description: "logistics" OR "3PL" OR "warehousing" OR "distribution" OR "transport"

**Priority directories and sources:**
- **Logistics Association Australia (LAA)** — laa.asn.au — member directory lists active 3PL operators
- **Supply Chain & Logistics Association of Australia (SCLAA)** — sclaa.com.au — member list
- **IBISWorld Australia** — search "Freight Transport" and "Warehousing" for top companies by revenue
- **Australasian Transport News (ATN)** — atn.com.au — editorial coverage of 3PL operators
- **LinkedIn Company Search** — search "3PL Australia", "contract logistics Australia", "warehousing Australia"
- **ASX announcements** — for listed logistics companies, check annual reports for 3PL revenue confirmation
- Known large Australian 3PLs to include as reference: Linfox, Toll Group, Mainfreight (AU), StarTrack (check if 3PL division), CEVA Logistics AU, DB Schenker AU, Yusen Logistics AU, Qube Logistics, Lindsay Australia

**Target account volume:** 80–120 accounts for initial list; tier down to 40–60 after scoring

---

#### Indonesia

**LinkedIn Sales Navigator search string:**
- Industry: Logistics & Supply Chain / Transportation, Trucking & Railroad
- Geography: Indonesia
- Company headcount: 201–1000+
- Keywords: "logistik" OR "3PL" OR "pergudangan" OR "distribusi" OR "ekspedisi"

**Priority directories and sources:**
- **Asosiasi Logistik dan Forwarder Indonesia (ALFI)** — alfi.or.id — member directory; focus on members with warehousing and distribution services
- **Asosiasi Perusahaan Jasa Pengiriman Ekspres Pos dan Logistik Indonesia (ASPERINDO)** — asperindo.or.id
- **Indonesia Logistics Association** — cross-reference with ALFI
- **Bisnis Indonesia / Kontan** — Indonesian business press; search for logistics company coverage
- **Apollo.io** — search "logistics" + "Indonesia" + employee count filter; cross-reference with LinkedIn
- **Google search operators:** `site:linkedin.com/company "3PL" "Indonesia"` and `"perusahaan logistik" filetype:pdf` for industry directories
- Known large Indonesian 3PLs to include: JNE (B2B division), J&T Cargo, SiCepat (B2B), Pos Logistik Indonesia, Puninar Logistics, Agility Indonesia, Geodis Indonesia, Kuehne+Nagel Indonesia, DB Schenker Indonesia, RPX Holdings

**Note:** Revenue data for Indonesian private companies is often unavailable. Use employee count (500+) and operational footprint (number of warehouses / cities covered) as proxies. LinkedIn company pages and local news coverage are the best verification sources.

**Target account volume:** 60–90 accounts; tier down to 30–50 after scoring

---

#### Saudi Arabia

**LinkedIn Sales Navigator search string:**
- Industry: Logistics & Supply Chain / Transportation, Trucking & Railroad
- Geography: Saudi Arabia
- Company headcount: 201–5000+
- Keywords: "logistics" OR "3PL" OR "warehousing" OR "distribution" OR "supply chain"

**Priority directories and sources:**
- **Saudi Logistics Hub** — saudilogisticshub.com — government-affiliated directory of logistics operators
- **Saudi Freight Forwarders & Logistics Association (SAFLA)** — safla.com.sa
- **Monsha'at (Saudi SME Authority)** — for licensed logistics operators
- **ZATCA (Zakat, Tax and Customs Authority)** — licensed customs brokers with warehousing divisions
- **Saudi Vision 2030 logistics sector reports** — NCBE and NTC publications list major operators
- **Arabic LinkedIn search:** Use "شركات اللوجستيات السعودية" and "مستودعات" to find companies not indexed in English
- **Argaam / Mubasher** — Saudi financial news; search for logistics company financials
- Known large Saudi 3PLs to include: SAL Saudi Logistics, Almajdouie Logistics, SACO (logistics division), National Shipping Company of Saudi Arabia (Bahri), Agility KSA, Aramex KSA, DB Schenker KSA, Kuehne+Nagel KSA, Panalpina KSA, Al-Futtaim Logistics

**Note:** Many Saudi logistics companies are subsidiaries of large conglomerates (e.g., Olayan, Al-Futtaim, Zamil). Identify the specific logistics entity, not the parent holding company, as the target account.

**Target account volume:** 50–70 accounts; tier down to 25–40 after scoring

---

#### Philippines

**LinkedIn Sales Navigator search string:**
- Industry: Logistics & Supply Chain / Transportation, Trucking & Railroad
- Geography: Philippines
- Company headcount: 201–1000+
- Keywords: "logistics" OR "3PL" OR "warehousing" OR "distribution" OR "trucking"

**Priority directories and sources:**
- **Supply Chain Management Association of the Philippines (SCMAP)** — scmap.org — member directory is one of the best sources for Philippine 3PLs
- **Philippine Multimodal Transport & Logistics Association (PMTLTA)**
- **PHILFREIGHT** — philfreight.com — freight and logistics member directory
- **Philippine Chamber of Commerce and Industry (PCCI)** — logistics sector members
- **BusinessWorld / Philippine Daily Inquirer** — search for logistics company features and rankings
- **SEC (Securities and Exchange Commission Philippines)** — public filings for listed logistics companies
- Known large Philippine 3PLs to include: LBC Express (B2B division), 2GO Group, Air21, Fastech Synergy, GEFCO Philippines, Yusen Logistics Philippines, Agility Philippines, DHL Supply Chain PH, Kuehne+Nagel PH, Integrated Microelectronics Inc. (IMI) logistics arm

**Target account volume:** 60–80 accounts; tier down to 30–50 after scoring

---

#### India

**LinkedIn Sales Navigator search string:**
- Industry: Logistics & Supply Chain / Transportation, Trucking & Railroad
- Geography: India
- Company headcount: 501–1000, 1001–5000, 5001–10000
- Keywords: "logistics" OR "3PL" OR "warehousing" OR "distribution" OR "transport" OR "freight"

**Priority directories and sources:**
- **Confederation of Indian Industry (CII)** — cii.in — logistics and supply chain committee members
- **ASSOCHAM** — assocham.org — member directory for logistics and transport companies
- **All Cargo Transporters Organisation (ACTO)** — freight and logistics operator directory
- **BSE / NSE listed companies** — search "logistics" and "transport" in sector classification; listed companies (Mahindra Logistics, TCI Express, Allcargo, Blue Dart, Delhivery) have public revenue data and cleaner contact information
- **Economic Times / Business Standard** — search for annual "Top 3PL companies in India" rankings and coverage
- **LinkedIn Company Search** — search "3PL India", "contract logistics India", "integrated logistics India"
- **Tracxn / Crunchbase** — for funded logistics companies with verified revenue data
- Known large Indian 3PLs to include as reference: Mahindra Logistics, TCI Express, Allcargo Logistics, Blue Dart (FedEx), DHL Supply Chain India, Delhivery (enterprise division), Safexpress, VRL Logistics, DTDC, Gati Ltd, Spoton Logistics, XpressBees (B2B division), Ecom Express, Shadowfax (enterprise)

**Note:** Revenue data for Indian private companies is often unavailable or stated in INR. Use ₹800 Cr+ as the revenue floor (approximately $100M USD). For listed companies, check annual reports. For private companies, use employee count (500+) and number of warehouse/hub locations as proxies. LinkedIn penetration for Indian logistics executives is high at C-suite level.

**Target account volume:** 80–120 accounts; tier down to 40–60 after scoring

---

### STEP 3: Enrich Account Data
**Time:** 2–3 hours per region | **Owner:** Marketing Ops or SDR

For each account in the staging spreadsheet, enrich the following fields. Use Apollo.io as the primary enrichment tool, supplemented by LinkedIn and manual research.

**Company-level fields to populate:**
| Field | Source |
|-------|--------|
| Company legal name | LinkedIn / company website |
| Website URL | LinkedIn / Google |
| HQ city and country | LinkedIn |
| Employee count (current) | LinkedIn |
| Estimated annual revenue (USD) | Apollo / Crunchbase / news coverage |
| Number of warehouse locations | Company website / LinkedIn |
| Operation types (transport / WMS / fleet) | Company website |
| Current technology stack (if known) | G2 / LinkedIn job postings / news |
| Recent news or trigger event | Google News search: "[Company] logistics technology" |
| Account tier (T1 / T2 / T3) | Assign based on criteria in Step 1 |

**Contact-level fields to populate (minimum 2 contacts per account):**
| Field | Source |
|-------|--------|
| Full name | LinkedIn |
| Job title | LinkedIn |
| Persona category (Tech / Ops / CEO) | Map from `/inputs/persona-definitions.md` |
| LinkedIn profile URL | LinkedIn Sales Navigator |
| Email address | Apollo / Lusha / manual |
| Phone (mobile preferred) | Apollo / Lusha |
| Years in current role | LinkedIn |
| Recent LinkedIn activity (yes/no) | LinkedIn — note if posted in last 30 days |

**Enrichment priority:** Find at minimum one Operations Persona contact and one CEO/MD contact per T1 account. For T2 accounts, prioritize the Operations Persona. For T3 accounts, a single contact is acceptable for initial outreach.

---

### STEP 4: Score and Tier Accounts
**Time:** 1–2 hours | **Owner:** Marketing + Sales alignment required

Run the account scoring prompt (see Claude Prompt 1 below) against each account's enriched data. Score each account on the following criteria:

| Criterion | Weight | Score 1–5 | Notes |
|-----------|--------|-----------|-------|
| Revenue size (vs. $100M floor) | 25% | | 5 = $500M+, 3 = $150–300M, 1 = borderline |
| Operation type fit (TMS + WMS + Fleet) | 25% | | 5 = all three, 3 = two, 1 = one |
| Technology buying signal | 20% | | 5 = active job posting for TMS/WMS, 3 = recent news, 1 = none |
| Contact reachability | 15% | | 5 = 3+ verified contacts, 3 = 1–2 contacts, 1 = no contacts |
| Regional strategic priority | 15% | | Weighted by campaign focus for the quarter |

**Scoring output:**
- 4.0–5.0: Tier 1 — SDR priority sequence + LinkedIn paid ABM audience
- 2.5–3.9: Tier 2 — SDR sequence (lower cadence) + LinkedIn paid ABM audience
- 1.0–2.4: Tier 3 — LinkedIn paid only, no SDR resource

---

### STEP 5: HubSpot Setup and Import
**Time:** 1–2 hours | **Owner:** Marketing Ops / HubSpot Admin

#### 5a: Create Custom Company Properties in HubSpot

Navigate to: **HubSpot → Settings → Properties → Company Properties → Create Property**

Create the following custom properties if they don't already exist:

| Property Label | Internal Name | Field Type | Options / Notes |
|---------------|--------------|------------|-----------------|
| ABM Account Tier | abm_account_tier | Dropdown | T1, T2, T3, Disqualified |
| ABM Region | abm_region | Dropdown | Australia, Indonesia, Saudi Arabia, Philippines, India |
| Operation Types | operation_types | Checkboxes | Transport, Warehousing, Fleet, Hub Management, Customs |
| Estimated Annual Revenue (USD) | estimated_revenue_usd | Number | |
| ABM List Status | abm_list_status | Dropdown | In Progress, Approved, Active, Paused, Archived |
| Technology Buying Signal | tech_buying_signal | Dropdown | Active Job Posting, Recent News, RFP Issued, None |
| Trigger Event | trigger_event | Single-line text | Free text — e.g., "CIO job posting Oct 2024" |
| Last ABM Touch | last_abm_touch | Date | |
| ABM Notes | abm_notes | Multi-line text | |

#### 5b: Create Custom Contact Properties

Navigate to: **HubSpot → Settings → Properties → Contact Properties → Create Property**

| Property Label | Internal Name | Field Type | Options |
|---------------|--------------|------------|---------|
| ABM Persona Category | abm_persona_category | Dropdown | Technology, Operations, CEO |
| LinkedIn Profile URL | linkedin_profile_url | URL | |
| ABM Sequence Status | abm_sequence_status | Dropdown | Not Started, Active, Replied, Meeting Booked, Disqualified |

#### 5c: Import Accounts into HubSpot

1. Open `/inputs/target-account-list-template.csv` — confirm all required columns are populated
2. Navigate to: **HubSpot → Contacts → Companies → Import**
3. Select **Import a file** → **Companies and Contacts** (import both in one file)
4. Map CSV columns to HubSpot properties using the mapping table below:

| CSV Column | HubSpot Property |
|-----------|-----------------|
| Company Name | Company Name |
| Website | Website URL |
| HQ Location | City + Country |
| Employee Count | Number of Employees |
| Estimated Revenue USD | Estimated Annual Revenue (USD) [custom] |
| Account Tier | ABM Account Tier [custom] |
| Region | ABM Region [custom] |
| Operation Types | Operation Types [custom] |
| Tech Buying Signal | Technology Buying Signal [custom] |
| Key Contact Name | Contact First Name + Last Name |
| Key Contact Title | Job Title |
| Key Contact Email | Email |
| Key Contact LinkedIn | LinkedIn Profile URL [custom] |
| Persona Category | ABM Persona Category [custom] |

5. After import, run deduplication check: **HubSpot → Companies → Actions → Manage Duplicates**
6. Set **ABM List Status** to "Approved" for all successfully imported accounts

#### 5d: Build Active Lists for Segmentation

Navigate to: **HubSpot → Contacts → Lists → Create List → Active List**

Create the following lists:

**Company Lists:**
- `ABM | T1 | Australia` — Filter: ABM Account Tier = T1 AND ABM Region = Australia
- `ABM | T1 | Indonesia` — Filter: ABM Account Tier = T1 AND ABM Region = Indonesia
- `ABM | T1 | Saudi Arabia` — Filter: ABM Account Tier = T1 AND ABM Region = Saudi Arabia
- `ABM | T1 | Philippines` — Filter: ABM Account Tier = T1 AND ABM Region = Philippines
- `ABM | T1 | India` — Filter: ABM Account Tier = T1 AND ABM Region = India
- `ABM | T2 | All Regions` — Filter: ABM Account Tier = T2
- `ABM | All Active Accounts` — Filter: ABM List Status = Active

**Contact Lists (for email sequences and LinkedIn audience upload):**
- `ABM | Operations Persona | T1` — Filter: ABM Persona Category = Operations AND Associated Company: ABM Account Tier = T1
- `ABM | CEO Persona | T1` — Filter: ABM Persona Category = CEO AND Associated Company: ABM Account Tier = T1
- `ABM | Tech Persona | T1` — Filter: ABM Persona Category = Technology AND Associated Company: ABM Account Tier = T1
- `ABM | All Contacts | T1+T2` — Filter: Associated Company: ABM Account Tier = T1 OR T2

#### 5e: Export LinkedIn Matched Audiences

1. Navigate to: **HubSpot → Marketing → Ads → Audiences**
2. Create a new audience: **Contact List** → select `ABM | All Contacts | T1+T2`
3. Connect to LinkedIn Campaign Manager via HubSpot Ads integration
4. Allow 24–48 hours for LinkedIn to match contacts (expect 40–60% match rate)
5. Use matched audience as targeting in LinkedIn Paid campaigns (see `skill-07-paid-linkedin-campaigns.md`)

---

### STEP 6: Validate with Sales Before Activation
**Time:** 30–45 minutes | **Owner:** Marketing + Sales Lead

Before activating any SDR sequences or paid campaigns:

1. Share the T1 account list with the regional Sales Lead in a Google Sheet or HubSpot view
2. Sales reviews for: existing relationships, current deal stages, accounts to exclude, accounts to prioritize
3. Mark any Sales-flagged accounts as "Key Account — Sales Owned" in ABM Notes
4. Get written sign-off (Slack message is fine) from Sales Lead before SDR sequences go live
5. Document the sign-off date in the ABM Notes field in HubSpot

---

### STEP 7: Ongoing Maintenance
**Cadence:** Monthly | **Owner:** Marketing Ops

- **Add new accounts:** Run a fresh LinkedIn Sales Navigator search monthly; add net-new accounts that meet ICP criteria
- **Re-tier accounts:** Review and update account tier based on new information (revenue growth, new job postings, trigger events)
- **Remove disqualified accounts:** Set ABM List Status = Archived for accounts that have been acquired, gone out of business, or formally disqualified by sales
- **Refresh contact data:** Re-enrich contacts every 90 days via Apollo to catch role changes
- **Buying signal sweep:** Monthly Google News search for all T1 accounts: `"[Company Name]" logistics technology OR TMS OR WMS OR "digital transformation"`

---

## Ready-to-Use Claude Prompts

---

### Claude Prompt 1 — Account Scoring

Copy and paste this prompt with the account data filled in:

```
You are a B2B marketing analyst specializing in enterprise logistics software.

Score the following 3PL company as a target account for Ramco's logistics platform (TMS, WMS, Fleet Management, Rating & Billing). The ICP is: 3PL companies with $100M+ USD annual revenue in Australia, Indonesia, Saudi Arabia, or Philippines.

Account data:
- Company: [COMPANY NAME]
- Country: [COUNTRY]
- Estimated Revenue: [REVENUE]
- Employee Count: [HEADCOUNT]
- Operation Types: [e.g., contract warehousing, managed transport, fleet]
- Known Technology Stack: [e.g., SAP ERP, legacy TMS, spreadsheets]
- Trigger Events: [e.g., CIO hired 3 months ago, job posting for WMS implementation manager]
- Recent News: [PASTE ANY RELEVANT HEADLINES]

Score this account from 1–5 on each criterion:
1. Revenue fit (vs. $100M minimum)
2. Operational complexity fit (TMS + WMS + Fleet overlap)
3. Technology buying signal strength
4. Strategic regional priority
5. Overall contact reachability

Provide:
- A score out of 5 for each criterion
- A weighted overall score (Revenue 25%, Ops Fit 25%, Buying Signal 20%, Regional Priority 15%, Reachability 15%)
- A recommended tier (T1 / T2 / T3)
- One sentence explaining the primary reason for the tier assignment
- One recommended first outreach angle (what pain point to lead with for this specific account)
```

---

### Claude Prompt 2 — Account Research Brief

Use this prompt to generate a 1-page research brief for each T1 account before SDR outreach:

```
You are a B2B sales researcher preparing a pre-call brief for an enterprise software sales rep.

Research target:
- Company: [COMPANY NAME]
- Country: [COUNTRY]
- Website: [URL]
- Known contacts: [LIST NAMES AND TITLES]
- Operation types: [TRANSPORT / WAREHOUSING / FLEET / etc.]
- Source of lead: [LinkedIn / Industry directory / referral]

Using your knowledge of [COMPANY NAME] and the logistics market in [COUNTRY], produce a pre-call research brief with the following sections:

1. **Company Overview** (3–4 sentences): What does this company do, who are their customers, how large are they, and what markets do they serve?

2. **Likely Technology Pain Points** (3 bullet points): Based on their size, operation type, and region, what are the most likely TMS/WMS/Fleet pain points they are experiencing? Be specific to 3PL operators of this scale in [COUNTRY].

3. **Buying Triggers to Reference** (2–3 bullet points): What recent events, industry trends, or regulatory changes in [COUNTRY] make now a relevant time to reach out? Include Vision 2030 / logistics digitization in Saudi Arabia, e-commerce growth in Indonesia/Philippines, or supply chain resilience in Australia as relevant.

4. **Recommended Persona to Contact First** (1 recommendation with title and rationale): Who should the SDR contact first — the Operations Persona, Tech Persona, or CEO? Why?

5. **Opening Line Suggestion** (2 options): Write two personalised opening lines for a LinkedIn connection request or cold email first touch. Each should be under 50 words, reference something specific to this company or region, and NOT mention Ramco by name in the first line.

Keep the brief to one page. Be specific — no generic logistics industry statements.
```

---

### Claude Prompt 3 — HubSpot Import Preparation

Use this prompt to clean and format raw account data before HubSpot import:

```
You are a marketing operations specialist preparing a B2B account list for CRM import.

I have the following raw account data that needs to be cleaned and formatted for import into HubSpot. Apply the rules below and return a formatted table ready for CSV export.

Raw data:
[PASTE RAW DATA HERE — company names, websites, contacts, etc.]

Formatting rules:
1. Standardize company names: remove "Pty Ltd", "Inc.", "Co., Ltd" etc. for the display name; keep legal name in a separate column
2. Standardize country names to: Australia, Indonesia, Saudi Arabia, Philippines, India
3. Standardize job titles to match these persona categories:
   - Technology Persona: CIO, VP IT, Director IT, Head of IT, IT Manager (senior)
   - Operations Persona: COO, VP Operations, Head of Transportation, Head of Warehousing, General Manager Operations
   - CEO Persona: CEO, President, Managing Director, Owner, Founder
4. Format all phone numbers in E.164 international format (+61, +62, +966, +63, +91)
5. Validate website URLs (add https:// if missing, remove trailing slashes)
6. Assign ABM Account Tier based on these rules:
   - T1: Revenue $300M+ OR employee count 500+ with complex multi-modal operations
   - T2: Revenue $100M–$300M OR employee count 200–500
   - T3: Revenue $80M–$100M or insufficient data to confirm T2
7. Flag any records with missing email addresses as "Email Required"
8. Flag any duplicate company names

Return a clean table with these columns:
Company Name | Legal Name | Website | Country | City | Employee Count | Estimated Revenue USD | Account Tier | Contact First Name | Contact Last Name | Title | Persona Category | Email | Phone | LinkedIn URL | Notes
```

---

## KPIs

### List Quality KPIs
| Metric | Target | How to Measure |
|--------|--------|---------------|
| ICP match rate | >85% of accounts meet all mandatory filters | Manual audit of 20 random accounts post-import |
| Contact coverage | >80% of T1 accounts have 2+ verified contacts | HubSpot: Companies with 2+ associated contacts |
| Email deliverability | <5% bounce rate on first send | HubSpot email send report |
| LinkedIn match rate | >40% of contacts matched in LinkedIn Matched Audiences | LinkedIn Campaign Manager audience size |
| Data completeness | >90% of required fields populated for T1 accounts | HubSpot property completion report |

### Pipeline KPIs (measure 90 days post-activation)
| Metric | Target | How to Measure |
|--------|--------|---------------|
| T1 accounts with at least 1 outreach touch | 100% | HubSpot sequence enrollment |
| Accounts with an open deal created | >15% of T1 | HubSpot deal report filtered by ABM list |
| Meetings booked from ABM list | >10% of T1 accounts | HubSpot meeting report |
| Pipeline influenced from ABM list | >60% of total pipeline | HubSpot attribution: contact source = ABM list |

---

## Failure Modes and How to Fix Them

| Failure Mode | Symptom | Fix |
|-------------|---------|-----|
| List too broad | Bounce rate >10%, SDRs complaining about poor fit | Re-run ICP filter; tighten revenue floor; manually audit 30 random accounts |
| Low contact coverage | SDRs can't find who to call | Re-run Apollo enrichment; use LinkedIn Sales Navigator "Lead search" filtered to company; ask Sales for warm introductions |
| LinkedIn match rate <30% | Paid audiences too small to run | Supplement with job title + company size targeting in LinkedIn Campaign Manager; increase list size by adding T2 contacts |
| HubSpot import errors | Duplicate records, broken associations | Run deduplication before import; use company website as unique identifier, not company name |
| Sales rejects list | "These aren't the right accounts" | Run a joint ICP scoring session with Sales before building; use their named accounts as T1 anchors |
| Buying signals missing | Generic outreach with no personalization hook | Add trigger event sourcing step (Google News + LinkedIn job postings) before enrichment; block incomplete accounts from SDR activation |
| Stale data (6+ months) | Contacts have changed roles; emails bouncing | Set 90-day re-enrichment cadence in Apollo; monitor LinkedIn for role change notifications on saved leads |

---

## Tools Required

| Tool | Purpose | Required / Optional |
|------|---------|-------------------|
| LinkedIn Sales Navigator (Team) | Account and contact sourcing, lead search, saved alerts | Required |
| Apollo.io | Contact enrichment, email finding, bulk export | Required |
| HubSpot CRM + Marketing Hub Pro | Account import, list segmentation, sequence enrollment, ad audience sync | Required |
| Google Sheets | Staging and cleaning before import | Required |
| Lusha (Chrome extension) | Supplementary email/phone enrichment for missed Apollo records | Optional |
| Cognism | Alternative enrichment for APAC/MENA where Apollo coverage is thin | Optional |
| Hunter.io | Email pattern verification for domains with no direct contact data | Optional |
| Google News Alerts | Set alerts for all T1 company names for ongoing trigger monitoring | Required (free) |
| Crunchbase | Revenue and funding data verification for private companies | Optional |

---

## Related Files
- `/inputs/input.json` — ICP criteria and region definitions
- `/inputs/persona-definitions.md` — Persona titles, pains, and regional nuances
- `/inputs/target-account-list-template.csv` — Import format
- `/skills/acquisition/skill-07-paid-linkedin-campaigns.md` — How to use this list for LinkedIn paid
- `/skills/ops/skill-hubspot-pipeline-setup.md` — Full HubSpot configuration reference
- `/prompts/outbound/linkedin-sequence-cio.md` — Outbound sequences to activate after list is built
