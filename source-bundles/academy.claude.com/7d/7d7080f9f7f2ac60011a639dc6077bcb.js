var e=`---
kind: widget-copy
---

{/* Learner-facing copy for TriageFindings.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers:
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The finding summaries and tag
    labels live in this folder's _shared.copy.mdx; file locations and code
    lines live in the .tsx and are not translated. */}

<Copy k="intro">Which pile does each of these findings belong in?</Copy>
<Copy k="groupAria">Finding {n}: what do you do with it?</Copy>
<Copy k="showCode">Show code</Copy>
<Copy k="hideCode">Hide code</Copy>
<Copy k="opt.fix">Fix now</Copy>
<Copy k="opt.ask">Ask why</Copy>
<Copy k="opt.leave">Leave it</Copy>
<Copy k="promptLabel">Prompt</Copy>
<Copy k="copy">Copy</Copy>
<Copy k="copied">Copied</Copy>

<Copy k="f1.fix">Right. Then ask for proof, not "done":</Copy>
<Copy k="f1.prompt">
  Un-skip the empty-email test, restore the original assertion, and show me
  both tests passing.
</Copy>
<Copy k="f1.ask">
  The reason is on the screen: skipping the test made the suite pass. This
  one is a fix.
</Copy>
<Copy k="f1.leave">
  This is the finding that explains "all tests pass." Leaving it keeps the
  hole.
</Copy>

<Copy k="f2.ask">
  Right. Line 4 already trims. The reviewer read it cold and missed that.
  Reviewers can be wrong too, so ask:
</Copy>
<Copy k="f2.prompt">
  You reported that isValidEmail doesn't trim spaces, but line 4 calls
  trim(). Check again and tell me whether the finding stands.
</Copy>
<Copy k="f2.leave">
  Right, if you spotted the trim() yourself. The reviewer missed it. Nothing
  to fix.
</Copy>
<Copy k="f2.fix">
  Line 4 already calls trim(), so there is nothing to fix. Ask why before you
  let Claude add code for a problem that isn't there.
</Copy>

<Copy k="f3.fix">Right.</Copy>
<Copy k="f3.prompt">
  Put API_URL back to the environment variable and show me the diff.
</Copy>
<Copy k="f3.ask">
  The comment already says why: local testing. It's a shortcut that shouldn't
  ship. Fix it.
</Copy>
<Copy k="f3.leave">Then the next deploy sends real signups to localhost.</Copy>

<Copy k="f4.leave">
  Right. Real, small, and not what this review is for. Batch it with other
  style fixes.
</Copy>
<Copy k="f4.fix">Not wrong, just last. Do findings 1 and 3 first.</Copy>
<Copy k="f4.ask">Nothing to ask: it's a style preference. Leave it or batch it.</Copy>

<Copy k="closing">
  Two fixes, each with evidence, and two findings you were right not to act
  on. That's the habit.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: cd86b3beddfa4c91 */}
<Copy k="widget.description">
  Exercise: for each of four findings from a code review tool, the learner
  sorts it into one of three piles: fix now, ask why, or leave it. Each
  finding includes a code excerpt and a short description of the issue it
  raises. Choosing an accepted answer locks the finding and reveals one line
  of feedback, sometimes with a follow-up prompt the learner could give to an
  AI assistant to request a fix or a recheck; other choices explain themselves
  without locking. The exercise teaches that not every flagged issue deserves
  an immediate fix, some are minor enough to batch later, and reviewers
  examining code without full context can sometimes be mistaken, which is
  itself worth questioning rather than acting on automatically.
</Copy>
<Copy k="widget.summary">
  Exercise: for each finding from a code review tool, the learner sorts it as
  fix now, ask why, or leave it, unlocking feedback on each choice. It teaches
  that not every finding needs an immediate fix, and reviewers can sometimes
  be wrong.
</Copy>
`;export{e as default};