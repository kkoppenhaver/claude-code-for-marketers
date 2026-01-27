---
title: "Getting better Claude Code output without prompt engineering"
description: "You don't need to master prompt engineering. Just tell Claude to ask you questions until it understands what you need."
pubDate: 2026-01-27
author: "Keanan Koppenhaver"
draft: false
kitTagId: "14154457"
tags: []
categories: ["Tips and Techniques"]
---

If you've been using Claude Code (or any LLM) for a bit, you've probably hit the stage where your output is *fine*, but it's not quite what you had in mind. And certainly different from what your friendly neighborhood Claude Code advocate (hi) is showing you.

Maybe it's technically correct but misses the point or maybe it's close to what you want but just feels generic.

It's tempting to think "I just need to get better at prompt engineering" and I've been there.

And while that's necesarily the wrong instinct, it might mean you end up spending more time engineering your prompt than actually doing the work you set out to do.

When I took a step back, I realized I was never going to write a "complete" prompt. Even when I'm asking humans to help me with something, there's always something I forget to mention, some edge case we need to cover, or some assumption I'm making without realizing it.

So, instead of trying to craft one shot perfection, I learned to let Claude Code ask questions to figure out what it needed to know. Let's take a look at how that works.

## The one prompt that changed everything

Instead of trying to front-load all the context, I make sure to include one key phrase in my prompts when I'm starting a new project:

> Ask me questions one at a time until you feel confident starting.

What happens next is Claude starts interviewing you. It asks about your goals, your constraints, and your preferences. It surfaces things you hadn't thought to mention. And because it's one question at a time, you're not overwhelmed by a wall of clarifying questions all at once.

The magic is in what Claude asks that you *wouldn't have thought to include*. When I'm outlining a blog post, for example, Claude might ask about the target audience. That's something I often forget to specify, but it completely changes how the piece should be framed. Or it'll ask what I'm deliberately *not* covering, which helps set boundaries I hadn't consciously drawn.

This extra prompt snippet helps Claude Code's acting more like a human would: clarifying your instructions before executing them to make sure there are as few misunderstandings as possible.

## How I use this for writing

Here's a concrete example: my workflow for drafting blog posts.

I start with a rough outline. Maybe just bullet points, maybe a few sentences about what I want to cover. Then I paste all of it into Claude Code and say something like:

> Here's a rough outline for a blog post I'm working on. Ask me questions one at a time to flesh out and clarify this outline, then we'll start writing section by section.

Claude will ask about my audience. It'll ask about specific points that seem vague. Sometimes it'll suggest angles I hadn't considered. As I answer each question, we get more aligned on what this piece is actually about.

Then we write. Section by section, with me giving specific, actionable feedback as we go. The first draft is dramatically better than if I'd just said "write a blog post from this outline."

This works for writing, but the same pattern applies to any task where there's unspoken knowledge: coding, planning a campaign, building a landing page, or analyzing data. Anywhere you have context in your head that Claude needs to do good work, ask for a mini-interview to surface as much of that as possible.

## "Isn't this just slowing things down?"

You might be thinking: "If I'm going to answer all the questions anyway, couldn't I just write a better prompt with all that context upfront?"

Maybe! But here's the thing: any sufficiently complex problem has a ton of implicit knowledge that you just *know* but probably have considered that you're not communicating.

The question-asking approach lets you surface a lot of that right away. These most recent models are great at seeing gaps in the presented information, so when you start with what you have (even if it's rough), they're able to fill in the gaps conversationally.

It's not slower. It's faster, because you're not front-loading _all_ of the thinking.

## "What if Claude asks too many questions?"

This one's easy: just tell it to stop.

If you feel like you've given enough context and Claude is still asking, you can say something like "That's enough questions, let's get started" and it will. You're always in control of when the interview ends and the work begins.

In practice, I rarely have to do this. Claude's pretty good at calibrating now. But it's reassuring to know you can cut it off if needed.

And sometimes I really do just have to calm its curiosity/anxiety!

## Try it on your next project

The next time you're about to write a long, detailed prompt that tries to anticipate everything Claude might need to know, try this instead:

1. Start with whatever you have, even if it's rough
2. Add: "Ask me questions one at a time until you feel confident starting"
3. Answer the questions as they come
4. Let Claude tell you when it's ready to begin

You don't need to master prompt engineering. You just need to have a conversation.

If you try this technique, I'd love to hear how it goes. Reach out on [Twitter](https://twitter.com/kkoppenhaver), [LinkedIn](https://linkedin.com/in/keanankoppenhaver), or send me an email at keanan@claudecodeformarketers.com.
