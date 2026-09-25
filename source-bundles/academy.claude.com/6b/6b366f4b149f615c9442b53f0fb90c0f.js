var e=`---
kind: widget-copy
---

{/* Shared window chrome (You/Claude, the bar, copy control, output cards)
    lives in _shared.copy.mdx. */}

<Copy k="eyes.label">Claude reacted with eyes: it has started</Copy>
<Copy k="replay">Replay</Copy>
<Copy k="plan.asOf">todos as of {time}</Copy>
<Copy k="plan.justNow">just now</Copy>
<Copy k="fold.more">Show full reply</Copy>
<Copy k="facts.title">What happened here</Copy>
<Copy k="footer">This is an illustrative example of what Claude Tag can do.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 15cf96057e412af5 */}
<Copy k="widget.description">
  Film: in a project channel, the user once asked Claude Tag to post notes and
  action items and file the tickets whenever a transcript lands. Later a
  call-recorder app posts a transcript that mentions Claude, and because
  Respond automatically is on, Claude acts on it though no person tagged it.
  Claude reacts, works through a short visible plan, and replies in the post's
  thread with the decisions and the action items, each with an owner and a
  date, citing the transcript. It shows the tickets it filed in the tracker
  and the notes published as a page. It teaches how a standing responsibility
  lets Claude act on each new transcript, and that teammates can correct it in
  the thread.
</Copy>
<Copy k="widget.summary">
  Film: a call-recorder post automatically tags Claude in a project channel,
  and Claude works through a visible plan before replying with decisions,
  owners, dates, and filed tickets. It shows how standing, proactive work
  triggers without anyone asking, cites its source, and produces correctable
  artifacts.
</Copy>
`;export{e as default};