var e=`---
kind: widget-copy
---

{/* Learner-facing copy for PrependedStack.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim; \`{br}\` marks a line break in
    a block's monospace excerpt. The widget steps through the five blocks
    loaded into context before the learner's first message (system prompt,
    user preferences, tool list, skill list, written memory), each with
    who wrote it, what it is and an excerpt, then a summary slide; token
    counts are data in the widget. */}

<Copy k="label">Before your first message</Copy>

<Copy k="caption">
  An illustrative mock-up of what Claude sees before your first message
  arrives. Contents and token counts in this diagram are representative, but
  not byte-accurate to the current state of any specific Claude product.
</Copy>

<Copy k="bar.total">~{k}k tok</Copy>

<Copy k="bar.aria">Prepended blocks, sized by tokens</Copy>

<Copy k="seg.aria">{name}, ~{tokens} tokens</Copy>

<Copy k="tokens">~{tokens} tokens</Copy>

<Copy k="tok">~{tokens} tok</Copy>

<Copy k="writtenBy">written by {author}</Copy>

<Copy k="block.system.name">System Prompt</Copy>

<Copy k="block.system.author">Anthropic (the app's developers)</Copy>

<Copy k="block.system.what">
  Instructions that define Claude's role, tone, and guardrails inside
  Cowork.
</Copy>

<Copy k="block.system.excerpt">
  You are Claude, operating inside a product called Cowork. Your goal is to
  help the user accomplish work tasks. You have access to the user's
  connected tools, memory, and skills. When the user asks you to take an
  action, prefer using a tool over describing what you would do
</Copy>

<Copy k="block.prefs.name">User Preferences</Copy>

<Copy k="block.prefs.author">you, in Settings</Copy>

<Copy k="block.prefs.what">
  Free-text preferences you typed once; the app prepends them to every
  conversation.
</Copy>

<Copy k="block.prefs.excerpt">
  I prefer concise answers. I'm in the Pacific timezone. Address me by my
  first name. Don't use emoji.
</Copy>

<Copy k="block.tools.name">Tool List</Copy>

<Copy k="block.tools.author">tool & MCP developers</Copy>

<Copy k="block.tools.what">
  Definitions for every tool Claude can call in this session — names,
  descriptions, and what they expect.
</Copy>

<Copy k="block.tools.excerpt">
  email_send — Send an email on the user's behalf. Needs recipients, a
  subject, and a body.{br}calendar_list_events — List events on the user's
  calendar for a date range.{br}file_search — Search the user's files by
  name or content.{br}messages_read — Read recent messages from a team
  channel.{br}wiki_search — Search the team wiki.{br}…and 30 more
</Copy>

<Copy k="block.skills.name">Skill List</Copy>

<Copy k="block.skills.author">skill authors</Copy>

<Copy k="block.skills.what">
  Short manifest of available skills; a skill is only read in full later, if
  Claude thinks the situation calls for one.
</Copy>

<Copy k="block.skills.excerpt">
  inbox-digest — Summarize unread messages across channels{br}brand-voice —
  Apply company style guide to drafts{br}meeting-prep — Pull agenda,
  attendees, and recent docs ahead of a meeting{br}release-notes — Turn a
  git diff into customer-facing release notes
</Copy>

<Copy k="block.memory.name">Written Memory</Copy>

<Copy k="block.memory.author">Claude, in your earlier sessions</Copy>

<Copy k="block.memory.what">
  Notes Claude wrote down for itself about you and your work. The memory
  file from the week above is loaded here, before you type a word.
</Copy>

<Copy k="block.memory.excerpt"># Memory{br}- Coordinating the November leadership summit (~250 attendees, working back from Nov 12){br}- Team updates: short and bulleted. Vendor emails: formal, full sentences.{br}- Sends Dana a recap every Friday; voice: warm, direct, brief</Copy>

<Copy k="summary.heading">~{tokens} tokens, {count} authors</Copy>

<Copy k="status.summary">Summary</Copy>

<Copy k="status.step">{n} / {total}</Copy>

<Copy k="status.reached">{n} / {total} · summary reached</Copy>

<Copy k="nav.back">Back</Copy>

<Copy k="nav.next">Next</Copy>

<Copy k="nav.summary">Summary</Copy>
`;export{e as default};