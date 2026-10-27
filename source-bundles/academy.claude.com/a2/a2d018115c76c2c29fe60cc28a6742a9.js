var e=`---
kind: widget-copy
---

{/* Copy shared by the widgets in this folder (rendered by the _OverlayStage
    and _FundraisingStage helpers under whichever widget invokes them). Keys
    are machine identifiers: translate ONLY the text between the tags. File
    names, dates and amounts are simulated data and stay in the widget
    code. */}

<Copy k="stage.replay">Replay</Copy>
<Copy k="stage.pause">Pause</Copy>
<Copy k="stage.play">Play</Copy>
<Copy k="stage.start">Start</Copy>
<Copy k="stage.next">Next</Copy>
<Copy k="stage.representative">
  A simulated example. Every person and organization is fictional. Claude's
  answers come from test runs of the skills and are shown in part.
</Copy>
<Copy k="stage.you">You</Copy>
<Copy k="stage.copy">Copy</Copy>
<Copy k="stage.copied">Copied</Copy>
<Copy k="stage.eyesAria">Claude reacted with eyes: it has started</Copy>

<Copy k="files.attached">Attached</Copy>
<Copy k="files.added">Added</Copy>
<Copy k="files.pasted">Pasted</Copy>
<Copy k="status.met">Met</Copy>
<Copy k="status.notMet">Not met</Copy>
<Copy k="status.unknown">Unknown</Copy>
`;export{e as default};