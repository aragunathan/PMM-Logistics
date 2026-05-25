# TMS Vendor Evaluation Checklist
## For Road Freight IT Teams — Australian Operations

**Prepared by:** Ramco Systems  
**Intended for:** IT Directors and CIOs evaluating transport management platforms  
**Scope:** Road freight carriers and 3PLs operating domestic linehaul, depot, and last-mile networks in Australia  
**How to use:** Score each vendor 1–5 per question. Use the notes column to record vendor responses. A vendor who won't answer a question is an answer in itself.

---

## Section 1: API Documentation and Integration Standards

These questions separate vendors with genuine integration capability from vendors who demo well but fail during technical due diligence.

| # | Question | Vendor A | Vendor B | Vendor C | Notes |
|---|----------|----------|----------|----------|-------|
| 1.1 | Is full REST API documentation publicly available, or only provided post-contract? | | | | Publicly available docs signal maturity. "We'll send it over" is a yellow flag. |
| 1.2 | Does the API use OAuth 2.0 or equivalent for authentication? | | | | Older platforms often use basic auth or custom token schemes — a security and integration concern. |
| 1.3 | Is there a sandbox or developer environment available for integration testing before go-live? | | | | Critical for your team to test ERP and fleet system connections before committing. |
| 1.4 | What is the API rate limit, and is it configurable for high-volume freight operations? | | | | A carrier at Followmont's volume will hit low rate limits quickly during peak periods. |
| 1.5 | Does the vendor provide pre-built connectors for SAP, Oracle, or your specific ERP? If not, what does a custom integration require? | | | | "Configurable" often means a custom project. Ask for an estimate in hours and who pays. |
| 1.6 | What is the data model for shipment, consignment, and load events? Can you access it in documentation form before signing? | | | | You need to understand how the data is structured before you can evaluate integration feasibility. |
| 1.7 | What webhooks or event-driven triggers are available for real-time data push (e.g., status changes, POD, driver events)? | | | | Polling APIs for status updates is inefficient. Modern platforms push events in real time. |

---

## Section 2: Data Residency and Hosting

Data residency is not a checkbox — it is a risk decision. For a carrier handling freight, dangerous goods records, and CoR data, knowing where that data lives and who can access it matters.

| # | Question | Vendor A | Vendor B | Vendor C | Notes |
|---|----------|----------|----------|----------|-------|
| 2.1 | Where are production data servers located? Are Australian operations data hosted in Australia? | | | | Ask for the specific data centre region (e.g., AWS ap-southeast-2 Sydney, Azure Australia East). |
| 2.2 | Is data sovereignty contractually guaranteed? Does the contract specify that Australian operational data will not be replicated to offshore regions without consent? | | | | "Our platform is cloud-hosted" is not the same as "your data stays in Australia." |
| 2.3 | Who has access to your production data — including the vendor's own support and engineering teams? Is that access logged and auditable? | | | | Relevant for CoR compliance and any future regulatory audit. |
| 2.4 | What is the backup and disaster recovery architecture? What is the RTO and RPO? | | | | For a road freight carrier, a 4-hour RTO may be acceptable. A 24-hour RTO may not be. |
| 2.5 | Does the vendor hold ISO 27001 certification? SOC 2 Type II? If so, can they provide the most recent audit report? | | | | Certifications with no report are marketing. Ask for the actual report. |
| 2.6 | What is the process and timeline for data extraction and deletion if you terminate the contract? | | | | Exit terms matter as much as entry terms. Get this in writing. |

---

## Section 3: Implementation Methodology

Implementation is where most TMS projects fail or succeed. A vendor who can't describe their methodology in detail has not run many implementations at your scale.

| # | Question | Vendor A | Vendor B | Vendor C | Notes |
|---|----------|----------|----------|----------|-------|
| 3.1 | What is the implementation methodology? Is it fixed-phase, agile, or hybrid? Can they provide a typical project plan for a road freight carrier of similar scale? | | | | A sample project plan from a comparable customer is a reasonable ask before signing. |
| 3.2 | What is the realistic go-live timeline for a phased TMS implementation across multiple depots? What are the key milestones? | | | | "3–6 months" with no detail is not a timeline. Ask for phases, dependencies, and decision gates. |
| 3.3 | What resource commitment is required from your IT team during implementation? (Hours per week, per phase, for how long?) | | | | For a lean IT team of 3–8, this is a load-bearing question. Underestimate it and the implementation will stall. |
| 3.4 | Who is the implementation team? Are they permanent vendor staff or contractors? Are they based in Australia? | | | | Time zone matters. A team in India supporting an Australian implementation adds friction to every issue. |
| 3.5 | What does a phased rollout look like — e.g., depot by depot or function by function? Has the vendor done a multi-depot rollout before? | | | | At Followmont's scale, a big-bang go-live across all depots simultaneously is high risk. Confirm phased capability. |
| 3.6 | What is the cutover plan? How is data migrated from your current TMS? What happens to historical records? | | | | Data migration from a legacy TMS is routinely underestimated. Ask for a data migration methodology document. |
| 3.7 | What does user acceptance testing (UAT) look like? Who sets the test cases — vendor or your team? | | | | Vendor-written UAT scripts test what the vendor expects. Your-team-written scripts test your actual operation. |
| 3.8 | What is the escalation path if the implementation falls behind schedule or a critical issue emerges during go-live? | | | | Ask for a specific name and response commitment, not a generic "we have a support team." |

---

## Section 4: Chain of Responsibility (CoR) Compliance Data Model

CoR compliance under the Heavy Vehicle National Law (HVNL) requires more than a checkbox — it requires your TMS to produce clean, timestamped, auditable records across the full load event chain. Ask vendors to demonstrate this, not describe it.

| # | Question | Vendor A | Vendor B | Vendor C | Notes |
|---|----------|----------|----------|----------|-------|
| 4.1 | Does the TMS record and retain driver work diaries and fatigue management data natively, or does it require integration with a third-party system? | | | | Native capture is cleaner for an audit trail. Integrated is workable if the integration is documented and reliable. |
| 4.2 | Can the system produce a load event audit trail — consignment acceptance, load assignment, departure time, arrival time, weight/compliance check — as a single exportable record? | | | | This is what the NHVR wants to see. Ask the vendor to show you the exact report. |
| 4.3 | How does the platform handle dangerous goods documentation (DG manifests, placards, emergency information panels)? Is this built in or a separate module? | | | | For a carrier handling DG freight, this is not optional functionality. |
| 4.4 | Does the platform support mass management — vehicle mass limits, axle loading records, NHVR permit management? | | | | For linehaul operations, mass management records are a CoR obligation. Ask for a demo of this specifically. |
| 4.5 | How are CoR records retained and for how long? Is the retention period configurable? Can records be produced on demand in response to an NHVR request? | | | | Current best practice is 7 years for heavy vehicle compliance records. Confirm the platform supports this. |
| 4.6 | If your telematics or fleet system captures the authoritative driver behaviour data, how does the TMS integrate with that data to build the CoR record? | | | | Most carriers have a telematics platform. The TMS needs to consume that data, not replace it. |

---

## Section 5: Post-Go-Live Support SLAs

How a vendor supports you after go-live is more important than how they treat you during the sales process. Get support terms in writing, not in a presentation.

| # | Question | Vendor A | Vendor B | Vendor C | Notes |
|---|----------|----------|----------|----------|-------|
| 5.1 | What are the contractual SLAs for incident response by severity level? (P1: system down, P2: major function impaired, P3: minor issue) | | | | Ask for exact response time commitments — e.g., P1: 1-hour acknowledgement, 4-hour resolution. |
| 5.2 | What are the support hours? Is 24/7 support available, and does that include Australian public holidays? | | | | For a road freight carrier operating 7 days, weekend and public holiday support coverage is not optional. |
| 5.3 | Is there a dedicated support contact or a shared helpdesk? Is the support team in Australia or offshore? | | | | "Australia-based support team" should mean a real Australian number and a person who understands Australian freight operations. |
| 5.4 | What is the escalation path from helpdesk to product engineering if an issue requires a code fix? What is the typical turnaround for a production bug fix? | | | | Helpdesk-to-engineering escalation paths that are opaque are a sign of support debt. |
| 5.5 | What is the uptime SLA? What does "uptime" include — scheduled maintenance windows, third-party outages? | | | | 99.5% uptime sounds good until you calculate it: that's ~43 hours of potential downtime per year. Ask what is and isn't counted. |
| 5.6 | How are maintenance windows communicated? Is scheduled downtime avoidable during operational peak periods (e.g., Monday morning linehaul runs)? | | | | Ask for the vendor's maintenance window policy and whether it can be negotiated in the contract. |
| 5.7 | Are there case studies or references available from Australian road freight operators who have been live on the platform for 2+ years and can speak to the support experience? | | | | Support quality is only visible over time. A reference account who has been through a major issue is more valuable than a fresh go-live testimonial. |

---

## Section 6: Upgrade and Release Cadence

A platform in maintenance mode is a liability, not an asset. How a vendor manages upgrades tells you a great deal about their product investment and how much operational disruption you'll absorb over time.

| # | Question | Vendor A | Vendor B | Vendor C | Notes |
|---|----------|----------|----------|----------|-------|
| 6.1 | What is the release cadence for major and minor updates? (Monthly, quarterly, annually?) | | | | Quarterly or monthly releases on a clear schedule signal active development. Annual releases may signal a product in wind-down. |
| 6.2 | How are upgrades deployed to production? Are they automatic, or do you control the timing? | | | | Automatic upgrades without IT sign-off are a risk in a production freight environment. |
| 6.3 | What is the testing and UAT process for major upgrades? Can you test in a staging environment before production deployment? | | | | You should never be the first to discover a bug introduced in an upgrade. Ask for a staging environment with production data parity. |
| 6.4 | What is the policy for breaking changes in the API? What is the deprecation notice period? | | | | If you have built integrations on the API, breaking changes without notice can cause unplanned outage events in your environment. |
| 6.5 | Is there a public product roadmap? Can it be accessed before signing? Does the vendor take customer input into roadmap prioritisation? | | | | A vendor who won't show you the roadmap either doesn't have one or doesn't want you to see it. |
| 6.6 | What is the version support policy? For how long will you receive security patches and bug fixes on your current version if you choose not to upgrade immediately? | | | | In a lean IT team, forced upgrades on the vendor's timeline are a real resource burden. |
| 6.7 | What happens to your system and data if the vendor is acquired or the product is discontinued? Is there a contractual data portability clause? | | | | Enterprise software M&A is common. Understand your exit rights before you are inside the contract. |

---

## How to Use This Checklist in Vendor Conversations

**Before the demo:**  
Send the checklist to the vendor in advance. A vendor who prepares answers to every section is a vendor who takes technical due diligence seriously. A vendor who shows up to the demo and tries to handle these questions on the fly is a vendor who hasn't done this at your scale before.

**During the demo:**  
Focus demo time on the questions that can only be answered by seeing the product — specifically Sections 3 (implementation methodology) and 4 (CoR data model). Ask the vendor to walk through the CoR audit trail report using a realistic scenario from your operation.

**After the demo:**  
Request written responses to all outstanding questions before moving to shortlist. Verbal commitments made in a demo room are not the same as contractual commitments. The delta between what a vendor says in a demo and what they will put in writing is where implementation risk lives.

**Scoring guidance:**  
- **5** — Complete, documented, demonstrated answer with reference evidence  
- **4** — Clear answer, no documentation yet but commitment to provide it  
- **3** — Partial answer; gaps acknowledged  
- **2** — Vague answer; unable to demonstrate or document  
- **1** — No answer, deflected, or "we'll figure that out during implementation"

Any vendor scoring below 3 on sections 2 (Data Residency), 4 (CoR), or 5 (Support SLAs) should be treated as a significant risk flag for an Australian road freight operation.

---

*This checklist was prepared by Ramco Systems as an independent evaluation tool for road freight IT teams. It applies equally to all TMS vendors, including Ramco. If you would like to run through this checklist specifically against the Ramco platform, contact your Ramco account representative to arrange a 30-minute technical walkthrough with an implementation architect.*
