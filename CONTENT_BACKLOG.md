# Content Backlog — Claude Code for Marketers

Ideas, planned posts, and in-progress content. Ordered by priority. Shipped posts live in [PUBLISHED.md](./PUBLISHED.md).

## Schema

Every active item must have these fields at the top:

```
- **channel:** ccfm
- **status:**  idea | briefed | drafting | drafted | ready | published
- **next:**    <single concrete next action>
- **est:**     <hours>
- **due:**     <YYYY-MM-DD or blank>
```

Other fields (priority, target keyword, GSC signal, brief link, angle, etc.) are optional but encouraged.

---

## Backlog


### I built a client-ready lead magnet calculator in 30 minutes. Here's how.
- **channel:** ccfm
- **status:**  briefed
- **next:**    build the calculator example, then draft the walkthrough
- **est:**     3h
- **due:**
- **Priority:** Medium (aspirational use case)
- **Category:** Use Cases
- **Target keyword:** *build lead magnet Claude Code, interactive calculator AI*
- **Angle:** Agency owners dream of offering interactive tools (ROI calculators, audit scorecards, quizzes) but can't justify dev time. Walk through building one from description to working prototype. Include the before (hours of back-and-forth with a dev) and after (30 minutes in Claude Code).
- **Why now:** Lead magnet creation is a top-requested use case from agency owners. Highly shareable.

### How to build a weekly marketing dashboard that writes itself
- **channel:** ccfm
- **status:**  briefed
- **next:**    prototype the dashboard pulling from one data source, then draft
- **est:**     4h
- **due:**
- **Priority:** Medium (aspirational use case)
- **Category:** Use Cases
- **Target keyword:** *Claude Code marketing dashboard, automated reporting*
- **Angle:** Pull from Google Analytics, email platform, and social metrics into a single auto-generating report. Show the exact prompts and file structure. Emphasize the time savings: "Every Monday morning, this runs and my team has the numbers before standup."
- **Why now:** Zero tutorial content exists for this. Reporting is a universal pain point.

### How one marketer built a Google Ads workflow that creates campaigns in 30 seconds
- **channel:** ccfm
- **status:**  briefed
- **next:**    draft based on Austin Lau case study + beginner walkthrough
- **est:**     2h
- **due:**
- **Priority:** Medium (deeper workflow)
- **Category:** Use Cases
- **Target keyword:** *Claude Code Google Ads automation*
- **Angle:** Adapt/reference the Austin Lau (Anthropic) case study where ad creation went from 30 minutes to 30 seconds. Add beginner-friendly framing and step-by-step recreation instructions.
- **Why now:** Stormy AI has the only existing content on this, and it's extremely technical. A marketer-friendly version would own this space.

### SEO on autopilot: using Claude Code to audit, optimize, and monitor your content
- **channel:** ccfm
- **status:**  briefed
- **next:**    outline the three SEO workflows, then draft
- **est:**     2h
- **due:**     2026-08-13
- **Priority:** Medium-High (SEO — validated by GSC)
- **Category:** Use Cases
- **Target keyword:** *Claude Code SEO automation, AI SEO audit*
- **GSC signal:** Multiple "animalz content decay" queries ranking positions 2-4 show our audience is already searching for SEO-adjacent content. Building a full SEO automation guide creates a content cluster around this existing strength.
- **Angle:** Walk through three SEO workflows: (1) content audit of existing pages, (2) keyword gap analysis vs. competitors, (3) automated monitoring for ranking changes. Reference Firecrawl's approach but make it accessible for someone who's never used Ahrefs.
- **Why now:** SEO automation is a hot topic but existing content assumes technical SEO knowledge. Our content decay piece is already pulling in SEO-minded readers — give them somewhere to go next.

### Generate blog images, thumbnails, and icons without leaving Claude Code (the nano-banana skill)
- **channel:** ccfm
- **status:**  idea
- **next:**    write brief + capture 2-3 example outputs
- **est:**     1.5h
- **due:**     2026-08-14
- **Priority:** Medium-High (utility + internal linking asset)
- **Category:** Use Cases
- **Target keyword:** *Claude Code image generation, nano banana Claude Code, generate images in terminal*
- **Skill repo:** https://github.com/kkoppenhaver/cc-nano-banana
- **Angle:** Walk through installing the nano-banana skill (Gemini CLI + nanobanana extension + the skill itself) and using it for real marketing work: blog featured images, YouTube thumbnails, app icons, simple diagrams. Frame it as "when AI image generation actually makes sense" — the complement to the infographics post. Show the natural-language interface ("Generate a featured image for this post"), a couple of real outputs, and the `./nanobanana-output/` workflow. Call out cost (~$0.04/image on the default model) so readers know what they're signing up for.
- **Why now:** We reference image generation across multiple posts (landing page tutorial, brand guide post, etc.) but have no canonical "here's how to generate images inside Claude Code" piece to link to. Publishing this unlocks internal links from the landing page post, the infographics post (as the "yes, but sometimes this IS the right tool" counterpoint), and any future visual-asset tutorials.
- **Cross-link targets:** Landing page tutorial, "Why I stopped using AI image generators for infographics" (for contrast), brand guide post, skills roundup.

### Agent View: never lose track of long-running Claude Code work
- **channel:** ccfm
- **status:**  idea
- **next:**    run 3 real long workflows through Agent View (HyperFrames render, deep research/competitor scrape, content audit), capture screenshots, then draft
- **est:**     2h
- **due:**
- **Priority:** Medium-High (timely — new May 2026 release, ship after [[Claude Code Desktop walkthrough]])
- **Category:** Tips and Techniques
- **Target keyword:** *claude code agent view, claude agents dashboard* (TBD — confirm against GSC once Desktop post is live)
- **Scope note:** This post covers **Agent View** — the `claude agents` dashboard launched May 11, 2026 that shows every background Claude Code session in one place, flags which agents are waiting on input, and lets you dispatch new sessions. It is *not* the `/agents` slash command (which manages subagents inside a single session). Brief should call out the distinction up top so readers don't conflate the two.
- **Angle:** Marketers don't need Agent View when every workflow finishes in 30 seconds. They need it the moment they start running longer skill-based workflows — a HyperFrames render, a deep research crawl across competitors, a content audit across dozens of pages. Suddenly there's a session running in the background, you've context-switched to something else, and the question becomes: *"wait, what was Claude doing in that other window?"* Agent View is the dashboard that answers that question. Frame it as "the upgrade that quietly becomes essential once your workflows get bigger."
- **Long workflows to feature as examples:**
  1. **HyperFrames render** — kick it off, walk away, check the dashboard when the MP4 is ready.
  2. **Deep research / competitor scrape** — long crawls or multi-source research that run for minutes. Dispatch and forget.
  3. **Content audit across many pages** — site-wide SEO audit, content decay sweep, or batch rewrite. The kind of job that used to mean leaving a terminal window open and praying.
- **Pre-draft tasks:** Keanan has poked at Agent View briefly but hasn't run a real marketing workflow through it yet. Before drafting: install/open Agent View, run each of the three example workflows end-to-end, capture screenshots of the dashboard at the "waiting on you" moment and at the "done" moment. The screenshots are the proof.
- **Why now:** Brand new release with almost no marketer-focused coverage. Same playbook as the /goal post and the Desktop walkthrough — own search before the dev-focused content saturates it.
- **Cross-link targets:** [[the-goal-command]] (other "Claude finishes what it starts" piece), [[claude-code-desktop-walkthrough]] (entry-point companion), HyperFrames tutorial (the workflow most obviously paired with Agent View).

### How to use Claude for market research (without an expensive tools subscription)
- **channel:** ccfm
- **status:**  idea
- **next:**    write brief
- **est:**     1.5h
- **due:**
- **Priority:** Medium (SEO — emerging queries)
- **Category:** Use Cases
- **Target keyword:** *claude for market research, claude competitor analysis, claude brand analysis*
- **GSC signal:** "claude for market research" at position 42, "claude competitor analysis" at position 14.5, "claude brand analysis" at position 77, "brand mentions in claude" at position 70. These queries show growing interest in using Claude for research beyond our existing competitor analysis post.
- **Angle:** Broader than the existing competitor analysis post. Cover market sizing, audience research, trend analysis, and brand monitoring — all using Claude Code with web search and file tools. Position it as "the research toolkit you'd pay $500/month for, built in an afternoon."
- **Why now:** Our competitor analysis post is already driving traffic for research-adjacent queries. This expands the cluster.

---

## In Progress

*Nothing here right now*

---

## Drafts Ready for Review

*Nothing here right now*

---

## Status Legend (blog content)

- `idea` — Concept only, no outline yet
- `briefed` — Outline / brief exists, ready to draft
- `drafting` — Actively writing
- `drafted` — Draft complete, needs review
- `ready` — Approved, ready to publish
- `published` — Live on the blog (moved to [PUBLISHED.md](./PUBLISHED.md))
