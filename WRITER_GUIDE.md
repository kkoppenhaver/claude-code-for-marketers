# Writer's Guide: SEO Components & Best Practices

## Overview

The CC4M site now has automatic SEO components that work behind the scenes. Most of the time, you don't need to do anything special — just write great content and the SEO magic happens automatically.

But for certain types of posts, you can add extra schema markup to help Google understand and feature your content better.

---

## 🤖 What Happens Automatically

These SEO features are **already working** on every post you write:

### 1. Article Schema ✅
- Tells Google each post is an article
- Includes title, description, author, publish date, image
- **You do**: Nothing! Just fill out the frontmatter as usual

### 2. Breadcrumbs ✅
- Shows "Home > Blog > Post Title" at the top of every post
- Helps Google understand site structure
- **You do**: Nothing! Auto-renders

### 3. Related Posts ✅
- Shows 3 related articles at the bottom of each post
- Matches by categories (high priority) and tags (lower priority)
- **You do**: Tag your posts thoughtfully! The better your categories/tags, the better the matches

### 4. Open Graph & Twitter Cards ✅
- Makes your posts look good when shared on social media
- **You do**: Add a good `description` in frontmatter (this becomes the preview text)

---

## 🛠️ Optional SEO Components (For Special Posts)

### HowTo Schema (Step-by-Step Tutorials)

**When to use**: Any tutorial with clear numbered steps (installations, setup guides, workflows)

**Examples**: "Installing Claude Code", "Setting up MCP Servers", "Building Your First Automation"

**How to add**:

1. In your blog post markdown, identify the clear steps in your tutorial
2. Create a `howToSteps` array in your frontmatter:

```yaml
---
title: "How to Install Claude Code"
description: "Step-by-step guide to getting Claude Code running"
pubDate: 2026-01-27
author: "Keanan Koppenhaver"
kitTagId: "14154457"
tags: ["tutorial", "setup"]
categories: ["Getting Started"]
draft: false
howTo:
  name: "Install Claude Code on Mac"
  description: "Complete installation guide for Claude Code"
  totalTime: "PT10M"  # 10 minutes in ISO 8601 format
  steps:
    - name: "Open Terminal"
      text: "Launch Terminal app from Applications > Utilities or use Cmd+Space and search for Terminal"
    - name: "Install Claude Code"
      text: "Run the command: npm install -g @anthropic-ai/claude-code"
    - name: "Verify Installation"
      text: "Run: claude --version to confirm it's installed"
---
```

**Time format reference**:
- `PT5M` = 5 minutes
- `PT30M` = 30 minutes
- `PT1H` = 1 hour
- `PT1H30M` = 1 hour 30 minutes

**Note**: The BlogPost layout will auto-detect this frontmatter and render the schema. No component import needed!

---

### FAQ Schema (Q&A Style Posts)

**When to use**: Posts structured as question-and-answer format

**Examples**: "Common Claude Code Questions", "Troubleshooting Guide"

**Status**: 🚧 Not yet implemented (coming soon)

**How it will work**:
```yaml
---
faq:
  - question: "What is Claude Code?"
    answer: "Claude Code is an AI coding assistant from Anthropic..."
  - question: "Do I need a paid Claude subscription?"
    answer: "Yes, Claude Code requires Claude Pro..."
---
```

---

## ✍️ Writing Best Practices for SEO

### Frontmatter Checklist

Every post should have:
- ✅ **Clear title** (what you'd search for on Google)
- ✅ **Compelling description** (150-160 chars, shows in search results)
- ✅ **Author name**
- ✅ **At least 1 category** (use existing ones when possible)
- ✅ **2-5 relevant tags**
- ✅ **kitTagId** for email signup tracking

**Good title**: "Your First 5 Minutes with Claude Code"  
**Bad title**: "Getting Started"

**Good description**: "From zero to running Claude Code: whether you prefer the terminal or the Desktop app."  
**Bad description**: "A guide to Claude Code."

### Categories vs Tags

**Categories** (broad buckets):
- Getting Started
- Workflows
- Integrations
- Tips & Tricks

Use **1-2 categories max** per post.

**Tags** (specific topics):
- terminal
- desktop-app
- mcp
- automation
- productivity

Use **2-5 tags** per post.

### Internal Linking (Manual)

The Related Posts widget helps, but **inline links are even better**:

**Do this often**:
```markdown
If you haven't already, check out our guide on [installing Claude Code](/blog/installing-claude-code).
```

**Good linking phrases**:
- "As we covered in [previous post]..."
- "Learn more about [topic] in our [post title]..."
- "For a deep dive, see [post title]..."

**Aim for**: 2-3 internal links per post

---

## 📸 Images for SEO

### Featured Images

If you add a featured image to frontmatter:
```yaml
image: "../../assets/images/blog/my-post-hero.png"
imageAlt: "Screenshot of Claude Code terminal showing..."
```

This image becomes:
- The hero image on the post
- The Open Graph image for social shares
- The image in Article schema for Google

**Always include `imageAlt`** — it helps accessibility AND SEO.

### Screenshots in Content

For tutorial screenshots:
```markdown
![Claude Code running in terminal](../../assets/images/blog/claude-terminal.png)
```

- Use descriptive alt text (what's happening in the image)
- Keep file sizes reasonable (under 500KB if possible)

---

## 🎯 SEO Quick Wins

### Before Publishing Checklist

- [ ] Title is clear and searchable
- [ ] Description is 150-160 characters
- [ ] Added 1-2 categories
- [ ] Added 2-5 tags
- [ ] Included 2-3 internal links to other posts
- [ ] If tutorial: considered adding HowTo schema
- [ ] If Q&A: noted for future FAQ schema
- [ ] Spell-checked and proofread

### After Publishing

1. **Share on social** (Twitter, LinkedIn)
2. **Engage with comments** (Google tracks engagement)
3. **Submit to Google Search Console** (if it's a key post)

---

## 🤔 Questions?

**Q: Do I need to add schema to every post?**  
A: Nope! Article schema auto-applies. Only add HowTo/FAQ for posts that match those formats.

**Q: What if I'm not sure about categories/tags?**  
A: Use existing ones when possible. Check `/blog` to see what's already in use.

**Q: How do I know if my internal links are good?**  
A: Link when it genuinely helps the reader. If you'd click it, it's probably good.

**Q: Can I see the schema markup?**  
A: View source on any published post and search for `application/ld+json` — that's the schema!

---

## 🔗 Helpful Resources

- [Schema.org Article](https://schema.org/Article) - See what Article schema includes
- [Schema.org HowTo](https://schema.org/HowTo) - HowTo schema examples
- [Google Rich Results Test](https://search.google.com/test/rich-results) - Test your published posts
- [ISO 8601 Duration Format](https://en.wikipedia.org/wiki/ISO_8601#Durations) - For `totalTime` in HowTo

---

**TL;DR**: Write good content, use categories/tags thoughtfully, link to other posts, and the SEO mostly handles itself. Add HowTo schema when writing step-by-step tutorials. Done. 🎉
