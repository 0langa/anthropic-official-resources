var e=`---
kind: widget-copy
---

{/* Copy shared by the terminal mocks in this folder (EffortPickerDemo,
    ThreeTasks); merged under every widget copy file here, so the session
    header's placeholder model name and effort readout are translated once.
    \`{level}\` is a level name filled in by the widget. */}

<Copy k="session.model">your model</Copy>
<Copy k="session.effort">with {level} effort</Copy>
`;export{e as default};