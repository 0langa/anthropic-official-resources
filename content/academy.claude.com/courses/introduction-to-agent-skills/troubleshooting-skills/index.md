Lesson 6 of 6 · Introduction to agent skillsTroubleshooting skills

# Troubleshooting skills

Lesson 68 min

In this lessonBy the end, you’ll be able to

- Use the skills validator to catch structural issues before debugging
- Diagnose and fix common skill triggering and loading problems
- Resolve skill priority conflicts between enterprise, personal, project, and plugin skills
- Debug runtime errors including missing dependencies, permissions, and path issues

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fintroduction-to-agent-skills%2Ftroubleshooting-skills)

## Troubleshooting skills[](https://academy.claude.com/courses/introduction-to-agent-skills/troubleshooting-skills)

Embedded media: https://www.youtube-nocookie.com/embed/YBa1cwaG7is?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Troubleshooting skills · 4 min

SummaryTranscript

When skills don't work as expected, the problem usually falls into a few
predictable categories. This video walks through each one — from skills
that don't trigger to priority conflicts to runtime failures — and gives
you a systematic troubleshooting approach. You'll also learn about the
skills validator tool and how to use `claude --debug` to diagnose loading
issues.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=YBa1cwaG7is)

## Key takeaways[](https://academy.claude.com/courses/introduction-to-agent-skills/troubleshooting-skills)

- Start with the **skills validator tool** — it catches structural problems before you spend time debugging other things
- If a skill **doesn't trigger**, the cause is almost always the description — add trigger phrases that match how you actually phrase requests
- If a skill **doesn't load**, check that `SKILL.md` is inside a named directory (not at the skills root) and the file name is exactly `SKILL.md`
- If the **wrong skill gets used**, your descriptions are too similar — make them more distinct
- For **runtime errors**, check dependencies, file permissions (`chmod +x`), and path separators (use forward slashes everywhere)

When skills don't work, the problem usually falls into one of a few categories: the skill doesn't trigger, doesn't load, has conflicts, or fails at runtime. The good news is that most fixes are pretty straightforward.

## Use the Skills Validator[](https://academy.claude.com/courses/introduction-to-agent-skills/troubleshooting-skills)

The first thing to try is the agent skills verifier command. Installation steps vary by operating system, but using `uv` is the easiest way to get it set up quickly.

Once installed, either navigate to your skill directory or run the command from anywhere. The validator will catch structural problems before you spend time debugging other things.

## Skill Doesn't Trigger[](https://academy.claude.com/courses/introduction-to-agent-skills/troubleshooting-skills)

Your skill exists and passes validation, but Claude isn't using it when you expect. The cause is almost always the description.

Claude uses semantic matching, so your request needs to overlap with the description's meaning. If there's not enough overlap, no match. Here's what to do:

- Check your description against how you're actually phrasing requests
- Add trigger phrases users would actually say
- Test with variations like "help me profile this," "why is this slow?", "make this faster"
- If any variation fails to trigger, add those keywords to your description

## Skill Doesn't Load[](https://academy.claude.com/courses/introduction-to-agent-skills/troubleshooting-skills)

If your skill doesn't appear when you ask Claude "what skills are available," check these structural requirements:

- The `SKILL.md` file must be inside a named directory, not at the skills root
- The file name must be exactly `SKILL.md` — all caps on "SKILL", lowercase "md"

Run `claude --debug` to see loading errors. Look for messages mentioning your skill name. Sometimes this alone will point you straight to the problem.

## Wrong Skill Gets Used[](https://academy.claude.com/courses/introduction-to-agent-skills/troubleshooting-skills)

If Claude uses the wrong skill or seems confused between skills, your descriptions are probably too similar. Make them distinct. Being as specific as possible doesn't just help Claude decide when to use your skill — it also prevents conflicts with other similar-sounding skills.

## Skill Priority Conflicts[](https://academy.claude.com/courses/introduction-to-agent-skills/troubleshooting-skills)

If your personal skill is being ignored, an enterprise or higher-priority skill might have the same name.

![The skill priority hierarchy — Enterprise highlighted above Personal, Project, and Plugins — alongside the managed-settings.json file name](https://academy.claude.com/assets/media/75bd17ace918ad6549313137a838e24a2767a349914def59ee6edf0be1bf5972.png)

For example, if there's an enterprise "code-review" skill and you also have a personal "code-review" skill, the enterprise one wins every time. Your options:

1. Rename your skill to something more distinct (this is usually the easier path)
2. Talk to your admin about the enterprise skill

## Plugin Skills Not Appearing[](https://academy.claude.com/courses/introduction-to-agent-skills/troubleshooting-skills)

Installed a plugin but can't see its skills? Clear the cache, restart Claude Code, and reinstall.

If skills still don't appear after that, the plugin structure might be wrong. This is when the validator tool really earns its keep.

## Runtime Errors[](https://academy.claude.com/courses/introduction-to-agent-skills/troubleshooting-skills)

The skill loads but fails during execution. A few common causes:

- **Missing dependencies:** If your skill uses external packages, they must be installed. Add dependency info to your skill description so Claude knows what's needed.
- **Permission issues:** Scripts need execute permission. Run `chmod +x` on any scripts your skill references.
- **Path separators:** Use forward slashes everywhere, even on Windows.

## Quick Troubleshooting Checklist[](https://academy.claude.com/courses/introduction-to-agent-skills/troubleshooting-skills)

- **Not triggering?** Improve your description and add trigger phrases.
- **Not loading?** Check your path, file name, and YAML syntax.
- **Wrong skill used?** Make descriptions more distinct from each other.
- **Being shadowed?** Check the priority hierarchy and rename if needed.
- **Plugin skills missing?** Clear cache and reinstall.
- **Runtime failure?** Check dependencies, permissions, and paths.

## Lesson reflection[](https://academy.claude.com/courses/introduction-to-agent-skills/troubleshooting-skills)

- Have you encountered any of these troubleshooting scenarios in your own work? Which fix would have saved you the most time?
- How would you set up a process to validate skills before sharing them with your team?

## Course wrap-up[](https://academy.claude.com/courses/introduction-to-agent-skills/troubleshooting-skills)

Congratulations on completing Introduction to Agent Skills! You've learned how to create, configure, share, and troubleshoot skills in Claude Code. As you start building skills for your own workflows, remember that the best skills come from real pain points — start with the instructions you find yourself repeating most often.

Was this helpful?


## Transcript

When skills don't work, the problem usually falls into one of a few categories. The skill doesn't trigger, doesn't load, has conflicts, or fails at runtime. But, good news, most fixes are pretty straightforward. Here's some of them.

First thing we can do is try the AgentSkillsVerifier command. Depending on your operating system, installation steps will differ, but we recommend using uv as it's the easiest way to get it installed fast. Once installed, either navigate to your skill directory or run this command from anywhere.

Your skill exists, it passes the validator, but Claude isn't using it when expected. Hmm. Well, the cause is almost always the description. Claude uses semantic matching, so your request needs to overlap with the description's meaning. If there's not enough overlap... No match. Check your description against how you're phrasing requests. Add trigger phrases users would actually say. Test with variations. Help me profile this. Why is this slow? Make this faster. If any failed to trigger, add those keywords to your description.

If your skill doesn't appear when you ask Claude what skills are available, well, check these things. Skills must be in the right location with the right structure. The SKILL.md file must be inside of a named directory, not at a skills root. The file name must be exactly SKILL.md, all caps on the skill, lowercase md. Just crossing things off the list here, okay? Just crossing them off. Run claude --debug to see loading errors. Look for messages mentioning your skill name. Sometimes this will just solve the problem for you.

If Claude uses the wrong skill or seems confused, your descriptions are probably too similar. Make them distinct. Remember, being as specific as possible doesn't just help with Claude deciding when to use your skill, but not conflicting with other similar sounding skills.

If your personal skill is being ignored, an enterprise or higher priority skill might have the same name. So investigate that. If you see an enterprise code review and you also have a personal code review, well, the enterprise one will win every time. So your solution is to rename your skill to something a little bit more distinct. Talk to your admin about the enterprise skill, but you'll have a better chance with number one probably.

Install the plugin but can't see its skills? Well, clear the cache. Restart Claude Code and reinstall. If skills still don't appear, the plugin structure just might be wrong. This is when the validator tool makes sense.

The skill loads but fails during execution. If your skill uses external packages, they must be installed. Add this info to your description. Scripts need execute permission. Use forward slashes everywhere, even on Windows.

So here's a quick checklist. Not triggering? Well, improve your description and trigger phrases. Not loading? Check your path, file name, YAML syntax. Wrong skill used? Make your descriptions a little bit more distinct. Are you being shadowed? Check the priority and rename if needed. Plugins are missing? Clear your cache and reinstall. Runtime failure? Check dependencies, permissions, and paths.


## Video transcript

# Troubleshooting skills

When skills don't work, the problem usually falls into one of a few categories. The skill doesn't trigger, doesn't load, has conflicts, or fails at runtime. But, good news, most fixes are pretty straightforward. Here's some of them.

First thing we can do is try the AgentSkillsVerifier command. Depending on your operating system, installation steps will differ, but we recommend using uv as it's the easiest way to get it installed fast. Once installed, either navigate to your skill directory or run this command from anywhere.

Your skill exists, it passes the validator, but Claude isn't using it when expected. Hmm. Well, the cause is almost always the description. Claude uses semantic matching, so your request needs to overlap with the description's meaning. If there's not enough overlap... No match. Check your description against how you're phrasing requests. Add trigger phrases users would actually say. Test with variations. Help me profile this. Why is this slow? Make this faster. If any failed to trigger, add those keywords to your description.

If your skill doesn't appear when you ask Claude what skills are available, well, check these things. Skills must be in the right location with the right structure. The SKILL.md file must be inside of a named directory, not at a skills root. The file name must be exactly SKILL.md, all caps on the skill, lowercase md. Just crossing things off the list here, okay? Just crossing them off. Run claude --debug to see loading errors. Look for messages mentioning your skill name. Sometimes this will just solve the problem for you.

If Claude uses the wrong skill or seems confused, your descriptions are probably too similar. Make them distinct. Remember, being as specific as possible doesn't just help with Claude deciding when to use your skill, but not conflicting with other similar sounding skills.

If your personal skill is being ignored, an enterprise or higher priority skill might have the same name. So investigate that. If you see an enterprise code review and you also have a personal code review, well, the enterprise one will win every time. So your solution is to rename your skill to something a little bit more distinct. Talk to your admin about the enterprise skill, but you'll have a better chance with number one probably.

Install the plugin but can't see its skills? Well, clear the cache. Restart Claude Code and reinstall. If skills still don't appear, the plugin structure just might be wrong. This is when the validator tool makes sense.

The skill loads but fails during execution. If your skill uses external packages, they must be installed. Add this info to your description. Scripts need execute permission. Use forward slashes everywhere, even on Windows.

So here's a quick checklist. Not triggering? Well, improve your description and trigger phrases. Not loading? Check your path, file name, YAML syntax. Wrong skill used? Make your descriptions a little bit more distinct. Are you being shadowed? Check the priority and rename if needed. Plugins are missing? Clear your cache and reinstall. Runtime failure? Check dependencies, permissions, and paths.

