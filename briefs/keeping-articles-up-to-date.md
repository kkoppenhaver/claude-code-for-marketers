# Brief: How to use Claude Code to keep fact-based articles up to date

## Meta

- **Target slug:** `keep-articles-up-to-date-with-claude-code`
- **Status:** `briefed`
- **Priority:** High (this week)
- **Category:** Use Cases
- **Target keywords:** *keep blog posts up to date*, *content freshness AI*, *update old blog posts*, *content decay*
- **Target length:** ~1,800–2,200 words
- **Meta description:** Most blog posts go stale within months. Here's how I use Claude Code to find outdated claims and fix them before my readers (or Google) notice. (151 chars)
- **Lead magnet:** The `fact-check` skill as a downloadable .zip (extract to `~/.claude/skills/`)

## Audience

Content creators and marketers who publish fact-based articles (competitor comparisons, tool reviews, statistics posts, pricing pages) and know they *should* be updating them but don't have a system for it. They've felt the pain of finding outdated info on their own site. Some may already use Claude Code, others might be new.

## Angle

Content decay is a universal problem, but the existing solutions are either expensive enterprise SaaS tools or WordPress plugins that send reminders without actually helping you fix anything. Claude Code fills the gap: it can read your article, research current facts, tell you what's wrong, and help you fix it, all for the cost of a Pro subscription you probably already have.

The AI search angle is the fresh hook: AI assistants heavily favor recently updated content (76% of ChatGPT's most-cited pages were updated in the last 30 days). Keeping your content fresh isn't just about Google anymore.

## Opening hook

Personal moment: I published the Claude Code vs. Cowork comparison post and within a week, I was already wondering if the connector count was still accurate and whether any new features had shipped. That post has maybe 20 verifiable facts in it. Multiply that by every comparison and review post on the site, and the maintenance burden becomes obvious fast.

## Outline

### 1. The problem: your best content is quietly going stale

- HubSpot found 76% of their monthly blog views came from old posts. If those posts are wrong, that's a lot of misinformed readers.
- Animalz measured ~1.2% weekly traffic loss during content decay. A post losing 5% of its traffic every month, not because it's bad, but because it's outdated.
- Comparison posts and pricing pages are the worst offenders. If your page says a competitor doesn't have a feature they launched three months ago, informed readers distrust everything else on the page.
- Most content marketers know they should be updating, but only 33% audit even twice a year. The work is tedious, doesn't feel as rewarding as creating something new, and nobody owns it.
- Tease the solution early: I built a free Claude Code skill that automates most of this. You can download it later in the post, or grab it now [link to email-gated download]. You can also set it up to run on a schedule so you never have to remember to check.

### 2. Why this matters more now (the AI search angle)

- This is the fresh angle that makes this post timely, not just another "update your old content" piece.
- AI search platforms (ChatGPT, Perplexity, Google AI Overviews) heavily favor fresh content. 76% of ChatGPT's most-cited pages were updated within 30 days. 50% of Perplexity's citations come from current-year content.
- AI-recommended content is 25.7% fresher than organic Google results on average.
- If your content isn't updated within ~90 days, AI assistants will cite someone else's fresher take instead.
- 85% of brand mentions in AI search now come from third-party pages, not your own site. Stale content means you lose control of your narrative.

### 3. The current solutions and why they're not enough

- **Manual audits**: Take days or weeks. Spreadsheets with review dates that gather dust.
- **WordPress plugins**: Content Refresh Manager, ContentPulse, etc. They remind you something is old. They don't help you figure out *what* is wrong or fix it.
- **Enterprise tools**: Quattr, AirOps, MarketMuse. Good, but $200-500+/month. Overkill for a solo creator or small team.
- The gap: nothing affordable that actually *reads your content, identifies what's wrong, and helps you fix it*. That's where Claude Code comes in.

### 4. The workflow: using Claude Code to fact-check your articles

- Walk through the actual process using the `/fact-check` skill.
- Step 1: Give it a URL. Claude fetches the article and extracts every verifiable claim (pricing, features, dates, architecture, availability).
- Step 2: Review the extracted claims. You can skip ones you know are fine and focus on the ones most likely to have changed.
- Step 3: Claude researches each claim group in parallel, checking official sources first, then broader web search. Each finding comes back with a confidence level and a source URL so you can verify.
- Step 4: Get a structured report: what needs updating, what's still accurate, what new information should be added.
- Step 5: If you want, Claude can make the edits directly (in your markdown files, via WordPress MCP, Google Docs MCP, etc.).
- Include a real example: show a snippet of the report from running it on the Cowork comparison post. The "hundreds more" connectors finding is a perfect, relatable example.

### 5. Automate it: set it and forget it

- Lead with the automation angle: once you've run `/fact-check` manually and seen how it works, you can schedule it to run automatically.
- Claude Code supports scheduled agents (remote triggers on a cron schedule) that can run the fact-check on your key posts weekly or monthly and notify you of any findings.
- Cowork has built-in scheduled tasks that can do the same thing from the GUI.
- Suggest a practical cadence: monthly for comparison/pricing content, quarterly for everything else.
- Don't try to audit everything at once. Start with your highest-traffic posts and comparison content.

### 6. The ROI of keeping content fresh

- Keep this short but punchy. The numbers speak for themselves.
- HubSpot saw 106% traffic increase on refreshed posts. Shopify recovered a post from 3,000 to 35,000 monthly visitors. Hunter.io saw 500% increase in seven months.
- Refreshed content recovers in 2-4 weeks after re-indexing, vs. 3-6 months for brand new content. Updating is faster than creating.
- Second mention of the lead magnet: if you haven't grabbed the fact-check skill yet, [download it here].

### 7. CTA: download the fact-check skill

- Third and final mention of the lead magnet. This is the hard CTA.
- The skill is available as a free .zip download. Extract it to `~/.claude/skills/fact-check/`, run `/fact-check` on any URL, and get a full accuracy report.
- Email signup gate for the download.
- Warm close: invite readers to try it on their own content and share what they find.

## Key stats to cite (with sources)

- 76% of monthly blog views come from old posts (HubSpot)
- 1.2% weekly traffic loss during content decay (Animalz)
- 76.4% of ChatGPT's most-cited pages updated within 30 days (Ocula Tech)
- 25.7% fresher: AI-recommended vs organic Google content (Ahrefs)
- 106% organic traffic increase on refreshed posts (HubSpot)
- 33% of content marketers audit twice a year (Semrush)
- Content updated every 90-120 days maintains rankings 4.2 positions higher (Ocula Tech)

## Internal links

- [Claude Code vs. Cowork](/blog/claude-code-vs-claude-cowork/) — use as the running example
- [Deep research competitor analysis](/blog/deep-research-competitor-analysis/) — similar research methodology
- [What are skills](/blog/what-are-skills/) — for readers unfamiliar with skills
- [MCP servers](/blog/giving-claude-code-superpowers-with-mcp-servers/) — for the WordPress/Google Docs edit path

## Notes

- This post should work for people who don't use Claude Code yet. The problem (stale content) is universal. The solution (Claude Code + the skill) is the pitch.
- Show, don't tell: include a real screenshot or report snippet from the fact-check run we did on the Cowork post.
- Lead magnet appears 3 times: teased in section 1 (with early email gate option), mentioned again in section 6 (ROI section), and hard CTA in section 7 (closing).
- The lead magnet is a .zip file containing the skill folder. Users extract to `~/.claude/skills/fact-check/`. Package before publish by zipping the skill directory.
- Automation section (5) should come before ROI (6) so readers see the full picture (manual → automated → proven results) before the final CTA.
