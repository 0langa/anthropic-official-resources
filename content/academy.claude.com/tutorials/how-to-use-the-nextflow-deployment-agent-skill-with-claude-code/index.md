# How to use the Nextflow Deployment agent skill with Claude Code

How to use the Nextflow Deployment agent skill with Claude Code

3 minClaude Code

![](https://academy.claude.com/assets/v1/thumbnail.dark-m5s78v7v.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-m5s78v7v.png)

## **What is the Nextflow Deployment agent skill?**[](https://academy.claude.com/tutorials/how-to-use-the-nextflow-deployment-agent-skill-with-claude-code)

This skill enables Claude Code to deploy nf-core Nextflow pipelines for common omics analyses (RNA-seq, variant calling, ATAC-seq) by automating environment validation, data acquisition from GEO/SRA, sample sheet generation, and pipeline execution — turning natural language prompts into reproducible Nextflow workflows.

Check out the [Skill README(opens in new tab)](https://github.com/anthropics/life-sciences/releases/download/v1.1.1/nextflow-development-v1.1.1.zip) for more information.

## **Who should use the Nextflow Deployment agent skill?**[](https://academy.claude.com/tutorials/how-to-use-the-nextflow-deployment-agent-skill-with-claude-code)

This agent skill is designed for bench scientists and researchers who want to run nf-core Nextflow pipelines and desire to execute standardized sequencing analyses or reanalyze public datasets without writing code from scratch.

## **How to access the agent skill in Claude Code**[](https://academy.claude.com/tutorials/how-to-use-the-nextflow-deployment-agent-skill-with-claude-code)

1. Download the [ZIP file for the nextflow-development skill(opens in new tab)](https://github.com/anthropics/life-sciences/releases/download/v1.1.1/nextflow-development-v1.1.1.zip)
2. On your own computer, unzip it into a new folder named `nextflow-development` inside `~/.claude/skills/`, so that the skill's `SKILL.md` file is at `~/.claude/skills/nextflow-development/SKILL.md`
3. Start Claude Code and run `/skills` to check that **nextflow-development** is listed

Learn about [where Claude Code loads skills from(opens in new tab)](https://code.claude.com/docs/en/skills).

Was this helpful?
