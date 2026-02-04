# Claude Code for Marketers — Brand Guide

## Brand identity

**Name:** Claude Code for Marketers
**Tagline:** AI superpowers for marketers. No coding required.
**URL:** claudecodeformarketers.com
**Author:** Keanan Koppenhaver

**Mission:** The go-to resource for marketers learning to use Claude Code, proving that non-technical people can build powerful AI workflows.

**Target audience:** Marketers with zero programming experience who want to use AI tools but feel intimidated by technical interfaces.

**Design concept:** Terminal-inspired aesthetic with warm, approachable tones. The design bridges the gap between a developer tool (the terminal) and a welcoming, non-intimidating experience for non-technical users.

---

## Color palette

### Light mode (default)

| Token                    | Hex       | Usage                              |
|--------------------------|-----------|-------------------------------------|
| `--color-bg`             | `#FAFAF8` | Page background                    |
| `--color-bg-secondary`   | `#F0EFEB` | Cards, code blocks, secondary bg   |
| `--color-text`           | `#1C1917` | Primary text                       |
| `--color-text-secondary` | `#57534E` | Muted text, metadata, nav links    |
| `--color-accent`         | `#DA7756` | Links, buttons, prompt symbols     |
| `--color-accent-hover`   | `#C4684A` | Hover state for accent elements    |
| `--color-border`         | `#E7E5E0` | Dividers, card borders, separators |
| `--color-code-bg`        | `#292524` | Code block backgrounds             |
| `--color-code-text`      | `#FAFAF9` | Code block text                    |

### Dark mode

| Token                    | Hex       | Usage                              |
|--------------------------|-----------|-------------------------------------|
| `--color-bg`             | `#0C0A09` | Page background                    |
| `--color-bg-secondary`   | `#1C1917` | Cards, code blocks, secondary bg   |
| `--color-text`           | `#FAFAF9` | Primary text                       |
| `--color-text-secondary` | `#A8A29E` | Muted text, metadata, nav links    |
| `--color-accent`         | `#F2A688` | Links, buttons, prompt symbols     |
| `--color-accent-hover`   | `#DA7756` | Hover state for accent elements    |
| `--color-border`         | `#292524` | Dividers, card borders, separators |
| `--color-code-bg`        | `#1C1917` | Code block backgrounds             |
| `--color-code-text`      | `#FAFAF9` | Code block text                    |

### Brand color summary

The palette is built on **warm stone tones** (from the Tailwind Stone scale) paired with a **terracotta/peach accent**. The accent color shifts between modes to maintain contrast:

- **Light mode accent:** `#DA7756` (terracotta)
- **Dark mode accent:** `#F2A688` (soft peach)

### Selection color

Text selection uses the accent color as background with the page background as text color, creating a branded highlight effect.

---

## Typography

### Font families

| Token          | Font stack                                              | Usage                                      |
|----------------|----------------------------------------------------------|--------------------------------------------|
| `--font-mono`  | `JetBrains Mono`, SF Mono, Fira Code, monospace         | Headings, nav, buttons, UI elements, code  |
| `--font-body`  | `Source Serif 4`, Georgia, Times New Roman, serif        | Article body text                          |

Both fonts are loaded from Google Fonts:
- **JetBrains Mono:** Weights 400, 500, 600, 700
- **Source Serif 4:** Weights 400, 500, 600 (optical size range 8–60)

### Type scale

| Element        | Font family     | Size    | Weight | Line height | Letter spacing |
|----------------|-----------------|---------|--------|-------------|----------------|
| Page title (h1)| JetBrains Mono  | 36px    | 600    | 1.25        | -0.02em        |
| Section (h2)   | JetBrains Mono  | 24px    | 600    | 1.3         | -0.02em        |
| Subsection (h3)| JetBrains Mono  | 20px    | 600    | 1.3         | -0.02em        |
| Body text      | Source Serif 4  | 17px    | 400    | 1.8         | normal         |
| Nav links      | JetBrains Mono  | 0.85rem | 500    | 1.7         | 0.02em         |
| Site title     | JetBrains Mono  | 0.95rem | 600    | –           | -0.02em        |
| Buttons        | JetBrains Mono  | 14.4px  | 500    | normal      | normal         |
| Tags/badges    | JetBrains Mono  | 12px    | 500    | –           | normal         |
| Footer         | JetBrains Mono  | 0.8rem  | 400    | –           | normal         |
| Breadcrumbs    | JetBrains Mono  | 13.6px  | 400    | 1.7         | normal         |
| Date/metadata  | JetBrains Mono  | 13.6px  | 400    | 1.7         | normal         |
| Inline code    | JetBrains Mono  | 0.85em  | 400    | –           | normal         |

### Heading style

- Sentence case (only first letter capitalized)
- Monospace font (JetBrains Mono) for all heading levels
- h2 sections include a 1px top border with 32px padding above for visual separation

---

## Layout

| Property        | Value  |
|-----------------|--------|
| Max content width | 820px |
| Main padding    | 3rem 1.5rem |
| Header padding  | 1.25rem 1.5rem |
| Header position | Sticky, top: 0, z-index: 100 |
| Body base size  | 17px   |
| Body line height| 1.7    |

### Content max width

All content is constrained to **820px** centered on the page, keeping article text at a comfortable reading width.

---

## Components

### Navigation

- Sticky header with backdrop blur (`backdrop-filter: blur(10px)`)
- Bottom border: 1px solid `--color-border`
- Logo uses `>` prompt symbol in accent color + blinking cursor animation
- "Start Here" CTA button: accent background, page background text, 4px border radius
- Theme toggle: transparent background, 1px border, 6px radius, sun/moon SVG icons

### Buttons

**Primary CTA (e.g., "Send me the free course"):**
- Background: `--color-accent` (dark mode: `#F2A688`)
- Text: page background color (`#0C0A09` in dark mode)
- Border radius: 6px
- Padding: 12px 20px
- Font: JetBrains Mono, weight 500, 14.4px
- No border

**Nav CTA ("Start Here"):**
- Background: `--color-accent`
- Text: page background color
- Border radius: 4px
- Padding: 0.4rem 0.75rem
- Font: JetBrains Mono, weight 600

### Tags/badges

- Background: accent color
- Text: page background color (dark on light tag)
- Border radius: 4px
- Padding: 5.6px 12px
- Font: JetBrains Mono, weight 500, 12px

### Cards (email signup, etc.)

- Background: `--color-bg-secondary`
- Border: 1px solid `--color-border`
- Border radius: 8px
- Padding: 24px
- Heading uses `>` prompt prefix in accent color (terminal-style)

### Email input

- Background: `--color-bg` (darker than card in dark mode)
- Border: 1px solid `--color-border`
- Border radius: 6px
- Padding: 12px 16px
- Font: JetBrains Mono, 14.4px
- Placeholder text: monospace, muted color

### Inline code

- Background: `--color-code-bg` (dark mode: `#1C1917`, light mode: `#F0EFEB`)
- Padding: 3.2px 6.4px
- Border radius: 4px
- Font: JetBrains Mono, 0.85em

### Images (in articles)

- Border radius: 8px
- Border: 1px solid `--color-border`
- Max width: 100%

### Links (in articles)

- Color: accent color
- Text decoration: underline
- Font: inherits from body (Source Serif 4)
- Hover: transitions to accent-hover color

---

## Special effects

### Scanline overlay (dark mode only)

A full-screen, fixed-position overlay that creates subtle CRT-style scanlines:
- Opacity: 0.03 (dark mode), 0 (light mode)
- Pattern: repeating horizontal lines (2px transparent, 2px semi-transparent black)
- Pointer events: none (doesn't interfere with interaction)

### Blinking cursor

The logo features an animated blinking cursor block:
- Width: 8px
- Height: 1.1em
- Color: accent color
- Animation: step-end blink, 1 second cycle

### Theme transitions

- Background and text color transitions: 0.3s ease
- Link hover transitions: 0.2s ease

---

## Terminal window motif

The hero section features a faux terminal window with:
- Dark background (`#292524` area)
- Three colored dots in the title bar (red `#FF5F57`, yellow `#FFBD2E`, green `#27C93F`)
- Monospace text showing `$ claude --help` → `Welcome, Marketer.`
- Subtle box shadow for depth

This terminal motif reinforces the brand's bridge between technical tools and approachable content.

---

## Scrollbar (custom, WebKit)

- Track: `--color-bg-secondary`
- Thumb: `--color-border`, 4px border radius
- Thumb hover: `--color-text-secondary`
- Width: 8px

---

## Favicon & meta

- Favicon: PNG format (32x32 and 16x16)
- Apple touch icon: 180x180
- OG images: Per-post generated images at `/og/[slug].png`
- Site manifest: `/site.webmanifest`

---

## Brand voice (summary)

- First person, conversational ("I" perspective)
- Casual but professional
- Relatable, shares personal experiences and honest limitations
- Avoids jargon, explains technical terms when needed
- Encouraging and empowering for non-technical readers
- Uses sentence case for headings
- Bold for emphasis on key phrases
- Avoids em dashes (uses commas or parentheses instead)
- No "It's not just X. It's Y." sentence patterns

For the full writing style guide, see `CLAUDE.md`.
