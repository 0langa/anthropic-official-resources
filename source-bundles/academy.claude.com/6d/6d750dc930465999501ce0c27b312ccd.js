var e=`---
kind: widget-copy
---

{/* Learner-facing copy for StartBuilder.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders (the editable blanks) and must survive verbatim. */}

<Copy k="lead">Build a prompt for a real piece of your work.</Copy>
<Copy k="roleLabel">Fill the blanks for</Copy>
<Copy k="roleNone">I'll fill these in myself</Copy>

<Copy k="step1">Where is the work?</Copy>
<Copy k="tile.folder.name">Files on my computer</Copy>
<Copy k="tile.folder.term">Folders</Copy>
<Copy k="tile.app.name">A program I use</Copy>
<Copy k="tile.app.term">Extensions, or computer use</Copy>
<Copy k="tile.web.name">A website</Copy>
<Copy k="tile.web.term">The built-in browser</Copy>
<Copy k="tile.connector.name">Email, calendar, Drive</Copy>
<Copy k="tile.connector.term">Connectors</Copy>

<Copy k="step2">What do you need to do?</Copy>
<Copy k="job.prep">Get ready for a meeting or call</Copy>
<Copy k="job.write">Write something up</Copy>
<Copy k="job.backlog">Get through a backlog</Copy>
<Copy k="job.update">Do a regular update</Copy>
<Copy k="job.answer">Find an answer in our stuff</Copy>
<Copy k="job.log">Log these into a system</Copy>
<Copy k="empty2">Now pick what you need to do.</Copy>

{/* The blanks' placeholder labels, shown inside the prompt until typed over. */}
<Copy k="slot.project">project</Copy>
<Copy k="slot.app">app</Copy>
<Copy k="slot.site">site</Copy>
<Copy k="slot.drive">Drive and Gmail</Copy>
<Copy k="slot.destination">destination</Copy>
<Copy k="slot.make">what to make</Copy>
<Copy k="slot.action">what to do</Copy>
<Copy k="slot.each">each week</Copy>
<Copy k="slot.meeting">meeting</Copy>
<Copy k="slot.question">question</Copy>

<Copy k="prompt.folder">Read everything in my {project} folder.</Copy>
<Copy k="prompt.app">Use {app} on my computer.</Copy>
<Copy k="prompt.web">Check {site}.</Copy>
<Copy k="prompt.connector">Pull the latest from {drive}.</Copy>

<Copy k="do.prep">
  Put together a prep brief for {meeting} and put it in {destination}.
</Copy>
<Copy k="do.write">
  Pull it together into {make} and put it in {destination}.
</Copy>
<Copy k="do.backlog">
  Go through them one by one, {action}, and put the results in {destination}.
</Copy>
<Copy k="do.update">
  Refresh {make} with anything new since last time, and keep it in
  {destination}, ready to run again {each}.
</Copy>
<Copy k="do.answer">
  Find the answer to {question} and show me where it came from.
</Copy>
<Copy k="do.log">Enter each one into {destination}, matching how it's set up.</Copy>
<Copy k="checkin">Check in with me before you finish.</Copy>

<Copy k="stepsTitle">Before you send</Copy>
<Copy k="step.download">Download the desktop app.</Copy>
<Copy k="step.folder">Give Claude the {folder} where this work lives.</Copy>
<Copy k="step.folder.link">folder</Copy>
<Copy k="step.tools">
  Connect the app's connector or extension from the {directory}, or turn on
  {computerUse} if it has neither.
</Copy>
<Copy k="step.tools.directory">directory</Copy>
<Copy k="step.tools.computerUse">computer use</Copy>
<Copy k="step.web">
  In {settings}, connect your Chrome browser or use the {builtIn}.
</Copy>
<Copy k="step.web.settings">Settings</Copy>
<Copy k="step.web.builtIn">built-in one</Copy>

<Copy k="role.sales">Sales</Copy>
<Copy k="role.sales.project">Acme account</Copy>
<Copy k="role.sales.site">their website and recent news</Copy>
<Copy k="role.sales.drive">Gmail and my calendar</Copy>
<Copy k="role.sales.meeting">my renewal call with Acme</Copy>
<Copy k="role.sales.destination">the Acme folder</Copy>
<Copy k="role.sales.checkin">
  Check with me before the call if anything looks off.
</Copy>

<Copy k="role.marketing">Marketing</Copy>
<Copy k="role.marketing.project">Q3 launch campaign</Copy>
<Copy k="role.marketing.site">competitor sites and recent coverage</Copy>
<Copy k="role.marketing.drive">our shared Drive</Copy>
<Copy k="role.marketing.make">
  a launch plan, with the messaging and channels laid out
</Copy>
<Copy k="role.marketing.destination">the campaign folder</Copy>
<Copy k="role.marketing.checkin">Check with me before you lock the timeline.</Copy>

<Copy k="role.recruiting">Recruiting</Copy>
<Copy k="role.recruiting.project">open role</Copy>
<Copy k="role.recruiting.site">each candidate's LinkedIn and portfolio</Copy>
<Copy k="role.recruiting.drive">Greenhouse and my calendar</Copy>
<Copy k="role.recruiting.action">
  score each against the role, with strengths and gaps
</Copy>
<Copy k="role.recruiting.destination">a shortlist in Drive</Copy>
<Copy k="role.recruiting.checkin">Check with me before you rule anyone out.</Copy>

<Copy k="role.finance">Finance</Copy>
<Copy k="role.finance.project">monthly close</Copy>
<Copy k="role.finance.app">my accounting app</Copy>
<Copy k="role.finance.drive">the shared finance Drive</Copy>
<Copy k="role.finance.make">the monthly finance summary</Copy>
<Copy k="role.finance.destination">our finance tracker in Sheets</Copy>
<Copy k="role.finance.each">each month</Copy>
<Copy k="role.finance.checkin">
  Flag any variances that look off before you finish.
</Copy>

<Copy k="role.research">Research</Copy>
<Copy k="role.research.project">market research</Copy>
<Copy k="role.research.site">current figures and news</Copy>
<Copy k="role.research.drive">our shared Drive</Copy>
<Copy k="role.research.question">how our pricing compares to the market</Copy>
<Copy k="role.research.checkin">Flag anything you're unsure about.</Copy>

<Copy k="role.product">Product</Copy>
<Copy k="role.product.project">current project</Copy>
<Copy k="role.product.drive">Slack and my notes</Copy>
<Copy k="role.product.destination">our Linear board</Copy>
<Copy k="role.product.checkin">
  Check with me on priorities before you create the issues.
</Copy>

<Copy k="copy">Copy</Copy>
<Copy k="copied">Copied</Copy>
`;export{e as default};