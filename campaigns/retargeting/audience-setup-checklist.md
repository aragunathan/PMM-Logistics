# Retargeting Campaign — Pre-Launch Audience Setup Checklist
**Source skill:** `skills/acquisition/skill-11-retargeting-campaigns.md`
**Last updated:** 2026-03-23
**Status:** [ ] In progress / [ ] Complete — safe to launch

Complete every section below before activating any retargeting campaign.
Do not launch until all boxes in Section 9 are checked.

---

## SECTION 1: Google Tag Installation Verification

Go to: Google Ads → Tools → Measurement → Google Tag

- [ ] Google Ads global site tag (gtag.js) is installed in the `<head>` of every page on ramco.com
- [ ] Verify using Google Tag Assistant Chrome extension — open ramco.com and confirm tag fires on page load
- [ ] Tag fires on TMS page: ramco.com/products/logistics-software/transportation-management-tms/
- [ ] Tag fires on WMS page: ramco.com/products/logistics-software/warehouse-management-wms/
- [ ] Tag fires on the demo thank-you/confirmation page
- [ ] Tag fires on any gated asset thank-you page (report download confirmation)
- [ ] Conversion action "Demo Booking" is recording in Google Ads → Conversions (status: Active, not Unverified)
- [ ] Auto-tagging is enabled: Google Ads → Settings → Account Settings → Auto-tagging: ON

---

## SECTION 2: LinkedIn Insight Tag Installation Verification

Go to: LinkedIn Campaign Manager → Analyse → Insight Tag

- [ ] LinkedIn Insight Tag JavaScript snippet is installed in the `<head>` of every page on ramco.com
- [ ] Verify tag status in LinkedIn Campaign Manager → Analyse → Insight Tag → tag shows "Active" (green)
- [ ] Confirm domain ramco.com is listed under verified domains
- [ ] Tag is firing on TMS page (confirm via LinkedIn Insight Tag Helper Chrome extension)
- [ ] Tag is firing on WMS page
- [ ] Tag is firing on the demo thank-you page
- [ ] Tag is firing on any gated asset thank-you page
- [ ] LinkedIn conversion event "Demo Booking" is set up: Campaign Manager → Analyse → Conversion Tracking → status Active

---

## SECTION 3: Google Ads Audience Setup

Go to: Google Ads → Tools → Shared Library → Audience Manager → + New Audience → Website Visitors

### Audience G1: TMS Page Visitors — No Demo
- [ ] Audience created in Google Ads Audience Manager
- [ ] Name set to: `Ramco | TMS Page | No Demo | 90d`
- [ ] INCLUDE rule: URL contains `/transportation-management-tms`
- [ ] EXCLUDE rule: URL contains [your demo thank-you page URL]
- [ ] Membership duration set to: 90 days
- [ ] Audience status: Populating (allow 24–48 hours after tag install)

### Audience G2: WMS Page Visitors — No Demo
- [ ] Audience created in Google Ads Audience Manager
- [ ] Name set to: `Ramco | WMS Page | No Demo | 90d`
- [ ] INCLUDE rule: URL contains `/warehouse-management-wms`
- [ ] EXCLUDE rule: URL contains [your demo thank-you page URL]
- [ ] Membership duration set to: 90 days
- [ ] Audience status: Populating

### Audience G3: Report Downloaders — No Demo
- [ ] Audience created in Google Ads Audience Manager
- [ ] Name set to: `Ramco | Report Download | No Demo | 60d`
- [ ] INCLUDE rule: URL contains [your gated asset thank-you page URL — confirm exact URL with web team]
- [ ] EXCLUDE rule: URL contains [your demo thank-you page URL]
- [ ] Membership duration set to: 60 days
- [ ] Audience status: Populating

### Audience G4: All Product Page Visitors — No Demo
- [ ] Audience created in Google Ads Audience Manager
- [ ] Name set to: `Ramco | All Product Pages | No Demo | 30d`
- [ ] INCLUDE rule: URL contains `/products/logistics-software`
- [ ] EXCLUDE rule: URL contains [your demo thank-you page URL]
- [ ] Membership duration set to: 30 days
- [ ] Audience status: Populating

### Audience G5: Existing Customers — Exclusion Only
- [ ] Audience created in Google Ads Audience Manager
- [ ] Name set to: `Ramco | Existing Customers | Exclude`
- [ ] INCLUDE rule: URL contains [customer login or support portal URL — confirm with web team]
- [ ] Membership duration set to: 540 days
- [ ] **This audience is used as an EXCLUSION only — do not target it**
- [ ] Confirmed with team: customer portal URL is correct and active

---

## SECTION 4: LinkedIn Audience Setup

Go to: LinkedIn Campaign Manager → Plan → Audiences → + Create Audience

### Audience L1: TMS Page Visitors
- [ ] Audience created in LinkedIn Campaign Manager
- [ ] Name set to: `Ramco | TMS Page Visitors | 90d`
- [ ] Type: Website retargeting
- [ ] INCLUDE rule: People who visited URL contains `/transportation-management-tms`
- [ ] Lookback window: 90 days
- [ ] Audience size visible in LinkedIn (allow 48–72 hours to populate)

### Audience L2: WMS Page Visitors
- [ ] Audience created in LinkedIn Campaign Manager
- [ ] Name set to: `Ramco | WMS Page Visitors | 90d`
- [ ] Type: Website retargeting
- [ ] INCLUDE rule: People who visited URL contains `/warehouse-management-wms`
- [ ] Lookback window: 90 days
- [ ] Audience size visible in LinkedIn

### Audience L3: Report Downloaders
- [ ] Audience created in LinkedIn Campaign Manager
- [ ] Name set to: `Ramco | Report Downloaders | 60d`
- [ ] Type: Website retargeting
- [ ] INCLUDE rule: People who visited URL contains [your gated asset thank-you page URL]
- [ ] Lookback window: 60 days
- [ ] Audience size visible in LinkedIn

### Audience L4: All Product Page Visitors
- [ ] Audience created in LinkedIn Campaign Manager
- [ ] Name set to: `Ramco | All Product Pages | 30d`
- [ ] Type: Website retargeting
- [ ] INCLUDE rule: People who visited URL contains `/products/logistics-software`
- [ ] Lookback window: 30 days
- [ ] Audience size visible in LinkedIn

### Audience L5: Matched Accounts — TAL Upload
- [ ] Audience created in LinkedIn Campaign Manager
- [ ] Name set to: `Ramco | TAL Upload | Tier 1 + Tier 2`
- [ ] Type: Company list (Matched Audience)
- [ ] See Section 5 below for TAL upload instructions
- [ ] Match rate confirmed (LinkedIn shows estimated match count after upload)

---

## SECTION 5: TAL Upload Instructions (LinkedIn Matched Audiences)

Go to: LinkedIn Campaign Manager → Plan → Audiences → + Create Audience → Upload a list → Company list

- [ ] Export Tier 1 + Tier 2 target accounts from HubSpot or your ABM list
- [ ] Prepare CSV with exactly these two columns:
  - Column 1 header: `companyName`
  - Column 2 header: `companyWebsite`
- [ ] Minimum 300 companies in the file (LinkedIn requires this to activate)
- [ ] Remove any duplicate rows before uploading
- [ ] Upload CSV to LinkedIn — name the list: `Ramco | TAL Upload | Tier 1 + Tier 2`
- [ ] Wait 24–48 hours for LinkedIn to process and match the list
- [ ] Confirm match rate is shown in Audience Manager (typically 50–70% match rate)
- [ ] If match rate is below 40%: review company names and domain formatting — common issues are abbreviations and subdomain mismatches
- [ ] TAL audience is set to NARROW (not replace) all LinkedIn retargeting audiences in Campaigns LI1, LI2, LI3

---

## SECTION 6: Exclusion Audience Verification

Before any campaign goes live, confirm exclusions are applied correctly.

### Google Ads Exclusions
- [ ] Campaign GD1 (TMS): Audience G5 applied as exclusion ✓
- [ ] Campaign GD2 (WMS): Audience G5 applied as exclusion ✓
- [ ] Campaign GD3 (Report Downloaders): Audience G5 applied as exclusion ✓
- [ ] Campaign GD4 (All Product Pages): Audiences G1 + G2 + G3 + G5 applied as exclusions ✓
- [ ] All campaigns: Demo thank-you page visitors excluded (confirm via Audience Manager)

### LinkedIn Exclusions
- [ ] Campaign LI1: No exclusions needed — TAL narrowing handles ICP filtering
- [ ] Campaign LI2: No exclusions needed
- [ ] Campaign LI3: L1 + L2 + L3 applied as exclusions (these audiences have their own campaigns)
- [ ] All campaigns: LinkedIn Lead Gen Form submitters excluded (if using lead gen forms)

### Converted Audience Check
- [ ] Create a "Demo Booked" audience in Google Ads: URL contains [demo thank-you page URL], duration 90 days
- [ ] Apply this as an exclusion to all 4 Google Display campaigns
- [ ] In LinkedIn: exclude anyone who completed your demo conversion event
- [ ] Document the thank-you page URL here for future reference: ______________________

---

## SECTION 7: Minimum Audience Size Check

Run this check after waiting 2 weeks from tag installation.

Go to: Google Ads → Tools → Audience Manager → check each audience size
Go to: LinkedIn Campaign Manager → Plan → Audiences → check each audience size

### Google Ads Minimum: 1,000 users for Display Network

| Audience | Current Size | Ready? |
|----------|-------------|--------|
| G1 — TMS Page Visitors | ________ | [ ] Yes / [ ] No — wait |
| G2 — WMS Page Visitors | ________ | [ ] Yes / [ ] No — wait |
| G3 — Report Downloaders | ________ | [ ] Yes / [ ] No — wait |
| G4 — All Product Pages | ________ | [ ] Yes / [ ] No — wait |

### LinkedIn Minimum: 300 matched members

| Audience | Current Size | Ready? |
|----------|-------------|--------|
| L1 — TMS Page Visitors | ________ | [ ] Yes / [ ] No — wait |
| L2 — WMS Page Visitors | ________ | [ ] Yes / [ ] No — wait |
| L3 — Report Downloaders | ________ | [ ] Yes / [ ] No — wait |
| L4 — All Product Pages | ________ | [ ] Yes / [ ] No — wait |
| L5 — TAL Upload | ________ | [ ] Yes / [ ] No — re-upload |

**If an audience is below the minimum threshold:**
- Do NOT activate that campaign yet — Google and LinkedIn will restrict delivery
- Continue running Google Search (Skill 09) and LinkedIn outbound (Skill 02) to build traffic
- Re-check audience sizes weekly
- For LinkedIn L5: if below 300, add more companies to the TAL CSV and re-upload

---

## SECTION 8: HubSpot Source Tagging Verification

Every demo booked from a retargeting campaign must be tagged correctly in HubSpot.

- [ ] HubSpot is connected to Google Ads: HubSpot → Marketing → Ads → Google Ads account shows "Connected"
- [ ] HubSpot is connected to LinkedIn: HubSpot → Marketing → Ads → LinkedIn account shows "Connected"
- [ ] Auto-tagging confirmed ON in Google Ads (checked in Section 1)
- [ ] LinkedIn Insight Tag confirmed Active (checked in Section 2)
- [ ] Test: submit a demo form via a test Google Ads click → check the resulting HubSpot contact shows:
  - Original Source: Paid Search
  - Ad Campaign: [campaign name]
  - Ad Group: [ad group name]
- [ ] Test: submit a demo form via a test LinkedIn click → check the resulting HubSpot contact shows:
  - Original Source: Paid Social
  - Ad Campaign: [LinkedIn campaign name]
- [ ] HubSpot report built: Reports → Contacts → filter Original Source = Paid Search OR Paid Social → confirm data flowing
- [ ] Retargeting contacts will be distinguishable from cold search contacts by campaign name naming convention (all retargeting campaigns include the word "Retargeting" in their name)

---

## SECTION 9: Final Go / No-Go Decision

All boxes below must be checked before launching any retargeting campaign.

- [ ] Section 1 complete — Google Tag verified firing on all key pages
- [ ] Section 2 complete — LinkedIn Insight Tag verified Active
- [ ] Section 3 complete — all 5 Google audiences created with correct rules
- [ ] Section 4 complete — all 5 LinkedIn audiences created with correct rules
- [ ] Section 5 complete — TAL uploaded, match rate confirmed, audience active
- [ ] Section 6 complete — all exclusions applied and verified
- [ ] Section 7 complete — all audiences above minimum size thresholds
- [ ] Section 8 complete — HubSpot source tagging verified end-to-end
- [ ] Ad copy uploaded to each campaign (see `campaigns/retargeting/google-display-ad-sets.md` and `campaigns/retargeting/linkedin-retargeting-ad-sets.md`)
- [ ] Frequency caps set: Google Display max 3/day, LinkedIn max 4/week
- [ ] Landing pages verified — TMS audience → TMS page, WMS audience → WMS page

**GO / NO-GO:**
- All boxes checked → **GO — safe to launch**
- Any box unchecked → **NO-GO — resolve outstanding items first**

**Launch date:** ______________________
**Launched by:** ______________________
**Next review date (2 weeks post-launch):** ______________________
