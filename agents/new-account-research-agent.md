# Agent: New Account Research
Trigger command: "Run the new account research agent for [COMPANY NAME] in [COUNTRY]"
Run when: A new company is identified as a potential 3PL target account

## Skill Files to Read First (in this order):
1. skills/acquisition/skill-01-abm-account-list-building.md
2. skills/activation/skill-03-persona-messaging-architecture.md

## Input Files to Read:
- inputs/input.json
- inputs/persona-definitions.md

## Data I Will Provide After the Trigger Command:
- Company name and country
- Any known details (website, size, how we found them, which persona we met)

## Workflow — Run All Steps in Order Without Pausing:

STEP 1 — ICP Scoring
Score the company against the ICP in inputs/input.json:
- Geography: is the country in AU / ID / SA / PH? Yes or No
- Industry: is the company a 3PL? Yes / Likely / Unknown
- Revenue: does the company appear to be $100M+ revenue?
  Estimate from: employee count, number of warehouses, fleet size, news mentions
  Rate confidence: High / Medium / Low
- Technology maturity: any visible tech signals on their website or LinkedIn?

Assign account tier:
- Tier 1: all criteria met with high confidence
- Tier 2: most criteria met or medium confidence on revenue
- Tier 3: some criteria met, needs more research
- Not a fit: geography or industry mismatch

If result is Not a fit: state the reason and STOP. Do not run further steps.

Save scoring result as the first section of:
campaigns/accounts/[company-name]/[company-name]-account-brief.md

---

STEP 2 — Account Brief
Write a 1-page account brief and append it to:
campaigns/accounts/[company-name]/[company-name]-account-brief.md

Include these sections:

Company Overview:
- Full legal name and trading name
- Headquarters city and country
- Estimated annual revenue (state source and confidence level)
- Estimated employee count
- Key markets they operate in (cities, countries)
- Years in operation

Logistics Operations Profile:
- Estimated number of warehouses or distribution centres
- Fleet size or fleet signals (if findable)
- Key verticals they serve (FMCG, retail, e-commerce, pharma etc)
- Known service lines (transport, warehousing, last mile, customs)

Technology Signals:
- Any technology vendors mentioned on their website
- Any job postings that reveal tech stack (e.g. "SAP experience required")
- Technology maturity rating: Basic / Moderate / Advanced (with reasoning)

Recent News and Growth Signals:
- Any expansion announcements in last 12 months
- New contracts, new markets, new services announced
- Leadership changes relevant to tech or operations buying

Likely Pain Points:
Based on their size, region, and technology maturity — list the top 3
pain points they most likely have that Ramco addresses.
Reference the persona this pain belongs to (CIO / COO / CEO).

Recommended Engagement Angle:
For each of the 3 personas, write one sentence on the best first angle:
- CIO angle: [what to lead with for the technology persona]
- COO angle: [what to lead with for the operations persona]
- CEO angle: [what to lead with for the decision maker persona]

---

STEP 3 — Contact Map
Write the ideal LinkedIn contact search plan and append it to:
campaigns/accounts/[company-name]/[company-name]-account-brief.md

Format as a table:

| Persona | Titles to Search | LinkedIn Search String | Priority |
|---------|-----------------|----------------------|----------|
| Technology (CIO) | CIO, VP IT, Director IT | "[Company Name]" CIO OR "VP IT" OR "Director IT" | High |
| Operations (COO) | COO, VP Operations, Head of Transport, Head of Warehousing | "[Company Name]" COO OR "VP Operations" OR "Head of Transport" | High |
| CEO | CEO, President, Owner, Managing Director | "[Company Name]" CEO OR President OR Owner | High |

Add a note: minimum 3 contacts needed for Tier 1 accounts,
2 contacts for Tier 2 before outreach begins.

---

STEP 4 — LinkedIn Outreach Messages
Write the first LinkedIn connection request message for each of the 3 personas.
Save to a new file: campaigns/accounts/[company-name]/[company-name]-outreach-messages.md

Rules for every message:
- Maximum 300 characters (LinkedIn connection request hard limit)
- Zero product pitch in the first message
- Must reference the company or their region by name
- Must lead with a relevant insight, observation, or question
- Must feel like it was written by a human, not a marketing team
- End with a simple, natural reason to connect

CIO / VP IT Message:
Reference: a technology challenge relevant to 3PLs in their region
Angle: tech landscape awareness, integration complexity, or vendor consolidation

COO / VP Ops / Head of Transport / Head of Warehousing Message:
Reference: an operational challenge specific to their region or vertical
Angle: visibility, cost per shipment, fleet utilisation, or billing accuracy

CEO / President / Owner Message:
Reference: a market trend or competitive dynamic in their region
Angle: growth, competitive edge, or scaling without proportional cost increase

After each message show the character count. Flag if any exceeds 300 characters.

---

STEP 5 — HubSpot Import Record
Write a HubSpot-ready import record and save to:
campaigns/accounts/[company-name]/[company-name]-hubspot-import.md

Include:
Company Properties:
- Company Name:
- Website:
- Country:
- Estimated Annual Revenue:
- Industry: Third-Party Logistics
- Account Tier: [from Step 1]
- ABM Stage: Prospecting
- Lead Source: [how we found them — event / LinkedIn / referral / inbound]
- Account Owner: [recommend based on region — note this as ASSIGN TO REGIONAL AE]

Contact Properties (repeat for each contact found):
- First Name:
- Last Name:
- Job Title:
- LinkedIn URL:
- Persona Type: Technology / Operations / CEO
- Lifecycle Stage: Lead
- Contact Owner: [same as account owner]

HubSpot Actions After Import:
- Enroll company in ABM Tier [1/2/3] list
- Enroll Technology and Operations contacts in LinkedIn Sequence (Skill 02)
- Set follow-up task for AE: within 48 hours of import

---

STEP 6 — Summary
Print the following:

Account: [Company Name] | Country: [Country] | Tier: [Tier assigned]
Tier reasoning: [one sentence]

Contacts to find on LinkedIn:
- CIO tier: [search string]
- COO tier: [search string]
- CEO tier: [search string]

Outreach messages ready: CIO / COO / CEO (preview first 80 chars of each)

Files saved:
- campaigns/accounts/[company-name]/[company-name]-account-brief.md
- campaigns/accounts/[company-name]/[company-name]-outreach-messages.md
- campaigns/accounts/[company-name]/[company-name]-hubspot-import.md

Next action: Find contacts on LinkedIn using search strings above,
then add contact details to the HubSpot import file.
