var e=`---
kind: widget-copy
---

{/* Copy shared by every widget in this course's components folder: the
    chrome of the animated-explainer player (_ExplainerPlayer.tsx) and the
    small "app" tag the drawn chat rows put after the agent's name. Merged
    under each widget's own copy file (a widget's keys win). Keys are
    machine identifiers; translate ONLY the text between the tags.
    {i}/{n} are scene numbers; {speed} is a playback-rate number such as
    1.25; {at}/{total}/{time} are m:ss clock readings. */}

<Copy k="xp.playGate">Play explainer</Copy>
<Copy k="xp.play">Play</Copy>
<Copy k="xp.pause">Pause</Copy>
<Copy k="xp.replay">Replay from the start</Copy>
<Copy k="xp.prev">Previous scene</Copy>
<Copy k="xp.next">Next scene</Copy>
<Copy k="xp.scrub">Scrub through the explainer</Copy>
<Copy k="xp.sceneOf">Scene {i} of {n}</Copy>
<Copy k="xp.speed">Playback speed</Copy>
<Copy k="xp.speed.aria">Playback speed {speed}×</Copy>
<Copy k="xp.speed.short">{speed}×</Copy>
<Copy k="xp.time">{at} / {total}</Copy>
<Copy k="xp.keys">Use space to play or pause the explainer, and the arrow keys to move between scenes.</Copy>
<Copy k="xp.runtime">{time}</Copy>
<Copy k="xp.companion">Explainer companion content</Copy>
<Copy k="xp.summary">Summary</Copy>
<Copy k="xp.transcript">Transcript</Copy>
<Copy k="xp.narration">Narration</Copy>
<Copy k="xp.appTag">APP</Copy>
`;export{e as default};