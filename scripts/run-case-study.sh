#!/bin/bash
# Usage: ./scripts/run-case-study.sh "Customer Name" "Region"

CUSTOMER=$1
REGION=$2
SLUG=$(echo $CUSTOMER | tr ' ' '-' | tr '[:upper:]' '[:lower:]')

echo "Running case study agent for $CUSTOMER in $REGION..."
cd ~/Documents/Logistics-marketing

claude -p "
Read CLAUDE.md and agents/case-study-agent.md.
Run the case study agent for $CUSTOMER in $REGION.
Research the customer using publicly available information.
Score the candidate and if above 40, produce all case study assets.
Save all files to campaigns/case-studies/$SLUG/
"
echo "Done. Check campaigns/case-studies/$SLUG/ for output files."
