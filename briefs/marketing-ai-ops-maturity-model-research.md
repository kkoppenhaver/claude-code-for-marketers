# Research: The Marketing AI Ops Ladder (pillar post)

**Framework name (decided 2026-07-18):** The Marketing AI Ops Ladder
- Rung 1 — Personal wins (individuals using Claude Code ad hoc)
- Rung 2 — Reusable tools (slash commands, brand files, artifacts)
- Rung 3 — The shared playbook (team CLAUDE.md, skills, conventions)
- Rung 4 — Supervised autopilot (scheduled agents, human-gated)
- Rung 5 — The compounding horizon (self-improving systems — explicitly aspirational)

**Date:** 2026-07-18
**Origin:** Sid Suri (Slack) — just took over an AI Ops role for marketing, asked "what does great look like / what are the best marketing teams doing, I need to create a vision."
**Angle decided:** Named, branded maturity-model framework published as a pillar post. Audience: marketing leaders who own AI Ops. Claude Code lens, examples drawn from agentic AI marketing ops broadly. Lower levels evidence-backed; top level explicitly labeled aspirational.

Research method: deep-research workflow — 5 search angles, 21 sources fetched, 103 claims extracted, top 25 adversarially verified (3-vote panels). 24 confirmed, 1 refuted.

---

## Headline takeaways (what reshapes the gradient)

1. **The gradient measures system maturity, not team size.** The single best-documented Claude Code marketing example — Anthropic's own growth marketing "team of one," Austin Lau — spans the *entire* gradient solo: custom slash commands, a Figma plugin, multi-sub-agent ad pipelines, and a rudimentary self-improving memory system. An individual can be at level 4 while a 50-person team sits at level 1.
2. **Most teams are at the bottom, and that's the hook.** McKinsey: 88% of orgs use AI somewhere, but nearly two-thirds haven't begun scaling it, and in any single function no more than 10% are scaling agents. Being at rung 3+ already puts a team in a small minority.
3. **What separates leaders is workflow redesign, not tool sophistication.** McKinsey's "AI high performers" (~6% of orgs) are ~3x more likely to have fundamentally redesigned workflows. Deloitte's model tops out at process/org redesign, not technical autonomy. Strong support for making "redesigned workflows" the axis of the upper levels.
4. **The middle rung (team-shared skills/conventions) has the thinnest *verified* evidence.** The one claim about Anthropic packaging shared brand-voice Skills was refuted in verification. Unverified practitioner sources (RSL/A, De Jesus) do document CLAUDE.md conventions and skill libraries — cite as practitioner accounts.
5. **The top rung is real but hype-contaminated.** Scheduled Claude agents and an agents-building-agents skill are shipped product; but Gartner predicts >40% of agentic AI projects canceled by end-2027 and estimates only ~130 of thousands of "agentic AI" vendors are genuinely agentic ("agent washing"). Everywhere "self-improving" is documented, it's human-in-the-loop and rudimentary. Present the top level as aspirational, honestly bounded.

---

## Evidence by proposed maturity level

### Level 1 → 2: Individual use → reusable artifacts

**VERIFIED (3-0), Anthropic self-reported — attribute as "per Anthropic's own account":**

- **Austin Lau, Anthropic growth marketing.** Non-technical ("never written a line of code," "had to Google how to open terminal on Mac"), ran growth marketing solo across paid search, paid social, app stores, email, SEO.
  - Custom `/rsa` slash command: 15 headlines + 4 descriptions per responsive search ad, upload-ready CSV. 30 min → 30 sec per ad.
  - Figma plugin built in 45–60 min: ad creative permutations across aspect ratios, up to 100 variations. ~30 min copy-paste → ~30 sec per batch.
  - Overall: ad copy creation 2 hrs → 15 min; 10x creative output.
  - Sources: https://claude.com/blog/how-anthropic-uses-claude-marketing · https://www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf (June 2025) · https://www.youtube.com/watch?v=Jp83_JMK74o
  - Caveats: first-party vendor content; "team of one" is a mid-2025 snapshot (Lau confirmed on X he carried the role alone ~10 months).

**Practitioner-reported (fetched, NOT adversarially verified — cite as self-reported):**

- **Brandon, Stack & Scale** (https://www.stackandscale.ai/p/the-claude-code-playbook-for-marketers, Mar 2026): 47 marketing automations built solo. Content repurposing: 1 blog post → 6 channel assets in ~15 min (was 4 hrs). Competitor briefs in ~10 min (was 90). Weekly exec report from GA4/HubSpot/Meta CSVs → PowerPoint. Maintains a persistent brand-voice markdown file — the shared-conventions pattern at individual level. Manually triggered, not scheduled.
- **Koka Sexton** (ex-LinkedIn, ex-Slack) (https://kokasexton.com/claude-code-marketing-ops-power-tool/, May 2026): end-to-end content pipeline (research → styled HTML → WordPress publish), ~90-min process in one conversation. Lead ops: pulls 200 Airtable leads, cross-references email activity, scores, flags top 10 in ~4 min. Orchestrates Airtable, Gmail, WordPress, Make.com, Plesk, Slack. NOTE: his "<1% of marketing teams use terminal agents effectively" and "80% of routine tasks agent-handled" stats are internal benchmarks with no methodology — do not cite as data.

### Level 3: Team conventions, skills, repeatable automation

**VERIFIED (3-0):**

- **Lau's agentic Google Ads workflow:** two specialized sub-agents (headlines / descriptions), ingests CSVs of hundreds of ads with performance metrics, flags underperformers, generates hundreds of compliant variations in minutes. (Same Anthropic PDF.) Note: this is architectural sophistication within *one person's* workflow.
- **REFUTED (1-2):** the claim that Anthropic's marketing packages shared brand-voice/product-accuracy Skills. Do not use. This means level 3 (team-shared conventions) is where public verified evidence thins out — the post should say so honestly (it's also an opportunity: readers at level 3 are ahead of the public evidence).

**Practitioner-reported (not verified):**

- **RSL/A, two-person marketing agency** (https://rsla.io/blog/claude-code-marketing-agency-workflow, Mar 2026): one Claude Code agent + 9 MCP integrations (Sanity, Vercel, GoHighLevel, Notion, Google Workspace, GitHub, Gemini API, Stripe), zero custom API code. **CLAUDE.md codifies naming conventions, writing voice, project structure, MCP config, permissions** — the cleanest team-conventions example found. Self-reported: blog posts 1 day → 2–3 hrs; email sequences 4 hrs → 45 min; website features 1 wk w/ freelancer → 1 day; output ~3x YoY at identical headcount; <$200/mo vs. $120K dev hire; 2–3 week learning curve, daily productive use by month 2.

### Level 4: Self-improving systems, scheduled/autonomous agents

**VERIFIED (3-0):**

- **Anthropic's memory system** (same PDF): logs ad-test hypotheses and results, pulls prior results into context for new variations — Anthropic's words: "a self-improving testing framework," explicitly qualified as **"rudimentary."** Keep that word in the post. One person's workflow, no quantified results.
- **Top-rung tooling is shipped, not vapor:** Anthropic's official launch-your-agent skill (https://github.com/anthropics/launch-your-agent) has Claude Code interview the user, build a Claude Managed Agent, grade it against a user-defined definition of done, iterate, generate a NEXT-DIRECTIONS.md roadmap, and put it on a scheduled deployment. Scheduled Claude Managed Agents (cron, pause/resume) in public beta as of June 2026 (https://claude.com/blog/whats-new-in-claude-managed-agents · https://platform.claude.com/docs/en/managed-agents/overview). Caveats: repo self-describes as an educational reference implementation; flow is human-directed — "Claude Code builds agents for you," not agents autonomously spawning agents; beta is on enterprise plans.

**Practitioner-reported (not verified) — the two best frontier examples:**

- **AI Blew My Mind (Substack)** (https://aiblewmymind.substack.com/p/claude-code-content-distribution-ai-agent, Jun 2026): Claude Code agent on a scheduled cloud Routine every 6 hours — ingests articles to a wiki, repurposes for Reddit, scans threads and drafts replies, posts approved LinkedIn content. **Weekly self-tuning loop: every Monday it reads the week's human edits and rewrites its own instructions.** Human-in-the-loop: "Nothing publishes without me" (Slack approval). No quantitative results claimed.
- **Doneyli De Jesus** (https://doneyli.substack.com/p/how-i-automated-my-wifes-content, Mar 2026): 15-agent autonomous content system on Claude Code — 10–12 pieces/week across 4 platforms, 2–3 hrs/week human review. Three-layer stack: CLAUDE.md configs → 24 custom skills (shared voice rules, quality gates) → 15 scheduled agents (launchd + headless Claude Code). **Explicitly argues stage order matters: configuration and skills must precede agents; building agents first was one of his five mistakes.** Producer agents refuse to draft unless a human updated the editorial calendar. ~6 months part-time, 3,000+ files (134 in .claude/), $100/mo Claude Max.

**Adversarial counterweight (VERIFIED 3-0) — Gartner, June 2025** (https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027):
- >40% of agentic AI projects will be canceled by end-2027 (costs, unclear value, risk controls). Forecast built on a webinar poll (n=3,412) — date-stamp it.
- Only ~130 of thousands of vendors marketing "agentic AI" have genuine agentic capability; the rest are "agent washing" (rebranded assistants, RPA, chatbots). No disclosed methodology.
- Analyst Anushree Verma (June 2025): most agentic projects are hype-driven early experiments; many "agentic" use cases don't need agentic implementations.
- Use: warns AI Ops leaders against agent-washing when benchmarking vendors; keeps the top rung credible.

---

## Existing maturity models (to inform and differentiate from)

- **Deloitte (Mar 2026)** (https://www.deloitte.com/us/en/insights/topics/emerging-technologies/ai-maturity-digital-value.html): four levels — (1) basic automation, (2) agent-based processes, (3) process reimagination, (4) organizational redesign. Two personas: "Automators" (levels 1–2, single-agent workflows) vs. "Transformers" (multi-agent + org reimagination), treated as a continuum. Top rungs are process/org redesign, not technical autonomy.
- **McKinsey, State of AI 2025** (https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai): "AI high performers" ≈ 6% of orgs (≥5% EBIT impact attributed to AI); ~3x more likely to have fundamentally redesigned workflows (one of the strongest factors tested); ≥3x more likely to be scaling agents in most functions.
- **Our differentiation:** both are org-abstract, consultant-grade. Ours is practitioner-level and tool-concrete (slash commands, CLAUDE.md, skills, scheduled agents) — the level where an AI Ops lead can actually act this quarter.

## Data & stats for citation

| Stat | Source | Caveat |
|---|---|---|
| 88% of orgs use AI in ≥1 function (up from 78%); nearly two-thirds have NOT begun scaling | McKinsey State of AI (fielded Jun–Jul 2025, n=1,993) | Self-reported, org-wide not marketing-specific |
| 23% scaling an agentic system somewhere; 39% experimenting; ≤10% scaling agents in any single function | McKinsey, same | Same |
| ~6% are "AI high performers"; ~3x more likely to have redesigned workflows | McKinsey, same | Correlation, self-reported EBIT |
| 75% of marketers adopted AI, yet 84% run generic non-personalized campaigns | Salesforce State of Marketing (10th ed., ~4,500 marketers, Feb 2026) | Vendor survey; "adopted AI" is a low bar; a parallel 51% stat suggests wording sensitivity |
| Teams satisfied with customer-data unification: 60% more likely to use AI agents at scale (2-1 vote) | Salesforce, same | Correlational, vendor stake — hedge as "Salesforce's data suggests" |
| 91% of marketers actively using AI (up from 63%); 65% of teams have designated AI roles; frame: "last year adoption, this year operationalization" | Jasper State of AI in Marketing (n=1,400, Benchmarkit) | AI-forward self-selected sample; 65% stat voted 2-1; cite as "per Jasper's survey" |
| >40% agentic projects canceled by end-2027; ~130 genuinely agentic vendors | Gartner (Jun 2025) | Forecast; poll-based; date-stamp |

The Jasper "designated AI roles" stat directly validates the post's target reader (the new marketing AI Ops owner — i.e., Sid).

## Open questions (gaps to be honest about or fill with outreach)

1. No verified, named, non-Anthropic marketing *team* using Claude Code with shared skills/CLAUDE.md at team scale (RSL/A is the closest, unverified, n=2 people). Possible move: interview Sid or other AI Ops leads for firsthand level-3 material — original reporting would differentiate the post.
2. No source breaks out maturity-stage distribution for marketing functions specifically (McKinsey is enterprise-wide).
3. What the marketing AI Ops role actually owns (JDs, reporting lines, budget) — Jasper confirms existence, not scope.
4. No autonomous/scheduled marketing agents demonstrably in production with measured ROI over months — De Jesus and AI Blew My Mind are the closest, both self-reported, both human-gated.

## Framing notes for the draft

- Anchor story: Lau — but flip it: the flagship "marketing team" example is one person, which proves the axis is system maturity, not headcount. A leader's job (Sid's job) is getting a whole team up the same curve one person climbed alone.
- The De Jesus "configuration and skills before agents" mistake is a gift: it independently validates the gradient's *ordering* from practice.
- Everywhere "self-improving" appears, it's human-in-the-loop (approval gates, weekly instruction rewrites from human edits). Frame level 4/5 as supervised autonomy today, true self-improvement as the labeled-aspirational horizon.
- Attribution discipline: Anthropic numbers as "per Anthropic's own account"; practitioner numbers as self-reported; Salesforce/Jasper as vendor surveys. The post gains credibility by hedging where the evidence hedges — that's also on-voice.
