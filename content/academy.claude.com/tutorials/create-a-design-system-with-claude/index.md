# Setting up a design system in Claude

A design system is your brand written down in one place, including its colors and type, its components, and the rules for using them. Set one up in Claude, share it with your organization, and the decks and designs your team makes with Claude start from it.

10 minClaude Design

![](https://academy.claude.com/assets/v1/thumbnail.light-eswfspwy.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-fu6kgwq1.png)

A design system teaches Claude your brand. Once it's set up and shared with your organization, the decks, designs and prototypes your team makes with Claude can start from your colors, type and components.

Film: a short silent film with captions about design systems in Claude. The user starts one, builds it, adds a usage note and shares it, and a teammate's design then follows that note.

Use K to play or pause, the arrow keys to move two seconds, and F for full screen.

A design system

teaches Claude your brand



To get started, open the + menu in any conversation and choose Design system.

Claude can build your design system from your code on GitHub.

Claude can also build it from your connected tools.

Or you can upload your brand files.

Claude then writes a first draft of your design system.

The overview describes your brand and the few rules that always apply.

You can add a usage note to any color or component.

A usage note tells Claude how to use a component, and when not to.

Claude reads the overview first, every time it uses your design system.

Then Claude reads only what the task needs.

Before using a component, Claude reads the first sentence of its usage note.

Keep the overview short, and put rules for one component in its usage note.

Once it’s ready, invite the people who should review your design system.

To share it with everyone, ask an owner of your organization.

An owner can also make it the default design system.

Your teammates see the default already selected in their + menu.

In a design, Claude can use your colors, type styles and real components.

Here, Claude uses one primary button, as your usage note says.



What a design system does

Start a design system

Build it from what you have

Review it and add usage notes

How Claude reads it

Share it with your team

What your teammates see

Set it up and share it

What a design system does

0:00 / 2:16

A design system teaches Claude your brand · 2 min

To get started, open the + menu in any conversation and choose Design system.

Claude can build your design system from your code on GitHub.

Claude can also build it from your connected tools.

Or you can upload your brand files.

Claude then writes a first draft of your design system.

The overview describes your brand and the few rules that always apply.

You can add a usage note to any color or component.

A usage note tells Claude how to use a component, and when not to.

Claude reads the overview first, every time it uses your design system.

Then Claude reads only what the task needs.

Before using a component, Claude reads the first sentence of its usage note.

Keep the overview short, and put rules for one component in its usage note.

Once it’s ready, invite the people who should review your design system.

To share it with everyone, ask an owner of your organization.

An owner can also make it the default design system.

Your teammates see the default already selected in their + menu.

In a design, Claude can use your colors, type styles and real components.

Here, Claude uses one primary button, as your usage note says.

Set up your design system and share it

Table of contents: jump links to the guide's eight sections, from what a design system is, through creating one and sharing it with your organization, to using it day to day.

## 1. What a design system is[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

A design system is a company's design decisions, written down once, in a form both people and software can reuse. In Claude, it has these main parts:

Diagram: the four main parts of a design system in Claude, which are the overview, tokens, components and usage notes. Each has a short definition and an example built around one button.

1. OverviewYour brand described in words, with the few rules that always apply. Claude reads the overview first, every time it uses your design system.

**Sentence case, always.** Buttons start with a verb.

2. TokensA value saved under a name, such as a color, a type style or a spacing step.

color-accent#1F6F6B

3. ComponentsReusable pieces of interface, such as buttons and badges, each defined once in your design system. In a design or prototype, Claude can use the real component.`<Button variant="primary">`

Plan a tripbackground: color-accent

4. Usage notesA note you can add to any token or component, telling Claude how to use it and when not to.

ButtonUse primary once per view.

Meridian is the example company in this guide.

## 2. What changes when Claude has your design system[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

Claude can make a good deck or screen from a prompt with no setup. But it hasn't seen your brand, so it uses its own defaults, and the result doesn't look like your company.

With your design system, Claude uses your colors and type, and your team's real components if the design system includes them.

Comparison: one request for a sign-up screen, made without a design system and with a sample company's. It shows how the overview, tokens and components replace Claude's defaults with the company's look and wording.

The request: “Make a sign-up screen for our fall trips.”

Without a design system

MeridianTripsGroups

Fall trips, planned together.

Pick a place, invite your people, and book it in one go.

Email address

GET STARTED NOWLearn More

Claude uses its own defaults, so the screen could be any company’s.

With Meridian’s design system

MeridianTripsGroups

Fall trips, planned together.

Pick a place, invite your people, and book it in one go.

Email address

Plan a tripSee how it works

Claude uses Meridian’s colors, type, button and wording.

What changed

Without

With Meridian’s

Overview

“GET STARTED NOW”

“Plan a trip”: sentence case, a verb first

Tokens

A stock blue, a system font, 6 px corners

Meridian’s sand, teal and serif display face

Components

A button restyled from scratch each time

Meridian’s own Button, with its real variants

Claude uses your design system when it makes decks, designs and prototypes. Your colors, type styles and fonts apply to all of them, and designs and prototypes can also use your real components. To see which component Claude used in a design, select that part of the design. Its outline is a different color, and the Layers list shows its name.

## 3. Before you start[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

- Design systems are in beta on Pro, Max, Team and Enterprise plans. They aren't available on the Free plan.
- On Team and Enterprise plans, owners [control the **Design systems** template(opens in new tab)](https://support.claude.com/en/articles/16994751-artifacts-admin-guide-for-team-and-enterprise-plans) under **Organization settings > Artifacts**. On Enterprise it starts switched off. If you don't see **Design system** in the places described below, that setting is the first thing to check.
- Anyone with access can create a design system, use it, and share it with specific people. Sharing one with the whole organization, or making it the default, takes an owner of your organization ([section 7](https://academy.claude.com/tutorials/create-a-design-system-with-claude)).
- If your team already has a design system in standalone Claude Design (claude.ai/design), you can bring it over instead of rebuilding it. See [Migrate from standalone Claude Design](https://academy.claude.com/tutorials/create-a-design-system-with-claude) below.

## 4. Create a design system[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

### Start a new one[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

You can start a design system from the message box in any conversation, or from Settings.

**From the message box:** open the **+** menu, choose **Design system**, then **New design system**. You'll get two choices:

- **Using Claude** opens an empty design system beside a new conversation, where you can upload brand files, pull from your connected tools, or describe the brand.
- **Using Claude Code** is for a design system that already exists in a code repository. Claude Code reads your repo's tokens and components.

**From Settings:** **Settings > Design systems** lists the design systems you can use and has a **New design system** button.

Illustration: Claude's message box with the path to a new design system marked, from the plus menu to Design system to New design system, which offers Using Claude or Using Claude Code.

Write a message…

1Opus 5.5

2

Add files or photos⌘U

Skills

Connectors

Design system

Plugins

3

Manage design systems

New design system

Using ClaudeUpload brand files, pull from design connectors, or describe it

Using Claude CodeClaude Code reads your repo’s tokens and components

A design system is itself an artifact. It's a page you can open, edit and share, and it appears on the Artifacts page with the rest of your work.

### Pick a way to fill it in[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

A new design system opens as an empty page with the question **Not sure where to start?** and a card for each way to fill it in. Choose a card, and Claude starts in the conversation beside the page. With **Upload brand files**, you add your files first and then choose **Create design system**.

Illustration: a new, empty design system page with three cards for filling it in, Sync from GitHub, Build from connectors and Upload brand files. All three fill in the same page.

Your design system…

This page is yours to edit. Click anywhere and write what this system is for, the rules it follows, and how to use its tokens and components — Claude reads it before it designs anything.

Principles

- A short rule the whole system follows
- Another one — keep each to a line

Not sure where to start?

Sync from GitHubPoint Claude at a repository; it imports tokens and components from code.

Build from connectorsClaude builds from your connected tools, or asks you a few questions first.

Upload brand filesDrop in logos, fonts, guidelines and token files; Claude drafts from them.

All three fill in the same page. You can start with one and add from another later.

### Sync from GitHub[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

Use this when your colors, type and components already exist in code. Claude asks which repository to read and what you want brought in. It reads the code, fills in the page, and is designed to leave your repository unchanged.

- Colors, type styles, spacing, corner radii, fonts, logos and docs are imported.
- Components are your choice. Claude lists the components it found and asks which to include. To bring them in, Claude has to run your project's build, so it asks you first.
- Tell Claude which folder has the interface code, so it has less to read than the whole repository.
- You can sync again later. Changed values update, new ones are added, and your usage notes, overview text, fonts and assets stay. If the code no longer defines a token, Claude lists it and asks before removing it.

### Build from connectors[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

Use this when your brand is kept in a design tool, a shared drive or a wiki that you've connected to Claude. Claude checks which of your connectors has brand or design work in it, tells you which it found, and offers to build from it.

If you have nothing connected, Claude asks a few short questions about your brand and drafts from your answers.

### Upload brand files[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

Use this when your brand is kept in files, such as logos, fonts, a guidelines PDF, a token file, or a few finished slides or screens. Claude reads the files you add and writes a first draft of the design system from them.

- Files that show your brand in use, such as finished decks and product screenshots, give Claude more to work from than a guidelines PDF alone.
- The first draft is deliberately small. Claude then asks whether that's enough or whether to take it further.
- Claude is designed to ask before it fills in a value your files don't show.



Review the draft before anyone else uses it

Read the overview Claude wrote and look through each section. You can fix values and text directly on the page, or ask Claude in the conversation beside it. When you ask, be specific, for example *"The badge padding is too tight."*

### Migrate from standalone Claude Design[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

If your team built design systems in standalone Claude Design (claude.ai/design), you can bring them into Claude instead of rebuilding them. Until they're migrated, they carry a **Standalone** tag in **Settings > Design systems**, and Claude can't use them in conversations.

One migration covers your whole organization, so one person does it for everyone, and that person doesn't need to be an owner. It starts from the **Artifacts** page. The originals don't change.

Each migrated design system has one step left. The owner of the design system opens it, selects **Finish the migration** and sends the request to Claude. If a message says the request was copied, paste it into a conversation with Claude and send it. Claude then reorganizes the files so you can preview each section and edit it on the page. Until then, you can still ask Claude to make changes.

The standalone version is closing. For the date, what gets shared, and what to do when a design system can't be migrated, see the [Help Center article on migrating(opens in new tab)](https://support.claude.com/en/articles/17440474-migrate-from-standalone-claude-design-to-claude).

## 5. Look through the page, and leave notes for Claude[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

The design system's page is where your team reviews and edits it, and where you leave usage notes that tell Claude how to use it.

### The page[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

Explorer: a sample design system page with eight sections, from Overview and Colors to Components and Assets. Select a section to see what it holds.

OverviewColorsTypographySpacingCorner radiusShadowsComponentsAssets

OverviewColorsTypographySpacingCorner radiusShadowsComponentsAssets

ColorsAdd

bg

NameMeridian lightMeridian dark

bg-000#FFFFFF#0E1514

bg-100#F6F3EC#14201F

bg-200#ECE7DC#1B2A28

brand

NameMeridian lightMeridian dark

brand-teal#1F6F6B#5FB3AD

brand-coral#D4644A#E58A73

brand-sand#F6F3EC#14201F

**Colors:** Color tokens in groups, with a column for each theme.

Select a section to see what’s in it.

You can edit the overview text, token values, notes, fonts and assets right on the page. To add a theme or change a component's code, ask Claude in the conversation beside the page.

### Usage notes[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

As you review your design system, you can leave usage notes for Claude. A note tells Claude how to use a color, a type style or a component, and when not to. Claude reads a component's note before it builds with that component.

Illustration: an open usage note on a Button component in a design system page. It models a good note, with the rule in the first sentence, which Claude reads before it uses the component.

Components

NamePreview

Button

Plan a tripCancelLearn moreDelete



Usage notes

**Use primary once per view.** **Secondary** is the default.

**Ghost** is for toolbars. **Danger** goes behind a confirmation.

Badge

BetaSyncedDraft



Put the rule in the note’s first sentence. Claude reads that sentence before it uses the component.



To change how Claude uses a color or component, edit its note

Asking again changes only the design you're working on. A usage note also applies to what Claude makes later. Open the note on that color or component and write the rule, for example "Ghost is for toolbars" or "never on body text". Claude reads it the next time it uses that color or component.

## 6. How Claude uses it when it builds[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

For each request, Claude reads the overview first, then only the parts of your design system that the task needs.

Diagram: four steps in how Claude uses a design system. It reads the overview first, opens only what the task needs, lists your styles in the editor, then builds with your values and components.

1. 1

   Reads your overview firstThe overview ends with a list of everything else in your design system.

   OverviewColors and typeButtonBadgeTextInputIconsLogos
2. 2

   Opens only what the task needsFor example, it reads your colors and type for visual work, and a component’s notes before it uses that component in a design.

   OverviewColors and typeButtonBadgeTextInputIconsLogos
3. 3

   Lists your styles in the editorIn the editor, the color pickers and the text style menu list your own colors and styles, so edits you make by hand stay in your brand.

   Colors

   Text stylesDisplayHeadingBody
4. 4

   Builds, and says what’s missingClaude builds with your exact values and real components in place of its own defaults. If your design system is missing a value or component, Claude is designed to say so, and its reply usually says what it assumed.

   Lisbon in May14 travelers · 4 nights

   Plan a trip



Keep the overview short

Claude reads the whole overview every time it uses your design system. Use the overview to describe the brand and give the few rules that apply to everything Claude makes. Put a rule about a single color or component in its usage note. If the overview is still long, ask Claude to move detail into separate files, and name each file in the overview.

If your organization has a default design system, Claude uses it without asking. If it has design systems but no default, Claude asks which one to use.

Show the files For the curious: the files behind the page

Behind the page, a design system is a package of small files. Claude reads the first one every time and the rest only as needed.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">File</th><th class="border-b border-strong p-sm text-left font-medium">What it is</th></tr></thead><tbody><tr><td class="border-b p-sm"><code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">README.md</code></td><td class="border-b p-sm">The overview. Always read first. It ends in an index of everything below, one line each.</td></tr><tr><td class="border-b p-sm"><code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">api/tokens.md</code></td><td class="border-b p-sm">Every token with its value per theme and its usage note.</td></tr><tr><td class="border-b p-sm"><code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">api/components/Button.md</code> (one per component)</td><td class="border-b p-sm">The component's variants and sizes, how to use it, and the first sentence of its usage note.</td></tr><tr><td class="border-b p-sm"><code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">api/icons.md</code>, <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">api/assets/Logos.md</code> (one per asset group)</td><td class="border-b p-sm">Names, file references and the group's note.</td></tr><tr><td class="border-b p-sm"><code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">tokens.json</code>, <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">components/bundle.js</code></td><td class="border-b p-sm">The versions tools read. Claude Slides loads the first and Claude Design loads both, so their style and color pickers list your values.</td></tr></tbody></table>

You don't edit these by hand. The files under `api/` are rebuilt from what's on the page each time it saves.

## 7. Share it with your organization[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

At first, only you can use a new design system. You can share it with specific people, and an owner of your organization can share it with everyone and make it the default.

Explorer: four levels of sharing a design system, which are only you, people you invite, everyone, and default. Select a level to learn who can use it and who can set that level.

Only youPeople you inviteEveryoneDefault

**Who can use it**Only you. It’s in your Design system menu, so you can try it before you share it.

**Who can set it**No one needs to. Every new design system starts at this level.

**Who can use it**You and the people you invite. It’s in their Design system menu, under Shared with you.

**Who can set it**You, from Share at the top of the design system’s page.

**Who can use it**Everyone in your organization. It’s in their Design system menu, ready to select.

**Who can set it**An owner of your organization, from Share, once you’ve given them Owner access.

**Who can use it**Everyone in your organization. It’s already selected when they start a deck or a design.

**Who can set it**An owner of your organization, once it’s shared with everyone. There is one default per organization, and setting a new one replaces the old.

MeridianShare

Colors

Meridian

Add people

People with access

Owner

I

R

TOwner

Default design system

General access

Only you

### Step by step[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

1. **Try it yourself first:** your design system is in your **+ > Design system** menu as soon as it has content saved in it. Ask for an ordinary deck, and say nothing about the brand. If the deck looks like your company, the design system is working.
2. **Share it with the people who should review it:** select **Share** at the top of the design system's page and invite them. It appears in their **+ > Design system** menu under **Shared with you**. Give edit access to anyone who should be able to change it.
3. **Have an owner of your organization share it with everyone:** first invite them from **Share** and give them **Owner** access. In **Share**, they then set the audience to **Anyone at [your organization]** and confirm. After that, the design system is in every teammate's menu.
4. **Make it the default, if you want one:** once it's shared with everyone, an owner of your organization turns on **Default design system** in **Share**, or chooses **Set as default** next to it in **Settings > Design systems**. There is one default per organization, and setting a new one replaces the old.

### See all your design systems in one place[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

**Settings > Design systems** lists your own design systems, the ones shared with you and the ones shared with your organization. **Manage design systems**, at the foot of the **+ > Design system** menu, opens the same page.

- The **Usable by** column says who can use each one, and the default carries a **Default** badge.
- Design systems still in standalone Claude Design carry a **Standalone** tag.
- You can open, share, rename or delete your own from the row menu.

Owners of Team and Enterprise organizations also see every design system shared with the organization under **Organization settings > Artifacts**, and can set or remove the default there.



Who should be responsible for it

Choose one person to be responsible for the design system and keep it up to date, such as the person who leads brand or product design. Once it has been reviewed, an owner of your organization shares it with everyone and sets it as the default.

## 8. Use it day to day[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

### What your teammates see[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

Once a design system is shared with everyone, it's in every teammate's **+ > Design system** menu. Once it's the default, it's already selected when they start a deck or a design.

Illustration: a teammate's Design system menu with two shared design systems selected, one marked Default. It shows that the default comes already selected, and how the chip reads when two are picked.

Make the Q3 launch deck

Opus 5.5

Claude SlidesMeridian +1

MeridianDefault

Meridian Events

Manage design systems

New design system

With two design systems selected, the chip under the message box shows the first one’s name and “+1”.

The default doesn't replace a design system you've already picked on the same device. To use none in a conversation, clear every checkbox, and the chip under the message box reads **No design system**.



Using multiple design systems

To use more than one design system, select the checkbox next to each one, and tell Claude which to follow where they overlap. Claude reads every design system you select along with your request, so choose only the ones you need. For decks, you can keep a smaller, slides-only design system beside the full one.

### Keeping it current[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

You can update your design system in a few ways:

- **Small changes:** edit the page. Values, overview text and notes save as you go.
- **Larger changes:** ask Claude in the conversation beside the page. This is how you add a theme or change a component.
- **A design system that came from code:** change the code, then sync from GitHub again. Your notes and page edits are kept.
- **Decks and designs you've already made:** each one keeps its own copy of the design system from when it was made. Ask Claude to update it.

### Troubleshooting[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">What you see</th><th class="border-b border-strong p-sm text-left font-medium">What to do</th></tr></thead><tbody><tr><td class="border-b p-sm">The result is close to your brand but not right</td><td class="border-b p-sm">Give Claude more examples of your brand. Add finished decks or product screenshots, or sync from your code. Then tell Claude exactly what to change.</td></tr><tr><td class="border-b p-sm">Claude keeps misusing one color or component</td><td class="border-b p-sm">Write the rule in its usage note.</td></tr><tr><td class="border-b p-sm">Claude didn't use your design system</td><td class="border-b p-sm">Look at the chip under the message box. If it reads <strong>No design system</strong>, select your design system in <strong>+ &gt; Design system</strong>. If your organization has no default, ask an owner of your organization to set one.</td></tr><tr><td class="border-b p-sm">Your fonts were replaced by other fonts</td><td class="border-b p-sm">Upload the font files in the Typography section. Claude can't use a font that is named on the page but has no file.</td></tr><tr><td class="border-b p-sm"><strong>Anyone at [your organization]</strong> or <strong>Default design system</strong> is grayed out in <strong>Share</strong></td><td class="border-b p-sm">Both are for owners of your organization. Share the design system with an owner, give them <strong>Owner</strong> access, and ask them to set it.</td></tr><tr><td class="border-b p-sm">"This design system can't be the default yet"</td><td class="border-b p-sm">An owner of your organization shares it with everyone first, then sets the default.</td></tr><tr><td class="border-b p-sm"><strong>Design system</strong> isn't in the <strong>+</strong> menu</td><td class="border-b p-sm">On Team and Enterprise plans, an owner <a aria-describedby="_R_2jqanmd35kq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary" data-cds="TextLink" href="https://support.claude.com/en/articles/16994751-artifacts-admin-guide-for-team-and-enterprise-plans" rel="noopener" target="_blank">turns the template on<span class="sr-only" hidden="" id="_R_2jqanmd35kq_">(opens in new tab)</span></a> under <strong>Organization settings &gt; Artifacts</strong>. On Enterprise, an owner may also have <a aria-describedby="_R_6jqanmd35kq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary" data-cds="TextLink" href="https://support.claude.com/en/articles/16994751-artifacts-admin-guide-for-team-and-enterprise-plans" rel="noopener" target="_blank">limited design systems to some groups<span class="sr-only" hidden="" id="_R_6jqanmd35kq_">(opens in new tab)</span></a>. On the Free plan, design systems aren't available.</td></tr><tr><td class="border-b p-sm">A design system from claude.ai/design has a <strong>Standalone</strong> tag and isn't in the <strong>+</strong> menu</td><td class="border-b p-sm">It hasn't been migrated yet. See <a class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary" data-cds="TextLink" href="https://academy.claude.com/tutorials/create-a-design-system-with-claude">Migrate from standalone Claude Design</a>.</td></tr><tr><td class="border-b p-sm">You can't find where to start the migration</td><td class="border-b p-sm">Someone in your organization may have run it already. Check <strong>Settings &gt; Design systems</strong> to see what came over. If design systems are off for your organization, an owner turns them on under <strong>Organization settings &gt; Artifacts</strong>. The <a aria-describedby="_R_6kqanmd35kq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary" data-cds="TextLink" href="https://support.claude.com/en/articles/17440474-migrate-from-standalone-claude-design-to-claude" rel="noopener" target="_blank">Help Center article on migrating<span class="sr-only" hidden="" id="_R_6kqanmd35kq_">(opens in new tab)</span></a> covers the rest.</td></tr></tbody></table>

## More resources[](https://academy.claude.com/tutorials/create-a-design-system-with-claude)

- [Making slides and presentations with Claude(opens in new tab)](https://academy.claude.com/tutorials/using-claude-design-for-presentations-and-slide-decks) and [Using Claude for prototypes and UX(opens in new tab)](https://academy.claude.com/tutorials/using-claude-design-for-prototypes-and-ux) show the design system in use.
- [Collaborate with your team in Claude artifacts(opens in new tab)](https://academy.claude.com/tutorials/intro-to-artifacts) for sharing and editing decks and designs.
- Visit the Help Center for more on [design systems in Claude Design(opens in new tab)](https://support.claude.com/en/articles/14604397-set-up-your-design-system-in-claude-design) and [migrating from standalone Claude Design(opens in new tab)](https://support.claude.com/en/articles/17440474-migrate-from-standalone-claude-design-to-claude). Owners can find the settings for their organization in the [Artifacts admin guide(opens in new tab)](https://support.claude.com/en/articles/16994751-artifacts-admin-guide-for-team-and-enterprise-plans).

Was this helpful?


## 
Overview

Meridian

Meridian helps people plan trips they’ll remember. This is the shared look for our app, our site and our decks.

Principles

- **Calm and clear.** Sand is the page color. Teal is for the one thing to do next.
- **Sentence case, always.** Buttons start with a verb.
- **Photos over illustration.** Real places, real light.


## 
Typography

TypographyAddUpload font

NamePreview

displayThe quick brown fox jumps over the lazy dogMeridian Serif · 40/44 · Medium

headingThe quick brown fox jumps over the lazy dogMeridian Sans · 20/28 · Semibold

bodyThe quick brown fox jumps over the lazy dogMeridian Sans · 15/24 · Regular


## 
Spacing

SpacingAdd

NameValue

space-14px

space-28px

space-416px

space-832px


## 
Corner radius

Corner radiusAdd

NameValue

radius-sm4px

radius-md8px

radius-lg12px

radius-full999px


## 
Shadows

ShadowsAdd

NameMeridian lightMeridian dark

shadow-card0 2 8 · 6%0 2 8 · 6%

shadow-sheet0 12 32 · 14%0 12 32 · 14%


## 
Components

ComponentsMeridian light

NamePreview

Button

Plan a tripCancelLearn moreDelete



Badge

BetaSyncedDraft




## 
Assets

AssetsNew set

Logos

NamePreviewType

wordmark.svgMeridianSVG

wordmark-reversed.svgMeridianSVG

mark.pngMPNG
