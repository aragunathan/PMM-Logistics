# Agent: Competitive Intel
Trigger command: "Run the competitive intel agent for [COMPETITOR NAME]"
Also triggered by: "Run the competitive intel agent — deal diagnosis for [DEAL NAME]"
Run when:
- A competitor is named in a deal or prospect conversation
- Entering a new market where a specific competitor is dominant
- A deal is stalled and competitive pressure is suspected
- Quarterly competitive review

## Skill Files to Read First (in this order):
1. skills/revenue/skill-12-competitive-intel.md
2. skills/activation/skill-03-persona-messaging-architecture.md
3. skills/revenue/skill-06-sales-enablement-kit.md

## Input Files to Read:
- inputs/persona-definitions.md
- inputs/input.json

## Two Modes — Read the Trigger Command to Decide Which Mode to Run:

MODE A — "Run the competitive intel agent for [COMPETITOR NAME]"
Purpose: Build a full battlecard for a specific competitor.
Run when: New competitor identified or existing battlecard needs a refresh.

MODE B — "Run the competitive intel agent — deal diagnosis for [DEAL NAME]"
Purpose: Diagnose a specific stalled deal where competition is suspected.
Run when: A deal has had no movement in 14+ days and a competitor is involved.

---

## MODE A WORKFLOW — Full Battlecard
Run all steps in order without pausing.

STEP 1 — Competitor Profile
Research and write a 1-page profile of [COMPETITOR NAME].
Save to: strategy/competitive/[competitor-name]-battlecard.md

Include:
- Company overview: who they are, HQ, revenue estimate, founded
- Primary product(s) that compete with Ramco Logistics
- Core target market: who do they sell to (ICP comparison vs Ramco)
- Pricing model: subscription / perpetual / usage-based (if known)
- Implementation model: direct / partner / SI-led
- Geographic strength: where are they strongest? weakest?
- Recent news: funding, product launches, partnerships, expansions in APAC/ME

Rate their threat level per Ramco region:
- Australia: High / Medium / Low — one sentence reason
- Indonesia: High / Medium / Low — one sentence reason
- Saudi Arabia: High / Medium / Low — one sentence reason
- Philippines: High / Medium / Low — one sentence reason

---

STEP 2 — Win/Loss Analysis
Using the battlecard format from skill-12-competitive-intel.md write:

Where [COMPETITOR] Wins (be honest and specific):
- List 3 to 5 areas where this competitor genuinely outperforms Ramco
- Include: which persona this matters most to (CIO / COO / CEO)
- This section is for internal AE use only — builds credibility and preparation

Where Ramco Wins (specific, not generic):
- List 5 to 7 areas where Ramco outperforms this competitor
- Every point must be specific and defensible — no "better integration" without proof
- Map each point to the persona it resonates with most

Top 3 Ramco Differentiators vs [COMPETITOR]:
- Write these as one-sentence positioning statements an AE can say in a call
- Format: "[Competitor] does X. Ramco does Y. For a 3PL, that means Z."

Append to: strategy/competitive/[competitor-name]-battlecard.md

---

STEP 3 — Discovery Questions
Write 5 discovery questions an AE can ask that naturally surface
this competitor's weaknesses — without naming the competitor.

Rules:
- Questions must sound genuine — not like a trap
- Questions should reveal pain that Ramco solves better
- Never position as "what do you hate about [competitor]"
- Frame around the prospect's outcomes, not the competitor's flaws

Example format:
Q: "How are you currently handling rate management across different
    customer contracts — is that a manual process or automated?"
Why this works: [one sentence explaining what weakness it surfaces]

Write 5 questions. Show the "why this works" for each.
Append to: strategy/competitive/[competitor-name]-battlecard.md

---

STEP 4 — Objection Handling Scripts
Write 5 objection handling scripts for the most common objections
that arise when this competitor is in the deal.

Format for each:
Objection: "[Exact words a prospect might say]"
Persona: [CIO / COO / CEO — who typically raises this objection]
Ramco response: [what the AE says — max 75 words, conversational tone]
Follow-up question: [one question to ask after the response to keep dialogue going]

Common objection types to cover:
1. "We already use [Competitor] for [X] — switching is too complex"
2. "We are evaluating [Competitor] alongside you — they are cheaper"
3. "Our IT team is already familiar with [Competitor's] ecosystem"
4. "[Competitor] has been around longer / has more customers"
5. "[Competitor] said they can do everything Ramco does"

Append to: strategy/competitive/[competitor-name]-battlecard.md

---

STEP 5 — Persona-Specific Positioning
Using persona-definitions.md, write one positioning paragraph per persona
that positions Ramco specifically against [COMPETITOR] for each buyer type.

CIO / VP IT positioning vs [Competitor]:
What to emphasise: [integration simplicity, implementation speed, IT overhead]
What to avoid saying: [anything that sounds like a feature list]
Key phrase to use: [one memorable differentiation statement]

COO / VP Ops positioning vs [Competitor]:
What to emphasise: [operational outcomes, 3PL-specific workflows]
What to avoid saying: [anything too technical]
Key phrase to use: [one memorable differentiation statement]

CEO / Owner positioning vs [Competitor]:
What to emphasise: [business outcomes, ROI, competitive edge]
What to avoid saying: [product features, technical specs]
Key phrase to use: [one memorable differentiation statement]

Append to: strategy/competitive/[competitor-name]-battlecard.md

---

STEP 6 — Internal Champion Support
Write a short email template the AE can send to their internal champion
(usually the CIO or COO) to help them justify choosing Ramco over
[COMPETITOR] to the CEO / board.

Requirements:
- Max 150 words
- Written as if the champion is sending it internally
- References 3 specific reasons relevant to their operation
- Tone: confident, peer-level, not like marketing copy
- Leave [COMPANY NAME] and [REGION] as fillable placeholders

Save as a separate file:
strategy/competitive/[competitor-name]-champion-email-template.md

---

STEP 7 — Mode A Summary
Print:

Competitor: [Name] | Threat Level by Region: AU [H/M/L] | ID [H/M/L] | SA [H/M/L] | PH [H/M/L]

Where they win (top 3): [list]
Where Ramco wins (top 3): [list]
Discovery questions written: 5
Objection scripts written: 5

Files saved:
- strategy/competitive/[competitor-name]-battlecard.md
- strategy/competitive/[competitor-name]-champion-email-template.md

Next action: Share battlecard with AE team. Add to HubSpot deal records
where this competitor appears.

---

## MODE B WORKFLOW — Deal Diagnosis
Run when trigger command includes "deal diagnosis for [DEAL NAME]"
Run all steps in order without pausing.

DATA I WILL PROVIDE:
- Deal name and company
- Competitor(s) named in the deal
- Stage the deal is currently at in HubSpot
- Last activity date and what happened
- Which personas are engaged and which are not
- Any known objections raised

STEP 1 — Read Existing Battlecard
Check if strategy/competitive/[competitor-name]-battlecard.md exists.
If yes: read it and proceed to Step 2.
If no: note that the battlecard does not exist and run Mode A first,
       then return to Step 2.

STEP 2 — Deal Diagnosis
Based on the deal data provided, diagnose:

Stall reason (pick the most likely one):
A. Champion has not sold internally — CEO not engaged
B. Competitor is undercutting on price
C. IT team prefers competitor's ecosystem
D. Deal lacks urgency — no clear deadline or pain trigger
E. Wrong persona is driving — operational buyer without CEO buy-in
F. Ramco differentiation has not been clearly communicated

Evidence for this diagnosis: [2-3 sentences citing specific signals from the deal data]

---

STEP 3 — Re-engagement Plan
Write a specific re-engagement plan for this deal with 3 actions:

Action 1 — [highest priority action]
Who does it: AE / SDR / Marketing
What exactly to do: [specific, no vague instructions]
What to send or say: [include the actual message or talking point]
Timeline: within [X] days

Action 2 — [second priority action]
[same format]

Action 3 — [third priority action]
[same format]

---

STEP 4 — Competitive Response Assets
Based on the competitor named, pull from the battlecard:
- The 3 most relevant discovery questions to re-open the conversation
- The 2 most relevant objection handling scripts for this deal's situation
- The internal champion email template — customised with this deal's context

Save to: campaigns/accounts/[company-name]/[deal-name]-competitive-response.md

---

STEP 5 — Mode B Summary
Print:

Deal: [Deal Name] | Company: [Company] | Competitor: [Competitor]
Stall diagnosis: [chosen reason + one line evidence]
Re-engagement plan: [3 actions with owners and timelines]

Files saved:
- campaigns/accounts/[company-name]/[deal-name]-competitive-response.md

Next action: AE to execute Action 1 within [X] days.
Log all competitive touches in HubSpot deal record.
