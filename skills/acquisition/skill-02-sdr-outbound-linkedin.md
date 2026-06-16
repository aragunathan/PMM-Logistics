# Skill 02: SDR Outbound LinkedIn Playbook
## Category: Acquisition
**Version:** 1.0 | **Created:** 2026-06-16 | **Owner:** SDR Lead + Campaign Marketing Manager
**Depends on:** Skill 01 (ABM List), Skill 03 (Persona Messaging), inputs/persona-definitions.md
**Outputs saved to:** campaigns/accounts/[company-name]/ and HubSpot (sequences + tasks)

---

## When to Use

Use this skill whenever:
- A new T1 or T2 account is added to the target account list and SDR outreach needs to begin
- An existing outbound sequence is underperforming (connection rate <20%, reply rate <8%)
- A new region is activated and LinkedIn sequences need to be built for local personas
- A new persona track needs to be created (CIO, COO, or CEO)
- The quarterly sequence refresh is due (every 90 days)

Do not use this skill for:
- Email nurture sequences → use Skill 04
- LinkedIn paid campaigns → use Skill 07
- Event invitations → use Skill 05

---

## Inputs Required

Before starting, read and have open:
1. `inputs/persona-definitions.md` — messaging language, pain points, do-not-say rules per persona
2. `inputs/input.json` (or normalized-input.json) — regional nuances, ICP definition
3. `skills/acquisition/skill-01-abm-account-list-building.md` — TAL structure, T1 vs T2 designation
4. Target company research: company website, recent LinkedIn posts, news, LinkedIn profiles of target contacts
5. Relevant proof point: VISY (AU), PT Cipta Krida (ID), Kanoo (SA) — choose by region

---

## Core Rules

**Volume floors (per SDR, per day):**
- 5 new LinkedIn connection requests sent
- 3 follow-up messages sent to existing connections
- All responses logged in HubSpot same day

**Sequence limits:**
- Maximum 4 LinkedIn messages per contact across a 30-day sequence
- If no response after message 4 → add to LinkedIn paid retargeting audience (Skill 11) and pause LinkedIn outreach for 60 days
- Never send more than 2 messages before receiving a connection acceptance

**Personalisation requirement:**
- Every connection request must reference a specific detail about the company or person (a recent news item, a post they shared, a mutual connection, or a regional/industry context)
- Generic "I'd like to connect" requests are prohibited

**Regional scheduling rules:**
| Region | Best send window | Avoid |
|--------|----------------|-------|
| Australia | Tue–Thu 9–11am AEST | Public holidays; Christmas shutdown (mid-Dec to mid-Jan) |
| Indonesia | Tue–Thu 10am–12pm WIB | Ramadan (reduce); Lebaran week (pause entirely) |
| Saudi Arabia | Sun–Tue 10am–12pm AST | Ramadan (adjust tone, reduce frequency); Eid Al-Fitr + Eid Al-Adha (pause) |
| Philippines | Tue–Thu 10am–12pm PHT | Holy Week; 12.12 peak ops period |
| India | Tue–Thu 10am–12pm IST | Diwali week; major national holidays |

---

## Execution Workflow

### Step 1: Identify and Research the Target Contact (10 minutes per contact)

**1a. Pull target contact from TAL**
- Open `campaigns/accounts/` — find the named account brief for the company
- If no brief exists → run `agents/new-account-research-agent.md` first
- Identify primary outreach persona based on who is most reachable and who is the entry point for this account (typically COO for operational pain; CIO when an IT renewal is confirmed)

**1b. Research the individual (LinkedIn profile review)**
Capture in HubSpot contact notes:
- Title and tenure at current company
- Recent LinkedIn activity (posts, comments, reactions in last 30 days)
- Shared connections with Ramco team or network
- Any recent company news (new contract wins, expansion, M&A, digital initiative announcement)
- Industry group memberships (SCLAA, TIC, SCLAA, PHILFREIGHT, CII — note relevant ones)

**1c. Select the proof point**
- Australia: VISY Logistics operational reference
- Indonesia: PT Cipta Krida Bahari or PT Tigaraksa Satria
- Saudi Arabia: Kanoo Terminal Services
- Philippines: VISY (as global reference) + regional 3PL market context
- India: develop Indian reference account in H2 2026; use VISY as global proof point until then

---

### Step 2: Write the Connection Request (under 300 characters)

**Format:**
```
[Personalised hook — 1 sentence] + [Brief context — 1 sentence] + [No CTA — just connect]
```

**Rules:**
- Never mention Ramco's product in the connection request
- Never ask for a meeting or call in the connection request
- The hook must be genuine — reference something specific to them or their company
- Maximum 300 characters (LinkedIn hard limit on mobile)

**Templates by persona:**

**CIO / VP IT:**
```
[FIRST NAME] — I noticed [company] recently expanded into [region/new service line]. 
Integration complexity at that scale is significant. 
Connecting with IT leaders navigating that space — keen to stay in your network.
```

```
[FIRST NAME] — Your recent post on [topic they posted about] was a useful read. 
Connecting with logistics IT leaders across [region] — happy to be in your network.
```

**COO / VP Ops:**
```
[FIRST NAME] — [Company]'s growth in [region/service] is impressive. 
I work with 3PL operations leaders on visibility and billing automation challenges. 
Keen to connect.
```

```
[FIRST NAME] — Saw [company] is [recent news item]. 
The operational scaling challenge that comes with that is real. 
Connecting with ops leaders navigating it — happy to be in your network.
```

**CEO / MD:**
```
[FIRST NAME] — [Company] has built an impressive operation in [region]. 
I connect with logistics CEOs thinking about how technology changes competitive dynamics in 3PL. 
Keen to be in your network.
```

---

### Step 3: Message Sequence (after connection accepted)

**Wait time before Message 1: 2–3 business days after acceptance**

---

**MESSAGE 1 — Value-First, No Ask**
*Objective: Deliver something useful. Establish credibility. No CTA.*

**Length:** 3–5 sentences max. Do not use bullet points.

**Template — Ops Persona (COO/VP Ops):**
```
[FIRST NAME] — thanks for connecting.

I've been working closely with 3PL operations teams across [region] on a recurring challenge: 
transport and warehouse visibility sitting in separate systems, with billing reconciliation 
happening manually in the middle.

We recently worked with [VISY Logistics / PT Cipta Krida Bahari / Kanoo Terminal Services] on 
consolidating that into a single platform — their billing error rate dropped by [metric] in the 
first quarter after go-live.

Happy to share the operational detail if it's relevant to where [company] is headed.
```

**Template — IT Persona (CIO/VP IT):**
```
[FIRST NAME] — thanks for connecting.

Most 3PL CIOs I speak with in [region] are managing the same architectural debt: a TMS that 
doesn't talk to the WMS, a billing system that's either custom-built or heavily extended, 
and an ERP integration that required more effort than the vendor quoted.

We've mapped the typical integration architecture for a $100M+ 3PL consolidating onto a single 
platform — happy to share it if it would be a useful reference for anything your team is evaluating.
```

**Template — CEO Persona:**
```
[FIRST NAME] — thanks for connecting.

One challenge I hear consistently from logistics CEOs in [region] right now: enterprise shippers 
are demanding digital POD, real-time track-and-trace, and automated invoicing as baseline 
requirements — and 3PLs running on disconnected systems are losing deals to competitors who can 
offer them.

[Reference customer] addressed this and saw measurable impact on their win rate. Happy to share 
the story if it's relevant.
```

---

**MESSAGE 2 — Proof Point + Soft CTA**
*Objective: Share a specific proof point. First low-commitment CTA (document, not meeting).*
*Wait: 5–7 business days after Message 1*

**Template — Ops Persona:**
```
[FIRST NAME] — following up on my note from last week.

I mentioned [reference customer]'s experience — specifically, they were running TMS and WMS 
in separate systems with manual billing reconciliation taking [X hours/week] per person.

After moving to an integrated platform, their cost per shipment dropped [X%] and billing 
disputes dropped from [X] per month to near zero.

I've put together a one-page summary of how it works operationally — would it be useful to send 
it through? No form, no follow-up sequence — just the document.
```

**Template — IT Persona:**
```
[FIRST NAME] — following up on the integration architecture note from last week.

The pattern we see most often in [region] 3PLs is: ERP on SAP or Oracle, a standalone TMS 
(often CargoWise or a custom-built system), WMS on a separate platform, and billing either 
in the ERP or in spreadsheets. The data stitching across those systems creates a 6–8 week 
integration project every time a new customer or lane is added.

I've put together a reference architecture document showing how [reference customer] 
consolidated this — including the API approach and what their IT team actually had to build 
vs. what came out of the box. Happy to send it through if it's a useful reference.
```

**Template — CEO Persona:**
```
[FIRST NAME] — one more note on the competitive dynamics point from last week.

The 3PLs in [region] that are winning enterprise logistics contracts consistently are doing 
two things: offering real-time visibility to shippers (track-and-trace, POD, status portal) 
and automating billing so there are no disputes at invoice time.

I put together a one-page summary showing what that looks like operationally and financially 
for a business similar in size to [company]. Happy to send it — no form, just the PDF.
```

---

**MESSAGE 3 — Reframe + Peer Reference Offer**
*Objective: Offer a peer reference call or small meeting. First real CTA.*
*Wait: 7–10 business days after Message 2*

```
[FIRST NAME] — last note from me on this topic.

I don't want to oversell something that may not be relevant to where [company] is right now. 
But if you're at a point where the conversation about platform consolidation or transport 
visibility is live internally — even early stages — I think a 20-minute call with [reference 
customer contact name] at [reference company] would be more useful than anything I could say.

They're a [region] 3PL, [similar size/model descriptor], and they made the move [X months] ago. 
Happy to make the introduction if it's of interest.
```

---

**MESSAGE 4 — Low-Friction Close (final touch)**
*Objective: One final reframe. Make it easy to say yes or no.*
*Wait: 10–14 business days after Message 3*
*Only send if no response to messages 1–3*

```
[FIRST NAME] — I'll leave it here after this note.

If the systems conversation is something [company] will be looking at in the next 6–12 months, 
I'd love to stay on your radar. If not, no follow-up from my end.

Either way — if a [region] 3PL platform question ever comes up in your network, I'm happy to 
be a useful reference. Connections like that tend to work both ways.

Best, [Name]
```

---

### Step 4: Trigger Logic — When to Escalate

After each message, log the response (or no-response) in HubSpot.

| Signal | Action |
|--------|--------|
| Positive reply ("interested", "tell me more", "send the doc") | Immediately hand off to AE. Log as SDR-sourced MQL. Book intro call within 24 hours. |
| Soft reply ("not the right time", "maybe later") | Log date, set HubSpot reminder for 60 days, re-engage with updated proof point |
| Document request (clicks link or asks for PDF) | MQL trigger — enroll in HubSpot persona-matched email nurture sequence (Skill 04) AND notify AE |
| No response after Message 4 | Add to LinkedIn paid retargeting audience. Pause LinkedIn outreach for 60 days. Flag for re-approach with new hook after 90 days. |
| Negative reply ("not interested", "remove me") | Log in HubSpot as "Do Not Contact — LinkedIn". Remove from all sequences. Do not re-approach for 12 months. |
| Connection accepted but no reply to messages | Continue to Message 2, 3. After Message 4 with no response: retargeting audience only. |

---

### Step 5: HubSpot Logging (mandatory)

Every LinkedIn action must be logged in HubSpot within the same day:
- Connection request sent: Activity → LinkedIn message → "Connection request sent — [date]"
- Connection accepted: Update contact property `LinkedIn Connected = Yes`, date stamp
- Message 1 sent: Activity → LinkedIn message → paste message text + date
- Reply received: Activity → Note → paste reply text + SDR response + MQL/no-MQL decision
- No response (post-Message 4): Update contact property `LinkedIn Outreach Status = Retargeting Queue`

---

## Claude Prompts

### Prompt 1: Write a Connection Request

```
You are writing a LinkedIn connection request for a Ramco Systems SDR targeting [3PL companies / enterprise logistics] in [REGION].

Target contact:
- Name: [FIRST NAME]
- Title: [CIO / COO / CEO]
- Company: [COMPANY NAME]
- Recent activity or hook: [PASTE ANY RELEVANT DETAIL — recent post, news, expansion, etc.]

Persona to reference: [read inputs/persona-definitions.md for this persona before writing]

Rules:
- Maximum 300 characters
- Do NOT mention Ramco's product
- Do NOT ask for a meeting or call
- Reference one specific, genuine detail about them or their company
- Tone: professional, direct, peer-to-peer — not salesy

Write 2 variants. Label them A and B.
```

---

### Prompt 2: Write a Full 4-Message LinkedIn Sequence

```
You are writing a 4-message LinkedIn outreach sequence for a Ramco Systems SDR.

Context:
- Target persona: [CIO / COO / CEO]
- Target company: [COMPANY NAME] — [brief description: size, region, operation type]
- Region: [AUSTRALIA / INDONESIA / SAUDI ARABIA / PHILIPPINES / INDIA]
- Reference customer to use: [VISY Logistics (AU) / PT Cipta Krida Bahari (ID) / Kanoo Terminal Services (SA)]
- Key pain to address: [read inputs/persona-definitions.md — Top 5 Pains for this persona]
- Proof point metric to use: [INSERT IF KNOWN — e.g., "40% reduction in billing errors", "90-day go-live"]

Rules:
- Read inputs/persona-definitions.md before writing — use the exact language and vocabulary listed for this persona
- Message 1: Value-first, no CTA. 3–5 sentences max.
- Message 2: Proof point + soft CTA (document offer, not meeting). 4–6 sentences.
- Message 3: Peer reference offer. First real CTA (20-minute call). 3–5 sentences.
- Message 4: Low-friction close. Final touch. 3–4 sentences.
- Do NOT use: world-class, seamless, cutting-edge, revolutionary, robust
- Do NOT use bullet points in any message
- Regional nuance: read inputs/persona-definitions.md → Regional Nuances section for [REGION] before writing

Output: 4 messages, labelled Message 1 through 4, with send timing noted.
Save to: campaigns/accounts/[company-name]/linkedin-sequence-[persona].md
```

---

### Prompt 3: Diagnose Underperforming Sequence

```
My LinkedIn outreach sequence for [PERSONA] in [REGION] is underperforming.

Current metrics:
- Connection accept rate: [X]% (target: 30% T1 / 20% T2)
- Reply rate after Message 1: [X]% (target: 15% T1)
- Reply rate after Message 2: [X]% (target: 8%)

Here is the current message sequence:
[PASTE MESSAGES]

Rules for diagnosis:
- Read inputs/persona-definitions.md for this persona — check if language matches what they care about
- Check Message 1 for any CTA (there should be none in Message 1)
- Check if a specific proof point is included in Message 2 (required)
- Check if the connection request references a genuine, specific hook
- Check character count of connection request (max 300)
- Flag any prohibited phrases (world-class, seamless, plug-and-play, etc.)

Output:
1. Root cause assessment (which message is failing and why)
2. Rewritten versions of any failing messages
3. A/B test recommendation (which one element to change first)
```

---

## Outputs

Every execution of this skill produces:

| Output | Format | Save To |
|--------|--------|---------|
| LinkedIn connection request (2 variants) | .md | campaigns/accounts/[company]/ |
| Full 4-message sequence per persona | .md | campaigns/accounts/[company]/linkedin-sequence-[persona].md |
| HubSpot activity logs | HubSpot (manual) | Contact activity timeline |
| Escalation notes (when reply triggers MQL) | HubSpot (task + note) | Deal record |

---

## Metrics

| Metric | Target | RAG Threshold | Cadence |
|--------|--------|--------------|---------|
| Connection accept rate — T1 | 30% | 🟢≥27% / 🟡21–26% / 🔴<21% | Weekly |
| Connection accept rate — T2 | 20% | 🟢≥18% / 🟡14–17% / 🔴<14% | Weekly |
| Positive reply rate — T1 (any message) | 15% | 🟢≥13% / 🟡10–12% / 🔴<10% | Weekly |
| Positive reply rate — T2 | 8% | 🟢≥7% / 🟡5–6% / 🔴<5% | Weekly |
| SDR-sourced MQLs | 15/month | 🟢≥13 / 🟡10–12 / 🔴<10 | Monthly |
| SDR-sourced SQLs | 5/month | 🟢≥4 / 🟡3 / 🔴≤2 | Monthly |
| Messages logged in HubSpot same day | 100% | No RAG — this is a compliance floor | Daily |

---

## Failure Modes

**Failure Mode 1: Low connection accept rate (<20%)**
Cause: Connection request is generic, too long, or has a hidden CTA.
Fix: Rewrite connection request using Prompt 3 (diagnosis). A/B test two hooks. Check that the SDR profile is complete, professional, and includes a clear headshot and headline.

**Failure Mode 2: Connection accepted but no replies to messages**
Cause: Messages are too product-focused, contain CTAs too early, or use language from the "What NOT to Say" list.
Fix: Audit messages against persona-definitions.md. Remove any product mention from Message 1. Rewrite Message 2 to lead with proof point before asking for anything.

**Failure Mode 3: Positive replies but no MQL conversion**
Cause: Handoff process from SDR to AE is slow or the content offered doesn't match what the contact wanted.
Fix: Review HubSpot logs for reply-to-follow-up lag. Ensure AE picks up within 24 hours of SDR-tagged MQL. Ensure the document offered (architecture guide, case study, ROI one-pager) is actually ready to send.

**Failure Mode 4: High negative reply rate (>5% "not interested" or "remove me")**
Cause: Targeting too broad (T2 contacts that don't match ICP) or volume sent too high (spam-like pattern).
Fix: Review T2 list criteria against ICP definition. Reduce daily connection request volume to stay within LinkedIn's limits. Increase personalisation per contact.

**Failure Mode 5: Inconsistent HubSpot logging**
Cause: SDR skipping logging when busy.
Fix: This breaks attribution and pipeline tracking. Enforce daily HubSpot review as part of SDR standup. Log completeness is reviewed weekly by SDR Lead.

---

## Variations

### SMB Variation (Not applicable)
Ramco's ICP is $100M+ 3PLs. This skill is enterprise-only. Do not build SMB sequences.

### Enterprise Variation (Current mode)
All sequences above are enterprise-grade: multi-touch, research-intensive, proof-point-led, with peer reference offers at message 3. This is the standard for T1 accounts.

**Regional Variation — Indonesia:**
- Translate key phrases into Bahasa Indonesia for operational contacts (not C-suite)
- Add relationship-building note in Message 1: do not lead with pain language; lead with shared context (industry event reference, mutual connection, regional market observation)
- Do not send cold messages to CEO/President in Indonesia — warm introduction via industry contact or partner is required

**Regional Variation — Saudi Arabia:**
- Message 1 timing: Sunday–Tuesday (the Saudi working week starts Sunday)
- Reference Vision 2030 logistics modernisation only if the company has publicly stated digital transformation as a priority
- Do not send outreach during Ramadan — adjust all sequences to pause fully during the final week of Ramadan and restart after Eid

**Regional Variation — India:**
- GST/e-way bill compliance is the hook for CIO and COO personas in India — always reference this as the entry pain point
- Reference Indian 3PL market context (₹X crore revenue range equivalent to $100M USD)
- H2 2026 activation only — defer India sequences until Indian reference account is formalised
