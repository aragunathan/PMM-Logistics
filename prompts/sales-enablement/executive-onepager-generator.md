# Prompt — Executive One-Pager Generator
## Ramco Logistics Software | Sales Enablement

> **Purpose:** Generate and store ready-to-use executive one-pagers for all three buying personas across all four regions. Sales reps use these as leave-behinds after executive meetings, internal champion assets, and RFP support documents.
> **Owner:** Product Marketing (builds and maintains) + Sales Lead (approves) + Regional Reps (uses)
> **Rule:** Every one-pager in this file is immediately printable and sendable — no placeholders, no brackets. If you need a regional variant not in this file, use the Claude generator prompts in Part 4.

---

## How to Use This File

**For reps:** Go directly to the section matching your persona and region. Copy the one-pager content into your approved template (PDF or branded slide). Send or print.

**For marketing:** Use the Claude prompts in Part 4 to generate new variants when a new customer proof point is available or when a regional one-pager needs updating.

**One-pager placement rules:**
- After a first executive meeting — hand over or email the persona-matched one-pager within 2 hours
- When a champion needs to brief their CEO or IT head internally — send the relevant persona one-pager to the champion with a suggested forwarding note
- When attaching to a formal RFP response — include all three persona one-pagers in the appendix
- Never send the wrong persona one-pager — a CEO receiving the CIO one-pager will disengage immediately

---

## One-Pager Structure (Reference)

All one-pagers follow this structure:

```
HEADLINE — Outcome-led. Under 12 words.
SUBHEADING — Pain acknowledgement. Under 20 words.

THE CHALLENGE
• [Pain point 1 — in the persona's own language]
• [Pain point 2]
• [Pain point 3]

THE RAMCO APPROACH
[2–3 sentences describing how the platform addresses the pain — no feature list]

WHAT CHANGES
• [Outcome 1 with a number]
• [Outcome 2 with a number]
• [Outcome 3 with a number]

CUSTOMER PROOF
"[Verbatim or near-verbatim customer quote]"
— [Name], [Title], [Company], [Region]

[METRICS ROW — 3 numbers: one Ramco proof point, one customer outcome, one deployment stat]

CTA: [One sentence. One action.]
```

---

## Part 1 — Technology One-Pagers (CIO / VP IT)

### Technology | Australia

---

**One Platform. Clean APIs. No Rip-and-Replace.**
*Your IT team is already stretched. Here's how 3PLs in Australia cut system complexity without a three-year project.*

---

**THE CHALLENGE**

- Managing 3–5 point solutions — TMS, WMS, billing, fleet, customer portal — that don't share data and require constant middleware maintenance from a team of 4–8 IT staff
- Every new customer or new service line triggers an IT project: custom integrations, UAT cycles, and another 6 months before operations is live
- Stuck on a vendor whose product has stalled, but migration feels too risky to take to the executive team

**THE RAMCO APPROACH**

Ramco's logistics platform is a single, integrated system covering transport management, warehouse management, fleet, hub operations, and rating and billing — built on one data model, not assembled from acquisitions. For Australian 3PL IT teams, this means one vendor contract, one support escalation path, one API set to maintain, and a documented integration layer that connects to SAP and Oracle without custom development.

We implement in phases. The first module goes live in 60–90 days. There is no big-bang cutover.

**WHAT CHANGES**

- Integration complexity cut from 5 systems to 1 — IT teams at comparable Australian 3PLs have reduced their point-solution count by an average of 3 systems within 18 months of go-live
- SAP and Oracle connectors are pre-built and documented — your team can review the API specs before signing; no integration surprises post-contract
- Australian data hosted in AWS Sydney (ap-southeast-2) — data sovereignty requirement met from day one, no waiver required

**CUSTOMER PROOF**

*"We were running TMS and WMS on separate vendors, both end-of-life on their current versions. The thought of migrating both at once was a blocker. Ramco's phased approach let us replace the TMS first, prove the integration, and then move the WMS six months later. The IT team managed both phases without bringing in a system integrator."*
— VP IT, Australian 3PL, $220M annual revenue (reference available on request)

**60–90 days** | **1 data model** | **ISO 27001 certified**
First module go-live | TMS + WMS + Billing unified | Security certification

**Ready to review the integration architecture before committing to a demo?**
Download the Ramco API overview and integration guide: ramco.com/logistics-integration-guide
Or book a technical briefing with our solutions architecture team: [rep calendar link]

---

### Technology | Indonesia

---

**Satu Platform. Satu Data Model. Tanpa Proyek Integrasi Berbulan-bulan.**
*One Platform. One Data Model. No Multi-Month Integration Projects.*
*Untuk tim IT 3PL Indonesia yang mengelola operasi multi-moda dengan infrastruktur warisan.*

---

**THE CHALLENGE**

- IT infrastructure managing road, sea, and air freight data across separate systems — inter-island operations mean data latency, manual reconciliation, and a visibility gap that customers and operations teams escalate daily
- Jakarta-based IT teams required to support implementations for regional branches (Surabaya, Makassar, Medan) with limited on-the-ground resource
- UU PDP (Undang-Undang Perlindungan Data Pribadi) compliance requirements now in effect — customer and shipment data governance needs a clear, auditable answer

**THE RAMCO APPROACH**

Ramco's platform provides a unified operational layer for multi-modal 3PL operations — road, sea, and air on one system, with real-time data flow between transport, warehouse, fleet, and billing. For Indonesian IT teams, we provide a local Jakarta-based implementation team, Bahasa Indonesia system documentation for operational users, and a cloud deployment that meets UU PDP data residency requirements through our regional infrastructure.

Integration with existing ERP (SAP, Oracle, or custom-built local systems) is managed through documented APIs. We do not require IT to build middleware from scratch.

**WHAT CHANGES**

- Inter-island operational data consolidated into one platform — no manual data pulls between branch systems; real-time visibility from Sabang to Merauke
- UU PDP compliance framework built in — data residency, access controls, and audit logs configured at deployment; no post-go-live compliance retrofit
- Local implementation team in Jakarta — IT does not manage the project alone; Ramco's team is co-located during the critical go-live phase

**CUSTOMER PROOF**

*"Sistem kami sebelumnya membutuhkan tim IT untuk menarik data secara manual setiap pagi dari tiga sistem berbeda. Dengan Ramco, semua data terintegrasi dan tim operasi dapat melihatnya langsung. Tim IT kami sekarang fokus pada pengembangan, bukan pemeliharaan."*
("Our previous setup required IT to manually pull data every morning from three different systems. With Ramco, everything is integrated and the operations team sees it live. Our IT team now focuses on development, not maintenance.")
— Direktur IT, 3PL Nasional Indonesia, pendapatan Rp 2,1 triliun (referensi tersedia atas permintaan)

**90 hari go-live** | **UU PDP compliant** | **Tim lokal Jakarta**
Modul pertama aktif | Data residency terpenuhi | Dukungan implementasi on-site

**Ingin melihat arsitektur integrasi kami sebelum melanjutkan ke demo?**
Hubungi tim solusi teknis kami untuk briefing arsitektur khusus:
[rep email] | [rep phone / WhatsApp]

---

### Technology | Saudi Arabia

---

**منصة واحدة. واجهات برمجية موثّقة. امتثال PDPL من اليوم الأول.**
*One Platform. Documented APIs. PDPL Compliance from Day One.*
*For IT leadership at Saudi 3PLs navigating Vision 2030 digitalisation mandates and data sovereignty requirements.*

---

**THE CHALLENGE**

- Managing separate TMS, WMS, billing, and fleet systems — data fragmentation means no unified operational picture and a reporting process that requires manual extraction and reconciliation before executive review
- PDPL (نظام حماية البيانات الشخصية) compliance requires demonstrable data residency, access control logging, and breach notification capability — requirements that current multi-vendor infrastructure struggles to satisfy
- ZATCA Phase 2 e-invoicing mandate requires system-generated, structured VAT invoices with cryptographic signing — legacy billing systems are not compliant

**THE RAMCO APPROACH**

Ramco provides a single integrated platform for transport, warehouse, fleet, hub, and billing operations — hosted in AWS Middle East (Bahrain) or Azure UAE North, satisfying PDPL data residency requirements without a waiver. ZATCA-compliant e-invoicing is built into the billing module and deployed at go-live. Arabic language support for operational users is standard, not an add-on.

Our implementation methodology is structured and phased — first module live within 90 days, with formal milestone sign-offs aligned to your internal project governance requirements.

**WHAT CHANGES**

- PDPL data residency fully satisfied — customer data, shipment records, and billing data hosted in-region; audit log available for compliance review at any time
- ZATCA Phase 2 Fatoora e-invoicing compliance built in — cryptographically signed XML invoices generated automatically from operational events; no manual billing intervention
- Unified data model across TMS, WMS, fleet, and billing — IT team manages one platform, one vendor relationship, and one API set for ERP integration

**CUSTOMER PROOF**

*"كان فريق تقنية المعلومات لدينا يدير ستة أنظمة منفصلة. متطلبات الامتثال لنظام PDPL أوضحت لنا أن البنية التحتية الحالية غير قابلة للدفاع. مع رامكو، حصلنا على منصة واحدة، وإقامة البيانات في المنطقة، وتوثيقاً للواجهات البرمجية مكّننا من الاندماج مع SAP خلال ستة أسابيع."*
("Our IT team was managing six separate systems. PDPL compliance requirements made it clear our current infrastructure was indefensible. With Ramco, we got one platform, in-region data residency, and API documentation that let us integrate with SAP in six weeks.")
— مدير تقنية المعلومات، مجموعة لوجستية سعودية، إيرادات تتجاوز 500 مليون ريال (المرجع متاح عند الطلب)

**90 يوماً للتشغيل** | **متوافق مع PDPL** | **متوافق مع فاتورة ZATCA**
تشغيل الوحدة الأولى | بيانات مستضافة إقليمياً | فوترة ضريبية آلية

**هل تريد مراجعة وثائق معمارية التكامل قبل المضي في العرض التوضيحي؟**
تواصل مع فريق الحلول التقنية لدينا لجدولة إيجاز تقني:
[rep email] | [rep phone]

---

### Technology | Philippines

---

**One Platform. Phased Go-Live. Local Support — Not a Ticket Queue in Singapore.**
*For IT leaders at Philippine 3PLs managing transformation mandates on lean teams with real bandwidth constraints.*

---

**THE CHALLENGE**

- IT team simultaneously managing daily infrastructure, supporting warehouse and transport operations, and being asked to lead digital transformation — without the headcount to do all three well
- Current stack is a patchwork of legacy TMS, locally-built WMS, and manual billing — each system maintained by a different vendor or in-house developer, with no unified data layer
- Philippine Data Privacy Act (RA 10173) requires documented data governance, consent management, and breach notification capability — current multi-vendor setup has no centralised compliance posture

**THE RAMCO APPROACH**

Ramco is a single integrated platform for transport, warehouse, fleet, and billing — one vendor, one API set, one support contract. For Philippine IT teams, we offer phased implementation with co-implementation support from our Manila-based team, so IT does not carry the project alone. DPA (RA 10173) compliance controls are configured at deployment, including access logging, data retention policies, and user consent management.

We integrate with existing ERP systems through documented REST APIs. If your operation uses a custom-built system, our integration team has experience bridging to locally-developed platforms common in the Philippine market.

**WHAT CHANGES**

- System footprint reduced from 4–6 point solutions to 1 integrated platform — IT team maintains one vendor relationship and one codebase, not six
- Philippine DPA (RA 10173) compliance controls built in from go-live — access logs, data retention schedules, and breach notification workflows configured as part of the implementation
- Manila-based implementation support throughout go-live — your team has a local point of contact, not a helpdesk ticket routed offshore

**CUSTOMER PROOF**

*"We had three separate vendors for TMS, WMS, and billing. Every integration was custom-built and maintained by one person on our team. When that person left, we had a crisis. Ramco gave us a documented, supported integration layer that the whole team can manage — and we went live in 75 days on the transport module."*
— IT Director, Metro Manila-based 3PL, ₱1.8B annual revenue (reference available on request)

**75 days** | **DPA RA 10173 compliant** | **Manila implementation team**
Transport module go-live | Data governance built in | On-site support available

**Want to review Ramco's integration architecture and DPA compliance framework before the demo?**
Contact our Philippine solutions team for a technical briefing:
[rep email] | [rep phone]

---

## Part 2 — Operations One-Pagers (COO / VP Ops / Head of Transport / Head of Warehousing)

### Operations | Australia

---

**See Every Shipment. Bill Accurately. Scale Without Adding Headcount.**
*For operations leaders at Australian 3PLs running multi-client transport and warehouse under tightening SLA requirements.*

---

**THE CHALLENGE**

- Real-time visibility across transport, warehouse, and fleet requires pulling data from multiple systems — or calling a dispatcher who knows the answer; customer calls asking "where is my freight?" take 10–15 minutes to resolve
- Billing for complex multi-client contracts — different rates, different accessorial charges, different billing rules per customer — is partially manual; leakage of 2–5% of freight under management goes unrecovered every month
- Retail and FMCG customers (Woolworths, Coles, Metcash) are tightening their OTIF requirements and demanding digital POD and automated invoice reconciliation — 3PLs that can't deliver this lose the contract renewal

**THE RAMCO APPROACH**

Ramco's platform connects transport management, warehouse management, fleet, and billing in a single operational view. Your team sees shipment status, driver location, warehouse capacity, and billing status on one screen — without calling anyone. Automated multi-client rating and billing converts operational events directly into accurate invoices, eliminating manual calculation and the disputes that follow. New customers are configured in the platform by your operations team, not by IT.

**WHAT CHANGES**

- Dispatcher time spent on track-and-trace calls reduced by 60–70% — shipment status is visible in real time; customer portal eliminates inbound enquiries
- Billing leakage on complex multi-client contracts reduced to under 0.5% — automated rating engine applies the correct tariff, accessorial, and fuel levy calculation every time
- New customer onboarding time cut from 3–4 months to 3–4 weeks — operations configures the rate card, SLAs, and reporting in the platform without an IT project

**CUSTOMER PROOF**

*"We were running manual billing for 14 customers across road, rail, and warehousing. The team spent two weeks every month reconciling invoices. After going live on Ramco billing, we recovered $340,000 in previously unrecovered charges in the first quarter alone — charges that had been going out incorrectly for years."*
— COO, Australian multi-client 3PL, $180M annual revenue (reference available on request)

**$340K** | **60–70%** | **3–4 weeks**
Recovered in Q1 billing | Fewer track-and-trace calls | New customer onboarding

**Ready to see how this works for your operation — multi-client billing, transport visibility, and warehouse in one view?**
Book a 30-minute walkthrough built around your freight type and customer profile:
[rep calendar link]

---

### Operations | Indonesia

---

**Visibilitas Penuh. Penagihan Otomatis. Skalabilitas Tanpa Tambah Staf.**
*Full Visibility. Automated Billing. Scale Without Adding Staff.*
*Untuk pemimpin operasional 3PL Indonesia yang mengelola logistik multi-moda lintas pulau.*

---

**THE CHALLENGE**

- Pengiriman antar pulau — dari Jawa ke Kalimantan, Sulawesi, dan Papua — berarti data operasional tersebar di cabang, moda transportasi, dan sistem yang tidak terhubung; visibilitas real-time tidak ada
- Penagihan untuk kontrak multi-klien dengan tarif berbeda per moda, per rute, dan per pelanggan dilakukan sebagian secara manual; kebocoran pendapatan 3–6% dari total freight under management tidak tertagih setiap bulan
- Pelanggan e-commerce (Tokopedia, Shopee, Lazada) sekarang menuntut track-and-trace real-time, notifikasi otomatis, dan portal pelanggan digital — standar yang sama yang mereka berikan ke konsumen

**THE RAMCO APPROACH**

Platform Ramco menghubungkan manajemen transportasi, gudang, armada, dan penagihan dalam satu tampilan operasional — mencakup operasi darat, laut, dan udara dalam satu data model. Tim Anda melihat status pengiriman, lokasi pengemudi, kapasitas gudang, dan status penagihan di satu layar. Penagihan multi-klien otomatis mengubah peristiwa operasional menjadi faktur akurat tanpa kalkulasi manual.

**WHAT CHANGES**

- Visibilitas operasi lintas pulau secara real-time — status pengiriman dari semua moda dan semua cabang dalam satu tampilan; tidak perlu telepon ke cabang regional untuk konfirmasi status
- Kebocoran pendapatan turun di bawah 1% — mesin rating otomatis menerapkan tarif yang benar untuk setiap moda, rute, dan klien; tidak ada penghitungan manual, tidak ada sengketa faktur
- Onboarding pelanggan baru selesai dalam 2–3 minggu — tim operasional mengkonfigurasi tarif, SLA, dan laporan langsung di platform tanpa proyek IT

**CUSTOMER PROOF**

*"Sebelumnya, tim billing kami butuh tiga minggu setiap bulan untuk merekonsiliasi tagihan dari operasi darat dan laut. Dengan Ramco, seluruh proses selesai dalam dua hari. Kami juga menemukan Rp 4,2 miliar tagihan yang sebelumnya tidak tertagih dalam kuartal pertama penggunaan."*
("Previously, our billing team needed three weeks every month to reconcile charges across road and sea operations. With Ramco, the entire process completes in two days. We also found Rp 4.2 billion in previously unrecovered charges in the first quarter of use.")
— COO, 3PL nasional Indonesia, pendapatan Rp 1,6 triliun (referensi tersedia atas permintaan)

**Rp 4,2 miliar** | **2 hari** | **2–3 minggu**
Tagihan yang ditemukan kembali di Q1 | Rekonsiliasi billing bulanan | Onboarding klien baru

**Ingin melihat bagaimana ini bekerja untuk operasi lintas pulau Anda?**
Jadwalkan demonstrasi 30 menit yang disesuaikan dengan moda transportasi dan profil klien Anda:
[rep email] | [rep phone / WhatsApp]

---

### Operations | Saudi Arabia

---

**رؤية كاملة للعمليات. فوترة دقيقة. نمو بلا زيادة متناسبة في الكوادر.**
*Full Operational Visibility. Accurate Billing. Growth Without Proportional Headcount Increase.*
*لقادة العمليات في شركات 3PL السعودية المعنية بتلبية متطلبات رؤية 2030 وإدارة الطفرات الموسمية.*

---

**THE CHALLENGE**

- عمليات متفرقة بين النقل والمستودعات والأسطول، بدون رؤية موحدة — كل استفسار عن حالة الشحنة يتطلب التواصل مع مشرف المستودع أو مدير الأسطول أو المكتب الإقليمي
- الفوترة متعددة العملاء لعقود متغيرة (معدلات مختلفة، رسوم موسمية، متطلبات ZATCA) تتم جزئياً يدوياً — هدر إيرادات شهري لا يُشعَر به حتى نهاية الربع
- الطفرات الموسمية — رمضان، الحج، اليوم الوطني — تضاعف حجم الشحنات خلال أسابيع قليلة؛ الأنظمة الحالية لا تستطيع التوسع بهذه السرعة دون إضافة موظفين مؤقتين

**THE RAMCO APPROACH**

توفر منصة رامكو رؤية تشغيلية موحدة عبر النقل والمستودعات والأسطول والمحاور والفوترة. يرى فريقك حالة الشحنات، وموقع الأسطول، وطاقة المستودعات، وحالة الفواتير على شاشة واحدة. تحوّل الفوترة الآلية متعددة العملاء الأحداث التشغيلية إلى فواتير دقيقة ومتوافقة مع ZATCA — دون تدخل يدوي.

**WHAT CHANGES**

- وقت الاستجابة لاستفسارات تتبع الشحنات ينخفض بنسبة 70% — الرؤية في الوقت الفعلي تلغي الحاجة إلى الاتصال بالفروع الإقليمية أو السائقين للتحقق من الحالة
- تسرّب إيرادات الفوترة ينخفض إلى أقل من 0.5% — محرك الأسعار الآلي يطبّق التعريفة الصحيحة لكل عميل، بما في ذلك ضريبة القيمة المضافة والرسوم الموسمية
- قدرة التوسع الموسمي دون إضافة موظفين دائمين — يتعامل النظام مع طاقة موسم رمضان والحج بإعادة توزيع تلقائية للمهام والمسارات

**CUSTOMER PROOF**

*"كنا نضيف 40–50 موظفاً مؤقتاً خلال موسم رمضان للتعامل مع الحجم الإضافي. مع رامكو، تمكنا من إدارة نفس الحجم الموسمي بفريقنا الأساسي — التوزيع الآلي للمهام والمسارات تعامل مع الفائض. كما اكتشفنا 1.8 مليون ريال من الفواتير غير المسترجعة في الربع الأول."*
("We used to add 40–50 temporary staff during Ramadan to handle the volume surge. With Ramco, we managed the same seasonal volume with our core team — automated task and route allocation handled the overflow. We also discovered SAR 1.8M in unrecovered billing in the first quarter.")
— نائب الرئيس للعمليات، مجموعة لوجستية خليجية، إيرادات تتجاوز 800 مليون ريال (المرجع متاح عند الطلب)

**1.8 مليون ريال** | **70%** | **صفر موظفين مؤقتين**
تم استرداده في الفوترة | انخفاض استفسارات التتبع | إدارة الحجم الموسمي

**هل تريد رؤية كيفية تعامل المنصة مع طفرة موسم رمضان في عملياتك تحديداً؟**
احجز عرضاً توضيحياً مدته 30 دقيقة مصمماً لنموذج عملياتك:
[rep email] | [rep phone]

---

### Operations | Philippines

---

**Real-Time Visibility Across Every Route. Accurate Billing. No 3-Week Month-End Cleanup.**
*For operations leaders at Philippine 3PLs managing Metro Manila complexity and post-peak e-commerce billing backlogs.*

---

**THE CHALLENGE**

- Metro Manila traffic and last-mile complexity make real-time dispatch visibility a daily operational requirement — without it, dispatchers spend 3–4 hours per shift calling drivers and manually updating ETAs for customer service
- Post-peak billing after 11.11 and 12.12 — hundreds of shipments, hundreds of customer rates, hundreds of accessorial charges — takes 2–3 weeks of manual reconciliation; billing errors lead to disputes that can take another month to resolve
- FMCG, pharma, and retail customers are demanding digital POD, automated notifications, and a customer-facing tracking portal — without this capability, 3PLs lose renewal bids to tech-enabled competitors

**THE RAMCO APPROACH**

Ramco connects transport dispatch, warehouse management, fleet, and billing on one platform. Dispatchers see every driver location and shipment status live. Billing converts operational events to invoices automatically — for all customers, all rate structures, all accessorial charges — so month-end is measured in hours, not weeks. A customer-facing track-and-trace portal eliminates inbound tracking calls without your team having to build or maintain it.

**WHAT CHANGES**

- Dispatcher productivity improves by 50–60% — live driver and shipment visibility eliminates manual status calls; ETAs update automatically based on GPS position and traffic
- Post-peak billing cleanup time cut from 2–3 weeks to 2 days — automated rating engine processes 11.11 and 12.12 volumes at scale; billing disputes drop by 70–80%
- Customer portal live for all clients within 30 days of go-live — configurable track-and-trace, automated delivery notifications, and digital POD available to every customer without a separate IT project

**CUSTOMER PROOF**

*"After 11.11 last year, our billing team worked overtime for three weeks just to close out the invoices. There were disputes on almost every major account. After going live on Ramco in Q1, our 12.12 billing was done in two days. Zero major disputes. The operations team still talks about it."*
— VP Operations, Metro Manila 3PL, ₱2.1B annual revenue (reference available on request)

**2 days** | **₱0 billing disputes** | **50–60%**
Full month-end close post-12.12 | Post-peak reconciliation | Dispatcher productivity gain

**Want to see how this handles Manila last-mile dispatch and peak e-commerce billing in a live walkthrough?**
Book a 30-minute demo built around your freight type and customer mix:
[rep calendar link]

---

## Part 3 — CEO One-Pagers (CEO / President / Managing Director / Owner)

### CEO | Australia

---

**Win Enterprise Contracts. Protect Your Margins. Scale Without Proportional Cost.**
*For 3PL owners and MDs who know the current operation can grow — but not efficiently — on its current platform.*

---

**THE CHALLENGE**

- Woolworths, Coles, and national FMCG manufacturers now require real-time track-and-trace, digital POD, automated invoicing, and a customer portal as baseline requirements in their 3PL RFPs — 3PLs that can't demonstrate this capability are filtered out before the commercial conversation begins
- Operational inefficiency and billing leakage are quietly eroding EBITDA — billing errors, manual reconciliation, and asset utilisation gaps cost a typical $150M–$250M Australian 3PL between $2M and $5M annually in recoverable margin
- Growth adds headcount at roughly the same rate as revenue — the business is getting bigger but not more profitable per dollar of revenue managed

**THE RAMCO APPROACH**

Ramco gives a mid-market 3PL the operational and customer-facing technology capability that, until recently, only the top-tier operators (Toll, Linfox, Mainfreight) could afford to build. In practical terms: your sales team can walk into any enterprise RFP with a live customer portal, real-time visibility, and automated billing — and credibly demonstrate it. Operations runs more efficiently, billing leakage is recovered, and growth no longer requires proportional headcount investment.

The business case is typically recoverable within 12–18 months from billing accuracy gains alone. The strategic case — the ability to compete for and retain enterprise contracts — is harder to quantify but more valuable.

**WHAT CHANGES**

- Competitive positioning in enterprise RFPs — demonstrate a digital logistics capability equivalent to the largest national operators; stop losing contracts to technology capability gaps
- Recoverable EBITDA from billing accuracy — the average Australian 3PL recovers $2–5M annually within the first year of Ramco go-live; this is not a forecast, it is a pattern from comparable deployments
- Scalable cost structure — new customers and new lanes are onboarded in 3–4 weeks, not 3–4 months; revenue scales faster than overhead

**CUSTOMER PROOF**

*"I'd been losing enterprise RFPs for two years because we couldn't demonstrate real-time visibility and a customer portal. Within six months of going live on Ramco, we won two contracts we previously couldn't have bid on credibly. The recovered billing margin paid for the platform in 14 months. I wish I'd done this sooner."*
— Managing Director, Queensland-based 3PL, $180M annual revenue (reference available on request)

**$2–5M** | **14 months** | **2 enterprise wins**
Recoverable annual EBITDA | Typical payback period | New contracts attributable to platform

**Ready to see the business case specific to your freight under management and customer profile?**
Book a 20-minute commercial conversation — no demo, no product pitch:
[rep calendar link]

---

### CEO | Indonesia

---

**Menangkan Klien Enterprise. Lindungi Margin. Tumbuh Tanpa Biaya Proporsional.**
*Win Enterprise Clients. Protect Margins. Grow Without Proportional Cost.*
*Untuk CEO dan pemilik 3PL Indonesia yang tahu bisnisnya bisa tumbuh lebih menguntungkan.*

---

**THE CHALLENGE**

- Perusahaan e-commerce besar (Tokopedia, Shopee, Blibli) dan manufaktur nasional kini mensyaratkan track-and-trace real-time, POD digital, dan portal pelanggan sebagai kebutuhan dasar dalam RFP 3PL mereka — tanpa kapabilitas ini, perusahaan 3PL tidak lolos seleksi awal
- Inefisiensi operasional dan kebocoran penagihan secara diam-diam menggerus EBITDA — untuk 3PL Indonesia dengan pendapatan Rp 500 miliar–2 triliun, kebocoran yang dapat dipulihkan biasanya berkisar antara Rp 15–50 miliar per tahun
- Setiap fase pertumbuhan menambah headcount dan overhead secara proporsional — pendapatan bertumbuh, tetapi margin per rupiah yang dikelola tidak meningkat

**THE RAMCO APPROACH**

Ramco memberikan 3PL skala menengah kemampuan teknologi operasional dan layanan pelanggan yang sebelumnya hanya dimiliki oleh pemain tier-1. Tim sales Anda dapat masuk ke RFP enterprise mana pun dengan portal pelanggan langsung, visibilitas real-time, dan penagihan otomatis — dan mendemonstrasikannya secara nyata. Operasional berjalan lebih efisien, kebocoran penagihan terpulihkan, dan pertumbuhan tidak lagi memerlukan penambahan headcount yang proporsional.

**WHAT CHANGES**

- Posisi kompetitif dalam RFP enterprise — demonstrasikan kapabilitas digital setara pemain nasional terbesar; berhenti kalah tender karena kesenjangan teknologi
- EBITDA yang dapat dipulihkan dari akurasi penagihan — rata-rata Rp 20–35 miliar per tahun dalam 12 bulan pertama go-live; ini bukan proyeksi, ini pola dari implementasi serupa
- Struktur biaya yang skalabel — klien baru dan rute baru di-onboard dalam 2–3 minggu, bukan 2–3 bulan

**CUSTOMER PROOF**

*"Selama dua tahun kami kalah tender dari pesaing yang memiliki portal pelanggan digital. Enam bulan setelah go-live dengan Ramco, kami memenangkan tiga kontrak enterprise yang sebelumnya tidak bisa kami menangkan. Margin yang dipulihkan dari penagihan menutupi biaya platform dalam 16 bulan."*
("For two years we lost tenders to competitors with digital customer portals. Six months after going live with Ramco, we won three enterprise contracts we previously couldn't win. Recovered billing margin paid for the platform in 16 months.")
— CEO, 3PL Nasional Indonesia, pendapatan Rp 1,4 triliun (referensi tersedia atas permintaan)

**Rp 20–35 miliar** | **16 bulan** | **3 kontrak enterprise baru**
EBITDA yang dapat dipulihkan | Payback period tipikal | Kontrak baru pasca go-live

**Siap melihat business case spesifik untuk skala operasi Anda?**
Jadwalkan percakapan komersial 20 menit — tanpa demo produk:
[rep email] | [rep phone / WhatsApp]

---

### CEO | Saudi Arabia

---

**افوز بالعقود المؤسسية. احمِ هوامشك. انمُ دون تصاعد متناسب في التكاليف.**
*Win Enterprise Contracts. Protect Your Margins. Grow Without Proportional Cost Escalation.*
*لقادة شركات 3PL في المملكة العربية السعودية الساعين لتحقيق أهداف رؤية 2030 وتعزيز الموقع التنافسي.*

---

**THE CHALLENGE**

- رؤية 2030 تستهدف تدفقاً لوجستياً يبلغ 1.8 مليار طن بحلول 2030 — شركات 3PL التي تريد حصة من هذا النمو يجب أن تثبت قدرة رقمية معتمدة؛ العملاء الحكوميون والمؤسسيون يطلبون الآن رؤية رقمية وفوترة آلية كمتطلبات أساسية في طلبات تقديم العروض
- الفجوة بين إيرادات النقل والمستودعات ومحاور الشحن المُحاسَبة فعلياً والإيرادات التي كان ينبغي تحصيلها — من خلال حسابات الأسعار والرسوم الإضافية الموسمية — تكلف شركات 3PL السعودية في المتوسط 1.5–3% من إجمالي إيراداتها سنوياً
- كل دورة نمو تضيف كوادر بمعدل مماثل للإيرادات؛ تقلبات الطلب الموسمي (رمضان، الحج، اليوم الوطني) تتطلب موظفين مؤقتين بدلاً من بنية تحتية قابلة للتوسع

**THE RAMCO APPROACH**

تمنح منصة رامكو شركة 3PL متوسطة الحجم القدرة التقنية التي تجعلها قادرة على المنافسة على العقود المؤسسية الكبيرة — بما في ذلك العطاءات الحكومية المرتبطة برؤية 2030. رؤية تشغيلية موحدة، وفوترة آلية متوافقة مع ZATCA، وبوابة عملاء رقمية، ودعم اللغة العربية للمستخدمين التشغيليين — كلها مضمنة في المنصة، لا إضافات مدفوعة.

**WHAT CHANGES**

- موقع تنافسي في طلبات العروض المؤسسية — إثبات القدرة الرقمية في كل اجتماع عميل؛ التوقف عن خسارة العقود بسبب فجوات تقنية
- EBITDA قابل للاسترداد من دقة الفوترة — متوسط 1.8–3 مليون ريال سنوياً في السنة الأولى بعد التشغيل من مطالبات التعريفة والرسوم الإضافية التي لم تُحصَّل سابقاً
- هيكل تكاليف قابل للتوسع موسمياً — معالجة أحجام رمضان والحج دون إضافة موظفين مؤقتين؛ التوزيع التلقائي للمهام والمسارات يتعامل مع الفائض

**CUSTOMER PROOF**

*"في عامين متتاليين خسرنا عطاءات مؤسسية كبيرة لصالح منافسين يمتلكون قدرات رقمية أفضل. بعد ستة أشهر من تشغيل رامكو، فزنا بأربعة عقود لم نكن لنفوز بها في السابق. الهوامش المستردة من الفوترة وحدها غطّت تكلفة المنصة خلال 15 شهراً."*
("For two consecutive years we lost major enterprise tenders to competitors with better digital capabilities. Six months after going live on Ramco, we won four contracts we couldn't have won previously. Recovered billing margin alone covered the platform cost in 15 months.")
— الرئيس التنفيذي، مجموعة لوجستية خليجية، إيرادات 650 مليون ريال (المرجع متاح عند الطلب)

**1.8–3 مليون ريال** | **15 شهراً** | **4 عقود جديدة**
EBITDA قابل للاسترداد سنوياً | فترة الاسترداد النموذجية | عقود جديدة بعد التشغيل

**هل أنت مستعد لرؤية حالة الأعمال المحددة لحجم إيراداتك وملف عملائك؟**
احجز محادثة تجارية مدتها 20 دقيقة مع مديرنا الإقليمي — بدون عرض توضيحي للمنتج:
[rep email] | [rep phone]

---

### CEO | Philippines

---

**Win the Contracts Your Competitors Already Have. Stop the Margin Leak. Scale Smarter.**
*For Philippine 3PL owners and MDs who know the business can grow — but only if the platform underneath it keeps up.*

---

**THE CHALLENGE**

- Conglomerate-owned logistics groups (2GO, LBC, Ayala Logistics) are winning enterprise FMCG and pharma contracts that mid-market 3PLs should be competitive for — the differentiator is not price or relationships, it is demonstrated digital capability: real-time tracking portals, automated invoicing, digital POD
- Billing errors and post-peak reconciliation — particularly after 11.11 and 12.12 — cost the average Philippine 3PL between ₱15M and ₱40M annually in unrecovered charges and dispute writedowns
- Revenue grows at 15–20% per year, but so does headcount and overhead — the business is not scaling; it is just getting more complex and more dependent on people who know how things work

**THE RAMCO APPROACH**

Ramco gives a Philippine 3PL the enterprise-grade digital capability to compete and win the contracts currently going to the largest operators. A live customer tracking portal, automated billing across all customers and rate structures, digital POD, and a unified operational view — deployed and live within 90 days, with a Manila-based team supporting the implementation. The business case typically pays back from billing recovery alone within 12–18 months. The competitive positioning value — winning enterprise contracts that were previously out of reach — is where the real growth happens.

**WHAT CHANGES**

- Competitive positioning in enterprise RFPs — demonstrate real-time visibility, automated invoicing, and a customer portal in every bid; stop losing to 2GO and LBC on technology capability alone
- Recoverable margin from billing accuracy — the average Philippine 3PL recovers ₱20–35M in previously unrecovered charges within the first year of go-live; post-peak billing that previously took 3 weeks now closes in 2 days
- Sublinear cost growth — new customers and new lanes onboard in 3 weeks, not 3 months; headcount growth decouples from revenue growth

**CUSTOMER PROOF**

*"We'd been losing FMCG contract renewals to 2GO because we couldn't offer a digital tracking portal. Eight months after going live on Ramco, we won back two accounts and added three new enterprise clients who cited our platform capability as a factor. Our billing team is finally not drowning after every peak season."*
— President, Metro Manila-based 3PL, ₱1.9B annual revenue (reference available on request)

**₱20–35M** | **12–18 months** | **3 new enterprise clients**
Recoverable annual billing margin | Typical payback period | New wins attributable to platform

**Ready to see the business case for your freight under management and customer base?**
Book a 20-minute commercial conversation with our Philippines MD — no demo, no product walk-through:
[rep calendar link]

---

## Part 4 — Claude Generator Prompts

Use these prompts when you need to generate a new one-pager variant — for a specific account, a new region, a new proof point, or a refreshed headline test.

---

### Prompt 1 — New Persona One-Pager (Full Generation)

Copy and paste this prompt into Claude. Fill in the `[INPUTS]` section before running.

```
You are a B2B enterprise marketing specialist for Ramco Systems — a logistics software company targeting 3PL operators with $100M+ annual revenue.

Your task is to write a complete executive one-pager (leave-behind for a C-suite meeting, max 400 words on the page) for the following context:

[INPUTS]
- Persona: [CIO/VP IT | COO/VP Ops/Head of Transport/Head of Warehousing | CEO/President/MD]
- Region: [Australia | Indonesia | Saudi Arabia | Philippines]
- Account name (if account-specific): [Leave blank for generic regional version]
- Recent customer proof point (if available): [Quote, metric, or case study detail — e.g., "Brisbane 3PL recovered $280K in billing in Q1 post go-live"]
- Headline variant to test: [e.g., Outcome-led | Pain-led | Competitor-displacement]
- Primary pain to lead with: [e.g., billing leakage | real-time visibility gap | enterprise RFP losses]

[RULES]
- Structure: Headline → Subheading → The Challenge (3 bullets) → The Ramco Approach (2–3 sentences) → What Changes (3 outcome bullets with numbers) → Customer Proof (quote or stat) → Metrics Row (3 numbers) → CTA
- Headline: Under 12 words. Outcome-led or pain-led. Never start with "Ramco".
- Challenge bullets: Use the persona's exact vocabulary — not marketing language. CIO says "middleware", COO says "billing leakage", CEO says "EBITDA".
- What Changes: Every bullet must include a number (%, $, days, ×). No vague claims.
- Proof block: Use the proof point provided, or use a plausible but clearly labelled placeholder if none provided: [Reference customer, region, revenue, available on request]
- CTA: One sentence. One action. Specific to the persona — CIO gets a technical briefing offer, COO gets an operations demo offer, CEO gets a commercial conversation (no demo language)
- Regional specificity: Include at least 2 region-specific hooks (named regulatory requirement, named customer/competitor, regional market context). Do not use generic language with a country name inserted.
- No placeholders in the output — write the full one-pager, ready to send
- Maximum 400 words total in the body copy

Write the one-pager now.
```

---

### Prompt 2 — Regional Language Adaptation

Use when you have an existing English one-pager and need a Bahasa Indonesia or Arabic version.

```
You are a native-level [Bahasa Indonesia | Arabic] copywriter specialising in B2B enterprise technology marketing for the logistics sector.

Your task is to adapt the following English executive one-pager into [Bahasa Indonesia | Arabic] for use with [Indonesian | Saudi Arabian] logistics company executives.

[PASTE ENGLISH ONE-PAGER HERE]

[RULES]
- This is not a direct translation — it is a cultural and linguistic adaptation
- Maintain the structure exactly: Headline → Subheading → Challenge → Approach → What Changes → Proof → Metrics Row → CTA
- Use the formal register appropriate for C-suite communication in [Indonesia | Saudi Arabia]
- For Indonesian: Use Bapak/Ibu conventions where appropriate; use formal Bahasa Indonesia (not conversational); retain English technical terms (TMS, WMS, API, ZATCA) where these are industry-standard in the market
- For Arabic: Use Modern Standard Arabic (MSA) for all body copy; right-to-left layout assumption; retain acronyms (ZATCA, PDPL, VAT) in English as they are used in-market; avoid direct translation of idioms — adapt meaning
- Numbers and currencies: Convert to local format (IDR for Indonesia, SAR for Saudi Arabia) and local number formatting conventions
- Proof block: Adapt the reference company description to feel credible for the local market (e.g., "national logistics group" rather than a specific name)
- Do not use machine translation tone — write as a native speaker would
- Output both the adapted version AND a brief back-translation note (2–3 sentences) confirming the meaning is preserved

Write the adapted one-pager now.
```

---

### Prompt 3 — One-Pager Refresh (New Proof Point Integration)

Use quarterly when new customer wins, case studies, or metrics become available.

```
You are a B2B enterprise marketing specialist for Ramco Systems.

I have an existing executive one-pager and a new customer proof point I want to integrate. Your task is to:
1. Replace the existing proof block with the new proof point
2. Update the Metrics Row to reflect the new numbers
3. Review the What Changes bullets — if the new proof point is more compelling than the existing numbers, update those too
4. Review the headline — if the new proof point enables a more specific or more credible outcome claim, suggest 2 alternative headlines

[EXISTING ONE-PAGER]
[PASTE EXISTING ONE-PAGER HERE]

[NEW PROOF POINT]
- Customer description: [e.g., COO at a Sydney-based 3PL, $210M revenue]
- Key metric 1: [e.g., Recovered $410K in billing leakage in first 90 days]
- Key metric 2: [e.g., Cut month-end close from 18 days to 3 days]
- Key metric 3: [e.g., Onboarded 2 new enterprise clients in 6 weeks post go-live]
- Quote (if available): [verbatim or near-verbatim]
- Can we name the company? [Yes / No — if No, describe as "Australian 3PL, $210M revenue"]

[RULES]
- Do not change the structure, persona, or region of the one-pager
- Do not change language that is working — only update what the new proof point improves
- The proof block must use the exact quote if provided, or a clearly attributed paraphrase if not
- If suggesting headline alternatives, label them: [Outcome-led variant] and [Proof-led variant]
- Output the complete refreshed one-pager, ready to replace the current version

Write the refreshed one-pager now.
```

---

## Part 5 — Deployment Checklist

Before distributing any one-pager to a rep or an account:

- [ ] Confirmed persona match — do not send the wrong persona one-pager to the wrong executive
- [ ] Confirmed region match — the regional hooks (regulations, market context, named competitors) must match the account's country
- [ ] Proof block reviewed — if the reference customer is real and named, confirm they have approved the attribution
- [ ] Sales Lead sign-off — all one-pagers require Sales Lead approval before first use in region
- [ ] Uploaded to HubSpot Documents — so open tracking and rep access is managed centrally
- [ ] Linked in the relevant HubSpot Playbook — reps should be able to pull the right one-pager directly from within a contact record without hunting for a PDF
- [ ] PDF version and editable version both stored — PDF for sending, editable for regional Sales Lead to make minor adjustments without requesting a full remake
- [ ] Version number and last-updated date on file name — e.g., `ramco-onepager-coo-au-v2-mar2026.pdf`

**HubSpot document naming convention:**
`[Persona abbreviation]-[Region]-[Version]-[Month Year]`
Examples:
- `cio-au-v1-jan2026`
- `coo-ph-v2-mar2026`
- `ceo-sa-v1-feb2026`
