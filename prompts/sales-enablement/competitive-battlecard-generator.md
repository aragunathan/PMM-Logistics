# Prompt — Competitive Battlecard Generator
## Ramco Logistics Software | Sales Enablement

> **Purpose:** Equip reps with ready-to-use competitive intelligence for every named competitor they will encounter in a Ramco deal. Includes pre-built battlecards for the most common competitive situations across all five regions and Claude prompts for generating new battlecards as new competitors emerge.
> **Owner:** Product Marketing (builds and maintains) + Sales Lead (approves) + Regional Reps (uses in-deal)
> **Rule:** Never use a battlecard to attack a competitor — use it to reframe. The rep who disparages a competitor in front of the prospect looks insecure. The rep who asks the right landmine question lets the competitor disqualify themselves.
> **Update cadence:** Quarterly. Log every competitive mention in HubSpot (custom property: `Competitor Mentioned`) so Product Marketing can track which battlecards need refreshing.

---

## Ground Rules for Using Battlecards

1. **Pull the battlecard before, not during, the call.** Read it before the meeting. Do not open it while the prospect is talking.
2. **Never name the competitor's weakness to the prospect.** Ask the landmine question instead. Let the prospect's answer create the contrast.
3. **Acknowledge competitor strengths.** Prospects know when you're being dishonest. If a competitor has a real advantage, acknowledge it and redirect to where Ramco wins.
4. **One positioning statement per meeting.** Don't try to win every head-to-head — pick the one dimension where the deal is being decided and own that conversation.
5. **Log the outcome in HubSpot.** Every deal where a competitor appeared: which competitor, what stage, what happened. This is how battlecards stay accurate.

---

## Competitive Landscape Overview

| Competitor | Strongest Regions | Champion Persona | Deal Size Where They Appear | Primary Win Theme for Ramco |
|---|---|---|---|---|
| SAP TM / EWM | SA, AU (large enterprise) | CIO | $200M+ 3PL revenue | Purpose-built 3PL vs. shipper-oriented platform; TCO; implementation timeline |
| CargoWise (WiseTech Global) | AU, PH, ID (growing) | CIO / COO | $100M–$500M, freight forwarder + 3PL | Domestic TMS + WMS + Fleet depth; multi-client billing complexity; WMS maturity |
| Oracle OTM | SA, AU | CIO | $250M+ 3PL revenue | 3PL purpose-fit; fleet management; implementation cost; multi-client billing |
| Point solutions / status quo stack | All regions | COO / CEO | Any size | Single data model vs. integration overhead; billing accuracy; IT maintenance cost |
| FarEye | India | CIO / COO | $50M–$250M 3PL (India mid-market) | Full platform depth (TMS+WMS+Fleet+Billing) vs. FarEye's last-mile/dispatch focus; GST e-way bill integration |
| Locus | India | CIO / COO | $50M–$200M 3PL (India mid-market) | Integrated multi-client 3PL platform vs. Locus's route optimisation point solution; billing and WMS depth |

---

## Battlecard 1 — SAP TM / EWM

**Last updated:** March 2026
**Versions in deal:** SAP Transportation Management (TM), SAP Extended Warehouse Management (EWM), SAP S/4HANA with logistics modules

---

### Competitor Snapshot

SAP is the dominant ERP vendor globally and positions its TM and EWM modules as a natural extension for companies already running SAP ERP. In the 3PL market, SAP is most often encountered in large-enterprise deals ($200M+ 3PL revenue) where the CIO or CFO is advocating for consolidation onto one ERP ecosystem. SAP is primarily designed for shippers and manufacturers managing their own supply chains — its 3PL-specific functionality (multi-client operations, complex carrier rating, 3PL billing) requires significant customisation and a system integrator engagement.

---

### When You'll See Them

- **Deal size:** $200M+ 3PL revenue; occasionally mid-market ($100M–$200M) when the company is already running SAP ERP
- **Champion persona:** CIO or IT leadership; sometimes CFO pushing for vendor consolidation
- **Regions:** Strongest in Saudi Arabia (SAP is deeply embedded in Gulf enterprise) and large-enterprise Australia; less common in Indonesia and Philippines mid-market
- **Deal trigger:** Prospect is on a legacy SAP TM version (pre-S/4HANA) and facing a migration decision, or has SAP ERP and is evaluating adding the logistics modules

---

### Their Pitch

- *"You're already running SAP — why bring in another vendor? One data model, one support contract, one upgrade cycle."*
- *"SAP is the global standard. Every ERP-connected customer you have is already integrated with SAP."*
- *"Our implementation partners have done this hundreds of times. It's a proven path."*
- *"With S/4HANA, you get real-time operational data connected directly to your financials."*

---

### Counter-Positioning

Do not argue that SAP is bad. Reframe each claim:

| Their Claim | The Reframe |
|---|---|
| "One vendor consolidation" | "SAP's TM and EWM were designed for shippers managing their own supply chain — when you're a 3PL running multi-client operations, you need a platform built for that model from the ground up, not one you have to customise into it. Ask them how many 3PL-specific multi-client billing rules are native to SAP TM versus what requires ABAP customisation." |
| "Global standard / ERP integration" | "We have pre-built SAP integration connectors — your ERP stays on SAP and Ramco handles the operational layer. You get ERP continuity and a logistics platform that was designed for 3PL operations, not retrofitted to them." |
| "Proven implementation path" | "SAP TM/EWM implementations typically run 18–36 months with a tier-1 system integrator. At Ramco, the first operational module goes live in 60–90 days. Ask them for a timeline and cost estimate including SI fees — that number is often 3–5× the software licence cost." |
| "Real-time data in S/4HANA" | "Real-time operational data is only valuable if the operational platform capturing it is purpose-built for 3PL complexity — multi-client rating, carrier billing, fleet management, and hub operations. SAP's real-time data is only as good as the operational model feeding it." |

---

### Head-to-Head Comparison

| Capability | Ramco | SAP TM / EWM | Notes |
|---|---|---|---|
| Purpose-built for 3PL multi-client operations | Yes — designed for 3PL from ground up | No — designed for shippers; 3PL requires customisation | Most critical differentiator in the deal |
| Multi-client rating and billing complexity | Native — complex tariff, accessorial, multi-modal billing | Requires ABAP customisation or third-party billing add-on | SAP billing reps will downplay this; ask for a live demo of multi-client billing |
| Fleet management (own fleet + contracted carriers) | Native module | Limited; typically requires a third-party add-on | SAP's fleet functionality is basic for complex 3PL fleet operations |
| Hub management | Native module | Not purpose-built | Rarely mentioned in SAP pitch; ask the prospect if they manage hub operations |
| ERP integration | Pre-built SAP connectors (REST API) | Native (same ecosystem) | Acknowledge SAP's native advantage; counter with "we integrate with SAP and add the 3PL operational layer on top" |
| Implementation timeline | 60–90 days for first module | 18–36 months typical for full TM/EWM | Get the prospect to ask their SAP team for a realistic timeline and SI cost |
| Implementation cost (total) | Software licence + structured Ramco implementation | Software licence + SI fees (often 3–5× licence) | Total cost of ownership is the battleground; push for a full TCO comparison |
| Regional support (AU/ID/SA/PH/IN) | Dedicated regional teams in all 5 markets | Global support model; regional SI partners vary in quality | Ramco's local team presence is a real differentiator in Indonesia, Philippines, and India |
| 3PL-specific product roadmap | Product roadmap driven by 3PL operator needs | Product roadmap driven by global enterprise ERP requirements | SAP's TM roadmap prioritises global shipper needs; 3PL features are secondary |
| Cloud architecture | Cloud-native SaaS | S/4HANA Cloud available; on-premise still common in SA/AU | SAP cloud migration from legacy SAP TM is a project in itself; ask what version they're currently on |

---

### Landmine Questions

Ask the prospect — do not mention SAP or any competitor by name:

1. *"When you think about your multi-client billing complexity — different tariff structures, accessorial charges, fuel levies, and billing cycles per customer — how much of that is currently handled natively by your system versus managed manually or through Excel?"*
   — If they say "manually" or "Excel," SAP TM's native billing limitation is already visible.

2. *"Has your team built any custom ABAP code in your current system to handle 3PL-specific processes? And when you upgrade, what happens to those customisations?"*
   — SAP customisations break on upgrades. This is a known pain point for SAP TM customers.

3. *"What's your expectation for go-live on the logistics platform — full deployment, or are you open to a phased approach where you're live on transport management within 90 days?"*
   — The 18–36 month SAP implementation timeline becomes visible when they compare it to Ramco's phased approach.

4. *"When you look at the total cost including system integrator fees, customisation, and the internal IT resource required — how does that compare to what you budgeted for the software itself?"*
   — SAP SI engagement costs often shock prospects who only saw the licence price.

5. *"How important is it that the platform vendor specialises in 3PL operations — as opposed to a vendor who also serves manufacturers, retailers, and shippers with the same core product?"*
   — This frames the purpose-built 3PL question without naming the competitor.

---

### Their Genuine Strengths (Be Honest)

- Native ERP integration for companies already on SAP — this is a real and meaningful advantage that Ramco's API integration partially, but not fully, replaces
- Global brand recognition — procurement committees at large enterprises have SAP on their approved vendor list; Ramco may need to be qualified through a more formal process
- Depth of financial and procurement integration — if the 3PL also needs a full ERP replacement, SAP covers both
- Large global partner ecosystem — SAP's SI network is broad; support escalation options are more varied
- Regulatory localisation in Saudi Arabia — SAP has deep ZATCA, VAT, and PDPL configuration built into S/4HANA for the Gulf market

---

### Win Themes Against SAP

1. **Purpose-built 3PL operations depth** — Ramco's multi-client billing, carrier rating engine, and fleet management are native to the platform; SAP requires customisation to match this. Win by getting the prospect to demo multi-client billing on SAP before they demo Ramco.
2. **Implementation timeline and total cost** — The 60–90 day first module go-live versus 18–36 months SAP TM implementation is a deal-defining comparison. Win by requesting a full TCO comparison that includes SI fees.
3. **3PL product roadmap** — Ramco's product development is driven by 3PL operator feedback. SAP's logistics roadmap is driven by global enterprise ERP requirements. Win by asking the prospect to review Ramco's product roadmap and compare it to SAP TM's most recent release notes.

---

### Competitive Objections — SAP Deals

**"We're already on SAP ERP. It makes sense to standardise on one vendor."**
> *What it really means:* IT is worried about integration complexity and wants to minimise vendor relationships. CFO wants a single support contract.
>
> *Response:* "That makes complete sense — and it's exactly why we built a pre-certified SAP integration connector for Ramco. Your ERP stays on SAP. Ramco handles the 3PL operational layer — multi-client transport, warehouse, fleet, and billing — and passes clean data back to SAP for financial consolidation. You get ERP standardisation and a platform purpose-built for 3PL operations, not a choice between the two. Can I show you how that integration works in a 20-minute technical walk-through?"

**"SAP has a bigger partner ecosystem and more reference customers."**
> *What it really means:* The prospect wants to reduce risk by choosing the safer vendor. They've heard of SAP's implementation stories — including bad ones — and want to know Ramco is credible.
>
> *Response:* "SAP's partner ecosystem is genuinely large — but the relevant comparison is 3PL reference customers, not total customers. I'd like to introduce you to the VP IT at [Australian/regional 3PL reference customer] — they evaluated SAP TM and chose Ramco specifically because SAP's multi-client billing required significant customisation they didn't want to maintain. That's a conversation worth having before you're deep into an SAP evaluation."

**"SAP's implementation is expensive, but we know what we're getting."**
> *What it really means:* They've been through implementation risk before and are willing to pay for certainty.
>
> *Response:* "The certainty of an SAP implementation is real — and so is the 18–36 month timeline and the SI fee commitment, which typically runs 3–5× the software licence. What I'd ask is: what's the cost of being 18 months away from a fully operational platform? In that time, you're still losing billing margin to manual processes, and your competitors who moved faster are winning the RFPs you should be winning. Ramco's phased approach gives you operational certainty in 90 days, not 36 months."

---

### Regional Notes

- **Australia:** SAP is common in large-enterprise AU 3PLs (Toll, Linfox subsidiaries, national FMCG-linked operators). Mid-market AU 3PLs typically find SAP too expensive without a compelling ERP consolidation case. Use the TCO comparison aggressively in AU deals.
- **Indonesia:** SAP is present in conglomerate-linked 3PLs and multinational subsidiaries. Mid-market Indonesian 3PLs are less likely to be on SAP ERP; the consolidation argument is weaker here. Focus on purpose-built 3PL fit and local implementation team.
- **Saudi Arabia:** SAP is deeply embedded in large Gulf enterprises. ZATCA and PDPL arguments work in SAP's favour — counter by demonstrating Ramco's ZATCA Phase 2 compliance is built in natively and does not require a ZATCA-specific SAP add-on. Request a side-by-side ZATCA compliance demo.
- **Philippines:** SAP is less common in mid-market Philippine 3PLs at the $100M–$300M revenue level. If SAP appears in a Philippine deal, it is typically at a conglomerate-owned operator. Focus on implementation timeline, local team, and TCO.
- **India:** SAP is deeply embedded in large Indian conglomerates and multinational subsidiaries operating in India. The key counter-argument in India deals is that SAP TM/EWM does not natively handle GST e-way bill generation and GSTN API integration at the scale Indian 3PLs require — this typically requires a third-party GST tool or ABAP customisation. Lead with GST compliance depth and implementation timeline. India CIOs at large 3PLs are technically sophisticated and will pressure-test this claim — be prepared with a live GSTN API integration demo.

---

### Proof Point to Use in SAP Deals

*"We had a 3PL in [Australia / Saudi Arabia] who had been on SAP ERP for ten years and assumed SAP TM was the natural next step. When they costed the implementation — including the system integrator, the ABAP customisation for multi-client billing, and the 24-month go-live timeline — the total cost was 4× what they had budgeted. They went live on Ramco's transport module in 78 days. SAP integration was handled through our pre-built connector. IT got ERP continuity. Operations got a platform purpose-built for 3PL. The CFO got a bill that was in the original budget."*
— Reference available to qualified prospects (request through your regional Sales Lead)

---
---

## Battlecard 2 — CargoWise (WiseTech Global)

**Last updated:** March 2026
**Also seen as:** CargoWise One, CargoWise edi, WiseTech

---

### Competitor Snapshot

CargoWise, owned by WiseTech Global (ASX: WTC), is the dominant platform for international freight forwarders and customs brokers globally. It has extremely strong network effects within the freight forwarding community and deep customs compliance functionality across many jurisdictions. In the 3PL market, CargoWise appears most often in Australian deals and increasingly in Southeast Asia (Philippines, Indonesia) — typically when the 3PL also manages freight forwarding or customs brokerage alongside domestic transport and warehousing. CargoWise's strength is forwarding and compliance; its domestic TMS, WMS, and multi-client 3PL billing capabilities are significantly less mature.

---

### When You'll See Them

- **Deal size:** $100M–$500M 3PL revenue; strongest presence in freight forwarder-led 3PL businesses
- **Champion persona:** CIO or Head of Forwarding Operations; less commonly the COO in a pure domestic 3PL
- **Regions:** Dominant in Australia and New Zealand; growing in Philippines (freight forwarding community) and Indonesia; less common in Saudi Arabia
- **Deal trigger:** Prospect manages freight forwarding and/or customs alongside domestic transport and warehousing; CIO wants to consolidate on a platform with a strong forwarding pedigree; prospect is comparing "extend CargoWise to cover domestic ops" vs. "deploy Ramco alongside CargoWise for domestic"

---

### Their Pitch

- *"We're the world's most connected logistics platform. Every major forwarder runs CargoWise — your customers and carrier partners are already on it."*
- *"Our network effects mean your data is connected to the rest of the logistics ecosystem automatically — no custom integrations."*
- *"We handle compliance in 180+ countries. No other logistics platform has this depth."*
- *"We're listed on the ASX. We're not going anywhere. Your investment in CargoWise is protected."*

---

### Counter-Positioning

| Their Claim | The Reframe |
|---|---|
| "World's most connected" | "CargoWise's connectivity is genuinely strong for international freight forwarding. For domestic 3PL operations — multi-client transport, warehouse management, fleet, and complex multi-modal billing — we're the purpose-built solution. Most of our customers in Australia run CargoWise for their forwarding division and Ramco for their domestic 3PL operations. They don't have to choose." |
| "Network effects / ecosystem" | "The CargoWise network is valuable for freight forwarders exchanging shipment data. For a domestic 3PL operation, the relevant ecosystem is your transport carriers, your WMS, your ERP, and your customers' portals — and Ramco's integration layer connects to all of them." |
| "Compliance in 180+ countries" | "CargoWise's customs and compliance depth is hard to match for forwarding. For domestic 3PL operations, the compliance requirements that matter are [region-specific: CoR in Australia / UU PDP in Indonesia / ZATCA in Saudi Arabia / DPA in Philippines] — and Ramco is built for those, not generalised global compliance." |
| "ASX-listed, stable investment" | "Ramco Systems is listed on the BSE and NSE in India with a 35-year track record in enterprise software. Our logistics platform is actively developed and roadmapped — this is not a product in maintenance mode." |

---

### Head-to-Head Comparison

| Capability | Ramco | CargoWise | Notes |
|---|---|---|---|
| International freight forwarding | Integration via API | Best-in-class | CargoWise's genuine strength — do not compete here |
| Customs compliance | Regional compliance built in (CoR/AU, ZATCA/SA, UU PDP/ID, DPA/PH) | 180+ countries coverage | Ramco wins on regional domestic compliance depth; CargoWise wins on international customs breadth |
| Domestic TMS (road freight) | Purpose-built — multi-client, carrier management, linehaul/last-mile | Available but less mature for complex domestic 3PL | Key battleground — get a domestic TMS scenario demo on CargoWise |
| WMS (multi-client warehouse management) | Purpose-built — multi-client, multi-temperature, cross-dock | Limited maturity for complex multi-client 3PL warehousing | CargoWise WMS is newer and less battle-tested for complex 3PL warehouse operations |
| Fleet management | Native module — own fleet + contracted carriers | Limited | Ramco clear winner for 3PLs running their own fleet |
| Multi-client 3PL billing and rating | Native — complex tariff structures, accessorial, multi-modal | Basic; complex 3PL billing scenarios require manual intervention | Critical capability for 3PLs with varied customer rate structures |
| Hub management | Native module | Not purpose-built | Ask if the prospect manages a hub or cross-dock operation |
| Pricing model | Per-user/module SaaS licence | Transaction-based pricing (volume sensitive) | At scale, CargoWise's transaction pricing can become unpredictable — ask the prospect for a volume cost projection |
| Regional support (AU/ID/SA/PH) | Dedicated regional teams | Strong in AU/NZ; less resourced in ID and PH | Local support is a differentiator in Indonesia and Philippines |

---

### Landmine Questions

1. *"Your operation includes domestic transport and warehousing — when you think about multi-client billing for your road freight customers with different tariff structures and accessorial charges, how does your current system handle that natively?"*
   — CargoWise's billing for complex domestic 3PL contracts is a known limitation. Let the prospect's description reveal the gap.

2. *"Do you run your own fleet? If so, how are you managing driver assignment, vehicle maintenance scheduling, and fleet utilisation tracking today?"*
   — CargoWise has minimal fleet management capability. If they run their own vehicles, this opens a clean Ramco differentiator.

3. *"If your freight volumes increase significantly — say, a major new customer or a peak season like 11.11/12.12 — how does your current pricing model scale with that volume?"*
   — CargoWise's transaction-based pricing can spike unpredictably at volume. Prompt the prospect to do the math.

4. *"For your warehouse operations — multi-client, multi-temperature, cross-dock — have you done a detailed demo of the WMS specifically for your configuration? Not a generic demo, but your exact warehouse setup?"*
   — CargoWise's WMS is less mature for complex multi-client operations. A scenario-specific demo will expose this.

5. *"When you onboard a new customer, how long does it take to configure their rate card, SLA rules, and reporting structure in your current system? And who owns that configuration — operations or IT?"*
   — If the answer is "IT" or "months," this is a workflow configurability gap that Ramco wins on.

---

### Their Genuine Strengths (Be Honest)

- Best-in-class for international freight forwarding and customs compliance — if the prospect's primary business is forwarding, CargoWise is a legitimate choice and should be acknowledged
- Network effects are real — CargoWise's connectivity within the freight forwarding community creates switching cost that is difficult to overcome for companies with a large forwarding division
- Strong Australian market presence and brand credibility — Australian CIOs know the brand and view it as a safe choice
- ASX listing and WiseTech's financial strength — the vendor stability argument is legitimate
- Active product development and R&D investment — WiseTech reinvests heavily; CargoWise is not a product in maintenance mode

---

### Win Themes Against CargoWise

1. **Domestic 3PL operations depth** — For transport, warehouse, fleet, and billing in a domestic multi-client 3PL, Ramco's purpose-built depth outperforms CargoWise's forwarding-first architecture. Win by getting the prospect to demo both on a domestic road freight + multi-client warehouse scenario.
2. **Multi-client billing complexity** — CargoWise billing for complex domestic 3PL contracts (different rates, accessorials, fuel levies, billing cycles per customer) is a consistent gap. Win by putting a real multi-client billing scenario in front of both vendors in the same week.
3. **Fleet management** — For 3PLs running their own vehicles, Ramco's fleet module is a clear capability gap in CargoWise. Win by making fleet management part of the evaluation criteria.
4. **Predictable pricing at scale** — CargoWise's transaction-based pricing creates cost uncertainty at high volumes. Ramco's per-user/module SaaS model is more predictable. Win by asking both vendors for a cost projection at 2× current volume.

---

### Competitive Objections — CargoWise Deals

**"We've been using CargoWise for our forwarding division for years. Extending it to domestic ops makes sense — one system."**
> *What it really means:* They want to reduce integration complexity and minimise vendor relationships. IT is comfortable with CargoWise.
>
> *Response:* "That's a completely reasonable instinct — fewer vendors means fewer integrations to manage. The question is whether CargoWise's domestic TMS and WMS capability is at the level your operations team needs, or whether you're making an IT simplicity trade-off that your COO will feel every day. The most common configuration we see in Australia is CargoWise handling the forwarding division and Ramco handling domestic transport and warehousing — they integrate cleanly, and each team gets a platform purpose-built for their operation. Would it be worth a 30-minute call with your COO to map out what specifically they need from the domestic TMS before deciding on a single-vendor approach?"

**"CargoWise's network effects mean our carrier data and shipment history is connected to the ecosystem."**
> *What it really means:* They're concerned about losing integration value if they move away from CargoWise.
>
> *Response:* "CargoWise's network is genuinely valuable for your forwarding business — we're not suggesting you replace it there. For domestic road and warehouse operations, the relevant network is your domestic carriers, your ERP, and your customers' portals — and Ramco integrates with all of those. You don't have to choose between CargoWise's forwarding network and a purpose-built domestic 3PL platform."

**"CargoWise is ASX-listed. I know they'll be around in ten years."**
> *What it really means:* Vendor longevity risk is a concern.
>
> *Response:* "That's a fair consideration. Ramco Systems has been listed on the BSE and NSE since the 1990s, and our logistics platform is one of two core product lines the company invests in — not a peripheral acquisition. If vendor longevity is a factor in your evaluation, I can share our product roadmap for the next 18 months and our last three annual reports. We're not a startup and we're not a platform in maintenance mode."

---

### Regional Notes

- **Australia:** CargoWise is strongest here. Expect it in almost every deal that has a freight forwarding component. Frame Ramco as the domestic 3PL operations complement to CargoWise, not a replacement. The "run both" story is credible and reduces prospect anxiety.
- **Indonesia:** CargoWise is growing through the Indonesian freight forwarding community but is less established for domestic 3PL. Local support is a weakness here — Ramco's Jakarta team is a real advantage. Focus on domestic multi-modal (road + sea) depth and local compliance (UU PDP).
- **Philippines:** CargoWise is present in Philippine freight forwarding but less common for domestic 3PL. SCMAP-connected operations leaders typically have exposure to CargoWise but evaluate Ramco on domestic ops depth and local presence.
- **Saudi Arabia:** CargoWise has limited Saudi presence. If it appears, the deal likely has an international freight forwarding component. Use the "run both" story and focus Ramco's positioning on domestic operations, ZATCA compliance, and local support.
- **India:** CargoWise has minimal presence in India's domestic 3PL market. If it appears, the deal has an international freight forwarding component. For Indian domestic 3PL operations, CargoWise has no GST e-way bill integration capability and no GSTN API connection — this is an immediate disqualifier for any Indian 3PL handling domestic taxable freight. Use this clearly.

---

### Proof Point to Use in CargoWise Deals

*"We have a $220M Australian 3PL that ran CargoWise for their forwarding division and Ramco for their domestic transport and warehouse operations. The IT team manages two platforms but only one set of domestic operational integrations. The COO told us: 'We tried to extend CargoWise to cover domestic transport. The demo looked OK. The implementation took twice as long as expected and we were still building workarounds for multi-client billing 12 months in. Ramco was live on domestic TMS in 68 days and billing automation was day one.'"*
— Reference available to qualified prospects (request through your regional Sales Lead)

---
---

## Battlecard 3 — Oracle OTM (Oracle Transportation Management)

**Last updated:** March 2026
**Also seen as:** Oracle Transportation Management Cloud, Oracle Fusion Transportation Management, Oracle SCM Cloud

---

### Competitor Snapshot

Oracle OTM (Oracle Transportation Management) is Oracle's supply chain and transportation management platform, positioned for enterprise shippers and logistics-intensive manufacturers. Like SAP, it is primarily designed for companies managing their own supply chains — not 3PL operators running multi-client transport and warehouse operations for third parties. Oracle appears in 3PL deals primarily in Saudi Arabia (Oracle is deeply embedded in Gulf enterprise IT), large-enterprise Australian deals, and occasionally in global multinational 3PLs standardising on Oracle SCM Cloud. The common entry point is an existing Oracle ERP (E-Business Suite or Fusion) customer seeking to extend into logistics.

---

### When You'll See Them

- **Deal size:** $250M+ 3PL revenue; occasionally mid-market when the company is already running Oracle ERP
- **Champion persona:** CIO or CFO advocating for Oracle ecosystem consolidation
- **Regions:** Strongest in Saudi Arabia (Oracle ERP is common in large Gulf enterprises); large-enterprise Australia; less common in Indonesia and Philippines mid-market
- **Deal trigger:** Prospect is on Oracle ERP and is evaluating extending to Oracle OTM Cloud, or is on a legacy Oracle TM version and facing a cloud migration decision

---

### Their Pitch

- *"You're on Oracle ERP — Oracle OTM connects natively. One vendor, one support escalation, one upgrade cycle."*
- *"Oracle SCM Cloud gives you end-to-end supply chain visibility from procurement through to last-mile delivery."*
- *"Oracle is a proven global platform with thousands of customers in logistics."*
- *"Our AI and analytics capabilities are built into the platform — no third-party BI tool required."*

---

### Counter-Positioning

| Their Claim | The Reframe |
|---|---|
| "One Oracle vendor" | "Oracle OTM was designed for shippers managing their own supply chain — the platform's core data model is built around a company moving its own goods. For a 3PL managing multi-client operations, complex carrier billing, and customer-specific SLAs, you're asking Oracle to do something it wasn't designed for without significant customisation. We have a pre-built Oracle ERP integration — you keep Oracle for financials and get a logistics platform purpose-built for 3PL operations." |
| "End-to-end supply chain visibility" | "End-to-end visibility is genuinely important — and it's what Ramco delivers for 3PL operations: transport, warehouse, fleet, hub, and billing on one data model. The question is whether Oracle's visibility model maps to how a 3PL operation actually works — multi-client, multi-modal, with carrier-side fleet management — or whether it maps to how a manufacturer tracks inbound and outbound shipments." |
| "Thousands of logistics customers" | "Oracle has a large installed base. The relevant comparison is 3PL operators at your scale in your region — specifically, operators running multi-client transport and warehouse operations with carrier billing complexity. For that profile, I'd like to put you in front of a reference customer who evaluated Oracle OTM and chose Ramco." |
| "AI and analytics built in" | "Built-in analytics are valuable when the data model underneath them is purpose-built for your operations. Ramco's operational analytics are built on 3PL-specific data: cost per shipment, revenue per client, billing accuracy rate, carrier utilisation. Oracle's analytics are powerful but reflect a shipper-oriented data model — the 3PL-specific metrics require custom reporting configuration." |

---

### Head-to-Head Comparison

| Capability | Ramco | Oracle OTM | Notes |
|---|---|---|---|
| Purpose-built 3PL multi-client operations | Yes | No — designed for shippers and manufacturers | Core differentiation; frame early |
| Multi-client carrier billing and rating | Native — complex 3PL tariff structures | Requires customisation for 3PL billing model | Ask for a live demo of multi-client billing with 5 different customer rate structures |
| Fleet management (own and contracted) | Native module | Limited; not purpose-built for carrier-side fleet ops | Oracle OTM manages shipment tendering; it does not manage carrier fleet operations |
| WMS integration | Native unified platform | Separate Oracle WMS Cloud module; integration required | Oracle's TM and WMS are separate products with a separate implementation |
| Hub management | Native module | Not purpose-built | Rarely mentioned in Oracle pitch |
| ERP integration | Pre-built Oracle ERP connectors | Native (same Oracle ecosystem) | Acknowledge Oracle's native advantage; counter with "we integrate with Oracle and add 3PL operational depth" |
| ZATCA / Saudi e-invoicing compliance | Built in natively | Available in Oracle Fusion for Saudi VAT | Both vendors have ZATCA compliance in Saudi Arabia — Oracle's compliance depth in Gulf is genuine |
| Implementation timeline | 60–90 days first module | 12–24 months typical for Oracle OTM Cloud | SI fees and customisation timeline are key conversation points |
| Implementation cost | Software licence + structured Ramco implementation | Software licence + Oracle SI fees (typically 2–4× licence) | TCO comparison is the battleground |
| Regional support (AU/ID/SA/PH) | Dedicated regional teams in all 4 markets | Global support model; Oracle SI partners in AU and SA | Oracle's Gulf partner ecosystem in SA is strong; this is a genuine advantage in Saudi deals |

---

### Landmine Questions

1. *"For your multi-client billing — where you have different tariff structures, accessorial charges, and billing cycles per customer — can you walk me through how that would be configured in the platform? Not a high-level overview, but the actual configuration workflow for a new customer rate card?"*
   — Oracle OTM's multi-client billing for complex 3PL contracts requires customisation. A configuration walkthrough exposes this.

2. *"Do you manage your own vehicle fleet? If so, how would you handle driver rostering, vehicle maintenance scheduling, and utilisation tracking in the proposed solution?"*
   — Oracle OTM is a transportation management platform for tendering and tracking shipments — not for managing carrier-side fleet operations.

3. *"When you think about onboarding a new customer — setting up their rate card, SLA rules, reporting requirements, and customer portal access — which of those steps would your operations team own versus your IT team?"*
   — Oracle OTM configuration typically requires IT or SI involvement; Ramco's operational configuration is owned by the operations team.

4. *"For the warehouse management — your multi-client warehouse with specific slotting, pick strategies, and billing rules per client — is that in the same platform, or is it a separate product with a separate implementation?"*
   — Oracle WMS Cloud is a separate product from Oracle OTM. A joint Oracle TM + WMS implementation is a significantly larger project.

5. *"What does the total implementation cost look like when you include the system integrator, any customisation required for 3PL-specific processes, and the internal IT resource commitment?"*
   — The gap between Oracle's stated licence price and the actual total cost of an Oracle OTM implementation is often large.

---

### Their Genuine Strengths (Be Honest)

- Native Oracle ERP integration — for companies deeply embedded in Oracle Fusion, this is a real and meaningful advantage
- Saudi Arabia and Gulf market presence — Oracle's Gulf partner ecosystem and ZATCA/VAT compliance depth in Saudi Arabia are genuine; do not dismiss these in Saudi deals
- Analytics and BI investment — Oracle's investment in AI/ML and analytics within Fusion is real; large enterprises who use Oracle Analytics Server benefit from native integration
- Global reference customers in logistics — Oracle's global customer base is broad; they can usually find a reference customer in the relevant sector
- Procurement committee recognition — Oracle is on every enterprise approved vendor list; Ramco may need to clear a qualification hurdle that Oracle does not

---

### Win Themes Against Oracle

1. **3PL purpose-fit** — Oracle OTM is a shipper-oriented TM platform. Ramco is purpose-built for 3PL multi-client operations. Win by running a side-by-side demo of multi-client billing configuration.
2. **Unified platform vs. separate products** — Oracle TM and Oracle WMS are separate products with separate implementations. Ramco's TMS, WMS, Fleet, Hub, and Billing are one platform. Win by mapping the Oracle implementation scope (and cost) against Ramco's.
3. **Implementation timeline and cost** — 60–90 days for Ramco's first module versus 12–24 months for Oracle OTM with SI. Win by getting the prospect to request a formal Oracle implementation estimate including SI fees before they're committed to the evaluation.
4. **Fleet management for own-fleet operators** — Oracle OTM manages freight tendering and tracking; it does not manage a 3PL's own vehicle fleet. Win for any prospect running their own trucks.

---

### Competitive Objections — Oracle Deals

**"We're on Oracle ERP. Extending to Oracle OTM keeps everything on one vendor."**
> *What it really means:* IT wants vendor consolidation. The CIO does not want to manage another vendor relationship.
>
> *Response:* "Vendor consolidation is a legitimate goal, and it's why we built a pre-certified Oracle ERP integration into Ramco. Your financials, procurement, and HR stay on Oracle. Ramco handles the 3PL operational layer — transport, warehouse, fleet, and billing — with real-time data sync back to Oracle Fusion. You get one less operational system to customise and maintain on Oracle, and you get a platform purpose-built for your 3PL model. The IT team manages the integration, not a parallel Oracle implementation."

**"Oracle has a big local partner ecosystem. Support won't be a problem."**
> *What it really means:* Implementation and support risk is a real concern, and Oracle's SI network feels like risk mitigation.
>
> *Response:* "Oracle's SI ecosystem is broad — but the relevant measure is 3PL-specific implementation experience with Oracle OTM in [region]. Ramco's implementation team has dedicated logistics expertise and is locally based in [AU/SA/ID/PH]. We do not subcontract our implementations to a generalist SI. If implementation risk is a factor, I'd suggest asking the Oracle team which specific SI they'd recommend for a 3PL implementation in [region], and asking that SI for their 3PL reference list."

**"Oracle's analytics and AI capabilities are ahead of what you're offering."**
> *What it really means:* The CIO or a technology-oriented stakeholder is impressed by Oracle's analytics pitch.
>
> *Response:* "Oracle's investment in analytics is genuine and impressive. The question worth asking is: what are the 3PL-specific metrics your management team actually needs — cost per shipment, billing accuracy rate, revenue per client, carrier utilisation — and can those be reported natively from Oracle OTM's data model, or does that require a custom data extraction and a separate BI configuration? Ramco's operational analytics are built on a 3PL data model. The metrics your COO needs are in the standard reports on day one."

---

### Regional Notes

- **Saudi Arabia:** Oracle is deeply embedded in Saudi enterprise. Expect Oracle in almost every large SA deal. Oracle's ZATCA and PDPL compliance story in the Gulf is genuine — do not attempt to compete on this alone. Win on 3PL purpose-fit, multi-client billing, fleet management, and Ramco's local team presence.
- **Australia:** Oracle appears in larger AU deals ($250M+ 3PL) where the company is on Oracle ERP. Use the TCO comparison and 3PL purpose-fit arguments. AU procurement teams are methodical — push for a total implementation cost comparison early.
- **Indonesia and Philippines:** Oracle is less common at the mid-market level in these markets. If Oracle appears, the deal is likely at a multinational subsidiary or a conglomerate with Oracle ERP as standard. Use the local support and implementation timeline arguments; these are more decisive than in SA or AU.
- **India:** Oracle is present in large Indian conglomerates and multinational subsidiaries operating in India. The decisive counter-argument in India deals is GST e-way bill and GSTN API integration — Oracle OTM does not have native GSTN API integration, requiring a third-party GST compliance module or customisation. Lead with GST compliance, FASTag reconciliation depth, and Ramco's India-based implementation team. India CIOs at listed companies will also ask about data residency — confirm AWS Mumbai or Azure India hosting.

---

### Proof Point to Use in Oracle Deals

*"We had a Gulf-based 3PL with $450M revenue that was on Oracle Fusion for ERP and was evaluating Oracle OTM to extend into logistics. The IT team got an implementation estimate from two Oracle SIs — the range was 18–22 months and SAR 6–9M in SI fees, on top of the Oracle licence. They went back to the business case. Ramco was implemented in phases: transport live in 85 days, warehouse in five months. Oracle ERP integration was live on day one through the pre-built connector. The CIO kept Oracle for financials. The COO got a 3PL operations platform that was actually built for their model."*
— Reference available to qualified prospects (request through your regional Sales Lead)

---
---

## Battlecard 4 — Status Quo / Point Solutions Stack

**Last updated:** March 2026
**Also seen as:** "We're happy with what we have" / "We have a TMS and a WMS already" / "We'd need to justify replacing working systems"

---

### Competitor Snapshot

The most common competitive situation Ramco faces is not a named vendor — it is the status quo. The prospect is running a combination of a legacy TMS (from one vendor), a WMS (from another vendor or an in-house build), billing in Excel or a semi-manual system, and fleet tracked through spreadsheets or a basic GPS tool. Each system works "well enough" in isolation. The integration layer between them is fragile, manual, and often maintained by one or two people who understand how it was built. The prospect knows it is not ideal but does not have a clear sense of the cost of the current situation — until the right conversation happens.

---

### When You'll See Them

- **Deal size:** Any — this is the dominant competitive situation at $100M–$300M 3PL revenue
- **Champion persona:** COO who has felt the pain and wants to fix it; CIO who has inherited a messy stack; CEO who has just lost a contract because the platform couldn't demonstrate digital capability
- **Regions:** All five — point solutions stacks are universal at this revenue tier
- **Deal trigger:** Lost an enterprise RFP due to technology capability gap; billing team headcount is growing faster than revenue; a key IT person left and the integration layer they built and maintained is now a risk

---

### Their Position (Internal Stakeholder Objections)

- *"Our current TMS works fine for what we need."*
- *"We've invested too much in our current setup to throw it away."*
- *"An implementation will be disruptive — we can't afford downtime."*
- *"We'd need IT resources for a project like this that we don't have right now."*
- *"The cost isn't justified — our current system does the job."*

---

### Counter-Positioning

| Their Position | The Reframe |
|---|---|
| "Our TMS works fine" | "The TMS likely does work fine on its own. The question is whether it works fine connected to your WMS, your billing system, and your fleet tracking — and whether that connection is real-time or manual. What does your team spend per week reconciling data between those systems?" |
| "We've invested too much to throw it away" | "You're not throwing it away — you're replacing the manual integration layer and the billing workarounds with a single system. The sunk cost of what's already been spent doesn't change the ongoing cost of running the current setup: the billing leakage, the IT maintenance, the manual reconciliation, and the enterprise RFPs you can't win." |
| "Implementation will be disruptive" | "Ramco's phased implementation means transport goes live first — 60–90 days — without touching your warehouse or billing. You validate the first module in a live environment before any other system changes. The disruption is contained and the risk is staged." |
| "We don't have IT resources for this" | "Our implementation team brings the resources. Your IT team is not project-managing this — they're approving integration decisions and doing UAT. The average IT time commitment from a client team in Phase 1 is 8–12 hours per week. That is the expectation, not a surprise." |
| "The cost isn't justified" | "The cost of the current setup is less visible but larger. A typical 3PL at your revenue level loses 2–5% of freight under management to billing errors and unrecovered charges annually. For a $150M 3PL, that is $3M–$7.5M per year. That is the cost you are already paying — the question is whether you want to keep paying it." |

---

### Head-to-Head Comparison

| Dimension | Ramco (Single Platform) | Point Solutions Stack | The Cost of the Gap |
|---|---|---|---|
| Operational data model | One unified data model — TMS, WMS, fleet, billing share the same record | Fragmented — each system has its own data model; reconciliation is manual | 5–15 hours/week of manual data reconciliation per operational function |
| Multi-client billing accuracy | Automated — operational event triggers correct rate, accessorial, fuel levy calculation | Semi-manual — rate calculation in spreadsheet or basic billing tool | 2–5% billing leakage on freight under management |
| Real-time visibility | Single operational view — shipment status, warehouse capacity, fleet location on one screen | Real-time visibility requires pulling from 3 systems or calling someone who knows | 3–5 customer calls per day for shipment status; 10–15 minutes per call |
| New customer onboarding | 3–4 weeks — operations team configures rate card, SLAs, reporting in the platform | 2–4 months — IT project to configure each new system and connect the integration layer | Delayed revenue from new customers; sales team frustrated by slow onboarding |
| IT maintenance overhead | One vendor, one codebase, one API set | 3–6 vendors, 3–6 codebases, multiple custom integrations to maintain | 20–30% of IT bandwidth consumed maintaining integration layer |
| Enterprise RFP capability | Customer portal, real-time tracking, digital POD, automated invoicing — demonstrable live | Cannot be credibly demonstrated in a tender | Lost enterprise contracts to more digitally capable competitors |
| Key-person dependency | Platform knowledge is distributed — not locked in one IT person | Integration layer often maintained by one person; if they leave, it's a crisis | Operational risk concentrated in individuals who "know how the system works" |

---

### Landmine Questions

1. *"When your billing team closes the month, what does that process look like — how many people, how many days, and how many disputes typically come out of it?"*
   — This makes the cost of the current billing process visible in the prospect's own numbers.

2. *"If I asked you to show me — right now, without calling anyone — where every shipment that left your warehouse in the last 24 hours currently is, how would you do that?"*
   — Real-time visibility gaps surface immediately. Let the prospect describe the process.

3. *"When you win a new customer, what is the typical time from signed contract to that customer being fully live in your system — rate card configured, reporting set up, portal access given?"*
   — Long onboarding timelines are a cost the prospect has normalised; making the number explicit creates urgency.

4. *"Is the integration between your TMS and WMS maintained by your team internally, or was it built and is supported by a vendor? What would happen if the person who built it left tomorrow?"*
   — Key-person dependency in custom integrations is a real and emotionally resonant risk.

5. *"In the last 12 months, have you had any situations where a potential enterprise customer asked about your digital capabilities — track-and-trace, customer portal, automated invoicing — and the answer wasn't what they were expecting?"*
   — Lost RFPs due to technology gaps are rarely documented but universally experienced. This question surfaces them.

---

### Their Genuine Strengths (Be Honest)

- Lower perceived risk — "the current system works" is a real advantage; change carries disruption risk
- Sunk cost inertia — existing vendor relationships and configurations have genuine value; switching has real transition cost
- Operational familiarity — teams know how to work around current limitations; training on a new system is a real cost
- Ongoing cost is invisible — billing leakage and manual reconciliation cost are real but not line items on a budget

---

### Win Themes Against Status Quo

1. **Make the invisible cost visible** — billing leakage, manual reconciliation hours, IT maintenance overhead, and lost RFPs are real costs that the status quo obscures. Win by building the current-state cost case with the prospect's own numbers before presenting Ramco.
2. **Stage the risk** — phased implementation (transport first, then warehouse, then billing) removes the "big disruption" objection. Win by presenting a Phase 1 scope that is small enough to approve without a board decision and valuable enough to justify on its own.
3. **Enterprise capability gap** — lost contracts due to technology capability are the CEO's problem, not the COO's. Win by connecting the technology gap to a real commercial consequence the CEO cares about.
4. **Key-person risk** — the IT person who maintains the integration layer is an organisational risk. Win by presenting Ramco as the way to eliminate that dependency.

---

### How to Run the Business Case Conversation

Use these numbers when a prospect says "the current system is working fine." Fill in their actual numbers:

```
Monthly shipments: [X]
Average revenue per shipment: [Y]

BILLING LEAKAGE ESTIMATE:
[X shipments] × [Y revenue] × 3% leakage rate = $[Z] per month lost to billing errors
Annual billing leakage: $[Z × 12]

MANUAL RECONCILIATION COST:
Billing team: [N people] × [D days/month] × [hourly rate] = $[cost per month]
Annual reconciliation cost: $[cost × 12]

ONBOARDING COST:
New customers per year: [N]
Months of delayed onboarding per customer: [M months]
Revenue per customer per month: [R]
Annual delayed revenue: [N × M × R]

TOTAL VISIBLE CURRENT-STATE COST:
$[billing leakage + reconciliation cost + delayed revenue]

This is what the current system costs that is not on any budget line.
```

---

### Objections — Status Quo Deals

**"We'd need to get IT to evaluate this, and they're already stretched."**
> *What it really means:* IT resource is genuinely a constraint, and the prospect is not sure the project is worth the bandwidth.
>
> *Response:* "That's the right instinct — this shouldn't become an IT project that consumes your team. Our implementation approach is designed for stretched IT teams: we manage the project, we do the configuration, and we ask for IT involvement at four structured checkpoints — integration sign-off, security review, UAT sign-off, and go-live. The typical IT time commitment in Phase 1 is 8–12 hours per week for 10–12 weeks. That's the commitment. If IT can find 10 hours a week, we can get you live on transport management in 90 days."

**"We've been burned by a software implementation before. I'm not in a rush to do it again."**
> *What it really means:* Past implementation trauma is real and is a legitimate objection. This is not a cost or ROI conversation — it is a risk and trust conversation.
>
> *Response:* "That's a fair reason to be cautious, and I want to be direct about it. What went wrong in that implementation? Was it scope creep, unrealistic timelines, vendor resourcing, or something else? I ask because the answer shapes how we'd structure a proposal for you — and because if the same thing would happen with Ramco, I'd rather tell you that now than after you've committed. Can you tell me what the failure looked like?"

**"Our current vendor is upgrading their platform. We're waiting to see what it looks like."**
> *What it really means:* They are hoping the current vendor will solve the problem, deferring the decision.
>
> *Response:* "That's worth waiting for — if the upgrade actually solves the problem. What's the timeline for the upgrade, and what specific capabilities are you expecting from it? The question I'd ask is: if the upgrade delivers what's promised, what does the operation look like? And if it doesn't deliver, how much time have you lost? I'm not suggesting you rush a decision — I'm suggesting we define what 'good enough' looks like for your operation so you have a clear benchmark to evaluate the upgrade against when it comes."

---

### Proof Point to Use in Status Quo Deals

*"We started a conversation with a $160M Australian 3PL whose COO had been 'managing fine' on a three-system stack for six years. We asked them to calculate their billing leakage over three months — they found $310,000 in unrecovered charges from incorrect accessorial calculations. That was the conversation that changed. Not a demo. Not a ROI projection. Their own numbers. They went live on Ramco billing in Phase 1 and recovered $1.1M in the first year."*
— Reference available to qualified prospects (request through your regional Sales Lead)

---
---

## Part 2 — Claude Generator Prompts

Use these prompts to generate a new battlecard when a new competitor appears in deals, or to refresh an existing battlecard with updated intelligence.

---

### Prompt 1 — New Competitor Battlecard Generator

```
You are a B2B competitive intelligence specialist for Ramco Systems — a logistics software company targeting 3PL operators with $100M+ annual revenue across Australia, Indonesia, Saudi Arabia, Philippines, and India.

Your task is to write a complete competitive battlecard for sales reps to use when the following competitor appears in a deal.

[INPUTS]
- Competitor name: [e.g., Blue Yonder / JDA / Manhattan Associates / Körber / a local vendor name]
- Competitor product(s): [e.g., Blue Yonder WMS, JDA TMS, Manhattan Active WM]
- Where they are appearing: [Regions — AU / ID / SA / PH; deal size range]
- Champion persona in these deals: [CIO / COO / CEO / which persona is advocating for them]
- What they typically say in their pitch: [Any claims or positioning you've heard them use]
- Their known strengths: [What are they genuinely good at? Be honest.]
- Their known weaknesses: [Where do they struggle for 3PL multi-client operations?]
- Recent deal context: [If available — what happened in a recent deal where they appeared?]

[RAMCO CONTEXT — do not change this]
Ramco's primary differentiators:
- Purpose-built for 3PL multi-client operations (not designed for shippers or manufacturers)
- Single integrated platform: TMS + WMS + Fleet Management + Hub Management + Rating & Billing — one data model
- Phased implementation: first module live in 60–90 days
- Regional compliance built in: CoR (AU), UU PDP (ID), ZATCA + PDPL (SA), DPA RA 10173 (PH), GST/e-way bill + GSTN API + RBI/MEITY data residency (IN)
- Local implementation teams in all 5 regions
- Pre-built ERP integrations: SAP, Oracle

[BATTLECARD STRUCTURE — follow this exactly]
1. Competitor Snapshot (3 sentences — who they are, what they are known for, why they appear in 3PL deals)
2. When You'll See Them (deal size, champion persona, regions, deal trigger)
3. Their Pitch (3–4 verbatim or near-verbatim claims they typically make)
4. Counter-Positioning (table: their claim | the reframe — do not attack, reframe)
5. Head-to-Head Comparison (table: capability | Ramco | competitor | notes — 8 rows minimum)
6. Landmine Questions (5 questions to ask the prospect — do not name the competitor, let their answers create the contrast)
7. Their Genuine Strengths (be honest — list 3–4 real strengths reps need to acknowledge)
8. Win Themes (3 themes — what Ramco consistently wins on when this competitor is in the deal)
9. Competitive Objections (3 objections with: what it really means + full conversational response)
10. Regional Notes (one bullet per region — AU, ID, SA, PH, IN — on how this competitor shows up differently in each market)
11. Proof Point to Use (a specific reference story or metric — even if anonymised — that is most credible in a deal against this competitor)

[RULES]
- No generic claims — every counter-positioning statement must reference a specific Ramco capability
- No disparagement — reframe, never attack
- Every head-to-head comparison must be factually supportable; if you are uncertain, note "verify with Product" rather than inventing a capability claim
- Landmine questions must be open-ended and never name the competitor
- The proof point must be specific — company type, region, revenue range, and outcome metric

Write the full battlecard now.
```

---

### Prompt 2 — Battlecard Refresh (New Intelligence Integration)

```
You are a B2B competitive intelligence specialist for Ramco Systems.

I have an existing competitive battlecard and new intelligence I want to integrate. Your task is to:
1. Update the sections that new intelligence changes
2. Add a "What's New" note at the top of the battlecard (2–3 bullet points summarising what changed)
3. Update the "Last updated" date to today

[EXISTING BATTLECARD]
[PASTE EXISTING BATTLECARD HERE]

[NEW INTELLIGENCE]
- Source: [Where this came from — lost deal debrief / rep intel / prospect feedback / public information]
- New product capability they announced or demonstrated: [If applicable]
- New pricing information: [If applicable]
- New regional presence or partnership: [If applicable]
- Deal outcome where they appeared: [Win or loss, what the prospect said]
- New objection or claim that came up: [If applicable]

[RULES]
- Only update sections where the new intelligence changes the content — do not rewrite sections that remain accurate
- The "What's New" box goes directly below the "Last updated" line
- If the new intelligence contradicts an existing claim in the battlecard, update the claim and add "(updated [month year])" after the specific line
- If the new intelligence reveals a Ramco weakness relative to this competitor, add it honestly to "Their Genuine Strengths" — reps need accurate intelligence, not flattering intelligence
- Output the complete updated battlecard, not just the changed sections

Write the updated battlecard now.
```

---

### Prompt 3 — Competitive Deal Debrief (Post-Win or Post-Loss Analysis)

Use after every deal where a named competitor appeared. Paste the output into `/experiments/experiment-log.md` and share with Product Marketing for battlecard updates.

```
You are a B2B sales analyst for Ramco Systems.

I need to document and analyse a competitive deal debrief. Your task is to produce a structured debrief report that captures what happened and what the battlecard implications are.

[DEAL DETAILS]
- Deal outcome: [Won / Lost / Stalled]
- Competitor(s) in the deal: [Name(s)]
- Region: [AU / ID / SA / PH]
- Prospect profile: [Revenue range, operation type — e.g., $180M road + warehouse 3PL]
- Champion persona: [CIO / COO / CEO]
- Deal duration: [How long from first contact to outcome]
- Final decision reason (what the prospect said): [Verbatim or near-verbatim if possible]

[SALES REP INTERVIEW — paste or summarise the rep's account of what happened]
[PASTE NOTES HERE]

[YOUR TASK]
Produce a structured debrief with the following sections:

1. Deal Summary (3–4 sentences — what happened, who was involved, and the outcome)
2. Why We Won / Why We Lost (the real reason, not the stated reason — use the rep notes to identify what actually drove the decision)
3. Competitive Moments (2–3 specific moments in the deal where the competitive situation was decisive — what was said, what happened next)
4. What Worked (messaging, assets, questions, or proof points that moved the deal in our favour)
5. What Didn't Work (messaging or approaches that didn't land, and why)
6. Battlecard Implications (specific updates recommended for the relevant competitor battlecard — new claims, new landmine questions, updated strengths or weaknesses)
7. Process Implications (anything about how the deal was run that should inform the playbook — timing, stakeholder engagement, demo approach)

[RULES]
- Identify the real reason for the outcome, not just the stated reason — these are often different
- Be specific about moments, not general about themes
- Battlecard implications must be concrete: "Add this landmine question" or "Update this counter-positioning statement" — not "improve competitive positioning"
- If we lost, be honest about what the competitor did better — this is the most valuable intelligence

Write the full debrief now.
```

---

## Part 3 — HubSpot Competitive Tracking Setup

Log every competitive appearance in HubSpot so battlecards stay current and Product Marketing knows which competitors are active.

### Custom Contact/Deal Properties to Create

| Property Name | Type | Values | Purpose |
|---|---|---|---|
| `Competitor Mentioned` | Multi-select | SAP TM/EWM, CargoWise, Oracle OTM, Blue Yonder, Manhattan Associates, Status Quo, Other | Track which competitors appear in each deal |
| `Competitive Deal Stage` | Single select | Not competitive, Early awareness, Active evaluation, Head-to-head, Final selection | Track how far competitive evaluation goes |
| `Competitor Win/Loss` | Single select | Won against, Lost to, Stalled — competitor factor | Outcome tracking for battlecard refresh |
| `Competitor Intel Notes` | Multi-line text | Free text | Rep-entered notes on what the competitor said or demonstrated |

### HubSpot Views to Create

1. **Active Competitive Deals** — Filter: `Competitor Mentioned` is known AND `Deal Stage` is not Closed Won/Lost → Shows all live deals with a named competitor
2. **Competitive Win Rate by Competitor** — Report: `Competitor Win/Loss` grouped by `Competitor Mentioned` → Win rate per named competitor; refresh quarterly
3. **Competitive Deal Volume by Region** — Report: `Competitor Mentioned` grouped by `HQ Country` → Shows which competitors are most active per region

### Quarterly Battlecard Review Trigger

Set a recurring task in HubSpot: first Monday of each quarter → assigned to Product Marketing → task: "Review competitive win/loss data and update battlecards for any competitor with 3+ deal appearances last quarter."
