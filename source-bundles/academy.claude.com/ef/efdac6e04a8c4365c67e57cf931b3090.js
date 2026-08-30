var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed1.tsx — the Turkish agglutination chat
    (see academy-web src/components/mdx/WidgetCopy.tsx). Keys are machine
    identifiers — translate ONLY the text between the tags. \`{name}\` tokens
    are runtime placeholders ({word}/{root} are the Turkish word and root)
    and must survive verbatim. \`role.*\` / \`gloss.*\` label the six morpheme
    rows of the diagram. */}

<Copy k="user">
  Turkish is supposedly agglutinative — suffixes stack up. I get that in
  principle but I can't picture how one word ends up meaning a whole
  sentence. Build me an example step by step so I can see each piece doing
  its job.
</Copy>

<Copy k="p1">
  Here's one word — {word} — that means "apparently we won't be able to see
  each other." It's one word because Turkish adds each grammatical piece as
  its own suffix, in a fixed slot, and the pieces don't fuse into each other
  the way English irregulars do.
</Copy>
<Copy k="p2">
  Watch it build, one morpheme at a time. The root is {root}, "see":
</Copy>
<Copy k="p3">
  That's what "agglutinative" means in practice: each suffix does one job,
  the order is fixed, and the boundaries stay clean. Once you know the slots
  — reciprocal, ability, tense, evidentiality, person — you can read a word
  back off like a formula, and you can build new ones by filling the slots
  differently.
</Copy>

<Copy k="aria.visual">Turkish word built from six stacked suffixes</Copy>

<Copy k="role.gor">root verb</Copy>
<Copy k="role.us">reciprocal</Copy>
<Copy k="role.eme">negative ability</Copy>
<Copy k="role.yecek">future tense</Copy>
<Copy k="role.mis">evidential (hearsay)</Copy>
<Copy k="role.iz">1st person plural</Copy>

<Copy k="gloss.gor">"see"</Copy>
<Copy k="gloss.us">"see each other"</Copy>
<Copy k="gloss.eme">"not be able to see each other"</Copy>
<Copy k="gloss.yecek">"will not be able to see each other"</Copy>
<Copy k="gloss.mis">"apparently will not be able to see each other"</Copy>
<Copy k="gloss.iz">"apparently we will not be able to see each other"</Copy>
`;export{e as default};