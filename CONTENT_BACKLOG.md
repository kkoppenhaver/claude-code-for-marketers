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

### Claude Code vs. Lovable vs. Cursor vs. Bolt: a marketer's decision guide
- **channel:** ccfm
- **status:**  briefed
- **next:**    draft the comparison matrix table, then write the body
- **est:**     2h
- **due:**
- **Priority:** High (acquisition)
- **Category:** Tips and Techniques
- **Target keyword:** *Claude Code vs Lovable vs Cursor non-developers*
- **Angle:** Build a comparison matrix for non-technical marketers: what each tool is best at, learning curve, cost, when to pick one over another. "If you want a landing page in 10 minutes, use Lovable. If you want a reusable workflow that runs every week, use Claude Code."
- **Why now:** Every existing comparison is dev-focused. This would be the only marketer-focused guide.

### The first tool you should build with Claude Code is a Chrome extension
- **channel:** ccfm
- **status:**  idea
- **next:**    build the data-extraction and Obsidian-save example extensions (voiceover-length one already exists), then draft
- **est:**     4h
- **due:**
- **Priority:** High (thesis / pillar — "marketers can build software" arc)
- **Category:** Tips and Techniques
- **Target keyword:** *build chrome extension with claude code, claude code chrome extension* (TBD)
- **Angle:** A Chrome extension is the perfect first piece of custom software for a non-developer. Good combination of *power* (it runs inside Chrome, the app you're in all day) and *low overhead* (no hosting, no Web Store review, no deploy pipeline — `chrome://extensions` → "Load unpacked" → done). You don't have to worry as much about security, permissions, or production-grade architecture when the only user is you, which makes it a forgiving on-ramp for marketers easing into building their own tools. Concept post + 3-4 mini-examples; Claude handles `manifest.json` and the file plumbing — the reader describes what they want.
- **Mini-examples to feature:**
  1. **Voiceover length estimator** — highlight any text on a page you've written, click the extension, get a duration estimate at natural speaking speed. Useful for scripting videos. Keanan already built this — real "I built this for myself" story.
  2. **Extract structured data from a page** — one-click pull a competitor's pricing table, a SERP, or a list of items into clean CSV/JSON. (Needs building.)
  3. **One-click save to Obsidian** — save the current page as clean markdown to a local vault. Swipe file for research, content ideas, competitor pages. (Needs building.)
- **What to teach vs. wave past:** Wave past `manifest.json`, content scripts, popups — Claude generates them; the reader describes the behavior. Focus on the prompt patterns and the `chrome://extensions` "Load unpacked" install flow. Distribution = personal use only; mention "publishing to the Web Store" briefly as next-level but don't walk through it — that would dilute the "easiest first step" angle.
- **Why now:** No marketer-focused "first software project" post exists. Most "build with Claude Code" content jumps to web apps or SaaS prototypes, which have hosting/deploy overhead that scares off non-devs. Chrome extensions skip all of that. Strong pillar potential and evergreen.
- **Cross-link targets:** [[claude-code-tricks-i-wish-id-known-sooner]], [[what-are-skills]], the eventual nano-banana/landing-page posts (as "once you've built one tool, here's what's next").

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
- **due:**
- **Priority:** Medium-High (SEO — validated by GSC)
- **Category:** Use Cases
- **Target keyword:** *Claude Code SEO automation, AI SEO audit*
- **GSC signal:** Multiple "animalz content decay" queries ranking positions 2-4 show our audience is already searching for SEO-adjacent content. Building a full SEO automation guide creates a content cluster around this existing strength.
- **Angle:** Walk through three SEO workflows: (1) content audit of existing pages, (2) keyword gap analysis vs. competitors, (3) automated monitoring for ranking changes. Reference Firecrawl's approach but make it accessible for someone who's never used Ahrefs.
- **Why now:** SEO automation is a hot topic but existing content assumes technical SEO knowledge. Our content decay piece is already pulling in SEO-minded readers — give them somewhere to go next.

### The Claude Code skills every marketer should install (curated roundup)
- **channel:** ccfm
- **status:**  briefed
- **next:**    audit Corey Haines' repo + inventory my own skills
- **est:**     2h
- **due:**
- **Brief:** `briefs/marketing-skills-roundup.md`
- **Priority:** Medium-High (community building + companion to "solo marketer's AI stack")
- **Category:** Getting Started
- **Target keyword:** *best Claude Code skills marketing*
- **Secondary keywords:** *Claude Code skills install*, *marketing skills Claude Code*, *Corey Haines marketing skills*
- **Angle:** Curated roundup. "There are hundreds of public skills. Most aren't built for marketers. Here are the ones that are."
- **Sources:** Anthropic built-ins, Corey Haines' marketing skills repo, Keanan's own skills.
- **Structure:** Quick-card per skill (what it does / when to use / install / example), grouped by marketing workflow (writing → design → publishing → research).
- **Title note:** "7" is flexible — final number locked at draft time after candidate audit (likely 5–9).
- **Length:** ~1,500–2,000 words.
- **CTA:** Email course (default Kit tag).
- **Pre-draft research:** Audit Corey's repo, confirm Anthropic built-ins, inventory Keanan's skills, verify install commands.
- **Why now:** Skills ecosystem is exploding; no trusted marketer-focused roundup exists.

### What I got wrong about Claude Code in my first two months (and what changed everything)
- **channel:** ccfm
- **status:**  briefed
- **next:**    draft (personal reflection — no research needed)
- **est:**     1h
- **due:**
- **Priority:** Medium (trust builder)
- **Category:** Tips and Techniques
- **Target keyword:** *Claude Code mistakes, learning Claude Code*
- **Angle:** Authentic reflection. Share real mistakes: prompts that didn't work, skills that broke, times you burned credits unnecessarily, the mental model shifts that unlocked better output. Position the 7-day email course as the "skip the mistakes" shortcut.
- **Why now:** Vulnerability content drives the strongest email signups. This is the trust builder post.

### Generate blog images, thumbnails, and icons without leaving Claude Code (the nano-banana skill)
- **channel:** ccfm
- **status:**  idea
- **next:**    write brief + capture 2-3 example outputs
- **est:**     1.5h
- **due:**
- **Priority:** Medium-High (utility + internal linking asset)
- **Category:** Use Cases
- **Target keyword:** *Claude Code image generation, nano banana Claude Code, generate images in terminal*
- **Skill repo:** https://github.com/kkoppenhaver/cc-nano-banana
- **Angle:** Walk through installing the nano-banana skill (Gemini CLI + nanobanana extension + the skill itself) and using it for real marketing work: blog featured images, YouTube thumbnails, app icons, simple diagrams. Frame it as "when AI image generation actually makes sense" — the complement to the infographics post. Show the natural-language interface ("Generate a featured image for this post"), a couple of real outputs, and the `./nanobanana-output/` workflow. Call out cost (~$0.04/image on the default model) so readers know what they're signing up for.
- **Why now:** We reference image generation across multiple posts (landing page tutorial, brand guide post, etc.) but have no canonical "here's how to generate images inside Claude Code" piece to link to. Publishing this unlocks internal links from the landing page post, the infographics post (as the "yes, but sometimes this IS the right tool" counterpoint), and any future visual-asset tutorials.
- **Cross-link targets:** Landing page tutorial, "Why I stopped using AI image generators for infographics" (for contrast), brand guide post, skills roundup.

### Claude Code Desktop: a walkthrough for marketers
- **channel:** ccfm
- **status:**  idea
- **next:**    write brief (install steps, first-run screenshots, what's missing vs. CLI)
- **est:**     2h
- **due:**
- **Priority:** High (timely — brand new release, no marketer coverage yet)
- **Category:** Getting Started
- **Target keyword:** *claude code desktop, claude code desktop app, claude code mac app* (TBD)
- **Angle:** Pure walkthrough. What Claude Code Desktop is, how to install it, what the first-run experience looks like, what's in it vs. the CLI, and the marketing workflows it unlocks for people who never want to touch a terminal. No big opinion piece — let the walkthrough itself make the case that this is now the easier entry point.
- **Why now:** Brand new release. No marketer-focused coverage exists. Window to own search results before competitors catch up — same pattern as the /goal post.
- **Cross-link targets:** [[installing-claude-code]], [[claude-code-tricks-i-wish-id-known-sooner]], [[dont-be-scared-of-the-terminal]] (as the "if you do want to use the CLI" branch).
- **Companion strategic action:** Rework the 7-day email sequence to lead with Desktop instead of the terminal. Tracked in [STRATEGIC_ACTIONS.md](./STRATEGIC_ACTIONS.md).

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

### How to create basic motion graphics with HyperFrames
- **channel:** ccfm
- **status:**  idea
- **next:**    convert the rich session notes below into a clean brief, then draft
- **est:**     2h
- **due:**
- **Priority:** Medium-High (utility + fills a link we already make)
- **Category:** Use Cases
- **Target keyword:** *HyperFrames tutorial, Claude Code motion graphics, AI B-roll, code-based video*
- **Anchor project:** "The Tempting Shortcut" — 12-second pixel-art cybersecurity B-roll at `~/code/howhardcoulditbe/scripts/tempting-shortcut/`. Silent B-roll designed to cut behind Keanan's voiceover at 7:00–7:20 of a longer YouTube video.
- **What the actual session looked like** (from the Claude Code transcript at `~/.claude/projects/-Users-keanan-code-howhardcoulditbe/45848a14-5ae9-45a4-ab45-edc7e01ec53a.jsonl`):
  1. **One massive upfront prompt** — Keanan wrote a ~700-word brief specifying: visual identity (style, palette, typography, motion rules), the 3-beat scene breakdown with exact content and timing (0–3s, 3–6s, 6–12s), technical constraints (inline SVG, `crispEdges`, seeded PRNG, no `Math.random`), and a "what NOT to do" list (no Matrix rain, no bouncy easing on threat arrows, no blue cyber cliché, no stock lock icons). That brief was the whole game.
  2. **The HyperFrames skill enforced a `DESIGN.md` step** — before writing any HTML, Claude generated `DESIGN.md` from the prompt. That doc became the reference for the composition. The `DESIGN.md` isn't something Keanan wrote first; it's output the skill forces.
  3. **First render was ~90% there** — Claude ran `npx hyperframes preview` and `render` directly from the Claude Code chat. The initial MP4 worked.
  4. **Two small iteration rounds, both subtractive.** Real prompts from the session:
     - "This is a great start, can we make some edits? Let's remove the 'found in 4 hours' and 'don't do this' overlays. And can we make the arrows come in just a bit slower?"
     - "Let's also remove the 'port fwd' text and the wink. Then we're good to go!"
  5. **Total loop: heavy brief → one render → two rounds of cuts → done.** The `render` command kicks off an MP4 export straight from the chat.
- **Angle (post thesis):** The HyperFrames workflow rewards *front-loaded specificity*. A 700-word brief got a 90% first render; two short removal prompts finished it. That's the inverse of the "iterate your way to the answer" pattern most people expect from AI tools. The post teaches why: because HyperFrames renders compositions as code, vague prompts produce vague code and a vague video. Specific prompts with NOT-lists produce the thing you actually wanted on the first try.
- **Why now:** The vibe marketing post already references HyperFrames, but the link currently points to a LinkedIn announcement because we had no dedicated post. This fills the gap and strengthens the "code-defined media" cluster (infographics post, nano-banana post, this one).
- **Artifacts to pull into the post:**
  - Embedded MP4 from `renders/tempting-shortcut_2026-04-19_17-25-08.mp4` (the final one)
  - A "before cuts" render to show the iteration (the earliest render `04-59-19.mp4` has the overlays that got removed)
  - The initial prompt, trimmed or summarized — this is the real teaching artifact
  - Both iteration prompts verbatim (they're short and perfect)
  - The `DESIGN.md` the skill generated (or a condensed version) to show what "good output of the brief" looks like
- **Cross-link targets:** vibe marketing post (update the HyperFrames link to point here once live), infographics post (code-defined media sibling), nano-banana post (visual-asset generation companion).

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
