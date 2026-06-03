# Agent: Messaging and Positioning
Trigger command: "Run the messaging agent for [MODULE] in [REGION]"
Also: "Run the messaging audit"
Run when: Before any launch, quarterly for consistency audit

## Skill Files to Read First:
1. skills/product-marketing/skill-17-messaging-positioning-framework.md
2. inputs/persona-definitions.md
3. inputs/input.json

## TWO MODES:

MODE A — Generate Messaging Matrix
Trigger: "Run the messaging agent for [MODULE] in [REGION]"

STEP 1: Generate full messaging matrix using Prompt 1 from skill-17.
Save to strategy/messaging-matrix-[module]-[region]-[date].md

STEP 2: Generate website hero copy for this module using Prompt 3.
Save to campaigns/[module]-website-copy-[date].md

STEP 3: Check existing skill files for messaging alignment:
Read prompts/outbound/linkedin-sequence-coo.md
Check if outbound messages align with new messaging matrix.
Flag any misalignment and list which files need updating.

STEP 4: Print summary — messaging matrix location, key messages per persona,
files that need updating for alignment.

MODE B — Messaging Audit
Trigger: "Run the messaging audit"
Data needed: paste assets to audit (ads, emails, LinkedIn posts, web copy)

STEP 1: Run messaging audit using Prompt 2 from skill-17.
Save audit report to strategy/messaging-audit-[date].md

STEP 2: List every asset that scored below 7 with recommended rewrite.

STEP 3: Print audit summary — overall score, top 3 issues, priority fixes.

## Output Files:
Mode A: strategy/messaging-matrix-[module]-[region]-[date].md
         campaigns/[module]-website-copy-[date].md
Mode B: strategy/messaging-audit-[date].md
