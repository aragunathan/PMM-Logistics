# CoR Data Architecture for Australian Road Freight Carriers
## How Your Systems Need to Work Together to Produce a Defensible Audit Trail

**Prepared by:** Ramco Systems — Logistics Software  
**Intended for:** IT Directors, CIOs, and Compliance Managers at Australian road freight carriers and 3PLs  
**Regulatory context:** Heavy Vehicle National Law (HVNL), National Heavy Vehicle Regulator (NHVR), Chain of Responsibility obligations effective under 2018 HVNL amendments  

---

## What CoR Actually Requires From Your IT Architecture

Chain of Responsibility compliance is widely understood as an operational and safety obligation. It is less widely understood as a data architecture problem.

The 2018 amendments to the HVNL extended CoR obligations beyond the driver to every party in the chain — consignors, consignees, schedulers, loaders, packers, and operators. This means that when the NHVR investigates an incident, or when a party seeks to demonstrate that they took all reasonable steps to ensure safety compliance, the question they are answering is not just "did we have a policy?" — it is "can we produce a timestamped, auditable record that proves what actually happened?"

That record does not exist in any single system in most road freight operations today.

A typical incident investigation requires data from:

- The **TMS** — consignment acceptance time, scheduled departure, job assignment, driver allocation, POD timestamp
- The **fleet or telematics platform** — GPS tracking records, speed data, harsh braking events, engine hours, driver login and logout times
- The **fatigue management system** — work diary records, rest break compliance, accumulated hours against the relevant standard (BFM, AFM, or standard hours)
- The **weighbridge or mass management system** — gross vehicle mass at departure, axle load records, permit numbers for over-mass loads
- **Paper-based or depot-level records** — pre-trip inspection forms, DG manifests, load plans, departure signatures

When these records are clean, complete, and reconcilable, they tell a coherent story about a freight event. When they are fragmented, inconsistently recorded, or stored in systems that don't share timestamps or reference keys, they tell a story with gaps — and in a CoR investigation, gaps are not neutral.

The purpose of this guide is to describe three data integration patterns that Australian road freight IT teams are using to build CoR-ready architectures, and to assess which produces the most defensible audit trail under NHVR scrutiny.

---

## The CoR Data Model: What Needs to Be Captured and When

Before evaluating integration patterns, it is useful to define the data elements that a complete CoR audit trail requires. The following table maps each data element to its source system and the timing of capture.

### Load Event Data Requirements

| Data Element | When Captured | Typical Source System | Required For |
|---|---|---|---|
| Consignment accepted (time, weight, dimensions) | Pre-dispatch | TMS | Consignor duty / mass compliance |
| Load plan completed and signed | Pre-dispatch | TMS or paper | Load restraint compliance |
| DG manifest generated and verified | Pre-dispatch | DG compliance tool or TMS | Dangerous goods duty |
| Vehicle mass at departure (GVM, axle loads) | Pre-departure | Weighbridge / onboard mass system | Mass management compliance |
| Pre-trip vehicle inspection completed | Pre-departure | Fleet system or paper | Maintenance duty |
| Driver identity confirmed, hours validated | Departure | Fleet/telematics or fatigue app | Fatigue management duty |
| Scheduled departure time vs actual departure | Departure | TMS + Fleet/telematics | Scheduler duty (timeline pressure) |
| In-transit location and speed records | In transit | Fleet/telematics (GPS) | Speed and fatigue compliance |
| Driver rest breaks recorded | In transit | Fatigue app or work diary | Fatigue management duty |
| Delivery completed (POD, time, location) | Delivery | TMS (POD scan or e-signature) | Consignee duty / proof of delivery |
| Scheduled delivery time vs actual delivery | Delivery | TMS | Scheduler duty (timeline pressure — evidence that driver was not pressured) |

### Fatigue-Specific Records

Under HVNL, fatigue management records must demonstrate that the operator — not just the driver — has met their duty. For the IT team, this means the system must capture and store:

| Record | Retention Period | Common Gap |
|---|---|---|
| Work diary (electronic or paper) | 3 years (minimum) | Paper diaries not digitised; gaps in electronic capture |
| Rest break compliance against applicable standard | 3 years | Telematics data not reconciled against work diary |
| Accumulated hours over 7-day and 28-day windows | 3 years | Hours calculated per-shift, not cumulatively across all engagements |
| Evidence of rostering decisions | 3 years | Scheduler decisions are verbal; no system record |
| Driver fitness-for-duty records | 3 years | No electronic capture — verbal at pre-trip check |

**The gap that matters most in an investigation:** The system captures GPS and hours data. But the NHVR does not just want to see the data — it wants to see that someone with a scheduler or operator duty reviewed that data and took action where thresholds were being approached. In a fragmented architecture, the evidence of that review is often missing even when the underlying data exists.

---

## Three Data Integration Patterns: Which Produces a Defensible CoR Audit Trail?

The following patterns represent the architectures we most commonly encounter in Australian road freight operators at the $100M–$500M revenue range. Each is assessed against three CoR-specific criteria:

- **Audit trail completeness:** Can the record span all required data elements without manual assembly?
- **Timestamp integrity:** Are event timestamps consistent and traceable to their source system?
- **On-demand production:** Can the full record be produced in under 24 hours in response to an NHVR request?

---

### Pattern 1: Federated Lookup (Data Stays in Source Systems)

**How it works:** Each system — TMS, fleet, weighbridge, fatigue app — retains its own data. When a CoR record is needed, someone (usually in compliance or IT) runs exports from each system and assembles the composite record manually in a spreadsheet or document.

This is the most common pattern in Australian road freight today, particularly at carriers that have not made a deliberate architecture decision. It is the default state — not a deliberate choice.

**CoR audit trail assessment:**

| Criterion | Rating | Detail |
|---|---|---|
| Audit trail completeness | Low–Medium | Depends entirely on whether all source systems captured data correctly. Manual assembly means gaps are discovered after the fact. |
| Timestamp integrity | Low | Different systems use different timestamp formats and time zones. Reconciling a TMS timestamp (AEST) against a telematics platform timestamp (UTC) against a paper work diary is error-prone and leaves room for challenge. |
| On-demand production | Low | Manual assembly under pressure — during an NHVR investigation with a 48-hour response window — is high-risk. The record takes time, it may contain errors, and the assembly process itself is not auditable. |

**The specific risk this creates:** When an incident occurs and the NHVR asks for records, the federated lookup pattern requires your compliance team to manually assemble a record under time pressure from four different systems. If a system was offline during the event, if the export query is wrong, or if the reconciliation contains an error, the record you produce may contradict itself. Under HVNL, producing an incomplete or inconsistent CoR record does not protect you — it creates additional exposure.

**Who is still running this pattern:** Most carriers. It is not because they don't know better — it is because the integration project required to move beyond it has never been prioritised above other IT workload.

---

### Pattern 2: Integrated Event Hub (Real-Time Data Aggregation)

**How it works:** A centralised integration platform — an iPaaS layer, a data warehouse, or a purpose-built compliance data store — receives events from all source systems in real time or near real time. When a load event occurs, the integration platform stitches together the TMS record, the telematics event stream, the fatigue data, and the mass record into a single composite event log. The source systems retain their data, but the integrated layer holds the joined version.

**Architecture diagram:**

```
TMS ─────────────────────────────────────────────────────────────────┐
Fleet/Telematics ────────────────────────────────────────────────────┤
Fatigue Management App ──────────────────────────────────────────────┤──→ CoR Event Hub
Weighbridge System ──────────────────────────────────────────────────┤    (unified data store,
DG Compliance Tool ──────────────────────────────────────────────────┘     event log, query layer)
                                                                                   │
                                                                                   ▼
                                                                         On-demand CoR audit trail
                                                                         NHVR incident response report
                                                                         Proactive compliance dashboard
```

**CoR audit trail assessment:**

| Criterion | Rating | Detail |
|---|---|---|
| Audit trail completeness | High | The integration hub is designed to capture every event from every source system. Gaps in coverage become visible (a missing event is recorded as an absence, not simply not captured). |
| Timestamp integrity | Medium–High | Timestamps are normalised to a consistent time zone at ingestion. The source system timestamp is preserved alongside the normalised timestamp, enabling chain-of-custody traceability. |
| On-demand production | High | Audit trail reports are pre-built queries against the integrated data store. A full load event record for any consignment can be produced in minutes, not hours. |

**What this pattern adds beyond compliance:** The same event hub that produces CoR audit trails also enables real-time operational visibility. When your TMS and fleet system data are unified in a single query layer, operations teams can see job status, vehicle location, and ETA in a single view — without the integration hub being a separate compliance-only tool.

**Implementation considerations:** Pattern 2 requires an integration platform (MuleSoft, Boomi, Azure Integration Services, AWS EventBridge, or a purpose-built logistics middleware). Building and maintaining the data ingestion pipelines from each source system requires IT investment upfront and ongoing maintenance as source systems are upgraded or replaced. The integration hub does not replace the source systems — it layers above them.

**Best fit for:** Carriers who want to materially improve their CoR data posture without replacing their existing TMS or fleet platform. Also appropriate as an interim architecture while a broader platform consolidation is planned.

---

### Pattern 3: Unified Platform (Native Data Model)

**How it works:** Transport management, freight rating, and compliance data are managed within a single platform that owns the data model end-to-end. There is no integration required between TMS and billing or between job dispatch and CoR records — the data is created in one system and the compliance record is a view over the same underlying data.

**Architecture diagram:**

```
Unified Logistics Platform
┌────────────────────────────────────────────────────────────────────────────┐
│  Transport Management    Fleet Management    Fatigue Management             │
│  (job dispatch, POD)     (vehicle, driver)   (hours, rest records)          │
│                                                                              │
│  Freight Billing         DG Management       Mass Management                │
│  (rating, invoicing)     (manifests, docs)   (weight, axle records)         │
│                                                                              │
│  ──────────────────────────────────────────────────────────────────────     │
│  Shared Data Model: Consignment → Load → Driver → Vehicle → Event Log       │
└────────────────────────────────────────────────────────────────────────────┘
         │                              │                          │
         ▼                              ▼                          ▼
   Operational          CoR Audit Trail Report          ERP Integration
   Dashboards           (single-system, on-demand)      (finance only)
```

**CoR audit trail assessment:**

| Criterion | Rating | Detail |
|---|---|---|
| Audit trail completeness | Highest | Every data element from consignment acceptance to POD exists within a single data model. There is no assembly required — the audit trail is a report, not a reconstruction. |
| Timestamp integrity | Highest | All events share a single clock and time zone reference. Timestamp consistency is architectural, not a reconciliation exercise. |
| On-demand production | Highest | CoR audit trail reports are standard system outputs. Response to an NHVR request within 2–4 hours is achievable with pre-configured report templates. |

**What this pattern requires:** A platform that genuinely covers the full scope — TMS, fleet management, fatigue, and billing — in a single native data model. Not all "unified" logistics platforms are actually unified at the data level. Some are acquisitions of separate products with an API stitched between them. The test is whether the CoR audit trail is produced from a single database query or whether it still requires pulling from multiple modules with their own separate data stores.

**Implementation considerations:** Pattern 3 requires a platform replacement decision, which carries the highest implementation risk of the three patterns. However, it also produces the lowest long-term IT overhead — fewer vendor relationships, no integration maintenance, and a single support escalation path.

**Best fit for:** Carriers where the existing TMS is approaching end-of-life, where the CoR compliance data posture is genuinely inadequate, or where the business has already decided to modernise and is deciding what to modernise to.

---

## Pattern Comparison: CoR Data Architecture Decision Matrix

| | Pattern 1: Federated Lookup | Pattern 2: Integrated Event Hub | Pattern 3: Unified Platform |
|---|---|---|---|
| **CoR audit trail quality** | Low | High | Highest |
| **Implementation effort** | None (current state) | Medium (integration build) | High (platform replacement) |
| **IT team ongoing overhead** | High (manual assembly) | Medium (integration maintenance) | Low (single system) |
| **Time to improve CoR posture** | No improvement | 3–6 months | 12–18 months |
| **Disruption to operations** | None | Low | Medium–High (managed via phasing) |
| **Cost** | Low (no project) | Medium | High (platform investment) |
| **Defensibility under NHVR scrutiny** | Poor | Good | Strong |

---

## What the NHVR Actually Looks For

Understanding how the NHVR uses system data in practice clarifies what "defensible" actually means in this context.

**In an incident investigation,** the NHVR will typically request:
1. The consignment record for the load being carried at the time of the incident
2. The driver's work diary records for the preceding 28 days
3. Vehicle maintenance records for the 90 days prior to the incident
4. Evidence of rostering decisions — specifically, what information the scheduler had about the driver's fatigue state when the trip was assigned
5. Any pre-trip vehicle inspection records from the day of the incident
6. Telematics data covering the route — speed, location, hard braking — for the journey

The records in items 1, 3, and 6 are usually available in electronic form. Items 2, 4, and 5 are where gaps commonly emerge — particularly item 4, which requires evidence that a human being in the scheduling role reviewed fatigue data before making an assignment decision. If your systems do not create a log of that review, the evidence may not exist even if the underlying fatigue data is clean.

**In a proactive compliance audit,** the NHVR will typically look for:
1. A written safety management system that names the systems used to manage CoR data
2. Evidence that those systems are configured to flag threshold breaches (approaching hours limits, mass limits, speed violations)
3. Evidence that flagged events generate a response — a task, an alert, a supervisor notification
4. Records showing that the response happened — not just that the flag was generated

This last point is architecturally significant. A system that generates alerts but does not log whether those alerts were actioned — and by whom — leaves a gap in the compliance record that a manual process cannot reliably close.

---

## Practical Steps for IT Teams

If you are assessing your current CoR data architecture, the following steps will help you identify where your most significant gaps are before committing to an integration or platform approach:

**Step 1: Map your current data sources against the load event data requirements table**  
For each data element in the table above, document: which system owns it, whether it is captured electronically or on paper, how long it is retained, and whether it can be joined to records from other systems using a common reference key (consignment number, vehicle registration, driver ID).

**Step 2: Simulate an NHVR incident response**  
Pick a consignment from 90 days ago. Time how long it takes your team to produce a complete load event record — from consignment acceptance through to POD — using your current systems. Note every manual step, every export, and every reconciliation required. That exercise will tell you more about your CoR data architecture than any compliance review.

**Step 3: Identify your highest-risk gaps**  
Typically these are: scheduler decision records (rarely captured), fatigue threshold alert response records (generated but not logged), and paper-based depot records (not digitised, therefore not producible on demand).

**Step 4: Assess integration readiness of your fleet/telematics platform**  
Whatever integration pattern you pursue, your fleet/telematics platform is the hardest integration point — it owns the data the NHVR most wants to see in an incident. Confirm whether your telematics vendor provides a documented API with event-level data access, or whether you are limited to reports and dashboards within their platform.

---

## Next Step

If you would like to walk through your current CoR data architecture against these patterns — including a technical review of where Ramco's platform fits within your existing environment — contact your Ramco account representative.

The conversation is a technical one: bring your system landscape, your current telematics vendor, and your most pressing compliance data gaps. We will work through what a realistic improvement path looks like for your operation.

*Ramco Systems — Logistics Software | ramco.com/products/logistics-software/*
