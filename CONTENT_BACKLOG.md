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

### The /goal command: how to make Claude Code finish what it starts
- **channel:** ccfm
- **status:**  drafted
- **next:**    review draft, then publish
- **est:**     0.5h
- **due:**
- **Brief:** `briefs/the-goal-command.md` (includes pre-draft test results)
- **Draft:** `src/content/blog/the-goal-command.md` (~2,100 words, `draft: true`)
- **Priority:** Medium-High (timely — shipped in v2.1.139, no marketer-focused coverage yet)
- **Category:** Tips and Techniques
- **Target keyword:** *claude code goal command*
- **Secondary keywords:** *claude code /goal*, *claude code autonomous tasks*, *claude code keep working until done*
- **What it is (one-liner):** `/goal "<condition>"` sets a completion condition. After each turn, a small fast model checks whether the condition is met. If not, Claude starts another turn on its own. The goal clears when the condition holds (or when you run `/goal clear`).
- **How it differs from related commands:**
  - `/goal` — fires after every turn, stops when an evaluator confirms the condition
  - `/loop` — fires on a time interval, stops when you stop it (already covered in scheduled work context)
  - Auto mode — approves tool calls within a turn but doesn't start new ones
  - Stop hooks — same mechanism as `/goal` but lives in settings and applies to every session
- **Angle:** Most marketers using Claude Code stop a task too early because they're babysitting it. `/goal` lets you walk away from work with a verifiable end state. Frame it as "the difference between 'finish this when you can' and 'don't come back until it's done.'"
- **Key teaching point:** A good goal condition is something Claude's own output can demonstrate. The evaluator only reads the transcript — it doesn't run commands or read files independently. So conditions need to reference what Claude has surfaced: a test result, a file count, an empty queue, a clean diff.
- **Marketing-specific goal examples to include:**
  - "Don't stop until every blog post in `src/content/blog/` has a `target_keyword` field, or stop after 30 turns" (we literally just did this manually)
  - "Don't stop until all images referenced in this post have descriptive alt text"
  - "Don't stop until all internal links to `/old-slug` have been updated to `/new-slug` site-wide"
  - "Don't stop until 10 LinkedIn post drafts are written and saved to `drafts/linkedin/`"
  - "Don't stop until the competitor research doc has pricing, positioning, and target ICP filled in for all 8 companies in `competitors.csv`"
  - "Don't stop until every post in the Published section of `CONTENT_BACKLOG.md` exists as a file in `src/content/blog/` and vice versa"
  - "Don't stop until `npm run build` exits 0"
- **Practical tips to cover:**
  - Always include a turn or time cap (`or stop after N turns`) — runaway goals burn tokens
  - State the proof: "verify by running X" or "shown in `git status`"
  - Add constraints that matter ("without modifying any test files")
  - `/goal` with no argument shows status, turns spent, tokens spent, and the evaluator's most recent reason
  - Resumes with `--continue` keep the condition but reset counters
  - Works in headless mode: `claude -p "/goal ..."` runs the whole loop in one invocation
- **Honest boundary:** Not a magic finisher. If the work is genuinely ambiguous or requires judgment you haven't put in the condition, the evaluator will either keep going forever or call it done prematurely. Best for work where "done" is observable.
- **Why now:** Shipped in v2.1.139, so it's brand new (May 2026). Anthropic's docs are technical/dev-flavored ("until every call site compiles"). Zero marketer-focused coverage. We can own the search results before competitors catch up.
- **Sources to reference:** Official docs (code.claude.com/docs/en/goal), v2.1.139 changelog.
- **Cross-link targets:** The CLAUDE.md masterclass, `--dangerously-skip-permissions` post, insights command post.

---

## In Progress

*Nothing here right now*

---

## Drafts Ready for Review

### The /goal command: how to make Claude Code finish what it starts
- **channel:** ccfm
- **status:**  drafted
- **next:**    review draft, then publish
- **est:**     0.5h
- **Brief:** `briefs/the-goal-command.md`
- **Draft:** `src/content/blog/the-goal-command.md`
- **Length:** ~2,100 words (target was 1,800–2,200)
- **Why now:** /goal shipped 2 days ago (v2.1.139, 2026-05-11). Anthropic's docs are dev-flavored. Window to own the search results is open.

---

## Status Legend (blog content)

- `idea` — Concept only, no outline yet
- `briefed` — Outline / brief exists, ready to draft
- `drafting` — Actively writing
- `drafted` — Draft complete, needs review
- `ready` — Approved, ready to publish
- `published` — Live on the blog (moved to [PUBLISHED.md](./PUBLISHED.md))
