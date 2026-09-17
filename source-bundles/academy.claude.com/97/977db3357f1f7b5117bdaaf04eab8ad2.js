var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed3.tsx, a working replica of the claude.ai
    message box with a short setup checklist above it: the learner picks a
    kind of work (role), gives Claude a tool or file, fills a blank in the
    prompt, then picks an Output or raises the model's effort. Keys are
    machine identifiers; translate ONLY the text between the tags. \`{name}\`
    tokens are runtime placeholders and must survive verbatim: in the
    \`role.ROLE.template\` prompts \`{fill}\` is the editable blank (its
    placeholder is \`role.ROLE.fill\`) and \`{conn}\` is the tool chip (its
    text is a \`conn.KEY.prompt\` value, so those must read as a phrase
    inside the sentence); \`{tool}\`, \`{kind}\`, \`{model}\` and \`{effort}\`
    are filled with other values from this file.
    Product control names (Output, Effort, Connectors, Slides, Design,
    Artifact, Research, Web search, Memory, Extended thinking) should match
    the claude.ai interface in the target language; the model names Claude
    Fable, Opus, Sonnet and Haiku stay as they are. "+" names the
    composer's plus button; "⌘U", file names and the sample design system
    "Halden" are data in the widget and do not appear here. */}

<Copy k="rolePicker.lead">Try a task for</Copy>
<Copy k="rolePicker.aria">Kind of work</Copy>
<Copy k="guide.label">Walk through the setup</Copy>
<Copy k="guide.ready.title">Ready to send.</Copy>
<Copy k="guide.ready.sub">
  That is the whole setup: what Claude should read, what you want back, and
  the form it should take.
</Copy>
<Copy k="learnMore">Learn more →</Copy>

<Copy k="role.general.label">general work</Copy>
<Copy k="role.general.option">General work</Copy>
<Copy k="role.general.title">Turn the month into your update</Copy>
<Copy k="role.general.template">
  Read across {conn} for the last month: where my time went, what got
  decided, what slipped. Turn it into my month-end update for {fill}, a few
  slides I can talk through in ten minutes.
</Copy>
<Copy k="role.general.fill">my manager or skip-level</Copy>
<Copy k="role.general.step1.label">Give Claude your tools to read</Copy>
<Copy k="role.general.step1.hint">
  Click the dashed field and choose which tools Claude reads from.
</Copy>
<Copy k="role.general.step2.label">Say who it’s for</Copy>
<Copy k="role.general.step2.hint">
  Claude pitches the update at that level.
</Copy>
<Copy k="role.general.step3.label">Ask for slides</Copy>
<Copy k="role.general.step3.hint">
  Ask for a deck in your message, or open Output under the box and pick
  Slides. You get a deck you can present, edit and export.
</Copy>

<Copy k="role.personal.label">personal</Copy>
<Copy k="role.personal.option">Personal</Copy>
<Copy k="role.personal.title">Turn the trip into something you’ll keep</Copy>
<Copy k="role.personal.template">
  Read through the attached photos and notes and make me a recap of {fill}
  for everyone who came: where we went, what we ate, the things we said we’d
  remember. Something we’d actually open again in a year.
</Copy>
<Copy k="role.personal.fill">the trip</Copy>
<Copy k="role.personal.step1.label">Add your photos and notes</Copy>
<Copy k="role.personal.step1.hint">
  Open + and choose Add files or photos. Claude reads images directly.
</Copy>
<Copy k="role.personal.step2.label">Name the trip</Copy>
<Copy k="role.personal.step2.hint">A place and a month is enough.</Copy>
<Copy k="role.personal.step3.label">Let Claude pick the format</Copy>
<Copy k="role.personal.step3.hint">
  Open Output and choose Artifact. Claude decides what fits, and you get a
  link to send round.
</Copy>

<Copy k="role.sales.label">sales</Copy>
<Copy k="role.sales.option">Sales</Copy>
<Copy k="role.sales.title">Brief yourself before a call</Copy>
<Copy k="role.sales.template">
  Look through {conn} for anything about {fill}. Build me a tracker I can
  sort and filter: what’s open, what’s stalled, what needs me, so I can scan
  it in two minutes before the call.
</Copy>
<Copy k="role.sales.fill">an account or deal</Copy>
<Copy k="role.sales.step1.label">Give Claude your tools to read</Copy>
<Copy k="role.sales.step1.hint">
  Click the dashed field; one tool is enough to start.
</Copy>
<Copy k="role.sales.step2.label">Name the account or deal</Copy>
<Copy k="role.sales.step2.hint">A company, a contact or a deal stage.</Copy>
<Copy k="role.sales.step3.label">Check the model</Copy>
<Copy k="role.sales.step3.hint">
  Open the model selector. The default keeps a quick scan fast.
</Copy>

<Copy k="role.marketing.label">marketing</Copy>
<Copy k="role.marketing.option">Marketing</Copy>
<Copy k="role.marketing.title">Mock up the launch page</Copy>
<Copy k="role.marketing.template">
  Pull what’s working about {fill} from {conn}: the message that lands, the
  proof points, one clear call to action. Mock up the landing page from it,
  in our design system, so the team reacts to something real on Monday.
</Copy>
<Copy k="role.marketing.fill">a campaign or launch</Copy>
<Copy k="role.marketing.step1.label">Pick a tool for Claude to read</Copy>
<Copy k="role.marketing.step1.hint">Messaging or email works well here.</Copy>
<Copy k="role.marketing.step2.label">Name the campaign or launch</Copy>
<Copy k="role.marketing.step2.hint">
  A campaign name, a product or a date.
</Copy>
<Copy k="role.marketing.step3.label">Ask for a design</Copy>
<Copy k="role.marketing.step3.hint">
  Ask for one in your message, or open Output and pick Design. With a design
  system attached it comes out looking like you.
</Copy>

<Copy k="role.legal.label">legal</Copy>
<Copy k="role.legal.option">Legal</Copy>
<Copy k="role.legal.title">Turn a contract into a sortable tracker</Copy>
<Copy k="role.legal.template">
  Read the attached agreement and build me a tracker of every obligation
  that falls on {fill}: the obligation, the section, the deadline. I want to
  sort it by date and hand it to the team.
</Copy>
<Copy k="role.legal.fill">the party you represent</Copy>
<Copy k="role.legal.step1.label">Attach the agreement</Copy>
<Copy k="role.legal.step1.hint">
  Open + and choose Add files, or drag the file in.
</Copy>
<Copy k="role.legal.step2.label">Name the party you represent</Copy>
<Copy k="role.legal.step2.hint">
  So Claude tracks the right side’s obligations.
</Copy>
<Copy k="role.legal.step3.label">Raise the effort</Copy>
<Copy k="role.legal.step3.hint">
  Model selector, then Effort: High or Max for a line-by-line read.
</Copy>

<Copy k="role.finance.label">finance</Copy>
<Copy k="role.finance.option">Finance</Copy>
<Copy k="role.finance.title">
  Reconcile the quarter, every variance flagged
</Copy>
<Copy k="role.finance.template">
  Look through {conn} for {fill}. Give me a spreadsheet of what changed,
  flag anything that doesn’t reconcile, and add a column where I can mark
  each line reviewed.
</Copy>
<Copy k="role.finance.fill">an account, a period, a line item</Copy>
<Copy k="role.finance.step1.label">Pick a tool for Claude to read</Copy>
<Copy k="role.finance.step1.hint">
  Click the dashed field, or open + and choose Connectors.
</Copy>
<Copy k="role.finance.step2.label">Name the account or period</Copy>
<Copy k="role.finance.step2.hint">A quarter, a vendor or a line item.</Copy>
<Copy k="role.finance.step3.label">Raise the effort</Copy>
<Copy k="role.finance.step3.hint">
  Model selector, then Effort: High or Max for methodical work. The
  spreadsheet arrives as a file you open in Excel.
</Copy>

<Copy k="composer.promptAria">Prompt with editable fields</Copy>
<Copy k="composer.removeFile">Remove file</Copy>
<Copy k="composer.addAria">Add files, connectors, and more</Copy>
<Copy k="composer.sendAria">Send (illustration)</Copy>

<Copy k="conn.empty.prompt">pick a tool</Copy>
<Copy k="conn.aria.empty">Pick a tool</Copy>
<Copy k="conn.aria.picked">Tool: {tool}. Click to change.</Copy>
<Copy k="conn.all.label">All tools</Copy>
<Copy k="conn.all.prompt">all my tools</Copy>
<Copy k="conn.drive.label">Drive</Copy>
<Copy k="conn.drive.prompt">my Drive</Copy>
<Copy k="conn.email.label">Email</Copy>
<Copy k="conn.email.prompt">my email</Copy>
<Copy k="conn.calendar.label">Calendar</Copy>
<Copy k="conn.calendar.prompt">my calendar</Copy>
<Copy k="conn.messaging.label">Messaging</Copy>
<Copy k="conn.messaging.prompt">our messaging tool</Copy>
<Copy k="conn.crm.label">CRM</Copy>
<Copy k="conn.crm.prompt">our CRM</Copy>

<Copy k="add.attach">Add files or photos</Copy>
<Copy k="add.folder">Add folder</Copy>
<Copy k="add.recordSkill">Record a skill</Copy>
<Copy k="add.skills">Skills</Copy>
<Copy k="add.connectors">Connectors</Copy>
<Copy k="add.designSystem">Design system</Copy>
<Copy k="add.plugins">Plugins</Copy>
<Copy k="add.research">Research</Copy>
<Copy k="add.webSearch">Web search</Copy>
<Copy k="add.memory">Memory</Copy>

<Copy k="ds.aria">Design system</Copy>
<Copy k="ds.none.label">None</Copy>
<Copy k="ds.defaultBadge">Default</Copy>
<Copy k="ds.manage">Manage design systems</Copy>
<Copy k="ds.new">New design system</Copy>

<Copy k="connMenu.aria">Connectors</Copy>
<Copy k="connMenu.browse">Browse connectors</Copy>
<Copy k="connMenu.manage">Manage connectors</Copy>

<Copy k="output.label">Output</Copy>
<Copy k="output.aria.empty">Output: choose what Claude makes</Copy>
<Copy k="output.aria.picked">Output: {kind}. Click × to remove</Copy>
<Copy k="output.docs.label">Docs</Copy>
<Copy k="output.slides.label">Slides</Copy>
<Copy k="output.design.label">Design</Copy>
<Copy k="output.artifact.label">Artifact</Copy>
<Copy k="output.artifact.suffix">Let Claude pick the format</Copy>

<Copy k="model.aria">Model: {model}</Copy>
<Copy k="model.aria.withEffort">Model: {model} · {effort}</Copy>
<Copy k="model.effortSuffix">· {effort}</Copy>
<Copy k="model.fable.name">Claude Fable</Copy>
<Copy k="model.fable.short">Fable</Copy>
<Copy k="model.fable.desc">For your toughest challenges</Copy>
<Copy k="model.opus.name">Claude Opus</Copy>
<Copy k="model.opus.short">Opus</Copy>
<Copy k="model.opus.desc">Most capable for ambitious work</Copy>
<Copy k="model.sonnet.name">Claude Sonnet</Copy>
<Copy k="model.sonnet.short">Sonnet</Copy>
<Copy k="model.sonnet.desc">Most efficient for everyday tasks</Copy>
<Copy k="model.haiku.name">Claude Haiku</Copy>
<Copy k="model.haiku.short">Haiku</Copy>
<Copy k="model.haiku.desc">Fastest for quick answers</Copy>

<Copy k="effort.label">Effort</Copy>
<Copy k="effort.note">
  Higher effort means more thorough responses, but takes longer and uses
  your limits faster.
</Copy>
<Copy k="effort.defaultBadge">Default</Copy>
<Copy k="effort.low.name">Low</Copy>
<Copy k="effort.low.desc">Quick replies to simple questions</Copy>
<Copy k="effort.medium.name">Medium</Copy>
<Copy k="effort.medium.desc">Light, casual tasks</Copy>
<Copy k="effort.high.name">High</Copy>
<Copy k="effort.high.desc">Balanced for everyday work</Copy>
<Copy k="effort.max.name">Max</Copy>
<Copy k="effort.max.desc">The hardest problems. Takes longest.</Copy>
<Copy k="thinking.name">Extended thinking</Copy>
<Copy k="thinking.desc">Think longer for complex tasks</Copy>
<Copy k="thinking.aria">
  Extended thinking: think longer for complex tasks
</Copy>

<Copy k="chin.project">Project</Copy>
`;export{e as default};