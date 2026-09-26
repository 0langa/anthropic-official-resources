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

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2642744587/d4584e035604f3b7c08afa53a1c6/ee1183ff-e591-4484-a989-1f754245d39c?expires=1790419500&amp;signature=2c77320e8ca2c36010080c71a333921b0131c4d1090003814b4c745eb1ed5fab&amp;req=diYjFM56mYRXXvMW1HO4zT%2FymUmDFQCiktHcEoeKC4dkLJ2dV2Dc9cd%2BYq6t%0ArphY%0A)

2. Select the program to open its page. The **Workspaces** table shows each workspace's status. A workspace marked with an issue does not meet a requirement yet.

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2642745562/253e55a3292b35f728fb5dc89fb2/0878a8a9-dce5-4df2-9826-3796605b52a0?expires=1790419500&amp;signature=720168d1dd9437b250598d0135189b0ba649835b069303fb27406551c46bbe32&amp;req=diYjFM56mIRZW%2FMW1HO4zc116w5sQVm0MCr%2B42fbmkbVAHVcgNjsGrghUyJX%0AZpde%0A)

Hover over the issue to see which requirement is not met.

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2642746466/c49291119729e99f4dba8ec924e4/3f802c0e-7fbc-4e80-935a-05da58f65bde?expires=1790419500&amp;signature=a1b54b976fe53e2465c5ba88077034beb8699259d488486b495f9a8d0f1421ce&amp;req=diYjFM56m4VZX%2FMW1HO4zaveaOZml3TFVPpeIJbmktSjrWhLoy21SHpvk4iW%0Alve%2F%0A)

3. To give a workspace access, make it meet the requirements. Open the workspace, select "Manage," then "Programs," and check the **Qualifications** panel.

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2642768117/1304e6b1350fc9bd88c4238a00e3/db606eb5-39d5-4309-a5a9-ee33847fc233?expires=1790419500&amp;signature=4c33607cbf8b3d46005ed4b04426c5aa040eb4c9b5ca5f369a721e09a0585781&amp;req=diYjFM54lYBeXvMW1HO4zTU0lduUKk9C9BWcjfiNKI3FBF2zOhazh3uUio2k%0Az9S%2F%0A)

4. Fix the requirement. For the Cyber Verification Program, turn on data retention under Manage, then Privacy controls. Then select "Rerun."

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2642746995/87151a11687a9c631b7a9d681390/d40a6c12-283d-4b3b-b6d6-9f631a73e7c0?expires=1790419500&amp;signature=649909d6e64b3804b605ec8e7c3b68f2f01c849e2ab2000a0a1a8843d99d8f50&amp;req=diYjFM56m4hWXPMW1HO4zQfcHDuq7ncu9apHi%2BiM8ogwvBAnmhruUHreGCSa%0ASmUG%0A)

5. The program shows **Active** for the workspace.

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2642747200/a18bdccde474c9f4eba371cf6050/b0e9d5e3-1e5f-4f27-b682-5684084f92e8?expires=1790419500&amp;signature=139ca346c6fdbf7e87f8d297ae67c066b710d51655594c64c6ab3cbd08f1783c&amp;req=diYjFM56moNfWfMW1HO4zaUR86Zj9%2Fc9fTukdAE3MWsBV3CE2il%2BFVpCQz%2FI%0AM9p6%0A)

## Troubleshooting

- **The Grants page is missing.** Your organization does not have a grant yet, or you are not an organization Admin. Contact your Anthropic account team or your admin.

- **The workspace shows as inactive.** Open the workspace, select "Manage," then "Programs," and check the **Qualifications** panel for an unmet requirement. Fix each unmet requirement and try again.

- **The grant is over its seat limit.** Some programs have a seat cap. Assigned workspaces lose access until your organization is back under the limit. Reduce the number of members counted toward the grant, then check again.

- **You are trying to use the default Console workspace.** Some programs don't allow the program to be assigned to the default workspace. If the default workspace isn’t working, assign a different workspace or create a new one.