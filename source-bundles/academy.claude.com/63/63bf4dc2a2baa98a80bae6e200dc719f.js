var e=`---
kind: widget-copy
---

{/* Copy for DsFilm.tsx, the film at the top of the page. \`label\` describes the film to screen readers. \`title\` and
\`runtime\` stand in the band under the film: \`title\` is the title card's two lines as one, and \`{minutes}\` is a whole
number. \`play\`, \`pause\` and the \`ctl\` keys name the player's controls. \`ch1\` to \`ch8\` are the chapter names shown beside
the time. \`title1\` and \`title2\` are the two lines of the title card, and \`title.mark\` is the part of \`title2\` that is
underlined: it must end that line. The short keys from \`m1\` to \`p3\` are captions. Each stands alone on one line, which
holds about 78 letters. In that order, with \`cta\` from the closing card after them, they are the transcript. */}

<Copy k="label">
  A short film: what a design system does, starting one from Claude’s message
  box, three ways to build it, reviewing the page, typing a usage note, how
  Claude reads it, sharing it, and a teammate’s design that follows the note.
</Copy>
<Copy k="title">A design system teaches Claude your brand</Copy>
<Copy k="runtime">{minutes} min</Copy>
<Copy k="play">Play the film</Copy>
<Copy k="pause">Pause the film</Copy>
<Copy k="ctl.fullscreen">Full screen</Copy>
<Copy k="ctl.exitFullscreen">Exit full screen</Copy>
<Copy k="ctl.keys">Use K to play or pause, the arrow keys to move two seconds, and F for full screen.</Copy>
<Copy k="ctl.seek">Seek</Copy>

<Copy k="ch1">What a design system does</Copy>
<Copy k="ch2">Start a design system</Copy>
<Copy k="ch3">Build it from what you have</Copy>
<Copy k="ch4">Review it and add usage notes</Copy>
<Copy k="ch5">How Claude reads it</Copy>
<Copy k="ch6">Share it with your team</Copy>
<Copy k="ch7">What your teammates see</Copy>
<Copy k="ch8">Set it up and share it</Copy>

<Copy k="title1">A design system</Copy>
<Copy k="title2">teaches Claude your brand</Copy>
<Copy k="title.mark">brand</Copy>

<Copy k="m1">
  To get started, open the + menu in any conversation and choose Design system.
</Copy>

<Copy k="gh">Claude can build your design system from your code on GitHub.</Copy>
<Copy k="cn">Claude can also build it from your connected tools.</Copy>
<Copy k="fl">Or you can upload your brand files.</Copy>
<Copy k="cr">Claude then writes a first draft of your design system.</Copy>

<Copy k="ov">
  The overview describes your brand and the few rules that always apply.
</Copy>
<Copy k="rv">You can add a usage note to any color or component.</Copy>
<Copy k="cap">A usage note tells Claude how to use a component, and when not to.</Copy>

<Copy k="r1">
  Claude reads the overview first, every time it uses your design system.
</Copy>
<Copy k="r2">Then Claude reads only what the task needs.</Copy>
<Copy k="r3">
  Before using a component, Claude reads the first sentence of its usage note.
</Copy>
<Copy k="ks">
  Keep the overview short, and put rules for one component in its usage note.
</Copy>

<Copy k="h1">
  Once it’s ready, invite the people who should review your design system.
</Copy>
<Copy k="h3">To share it with everyone, ask an owner of your organization.</Copy>
<Copy k="h4">An owner can also make it the default design system.</Copy>

<Copy k="p1">Your teammates see the default already selected in their + menu.</Copy>
<Copy k="p2">
  In a design, Claude can use your colors, type styles and real components.
</Copy>
<Copy k="p3">Here, Claude uses one primary button, as your usage note says.</Copy>

<Copy k="cta">Set up your design system and share it</Copy>


{/* The film's own labels, drawn in the picture. The \`read\` keys are on the cards in "How Claude reads it". \`read.index1\`
and \`read.index2\` also head the cards they open, and \`read.index2\` and \`read.index3\` are component names, spelled as the
picture spells them. The \`ladder\` names are the four stages in DsLadder.copy.mdx, and each \`ladder.line\` must fit on one
line of about 40 letters. A \`role\` tag must be no wider than "Owner of the organization", because a drawn mark stands
right after it. \`team.note\` heads the note beside the teammate's design. */}

<Copy k="read.overview">Overview</Copy>
<Copy k="read.rest">A list of everything else</Copy>
<Copy k="read.index1">Colors and type</Copy>
<Copy k="read.index2">Button</Copy>
<Copy k="read.index3">Badge</Copy>
<Copy k="read.index4">Logos and photos</Copy>
<Copy k="read.note">First sentence of the usage note</Copy>

<Copy k="ladder.name1">Only you</Copy>
<Copy k="ladder.line1">Not shared yet.</Copy>
<Copy k="ladder.name2">Shared</Copy>
<Copy k="ladder.line2">The people you invite can use it.</Copy>
<Copy k="ladder.name3">Everyone</Copy>
<Copy k="ladder.line3">It is in every teammate’s menu.</Copy>
<Copy k="ladder.name4">Default</Copy>
<Copy k="ladder.line4">New decks and designs can start from it.</Copy>

<Copy k="role.maker">Made the design system</Copy>
<Copy k="role.admin">Owner of the organization</Copy>

<Copy k="team.note">Usage note on Button</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 0326ca0e4c66e9a2 */}
<Copy k="widget.description">
  Film: a two-minute silent film with captions that follows a design system in
  Claude from setup to a teammate's design. The user opens the plus menu in
  Claude's message box, chooses Design system and starts a new one. The film
  shows three ways to build it: from code on GitHub, from connected tools, or
  from uploaded brand files, after which Claude writes a first draft. The user
  looks through the page and types a usage note on a button component. The
  film then explains how Claude reads a design system: the overview first,
  every time, then only what the task needs, and the first sentence of a
  component's usage note before it uses that component. So keep the overview
  short, and put a rule for one component in its note. The user invites
  reviewers, and an owner of the organization shares the design system with
  everyone and can make it the default. A teammate finds the default already
  selected in their plus menu, and the design Claude makes uses the brand's
  colors, type styles and real components, with one primary button, as the
  usage note says.
</Copy>
<Copy k="widget.summary">
  Film: a short silent film with captions about design systems in Claude. The
  user starts one, builds it, adds a usage note and shares it, and a
  teammate's design then follows that note.
</Copy>
`;export{e as default};