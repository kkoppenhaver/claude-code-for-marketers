# Published — Claude Code for Marketers

Shipped posts, newest first. `/plan-week` reads this for cadence counting.

## 2026

### How I make motion graphics with HyperFrames and Claude Code
- **Published:** 2026-07-23
- **Category:** Use Cases
- **File:** `motion-graphics-with-hyperframes.md`
- **Target keyword:** `hyperframes tutorial`
- **Why:** Fills the code-defined-media cluster's video gap and replaces the LinkedIn link the vibe-marketing post pointed HyperFrames at (now updated to this post). Thesis "refine, never restart": specific intent + references → structurally-close first render → surgical tweaks, not restarts. Two real HyperFrames demos, both self-hosted `<video>`: the monochrome-purple Jetlag-style commute map (JFK→office, from the "Build It On The Commute" Retool video — needed *factual* accuracy, so more rounds) and the glitchy "vibe coding" title card (aesthetic-only → 80–90% first pass). Cameo: the `/goal`-driven clip supercut (Claude did YouTube search + transcript-scan + ffmpeg cutting; Keanan curated), plus the `render --workers 1` blur-flicker tip. Key nuance: refinement volume tracks how much objective correctness the piece demands. Sourced from the surviving `882b238f` session transcript + Keanan Q&A (original tempting-shortcut transcript was gone). Featured image is the first of the new no-caption style (code editor → render arrow → real rendered map, HTML→PNG). Anchor project moved to `~/code/floorboardai/scripts/hhcib/tempting-shortcut/`.

### How I subtitle videos with Claude Code (a skill that runs Whisper for you)
- **Published:** 2026-07-20
- **Category:** Use Cases
- **File:** `subtitle-videos-with-claude-code.md`
- **Target keyword:** `subtitle videos with claude code`
- **Why:** Skill-backed proof point for the code-defined-media / "build your own tools" cluster. Walks the real 2026-07-15 session subtitling the Retool deploy video: whisper.cpp transcribing 3m40s locally in ~14s, brand names correct on first pass via prompt seeding, and the cleanup pass catching Whisper's "Cloud Code"→"Claude Code" mishear (4×) as the case for keeping a human in the loop. Privacy + $0 framing (no uploads, no per-minute fees). Links the public `video-subtitler` skill (cc-skills repo, published same day), the skills intro/roundup, and the Chrome extension post. Featured image: video card → SRT cues with the auto-fix highlighted (HTML→PNG).

### The Marketing AI Ops Ladder: what the best marketing teams actually do with AI
- **Published:** 2026-07-18
- **Category:** Concepts
- **File:** `the-marketing-ai-ops-ladder.md`
- **Target keyword:** `ai ops for marketing`
- **Why:** Named-framework pillar for the marketing-leader/AI Ops-owner audience, prompted by Sid Suri's direct "what does great look like" ask. Five rungs (Personal wins → Reusable tools → The shared playbook → Supervised autopilot → The compounding horizon, explicitly aspirational), backed by deep research: Anthropic's Austin Lau case, RSL/A, De Jesus's 15-agent system, McKinsey/Salesforce/Gartner data, with self-reported numbers flagged throughout. All evidence external by design. Ladder diagram (HTML→PNG) doubles as hero + OG asset. Research + outline in `briefs/`. GSC checked at publish: zero existing impressions on any "ai ops" variant, so no cannibalization.

### Give every blog post an on-brand featured image with one repeatable workflow (HTML → PNG)
- **Published:** 2026-06-18
- **Category:** Use Cases
- **File:** `give-every-post-a-featured-image-with-html-to-png.md`
- **Target keyword:** `create featured images with code`
- **Why:** Canonical how-to for the code-defined-media cluster and a natural internal-linking hub. Reframes featured images as a per-post tax that AI generators don't solve (bad at text + exact brand), then teaches the author-as-HTML, render-with-headless-Chromium workflow: brand tokens as CSS variables, the Playwright `export.mjs` at 2×, and the "configure once, render forever" config. Real worked example (FloorboardAI client-calls card, before/after template→finished) plus the public `featured-image` skill (`cc-skills` repo) as the one-line payoff. Contrast section positions it as the matched pair to the infographics post; links the skills roundup and brand-guide post.

### The first tool you should build with Claude Code is a Chrome extension
- **Published:** 2026-06-16
- **Category:** Tips and Techniques
- **File:** `build-a-chrome-extension-with-claude-code.md`
- **Target keyword:** `build chrome extension with claude code`
- **Why:** Pillar piece for the "marketers can build software" arc. Reframes the stall point as the deployment tax (hosting, deploy, domains, a server to keep alive) and positions a Chrome extension as the one capable build that skips all of it via Load unpacked. Build-along of the real Script Timer extension Keanan uses for video scripts — verbatim build prompt (incl. "ask me questions one at a time"), the genuine Google Docs→clipboard-fallback iteration, calibration + pause-aware timing. Featured + inline images rendered from the extension's actual UI/CSS. Soft CTA links the public repo (github.com/kkoppenhaver/script-timer-extension). First post drafted against the full CC4M voice guide.

### The Claude Code skills every marketer should actually install
- **Published:** 2026-05-27
- **Category:** Getting Started
- **File:** `claude-code-skills-for-marketers.md`
- **Target keyword:** `best claude code skills marketing`
- **Why:** Curated, marketer-only filter on an exploding ecosystem — ordered by content workflow (planning/writing → visuals → distribution → SEO/research → the meta skill-creator closer). Mixes installable picks (Corey Haines' v2.0.0 pack via `npx skills add coreyhaines31/marketingskills`, Anthropic's frontend-design + skill-creator) with skills Keanan built (featured-image, fact-check, tweet/linkedin, kit-broadcast, fetch-search-console), each linked to its repo. Thesis: the highest-value skill is the one you build for your own workflow. Featured image shipped (HTML→PNG via the featured-image skill). Strong internal-link hub for every post that references a specific skill.

### Claude Code Desktop: a walkthrough for marketers
- **Published:** 2026-05-25
- **Category:** Getting Started
- **File:** `claude-code-desktop-walkthrough.md`
- **Target keyword:** `claude code desktop app`
- **Why:** Timely walkthrough of the redesigned Desktop app while marketer-focused coverage is still nonexistent — same own-the-search-results play as the /goal post. Facts verified against the live Claude Code docs (three tabs, Local/Cloud/SSH, Ask-permissions diff, Mac/Windows-only). Leads with an explicit recommendation (start with Desktop, not the terminal) and differentiates from the `installing-claude-code` intro post by going deep on the first-run flow. Featured image + 3 inline screenshots shipped with the post.

### Claude Code vs. Lovable vs. Cursor vs. Bolt: a marketer's decision guide
- **Published:** 2026-05-24
- **Category:** Tips and Techniques
- **File:** `claude-code-vs-lovable-vs-cursor-vs-bolt.md`
- **Target keyword:** `claude code vs lovable vs cursor non-developers`
- **Why:** The only marketer-focused comparison of the four AI builders (every existing one is dev-focused). Bias disclosed upfront, verdict earned: Claude Code owns the recurring/compounding work, the other three own specific jobs. Pricing + feature claims verified 2026-05-24. Post-draft assets still open: matrix screenshot + featured image.

### What I got wrong about Claude Code in my first two months
- **Published:** 2026-05-22
- **Category:** Tips and Techniques
- **File:** `what-i-got-wrong-about-claude-code.md`
- **Target keyword:** `claude code mistakes`
- **Why:** Vulnerability/trust-builder post. Four specific mistakes (throwaway sessions, redundant web research, no skills, typing everything) framed as symptoms of treating Claude Code like a chat instead of a workspace. Soft-CTAs the 7-day email course as the "skip the dumb middle" shortcut.

### The /goal command: how to make Claude Code finish what it starts
- **Published:** 2026-05-13
- **Category:** Tips and Techniques
- **File:** `the-goal-command.md`
- **Target keyword:** `claude code goal command`
- **Why:** /goal shipped in v2.1.139 on 2026-05-11 — Anthropic's docs were dev-flavored, so this was the window to own the search results with a marketer-focused take.

### Can Claude actually edit your Google Docs? Everything marketers need to know
- **Published:** 2026-05-04
- **Category:** Use Cases
- **File:** `can-claude-edit-google-docs.md`
- **Target keyword:** `can claude edit google docs`
- **Why:** Owns the biggest single GSC query cluster (75 variations, ~542 impressions / 14 clicks over 90 days). Pre-draft testing pass against `gws` CLI and the claude.ai Drive connector locked the answers for tables, comments, Sheets, Slides, and the claude.ai read-only ceiling.

### How I built a 14-slide presentation in an hour (without opening Keynote)
- **Published:** 2026-05-12
- **Category:** Use Cases
- **File:** `how-i-built-a-14-slide-presentation-in-an-hour.md`
- **Target keyword:** `ai presentation builder`
- **Featured image:** Hero composite of the deck title slide layered with the one-page PDF takeaway

### The solo marketer's AI stack: how to do the work of 10 people
- **Published:** 2026-05-11
- **Category:** Tips and Techniques
- **File:** `solo-marketer-ai-stack.md`
- **Featured image:** Layered stack infographic (`infographics/solo-marketer-stack.html` for source)

### Build your first landing page with Claude Code in 20 minutes
- **Published:** 2026-04-27
- **Category:** Use Cases
- **File:** `build-a-landing-page-with-claude-code.md`
- **Live example:** [goodicemap.com](https://goodicemap.com)

### What vibe marketing actually means: turning Claude Code into a one-person marketing team
- **Published:** 2026-04-21
- **Category:** Concepts
- **File:** `what-is-vibe-marketing.md`

### I never miss a competitor update anymore. Here's the 20-minute automation that fixed it.
- **Published:** 2026-04-16
- **Category:** Use Cases
- **File:** `competitor-changelog-digest-automation.md`

### The command that shows you how you actually use Claude Code
- **Published:** 2026-04-13
- **Category:** Tips and Techniques
- **File:** `claude-code-insights-command.md`

### The blog posts you forgot about are losing you traffic
- **Published:** 2026-03-31
- **Category:** Use Cases
- **File:** `keep-articles-up-to-date-with-claude-code.mdx`
- **Lead magnet:** `fact-check` skill (email-gated .zip download via Kit)

### Claude Code vs. Claude Cowork: what's the difference (and which should you use)?
- **Published:** 2026-03-25
- **Category:** Tips and Techniques
- **File:** `claude-code-vs-claude-cowork.md`

### Claude Code is my new WordPress editor
- **Published:** 2026-03-23
- **Category:** Use Cases
- **File:** `hooking-claude-code-up-to-wordpress.md`

### How I edit Google Docs without leaving Claude Code
- **Published:** 2026-03-22
- **Category:** Use Cases
- **File:** `hooking-claude-code-up-to-google-docs.md`

### What --dangerously-skip-permissions actually does (and when you'd want to use it)
- **Published:** 2026-03-19
- **Category:** Tips and Techniques
- **File:** `what-is-dangerously-skip-permissions.md`

### 15 Claude Code questions every marketer is afraid to ask
- **Published:** 2026-03-12
- **Category:** Getting Started
- **File:** `non-technical-marketers-claude-code-faq.md`

### The CLAUDE.md masterclass
- **Published:** 2026-03-10
- **Category:** Tips and Techniques
- **File:** `the-claude-md-masterclass.md`

### The $20 vs. $100 question: is Claude Max actually worth it for marketers?
- **Published:** 2026-02-27
- **Category:** Tips and Techniques
- **File:** `is-claude-max-worth-it-for-marketers.md`

### Claude Code vs. ChatGPT for marketing: when to use which (and why I use both)
- **Published:** 2026-02-26
- **Category:** Tips and Techniques
- **File:** `claude-code-vs-chatgpt-for-marketing.md`

### Vibe coding for marketers: what it actually means (and what it doesn't)
- **Published:** 2026-02-25
- **Category:** Concepts
- **File:** `vibe-coding-for-marketers.md`

### You're already 'creating content' (you just don't know it yet)
- **Published:** 2026-02-21
- **Category:** Use Cases
- **File:** `repurpose-call-transcripts-social-media.md`

### Why I stopped using AI image generators for infographics
- **Published:** 2026-02-17
- **Category:** Use Cases
- **File:** `why-i-stopped-using-ai-image-generators-for-infographics.md`

### How I used Claude Code to build a brand guide without opening a design tool
- **Published:** 2026-02-05
- **Category:** Use Cases
- **File:** `create-a-brand-guide-with-devtools-mcp.md`

### How I automated my email marketing with a Claude Code skill
- **Published:** 2026-02-03
- **Category:** Use Cases
- **File:** `automate-kit-broadcasts-with-skills.md`

### How to turn one piece of content into 10 social posts with Claude Code
- **Published:** 2026-01-29
- **Category:** Use Cases
- **File:** `turn-one-piece-of-content-into-ten-social-posts.md`

### Getting better Claude Code output without prompt engineering
- **Published:** 2026-01-27
- **Category:** Tips and Techniques
- **File:** `getting-better-output-without-prompt-engineering.md`

### What are skills and how do they work?
- **Published:** 2026-01-22
- **Category:** Getting Started
- **File:** `what-are-skills.md`

### Giving Claude Code superpowers with MCP servers
- **Published:** 2026-01-20
- **Category:** Getting Started
- **File:** `giving-claude-code-superpowers-with-mcp-servers.md`

### 4 Claude Code Tricks I Wish I'd Known Sooner
- **Published:** 2026-01-19
- **Category:** Getting Started
- **File:** `claude-code-tricks-i-wish-id-known-sooner.md`

### Using Obsidian as Claude Code's second brain
- **Published:** 2026-01-16
- **Category:** Getting Started, Use Cases
- **File:** `obsidian-as-your-second-brain.md`

### How I use Claude Code to research competitors
- **Published:** 2026-01-14
- **Category:** Use Cases
- **File:** `deep-research-competitor-analysis.md`

### Your first 5 minutes with Claude Code
- **Published:** 2026-01-12
- **Category:** Getting Started
- **File:** `installing-claude-code.md`

### Don't Be Scared of the Terminal
- **Published:** 2026-01-06
- **Category:** Getting Started
- **File:** `dont-be-scared-of-the-terminal.md`
