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

- You have an Intune app-protection policy that includes Claude for Intune and is assigned to everyone who will use it. Claude for Intune signs employees out if no policy applies to them.

- Each employee who will use Claude for Intune has a Microsoft Intune license.

## Get your organization ready

### 1. Ask Anthropic to enable Microsoft sign-in

Before employees can sign in to Claude for Intune, Anthropic needs to enable Microsoft sign-in for your organization's email domains. Contact your Anthropic account team or support, and tell them which email domains your employees use to sign in.

### 2. Register Claude for Intune in your Entra tenant

Before employees can sign in, an admin in your Microsoft Entra tenant needs to grant admin consent for Claude for Intune. This is required for every organization. It approves the permission Claude for Intune uses to work with Microsoft Intune app protection, and it registers the app in your tenant so you can select it in a Conditional Access policy.

**Grant admin consent.** A tenant admin opens the following URL, replacing {organization} with your tenant ID or domain: `https://login.microsoftonline.com/{organization}/adminconsent?client_id=bb747f0e-002b-4882-9960-916fe00a2b90`

After you select “Accept,” the browser may show a blank page. This is expected. Confirm consent on the Permissions page, as described below. To confirm it worked, in the Microsoft Entra admin center go to Enterprise applications, open "Claude for Intune (Public)", and select Permissions. "Microsoft Mobile Application Management" should be listed on the "Admin consent" tab. If it isn't, select "Grant admin consent" on that page.

**Note:** Employees signing in to Claude for Intune with "Continue with Microsoft" does not grant this consent; an Entra admin has to grant it.

If employees are signed out within a few seconds of signing in, see **[Employees are signed out right after signing in](#h_d28e61fd3f)** below.

To require app protection at sign-in, target the Conditional Access rule at "All resources" with Grant = Require app protection policy. A rule that names only Office 365 or Claude SSO does not cover Claude for Intune. Microsoft Authenticator must be installed on the device.

## Add Claude for Intune in the Microsoft Intune admin center

### 1. Install Claude for Intune on employees’ devices

Create the app-protection policy in step 2 before anyone signs in. Employees who sign in without one are signed out right away.

How employees get Claude for Intune depends on how their iPhone or iPad is managed:

- **Personal devices not enrolled in Intune (app protection only):** You don’t need to add or assign the app in Intune. Employees install Claude for Intune from the App Store (it appears there as "**[Claude Intune](https://apps.apple.com/us/app/claude-intune/id6812855318)**") and sign in with "Continue with Microsoft." Your app-protection policy (step 2) applies after they sign in.

  - Optional: to also list it in Company Portal, add it as an iOS store app and assign the user group as "Available with or without enrollment."

- **Devices enrolled with Apple User Enrollment:** Employees install Claude for Intune from the App Store themselves. Intune can’t install an app added as an "iOS store app" on these devices, and Company Portal shows "This device needs to be managed before you can install apps."

- **Company-owned devices enrolled in Intune:** Add Claude for Intune as an iOS store app and assign it to a user or device group using the steps below. Employees install it from Company Portal, or you can make the assignment Required to push it to their devices.

To add Claude for Intune for enrolled company-owned devices:

1. In the Microsoft Intune admin center, select "Apps" from the left side navigation panel:

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700192269/ce2bf95a18aba11042da50f4c1ad/dda0f9a2-d585-4b09-ae4f-a1ff70b1e010?expires=1795536000&amp;signature=cfe53885272d94fd58a23c5e2ed9e36dda941a0f84a5cb30b398d3b48b9aca3e&amp;req=dicnFsh3n4NZUPMW1HO4ze7khjTU4W1gAMLV2Uu0R4VTwvyYhCKjUEENs2%2FK%0ALrMm%0A)

2. Under Platforms, select "iOS/iPadOS":

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700195036/b70c6c0bdeff5f2b72568ef4943b/67cc834c-5e91-42da-9d3b-1f32c8dd8c05?expires=1795536000&amp;signature=07df097fa8c417a806e926cc814ee8cef9e510942ef4229eeb271eb16cde2223&amp;req=dicnFsh3mIFcX%2FMW1HO4zeH1oUjisnWUQ7hR7Wh%2Bi71iEDMHanG931o2C80g%0A7VjC%0A)

3. Click "+ Create." For the App type, select the "iOS store app," and click the "Select" button on the bottom:

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700195791/9a01290b4189e6a39c473af0a448/cfed06da-f35a-4b22-b687-286ea48864c1?expires=1795536000&amp;signature=44c36760267b203cd9bc203cc423f827e9901dcc8e42596f1d007bd3d4f0efd5&amp;req=dicnFsh3mIZWWPMW1HO4zTni3cMsYZgs2SRx6amjj9GA9YwXyZmBIKnQ0E%2Bh%0A4MEb%0A)

4. Search "Claude Intune" and click the "Select" button on the bottom.

5. In **App Information**, set **Minimum operating system** to iOS 18, then click the "Next" button:

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700196458/588327ab209e9524c45111a244a1/258697c2-2f82-471b-9104-2bccb1b01614?expires=1795536000&amp;signature=be23954e8d3a1a3c8e4e27b529347006de330561568987ed7821ad9b12e005ee&amp;req=dicnFsh3m4VaUfMW1HO4zbxl5Y1SdDQuDNNSLAHCCFrM5kLUqwzNMhm%2BkqG2%0AV%2BYA%0A)

6. For **Assignments**, add the groups that should get the app: under Required to install it automatically, or under Available for enrolled devices so employees can install it from Company Portal. You can use user groups or device groups.

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2741107114/8f15b0d179a54c2ca4effaad8577/55bed25a-4b20-47b0-9e89-7f8adc86c04f?expires=1795536000&amp;signature=4581aa88702f78f2237120a13495675e8e1180ae194cb680171d2f1d4d27b294&amp;req=dicjF8h%2BmoBeXfMW1HO4zYaZMe25evWemN%2B6UXepdg%2FmOdtRHQhVm%2BJf9kKL%0A1JKV%0A)

7. Click "Next," review and create.

8. If you assigned the app as Required, it installs automatically; if Available, employees install it from Company Portal.

### 2. Apply an app-protection policy to Claude for Intune

1. In the Microsoft Intune admin center, select "Apps" from the left side navigation panel:

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700190760/9f6412fe68632cffee29826f7d30/42fdeb30-64af-4089-a976-5094bb6b8292?expires=1795536000&amp;signature=4fbb9c5087178e942276e64aa0e12f04f3b7dd4d7dbead772feba140b41bd754&amp;req=dicnFsh3nYZZWfMW1HO4zQwrZI8HUNQ8LtTCoSp4D6r7hdPgDjMcrJoqlLTN%0AExVs%0A)

2. Under **Manage apps**, select "Protection":

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700200858/a7ddd4265aeb6d61a7a096297cd5/fc9a1fe2-3d0e-4038-9b2c-f96bd19e4020?expires=1795536000&amp;signature=443894ab8f419cfc616ce00a7f221c187ed980c386a6d8997f4d9a3328b65e6f&amp;req=dicnFst%2BnYlaUfMW1HO4zeBHXBo49vvtnJWY0xu8hzJ9Q%2BuKCV1jShAPVKDK%0AV6rM%0A)

3. Click "+ Create" and then select "iOS/iPadOS":

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700201382/6240e257b2b498b5fa5ac1111561/11ef4f59-aba1-4d2b-ac58-9aec1dd60a4d?expires=1795536000&amp;signature=76558de9048fb870a5dffc11003c4ab71b162d05759bbb33b716f0f783184285&amp;req=dicnFst%2BnIJXW%2FMW1HO4zc89y05TAXxOV2VWh%2B9zzEolV%2BJYr8%2FqWsahKpmF%0AEv10%0A)

4. Enter Name in the **Basics** tab, then click "Next" to **Apps**. Set **Target policy to** "Selected apps." Click "+ Select custom apps":

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700201929/2edf45cedc0bc03204f86d01a49e/4d96c12d-962b-43f6-8b3f-668e3247d4c1?expires=1795536000&amp;signature=9103a57a91fe4c14da3e69d2aa29e17313fc9ee575f7da93f2d1959a86ede9a1&amp;req=dicnFst%2BnIhdUPMW1HO4zVmMRJQRUDsIKETwku7gMstxBUwqVSYthsL9jDY1%0AyvEJ%0A)

5. Type in the bundle ID `com.anthropic.claudeforintune`. Select it so it appears under **Selected Apps** before clicking "Select":

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700202816/3565aea2d1b9c22a5f8d105825c5/3de6d241-6259-463e-a503-a6ca9f2095e0?expires=1795536000&amp;signature=26016a6618d47451e496eb496e896826d962168e580953ff65b5e0435effc628&amp;req=dicnFst%2Bn4leX%2FMW1HO4zf6tYiYty6x312LT9vQL0W6RWabJOaTzdXP9f4U5%0AHmxY%0A)

6. In Apps, confirm the bundle ID now appears under **Custom apps** before clicking "Next":

![](https://downloads.intercomcdn.com/i/o/lupk8zyo/2700203780/24ed354ef0de87bf0a0c1bc129a1/46eed662-f488-48ee-a4d1-8a9a76079884?expires=1795536000&amp;signature=fefd4818be2fda08384a7d4f4b278f7635c8d222b7aba599c59e6dd0a0d43d20&amp;req=dicnFst%2BnoZXWfMW1HO4zQd95NCP2M7f8F6Cfy2R7u%2F7LfZWru%2FjESQQfB%2BQ%0A0lfy%0A)

7. Configure the Data protection, Access requirements, and Conditional launch settings as needed.

8. In the **Assignments** tab, assign the policy to a user group that includes everyone who will use Claude for Intune—app-protection policies can only target user groups, not device groups. Make sure it also applies to unmanaged devices: don't limit it to Intune-managed devices with the device-type setting or an assignment filter, even if all your phones are company-owned. A copy of Claude for Intune installed from the App Store can count as unmanaged on an enrolled phone, so the policy skips it and the employee is signed out right after signing in. Also check that no excluded group leaves out anyone who will use the app*.*

9. Review and create.

10. The app only becomes "managed" after the user signs in with org credentials post-install (may require a restart).

11. Wait about 30 minutes for the policy to reach your employees, then have one employee sign in before you tell everyone else.

12. In the Microsoft Intune admin center, go to "Apps," then "Monitor," then "App protection status." Claude for Intune should be listed for that employee with your policy applied.

## Tell employees which app to install

Claude for Intune and the standard Claude app are separate apps. Your Intune app-protection policies apply to Claude for Intune.

Wherever your organization requires Intune protection, tell employees on managed or employee-owned iPhones and iPads to install **[Claude for Intune](https://apps.apple.com/us/app/claude-intune/id6812855318)**, not the standard Claude app.

## Before Microsoft lists Claude for Intune as a protected app

Claude for Intune doesn't yet appear in Microsoft's list of protected apps, so you can't search for it when you create an app-protection policy. Until it's listed, add it to your policy by entering its bundle ID manually:

1. Follow the steps in **[Apply an app-protection policy to Claude for Intune](#h_4ca21beece).**

2. When you select apps, choose "Select custom apps" and enter the bundle ID `com.anthropic.claudeforintune`.

After Microsoft adds Claude for Intune to its protected apps list, you'll select it from the list of public apps instead of using "Select custom apps."

## Employees are signed out right after signing in

Sign-in appears to work, then Claude for Intune returns to the sign-in screen with the message "Couldn’t sign in with Microsoft. Something went wrong."

If it happens once, have the employee try again on a stable connection. If it happens every time, the fix is in your Intune or Entra setup. Check both causes below, because fixing one can reveal the other.

Most often, no app-protection policy applies to that employee. Check that:

1. An iOS/iPadOS app-protection policy includes the custom app `com.anthropic.claudeforintune`.

2. The policy is assigned to a user group that includes the employee.

3. No excluded group or assignment filter leaves the employee out.

4. The policy applies to all device types, not only Intune-managed devices.

5. The employee has a Microsoft Intune license.

6. About 30 minutes have passed since your last change.

Less often, admin consent is missing. Follow the steps in **[Register Claude for Intune in your Entra tenant](#h_4889891bcc)** to confirm it. After granting admin consent, ask employees to delete Claude for Intune, reinstall it, and sign in again.

To tell the two apart, open the Microsoft Entra admin center and go to "Sign-in logs," then "User sign-ins (non-interactive)." Filter by the application "Claude for Intune (Public)." A failed entry for the resource "Microsoft Mobile Application Management" points to admin consent or a Conditional Access policy. If every entry succeeded, check the app-protection policy.

If it happens only on your company network or VPN, check that the network allows Microsoft Intune’s endpoints and doesn’t inspect their TLS traffic.

If employees are still signed out, contact Anthropic support with the employee’s email address, the time they tried to sign in (with time zone), and the app version. We can look up the cause. Support may refer to it by its Intune error code: 225 (no policy), 203 (consent), or 200 (no license).