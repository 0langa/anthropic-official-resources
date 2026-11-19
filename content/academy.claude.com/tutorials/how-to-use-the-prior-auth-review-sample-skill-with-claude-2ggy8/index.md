# How to use the Prior Auth Review sample skill with Claude

How to use the Prior Auth Review sample skill with Claude

3 minClaude

[Open Claude](https://claude.ai/new)

![](https://academy.claude.com/assets/v1/thumbnail.light-mjer1khs.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-hn3u7z1d.png)

## **What is the Prior Auth Review sample skill?**[](https://academy.claude.com/tutorials/how-to-use-the-prior-auth-review-sample-skill-with-claude-2ggy8)

The Prior Authorization skill is a sample skill that digests request packet documentation and performs several initial checks to be verified by a human reviewer. These include:

- NPI Physician Registry
- ICD-10 Lookup
- CMS Coverage Database
- CPT Codes

It then extracts clinical data to summarize the argument for medical necessity and confirms all the required documentation is present.

This is a sample skill that gives you a starting point to customize for your own use cases. Be sure to review the [README.md(opens in new tab)](https://github.com/anthropics/healthcare/releases/download/v1.0.0/prior-auth-review-skill-v1.0.0.zip) file before using the skill.

## **Who should use the Prior Auth Review sample skill?**[](https://academy.claude.com/tutorials/how-to-use-the-prior-auth-review-sample-skill-with-claude-2ggy8)

This skill is designed for payer clinical reviewers who need to significantly reduce the time to initial recommendation without writing code from scratch.

## **How to access the skill in** [**Claude.ai**(opens in new tab)](http://claude.ai/)[](https://academy.claude.com/tutorials/how-to-use-the-prior-auth-review-sample-skill-with-claude-2ggy8)

**For Organization Owners (Team and Enterprise)**

1. Download the [ZIP file for `prior-auth-review-skill`(opens in new tab)](https://github.com/anthropics/healthcare/releases/download/v1.0.0/prior-auth-review-skill-v1.0.0.zip)
2. Review the sample skill thoroughly and make edits and adjustments to fit your organization’s workflows
3. Open [Organization settings(opens in new tab)](https://claude.ai/admin-settings), search for “Skills” and click the first result. Make sure the switches for skills and code execution are both turned on.
4. Open [your organization’s skills and plugins(opens in new tab)](https://claude.ai/admin-settings/skills), select the add button at the top, and upload the skill zip file

Learn about [provisioning and managing skills for your organization(opens in new tab)](https://support.claude.com/en/articles/13119606-provisioning-and-managing-skills-for-your-organization)

**For Individual Claude Users**

1. Download the [ZIP file for `prior-auth-review-skill`(opens in new tab)](https://github.com/anthropics/healthcare/releases/download/v1.0.0/prior-auth-review-skill-v1.0.0.zip)
2. Review the sample skill thoroughly and make edits and adjustments to fit your workflow
3. Open [skills in Claude(opens in new tab)](https://claude.ai/customize/skills) and select **Add**. If you don’t see skills or **Add**, search Settings for “Code execution” and make sure it’s on (on a Team or Enterprise plan, contact your team admin).
4. Choose the upload option, then select the skill zip file

## **How to access the skill in Claude Code**[](https://academy.claude.com/tutorials/how-to-use-the-prior-auth-review-sample-skill-with-claude-2ggy8)

Command

`/plugin marketplace add anthropics/healthcare`

`/plugin install prior-auth-review@healthcare`

Was this helpful?
