---
title: "How I edit Google Docs without leaving Claude Code"
description: "The Google Workspace CLI lets Claude Code pull down, edit, and push back your Google Docs. Here's how I set it up and the workflow I use."
target_keyword: "claude code google docs"
secondary_keywords: []
pubDate: 2026-03-22
author: "Keanan Koppenhaver"
draft: false
tags: ["google docs", "integrations", "workflow"]
categories: ["Use Cases"]
kitTagId: "14154457"
---

I keep a lot of my writing in Google Docs. Content briefs, landing page copy, drafts that collaborators need to comment on. It's where my team lives.

But Claude Code works primarily with local files (ones that are stored on my computer). So for a while, my workflow was a bit convoluted: open a Google Doc, select all, copy, paste into a local file, work on it with Claude Code, then copy the result and paste it back into the Doc. Every single time.

It wasn't the end of the world, but it was annoying. Sometimes the formatting broke, the paste didn't happen cleanly, or if anyone else modified the doc while I was working on it, there was no easy way to update the stale copy.

Luckily for me (and you too!), we now have the [Google Workspace CLI](https://github.com/googleworkspace/cli).

## What is the Google Workspace CLI?

The Google Workspace CLI (most people call it GWS CLI) is a command-line tool from Google that gives your terminal direct access to Google Drive, Docs, Gmail, Calendar, Sheets, and more. It's a single tool that covers your whole Google Workspace.

For our purposes in this tutorial, the important part is that it lets Claude Code search your Drive, pull down a Google Doc, and push changes back up. All through regular terminal commands that Claude already knows how to run.

## Setting it up

The setup takes a few minutes, but you only do it once. There are two parts: installing the tool and connecting it to your Google account.

**One caveat before we start:** the GWS CLI is under active development, and the team says to expect breaking changes as they work toward v1.0. I haven't run into any issues so far, but it's worth knowing that commands or options might change in a future update.

### Installing the CLI

There are a few ways to install it. Pick whichever feels most familiar:

```bash
npm install -g @googleworkspace/cli
```

The npm package bundles pre-built binaries for your OS, so you don't need any extra tooling. If you prefer Homebrew (on macOS or Linux):

```bash
brew install googleworkspace-cli
```

Pre-built binaries are also available on the [GitHub Releases page](https://github.com/googleworkspace/cli/releases) if you'd rather download directly.

### Connecting your Google account

Once the CLI is installed, you need to connect it to your Google account. The CLI has a built-in setup wizard that walks you through creating the necessary Google Cloud project and credentials:

```bash
gws auth setup
```

This will guide you through the Google Cloud project configuration. It handles the OAuth client creation, API enabling, and credential setup that you'd otherwise have to do manually in the Google Cloud Console.

Once that's done, log in:

```bash
gws auth login
```

A browser window will open. Log in with your Google account, grant the permissions, and you're connected. You can verify everything is working with a quick test:

```bash
gws drive files list --params '{"pageSize": 5}'
```

If you see a list of your recent Drive files, you're good to go.

**One heads up:** when you run `gws auth login`, make sure to select the Google Drive scope. Without it, Claude won't be able to search for or access your documents.

## Editing directly vs. pulling down locally

Before I walk through my workflow, it's worth knowing that the GWS CLI *can* edit a Google Doc directly. It has a `docs +write` command for appending text, and since the CLI is built on Google's Discovery Service, Claude technically has access to the full Docs API for in-place edits.

For small changes, like appending a paragraph or updating a single line, this works fine. But for anything more substantial, I'd say pulling the doc down and editing locally is the better approach. Here's why:

**Claude Code is built for local files.** Its editing tools, diff views, and review flow all assume you're working with files on your machine. When Claude edits a local file, you see exactly what changed before you approve it. With direct Google Doc edits, changes go straight to the live document with no review step in between.

**In-place editing is clunky for big rewrites.** Editing a Google Doc through the API means constructing batch update requests for every change. Rewriting a full section, reorganizing paragraphs, cutting redundant copy: all of that is much more natural when Claude is working on a local markdown file the way it was designed to.

**Formatting gets complicated fast.** The Google Docs API treats text content and formatting as separate operations. If Claude rewrites a section in-place, it has to send separate requests to re-apply headers, bold, and other formatting. Locally, Claude just writes markdown and you're done.

For quick appends, direct editing is great. For everything else, the pull-edit-push workflow gives you more control and a much smoother experience.

## The workflow: pull, edit, push

Here's the workflow I actually use when I need to edit something that lives in Google Docs.

### Step 1: Find the document

I start a Claude Code session and tell it what I'm looking for:

> "Use the GWS CLI to find my Google Doc called 'Landing Page Copy'"

Claude runs a search against my Drive and finds the document. It pulls back the document ID, which is the long string in any Google Docs URL.

### Step 2: Pull it down

Once Claude has the document ID, I ask it to pull the content down:

> "Pull down the content of that doc and save it as a local markdown file"

Claude uses the GWS CLI to export the document content, converts it to markdown, and saves it locally. Now I have a file I can work with.

### Step 3: Edit with Claude Code

This is where Claude Code shines. I can give it the kind of instructions I'd normally scribble in a Google Doc comment, but Claude actually *does* the work:

> "Tighten up the copy. Make it more confident. Cut anything that feels redundant."

Or:

> "Rewrite the hero section to lead with the benefit instead of the feature"

Claude edits the local file, I review the changes, and we go back and forth until I'm happy with it. This is the same editing workflow you'd use for any local file, just now the source material came from Google Docs.

### Step 4: Push it back

When the copy is ready, I tell Claude to push it back:

> "Push this back to the Google Doc"

Claude uses the GWS CLI to update the document content. The updated copy shows up in Google Docs, and my collaborators can see the changes without me touching the browser.

**A note on formatting:** the Google Docs API is a bit finicky about formatting. When Claude pushes content back, the text will be there but things like headers, bold, and other formatting may need a quick pass in the Doc itself. Claude can apply formatting through the API (it sends separate formatting requests for headers, bold text, etc.), but it adds complexity. For most of my use cases, getting the *words* right is what matters, and I'll spend 30 seconds fixing headers in the Doc.

## What else the GWS CLI can do

Google Docs is the use case I reach for most often, but the GWS CLI covers a lot more ground:

- **Gmail:** Search emails, read messages, draft replies
- **Calendar:** Check your schedule, create events
- **Sheets:** Read and update spreadsheet data
- **Drive:** Search, upload, download, organize files

I haven't explored all of these deeply yet, but the Calendar integration is handy for things like "block off two hours for writing tomorrow morning" without leaving Claude Code.

## How this compares to Claude Cowork

If you've used [Claude Cowork](https://claude.com/product/cowork) (Anthropic's desktop agent), you might know it has a Google Drive connector, the same one available in Claude.ai. In theory, this lets Cowork read and edit your Google Docs directly.

In practice, I couldn't get it to work. I connected my Google account (using the Google Drive connector in Claude), approved all the permissions, and Cowork still couldn't reliably access my documents. Cowork is still pretty early, and the Google Drive integration feels like it. Your experience might be different, but as of right now I wouldn't count on it for a real workflow.

The GWS CLI approach is more hands-on, but it actually works. You explicitly pull a document down, edit it locally, and push it back. There's no background sync or magic. You're in control of when changes move in each direction, and Claude Code's local editing tools are *much* better suited to serious rewrites than anything Cowork offers today.

If Cowork's Google Docs integration matures, it could be a nice option for people who prefer a visual, browser-based experience. But right now, the GWS CLI is the reliable path for getting Claude Code and Google Docs talking to each other.

It's also totally possible that this is just a skill issue on my part, but...alas.

## Getting started

If you're already using Claude Code and your content lives in Google Docs, this is worth the 10 minutes of setup. The GWS CLI turns "copy from Google Docs, paste into a file, work on it, copy back" into a single conversation with Claude.

Start with one document you need to edit this week. Pull it down, let Claude help you improve it, and push it back. Once you've done it once, you'll wonder why you were ever copy-pasting.

For more on connecting Claude Code to your other tools, check out [Giving Claude Code superpowers with MCP servers](/blog/giving-claude-code-superpowers-with-mcp-servers/). And if you want to see how this fits into a broader content workflow, the [content repurposing post](/blog/turn-one-piece-of-content-into-ten-social-posts/) shows what's possible when Claude Code can touch all the pieces.

Happy Clauding!