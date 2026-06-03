# SKILL FILE 15: Customer Case Study and Reference Program
Category: Product Marketing
Current state: 1 to 3 case studies published
Save to: skills/product-marketing/skill-15-case-study-reference-program.md

## When to Use
- After a customer goes live and achieves measurable results (3 to 6 months post go-live)
- When a deal is stalled and a reference call could unlock it
- When entering a new region and need proof of local credibility
- Quarterly: review pipeline to identify new case study candidates

## Case Study Formats to Produce
Format 1: Full PDF case study (1,200 to 1,500 words)
  Use for: gated download, sales email attachment, event leave-behind
Format 2: One-page summary (400 words + metrics snapshot)
  Use for: sales meetings, executive conversations, event handout
Format 3: LinkedIn post version (150 to 200 words)
  Use for: social amplification immediately after publication
Format 4: Website thumbnail version (headline + 3 metrics + logo)
  Use for: homepage social proof, TMS and WMS product pages

## Case Study Identification Criteria
Score each potential case study candidate on these criteria:

Measurable results (required — 40 points max):
- Has quantifiable before/after metrics: cost per shipment, throughput,
  billing accuracy, fleet utilization, implementation time — 40 points
- Has qualitative results only (no hard numbers): 15 points

Strategic value (30 points max):
- Customer is in a target region (AU, ID, SA, PH): +10 points
- Customer is in 3PL industry (always yes for Ramco): +10 points
- Customer is recognizable brand or association member: +10 points

Reference willingness (30 points max):
- Will do a reference call with prospects: +15 points
- Will co-present at an industry event: +10 points
- Will provide a named quote: +5 points

Score above 60: priority case study — start immediately
Score 40 to 60: good case study — schedule within quarter
Score below 40: hold until more results are available

## Case Study Production Workflow

Step 1 — Customer approval and kick-off (Week 1)
- Get written approval from customer to be featured
- Schedule 45-minute interview with primary contact (COO or CEO preferred)
- Send interview prep questions 3 days before call
- Legal: confirm no NDA restrictions on sharing metrics

Step 2 — Interview and data collection (Week 1)
- Record interview (with permission)
- Collect before/after metrics in writing
- Request: company logo (high-res), customer photo (optional), company description

Step 3 — Draft production (Week 2)
- Run case-study-agent to generate first draft from interview notes
- Structure: Challenge → Solution → Results → Quote → Next steps
- Every metric must be specific: not "improved efficiency" but "reduced cost
  per shipment by 23% in the first 6 months"

Step 4 — Review and approval (Week 3)
- Send draft to customer for approval
- Two rounds of edits maximum
- Legal review if customer is a public company

Step 5 — Design and publish (Week 4)
- Send approved copy to design team for PDF layout
- Publish on ramco.com/resources/ with SEO meta data
- Add to HubSpot Documents for sales team access
- Create LinkedIn post version for immediate social amplification

## Interview Question Framework

Opening context questions:
- "Can you describe what your logistics operations looked like before Ramco?"
- "What was the trigger that made you decide to look for a new platform?"
- "Who was involved in the decision — which teams and titles?"

Results questions (most important — spend 60% of interview here):
- "What specific metrics have changed since go-live? Can you share numbers?"
- "Where do you see the biggest operational improvement day to day?"
- "Has Ramco affected your ability to win new business or retain customers?"
- "If you had to quantify the ROI in one sentence, what would you say?"

Future and reference questions:
- "What would you tell a peer 3PL who is evaluating Ramco?"
- "Would you be willing to speak to a prospect directly? What topics?"
- "Are there any results you are not comfortable sharing publicly?"

## Reference Program Structure

Tier A — Full Reference (most valuable)
Will do: live reference calls with prospects, co-present at events
Compensation: VIP event invitations, early access to new features, dedicated CSM
Target: 2 to 3 customers per region

Tier B — Passive Reference
Will do: written quote, case study, named on website
Will not do: live calls
Target: all published case study customers

Tier C — Anonymous Reference
Will do: approve case study with company name anonymized
Use when: customer has NDA or competitive sensitivity
Target: use for data-driven content when named case studies are limited

## CLAUDE PROMPTS FOR THIS SKILL

### Prompt 1 — Generate Full Case Study from Interview Notes
---PROMPT START---
You are a product marketing writer for Ramco Systems Logistics Software.
Read inputs/persona-definitions.md before writing.

Write a full customer case study from the following interview notes:

Customer company: [REPLACE]
Industry: Third-Party Logistics
Region: [REPLACE: AU / ID / SA / PH]
Primary contact title: [REPLACE: COO / CEO / CIO]
Modules implemented: [REPLACE: TMS / WMS / Fleet / combination]
Go-live date: [REPLACE]

Interview notes and key metrics:
[PASTE YOUR INTERVIEW NOTES AND METRICS HERE]

Deliver a complete case study in this exact structure:
- Headline: outcome-led, include a specific metric, max 15 words
- Customer intro: 2 sentences on who the company is (use interview notes)
- The challenge: 2 to 3 paragraphs on pain before Ramco
  — must feel real, not generic — use their specific words from the interview
- The solution: 2 paragraphs on why they chose Ramco and what was implemented
  — focus on what mattered to THEM, not a feature list
- The results: 3 to 5 specific metrics with before/after framing
  — format each as: "Before Ramco: X. After Ramco: Y. Improvement: Z%"
- Customer quote: 2 to 3 sentences, attributed to name and title
  — must sound like a real person, not a marketing line
- What is next: 1 paragraph on their future plans with Ramco
- CTA: "See how Ramco can transform your 3PL operations — book a demo"

Length: 1,200 to 1,500 words
Tone: factual, outcome-led, peer-level — not promotional
Rules:
- Every metric must be specific — no vague claims
- Use the customer's actual language where possible
- Never use: world-class, cutting-edge, revolutionary, game-changing
---PROMPT END---

### Prompt 2 — Generate One-Page Case Study Summary
---PROMPT START---
Read the full case study at: [PASTE FILE PATH OF FULL CASE STUDY]

Write a one-page summary version (max 400 words) for use in
sales meetings and as an event leave-behind.

Structure:
- Company name and logo placeholder [LOGO]
- 1-line company description
- The challenge (2 sentences)
- The Ramco solution (2 sentences — modules used)
- Results snapshot (3 to 5 metrics in a visual-friendly format):
  [METRIC NAME] [BEFORE] → [AFTER] [IMPROVEMENT %]
- Customer quote (1 to 2 sentences, attributed)
- Footer: ramco.com/logistics-software | Book a demo: [URL]

Tone: punchy, scannable, executive-ready
Must be readable in under 60 seconds.
---PROMPT END---

### Prompt 3 — Generate LinkedIn Post Version
---PROMPT START---
Read the full case study at: [PASTE FILE PATH]

Write a LinkedIn post to announce this case study publication.

Rules:
- Opening line: must stop the scroll — a specific metric or provocative question
- Body: 100 to 130 words telling the story in 4 to 5 short paragraphs
- No bullet points — this reads as a story, not a list
- Include: the problem, the Ramco solution (2 sentences), 2 key metrics
- End with a soft CTA: link to the full case study
- Hashtags: 3 max — #3PL #LogisticsTech #[Region]Logistics

Write 3 alternative opening lines for A/B testing on LinkedIn.
---PROMPT END---

## METRICS
| Metric | Target | Review |
|--------|--------|--------|
| Case studies published per year | 4 minimum (1 per quarter) | Quarterly |
| Case studies per region | 1 per priority region | Annual |
| Reference call conversion to deal progress | Above 70% | Per deal |
| Case study page views | Top 3 most visited resource pages | Monthly |
| Case study-assisted deals (HubSpot) | Track % closed won that consumed a case study | Quarterly |

## FAILURE MODES
Failure 1: Waiting for perfect metrics before starting
Result: No case studies produced. Pipeline lacks social proof.
Fix: Start with what you have. Even 1 metric is enough to build a story around.
Anonymous case studies are better than no case studies.

Failure 2: Case study reads like a product brochure
Result: Prospects can tell it was written by marketing. Credibility drops.
Fix: Use the customer's exact words from the interview. The more it sounds
like a real person talking, the more it converts.

Failure 3: Case study sits on the website but is never used in deals
Result: Asset created, no pipeline impact.
Fix: Upload to HubSpot Documents. AEs get a notification when prospects open it.
Create a HubSpot sequence that automatically sends the relevant case study
(by region and module) 2 days after a demo is booked.
