# Skill 03 — Persona Messaging Architecture
## Ramco Logistics Software | Activation

> **Purpose:** Build a complete, approved messaging framework for each of the three buyer personas across all channels and all five regions. This becomes the single source of truth for every piece of copy produced — outbound emails, LinkedIn sequences, ad creative, landing pages, sales decks, and event materials.
> **Output:** Approved messaging matrix per persona per region, loaded as HubSpot tokens and shared with Sales, SDRs, and any copywriter or agency working on Ramco campaigns.
> **Owner:** Product Marketing / Demand Gen Lead
> **Estimated time to complete:** 8–12 hours for initial build; quarterly review cadence

---

## Prerequisites
- [ ] `/inputs/input.json` — read before starting (ICP, regions, personas)
- [ ] `/inputs/persona-definitions.md` — primary input for this skill; read in full before Step 1
- [ ] `/strategy/competitive-landscape.md` — required for differentiation messaging in Step 4
- [ ] Access to HubSpot Marketing Hub (for token setup in Step 6)
- [ ] Sign-off from Sales Lead and at least one regional sales rep per market before messaging goes live
- [ ] Optional: 3–5 customer call recordings or win/loss interview notes to validate language

---

## Why This Skill Exists Before Any Copy Is Written

Every failed campaign at a company like Ramco comes back to the same root cause: someone wrote copy without a shared messaging framework. The SDR used different language than the ad. The landing page said something different from the email. The sales deck contradicted the one-pager. Prospects noticed the inconsistency and trust eroded.

This skill locks the messaging before anything is produced. Once complete, it functions as a constraint document — copywriters fill in the words, but the frame, the pain point, the outcome language, and the proof point are non-negotiable per persona per region.

---

## Step-by-Step Execution Workflow

---

### STEP 1: Extract Raw Messaging Inputs
**Time:** 60 minutes | **Owner:** Product Marketing

Before writing a single message, pull the raw inputs that messaging must be built from. Do not skip this step — messaging built without these inputs will be generic.

**1a. From `/inputs/persona-definitions.md`, extract for each persona:**
- Top 5 business pains (copy the exact list)
- Top 5 desired outcomes (copy the exact list)
- Language they use — exact phrases (copy verbatim)
- What NOT to say (copy the full list)
- Regional nuances per market

Create a working document (Google Doc or Notion page) with three sections — one per persona — and paste in the above raw inputs. This is your messaging brief.

**1b. From `/strategy/competitive-landscape.md`, extract:**
- Ramco's top 3 differentiated claims vs. named competitors
- The one claim no competitor can credibly make
- The most common competitive objection and the approved response

**1c. From sales or customer success (gather if not already documented):**
- The single most common reason prospects choose Ramco (win theme)
- The single most common reason prospects don't choose Ramco (loss theme / objection)
- Three verbatim quotes from customers that describe the value they received
- The two questions prospects ask most in discovery calls — these signal the real pain

If customer quotes or sales inputs are not available, proceed to Step 2 using persona-definitions.md and flag the gap. Revisit once sales provides input.

---

### STEP 2: Define the Core Value Proposition Per Persona
**Time:** 90 minutes | **Owner:** Product Marketing

A core value proposition is a single sentence that answers: *"What does Ramco do, for whom, and what is the primary outcome?"* It must be different per persona because each persona cares about a different outcome.

**Format:**
> Ramco helps [PERSONA ROLE] at [ICP] to [PRIMARY OUTCOME] by [MECHANISM], without [KEY OBJECTION / COST].

Write one core value proposition per persona. These are not taglines — they are internal alignment tools that inform all copy.

**Draft templates to complete:**

**Technology Persona (CIO / VP IT):**
> Ramco gives IT leaders at mid-to-large 3PLs a single, integrated logistics platform — pre-built for TMS, WMS, Fleet, and Billing — that connects to existing ERP systems via documented APIs, without a multi-year integration project or a team of consultants to maintain it.

Refine this draft using the CIO's exact language from persona-definitions.md. Replace any words that don't appear in their vocabulary section.

**Operations Persona (COO / VP Ops / Head of Transport / Head of Warehousing):**
> Ramco gives operations leaders at 3PLs complete visibility and control across transport, warehouse, fleet, and billing in a single platform — so they can reduce cost per shipment, eliminate billing disputes, and onboard new customers without growing headcount.

Refine using the Operations Persona's exact language. Every word in the final version should appear in or be consistent with their vocabulary list.

**CEO Persona (CEO / President / Owner):**
> Ramco helps 3PL CEOs grow revenue and protect margins by giving their operations and IT teams one platform to run the business — replacing the patchwork of systems that slow growth, leak revenue, and create customer retention risk.

Refine using the CEO Persona's exact language. Focus on business outcomes and competitive positioning language.

**Validation test:** Show each value proposition to one regional Sales rep and ask: *"If you said this in a discovery call, would it land?"* If the answer is no, rewrite before proceeding.

---

### STEP 3: Build the Messaging Pillars
**Time:** 2 hours | **Owner:** Product Marketing

Messaging pillars are the 3–4 core themes that all content, campaigns, and outbound copy must support. Every email, ad, LinkedIn message, and case study should be traceable back to one of these pillars.

**Process:**
1. Review the top 5 pains and top 5 outcomes across all three personas
2. Find the themes that appear across multiple personas — these become shared pillars
3. Add one pillar that is unique to each persona where their needs diverge significantly

**Ramco Logistics — Draft Messaging Pillars:**

**Pillar 1: Unified Operations (cross-persona)**
Theme: Ramco replaces disconnected point solutions with one platform across transport, warehouse, fleet, and billing.
- CIO angle: One integration to maintain instead of five. Clean data model. Single vendor for support.
- Ops angle: Real-time visibility across the whole operation from one screen.
- CEO angle: One platform means lower IT costs, faster onboarding, and no data silos hiding margin problems.

**Pillar 2: Billing Accuracy and Revenue Protection (Ops + CEO)**
Theme: 3PLs lose measurable revenue to billing errors, manual rate calculations, and invoice disputes. Ramco's rating and billing engine eliminates this.
- Ops angle: Automated billing from operational data — no spreadsheets, no manual reconciliation.
- CEO angle: Revenue leakage from billing errors directly impacts EBITDA. Ramco closes that gap.

**Pillar 3: Scalable Growth Without Headcount (Ops + CEO)**
Theme: Ramco lets 3PLs onboard new customers, add new lanes, and handle volume growth without a proportional increase in operational headcount or IT resource.
- Ops angle: Configurable workflows mean ops teams can set up a new client in days, not months.
- CEO angle: The business can grow without the cost curve growing at the same rate.

**Pillar 4: Implementation Confidence (CIO + CEO)**
Theme: Ramco has a structured, low-risk implementation methodology with documented timelines, phased rollout options, and dedicated support — backed by reference customers at similar 3PLs.
- CIO angle: Phased implementation, clean APIs, dedicated technical project manager, post-go-live support SLA.
- CEO angle: We've done this before at 3PLs your size. Here's who you can call.

**Pillar 5: Regional Fit and Local Support (cross-persona, region-specific)**
Theme: Ramco is built for the logistics operating environment in [region] — local compliance, local language support, local implementation team.
- Varies by region — see Step 5 for region-specific messaging.

---

### STEP 4: Write the Full Messaging Matrix
**Time:** 3–4 hours | **Owner:** Product Marketing (use Claude Prompt 1 to accelerate)

The messaging matrix is a structured table that maps every combination of: persona × channel × messaging pillar → approved copy block.

Build one matrix per persona. Each matrix contains:

**Matrix structure:**

| Element | Approved Copy |
|---------|--------------|
| **Core value proposition** | (from Step 2) |
| **Primary pain point headline** | One sentence, pain-led |
| **Primary outcome headline** | One sentence, outcome-led |
| **Three proof points** | Each under 20 words, quantified where possible |
| **Primary CTA** | For bottom-of-funnel conversion |
| **Secondary CTA** | For mid-funnel content engagement |
| **Email subject line (cold)** | Under 50 characters, no spam triggers |
| **Email opening line (cold)** | Under 30 words, no mention of Ramco |
| **LinkedIn connection note** | Under 300 characters |
| **LinkedIn first message** | Under 150 words |
| **Ad headline** | Under 70 characters |
| **Ad body (sponsored content)** | Under 150 characters for intro line |
| **Objection response: price** | Two sentences max |
| **Objection response: incumbent vendor** | Two sentences max |
| **Objection response: timing** | Two sentences max |
| **One-line elevator pitch** | Under 25 words |
| **Forbidden phrases** | Pulled from "What NOT to say" in persona-definitions.md |

Complete this matrix for all three personas before writing any campaign copy. Use Claude Prompt 1 below to generate the first draft, then refine with Sales input.

---

### STEP 5: Apply Regional Messaging Adaptations
**Time:** 1–2 hours | **Owner:** Product Marketing + Regional Sales Rep

The core messaging matrix from Step 4 applies globally. Regional adaptations are overlays — they modify tone, contextual references, proof points, and compliance hooks without changing the underlying pillars.

Do not create entirely separate messaging per region. Adapt the global matrix using the rules below.

---

#### Australia

**Tone adaptation:** Direct, plain English, low-context communication style. Australians are skeptical of hyperbole — strip any superlatives ("world-class", "industry-leading") and replace with specifics. If you can't back it with a number or a name, cut it.

**Contextual references that land:**
- Supply chain disruption post-COVID — Australian 3PLs are still addressing resilience gaps
- E-commerce growth driving demand for last-mile and returns management at scale
- Labour shortages in warehousing — automation and technology reducing dependency on headcount
- Sustainability / carbon reporting requirements from ASX-listed retail customers (Woolworths, Coles, JB Hi-Fi)

**Proof points to prioritise:** Any Australian or New Zealand customer reference. ANZ references outweigh global ones by a significant margin. If no AU/NZ reference exists, use a Southeast Asian reference and acknowledge the regional gap honestly.

**Compliance/regulatory hooks:**
- Australian Privacy Act and upcoming Privacy Act reforms (data handling)
- Chain of Responsibility (CoR) laws — technology that provides driver behaviour data and audit trails is a compliance asset
- Safe Work Australia — warehouse safety and incident reporting features

**What to avoid in AU messaging:**
- American spelling or idioms (use "organise" not "organize", "centre" not "center")
- Overly formal or corporate language — it reads as inauthentic
- Any claim that implies Ramco doesn't have a local presence if that's in question — address proactively

**Sample adapted headline (Operations Persona):**
> Generic: "Get real-time visibility across your logistics operation"
> AU-adapted: "See every shipment, every warehouse, every driver — in one screen. No more chasing your team for updates."

---

#### Indonesia

**Tone adaptation:** Relationship-oriented, indirect in early-stage communication. Do not lead with a hard CTA or business problem in the first touch — build context and credibility first. Formal Indonesian business communication is respectful; avoid anything that could read as presumptuous.

**Contextual references that land:**
- Indonesia's e-commerce boom (Tokopedia, Shopee, Lazada logistics demand) driving 3PL growth at pace
- Inter-island logistics complexity — Sumatra, Kalimantan, Sulawesi, Papua operations require different operational models
- Government logistics infrastructure investment (Jokowi-era port and road development) creating new opportunity for 3PLs
- Indonesian Logistics Roadmap 2025 — government digitisation mandate for logistics operators

**Language considerations:**
- First-touch outreach can be in English at senior levels (C-suite), but follow-up materials should have Bahasa Indonesia versions available
- Use "Bapak/Ibu [First Name]" in email salutations for Indonesia-market outreach — "Dear [First Name]" reads as too casual
- Avoid idioms that don't translate directly; keep sentence structure simple for non-native English readers at mid-manager level

**Proof points to prioritise:** Any Southeast Asian customer reference, particularly Indonesia, Malaysia, or Singapore. Shared operational context (inter-island, tropical infrastructure challenges) resonates more than an Australian or Middle Eastern reference.

**Compliance/regulatory hooks:**
- Indonesian Personal Data Protection Law (UU PDP) — effective October 2024; data residency and consent management
- BPOM requirements for pharmaceutical and food logistics clients (regulated goods handling)
- Ministry of Transportation digitisation requirements for freight operators

**What to avoid in ID messaging:**
- Any implication that Indonesian logistics is "behind" or "developing" — this is condescending and factually inaccurate for Tier 1 operators
- Pressure-oriented CTAs ("Act now", "Limited time") — these are culturally tone-deaf in early-relationship stages
- Skipping the relationship-building phase to push for a demo — earn the conversation first

**Sample adapted headline (CEO Persona):**
> Generic: "Grow your 3PL business without growing your cost base"
> ID-adapted: "As Indonesia's logistics market grows, the 3PLs winning the largest contracts are the ones with the digital infrastructure to back it up."

---

#### Saudi Arabia

**Tone adaptation:** Formal, authoritative, and Vision 2030-aware. Saudi business communication at the C-suite level is formal. References to national vision and strategic alignment carry genuine weight — this is not a marketing cliché in Saudi Arabia; it is a real strategic framework that executives are evaluated against.

**Contextual references that land:**
- Saudi Vision 2030 — National Transport and Logistics Strategy targeting Saudi Arabia as a global logistics hub
- NEOM and Red Sea Project creating new logistics demand corridors
- Saudi Post / SPL transformation driving competitive pressure on private 3PLs to modernise
- 2034 FIFA World Cup logistics infrastructure preparation
- Nationalization (Saudization / Nitaqat) — technology that improves productivity per employee helps meet Saudization targets without reducing capability

**Language considerations:**
- All customer-facing materials should have Arabic versions for operational users, even if C-suite conversations happen in English
- Use formal titles in all written communication: "Dr.", "Eng.", "His Excellency" as appropriate
- Avoid contractions in formal written communication (use "do not" not "don't")
- Right-to-left layout considerations for any Arabic-language digital assets

**Proof points to prioritise:** Gulf region (UAE, Kuwait, Bahrain, Qatar) references carry significant weight. Saudi-specific references are ideal but rare — GCC references are the next best option. Global references from large 3PLs (DHL, Aramex, Agility) are acceptable if no GCC reference exists.

**Compliance/regulatory hooks:**
- PDPL (Personal Data Protection Law) — Saudi data residency requirements; cloud hosting in Saudi AWS/Azure regions
- ZATCA e-invoicing mandate (Phase 2) — Ramco's billing engine must support ZATCA-compliant e-invoicing (Fatoora)
- SASO product compliance tracking for 3PLs handling regulated goods
- Saudization workforce reporting — systems that provide workforce productivity data support compliance reporting

**What to avoid in SA messaging:**
- Any imagery or language associated with alcohol, pork products, or other religiously prohibited items in case study or example content
- Overly casual tone or first-name-only salutations in initial outreach
- Implying a rushed timeline — Saudi decision cycles are long and pushing for speed signals disrespect for the process
- Any competitive claim that names a Saudi-owned competitor negatively — this can damage relationships irreparably

**Sample adapted headline (CEO Persona):**
> Generic: "Win more enterprise contracts with a platform that proves your digital capability"
> SA-adapted: "Saudi Arabia's National Transport and Logistics Strategy demands world-class digital infrastructure. The 3PLs positioned to benefit are building that foundation now."

---

#### Philippines

**Tone adaptation:** Warm, relationship-aware, and value-conscious. Filipino business culture values personal connection ("pakikisama") — purely transactional outreach performs poorly. Reference shared context, mutual connections, or industry events to establish familiarity. Messaging should be aspirational but grounded in practical ROI.

**Contextual references that land:**
- Philippine e-commerce growth (Shopee, Lazada, TikTok Shop) driving demand for last-mile and fulfillment logistics
- Metro Manila traffic and infrastructure constraints making route optimisation and real-time dispatch visibility a daily pain
- Typhoon and disaster resilience — business continuity and system availability are genuine concerns for Philippine operators
- ASEAN integration creating cross-border logistics opportunities for Philippine 3PLs
- BPO sector growth driving demand for office supply chain and document logistics at scale

**Language considerations:**
- English is the primary language of business in the Philippines — no translation required at senior levels
- Filipino business English is warm and often more formal than Australian English; avoid overly blunt or terse copy
- References to specific Manila locations (BGC, Makati, Alabang industrial areas) signal local knowledge and build credibility

**Proof points to prioritise:** Philippine-specific references first, then Southeast Asian (Indonesia, Thailand, Vietnam) references. Stories involving e-commerce logistics, cold chain, or pharma distribution are highly relevant given the Philippine customer mix.

**Compliance/regulatory hooks:**
- Philippine Data Privacy Act (DPA) — Republic Act 10173; data handling and consent requirements
- FDA Philippines compliance for cold chain and pharma logistics clients
- BOC (Bureau of Customs) integration for 3PLs with customs brokerage operations
- LTFRB (Land Transportation Franchising and Regulatory Board) compliance for fleet operators

**What to avoid in PH messaging:**
- Pure cost-cutting framing without a growth narrative — cost reduction messaging alone can imply headcount reduction, which is a sensitive topic
- Ignoring the typhoon/resilience angle — it's a real operational concern that competitors often overlook
- Referencing Manila traffic as a negative without positioning Ramco as a solution — context without solution is just complaining

**Sample adapted headline (Operations Persona):**
> Generic: "Reduce cost per shipment with automated rating and billing"
> PH-adapted: "With Metro Manila traffic adding unpredictability to every delivery, Philippine 3PLs that win are the ones with real-time dispatch visibility and automated billing that closes the loop without the manual work."

---

#### India

**Tone adaptation:** Analytically rigorous, commercially direct, and compliance-aware. Indian enterprise buyers — particularly CIOs and COOs at large 3PLs — are technically demanding and expect vendors to demonstrate depth before earning the conversation. Lead with specifics: integration architecture, GST compliance capability, and relevant references. Do not lead with a value proposition before establishing credibility. CEOs at BSE/NSE-listed companies respond to ROI framing tied to analyst optics and competitive positioning.

**Contextual references that land:**
- India's logistics cost as a percentage of GDP (13–14% vs global benchmark of 8%) — a persistent operational efficiency gap that technology is positioned to close
- GST e-way bill compliance as a daily operational pain — manual e-way bill generation, FASTag reconciliation, and GSTN API failures create measurable team hours lost per week
- PM Gati Shakti and the National Logistics Policy — government mandate for supply chain modernisation provides strategic cover for technology investment at CEO level
- E-commerce logistics boom (Meesho, Flipkart, Amazon India, quick commerce) creating surge capacity and multi-client complexity that legacy systems cannot handle
- Multi-modal transport complexity across road, rail, and coastal shipping — Indian 3PLs need a platform that handles all three without separate systems
- Family-owned conglomerates transitioning to professional management — technology decisions are increasingly made by a hired CXO team, not the promoter family

**Language considerations:**
- English only for all enterprise B2B communication in India — no Hindi or regional language variants required at C-suite and VP level
- Indian business English is formal and precise; avoid overly casual tone or American slang
- Titles matter — use full titles (VP – Supply Chain, Head of Logistics Operations, Chief Information Officer) in written communication
- Reference specific metro cities when relevant (Mumbai, Delhi NCR, Bangalore, Chennai, Pune) — it signals local presence and operational understanding

**Proof points to prioritise:** Indian customer references are the highest-value proof point. In their absence, prioritise Southeast Asian references (Indonesia, Philippines) over Western ones — shared operational context (multi-modal complexity, growth market conditions, cost-sensitive environment) resonates more than an Australian or US reference. Named 3PL references from CII or ASSOCHAM-networked companies carry additional credibility.

**Compliance/regulatory hooks:**
- GST e-way bill generation and GSTN API integration — non-negotiable for any Indian 3PL handling taxable goods; a qualifying question in every discovery call
- FASTag toll reconciliation — 3PLs with highway fleets require automated FASTag data integration for accurate cost-per-trip reporting
- RBI and MEITY data residency requirements — enterprise IT leaders will require confirmation of India data residency for cloud deployments; AWS Mumbai or Azure India regions
- Goods in Transit insurance compliance and challan management — operational requirements that IT teams track manually in many mid-size 3PLs
- e-POD (electronic proof of delivery) linked to GST invoice for B2B logistics — reduces billing disputes and accelerates accounts receivable

**What to avoid in India messaging:**
- Any implication that India's logistics sector is unsophisticated — the top-tier Indian 3PLs are running complex, multi-modal, multi-client operations with demanding compliance requirements
- Overuse of cost-reduction framing without growth narrative — Indian CEOs are equally interested in revenue growth and competitive differentiation, not just cost savings
- Vague references to "digital transformation" without specifics — Indian CIOs see through generic transformation messaging; they want to know what APIs are available and whether the system has handled GST e-way bill at scale
- Rushed CTA or urgency language — Indian enterprise decision cycles are 12–18 months; pushing for speed signals a misunderstanding of the buying process
- Competitor naming (SAP, Oracle, Locus, FarEye) in early-stage outreach — wait until the competitive dynamic is confirmed in discovery

**Sample adapted headline (CEO Persona):**
> Generic: "Grow your 3PL business without growing your cost base"
> IN-adapted: "India's logistics cost runs at 13–14% of GDP. The 3PLs changing that number for their own P&L are the ones replacing fragmented systems with a single platform built for GST compliance and multi-modal scale."

---

### STEP 6: Load Messaging into HubSpot as Personalization Tokens
**Time:** 45–60 minutes | **Owner:** Marketing Ops / HubSpot Admin

HubSpot personalization tokens allow messaging matrix copy to be stored once and pulled dynamically into emails, sequences, and landing pages. This enforces consistency — when messaging is updated, it updates everywhere.

#### 6a: Create Company Properties as Messaging Anchors

Navigate to: **HubSpot → Settings → Properties → Company Properties**

Confirm the following properties exist (create if not — see `skill-hubspot-pipeline-setup.md` for full setup):
- `abm_persona_category` — Technology / Operations / CEO
- `abm_region` — Australia / Indonesia / Saudi Arabia / Philippines / India
- `abm_account_tier` — T1 / T2 / T3

These three properties are the basis for dynamic messaging in HubSpot. Every email sequence and landing page should reference them for conditional content logic.

#### 6b: Create a Messaging Reference List in HubSpot

Navigate to: **HubSpot → Marketing → Files and Templates → Design Tools**

Create a new coded file: `messaging-reference.html`

This file is not a live page — it is a reference document for your marketing team listing all approved messaging by persona and region. Store it in HubSpot for version control.

Alternatively, store the messaging matrix in a pinned HubSpot Note on a "Ramco Messaging" company record used as an internal reference — this makes it searchable within the CRM.

#### 6c: Set Up Smart Content Rules in HubSpot Emails

For any nurture email or campaign email that varies by persona:

Navigate to: **HubSpot → Marketing → Email → Create Email → Smart Rules**

Create smart rules based on:
- **Contact property:** `abm_persona_category` → show different value prop paragraph per persona
- **Contact property:** `abm_region` → show different case study or proof point per region
- **Contact property:** `abm_account_tier` → show different CTA (T1: Book a call / T2: Download guide / T3: Read more)

**Smart content blocks to configure per email template:**
1. Opening value statement (varies by persona)
2. Primary pain point reference (varies by persona)
3. Proof point / case study (varies by region)
4. CTA copy and link (varies by tier)

#### 6d: Build Persona-Segmented Contact Lists for Sequence Enrollment

Navigate to: **HubSpot → Contacts → Lists → Create List → Active List**

These lists drive which contacts receive which messaging variant:

| List Name | Filter Logic |
|-----------|-------------|
| `Messaging | Tech Persona | AU` | ABM Persona = Technology AND Region = Australia |
| `Messaging | Tech Persona | ID` | ABM Persona = Technology AND Region = Indonesia |
| `Messaging | Tech Persona | SA` | ABM Persona = Technology AND Region = Saudi Arabia |
| `Messaging | Tech Persona | PH` | ABM Persona = Technology AND Region = Philippines |
| `Messaging | Tech Persona | IN` | ABM Persona = Technology AND Region = India |
| `Messaging | Ops Persona | AU` | ABM Persona = Operations AND Region = Australia |
| `Messaging | Ops Persona | ID` | ABM Persona = Operations AND Region = Indonesia |
| `Messaging | Ops Persona | SA` | ABM Persona = Operations AND Region = Saudi Arabia |
| `Messaging | Ops Persona | PH` | ABM Persona = Operations AND Region = Philippines |
| `Messaging | Ops Persona | IN` | ABM Persona = Operations AND Region = India |
| `Messaging | CEO Persona | AU` | ABM Persona = CEO AND Region = Australia |
| `Messaging | CEO Persona | ID` | ABM Persona = CEO AND Region = Indonesia |
| `Messaging | CEO Persona | SA` | ABM Persona = CEO AND Region = Saudi Arabia |
| `Messaging | CEO Persona | PH` | ABM Persona = CEO AND Region = Philippines |
| `Messaging | CEO Persona | IN` | ABM Persona = CEO AND Region = India |

These 15 lists cover every persona/region combination and are the enrollment triggers for all activation sequences.

---

### STEP 7: Get Messaging Approved by Sales
**Time:** 60–90 minutes | **Owner:** Product Marketing + Sales Lead

The messaging matrix is not final until Sales has reviewed and approved it. Marketing-produced messaging that Sales doesn't use is wasted effort.

**Review process:**
1. Share the completed messaging matrix (Google Doc or Notion) with the Sales Lead and one SDR per region
2. For each persona, ask: *"If you used this language in a discovery call, would it land? Is there anything here that would make a prospect disengage?"*
3. For each regional adaptation, ask the relevant regional rep: *"Is there anything here that doesn't fit how [region] buyers actually talk?"*
4. Specifically ask Sales to validate:
   - The primary pain point for each persona (is this the real #1 pain or are we guessing?)
   - The proof points (are these numbers accurate and citable?)
   - The objection responses (are these the actual objections, and do these responses work?)
   - The forbidden phrases list (are there other things we should never say?)
5. Collect feedback, update the matrix, and get a final written sign-off (email or Slack)
6. Save the approved version as `v1.0` with the date in the document header

**Escalation:** If Sales and Marketing disagree on messaging, the tie-breaker is customer language — pull win/loss call recordings or customer interview transcripts. The customer's own words always win.

---

### STEP 8: Distribute and Enforce
**Time:** 30 minutes | **Owner:** Marketing Lead

Once approved, the messaging matrix must be distributed so it is actually used.

- **SDR team:** Host a 30-minute messaging walkthrough. Share the matrix as a pinned resource in the SDR Slack channel. Reference it in SDR onboarding.
- **Agency / copywriters:** Include the messaging matrix as a mandatory brief attachment for any copy assignment. No brief should be accepted without confirming the copywriter has read it.
- **Paid media:** Provide ad copy team with the approved ad headline and body variants per persona. No ad should go live that uses language not in the matrix or that contradicts the forbidden phrases list.
- **HubSpot sequences:** SDRs must use the approved email opening lines from the matrix. Custom personalisation is encouraged within the opening sentence — but the value proposition sentence that follows must come from the matrix.
- **Version control:** When messaging is updated (quarterly review), increment the version number, note what changed and why, and re-distribute. Notify all users of the change.

---

## Ready-to-Use Claude Prompts

---

### Claude Prompt 1 — Full Messaging Matrix Generator

Use this prompt to generate the first draft of the messaging matrix for any persona/region combination. Refine the output with sales input before approving.

```
You are a senior B2B product marketing manager specialising in enterprise logistics software.

Generate a complete messaging matrix for the following persona and region. This matrix will be used as the approved copy source for all outbound sequences, email nurture, LinkedIn ads, and sales enablement materials.

Company: Ramco Systems — Logistics Software
Product: Integrated logistics platform (TMS, WMS, Fleet Management, Hub Management, Rating & Billing)
ICP: 3PL companies with $100M+ annual revenue

Target persona: [PERSONA — e.g., COO / VP Operations / Head of Transport]
Target region: [REGION — e.g., Australia]

Persona context:
- Primary role in buying process: End-user Champion
- Top pains: [PASTE TOP 5 PAINS FROM persona-definitions.md]
- Desired outcomes: [PASTE TOP 5 OUTCOMES FROM persona-definitions.md]
- Language they use: [PASTE EXACT PHRASES FROM persona-definitions.md]
- What NOT to say: [PASTE FORBIDDEN PHRASES FROM persona-definitions.md]
- Regional nuances: [PASTE REGIONAL NUANCES FOR THIS PERSONA/REGION FROM persona-definitions.md]

Generate the following messaging elements. Every element must:
- Use only language this persona would recognise as their own
- Reference a specific outcome or pain, not a feature
- Be immediately usable with no placeholders
- Reflect the regional context provided

1. Core value proposition (1 sentence, under 40 words)
2. Primary pain point headline (1 sentence, problem-led, under 15 words)
3. Primary outcome headline (1 sentence, result-led, under 15 words)
4. Three proof points (each under 20 words, quantified where possible — use realistic but conservative numbers if exact figures are unavailable)
5. Primary CTA (for demo/meeting request — under 8 words)
6. Secondary CTA (for content download — under 8 words)
7. Cold email subject line — 3 options (under 50 characters each, no spam triggers, no Ramco branding)
8. Cold email opening line — 3 options (under 30 words each, specific to this persona's pain, no mention of Ramco)
9. LinkedIn connection request note (under 280 characters, conversational, no pitch)
10. LinkedIn first message after connection (under 120 words, value-first, soft CTA)
11. LinkedIn ad headline (under 70 characters)
12. LinkedIn ad intro text (under 150 characters — the line visible before "see more")
13. Objection response: "We already have a system in place" (2–3 sentences)
14. Objection response: "We don't have budget for this right now" (2–3 sentences)
15. Objection response: "We're happy with our current vendor" (2–3 sentences)
16. One-line elevator pitch (under 25 words)
17. Three phrases NEVER to use with this persona and why

Format as a structured document with clear section headers. Do not use generic B2B marketing language. Every element must be specific to a 3PL operations leader in [REGION].
```

---

### Claude Prompt 2 — Messaging Stress-Test and Refinement

Use this prompt after generating the first draft to identify weaknesses before Sales review.

```
You are a skeptical B2B enterprise buyer — specifically a [PERSONA TITLE] at a [REGION]-based 3PL company with $150M annual revenue.

I am going to show you a set of marketing messages that a logistics software vendor wants to use to reach people like you. For each message, tell me:

1. Does this land? (Yes / Partially / No)
2. What specifically works or doesn't work?
3. What would make you engage or disengage?
4. Is there any language that feels generic, inaccurate, or like it was written by someone who doesn't understand 3PL operations?
5. Rewrite any message that doesn't land — use the language a [PERSONA TITLE] would actually use

Messages to review:
[PASTE THE MESSAGING MATRIX OUTPUT FROM PROMPT 1]

Be harsh. A real [PERSONA TITLE] at a $150M+ 3PL gets dozens of vendor messages per week. They delete most of them in under 3 seconds. Tell me which of these would get deleted and why.

After reviewing all messages, give me:
- A top 3 strengths of this messaging set
- A top 3 weaknesses
- The single most important rewrite to make before this goes live
```

---

### Claude Prompt 3 — Regional Messaging Adaptation

Use this prompt to adapt an approved global messaging matrix for a specific region without rebuilding from scratch.

```
You are a B2B marketing specialist with deep knowledge of enterprise software sales in [TARGET REGION].

I have an approved messaging matrix for Ramco's logistics platform targeting [PERSONA] in a global context. I need you to adapt this messaging for [TARGET REGION] specifically.

Global approved messaging:
[PASTE THE APPROVED GLOBAL MESSAGING MATRIX]

Regional context for [TARGET REGION]:
[PASTE THE REGIONAL NUANCES SECTION FOR THIS PERSONA FROM persona-definitions.md]

Adapt the following elements for [TARGET REGION]. Keep the core value proposition and pillar structure intact — only modify tone, contextual references, proof point emphasis, and compliance hooks:

1. Rewrite the cold email subject lines (3 options) with a [TARGET REGION]-specific hook
2. Rewrite the cold email opening line (3 options) referencing a specific [TARGET REGION] logistics context
3. Replace the generic proof point with one that references [TARGET REGION]-specific outcomes or a named regional customer if available
4. Rewrite the LinkedIn connection note with a [TARGET REGION] contextual reference
5. Identify 2 objection responses that need regional adaptation and rewrite them
6. Add 3 compliance or regulatory references specific to [TARGET REGION] that a sales rep could use as conversation openers
7. List 3 cultural or communication style rules the SDR must follow when reaching out in [TARGET REGION]

Do not invent customer names or fabricate case study results. If a [TARGET REGION] reference is not available, note this and suggest what type of reference would be most credible.
```

---

## KPIs

### Messaging Adoption KPIs (measure at 30 days post-launch)
| Metric | Target | How to Measure |
|--------|--------|----------------|
| SDR adoption rate | >90% of SDRs using approved opening lines | Spot-check 5 sent emails per SDR against matrix |
| Forbidden phrase violations | 0 in approved campaign copy | Copy audit before any campaign goes live |
| HubSpot smart content configured | 100% of active nurture emails | HubSpot email smart rule audit |
| Messaging matrix sign-off obtained | All 3 personas × 5 regions | Sign-off log in messaging document header |

### Messaging Performance KPIs (measure at 60–90 days)
| Metric | Target | Baseline (if available) | How to Measure |
|--------|--------|------------------------|----------------|
| Cold email open rate | >30% | | HubSpot sequence report |
| Cold email reply rate | >5% | | HubSpot sequence report |
| LinkedIn connection acceptance rate | >30% | | LinkedIn Sales Navigator |
| LinkedIn reply rate (post-connect) | >15% | | LinkedIn Sales Navigator / manual tracking |
| Meeting booked rate (from outbound) | >8% of contacted accounts | | HubSpot meetings report |
| Ad CTR (LinkedIn Sponsored Content) | >0.6% | | LinkedIn Campaign Manager |
| Messaging consistency score | >85% | | Quarterly copy audit across 20 live assets |

### Qualitative KPIs (measure quarterly)
- Sales team reports that prospects are using Ramco's language back to them in discovery calls (indicator of message penetration)
- No campaign copy rejected by Sales for messaging inconsistency
- At least one prospect quotes a Ramco message verbatim in a meeting (track in CRM notes)

---

## Failure Modes and How to Fix Them

| Failure Mode | Symptom | Fix |
|-------------|---------|-----|
| Messaging is too generic | Low open rates (<20%), SDRs get no replies, Sales doesn't use it | Re-run Step 1 with actual customer call recordings; replace generic outcomes with verbatim customer language |
| Persona messaging conflated | CIO and COO receive the same email copy | Audit HubSpot smart content rules; confirm persona category property is populated; segment lists correctly |
| Regional adaptation skipped | Australian messaging sent to Saudi Arabia prospects; tone or cultural references land badly | Add a region check to the campaign launch QA checklist; never deploy without confirming smart content region rules are active |
| Sales ignores the matrix | SDRs write their own messages; messaging is inconsistent | Run a 30-minute SDR messaging workshop; pin matrix in Slack; make it part of SDR QA review |
| Proof points are unverifiable | Prospects ask for evidence behind claimed results; Ramco can't provide it | Replace estimated numbers with directional language ("reduced", "eliminated", "cut") unless a customer has signed off on the specific metric |
| Messaging becomes stale | Reply rates drop >20% quarter-over-quarter; Sales reports messages feel dated | Trigger a quarterly messaging review; interview 2 recent customers on current pain language; refresh the matrix |
| Forbidden phrases creep back in | Agency or new hire uses "plug-and-play", "best-in-class", "world-class" in copy | Add forbidden phrases to the creative brief template; include in copywriter onboarding; catch in copy review before publish |

---

## Tools Required

| Tool | Purpose | Required / Optional |
|------|---------|-------------------|
| HubSpot Marketing Hub Pro | Smart content, list segmentation, sequence enrollment, token management | Required |
| Google Docs / Notion | Messaging matrix drafting and version control | Required |
| Grain / Gong / Chorus | Customer call recording review for language extraction | Strongly recommended |
| LinkedIn Sales Navigator | Validate persona titles and seniority in target accounts | Required |
| Hemingway App (hemingwayapp.com) | Check readability of copy — target Grade 8 or below for cold outreach | Optional |
| Google Translate / DeepL | Bahasa Indonesia and Arabic translation review | Required for ID and SA regional variants (India uses English only — no translation required) |
| Loom | Record short video walkthroughs of the messaging framework for SDR training | Optional |

---

## Related Files
- `/inputs/persona-definitions.md` — Primary input; read before every messaging task
- `/inputs/input.json` — ICP and region definitions
- `/strategy/competitive-landscape.md` — Differentiation claims for Pillar 4
- `/skills/acquisition/skill-01-abm-account-list-building.md` — Account list that messaging activates against
- `/skills/activation/skill-04-email-nurture-sequences.md` — Where this messaging is applied to email tracks
- `/skills/revenue/skill-06-sales-enablement-kit.md` — Where this messaging feeds into sales materials
- `/prompts/outbound/linkedin-sequence-cio.md` — Outbound sequences using this messaging
- `/prompts/outbound/linkedin-sequence-coo.md`
- `/prompts/outbound/linkedin-sequence-ceo.md`
- `/templates/email-nurture-track1.md` — Email templates built from this messaging
