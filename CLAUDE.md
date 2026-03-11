# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Claude Code for Marketers is an Astro-based blog teaching marketers how to use Claude Code. The site uses a terminal-inspired design with light/dark mode support.

**Mission:** Establish claudecodeformarketers.com as the go-to resource for marketers learning to use Claude Code, proving that non-technical people can build powerful AI workflows.

**Target audience:** Marketers with zero programming experience who want to use AI tools but feel intimidated by technical interfaces.

**Author contact** (use these when suggesting readers reach out):
- Twitter: https://twitter.com/kkoppenhaver
- LinkedIn: https://linkedin.com/in/keanankoppenhaver
- Email: keanan@claudecodeformarketers.com

## Commands

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Build to ./dist/
npm run preview  # Preview production build
```

**Note:** Always check for running background tasks before starting new servers. Use `/tasks` to see what's already running.

## Architecture

### Content System
- Blog posts are Markdown files in `src/content/blog/`
- Content schema defined in `src/content.config.ts` with Zod validation
- Required frontmatter: `title`, `description`, `pubDate`
- **Meta descriptions must be 150-160 characters.** This is the `description` field in frontmatter. Google truncates anything longer and shorter descriptions look thin in search results.
- Optional: `updatedDate`, `author`, `image`, `imageAlt`, `tags`, `categories`, `draft`

### Images
- Store blog images in `src/assets/images/blog/`
- Reference with relative paths in markdown: `![Alt text](../../assets/images/blog/filename.png)`
- Images are automatically resized to 1600px max width and converted to WebP at build time
- Do NOT use `public/` for blog images (no optimization) or absolute paths like `/images/...`

### Layout Hierarchy
- `BaseLayout.astro` - Global layout with header, footer, theme toggle, CSS variables
- `BlogPost.astro` - Article layout (wraps BaseLayout)

### Theming
- Light/dark mode via `data-theme` attribute on `<html>`
- CSS variables defined in BaseLayout's `:root` and `[data-theme="dark"]`
- Theme preference persisted to localStorage
- Key colors: `--color-accent` (terracotta #DA7756), `--color-bg`, `--color-text`

### Fonts
- `--font-mono`: JetBrains Mono (headings, code, UI elements)
- `--font-body`: Source Serif 4 (body text)

## Deployment

Static site deployed to Cloudflare Pages. Site URL configured in `astro.config.mjs`.

## Email Integration

- Email signups use Kit (formerly ConvertKit)
- Form ID: `8947118`
- Default tag ID: `14154457` (used on homepage and blog posts)
- Blog posts can specify a custom `kitTagId` in frontmatter for post-specific tagging

**Always use the `EmailSignup` component** (`src/components/EmailSignup.astro`) when adding email signups to pages. This ensures consistent styling and proper tagging. The component accepts:
- `headline` — The main heading text
- `description` — Supporting text below the headline
- `buttonText` — CTA button text
- `tagId` — Kit tag ID for subscriber segmentation

---

# Content Strategy

## Intro sequence (email course)

The foundation of the site is a 7-post intro sequence that also serves as an email course. Available at `/start`.

| # | Slug | Title |
|---|------|-------|
| 1 | `dont-be-scared-of-the-terminal` | Don't Be Scared of the Terminal |
| 2 | `installing-claude-code` | Your first 5 minutes with Claude Code |
| 3 | `deep-research-competitor-analysis` | How I use Claude Code to research competitors |
| 4 | `claude-code-tricks-i-wish-id-known-sooner` | Claude Code tricks I wish I'd known sooner |
| 5 | `obsidian-as-your-second-brain` | Obsidian as your second brain |
| 6 | `giving-claude-code-superpowers-with-mcp-servers` | Giving Claude Code superpowers with MCP servers |
| 7 | `what-are-skills` | What are skills and how do they work? |

## Content status key

- `idea` — Concept captured, not yet briefed
- `briefed` — Brief created, ready for drafting
- `in-progress` — Currently being drafted
- `review` — Draft complete, awaiting Keanan's review
- `published` — Live on site
- `promoted` — Has been actively promoted

## Content types

- **Intro sequence:** Foundation posts for beginners
- **Use case deep dives:** Detailed walkthroughs of specific marketing tasks
- **Quick wins/tutorials:** Short, actionable posts with immediate value
- **Mindset/positioning:** Thought leadership on AI for non-technical people
- **SEO pillar content:** Comprehensive guides for search traffic

## Operating principles

- **Bootstrap mindset:** Scrappy > polished. $0 paid advertising budget.
- **All content reviewed by Keanan before publishing**
- **Task balance:** ~40% creating, ~40% promoting, ~20% optimizing

## Content backlog and strategic priorities

Two planning documents live in the repo root:

- **`CONTENT_BACKLOG.md`** — Prioritized list of planned posts and a record of all published posts.
- **`STRATEGIC_ACTIONS.md`** — Non-content tasks (site improvements, promotion, partnerships).

### Keeping the backlog in sync

Whenever a blog post is created, published, or has its status changed, update `CONTENT_BACKLOG.md` to match:
- Move newly published posts from Backlog/In Progress/Drafts to the Published section.
- When starting a draft, move the item to In Progress.
- When a new post idea comes up during conversation, offer to add it to the Backlog.

### Proactive strategic nudges

At natural pause points (e.g., after finishing a post, at the start of a session, or when asked "what should I work on next"), proactively suggest the next highest-impact item from either document. Prioritize:
1. Any in-progress content that's close to done
2. The highest-priority unbriefed or briefed backlog item
3. Quick-win strategic actions (items in the "this week" section of `STRATEGIC_ACTIONS.md`)

Frame suggestions as options, not directives. Example: "The next highest-priority backlog item is X. Want to tackle that, or did you have something else in mind?"

---

# Writing Style Guide

## Voice & tone
- **First person, conversational**: Write like you're talking to a friend, not lecturing
- **Write from "I/me" perspective**: "The first step is getting ChatGPT to help me..." not "help you..."
- **Share the process as personal experience**: This is my workflow, not instructional "you should do this"
- **Relatable and personal**: Share authentic experiences with specific details
- **Casual but not overly casual**: Professional enough for a blog, but warm and approachable
- **Acknowledge expertise boundaries honestly**: "I'm not a lawyer..." or "SEO is definitely not my area of expertise, but..."
- **Hedge with "I'd say"**: Frame opinions as personal views, not pronouncements of fact
- **Use "we" and "our" to build community**: "our next post" not "the next post"

## Sentence structure
- **Vary sentence length**: Mix short punchy sentences with longer explanatory ones
- **Start sentences with conjunctions when natural**: "But, I have a bad habit..."
- **Use fragments for emphasis when appropriate**
- **Use colons for transitions**: Creates natural pauses and emphasis
- **Parenthetical asides**: "(or prompts)" — add clarifying details without breaking flow
- **Use a conjunction before the final item in a series**: "crafting the perfect prompt, structuring your requests, and including context"
- **Avoid repetitive parallel structures**: Don't stack 3+ short sentences with the same pattern. Combine them or vary the structure.
- **When posing a question, answer it directly then qualify**: "The short answer is no." Then explain the nuance.

## Word choices & phrasing
Prefer vivid, specific, concrete language over generic or abstract phrasing:
- "Reached into my AI toolbox" vs. "turned to AI tools" — colorful, active phrasing
- "become a Figma expert overnight" vs. generic "design software" — specific, relatable references
- "slap some text on it" — casual, colloquial over formal
- "nothing more than a flashy demo" vs. "vaporware" — accessible imagery beats insider jargon

## Pacing & flow
- **Short paragraphs**: One idea per paragraph
- **Build momentum**: Start with the problem, then reveal the solution
- **Transition naturally**: Use phrases like "That's when..." to move between ideas
- **Open with a specific, observable moment**: Describe watching someone's reaction rather than making a general statement
- **Establish conventional wisdom, then introduce the disruption**: Ground the reader before challenging assumptions
- **Let the story unfold naturally**: Don't telegraph the structure or foreshadow what's coming
- **Don't pile on after the point lands**: If the observation is already clear, extra color just slows things down
- **Keep it practical**: Focus on what matters rather than comprehensive coverage. Cut overly technical explanations.
- **Acknowledge the iterative nature**: "as with most AI tools, it's rarely perfect on the first try"

## Personal touches
- **Include specific details**: "giving original talks every time" not just "giving talks"
- **Acknowledge quirks**: "I have a bad habit of..." — self-aware humor
- **Ground in real experience**: Specific situations, not generic scenarios
- **Share unexpected learnings**: "it suggested adding a drop shadow to the text, which I wouldn't have considered"
- **Add situational context**: Mention timing, circumstances, what prompted the project
- **Frame projects as exploration**: "see just how far I could push" rather than just reporting what was built

## Things to avoid
- Overly formal language ("significant time investment" → keep it simpler)
- Generic statements without personality
- Long, complex sentences that could be broken up
- Passive voice when active is available
- Redundant setup phrases ("This wasn't X—this was Y" → just say "This was Y")
- "Not X, just Y" framing → just say what it IS
- Unnecessary framing before making a point (get to the point directly)
- Em dashes — use appositives (commas) or parentheticals instead
- "It's not just X. It's Y." structure — visible AI writing tell. Reframe with a comparison or analogy.
- "Here's the thing:" as a lead-in — it's filler that delays the point
- Foreshadowing post structure ("three completely different approaches before landing on...") — trust the reader to follow along
- Adding flourishes after the point already lands

## Writing for non-technical audiences
- **Introduce concepts before naming them**: "this version control system (called git)" — explain what it does first, then name it
- **Parenthetical clarifications**: "short text instructions (usually abbreviations)" — add context non-technical readers need without disrupting flow
- **Reduce jargon when it doesn't serve the reader**: "a set of potentially destructive commands" vs. "destructive git commands"
- **Acknowledge tool alternatives**: "ChatGPT (or another tool)" — don't assume everyone uses the same tools
- **When advising what *not* to do, follow with what *to* do**: "just say no and tell Claude what you want to try instead"

## Article structure
- **Open with a specific moment or experience**: A podcast episode, a frustrating search result, watching someone's reaction
- **Build from problem → solution**: Establish the pain point before revealing the approach
- **Define terms when introducing them**: "Fair use is a legal doctrine that allows..." — don't assume reader knowledge
- **Use block quotes for key external ideas**: Attribute concepts to their sources by name
- **Cite sources for factual claims**: Link to authoritative references when making data-driven points
- **Show, don't tell at proof points**: Add screenshots when claiming "Claude asks before doing anything" — visual proof beats assertion
- **End with warm, action-oriented CTA**: Invite engagement + include social links. Use "our" not "the" to build community.

## Formatting
- **Heading capitalization**: Sentence case ("This is a heading we want" not "This Is A Heading We Want")
- **Benefit-oriented section headlines**: "Better web designs with the frontend-design skill" not "Example: the frontend design skill"
- **Bold** for emphasis on key phrases and important practical points
- *Italics* for emphasis on specific words and for meta-commentary asides
- **Lowercase for feature names when casual**: "Subtle variations" not "Subtle Variations"
- Numbered lists for steps/processes
- Short, scannable paragraphs
- Blockquotes (>) for prompts and AI responses — clearly distinguish AI text from narrative
- **Placeholder notes**: [screenshot TKTK] for visuals, [TKTK: note] for fact-checking reminders
- **No horizontal rules before headings**: The h2 styling already includes a top border, so `---` creates a double line
- ✨Sparkle emojis✨ for playful emphasis on key concepts (use sparingly)
