Lesson 3 of 12 · Claude Code 101Installing Claude Code

# Installing Claude Code

Lesson 36 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fclaude-code-101%2Finstalling-claude-code)

Embedded media: https://www.youtube-nocookie.com/embed/0kILa02vKuI?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Installing Claude Code

SummaryTranscript

Claude Code is simple to install whether you want to use it in your
terminal, on the web, or in your IDE.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=0kILa02vKuI)

## Terminal[](https://academy.claude.com/courses/claude-code-101/installing-claude-code)

On **macOS, Linux, or WSL**, use the curl command to install it in one go. If you prefer Homebrew, you can also use `brew install`, but note that this method doesn't support auto-updates.

On **Windows**, there are a few options. In PowerShell, use the `Invoke-RestMethod` command. In CMD, use the curl command. There's also a winget command available, though like Homebrew, it won't auto-update.

![Terminal showing Claude Code successfully installed via curl](https://academy.claude.com/assets/media/1d77aec524053a8a70e5fd7cc1513d9a179be737f93093001ca96f1f1aaa9fa2.jpg)

After installation, you should be able to run the `claude` command. If not, restart your terminal. Navigate to your project directory and run:

`claude`

You'll go through some initial setup steps like choosing your color theme and signing in with your Claude account (Pro, Max, or Enterprise) or using an API key. If your organization has a Claude Enterprise account, be sure to select that option.

![Claude Code login method selection: subscription, API, or third-party platform](https://academy.claude.com/assets/media/6000796786763c8a1862b6cbfbcb1d7b99a61503fd9faf6c39f6e2b98d644119.jpg)

Whatever directory you run `claude` in, it will have access to that directory and all of its subfolders.

## Visual Studio Code[](https://academy.claude.com/courses/claude-code-101/installing-claude-code)

Open your Extensions panel and search for "Claude Code." Look for the extension by Anthropic with the blue verification check. Hit install.

After installation, you may need to restart VS Code. Once it's running, open the command palette with `Ctrl/Cmd + Shift + P` and search for "Claude Code Open in New Tab." You can also click the Claude logo if it's visible in your sidebar.

![Claude Code extension page in VS Code marketplace](https://academy.claude.com/assets/media/1a09d51136d3df5f2a31fa884d575b477a6bc379401ec229abedbc9336828c25.jpg)

The VS Code extension provides a very similar experience to the terminal. You can also opt out of the UI and use the terminal experience directly in your settings.

## JetBrains[](https://academy.claude.com/courses/claude-code-101/installing-claude-code)

Install the Claude Code plugin from the JetBrains Marketplace. After installation, restart your IDE. When you reopen it, you'll see the Claude logo. Clicking it opens a pane with the terminal experience that works alongside your editor.

![Claude Code plugin in the JetBrains Marketplace](https://academy.claude.com/assets/media/a7656728ab6cf289ed0d6a523c2f0b230053e7e69908e77675603f69da0eed2d.jpg)

## Desktop[](https://academy.claude.com/courses/claude-code-101/installing-claude-code)

After installing and signing into Claude Desktop, you'll see a toggle at the top labeled "Code." The look and feel is similar to the chat side of things, but it lets you work in a specific folder, change permissions, and even work in a cloud environment.

![Claude Desktop Code view showing recent project folders](https://academy.claude.com/assets/media/dbd3386c65f280868d1a71154b96ee0b1b80d1b44ad5019b7c40be353fc714a1.jpg)

## Web[](https://academy.claude.com/courses/claude-code-101/installing-claude-code)

On the web, access Claude Code by going to `claude.ai/code`, or by clicking the "Code" label in the sidebar of the chat app. This works similarly to the desktop app, but you're restricted to GitHub repositories.

![Claude Code on the web at claude.ai/code with repository selection](https://academy.claude.com/assets/media/3c3609161934207b9e3aeeb18e056f878b86d589601ebd7e39bc23d094b081f1.jpg)

## Which One Should I Use?[](https://academy.claude.com/courses/claude-code-101/installing-claude-code)

If you want to stay on the cutting edge, the **terminal** is your best bet — features ship there first. The IDE integrations offer a nearly identical experience if you prefer Claude Code to feel more intertwined with your code editor.

**Desktop** is great for letting Claude run in the background while you handle other tasks.

**Claude Code on the web** is a solid option if you want to remotely work on projects through a GitHub repository.

However you want to use Claude Code is up to you.

Was this helpful?


## Transcript

Claude Code is simple to install whether you want to use it in your terminal, the web, or your IDE.

If you're on macOS, Linux, or WSL, use this curl command to install it in one go. If you prefer to use Homebrew, you can also use brew install to install it, but note that this doesn't have auto-update capabilities. For Windows, there's also a couple ways. In PowerShell, use the Invoke-RestMethod command. If you're on CMD, you can also use this curl command. We also have a winget command as well if you'd prefer, but just like Homebrew, it won't auto-update.

Now go to your project directory and run Claude. You will go through some initial instructions like choosing your color theme and signing in with your Claude account, which could be the Pro, Max, or Enterprise. Or you can use an API key. If your organization has a Claude Enterprise account, be sure to select that option. Whatever directory you decide to run Claude in, it will have access to that directory and all of its subfolders.

In Visual Studio Code, open up your extensions panel and search for Claude Code. You will see the extension by Anthropic. Make sure it has the blue check and hit Install. After installation, you might need to restart VS Code. After that, you can open up the Command Palette with Control or Command and Shift and P and search "Claude Code: Open in New Tab". You can also click on the Claude logo if you see it when a file is open. You can also opt out of the UI and just use the terminal experience directly in your settings file.

For JetBrains IDEs, you can install the Claude Code plugin from the JetBrains Marketplace. Once you install, restart your IDE. And when you reopen, you'll see the Claude logo. This will open up a pane where you can see the terminal experience. And this will work alongside you.

On Claude Desktop, you can also run Claude Code. After you installed Claude Desktop and signed in, you will see a toggle at the top that says Code. The look and feel is similar to Claude Chat side of things, but allows you to work in a specific folder, change permissions, and even work in a cloud environment.

On the web, you can access Claude Code by going to claude.ai/code. This works very similar to the desktop app. However, you're restricted to GitHub repositories only.

If you want to constantly keep up to date with everything, the terminal is the best bet. Features ship there the fastest. For the most part, you'll have extremely similar experiences with the IDE integrations if you'd like Claude Code to feel more intertwined with your favorite code editor. Desktop is great for letting Claude run in the background while you run other tasks. Claude Code on the web is a great option if you want to remotely work on a project through a GitHub repository or have multiple sessions work in parallel. However you want to use Claude Code, it's up to you.


## Video transcript

# Installing Claude Code

Claude Code is simple to install whether you want to use it in your terminal, the web, or your IDE.

If you're on macOS, Linux, or WSL, use this curl command to install it in one go. If you prefer to use Homebrew, you can also use brew install to install it, but note that this doesn't have auto-update capabilities. For Windows, there's also a couple ways. In PowerShell, use the Invoke-RestMethod command. If you're on CMD, you can also use this curl command. We also have a winget command as well if you'd prefer, but just like Homebrew, it won't auto-update.

Now go to your project directory and run Claude. You will go through some initial instructions like choosing your color theme and signing in with your Claude account, which could be the Pro, Max, or Enterprise. Or you can use an API key. If your organization has a Claude Enterprise account, be sure to select that option. Whatever directory you decide to run Claude in, it will have access to that directory and all of its subfolders.

In Visual Studio Code, open up your extensions panel and search for Claude Code. You will see the extension by Anthropic. Make sure it has the blue check and hit Install. After installation, you might need to restart VS Code. After that, you can open up the Command Palette with Control or Command and Shift and P and search "Claude Code: Open in New Tab". You can also click on the Claude logo if you see it when a file is open. You can also opt out of the UI and just use the terminal experience directly in your settings file.

For JetBrains IDEs, you can install the Claude Code plugin from the JetBrains Marketplace. Once you install, restart your IDE. And when you reopen, you'll see the Claude logo. This will open up a pane where you can see the terminal experience. And this will work alongside you.

On Claude Desktop, you can also run Claude Code. After you installed Claude Desktop and signed in, you will see a toggle at the top that says Code. The look and feel is similar to Claude Chat side of things, but allows you to work in a specific folder, change permissions, and even work in a cloud environment.

On the web, you can access Claude Code by going to claude.ai/code. This works very similar to the desktop app. However, you're restricted to GitHub repositories only.

If you want to constantly keep up to date with everything, the terminal is the best bet. Features ship there the fastest. For the most part, you'll have extremely similar experiences with the IDE integrations if you'd like Claude Code to feel more intertwined with your favorite code editor. Desktop is great for letting Claude run in the background while you run other tasks. Claude Code on the web is a great option if you want to remotely work on a project through a GitHub repository or have multiple sessions work in parallel. However you want to use Claude Code, it's up to you.

