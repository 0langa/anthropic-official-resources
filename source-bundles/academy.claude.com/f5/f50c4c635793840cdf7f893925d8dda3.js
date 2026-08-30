var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DecisionMemo.tsx — the Decision Memo worksheet
    (see academy-web src/components/mdx/WidgetCopy.tsx). Keys are machine
    identifiers — translate ONLY the text between the tags. \`{name}\` tokens
    are runtime placeholders and must survive verbatim. The \`export.*\` keys
    are baked into the learner's downloaded copy of their answers. */}

<Copy k="part1.h">Part I: Name the project</Copy>
<Copy k="part1.sub">
  In one paragraph: what the work is for, your standards for it, and which
  Value Lens dimensions carry the most weight.
</Copy>
<Copy k="part1.ph">
  What the work is for, your standards, and the Value Lens dimensions that
  weigh most...
</Copy>

<Copy k="part2.h">Part II: Problem Awareness</Copy>
<Copy k="part2.sub">
  Before choosing a tool, get clear on the problem itself. What are you
  actually trying to solve at this stage? What would a good outcome look
  like — and is this a problem where AI genuinely helps, or one better
  handled another way? Misreading the problem is the most common reason a
  Delegation goes wrong.
</Copy>
<Copy k="part2.ph">
  The problem you are actually solving, what a good outcome looks like, and
  whether AI is the right approach...
</Copy>

<Copy k="part3.h">Part III: Platform Awareness</Copy>
<Copy k="part3.sub">
  Reconsider the tool from your Production Lens audit: what can it do, and
  where could it help here? If you do not know it well enough to say, that
  is your answer: you are not ready to delegate to it yet.
</Copy>
<Copy k="part3.ph">What the tool can do, and where it could help here...</Copy>

<Copy k="part4.h">Part IV: Task Delegation</Copy>
<Copy k="part4.sub">
  Stage by stage, decide where AI fits and where it does not, then run each
  through the three Diligence checks (Creation, Transparency, Deployment).
</Copy>

<Copy k="col.stage">Stage of the project</Copy>
<Copy k="col.ai">AI involvement (what, exactly?)</Copy>
<Copy k="col.rationale">Rationale (which lens, which standard?)</Copy>
<Copy k="colPh.stage">Name the stage</Copy>
<Copy k="colPh.ai">What, exactly?</Copy>
<Copy k="colPh.rationale">Which lens, which standard?</Copy>
<Copy k="addRow">+ Add a stage</Copy>
<Copy k="removeRow">Remove stage {n}</Copy>
<Copy k="aria.cell">{col}, stage {n}</Copy>

<Copy k="part5.h">Part V (reach goal)</Copy>
<Copy k="part5.sub">
  Test your plan on a finished project whose standards you already know.
  Were your instincts right? What surprised you?
</Copy>
<Copy k="part5.ph">Were your instincts right? What surprised you?</Copy>

<Copy k="copyBtn">Copy my answers</Copy>
<Copy k="copyBtn.done">Copied</Copy>
<Copy k="dlBtn">Download as HTML</Copy>
<Copy k="dlBtn.done">Downloaded</Copy>
<Copy k="save.saved">Saved</Copy>
<Copy k="save.unavailable">Autosave unavailable</Copy>
<Copy k="note">
  Your answers save in this browser only. They are not saved to your Academy
  account and do not move to another device. Use Copy my answers, or
  Download as HTML to save a styled copy, to keep them in your own files.
</Copy>

<Copy k="export.title">The Decision Memo</Copy>
<Copy k="export.kicker">AI Fluency for creative work</Copy>
<Copy k="export.stamp">Your responses, exported {date}</Copy>
<Copy k="export.footer">
  These are your own responses. They are not saved to your Academy account.
</Copy>
<Copy k="export.stage">Stage {n}: {name}</Copy>
<Copy k="export.aiLabel">AI involvement</Copy>
<Copy k="export.rationaleLabel">Rationale</Copy>
<Copy k="export.unanswered">(not yet answered)</Copy>
<Copy k="export.unnamed">(unnamed)</Copy>
<Copy k="export.blank">(blank)</Copy>
<Copy k="export.noStages">(no stages added yet)</Copy>
`;export{e as default};