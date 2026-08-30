var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Variance to exec slides” use case. Scene text
    is typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated folder
    names — keep them where the sentence needs them. */}

<Copy k="title">Variance to exec slides</Copy>
<Copy k="subtitle">
  Reads the variance workbook and last quarter’s deck, writes the three
  board-ready slides.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the board-prep folder and describe the three slides you
  need.
</Copy>
<Copy k="menu.kind">Finance</Copy>
<Copy k="prompt">
  Build the three exec slides from the March variance workbook: headline,
  drivers with the one-timers called out, and outlook. Match last quarter’s
  layout and write the .pptx here.
</Copy>
<Copy k="scene1.folder">{folder} / March</Copy>

<Copy k="scene2.title">Cowork reads the workbook and template</Copy>
<Copy k="scene2.sub">
  It pulls the material drivers and lays them out in last quarter’s format.
</Copy>
<Copy k="work.heading">Working on exec slides</Copy>
<Copy k="step1">Reading variance-mar-2026.xlsx</Copy>
<Copy k="step2">Reading Q4-board-finance.pptx</Copy>
<Copy k="step3">Reading known-one-timers.md</Copy>
<Copy k="step4">Searching Google Drive for brand template</Copy>
<Copy k="step5">Building headline, drivers, outlook</Copy>
<Copy k="step6">Writing exec-slides-mar-2026.pptx</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read the variance workbook</Copy>
<Copy k="prog2">Read template and one-timers</Copy>
<Copy k="prog3">Pull brand assets from Drive</Copy>
<Copy k="prog4">Build the three slides</Copy>
<Copy k="prog5">Write .pptx to folder</Copy>

<Copy k="scene3.title">Three slides, on template</Copy>
<Copy k="scene3.sub">
  Headline, drivers, and outlook built from the numbers and saved back to
  the folder.
</Copy>
<Copy k="result1">
  {lead} March opex landed at $4.2M against a $4.1M plan — 2.4% over, driven
  by infrastructure timing. Revenue tracked to forecast.
</Copy>
<Copy k="result1.lead">Headline.</Copy>
<Copy k="result2">
  {lead} Cloud infrastructure +$84K (ingest pipeline live mid-month).
  Contractor spend −$42K, one-timer: two roles converted to FTE. Marketing
  −$38K, campaign slipped to April.
</Copy>
<Copy k="result2.lead">Drivers.</Copy>
<Copy k="result3">
  {lead} Infra run-rate carries into Q2 until reserved coverage catches up.
  April absorbs the campaign spend with no change to the full-year number.
</Copy>
<Copy k="result3.lead">Outlook.</Copy>
<Copy k="chip.name">March exec slides</Copy>
<Copy k="chip.meta">Presentation · PPTX · 1.8 MB</Copy>

<Copy k="scene4.title">Make it run every close</Copy>
<Copy k="scene4.sub">
  Schedule it once and the deck is built from whatever workbook is newest
  each month.
</Copy>
<Copy k="sched.prompt">
  On the 5th business day each month, build the three exec slides from the
  newest variance workbook in {folder}.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Exec variance slides</Copy>
<Copy k="card.body">
  Builds the headline / drivers / outlook .pptx from the newest variance
  workbook and writes it to the board-prep folder.
</Copy>
<Copy k="card.when">On the {time}, monthly</Copy>
<Copy k="card.when.time">5th business day</Copy>

<Copy k="end">
  Every close, the three board slides are in the folder before prep week
  starts.
</Copy>
`;export{e as default};