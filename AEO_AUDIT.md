# AEO / GEO content audit

_Audit of all 34 blog posts + site infrastructure against Answer Engine Optimization (AEO) / Generative Engine Optimization (GEO) best practices. Generated 2026-06-04._

## What AEO is (and why we're already halfway there)

AEO/GEO is an extension of SEO, not a replacement. Google's own guidance frames its AI features as rooted in the same core search systems, so good technical content already does a lot of the work. The *new* layer is how AI tools extract, summarize, and cite content. Six things matter more now:

1. **Clear summaries near the top** — an answer-first paragraph that directly answers the post's core question in the first ~150 words.
2. **Self-contained sections** — H2/H3 sections that make sense extracted on their own.
3. **Comparison tables** — structured option-vs-option data, especially on "X vs Y" posts.
4. **FAQs and decision frameworks** — explicit Q&A and "use X when…" guidance.
5. **Specific numbers and dates** — concrete figures over vague claims.
6. **Real examples from people who tested the thing** — first-person accounts with observed results.

## The headline

The two criteria that depend on *substance* — **specific numbers/dates** and **real tested examples** — are a near-universal strength. Almost every post has first-person "I actually ran this" accounts with concrete figures. That's the hard part, and it's already done.

The gaps are **structural and additive** — bolt-ons that don't touch the voice:

| AEO criterion | Status across 34 posts |
|---|---|
| Real tested examples | ✅ Universal strength |
| Specific numbers/dates | ✅ Strong (esp. case studies + pricing posts) |
| Self-contained sections | 🟡 Mostly good |
| Clear summary near top | ❌ ~20+ posts bury the answer under an anecdote |
| Comparison tables | ❌ Only ~4 posts have one — including vs-posts that need them |
| FAQ sections + schema | ❌ Essentially zero, and **no FAQ schema anywhere** |

---

## Infrastructure findings (build once, applies sitewide)

These live in `src/components/` and `src/layouts/BlogPost.astro`, not in the posts.

| # | Finding | Status | Recommendation |
|---|---|---|---|
| 1 | **FAQPage JSON-LD schema** | ❌ Does not exist | Build a `FAQSchema.astro` component. `non-technical-marketers-claude-code-faq.md` is already structured for it (15 H3 questions + prose answers). Single biggest rich-result win on the site. |
| 2 | **`HowToSchema.astro`** | ⚠️ Exists, used by **zero** posts | Wire it into how-to/walkthrough posts (install, landing page, WordPress, Google Docs, brand guide). |
| 3 | **Article schema** | ✅ Wired in `SEO.astro` | Good — headline, description, image, dates, author, publisher, `mainEntityOfPage` all present. |
| 4 | **Organization schema** | ✅ `OrganizationSchema.astro` | Good (logo wired). |
| 5 | **BreadcrumbList schema** | ✅ `Breadcrumbs.astro` | Good. |
| 6 | **Comparison-table styling** | ✅ `BlogPost.astro` | Tables already styled (accent header border, zebra striping, mobile sizing). Adding markdown tables to posts requires no CSS work. |
| 7 | **TL;DR / answer-box convention** | 🟡 Exists in 2 posts only | A bolded **"Short on time? Here's my recommendation:"** block already appears in `claude-code-desktop-walkthrough.md` and `claude-code-skills-for-marketers.md`. Standardize this as the reusable answer-first pattern (optionally a styled `<aside>` or component) and replicate above the anecdote on every post missing a top summary. |

---

## Per-post scorecard (all 34)

Legend: ✅ present · 🟡 partial · ❌ absent. Columns map to the 6 criteria: **Sum**mary near top · **Sec**tions self-contained · **Tbl** comparison table · **FAQ**/decision framework · **Num**bers/dates · **Ex** real tested examples.

| Post | Type | Sum | Sec | Tbl | FAQ | Num | Ex |
|---|---|:--:|:--:|:--:|:--:|:--:|:--:|
| automate-kit-broadcasts-with-skills | how-to | ❌ | 🟡 | ❌ | ❌ | 🟡 | ✅ |
| build-a-landing-page-with-claude-code | how-to | 🟡 | 🟡 | ❌ | 🟡 | ✅ | ✅ |
| can-claude-edit-google-docs | reference/FAQ | ✅ | ✅ | ❌ | ✅ | 🟡 | ✅ |
| claude-code-desktop-walkthrough | how-to | ✅ | 🟡 | ❌ | 🟡 | ✅ | ✅ |
| claude-code-insights-command | concept | ❌ | 🟡 | ❌ | ❌ | ✅ | ✅ |
| claude-code-skills-for-marketers | listicle | ✅ | ✅ | ❌ | 🟡 | 🟡 | ✅ |
| claude-code-tricks-i-wish-id-known-sooner | listicle | ❌ | ✅ | ❌ | 🟡 | 🟡 | ✅ |
| claude-code-vs-chatgpt-for-marketing | vs | 🟡 | ✅ | ✅ | ✅ | 🟡 | ✅ |
| claude-code-vs-claude-cowork | vs | ✅ | ✅ | ✅ | 🟡 | ✅ | ✅ |
| claude-code-vs-lovable-vs-cursor-vs-bolt | vs (4-way) | 🟡 | ✅ | ✅ | ✅ | ✅ | 🟡 |
| competitor-changelog-digest-automation | how-to | ❌ | ✅ | ❌ | 🟡 | ✅ | ✅ |
| create-a-brand-guide-with-devtools-mcp | how-to | ❌ | 🟡 | ❌ | 🟡 | ✅ | ✅ |
| deep-research-competitor-analysis | how-to | 🟡 | ✅ | ❌ | ❌ | 🟡 | ✅ |
| dont-be-scared-of-the-terminal | concept | 🟡 | ✅ | ❌ | 🟡 | ❌ | 🟡 |
| getting-better-output-without-prompt-engineering | tips | 🟡 | ✅ | ❌ | ✅ | ❌ | ✅ |
| giving-claude-code-superpowers-with-mcp-servers | concept/how-to | 🟡 | ✅ | 🟡 | 🟡 | ❌ | ✅ |
| hooking-claude-code-up-to-google-docs | how-to | ❌ | ✅ | 🟡 | 🟡 | 🟡 | ✅ |
| hooking-claude-code-up-to-wordpress | how-to | ❌ | ✅ | ❌ | 🟡 | ✅ | ✅ |
| how-i-built-a-14-slide-presentation-in-an-hour | how-to | ❌ | 🟡 | ❌ | 🟡 | ✅ | ✅ |
| installing-claude-code | how-to | 🟡 | ✅ | ❌ | 🟡 | 🟡 | 🟡 |
| is-claude-max-worth-it-for-marketers | vs/decision | 🟡 | ✅ | ❌ | ✅ | ✅ | ✅ |
| non-technical-marketers-claude-code-faq | FAQ | 🟡 | ✅ | ❌ | ✅ | ✅ | ✅ |
| obsidian-as-your-second-brain | how-to/concept | ❌ | ✅ | ❌ | ❌ | 🟡 | ✅ |
| repurpose-call-transcripts-social-media | how-to | ❌ | 🟡 | ❌ | ❌ | 🟡 | ✅ |
| solo-marketer-ai-stack | concept | 🟡 | ✅ | ❌ | 🟡 | 🟡 | ✅ |
| the-claude-md-masterclass | how-to/guide | ❌ | ✅ | ❌ | 🟡 | 🟡 | ✅ |
| the-goal-command | how-to/feature | 🟡 | ✅ | ❌ | 🟡 | ✅ | ✅ |
| turn-one-piece-of-content-into-ten-social-posts | how-to | 🟡 | ✅ | ❌ | 🟡 | ✅ | ✅ |
| vibe-coding-for-marketers | concept/definition | ✅ | ✅ | ❌ | 🟡 | 🟡 | ✅ |
| what-are-skills | concept/definition | 🟡 | ✅ | ❌ | 🟡 | 🟡 | ✅ |
| what-i-got-wrong-about-claude-code | listicle/mindset | 🟡 | ✅ | ❌ | 🟡 | 🟡 | ✅ |
| what-is-dangerously-skip-permissions | concept/definition | ❌ | ✅ | ❌ | ✅ | 🟡 | ✅ |
| what-is-vibe-marketing | concept/definition | ❌ | ✅ | ❌ | 🟡 | 🟡 | ✅ |
| why-i-stopped-using-ai-image-generators-for-infographics | vs | 🟡 | ✅ | ❌ | ✅ | 🟡 | ✅ |

---

## Prioritized action plan

### Tier 1 — Infrastructure (highest leverage, build once)

1. **Build `FAQSchema.astro`** and wire it into `non-technical-marketers-claude-code-faq.md` (already schema-ready). Then reuse it on every post that gains an FAQ section.
2. **Activate `HowToSchema.astro`** on the how-to posts that don't have it.
3. **Standardize the TL;DR answer box** (replicate the existing "Short on time?" pattern, optionally as a styled component) so rollout is consistent.

### Tier 2 — Comparison tables on posts built to compare

These are the most extractable assets for an AI answer and the most glaring gaps:

- **why-i-stopped-using-ai-image-generators** — vs-post with no table. Add: image-gen vs Claude Code HTML across text accuracy, layout control, iteration cost, brand match, export, maintainability.
- **is-claude-max-worth-it** — Pro ($20) vs Max ($100) vs $200 across price, usage multiplier, features, best-for.
- **can-claude-edit-google-docs** — one capability matrix (rows: edit docs / read / create / edit tables / see comments / edit Sheets / Slides; columns: Claude Code / Cowork / claude.ai) replaces the 3-way breakdown repeated in prose under every question.
- **non-technical-marketers-faq** — tables for Q5/Q6 (plan + API pricing) and Q14 (Claude Code vs Cursor/Lovable/Bolt).
- **giving-claude-code-superpowers-with-mcp-servers** — MCP vs API/Zapier (who drives, setup, flexibility, example).
- **claude-code-vs-chatgpt** — add an attribute table (output type, persistence, voice control, runs where, best-for) alongside the existing task table.

### Tier 3 — TL;DR boxes on definition / concept posts (prime "what is X" targets)

These bury the definition past 150 words on exactly the queries AI engines answer with a definition:

- **what-is-vibe-marketing** — biggest miss; definition currently waits until the first H2.
- **what-is-dangerously-skip-permissions** — definition arrives at the third H2.
- **what-are-skills** — definition waits until first H2 (analogy first).
- **vibe-coding-for-marketers** — has the definition but not in a first-150-words box.
- **solo-marketer-ai-stack** — define the 4 layers up top (+ add a Layer / role / tools / needs-MCP? table).

### Tier 4 — TL;DR boxes on narrative how-to / case-study posts

Add an answer-first box above the existing anecdote (voice untouched):

automate-kit-broadcasts · competitor-changelog-digest · create-a-brand-guide · hooking-claude-code-up-to-google-docs · hooking-claude-code-up-to-wordpress · how-i-built-a-14-slide-presentation · obsidian-as-your-second-brain · repurpose-call-transcripts · the-claude-md-masterclass · claude-code-insights-command · claude-code-tricks · deep-research-competitor-analysis · build-a-landing-page (label the existing 21:42 result as a TL;DR).

### Tier 5 — FAQ sections sitewide

Most posts already answer FAQ-style questions in scattered prose. Promote them into a labeled Q&A block at the end (then attach FAQ schema). High-frequency question patterns the posts already address:

- "Do I need to pay / which plan?" (install, desktop, changelog, pricing posts)
- "Is it safe / will it run commands without asking?" (terminal, skip-permissions, MCP, tricks)
- "Do I need to code / can a non-technical person do this?" (landing page, vibe coding, FAQ)
- Integration-specific troubleshooting (WordPress "why don't my abilities show up?", Google Docs "does formatting survive?", "GWS CLI vs Cowork connector?")

---

## Per-post top fixes (detail)

The 1–2 highest-impact fixes for each post, from the audit.

| Post | Top fixes |
|---|---|
| automate-kit-broadcasts-with-skills | TL;DR answering "can you automate Kit broadcasts with a skill?" + 8→4 step result; convert before/after workflows into one side-by-side table. |
| build-a-landing-page-with-claude-code | Label a TL;DR ("real on-brand page deployed in 21:42, one prompt + one iteration") incl. the caveat (no SEO meta/caching OOTB); add end FAQ (how long, need to code, launch-ready, what's missing). |
| can-claude-edit-google-docs | Add capability matrix table near top; tighten intro to a one-line bolded TL;DR. |
| claude-code-desktop-walkthrough | Add Desktop vs terminal/CLI table (serves "claude code desktop vs cli" secondary keyword); add FAQ (paid plan? less powerful? Linux? Node?). |
| claude-code-insights-command | TL;DR defining `/insights` (runs locally, ~50 sessions/30 days, HTML report); FAQ (what it does, data privacy, history needed, cadence). |
| claude-code-skills-for-marketers | Summary table (skill / what it does / source / install command); brief FAQ (how to install, free?, work outside Claude Code?, best starter). |
| claude-code-tricks-i-wish-id-known-sooner | TL;DR listing the 4 tricks up front; one-line "what this does" under each H2; optional FAQ (is YOLO safe?, how to add images?). |
| claude-code-vs-chatgpt-for-marketing | Labeled TL;DR with the both/and verdict; add attribute table + short FAQ (can ChatGPT build files?, is Codex the same?, need both?). |
| claude-code-vs-claude-cowork | Lift one-line TL;DR above the anecdote; convert "misconceptions that need to die" into a labeled FAQ. |
| claude-code-vs-lovable-vs-cursor-vs-bolt | Answer-first TL;DR with verdict + one-liner per tool above the bias intro; FAQ (cheapest?, best for non-devs?, switch later?). |
| competitor-changelog-digest-automation | TL;DR (20-min setup, /schedule + URL + calibrate → 9 AM Slack, needs paid plan); turn surface/skip into a 2-col table; FAQ (paid plan?, how many competitors?, why noisy?). |
| create-a-brand-guide-with-devtools-mcp | Answer-first TL;DR (install DevTools MCP, point at URL, HTML brand guide <10 min); FAQ (need design/CSS skills?, competitor's site?, MD vs HTML output?). |
| deep-research-competitor-analysis | TL;DR of the method (~15 min); FAQ (vs Claude.ai deep research?, vs ChatGPT?, how long?). |
| dont-be-scared-of-the-terminal | FAQ (can I break my computer?, must I learn commands?, will Claude run commands without asking?); convert command bullets to a "command / what it does" table. |
| getting-better-output-without-prompt-engineering | TL;DR surfacing the exact magic phrase; formalize the two objection sections into a labeled FAQ (+ "works outside Claude Code?", "won't this be slower?"). |
| giving-claude-code-superpowers-with-mcp-servers | Definition-first TL;DR; convert MCP-vs-API/Zapier contrast into a table; FAQ (safe?, need to code?, which MCP first?). |
| hooking-claude-code-up-to-google-docs | TL;DR (install GWS CLI, auth, pull→edit→push, ~10 min); direct-edit-vs-pull-down table; FAQ (edit in place?, formatting survives?, GWS CLI vs Cowork connector?). |
| hooking-claude-code-up-to-wordpress | TL;DR (MCP Adapter plugin → app password → remote proxy → register abilities, ~5 min); FAQ (write a plugin?, abilities not showing?, upload featured images?, local WP?). |
| how-i-built-a-14-slide-presentation-in-an-hour | TL;DR answering "how do you build a presentation with AI?" (HTML + frontend-design skill, ~1 hr, exports to PDF); "when HTML decks work vs Slides/Docs" table. |
| installing-claude-code | Terminal-vs-Desktop table; end FAQ (need to pay?, Mac vs Windows command?, "command not found" / auth didn't open browser?). |
| is-claude-max-worth-it-for-marketers | Pro vs Max vs $200 table; TL;DR ("Pro for most; upgrade to Max only when you regularly hit limits"). |
| non-technical-marketers-claude-code-faq | **Add FAQPage JSON-LD** (already structured for it); add comparison tables for Q5/Q6 (pricing) and Q14 (vs Cursor/Lovable/Bolt). |
| obsidian-as-your-second-brain | TL;DR (Obsidian = local Markdown vault Claude reads/writes directly, no API → persistent memory); FAQ (need Obsidian MCP?, works with Notion?, will Claude overwrite notes?). |
| repurpose-call-transcripts-social-media | TL;DR of the 5-step pipeline (~15 min); FAQ (which transcription tool?, need Granola specifically?, no Typefully?, copying my exact words?). |
| solo-marketer-ai-stack | Stack-summary table (Layer / what it does / example tools / needs an MCP?); TL;DR defining the 4 layers. |
| the-claude-md-masterclass | TL;DR defining CLAUDE.md (plain-English file Claude auto-reads each session); "what goes in a CLAUDE.md" table (4 sections × purpose × example). |
| the-goal-command | Table contrasting /goal vs /loop vs stop hooks vs auto mode; TL;DR defining /goal + the "describe what done looks like" shift. |
| turn-one-piece-of-content-into-ten-social-posts | TL;DR with the 7-step list + 30-min figure; FAQ (need Typefully?, no voice profile?, works for podcasts?). |
| vibe-coding-for-marketers | Duplicate the one-sentence definition into a first-150-words TL;DR; "vibe coding is / is not" (or marketer-vs-developer) table. |
| what-are-skills | TL;DR definition above the analogy; "skills vs prompting" table (persistence, files, auto-invocation, actions). |
| what-i-got-wrong-about-claude-code | TL;DR listing the 4 mistakes + the workspace-not-chat thesis; "chat thinking vs workspace thinking" table. |
| what-is-dangerously-skip-permissions | TL;DR/definition in first 150 words + the "only when you've tested the workflow" guidance; table of the 3 permission modes (ask every time / allowlist / skip all) with safety + best-use columns. |
| what-is-vibe-marketing | TL;DR definition box above the anecdote (biggest single miss); "using AI vs vibe marketing" table. |
| why-i-stopped-using-ai-image-generators-for-infographics | Head-to-head table (image-gen vs HTML across text accuracy, layout control, iteration cost, brand match, export, maintainability); answer-first TL;DR with the verdict. |

---

## Notes on voice

Every fix above is **additive**. The blog's narrative voice (anecdote-first openings, first-person "I tested this") is an AEO *asset* — it's exactly the "real examples from people who tested the thing" criterion. Nothing here strips voice:

- TL;DR boxes go **above** the existing anecdote, not in place of it.
- FAQ sections go **after** the body.
- Tables consolidate comparisons currently trapped in prose.
- Section context gets restated, not rewritten.
