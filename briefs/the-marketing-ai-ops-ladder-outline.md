# Outline: The Marketing AI Ops Ladder (pillar post)

**Companion research:** [marketing-ai-ops-maturity-model-research.md](./marketing-ai-ops-maturity-model-research.md) — all citations and caveats live there; this outline references them by shorthand.

**Decisions locked:**
- Anonymized cold open built on the Slack message ("a friend who just took over AI Ops for marketing")
- Keanan narrates but stays out of the evidence — all examples external
- CTA: EmailSignup with a new post-specific Kit tag (segment AI Ops leaders) + low-key consultation mention if live at publish time
- Rung structure: each rung gets definition → real example(s) → "You're here if..." checklist → "To climb..." action

**Frontmatter plan:**
- `target_keyword`: `ai ops for marketing` (validate against GSC before drafting — check what variants already get impressions)
- `secondary_keywords`: `["marketing ai ops", "ai maturity model for marketing teams"]`
- `description`: TBD at draft time, 150-160 chars, must contain "AI Ops" + "marketing teams"
- Featured image: ladder visual via the HTML→PNG pipeline (no crop marks). Also consider an inline 5-rung diagram — this is the shareable asset.

**Title candidates** (pick at draft time):
1. The Marketing AI Ops Ladder: what the best marketing teams actually do with AI
2. AI Ops for marketing: a ladder for figuring out where your team stands
3. What does "great" look like for marketing teams using AI? A field guide

---

## 1. Cold open — the message that prompted this

- A friend just took over an AI Ops role for marketing: helping every team "Claude Code the s*** out of their processes." His ask: what does great look like? What are the best marketing teams doing? "I need to create a vision for what this could look like."
- The personal beat (style guide: admit the small struggle): I went looking for something to send him and came up empty. Plenty of "10 AI marketing tools" listicles, plenty of consultant maturity models written for CIOs. Nothing that answers the question at the level where a marketing leader actually operates.
- So this post is the resource I wanted to send him. (Sets up the framework without foreshadowing the structure.)

## 2. Adoption is the wrong scoreboard

- Establish conventional wisdom, then disrupt: everyone's "using AI" now — Salesforce says 75% of marketers have adopted it. Same report: 84% are still running generic, one-way campaigns. Adoption tells you almost nothing.
- McKinsey: 88% of orgs use AI somewhere, but nearly two-thirds haven't begun scaling it, and in any single function no more than 10% are scaling agents. (Attribute; org-wide caveat.)
- The stat that reframes everything: McKinsey's high performers (~6%) aren't distinguished by using more AI — they're ~3x more likely to have *redesigned the workflow itself*.
- Thesis: the question isn't "is my team using AI?" It's "how much of my team's work has been rebuilt around it?" That progression has recognizable stages. Introduce the ladder.

## 3. The Marketing AI Ops Ladder (framework overview)

- Present all five rungs compactly (the diagram lives here).
- Key framing point #1: the ladder measures **system maturity, not team size**. Tease Lau: the best-documented example of the top rungs is a marketing "team" of one person.
- Key framing point #2: rungs are climbed **in order**. Cite the practitioner who built 15 scheduled agents and lists "building agents before configuration and skills" as his #1 mistake (De Jesus — full story at Rung 4).
- Honesty note (builds trust for the whole piece): where the public evidence is thick vs. thin, and that most numbers in this post are self-reported by vendors or practitioners — flagged as such throughout.

## 4. Rung 1 — Personal wins

- **What it looks like:** individuals using Claude Code (or any agentic tool) ad hoc for their own tasks. No shared anything. Wins are real but trapped in one person's terminal.
- **Example:** Austin Lau's origin story — Anthropic's growth marketer who had never written code and Googled how to open the terminal. Everyone starts here, including the person who ends up defining the top of the ladder.
- **You're here if:** a few people on the team have wins to show; nothing survives if that person goes on vacation; results vary wildly by individual.
- **To climb:** turn your best one-off prompt into something you can run twice. That's the whole move.

## 5. Rung 2 — Reusable tools

- **What it looks like:** the one-off becomes an artifact — a slash command, a brand-voice file, a small internal tool. The unit of progress shifts from "task done" to "tool built."
- **Examples (per Anthropic's own account, verified against three sources):** Lau's `/rsa` command (30 min → 30 sec per ad, upload-ready CSVs); the Figma plugin built in under an hour (up to 100 creative variations, ~30 min → ~30 sec per batch); ad copy overall 2 hrs → 15 min, 10x creative output.
- **Supporting practitioner color (self-reported):** Stack & Scale's 47 automations and persistent brand-voice markdown file; Koka Sexton's research→HTML→WordPress pipeline collapsing a 90-minute process into one conversation.
- **You're here if:** individuals have personal toolkits; the tools live on personal machines; two people have built the same thing twice without knowing it.
- **To climb:** the tools stop being yours and start being the team's.

## 6. Rung 3 — The shared playbook

- **What it looks like:** team-level CLAUDE.md conventions, shared skills, a repo everyone pulls from. The team's taste and standards are encoded, so any member (and any agent) produces on-brand work.
- **Example (self-reported):** RSL/A, a two-person agency running everything through one Claude Code agent with 9 MCP integrations and a CLAUDE.md codifying naming conventions, writing voice, project structure, and permissions. Their numbers, attributed: blog posts 1 day → 2-3 hrs; ~3x output YoY at identical headcount; under $200/mo vs. a $120K developer hire; 2-3 week learning curve.
- **The honest beat:** this is where public evidence thins out. Almost nobody documents team-scale shared conventions — which means if your team is here, you're ahead of nearly everyone writing about this. (Tie to the ≤10% McKinsey agent-scaling stat.)
- **You're here if:** a new hire can produce on-brand work with AI on day one; conventions live in a repo, not in someone's head; "how do we do X" has a written, executable answer.
- **To climb:** the De Jesus ordering lesson as the bridge — configuration and skills *must* come before agents. He built agents first, and calls it his biggest mistake. Once the playbook is solid, you can start putting it on a schedule.

## 7. Rung 4 — Supervised autopilot

- **What it looks like:** scheduled agents doing real recurring work, always with a human gate. Not "set and forget" — "set and approve."
- **Examples (self-reported, both explicitly human-gated):**
  - The practitioner whose Claude Code routine wakes every six hours in the cloud — ingesting articles, repurposing for Reddit, drafting replies, queueing LinkedIn posts — with "Nothing publishes without me" as the operating rule (drafts arrive in Slack for approval).
  - De Jesus's full system: CLAUDE.md configs → 24 custom skills with shared voice rules and quality gates → 15 scheduled agents, producing 10-12 pieces/week across four platforms on 2-3 hrs/week of review. Cost and effort figures: ~6 months part-time, $100/mo. Even here, producer agents refuse to run unless a human has touched the editorial calendar.
- **The reality check (essential for a leader audience):** Gartner predicts >40% of agentic AI projects canceled by end-2027; estimates only ~130 of thousands of "agentic AI" vendors are genuinely agentic — "agent washing." Practical takeaway for the AI Ops reader: benchmark vendors and your own projects against "would this survive the cull?" Date-stamp the forecast.
- **You're here if:** work happens while nobody's at a keyboard; every automated output passes a named human; you've killed at least one automation that wasn't earning its keep (that's a feature of this rung, not a failure).
- **To climb:** you mostly don't — yet. Which is the point of Rung 5.

## 8. Rung 5 — The compounding horizon (clearly labeled: aspirational)

- **Framing:** this rung is a direction, not a destination anyone has reached. Say so plainly.
- **What exists today, honestly bounded:**
  - Anthropic's growth marketing memory system that logs ad-test hypotheses and pulls past results into new generations — their words: "a self-improving testing framework," their qualifier: "rudimentary." Keep the qualifier.
  - The weekly self-tuning loop from the Rung 4 practitioner: every Monday the agent reads the week's human edits and rewrites its own instructions. Self-improvement with human edits as the training signal.
  - Anthropic's launch-your-agent skill: Claude Code interviews you, builds a managed agent, grades it against your definition of done, iterates, and schedules it. Agents building agents — but human-directed at every step.
- **The vision to hand the reader (Sid's actual ask):** a marketing system where every campaign makes the next one smarter — skills that sharpen with use, agents that propose their own improvements for human sign-off, institutional knowledge that compounds instead of evaporating when someone leaves.
- **What it is not:** autonomous self-modification, fire-and-forget marketing. Everywhere "self-improving" is documented today, a human is in the loop. Given Gartner's numbers, treat anyone selling Rung 5 with suspicion.

## 9. Using the ladder (the "what do I do Monday" section)

- Benchmark honestly: most teams discover they're a Rung 3 aspiration wrapped around a Rung 1 reality — a few power users and no playbook.
- The leader's job in one sentence: one person can climb the whole ladder alone (Lau proved it); an AI Ops lead's job is getting the *whole team* up rungs one person has already climbed.
- Climb one rung at a time; the failure mode is skipping to Rung 4 (De Jesus's mistake, Gartner's cancellation wave — same lesson at two scales).
- Practical first moves per rung (compact table or short list — this is the screenshot-able takeaway).

## 10. Close + CTA

- Warm close: this post is the answer I wished I could have sent my friend. Send it to whoever asked *you* what great looks like — and tell me where your team sits on the ladder (Twitter/LinkedIn/email links).
- EmailSignup component: new Kit tag for this post (create at publish time) — headline pitched at leaders ("Building your team's AI Ops function?").
- If the consultation is live at publish: one low-key sentence for leaders who want help building their team's roadmap.

---

## Drafting notes

- Style guide checkpoints: sentence-case headings; benefit-oriented rung headings are already set; no em dashes; hedge with "I'd say"; "per Anthropic's own account" attribution discipline throughout; one "honestly" max; no stacked fragments.
- Length target: pillar — likely 2,500-3,500 words. Long is fine; padded is not.
- Every rung's example numbers carry their attribution inline (self-reported vs. verified) — the hedging *is* the credibility play, and it's on-voice.
- Internal link candidates: what-are-skills (Rung 3), giving-claude-code-superpowers-with-mcp-servers (Rung 3-4), installing-claude-code (Rung 1), the goal/automation posts as relevant.
- The ladder diagram doubles as the social/OG asset. Build via HTML→PNG pipeline, no crop marks.
