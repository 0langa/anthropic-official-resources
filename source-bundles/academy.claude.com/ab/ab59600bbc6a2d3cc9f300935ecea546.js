var e=`---
kind: widget-copy
---

{/* Copy shared by the widgets in this folder (rendered by the _OverlayStage
    helpers under whichever widget invokes them); merged under every widget
    copy file here, so the stage chrome is translated once. Keys are machine
    identifiers — translate ONLY the text between the tags. */}

<Copy k="stage.replay">Replay</Copy>
<Copy k="stage.you">You</Copy>
<Copy k="stage.copy">Copy</Copy>
<Copy k="stage.copied">Copied</Copy>
<Copy k="stage.eyesAria">Claude reacted with eyes: it has started</Copy>
`;export{e as default};