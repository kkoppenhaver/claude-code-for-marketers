---
title: "The Marketing AI Ops Ladder: what the best marketing teams actually do with AI"
description: "A research-backed maturity model for AI Ops in marketing: five rungs that show what the best marketing teams actually do with AI, and how to climb them."
target_keyword: "ai ops for marketing"
secondary_keywords: ["marketing ai ops", "ai maturity model for marketing teams"]
pubDate: 2026-07-18
author: "Keanan Koppenhaver"
image: "/images/blog/the-marketing-ai-ops-ladder.png"
imageAlt: "The Marketing AI Ops Ladder: five ascending rungs from personal wins to reusable tools, the shared playbook, supervised autopilot, and the aspirational compounding horizon"
draft: false
kitTagId: "14154457"
kitHeadline: "Building your team's AI Ops function?"
kitDescription: "Get one practical email a week on making Claude Code work for marketing teams, from first terminal command to scheduled agents."
kitButtonText: "Send me the good stuff"
tags: ["ai-ops", "strategy", "agents"]
categories: ["Concepts"]
---

Lots of folks are trying to scale the efforts of their existing marketing teams using Claude Code, but almost everyone is looking for a roadmap. So when I get questions about what "great" looks like in terms of Claude Code adoption, I previously had a very vague answer. But the question kept coming up, so this is my answer to "what should my team be doing, in what order, and how do I know where we stand?"

Let's dive in.

## Adoption is the wrong scoreboard

"Are marketing teams using AI?" is a question we actually _do_ have an answer to. Salesforce's most recent State of Marketing report, a survey of roughly 4,500 marketers, found that [75% of marketers have adopted AI](https://www.salesforce.com/marketing/state-of-marketing-report/), which seems like a lot!

But the same report found that 84% of marketers are still running generic, non-personalized campaigns. While three-quarters of the industry has adopted the tools, the output looks about the same as it did before. Adoption, it turns out, tells you almost nothing.

The wider data says the same thing. McKinsey's [State of AI research](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai) (fielded mid-2025, about 2,000 respondents) found that 88% of organizations now use AI in at least one function, but nearly two-thirds haven't begun scaling it beyond experiments. And when you zoom into any single function, no more than 10% of organizations are scaling AI agents there.

And McKinsey's "AI high performers," the roughly 6% of organizations attributing real bottom-line impact to AI, aren't distinguished by using *more* AI. They're about three times more likely to have fundamentally **redesigned their workflows** around it.

As it turns out, the question isn't "is my team using AI?", it's "how much of my team's work has been rebuilt around it?" And when you look at the teams and practitioners who've published how they actually work, that rebuilding follows a recognizable progression. We'll call this the "Marketing AI Ops Ladder". Let's take a look at how to climb and help your team up behind you.

## The Marketing AI Ops Ladder

1. **Personal wins.** Individuals use AI ad hoc for their own tasks. There are wins to be had here, but they live in one person's chat history.
2. **Reusable tools.** One-off prompts become artifacts like slash commands, brand files, and small internal tools you can run more than once.
3. **The shared playbook.** The team's conventions and taste get encoded in shared files and skills, so anyone (and any agent) produces on-brand work.
4. **Supervised autopilot.** Scheduled agents do real recurring work, with a human approving everything that ships.
5. **The compounding horizon.** Systems that improve themselves with use. From what I've seen, no one is fully here yet, so we'll look at what the future holds.

Two things to understand before we start climbing.

First, **the ladder measures system maturity, not team size.** The best-documented example of the upper rungs isn't a 50-person marketing org with a transformation budget. It's one person, and we'll meet him in a minute. An individual can be at rung 4 while a big team sits at rung 1, which is exactly why "how many people are using AI" is such a useless metric.

Second, **the rungs should be climbed in order.** One practitioner we'll look at built a 15-agent content system, and when he wrote up his lessons learned, his biggest mistake was building the agents *first*, before the configuration and skills underneath them. The bottom rungs are the foundation for the top ones.

## Rung 1: Personal wins

This is where every team starts, whether they plan to or not. A few people on the team have discovered that Claude Code (or whatever agentic tool they've picked up) can do real work like drafting campaign copy, cleaning up a spreadsheet, summarizing call transcripts, or researching competitors. But nothing is shared and nothing is written down. If the person with this knowledge goes on vacation, that knowledge goes with them.

It's easy to feel like this isn't much of a starting point, but one of the most instructive AI marketing stories I found in my research starts at this exact point. Austin Lau ran growth marketing at Anthropic, the company behind Claude, as a team of one. Per Anthropic's own account, he had never written a line of code and had to Google how to open the terminal on his Mac (maybe he should have read this very blog you're on right now!).

Keep him in mind, because by the end of this post he'll have defined the top of the ladder. Everyone starts on rung 1, including the person who ends up furthest up.

**You're here if:** a few people on your team have had some impressive AI wins, but productivity and results vary wildly depending on who's doing the work.

**To climb up to the next rung:** turn your best one-off prompt into something you can run more than once and get similar results.

## Rung 2: Reusable tools

The shift to rung 2 is the shift from "I do some of my tasks with AI" to "I build tools that help me do my tasks with AI." Instead of re-prompting from scratch every time, the workflow becomes an artifact such as a slash command, a brand-voice file, or a small internal tool that does one job well.

Austin Lau (from the past section) took this leap when he realized he was using Claude Code to generate responsive search ads over and over. Instead, he built a custom `/rsa` slash command that generates 15 headlines and 4 descriptions for a responsive search ad and outputs an upload-ready CSV. This meant that writing one of those ads went from about 30 minutes to about 30 seconds. He then asked Claude Code to build him a Figma plugin, which took under an hour to create and generates up to 100 ad creative variations across aspect ratios per batch. This was another half-hour copy-paste job reduced to seconds. Across the workflow, Anthropic reports ad copy creation dropping from 2 hours to 15 minutes and creative output going up 10x. These are first-party numbers from a vendor writing about its own product, so take it with a grain of salt, but the *pattern* (one-off task becomes reusable tool, tool collapses the time cost) shows up everywhere at this level.

It shows up in practitioner write-ups too. Brandon at Stack & Scale [self-reports 47 marketing automations](https://www.stackandscale.ai/p/the-claude-code-playbook-for-marketers) built solo with Claude Code, including turning one blog post into six channel assets in about 15 minutes (a job he says used to take 4 hours), anchored by a persistent brand-voice markdown file. And [Koka Sexton](https://kokasexton.com/claude-code-marketing-ops-power-tool/), who ran social at LinkedIn and Slack before this, describes collapsing a 90-minute research-to-published-HTML content process into a single conversation.

**You're here if:** individuals have personal toolkits they rely on, those toolkits live on personal machines, and two people have built the same thing twice without knowing it.

**To climb up to the next rung:** the tools need to stop being only yours and start being the team's.

## Rung 3: The shared playbook

This is where I personally find most teams, even the AI-pilled ones, are stuck today.

At rung 3, the team's taste and standards stop living in people's heads and start living in shared, executable files. These are things like a team-level [CLAUDE.md](/blog/the-claude-md-masterclass/) that encodes your conventions, [skills](/blog/what-are-skills/) that capture your repeatable workflows, or a shared repo of skills and conventions everyone pulls from. The test is simple: can a new hire produce on-brand work with AI on day one because the playbook is written down somewhere an agent can read it? If so (or if they can get pretty close) then you're on the right track.

The cleanest public example I found is [RSL/A, a two-person marketing agency](https://rsla.io/blog/claude-code-marketing-agency-workflow) that runs essentially everything through one Claude Code setup connected to nine tools ([MCP integrations](/blog/giving-claude-code-superpowers-with-mcp-servers/) covering their CMS, hosting, CRM, and more) with zero custom API code. The center of this flow is their CLAUDE.md file, which codifies naming conventions, writing voice, project structure, and permissions. Their numbers are self-reported (so once again, grain of salt), but: blog post production has gone down from a day to 2-3 hours, email sequences from 4 hours to 45 minutes, roughly 3x the output year over year at identical headcount, and all of it for under $200 a month against the $120K developer hire they _didn't_ have to make. They did say that it took 2-3 weeks before this process started to feel natural, and if you've got an even bigger team, you can expect this process to be a bit longer.

Something to keep in mind about this pattern is, like I said, teams are still getting to this point for the most part, so there aren't a ton of public examples of teams doing this well. Not all of the tools have great workflows for skill and knowledge sharing and some of the best practices and patterns are still being ironed out here. If you're at this rung (or beyond) a lot of what you'll have to figure out is more DIY than running off an existing blueprint.

**You're here if:** conventions live in a repo instead of in someone's head, a new teammate can ship on-brand work with AI in their first week, and "how do we do X" has a written answer an agent can follow.

**To climb to the next rung:** get the ordering right. Doneyli De Jesus, whose system we're about to look at, built scheduled agents *before* nailing down his configuration and skills, and he calls that his number one mistake. Once the playbook is solid, and only then, you can start putting it on a schedule.

## Rung 4: Supervised autopilot

At rung 4, work happens while nobody is at a keyboard. Scheduled agents handle real recurring workflows, but every output still passes through a named human before it ships. Instead of "set and forget" (the unfulfilled promise of most automations), we're talking about set and *approve*.

Let's take a look at two real-world systems that actually run like this.

The first is a marketer who [runs a Claude Code agent on a scheduled cloud routine every six hours](https://aiblewmymind.substack.com/p/claude-code-content-distribution-ai-agent). It ingests articles into a research wiki, repurposes content for Reddit, scans relevant threads and drafts replies, and queues LinkedIn posts. The key operating rule, in their words, is "Nothing publishes without me." Instead, drafts arrive in Slack and a human approves every one.

The second is [Doneyli De Jesus's 15-agent content system](https://doneyli.substack.com/p/how-i-automated-my-wifes-content), built to run his wife's content operation. The architecture is the ladder in miniature: CLAUDE.md configuration files at the base, 24 custom skills encoding voice rules and quality gates in the middle, and 15 scheduled agents on top. With this system, he publishes 10-12 pieces of content a week across four platforms on 2-3 hours a week of human review, built over about 6 months of part-time work on a $100/month Claude plan. Even at this level of automation, his producer agents refuse to draft anything unless a human has touched the editorial calendar first.

Before you get too excited, here's a reality check. Gartner [predicted in June 2025 that over 40% of agentic AI projects will be canceled by the end of 2027](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027), citing costs, unclear business value, and inadequate risk controls. This is why it's important to nail the skills and markdown files from the previous rung of the ladder before you try to move things in the direction of automation. 

**You're here if:** meaningful work happens on a schedule, every automated output passes a named human, and you've killed at least one automation that wasn't useful (because if you're really doing this right, you'll have discovered at least one).

**To climb to the next rung:** you mostly don't! This is where most teams top out given the current state of AI. The next step is a look into where you might go in the future.

## Rung 5: The compounding horizon

I want to be direct about this rung: it's a direction, not a destination really anyone has reached. But the early pieces exist, and they're worth looking at because this is where things are going in the long term.

Remember Austin Lau, the Anthropic marketer who had to Google how to open the terminal? His workflow eventually included a memory system that logs every ad test hypothesis and its results, then pulls those past results into context when generating new variations. This "self-improving testing framework" (Anthropic's words, not mine) is an example of how you might build on an automated system, even in a rudimentary way. Each test makes the next test smarter.

Anytime you can combine the actions of an agent loop (automated or not) with human judgment and feed it back into the next loop, that's a self-improving architecture that's going to put you miles ahead.

The tooling is starting to productize the pattern. Anthropic now ships an official [launch-your-agent skill](https://github.com/anthropics/launch-your-agent) where Claude Code interviews you about a recurring job, builds a managed agent to do it, grades the agent against your definition of done, iterates until it passes, and schedules it. Agents building agents, though with a human directing every step, and the repo describes itself as a reference implementation rather than a finished product.

Through that lens, a "rung 5" marketing operation is one where every campaign makes the next campaign smarter: skills that sharpen with use, agents that propose their own improvements for human sign-off, and institutional knowledge that compounds instead of evaporating when someone changes jobs. Your best marketer's judgment, encoded and accruing interest.

This is absolutely not fire-and-forget marketing. Everywhere that this "self-improving" architecture is used today, a human is in the loop making sure it's still dialed in.

## Using the ladder

If AI inside a marketing team is your mandate, here's how I'd actually use this framework.

**Benchmark honestly.** Most teams that assess themselves discover they _want_ to be on rung 3, but are really still at rung 1: a few power users with impressive personal wins, and no playbook. That's fine. That's where the McKinsey data says nearly everyone is. The point of the ladder isn't to feel bad about your rung, it's to know where you are so you can figure out what's next.

**Know what your job is.** As team lead, your job is getting the *whole team* up rungs that some individuals have already climbed. You don't need to be the best climber, but you need to install the handrails.

**Climb one rung at a time.** The documented failure mode, at both individual and industry scale, is skipping ahead. De Jesus building agents before skills and Gartner's 40% cancellation forecast are the same lesson two different ways: automation built on top of an unwritten or untested playbook falls over.

And if you want a first move for wherever you land:

- **From rung 1:** pick the team's single best one-off win and turn it into a [slash command or reusable prompt](/blog/claude-code-tricks-i-wish-id-known-sooner/).
- **From rung 2:** start the shared repo. Move one person's brand-voice file into it and make a second person use it.
- **From rung 3:** take your most-run workflow and schedule it, with output landing in Slack for approval. One workflow, one human gate.
- **From rung 4:** add memory. Start logging what worked into a file your agents read before the next run, and review what accumulates monthly.
- **At rung 5:** You're in uncharted territory! [Email me](mailto:keanan@claudecodeformarketers.com) and let me know what you're discovering out there at the frontier 😅

## Where does your team sit?

I'd love to hear where your team actually sits on the ladder. Tell me on [Twitter](https://twitter.com/kkoppenhaver) or [LinkedIn](https://linkedin.com/in/keanankoppenhaver), or email me at <a href="mailto:keanan@claudecodeformarketers.com">keanan@claudecodeformarketers.com</a>. The middle rungs in particular are underdocumented, and our corner of the internet gets better every time someone writes up the unglamorous part.
