# Agent: Event Prep
Trigger command: "Run the event prep agent for [EVENT NAME] in [REGION]"
Run when: 4 to 6 weeks before a logistics industry event

## Skill Files to Read First (in this order):
1. skills/revenue/skill-05-event-activation-playbook.md
2. skills/activation/skill-03-persona-messaging-architecture.md

## Input Files to Read:
- inputs/persona-definitions.md
- inputs/input.json

## Data I Will Provide After the Trigger Command:
- Event name, date, location
- Whether Ramco is attending only / sponsoring / speaking
- Known Tier 1 accounts likely attending (if any)
- Primary persona we expect to meet most

## Workflow — Run All Steps in Order Without Pausing:

STEP 1 — Event Brief
Write a 1-page event brief and save to:
campaigns/events/[event-name]/[event-name]-brief.md

Include:

Event Overview:
- Event name, date, city, country
- Audience profile: who attends (personas, seniority, industries)
- Estimated attendance size
- Ramco's presence type: Attending / Sponsoring / Speaking

Strategic Rationale:
- Why this event matters for Ramco pipeline
- Which of our 3 personas (CIO / COO / CEO) are most likely present
- Which Tier 1 and Tier 2 accounts from our TAL are likely attending
- What Ramco wants to achieve: number of meetings, brand visibility, leads

Pre-Event Timeline:
- 6 weeks before: [actions]
- 4 weeks before: [actions]
- 2 weeks before: [actions]
- 1 week before: [actions]
- Day before: [actions]
- At the event: [actions]
- Within 48 hours after: [actions]

Meeting Target:
- Pre-booked meetings goal: 5 to 10
- At-event meetings goal: total including walk-ins
- Post-event follow-up target: within 48 hours of event close

---

STEP 2 — Pre-Event LinkedIn Outreach Messages
Write 3 LinkedIn outreach messages — one per persona.
Save to: campaigns/events/[event-name]/[event-name]-pre-event-outreach.md

Rules for every message:
- Maximum 300 characters
- Reference the event name naturally — not as an afterthought
- Lead with a relevant insight or question for that persona
- Ask for a specific, low-friction meeting: "a quick coffee on Day 1"
- No product pitch
- Tone: warm, direct, peer-to-peer

CIO / VP IT message:
- Reference: technology transformation happening in [REGION] logistics
- Ask: 20-minute conversation about how they are approaching tech evaluation

COO / VP Ops message:
- Reference: an operational challenge specific to [REGION] 3PLs
- Ask: quick chat over coffee to compare notes on operations tech

CEO / President message:
- Reference: a market trend or growth opportunity in [REGION]
- Ask: 15-minute conversation — no agenda, just a peer discussion

Show character count for each. Flag if any exceeds 300 characters.

---

STEP 3 — Pre-Event Email Sequence
Write a 3-email sequence for known contacts at Tier 1 accounts
attending the event. Save to:
campaigns/events/[event-name]/[event-name]-email-sequence.md

Email 1 — 4 weeks before event:
Subject line: max 50 characters
Body: max 120 words
Goal: warm introduction, share a relevant insight, mention Ramco will be at the event
CTA: no hard ask — just "looking forward to connecting there"
Tone: peer-to-peer, not a sales email

Email 2 — 2 weeks before event:
Subject line: max 50 characters
Body: max 100 words
Goal: meeting booking ask
CTA: specific — "Would Day 1 morning or Day 2 afternoon work for a 20-minute chat?"
Include: a one-line value hook relevant to their persona
Tone: direct, confident, easy to say yes to

Email 3 — 3 days before event:
Subject line: max 50 characters
Body: max 80 words
Goal: confirm meeting or re-engage non-responders
For confirmed meetings: logistics confirmation + one prep question
For non-responders: lighter ask — "even a quick 10 minutes between sessions?"
Tone: friendly, no pressure

For each email include:
- Subject line with character count
- Preview text (max 90 characters)
- Full email body
- CTA
- Sender recommendation: AE name not company name

---

STEP 4 — Speaking Abstract
Write a conference speaking abstract for Ramco to submit.
Save to: campaigns/events/[event-name]/[event-name]-speaking-abstract.md

Requirements:
- Length: 200 to 250 words exactly
- Title: outcome-led, not product-led (e.g. "How [REGION] 3PLs Are Cutting
  Operational Costs With Integrated Logistics Technology")
- Opening: a regional market stat or provocative question
- Body: 3 key learning outcomes the audience will take away
- Tone: thought leadership — Ramco is a practitioner, not a vendor
- No product names in the abstract body
- Close: one sentence on why this matters now for [REGION] 3PLs
- Speaker bio placeholder: [AE NAME], [TITLE], Ramco Systems — [2 sentences]

Also write:
- 3 alternative session title options (in case the primary is not selected)
- Recommended session format: panel / solo presentation / workshop / fireside
  with reasoning based on the event type

---

STEP 5 — Post-Event Follow-Up Templates
Write 3 follow-up email templates categorised by lead temperature.
Save to: campaigns/events/[event-name]/[event-name]-post-event-followup.md

Template A — Hot Lead (strong interest shown, demo discussed):
Subject line: max 50 characters — reference something specific from the conversation
Body: max 150 words
Must include:
- One specific reference to what was discussed at the event (leave a [FILL IN] placeholder)
- A clear next step: demo booking with a specific date option
- One asset to attach: relevant case study or module one-pager
- Personal sign-off from the AE
Tone: warm, specific, momentum-building

Template B — Warm Lead (positive conversation, no commitment):
Subject line: max 50 characters
Body: max 120 words
Must include:
- Brief recap of the conversation topic
- One relevant resource to share (report, case study, or blog post)
- A soft next step: "happy to set up a quick call if useful"
Tone: helpful, no pressure, keeps door open

Template C — Cold Lead (collected card, brief or no conversation):
Subject line: max 50 characters
Body: max 80 words
Must include:
- Context reminder: met at [EVENT NAME]
- One-line value statement relevant to their role
- Enroll them in Track 1 nurture after this email
Tone: brief, professional, no assumptions

For each template include:
- Subject line with character count
- Full email body
- CTA
- HubSpot action: which nurture track to enroll this contact into after sending

---

STEP 6 — HubSpot Tagging Instructions
Write step-by-step HubSpot logging instructions for the team to follow
immediately after the event. Save to:
campaigns/events/[event-name]/[event-name]-hubspot-tagging.md

Include:

Contact Logging:
- How to create a new contact in HubSpot from a business card
- Which fields to fill in immediately: name, company, title, email,
  phone, event source, lead temperature (Hot / Warm / Cold)
- Custom property to set: Original Source = [Event Name] [Year]

Lead Temperature Definitions:
- Hot: asked for a demo, expressed budget awareness, or has a live problem to solve
- Warm: positive conversation, expressed curiosity, receptive to follow-up
- Cold: exchanged cards, brief or transactional interaction only

Nurture Track Enrollment:
- Hot leads: DO NOT enroll in nurture — AE personal follow-up within 24 hours
- Warm leads: enroll in Email Nurture Track 2 (consideration stage)
- Cold leads: enroll in Email Nurture Track 1 (awareness stage)

Deal Creation Rule:
Create a HubSpot deal only when:
- A meeting has been booked post-event (not just at the event)
- AND the prospect has confirmed they are evaluating logistics software
- Set initial deal stage: Discovery
- Set estimated close date: 6 months from event date (adjust after discovery call)

Team Deadline:
All event contacts must be logged in HubSpot within 48 hours of event close.
Assign a named team member to own this for each event.

---

STEP 7 — Summary
Print the following:

Event: [Event Name] | Date: [Date] | Region: [Region]
Ramco presence: [Attending / Sponsoring / Speaking]
Pre-booked meeting target: 5 to 10

Assets created:
1. Event brief with pre-event timeline
2. LinkedIn outreach: CIO / COO / CEO (preview first 60 chars of each)
3. Email sequence: 3 emails (subject lines listed)
4. Speaking abstract: [title] — [word count] words
5. Post-event follow-up: Templates A (Hot) / B (Warm) / C (Cold)
6. HubSpot tagging instructions

Files saved:
- campaigns/events/[event-name]/[event-name]-brief.md
- campaigns/events/[event-name]/[event-name]-pre-event-outreach.md
- campaigns/events/[event-name]/[event-name]-email-sequence.md
- campaigns/events/[event-name]/[event-name]-speaking-abstract.md
- campaigns/events/[event-name]/[event-name]-post-event-followup.md
- campaigns/events/[event-name]/[event-name]-hubspot-tagging.md

Next action: Send LinkedIn outreach messages to known attendees this week.
Submit speaking abstract to event organisers by [DEADLINE].
