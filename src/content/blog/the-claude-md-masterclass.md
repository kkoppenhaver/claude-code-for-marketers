---
title: "The CLAUDE.md masterclass"
description: "A complete guide to CLAUDE.md: teach Claude Code your brand voice, writing style, and project context once so every conversation starts with your rules."
target_keyword: "claude md file"
secondary_keywords: []
pubDate: 2026-03-10
author: "Keanan Koppenhaver"
draft: false
tags: ["prompting", "claude-md"]
categories: ["Tips and Techniques"]
kitTagId: "14154457"
kitHeadline: "Want to learn what else Claude Code can do for your marketing?"
kitDescription: "Join our free 7-day email course and learn how to put Claude Code to work for your marketing. One lesson a day, zero technical background required."
kitButtonText: "Send me the free course"
---

I was editing a blog post Claude had written for me when I noticed something: I was making the same corrections I'd made last time. And the time before that. Removing em dashes. Breaking up sentences that were too long. Cutting phrases like "it's important to note that" and "let's dive in."

I was basically doing the same edit pass on every single piece of output.

That's when I decided to set up my CLAUDE.md file. And just like that, the output started sounding like *me*. Not perfect (I still edit everything), but the edits became about making things *better* instead of fixing the same mistakes over and over.

The initial setup was helpful, but the real power came later. My CLAUDE.md gets smarter every time I use Claude Code. Every correction I make is a chance to teach Claude something permanent.

Let me show you how it works.

## What CLAUDE.md actually is

If you've been using Claude.ai or Claude Code, you know that every new conversation starts fresh. Generally, Claude doesn't remember what you talked about yesterday, what tone you prefer, or how your project is structured. Every session, you're starting from zero.

CLAUDE.md changes that. It's a file that lives in your project folder, and Claude Code reads it automatically at the start of every conversation. Think of it like onboarding a new team member: you hand them a document that says "here's our brand, here's how we write, here's where everything lives, and here's how we do things around here."

Without it, you're re-explaining yourself constantly. With it, Claude already knows the rules before you type your first prompt.

And you don't need to be technical to create one, as it's just a text file with instructions written in plain English.

## What goes in it

I think of my CLAUDE.md as having four sections. Yours might look different (there's no rigid template here), but these are the building blocks that I'd recommend starting with.

### Project context

This is the "what are we even working on?" section. Who's this project for? What's the goal? What are the key URLs and contact details Claude might need?

From my own CLAUDE.md, here's a couple examples:

> **Mission:** Establish claudecodeformarketers.com as the go-to resource for marketers learning to use Claude Code, proving that non-technical people can build powerful AI workflows.
>
> **Target audience:** Marketers with zero programming experience who want to use AI tools but feel intimidated by technical interfaces.

I also include my Twitter (X), LinkedIn, and email so Claude can reference them in CTAs without me having to paste them in every time. This is the kind of stuff you'd put in a team wiki or project brief: the foundational context that makes everything else make sense.

### How the project works

This section covers the practical details: where files live, what commands to run, what tools the project uses.

Even if your project isn't a website, you've probably got some structure worth documenting. Where do your content drafts live? What's your naming convention? What tools does this project touch?

For example, from my Claude.md:

> Blog posts are Markdown files in `src/content/blog/`. Required frontmatter: `title`, `description`, `pubDate`. Meta descriptions must be 150-160 characters.

That meta description rule is one that saves me every time. Before I added it, Claude would write descriptions that were either way too long (Google truncates them) or way too short (looks thin in search results). Now it gets it right automatically because the rule is baked in.

### Brand voice and style rules

This is where it gets really powerful for marketers.

You know all those little corrections you make to Claude's output? The "I would never phrase it that way" moments? This section captures all of that so you only have to make each correction once.

My CLAUDE.md has an extensive writing style guide. Here are some examples:

> **Voice & Tone:** First person, conversational. Write like you're talking to a friend, not lecturing.
>
> **Things to avoid:** Em dashes, "Here's the thing:" as a lead-in, "It's not just X. It's Y." sentence structure, overly formal language.
>
> **Word choices:** "Reached into my AI toolbox" vs. "turned to AI tools." "Weren't quite what I had in mind" vs. "wasn't quite right."

The key is specificity. Telling Claude to "write casually" doesn't work because "casual" means different things to different people. But telling Claude to "use colons for transitions instead of em dashes" and "start sentences with conjunctions when natural" gives it something concrete to follow.

I even have rules about sentence structure: "Vary sentence length. Mix short punchy sentences with longer explanatory ones." And anti-patterns: "Don't stack 3+ short sentences with the same pattern. Combine them or vary the structure."

The more specific you are, the less editing you have to do later.

### Workflow and operating rules

This last section is about how you make decisions and get work done. Your content strategy, your publishing process, your conventions.

From mine:

> **Operating principles:** All content reviewed by Keanan before publishing. Task balance: ~40% creating, ~40% promoting, ~20% optimizing.
>
> Whenever a blog post is created, published, or has its status changed, update CONTENT_BACKLOG.md to match.

These are the "how we do things around here" rules. With these in place, Claude is able to anticipate what I want to do next and help make me even more efficient.

## How to create yours from scratch

You don't need to write a perfect CLAUDE.md on day one. It's much better to start small, and let it grow. Here's the process I'd recommend.

### Step 1: Gather your writing samples

Pull together 5-10 pieces that sound most like you. Blog posts, Google Docs, emails, social media posts...whatever represents your real voice.

The important distinction here: **don't pick your "best" writing, pick your most *characteristic* writing.** You want the pieces where you sound the most like yourself, even if they're not the most polished. For example, that LinkedIn post you dashed off in five minutes might capture your voice better than the blog post you spent a week perfecting.

### Step 2: Let Claude extract the patterns

This is the fun part. Paste your writing samples into Claude Code and ask it to analyze your style. Something like:

> Here are 5 blog posts I've written. Analyze my writing style and create a detailed style guide. Include: sentence structure patterns, word choice preferences, tone markers, formatting habits, and things I consistently do and don't do. Be as specific as possible.

Claude will come back with a first draft of your voice section. It'll pick up on things you didn't even realize you were doing. When I ran this exercise, Claude identified my tendency to use parenthetical asides, my preference for short paragraphs, and my habit of grounding examples in specific situations (like "When I was giving a talk to some prospective Retool builders...").

Some of what Claude finds will surprise you, some of it will feel obvious in hindsight, but all of it is useful.

### Step 3: Add your project context

Now fill in the practical stuff. What's this particular project? How is it structured? What are the key details Claude needs to do good work?

If you're starting a brand new project, you can use Claude Code's `/init` command to generate a starter CLAUDE.md that covers the basics. Then customize it with your specific context.

If your project is an existing website, marketing campaign, or content operation, just describe it in plain English. Claude doesn't need formal documentation. It needs the same kind of context you'd give a new contractor on their first day.

If you want to avoid writing everything by hand, you can still use the `/init` command to have Claude Code discover what you're working on.

### Step 4: Test it and correct it

Next, write something with your new CLAUDE.md in place. Read the output critically. What's still off?

**Every correction you make is a clue about what's missing from your CLAUDE.md.**

If you find yourself changing the same thing twice, that's a rule waiting to be added. "Oh, Claude keeps using 'utilize' when I'd say 'use'" becomes a line in your style guide. "Claude writes headers in Title Case but I use sentence case" becomes a formatting rule.

This step never really ends, which brings me to the most important part.

### A shortcut for all of this

If the manual process feels like a lot, you can skip straight to this prompt. Paste it into Claude Code and it'll walk you through an interview, then generate a personalized CLAUDE.md based on your answers:

> Interview me to create a CLAUDE.md file for this project. Ask me about: my project (what it is, who it's for, what the goal is), my brand voice (how I write, what I sound like, what I avoid), my workflow (how content gets created, reviewed, and published), and any specific rules or preferences I want enforced. Ask one topic at a time, and follow up if my answers are vague. When you have enough, generate a complete CLAUDE.md file.

It's not as thorough as building one by hand over time, but it gets you 80% of the way there in about ten minutes.

## Keeping it alive (the part most people skip)

Most guides treat CLAUDE.md as a one-time setup. Create the file, fill it in, done. And honestly, that alone will improve your output significantly.

But the real secret is treating it as a living document.

My workflow: whenever I'm editing Claude's output and I spot a pattern (not a one-off correction, but something I've fixed before), I tell Claude to both make the edit *and* update CLAUDE.md with the new rule. Something like:

> Change "Here's the thing:" to just making the point directly. And add a rule to CLAUDE.md: avoid "Here's the thing:" as a lead-in. It's filler that delays the point.

Over time, this adds up. My CLAUDE.md has gone from a basic project description to a comprehensive style guide that captures months of feedback and preferences. The output quality compounds because every correction becomes permanent.

I also do an end-of-session check-in. Before I wrap up a working session, I'll ask:

> Are there any patterns from today's edits that we should add to CLAUDE.md?

Claude will review what we worked on and suggest updates. Sometimes there's nothing new. Other times, it'll surface a pattern I hadn't consciously noticed.

It's like training a team member. You don't hand someone the employee handbook on day one and then never talk about expectations again. You course-correct as you go, and the best team members internalize those corrections so you don't have to repeat yourself.

Your CLAUDE.md works the same way.

## What to watch out for

A few things I've learned the hard way.

**Don't make it too long.** If your CLAUDE.md becomes a 20-page manual, Claude can get confused or overly constrained. Mine is detailed (especially the style guide section), but I'm careful about keeping it focused on rules that actually matter. If I'm not sure whether a rule is earning its keep, I'll cut it and see if I miss it.

**Don't add rules for one-off situations.** If you corrected something once and it never came up again, it probably doesn't need a permanent rule. I only add patterns I've seen at least twice. Otherwise, the file fills up with hyper-specific instructions that don't generalize well.

**Prune periodically.** Your preferences evolve. Your project changes. Rules that made sense three months ago might not apply anymore. I review my CLAUDE.md every few weeks and cut anything that feels outdated or redundant. A leaner CLAUDE.md produces better output than a bloated one.

**Watch for conflicting rules.** If Claude starts producing weird output (contradicting itself or going back and forth between two styles), check whether you've accidentally added rules that conflict with each other. This happened to me once when I had both "be concise" and "add specific contextual details" without enough guidance about when to do which.

## Make Claude yours

I still edit Claude's output. I'll probably always edit Claude's output, because good writing needs a human eye.

But the edits are different now. Instead of fixing the same mistakes over and over, I'm making things better: tightening a sentence here, adding a personal detail there, making the piece more *me* in ways that are hard to codify into rules.

And honestly, I'm surprised with how close to "me" Claude Code gets the first draft.

That's the goal. Not a CLAUDE.md that makes Claude perfect. A CLAUDE.md that makes Claude *yours*.

If you've been using Claude Code without a CLAUDE.md (or with a bare-bones one), try the process I outlined above. Start with your writing samples, let Claude find the patterns, and then keep refining. The output improvement is noticeable from day one, and it only gets better from there.

And if you've already got a CLAUDE.md you're proud of, I'd love to hear what's in it. What rules made the biggest difference for you? Reach out on [Twitter (X)](https://twitter.com/kkoppenhaver), [LinkedIn](https://linkedin.com/in/keanankoppenhaver), or [email](mailto:keanan@claudecodeformarketers.com) and let me know.

For more on [getting better output without obsessing over prompts](/blog/getting-better-output-without-prompt-engineering/) or the [other Claude Code tricks that leveled up my workflow](/blog/claude-code-tricks-i-wish-id-known-sooner/), check out those posts too.
