# Skill 06 — Sales Enablement Kit
## Ramco Logistics Software | Revenue

> **Purpose:** Equip every Ramco sales rep across all four regions with the messaging, materials, tools, and conversation frameworks they need to run a consistent, credible, and effective enterprise sales process — from first outreach through to commercial close.
> **Output:** A complete, live sales enablement kit: approved one-pagers per persona, competitive battlecards per named competitor, objection handling guide, discovery question bank, ROI calculator, and all materials accessible inside HubSpot CRM at the point of need.
> **Owner:** Product Marketing (builds and maintains) + Sales Lead (reviews and approves) + Regional Sales Reps (uses and gives feedback)
> **Estimated time to complete:** 16–20 hours for full initial build; quarterly review cycle

---

## Prerequisites
- [ ] `/inputs/persona-definitions.md` — read before building any sales material
- [ ] `/skills/activation/skill-03-persona-messaging-architecture.md` — approved messaging matrix is the source of truth for all sales copy
- [ ] `/strategy/competitive-landscape.md` — required before writing battlecards
- [ ] At least 3 closed-won deals to extract win themes from (interview the reps)
- [ ] At least 3 closed-lost deals to extract objections and competitor intelligence from (interview the reps)
- [ ] HubSpot Sales Hub (Professional or Enterprise) — for playbooks, snippets, and document tracking
- [ ] Sales Lead sign-off before any material is distributed to the rep team

---

## Why This Skill Exists

Sales reps at Ramco are selling to three different personas at companies where the sales cycle runs 180+ days, ACV is $150k+, and the buyer has almost certainly spoken to competitors. Without a structured enablement kit:

- Every rep tells a different story — inconsistent messaging destroys brand credibility
- Reps waste time recreating decks and one-pagers that marketing should own
- Objections catch reps off guard because no one has systematically documented what comes up and what works
- Marketing produces content that sales never uses because it wasn't built with sales input

This kit fixes all of that. It is not a content library — it is a ready-to-deploy conversation toolkit that a rep can open, pick the right asset for the right moment, and use immediately.

---

## Kit Components Overview

| Component | Purpose | Persona | Format |
|-----------|---------|---------|--------|
| Executive One-Pagers (×3) | Leave-behind for C-suite meetings | CIO / COO / CEO | 1-page PDF |
| Competitive Battlecards (×3) | In-deal use when a named competitor appears | All | 1-page reference card |
| Objection Handling Guide | Response framework for the 10 most common objections | All | HubSpot Playbook |
| Discovery Question Bank | Structured questions per persona and deal stage | All | HubSpot Playbook |
| ROI Calculator | Business case tool for CEO and COO conversations | CEO / COO | Google Sheet or HubSpot tool |
| Email Snippet Library | Pre-approved one-liners for common email situations | All | HubSpot Snippets |
| Product Demo Guide | How to run a discovery-led, persona-specific demo | All | Internal reference doc |
| Reference Customer Map | Named references by region and persona | All | HubSpot document |

---

## Step-by-Step Execution Workflow

---

### STEP 1: Interview Sales Before Building Anything
**Time:** 3–4 hours | **Owner:** Product Marketing
**Method:** 30-minute interviews with 3–5 reps and the Sales Lead

Sales enablement built without sales input gets ignored. This step prevents that.

**Conduct structured interviews with each rep. Ask:**

**On wins:**
- Walk me through the last deal you closed. What did the prospect say was the main reason they chose Ramco?
- What was the moment in the sales process when you felt the deal shift in our favour?
- What piece of collateral or message did you use that you wish you had earlier in the process?
- Which persona drove the final decision — the CIO, the COO, or the CEO?

**On losses:**
- Walk me through the last deal you lost. What did they say, and what do you think actually happened?
- Which competitor did we lose to? What did they offer that we didn't?
- What objection came up that you couldn't answer well?
- Was there a piece of collateral you wished you had that you didn't?

**On the current kit:**
- What do you currently send prospects after a first meeting?
- What do you do when a prospect says "we're happy with our current system"?
- What's the one thing marketing could give you tomorrow that would help you close more deals?

**Document every answer verbatim.** The exact language reps use to describe wins, losses, and objections becomes the source material for the objection guide, battlecards, and one-pagers. Do not paraphrase — the specificity of their language is the point.

---

### STEP 2: Build the Executive One-Pagers
**Time:** 3 hours | **Owner:** Product Marketing (use Claude Prompt 1 to accelerate)

One-pagers are the most-used sales asset in an enterprise B2B sale. They are handed over at the end of an executive meeting, forwarded internally to a stakeholder who wasn't in the room, and used by champions to make the business case upward.

**Rules for every one-pager:**
- Maximum 400 words on the page — if it requires scrolling, it is too long
- Outcome language only — no feature bullets unless tied to a business result
- One persona per one-pager — the CIO's one-pager is completely different from the CEO's
- One reference customer minimum — without proof, it is a brochure
- One clear CTA — what should the reader do next?
- No Ramco logo overkill — one logo in the header, clean design, a lot of white space
- Print-ready PDF and a clean digital version

**One-Pager Structure (all three):**

```
[HEADLINE — Outcome-led. Under 12 words.]

[SUBHEADING — Pain acknowledgement. Under 20 words.]

THE CHALLENGE
[2–3 bullet points in the persona's own language — pulled from persona-definitions.md]

THE RAMCO APPROACH
[2–3 sentences. Not a feature list. A description of how the platform solves the pain.]

WHAT CHANGES
[3 outcome bullets with numbers where possible — e.g., "Billing disputes reduced by 60–80% through automated multi-client rating"]

[CUSTOMER PROOF BLOCK]
"[Short verbatim quote from a reference customer — 1–2 sentences]"
— [Name], [Title], [Company]

[METRICS BOX — 3 numbers in a horizontal row]
e.g.,  180+ days   /   $150k+ ACV   /   [Customer stat]
       Avg. sales cycle  Average contract  [Proof point]

[CTA]
[One sentence. One action. e.g., "Book a 20-minute walkthrough built around your operation."]
[Meeting link or contact details]
```

**Build one per persona:**

#### One-Pager 1 — Technology Persona (CIO / VP IT)

Headline options to test:
- "One Platform. Clean APIs. No Rip-and-Replace."
- "The Integration Your 3PL IT Team Doesn't Have to Build From Scratch"
- "Consolidate Your 3PL Technology Stack Without a Three-Year Project"

Challenge bullets (drawn from persona-definitions.md):
- Managing 3–5 point solutions that don't share data, held together by middleware and manual workarounds
- Every new customer or operation type requires an IT project to onboard
- Vendor lock-in on a system that's stopped evolving, with no clean migration path

What Changes bullets:
- Single integrated platform for TMS, WMS, Fleet, Hub Management, and Billing — one data model, one support contract, one vendor roadmap to track
- Pre-built connectors for SAP, Oracle, and major ERP systems — documented API, not a custom integration project
- Phased implementation methodology: live on one module in 90 days, not 18 months of big-bang risk

#### One-Pager 2 — Operations Persona (COO / VP Ops / Head of Transport / Head of Warehousing)

Headline options to test:
- "See Everything. Bill Accurately. Scale Without Adding Headcount."
- "The 3PL Operations Platform Built for Companies That Run Transport and Warehouse Together"
- "Stop Managing Your Operation from Five Screens"

Challenge bullets:
- Real-time visibility across transport, warehouse, and fleet requires pulling data from multiple systems — or calling someone who knows
- Billing errors and manual rate calculations leak revenue every month; disputes take weeks to resolve
- Every new customer or new lane requires months of IT involvement and operational setup

What Changes bullets:
- End-to-end operational visibility on one screen — shipment status, warehouse capacity, fleet location, driver availability
- Automated rating and billing for complex multi-client 3PL contracts — from operational event to invoice without manual intervention
- New client onboarding in days, not months — configurable workflows that operations teams control, not IT

#### One-Pager 3 — CEO Persona (CEO / President / Managing Director)

Headline options to test:
- "Win Enterprise Contracts. Protect Your Margins. Scale Without Proportional Cost."
- "The Technology Foundation That Lets a 3PL Compete at the Next Level"
- "Your Competitors Are Investing in Digital Infrastructure. Here's What That Means for Your Business."

Challenge bullets:
- Enterprise shippers are requiring digital visibility, automated invoicing, and customer portals as table stakes — 3PLs that can't demonstrate this capability lose contracts to competitors who can
- Operational inefficiency and billing errors are quietly eroding EBITDA — the problem is hard to fix without a platform that connects transport, warehouse, and billing in one data model
- Every growth phase adds headcount and overhead at roughly the same rate as revenue — the business isn't scaling, it's just getting bigger

What Changes bullets:
- A digital logistics platform that demonstrates enterprise capability in every RFP and customer meeting — real-time customer portal, automated POD, digital invoicing
- Integrated operations and billing that closes the revenue leakage gap from manual processes — measurable EBITDA impact within the first 12 months
- Platform infrastructure that scales with new customers and new lanes without proportional IT or operational headcount growth

---

### STEP 3: Build the Competitive Battlecards
**Time:** 2–3 hours | **Owner:** Product Marketing (use Claude Prompt 2 to accelerate)

**When to use:** Any time a prospect mentions a specific competitor by name — in a discovery call, an email, or a formal RFP.

**Ground rules for battlecards:**
- Never disparage a competitor directly — it makes Ramco look insecure. Reframe, don't attack.
- Every battlecard claim must be something a rep can back up if challenged
- Include landmines — discovery questions that reveal the competitor's weaknesses without naming them
- Update quarterly — competitive intelligence goes stale fast

**Battlecard Structure (one per named competitor):**

```
COMPETITOR: [NAME]
Last updated: [DATE]

WHEN YOU'LL SEE THEM
[3 bullet points: deal size range, typical champion persona, regions where they are strongest]

THEIR PITCH (what they typically say)
- "[Verbatim or near-verbatim competitor claim 1]"
- "[Verbatim or near-verbatim competitor claim 2]"
- "[Verbatim or near-verbatim competitor claim 3]"

OUR COUNTER-POSITIONING
[For each of their claims, one sentence that reframes — not refutes — the claim in Ramco's favour]

HEAD-TO-HEAD COMPARISON
| Capability | Ramco | [Competitor] | Notes |
|-----------|-------|-------------|-------|
| TMS | | | |
| WMS | | | |
| Fleet Management | | | |
| Rating & Billing | | | |
| API / Integration | | | |
| Implementation Time | | | |
| Regional Support | | | |
| Cloud Architecture | | | |

LANDMINES (questions that expose their weaknesses)
Ask the prospect — never mention the competitor:
1. "[Question that reveals competitor weakness 1]"
2. "[Question that reveals competitor weakness 2]"
3. "[Question that reveals competitor weakness 3]"

THEIR STRENGTHS (be honest — reps need to know)
-
-

OUR WIN THEMES AGAINST THEM
1. [Win theme 1 — what we consistently win on when they are in the deal]
2. [Win theme 2]
3. [Win theme 3]

COMMON OBJECTIONS IN COMPETITIVE DEALS
"They offered us a lower price" →
"They've been in [region] longer than you" →
"Their [specific feature] looks stronger" →

PROOF POINT TO USE
[Name a specific customer or a specific metric that is most credible in a deal against this competitor]
```

**Build battlecards for the top 3 competitors identified in `/strategy/competitive-landscape.md`.** Add more as new competitors appear in deals — log every competitive mention in HubSpot so Product Marketing can track which competitors are showing up most.

---

### STEP 4: Build the Objection Handling Guide
**Time:** 2 hours | **Owner:** Product Marketing + Sales Lead

The objection guide is built from the rep interview notes in Step 1. Every objection in this guide must have been heard in a real deal — do not invent objections to sound thorough.

**Format for each objection:**

```
OBJECTION: "[Exact words the prospect typically uses]"
When it appears: [Stage of sales cycle — discovery / proposal / closing]
Who says it: [Persona — CIO / COO / CEO / all]

WHAT IT REALLY MEANS:
[The underlying concern behind the surface objection — this is what the rep is actually addressing]

WHAT NOT TO SAY:
[The defensive or dismissive response that makes things worse]

THE RESPONSE FRAMEWORK:
1. Acknowledge: [One sentence that validates the concern without conceding the point]
2. Reframe: [One sentence that shifts the perspective]
3. Proof: [One sentence with a reference or data point]
4. Bridge: [One question that moves the conversation forward]

FULL RESPONSE EXAMPLE:
"[Write out the full 4-step response as a natural, conversational paragraph — not bullet points. This is what the rep actually says.]"

IF THEY PUSH BACK ON THE RESPONSE:
[One-sentence contingency]
```

**The 10 Objections Every Ramco Rep Will Face:**

**Objection 1:** "We already have a TMS / WMS in place."
- When: Discovery
- Who: COO / CIO
- Underlying concern: They don't want to go through another implementation, and they're not sure the pain is bad enough to justify it.

**Objection 2:** "We're happy with our current vendor."
- When: Early discovery / first meeting
- Who: COO / CIO
- Underlying concern: Switching cost and relationship inertia. They don't want to manage a migration.

**Objection 3:** "We don't have budget for this right now."
- When: Post-demo / proposal stage
- Who: CEO / CFO
- Underlying concern: The ROI isn't clear enough yet to justify prioritising it. Or the budget exists but needs unlocking.

**Objection 4:** "Your price is too high / [Competitor] is cheaper."
- When: Proposal / negotiation
- Who: CEO / CFO
- Underlying concern: They can't see enough differentiated value to justify the premium. TCO conversation needed.

**Objection 5:** "We're not ready to make a decision right now."
- When: Post-proposal
- Who: CEO / COO
- Underlying concern: They're not convinced the timing is right, or there's internal alignment still needed.

**Objection 6:** "We're concerned about implementation risk."
- When: Post-demo / proposal
- Who: CIO / COO
- Underlying concern: They've been through a failed software implementation before and don't want to repeat it.

**Objection 7:** "We need to see a customer reference in [our specific region / industry vertical]."
- When: Mid-process
- Who: CEO / COO
- Underlying concern: They don't trust that Ramco understands their specific operating context.

**Objection 8:** "We'd need to see how it integrates with our ERP / [specific system]."
- When: Technical evaluation stage
- Who: CIO
- Underlying concern: Integration failure is their biggest implementation risk. They need a proof point, not a promise.

**Objection 9:** "Can you support us locally? We need a team in [region], not just a global support desk."
- When: Mid-to-late process
- Who: CEO / CIO
- Underlying concern: They've dealt with offshore support black holes before and need a credible local commitment.

**Objection 10:** "We need to involve [other stakeholder — IT / board / parent company] before we can move forward."
- When: Late process
- Who: CEO / COO
- Underlying concern: Either genuine multi-stakeholder governance, or a stall tactic. The rep needs to distinguish and act accordingly.

---

### STEP 5: Build the Discovery Question Bank
**Time:** 90 minutes | **Owner:** Product Marketing + Sales Lead

Discovery questions are the most underinvested asset in B2B sales enablement. A rep who asks the right questions uncovers budget, timeline, internal politics, and competitive threats faster and with less pushback than a rep who pitches. Build this question bank so that even the newest rep can run a world-class discovery call.

**Structure:** Questions organised by persona and by deal stage.

---

#### Discovery Questions — Technology Persona (CIO / VP IT)

**Stage: First meeting — understanding the current state**
1. "Walk me through how your current systems connect — who built the integrations and what does the maintenance look like?"
2. "When something breaks in your transport or warehouse system, what's the escalation process? How long does it typically take to resolve?"
3. "How many point solutions are you currently running across TMS, WMS, fleet, billing, and ERP? And which ones are owned by IT versus by the business?"
4. "What does your current reporting process look like for the COO or CEO — how do they get operational data today, and what does it cost your team to produce it?"
5. "If you were starting from scratch — clean slate — what would your technology architecture look like?"

**Stage: Mid-process — evaluating fit and risk**
6. "What does a successful implementation look like to you — and what would a failed one cost the business?"
7. "What's your current ERP environment, and who owns the integration roadmap between ERP and operational systems?"
8. "How are you thinking about data residency for this platform? Is that a hard requirement or a preference?"
9. "Walk me through your UAT process — what does sign-off look like before you go live on something like this?"
10. "What's happened in your organisation when a software project has gone over time or over budget? How does that affect future decisions?"

**Stage: Late process — closing and de-risking**
11. "What would you need to see in a phased implementation plan to feel confident about go-live?"
12. "Who else in your organisation needs to be comfortable with this decision before you can move forward?"
13. "What's your honest assessment of our integration capability versus what you've seen elsewhere?"

---

#### Discovery Questions — Operations Persona (COO / VP Ops / Head of Transport / Head of Warehousing)

**Stage: First meeting — understanding the current state**
1. "Tell me about the biggest operational headache your team deals with on a daily basis — the thing that if it went away, your team's life would change immediately."
2. "Walk me through what happens when a customer calls to ask where their shipment is. How does your team handle that today?"
3. "How does your billing process work — from the operational event happening to the invoice going out? How many people touch that process and how long does it take?"
4. "When you win a new client, what does onboarding look like? How long before their freight is running through your system without manual intervention?"
5. "Where are you losing money that you know about but haven't been able to fix yet?"

**Stage: Mid-process — quantifying the problem**
6. "How many billing disputes do you handle per month, roughly — and what does each one cost your team in time?"
7. "If I asked your top dispatcher what slows them down the most during a shift, what would they say?"
8. "When you look at your operation three years from now — what does it need to look like in terms of volume, customers, and headcount?"
9. "What's the current cost per shipment across your network? And do you have that number by lane, by customer, by service type?"
10. "What SLAs are you struggling to meet right now, and what's the main cause — is it systems, process, or both?"

**Stage: Late process — confirming value and accelerating**
11. "If we could show your team a live operation that looks like yours and hear directly from their ops team, would that move the needle on your decision?"
12. "When you picture your team using this platform 12 months after go-live, what does a good day look like?"
13. "What's stopping you from moving faster on this — is it budget, timeline, internal alignment, or something else?"

---

#### Discovery Questions — CEO Persona (CEO / President / Owner)

**Stage: First meeting — strategic framing**
1. "What's the biggest constraint on the growth of the business right now — is it sales, operational capacity, technology, or something else?"
2. "When you look at the enterprise accounts you've lost in the last 12 months — what's been the most common reason? Is technology capability part of that story?"
3. "What does the competitive landscape in [region] look like from where you sit — are you seeing more digital competition from larger operators?"
4. "If your operations and technology ran the way you want them to, what would become possible for the business that isn't possible today?"
5. "What would have to be true for you to sign off on a platform investment at this scale?"

**Stage: Mid-process — building the business case**
6. "Has anyone on your team modelled what the operational inefficiencies are currently costing the business — in billing errors, manual headcount, customer churn, or lost contracts?"
7. "What's your current technology spend as a percentage of revenue, and where does the business need it to be to remain competitive?"
8. "Who on your executive team would be most impacted by a successful implementation — and who would be most resistant to the change?"
9. "If the implementation takes 6 months and requires your COO and CIO's bandwidth for that period, is that a manageable investment given what's on the other side?"
10. "What does the board or the ownership group need to see in a business case to approve an investment at this level?"

**Stage: Late process — close and commitment**
11. "We've done this at [Reference Company] — would it help to have a 15-minute call between you and their MD before you make your decision?"
12. "What's the one remaining thing that would give you complete confidence to move forward?"
13. "If we could resolve [their specific remaining concern], what would the timeline look like from your side?"

---

### STEP 6: Build the ROI Calculator
**Time:** 2 hours | **Owner:** Product Marketing + Finance / Sales Lead

The ROI calculator is used in CEO and CFO conversations to model the business case for Ramco. It must be simple enough to complete in a conversation — not a complex spreadsheet that requires a consultant.

**Build in Google Sheets.** Tab 1 = input form (visible to prospect). Tab 2 = calculations (hidden). Tab 3 = output summary (printable for the leave-behind).

**Input Variables (prospect fills these in with the rep):**

| Input | Label | Example Value |
|-------|-------|--------------|
| Annual freight under management (AUD/USD) | Current annual revenue from logistics | $150,000,000 |
| % revenue lost to billing disputes | Monthly billing dispute rate × 12 | 1.5% |
| Manual billing staff (FTEs) | Number of people doing billing manually | 4 |
| Average FTE cost | Annual fully-loaded cost per billing staff member | $85,000 |
| New client onboarding time (weeks) | Time from contract sign to live operation | 16 weeks |
| Number of new clients per year | Growth target | 6 |
| Cost of delayed onboarding (est.) | Revenue per client per week × delay weeks | $45,000/week |
| Customer churn rate (annual) | % of revenue lost to customer attrition | 8% |
| % of churn attributed to operational issues | Self-assessed | 40% |

**Output Calculations (Tab 2 — hidden formulas):**

| Output | Formula Logic |
|--------|--------------|
| Annual revenue leakage from billing | Revenue × billing dispute % |
| Annual billing staff cost saved (estimate) | FTEs × FTE cost × 0.6 (assumes 60% reduction — conservative) |
| Annual onboarding delay cost | New clients × delay weeks × weekly revenue per client |
| Annual churn cost attributable to ops | Revenue × churn rate × % attributed to ops |
| **Total addressable savings (Year 1)** | Sum of above |
| **ROI at Year 1 (assuming $X platform cost)** | Total savings ÷ platform cost |
| **Payback period** | Platform cost ÷ monthly savings |

**Output Summary (Tab 3 — printable):**

```
RAMCO LOGISTICS — BUSINESS CASE SUMMARY
Prepared for: [Company Name]
Date: [Date]

CURRENT ANNUAL COST OF THE PROBLEM
  Revenue leakage (billing disputes):         $[X]
  Manual billing staff cost:                  $[X]
  Onboarding delay cost:                      $[X]
  Operational churn cost:                     $[X]
  ─────────────────────────────────────────────────
  Total annual cost of current state:         $[X]

PROJECTED RAMCO IMPACT (CONSERVATIVE)
  Billing revenue recovered (est.):          $[X]
  Staff cost reduction (est.):               $[X]
  Onboarding acceleration savings (est.):    $[X]
  Churn reduction savings (est.):            $[X]
  ─────────────────────────────────────────────────
  Total projected annual benefit:            $[X]

INVESTMENT SUMMARY
  Platform investment (Year 1):              $[X]
  ─────────────────────────────────────────────────
  Year 1 ROI:                                [X]×
  Payback period:                            [X] months

Note: All figures are conservative estimates based on inputs provided.
Actual results vary by implementation scope and operational baseline.
```

**Usage rule:** Never send the ROI calculator as a standalone file. Complete it together with the prospect during a meeting — the conversation is as valuable as the output. Walking through the inputs forces the prospect to quantify their own pain, which is more persuasive than any Ramco claim.

---

### STEP 7: Build the Email Snippet Library
**Time:** 60 minutes | **Owner:** Product Marketing

HubSpot Snippets are short, pre-approved text blocks that sales reps insert into emails with a keyboard shortcut (`#`). They prevent reps from rewriting common messages from scratch and enforce messaging consistency.

**Build the following snippets:**

Navigate to: **HubSpot → CRM → Snippets → Create Snippet**

| Snippet Name | Shortcut | Content |
|-------------|---------|---------|
| Opening — CIO first touch | `#cio-open` | "Most 3PL IT teams I speak with are managing 3–5 point solutions that don't share data cleanly. When something breaks, it usually breaks during peak season. I'd like to show you an alternative architecture — 20 minutes, no pitch." |
| Opening — COO first touch | `#coo-open` | "The question I hear most from 3PL operations leaders right now is some version of: how do I scale the business without the cost curve growing at the same rate? I have a specific answer for companies at your scale — worth a short conversation." |
| Opening — CEO first touch | `#ceo-open` | "Enterprise shippers are requiring digital visibility, automated invoicing, and customer portals as table stakes. The 3PLs that can demonstrate this capability are winning contracts they shouldn't win on price. The ones that can't are losing contracts on relationships that used to be safe." |
| Re-engagement — no reply | `#reengagement` | "I've reached out a couple of times — I'll keep this brief. If [specific pain point] is genuinely not a priority right now, I completely understand. If it is, I have one specific idea worth 15 minutes. Either way, happy to follow your lead." |
| Post-demo follow-up | `#post-demo` | "Thanks for the time today. The two things I took away as most relevant to your situation: [Rep fills in]. Next step is [specific action]. Does [Day/Time] work for a 30-minute follow-up?" |
| Reference offer | `#reference-offer` | "I'd like to introduce you to [Reference Name], [Title] at [Company]. They ran a similar operation to yours and went live with Ramco 18 months ago. Happy to arrange a 15-minute call — no Ramco involvement, just a peer conversation." |
| Competitive displacement | `#competitive` | "I know you're also speaking with [Competitor]. I'd rather you make the right decision than the Ramco decision. Here's what I'd suggest asking them: [Landmine question from battlecard]." |
| Proposal follow-up | `#proposal-fu` | "Following up on the proposal I sent on [Date]. I want to make sure it addressed [specific concern they raised]. Happy to walk through any section — particularly [most likely sticking point]." |
| Meeting confirmation | `#meeting-confirm` | "Confirmed for [Day] at [Time] [Timezone]. Dial-in: [Link]. I'll prepare a 10-minute section specifically on [their stated priority] before we get into the broader platform overview." |
| Handoff to senior Ramco exec | `#exec-handoff` | "Given where this conversation is heading, I'd like to bring in [Exec Name], our [Title] for [Region]. They work directly with [relevant peer — CEOs / IT leaders] at 3PLs at your scale and can speak to [specific value]. 20 minutes with them would be worth your time." |

---

### STEP 8: Build the Product Demo Guide
**Time:** 2 hours | **Owner:** Sales Lead + Product Marketing

The demo guide ensures every Ramco rep runs a consistent, discovery-led, persona-specific demo rather than clicking through the same product screens for every prospect.

**Demo Principles (non-negotiable):**
1. **Discovery before demo** — spend the first 10 minutes of every demo asking questions, not talking. The demo should be shaped by what you learn.
2. **Show their problem first** — before navigating to any feature, state the problem you are about to solve: "You mentioned your team spends 3 hours a day reconciling billing. Watch what happens when that event is automated."
3. **One persona, one demo** — do not try to demo for CIO and COO in the same session unless both are present. The CIO wants to see the API; the COO wants to see the dispatch screen.
4. **Tell the story, not the feature** — "Here's what a dispatcher sees at 7am on a Monday morning" beats "Here is the dispatch management module."
5. **Pause and check** — after every major section, ask: "Does this resonate with how your operation works, or is there a gap we should address?"

**Demo Flow by Persona:**

**CIO / VP IT Demo (45 minutes)**
- 10 min: Discovery — current architecture, integration pain, implementation concerns
- 5 min: Platform architecture overview — data model, cloud infrastructure, API structure (screen share: API documentation page)
- 10 min: ERP integration demo — show a live integration with SAP or a comparable system
- 10 min: Implementation methodology — phased approach, timeline, what IT resource is required
- 5 min: Security and compliance overview — certifications, data residency options, support SLAs
- 5 min: Questions and next step

**COO / VP Ops Demo (45 minutes)**
- 10 min: Discovery — specific operational pain points, billing, visibility, onboarding
- 10 min: Transport operations view — dispatcher screen, real-time shipment status, driver communication
- 8 min: Warehouse operations view — if relevant to their operation
- 7 min: Rating and billing — show the journey from operational event to invoice generation for a multi-client scenario
- 5 min: Customer portal — show what their customers see
- 5 min: Questions and next step

**CEO Demo (30 minutes)**
- 5 min: Discovery — business growth goals, competitive pressure, what success looks like
- 5 min: Business case framing — summarise the ROI model (do not show the full calculator in a 30-minute exec demo)
- 10 min: Highlight reel — 3 screens only: customer portal, operational dashboard (one view), billing summary
- 5 min: Reference and social proof — show the reference customer map, offer a peer introduction
- 5 min: Questions and next step

---

### STEP 9: Region-Specific Enablement Instructions
**Time:** Review before rep deployment in each region | **Owner:** Regional Sales Lead

---

#### Australia

**One-pager adaptations:**
- Replace "USD" with "AUD" in all financial references
- Add Chain of Responsibility (CoR) reference in the CIO one-pager compliance section: "Audit-ready driver behaviour and load data for CoR compliance"
- Reference Australian retail and FMCG supply chain pressure in the COO one-pager: "As Woolworths and Coles continue to raise their 3PL requirements, the ability to deliver digital visibility and automated invoicing is increasingly non-negotiable for contract retention"

**Discovery questions to add for AU:**
- "What's your current CoR compliance posture — are you confident your systems produce the documentation you'd need in a workplace investigation?"
- "Are any of your major customers requiring Scope 3 carbon reporting from their logistics partners? Is that on your radar?"

**Reference customer strategy:** Australian prospects expect Australian or NZ references. If none exist, brief the rep on how to address the gap directly: "Our closest reference in the ANZ market is [reference] in [country]. We're building our ANZ client base and I'd rather be honest about where we are than pretend otherwise." Honesty outperforms deflection every time in Australian enterprise sales.

**Battlecard regional addendum:** In competitive deals in Australia, note which competitors have a local Sydney/Melbourne office versus which operate from Singapore or India. Local presence is a genuine buying criterion for Australian 3PLs. If Ramco has Australian-based support, lead with it.

---

#### Indonesia

**One-pager adaptations:**
- Produce a Bahasa Indonesia version of each one-pager for use with operations and mid-management audiences (C-suite conversations typically remain in English)
- Add inter-island logistics context in the COO one-pager: "Managing freight visibility across Java, Sumatra, Kalimantan, and beyond — in one operational view"
- Add UU PDP (Personal Data Protection Law) reference in the CIO one-pager: "Data residency and consent management aligned with Indonesia's PDP Law requirements"

**Discovery questions to add for ID:**
- "How do you manage freight visibility and exception handling when freight is moving between islands — what does that process look like today?"
- "With the UU PDP now in effect, how are you thinking about where your logistics data is hosted and who has access to it?"
- "Are your major clients starting to ask for digital track-and-trace capability comparable to what they experience as consumers on Shopee or Tokopedia?"

**Sales process adjustment:** In Indonesia, formal written proposals should be accompanied by a Bahasa Indonesia executive summary — even two pages in Bahasa with the full English document attached is meaningful. This is especially important for deals where the CEO or board are not English-first readers.

**Relationship note:** Rep should track the personal relationship health of each T1 account — not just the deal stage. In Indonesia, a deal can stall not because of a commercial issue but because a relationship has cooled. Check in on T1 contacts with no deal activity at least monthly, even if just to share an industry article or acknowledge a relevant news item about their company.

---

#### Saudi Arabia

**One-pager adaptations:**
- Produce Arabic versions of all three one-pagers — English is used in senior business meetings but Arabic-language materials sent after a meeting are a strong trust signal
- Add Vision 2030 alignment statement to the CEO one-pager: "Ramco's logistics platform supports Saudi Arabia's National Transport and Logistics Strategy — built for the operational scale and digital standards that the Kingdom's growing logistics sector demands"
- Add ZATCA e-invoicing compliance statement to the CIO one-pager: "Native support for ZATCA Phase 2 Fatoora-compliant e-invoicing — no third-party module, no compliance risk"
- Add PDPL and Saudi data residency statement: "Data hosted on AWS Middle East (Bahrain) or Azure UAE North — fully aligned with Saudi PDPL requirements"

**Discovery questions to add for SA:**
- "How are you currently handling ZATCA Phase 2 e-invoicing requirements in your billing process — is that managed in your TMS or a separate finance system?"
- "As part of Vision 2030 logistics sector development, are you under any government pressure or incentive to demonstrate digital infrastructure investment?"
- "Your Saudization compliance reporting — does your current system give you the workforce productivity data you need to support that reporting?"

**Formal proposal requirements:** Saudi enterprise deals often require a formal Arabic-language proposal letter on Ramco letterhead, signed by a senior Ramco executive (Director level or above), in addition to the standard commercial proposal. Build this into the late-stage sales process template.

**Executive engagement:** Saudi CEOs and senior stakeholders at large 3PLs expect to meet a Ramco executive — not just an account manager — before making a final commitment. Ensure the Regional Director or Country Head is available for in-person meetings in Riyadh or Jeddah for all T1 deals above $200k ACV.

---

#### Philippines

**One-pager adaptations:**
- Convert all financial figures to PHP (Philippine Peso) for the ROI calculator and business case materials — USD figures feel abstract to Philippine CEOs making board-level presentations
- Add Metro Manila operational context in the COO one-pager: "Real-time dispatch visibility and dynamic re-routing for Metro Manila's infrastructure constraints — fewer missed SLAs, fewer customer calls"
- Add typhoon/disaster resilience reference in the CIO one-pager: "Cloud-hosted platform with regional failover — operational continuity during infrastructure disruptions"
- Add Philippine Data Privacy Act reference: "Data handling aligned with Republic Act 10173 (Data Privacy Act of the Philippines)"

**Discovery questions to add for PH:**
- "During peak e-commerce periods — 11.11, 12.12, Christmas — how does your operation scale? And what breaks first when volume spikes?"
- "Metro Manila traffic is outside anyone's control — how does your current system help your dispatch team manage when a delivery is clearly going to miss the SLA window?"
- "Typhoon season — have you ever had an operational system go down during a major weather event? How did your team manage, and what would you do differently now?"

**Sales process adjustment:** Philippine business networks are tight. Before a formal RFP process, the rep should map the prospect's network connections: SCMAP membership, alma mater (Ateneo/La Salle/UP), and prior employer history. A warm introduction through a shared connection beats cold pursuit in every deal at this level.

**Reference strategy:** Philippine prospects place very high value on peer references from within their own professional network. If a reference can be arranged who is known to the prospect (via SCMAP, alumni network, or industry association), prioritise that over any formal case study. One personal reference call from a trusted peer is worth more than three polished case study PDFs.

---

### STEP 10: HubSpot Sales Enablement Setup
**Time:** 2–3 hours | **Owner:** HubSpot Admin / Sales Ops

#### 10a: Upload All Materials as HubSpot Documents

Navigate to: **HubSpot → Sales → Documents → Upload Document**

Upload each finalised sales asset and name using this convention:
```
[Asset Type] | [Persona/Topic] | [Region] | [Version] | [Date]

Examples:
One-Pager | CIO | Australia | v1.0 | Mar 2025
Battlecard | [Competitor Name] | Global | v1.0 | Mar 2025
ROI Calculator | COO-CEO | All Regions | v1.0 | Mar 2025
```

**Why HubSpot Documents instead of Google Drive:**
- HubSpot Documents track when a prospect opens the document and how long they spend on it — this is an intent signal
- Reps receive a real-time notification when a prospect opens a document they shared
- All document activity is logged on the contact and deal record automatically

#### 10b: Build HubSpot Playbooks

Navigate to: **HubSpot → Sales → Playbooks → Create Playbook**

Build the following playbooks:

**Playbook 1: Discovery Call — CIO**
- Name: `Discovery | CIO | All Regions`
- Include: CIO discovery questions (from Step 5), CIO objection responses (from Step 4), link to CIO one-pager document
- Note field: Prompted notes for each question section so reps record the answer in the playbook during the call

**Playbook 2: Discovery Call — Operations Persona**
- Name: `Discovery | Operations | All Regions`
- Include: COO/Ops discovery questions, Ops objection responses, link to COO one-pager

**Playbook 3: Discovery Call — CEO**
- Name: `Discovery | CEO | All Regions`
- Include: CEO discovery questions, CEO objection responses, link to CEO one-pager and ROI Calculator

**Playbook 4: Competitive Response**
- Name: `Competitive | Response Guide`
- Include: For each named competitor — their pitch, our counter-positioning, landmines, and our win themes
- Structured as a lookup: "Which competitor is in the deal?" → relevant battlecard section loads

**Playbook 5: Objection Handling**
- Name: `Objections | All Personas`
- Include: All 10 objections with the full 4-step response framework per objection
- Make searchable by objection keyword

#### 10c: Create Deal Stage Enablement Properties

Navigate to: **HubSpot → Settings → Properties → Deal Properties → Create Property**

| Property Label | Internal Name | Field Type | Purpose |
|---------------|--------------|------------|---------|
| Competitive Threat | competitive_threat | Dropdown | [Competitor 1], [Competitor 2], [Competitor 3], None, Unknown |
| Primary Champion Persona | primary_champion_persona | Dropdown | Technology, Operations, CEO |
| Executive Sponsor Engaged | executive_sponsor_engaged | Checkbox | Has a CEO/MD from both sides met? |
| Reference Provided | reference_provided | Checkbox | Has a customer reference been offered? |
| ROI Calculator Shared | roi_calculator_shared | Checkbox | Has the ROI Calculator been completed with the prospect? |
| One-Pager Sent | one_pager_sent | Checkbox | Has the relevant one-pager been sent? |
| Battlecard Active | battlecard_active | Checkbox | Is a competitive battlecard in use for this deal? |
| Objection on Record | objection_on_record | Multi-line text | Free text — log the specific objection and the response used |

#### 10d: Add Enablement Assets to Deal Stage Automation

Navigate to: **HubSpot → CRM → Pipelines → Edit Pipeline**

For each deal stage, configure an automated task that prompts the rep to use the relevant enablement asset:

| Deal Stage | Automated Task |
|-----------|---------------|
| Lead → Opportunity | Task: "Complete discovery playbook for [Champion Persona]" |
| Opportunity → Proposal Sent | Task: "Share persona-matched one-pager. Log in deal properties." |
| Proposal Sent → Negotiation | Task: "Check for competitive threat. Open battlecard if applicable." |
| Negotiation → Closed Won/Lost | Task: "Log final objection in deal record. Update win/loss reason." |

#### 10e: Build Enablement Performance Dashboard

Navigate to: **HubSpot → Reports → Dashboards → Create Dashboard**

Name: `Sales Enablement Usage & Impact`

Add reports:
1. **One-pager opens by prospect** — Documents report: opens on CIO / COO / CEO one-pagers by week
2. **Playbook completion rate** — % of deals where a discovery playbook was completed
3. **Deals with competitive threat flagged** — Count by competitor, by region, by quarter
4. **Win rate with vs. without ROI calculator** — Custom report: win rate on deals where `roi_calculator_shared = true` vs. false
5. **Win rate by champion persona** — Are deals with a CEO champion closing at a higher rate than COO-championed deals?
6. **Top 5 objections by frequency** — Extracted from `objection_on_record` field — requires manual tagging or text analysis

---

## Ready-to-Use Claude Prompts

---

### Claude Prompt 1 — Executive One-Pager Generator

```
You are a senior B2B product marketing manager specialising in enterprise logistics software.

Generate a sales one-pager for Ramco's logistics platform. This document will be handed to a senior executive at the end of a meeting and forwarded internally to other stakeholders. It must be immediately compelling without any supporting conversation.

Company: Ramco Systems — Logistics Software
Product: Integrated logistics platform (TMS, WMS, Fleet Management, Hub Management, Rating & Billing)
ICP: 3PL companies with $100M+ annual revenue

Target persona: [PERSONA — e.g., COO / Head of Operations]
Target region: [REGION — e.g., Australia]

Persona context:
- Primary pains: [PASTE TOP 5 PAINS FROM persona-definitions.md]
- Desired outcomes: [PASTE TOP 5 OUTCOMES FROM persona-definitions.md]
- Language they use: [PASTE EXACT PHRASES FROM persona-definitions.md]
- What NOT to say: [PASTE FORBIDDEN PHRASES FROM persona-definitions.md]

Reference customer to include: [NAME, TITLE, COMPANY, QUOTE — or "use a plausible anonymous reference if no named reference available"]

Proof metrics to include: [ANY SPECIFIC NUMBERS — customer-validated or conservatively estimated]

CTA: [e.g., "Book a 20-minute operations demo" with meeting link placeholder]

Generate the one-pager with these sections:

1. HEADLINE (under 12 words — outcome-led, not feature-led, in the persona's language)
2. SUBHEADING (under 20 words — pain acknowledgement that makes the persona think "that's us")
3. THE CHALLENGE (3 bullet points — verbatim or near-verbatim language from persona-definitions.md, specific to a 3PL in [REGION])
4. THE RAMCO APPROACH (2–3 sentences — what Ramco does, in outcome language, not feature language)
5. WHAT CHANGES (3 bullets with quantified outcomes where possible — conservative, credible numbers)
6. CUSTOMER PROOF (1 quote block and attribution)
7. THREE KEY NUMBERS (3 stats in a horizontal display — mix of Ramco scale and customer outcome metrics)
8. CTA (1 sentence, 1 action, meeting link placeholder)

Rules:
- Every word must be in the persona's vocabulary — no IT jargon in a COO one-pager, no operational detail in a CEO one-pager
- Maximum 380 words total (excluding headline and structural labels)
- No Ramco feature lists — outcomes only unless the feature IS the differentiator (e.g., "Rating & Billing engine that handles multi-client 3PL contracts natively")
- The [REGION]-specific context must be woven in — do not produce a generic global document
- Output the copy in a clean, paste-ready format with section labels
```

---

### Claude Prompt 2 — Competitive Battlecard Generator

```
You are a competitive intelligence analyst and B2B sales trainer with expertise in logistics software.

Build a competitive battlecard for Ramco sales reps to use when [COMPETITOR NAME] appears in a deal.

Ramco context:
- Product: Integrated logistics platform (TMS, WMS, Fleet Management, Hub Management, Rating & Billing)
- ICP: 3PL companies with $100M+ annual revenue in Australia, Indonesia, Saudi Arabia, Philippines
- Key differentiators: [LIST RAMCO'S TOP 3 DIFFERENTIATED CLAIMS vs. this competitor]

Competitor: [COMPETITOR NAME]
What is known about them: [PASTE ANY KNOWN INTELLIGENCE — pricing, weaknesses, typical champion, regions, known objections]

Generate a complete battlecard with the following sections:

1. COMPETITOR SNAPSHOT (3 sentences: who they are, who they target, where they are strong)

2. WHEN YOU'LL SEE THEM
   - Deal size range where they typically appear
   - Which persona usually champions them (CIO / COO / CEO)
   - Regions where they have strongest presence

3. THEIR PITCH — what they typically say to prospects (3–4 bullet points in their likely language)

4. OUR COUNTER-POSITIONING
   For each of their pitch points: one sentence that reframes — not refutes — their claim in Ramco's favour.
   Rule: Never say "That's wrong" — say "Here's a more useful way to think about that."

5. HEAD-TO-HEAD COMPARISON TABLE
   Compare on: TMS capability, WMS capability, Fleet Management, Rating & Billing, API/Integration, Implementation approach, Regional support (AU/ID/SA/PH), Cloud architecture, Pricing model
   Use: Strong / Adequate / Weak / Unknown — be honest about Ramco's gaps

6. LANDMINES (5 discovery questions the rep can ask the prospect — without naming the competitor — that reveal this competitor's weaknesses)
   Format: "Ask: [Question]" followed by "What this reveals: [Their likely weakness]"

7. THEIR GENUINE STRENGTHS — be honest (3 bullet points — reps need to know what they are up against)

8. RAMCO WIN THEMES AGAINST THEM
   The 3 things Ramco consistently wins on when this competitor is in the deal — based on deal history or logical differentiation

9. OBJECTION RESPONSES (3 most common competitive objections + approved response for each)
   - "They've been in [region] longer" →
   - "Their [specific capability] is stronger" →
   - "They came in cheaper" →

10. PROOF POINT TO USE
    The single most credible reference or data point to deploy in a deal against this competitor

Format as a one-page reference card. Reps will use this mid-call — keep each section tight and scannable.
```

---

### Claude Prompt 3 — Objection Handling Response Builder

```
You are a B2B enterprise sales coach specialising in logistics software with a 180+ day sales cycle.

Build a complete objection handling response for the following objection. This will be added to Ramco's sales enablement playbook and used verbatim by sales reps.

Company context: Ramco Systems — selling a $150k+ ACV logistics platform (TMS, WMS, Fleet, Billing) to 3PL companies in Australia, Indonesia, Saudi Arabia, Philippines.

Objection: "[PASTE THE EXACT OBJECTION AS THE PROSPECT SAYS IT]"
Persona who says it: [CIO / COO / CEO]
Stage of sales cycle when it appears: [Discovery / Post-demo / Proposal / Negotiation]
Region: [REGION — or "All regions"]

Known context about why this objection gets raised:
[Any known background — e.g., "Prospect was burned by a failed SAP implementation 3 years ago" or "Competitor came in 20% cheaper" or "Internal IT team is resistant to change"]

Generate the following:

1. WHAT THIS OBJECTION REALLY MEANS
   The underlying concern the prospect is not saying out loud — 2–3 sentences

2. WHAT NOT TO SAY
   The instinctive sales response that makes the situation worse — and why

3. THE 4-STEP RESPONSE FRAMEWORK
   Step 1 — Acknowledge: [One sentence validating the concern — no conceding the point]
   Step 2 — Reframe: [One sentence shifting the perspective]
   Step 3 — Proof: [One sentence with a specific reference, data point, or example]
   Step 4 — Bridge: [One open question that moves the conversation forward]

4. FULL CONVERSATIONAL RESPONSE
   Write the complete 4-step response as a natural, flowing paragraph (80–120 words) — exactly as a well-trained rep would say it in a real call. No bullet points. Conversational register. Confident but not defensive.

5. IF THEY PUSH BACK ON YOUR RESPONSE
   One sentence — what the rep says if the prospect repeats or escalates the objection

6. REGIONAL ADAPTATION
   Note any specific adjustments for each of the four regions:
   - Australia:
   - Indonesia:
   - Saudi Arabia:
   - Philippines:
   (If no meaningful adaptation needed for a region, write "No adaptation — global response applies.")

7. WHEN TO ESCALATE
   Is there a version of this objection that should be escalated to the Sales Lead or Regional Director rather than handled by the rep alone? If yes, describe the escalation trigger.
```

---

## KPIs

### Asset Coverage KPIs (measure at kit launch)
| Metric | Target | How to Measure |
|--------|--------|----------------|
| One-pagers complete (×3 personas) | 100% | Asset checklist |
| Battlecards complete (×3 competitors) | 100% | Asset checklist |
| Objection guide covers top 10 objections | 100% | Rep review sign-off |
| Discovery question bank covers all 3 personas × 3 stages | 100% | Asset checklist |
| All assets uploaded to HubSpot Documents | 100% | HubSpot Documents library |
| HubSpot Playbooks built and live | 5 playbooks | HubSpot Playbooks section |

### Adoption KPIs (measure at 30 and 60 days)
| Metric | Target | How to Measure |
|--------|--------|----------------|
| Reps who have used a Playbook in a deal | >80% | HubSpot Playbook usage report |
| One-pager documents opened by at least 1 prospect | >60% of active deals | HubSpot Documents open tracking |
| ROI Calculator completed in at least 1 deal per rep | >75% of reps | `roi_calculator_shared` property |
| Snippets used per rep per month | >5 per rep | HubSpot Snippet usage report |
| Competitive threat flagged in all deals with known competition | 100% | `competitive_threat` deal property completion rate |

### Impact KPIs (measure at 90 days)
| Metric | Target | How to Measure |
|--------|--------|----------------|
| Win rate (deals with Playbook completed vs. without) | >15% lift | HubSpot deal custom report |
| Win rate (deals with ROI Calculator shared vs. without) | >20% lift | HubSpot deal custom report |
| Average sales cycle length (with full kit usage vs. without) | >10% shorter | HubSpot deal close date vs. create date |
| Deal stage progression rate | >70% of opportunities advance past proposal | HubSpot pipeline funnel report |
| Competitive win rate vs. named competitors | Track per competitor | HubSpot deal: competitive_threat × outcome |

---

## Failure Modes and How to Fix Them

| Failure Mode | Symptom | Fix |
|-------------|---------|-----|
| Sales doesn't use the kit | Materials sit in HubSpot unused; reps keep sending their own versions of one-pagers | Run a 45-minute "kit walkthrough" session with the full sales team; make it part of new rep onboarding; show reps the document open-tracking feature — it changes behaviour quickly |
| One-pagers are too generic | Prospects don't engage; reps say "it doesn't land" | Go back to Step 1 — conduct more rep interviews; replace generalised copy with verbatim language from win call recordings |
| Battlecards are out of date | Reps are caught off guard by competitor moves that the battlecard doesn't reflect | Assign competitive intel ownership to one person (Marketing or Sales Ops); require every rep to log competitive mentions in HubSpot; trigger a battlecard review whenever a new competitor pattern emerges in 3+ deals |
| Objection guide not used in calls | Reps handle objections inconsistently; the same objection trips different reps | Add objection handling to the deal stage task automation in HubSpot; review objection responses in pipeline reviews; include one objection scenario in monthly sales training |
| ROI calculator conversations fail | Prospect deflects or says numbers don't apply to them | Retrain reps on how to position the calculator: "This isn't my model — let's build it from your numbers." Never present the calculator as a finished document; build it together. |
| Discovery questions feel like interrogation | Prospects become guarded; conversations go formal and unproductive | Retrain on question tone and sequencing; the question bank is a menu, not a script — reps pick 4–5 per meeting, not all 13 |
| Regional materials not used | Reps in AU using the global one-pager; Saudi prospect receives non-Arabic materials | Build regional variants as separate documents in HubSpot; name them clearly; remove the global document from the active library for region-specific reps |
| Kit not updated | Messaging drifts; competitors add features that aren't reflected; old case studies cited | Set a calendar reminder for quarterly kit review; assign Product Marketing as kit owner; require reps to flag outdated materials via a shared Slack channel |

---

## Tools Required

| Tool | Purpose | Required / Optional |
|------|---------|-------------------|
| HubSpot Sales Hub Pro or Enterprise | Documents, Playbooks, Snippets, deal property tracking, enablement dashboard | Required |
| Google Slides or Canva | One-pager design and layout | Required |
| Google Sheets | ROI Calculator build | Required |
| Grain / Gong / Chorus | Win/loss call recording and analysis — the raw material for objection guides and battlecards | Strongly recommended |
| LinkedIn Sales Navigator | Competitive intelligence on competitor activity and new hires | Required |
| G2 / Gartner Peer Insights | Competitor reviews — extract objections and weaknesses from negative competitor reviews | Recommended |
| Loom | Short video walkthroughs of how to use each enablement asset — embed in HubSpot Playbooks | Optional |
| Figma or Adobe InDesign | Professional one-pager design if brand standards require | Optional |
| Notion or Confluence | Internal version control for the enablement kit before assets are uploaded to HubSpot | Optional |

---

## Related Files
- `/inputs/persona-definitions.md` — Source of all persona language used in one-pagers and discovery questions
- `/strategy/competitive-landscape.md` — Source of competitor intelligence for battlecards
- `/skills/activation/skill-03-persona-messaging-architecture.md` — Approved messaging matrix; all one-pager copy must align
- `/skills/revenue/skill-05-event-activation-playbook.md` — One-pagers are the primary at-event leave-behind
- `/skills/ops/skill-hubspot-pipeline-setup.md` — Pipeline stage and property configuration
- `/prompts/sales-enablement/executive-onepager-generator.md` — Prompt file for one-pager generation
- `/prompts/sales-enablement/competitive-battlecard-generator.md` — Prompt file for battlecard generation
- `/templates/linkedin-message-templates.md` — Snippet library source material
- `/experiments/experiment-log.md` — Log A/B tests on one-pager variants and subject line testing
