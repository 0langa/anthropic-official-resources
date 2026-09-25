var e=`---
kind: widget-copy
---

{/* Learner-facing copy for PlaceTheWork.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. \`hintLifted\` and the
    \`place.<id>.sub\` keys are authored but not rendered by the widget
    today. Each task card renders the literal "@Claude " mention itself,
    before \`task.<id>.text\`. */}

<Copy k="intro">
  Below are four requests for Claude. Post each one where you would ask a
  teammate, and see what happens next.
</Copy>
<Copy k="hintIdle">Post it in</Copy>
<Copy k="postedIn">Posted in</Copy>
<Copy k="hintLifted">Choose where to post it.</Copy>
<Copy k="move">Try another place</Copy>
<Copy k="next">What happens next</Copy>
<Copy k="close">
  Ask where you would ask a teammate. When more than one place works, choose
  the public channel. More people can correct the work, and what Claude
  learns there helps everyone in the channel.
</Copy>

<Copy k="cardCountAria">Card {n} of {total}</Copy>
<Copy k="cardAria">Card {n}</Copy>
<Copy k="whereAria">Where to ask</Copy>
<Copy k="nextCard">Next card</Copy>

<Copy k="place.dm.label">Claude</Copy>
<Copy k="place.dm.sub">Direct message</Copy>
<Copy k="place.priv.label">people-ops</Copy>
<Copy k="place.priv.sub">Private · 4 members</Copy>
<Copy k="place.sales.label">sales-team</Copy>
<Copy k="place.sales.sub">Public · 31 members</Copy>
<Copy k="place.analytics.label">analytics</Copy>
<Copy k="place.analytics.sub">Public · 18 members</Copy>
<Copy k="dmName">DM with Claude</Copy>
<Copy k="dmAria">a DM with Claude</Copy>
<Copy k="postAria">Post in {place}</Copy>

<Copy k="verdict.best">Right place</Copy>
<Copy k="verdict.works">Works, but there’s a better place</Copy>
<Copy k="verdict.wrong-audience">Wrong place</Copy>

<Copy k="beat.joins">Colleagues can correct it or build on it.</Copy>
<Copy k="beat.spreads">
  What Claude learns here carries to later threads in this channel.
</Copy>
<Copy k="beat.stops">
  It stays with you; nobody else can correct it or build on it.
</Copy>
<Copy k="beat.exposed">Everyone in the channel reads it.</Copy>
<Copy k="beat.locked">Only this group can see it.</Copy>

<Copy k="task.renewals.text">
  Which accounts renew in October, and who owns each one?
</Copy>
<Copy k="task.renewals.sales.line">
  The people who own renewals are here to check the list.
</Copy>
<Copy k="task.renewals.sales.beat1">
  Marcus: “Add Northwind, it moved to Oct 28.”
</Copy>
<Copy k="task.renewals.sales.beat2">
  Later, in a new thread here, Claude knows Northwind moved.
</Copy>
<Copy k="task.renewals.analytics.line">
  The people who own renewals are in #sales-team.
</Copy>
<Copy k="task.renewals.analytics.beat1">
  Dana: “Renewal dates live in #sales-team. Ask there?”
</Copy>
<Copy k="task.renewals.priv.line">
  Nothing here is private, and the people who own renewals can’t see it.
</Copy>
<Copy k="task.renewals.priv.beat1">Only people-ops members can see it.</Copy>
<Copy k="task.renewals.dm.line">
  The answer isn’t posted where the team can see it, so nobody can correct
  it.
</Copy>
<Copy k="task.renewals.dm.beat1">Marcus never gets to add Northwind.</Copy>

<Copy k="task.oneonone.text">
  Help me prep for my 1:1 tomorrow: what’s on my calendar, my open threads,
  and what I said I’d finish.
</Copy>
<Copy k="task.oneonone.dm.line">
  It’s about your own work, so keep it out of channels.
</Copy>
<Copy k="task.oneonone.dm.beat1">It isn’t posted to any channel.</Copy>
<Copy k="task.oneonone.sales.line">
  It’s about your own work, and the whole channel can read it.
</Copy>
<Copy k="task.oneonone.sales.beat1">
  Everyone in #sales-team can read your 1:1 prep.
</Copy>
<Copy k="task.oneonone.analytics.line">
  It’s about your own work, and the whole channel can read it.
</Copy>
<Copy k="task.oneonone.analytics.beat1">
  Everyone in #analytics can read your 1:1 prep.
</Copy>
<Copy k="task.oneonone.priv.line">
  It’s about your own work, and a private channel is shared with a group.
</Copy>
<Copy k="task.oneonone.priv.beat1">
  people-ops members can read your 1:1 prep.
</Copy>

<Copy k="task.comp.text">
  Draft the pay adjustment letter for J. Rivera, using the salary band we
  set last week.
</Copy>
<Copy k="task.comp.priv.line">
  It’s private, and the people who set the band are here.
</Copy>
<Copy k="task.comp.priv.beat1">Only people-ops members can see it.</Copy>
<Copy k="task.comp.priv.beat2">
  Ana: “Use the revised band, we changed it Friday.”
</Copy>
<Copy k="task.comp.dm.line">
  It stays private, but the people who set the band can’t check the letter.
</Copy>
<Copy k="task.comp.dm.beat1">
  Ana isn’t here to say the band changed on Friday.
</Copy>
<Copy k="task.comp.sales.line">
  One person’s pay is private, and the whole channel can read it.
</Copy>
<Copy k="task.comp.sales.beat1">
  Everyone in #sales-team can read one person’s pay.
</Copy>
<Copy k="task.comp.analytics.line">
  One person’s pay is private, and the whole channel can read it.
</Copy>
<Copy k="task.comp.analytics.beat1">
  Everyone in #analytics can read one person’s pay.
</Copy>

<Copy k="task.pricing.text">
  Summarize what changed in the Q3 pricing proposal this week, and what’s
  still open.
</Copy>
<Copy k="task.pricing.sales.line">
  The people who wrote the proposal are here to correct it, and the whole
  team can use it.
</Copy>
<Copy k="task.pricing.sales.beat1">
  Priya: “The partner discount is decided, not open.”
</Copy>
<Copy k="task.pricing.sales.beat2">
  Next week, in a new thread here, Claude knows the discount is decided.
</Copy>
<Copy k="task.pricing.dm.line">
  It isn’t posted where the team can see it, so nobody can correct it and
  the team can’t use it.
</Copy>
<Copy k="task.pricing.dm.beat1">
  Priya never sees it, so the discount stays wrong.
</Copy>
<Copy k="task.pricing.analytics.line">
  The people who wrote the proposal are in #sales-team.
</Copy>
<Copy k="task.pricing.analytics.beat1">
  Dana: “Useful, but pricing lives in #sales-team.”
</Copy>
<Copy k="task.pricing.priv.line">
  The people working on the proposal aren’t in this channel, and the team
  that needs the summary can’t see it.
</Copy>
<Copy k="task.pricing.priv.beat1">Only people-ops members can see it.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 42a430d1e88f5bbf */}
<Copy k="widget.description">
  Exercise: the learner works through four sample requests meant for Claude,
  one at a time, and decides where each should be posted: a direct message, a
  private channel, or one of two public channels. After placing a request, the
  widget says whether that place fits and plays out what follows, such as
  whether colleagues can correct or build on the answer, whether what Claude
  learns there carries into later conversations in that channel, and whether
  the right people see it. The goal is to practice choosing where to ask
  Claude based on who the work is for, and to show that when more than one
  place would work, the public channel is usually best, since others can check
  and build on the work and Claude's learning helps the whole channel.
</Copy>
<Copy k="widget.summary">
  Exercise: place four sample requests for Claude in a direct message, a
  private channel, or a public channel, and see what happens to each answer.
  It teaches choosing where to ask based on who the work is for.
</Copy>
`;export{e as default};