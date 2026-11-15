Lesson 2 of 67 · Building with the Claude APIGetting an API key

# Getting an API key

Lesson 21 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won’t be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fbuilding-with-the-claude-api%2Fgetting-an-api-key)

In the next video we will be making a request to the Anthropic API. To do so, you will need a secret API key. This guide will walk you through the process of creating an API key.

**API use is billed separately from a Claude plan.** The Console can ask you to add credit even if you already pay for Claude. Max, Ultra, and Team plans include [monthly API credits(opens in new tab)](https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-ultra-and-team-plans), which you claim by linking a Console organization to your plan.

### Step One: Sign in to the Claude Console[](https://academy.claude.com/courses/building-with-the-claude-api/getting-an-api-key)

Go to the [Claude Console(opens in new tab)](https://platform.claude.com/) and sign in, or create an account if you don't have one yet.

### Step Two: Check your credit[](https://academy.claude.com/courses/building-with-the-claude-api/getting-an-api-key)

Open the [Billing page(opens in new tab)](https://platform.claude.com/settings/billing). If you have no credit, add some there. You can create a key without credit, but your requests fail until you add it.

### Step Three: Create a key[](https://academy.claude.com/courses/building-with-the-claude-api/getting-an-api-key)

Open the [API keys page(opens in new tab)](https://platform.claude.com/settings/keys) and click **Create key**. If the Console first asks where your code runs, choose **Somewhere else**. Then fill in the dialog:

- **Name:** Use 'Anthropic Course', so you can identify the key later.
- **Expires:** Choose a period long enough to finish the course, such as **30 days**.
- **Linked account:** Keep your own account.
- **Scope:** Choose **Default workspace**. A key for the whole organization needs an extra header, which this course doesn't send.

You might not see every field. It depends on your organization and your role.

### Step Four: Copy the key[](https://academy.claude.com/courses/building-with-the-claude-api/getting-an-api-key)

The Console shows the full key only once. Copy it now, because we will use it in the next video. If you lose it, create a new key.

Was this helpful?
