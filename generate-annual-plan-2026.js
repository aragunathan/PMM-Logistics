const PptxGenJS = require("pptxgenjs");

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE"; // 13.33" x 7.5"

// ─── Brand colours ───────────────────────────────────────────────────────────
const C = {
  navy:    "0A1F44",
  blue:    "1565C0",
  cyan:    "00B0F0",
  white:   "FFFFFF",
  light:   "F0F4FA",
  grey:    "6B7A99",
  green:   "1B7B4E",
  red:     "C0392B",
  amber:   "D4841A",
  text:    "1A1A2E",
};

// ─── Shared helpers ──────────────────────────────────────────────────────────
function addBackground(slide, color = C.white) {
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: "100%",
    fill: { color },
    line: { color, width: 0 },
  });
}

function navyBar(slide, title, sub = "") {
  // left accent strip
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 0.18, h: 7.5,
    fill: { color: C.cyan }, line: { color: C.cyan, width: 0 },
  });
  // header bar
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.18, y: 0, w: 13.15, h: 1.05,
    fill: { color: C.navy }, line: { color: C.navy, width: 0 },
  });
  slide.addText(title, {
    x: 0.38, y: 0.1, w: 9, h: 0.6,
    fontSize: 22, bold: true, color: C.white, fontFace: "Calibri",
  });
  if (sub) {
    slide.addText(sub, {
      x: 0.38, y: 0.62, w: 9, h: 0.36,
      fontSize: 11, color: C.cyan, fontFace: "Calibri",
    });
  }
  // logo placeholder top-right
  slide.addText("RAMCO", {
    x: 10.8, y: 0.2, w: 2.3, h: 0.55,
    fontSize: 18, bold: true, color: C.cyan, fontFace: "Calibri",
    align: "right",
  });
}

function kpiBox(slide, label, value, unit, x, y, w = 2.9, h = 1.5, bg = C.navy) {
  slide.addShape(pptx.ShapeType.rect, {
    x, y, w, h,
    fill: { color: bg },
    line: { color: bg, width: 0 },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 45, color: "AAAAAA", opacity: 0.3 },
  });
  slide.addText(value, {
    x: x + 0.15, y: y + 0.15, w: w - 0.3, h: 0.75,
    fontSize: 28, bold: true, color: C.cyan, fontFace: "Calibri", align: "center",
  });
  if (unit) {
    slide.addText(unit, {
      x: x + 0.15, y: y + 0.7, w: w - 0.3, h: 0.3,
      fontSize: 11, color: C.cyan, fontFace: "Calibri", align: "center",
    });
  }
  slide.addText(label, {
    x: x + 0.12, y: y + h - 0.45, w: w - 0.24, h: 0.4,
    fontSize: 10, color: C.white, fontFace: "Calibri", align: "center",
  });
}

function sectionTag(slide, text, x, y) {
  slide.addShape(pptx.ShapeType.rect, {
    x, y, w: 2.2, h: 0.28,
    fill: { color: C.cyan }, line: { color: C.cyan, width: 0 },
  });
  slide.addText(text, {
    x, y, w: 2.2, h: 0.28,
    fontSize: 9, bold: true, color: C.navy, fontFace: "Calibri", align: "center",
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 1 — TITLE
// ─────────────────────────────────────────────────────────────────────────────
(function titleSlide() {
  const s = pptx.addSlide();
  addBackground(s, C.navy);

  // left cyan strip
  s.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 0.35, h: 7.5,
    fill: { color: C.cyan }, line: { color: C.cyan, width: 0 },
  });

  // diagonal accent
  s.addShape(pptx.ShapeType.rect, {
    x: 0.35, y: 4.8, w: 13, h: 2.7,
    fill: { color: "0D2B5E" }, line: { color: "0D2B5E", width: 0 },
  });

  s.addText("RAMCO LOGISTICS SOFTWARE", {
    x: 0.7, y: 0.9, w: 11, h: 0.55,
    fontSize: 15, bold: false, color: C.cyan, fontFace: "Calibri", charSpacing: 3,
  });
  s.addText("Annual Marketing Plan", {
    x: 0.7, y: 1.5, w: 11, h: 1.1,
    fontSize: 46, bold: true, color: C.white, fontFace: "Calibri",
  });
  s.addText("2026", {
    x: 0.7, y: 2.55, w: 4, h: 1.1,
    fontSize: 80, bold: true, color: C.cyan, fontFace: "Calibri",
  });

  s.addText([
    { text: "$40M TCV Pipeline  ·  ", options: { bold: true, color: C.cyan } },
    { text: "$110K Budget  ·  ", options: { bold: true, color: C.white } },
    { text: "ANZ · Indonesia · Saudi Arabia", options: { color: "AAAACC" } },
  ], {
    x: 0.7, y: 3.8, w: 11, h: 0.45, fontSize: 13, fontFace: "Calibri",
  });

  s.addText("Owner: Head of Marketing / PMM  |  Date: March 2026  |  Status: Active", {
    x: 0.7, y: 6.85, w: 11, h: 0.35,
    fontSize: 9, color: C.grey, fontFace: "Calibri",
  });
})();

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 2 — EXECUTIVE SUMMARY
// ─────────────────────────────────────────────────────────────────────────────
(function execSummary() {
  const s = pptx.addSlide();
  addBackground(s, C.light);
  navyBar(s, "Executive Summary", "CEO / Board Ready");

  // KPI row
  kpiBox(s, "Marketing Pipeline Target (35%)", "$14M",  "TCV",           0.38, 1.25);
  kpiBox(s, "Total Pipeline Target",           "$40M",  "TCV (all srcs)", 3.38, 1.25);
  kpiBox(s, "Marketing Budget",               "$110K",  "USD",           6.38, 1.25);
  kpiBox(s, "Opps Needed (mktg-sourced)",     "~19",    "at $750K TCV",  9.38, 1.25);

  // Divider
  s.addShape(pptx.ShapeType.line, {
    x: 0.38, y: 2.95, w: 12.57, h: 0,
    line: { color: C.cyan, width: 1.5 },
  });

  sectionTag(s, "CHANNEL STRATEGY", 0.38, 3.05);
  s.addText("60% Digital  ·  40% Events", {
    x: 2.7, y: 3.0, w: 10, h: 0.32,
    fontSize: 11, bold: true, color: C.navy, fontFace: "Calibri",
  });

  sectionTag(s, "TOP 5 INITIATIVES", 0.38, 3.5);

  const initiatives = [
    ["01", "Organic & Content Acceleration", "Double blog output · regional landing pages · ANZ keyword rankings → targets $12M TCV (30%)"],
    ["02", "ANZ Events & Roundtables",        "VTA · QTA · Transport & Logistics Expo · SCLAA → targets $16M TCV (40%)"],
    ["03", "Outbound Performance Fix",         "Fix domain auth (SPF/DKIM/DMARC) · rewrite sequences · lift open rate 5% → 25%+ by end Q1"],
    ["04", "Google Ads ANZ Launch",            "$22K allocated to high-intent TMS/WMS search · Q1 launch & learn · Q2 optimise → $6M TCV"],
    ["05", "Reference Programme",              "VISY Logistics (ANZ) + CKB Logistics (Indonesia) deployed across all channels from Q1"],
  ];

  initiatives.forEach(([num, title, body], i) => {
    const y = 3.9 + i * 0.62;
    slide_initiative_row(s, num, title, body, y);
  });

  function slide_initiative_row(sl, num, title, body, y) {
    sl.addShape(pptx.ShapeType.rect, {
      x: 0.38, y, w: 0.4, h: 0.52,
      fill: { color: C.blue }, line: { color: C.blue, width: 0 },
    });
    sl.addText(num, {
      x: 0.38, y, w: 0.4, h: 0.52,
      fontSize: 11, bold: true, color: C.white, fontFace: "Calibri", align: "center", valign: "middle",
    });
    sl.addText(title, {
      x: 0.85, y: y + 0.02, w: 3.2, h: 0.24,
      fontSize: 9.5, bold: true, color: C.navy, fontFace: "Calibri",
    });
    sl.addText(body, {
      x: 0.85, y: y + 0.26, w: 12.05, h: 0.24,
      fontSize: 8.5, color: C.grey, fontFace: "Calibri",
    });
  }
})();

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 3 — PIPELINE TARGETS
// ─────────────────────────────────────────────────────────────────────────────
(function pipelineSlide() {
  const s = pptx.addSlide();
  addBackground(s, C.white);
  navyBar(s, "Pipeline & Revenue Targets", "All figures in TCV · 5-year average contract");

  // BY REGION panel
  s.addShape(pptx.ShapeType.rect, {
    x: 0.38, y: 1.18, w: 5.9, h: 5.9,
    fill: { color: C.light }, line: { color: "DDEAF8", width: 1 },
  });
  sectionTag(s, "BY REGION", 0.38, 1.18);

  const regions = [
    { name: "ANZ (Australia + NZ)",   target: "$24M", pct: "60%", bar: 7.2, note: "Organic + Events + Outbound" },
    { name: "Indonesia & Asia",        target: "$10M", pct: "25%", bar: 3.0, note: "Outbound + Reference-led" },
    { name: "Saudi Arabia",            target: "$6M",  pct: "15%", bar: 1.8, note: "Events + Kanoo case study" },
  ];

  regions.forEach((r, i) => {
    const y = 1.65 + i * 1.75;
    s.addText(r.name, {
      x: 0.55, y, w: 3.5, h: 0.3,
      fontSize: 11, bold: true, color: C.navy, fontFace: "Calibri",
    });
    s.addText(r.note, {
      x: 0.55, y: y + 0.3, w: 5.5, h: 0.25,
      fontSize: 8.5, color: C.grey, fontFace: "Calibri",
    });
    // bar background
    s.addShape(pptx.ShapeType.rect, {
      x: 0.55, y: y + 0.62, w: 5.5, h: 0.32,
      fill: { color: "D0DCF0" }, line: { color: "D0DCF0", width: 0 },
    });
    // bar fill
    s.addShape(pptx.ShapeType.rect, {
      x: 0.55, y: y + 0.62, w: r.bar, h: 0.32,
      fill: { color: C.blue }, line: { color: C.blue, width: 0 },
    });
    s.addText(`${r.target} · ${r.pct}`, {
      x: 0.55, y: y + 1.0, w: 5.5, h: 0.28,
      fontSize: 11, bold: true, color: C.blue, fontFace: "Calibri",
    });
  });

  // BY CHANNEL panel
  s.addShape(pptx.ShapeType.rect, {
    x: 6.55, y: 1.18, w: 6.73, h: 5.9,
    fill: { color: C.light }, line: { color: "DDEAF8", width: 1 },
  });
  sectionTag(s, "BY CHANNEL", 6.55, 1.18);

  const channels = [
    { name: "Organic / SEO / Content",         tcv: "$12M", pct: "30%", opps: "~16", type: "Digital" },
    { name: "Google Ads (search + retargeting)", tcv: "$6M",  pct: "15%", opps: "~8",  type: "Digital" },
    { name: "Outbound (email + LinkedIn)",       tcv: "$4M",  pct: "10%", opps: "~5",  type: "Digital" },
    { name: "LinkedIn Paid",                     tcv: "$2M",  pct: "5%",  opps: "~3",  type: "Digital" },
    { name: "Events & Roundtables (ANZ)",        tcv: "$12M", pct: "30%", opps: "~16", type: "Events" },
    { name: "Events (SA + Indonesia)",           tcv: "$3M",  pct: "7.5%", opps: "~4", type: "Events" },
    { name: "Partnerships & Referrals",          tcv: "$1M",  pct: "2.5%", opps: "~2", type: "Events" },
  ];

  const rows = [
    ["Channel", "TCV", "% of Total", "Est. Opps"],
    ...channels.map(c => [c.name, c.tcv, c.pct, c.opps]),
  ];

  s.addTable(rows, {
    x: 6.65, y: 1.55, w: 6.55,
    rowH: 0.42,
    fontFace: "Calibri",
    fontSize: 9,
    color: C.text,
    border: { type: "solid", color: "D0DCF0", pt: 0.5 },
    colW: [2.9, 0.9, 1.0, 0.9],
    fill: { color: C.white },
    autoPage: false,
  });

  // colour header row
  // (pptxgenjs colours header via the first row styles)
  // We'll overlay a rect
  s.addShape(pptx.ShapeType.rect, {
    x: 6.65, y: 1.55, w: 6.55, h: 0.42,
    fill: { color: C.navy }, line: { color: C.navy, width: 0 },
  });
  ["Channel", "TCV", "% of Total", "Est. Opps"].forEach((h, i) => {
    const xs = [6.68, 9.58, 10.48, 11.48];
    s.addText(h, {
      x: xs[i], y: 1.58, w: [2.85, 0.85, 0.95, 0.88][i], h: 0.36,
      fontSize: 9, bold: true, color: C.white, fontFace: "Calibri",
    });
  });

  // re-draw data rows cleanly
  channels.forEach((c, i) => {
    const y = 1.98 + i * 0.42;
    const bg = i % 2 === 0 ? C.white : "EEF3FB";
    const typeBg = c.type === "Digital" ? "1565C0" : "1B7B4E";
    s.addShape(pptx.ShapeType.rect, {
      x: 6.65, y, w: 6.55, h: 0.42,
      fill: { color: bg }, line: { color: "D0DCF0", width: 0.5 },
    });
    s.addText(c.name, { x: 6.68, y: y + 0.08, w: 2.82, h: 0.28, fontSize: 8.5, color: C.text, fontFace: "Calibri" });
    s.addText(c.tcv,  { x: 9.58, y: y + 0.08, w: 0.85, h: 0.28, fontSize: 9,   color: C.blue,  fontFace: "Calibri", bold: true });
    s.addText(c.pct,  { x: 10.5, y: y + 0.08, w: 0.85, h: 0.28, fontSize: 8.5, color: C.grey,  fontFace: "Calibri" });
    s.addText(c.opps, { x: 11.5, y: y + 0.08, w: 0.85, h: 0.28, fontSize: 8.5, color: C.text,  fontFace: "Calibri" });
    // type badge
    s.addShape(pptx.ShapeType.rect, {
      x: 12.4, y: y + 0.1, w: 0.72, h: 0.24,
      fill: { color: typeBg }, line: { color: typeBg, width: 0 },
    });
    s.addText(c.type, {
      x: 12.4, y: y + 0.1, w: 0.72, h: 0.24,
      fontSize: 7, bold: true, color: C.white, fontFace: "Calibri", align: "center",
    });
  });
})();

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 4 — 2025 PERFORMANCE + SWOT
// ─────────────────────────────────────────────────────────────────────────────
(function situationSlide() {
  const s = pptx.addSlide();
  addBackground(s, C.white);
  navyBar(s, "Situation Analysis", "2025 Performance Review + SWOT");

  // 2025 numbers
  sectionTag(s, "2025 ACTUALS", 0.38, 1.18);

  const metrics = [
    { label: "Total Pipeline", val: "$19M", icon: "▲" },
    { label: "Closed Won",     val: "$2.5M", icon: "✓" },
    { label: "Closed Lost",    val: "$10M",  icon: "✗" },
    { label: "Active Pipeline", val: "$6.5M", icon: "→" },
  ];

  metrics.forEach((m, i) => {
    const x = 0.38 + i * 3.1;
    kpiBox(s, m.label, m.val, m.icon, x, 1.55, 2.85, 1.35, i === 2 ? C.red : C.navy);
  });

  // insight strip
  s.addShape(pptx.ShapeType.rect, {
    x: 0.38, y: 3.0, w: 12.57, h: 0.62,
    fill: { color: "FFF7E6" }, line: { color: C.amber, width: 1 },
  });
  s.addText("⚠  Key insight: Win rate = 20% on decided deals. $10M lost — primary reason: price. Value story must precede commercial conversations. Email outbound at 5% open rate (benchmark 25%+) — fixable technical problem.", {
    x: 0.55, y: 3.07, w: 12.2, h: 0.48,
    fontSize: 9, color: "6B4000", fontFace: "Calibri", wrap: true,
  });

  // SWOT
  const swotY = 3.75;
  const swotItems = [
    {
      label: "STRENGTHS", bg: "1B7B4E", items: [
        "Only integrated 3PL platform: TMS + WMS + Fleet + Hub + Billing",
        "Referenceable customers: VISY (ANZ) · CKB (Indonesia) · Kanoo (SA)",
        "Organic search already working in ANZ — compound advantage",
        "HubSpot with live source tracking configured",
      ],
    },
    {
      label: "WEAKNESSES", bg: C.red, items: [
        "Email open rate at 5% — SPF/DKIM/DMARC fix required immediately",
        "No Bahasa or Arabic content — competitor gap unfilled",
        "VISY case study not yet published — highest-leverage ANZ asset",
        "Price is #1 loss reason — ROI framing missing pre-commercial",
      ],
    },
    {
      label: "OPPORTUNITIES", bg: C.blue, items: [
        "TMS platform launch (Q2) — a genuine campaign moment",
        "CoR compliance in ANZ — buying trigger competitors not addressing",
        "Vision 2030 in Saudi Arabia — strategic hook for campaigns",
        "AI in logistics — emerging thought leadership angle Q3/Q4",
      ],
    },
    {
      label: "THREATS", bg: "6B4000", items: [
        "CargoWise expanding beyond freight forwarding in ANZ",
        "Oracle / SAP increasing SMB / mid-market focus",
        "In-house tech builds by large family-owned 3PLs in Indonesia",
        "ZATCA-compliant local vendors undercutting on price in SA",
      ],
    },
  ];

  swotItems.forEach((q, i) => {
    const x = 0.38 + i * 3.18;
    s.addShape(pptx.ShapeType.rect, {
      x, y: swotY, w: 3.1, h: 0.32,
      fill: { color: q.bg }, line: { color: q.bg, width: 0 },
    });
    s.addText(q.label, {
      x, y: swotY, w: 3.1, h: 0.32,
      fontSize: 9, bold: true, color: C.white, fontFace: "Calibri", align: "center",
    });
    q.items.forEach((item, j) => {
      const iy = swotY + 0.38 + j * 0.72;
      s.addShape(pptx.ShapeType.rect, {
        x, y: iy, w: 3.1, h: 0.66,
        fill: { color: j % 2 === 0 ? C.light : C.white },
        line: { color: "D0DCF0", width: 0.5 },
      });
      s.addText(`• ${item}`, {
        x: x + 0.1, y: iy + 0.06, w: 2.9, h: 0.58,
        fontSize: 8, color: C.text, fontFace: "Calibri", wrap: true,
      });
    });
  });
})();

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 5 — QUARTERLY ROADMAP
// ─────────────────────────────────────────────────────────────────────────────
(function roadmapSlide() {
  const s = pptx.addSlide();
  addBackground(s, C.light);
  navyBar(s, "Quarterly Roadmap 2026", "Key milestones and programme sequencing");

  const quarters = [
    {
      q: "Q1", sub: "Jan – Mar", color: C.blue,
      focus: "Fix foundations",
      items: [
        "Fix email domain auth (SPF/DKIM/DMARC)",
        "Email open rate → 15%+",
        "Launch Google Ads ANZ",
        "Publish VISY case study",
        "Build AU regional landing pages",
        "Establish baseline analytics",
      ],
    },
    {
      q: "Q2", sub: "Apr – Jun", color: C.green,
      focus: "Launch & scale",
      items: [
        "TMS platform launch campaign",
        "2 ANZ roundtable events",
        "ROI calculator live on ramco.com",
        "LinkedIn organic → 4 posts/week",
        "Google Ads optimise & expand",
        "Mid-year pipeline review",
      ],
    },
    {
      q: "Q3", sub: "Jul – Sep", color: C.amber,
      focus: "Regional expansion",
      items: [
        "Indonesia content + outbound expansion",
        "CKB Logistics case study activation",
        "Saudi Arabia light-touch campaigns",
        "Philippines market assessment",
        "AI in logistics thought leadership",
        "LinkedIn followers mid-year audit",
      ],
    },
    {
      q: "Q4", sub: "Oct – Dec", color: "8E44AD",
      focus: "Close & plan",
      items: [
        "Year-end demo push (direct + retargeting)",
        "Keyword audit + refresh",
        "H2 pipeline close support",
        "2027 annual plan draft",
        "Events debrief + 2027 calendar lock",
        "Win/loss analysis — price objections",
      ],
    },
  ];

  quarters.forEach((q, i) => {
    const x = 0.38 + i * 3.22;
    const y = 1.2;

    // Q header
    s.addShape(pptx.ShapeType.rect, {
      x, y, w: 3.1, h: 0.58,
      fill: { color: q.color }, line: { color: q.color, width: 0 },
    });
    s.addText(`${q.q}  ${q.sub}`, {
      x: x + 0.1, y: y + 0.02, w: 2.9, h: 0.3,
      fontSize: 13, bold: true, color: C.white, fontFace: "Calibri",
    });
    s.addText(q.focus.toUpperCase(), {
      x: x + 0.1, y: y + 0.3, w: 2.9, h: 0.24,
      fontSize: 8, color: "DDEEFF", fontFace: "Calibri", charSpacing: 1.5,
    });

    // items
    q.items.forEach((item, j) => {
      const iy = y + 0.62 + j * 0.87;
      s.addShape(pptx.ShapeType.rect, {
        x, y: iy, w: 3.1, h: 0.82,
        fill: { color: j % 2 === 0 ? C.white : "EEF3FB" },
        line: { color: "D0DCF0", width: 0.5 },
      });
      // bullet dot
      s.addShape(pptx.ShapeType.ellipse, {
        x: x + 0.12, y: iy + 0.28, w: 0.1, h: 0.1,
        fill: { color: q.color }, line: { color: q.color, width: 0 },
      });
      s.addText(item, {
        x: x + 0.28, y: iy + 0.1, w: 2.7, h: 0.65,
        fontSize: 8.5, color: C.text, fontFace: "Calibri", wrap: true,
      });
    });
  });

  // bottom note
  s.addText("Target: 19 marketing-sourced qualified opportunities across the year  ·  Win rate target: 20% → 25% by Q4", {
    x: 0.38, y: 7.1, w: 12.57, h: 0.28,
    fontSize: 8.5, color: C.grey, fontFace: "Calibri", align: "center",
  });
})();

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 6 — BUDGET ALLOCATION
// ─────────────────────────────────────────────────────────────────────────────
(function budgetSlide() {
  const s = pptx.addSlide();
  addBackground(s, C.white);
  navyBar(s, "Budget Allocation 2026", "Total: $110,000 USD · Every dollar tied to pipeline");

  // budget items
  const budgetLines = [
    { cat: "Google Ads — ANZ Search",          q1: 5500,  q2: 5500,  q3: 3500,  q4: 3500,  color: C.blue },
    { cat: "Google Ads — Retargeting",         q1: 1000,  q2: 1500,  q3: 1500,  q4: 1000,  color: C.blue },
    { cat: "LinkedIn Paid",                    q1: 2000,  q2: 3000,  q3: 2500,  q4: 2500,  color: "0A66C2" },
    { cat: "Events — ANZ (VTA, QTA, T&L, SCLAA)", q1: 5000, q2: 15000, q3: 5000, q4: 5000, color: C.green },
    { cat: "Events — Saudi Arabia",            q1: 8000,  q2: 0,     q3: 3000,  q4: 0,     color: "1B7B4E" },
    { cat: "Events — Indonesia",               q1: 0,     q2: 0,     q3: 5000,  q4: 0,     color: "1B7B4E" },
    { cat: "Content Production",               q1: 3000,  q2: 3000,  q3: 3500,  q4: 3000,  color: "6B2FA0" },
    { cat: "Tools & Tech (HubSpot etc.)",      q1: 2500,  q2: 2500,  q3: 2500,  q4: 2500,  color: C.grey },
    { cat: "Design & Creative",                q1: 2000,  q2: 2000,  q3: 1500,  q4: 1500,  color: C.grey },
    { cat: "Contingency",                      q1: 1500,  q2: 1500,  q3: 1500,  q4: 1500,  color: C.amber },
  ];

  const cols = ["Budget Category", "Q1", "Q2", "Q3", "Q4", "Total"];
  const colW = [4.0, 1.5, 1.5, 1.5, 1.5, 1.5];
  const startX = 0.38;
  const headerY = 1.2;

  // Header
  s.addShape(pptx.ShapeType.rect, {
    x: startX, y: headerY, w: 11.5, h: 0.38,
    fill: { color: C.navy }, line: { color: C.navy, width: 0 },
  });
  let cx = startX + 0.08;
  cols.forEach((col, i) => {
    s.addText(col, {
      x: cx, y: headerY + 0.05, w: colW[i], h: 0.28,
      fontSize: 9, bold: true, color: C.white, fontFace: "Calibri",
    });
    cx += colW[i];
  });

  budgetLines.forEach((row, ri) => {
    const y = headerY + 0.38 + ri * 0.44;
    const total = row.q1 + row.q2 + row.q3 + row.q4;
    const bg = ri % 2 === 0 ? C.light : C.white;

    s.addShape(pptx.ShapeType.rect, {
      x: startX, y, w: 11.5, h: 0.44,
      fill: { color: bg }, line: { color: "D0DCF0", width: 0.5 },
    });

    // colour category dot
    s.addShape(pptx.ShapeType.ellipse, {
      x: startX + 0.08, y: y + 0.17, w: 0.1, h: 0.1,
      fill: { color: row.color }, line: { color: row.color, width: 0 },
    });
    s.addText(row.cat, {
      x: startX + 0.23, y: y + 0.09, w: 3.75, h: 0.28,
      fontSize: 8.5, color: C.text, fontFace: "Calibri",
    });

    [row.q1, row.q2, row.q3, row.q4, total].forEach((val, ci) => {
      const vx = startX + 4.0 + 0.08 + ci * 1.5;
      const fmt = val === 0 ? "—" : `$${val.toLocaleString()}`;
      s.addText(fmt, {
        x: vx, y: y + 0.09, w: 1.42, h: 0.28,
        fontSize: 8.5, color: ci === 4 ? C.blue : C.text, bold: ci === 4,
        fontFace: "Calibri",
      });
    });
  });

  // Total row
  const totalY = headerY + 0.38 + budgetLines.length * 0.44;
  const totals = [0, 0, 0, 0];
  budgetLines.forEach(r => {
    totals[0] += r.q1; totals[1] += r.q2; totals[2] += r.q3; totals[3] += r.q4;
  });
  const grandTotal = totals.reduce((a, b) => a + b, 0);

  s.addShape(pptx.ShapeType.rect, {
    x: startX, y: totalY, w: 11.5, h: 0.42,
    fill: { color: C.navy }, line: { color: C.navy, width: 0 },
  });
  s.addText("TOTAL", {
    x: startX + 0.08, y: totalY + 0.08, w: 4, h: 0.28,
    fontSize: 9, bold: true, color: C.white, fontFace: "Calibri",
  });
  [...totals, grandTotal].forEach((val, ci) => {
    s.addText(`$${val.toLocaleString()}`, {
      x: startX + 4.0 + 0.08 + ci * 1.5, y: totalY + 0.08, w: 1.42, h: 0.28,
      fontSize: 9, bold: true, color: ci === 4 ? C.cyan : C.white, fontFace: "Calibri",
    });
  });

  // note
  s.addText("⚠  No agency retainers · No broad awareness spend · No large sponsorships — every line item justified by expected pipeline.", {
    x: startX, y: totalY + 0.55, w: 11.5, h: 0.28,
    fontSize: 8.5, color: C.amber, fontFace: "Calibri",
  });
})();

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 7 — BRAND VISIBILITY KPIs
// ─────────────────────────────────────────────────────────────────────────────
(function kpiSlide() {
  const s = pptx.addSlide();
  addBackground(s, C.light);
  navyBar(s, "Brand Visibility KPIs 2026", "Measured quarterly in HubSpot + GA4 + LinkedIn Analytics");

  const metrics = [
    { label: "Organic Sessions/mo (ANZ)",     base: "Establish Q1",  target: "+40% by Q4",    tool: "GA4", color: C.blue },
    { label: "LinkedIn Followers",             base: "Establish Q1",  target: "+50% YoY",       tool: "LinkedIn", color: "0A66C2" },
    { label: "LinkedIn Post Impressions/mo",   base: "Establish Q1",  target: "+100% YoY",      tool: "LinkedIn", color: "0A66C2" },
    { label: "Events Attended / Sponsored",    base: "~4 in 2025",    target: "6 in 2026",      tool: "Internal", color: C.green },
    { label: "Speaking Slots (ANZ focus)",     base: "Unknown",       target: "2 minimum",      tool: "Internal", color: C.green },
    { label: "Industry Mentions (AU press)",   base: "Unknown",       target: "4 per year",     tool: "Google Alerts", color: C.grey },
    { label: "Email Open Rate",                base: "5% (critical)", target: "25%+ by Q2",     tool: "HubSpot", color: C.red },
    { label: "Win Rate (decided deals)",       base: "20%",           target: "25% by Q4",      tool: "HubSpot", color: C.amber },
  ];

  metrics.forEach((m, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const x = 0.38 + col * 3.18;
    const y = 1.25 + row * 2.7;

    s.addShape(pptx.ShapeType.rect, {
      x, y, w: 3.05, h: 2.5,
      fill: { color: C.white },
      line: { color: "D0DCF0", width: 1 },
      shadow: { type: "outer", blur: 5, offset: 2, angle: 45, color: "BBBBBB", opacity: 0.2 },
    });
    // top colour bar
    s.addShape(pptx.ShapeType.rect, {
      x, y, w: 3.05, h: 0.18,
      fill: { color: m.color }, line: { color: m.color, width: 0 },
    });
    s.addText(m.label, {
      x: x + 0.15, y: y + 0.22, w: 2.75, h: 0.55,
      fontSize: 10, bold: true, color: C.navy, fontFace: "Calibri", wrap: true,
    });
    s.addText("BASELINE", {
      x: x + 0.15, y: y + 0.82, w: 1.2, h: 0.22,
      fontSize: 7, bold: true, color: C.grey, fontFace: "Calibri", charSpacing: 1,
    });
    s.addText(m.base, {
      x: x + 0.15, y: y + 1.0, w: 2.75, h: 0.32,
      fontSize: 9, color: C.grey, fontFace: "Calibri",
    });
    s.addText("2026 TARGET", {
      x: x + 0.15, y: y + 1.4, w: 1.6, h: 0.22,
      fontSize: 7, bold: true, color: m.color, fontFace: "Calibri", charSpacing: 1,
    });
    s.addText(m.target, {
      x: x + 0.15, y: y + 1.62, w: 2.75, h: 0.35,
      fontSize: 11, bold: true, color: m.color, fontFace: "Calibri",
    });
    s.addText(m.tool, {
      x: x + 0.15, y: y + 2.2, w: 2.75, h: 0.22,
      fontSize: 7.5, color: C.grey, fontFace: "Calibri", italic: true,
    });
  });
})();

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE 8 — CLOSING / CALL TO ACTION
// ─────────────────────────────────────────────────────────────────────────────
(function closingSlide() {
  const s = pptx.addSlide();
  addBackground(s, C.navy);

  s.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 0.35, h: 7.5,
    fill: { color: C.cyan }, line: { color: C.cyan, width: 0 },
  });
  s.addShape(pptx.ShapeType.rect, {
    x: 0.35, y: 5.2, w: 13, h: 2.3,
    fill: { color: "0D2B5E" }, line: { color: "0D2B5E", width: 0 },
  });

  s.addText("2026 PLAN — APPROVAL CHECKLIST", {
    x: 0.7, y: 0.7, w: 11, h: 0.4,
    fontSize: 12, bold: false, color: C.cyan, fontFace: "Calibri", charSpacing: 2,
  });
  s.addText("Three things needed\nto start the clock", {
    x: 0.7, y: 1.15, w: 9, h: 1.2,
    fontSize: 36, bold: true, color: C.white, fontFace: "Calibri",
  });

  const actions = [
    { n: "01", text: "Confirm $110K budget and quarterly release schedule" },
    { n: "02", text: "Unblock VISY case study — approve draft by end of March" },
    { n: "03", text: "Approve Google Ads ANZ brief to go live Q1" },
  ];

  actions.forEach((a, i) => {
    const y = 2.6 + i * 0.82;
    s.addShape(pptx.ShapeType.rect, {
      x: 0.7, y, w: 0.45, h: 0.62,
      fill: { color: C.cyan }, line: { color: C.cyan, width: 0 },
    });
    s.addText(a.n, {
      x: 0.7, y, w: 0.45, h: 0.62,
      fontSize: 13, bold: true, color: C.navy, fontFace: "Calibri", align: "center", valign: "middle",
    });
    s.addText(a.text, {
      x: 1.25, y: y + 0.12, w: 10.5, h: 0.4,
      fontSize: 14, color: C.white, fontFace: "Calibri",
    });
  });

  s.addText("ramco.com/products/logistics-software/", {
    x: 0.7, y: 5.5, w: 11, h: 0.38,
    fontSize: 11, color: C.cyan, fontFace: "Calibri",
  });
  s.addText("Questions: Head of Marketing / PMM  |  Tracking: HubSpot  |  Next review: End of Q1 2026", {
    x: 0.7, y: 6.85, w: 11.5, h: 0.3,
    fontSize: 8.5, color: C.grey, fontFace: "Calibri",
  });
})();

// ─────────────────────────────────────────────────────────────────────────────
// WRITE FILE
// ─────────────────────────────────────────────────────────────────────────────
const outputPath = "strategy/annual-plan-2026.pptx";
pptx.writeFile({ fileName: outputPath })
  .then(() => console.log(`✓  Saved: ${outputPath}`))
  .catch(err => { console.error("Error:", err); process.exit(1); });
