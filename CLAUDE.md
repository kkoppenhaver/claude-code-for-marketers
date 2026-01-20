# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Claude Code for Marketers is an Astro-based blog teaching marketers how to use Claude Code. The site uses a terminal-inspired design with light/dark mode support.

**Mission:** Establish claudecodeformarketers.com as the go-to resource for marketers learning to use Claude Code, proving that non-technical people can build powerful AI workflows.

**Target audience:** Marketers with zero programming experience who want to use AI tools but feel intimidated by technical interfaces.

**Author contact** (use these when suggesting readers reach out):
- Twitter: https://twitter.com/kkoppenhaver
- LinkedIn: https://linkedin.com/in/keanankoppenhaver
- Email: keanan@floorboardai.com

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

---

# Content Strategy

## Intro sequence (email course)

The foundation of the site is a 7-post intro sequence that also serves as an email course:

| # | Title | Status |
|---|-------|--------|
| 1 | Don't be scared of the terminal | published |
| 2 | Installing/setting up Claude Code | in-progress |
| 3 | Use case: Turn a tweet thread into a blog post | idea |
| 4 | Ways to get even better at prompting | idea |
| 5 | Use case: Deep research for a competitor page | idea |
| 6 | What are skills? | idea |
| 7 | What are subagents? | idea |

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

---

# Writing Style Guide

Based on edits to the introduction section:

## Voice & Tone
- **First person, conversational**: Write like you're talking to a friend, not lecturing
- **Write from "I/me" perspective**: "The first step is getting ChatGPT to help me..." not "help you..."
- **Share the process as personal experience**: This is my workflow, not instructional "you should do this"
- **Relatable and personal**: Share authentic experiences ("I have a bad habit of giving original talks every time")
- **Casual but not overly casual**: Professional enough for a blog, but warm and approachable

## Sentence Structure
- **Vary sentence length**: Mix short punchy sentences with longer explanatory ones
- **Start sentences with conjunctions when natural**: "But, I have a bad habit..."
- **Use fragments for emphasis when appropriate**
- **Use colons for transitions**: "But here's the thing: as with most AI tools..." - creates natural pauses and emphasis
- **Parenthetical asides**: "(or prompts)" - add clarifying details without breaking flow

## Word Choices & Phrasing
- **"Reached into my AI toolbox"** vs. "turned to AI tools" - more colorful, active phrasing
- **"They look ok"** vs. "They're fine" - more conversational, less formal
- **"fit your content"** vs. "fits your content" - maintain second person when addressing reader
- **"putting the slides themselves together"** - add specificity and rhythm
- **"become a Figma expert overnight"** - specific, relatable reference instead of generic "design software"
- **"weren't quite what I had in mind"** vs. "wasn't quite right" - more conversational, natural phrasing
- **"Feel free to..."** - invitational language that's casual and encouraging
- **"test out in Midjourney"** - casual phrasing ("test out" vs. "test")
- **"I squint just a bit"** - specific physical action instead of abstract evaluation
- **"a little bit of a different arrangement"** - conversational, natural phrasing with filler words
- **"my presentation tool of choice"** - more dynamic than "Google Slides" or "PowerPoint"
- **"This is where a lot of people stop"** - acknowledging common patterns to position your approach
- **"slap some text on it"** - casual, colloquial phrasing
- **"the back of the room I'm presenting in won't be able to either"** - specific, real-world context instead of abstract readability
- **"(mostly through trial and error in either Google slides or Keynote)"** - parenthetical aside that adds practical specificity

## Pacing & Flow
- **Short paragraphs**: Keep each paragraph focused on one idea
- **Build momentum**: Start with the problem, then reveal the solution
- **Transition naturally**: Use phrases like "That's when..." to move between ideas
- **Guide reader through process**: "When you're creating slide backgrounds, this is particularly important" - add contextual guidance
- **Acknowledge the iterative nature**: "as with most AI tools, it's rarely perfect on the first try" - set realistic expectations
- **Encourage exploration**: "Feel free to go down each of these paths and see the prompts that come out"
- **Remove unnecessary detail**: Cut overly technical explanations - removed Discord reference, removed "Does it match the tone" point, simplified Midjourney workflow
- **Keep it practical**: Focus on what matters (negative space, not getting boring) rather than comprehensive coverage

## Personal Touches
- **Include specific details**: "giving original talks every time" not just "giving talks"
- **Acknowledge quirks**: "I have a bad habit of..." - self-aware humor
- **Ground in real experience**: "That's when I decided to reached into..."
- **Add contextual details**: "When I was giving a talk to some prospective Retool builders..." - ground examples in real situations
- **Honest acknowledgments**: "I don't have all of these memorized" - admit limitations naturally
- **Share unexpected learnings**: "it suggested adding a drop shadow to the text, which I wouldn't have considered" - shows genuine discovery moments
- **Acknowledge common behaviors**: "This is where a lot of people stop" - position your approach against what others do

## Things to Avoid
- Overly formal language ("significant time investment" → keep it simpler)
- Generic statements without personality
- Long, complex sentences that could be broken up
- Passive voice when active is available
- Redundant setup phrases that state the obvious ("This wasn't X—this was Y" → just say "This was Y")
- Unnecessary framing before making a point (get to the point directly)
- Em dashes — use appositives (commas) or parentheticals instead. Example: "all in a single interface" not "all—without leaving the terminal"

## Tool References
- Use **ChatGPT** specifically (not "ChatGPT or Claude") since that's what was actually used in the examples

---

## Additional Patterns from Copyright Article

### Voice & Authority
- **Acknowledge limitations**: "I'm not a lawyer and this is definitely not legal advice" - be upfront about expertise boundaries
- **Thank collaborators/tools**: "Of course, I'd be remiss if I didn't thank Claude for help..." - give credit where it's due
- **Use "we" to establish shared understanding**: "While no copyright case is ever straightforward, we can still use..."
- **"Best guess" humility**: Frame predictions/opinions as educated guesses rather than definitive statements

### Structure & Organization
- **Clear section headers as questions**: "How does copyright work?" "What about the input to LLMs?"
- **Sub-questions within sections**: "What is Fair Use?" "What's the current opinion?"
- **Practical tips at the end**: Move from theory/background to actionable advice
- **Strong CTAs**: End with invitation to engage ("send me a copy... I'm looking forward to seeing what you write!")

### Explanatory Style
- **Define terms when introducing**: "Fair use is a legal doctrine that allows..." - don't assume reader knowledge
- **Use numbered lists for complex concepts**: Four factors of fair use presented as enumerated list
- **Cite sources appropriately**: Include links to legal code, academic papers, cases
- **Break down "legalese"**: Translate legal language into plain English (e.g., "tangible medium of expression")
- **Use examples to clarify**: "For example, if a writer uses ChatGPT to generate a rough draft..."

### Tone Balance
- **Conversational yet informative**: Mix casual tone with substantive legal/technical content
- **Bold for emphasis on key takeaways**: "This is why it's important for a human to be in the loop"
- **Transitions acknowledge complexity**: "Despite the complexities involved..." "However, when it comes to..."
- **Encouraging closing**: "Go forth and create" - optimistic, empowering tone

### Research & Credibility
- **Cite academic sources**: Reference papers by name and year (Grimmelmann 2016, Sobel 2017)
- **Link to authoritative sources**: U.S. Code, vendor terms of service, legal cases
- **Compare multiple vendors**: OpenAI vs Anthropic vs Google - comprehensive coverage
- **Acknowledge evolving landscape**: "the law hasn't quite caught up yet" - recognize uncertainty

### Practical Application Focus
- **"Practical tips" section**: Bullet list of actionable advice after theory
- **Protect yourself framing**: Position advice as risk mitigation
- **Multiple perspectives**: Legal, ethical (plagiarism), vendor terms
- **Real-world grounding**: Reference actual legal battles, vendor policies

---

## Additional Patterns from "Should You Still Be Writing Blog Posts?"

### Opening & Hook
- **Acknowledge conventional wisdom first**: "For a long time...SEO marketing was a dominant strategy" - establish baseline
- **Then introduce the disruption**: "Then ChatGPT, Claude and a host of other AI tools came along..."
- **Data-driven disruption**: Cite specific changes (Stack Overflow lost 1/3 of traffic, Google AI Overviews launch date)

### Hedging & Positioning
- **Acknowledge expertise boundaries**: "SEO is definitely not my area of expertise, but..."
- **Attribute ideas to sources**: "one take that I've seen from ellipsis that I generally agree with"
- **Bold key takeaways from sources**: "SEO will be MORE winner-takes-all"

### Direct Address & Clear Answers
- **Ask the title question explicitly in text**: "So…should you stop writing blog posts?"
- **Give direct answer immediately**: "The short answer is no."
- **Then qualify based on context**: "It depends on exactly what you're trying to achieve..."

### Sub-sections with Clear Benefits
- Use clear H3 headers that state the benefit: "Well-written posts build authority", "You still need to create a 'binge bank'"
- Each section explains the "why" behind the recommendation

### Introducing Concepts
- **Name and attribute new concepts**: "The concept of a 'binge bank' was one I first heard on the My First Million podcast"
- **Use block quotes for key ideas**: Extended quote explaining the binge bank concept
- **Show how it resonates**: "it really resonated with me. Here's the core idea:"

### Personal Anecdotes as Evidence
- **Use recent personal experiences**: "I recently was trying to set up a new website..."
- **Show the problem firsthand**: Frustrating experience with AI-generated content
- **Draw the lesson**: "This is also the kind of thing that helps people recommend you to friends"

### Closing CTAs
- **Inspirational invitation**: "If this post inspired you to 'hit publish' on something, I'd love to see it!"
- **Mission-driven framing**: "The world needs more content backed by expertise and a strong perspective"
- **Contrast with negative**: "to balance out all of the AI-generated sameness"

---

## Additional Patterns from "All Educational Content is Interactive"

### Opening with Personal Discovery
- **Start with specific moment**: "I was listening to an episode of the Overengineered podcast recently when..."
- **Show your curiosity process**: "As someone who was pretty familiar with CGP Gray but not immediately familiar with what the host was talking about, I got curious"
- **Link the breadcrumbs**: Found podcast reference → 10 year old YouTube video → realized opportunity

### Bold for Big Claims
- **Use bold for transformative statements**: "any instructor, content creator or even just an average user can now create interactive visualizations"
- Emphasizes the magnitude of the unlock

### Tutorial Structure
- **Clear step-by-step sections**: "Setting up Claude", "Giving Claude context", "Generating the visualization", "Iterating on output"
- **Include screenshots at each step**: [screenshot TKTK] style placeholders for visual guidance
- **Show failures and iterations**: "the first version needed a lot of scrolling" - honest about the process

### Code Blocks for Exact Prompts
- Use markdown code blocks to show exact prompts/instructions given to AI
- Makes content actionable and replicable

### Honest Technical Perspective
- **"As a developer" perspective**: "What's most impressive to me as a developer is that I had to write exactly 0 lines of code"
- Lends credibility while showing genuine amazement

### Asides for Recommendations
- **Bold asides**: "As an aside, if you're looking to generate the sort of product description...you should check out Claire Vo's ChatPRD"
- Give credit to related tools/creators

### Emphasize The Unlock
- **"This is a massive unlock for..."** - frame new capabilities in terms of what they enable
- Focus on implications rather than just features

### Vision-Forward Closing
- **"I, for one, am excited to see..."** - personal stake in the future
- **Broad implications**: "how that completely transforms education going forward"
- Optimistic, forward-looking tone

### Emoji in Titles
- Use emoji strategically in titles for emphasis: "All educational content is now interactive 🤯"
- Adds personality and visual interest

## Formatting
- **Heading capitalization**: Use sentence case (only first letter capitalized) rather than title case. Example: "# This is a heading style that we want" not "# This Is A Heading Style That We Want"
- **Bold for emphasis on key phrases**
- **Bold for important practical points**: "I need some open space in the center of the image for text." - highlight key takeaways
- **Lowercase for feature names when casual**: "Subtle variations" not "Subtle Variations" initially, but can capitalize for emphasis
- *Italics for emphasis on specific words*
- **Sparkle emojis for emphasis**: ✨cohesive✨ - adds playful emphasis on key concepts (use sparingly)
- Numbered lists for steps/processes
- Short, scannable paragraphs
- Blockquotes (>) for prompts and AI responses - clearly distinguish AI text from narrative
- **Placeholder notes**: Use [screenshot TKTK] or similar to mark where visuals should go
- **[TKTK: note]** format for reminders to self about fact-checking or adding details later
- **No horizontal rules before headings**: Don't use `---` before h2 sections — the h2 styling already includes a top border, so adding `---` creates a double line

---

## Additional Patterns from "Satirical News Generator" Article

### Concrete Over Abstract
- **"nothing more than a flashy demo"** vs. "vaporware" - vivid, accessible language beats insider jargon
- Prefer specific imagery readers can picture over shorthand terms

### Cut the Flourishes
- If the point is already made, don't add extra color that slows things down
- Example: Removed "breathless coverage of pitch decks masquerading as products" - the observation was already clear

### Creative Framing Over Technical
- **"what would the parody version of this look like?"** vs. "what if I could automate the parody?" - focus on the vision, not the implementation detail
- Lead with the creative idea, not the technical approach

### Add Personal Context
- **"turn this into a winter break project"** - adds timing and situational context
- **"see just how far I could push"** - frames as exploration/experimentation rather than just execution
- Readers connect more when they understand the circumstances

### Less Foreshadowing
- Let the story unfold naturally instead of telegraphing the structure
- Removed "three completely different approaches before landing on something that worked well" - trust the reader to follow along

---

## Additional Patterns from "Don't Be Scared of the Terminal"

### Opening with Observable Moments
- **Ground openings in specific, observable moments**: "I can often see that excitement fade in real time" - describe watching someone's reaction rather than making a general statement
- Paint a picture the reader can visualize rather than stating abstract feelings

### Italics for Meta-Commentary
- **Use italics for asides and footnotes**: When stepping outside the main text for self-aware commentary (like the asterisk aside), italicize the whole block
- Visually separates the "wink to the reader" from the main argument

### Writing for Non-Technical Audiences
- **Parenthetical clarifications**: "short text instructions (usually abbreviations)" - add context non-technical readers need without disrupting flow
- **Introduce technical terms after the concept**: "this version control system (called git)" - explain what it does first, then name it
- **Reduce jargon when audience won't know it**: "destructive git commands" → "a set of potentially destructive commands" - if the jargon doesn't add value for the reader, cut it
- **Acknowledge alternatives rather than being prescriptive**: "ChatGPT (or another tool)" - don't assume everyone uses the same tools

### Providing Next Actions
- **Don't leave readers stuck**: "just say no" → "just say no and tell Claude what you want to try instead"
- When giving advice about what *not* to do, follow up with what *to* do instead

### Hedging for Personal Voice
- **"I'd say" hedging**: "which I'd say is a pretty reasonable response" vs. "that's actually a reasonable response"
- Frames statements as your opinion rather than pronouncing facts - adds humility and personal voice

### Inclusive CTAs
- **"Our" not "the"**: "our next post" instead of "the next post" - builds community, makes reader feel like part of something
- **Warm closings**: "I'm here to help" - end with genuine offer of support
- **Action-oriented, low-commitment language**: "jump into" and "get just a taste" - makes next steps feel approachable

### Show, Don't Tell at Proof Points
- **Add screenshots at key claims**: When saying "Claude asks before doing anything," show a screenshot of Claude asking for approval
- Visual proof is more convincing than assertion
