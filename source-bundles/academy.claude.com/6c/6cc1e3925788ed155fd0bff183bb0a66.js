var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed2.tsx, "What a Claude response can look
    like": a five-tab carousel of one claude.ai conversation (Plain text,
    Inline visuals, Artifacts, Files, Cards). Selecting Artifacts opens a
    second tab row of artifact kinds (Design, Slides, Docs, Interactive);
    the line under the rows is then that kind's note. The Artifacts stage
    replicates product chrome: the artifact drawer with its Share sheet,
    the Slides editor toolbar with a Download menu and Present mode, and a
    comment thread Claude answers; the Files stage previews a spreadsheet,
    a PDF and a .pptx deck in viewer chrome. Keys are machine identifiers;
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim: \`{org}\` is a fictional company
    name (Halden), \`{current}\` / \`{total}\` are slide and tab counters,
    \`{ask}\` is one of the example prompts, \`{name}\` / \`{kind}\` / \`{ext}\`
    describe a generated file. Product labels (Slides, Design, Docs,
    Share, Export, Present, the Artifacts tab, Output) should
    match the localized claude.ai product where one exists. File names,
    people's names and initials, and numbers stay in the widget. The reply
    components this widget embeds (the Q3 slides, the doc and design
    previews, the spreadsheet and PDF, the weather / recipe / trail /
    playlist cards, the room planner) read their strings from the folder's
    _shared.copy.mdx. */}

<Copy k="tabs.aria">Kinds of response</Copy>

<Copy k="tab.plain.label">Plain text</Copy>
<Copy k="tab.plain.hint">
  The default: a useful answer, written in plain language.
</Copy>
<Copy k="tab.plain.ask1">What changed in Q3, in plain words?</Copy>
<Copy k="tab.plain.ask2">Summarize this for my manager</Copy>
<Copy k="tab.plain.note">
  The default. Claude answers in text unless another form fits the task
  better.
</Copy>

<Copy k="tab.visual.label">Inline visuals</Copy>
<Copy k="tab.visual.hint">
  Diagrams, charts, and figures drawn right in the response. This one maps a
  review process for the team wiki.
</Copy>
<Copy k="tab.visual.ask1">Diagram this flow</Copy>
<Copy k="tab.visual.ask2">Chart these numbers</Copy>
<Copy k="tab.visual.ask3">Show me how this works</Copy>

<Copy k="tab.artifacts.label">Artifacts</Copy>
{/* No tab.artifacts.hint: while Artifacts is selected the helper line is the
    selected kind's note (kind.KEY.note). */}
<Copy k="tab.artifacts.ask1">Turn this into a deck</Copy>
<Copy k="tab.artifacts.ask2">Mock up these screens</Copy>
<Copy k="tab.artifacts.ask3">Build me something interactive</Copy>
<Copy k="tab.artifacts.note">
  Or pick the kind under Output, below the chat box.
</Copy>

<Copy k="tab.files.label">Files</Copy>
<Copy k="tab.files.hint">
  When you need the file itself: a spreadsheet with working formulas, a PDF
  to send on, a deck to open in PowerPoint. Click a file to preview it.
</Copy>
<Copy k="tab.files.ask1">Put this in a spreadsheet for Excel</Copy>
<Copy k="tab.files.ask2">Export it as a PDF</Copy>
<Copy k="tab.files.ask3">Give me a .docx</Copy>
<Copy k="tab.files.note">
  Name the file format when you need the file itself.
</Copy>

<Copy k="tab.cards.label">Cards</Copy>
<Copy k="tab.cards.hint">
  Ready-made cards for everyday asks: the weather, a recipe you can cook step
  by step, places on a map, and cards from the apps you connect.
</Copy>
<Copy k="tab.cards.ask1">Weather this weekend?</Copy>
<Copy k="tab.cards.ask2">Something quick with salmon</Copy>
<Copy k="tab.cards.ask3">A half-day hike near Tahoe</Copy>
<Copy k="tab.cards.note">
  Just ask. When a card fits better than a paragraph, Claude uses one.
</Copy>

<Copy k="foot.askLabel">Ask like this</Copy>
<Copy k="foot.chip">“{ask}”</Copy>
<Copy k="foot.count">{current} of {total}</Copy>
<Copy k="foot.prev">Previous kind of response</Copy>
<Copy k="foot.next">Next kind of response</Copy>

<Copy k="visual.user">
  Map our contract-review flow as a diagram for the wiki. Show what gets
  auto-approved vs. sent to legal.
</Copy>
<Copy k="visual.reply">
  Here’s the flow. Two lanes split what’s automated from what needs a
  person, and the dashed loop is the redline back-and-forth.
</Copy>

<Copy k="kinds.aria">Kinds of artifact</Copy>

<Copy k="kind.slides.label">Slides</Copy>
<Copy k="kind.slides.title">Q3 board pre-read</Copy>
<Copy k="kind.slides.note">
  A deck you can present, restyle with a design system and export to
  PowerPoint.
</Copy>
<Copy k="kind.slides.saved">All changes saved</Copy>
<Copy k="kind.slides.user">
  Turn the Q3 readout into the board pre-read deck. Six slides, lead with the
  churn story.
</Copy>
<Copy k="kind.slides.reply">
  Here’s the deck. Churn leads on slide 1 as you asked, the revenue bridge
  carries slide 2, and APAC gets one slide with the recovery plan rather than
  three. Edit anything directly, or leave me a comment on the slide and I’ll
  rework it.
</Copy>
<Copy k="kind.slides.sub">Slides · Only you</Copy>
<Copy k="kind.slides.open">Open the deck</Copy>

<Copy k="kind.design.label">Design</Copy>
<Copy k="kind.design.title">New-tier signup flow</Copy>
<Copy k="kind.design.note">
  Screens, flows and graphics laid out as artboards you can edit by hand, in
  your design system. Claude Design now starts from any conversation.
</Copy>
<Copy k="kind.design.saved">Saving…</Copy>
<Copy k="kind.design.user">
  Mock up the signup flow for the new tier on mobile: landing, plan picker,
  confirmation. Use the {org} design system.
</Copy>
<Copy k="kind.design.reply">
  Three artboards, built from {org}’s components and type styles so they
  match what engineering ships. The plan picker defaults to annual with the
  saving called out; I left the monthly state as a toggle. Nudge anything by
  hand, or tell me what to change and I’ll redraw it.
</Copy>
<Copy k="kind.design.sub">Design · Only you</Copy>
<Copy k="kind.design.open">Open the design</Copy>

<Copy k="kind.docs.label">Docs</Copy>
<Copy k="kind.docs.title">Q3 stakeholder brief</Copy>
<Copy k="kind.docs.note">
  A doc your team reads, comments on and edits in place while Claude keeps it
  current.
</Copy>
<Copy k="kind.docs.saved">All changes saved</Copy>
<Copy k="kind.docs.user">
  Write this up as a doc the leadership team can comment on before
  Thursday’s readout.
</Copy>
<Copy k="kind.docs.reply">
  Drafted it as a doc and shared it with everyone at {org} so the leadership
  team can comment in place. Anything addressed to me in a comment, I’ll pick
  up and edit; the numbers stay linked to the Q3 model, so if FP&A restates,
  say so and I’ll refresh them.
</Copy>
<Copy k="kind.docs.sub">Doc · Everyone in {org}</Copy>
<Copy k="kind.docs.open">Open the doc</Copy>

<Copy k="kind.tool.label">Interactive</Copy>
<Copy k="kind.tool.title">Living room planner</Copy>
<Copy k="kind.tool.note">
  Let Claude pick the format and it builds what the task needs: a planner, a
  calculator, a tracker, a small tool you can keep using.
</Copy>
<Copy k="kind.tool.saved">All changes saved</Copy>
<Copy k="kind.tool.user">
  I’m rearranging my living room. It’s 14 by 18 feet, and I have a couch,
  coffee table, media console, reading chair, and an 8×10 rug. Build me
  something I can drag the pieces around in.
</Copy>
<Copy k="kind.tool.reply">
  Built it as an interactive artifact, drawn to scale on a 1-foot grid, with
  the TV on the console and a monstera by the window. Drag the pieces around;
  it warns you when something blocks the door.
</Copy>
<Copy k="kind.tool.sub">Artifact · Only you</Copy>
<Copy k="kind.tool.open">Open the Living room planner</Copy>

<Copy k="card.open">Open</Copy>
<Copy k="card.tapHint">Tap the card to open the planner</Copy>

<Copy k="drawer.comment">Comment</Copy>
<Copy k="drawer.more">More actions</Copy>
<Copy k="panel.close">Close the panel</Copy>

<Copy k="share.title">Share</Copy>
<Copy k="share.export">Export</Copy>
<Copy k="share.access">Who has access</Copy>
<Copy k="share.invited">Only people invited</Copy>
<Copy k="share.org">Anyone at {org}</Copy>
<Copy k="share.role">Can view</Copy>
<Copy k="share.link">Anyone with the link</Copy>
<Copy k="share.note">
  People at {org} open it from the link or from Shared with you in their
  Artifacts tab. Give edit access and they can change it in place or send
  Claude a comment.
</Copy>
<Copy k="share.copyLink">Copy link</Copy>

<Copy k="slides.tool.text">Text</Copy>
<Copy k="slides.tool.image">Image</Copy>
<Copy k="slides.tool.table">Table</Copy>
<Copy k="slides.tool.shapes">Shapes</Copy>
<Copy k="slides.download">Download</Copy>
<Copy k="slides.menu.pdf">PDF (.pdf)</Copy>
<Copy k="slides.menu.html">Web page (.html)</Copy>
<Copy k="slides.menu.pptx">PowerPoint, current fonts (.pptx)</Copy>
<Copy k="slides.menu.basicNote">Basic fonts work on any computer</Copy>
<Copy k="slides.menu.pptxBasic">PowerPoint, basic fonts (.pptx)</Copy>
<Copy k="slides.present">Present</Copy>
<Copy k="slides.pager">Slide {current} of {total}</Copy>

<Copy k="comment.now">now</Copy>
<Copy k="comment.say">
  Make the APAC bar clay too, so it reads as the exception, and label it
  “flat”.
</Copy>
<Copy k="comment.working">Sent to Claude · Claude is working…</Copy>
<Copy k="comment.done">
  Claude edited slide 2 · APAC bar recoloured, label now reads “flat”
</Copy>

<Copy k="present.prev">Previous</Copy>
<Copy k="present.count">{current} / {total}</Copy>
<Copy k="present.next">Next</Copy>
<Copy k="present.exit">Exit (Esc)</Copy>

<Copy k="files.user">
  Put the Q3 numbers in a spreadsheet I can open in Excel, with the formulas
  live, export the brief as a PDF for the board pack, and save the pre-read
  deck as a PowerPoint file.
</Copy>
<Copy k="files.reply">
  Three files. The workbook keeps the QoQ column as formulas so it
  recalculates if you change an actual; the PDF is the brief as it stands
  now, paginated for the pack; the .pptx opens in PowerPoint or Keynote with
  the charts as native, editable shapes.
</Copy>
<Copy k="files.row.aria">Preview {name} ({kind}, {ext})</Copy>
<Copy k="files.xlsx.name">Q3 budget</Copy>
<Copy k="files.xlsx.type">Spreadsheet</Copy>
<Copy k="files.pdf.name">Q3 stakeholder brief</Copy>
<Copy k="files.pdf.type">Document</Copy>
<Copy k="files.pptx.name">Q3 board pre-read</Copy>
<Copy k="files.pptx.type">Presentation</Copy>
<Copy k="files.viewer.slideAria">Slide {current} of {total}</Copy>

<Copy k="cards.weather.user">
  What’s the weather in San Francisco this weekend?
</Copy>
<Copy k="cards.weather.reply">
  Mild and partly cloudy through Sunday, with a chance of showers Monday.
</Copy>
<Copy k="cards.recipe.user">
  Something quick with the salmon and the leftover rice for four tonight?
</Copy>
<Copy k="cards.recipe.reply">
  Miso-glazed salmon bowls: about 30 minutes, one pan, and it uses the rice
  you already have.
</Copy>
<Copy k="cards.trail.user">
  Find a half-day hike near Tahoe with the best views.
</Copy>
<Copy k="cards.trail.reply">
  Eagle Falls is the one. Short, steep, and the lake view at the top is
  the postcard.
</Copy>
<Copy k="cards.playlist.user">
  Make me a 30-minute trail-running playlist. Steady, no lyrics.
</Copy>
<Copy k="cards.playlist.reply">
  Built one from your liked songs. Six instrumental tracks, all sitting
  around 165 BPM.
</Copy>
`;export{e as default};