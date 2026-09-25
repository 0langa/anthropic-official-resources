var e=`---
kind: widget-copy
---

{/* Learner-facing copy for CapabilityList.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Keys are namespaced by the
    widget's \`variant\` prop: anywhere, channel. */}

{/* ── anywhere (AlwaysCan) ── */}

<Copy k="anywhere.aria">What Claude can do anywhere it is added, before any tools are connected</Copy>

<Copy k="anywhere.group.reads.title">Reads what is in front of it</Copy>
<Copy k="anywhere.row.reads1.label">Reads the channel</Copy>
<Copy k="anywhere.row.reads1.body">
  everything posted there, including from before it joined, so you do not
  have to re-explain the background.
</Copy>
<Copy k="anywhere.row.reads2.label">Reads files and links people share</Copy>
<Copy k="anywhere.row.reads2.body">
  documents, images and pages dropped into the conversation become part of
  what it works from.
</Copy>

<Copy k="anywhere.group.finds.title">Finds information beyond the channel</Copy>
<Copy k="anywhere.row.finds1.label">Searches your workspace’s public channels</Copy>
<Copy k="anywhere.row.finds1.body">
  decisions and context from other teams, when you point it at them.
</Copy>
<Copy k="anywhere.row.finds2.label">Searches the web</Copy>
<Copy k="anywhere.row.finds2.body">for anything the workspace does not hold.</Copy>

<Copy k="anywhere.group.makes.title">Makes outputs beyond text</Copy>
<Copy k="anywhere.row.makes1.label">Builds artifacts, like charts, documents and web pages</Copy>
<Copy k="anywhere.row.makes1.body">
  it can work on what it read or found, so a question about numbers can come
  back as a chart and a long thread as a document or a web page.
</Copy>

{/* ── channel (ChannelChanges) ── */}

<Copy k="channel.section.collaboration.head">{title} {sub}</Copy>
<Copy k="channel.section.collaboration.head.title">Collaboration:</Copy>
<Copy k="channel.section.collaboration.head.sub">who is in the work</Copy>

<Copy k="channel.section.collaboration.item1.claim">In a public channel, {bold}.</Copy>
<Copy k="channel.section.collaboration.item1.claim.bold">
  colleagues can work together with Claude
</Copy>
<Copy k="channel.section.collaboration.item1.body">
  Tag Claude into an ongoing discussion and steer it together, or pick up
  where someone left off.
</Copy>

<Copy k="channel.section.collaboration.item2.claim">In the same channel, {bold}.</Copy>
<Copy k="channel.section.collaboration.item2.claim.bold">
  several people can work with Claude in parallel
</Copy>
<Copy k="channel.section.collaboration.item2.body">
  Each new thread is its own piece of work, so many can run at once.
</Copy>

<Copy k="channel.section.collaboration.item3.claim">And {bold}.</Copy>
<Copy k="channel.section.collaboration.item3.claim.bold">
  Claude does not have to wait for an @-mention
</Copy>
<Copy k="channel.section.collaboration.item3.body">
  With {link} on, Claude can be assigned a job in the channel and contribute
  on its own (lesson 7).
</Copy>
<Copy k="channel.section.collaboration.item3.body.link">untagged replies</Copy>

<Copy k="channel.section.tools.head">{title} {sub}</Copy>
<Copy k="channel.section.tools.head.title">Tool connections:</Copy>
<Copy k="channel.section.tools.head.sub">what Claude can reach</Copy>

<Copy k="channel.section.tools.item1.claim">In channels, {bold}.</Copy>
<Copy k="channel.section.tools.item1.claim.bold">
  Claude can reach your team’s tools
</Copy>
<Copy k="channel.section.tools.item1.body">
  On top of the channel’s history and discussions, Claude can read and work
  in the {link}, so a task can finish in the thread where it was asked.
</Copy>
<Copy k="channel.section.tools.item1.body.link">tools connected to the channel</Copy>

<Copy k="channel.section.tools.item2.claim">{bold}.</Copy>
<Copy k="channel.section.tools.item2.claim.bold">
  Claude can also use your own connectors, for your requests
</Copy>
<Copy k="channel.section.tools.item2.body">
  When a request you make needs a connector from your own Claude account,
  Claude asks for permission to use your tools, then uses them under your
  name, only for your request. You can also have Claude show you each response
  before it posts to the channel.
</Copy>

<Copy k="channel.section.memory.head">{title} {sub}</Copy>
<Copy k="channel.section.memory.head.title">Memory:</Copy>
<Copy k="channel.section.memory.head.sub">how Claude learns and improves</Copy>

<Copy k="channel.section.memory.item1.claim">In channels, {bold}.</Copy>
<Copy k="channel.section.memory.item1.claim.bold">
  your team’s standards become Claude’s standards
</Copy>
<Copy k="channel.section.memory.item1.body">
  Claude keeps memory notes for each channel, called channel notes. Decisions
  and corrections Claude saves go there and improve Claude’s judgment in that
  channel’s later work.
</Copy>

<Copy k="channel.section.memory.item2.claim">{bold}.</Copy>
<Copy k="channel.section.memory.item2.claim.bold">
  What every channel should know goes in workspace notes
</Copy>
<Copy k="channel.section.memory.item2.body">
  From a public channel, Claude can also save a {link}, such as an
  organization-wide naming rule. Claude can use workspace notes in every
  channel of the workspace, so Claude is designed to save there only what no
  channel would mind everyone in the workspace reading.
</Copy>
<Copy k="channel.section.memory.item2.body.link">workspace note</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 11684edd6e247d7c */}
<Copy k="widget.description.anywhere">
  Reference list: what Claude can already do in any channel it has been added
  to, even before any tools are connected, in three groups. It reads what is
  in front of it (full channel history, plus files, images, and links people
  share), finds information beyond the channel (searching the workspace's
  other public channels when pointed at them, and the web), and makes outputs
  beyond plain text (building artifacts like charts, documents, or web pages
  from what it read or found). The goal is to show that Claude can already do
  useful work as soon as it is added, before your team's tools or your own are
  connected.
</Copy>
<Copy k="widget.description.channel">
  Reference list: three groups of facts about what changes once Claude works
  in a public channel rather than a DM. Collaboration: colleagues can tag
  Claude into an ongoing discussion and steer it together, several people can
  work with Claude in parallel in separate threads, and with untagged replies
  turned on, Claude can be assigned a job in the channel and contribute
  without an @-mention. Tool connections: Claude can work in the tools
  connected to the channel, so a task can finish in the thread where it was
  asked. When a request needs the personal connectors of the person asking,
  Claude first asks that person's permission, then uses those connectors under
  their name for that request only, and can show the person each response
  before posting it. Memory: each channel has its own channel notes, where the
  decisions and corrections Claude saves improve its later work in that
  channel. From a public channel Claude can also save workspace notes, such as
  an organization-wide naming rule, which it can use in every channel, so it
  is designed to save there only what no channel would mind everyone in the
  workspace reading.
</Copy>
<Copy k="widget.summary.anywhere">
  Reference list: what Claude can already do wherever it is added, before
  tools are connected. It reads the channel and shared files, searches the
  workspace's other public channels and the web, and builds charts, documents,
  and web pages.
</Copy>
<Copy k="widget.summary.channel">
  Reference list: what changes when Claude works in a public channel rather
  than a DM, in three groups: how colleagues work with it together, which team
  tools and personal connectors it can use, and what it keeps in channel notes
  and workspace notes.
</Copy>
`;export{e as default};