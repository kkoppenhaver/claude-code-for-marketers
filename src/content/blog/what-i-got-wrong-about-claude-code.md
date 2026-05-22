---
title: "What I got wrong about Claude Code in my first two months"
description: "Four mistakes I made in my first two months with Claude Code, what they had in common, and the workspace mindset shift that finally fixed them."
target_keyword: "claude code mistakes"
secondary_keywords: ["learning claude code", "claude code beginner mistakes"]
pubDate: 2026-05-22
author: "Keanan Koppenhaver"
draft: false
tags: ["claude-code", "workflow", "mindset"]
categories: ["Tips and Techniques"]
kitTagId: "14154457"
kitHeadline: "Want to skip the dumb middle?"
kitDescription: "I packaged the workspace mindset into a free 7-day email course. One short lesson a day, no coding background required. By the end you'll have the setup that took me two months to figure out."
kitButtonText: "Send me the free course"
---

I've been using Claude Code seriously for more than a few months now. Here are four things I got wrong in that stretch, and what changed when I finally figured them out.

If you've installed Claude Code and you're getting okay-but-not-great output, the odds are pretty good you're making at least one of these mistakes.

## Mistake 1: I treated every session as throwaway

**What I did wrong:** I opened Claude Code, got an output, closed it, and started fresh the next time. But this meant that nothing accumulated. Each session was disposable, the way I'd treat a ChatGPT tab I'd close and never look at again.

**The moment it clicked:** I caught myself re-explaining my brand voice to Claude. Again. I'd done it the day before and the day before that. I was teaching Claude the same things over and over because I'd convinced myself that "context for this conversation" wasn't worth saving.

**What I do now:** Every session ends with a quick "anything worth saving to a file?" Outputs that I might want to reference later get dropped into the project as markdown. Context that Claude needs every time goes into [CLAUDE.md](/blog/the-claude-md-masterclass/). Patterns I notice myself repeating become skills. Nothing dies when the conversation ends, and that single shift is probably the biggest reason my output got better.

The important things here is noticing the moment you're about to type something you've typed before, and asking yourself if Claude should have known it already.

## Mistake 2: I had Claude do web research for things I already knew

**What I did wrong:** Every new post or project kicked off the same way. "Research my competitors." "Look up what people are saying about [thing about my own business]." I was using web search from a blank slate every time.

**The double cost:** I was re-researching things I'd already researched, either in this project or another. And WebSearch and WebFetch are slow (and they tend to use a lot of tokens), while a markdown file in the project loads instantly and for free. I realized that, similar to the tip above, when we completed a section of research, we should think about what of that we could syntisize into a doc. This would mean that we wouldn't have to re-do this research later in another session.

**What I do now:** Anything I'd ever want Claude to know about my business lives in a markdown file in the project. This includes competitors, positioning, FAQs, architecture decisions and best practices. Web research is reserved for things that genuinely change (news, fresh pricing, current rankings), not for things I just hadn't bothered to write down.

The principle is the same as Mistake 1, scaled up: [build a second brain Claude can read](/blog/obsidian-as-your-second-brain/), and stop paying it to re-discover things you already wrote down.

## Mistake 3: I didn't use skills

**What I did wrong:** I wrote the same multi-step prompt over and over. The worst offender was drafting a Kit email broadcast for a new blog post. Every time I shipped something, I went through the same 15-minute song and dance: paste the post, explain the format I wanted, remind Claude about my subject-line rules, tell it where to schedule, review, edit.

Every. Single. Time.

**The moment it clicked:** I finally built a [`kit-broadcast` skill](/blog/automate-kit-broadcasts-with-skills/). One slash command meant that the 15-minute ritual turned into a 30-second confirmation. Now every post I ship has its broadcast queued the same day, because the friction is gone.

**The realization:** Anything I do more than twice is a skill. I'd been treating "writing a clever prompt" as the goal, when the real goal was *never writing that prompt again*.

**What I do now:** When I notice I'm typing the same kind of instructions twice, I stop and ask Claude to turn it into a skill. Five minutes of setup becomes infinite reuse. If you've never built one, [start here](/blog/what-are-skills/). It's one of the highest-leverage hours of Claude Code work I've done.

## Mistake 4: I typed everything

**What I did wrong:** I wrote short, sparse prompts, because typing is slow and I'm impatient. I got short, sparse outputs back. Then I blamed Claude for being shallow.

**The moment it clicked:** I started using [Monologue](https://every.to/on-every/introducing-monologue-effortless-voice-dictation) (the voice dictation app from Every) and realized I'd talk for 60 seconds about a topic in the time it would have taken me to type 10% of that. The amount of context I was *willing* to give Claude jumped roughly tenfold, with no extra effort on my part. The outputs got better immediately, and it wasn't because I'd learned a better prompting technique. It was because I was finally giving Claude enough to work with.

**The real insight:** LLMs can thrive on rambling, unstructured brain dumps. The kind of context you'd never bother typing ("here's what I'm thinking, here's the audience, here's why I tried this last week and it flopped, here's what I actually want this to feel like") is exactly what unlocks good output. Voice is the cheapest way to give it.

**What I do now:** If it's worth asking Claude, it's worth talking it out. The "prompt" is now a brain dump, not a tightly engineered request. I covered the same insight from a different angle in [getting better Claude Code output without prompt engineering](/blog/getting-better-output-without-prompt-engineering/), but the short version is: stop trying to write better prompts. Talk longer ones.

## The pattern: Claude Code is a workspace, not a chat

All four mistakes share one root cause. I was treating Claude Code like a place to *talk to* AI. It's actually a place to *work alongside* AI.

Chat thinking goes like this: each message is the unit, each session is disposable, the prompt is the lever. You sit down, you ask, you get an answer, and you close the tab, which means the next session starts at zero.

Workspace thinking is different. Files, skills, persistent context, and voice-fed brain dumps are the leverage. The prompt almost stops mattering once the workspace is right, because Claude already knows who you are, what you're working on, and how you want it done. You're not starting from zero, you're starting from a place that's been getting smarter every session.

Once that shift happened, the four mistakes corrected themselves. They were symptoms of the same wrong mental model.

**The marketers getting the most out of Claude Code aren't writing better prompts. They're building a better workspace.**

## Closing

If you'd rather not spend months figuring this out, I packaged the workspace mindset into a free 7-day email course. One short email a day. Skip the dumb middle. Sign up down below.
