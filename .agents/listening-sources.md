# Listening Sources — Claude Code for Marketers

Claude reads this when running the [listening workflow](.claude/skills/social/references/listening.md). Keep it short and current — stale sources are worse than none.

**Active platforms:** X / Twitter, LinkedIn, Reddit. (Hacker News + Bluesky are optional secondary — run them on demand, not daily.)

---

## What We're Listening For

**Brand / product:** Claude Code for Marketers (claudecodeformarketers.com)
**Category:** Teaching non-technical marketers to use Claude Code / AI tooling
**Goal:** Two-part blend —
1. **Help the ICP** — surface intimidated or curious marketers asking real questions and be the genuinely useful, non-condescending voice in the thread.
2. **Drive traffic / signups** — when a relevant blog post answers the question, point to it (after answering first, never lead with the link).

## ICP (for scoring)

Used by the [scoring rubric](.claude/skills/social/references/listening.md#scoring-rubric) to judge ICP fit.

- **Role:** Marketers — content, growth, marketing ops, brand, plus solo founders doing their own marketing
- **Technical level:** Zero to low. Intimidated by terminals, CLIs, "developer" tools. Curious about AI but feels it's not "for them."
- **Company stage:** Anything from solopreneur to mid-market marketing teams
- **Signals they're a fit:** "I'm not technical but…", asking how marketers use AI beyond ChatGPT, experimenting with AI workflows, anxious about AI replacing marketing roles, curious about Claude Code / agents / MCP but unsure if it's for non-coders

---

## Target Accounts

Engage with every relevant post from these. Cap at 20–50.

### X / Twitter (browser-driven)

*Claude Code / Anthropic ecosystem (the "insider" end):*
- @bcherny — Boris Cherny, creator of Claude Code (Anthropic)
- @_catwu — Cat Wu, Head of Product, Claude Code (Anthropic)
- @alexalbert__ — Alex Albert, Claude relations / devrel (Anthropic)
- @simonw — Simon Willison, most-cited practical LLM writer
- @swyx — AI engineering, "AI for the rest of us"
- @trq212

*AI-for-marketing creators (the intersection — best ICP fit):*
- @cspenn — Christopher S. Penn, AI + marketing
- @amandanat — Amanda Natividad, SparkToro
- @KateBour — Katelyn Bourgoin, buyer psychology
- @thatroblennon — Rob Lennon, AI content for non-devs
- @danshipper — Dan Shipper, CEO of Every; AI workflows
- @kieranklaassen — Kieran Klaassen, GM of Cora @ Every; AI tooling
- @JJEnglert — JJ Englert

*Marketing operators (reach / relationship end):*
- @coreyhainesco — Corey Haines — **priority peer**, building marketing-skills-for-Claude-Code in our exact lane; engage every post
- @chrislema — Chris Lema, marketing / membership
- @davegerhardt — Dave Gerhardt, B2B marketing (Exit Five)
- @randfish — Rand Fishkin, SparkToro
- @kippbodnar — Kipp Bodnar, Marketing Against the Grain (HubSpot)
- @searchbrat — Kieran Flanagan, Marketing Against the Grain (HubSpot)

> **X activity notes (from 2026-06-18 sweep):**
> - *Most active & on-topic:* @_catwu, @trq212, @cspenn, @coreyhainesco, @KateBour, @JJEnglert, @simonw, @randfish — pull these every run.
> - *Low-frequency / posts elsewhere:* @davegerhardt (LinkedIn-first), @kippbodnar (MATG podcast), @thatroblennon (stepped back from content), @swyx (AI but off our lane), @kieranklaassen (mostly personal/jokey).
> - *⚠️ Move toward do-not-engage on X:* @searchbrat (Kieran Flanagan) posts mostly Irish politics on X — engage via MATG/LinkedIn instead, not here.

### LinkedIn (browser-driven — use dev-browser, logged-in session)
> Use the `/recent-activity/all/` URL (e.g. `linkedin.com/in/HANDLE/recent-activity/all/`) to skip the algorithm.
- Emily Kramer — `linkedin.com/in/emilykramer` (MKT1, B2B marketing) — **highest-frequency LinkedIn target**, posts ~daily, strong engagement
- Travis Hurst — `linkedin.com/in/travisjhurst` — high relevance (AI-native teams, non-technical leaders learning Claude Code) but posts ~monthly; engage when fresh
- Tom Orbach — `linkedin.com/in/tomorbach` (Marketing Ideas newsletter) — near-exact niche; inactive on X, lives here + Substack

### Reddit (active community members worth following)
- u/[username]

---

## Keywords (intent signals)

Run across Reddit (and optionally HN/Bluesky) on the daily loop. Quote multi-word phrases.

### Bucket 1 — Intimidation / "I'm not technical" (our sweet spot)
- `"not a developer"` + marketing context
- `"scared of the terminal"` / `"command line"` intimidation
- `"can non-coders use Claude Code"`
- `"is Claude Code only for developers"`
- `"AI replace marketers"` (anxiety → empowerment angle)

### Bucket 2 — Claude Code curiosity & confusion
- `"Claude Code"`
- `"Claude Code for marketing"`
- `"Claude Code for non-developers"`
- `"vibe marketing"`
- `"vibe coding"`
- `"MCP servers"` / `"Claude skills"` (in a non-dev context)

### Bucket 3 — AI-marketing workflows & switching signals
- `"how do marketers use AI"`
- `"AI beyond ChatGPT"`
- `"AI marketing workflow"`
- `"alternative to Jasper"` / `"alternative to Copy.ai"`
- `"frustrated with"` + AI writing tool

### Brand mentions
- `"Claude Code for Marketers"`
- `"claudecodeformarketers"`
- `"Keanan Koppenhaver"` / `"kkoppenhaver"`

---

## Subreddits

Pulled via Reddit JSON API on the daily loop.

- r/marketing
- r/digital_marketing
- r/ContentMarketing
- r/ClaudeAI
- r/artificial
- r/SaaS
- r/Entrepreneur

> Read each sub's rules before commenting — several (r/marketing, r/SaaS) ban self-promotion. Answer first, earn karma, link sparingly.
>
> **⚠️ Reddit is network-blocked from the automated environment** (403 / "blocked by network security" — affects both curl and headless browser, API and web). To run the Reddit leg of the loop, either (a) run the curl recipes from Keanan's own machine/residential IP, or (b) register a Reddit OAuth app for authenticated API access. Bluesky and HN behave the same way / fine respectively (HN works; Bluesky blocked).

---

## Saved Searches (browser-driven)

### LinkedIn
- Claude Code hashtag — `https://linkedin.com/feed/hashtag/claudecode/`
- AI marketing hashtag — `https://linkedin.com/feed/hashtag/aimarketing/`

### X advanced search (use `f=live` for chronological)
- Claude Code + marketing — `https://x.com/search?q=%22claude%20code%22%20marketing&f=live`
- Non-technical curiosity — `https://x.com/search?q=%22claude%20code%22%20(%22not%20a%20developer%22%20OR%20%22non-technical%22)&f=live`

---

## Do Not Engage

- Bad-faith AI-doomer dunking threads (no winning these)
- Pure self-promo threads where comments get no reach
- Anything political or off-mission

---

## Notes for Claude

- Primary goal blend: **help ICP first, drive traffic second.** Always add real value before any link. Never lead with a URL.
- Output "today's top 10" in the format in [listening.md](.claude/skills/social/references/listening.md#the-daily-triage-loop).
- LinkedIn & X: dev-browser with the persistent logged-in session.
- Reddit: curl recipes / JSON API.
- Default lookback: 24h.
- Always output drafts for review — never auto-post.
