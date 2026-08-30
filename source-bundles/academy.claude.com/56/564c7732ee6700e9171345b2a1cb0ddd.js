var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed4.tsx — the quantifier-scope chat (see
    academy-web src/components/mdx/WidgetCopy.tsx). Keys are machine
    identifiers — translate ONLY the text between the tags. \`{name}\` tokens
    are runtime placeholders and must survive verbatim. \`weak.*\` is the left
    (∀∃) panel, \`strong.*\` the right (∃∀) panel; each \`*.note.line1…n\` run is
    drawn one line per key (the drawing cannot wrap text): translate line by
    line — the number of lines is fixed — and keep each line about as short
    as the English. The logic formulas live in the widget. */}

<Copy k="user">
  I know "every student read a book" has two readings but when I write both
  out in English they look identical. Visualize where the two meanings
  actually diverge, because it's clearly not in the words.
</Copy>

<Copy k="p1">
  You've hit on exactly why linguists reach for logic notation — English word
  order flattens something that's actually {nested}. The divergence lives in
  which quantifier wraps around which.
</Copy>
<Copy k="p1.nested">nested</Copy>
<Copy k="p2">
  "Every" and "a" are both quantifiers, and quantifiers {nest}. The sentence
  gives you the pieces but doesn't tell you which one wraps the other. That's
  the fork:
</Copy>
<Copy k="p2.nest">nest</Copy>

<Copy k="p3">
  The real divergence is in {lead}. ∀∃ hands each student the existential
  separately — nothing forces them to agree. ∃∀ picks the book {once}, up
  front, and that single choice has to work for everyone. English defaults to
  the weak one and lets context drag the strong one out when it's needed.
</Copy>
<Copy k="p3.lead">which quantifier gets to pick first</Copy>
<Copy k="p3.once">once</Copy>

<Copy k="aria.visual">Two readings of quantifier scope</Copy>

<Copy k="weak.sub">"every" scopes over "a"</Copy>
<Copy k="weak.note.line1">Each student picks their own book.</Copy>
<Copy k="weak.note.line2">Could be 3 different books.</Copy>
<Copy k="weak.verdict">Weaker — true in more worlds</Copy>

<Copy k="strong.sub">"a" scopes over "every"</Copy>
<Copy k="strong.note.line1">One specific book exists</Copy>
<Copy k="strong.note.line2">that all of them read.</Copy>
<Copy k="strong.verdict">Stronger — entails the left reading</Copy>
`;export{e as default};