# Brief: The /goal command: how to make Claude Code finish what it starts

## Meta

* **Target slug:** `the-goal-command`
* **Status:** `briefed`
* **Priority:** Medium-High (timely — shipped in v2.1.139, no marketer-focused coverage yet)
* **Category:** Tips and Techniques
* **Target keyword:** *claude code goal command*
* **Secondary keywords:** *claude code /goal*, *claude code autonomous tasks*, *claude code keep working until done*
* **Target length:** ~1,800–2,200 words
* **Meta description:** *(150–160 chars, finalize at draft time)* The /goal command tells Claude Code to keep working until your condition is met. Here's what it actually does, with a real marketing example.

## Why this post

`/goal` shipped in Claude Code v2.1.139 (confirm in changelog). Anthropic's docs cover it with developer-flavored examples ("until every call site compiles"). Zero marketer-facing coverage exists. We can own the search results for `claude code goal command` and adjacent queries before competitors notice.

The post sits next to existing autonomous-workflow coverage on the site:

* [`--dangerously-skip-permissions`](/blog/dangerously-skip-permissions) — the auto-approve toggle
* [Insights command](/blog/the-command-that-shows-you-how-you-actually-use-claude-code) — meta-tooling
* [CLAUDE.md masterclass](/blog/the-claude-md-masterclass) — context shaping

`/goal` belongs in that cluster as the "keep going" complement to auto mode.

## Audience

Marketers who already use Claude Code for substantive workflows (not first-time users — those should be on the email course). They've felt the pain of stopping a task too early or babysitting through a long sweep. They want to know what `/goal` actually does, when it's the right tool, and how to write a condition that holds up.

## Angle (locked)

**Mental shift framing with practical examples.** The post argues that `/goal` changes the question from "how do I keep Claude going?" to "how do I describe what done looks like?" — and that defining the end state is the harder, more valuable skill. Wrap that argument in a real story (the internal-linking sweep we ran live) and three short additional examples drawn from the backlog.

## Opening hook (locked: "chore confession")

Open with the small personal frustration. "Internal linking on this blog has been on my to-do list for weeks. Thirty posts, two outbound links each, no good way to batch it." Earn the workflow that follows — reader sees the gap `/goal` filled. Per voice guide: this is the "small personal struggle" beat that anchors the workflow.

## Outline

### Intro (~250 words)

* The chore confession (internal linking, 30 posts, kept dodging it).
* The reason it's a chore: it's the kind of thing where Claude Code can do every individual step, but you have to keep prompting it forward. Edit one post, prompt to do the next. Stop too early and you forget which posts you've already covered.
* Tease the shift: there's a new command that handles the "keep going" part for you.

### What /goal actually does (~300 words)

* Plain-English explanation: you set a condition (a "done" state), Claude works toward it, an evaluator checks the transcript after every turn, and Claude either keeps going or stops.
* The mental shift: from "prompt every step" to "define done." Defining the end state is the harder skill.
* Brief contrast with related commands (one paragraph, not a table): `/loop` fires on a clock; Stop hooks live in settings; auto mode approves tool calls but doesn't start new turns. `/goal` is the "keep going until the work is actually done" piece.

### The internal-link sweep (hero example, ~600 words)

* The exact `/goal` command we set:
  ```
  /goal Every post in src/content/blog/ has at least 2 internal links to
  other published posts on the site (markdown links matching `](/blog/`).
  Verify the count for each file. If a post genuinely has no relevant
  linking opportunities, add a `<!-- linking-skipped: <reason> -->`
  comment after the frontmatter explaining why. Stop after 30 turns.
  Don't modify any content beyond inserting links or the skip comment.
  ```
* Walk through the three parts that make a condition durable (the doc calls these out): a measurable end state, a stated check, and a constraint.
* What actually happened: 30 posts swept, ~4 minutes wall-clock, 1 evaluator iteration, 11,265 evaluator tokens (~negligible on Haiku), goal confirmed met on the first check.
* **The plot twist that's worth flagging:** Claude did the entire sweep in one continuous response stream and the evaluator confirmed on the very first check. `/goal` isn't a babysitter checking after every action — it's a gate at the end that prevents premature stops. If Claude had said "well, I got 25/30 files, that's good enough," the evaluator would have pushed back.
* Quote the evaluator's "yes, met" reason verbatim from the live test (it's publishable as-is).

### Three more shapes this fits (~400 words total, ~130 each)

Pull from the backlog list. Suggested three:

1. **Competitor research doc.** "Don't stop until pricing, positioning, and target ICP are filled in for every company in `competitors.csv`."
2. **Social-post drafting.** "Don't stop until 10 LinkedIn post drafts are saved in `drafts/linkedin/`, each tied to a different theme from `themes.md`."
3. **Content backlog reconciliation.** "Don't stop until every post in the Published section of `CONTENT_BACKLOG.md` exists as a file in `src/content/blog/` and vice versa."

For each: one sentence on the marketing pain it solves, the exact condition, what "done" looks like.

### Where /goal breaks (honest limits, ~350 words)

Three boundaries, in this order:

1. **Judgment-heavy work doesn't fit.** The evaluator can only judge what Claude has surfaced in the transcript. "Make this post actually good" or "write a tweet that performs well" isn't a `/goal` condition — that's a judgment call you can't outsource to an evaluator. Use `/goal` for tasks where "done" is observable. Use a regular conversation for tasks where "done" is a taste call.
2. **Self-reported success isn't real success.** The evaluator believes what Claude tells it. If Claude says "all tests pass" without actually running them, the evaluator will sign off. The condition needs to demand proof in the transcript — "npm test exits 0," "git status is clean," "the count is 0." Tell Claude what evidence to surface.
3. **`/goal` doesn't auto-approve tool calls.** This one trips people up. `/goal` removes the "should I keep going?" prompt between turns, but every Bash/Edit/Write call still requires permission unless you're also in auto mode. If you `/goal` something and walk away without enabling auto mode, you'll come back to a session paused on a permission prompt. The real "walk away" combo is `/goal` plus auto mode (or `--dangerously-skip-permissions` if you're in a workspace where you trust that). Link to [the auto-approve post](/blog/dangerously-skip-permissions).

### Practical tips (~200 words)

* Always include `or stop after N turns` in the condition. Runaway goals burn tokens.
* State the proof: "verify by running X" or "confirmed when `git status` is clean."
* Add constraints that matter: "without modifying any test files," "don't touch frontmatter."
* `/goal` with no argument shows status — turns spent, tokens, evaluator's most recent reason.
* `/goal clear` (or `stop`, `off`, `reset`, `none`, `cancel`) ends the goal early.
* Headless mode works: `claude -p "/goal ..."` runs the whole loop to completion in one invocation. Handy for scheduled jobs.
* Resuming a session restores the condition but resets the turn count and timer.

### CTA (~100 words)

Single email-course CTA using the `EmailSignup` component with default tag (14154457). Custom kit fields tuned to autonomy framing:

* `kitHeadline`: "Want to learn the rest of the Claude Code commands that matter?"
* `kitDescription`: "My free 7-day email course covers the foundational moves — installation, your first real workflow, and the commands (like /goal) that make Claude Code feel like a teammate instead of a tool. No coding background required."
* `kitButtonText`: "Send me the free course"

Plus the standard "find me on Twitter / LinkedIn / email" close.

## Internal links (locked)

* `/blog/dangerously-skip-permissions` — for the auto-mode / walk-away combo
* `/blog/the-command-that-shows-you-how-you-actually-use-claude-code` — companion meta-tooling post
* `/blog/the-claude-md-masterclass` — for the "shape Claude's behavior" cluster
* `/start` — from the CTA

## Sources to reference

* Official docs: `code.claude.com/docs/en/goal` (verified 2026-05-13)
* v2.1.139 changelog (confirm version number before publishing)

## Pre-draft test results (2026-05-13)

Ran the internal-link sweep `/goal` condition on this repo. Results:

* **Condition met:** yes, on the first evaluator iteration
* **Wall-clock:** 234,070 ms (~3 min 54 sec)
* **Iterations:** 1
* **Evaluator tokens:** 11,265 (Haiku, ~negligible cost)
* **Files touched:** ~12 posts across `src/content/blog/`
* **Skip comments used:** 0 (every post had real linking opportunities)
* **Evaluator final reason:** quoted in the hero example section

Transcript at `~/.claude/projects/-Users-keanan-code-claude-code-for-marketers/7ecea15a-7fbb-447d-a481-2a1a151ae7a1.jsonl` if we want to reference exact moments.

## Status

* **Briefed:** 2026-05-13
* **Pre-draft tests run:** 2026-05-13 (live `/goal` execution captured)
* **Next:** Draft.
