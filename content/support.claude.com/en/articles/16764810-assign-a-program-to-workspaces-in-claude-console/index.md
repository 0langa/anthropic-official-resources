# Assign a program to workspaces in Claude Console

Anthropic offers several verification programs, such as the Cyber Verification Program, or access to models that might not be generally available. In order to gain access to these programs, go to our **[Verification Portal](https://portal.anthropic.com/)** to see what programs are available to you, and apply.

Once you’ve applied and been approved for a program, Anthropic issues a “program” to your organization. In order for it to be used, you must assign it to a group of people within the organization. In the Claude Console, a program applies to workspaces, either automatically (for programs like the Cyber Verification Program) or by assignment.

This article covers how to enable programs for the Console.

## Before you start

- Your organization must already have a grant. Grants appear only after Anthropic issues one to your organization. To apply to a specific program, go to our **[Verification Portal](https://portal.anthropic.com/)** to see what programs are available.

- In the Console, you need to be an organization Admin. Other roles cannot view or manage grants.

## Give a Console workspace access

In the Console, programs are issued to your organization and apply to workspaces. Some programs, such as the Cyber Verification Program, apply automatically to every workspace that meets their requirements. Others need workspaces assigned. A program only applies to API traffic from workspaces that meet its requirements.

**Follow these steps:**

1. **[Sign in to the Console](https://platform.claude.com/)** as an organization Admin. Go to **[Organization settings > Programs](https://platform.claude.com/settings/organization/programs)**. The program card shows whether it applies automatically or needs workspaces assigned.

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2642744587/d4584e035604f3b7c08afa53a1c6/ee1183ff-e591-4484-a989-1f754245d39c?expires=1788777900&amp;signature=24e6c31d5b732a50f1300c120b5180275690b4d396cf8e8e57cb07447f15d0ad&amp;req=diYjFM56mYRXXvMW1HO4zT%2FymEGAEw6uktHcEoeKC4e6Tj32ceSvZU5F0qyQ%0A1VVa%0A)

2. Select the program to open its page. The **Workspaces** table shows each workspace's status. A workspace marked with an issue does not meet a requirement yet.

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2642745562/253e55a3292b35f728fb5dc89fb2/0878a8a9-dce5-4df2-9826-3796605b52a0?expires=1788777900&amp;signature=9ebecffbec9b4617c839ecb1457fd87a2d6a59a07c02df15b2300878deac06fb&amp;req=diYjFM56mIRZW%2FMW1HO4zc116gZvR1e4MCr%2B42fbmkZxXdQte1B0nMTT5%2FGI%0AFf90%0A)

Hover over the issue to see which requirement is not met.

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2642746466/c49291119729e99f4dba8ec924e4/3f802c0e-7fbc-4e80-935a-05da58f65bde?expires=1788777900&amp;signature=4562fe435b656bc0fdb1f0d9ff44ff3cb5614e0a8194303ce5e2c9aa9eaf1d42&amp;req=diYjFM56m4VZX%2FMW1HO4zaveae5lkXrJVPpeIJbmktSgiFprmXFPMeUJTTvL%0AGKah%0A)

3. To give a workspace access, make it meet the requirements. Open the workspace, select "Manage," then "Programs," and check the **Qualifications** panel.

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2642768117/1304e6b1350fc9bd88c4238a00e3/db606eb5-39d5-4309-a5a9-ee33847fc233?expires=1788777900&amp;signature=91a5128b9655e4a26737b443393b7b962bd9b2f303a35667419aa0eafea46d25&amp;req=diYjFM54lYBeXvMW1HO4zTU0lNOXLEFO9BWcjfiNKI11j01u7ySu7dbJUj9z%0AtN3g%0A)

4. Fix the requirement. For the Cyber Verification Program, turn on data retention under Manage, then Privacy controls. Then select "Rerun."

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2642746995/87151a11687a9c631b7a9d681390/d40a6c12-283d-4b3b-b6d6-9f631a73e7c0?expires=1788777900&amp;signature=f786feb06f5ea37129334f0a5de01279e582120c435649c84468a96f84fd25c3&amp;req=diYjFM56m4hWXPMW1HO4zQfcHTOp6Hki9apHi%2BiM8oiaX6BBcy6vttN5XrMi%0AtjHv%0A)

5. The program shows **Active** for the workspace.

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2642747200/a18bdccde474c9f4eba371cf6050/b0e9d5e3-1e5f-4f27-b682-5684084f92e8?expires=1788777900&amp;signature=bc68dfc9c1f812d3c2ce27a0e28d5b6fe00bddb68c42663bfaf389e65ff034fc&amp;req=diYjFM56moNfWfMW1HO4zaUR8q5g8fkxfTukdAE3MWsKO2kXijvFoifsNfY3%0AMgRl%0A)

## Troubleshooting

- **The Grants page is missing.** Your organization does not have a grant yet, or you are not an organization Admin. Contact your Anthropic account team or your admin.

- **The workspace shows as inactive.** Open the workspace, select "Manage," then "Programs," and check the **Qualifications** panel for an unmet requirement. Fix each unmet requirement and try again.

- **The grant is over its seat limit.** Some programs have a seat cap. Assigned workspaces lose access until your organization is back under the limit. Reduce the number of members counted toward the grant, then check again.

- **You are trying to use the default Console workspace.** Some programs don't allow the program to be assigned to the default workspace. If the default workspace isn’t working, assign a different workspace or create a new one.