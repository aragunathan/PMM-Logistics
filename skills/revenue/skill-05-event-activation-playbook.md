# Skill 05 — Event Activation Playbook
## Ramco Logistics Software | Revenue

> **Purpose:** Maximise pipeline generation and acceleration from every event Ramco participates in — trade shows, hosted roundtables, webinars, and industry dinners — across all four target regions.
> **Output:** Pre-event outreach sequences live 4–6 weeks before each event, at-event lead capture process operational on day one, post-event follow-up sequences enrolled within 24 hours of event close, and pipeline attributed in HubSpot within 5 business days.
> **Owner:** Demand Gen + Regional Sales Lead (joint ownership — this skill fails if either side runs it alone)
> **Estimated time to complete:** 6–8 hours of setup per event; 2–3 hours post-event processing

---

## Prerequisites
- [ ] `/inputs/persona-definitions.md` — read before writing any event outreach copy
- [ ] `/skills/activation/skill-03-persona-messaging-architecture.md` — approved messaging matrix must exist before outreach is written
- [ ] `/skills/acquisition/skill-01-abm-account-list-building.md` — ABM account list for the event region must exist and be current in HubSpot
- [ ] HubSpot Marketing Hub Professional or Enterprise
- [ ] LinkedIn Sales Navigator — for pre-event prospect identification and at-event connection requests
- [ ] Event registration list or attendee list (request from organiser as early as possible — most will provide 2–4 weeks before)
- [ ] Regional Sales Lead confirmed and briefed — events without a committed sales rep present are not worth the investment

---

## Event Types This Playbook Covers

| Event Type | Pipeline Role | Typical Investment | Lead Volume |
|-----------|--------------|-------------------|-------------|
| Industry trade show (booth) | Acquisition — new contacts at scale | High | High |
| Sponsored conference session | Thought leadership + acquisition | Medium–High | Medium |
| Hosted executive roundtable | Acceleration — T1 accounts already in pipeline | Medium | Low, high quality |
| Industry association dinner / networking event | Relationship building + acquisition | Low–Medium | Low, warm |
| Webinar (virtual) | Acquisition + nurture | Low | Medium |
| Customer advisory event | Retention + expansion | Medium | Low, strategic |

This playbook primarily addresses **trade shows, sponsored sessions, and hosted roundtables** — the event types with the highest pipeline return at Ramco's ACV and sales cycle length. The same framework applies to smaller events with reduced scope.

---

## Step-by-Step Execution Workflow

---

### STEP 1: Event Qualification — Should Ramco Be There?
**Time:** 45 minutes | **Owner:** Demand Gen Lead + Regional Sales Lead
**Trigger:** Any event under consideration, minimum 6 weeks before event date

Not every event is worth attending. Use this scoring framework before committing budget.

#### Event Scoring Criteria

| Criterion | Weight | Score 1–5 | Notes |
|-----------|--------|-----------|-------|
| Audience ICP match | 30% | | 5 = majority attendees are 3PL companies $100M+; 1 = general logistics / mixed audience |
| Persona seniority | 20% | | 5 = C-suite and VP level dominant; 3 = mixed; 1 = operational/practitioner level only |
| Regional strategic priority | 20% | | Weighted by current quarter campaign focus |
| Competitor presence | 10% | | 5 = competitors present (we must be there); 3 = some; 1 = none |
| Pipeline acceleration potential | 10% | | 5 = known T1 accounts confirmed attending; 3 = likely; 1 = unknown |
| Historical performance (if attended before) | 10% | | 5 = strong past pipeline; 1 = no data or poor past result |

**Scoring output:**
- 4.0–5.0: Attend with full activation (booth or sponsorship + full pre/post sequence)
- 2.5–3.9: Attend without booth (SDR attends for networking only + targeted pre/post outreach to known attendees)
- 1.0–2.4: Do not attend — invest the budget in digital ABM for that region instead

**Minimum threshold to justify a booth or sponsorship:** Score ≥ 3.5 AND at least 5 known T1 accounts confirmed attending.

#### Key Events by Region (standing list — validate annually)

**Australia:**
- Logistics Association Australia (LAA) National Conference — annual, typically Q3
- Supply Chain & Logistics Association of Australia (SCLAA) National Conference
- Manifest Melbourne — supply chain and logistics technology focus; strong 3PL attendance
- Australian Logistics Council (ALC) Forum
- Retail Supply Chain Conference (if targeting FMCG/retail 3PLs)

**Indonesia:**
- Indonesia Supply Chain & Logistics (ISCL) Expo — Jakarta, annual
- Intralogistica Indonesia — warehousing and intralogistics focus; Jakarta
- ALFI (Asosiasi Logistik dan Forwarder Indonesia) Annual Conference
- Indonesian Chamber of Commerce (KADIN) Logistics Sector Forum
- Pos Indonesia Logistics Forum (if targeting e-commerce logistics)

**Saudi Arabia:**
- Saudi Logistics Expo (SLX) — Riyadh, annual — largest logistics event in the Kingdom
- Future Logistics Summit — Riyadh; Vision 2030-aligned; government and private sector attendance
- Project Saudi (if targeting industrial/petrochemical logistics)
- SIEVERT Conference — supply chain focus, GCC-wide
- Saudi Post / SPL Technology Forum (invite-only; worth pursuing through relationship)

**Philippines:**
- SCMAP (Supply Chain Management Association of the Philippines) Annual Conference — Manila; highest-quality 3PL audience in the country
- PHILFREIGHT International Freight and Logistics Conference
- LogiSYM Philippines — regional logistics technology focus
- Entrepreneur Philippines Logistics Summit
- PMAP (People Management Association of the Philippines) — only if targeting HR/ops convergence messaging

---

### STEP 2: Event Planning — 6 Weeks Out
**Time:** 2–3 hours | **Owner:** Demand Gen + Regional Sales Lead

Lock the following before any outreach is drafted.

#### 2a: Set Event Goals

Define specific, measurable goals for this event before spending any budget:

| Goal | Target Number | Measurement Method |
|------|--------------|-------------------|
| Meetings booked at event | | HubSpot meetings |
| New T1 leads captured | | HubSpot contact import post-event |
| Pipeline opportunities created within 30 days | | HubSpot deal report |
| T1 accounts in attendance engaged (at least 1 touch) | | HubSpot activity log |
| Speaking/demo slot impressions | | Event organiser data |

**Minimum viable event standard:** If Ramco cannot book at minimum 3 qualified meetings and capture 15 new contacts at a trade show, the event budget would deliver better ROI through paid LinkedIn ABM targeting the same audience.

#### 2b: Request the Attendee List

Contact the event organiser immediately upon registration. Request:
- Full attendee list (company name, title, email) — some organisers provide this 2–4 weeks out
- Confirmed speaker list — speakers at logistics events are often senior decision-makers; prioritise for outreach
- Registered sponsor/exhibitor list — use to identify which competitors will be present

If the organiser will not provide a full list, use LinkedIn to search for people who have posted about attending the event:
```
LinkedIn search: "[Event Name] 2025" in Posts — filter by your target region and seniority
LinkedIn search: People → filter by event name as keyword in "Talked about" section
```

#### 2c: Build the Event Target List in HubSpot

Cross-reference the attendee list against your existing ABM account list:

1. Export the attendee list to a staging spreadsheet
2. Match attendee companies against HubSpot ABM account list using `VLOOKUP` on company name or domain
3. Flag matches as: Known Account (already in HubSpot) / New Account (not in HubSpot but meets ICP) / Disqualified (does not meet ICP)
4. For Known Accounts: pull the existing HubSpot contact record and add event context
5. For New Accounts that meet ICP: enrich via Apollo and add to HubSpot before outreach
6. Create a HubSpot static list: `EVENT | [Event Name] | [Date] | Target Attendees`

**Minimum list size to justify pre-event outreach sequence:** 20 contacts. Below 20, use personalised 1:1 outreach instead of a sequence.

#### 2d: Confirm Sales Coverage

For every T1 account confirmed attending, assign a named Ramco rep as the account owner before pre-event outreach begins. Pre-event emails must come from the rep who will be at the event — not from a generic marketing sender.

---

### STEP 3: Pre-Event Outreach — 4 Weeks to 3 Days Out
**Time:** 2–3 hours | **Owner:** SDR / Regional Sales Rep (Demand Gen builds the sequence)

Pre-event outreach has one goal: **book meetings before the event starts.** The best time to get a meeting at a conference is before anyone is exhausted, over-pitched, and dodging vendor booths.

Target: Book 60–70% of meetings before the event. The remaining 30–40% come from at-event networking.

#### Pre-Event Sequence Structure

**Touch 1 — Email (4 weeks out)**

Goal: Establish context and plant the flag. Not a meeting request yet.

```
Subject: [Event name] — [Specific session or topic reference]
Preview: Worth a conversation if you're attending

[First Name],

[Relevant industry observation specific to their operation type and region — 1–2 sentences. Not about Ramco.]

I noticed [Company] will be at [Event Name] next month. We'll be there too — [brief, non-salesy reason: "talking to 3PL leaders about X" or "running a roundtable on Y"].

If [specific pain point relevant to their persona] is on your agenda, it might be worth a 20-minute conversation while we're both there.

[Sender Name]
[Title] | Ramco Systems
[Direct mobile]
```

---

**Touch 2 — LinkedIn Connection Request (3.5 weeks out)**

Send a LinkedIn connection request the day after the first email. Do not reference the email.

```
[First Name] — I'll be at [Event Name] next month. Interested in your perspective on [specific industry topic relevant to their role]. Would be good to connect.
```

---

**Touch 3 — Email (2.5 weeks out)**

Goal: Share a relevant asset and introduce a reason to meet.

```
Subject: Before [Event Name] — worth 5 minutes
Preview: Something specific to 3PLs at your scale

[First Name],

Ahead of [Event Name] I've been compiling the questions 3PL operations leaders at your scale are asking right now — mostly around [relevant theme: visibility, billing, fleet, scaling without headcount].

I put together a short piece on it. [Link — case study, guide, or benchmark report]

If any of it is relevant to what you're working through, I'd like to find 20 minutes at [Event Name] to compare notes. I can work around your schedule.

[Link: Check my availability / Book a time]

[Sender Name]
[Title] | Ramco Systems
[Direct mobile]
```

---

**Touch 4 — LinkedIn Message (2 weeks out, after connection accepted)**

```
[First Name] — thanks for connecting. I sent a note about [Event Name] last week — still worth a quick chat if you'll be there? Happy to meet whenever suits you. [Calendly or meeting link]
```

---

**Touch 5 — Email (1 week out)**

Goal: Direct meeting request with low-friction scheduling.

```
Subject: [Event Name] — can we find 20 minutes?
Preview: Specific time options inside

[First Name],

One week out from [Event Name]. Are you free for a 20-minute conversation at any of these times?

— [Day, time, location at venue — e.g., "Tuesday at 11am near the registration desk"]
— [Day, time, location]
— [Day, time, location]

If none work, reply and I'll find an alternative. If [Event Name] doesn't work at all, I'm happy to find a time separately.

[Sender Name]
[Title] | Ramco Systems
[Direct mobile]
```

---

**Touch 6 — SMS or WhatsApp (2–3 days out, only for T1 accounts who have engaged but not booked)**

Use SMS only for contacts who have opened an email or accepted a LinkedIn connection request — not cold:

```
Hi [First Name], [Sender Name] from Ramco. Heading to [Event Name] on [day]. Still a couple of meeting slots open if you're keen — happy to make it work around your schedule. Let me know.
```

**Note on SMS by region:**
- **Australia:** SMS is acceptable for business contacts; WhatsApp less common than SMS
- **Indonesia:** WhatsApp is dominant — use WhatsApp Business, not SMS
- **Saudi Arabia:** WhatsApp is the primary channel — use WhatsApp; SMS feels impersonal
- **Philippines:** Viber and WhatsApp both used; Viber is more common among older professionals

#### Build the Pre-Event Sequence in HubSpot

Navigate to: **HubSpot → Automation → Sequences → Create Sequence**

Name: `EVENT | [Event Name] | [Region] | Pre-Event | [Persona]`

Build as a Sales Sequence (not a Workflow) — this allows the assigned rep to send from their own email address and the sequence pauses automatically when a contact replies.

Enrollment: Manual enrollment by SDR from the event target list — do not auto-enroll. The rep must review each contact before enrolling.

---

### STEP 4: At-Event Execution
**Time:** Duration of event | **Owner:** Regional Sales Rep + any Ramco staff present

#### 4a: Pre-Event Day Briefing (morning of Day 1)

Hold a 15-minute team standup before the event floor opens:
- Review the target account list — who are the T1s in the room?
- Assign each T1 account to a specific rep for the day — no doubling up
- Confirm scheduled meetings (time, location, who is attending from the prospect side)
- Share any last-minute intelligence: "I saw on LinkedIn that [Company]'s CIO posted about looking for a new TMS — prioritise them"
- Set the daily lead capture target

#### 4b: Lead Capture Process

**Every conversation must be logged within 2 hours of occurring — not at the end of the day.**

Use HubSpot mobile app for immediate logging:
1. Scan business card or search contact name in HubSpot mobile
2. Create or update contact record
3. Log a note immediately with: conversation summary (2–3 sentences), pain points mentioned, next step agreed, lead temperature (Hot / Warm / Cold)
4. Set a follow-up task: assign to self, due date = 2 business days after event ends

**Lead temperature definitions:**
- **Hot:** Expressed active interest, agreed to a specific next step (demo, call, proposal), and has a real timeline or trigger
- **Warm:** Had a substantive conversation, showed interest, no immediate next step but open to follow-up
- **Cold:** Badge scan, brief exchange, took materials, no meaningful conversation

**Do not rely on badge scanners alone.** Badge scan data from event organisers is often delayed by 2–3 weeks and lacks conversation context. Use HubSpot mobile as the primary capture tool and badge scans as a backup.

#### 4c: Booth and Meeting Management

**If Ramco has a booth:**
- Designate one rep as booth anchor at all times — never leave the booth unmanned during peak hours
- Set a 10-minute maximum for booth conversations before qualifying and routing: is this a decision-maker? Schedule a longer meeting or follow-up call.
- Keep a printed list of T1 target accounts at the booth — if any T1 rep walks by, flag it for the closest senior Ramco rep immediately
- Do not use the booth as a place to host long meetings — use a private meeting room or nearby café for substantive conversations

**Scheduled meetings at event:**
- Arrive 5 minutes early to every booked meeting
- Bring a printed one-pager (see `/prompts/sales-enablement/executive-onepager-generator.md`) — leave it behind
- Start every meeting with a discovery question, not a product pitch: "Before I show you anything, tell me — what's the one operational problem that keeps you up at night?"
- Log meeting notes in HubSpot mobile before leaving the meeting room

#### 4d: Real-Time Intelligence Sharing

Create a WhatsApp or Slack group for all Ramco staff at the event. During the day:
- Share real-time sightings: "Just met [Name] from [Company] — they're actively evaluating TMS. [Rep name] — they asked for you specifically"
- Share competitive intelligence: "[Competitor] is at stand X pitching on [feature] — FYI"
- Share scheduling changes: "My 3pm moved — I'm free if anyone needs backup for a meeting"

---

### STEP 5: Post-Event Follow-Up — Within 24–48 Hours
**Time:** 2–3 hours | **Owner:** Demand Gen (sequence build) + Sales Rep (personalised outreach to Hot leads)

The biggest failure mode in event marketing is a slow or generic follow-up. Contacts forget conversations within 48 hours. The post-event window is 24–72 hours — after that, response rates drop sharply.

#### 5a: Segment Leads by Temperature in HubSpot

Within 4 hours of event close:
1. Navigate to: HubSpot → Contacts → Import (if contacts were captured outside HubSpot) or review the event contact list
2. Add the contact property: `Event Lead Temperature` = Hot / Warm / Cold (see below for setup)
3. Add the contact property: `Event Name` = [Event Name]
4. Tag all event contacts with the static list: `EVENT | [Event Name] | [Date] | All Contacts`
5. Create three sub-lists:
   - `EVENT | [Event Name] | Hot Leads`
   - `EVENT | [Event Name] | Warm Leads`
   - `EVENT | [Event Name] | Cold Leads`

#### 5b: Hot Lead Follow-Up (SDR / Sales Rep — personal, not sequence)

Hot leads must receive a personal email from the rep they met — not an automated sequence. Write this yourself using the rep's voice. Use the template below as a starting point:

```
Subject: Great to meet at [Event Name], [First Name]
Preview: [Specific reference to what was discussed]

[First Name],

Really enjoyed our conversation at [Event Name] — [1 sentence referencing something specific they said or a problem they mentioned].

As promised / As a follow-up to what we discussed: [specific next step — demo booking link, document promised, introduction offered].

[If demo: "I've set aside [Day] at [Time] for a 30-minute session that focuses specifically on [pain point discussed] — does that work?"]

[If document: "Attached is [document name] — specifically relevant to [what they said they were dealing with].]

Looking forward to continuing the conversation.

[Sender Name]
[Title] | Ramco Systems
[Direct mobile]
```

**SLA for Hot leads:** Personal follow-up email sent within 12 hours of event close. Meeting booked within 48 hours.

#### 5c: Warm Lead Sequence

Enroll Warm leads in a 4-email post-event sequence. This is a Workflow (not a Sales Sequence) — it runs automatically after enrollment.

**Email 1 — Day 1 after event**
```
Subject: Good to meet at [Event Name], [First Name]
Preview: [Short reference to event theme]

[First Name],

Thanks for taking the time at [Event Name]. It was a good event — [1 sentence genuine observation about the event or a session].

[1–2 sentences referencing the theme of your conversation or the topic they were interested in — draw from HubSpot meeting notes.]

I've put together a short resource that speaks directly to [pain point / topic] — [link].

If it raises any questions, or if you'd like to see how this looks in the context of your operation specifically, I'm at [email] or [mobile].

[Sender Name]
[Title] | Ramco Systems
[Direct mobile]
```

**Email 2 — Day 5**
```
Subject: The question most 3PL [Ops leaders / CIOs / CEOs] asked at [Event Name]
Preview: Worth a few minutes

[First Name],

The conversation that came up most at [Event Name] — at least from the [3PL operators / IT leaders / executives] I spoke with — was around [relevant industry theme: visibility, billing accuracy, scaling, digital capability for enterprise contracts].

I've seen this question answered a few different ways. Here's the most practical one we've come across at Ramco's customer base.

[Link: Relevant case study or short resource]

Happy to discuss in the context of what [Company] is working through.

[Sender Name]
[Title] | Ramco Systems
[Direct mobile]
```

**Email 3 — Day 10**
```
Subject: Before [Event Name] is too far in the rearview
Preview: One specific thing worth following up on

[First Name],

A couple of weeks out from [Event Name]. I wanted to follow up on one specific thing from our conversation — [reference their specific operational context or a question they asked].

If that's moved up the priority list, I can show you exactly how it works in Ramco in 20 minutes. Or if it's not the right time, worth staying in touch for when it is.

[Link: Book 20-minute demo / Or: Reply to set up a call]

[Sender Name]
[Title] | Ramco Systems
[Direct mobile]
```

**Email 4 — Day 21 (Final)**
```
Subject: Closing the loop, [First Name]
Preview: No more follow-ups after this one

[First Name],

Last note from me after [Event Name].

If the timing isn't right for a conversation right now, no problem at all. When it is, I'm at [email] or [mobile].

[Optional: If there's a specific resource, event, or reference that's worth sharing: "One thing that might be useful when the timing is right — [resource/invite/reference]."]

Thanks for the conversation at [Event Name].

[Sender Name]
[Title] | Ramco Systems
[Direct mobile]
```

#### 5d: Cold Lead Sequence

Enroll Cold leads in the standard persona-matched nurture track (see `skill-04-email-nurture-sequences.md`). Do not send a dedicated post-event sequence — they had minimal interaction and the event context does not create enough of a warm signal to justify referencing it.

Exception: If the contact's company is a T1 account, enroll in the Warm sequence regardless of lead temperature — the account strategic value overrides the individual interaction quality.

---

### STEP 6: Pipeline Attribution in HubSpot
**Time:** 60–90 minutes | **Owner:** Marketing Ops
**Deadline:** Within 5 business days of event close

#### 6a: Create Event Campaign in HubSpot

Navigate to: **HubSpot → Marketing → Campaigns → Create Campaign**

Name: `[Event Name] | [Region] | [Month Year]`
Start date: Event date
End date: 30 days after event (to capture pipeline created in the follow-up window)
Goal: Pipeline generated (set the target pipeline value agreed in Step 2)

Associate all event-related assets with this campaign:
- Pre-event email sequence
- Post-event email sequence
- Any LinkedIn ads run promoting the event presence
- Any content assets shared during the event period

#### 6b: Tag All Event Contacts with Campaign Association

For all contacts captured at or engaged through the event:
- Navigate to each contact's record (or bulk-update via list)
- Associate the contact with the event campaign
- Set `Original Source Detail` to the event name if the contact is net-new

#### 6c: Create or Update Deals for Hot and Warm Leads

For every Hot lead and any Warm lead who engages with the post-event sequence:
- Create a HubSpot deal within 5 business days of event close
- Deal name: `[Company] — [Event Name] — [Year]`
- Associate the deal with the event campaign
- Set Close Date to a realistic estimate based on the 180+ day Ramco sales cycle
- Set pipeline stage: Opportunity (if qualified) or Lead (if still in discovery)

For existing T1 accounts already in the pipeline who were engaged at the event:
- Update the existing deal record: add a note referencing the event interaction
- Associate the deal with the event campaign for attribution purposes
- Reassess the pipeline stage if the event accelerated the opportunity

#### 6d: Event ROI Report

Navigate to: **HubSpot → Reports → Create Custom Report**

Build a report for this event:

| Metric | How to Pull |
|--------|------------|
| Contacts captured (net-new) | Contacts enrolled in event list AND original source = event |
| Contacts influenced (existing + event-touched) | All contacts in event list |
| Hot / Warm / Cold breakdown | Filter by Event Lead Temperature property |
| Meetings booked from event | HubSpot meetings report filtered by event campaign |
| Deals created (event as first touch) | Deals associated with event campaign |
| Pipeline value created | Sum of deal amounts associated with event campaign |
| Pipeline influenced | Deals where a contact in the event list is associated |
| Cost per lead | Event budget ÷ total contacts captured |
| Cost per meeting | Event budget ÷ meetings booked |
| Projected ROI | Pipeline value × estimated win rate ÷ event budget |

Present this report to the Sales Lead within 10 business days of event close. Use it to decide whether to attend next year.

---

### STEP 7: Region-Specific Event Execution
**Time:** Review before every event in the relevant region | **Owner:** Demand Gen + Regional Sales Lead

---

#### Australia

**Pre-event outreach norms:**
- Australians respond well to direct, low-pressure pre-event outreach. A brief, conversational email referencing a specific conference session or industry issue outperforms a polished marketing message.
- Reference specific conference sessions or speakers in pre-event outreach — shows you are genuinely engaged with the event, not just attending to sell
- Phone calls (mobile) are acceptable and often more effective than email in the week before an event — Australian business culture is relatively open to direct contact

**At-event behaviour:**
- Australians are informal at events — drop the corporate register once the conversation starts. Match their energy.
- Do not pitch aggressively at the booth. Ask questions. Listen. Australians are suspicious of over-eager vendors.
- Shout a coffee or a beer — hospitality is appreciated and normalises the relationship quickly
- If a competitor is present, acknowledge it directly if it comes up: "Yes, we know [Competitor] well. Happy to walk you through how we're different." Evasion reads as weakness.

**Post-event timing:**
- Follow-up email within 24 hours is expected and well-received
- If a meeting was agreed at the event, send the calendar invite within 2 hours of the conversation ending
- Reference something from the conference itself in the follow-up — a session, a shared experience, the event location

**Local events calendar to protect:**
- AFL Grand Final week (late September/early October) — Melbourne is distracted; avoid outreach
- Christmas shutdown (mid-December to mid-January) — most Australian businesses are genuinely closed; all event follow-up must close before December 15

---

#### Indonesia

**Pre-event outreach norms:**
- Begin outreach 5–6 weeks before the event — Indonesian business communication moves through social layers before reaching business substance, and the timeline needs to reflect this
- First touch should establish shared context and professional respect, not request a meeting. Meeting requests come in touch 3 or later.
- WhatsApp is far more effective than email for getting a response in Indonesia. Once a LinkedIn connection is established, move to WhatsApp for scheduling.
- A warm introduction through a mutual contact or via ALFI/industry association network dramatically increases the likelihood of a meeting. Ask the Indonesian sales rep to map their network against the target list before outreach begins.

**At-event behaviour:**
- Greet with respectful formality initially — "Selamat pagi, Bapak/Ibu [Name]" — even in English-dominant events
- Business card exchange: receive with both hands, look at the card, do not write on it or put it in your back pocket — this is disrespectful in Indonesian business culture
- Do not jump to business immediately — spend 5–10 minutes on relationship conversation first (where they are from, their company's history, the event)
- Food and shared meals are important relationship signals — accept any invitation to eat together; if Ramco is hosting, arrange halal catering and be explicitly clear that it is halal
- Hierarchy is important — if the person you are speaking with is a middle manager, do not skip to their CEO without going through them first

**Post-event timing:**
- Follow-up within 48 hours is appropriate; same-day follow-up can feel rushed in Indonesian business culture
- Send a WhatsApp message first to re-establish the personal connection before the formal email
- Format: "Bapak/Ibu [Name], senang berjumpa di [Event Name] kemarin. Semoga pertemuan ini bisa kita lanjutkan lebih jauh." (Nice to meet at [Event] yesterday. I hope we can continue this conversation further.) — even a brief Bahasa opener before an English body is appreciated

**Local events calendar:**
- Ramadan month — event attendance drops; if events are scheduled during Ramadan, morning sessions are preferable; avoid scheduling meetings around Iftar time
- Lebaran / Eid al-Fitr (two weeks after Ramadan ends) — offices quiet for 1–2 weeks; no meaningful business done
- Independence Day (August 17) — national holiday; events often cluster around this date

---

#### Saudi Arabia

**Pre-event outreach norms:**
- Formal written communication in the pre-event phase. Subject lines and opening paragraphs should be professional in register.
- Reference Vision 2030 and the National Transport and Logistics Strategy in pre-event emails targeting senior Saudi executives — this is not a marketing cliché in Saudi Arabia; it is a real strategic alignment signal
- For the Saudi Logistics Expo specifically, request a meeting with the event organiser to be formally introduced to key attendees — this is common practice and event organisers facilitate introductions
- Get a Saudi-based team member or partner to send pre-event outreach to Saudi contacts wherever possible. A +966 mobile number in a WhatsApp message lands differently than a message from an international number.

**At-event behaviour:**
- Dress formally — suits for men, conservative business attire; this is non-negotiable at Saudi business events
- Greetings: handshake with men is standard in business settings; do not initiate physical contact with women — wait for them to extend a hand first
- Coffee and dates will often be offered — accept; refusing hospitality is rude
- Do not schedule meetings during prayer times (five times daily; Dhuhr ~12:30pm and Asr ~3:30pm are most likely to affect event schedules)
- Arabic language ability at the Ramco rep level is a significant advantage — if an Arabic-speaking rep is available, they should be present at the Saudi events
- Do not discuss pricing, commercials, or competitor comparisons in public spaces at the event — these conversations happen in private settings

**Post-event timing:**
- Follow-up within 48 hours via email and WhatsApp
- Post-event communication should continue to be formal in tone
- If the event coincided with or was near a government decision-making period, follow up with a formal letter (PDF on Ramco letterhead) — this is valued for senior Saudi stakeholder communications
- Arabic-language follow-up email (even a brief one) alongside the English version is appreciated for contacts whose primary language is Arabic

**Local events calendar:**
- Saudi National Day (September 23) — public holiday; the weeks around it involve reduced business activity
- Saudi Founding Day (February 22) — newer holiday; increasingly observed
- Year-end government budget cycles (Q4 of the Hijri calendar) — large government-affiliated 3PLs may have accelerated procurement decisions during this period; worth timing event outreach accordingly

---

#### Philippines

**Pre-event outreach norms:**
- Filipinos are warm and responsive to personal outreach — a brief, genuine first message referencing something specific about them or their company performs much better than a templated sequence
- LinkedIn is widely used by Philippine logistics professionals. A LinkedIn connection request referencing the upcoming event is an excellent first touch.
- SCMAP is the most respected industry association — if either the Ramco rep or a mutual contact is a SCMAP member, lead with that in the connection request
- Phone calls are acceptable — Philippine business culture is relationship-oriented and a brief, warm call before the event to confirm a meeting is common and appreciated

**At-event behaviour:**
- Filipino business events are typically warm and social in tone — match that energy; overly formal or corporate behaviour stands out negatively
- Business cards: exchange professionally, review before putting away
- Shared meals are important — if the event has a dinner or networking reception, prioritise attendance; much of the meaningful relationship-building happens at the table, not on the event floor
- Name-dropping within mutual professional networks (SCMAP, alumni: Ateneo, La Salle, UP) is a trust-building signal — if you have any connection to their professional network, mention it naturally
- Be aware of seniority signals — Philippine business culture has a strong sense of hierarchy; address senior executives formally until invited to use first names

**Post-event timing:**
- Follow-up within 24 hours is expected and well-received
- Viber or WhatsApp message before the formal email helps re-establish the personal connection
- Reference a specific moment from the conversation or event — Filipinos value this kind of personal attention
- If the event was a dinner or social event, begin the follow-up with a social note before moving to business: "Great evening at [Event] — the panel discussion on last-mile infrastructure was excellent."

**Local events calendar:**
- Holy Week (Semana Santa) — March/April; Philippines essentially shuts down for 4–5 days; avoid all business outreach
- All Saints' Day / All Souls' Day (November 1–2) — widely observed; reduced business activity
- Christmas season (December 16 onwards with Simbang Gabi) — business decisions slow significantly from mid-December; close all event follow-up actions by December 12

---

## HubSpot Setup Instructions

### Custom Properties to Create

Navigate to: **HubSpot → Settings → Properties**

**Contact Properties:**
| Property Label | Internal Name | Field Type | Options |
|---------------|--------------|------------|---------|
| Event Lead Temperature | event_lead_temperature | Dropdown | Hot, Warm, Cold |
| Event Name (Last Attended) | event_name_last | Single-line text | Free text |
| Event Date (Last Attended) | event_date_last | Date | |
| Meeting Booked at Event | meeting_booked_at_event | Checkbox | True/False |
| Event Notes | event_notes | Multi-line text | Free text |

**Company Properties:**
| Property Label | Internal Name | Field Type | Options |
|---------------|--------------|------------|---------|
| Event Engagement Count | event_engagement_count | Number | |
| Last Event Attended | last_event_attended | Single-line text | |

### Static Lists to Create Per Event

Navigate to: **HubSpot → Contacts → Lists → Create List → Static List**

| List Name | Purpose |
|-----------|---------|
| `EVENT | [Name] | [Date] | Target Attendees` | Pre-event outreach enrollment |
| `EVENT | [Name] | [Date] | Hot Leads` | Personal SDR follow-up |
| `EVENT | [Name] | [Date] | Warm Leads` | Automated post-event sequence |
| `EVENT | [Name] | [Date] | Cold Leads` | Standard nurture enrollment |
| `EVENT | [Name] | [Date] | All Contacts` | Attribution and reporting |
| `EVENT | [Name] | [Date] | Net New Contacts` | Contacts who did not exist in HubSpot before the event |

### Workflow: Post-Event Warm Lead Sequence

Navigate to: **HubSpot → Automation → Workflows → Create → Contact-based**

Name: `EVENT | [Name] | [Date] | Warm Sequence`

**Enrollment trigger:** Contact is a member of list `EVENT | [Name] | [Date] | Warm Leads`

**Workflow:**
```
Enrollment
  ↓
Send Email 1 (Day 1 post-event)
  ↓
Wait 4 days
  ↓
Branch: Has contact replied? → YES → Create SDR task → End
                             → NO → Continue
  ↓
Send Email 2 (Day 5)
  ↓
Wait 5 days
  ↓
Branch: Has contact clicked a link? → YES → Create SDR task: "Warm click — follow up" → Continue
                                    → NO → Continue
  ↓
Send Email 3 (Day 10)
  ↓
Wait 11 days
  ↓
Branch: Has contact booked a meeting? → YES → Set Lead Status = Meeting Booked → End
                                      → NO → Continue
  ↓
Send Email 4 (Day 21)
  ↓
Wait 1 day
  ↓
Set event_lead_temperature = "Sequence Complete"
  ↓
Enroll contact in persona-matched standard nurture track (if not already enrolled)
  ↓
End
```

---

## Ready-to-Use Claude Prompts

---

### Claude Prompt 1 — Pre-Event Outreach Sequence Generator

```
You are a B2B enterprise sales copywriter specialising in logistics software.

Write a pre-event outreach sequence for a Ramco sales rep attending [EVENT NAME] in [REGION]. The goal is to book meetings at the event before it starts.

Event details:
- Event name: [EVENT NAME]
- Event date: [DATE]
- Event location: [CITY, COUNTRY]
- Event focus: [e.g., logistics technology, supply chain operations, 3PL industry]
- Ramco's presence: [e.g., exhibitor with booth / sponsoring a session / attending without booth]

Target contact:
- Name: [FIRST NAME]
- Company: [COMPANY]
- Title: [TITLE]
- Persona category: [Technology / Operations / CEO]
- Known context: [Any known pain, recent news, or trigger event — or "none known"]
- Region: [REGION]

Ramco rep details:
- Sender name: [NAME]
- Title: [TITLE]
- Mobile: [NUMBER]

Write the following touches:
1. Email Touch 1 — 4 weeks out (establish context, no meeting request yet)
2. LinkedIn Connection Request — 3.5 weeks out (under 280 characters)
3. Email Touch 2 — 2.5 weeks out (share a relevant resource, soft meeting mention)
4. LinkedIn Message — 2 weeks out (after connection accepted, direct but low pressure)
5. Email Touch 3 — 1 week out (direct meeting request with specific time options)

Rules for all copy:
- Every touch must reference [EVENT NAME] specifically
- Every touch must be written from [SENDER NAME]'s perspective, not from "Ramco"
- Never start with "I", "We", or "My name is"
- No superlatives: no "world-class", "industry-leading", "best-in-class"
- No generic logistics statements — everything must be specific to [PERSONA CATEGORY] at a 3PL in [REGION]
- Tone must match [REGION] cultural norms: [PASTE RELEVANT REGIONAL NUANCES FROM persona-definitions.md OR this skill file]
- Subject lines under 50 characters, no spam triggers
- Each touch must be under 120 words

If [KNOWN CONTEXT] is available, weave it into the first email naturally — do not make it sound like research surveillance.
```

---

### Claude Prompt 2 — Post-Event Follow-Up Email Generator

```
You are a B2B sales copywriter who specialises in post-event follow-up emails that convert conversations into meetings.

Write a post-event follow-up email for the following contact. This email must reference the actual conversation that happened — it is not a generic follow-up.

Event details:
- Event name: [EVENT NAME]
- Event date: [DATE]
- Region: [REGION]

Contact details:
- Name: [FIRST NAME]
- Company: [COMPANY]
- Title: [TITLE]
- Persona category: [Technology / Operations / CEO]
- Lead temperature: [Hot / Warm]

Conversation notes from HubSpot:
[PASTE MEETING NOTES / CONVERSATION SUMMARY — e.g., "Discussed their challenge with manual billing reconciliation across three warehouse clients. They're currently using a legacy TMS from 2014. CTO is driving a platform evaluation starting Q3. Interested in seeing how Ramco handles multi-client rating."]

Agreed next step (if any):
[e.g., "Agreed to a 30-minute demo focused on rating and billing" / "Said to follow up in 2 weeks" / "No specific next step agreed"]

Sender details:
- Name: [SENDER NAME]
- Title: [TITLE]
- Mobile: [NUMBER]

Write:
1. A Hot lead version (if Lead Temperature = Hot): personal, references the specific conversation, includes a direct meeting booking link or proposed times, under 150 words
2. A Warm lead version (if Lead Temperature = Warm): warmer tone, references conversation theme, includes a low-friction CTA, under 130 words

Rules:
- The opening line must reference something specific from the conversation notes — not the event generically
- Do not open with "It was great to meet you" — this is the most common and least memorable opening in post-event emails
- Match the tone and register appropriate for [REGION]
- One CTA only
- No Ramco feature lists — only the one thing most relevant to the pain point discussed
```

---

### Claude Prompt 3 — Event Debrief and ROI Report Generator

```
You are a B2B marketing analyst producing an event debrief report for a senior marketing and sales leadership team.

Generate a structured event debrief report using the following data.

Event details:
- Event name: [EVENT NAME]
- Date: [DATE]
- Region: [REGION]
- Event type: [Trade show / Roundtable / Webinar / Conference]
- Ramco investment: [TOTAL COST including booth, travel, sponsorship, staff time]

Pre-event targets (set in planning):
- Meetings booked pre-event target: [NUMBER]
- New contacts target: [NUMBER]
- T1 accounts engaged target: [NUMBER]

Actual results:
- Pre-event meetings booked: [NUMBER]
- Total contacts captured: [NUMBER]
- Hot leads: [NUMBER]
- Warm leads: [NUMBER]
- Cold leads: [NUMBER]
- T1 accounts engaged: [NUMBER]
- Meetings held at event: [NUMBER]
- Deals created within 30 days: [NUMBER]
- Pipeline value created: [AMOUNT]
- Pipeline influenced (existing deals with event contact): [AMOUNT]

Qualitative notes:
[PASTE ANY NOTES ON: competitive intelligence gathered, key conversations, market feedback heard, what worked, what didn't]

Produce the following report sections:

1. EXECUTIVE SUMMARY (5 bullet points — one per key result)

2. PERFORMANCE VS. TARGETS (table format — target vs. actual vs. variance for each metric)

3. PIPELINE ANALYSIS
   - Cost per lead
   - Cost per meeting
   - Cost per opportunity created
   - Projected ROI (use 20% win rate assumption on pipeline if actual win rate unavailable)

4. WHAT WORKED (top 3 — with evidence)

5. WHAT DIDN'T WORK (top 3 — with specific root cause, not just "insufficient pipeline")

6. COMPETITIVE INTELLIGENCE (what was observed about competitors at the event)

7. RECOMMENDATION FOR NEXT YEAR
   - Attend / Attend with upgraded presence / Attend without booth / Do not attend
   - Rationale based on ROI data
   - If attending: 3 specific changes to make to improve results

Format the report for a 10-minute readout to the VP Marketing and Regional Sales Director. No padding. Conclusions first.
```

---

## KPIs

### Pre-Event KPIs (measure 1 week before event)
| Metric | Target | How to Measure |
|--------|--------|----------------|
| Pre-event meetings booked | ≥60% of total meeting target | HubSpot meetings booked report filtered by event campaign |
| Pre-event outreach sequence open rate | >35% | HubSpot sequence report |
| Pre-event outreach reply rate | >8% | HubSpot sequence report |
| T1 accounts with at least 1 outreach touch | 100% of known T1 attendees | HubSpot activity report on event target list |

### At-Event KPIs (measure daily)
| Metric | Target | How to Measure |
|--------|--------|----------------|
| Leads captured per day | [Set based on event size] | HubSpot mobile contact creation count |
| Meetings held vs. scheduled | >85% show rate | HubSpot meetings attended vs. booked |
| HubSpot notes logged same day | 100% of conversations | HubSpot activity report |
| Hot leads identified | ≥20% of total contacts captured | Event Lead Temperature = Hot count |

### Post-Event KPIs (measure at 30 days)
| Metric | Target | How to Measure |
|--------|--------|----------------|
| Post-event follow-up sent within 24h | 100% of Hot leads | HubSpot sequence enrollment timestamp |
| Warm sequence enrollment within 48h | 100% of Warm leads | HubSpot workflow enrollment report |
| Meetings booked post-event (from Warm sequence) | >15% of Warm leads | HubSpot meetings report |
| Deals created (event-attributed) | ≥1 per 5 Hot leads | HubSpot deal report: source = event campaign |
| Pipeline generated | ≥5× event investment | HubSpot campaign ROI report |
| Cost per qualified meeting | <$500 (adjust for region) | Event budget ÷ total meetings held + booked |

### 90-Day Pipeline KPIs
| Metric | Target | How to Measure |
|--------|--------|----------------|
| Pipeline influenced by event contacts | >15% of regional pipeline | HubSpot attribution: contact in event list |
| Deals progressed (event as accelerator) | ≥2 existing deals advanced by 1+ stage | HubSpot deal stage history for event-associated contacts |
| Event ROI | >3× investment in pipeline | Campaign ROI report |

---

## Failure Modes and How to Fix Them

| Failure Mode | Symptom | Fix |
|-------------|---------|-----|
| No pre-event meetings booked | Team arrives at event cold with no scheduled conversations | Increase outreach start to 6 weeks out; add WhatsApp/SMS touch in final week; Sales Lead must personally reach out to their T1 relationships before the event |
| Poor lead quality captured | Large contact list but mostly cold badge scans; no Hot leads | Brief the sales team on lead qualification criteria before the event; enforce the 10-minute booth conversation rule with routing to a senior rep for qualified prospects |
| Follow-up delayed beyond 48 hours | Contacts don't remember the conversation; reply rates collapse | Build the post-event sequence in HubSpot before the event so enrollment takes minutes post-event; assign Marketing Ops to enroll all contacts within 4 hours of event close |
| HubSpot not updated during event | No conversation notes; no lead temperature; follow-up is generic | Make HubSpot mobile logging a non-negotiable during the event stand-up briefing; review the day's entries each evening and flag any missing records |
| Sales doesn't follow up Hot leads | Hot leads go cold; pipeline not created | Set a 24-hour SLA for Hot lead follow-up with the Sales Lead; create HubSpot tasks with due dates; review outstanding tasks in post-event debrief |
| Generic follow-up email sent | Contacts receive a templated "nice to meet you" email with no personalisation | Enforce the rule: Hot leads receive a personal email only — no sequences; provide the post-event email generator prompt (Prompt 2) to every rep before the event |
| Pipeline not attributed to event | Event looks like it produced no ROI because deals aren't tagged | Run HubSpot campaign association immediately post-event; train Sales to associate new deals with the event campaign during creation |
| Wrong persona targeted at event | Most conversations are with operational staff, not decision-makers | Pre-screen attendee list more thoroughly; assign a senior Ramco rep to prioritise CXO networking; brief the booth team on politely routing non-decision-maker conversations to junior staff |
| Event scores high but ROI is poor | Event consistently fails to generate pipeline despite good audience | Audit post-event follow-up speed and quality before concluding the event is wrong; if follow-up is strong and pipeline still doesn't materialise, run the event scoring model again and consider downgrading next year's investment |

---

## Tools Required

| Tool | Purpose | Required / Optional |
|------|---------|-------------------|
| HubSpot CRM + Marketing Hub Pro | Lead capture, sequence enrollment, pipeline attribution, campaign reporting | Required |
| HubSpot Mobile App | At-event lead capture and meeting note logging | Required |
| LinkedIn Sales Navigator | Pre-event attendee identification, connection requests, at-event real-time lookup | Required |
| WhatsApp Business | Pre-event and post-event outreach for Indonesia, Saudi Arabia, Philippines | Required for ID, SA, PH |
| Calendly or HubSpot Meetings | Meeting booking links in pre-event and post-event emails | Required |
| Apollo.io | Enrichment for net-new contacts identified at the event | Required |
| Google Sheets | Event target list staging and post-event lead segmentation | Required |
| Canva or Adobe Express | Booth materials, event one-pagers, pull-up banners | Required for booth events |
| Loom | Record at-event video walkthroughs for contacts who couldn't attend a booth demo | Optional |
| Slack or WhatsApp Group | Real-time intelligence sharing among Ramco staff at the event | Required |

---

## Related Files
- `/inputs/persona-definitions.md` — Regional nuances and persona language for all outreach copy
- `/skills/activation/skill-03-persona-messaging-architecture.md` — Messaging matrix all event copy must align with
- `/skills/activation/skill-04-email-nurture-sequences.md` — Standard nurture tracks that Cold leads are enrolled in post-event
- `/skills/acquisition/skill-01-abm-account-list-building.md` — ABM account list used to cross-reference attendee list
- `/skills/ops/skill-hubspot-pipeline-setup.md` — HubSpot configuration reference
- `/skills/ops/skill-attribution-reporting.md` — How event pipeline is attributed and reported
- `/campaigns/event-series/pre-event-outreach-template.md` — Campaign-level event outreach templates
- `/campaigns/event-series/post-event-followup-template.md` — Campaign-level post-event templates
- `/prompts/sales-enablement/executive-onepager-generator.md` — One-pager to bring to at-event meetings
- `/experiments/experiment-log.md` — Log pre/post sequence A/B tests run across events
