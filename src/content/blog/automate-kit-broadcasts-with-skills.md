---
title: "How I automated my email marketing with a Claude Code skill"
description: "I used to put off promoting my blog posts because the context switch to Kit was just enough friction to kill my momentum. So I built a skill to handle it for me."
pubDate: 2026-02-03
author: "Keanan Koppenhaver"
draft: false
kitTagId: "14154457"
tags: []
categories: ["Use Cases"]
---

I have a confession: for the first few posts on this site, I didn't email my subscribers about them.

It wasn't intentional. I'd finish writing, hit publish, feel that little rush of satisfaction... and then move on to the next thing. The post was live, and that felt like an accomplishment in itself. But emailing people about it meant opening Kit (my email service provider), creating a new broadcast, writing a subject line, summarizing the post I'd just spent hours on, picking the right audience, and scheduling the send. None of those steps are hard on their own, but strung together, they were just enough friction to make "I'll do it later" feel like the reasonable choice.

And "later" usually meant "never."

I knew this was a problem. What's the point of writing something if the people who signed up to hear from you never find out about it? So I did what I've been doing a lot lately: I asked Claude Code to help me fix it.

## A quick word about skills

If you've read my post on [what skills are and how they work](/blog/what-are-skills/), you already know the basics. If not, here's the short version: skills are reusable instructions you can give Claude Code. Think of them like SOPs for your AI assistant. You write down how you want something done once, and Claude can follow those instructions whenever that type of task comes up.

What makes skills more powerful than just prompting is that they can include supporting files like templates, reference documents, and even scripts that actually do things. A prompt is just text. A skill is text plus context plus the ability to take real actions.

That distinction is going to matter a lot for what I'm about to show you.

## The workflow I wanted to fix

Here's what sending an email broadcast used to look like for me:

1. Finish writing the post
2. Open Kit.com
3. Create a new broadcast
4. Write a subject line
5. Summarize the post in a few bullet points
6. Add the link to the post
7. Make sure I'm sending to the right subscribers
8. Schedule the send

Eight steps. Maybe ten minutes of actual work. But here's the thing: by the time I finished writing a post, I wanted to be *done*. My creative energy was spent. The last thing I wanted to do was hop over to a completely different tool and start a whole new task.

That meant I was inconsistent. Some posts got promoted, some didn't. And it had nothing to do with which posts were better. It was entirely about whether I had the energy to context-switch after hitting publish.

## Sitting down with skill-creator

Claude Code ships with a built-in skill called `skill-creator` that helps you build new skills. I'd never built a skill before, but I figured this was a good candidate: a repetitive workflow with clear steps that I was doing inconsistently.

So I told Claude something like:

> I want to build a skill that handles sending Kit.com email broadcasts when I publish a new blog post. It should read the post, generate the email, and schedule it to send through the Kit API.

What happened next was more like a conversation than a coding session. Skill-creator started asking me questions. What should trigger this skill? What does my typical email look like? How do I want the subject line formatted? Do I want it to send immediately or schedule for later?

**I didn't need to know how to build a skill before sitting down.** Skill-creator guided the process, asking questions to understand what I wanted and then building the structure around my answers. It felt less like programming and more like explaining my workflow to a colleague who was taking this on as part of their job description.

## Claude and the Kit API

This is the part that surprised me the most.

Once we'd figured out what the skill should do, Claude needed a way to actually talk to Kit's systems to create broadcasts. That meant working with Kit's API, which is the sort of behind-the-scenes interface that developers use to interact with software programmatically.

I didn't know the first thing about Kit's API, but I didn't need to. Claude researched the Kit API documentation, figured out the right endpoints (the specific URLs you send requests to), and wrote a Python script that handled the entire broadcast creation process.

The script takes a subject line, some HTML content, and a send time, then creates a scheduled broadcast in Kit. It even has a dry-run mode so I can test things without accidentally emailing my whole list.

**I didn't write a single line of that script.** I just described what I wanted to happen: "When I tell you to send a broadcast, I want you to create it in Kit, target my subscribers, and schedule it for the time I specify." Claude handled the implementation. Even if you're not technical and don't know anything about how to make API calls, you can get a skill set up that does it for you.

## Making the emails sound like me

This was the part where I had the most input, and I'd say it's the most important part of the whole skill.

Claude can generate perfectly functional email copy. But "functional" isn't really the goal. I wanted the emails to sound like they came from me, not from an AI assistant. So I pasted in an example that I had hand-written and Claude took a look.

The template we landed on is casual and scannable: a short greeting, a one-sentence description of the post (specific, not vague), a few bullet points covering the key takeaways, and a link to read more. The subject line always starts with `[CC4M]` so subscribers can spot it in their inbox. And the sign-off is "Talk soon and happy Clauding," because that's just what I say.

We also set a specific rule in the template: **the one-sentence description has to be specific about what the post covers.** Not "Today's post is about some interesting things I've been thinking about." Instead, something like "Today's post is about how I use Claude Code to research competitors before a product launch." The reader should know what they'll learn from that sentence alone.

## The details you'd forget

There are a handful of details in my broadcast workflow that are easy to get wrong if I'm doing things manually:

**Subscriber targeting.** I don't want to email *everyone* on my list. New subscribers are going through an onboarding email sequence, and if I blast them with a broadcast in the middle of that, it's a confusing experience. So the skill automatically targets only subscribers with my `CC4M` tag while excluding anyone currently in the welcome sequence.

**Timezone handling.** I'm in US Central time. When I say "schedule this for 10am tomorrow," I mean 10am Central. The skill knows that and converts to the right format.

**Dry-run testing.** Before I schedule a real broadcast, I can run a dry test that shows me exactly what would be sent without actually sending it. It's a safety net that means I never have to worry about firing off a half-finished email to my list.

These are the kinds of things I'd occasionally forget or get wrong when doing everything manually. But once they're baked into the skill, they just...happen. Every time and correctly.

## What this looks like now

My workflow today:

1. Finish writing the post
2. Tell Claude Code to create a broadcast and schedule it (for example, "create a /kit-broadcast to send this out Wednesday at 10am")
3. Review the draft Claude generates (based on it reviewing the full contents of the post)
4. Approve the schedule

That's it. Four steps instead of eight, and the two that require my brain (reviewing the draft and approving the schedule) are the only ones where my judgment actually matters. Everything else is handled.

## Consistency without discipline

Here's what changed: I now promote every single post I write. Simply because there's almost no friction left in the process. It's just part of publishing now.

I think there's a broader lesson here for anyone who uses AI tools.

<aside>

The most valuable automations aren't the ones that do something you *can't* do. They're the ones that remove just enough friction from something you *already* do (or should be doing) that you actually do it consistently.

</aside>

For me, that was email promotion. For you, it might be something completely different. Maybe it's formatting social posts after you publish. Maybe it's updating a spreadsheet. Maybe it's sending a weekly report. Whatever it is, if you find yourself skipping it because of friction, that's a skill waiting to be built.

## Try it yourself

If you use Kit for your email marketing, you can install this skill and customize it for your own workflow. The full skill (including the Python script and email template) is available at [github.com/kkoppenhaver/cc-skills](https://github.com/kkoppenhaver/cc-skills). You'll need a Kit API key, which you can generate from your Kit account settings, and you'll want to update the email template, subscriber tags and such to match your own voice and sign-off (have Claude Code help you with this).

And if you don't use Kit, that's fine too. The point isn't the specific tool. It's the idea that you can take a tedious, multi-step workflow and turn it into a conversation. If you've got a workflow you think would make a good skill, send me an email at <a href="mailto:keanan@claudecodeformarketers.com">keanan@claudecodeformarketers.com</a> and tell me what you're working on. I'd love to hear about it.
