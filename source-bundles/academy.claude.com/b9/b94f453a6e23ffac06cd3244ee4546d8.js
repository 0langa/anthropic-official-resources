var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ArtifactKinds.tsx: a picker of the six kinds of
    artifact (Docs, Slides, Design, Dashboard, Motion, Custom; Dashboard and
    Motion carry the product's "Beta" tag), two lines of text about the
    picked kind, and that kind open in Claude's artifact pane. The pane
    depicts the product: its header with the Share sheet, the Slides editor's
    toolbar with a Download menu and Present mode, a comment thread Claude
    answers, a doc, three phone screens on a design canvas, a small dashboard
    whose charts open the query behind them, the Motion player with its Tweaks
    and Style panel, and a team tracker.
    Keys are machine identifiers; translate ONLY the text between the tags.
    \`{name}\` tokens are runtime placeholders and must survive verbatim:
    \`{org}\` is a made-up company's name (Halden), \`{current}\` / \`{total}\`
    are slide counters, \`{done}\` / \`{total}\` count the tracker's tasks.
    Product labels (Slides, Design, Docs, Dashboard, Motion, Beta, Share,
    Export, Present, Sources, Tweaks, Style) should match the localized
    claude.ai product where one exists. Initials and numbers stay in the
    widget. */}

<Copy k="kinds.aria">Kinds of artifact</Copy>

{/* The product's gray pill after a kind that is still in beta (Dashboard, Motion). */}
<Copy k="kind.beta">Beta</Copy>

{/* The two lines under the picker.
    \`get.line\` is the first: the product's name for the kind with its colon, in bold, then what it is (\`kind.*.name\`, \`kind.*.get\`). Keep {name} and {what}.
    The six \`get\` lines are one pattern, a noun phrase with no capital and a period, and each fits two lines at the article's width (about 190 characters with its name).
    \`eg.line\` is the second: a quiet lead-in, then \`kind.*.ask\` in italics, a request that would get the picture under it. Keep {ask}. */}
<Copy k="get.line">{name} {what}</Copy>
<Copy k="eg.line">Try asking: “{ask}”</Copy>

{/* For each kind: \`label\` is its name in the picker, \`name\`, \`get\` and \`ask\` fill the two lines, and \`title\` is the artifact's title in the pane's header. */}
<Copy k="kind.docs.label">Docs</Copy>
<Copy k="kind.docs.name">Claude Docs:</Copy>
<Copy k="kind.docs.get">a document that you, your teammates, and Claude all write in at the same time.</Copy>
<Copy k="kind.docs.ask">Draft a one-page brief on the Q3 numbers for our stakeholders.</Copy>
<Copy k="kind.docs.title">Q3 stakeholder brief</Copy>

<Copy k="kind.slides.label">Slides</Copy>
<Copy k="kind.slides.name">Claude Slides:</Copy>
<Copy k="kind.slides.get">a deck built from your conversation, to edit slide by slide and present from inside Claude.</Copy>
<Copy k="kind.slides.ask">Make a deck from the Q3 numbers for the board meeting.</Copy>
<Copy k="kind.slides.title">Q3 board pre-read</Copy>

<Copy k="kind.design.label">Design</Copy>
<Copy k="kind.design.name">Claude Design:</Copy>
<Copy k="kind.design.get">a design or clickable prototype you edit by hand.</Copy>
<Copy k="kind.design.ask">Mock up the sign-up flow as three phone screens.</Copy>
<Copy k="kind.design.title">New-tier signup flow</Copy>

<Copy k="kind.dashboard.label">Dashboard</Copy>
<Copy k="kind.dashboard.name">Claude Dashboards:</Copy>
<Copy k="kind.dashboard.get">charts and numbers that stay current as your data changes.</Copy>
<Copy k="kind.dashboard.ask">Build a dashboard of Q3 revenue and churn.</Copy>
<Copy k="kind.dashboard.title">Q3 revenue review</Copy>

<Copy k="kind.motion.label">Motion</Copy>
<Copy k="kind.motion.name">Claude Motion:</Copy>
<Copy k="kind.motion.get">an animated explainer, chart, or product walkthrough.</Copy>
<Copy k="kind.motion.ask">Animate the Q3 drop in churn for the all-hands.</Copy>
<Copy k="kind.motion.title">Q3 churn, animated</Copy>

<Copy k="kind.custom.label">Custom</Copy>
<Copy k="kind.custom.name">Custom artifact:</Copy>
<Copy k="kind.custom.get">an interactive page built for your request, like a tracker or a planner, to share with your team.</Copy>
<Copy k="kind.custom.ask">Build a tracker for my team’s weekly priorities.</Copy>
<Copy k="kind.custom.title">This week</Copy>
<Copy k="kind.custom.alt">A team tracker titled This week: tasks listed by day, each with a checkbox and its owner, and three of nine checked off</Copy>

{/* The pane's header. \`drawer.saving\` is the tooltip and accessible name of the dot beside the title while a save is in flight; no visible words. */}
<Copy k="drawer.saving">Saving…</Copy>
<Copy k="drawer.comment">Comment</Copy>
<Copy k="panel.close">Close the panel</Copy>

<Copy k="share.title">Share</Copy>
<Copy k="share.export">Export</Copy>
<Copy k="share.access">General access</Copy>
<Copy k="share.invited">Only people invited</Copy>
<Copy k="share.org">Anyone at {org}</Copy>
<Copy k="share.link">Anyone with the link</Copy>
<Copy k="share.note">
  People you share it with open it from the link or from Shared with you on
  their Artifacts page. Give edit access and they can change it in place or
  send Claude a comment.
</Copy>
<Copy k="share.copyLink">Copy link</Copy>

{/* Slides: the editor's toolbar, the comment under the slide, and Present. */}
<Copy k="slides.tool.text">Text</Copy>
<Copy k="slides.tool.image">Image or video</Copy>
<Copy k="slides.tool.table">Table</Copy>
<Copy k="slides.tool.shapes">Shapes</Copy>
<Copy k="slides.download">Download</Copy>
<Copy k="slides.menu.pdf">PDF (.pdf)</Copy>
<Copy k="slides.menu.html">Web page (.html)</Copy>
<Copy k="slides.menu.png">Current slide as an image (.png)</Copy>
<Copy k="slides.menu.pptx">PowerPoint, current fonts (.pptx)</Copy>
<Copy k="slides.menu.pptxBasic">PowerPoint, basic fonts (.pptx)</Copy>
<Copy k="slides.menu.basicNote">Basic fonts work on any computer</Copy>
<Copy k="slides.present">Present</Copy>
<Copy k="slides.pager">{current} / {total}</Copy>

<Copy k="comment.now">now</Copy>
{/* The mention a comment sent to Claude opens with; stays as it is in every language. */}
<Copy k="comment.claudeTag">@Claude</Copy>
<Copy k="comment.say">
  Make the APAC bar clay too, so it reads as the exception, and label it
  “flat”.
</Copy>
<Copy k="comment.working">Sent to Claude. Claude is working</Copy>
<Copy k="comment.done">
  Claude edited slide 2 · APAC bar recolored, label now reads “flat”
</Copy>

<Copy k="present.prev">Previous</Copy>
<Copy k="present.count">{current} / {total}</Copy>
<Copy k="present.next">Next</Copy>
<Copy k="present.exit">Exit (Esc)</Copy>

{/* The drawings in _kindPreviews.tsx: one slide of a deck about a made-up
    company's Q3 results, a doc on the same results with a comment thread, and
    three phone screens for a made-up finance product called Halden.
    \`{added}\` / \`{flagged}\` are highlighted fragments whose text is the
    sub-key of the same name; \`{n}\` / \`{total}\` are numbers. Figures ($880K,
    12%, 3.1%), dates, "Q2" / "Q3", "APAC", "NPS", "AE", "SSO", the brand
    "Halden", the address "finance-ops@" and the typed mention "@Claude" are
    simulated data or product syntax: keep them as they are. */}
<Copy k="preview.slide.kicker">
  Q3 2026 performance readout · board pre-read
</Copy>
<Copy k="preview.slide.title">
  New-tier adoption lifted revenue 12% in Q3. APAC is the one region to
  fix before Q4.
</Copy>
<Copy k="preview.slide.chart.label">Revenue bridge, Q2 to Q3 ($M)</Copy>
<Copy k="preview.slide.chart.q2">Q2</Copy>
<Copy k="preview.slide.chart.newTier">New tier</Copy>
<Copy k="preview.slide.chart.existing">Existing</Copy>
<Copy k="preview.slide.chart.apac">APAC</Copy>
<Copy k="preview.slide.chart.q3">Q3</Copy>
<Copy k="preview.slide.point1.h">
  New tier added $0.47M, almost all of it net-new
</Copy>
<Copy k="preview.slide.point1.t">
  23% attach on new logos, up from 9%; deal size held, so this is
  adoption, not pricing.
</Copy>
<Copy k="preview.slide.point2.h">
  Onboarding rework cut churn 1.1 pts to 3.1%
</Copy>
<Copy k="preview.slide.point2.t">
  Largest single-quarter improvement on record; +18 pt NPS in the cohort.
</Copy>
<Copy k="preview.slide.point3.h">
  APAC was flat against +12% everywhere else
</Copy>
<Copy k="preview.slide.point3.t">
  Coverage 1.8x vs. 3.0x target; two AE ramps slipped to Q4.
</Copy>
<Copy k="preview.slide.source">
  Source: company actuals (Oct 8, 2026); FP&A model v3.2; CRM pipeline
  snapshot
</Copy>

<Copy k="preview.rail.aria">Slides</Copy>

<Copy k="preview.page.tb.heading">Heading 1</Copy>
<Copy k="preview.page.tb.table">Table</Copy>
<Copy k="preview.page.tb.export">Export</Copy>
<Copy k="preview.page.title">Q3 stakeholder brief</Copy>
<Copy k="preview.page.meta">
  For the leadership readout, Thursday Oct 8 · Draft for comment · Numbers
  from Q3 model v3.2
</Copy>
<Copy k="preview.page.intro">
  Q3 closed ahead of plan. Revenue rose 12% quarter over quarter on the
  strength of the new tier, which added $880K in bookings, nearly all of
  it net-new rather than upsell. Costs grew 4%, leaving net up 44%. Both
  operational bets from the Q2 plan are paying off; the open question is
  concentration, because one region, APAC, did not participate in the
  growth.
</Copy>
<Copy k="preview.page.changed.h">What changed</Copy>
<Copy k="preview.table.metricAria">Metric</Copy>
<Copy k="preview.table.q2">Q2</Copy>
<Copy k="preview.table.q3">Q3</Copy>
<Copy k="preview.table.qoq">QoQ</Copy>
<Copy k="preview.table.revenue">Revenue</Copy>
<Copy k="preview.table.newTier">New tier</Copy>
<Copy k="preview.table.churn">Churn</Copy>
<Copy k="preview.table.apac">APAC</Copy>
<Copy k="preview.table.flat">flat</Copy>
<Copy k="preview.page.working.h">What is working</Copy>
<Copy k="preview.page.working1">
  The July onboarding rework cut churn from 4.2% to 3.1%, the largest
  single-quarter improvement on record. {added}
</Copy>
<Copy k="preview.page.working1.added">
  Accounts that went through the new flow score +18 points on NPS against
  the cohort average, so the retention gain looks durable rather than
  seasonal.
</Copy>
<Copy k="preview.page.working2">
  New-tier attach reached 23% of new logos, up from 9%. Average deal size
  held, which makes this adoption rather than discounting.
</Copy>
<Copy k="preview.page.watch.h">Watch list</Copy>
<Copy k="preview.page.watch.p">
  {flagged} Pipeline coverage there sits at 1.8x against a 3x target. Two
  causes look most likely: the Q2 hiring slip pushed two AE ramps into Q4,
  and the new tier has not been positioned for the APAC buyer.
</Copy>
<Copy k="preview.page.watch.p.flagged">
  APAC was flat while every other region grew.
</Copy>
<Copy k="preview.page.rec.h">Recommendation</Copy>
<Copy k="preview.page.rec.p">
  Hold the Q4 plan. Run a four-week APAC sprint on pipeline build and a
  localized new-tier brief, and re-baseline the APAC target at the
  November ops review. Lead Thursday with the churn story; it is the
  cleanest evidence the bets are working.
</Copy>
<Copy k="preview.page.comment.age">2 min</Copy>
<Copy k="preview.page.comment.say">
  @Claude add the NPS lift from the onboarding cohort here; the board
  asked about durability last time.
</Copy>
<Copy k="preview.page.comment.status">
  Claude edited · added the +18 pt NPS line and its source
</Copy>

<Copy k="preview.design.tb.shapes">Shapes</Copy>
<Copy k="preview.design.tb.properties">Properties</Copy>
<Copy k="preview.design.board1">Landing</Copy>
<Copy k="preview.design.board2">Choose plan</Copy>
<Copy k="preview.design.board3">Confirmation</Copy>
<Copy k="preview.design.step">Step {n} of {total}</Copy>
<Copy k="preview.design.landing.hero">
  Forecasting that closes the books with you, not after you.
</Copy>
<Copy k="preview.design.landing.sub">
  The new Halden tier adds live consolidation and scenario runs for
  finance teams of five or more.
</Copy>
<Copy k="preview.design.landing.cta">Start 14-day trial</Copy>
<Copy k="preview.design.plans.hero">Choose your plan</Copy>
<Copy k="preview.design.plans.monthly">Monthly</Copy>
<Copy k="preview.design.plans.annual">Annual</Copy>
<Copy k="preview.design.plans.perSeat">per seat / month</Copy>
<Copy k="preview.design.plans.team">Team</Copy>
<Copy k="preview.design.plans.teamFeatures">Reporting, 10 entities</Copy>
<Copy k="preview.design.plans.scale">Scale</Copy>
<Copy k="preview.design.plans.scaleBadge">Save 18%</Copy>
<Copy k="preview.design.plans.scaleFeatures">
  Live consolidation, scenarios, SSO
</Copy>
<Copy k="preview.design.plans.cta">Continue with Scale</Copy>
<Copy k="preview.design.done.hero">You’re on Scale.</Copy>
<Copy k="preview.design.done.sub">
  Your trial runs to Oct 22. We’ll email finance-ops@ before anything is
  charged.
</Copy>
<Copy k="preview.design.done.plan">Plan</Copy>
<Copy k="preview.design.done.planValue">Scale, annual</Copy>
<Copy k="preview.design.done.seats">Seats</Copy>
<Copy k="preview.design.done.invoice">First invoice</Copy>
<Copy k="preview.design.done.invoiceValue">Oct 23 · $3,744</Copy>
<Copy k="preview.design.done.cta">Open your workspace</Copy>

{/* Month labels shared by the dashboard's charts and the Motion film (April to September 2026). */}
<Copy k="month1">Apr</Copy>
<Copy k="month2">May</Copy>
<Copy k="month3">Jun</Copy>
<Copy k="month4">Jul</Copy>
<Copy k="month5">Aug</Copy>
<Copy k="month6">Sep</Copy>

{/* Dashboard. Toolbar status, Refresh and the two-icon mode switch are
    product labels (the switch's segments have tooltips, no visible words).
    \`{age}\` is a compact age like "12m"; \`{name}\` a source's title;
    \`{connector}\` the connected tool's name; \`{delta}\` a signed change;
    \`{n}\` a row count. "Warehouse" and "CRM" stand in for the reader's own
    connected data warehouse and CRM; no vendor names. */}
<Copy k="db.updated">Updated {age} ago</Copy>
<Copy k="db.updatedNow">Updated now</Copy>
<Copy k="db.now">now</Copy>
<Copy k="db.refreshing">Refreshing…</Copy>
<Copy k="db.refresh">Refresh</Copy>
<Copy k="db.refreshTip">Run every live query again.</Copy>
<Copy k="db.refreshOf">Refresh {name}</Copy>
<Copy k="db.mode.aria">What a click on the page does</Copy>
<Copy k="db.mode.pointer">Use the page</Copy>
<Copy k="db.mode.data">See where numbers come from</Copy>
<Copy k="db.mark.aria">{name}: see its source</Copy>
<Copy k="db.takeaway">Revenue grew in Q3, mostly from the new tier, while monthly churn fell below the Q2 average and APAC revenue stayed flat.</Copy>
<Copy k="db.fig.revenue">Revenue, Q3</Copy>
<Copy k="db.fig.newTier">New tier, Q3</Copy>
<Copy k="db.fig.churn">Monthly churn, Sep</Copy>
<Copy k="db.fig.apac">APAC revenue, Q3</Copy>
<Copy k="db.vs">{delta} vs Q2</Copy>
<Copy k="db.src.revenue">Revenue by month ($M)</Copy>
<Copy k="db.src.churn">Monthly churn (%)</Copy>
<Copy k="db.src.totals">Quarter totals</Copy>
<Copy k="db.conn.warehouse">Warehouse</Copy>
<Copy k="db.conn.crm">CRM</Copy>
<Copy k="db.sources">Sources</Copy>
<Copy k="db.back">Back to Sources</Copy>
<Copy k="db.viewRequest">Query</Copy>
<Copy k="db.viewRequestOf">See the query for {name}</Copy>
<Copy k="db.rows">{n} rows</Copy>
<Copy k="db.requestAria">{name}: request</Copy>
<Copy k="db.fetched">Fetched from {connector}</Copy>
<Copy k="db.close">Close</Copy>

{/* Motion. The playback bar's button names, the side panel's name and
    its two tabs (Tweaks, Style), and the Tweaks rows are product labels.
    \`{title}\` is the film's title line as it reads now; \`{n}\` numbers a text
    field. */}
<Copy k="motion.bar.aria">Playback</Copy>
<Copy k="motion.play">Play</Copy>
<Copy k="motion.pause">Pause</Copy>
<Copy k="motion.restart">Restart</Copy>
<Copy k="motion.restartTip">Back to the start</Copy>
<Copy k="motion.loop">Loop</Copy>
<Copy k="motion.playhead">Playhead</Copy>
<Copy k="motion.comment">Comment</Copy>
<Copy k="motion.tweaks">Tweaks</Copy>
<Copy k="motion.tweaksTip">Show Tweaks and Style</Copy>
<Copy k="motion.tweaksHide">Hide Tweaks and Style</Copy>
<Copy k="motion.panel">Tweaks and Style</Copy>
<Copy k="motion.tab.style">Style</Copy>
<Copy k="motion.export">Export</Copy>
<Copy k="motion.film.aria">Animated chart: {title}</Copy>
<Copy k="motion.film.kicker">Monthly churn, 2026</Copy>
<Copy k="motion.film.title">Churn fell to 3.1%</Copy>
<Copy k="motion.film.ref">Q2 average 4.2%</Copy>
<Copy k="motion.tweaks.now">On screen now</Copy>
<Copy k="motion.tweaks.field">Text {n}</Copy>
<Copy k="motion.tweaks.reset">Reset Text {n}</Copy>
<Copy k="motion.tweaks.resetTip">Reset</Copy>
<Copy k="motion.tweaks.pausePrompt">Pause to change text</Copy>

{/* Custom: the tracker. Its title and description are \`kind.custom.title\` and \`kind.custom.alt\` above. */}
<Copy k="tracker.count">{done} of {total} done</Copy>
<Copy k="tracker.day1">Mon</Copy>
<Copy k="tracker.day2">Tue</Copy>
<Copy k="tracker.day3">Wed</Copy>
<Copy k="tracker.day4">Thu</Copy>
<Copy k="tracker.day5">Fri</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 938eddeaef42296f */}
<Copy k="widget.description">
  Explorer: the six kinds of artifact, each shown open in Claude's artifact
  pane with a line on what it is and a request to try. Claude Docs is a
  document that you, your teammates, and Claude write in at the same time.
  Claude Slides is a deck to edit slide by slide and present from inside
  Claude. Claude Design is a design or prototype you edit by hand. Claude
  Dashboards are charts and numbers that stay current as your data changes.
  Claude Motion is an animated explainer, chart, or product walkthrough. A
  custom artifact is an interactive page built for your request, like a
  tracker. It teaches what each kind looks like and how to ask for it.
</Copy>
<Copy k="widget.summary">
  Explorer: the six kinds of artifact, from Claude Docs to a custom artifact.
  Each comes with what it is, a request to try, and a sample open in Claude.
</Copy>
`;export{e as default};