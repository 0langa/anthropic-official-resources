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
<Copy k="path.a.ask.bold">
  Your updates reach them each time a new version is published.
</Copy>

<Copy k="path.b.tab">I’m not sure it exists yet</Copy>
<Copy k="path.b.shape">discovery</Copy>
<Copy k="path.b.tag">Path B</Copy>
<Copy k="path.b.name">You’re not sure the marketplace is set up</Copy>
<Copy k="path.b.means">
  Common in orgs that just rolled out Cowork. An admin has to set the
  marketplace up.
</Copy>
<Copy k="path.b.step">
  Find out {who} — usually IT, an enablement lead, or whoever owns software
  tools. Ask them whether a private plugin marketplace is set up, and who
  you’d hand a plugin to.
</Copy>
<Copy k="path.b.step.who">who manages Claude for your organization</Copy>
<Copy k="path.b.ask1">The ask, in one line: {quote}</Copy>
<Copy k="path.b.ask1.quote">
  “We’ve built a Cowork plugin our team wants to share. Is the org
  marketplace set up, and who owns it?”
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
  Head to the plugins page in {settings} to create your private marketplace:
  upload a plugin directly, or connect a GitHub repo so updates sync
  automatically. Then set each plugin’s install preference — {available},
  {byDefault}, {required}, or {hidden} — org-wide or, on Enterprise,
  per group.
</Copy>
<Copy k="path.c.step.settings">Organization settings</Copy>
<Copy k="path.c.ask">
  The full admin walkthrough lives in the help center: {title}. Group-level
  targeting, share-event audit logs, and the rest of the admin controls are
  beyond what an individual contributor needs in this course.
</Copy>
<Copy k="path.c.ask.title">
  Manage plugins for your organization
</Copy>

<Copy k="tier.available.name">Available to install</Copy>
<Copy k="tier.available.desc">
  In the Directory for anyone who wants it. Right for most team plugins.
</Copy>
<Copy k="tier.byDefault.name">Installed by default</Copy>
<Copy k="tier.byDefault.desc">
  Already on for your teammates; they can switch it off.
</Copy>
<Copy k="tier.required.name">Required</Copy>
<Copy k="tier.required.desc">
  On and stays on. Reserve for compliance or must-run-the-same-way work.
</Copy>
<Copy k="tier.hidden.name">Not available</Copy>
<Copy k="tier.hidden.desc">
  In the marketplace but not shown in the Directory — for staging or
  restricted rollouts.
</Copy>

<Copy k="footer">
  Whichever path applies, the goal is the same: a skill that started on one
  laptop becomes something a teammate can install and run.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: a06b7d94d61002ac */}
<Copy k="widget.description">
  Explorer: a three-way tab switcher lets the learner pick which distribution
  situation matches their organization in Claude Cowork, then shows the
  matching path and next step. One path covers knowing the marketplace owner,
  where the job is a hand-off with the owner choosing an install setting
  (available to install, installed by default, required, or not available).
  Another covers
  uncertainty about whether a private marketplace exists, with guidance on
  whom to ask and a manual fallback of exporting and sharing a plugin folder
  directly. The third is for admins, pointing to organization settings for
  creating a marketplace and setting install preferences. The goal is helping
  learners identify their own org's setup and the correct next action for
  getting a plugin into teammates' hands.
</Copy>
<Copy k="widget.summary">
  Explorer: a three-tab switcher lets learners pick the distribution situation
  matching their organization, then shows the path and next step for sharing a
  Cowork plugin, covering hand-off, discovery, and admin setup scenarios.
</Copy>
`;export{e as default};