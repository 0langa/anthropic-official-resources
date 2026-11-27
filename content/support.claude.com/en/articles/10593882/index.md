# Share and unshare chats

Learn how to create shareable links to your chats with Claude. While chats are always private by default, you can easily create snapshots of your conversations to share via direct link. This guide walks you through the process of sharing and unsharing chats.

## Share chats

To share a chat:

1. Click the "Share" button in the upper right corner of your chat.

2. Click the "Share" button in the pop out to create a shareable link.

Once a chat has been shared, anyone with the link can view the chat snapshot. The chat snapshot includes all messages that were sent prior to sharing the chat, including any artifacts. All messages sent after sharing a chat will remain private by default. However, if you unshare the chat and share it again, the snapshot will be updated to include any new messages.

**Note:** Users on Team and Enterprise plans can't share chats publicly. By default, they can share only with other members of the same organization. An admin can also allow them to invite specific people outside it. Learn more in **[Share a chat with specific people](https://support.claude.com/en/articles/16762496-share-a-chat-with-specific-people#h_c3551baed0)** and **[Project visibility and sharing](https://support.claude.com/en/articles/9519189-project-visibility-and-sharing)**.

### Share chats with files or MCP integrations

When sharing chats that include uploaded files or MCP (Model Context Protocol) integrations, it's important to understand what information is included in the shared snapshot.

**Attached files:** If you share a chat that contains an attached file, the file itself is not included in the shared snapshot and remains private. Only the conversation and Claude's responses will be visible to anyone with the link.

**MCP tool calls:** When sharing chats that use MCP integrations, the raw data retrieved from MCP tool calls remains hidden in the shared snapshot. Only the final chat output and conversation will be visible to viewers. The underlying tool call data stays private.

This keeps your attached files and raw tool data out of the snapshot.

If Claude used your linked accounts in Personal Finance, the snapshot shows your messages and Claude’s responses, including any figures from your accounts. It can also show a chart or artifact that Claude made, figures included. Learn more in **[Use Personal Finance in Claude](https://support.claude.com/en/articles/18185620-use-personal-finance-with-claude)**.

## Unshare chats

To unshare a chat:

1. Navigate to the "Share" menu.

2. Click the visibility dropdown.

3. Change the chat from "Public" to "Private" to disable the direct link.

## Manage shared chats

Users on Free, Pro, Max, or Ultra plans can review a log of shared chats by navigating to **[Settings > Privacy](https://claude.ai/settings/data-privacy-controls)**. Find the **Privacy settings** section and click “Manage” next to **Shared chats:**

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/1921669913/7cc7be48cfc7a18f9f469d6cd83c/CleanShot+2026-01-08+at+10_20_43%402x.png?expires=1795792500&amp;signature=0f969a8d25b5d4206687414cb6f9028c2b5fff00db9c5241f29dbc5ee68a779b&amp;req=dSklF894lIheWvMW1HO4zWn5HjYaa0duc9cNIYuX0GHOgLF1740XovH5NWtb%0AOAWE6E2VGMI6090qqbU%3D%0A)

This will open a **Shared chats** modal listing the title, date shared, and link to each chat, allowing you to easily review and access all your previously-shared content. From here, you also have the option to click “Unshare” next to each listed chat to revoke access to the last snapshot you shared:

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/1624243810/e6fe1d262597446c7fe21dff9f10/AD_4nXdW-GhByF8uKV7fCq9lTbkVB91FglSL6TSyXAOUk_MLcTV9YsEMBMkm9rgm1oXqv0k3sJh1JhlzZP6tHVkKbDJJ71pDRRtM3aVNG64MDuKDIzgmknh-XDZdNa7biTsTdwGoPr5GRg?expires=1795792500&amp;signature=88d285f71ed592eb03bfde977ce82a996b0a70b53c742c68ed53fda10972ea64&amp;req=dSYlEst6noleWfMW1HO4ze44eSJmnRA7guvTv9woD7aMlfOuHxteTxAsuJT2%0AHbW0hSlxaVZZ6fqpiRo%3D%0A)

If you don’t have any shared chat snapshots, the **Shared chats** modal will show “No shared content found”:

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/1624243808/b025db8e598f0c88fb16d83d48d5/AD_4nXeUwCKnmFzzrjMHhfr5By4zk5pJlkEn3wbJ8-aNfu13Yl99IjBywpqPx9G07QRzpH1EwRY7uG7Q9m9fib98Gql1cIV7XwUCTzEgBNu79Ey8tCOS5CEVmwveIcEOxJ4fonBhe3g9MA?expires=1795792500&amp;signature=bc81c9ade412c4eb0537c7a234186fd095c8b3d079748a8bb9858e88aa99fc17&amp;req=dSYlEst6nolfUfMW1HO4zdaFnMBziIu0DeZsm0Gz1Ht1fwsTQ1hOXJXtconj%0A5azxYIZ4VbfernCCBlk%3D%0A)