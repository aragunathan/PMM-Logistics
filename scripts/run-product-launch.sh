#!/bin/bash
# Usage: ./scripts/run-product-launch.sh "Module" "Launch Type" "Date"
# Example: ./scripts/run-product-launch.sh "TMS" "Repositioning" "October 2025"

MODULE=$1
TYPE=$2
DATE=$3

echo "Running product launch agent for $MODULE — $TYPE..."
cd ~/Documents/Logistics-marketing

claude -p "
Read CLAUDE.md and agents/product-launch-agent.md.
Read all skill files listed in the agent file.

Run the product launch agent for $MODULE — $TYPE.
Launch date: $DATE
Primary region: Australia and Saudi Arabia
Primary persona: COO

Execute all workflow steps and save all output files.
"
echo "Done. Check campaigns/launches/ for output files."
