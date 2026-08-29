var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ShareDistributionPaths.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Path C's step reuses the
    \`tier.*.name\` values for its bolded install-level list. */}

<Copy k="kicker">Distribution paths</Copy>
<Copy k="intro">
  When you go to share your plugin in Cowork, {lead}. Pick the one that
  matches:
</Copy>
<Copy k="intro.lead">
  what you see depends on how your org has set things up
</Copy>
<Copy k="nextStep">Your next step</Copy>

<Copy k="path.a.tab">It’s there — I know the owner</Copy>
<Copy k="path.a.shape">hand-off</Copy>
<Copy k="path.a.tag">Path A</Copy>
<Copy k="path.a.name">The marketplace exists and you know who runs it</Copy>
<Copy k="path.a.means">
  The path is already paved. Your job is a hand-off, not a setup.
</Copy>
<Copy k="path.a.step">
  Bring your plugin to the {owner} — team lead, enablement, or IT. Tell them
  who it’s for and how it should land. They’ll pick one of the install levels
  below when they publish.
</Copy>
<Copy k="path.a.step.owner">marketplace owner</Copy>
<Copy k="path.a.ask">
  Once it’s published, your teammates see it in their Directory labeled as
  coming from your company. {bold}
</Copy>
<Copy k="path.a.ask.bold">Your updates flow to them automatically.</Copy>

<Copy k="path.b.tab">I’m not sure it exists yet</Copy>
<Copy k="path.b.shape">discovery</Copy>
<Copy k="path.b.tag">Path B</Copy>
<Copy k="path.b.name">You’re not sure the marketplace is set up</Copy>
<Copy k="path.b.means">
  Common in orgs that just rolled out Cowork — the marketplace is an admin
  switch, and someone has to flip it.
</Copy>
<Copy k="path.b.step">
  Find out {who} — usually IT, an enablement lead, or whoever owns software
  tools. Ask them whether a private plugin marketplace is turned on, and who
  you’d hand a plugin to.
</Copy>
<Copy k="path.b.step.who">who manages Claude for your organization</Copy>
<Copy k="path.b.ask1">The ask, in one line: {quote}</Copy>
<Copy k="path.b.ask1.quote">
  “We’ve built a Cowork plugin our team wants to share — is the org
  marketplace turned on, and who owns it?”
</Copy>
<Copy k="path.b.ask2">Until it’s live, you can still {bold} — it’s just manual.</Copy>
<Copy k="path.b.ask2.bold">
  export the plugin folder and hand it to a teammate directly
</Copy>

<Copy k="path.c.tab">I’m the admin</Copy>
<Copy k="path.c.shape">setup</Copy>
<Copy k="path.c.tag">Path C</Copy>
<Copy k="path.c.name">You’re the admin</Copy>
<Copy k="path.c.means">
  Then you’re the person everyone else in this lesson is looking for.
</Copy>
<Copy k="path.c.step">
  Head to {settings} to create your private marketplace — upload a plugin
  directly, or connect a GitHub repo so updates sync automatically. Then set
  each plugin’s install preference — {available}, {byDefault}, {required},
  or {hidden} — org-wide or per group.
</Copy>
<Copy k="path.c.step.settings">Organization settings → Plugins</Copy>
<Copy k="path.c.ask">
  The full admin walkthrough lives in the help center: {title}. Group-level
  targeting, share-event audit logs, and the rest of the admin controls are
  beyond what an individual contributor needs in this course.
</Copy>
<Copy k="path.c.ask.title">
  Manage Claude Cowork plugins for your organization
</Copy>

<Copy k="tier.available.name">Available</Copy>
<Copy k="tier.available.desc">
  In the Directory for anyone who wants it. Right for most team plugins.
</Copy>
<Copy k="tier.byDefault.name">Installed by default</Copy>
<Copy k="tier.byDefault.desc">
  Already on when teammates open Cowork; they can switch it off.
</Copy>
<Copy k="tier.required.name">Required</Copy>
<Copy k="tier.required.desc">
  On and stays on. Reserve for compliance or must-run-the-same-way work.
</Copy>
<Copy k="tier.hidden.name">Hidden</Copy>
<Copy k="tier.hidden.desc">
  In the marketplace but not shown in the Directory — for staging or
  restricted rollouts.
</Copy>

<Copy k="footer">
  Whichever path applies, the goal is the same: a skill that started on one
  laptop becomes something a teammate can install and run.
</Copy>
`;export{e as default};