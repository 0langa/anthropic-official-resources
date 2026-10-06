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

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2642744587/d4584e035604f3b7c08afa53a1c6/ee1183ff-e591-4484-a989-1f754245d39c?expires=1791289800&amp;signature=a27f9f380c7f852737721fdac3ad86cfa2c35d003aff8afbe5ef4e8655ae1333&amp;req=diYjFM56mYRXXvMW1HO4zT%2FymUiFHACvktHcEoeKC4dM0Wuu2EK%2FmSYfs2ap%0Anrq3%0A)

2. Select the program to open its page. The **Workspaces** table shows each workspace's status. A workspace marked with an issue does not meet a requirement yet.

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2642745562/253e55a3292b35f728fb5dc89fb2/0878a8a9-dce5-4df2-9826-3796605b52a0?expires=1791289800&amp;signature=487de871ce501291e1be7ba9d6c2f3182e46bec35dd74b7c6921bb91b297f026&amp;req=diYjFM56mIRZW%2FMW1HO4zc116w9qSFm5MCr%2B42fbmkYgkOiKbqGVaqDKIxBi%0A%2FAPm%0A)

Hover over the issue to see which requirement is not met.

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2642746466/c49291119729e99f4dba8ec924e4/3f802c0e-7fbc-4e80-935a-05da58f65bde?expires=1791289800&amp;signature=516f0f3fae3a278991748b2028f5ae18db4a685dff55d473dd92ce750aa8054c&amp;req=diYjFM56m4VZX%2FMW1HO4zaveaOdgnnTIVPpeIJbmktQ4dU6j76gqiJQfxCDb%0A%2FKo5%0A)

3. To give a workspace access, make it meet the requirements. Open the workspace, select "Manage," then "Programs," and check the **Qualifications** panel.

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2642768117/1304e6b1350fc9bd88c4238a00e3/db606eb5-39d5-4309-a5a9-ee33847fc233?expires=1791289800&amp;signature=4b725b79ad6a1bf0caebc8c57b3d9adaa4a7a1cbf5230a7b597b9ae9d9201aa7&amp;req=diYjFM54lYBeXvMW1HO4zTU0ldqSI09P9BWcjfiNKI2mG79%2FVtdpRyVYRoRQ%0A7qFQ%0A)

4. Fix the requirement. For the Cyber Verification Program, turn on data retention under Manage, then Privacy controls. Then select "Rerun."

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2642746995/87151a11687a9c631b7a9d681390/d40a6c12-283d-4b3b-b6d6-9f631a73e7c0?expires=1791289800&amp;signature=aeec9e2ca7bc3b30bc876b7910a7c680e8564109c725ee3b9436c563d3bbaacf&amp;req=diYjFM56m4hWXPMW1HO4zQfcHDqs53cj9apHi%2BiM8ojtGqlJGXhhmc5cEPJq%0AKEyU%0A)

5. The program shows **Active** for the workspace.

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2642747200/a18bdccde474c9f4eba371cf6050/b0e9d5e3-1e5f-4f27-b682-5684084f92e8?expires=1791289800&amp;signature=001fd8a4b5ff2ed62033597af9b3c700170bf9b03a83e769806b3ad015ac5f37&amp;req=diYjFM56moNfWfMW1HO4zaUR86dl%2FvcwfTukdAE3MWu8a2Xbol%2FP9hnuM616%0AxGcQ%0A)

## Troubleshooting

- **The Grants page is missing.** Your organization does not have a grant yet, or you are not an organization Admin. Contact your Anthropic account team or your admin.

- **The workspace shows as inactive.** Open the workspace, select "Manage," then "Programs," and check the **Qualifications** panel for an unmet requirement. Fix each unmet requirement and try again.

- **The grant is over its seat limit.** Some programs have a seat cap. Assigned workspaces lose access until your organization is back under the limit. Reduce the number of members counted toward the grant, then check again.

- **You are trying to use the default Console workspace.** Some programs don't allow the program to be assigned to the default workspace. If the default workspace isn’t working, assign a different workspace or create a new one.