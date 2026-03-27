# Skill 04 — Email Nurture Sequences

## Ramco Logistics Software | Activation

> **Purpose:** Design, build, and deploy multi-touch email nurture sequences that move 3PL prospects through the funnel from first awareness to sales-ready conversation — without requiring an SDR touch at every step.
> **Output:** Three live HubSpot email sequences (one per persona), each with 4–6 emails, enrolled automatically from ABM list segments, with performance tracking configured.
> **Owner:** Demand Gen / Marketing Ops
> **Estimated time to complete:** 10–14 hours for initial build across all three personas; 2 hours/month for optimisation

---

## Prerequisites

- `/inputs/persona-definitions.md` — read in full before writing a single email
- `/skills/activation/skill-03-persona-messaging-architecture.md` — messaging matrix must be approved before email copy is written
- `/skills/acquisition/skill-01-abm-account-list-building.md` — HubSpot lists must exist before sequences can be enrolled
- HubSpot Marketing Hub Professional or Enterprise (sequences + smart content + workflows)
- Verified sending domain (SPF, DKIM, DMARC all configured — see Step 2)
- At least one content asset per persona to use as a mid-funnel offer (case study, guide, or webinar)
- Sales sign-off on handoff criteria (what constitutes a sales-ready lead from nurture)

---

## How This Skill Fits the Funnel

Email nurture sits between first awareness and sales conversation. Its job is not to close deals — it is to:

1. Keep Ramco visible and credible between SDR touches
2. Educate prospects on the cost of their current problem
3. Build enough trust that when the SDR follows up, the prospect already knows who Ramco is
4. Surface intent signals (link clicks, content downloads, reply to email) that trigger SDR action
5. Ensure Email size is sharp, poised and to the point. Longer emails tend to get least attention. 

This skill produces three tracks — one per persona. Each track is distinct in tone, pain point, proof, and CTA. A CIO and a COO at the same company must never receive the same email.

---

## Step-by-Step Execution Workflow

---

### STEP 1: Define Track Architecture

**Time:** 60 minutes | **Owner:** Demand Gen Lead

Before writing any copy, define the structure of each track. Lock this before writing begins — changing track architecture mid-production wastes significant time.

#### Track Definitions

**Track 1 — Technology Persona (CIO / VP IT / Director IT)**

- **Trigger:** Contact enrolled in `Messaging | Tech Persona | [Region]` list AND no open deal in HubSpot
- **Goal:** Get a technical discovery call or platform architecture walkthrough booked
- **Length:** 5 emails over 21 days
- **Tone:** Peer-level, technical credibility, direct — no fluff
- **Content offer:** Technical integration guide, architecture whitepaper, or implementation methodology document
- **Conversion CTA:** "Book a 30-minute technical walkthrough"

**Track 2 — Operations Persona (COO / VP Ops / Head of Transport / Head of Warehousing)**

- **Trigger:** Contact enrolled in `Messaging | Ops Persona | [Region]` list AND no open deal in HubSpot
- **Goal:** Get an operational demo or discovery call booked
- **Length:** 5 emails over 21 days
- **Tone:** Practical, outcome-led, peer-aware — they are busy; respect their time
- **Content offer:** Operations-focused case study, ROI calculator, or "day-in-the-life" product video
- **Conversion CTA:** "Book a 20-minute operations demo"

**Track 3 — CEO Persona (CEO / President / Owner / Managing Director)**

- **Trigger:** Contact enrolled in `Messaging | CEO Persona | [Region]` list AND no open deal in HubSpot
- **Goal:** Get an executive briefing or introduction to a regional Sales leader
- **Length:** 4 emails over 18 days (shorter — CEO attention is scarce)
- **Tone:** Executive-level, business outcome-led, brief — maximum 150 words per email
- **Content offer:** Executive one-pager, peer CEO video testimonial, or industry benchmark report
- **Conversion CTA:** "Request a 15-minute executive briefing"

#### Email Cadence Rules (apply to all tracks)

- Minimum 3 days between emails — never send on consecutive days
- Never send on Mondays before 10am or Fridays after 2pm local time (use HubSpot send-time optimisation)
- If a contact replies at any point — pause the sequence immediately and route to SDR within 4 business hours
- If a contact clicks a CTA link but does not convert — trigger a same-day SDR task in HubSpot
- If a contact opens 3 or more emails without clicking — flag as warm; SDR should reach out via LinkedIn

---

### STEP 2: Confirm Technical Infrastructure

**Time:** 30–45 minutes | **Owner:** Marketing Ops

Email deliverability is not optional. If this step is skipped, nurture emails land in spam and the entire programme fails silently.

#### 2a: Verify Domain Authentication

Check all three records are configured for your sending domain (e.g., `marketing.ramco.com` or `go.ramco.com`):

**SPF (Sender Policy Framework):**

```
In your DNS, look for a TXT record starting with "v=spf1"
It must include HubSpot's sending servers: include:_spf.hubspot.com
Full record example: v=spf1 include:_spf.hubspot.com ~all
```

**DKIM (DomainKeys Identified Mail):**

- Navigate to: HubSpot → Settings → Marketing → Email → Sending Domains
- Confirm DKIM status shows "Verified" for your sending domain
- If not verified, follow HubSpot's DKIM setup guide and add the provided CNAME records to DNS

**DMARC (Domain-based Message Authentication):**

```
Add a TXT record to DNS for _dmarc.[yourdomain.com]
Minimum record: v=DMARC1; p=quarantine; rua=mailto:[your-email@domain.com]
Recommended for production: p=reject once you confirm no deliverability issues
```

**Verify at:** mail-tester.com — send a test email and confirm score is 9/10 or above before launching any sequence.

#### 2b: Configure a Dedicated Sending Subdomain

Do not send nurture emails from `@ramco.com` directly. Use a subdomain:

- Recommended: `hello@go.ramco.com` or `[name]@engage.ramco.com`
- This protects the main domain's sender reputation if nurture campaigns generate spam complaints
- Set up the subdomain in HubSpot → Settings → Marketing → Email → Sending Domains

#### 2c: Warm the Sending Domain (if new)

If the sending subdomain is new (less than 30 days old), warm it before launching full sequences:

- Week 1: Send to no more than 200 contacts per day — highest-engagement contacts first (existing customers, event attendees)
- Week 2: 500 contacts per day
- Week 3: 1,000 contacts per day
- Week 4+: Full volume

Skipping warm-up on a new domain will trigger spam filters at major providers (Google Workspace, Outlook 365) and tank deliverability for months.

#### 2d: Configure Global Unsubscribe and Suppression

Navigate to: **HubSpot → Settings → Marketing → Email → Subscriptions**

- Create a subscription type: "B2B Marketing Emails — Ramco Logistics"
- Ensure all nurture emails are sent under this subscription type
- Suppression lists to configure before any send:
  - Existing Ramco customers (do not nurture existing customers with acquisition messaging)
  - Active deal contacts (contacts with an open HubSpot deal — SDR owns this relationship)
  - Contacts who have unsubscribed in the last 12 months
  - Contacts at disqualified accounts (ABM Account Tier = Disqualified)

---

### STEP 3: Write Email Copy for All Three Tracks

**Time:** 4–6 hours | **Owner:** Copywriter / Demand Gen (use Claude Prompt 1 to accelerate)

**Before writing:** Re-read the relevant persona section in `/inputs/persona-definitions.md` and pull the approved messaging matrix from `/skills/activation/skill-03-persona-messaging-architecture.md` for the persona you are writing.

**Copy rules that apply to every email in every track:**

- Subject line: Under 50 characters. No exclamation marks. No "Quick question" (overused). No spam triggers (free, guaranteed, act now, limited time).
- Preview text: Always set — it is the second subject line. Under 90 characters. Should add context, not repeat the subject.
- Opening line: Must not start with "I", "We", or "My name is". The prospect's world comes first.
- Body: Plain text style even in HTML format — no heavy design, no image-only blocks, no excessive formatting. These are B2B emails to executives, not newsletters.
- Length: Track 1 (CIO): 100–180 words. Track 2 (Ops): 80–150 words. Track 3 (CEO): 60–120 words.
- CTA: One per email. Never two. The CTA in emails 1–3 should be low-friction (read, watch, download). Only emails 4–5 should ask for a meeting.
- Signature: Real person name, real title, real phone number. Never "The Ramco Team".
- PS line: Always include in emails 1 and 4 — the PS is the second-most-read part of an email after the subject line.

---

#### TRACK 1 — Technology Persona Email Sequence

**Email 1 — Day 0 (Send immediately on enrollment)**

```
Subject: How [Company] IT teams are handling TMS/WMS integration
Preview: One architecture decision that changes everything

[First Name],

Most 3PL IT teams I speak with are managing 3–5 point solutions that don't share data cleanly — TMS, WMS, fleet tracking, billing, and an ERP sitting above all of it with middleware holding everything together.

It works. Until it doesn't.

When it breaks, it's usually during peak season, or when a new customer needs onboarding, or when the business wants a report that requires pulling data from four systems manually.

I put together a short overview of how 3PLs at your scale are consolidating this architecture without a rip-and-replace migration. It's worth 5 minutes if integration complexity is on your radar.

[Link: Download — Integration Architecture Guide for 3PL IT Teams]

[Sender Name]
[Title] | Ramco Systems
[Phone]

PS — If you're already evaluating platforms, I'm happy to send our API documentation and integration specs directly. Just reply and I'll get them to you.
```

---

**Email 2 — Day 4**

```
Subject: The hidden cost of 3PL data fragmentation
Preview: It's not the systems. It's what they can't see together.

[First Name],

When TMS and WMS don't share a data model, operations teams spend hours every week reconciling what actually happened — versus what the system thinks happened.

The result: billing disputes that eat margin, SLA misses that damage customer relationships, and reporting that requires a spreadsheet to be useful.

The fix isn't always a new system. Sometimes it's an integration layer. Sometimes it's consolidation. It depends on your current architecture and where the friction actually sits.

Here's a breakdown of the three most common integration patterns we see in 3PLs at the $100M–$500M revenue range — and the trade-offs of each.

[Link: Read — 3PL Integration Patterns: What Works at Scale]

[Sender Name]
[Title] | Ramco Systems
[Phone]
```

---

**Email 3 — Day 9**

```
Subject: [Case study] 18-month TMS/WMS consolidation at a mid-market 3PL
Preview: What the IT team said six months after go-live

[First Name],

One of the questions I hear most from IT leaders before a platform decision: "What does implementation actually look like, and how much will it pull my team away from everything else?"

Fair question.

I've attached a case study from a 3PL that ran a phased TMS/WMS consolidation over 18 months. It covers the integration approach, what connected to their existing ERP, the go-live timeline, and what the IT lead said when we checked in six months later.

The implementation wasn't perfect — they'll tell you that. But the honest account of how they navigated it is more useful than a polished vendor success story.

[Link: Download — 3PL Platform Consolidation Case Study]

[Sender Name]
[Title] | Ramco Systems
[Phone]
```

---

**Email 4 — Day 14**

```
Subject: Before you shortlist — a few questions worth answering
Preview: Not a pitch. A checklist.

[First Name],

If you're evaluating logistics platforms — or expect to be in the next 6–12 months — there are a few questions that tend to separate the vendors who can actually deliver from the ones who make it look easy in demos.

I put together a short vendor evaluation checklist specifically for 3PL IT teams. It covers API documentation standards, implementation methodology, post-go-live support SLAs, and data model flexibility.

Use it however you like — including to evaluate Ramco.

[Link: Download — 3PL Platform Evaluation Checklist for IT Teams]

[Sender Name]
[Title] | Ramco Systems
[Phone]

PS — If you'd like to run through the checklist against our platform specifically, I can set up a 30-minute technical walkthrough with one of our implementation architects. No sales pitch — just architecture and integration questions. Reply if that's useful.
```

---

**Email 5 — Day 21 (Final touch)**

```
Subject: Last one from me, [First Name]
Preview: Leaving the door open

[First Name],

I've shared a few resources over the past few weeks — integration patterns, a case study, a vendor evaluation checklist.

If none of it landed at the right time, no problem at all. Platform decisions have their own timelines.

If you do revisit this in the next quarter or two, I'm at [email] or [phone]. Happy to answer technical questions directly, share API documentation, or arrange a reference call with an IT counterpart at a similar 3PL.

Either way, I'll stop filling your inbox now.

[Sender Name]
[Title] | Ramco Systems
[Phone]
```

---

#### TRACK 2 — Operations Persona Email Sequence

**Email 1 — Day 0**

```
Subject: How much is manual billing costing your operation?
Preview: Most 3PLs don't know — until they calculate it

[First Name],

For most 3PL operations teams, billing is the last thing that gets fixed.

Transport is automated. Warehouse is automated. But billing — rating complex multi-client contracts, reconciling carrier invoices, chasing disputed charges — still runs on spreadsheets and a few people who know how the system works.

The revenue leakage from billing errors and disputes is usually between 1–3% of top-line revenue for a 3PL at your scale. On $150M turnover, that's $1.5M–$4.5M per year sitting in disputed invoices, missed charges, and manual corrections.

I wrote a short piece on where the leakage happens and how 3PLs are closing it. Worth a read if billing accuracy is a pain point for your team.

[Link: Read — Where 3PLs Lose Revenue in Billing (And How to Stop It)]

[Sender Name]
[Title] | Ramco Systems
[Phone]

PS — If you'd prefer to see this in a live platform, I can show you exactly how automated rating and billing works for a multi-client 3PL operation. Takes 20 minutes. Reply to book a time.
```

---

**Email 2 — Day 4**

```
Subject: "Where is my shipment?" — the question costing your team hours
Preview: Real-time visibility changes more than you'd expect

[First Name],

Every 3PL operations team fields a version of the same call, every single day: a customer wanting to know where their freight is.

The answer requires checking the TMS, calling the carrier, possibly calling the driver, then calling the customer back. Fifteen minutes, minimum.

Multiply that by your volume of active shipments and the number of customers who escalate, and you've got a significant chunk of your team's day spent on reactive communication that automation should handle entirely.

The 3PLs that have solved this aren't necessarily bigger or better resourced. They've just given their customers (and their team) a single view of what's happening, updated in real time.

Here's a short video of how that looks in practice.

[Link: Watch — 3PL Real-Time Visibility Demo (4 minutes)]

[Sender Name]
[Title] | Ramco Systems
[Phone]
```

---

**Email 3 — Day 9**

```
Subject: Growing from $120M to $200M — what the operations team had to change
Preview: It wasn't headcount

[First Name],

The most common inflection point I hear from operations leaders is somewhere around $100M–$150M revenue.

Below that, you can run a lot on experience, relationships, and a small team who knows every carrier and every customer. Above it, that model breaks. The business is too complex for tribal knowledge to hold it together, and every new customer adds cost at roughly the same rate as revenue.

The 3PLs that cross $200M without doubling their operations headcount have one thing in common: they invested in operational infrastructure before they needed it, not after.

I've put together a case study of one that did exactly that. The numbers are in there — headcount, cost per shipment, billing accuracy, customer onboarding time — before and after.

[Link: Download — Operations Transformation Case Study: $120M to $200M Without the Headcount]

[Sender Name]
[Title] | Ramco Systems
[Phone]
```

---

**Email 4 — Day 14**

```
Subject: The 20-minute demo that operations teams keep asking to see again
Preview: Specific to 3PLs. No generic logistics demo.

[First Name],

Most software demos show you a product. Ours start with your operation.

Before any screen-share, we map your transport model, your warehouse configuration, your billing structure, and your customer SLA obligations. The demo you see is built around those — not a generic logistics scenario.

Operations leaders tell us it's the first time a vendor has shown them something that actually looked like their business.

If that sounds worth 20 minutes, I can book it with our operations specialist for [REGION].

[Link or reply: Book a 20-Minute Operations Demo]

[Sender Name]
[Title] | Ramco Systems
[Phone]

PS — If you're not the right person for this conversation, I'd appreciate a point in the right direction. Happy to reach out to whoever owns technology decisions in your operations team.
```

---

**Email 5 — Day 21 (Final touch)**

```
Subject: Leaving this here, [First Name]
Preview: No follow-up after this one

[First Name],

I've reached out a few times over the past few weeks — billing accuracy, real-time visibility, a case study on scaling operations.

If the timing isn't right, I completely understand. Platform decisions don't happen on a vendor's schedule.

When it is the right time — whether that's next quarter or next year — I'm at [email]. Happy to show you how Ramco works for a 3PL at your scale, or put you in touch with an operations leader at a similar business who can give you an honest account.

I'll leave it there.

[Sender Name]
[Title] | Ramco Systems
[Phone]
```

---

#### TRACK 3 — CEO Persona Email Sequence

**Email 1 — Day 0**

```
Subject: The digital gap in 3PL enterprise deals
Preview: Why some 3PLs keep losing to competitors they should beat

[First Name],

Enterprise shippers are changing what they require from a 3PL partner.

Real-time shipment visibility via API. Automated proof of delivery. Digital invoicing with no dispute lag. A customer portal their procurement team can log into without calling your operations team.

3PLs that can demonstrate this capability are winning contracts they shouldn't win on price. 3PLs that can't are losing contracts they should win on relationships.

The gap between those two groups is widening quickly.

I wrote a short piece on what's driving this shift and what the 3PLs closing the gap are doing differently.

[Link: Read — The Digital Capability Gap in 3PL Enterprise Sales]

[Sender Name]
[Title] | Ramco Systems
[Phone]

PS — If this is a conversation worth having, I'm happy to arrange a brief call with our [REGION] lead. 15 minutes, no pitch — just a direct conversation about where your business is and where the market is heading.
```

---

**Email 2 — Day 5**

```
Subject: One number most 3PL CEOs don't track (but should)
Preview: It's sitting in your billing data

[First Name],

Cost per shipment.

Not total logistics cost — cost per individual shipment, by customer, by lane, by operation type.

Most 3PLs at $100M+ revenue can't calculate this in under 24 hours because billing, transport, and warehouse data live in separate systems with no clean way to join them.

Without it, you can't see which customers are genuinely profitable, which lanes are margin-negative, or where operational investment will actually move the dial.

The 3PLs winning on margin — not just revenue — have this number available in real time.

Here's a one-page overview of how they get there.

[Link: Download — The 3PL Profitability Dashboard: One Page]

[Sender Name]
[Title] | Ramco Systems
[Phone]
```

---

**Email 3 — Day 11**

```
Subject: What [Peer Company Type] said after 12 months on Ramco
Preview: In their words, not ours

[First Name],

The question I hear most from CEOs before a platform decision isn't about features. It's: "Can you show me someone like me who's done this and doesn't regret it?"

Fair.

Here's a short video from the Managing Director of a 3PL at roughly your scale — same revenue range, similar operational model, in [REGION]. They went live 18 months ago. He talks about what pushed them to act, what implementation was actually like, and what changed for the business.

He's also open to a direct call if you'd prefer to hear it unfiltered. I can arrange that.

[Link: Watch — MD Testimonial Video (3 minutes)]

[Sender Name]
[Title] | Ramco Systems
[Phone]
```

---

**Email 4 — Day 18 (Final touch)**

```
Subject: Last note, [First Name]
Preview: One offer, then I'll get out of your inbox

[First Name],

I've sent a few things over the past few weeks — the digital capability gap, profitability metrics, a peer testimonial.

If now isn't the right time, I understand completely. These decisions have long cycles for good reason.

One offer before I stop: I can arrange a 15-minute call between you and our [REGION] Managing Director — no sales agenda, just a peer conversation about where the 3PL market is going and how technology fits into that. A number of CEOs have found it useful regardless of whether they went ahead with Ramco.

If that's of interest, reply and I'll set it up. If not, I'll leave you to it.

[Sender Name]
[Title] | Ramco Systems
[Phone]
```

---

### STEP 4: Apply Regional Adaptations to All Email Copy

**Time:** 2–3 hours | **Owner:** Copywriter / Demand Gen

The email sequences above are the global templates. Apply the following adaptations before building in HubSpot. Do not launch to any region without adapting.

---

#### Australia

**Sending name and signature:** Use a real Australian-based team member's name and mobile number where possible. An Australian mobile (+61 4XX XXX XXX) in the signature signals local presence and dramatically improves reply rates.

**Subject line tone:** Australian executives respond to direct, non-corporate subject lines. Test subject lines that sound like they came from a person, not a marketing department. "Quick one, [First Name]" or "[Company] — worth a conversation?" outperform formal subject lines in AU testing.

**Body copy adjustments:**

- Replace "enterprise shippers" with "major retail and FMCG customers" in CEO and Ops tracks — more specific to the AU 3PL context
- Add Chain of Responsibility (CoR) reference in Track 1 (CIO) Email 2: "CoR compliance also means your systems need to produce auditable driver behaviour and load data — that's harder when the data lives in three separate systems."
- In Track 2 (Ops) Email 1, replace the generic revenue leakage stat with AU-specific framing: "For a 3PL running $150M in freight under management in Australia, billing disputes and missed charges typically cost between..."
- In Track 3 (CEO) Email 1, reference the competitive context directly: "The major national operators — Toll, Linfox, Mainfreight — have been investing in digital infrastructure for five years. Regional and mid-market 3PLs are now competing against that capability."

**Send time optimisation (AEST):**

- Best days: Tuesday, Wednesday, Thursday
- Best times: 7:30–9:00am AEST (before the day gets away from them) or 1:00–2:00pm AEST
- Avoid: Friday afternoons, Monday mornings, public holidays (check AU state-by-state public holiday calendar — they vary)

---

#### Indonesia

**Sending name and signature:** If a Ramco Indonesia team member exists, send from their account. If not, use a generic but named sender (e.g., "Andi Wijaya, Regional Director, Ramco Systems Indonesia") — do not use a Western name for Indonesia-market outreach if an Indonesian-named sender is available.

**Salutation adjustment:** Change "Hi [First Name]" to "Dear Bapak/Ibu [First Name]" for the first email in each track. Subsequent emails can use "[First Name]," once a response pattern is established.

**Body copy adjustments:**

- In Track 2 (Ops) Email 2, replace the generic visibility framing with: "For 3PLs managing inter-island freight across Java, Sumatra, and Kalimantan, real-time shipment visibility isn't just a customer service improvement — it's the difference between proactive exception management and reactive crisis handling."
- In Track 3 (CEO) Email 1, reference Vision-equivalent context: "Indonesia's logistics sector is growing at 8–10% annually, driven by e-commerce demand from Tokopedia, Shopee, and TikTok Shop. The 3PLs capturing the largest contracts are the ones who can demonstrate digital capability at scale."
- Add a data residency reassurance note in Track 1 (CIO) Email 1: "Data residency in Indonesia is increasingly a requirement under the PDP Law. Our platform supports Indonesian data hosting — worth covering early in any technical evaluation."

**Language note:** Emails sent to Indonesia should be in English at CIO/COO/CEO level. However, include a line in Email 1 and Email 4 offering Bahasa Indonesia materials: "All product documentation and implementation support is available in Bahasa Indonesia if that's more useful for your team."

**Send time optimisation (WIB — Western Indonesia Time):**

- Best days: Tuesday, Wednesday, Thursday
- Best times: 8:00–10:00am WIB or 1:30–3:00pm WIB
- Avoid: Friday afternoons (Jumu'ah prayer), during Ramadan (reduced send volume; shift to 10am–12pm WIB to catch post-Fajr work hours), Indonesian public holidays

---

#### Saudi Arabia

**Sending name and signature:** Use a named Arabic-speaking team member from Ramco's Gulf or Saudi team if available. If not, use an English-named sender but include a line in Email 1 offering Arabic-language follow-up: "My colleague [Arabic Name] is also available for any correspondence in Arabic."

**Salutation adjustment:** Use "Dear [First Name]" in English-language emails. If sending in Arabic, use "عزيزي الأستاذ [First Name]" for males and adapt accordingly.

**Body copy adjustments:**

- In ALL tracks, add a Vision 2030 reference in Email 1: "Saudi Arabia's National Transport and Logistics Strategy — a core pillar of Vision 2030 — sets a clear mandate for logistics operators to digitise. The companies positioning themselves as strategic partners in that transformation are the ones investing in platform infrastructure now."
- In Track 1 (CIO) Email 1, add: "PDPL compliance and Saudi data residency are requirements we address from day one — our platform supports deployment on AWS Middle East (Bahrain) and Azure UAE North."
- In Track 1 (CIO) Email 2, add ZATCA reference: "Rating and billing automation also directly supports ZATCA Phase 2 e-invoicing compliance — your billing engine needs to generate Fatoora-compliant XML invoices. Ours does this natively."
- In Track 3 (CEO) Email 3, frame the peer testimonial in GCC terms: "Given that Saudi-specific references are limited at this stage, I'd like to share a case study from a GCC 3PL at similar scale — and offer a direct introduction to their CEO if useful."

**Tone adjustment for all tracks:** Remove any language that implies urgency or time pressure. Replace "Act now" or "Don't miss this" style CTAs with consultative framing: "When the time is right for a conversation, I'm available at your convenience."

**Send time optimisation (AST — Arabia Standard Time):**

- Best days: Sunday, Monday, Tuesday (Saudi work week is Sunday–Thursday)
- Best times: 9:00–11:00am AST or 2:00–4:00pm AST
- Avoid: Friday and Saturday (weekend), prayer times (Dhuhr ~12:30pm, Asr ~3:30pm — brief pauses but worth noting), Ramadan (shift all send times to 9:00–11:00pm AST when executives work late)

---

#### Philippines

**Sending name and signature:** Use a Manila-based Ramco team member's name and direct mobile (+63 9XX XXX XXXX) where available. BGC or Makati office address in the signature is a credibility signal.

**Body copy adjustments:**

- In Track 2 (Ops) Email 2, replace generic visibility copy with: "In Metro Manila, where EDSA traffic can turn a 3-hour delivery window into a 6-hour one, real-time dispatch visibility isn't just about customer communication — it's about re-routing in real time, reassigning drivers, and keeping SLAs intact despite infrastructure that's outside your control."
- In Track 2 (Ops) Email 3, use Philippine-specific growth framing: "Philippine 3PLs managing e-commerce fulfillment for Lazada, Shopee, and TikTok Shop are seeing 30–50% volume spikes during 11.11 and 12.12 sales events. The ones that can absorb that volume without proportional headcount growth are the ones with automated operations behind them."
- In Track 3 (CEO) Email 1, reference Philippine-specific competitive context: "The large Philippine conglomerates with logistics arms — 2GO, LBC's B2B division, Air21 — have been investing in digital infrastructure. Independent 3PLs competing for the same enterprise accounts need a credible technology story to stay in those deals."
- In Track 1 (CIO) Email 1, add disaster resilience reference: "Business continuity is also worth building into any platform evaluation — Philippine operations need failover capability that accounts for typhoon season and the physical infrastructure disruptions that come with it. Our cloud architecture addresses this directly."

**Send time optimisation (PHT — Philippine Time):**

- Best days: Tuesday, Wednesday, Thursday
- Best times: 8:00–10:00am PHT or 1:00–3:00pm PHT
- Avoid: Friday afternoons (many Philippine executives leave early for weekend), typhoon signal days (genuinely — no one is reading email when Signal 3 is up), December (holiday season starts early in the Philippines; wind down campaigns from December 15)

---

### STEP 5: Build Sequences in HubSpot

**Time:** 2–3 hours | **Owner:** Marketing Ops / HubSpot Admin

#### 5a: Create Email Templates

Navigate to: **HubSpot → Marketing → Email → Create Email → Automated**

Create one email template per email in each track. Naming convention:

```
NUR | [Track] | [Persona] | [Region] | E[Number] — [Short description]

Examples:
NUR | T1 | CIO | AU | E1 — Integration architecture intro
NUR | T2 | OPS | ID | E3 — Operations scale case study
NUR | T3 | CEO | SA | E1 — Digital capability gap
```

**Template setup per email:**

- Email type: Automated (not marketing — this bypasses the "unsubscribe" footer requirement for one-to-one sends, but only if you are using Sequences, not Workflows. If using Workflows, marketing email type is required.)
- From name: [Real sender name] (personalisation token: `{{owner.full_name}}`)
- From address: [Sending subdomain email]
- Reply-to: Same as From (ensure replies go to the sender's actual inbox, not a no-reply address)
- Subject line: Enter from the approved copy
- Preview text: Enter from the approved copy
- Body: Plain text style — minimal HTML. Use HubSpot's "Simple" or "Basic" template, not a designed newsletter template.
- Personalisation tokens to include:
  - `{{contact.firstname}}` — First name
  - `{{contact.company}}` — Company name
  - `{{owner.full_name}}` — Sender name
  - `{{owner.phone}}` — Sender phone
  - `{{owner.email}}` — Sender email

#### 5b: Build HubSpot Workflows for Automated Enrollment

Navigate to: **HubSpot → Automation → Workflows → Create Workflow → Contact-based**

Create one workflow per track per region (12 total: 3 tracks × 4 regions).

Naming convention:

```
NURTURE | [Persona] | [Region] | Track [Number]

Examples:
NURTURE | CIO | AU | Track 1
NURTURE | OPS | PH | Track 2
NURTURE | CEO | SA | Track 3
```

**Workflow structure (example for Track 2 — Ops, Australia):**

**Enrollment trigger:**

- Contact is a member of list: `Messaging | Ops Persona | AU`
- AND Contact property: `hs_email_optout` is unknown or false
- AND Contact property: `abm_sequence_status` is not equal to "Active" or "Meeting Booked"
- AND Associated Company property: `abm_account_tier` is equal to T1 or T2
- AND Contact does not have an associated open deal

**Workflow steps:**

```
[Enrollment trigger fires]
  ↓
Wait: 0 days (send Email 1 immediately)
  ↓
Send email: NUR | T2 | OPS | AU | E1
  ↓
Wait: 4 days
  ↓
If/then branch: Has contact replied to any email? → YES → Set abm_sequence_status = "Replied" → Create task for SDR → End workflow
                                                   → NO → Continue
  ↓
Send email: NUR | T2 | OPS | AU | E2
  ↓
Wait: 5 days
  ↓
If/then branch: Has contact clicked any email link? → YES → Create task for SDR: "Warm lead — clicked email" → Continue (do not stop)
                                                    → NO → Continue
  ↓
Send email: NUR | T2 | OPS | AU | E3
  ↓
Wait: 5 days
  ↓
If/then branch: Has contact replied? → YES → [SDR task + end] → NO → Continue
  ↓
Send email: NUR | T2 | OPS | AU | E4
  ↓
Wait: 7 days
  ↓
If/then branch: Has contact booked a meeting? → YES → Set abm_sequence_status = "Meeting Booked" → End
                                              → NO → Continue
  ↓
Send email: NUR | T2 | OPS | AU | E5
  ↓
Wait: 1 day
  ↓
Set contact property: abm_sequence_status = "Sequence Complete — No Response"
  ↓
Create SDR task: "Nurture sequence complete — no response. LinkedIn outreach recommended."
  ↓
End workflow
```

**Suppression settings:**

- Re-enrollment: OFF (contacts should not cycle through the same track twice)
- Goal: Contact books a meeting (HubSpot meetings link clicked) → exit workflow
- Goal: Contact replies to any email → exit workflow
- Goal: Deal is created for associated company → exit workflow

#### 5c: Configure SDR Notification Tasks

Every workflow should create a HubSpot task for the assigned SDR when:

- A contact replies to any email in the sequence
- A contact clicks a CTA link (meeting request, content download) without converting
- A contact opens 3+ emails without clicking anything (set a delayed branch at Day 14 to check open count)
- The sequence completes with no engagement

**Task format:**

```
Title: NURTURE ALERT — [Contact Name] | [Company] | [Action]
Assign to: [Contact owner — use HubSpot's contact owner token]
Due date: Same day for replies; next business day for clicks and opens
Notes: Auto-populated with: email number, action taken, company tier, region
```

#### 5d: Create Reporting Dashboard

Navigate to: **HubSpot → Reports → Dashboards → Create Dashboard**

Name: `Email Nurture Performance`

Add the following reports:

1. **Email open rate by track** — Bar chart, broken out by Track 1 / Track 2 / Track 3
2. **Email click rate by track** — Bar chart
3. **Reply rate by track** — Bar chart
4. **Sequence completion rate** — What % of enrolled contacts complete the sequence
5. **SDR tasks created from nurture** — Count by week
6. **Meetings booked from nurture sequence** — Count by month
7. **Contacts by sequence status** — Donut chart: Active / Replied / Meeting Booked / Complete No Response
8. **Pipeline influenced by nurture contacts** — Revenue from deals where contact was enrolled in a nurture track

---

### STEP 6: QA Before Launch

**Time:** 60 minutes | **Owner:** Marketing Ops

Do not skip this step. Every email nurture launch that skips QA produces at least one embarrassing error.

**QA checklist:**

- Send all emails to a test contact (internal) and review in Gmail, Outlook, and mobile
- Confirm all personalisation tokens populate correctly — send to a contact with complete data AND a contact with missing first name (fallback should read "there" not "[First Name]")
- Confirm all links work and go to the correct destination
- Confirm unsubscribe link is present in all emails (required by law)
- Confirm suppression lists are applied in workflow enrollment trigger
- Confirm workflow goal events are set correctly (meeting booked, reply, deal created)
- Confirm SDR task creation triggers are firing in workflow preview
- Confirm send times are set in the correct timezone per region
- Confirm from name and from address are correct per region
- Run a seed list send (send all 5 emails to internal team) and confirm no spam filtering
- Get Sales sign-off that email copy matches approved messaging matrix before going live

---

## Ready-to-Use Claude Prompts

---

### Claude Prompt 1 — Email Sequence Generator

```
You are a B2B email copywriter specialising in enterprise logistics software sales to 3PL companies.

Write a [NUMBER]-email nurture sequence for the following persona and region. Every email must be immediately usable — no placeholders except for standard personalisation tokens.

Company: Ramco Systems — Logistics Software (TMS, WMS, Fleet Management, Hub Management, Rating & Billing)
ICP: 3PL companies with $100M+ annual revenue

Target persona: [PERSONA — e.g., COO / Head of Operations]
Target region: [REGION — e.g., Philippines]
Track goal: [GOAL — e.g., Book a 20-minute operations demo]
Sequence length: [NUMBER] emails over [NUMBER] days
Tone: [TONE — e.g., practical, direct, peer-level — not corporate]

Persona pain points to reference (choose the most relevant 2–3 across the sequence):
[PASTE TOP 5 PAINS FROM persona-definitions.md]

Content assets available to offer:
[LIST AVAILABLE ASSETS — e.g., operations case study PDF, 4-minute product demo video, ROI calculator]

Regional context to weave in:
[PASTE REGIONAL NUANCES FOR THIS PERSONA/REGION FROM persona-definitions.md]

For each email, provide:
1. Subject line (under 50 characters, no spam triggers)
2. Preview text (under 90 characters)
3. Full email body (follow length rules: Ops persona = 80–150 words, CIO = 100–180 words, CEO = 60–120 words)
4. CTA (one per email — low friction for emails 1–3, meeting request for emails 4+)
5. PS line (for emails 1 and second-to-last only)

Rules:
- Never start the opening line with "I", "We", or "My name is"
- Never use: "world-class", "industry-leading", "best-in-class", "cutting-edge", "revolutionary", "plug-and-play", "quick question", "just following up", "hope this finds you well"
- Use plain text style — no HTML formatting in the body
- The final email should be a graceful exit, not a last-ditch pitch
- All copy must be specific to 3PL operations in [REGION] — no generic logistics statements
```

---

### Claude Prompt 2 — Subject Line Optimiser

```
You are a B2B email deliverability and conversion specialist.

I have a nurture email sequence targeting [PERSONA] at 3PL companies in [REGION]. The current subject lines are performing below a 25% open rate. Review them and provide optimised alternatives.

Current subject lines:
Email 1: [SUBJECT]
Email 2: [SUBJECT]
Email 3: [SUBJECT]
Email 4: [SUBJECT]
Email 5: [SUBJECT]

For each subject line:
1. Diagnose why it may be underperforming (too generic, too salesy, too long, spam trigger, etc.)
2. Provide 3 alternative subject lines
3. For each alternative, note the psychological principle being used (curiosity gap, specificity, pain acknowledgement, social proof, pattern interrupt, etc.)

Rules for alternatives:
- Under 50 characters
- No exclamation marks
- No spam trigger words (free, guaranteed, exclusive, urgent, act now, limited)
- No "Re:" or "Fwd:" tricks — these damage trust when discovered
- No "Quick question" — overused in B2B outbound
- Must be specific to [PERSONA] and [REGION] context
- Should not give away the full value of the email in the subject — preserve reason to open

After providing alternatives, recommend a testing strategy:
- Which two variants to A/B test first
- What sample size is needed for statistical significance at 95% confidence
- How long to run the test before calling a winner
- What to do with the losing variant
```

---

### Claude Prompt 3 — Nurture Sequence Audit

```
You are a B2B demand generation expert auditing an email nurture programme for an enterprise logistics software company.

Review the following email nurture sequence and provide a full audit across five dimensions.

Company: Ramco Systems — Logistics Software
Target persona: [PERSONA]
Target region: [REGION]
Current performance (if available): Open rate [X]%, Click rate [X]%, Reply rate [X]%, Meeting booked rate [X]%

Email sequence to audit:
[PASTE FULL SEQUENCE — subject lines + body copy for all emails]

Audit dimensions:

1. MESSAGING COHERENCE (score 1–10)
- Does the sequence tell a coherent story across all emails?
- Is the pain point consistent, or does it jump between unrelated themes?
- Does the sequence build towards the CTA logically?
- What is missing or contradictory?

2. PERSONA FIT (score 1–10)
- Does the language match how a [PERSONA] actually speaks? (Reference: they use words like [PASTE KEY VOCABULARY FROM persona-definitions.md])
- Are there any phrases that would make a [PERSONA] disengage immediately?
- Is the email length appropriate for this persona's reading behaviour?

3. REGIONAL RELEVANCE (score 1–10)
- Does the sequence reference any [REGION]-specific context, competitive dynamics, or regulatory hooks?
- Would a [PERSONA] in [REGION] recognise this as written for them, or does it read as a global template?
- What [REGION]-specific references are missing that would increase relevance?

4. CTA ARCHITECTURE (score 1–10)
- Are CTAs appropriately graduated (low friction early, higher friction late)?
- Is there ever more than one CTA per email?
- Is the final email a respectful exit or a last-ditch pressure pitch?

5. DELIVERABILITY RISK (score 1–10)
- Are there any spam trigger words in subject lines or body copy?
- Are emails an appropriate length (not so short they look phishing, not so long they get skimmed)?
- Is the sequence frequency appropriate (not too aggressive)?

For each dimension: provide the score, 3 specific issues, and 3 specific recommended fixes.

Final output: Priority order of fixes — which change will have the biggest impact on reply rate and meeting booked rate?
```

---

## KPIs

### Delivery KPIs (measure at first send)


| Metric                            | Target | How to Measure                                 |
| --------------------------------- | ------ | ---------------------------------------------- |
| Email deliverability rate         | >98%   | HubSpot email report: delivered / sent         |
| Bounce rate (hard)                | <0.5%  | HubSpot email report                           |
| Spam complaint rate               | <0.1%  | HubSpot email report / Google Postmaster Tools |
| SPF/DKIM authentication pass rate | 100%   | mail-tester.com score ≥9/10                    |


### Engagement KPIs (measure at 30 and 60 days)


| Metric                   | Target                                 | Benchmark        | How to Measure          |
| ------------------------ | -------------------------------------- | ---------------- | ----------------------- |
| Open rate                | >32%                                   | Industry: 22–28% | HubSpot sequence report |
| Click-to-open rate       | >12%                                   | Industry: 8–10%  | HubSpot sequence report |
| Reply rate               | >4%                                    | Industry: 1–3%   | HubSpot sequence report |
| Unsubscribe rate         | <0.3% per email                        |                  | HubSpot email report    |
| Sequence completion rate | <40% (most should exit via engagement) |                  | HubSpot workflow report |


### Pipeline KPIs (measure at 90 days)


| Metric                                         | Target                                   | How to Measure                                            |
| ---------------------------------------------- | ---------------------------------------- | --------------------------------------------------------- |
| Meetings booked from nurture                   | >6% of enrolled contacts                 | HubSpot meetings report filtered by nurture list          |
| SQLs influenced by nurture                     | >20% of all SQLs touched a nurture email | HubSpot attribution report                                |
| Pipeline value from nurture-touched contacts   | >25% of total pipeline                   | HubSpot deal report: contact enrolled in nurture workflow |
| Average days from enrollment to meeting booked | <35 days                                 | HubSpot workflow analytics                                |


---

## Failure Modes and How to Fix Them


| Failure Mode                                   | Symptom                                                                 | Fix                                                                                                                                                                                                                        |
| ---------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Low open rates (<20%)                          | Emails not being opened; subject lines underperforming                  | A/B test subject lines using Prompt 2; check sender reputation at Google Postmaster Tools; ensure send time is optimised per region                                                                                        |
| High unsubscribe rate (>0.5%)                  | Contacts opting out early in sequence                                   | Audit copy for overly salesy language; check that contacts are ICP-matched (bad list = bad unsubscribes); increase value-to-ask ratio (more content, later CTA)                                                            |
| Emails landing in spam                         | Open rates near zero; no bounces; no unsubscribes — just silence        | Check DKIM/SPF/DMARC configuration; reduce sending frequency; remove spam trigger words; warm the domain if newly configured                                                                                               |
| No SDR follow-through on intent signals        | Contacts click CTA links but no one follows up                          | Audit HubSpot task creation in workflow; set up Slack notifications for SDR when task is created; add task SLA to SDR KPIs                                                                                                 |
| Sequences not enrolling contacts               | Lists empty or workflow not firing                                      | Check that contact lists have correct filter logic; confirm abm_persona_category property is populated for contacts; check workflow enrollment trigger is set to re-enrollment OFF and initial enrollment logic is correct |
| CIO and Ops receive the same email             | Smart content not working; persona property missing                     | Audit HubSpot smart content rules; run a list pull to confirm abm_persona_category is populated for all enrolled contacts                                                                                                  |
| Reply goes to no-reply address                 | Prospect replies but no one receives it                                 | Change all email From addresses to a monitored inbox; confirm Reply-To is set to the sender's real email in HubSpot template settings                                                                                      |
| Sequence fires during Ramadan / public holiday | Emails sent at wrong cultural timing; lower engagement than expected    | Build regional public holiday suppression into workflow (pause workflow via date-based enrollment suppression for known holiday windows); manually pause Ramadan-period sends for SA and ID tracks                         |
| Messaging doesn't match sales conversations    | SDRs say "prospects have never heard of Ramco" despite nurture activity | Check open and click data — if contacts are not engaging, the issue is deliverability or list quality; if they are engaging but not connecting it to SDR outreach, align SDR subject lines with nurture email themes       |


---

## Tools Required


| Tool                                    | Purpose                                                                      | Required / Optional           |
| --------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------- |
| HubSpot Marketing Hub Pro or Enterprise | Email template build, workflow automation, smart content, reporting          | Required                      |
| mail-tester.com                         | Pre-launch deliverability and spam score check                               | Required                      |
| Google Postmaster Tools                 | Monitor sender reputation for Gmail recipients (dominant in AU, PH)          | Required                      |
| Microsoft SNDS                          | Monitor sender reputation for Outlook/Hotmail recipients                     | Recommended                   |
| Hemingway App (hemingwayapp.com)        | Readability check — target Grade 8 or below for all email body copy          | Optional                      |
| Grammarly                               | Copy proofing before HubSpot build                                           | Optional                      |
| Litmus or Email on Acid                 | Cross-client email rendering test (Gmail, Outlook, Apple Mail, mobile)       | Recommended                   |
| DeepL / Google Translate                | Indonesian (Bahasa) and Arabic translation review for regional variants      | Required for ID and SA tracks |
| Loom                                    | Record SDR training walkthrough of the nurture sequence and its intent logic | Optional                      |


---

## Related Files

- `/inputs/persona-definitions.md` — Read before writing any email copy
- `/skills/activation/skill-03-persona-messaging-architecture.md` — Messaging matrix must be approved before copy is written
- `/skills/acquisition/skill-01-abm-account-list-building.md` — HubSpot lists that trigger sequence enrollment
- `/skills/ops/skill-hubspot-pipeline-setup.md` — Full HubSpot workflow and property configuration
- `/skills/ops/skill-attribution-reporting.md` — How to attribute pipeline back to nurture sequences
- `/templates/email-nurture-track1.md` — Track 1 (CIO) template
- `/templates/email-nurture-track2.md` — Track 2 (Ops) template
- `/templates/email-nurture-track3.md` — Track 3 (CEO) template
- `/experiments/experiment-log.md` — Log all A/B tests run on subject lines and copy variants

