var e=`---
kind: widget-copy
---

{/* Learner-facing copy for WhatClaudeCanUse.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`alt\` is the whole diagram in
    a few sentences, for screen readers. \`savesTo\` labels the public
    channel → workspace notes arrow; \`availableIn\` labels the dashed
    workspace notes → channel arrows (what is kept there can be used from
    that channel), so keep both arrow labels short. */}

<Copy k="alt">
  A DM keeps its notes for you only and a private channel keeps its notes for
  its members only. A public channel keeps its notes for that channel, and
  Claude can also add workspace notes from it. Workspace notes are available
  in the public channel and in the private channel. Nothing connects the DM
  and workspace notes.
</Copy>

<Copy k="place.dm">DM</Copy>
<Copy k="place.private">Private channel</Copy>
<Copy k="place.public">Public channel</Copy>

<Copy k="memoryPill">Notes</Copy>
<Copy k="workspaceMemory">Workspace notes</Copy>

<Copy k="caption.dm">Used only in this DM</Copy>
<Copy k="caption.private">Used only in this channel</Copy>
<Copy k="caption.public">Used only in this channel. Claude can add workspace notes from here.</Copy>

<Copy k="savesTo">saves to</Copy>
<Copy k="availableIn">available in</Copy>
`;export{e as default};