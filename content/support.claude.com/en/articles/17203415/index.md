# Set up Claude for Intune

Claude for Intune is a managed version of Claude for iOS for organizations that use Microsoft Intune. This article explains how Intune admins add Claude for Intune in the Microsoft Intune admin center and which app to tell employees to install.

## What is Claude for Intune?

Claude for Intune is built for organizations that manage mobile devices with Microsoft Intune, including organizations that let employees work from personal iPhones and iPads.

- Claude for Intune is a separate app from the standard Claude app. Both are listed on the App Store.

- IT teams can apply Intune app-protection policies to Claude for Intune on company-owned and employee-owned iPhones and iPads.

- It signs in with Microsoft only.

- It supports Intune app-protection policies and Microsoft Entra Conditional Access.

## Requirements

Before you set up Claude for Intune, check that you meet these requirements:

- You have an Enterprise plan.

- Your organization uses Microsoft Intune, and you have access to the Microsoft Intune admin center.

- Employees sign in to Claude for Intune with Microsoft. Other sign-in methods aren't available in Claude for Intune.

- You’re using iOS or iPadOS version 18.0 or later.

- Anthropic has enabled Microsoft sign-in for your organization's email domains.

- If you use Conditional Access, Claude for Intune is registered in your Microsoft Entra tenant.

- An admin in your Microsoft Entra tenant has granted admin consent for Claude for Intune. This is required for every organization.

## Get your organization ready

### 1. Ask Anthropic to enable Microsoft sign-in

Before employees can sign in to Claude for Intune, Anthropic needs to enable Microsoft sign-in for your organization's email domains. Contact your Anthropic account team or support, and tell them which email domains your employees use to sign in.

### 2. Register Claude for Intune in your Entra tenant

Before employees can sign in, an admin in your Microsoft Entra tenant needs to grant admin consent for Claude for Intune. This is required for every organization. It approves the permission Claude for Intune uses to work with Microsoft Intune app protection, and it registers the app in your tenant so you can select it in a Conditional Access policy.

**Grant admin consent.** A tenant admin opens the following URL, replacing {organization} with your tenant ID or domain: `https://login.microsoftonline.com/{organization}/adminconsent?client_id=bb747f0e-002b-4882-9960-916fe00a2b90`

To confirm it worked, in the Microsoft Entra admin center go to Enterprise applications, open "Claude for Intune (Public)", and select "Permissions." **Microsoft Mobile Application Management** should be listed on the "Admin consent" tab. If it isn't, select "Grant admin consent" on that page.

**Note:** Signing in at claude.ai with "Continue with Microsoft" does not grant this consent.

If employees are signed out within a few seconds of signing in, this step has most likely not been completed. After granting admin consent, ask them to delete Claude for Intune, reinstall it, and sign in again.

To require app protection at sign-in, target the Conditional Access rule at “All resources” with Grant = Require app protection policy. A rule that names only Office 365 or Claude SSO does not cover Claude for Intune. Microsoft Authenticator must be installed on the device.

## Add Claude for Intune in the Microsoft Intune admin center

### 1. Add Claude for Intune to your managed apps and make it available to BYOD devices.

1. In the Microsoft Intune admin center, select “Apps” from the left side navigation panel:

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700192269/ce2bf95a18aba11042da50f4c1ad/dda0f9a2-d585-4b09-ae4f-a1ff70b1e010?expires=1791633600&amp;signature=08f19f1e99037ea4c1ba57700bc76fddca89928a9114c881469e18ca1c8cc6c8&amp;req=dicnFsh3n4NZUPMW1HO4ze7khjDX4WhmAMLV2Uu0R4V%2BmAgqwjiEdLvQrL5K%0AzXCb%0A)

2. Under Platforms, select “iOS/iPadOS”:

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700195036/b70c6c0bdeff5f2b72568ef4943b/67cc834c-5e91-42da-9d3b-1f32c8dd8c05?expires=1791633600&amp;signature=06b07d2ce1b2d5718c887edaa704b7423feac1411a5de04b2d03d8e1691246b9&amp;req=dicnFsh3mIFcX%2FMW1HO4zeH1oUzhsnCSQ7hR7Wh%2Bi716fjW4Pd8aQSeQJMzm%0Av7J8%0A)

3. Click “+ Create.” For the App type, select the “iOS store app,” and click the “Select” button on the bottom:

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700195791/9a01290b4189e6a39c473af0a448/cfed06da-f35a-4b22-b687-286ea48864c1?expires=1791633600&amp;signature=ec4daac338dbf4239ea0af7802f283d676cd98ee4ef4b8f67ca1340f270d032e&amp;req=dicnFsh3mIZWWPMW1HO4zTni3ccvYZ0q2SRx6amjj9EphAGE0ADi2xbsltf5%0ABPbj%0A)

4. Search “Claude for Intune” and click the “Select" button on the bottom.

5. In **App Information**, set **Minimum operating system** to iOS 18, then click the “Next” button:

  ![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700196458/588327ab209e9524c45111a244a1/258697c2-2f82-471b-9104-2bccb1b01614?expires=1791633600&amp;signature=e17572f04ef95f337d11883d221c79c0c802804a893058e3c81f365f107b8e0a&amp;req=dicnFsh3m4VaUfMW1HO4zbxl5YlRdDEoDNNSLAHCCFpBWDOQaGVCuuxb%2BNXV%0APTIU%0A)

6. For **Assignments**, add a group of users to make it available in their device’s Company Portal:

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700197715/bf5aa327b41f994fdafe04869300/f4c6c9cf-51df-4d75-bf8a-b144d11dd380?expires=1791633600&amp;signature=b04c948c0f1b06749a2abf7475ad1b9cb66de831a893526d6736ce43a239d75c&amp;req=dicnFsh3moZeXPMW1HO4zeVx8DQf4i%2BLoVYQxJ7ndH7qyob6G1dzvsz8uzBF%0AJ2Wb%0A)

7. Click “Next,” review and create.

8. Users have to download the app from Company Portal on their devices for access.

### 2. Apply an app-protection policy to Claude for Intune.

1. In the Microsoft Intune admin center, select “Apps” from the left side navigation panel:

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700190760/9f6412fe68632cffee29826f7d30/42fdeb30-64af-4089-a976-5094bb6b8292?expires=1791633600&amp;signature=7c8cbb2bb8f42f568ac9ff22b38fef5ae3e1630512c3b3823a968db15d121763&amp;req=dicnFsh3nYZZWfMW1HO4zQwrZIsEUNE6LtTCoSp4D6paVL6Pp7tsxlmhyaJ4%0AcCkV%0A)

2. Under **Manage apps**, select “Protection”:

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700200858/a7ddd4265aeb6d61a7a096297cd5/fc9a1fe2-3d0e-4038-9b2c-f96bd19e4020?expires=1791633600&amp;signature=2fed2b13e335ac11eb89ffbf4e0d7771d5b2cf7ee368472991f05f09a0484091&amp;req=dicnFst%2BnYlaUfMW1HO4zeBHXB479v7rnJWY0xu8hzLRHaqvu4A08Y%2FoLk2T%0AcP19%0A)

3. Click “+ Create” and then select “iOS/iPadOS”:

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700201382/6240e257b2b498b5fa5ac1111561/11ef4f59-aba1-4d2b-ac58-9aec1dd60a4d?expires=1791633600&amp;signature=74b95d828177f22920f30a31cd789a173d33a0d772389c54d8ad867803a96a0d&amp;req=dicnFst%2BnIJXW%2FMW1HO4zc89y0pQAXlIV2VWh%2B9zzErwEky5I7drxu9tqqYr%0AgAVZ%0A)

4. Enter Name in the **Basics** tab, then click “Next” to **Apps**. Set **Target policy to** “Selected apps.” Click “+ Select custom apps”:

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700201929/2edf45cedc0bc03204f86d01a49e/4d96c12d-962b-43f6-8b3f-668e3247d4c1?expires=1791633600&amp;signature=25feb55078bb450265a810e6f48779892140dbdd945775d592c5d9e1c5422a0b&amp;req=dicnFst%2BnIhdUPMW1HO4zVmMRJASUD4OKETwku7gMsv9pFp1MZW5WEp9PyHZ%0AZG39%0A)

5. Type in the bundle ID `com.anthropic.claudeforintune`. Select it so it appears under **Selected Apps** before clicking “Select”:

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700202816/3565aea2d1b9c22a5f8d105825c5/3de6d241-6259-463e-a503-a6ca9f2095e0?expires=1791633600&amp;signature=95ebc0cd1e2080b2ab676fb4164add0f0cf4b3eb24989a029ccec425b91bba68&amp;req=dicnFst%2Bn4leX%2FMW1HO4zf6tYiIuy6lx12LT9vQL0W6MeyHSnmu8rs0zXLH8%0AXrAs%0A)

6. In Apps, confirm the bundle ID now appears under **Custom apps** before clicking “Next”:

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700203780/24ed354ef0de87bf0a0c1bc129a1/46eed662-f488-48ee-a4d1-8a9a76079884?expires=1791633600&amp;signature=f52dfe44d2a95e7fd7b4edd2d0fa292a4b6fb9b65c5dd5682bc090db12dc9f52&amp;req=dicnFst%2BnoZXWfMW1HO4zQd95NSM2MvZ8F6Cfy2R7u%2FLc4sIInOUT9QoY8gg%0Ag%2Bj2%0A)

7. Configure the Data protection, Access requirements, and Conditional launch settings as needed.

8. In the **Assignments** tab, add a user group to assign the policy to them.

9. Review and create.

10. The app only becomes "managed" after the user signs in with org credentials post-install (may require a restart).

## Tell employees which app to install

Claude for Intune and the standard Claude app are separate apps. Your Intune app-protection policies apply to Claude for Intune.

Wherever your organization requires Intune protection, tell employees on managed or employee-owned iPhones and iPads to install **[Claude for Intune](https://apps.apple.com/us/app/claude-intune/id6812855318)**, not the standard Claude app.

## Before Microsoft lists Claude for Intune as a protected app

Claude for Intune doesn't yet appear in Microsoft's list of protected apps, so you can't search for it when you create an app-protection policy. Until it's listed, add it to your policy by entering its bundle ID manually:

1. Follow the steps in **[Apply an app-protection policy to Claude for Intune](#h_5fda0300e8).**

2. When you select apps, choose “Select custom apps” and enter the bundle ID `com.anthropic.claudeforintune`.

After Microsoft adds Claude for Intune to its protected apps list, you'll select it from the list of public apps instead of using “Select custom apps.”