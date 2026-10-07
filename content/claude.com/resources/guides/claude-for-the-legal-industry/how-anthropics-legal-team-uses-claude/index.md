Chapter 034 min read

# How Anthropic's Legal team uses Claude

4 min read

14 min remaining

Anthropic's own legal team has built four Claude-powered workflows into daily practice. Each one targets work that follows a standard shape and gets reviewed by a lawyer before anything moves downstream.

## Marketing review

The Marketing Material Self-Review Tool lets go-to-market employees check their own content before sending it to Legal for final review. Marketers paste their draft into [a Claude Project (opens in new tab)](https://www.youtube.com/watch?v=tJP6SKfo49c), and Claude analyzes it using a skill that captures the legal team's historical guidance and review framework. The tool flags issues like publicity rights concerns, overstated claims, and statistical accuracy problems, and labels each as low, medium, or high risk. It also suggests fixes before the marketer submits a formal review ticket.

When content does get submitted for formal review, it is triaged to the right lawyer with the pre-flagged issues attached. Turnaround time dropped from two to three days down to 24 hours after the tool went live. Lawyers still read every blog post; the self-review layer just clears the obvious issues so review time can go to the calls that require judgment.

## Outside business activity review

The Outside Business Activity Request Form expedites conflict-of-interest review for Anthropic employees who want to consult or join a nonprofit board. Employment lawyers were previously spending significant time on routine COI form reviews; this workflow takes the routine cases off their plate.

Employees fill out a form with their department, manager, and a description of the proposed activity. Claude analyzes the submission against the COI policy framework and sends a recommendation to lawyers via Slack for approval. Where reviewers used to follow up with employees over multiple rounds to surface details, Claude reads the form, asks for more information if needed, and proposes an outcome. The recommendation lands in the legal team's queue with the analysis already completed.

## Privacy impact assessments

Writing PIAs from scratch was tedious, even when assessments followed similar patterns. Anthropic's legal team now uses MCP servers to connect Claude to a Google Drive folder of prior PIAs, paired with a Skill that captures the firm's format and the issues to look for in each new assessment.

A lawyer can ask Claude to read the prior assessments, apply the standard concerns from the Skill, and draft a new PIA from that context. The lawyer then reviews and finalizes the document. End-to-end, this new workflow reduces time spent on each PIA from roughly two hours to thirty minutes.

## Contract redlining

Comparing contract versions and recommending fallback language is time-consuming work. Claude now compares document versions in Google Docs and Microsoft 365, highlights the changes, and recommends language from the firm's commercial playbook. The team configured Claude to work inside Google Docs and comment with suggested edits in real time, so a reviewer can ask directly in the document whether a piece of language meets the firm's standard, and get an immediate answer.

The team also writes skills to streamline review of specific document types like NDAs and third-party vendor agreements. This workflow has reduced redlining from hours to minutes per agreement.
