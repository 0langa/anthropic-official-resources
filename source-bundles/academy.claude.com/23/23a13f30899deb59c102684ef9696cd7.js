var e=`---
kind: widget-copy
---

{/* Learner-facing copy for CapsAndOverrides.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. Devin, Sam, Priya, and Maya
    are fictional member names used as data; Engineering and Platform are
    fictional group names. Dollar amounts inside these sentences are
    illustrative data the widget also draws on its axis — keep them
    matching the chart. \`{amount}\` in \`cap.plat.sub.maya\` is a runtime
    placeholder and must survive verbatim. */}

<Copy k="task.pre">
  The bar is one member’s spending limit; the two ticks are the group caps.
</Copy>
<Copy k="task.bold">Pick a case</Copy>
<Copy k="task.post">and watch the bar move against them.</Copy>

<Copy k="chips.aria">Pick a case</Copy>

<Copy k="chip.devin.title">No override — group cap applies</Copy>
<Copy k="chip.devin.meta">Devin · Engineering</Copy>
<Copy k="chip.sam.title">Override below the cap</Copy>
<Copy k="chip.sam.meta">Sam · contractor, Engineering</Copy>
<Copy k="chip.priya.title">Override above the cap</Copy>
<Copy k="chip.priya.meta">Priya · Platform</Copy>
<Copy k="chip.maya.title">
  In two groups — your Multi-group spend limit setting decides
</Copy>
<Copy k="chip.maya.meta">Maya · Engineering + Platform</Copy>

<Copy k="cap.eng.label">Engineering cap</Copy>
<Copy k="cap.plat.label">Platform cap</Copy>
<Copy k="cap.plat.sub.maya">{amount} · not applied (setting: Lower)</Copy>

<Copy k="reason.devin">
  No override, so his limit is the Engineering cap: $400.
</Copy>
<Copy k="reason.sam">
  His override holds him at $150; the dashed part is what the Engineering
  cap would have allowed.
</Copy>
<Copy k="reason.priya">
  Her override raised her past the Platform cap; the blue is what the
  override added.
</Copy>
<Copy k="reason.maya">
  In both groups, the organization-wide Multi-group spend limit setting
  picks which cap counts; here it is set to Lower group limit, so
  Engineering’s $400 applies.
</Copy>

<Copy k="aria.devin">
  Devin's bar ends exactly at the Engineering cap, $400.
</Copy>
<Copy k="aria.sam">
  Sam's bar stops at $150; a dashed outline continues to the Engineering
  cap at $400.
</Copy>
<Copy k="aria.priya">
  Priya's bar runs to the Platform cap at $600, then a blue segment
  continues to $1,200.
</Copy>
<Copy k="aria.maya">
  Maya is in both groups; the organization-wide Multi-group spend limit
  setting is set to Lower group limit, so her bar ends at the Engineering
  cap, $400, and the Platform cap does not apply.
</Copy>

<Copy k="legend.limit">member’s spending limit</Copy>
<Copy k="legend.over">added by an override</Copy>
<Copy k="legend.ghost">removed by an override</Copy>

<Copy k="foot">
  Illustrative numbers, not a forecast. A group cap is a per-member limit
  each member inherits, never a shared budget.
</Copy>
`;export{e as default};