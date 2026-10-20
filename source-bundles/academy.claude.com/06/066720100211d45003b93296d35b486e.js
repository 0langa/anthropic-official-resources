var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DsLadder.tsx. Keys are machine identifiers:
    translate ONLY the text between the tags.
    \`label\` describes the figure for screen readers, and \`tabs.label\` names
    the list of four levels. \`open\` and \`who\` are the bold labels over the two
    answers shown for the selected level.
    Each of \`stage.you\`, \`stage.people\`, \`stage.org\` and \`stage.default\` has a
    short \`.name\` and those two answers: \`.open\` (who can use the design
    system) and \`.who\` (who can set the level).
    \`pane.share\` is the Share button and the \`sheet\` keys are the parts of its
    menu, all in Claude's own wording. The three \`sheet.access\` keys are what
    General access reads at the first three levels. The name of the section
    behind the menu comes from _shared.copy.mdx. The design system's name is
    sample data in _shared.tsx. */}

<Copy k="label">
  Who can use a design system at each level of sharing: only you, people you
  invite, everyone in your organization, and default. Select a level to see who
  can use the design system and who can set that level.
</Copy>
<Copy k="tabs.label">Levels of sharing, from fewest people to most</Copy>

<Copy k="open">Who can use it</Copy>
<Copy k="who">Who can set it</Copy>

<Copy k="stage.you.name">Only you</Copy>
<Copy k="stage.you.open">
  Only you. It’s in your Design system menu, so you can try it before you share
  it.
</Copy>
<Copy k="stage.you.who">
  No one needs to. Every new design system starts at this level.
</Copy>

<Copy k="stage.people.name">People you invite</Copy>
<Copy k="stage.people.open">
  You and the people you invite. It’s in their Design system menu, under Shared
  with you.
</Copy>
<Copy k="stage.people.who">
  You, from Share at the top of the design system’s page.
</Copy>

<Copy k="stage.org.name">Everyone</Copy>
<Copy k="stage.org.open">
  Everyone in your organization. It’s in their Design system menu, ready to
  select.
</Copy>
<Copy k="stage.org.who">
  An owner of your organization, from Share, once you’ve given them Owner
  access.
</Copy>

<Copy k="stage.default.name">Default</Copy>
<Copy k="stage.default.open">
  Everyone in your organization. It’s already selected when they start a deck or
  a design.
</Copy>
<Copy k="stage.default.who">
  An owner of your organization, once it’s shared with everyone. There is one
  default per organization, and setting a new one replaces the old.
</Copy>

<Copy k="pane.share">Share</Copy>
<Copy k="sheet.add">Add people</Copy>
<Copy k="sheet.people">People with access</Copy>
<Copy k="sheet.owner">Owner</Copy>
<Copy k="sheet.default">Default design system</Copy>
<Copy k="sheet.general">General access</Copy>
<Copy k="sheet.access.you">Only you</Copy>
<Copy k="sheet.access.people">Only people invited</Copy>
<Copy k="sheet.access.org">Anyone at your organization</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 1f1f1fadcccf3ce4 */}
<Copy k="widget.description">
  Explorer: the four levels of sharing a design system can have, from fewest
  people to most, each pictured in the Share menu. Each level says who can use
  the design system and who can set it. Every new design system starts at Only
  you. People you invite is set by you from Share, and puts it in their Design
  system menu. Everyone puts it in the menu of your whole organization, and
  takes an owner of your organization who has Owner access to it. Default
  means it is already selected when teammates start a deck or a design. An
  owner of your organization sets it once it is shared with everyone, and each
  organization has one default.
</Copy>
<Copy k="widget.summary">
  Explorer: four levels of sharing a design system, which are only you, people
  you invite, everyone, and default. Select a level to learn who can use it
  and who can set that level.
</Copy>
`;export{e as default};