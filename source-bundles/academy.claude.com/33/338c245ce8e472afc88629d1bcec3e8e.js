var e=`---
kind: widget-copy
---

{/* Copy shared by the helper modules in this folder, merged under every
    widget copy file here. \`reply.*\` keys are the simulated Claude replies
    and previews that _replies.tsx draws inside Embed2 (a plain-text answer
    about a fictional company's Q3 results, a contract-review flow diagram,
    a spreadsheet, a PDF brief, weather / trail / playlist / recipe cards,
    two slides of one deck, a living document with a comment thread, and
    three phone artboards for a fictional finance product called Halden);
    \`planner.*\` keys are the interactive "Living room planner" artifact in
    _planner.tsx.
    Translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim: \`{dot}\` is a " · " separator,
    \`{lead}\` / \`{added}\` / \`{flagged}\` are highlighted fragments whose text
    is the sub-key of the same name, \`{n}\` / \`{total}\` / \`{size}\` / \`{w}\` /
    \`{h}\` are numbers, \`{name}\` is a furniture name. Figures ($880K, 12%,
    3.1%), dates, "Q2" / "Q3", "APAC", "NPS", "ICP", "AE", "SSO", the brand
    "Halden", the address "finance-ops@" and the typed mention "@Claude"
    are simulated data or product syntax — keep them as they are. Company,
    place, song and file names, temperatures and prices stay in the widget
    as data. \`reply.diagram.decision1\` / \`decision2\` are two stacked lines
    of one diamond label ("Standard terms?"). Measurements in the planner
    are feet (′) and inches (″) and stay imperial. */}

<Copy k="reply.table.metricAria">Metric</Copy>
<Copy k="reply.table.q2">Q2</Copy>
<Copy k="reply.table.q3">Q3</Copy>
<Copy k="reply.table.qoq">QoQ</Copy>
<Copy k="reply.table.revenue">Revenue</Copy>
<Copy k="reply.table.newTierSub">— New tier</Copy>
<Copy k="reply.table.newTier">New tier</Copy>
<Copy k="reply.table.existingSub">— Existing</Copy>
<Copy k="reply.table.churn">Churn</Copy>
<Copy k="reply.table.apac">APAC</Copy>
<Copy k="reply.table.net">Net</Copy>
<Copy k="reply.table.flat">flat</Copy>

<Copy k="reply.plain.attachTag">PDF</Copy>
<Copy k="reply.plain.prompt">
  Pull the key changes from the Q3 readout. Plain language, what matters
  most, and what I should chase before the board meets.
</Copy>
<Copy k="reply.plain.h1">What changed in Q3</Copy>
<Copy k="reply.plain.lead">
  Three things stand out in the numbers, and they pull in different
  directions. Two are clear wins, and one needs a closer look before the
  board readout.
</Copy>
<Copy k="reply.plain.point1">
  {lead} on the new tier, almost all of it net-new rather than upsell.
</Copy>
<Copy k="reply.plain.point1.lead">Revenue is up 12%</Copy>
<Copy k="reply.plain.point2">
  {lead} after the July onboarding rework landed.
</Copy>
<Copy k="reply.plain.point2.lead">Churn fell to 3.1%</Copy>
<Copy k="reply.plain.point3">
  {lead}, and pipeline coverage there is thinner than other regions.
</Copy>
<Copy k="reply.plain.point3.lead">APAC growth is flat</Copy>
<Copy k="reply.plain.tier.h">The new tier is doing the work</Copy>
<Copy k="reply.plain.tier.p">
  Of the $880K added in Q3, roughly $810K came from accounts that didn’t
  exist in Q2. Attach rate on new logos hit 23%, up from 9%. That’s a real
  adoption signal, not a pricing artifact. Average deal size held steady.
</Copy>
<Copy k="reply.plain.landed.h">Where the quarter landed</Copy>
<Copy k="reply.plain.apac.h">The APAC question</Copy>
<Copy k="reply.plain.apac.p">
  Flat isn’t a crisis, but it is the line that breaks the pattern. Every
  other region grew. Pipeline coverage is at 1.8x against a 3x target. Two
  things worth checking before the deck goes out: whether the Q2 hiring
  slip pushed ramp into Q4, and whether the new tier hasn’t been
  positioned for the APAC ICP yet.
</Copy>
<Copy k="reply.plain.close">
  Happy to draft the slide on this if useful, or pull the rep-level
  pipeline if you want to go a level deeper first.
</Copy>

<Copy k="reply.diagram.aria">
  Contract-review flow: a request comes in, standard terms are
  auto-approved, everything else goes to legal review, and both paths end
  filed.
</Copy>
<Copy k="reply.diagram.laneAuto">AUTOMATED</Copy>
<Copy k="reply.diagram.laneHuman">NEEDS A HUMAN</Copy>
<Copy k="reply.diagram.loop">redlines go back and forth until agreed</Copy>
<Copy k="reply.diagram.yes">yes</Copy>
<Copy k="reply.diagram.no">no</Copy>
<Copy k="reply.diagram.request">Request in</Copy>
<Copy k="reply.diagram.requestSub">Slack or email</Copy>
<Copy k="reply.diagram.decision1">Standard</Copy>
<Copy k="reply.diagram.decision2">terms?</Copy>
<Copy k="reply.diagram.approve">Auto-approve</Copy>
<Copy k="reply.diagram.approveSub">template + e-sign</Copy>
<Copy k="reply.diagram.approveTime">usually same day</Copy>
<Copy k="reply.diagram.legal">Legal review</Copy>
<Copy k="reply.diagram.legalSub">flag the deltas</Copy>
<Copy k="reply.diagram.legalTime">median 2–3 days</Copy>
<Copy k="reply.diagram.filed">Filed</Copy>
<Copy k="reply.diagram.share">≈ 90% of requests take this lane</Copy>

<Copy k="reply.sheet.title">Q3 budget review</Copy>
<Copy k="reply.sheet.q2">Q2 actual</Copy>
<Copy k="reply.sheet.q3">Q3 actual</Copy>
<Copy k="reply.sheet.qoq">QoQ</Copy>
<Copy k="reply.sheet.revenue">Revenue</Copy>
<Copy k="reply.sheet.newTier">— New tier</Copy>
<Copy k="reply.sheet.existing">— Existing base</Copy>
<Copy k="reply.sheet.cost">Cost of revenue</Copy>
<Copy k="reply.sheet.opex">Operating costs</Copy>
<Copy k="reply.sheet.net">Net</Copy>
<Copy k="reply.sheet.metrics">Operating metrics</Copy>
<Copy k="reply.sheet.churn">Churn</Copy>
<Copy k="reply.sheet.attach">New-tier attach</Copy>
<Copy k="reply.sheet.apac">APAC revenue</Copy>
<Copy k="reply.sheet.coverage">Pipeline coverage</Copy>
<Copy k="reply.sheet.tab1">Q3 model</Copy>
<Copy k="reply.sheet.tab2">Inputs</Copy>
<Copy k="reply.sheet.tab3">By region</Copy>

<Copy k="reply.pdf.title">Q3 stakeholder brief</Copy>
<Copy k="reply.pdf.meta">
  For the leadership readout {dot} October 8, 2026 {dot} Page 1 of 2
</Copy>
<Copy k="reply.pdf.intro">
  Q3 closed materially ahead of plan. Revenue rose 12% quarter over
  quarter on the strength of the new tier, which added $880K in net-new
  bookings, nearly all incremental rather than upsell. Costs grew 4%,
  leaving net up 44%. The two operational bets we made coming into the
  quarter—the onboarding rework and the new-tier launch—are both
  delivering, and the open question is concentration: one region, APAC,
  did not participate in the growth.
</Copy>
<Copy k="reply.pdf.changed.h">What changed</Copy>
<Copy k="reply.pdf.working.h">What’s working</Copy>
<Copy k="reply.pdf.working1">
  The July onboarding rework cut churn from 4.2% to 3.1%, the largest
  single-quarter improvement on record.
</Copy>
<Copy k="reply.pdf.working2">
  New-tier attach rate hit 23% of new logos, up from 9% in Q2. Average
  deal size held, so this is adoption, not pricing.
</Copy>
<Copy k="reply.pdf.working3">
  NPS for accounts that went through the new onboarding flow is +18 points
  above the cohort average.
</Copy>
<Copy k="reply.pdf.watch.h">Watch list</Copy>
<Copy k="reply.pdf.watch.p">
  APAC growth was effectively flat ($542K vs. $540K) while every other
  region grew. Pipeline coverage there is at 1.8x against a 3x target. Two
  factors look most likely: the Q2 hiring slip pushed two AE ramps into
  Q4, and the new tier hasn’t been positioned for the APAC ICP. The
  messaging assumes a US procurement cycle.
</Copy>
<Copy k="reply.pdf.rec.h">Recommendation</Copy>
<Copy k="reply.pdf.rec.p">
  Hold the Q4 plan as written. Stand up a four-week APAC sprint focused on
  (1) pipeline build to recover coverage and (2) a localized new-tier
  positioning brief. Re-baseline the APAC target at the November ops
  review with that work in hand. Suggest leading the board readout with
  the churn story. It’s the cleanest evidence the operational bets are
  paying off.
</Copy>

<Copy k="reply.weather.cond">Partly cloudy {dot} H 64° L 53°</Copy>
<Copy k="reply.weather.fri">Fri</Copy>
<Copy k="reply.weather.sat">Sat</Copy>
<Copy k="reply.weather.sun">Sun</Copy>
<Copy k="reply.weather.mon">Mon</Copy>
<Copy k="reply.weather.tue">Tue</Copy>

<Copy k="reply.trail.length">Length</Copy>
<Copy k="reply.trail.gain">Elev. gain</Copy>
<Copy k="reply.trail.time">Est. time</Copy>
<Copy k="reply.trail.grade">Moderate · Out & back</Copy>
<Copy k="reply.trail.foot">Places · 2 more trails nearby</Copy>

<Copy k="reply.playlist.kind">Playlist · For you</Copy>
<Copy k="reply.playlist.by">6 songs · 31 min · ~165 BPM</Copy>
<Copy k="reply.playlist.foot">Saved to your music library</Copy>

<Copy k="reply.recipe.name">Miso-glazed salmon rice bowls</Copy>
<Copy k="reply.recipe.servings">4 servings</Copy>
<Copy k="reply.recipe.time">30 min</Copy>
<Copy k="reply.recipe.pan">One pan</Copy>
<Copy k="reply.recipe.ingredients.h">Ingredients</Copy>
<Copy k="reply.recipe.ing1">4 salmon fillets (about 150 g each)</Copy>
<Copy k="reply.recipe.ing2">2 tbsp white miso</Copy>
<Copy k="reply.recipe.ing3">1 tbsp honey, 1 tbsp soy</Copy>
<Copy k="reply.recipe.ing4">3 cups cooked rice</Copy>
<Copy k="reply.recipe.ing5">1 cucumber, 2 scallions</Copy>
<Copy k="reply.recipe.steps.h">Steps</Copy>
<Copy k="reply.recipe.step1">
  Whisk miso, honey and soy; brush over the salmon.
</Copy>
<Copy k="reply.recipe.step2">
  Roast at 220°C for 10 to 12 minutes until it flakes.
</Copy>
<Copy k="reply.recipe.step3">
  Warm the rice, slice the cucumber, split into bowls and top.
</Copy>
<Copy k="reply.recipe.start">Start cooking</Copy>
<Copy k="reply.recipe.units">Change units</Copy>
<Copy k="reply.recipe.links">Print · Copy · Share recipe</Copy>

<Copy k="reply.slide.kicker">
  Q3 2026 performance readout · board pre-read
</Copy>
<Copy k="reply.slide.title">
  New-tier adoption lifted revenue 12% in Q3. APAC is the one region to
  fix before Q4.
</Copy>
<Copy k="reply.slide.chart.label">Revenue bridge, Q2 to Q3 ($M)</Copy>
<Copy k="reply.slide.chart.q2">Q2</Copy>
<Copy k="reply.slide.chart.newTier">New tier</Copy>
<Copy k="reply.slide.chart.existing">Existing</Copy>
<Copy k="reply.slide.chart.apac">APAC</Copy>
<Copy k="reply.slide.chart.q3">Q3</Copy>
<Copy k="reply.slide.point1.h">
  New tier added $0.47M, almost all of it net-new
</Copy>
<Copy k="reply.slide.point1.t">
  23% attach on new logos, up from 9%; deal size held, so this is
  adoption, not pricing.
</Copy>
<Copy k="reply.slide.point2.h">
  Onboarding rework cut churn 1.1 pts to 3.1%
</Copy>
<Copy k="reply.slide.point2.t">
  Largest single-quarter improvement on record; +18 pt NPS in the cohort.
</Copy>
<Copy k="reply.slide.point3.h">
  APAC was flat against +12% everywhere else
</Copy>
<Copy k="reply.slide.point3.t">
  Coverage 1.8x vs. 3.0x target; two AE ramps slipped to Q4.
</Copy>
<Copy k="reply.slide.source">
  Source: company actuals (Oct 8, 2026); FP&A model v3.2; CRM pipeline
  snapshot
</Copy>

<Copy k="reply.slide1.title">
  Churn fell to 3.1% in Q3, the largest single-quarter improvement on
  record.
</Copy>
<Copy k="reply.slide1.stat.label">Monthly churn, Q3 2026</Copy>
<Copy k="reply.slide1.stat.delta">Down 1.1 pts from 4.2% in Q2</Copy>
<Copy k="reply.slide1.point1.h">
  The July onboarding rework did the work
</Copy>
<Copy k="reply.slide1.point1.t">
  Accounts on the new flow score +18 pt NPS above the cohort average.
</Copy>
<Copy k="reply.slide1.point2.h">
  Retention and the new tier compound
</Copy>
<Copy k="reply.slide1.point2.t">
  Revenue rose 12% to $4.07M; the bridge is on slide 2.
</Copy>

<Copy k="reply.rail.aria">Slides</Copy>

<Copy k="reply.page.tb.heading">Heading 1</Copy>
<Copy k="reply.page.tb.table">Table</Copy>
<Copy k="reply.page.tb.export">Export</Copy>
<Copy k="reply.page.title">Q3 stakeholder brief</Copy>
<Copy k="reply.page.meta">
  For the leadership readout, Thursday Oct 9 · Draft for comment · Numbers
  linked to Q3 model v3.2
</Copy>
<Copy k="reply.page.intro">
  Q3 closed ahead of plan. Revenue rose 12% quarter over quarter on the
  strength of the new tier, which added $880K in bookings, nearly all of
  it net-new rather than upsell. Costs grew 4%, leaving net up 44%. Both
  operational bets from the Q2 plan are paying off; the open question is
  concentration, because one region, APAC, did not participate in the
  growth.
</Copy>
<Copy k="reply.page.changed.h">What changed</Copy>
<Copy k="reply.page.working.h">What is working</Copy>
<Copy k="reply.page.working1">
  The July onboarding rework cut churn from 4.2% to 3.1%, the largest
  single-quarter improvement on record. {added}
</Copy>
<Copy k="reply.page.working1.added">
  Accounts that went through the new flow score +18 points on NPS against
  the cohort average, so the retention gain looks durable rather than
  seasonal.
</Copy>
<Copy k="reply.page.working2">
  New-tier attach reached 23% of new logos, up from 9%. Average deal size
  held, which makes this adoption rather than discounting.
</Copy>
<Copy k="reply.page.watch.h">Watch list</Copy>
<Copy k="reply.page.watch.p">
  {flagged} Pipeline coverage there sits at 1.8x against a 3x target. Two
  causes look most likely: the Q2 hiring slip pushed two AE ramps into Q4,
  and the new tier has not been positioned for the APAC buyer.
</Copy>
<Copy k="reply.page.watch.p.flagged">
  APAC was flat while every other region grew.
</Copy>
<Copy k="reply.page.rec.h">Recommendation</Copy>
<Copy k="reply.page.rec.p">
  Hold the Q4 plan. Run a four-week APAC sprint on pipeline build and a
  localised new-tier brief, and re-baseline the APAC target at the
  November ops review. Lead Thursday with the churn story; it is the
  cleanest evidence the bets are working.
</Copy>
<Copy k="reply.page.comment.age">2 min</Copy>
<Copy k="reply.page.comment.say">
  @Claude add the NPS lift from the onboarding cohort here; the board
  asked about durability last time.
</Copy>
<Copy k="reply.page.comment.status">
  Claude edited · added the +18 pt NPS line and its source
</Copy>

<Copy k="reply.design.tb.system">Design system: Halden</Copy>
<Copy k="reply.design.tb.shapes">Shapes</Copy>
<Copy k="reply.design.tb.fit">Fit artboards</Copy>
<Copy k="reply.design.tb.export">Export</Copy>
<Copy k="reply.design.tb.properties">Properties</Copy>
<Copy k="reply.design.board1">Landing</Copy>
<Copy k="reply.design.board2">Choose plan</Copy>
<Copy k="reply.design.board3">Confirmation</Copy>
<Copy k="reply.design.step">Step {n} of {total}</Copy>
<Copy k="reply.design.landing.hero">
  Forecasting that closes the books with you, not after you.
</Copy>
<Copy k="reply.design.landing.sub">
  The new Halden tier adds live consolidation and scenario runs for
  finance teams of five or more.
</Copy>
<Copy k="reply.design.landing.cta">Start 14-day trial</Copy>
<Copy k="reply.design.plans.hero">Choose your plan</Copy>
<Copy k="reply.design.plans.monthly">Monthly</Copy>
<Copy k="reply.design.plans.annual">Annual</Copy>
<Copy k="reply.design.plans.perSeat">per seat / month</Copy>
<Copy k="reply.design.plans.team">Team</Copy>
<Copy k="reply.design.plans.teamFeatures">Reporting, 10 entities</Copy>
<Copy k="reply.design.plans.scale">Scale</Copy>
<Copy k="reply.design.plans.scaleBadge">Save 18%</Copy>
<Copy k="reply.design.plans.scaleFeatures">
  Live consolidation, scenarios, SSO
</Copy>
<Copy k="reply.design.plans.cta">Continue with Scale</Copy>
<Copy k="reply.design.done.hero">You’re on Scale.</Copy>
<Copy k="reply.design.done.sub">
  Your trial runs to Oct 22. We’ll email finance-ops@ before anything is
  charged.
</Copy>
<Copy k="reply.design.done.plan">Plan</Copy>
<Copy k="reply.design.done.planValue">Scale, annual</Copy>
<Copy k="reply.design.done.seats">Seats</Copy>
<Copy k="reply.design.done.invoice">First invoice</Copy>
<Copy k="reply.design.done.invoiceValue">Oct 23 · $3,744</Copy>
<Copy k="reply.design.done.cta">Open your workspace</Copy>

<Copy k="planner.title">Living room planner</Copy>
<Copy k="planner.subtitle">14′ × 18′, 252 sq ft, to scale</Copy>
<Copy k="planner.reset">Reset</Copy>
<Copy k="planner.roomAria">
  Room layout, drawn to scale. Each piece is a button: drag it, or focus
  it and use the arrow keys to move it one foot at a time.
</Copy>
<Copy k="planner.pieceAria">{name}, {w} by {h} inches</Copy>
<Copy k="planner.piece.rug">Rug 8×10</Copy>
<Copy k="planner.piece.couch">Couch</Copy>
<Copy k="planner.piece.couch.short">Couch</Copy>
<Copy k="planner.piece.coffee">Coffee table</Copy>
<Copy k="planner.piece.coffee.short">Coffee</Copy>
<Copy k="planner.piece.media">Media console</Copy>
<Copy k="planner.piece.media.short">Media</Copy>
<Copy k="planner.piece.chair">Reading chair</Copy>
<Copy k="planner.piece.chair.short">Reading</Copy>
<Copy k="planner.piece.lamp">Floor lamp</Copy>
<Copy k="planner.piece.lamp.short">Floor</Copy>
<Copy k="planner.piece.plant">Monstera</Copy>
<Copy k="planner.sideLabel">FURNITURE</Copy>
<Copy k="planner.dist.good">Couch → TV · good for {size}″</Copy>
<Copy k="planner.dist.close">Couch → TV · too close</Copy>
<Copy k="planner.dist.far">Couch → TV · too far</Copy>
<Copy k="planner.clear">Floor still clear</Copy>
<Copy k="planner.tip.blocked">⚠ Something’s blocking the door</Copy>
<Copy k="planner.tip.idle">Drag a piece; it snaps to the 1′ grid</Copy>
<Copy k="planner.rotate">Rotate selected</Copy>
`;export{e as default};