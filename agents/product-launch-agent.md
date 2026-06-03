# Agent: Product Launch
Trigger command: "Run the product launch agent for [MODULE] — [LAUNCH TYPE]"
Run when: 8 to 12 weeks before a product launch or repositioning go-live

## Skill Files to Read First (in this order):
1. skills/product-marketing/skill-17-messaging-positioning-framework.md
2. skills/product-marketing/skill-14-product-launch-playbook.md
3. skills/product-marketing/skill-16-sales-battlecard-system.md
4. inputs/persona-definitions.md
5. inputs/input.json

## Data to Provide After Trigger:
- Module being launched or repositioned
- Launch type (Major / Feature / Repositioning)
- Launch date
- What is new or changing
- Primary target region(s)
- Primary persona for this launch

## Workflow — Run All Steps Without Pausing:

STEP 1 — Positioning check
Read skill-17 and confirm the messaging house is current.
If no messaging matrix exists for this module, generate one using Prompt 1
from skill-17 and save to strategy/messaging-matrix-[module]-[date].md

STEP 2 — Launch plan
Generate complete launch plan using Prompt 1 from skill-14.
Save to campaigns/launches/[module]-[date]-launch-plan.md

STEP 3 — Asset production
For a Repositioning launch (TMS priority):
- Generate TMS repositioning brief (Prompt 2 from skill-14)
  Save to strategy/tms-repositioning-brief.md
- Generate new website hero copy (Prompt 3 from skill-17)
  Save to campaigns/launches/[module]-[date]-website-copy.md
- Generate refreshed ad copy using skill-10 prompt
  Save to campaigns/google-ads/[module]-[region]-ads-updated.md

STEP 4 — Sales enablement
Generate internal sales launch email (Prompt 3 from skill-14)
Save to campaigns/launches/[module]-[date]-sales-launch-email.md

STEP 5 — Pre-launch checklist
Generate go/no-go checklist using the pre-launch checklist from skill-14.
Save to campaigns/launches/[module]-[date]-launch-checklist.md

STEP 6 — Summary
Print:
- Launch type and module
- Go-live date
- Assets created (list with file paths)
- Pre-launch checklist location
- 3 most important things to do this week

## Output Files:
- campaigns/launches/[module]-[date]-launch-plan.md
- strategy/tms-repositioning-brief.md (if TMS repositioning)
- campaigns/launches/[module]-[date]-website-copy.md
- campaigns/launches/[module]-[date]-sales-launch-email.md
- campaigns/launches/[module]-[date]-launch-checklist.md
