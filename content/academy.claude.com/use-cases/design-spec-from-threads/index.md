# Design spec from scattered threads

One review-ready spec from threads, notes, and screenshots.

10 minDesignClaude Cowork

Try in CoworkCopy prompt

![](https://academy.claude.com/assets/v1/thumbnail.light-g1uo6xw3.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-hq8pagpq.png)

Film: the user asks Claude to assemble scattered chat threads, a kickoff document, screenshots, and a requirements draft into one design spec, quoting sources and flagging conflicts as open questions, then schedules it to re-run regularly.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)#checkout-redesign

Nadia Okonjo, 22 Apr

Let’s go with B, the single page. A fixes the form but keeps the two extra page loads.

kickoff-notes.docx

Decisions, 14 Apr

Account stays required at checkout: fraud screening and order lookup depend on it (Jordan)

current-flow-screens.png

Current checkout, screens 2–4

6 required fields before any progress

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23000'%20d='M4.46%204.44c.74.6%201.02.56%202.42.46l13.18-.79c.28%200%20.05-.28-.05-.32l-2.19-1.58c-.42-.33-.98-.7-2.05-.6L2.99%202.53c-.46.05-.56.28-.37.46l1.84%201.45Zm.8%203.1v13.87c0%20.74.37%201.02%201.21.98l14.49-.84c.84-.05.93-.56.93-1.16V6.6c0-.6-.23-.93-.74-.88l-15.14.88c-.56.05-.75.33-.75.93Zm14.3.74c.1.42%200%20.84-.42.89l-.7.14v10.24c-.6.33-1.16.51-1.63.51-.74%200-.93-.23-1.49-.93l-4.56-7.16v6.93l1.44.33s0%20.84-1.16.84l-3.21.18c-.1-.18%200-.65.33-.74l.84-.23V9.98l-1.16-.1c-.1-.42.14-1.02.79-1.07l3.44-.23%204.75%207.25V9.42l-1.21-.14c-.1-.51.28-.88.74-.93l3.21-.18Z'/%3e%3c/svg%3e)Notion

Checkout PRD (draft)

Status: In review. Goals edited 21 Apr

Turn scattered threads into a design spec

Your design decisions are scattered across threads, and you need one spec.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)

Slack

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23000'%20d='M4.46%204.44c.74.6%201.02.56%202.42.46l13.18-.79c.28%200%20.05-.28-.05-.32l-2.19-1.58c-.42-.33-.98-.7-2.05-.6L2.99%202.53c-.46.05-.56.28-.37.46l1.84%201.45Zm.8%203.1v13.87c0%20.74.37%201.02%201.21.98l14.49-.84c.84-.05.93-.56.93-1.16V6.6c0-.6-.23-.93-.74-.88l-15.14.88c-.56.05-.75.33-.75.93Zm14.3.74c.1.42%200%20.84-.42.89l-.7.14v10.24c-.6.33-1.16.51-1.63.51-.74%200-.93-.23-1.49-.93l-4.56-7.16v6.93l1.44.33s0%20.84-1.16.84l-3.21.18c-.1-.18%200-.65.33-.74l.84-.23V9.98l-1.16-.1c-.1-.42.14-1.02.79-1.07l3.44-.23%204.75%207.25V9.42l-1.21-.14c-.1-.51.28-.88.74-.93l3.21-.18Z'/%3e%3c/svg%3e)

Notion

Design / Checkout-Redesign

3 files

Folder

kickoff-notes.docx

14 Apr kickoff

DOCX

spec-template.docx

Team template

DOCX

Design

/design-critique

/design-handoff

/research-synthesis

How can I help you today?

M

Northwind

Channels

# design-crit

# mobile-web

# checkout-redesign

# growth-analytics

Direct messages

Nadia Okonjo

Tomás Reyes

**# checkout-redesign**9 members

CA

Chris Adebayo*16 Apr*

Mobile web checkout, last 30 days to 15 Apr: of everyone who opens the cart, 71% get past sign-in, 45% past shipping address, 38% past payment and 32% place an order. Desktop ends at 51%. Address is the worst single screen: 37% of the people who reach it leave there. funnel-mobile-30d.png

LV

Lena Vogel*20 Apr*

Two directions are in the Figma file. A keeps the three steps and trims the address form. B is one page with inline validation and the order summary pinned. Current flow attached for comparison. current-flow-screens.png 6 replies

NO

Nadia Okonjo*22 Apr*

Let’s go with B, the single page. A fixes the form but keeps the two extra page loads that Chris’s numbers say we pay for. Promo codes stay as they are, that’s a separate project.

TR

Tomás Reyes*22 Apr*

Works for eng. One ask: on phones narrower than 380 the pinned summary eats the keyboard space, so collapse it by default there. Lena Vogel: Agreed, collapsed with the total still visible.

TR

Tomás Reyes*23 Apr*

Constraint to write down: card number, expiry and CVC stay inside the payment provider’s hosted fields, so inline validation for those comes from their SDK events, not ours. Address lookup is fine, the contract covers mobile web.

NO

Nadia Okonjo*24 Apr*

Reopening one thing: guest checkout. 29% of carts die at sign-in. If people can check out with just an email and find their order from a link, most of that step goes away. @Jordan Blake can you weigh in before Thursday? 3 replies. Tomás Reyes: Roughly two sprints including order lookup by email. Fine by me if Risk is OK.

Message #checkout-redesign

**/**design-handoff Assemble everything in this folder, #checkout-redesign and the Checkout PRD draft in Notion into a single design spec: problem, goals, constraints, proposed solution, open questions, out of scope. Quote the source for any decision already made and flag anything contradictory. What did we already decide on checkout?

Reading #checkout-redesign0s

Read5 sources

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)Read#checkout-redesign

Readkickoff-notes.docx

Openedcurrent-flow-screens.png

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23000'%20d='M4.46%204.44c.74.6%201.02.56%202.42.46l13.18-.79c.28%200%20.05-.28-.05-.32l-2.19-1.58c-.42-.33-.98-.7-2.05-.6L2.99%202.53c-.46.05-.56.28-.37.46l1.84%201.45Zm.8%203.1v13.87c0%20.74.37%201.02%201.21.98l14.49-.84c.84-.05.93-.56.93-1.16V6.6c0-.6-.23-.93-.74-.88l-15.14.88c-.56.05-.75.33-.75.93Zm14.3.74c.1.42%200%20.84-.42.89l-.7.14v10.24c-.6.33-1.16.51-1.63.51-.74%200-.93-.23-1.49-.93l-4.56-7.16v6.93l1.44.33s0%20.84-1.16.84l-3.21.18c-.1-.18%200-.65.33-.74l.84-.23V9.98l-1.16-.1c-.1-.42.14-1.02.79-1.07l3.44-.23%204.75%207.25V9.42l-1.21-.14c-.1-.51.28-.88.74-.93l3.21-.18Z'/%3e%3c/svg%3e)ReadCheckout PRD (draft)

Readspec-template.docx

Did the April thread actually decide on guest checkout?

No, list it as open

Yes, record it as decided

No, list it as open

No, list it as an open question.

Used 5 sources41s

I read #checkout-redesign, the kickoff notes, the screenshots and the PRD draft and wrote the spec in your section order: six decisions quoted with who and where, one conflict flagged. Guest checkout is under Open questions with both sources quoted, beside two things I could not confirm.

checkout-redesign-spec.docx

Document

Download

# Checkout redesign, mobile web Design spec

<table class="props"><tbody><tr><td>Status</td><td><span class="pill y">Draft</span> for design review Thu 30 Apr 2026</td></tr><tr><td>Owner</td><td>Lena Vogel</td></tr><tr><td>Sources</td><td>#checkout-redesign (14–24 Apr) · kickoff-notes.docx · current-flow-screens.png · Checkout PRD (draft)</td></tr><tr><td>Sections</td><td>In the order asked: Problem, Goals, Constraints, Proposed solution, Open questions, Out of scope, then the decision log</td></tr><tr><td>Coverage</td><td>6 decisions sourced · 3 open questions</td></tr></tbody></table>

## Problem

On mobile web, 32 of every 100 opened carts become orders; on desktop it is 51. The largest single loss is the shipping-address screen, where 37% of people who reach it leave: the current form asks for six required fields across three screens before any progress is shown (current-flow-screens.png, screens 2–4). Sign-in is the second loss at 29%.

## Goals

- Raise mobile cart-to-order from 32% to 40% by end of Q3 PRD draft, Goals.
- Raise address-step completion from 63% to 80%; no increase in payment-step errors.
- Measured on the existing checkout funnel dashboard, 30-day window.

## Constraints

- Card fields remain in the provider’s hosted fields; their validation comes from SDK events Tomás, 23 Apr.
- No order-API changes this quarter kickoff notes. US, CA and UK address formats PRD draft. WCAG 2.2 AA.
- Ships behind a flag at 10%, then 50%.

## Proposed solution

**Direction B:** a single checkout page with address lookup on the first address line, inline validation on every field we own, express wallet buttons at the top, and a persistent order summary, collapsed by default on phones narrower than 380 pt with the total visible. Screens: Figma “Checkout B” frames 1–7.

## Open questions

1. **Guest checkout — sources conflict; not treated as decided (per your answer).**

   > “Account stays required at checkout — fraud screening and order lookup depend on it (Jordan).”kickoff-notes.docx, 14 Apr, Decisions

   > “Reopening one thing: guest checkout. 29% of carts die at sign-in…”#checkout-redesign, 24 Apr, Nadia Okonjo

   > “Roughly two sprints including order lookup by email. Fine by me if Risk is OK.”Tomás Reyes, same thread

   Jordan Blake has not replied; thread not closed. **Needs:** Jordan and Maya, at or before review. If adopted, Goals and Out of scope change.
2. Express wallet placement: the screenshot annotation asks “wallets above the fold?” but I found no discussion of it. Flagged as unconfirmed. **Needs:** Lena.
3. Funnel figures run to 15 Apr. **Needs:** Chris to refresh before Thursday.

## Out of scope

Desktop checkout. Promo-code entry Maya, 22 Apr: “a separate project”. Saved cards and wallet management. Post-purchase pages.

## Decision log 6 decisions, each with the message it came from

<table class="dl"><tbody><tr><th style="width:24px">#</th><th style="width:210px">Decision</th><th>Source, quoted</th></tr><tr><td>1</td><td>Direction B, single-page checkout</td><td><blockquote class="sq">“Let’s go with B, the single page. A fixes the form but keeps the two extra page loads that Chris’s numbers say we pay for.”<cite>Nadia Okonjo, #checkout-redesign, 22 Apr</cite></blockquote></td></tr><tr><td>2</td><td>Order summary collapsed by default under 380 pt, total visible</td><td><blockquote class="sq">“collapse it by default there — Agreed, collapsed with the total still visible.”<cite>Tomás Reyes and Lena Vogel, thread, 22 Apr</cite></blockquote></td></tr><tr><td>3</td><td>Card fields stay in the provider’s hosted fields</td><td><blockquote class="sq">“card number, expiry and CVC stay inside the payment provider’s hosted fields”<cite>Tomás Reyes, #checkout-redesign, 23 Apr</cite></blockquote></td></tr><tr><td>4</td><td>Address lookup on mobile web</td><td><blockquote class="sq">“Address lookup is fine, the contract covers mobile web.”<cite>Tomás Reyes, 23 Apr; kickoff notes, Ideas</cite></blockquote></td></tr><tr><td>5</td><td>Promo-code entry unchanged</td><td><blockquote class="sq">“Promo codes stay as they are, that’s a separate project.”<cite>Nadia Okonjo, 22 Apr</cite></blockquote></td></tr><tr><td>6</td><td>Success metric is mobile cart-to-order rate, target 40%</td><td><blockquote class="sq">“Primary metric: mobile cart→order, 32% → 40% by end of Q3”<cite>Checkout PRD (draft), Goals, edited 21 Apr</cite></blockquote></td></tr></tbody></table>

Each decision quotes the message it came from.

# Checkout redesign, mobile web Design spec

<table class="props"><tbody><tr><td>Status</td><td><span class="pill y">Draft</span> for design review Thu 30 Apr 2026</td></tr><tr><td>Owner</td><td>Lena Vogel</td></tr><tr><td>Sources</td><td>#checkout-redesign (14–24 Apr) · kickoff-notes.docx · current-flow-screens.png · Checkout PRD (draft)</td></tr><tr><td>Sections</td><td>In the order asked: Problem, Goals, Constraints, Proposed solution, Open questions, Out of scope, then the decision log</td></tr><tr><td>Coverage</td><td>6 decisions sourced · 3 open questions</td></tr></tbody></table>

## Problem

On mobile web, 32 of every 100 opened carts become orders; on desktop it is 51. The largest single loss is the shipping-address screen, where 37% of people who reach it leave: the current form asks for six required fields across three screens before any progress is shown (current-flow-screens.png, screens 2–4). Sign-in is the second loss at 29%.

## Goals

- Raise mobile cart-to-order from 32% to 40% by end of Q3 PRD draft, Goals.
- Raise address-step completion from 63% to 80%; no increase in payment-step errors.
- Measured on the existing checkout funnel dashboard, 30-day window.

## Constraints

- Card fields remain in the provider’s hosted fields; their validation comes from SDK events Tomás, 23 Apr.
- No order-API changes this quarter kickoff notes. US, CA and UK address formats PRD draft. WCAG 2.2 AA.
- Ships behind a flag at 10%, then 50%.

## Proposed solution

**Direction B:** a single checkout page with address lookup on the first address line, inline validation on every field we own, express wallet buttons at the top, and a persistent order summary, collapsed by default on phones narrower than 380 pt with the total visible. Screens: Figma “Checkout B” frames 1–7.

## Open questions

1. **Guest checkout — sources conflict; not treated as decided (per your answer).**

   > “Account stays required at checkout — fraud screening and order lookup depend on it (Jordan).”kickoff-notes.docx, 14 Apr, Decisions

   > “Reopening one thing: guest checkout. 29% of carts die at sign-in…”#checkout-redesign, 24 Apr, Nadia Okonjo

   > “Roughly two sprints including order lookup by email. Fine by me if Risk is OK.”Tomás Reyes, same thread

   Jordan Blake has not replied; thread not closed. **Needs:** Jordan and Maya, at or before review. If adopted, Goals and Out of scope change.
2. Express wallet placement: the screenshot annotation asks “wallets above the fold?” but I found no discussion of it. Flagged as unconfirmed. **Needs:** Lena.
3. Funnel figures run to 15 Apr. **Needs:** Chris to refresh before Thursday.

## Out of scope

Desktop checkout. Promo-code entry Maya, 22 Apr: “a separate project”. Saved cards and wallet management. Post-purchase pages.

## Decision log 6 decisions, each with the message it came from

<table class="dl"><tbody><tr><th style="width:24px">#</th><th style="width:210px">Decision</th><th>Source, quoted</th></tr><tr><td>1</td><td>Direction B, single-page checkout</td><td><blockquote class="sq">“Let’s go with B, the single page. A fixes the form but keeps the two extra page loads that Chris’s numbers say we pay for.”<cite>Nadia Okonjo, #checkout-redesign, 22 Apr</cite></blockquote></td></tr><tr><td>2</td><td>Order summary collapsed by default under 380 pt, total visible</td><td><blockquote class="sq">“collapse it by default there — Agreed, collapsed with the total still visible.”<cite>Tomás Reyes and Lena Vogel, thread, 22 Apr</cite></blockquote></td></tr><tr><td>3</td><td>Card fields stay in the provider’s hosted fields</td><td><blockquote class="sq">“card number, expiry and CVC stay inside the payment provider’s hosted fields”<cite>Tomás Reyes, #checkout-redesign, 23 Apr</cite></blockquote></td></tr><tr><td>4</td><td>Address lookup on mobile web</td><td><blockquote class="sq">“Address lookup is fine, the contract covers mobile web.”<cite>Tomás Reyes, 23 Apr; kickoff notes, Ideas</cite></blockquote></td></tr><tr><td>5</td><td>Promo-code entry unchanged</td><td><blockquote class="sq">“Promo codes stay as they are, that’s a separate project.”<cite>Nadia Okonjo, 22 Apr</cite></blockquote></td></tr><tr><td>6</td><td>Success metric is mobile cart-to-order rate, target 40%</td><td><blockquote class="sq">“Primary metric: mobile cart→order, 32% → 40% by end of Q3”<cite>Checkout PRD (draft), Goals, edited 21 Apr</cite></blockquote></td></tr></tbody></table>

Run this every weekday at 8am until the review: re-read the channel and the folder, update the spec, and list decisions that changed at the top.

**Spec freshness pass**Weekdays at 8:00 AM

Each run

Re-reads #checkout-redesign and the project folder

Updates the spec and lists changed decisions at the top

Re-checks the open questions*for you to review*

Claude Academy

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23000'%20d='M4.46%204.44c.74.6%201.02.56%202.42.46l13.18-.79c.28%200%20.05-.28-.05-.32l-2.19-1.58c-.42-.33-.98-.7-2.05-.6L2.99%202.53c-.46.05-.56.28-.37.46l1.84%201.45Zm.8%203.1v13.87c0%20.74.37%201.02%201.21.98l14.49-.84c.84-.05.93-.56.93-1.16V6.6c0-.6-.23-.93-.74-.88l-15.14.88c-.56.05-.75.33-.75.93Zm14.3.74c.1.42%200%20.84-.42.89l-.7.14v10.24c-.6.33-1.16.51-1.63.51-.74%200-.93-.23-1.49-.93l-4.56-7.16v6.93l1.44.33s0%20.84-1.16.84l-3.21.18c-.1-.18%200-.65.33-.74l.84-.23V9.98l-1.16-.1c-.1-.42.14-1.02.79-1.07l3.44-.23%204.75%207.25V9.42l-1.21-.14c-.1-.51.28-.88.74-.93l3.21-.18Z'/%3e%3c/svg%3e)



0:03 / 0:561×

Illustration. Product screens are simplified.

Turn scattered threads into a design spec

Your design decisions are scattered across threads, and you need one spec.

Give the handoff skill your section order, and ask where each decision came from.

Claude reads the project channel, the files in your folder and the requirements draft.

Wherever a decision is yours to make, Claude asks instead of guessing.

You get the spec, with what Claude read and quoted at the top.

Each decision quotes the message it came from.

Where sources disagree, both are quoted as an open question.

On a weekday schedule, Claude re-reads the channel and lists decisions that changed overnight.

Your team reviews one spec instead of rereading every thread.

Assemble everything in this folder, #checkout-redesign and the Checkout PRD draft in Notion into a single design spec: problem, goals, constraints, proposed solution, open questions, out of scope. Quote the source for any decision already made and flag anything contradictory. What did we already decide on checkout?

Did the April thread actually decide on guest checkout? No, list it as open / Yes, record it as decided

I read #checkout-redesign, the kickoff notes, the screenshots and the PRD draft and wrote the spec in your section order: six decisions quoted with who and where, one conflict flagged. Guest checkout is under Open questions with both sources quoted, beside two things I could not confirm.

checkout-redesign-spec.docx

Skill: /design-handoff (Design)

Connectors: Slack, Notion

## Set up[](https://academy.claude.com/use-cases/design-spec-from-threads)

### Try a plugin[](https://academy.claude.com/use-cases/design-spec-from-threads)

The Design plugin ships with `/design-handoff` and other research and structuring skills as a starting point, already shaped to the section order most design reviews expect. If your admin manages plugins and it's not available yet, skip this; nothing below requires it.



DesignAccelerate design workflows — critique, design system management, UX writing, accessibility audits, research synthesis, and dev handoff. From exploration to pixel-perfect specs.

[Add](https://claude.ai/desktop/customize/plugins/new?marketplace=github.com%2Fanthropics%2Fknowledge-work-plugins&plugin=design)

`/design-handoff`Generate developer handoff specs from a design.

[Run](claude://cowork/new?q=%2Fdesign-handoff)

`/research-synthesis`Synthesize user research into themes, insights, and recommendations.

[Run](claude://cowork/new?q=%2Fresearch-synthesis)

Show all 7 skills

### Connect your tools[](https://academy.claude.com/use-cases/design-spec-from-threads)

Claude Cowork is more powerful when it works directly with your systems. You control permissions and access. [Learn about tool access(opens in new tab)](https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access).

Navigate to **Customize → Connectors** in Cowork to set up.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.951%209.85a1.47%201.47%200%201%201-2.94%200%201.47%201.47%200%200%201%201.47-1.471h1.47V9.85Zm.735%200a1.47%201.47%200%201%201%202.94%200v3.679a1.47%201.47%200%201%201-2.94%200V9.85Z'%20fill='%23E01E5A'/%3e%3cpath%20d='M6.157%203.943a1.47%201.47%200%201%201%200-2.943%201.47%201.47%200%200%201%201.47%201.471v1.472h-1.47Zm0%20.746a1.47%201.47%200%201%201%200%202.943H2.47a1.47%201.47%200%201%201%200-2.943h3.687Z'%20fill='%2336C5F0'/%3e%3cpath%20d='M12.049%206.16a1.47%201.47%200%201%201%202.94%200%201.47%201.47%200%200%201-1.47%201.472h-1.47V6.16Zm-.736%200a1.47%201.47%200%201%201-2.94%200V2.471a1.47%201.47%200%201%201%202.94%200V6.16Z'%20fill='%232EB67D'/%3e%3cpath%20d='M9.843%2012.057a1.47%201.47%200%201%201%200%202.943%201.47%201.47%200%200%201-1.47-1.471v-1.472h1.47Zm0-.735a1.47%201.47%200%201%201%200-2.943h3.687a1.47%201.47%200%201%201%200%202.943H9.843Z'%20fill='%23ECB22E'/%3e%3c/svg%3e)

Slack

Read the project channel and DM threads where the real decisions were made.

[Connect](https://claude.ai/desktop/directory/slack)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23000'%20d='M4.46%204.44c.74.6%201.02.56%202.42.46l13.18-.79c.28%200%20.05-.28-.05-.32l-2.19-1.58c-.42-.33-.98-.7-2.05-.6L2.99%202.53c-.46.05-.56.28-.37.46l1.84%201.45Zm.8%203.1v13.87c0%20.74.37%201.02%201.21.98l14.49-.84c.84-.05.93-.56.93-1.16V6.6c0-.6-.23-.93-.74-.88l-15.14.88c-.56.05-.75.33-.75.93Zm14.3.74c.1.42%200%20.84-.42.89l-.7.14v10.24c-.6.33-1.16.51-1.63.51-.74%200-.93-.23-1.49-.93l-4.56-7.16v6.93l1.44.33s0%20.84-1.16.84l-3.21.18c-.1-.18%200-.65.33-.74l.84-.23V9.98l-1.16-.1c-.1-.42.14-1.02.79-1.07l3.44-.23%204.75%207.25V9.42l-1.21-.14c-.1-.51.28-.88.74-.93l3.21-.18Z'/%3e%3c/svg%3e)

Notion

Pull the meeting notes and PRD draft and write the finished spec back to the project page.

[Connect](https://claude.ai/desktop/directory/notion)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%230ACF83'%20d='M8%2024a4%204%200%200%200%204-4v-4H8a4%204%200%200%200%200%208Z'/%3e%3cpath%20fill='%23A259FF'%20d='M4%2012a4%204%200%200%201%204-4h4v8H8a4%204%200%200%201-4-4Z'/%3e%3cpath%20fill='%23F24E1E'%20d='M4%204a4%204%200%200%201%204-4h4v8H8a4%204%200%200%201-4-4Z'/%3e%3cpath%20fill='%23FF7262'%20d='M12%200h4a4%204%200%200%201%200%208h-4V0Z'/%3e%3cpath%20fill='%231ABCFE'%20d='M20%2012a4%204%200%201%201-8%200%204%204%200%200%201%208%200Z'/%3e%3c/svg%3e)

FigmaOptional

Reference the exploration frames and pull the screenshot annotations into the spec.

[Connect](https://claude.ai/desktop/directory/figma)

Browse all connectors[Open in Cowork](https://claude.ai/desktop/customize/connectors)



**Want to try this task before setting anything up?** Add your files to a working folder, point Cowork at the folder, and start with the prompt.

### Set your working folder[](https://academy.claude.com/use-cases/design-spec-from-threads)

Drag the files you'll use (exported Slack threads, meeting notes, the screenshots people kept pasting) into one folder on your machine, then point Cowork at it. Cowork reads from it and writes the assembled spec back to it. If you write specs regularly, [create a Cowork project(opens in new tab)](https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork) from that folder so your spec template, instructions, and memory stay attached.

Design / Checkout-Redesign

slack-export-checkout.txtApr 25, 202662 KB

kickoff-notes.docxApr 18, 202624 KB

current-flow-screens.pngApr 18, 20261.1 MB

In Cowork’s chat bar:Design / Checkout-Redesign

## The prompt[](https://academy.claude.com/use-cases/design-spec-from-threads)

### Copy this into Claude Cowork[](https://academy.claude.com/use-cases/design-spec-from-threads)

Assemble everything in this folder into a single design spec. Structure it as problem, goals, constraints, proposed solution, open questions, and out of scope. Quote the source for any decision already made and flag anything contradictory.



Design / Checkout-RedesignOpen in Cowork

### Why this works[](https://academy.claude.com/use-cases/design-spec-from-threads)

Prompt

**Name the section order.** The output matches the review template, no reshuffling.

Prompt

**Ask it to cite its sources.** Nobody re-litigates what was already settled in Slack.

Prompt

**Flag contradictions explicitly.** Conflicts surface before the review, not during it.

Source

**Put all the context in one place.** Threads, notes, and screenshots all carry equal weight.

### Get a better draft[](https://academy.claude.com/use-cases/design-spec-from-threads)

Practice

**Add an example to match.** Drop an example you like into the folder and Cowork matches your structure and voice.

Practice

**Ask it to flag uncertainty.** Add "flag anything you're not confident about" so you know where to look first when you review the draft.

## Make Cowork work for you[](https://academy.claude.com/use-cases/design-spec-from-threads)

A plugin skill is a starting point — customize it with your own practices and expertise. A few minutes of conversation and it runs with your standards from then on.

Make what we've done in this task so far into a skill, or edit the /design-handoff skill with my feedback.



DesignOpen in Cowork



**Tip:** tell Claude to edit the skill for you.

## Make it repeatable[](https://academy.claude.com/use-cases/design-spec-from-threads)

### Make it a live artifact[](https://academy.claude.com/use-cases/design-spec-from-threads)

A spec is out of date the moment someone replies in the channel. Ask Cowork to publish it as a live artifact and the cross-functional team has one link that stays current — re-run the skill or schedule it to refresh.

Publish that spec as a live artifact for the squad. Keep a "decisions changed since last version" section at the top.



Design / Checkout-RedesignOpen in Cowork

### Run it the morning before every review[](https://academy.claude.com/use-cases/design-spec-from-threads)

Review is on the calendar, the spec should already reflect last night's thread. Type `/schedule` in the prompt, or open **Scheduled** in the Cowork sidebar, and set the customized skill to run each morning, re-reading the channel and folder.

**/schedule** Weekdays at 8am, re-read #checkout-redesign and Design/Checkout-Redesign and re-run /design-handoff, updating the spec file and listing any decisions that changed overnight.



DesignOpen in Cowork

Scheduled taskActive

Spec freshness pass

Each weekday at 8am, re-reads the project channel and folder, re-runs `/design-handoff`, and updates the spec with a list of decisions that changed overnight.

Every **weekday at 8 am · re-reads #checkout-redesign and the project folder**[Open in Cowork](https://claude.ai/desktop/scheduled-task)

## Share with your teammates[](https://academy.claude.com/use-cases/design-spec-from-threads)

Your customized `/design-handoff` now carries your section order, your decision-log format, and your contradiction flags. Share it so every designer on the team writes specs the same way, and reviewers know exactly where to look no matter who owns the project.



Share the skill

In Cowork, open **Skills** → `/design-handoff` → **Share** and pick your teammates (or your whole workspace, if your admin allows). They get the skill with your template and format baked in, so they don't repeat Steps 1-3.

## What changes for design review[](https://academy.claude.com/use-cases/design-spec-from-threads)

You have one review-ready spec with each decision cited to its source and each contradiction flagged — assembled from the actual discussion instead of reconstructed by hand.

You did this for one project. The same approach covers research readouts, kickoff briefs, and engineering handoffs — each one becomes a skill your team runs the same way.

### Finish it where the file lives

[![](https://academy.claude.com/surfaces/design-icon.svg)

Claude Design

Lay the spec out as an on-brand one-pager

Open](https://claude.ai/design)

[Next: Clickable prototype from real components](https://academy.claude.com/use-cases/clickable-prototype)

Was this helpful?
