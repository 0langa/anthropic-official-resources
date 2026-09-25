var e=`---
kind: widget-copy
---

<Copy k="required">Required</Copy>
<Copy k="optional">Optional</Copy>
<Copy k="mark.done">Mark "{title}" as done</Copy>
<Copy k="mark.notDone">Mark "{title}" as not done</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: bf4a8cd25d41b9da */}
<Copy k="widget.description">
  Checklist: three items to tick off before Claude Tag can turn call
  transcripts into meeting notes and filed tickets. Where: the project channel
  the recorder posts transcripts into, with the instruction sent in the
  channel, not a thread. Tools, both required: a call recorder such as Zoom,
  Gong or Fathom that posts each transcript to the channel, connected by an
  admin so Claude can open the transcript, with an @Claude mention in its
  message template so each post reaches Claude without anyone tagging it; and
  a tracker such as Linear, Jira or Asana, connected with write access so
  Claude can file and reassign tickets. Setting: Respond automatically is on,
  so Claude acts on transcript posts without a person mentioning it.
</Copy>
<Copy k="widget.summary">
  Checklist: what to set up before Claude Tag turns call transcripts into
  notes and tickets: the project channel the recorder posts to, a call
  recorder and a tracker, both required, and Respond automatically turned on.
</Copy>
`;export{e as default};