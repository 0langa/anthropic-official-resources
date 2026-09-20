# View your organization's support tickets

The Customer Portal gives you a single view of every support conversation your organization has open or closed with Anthropic, not just the tickets you filed yourself.

The Customer Portal is currently in beta. During the beta, Anthropic Support enrolls teams individually and can't grant portal access directly to individual users. Access is limited to Admins of Claude Console organizations and Owners/Primary Owners of Enterprise plan organizations.

## Who has access

Access to the Customer Portal is based on your role in each Anthropic product, and roles are evaluated independently. For example, a user who's an Admin of a Console organization but only has a User role in their Enterprise organization will only see tickets for the Console organization.

| **Product**                          | **Role with portal access** |
| ------------------------------------ | --------------------------- |
| Claude Console (platform.claude.com) | Admin                       |
| Claude (Enterprise plan)             | Primary Owner or Owner      |

If you don't have one of these roles, you'll see the message “No access to tickets portal.” Ask your organization's admin to assign you the appropriate role in Claude.

## Open the portal

The portal must be opened from within Claude or the Console:

1. Log in to your Claude or Console account.

2. Click your initials or name in the lower left corner and select “Get help” from the menu.

3. Select the “Messages” panel in the messenger that appears.

4. Click the portal link at the top of the panel (“Looking for your company’s conversations? Go to customer portal”).

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2545327968/cebd68e8fd893a51c8bdf3edcb10/2ebb320b-15cf-4e60-a380-c6bb173ea611?expires=1789900200&amp;signature=31824ed5e5615ed8657a7f615bf1f2712c1be6c831a0e3e6d3e0a4f92bc3718f&amp;req=diUjE8p8mohZUfMW1HO4zapwIks9ZJHc2xzTpDBjzI9CkRFE9XK0XEpUjGWB%0A3G7hjhToFKJW64o0szI%3D%0A)

**Note:** The portal requires session authentication from the messenger, so opening the portal from a direct link or bookmark may not work reliably.

## Navigate the portal

1. In the top left dropdown, switch from “Tickets” to “Conversations.”

2. In the dropdown to the right, select the organization whose tickets you want to view.

3. Click any row to open the full conversation thread and see its status.

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2545327970/e8e46b36c7e4ea25a7bcf621e024/e867f372-1192-4a1a-9345-d53ae985ca60?expires=1789900200&amp;signature=e70192253916d1ca0b8f1635ac818334166e07bba79b4dee7ac8a22b82871643&amp;req=diUjE8p8mohYWfMW1HO4zagaldb0qkO1UedsMn4pB%2BM8xcLv7PaD%2F9aCA%2FNi%0AZrSHZHSCMu9XG8FTkRg%3D%0A)

## Why is there an organization dropdown?

Support history is organized by Anthropic organization. If your company has both an Enterprise organization and a separate Console organization, each appears as a distinct entry here. Select the organization relevant to the conversations you're looking for.

If there are multiple organizations tied to your company, the organization names can look similar. If you're not sure which organization is which, contact your Anthropic customer success manager (CSM) for help identifying them.

## What appears in the portal

| **Status**   | **Coverage**                                                                                                               |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Included     | New tickets opened through the in-product chat messenger (from April 21, 2026 onward)                                      |
| Included     | Ticket status (open or closed), creator, created date, and full conversation history                                       |
| Partial      | Historical tickets. Not all prior conversations are mapped to organizations. You can request backfilling through your CSM. |
| Partial      | Tickets opened through email or Slack may not appear automatically.                                                        |
| Not included | Tickets filed from an individual or personal organization. These never roll up to your company organization.               |

## Troubleshooting

### The portal won't load or redirects to a login page.

Sign in at **[claude.ai](http://claude.ai)** or **[platform.claude.com](https://platform.claude.com)** first, then open the portal through the support messenger. Authenticating directly from the portal isn't supported.

---

## Frequently asked questions

### I see “No access to tickets portal.”

You're signed in, but you likely don't hold an Owner/Primary Owner (Enterprise) or Admin (Console) role in any organization. Ask your organization's admin to grant the role, or have them check the portal on your behalf.

### The organization dropdown shows organizations I don't recognize.

Most users belong to multiple organizations, typically your company's Enterprise organization and separate Console organization. Organization names are often simple defaults that don't distinguish the organization type.

### A ticket I know exists isn't showing.

It's likely associated with a different organization (try switching organizations in the dropdown), or it was opened through email or Slack and hasn't been linked to your organization yet. Send the ticket details to your CSM and we'll map it.

### Can I open a new ticket from the portal?

Not directly. Use the chat messenger in Claude or the Console, and tickets opened there appear in the portal automatically. Learn more about **[how to get support](https://support.claude.com/en/articles/9015913)**.