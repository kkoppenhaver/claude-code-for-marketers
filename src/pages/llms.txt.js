import { getCollection } from 'astro:content';

// The intro sequence doubles as the email course — it's the foundation for
// anyone new to Claude Code, so we surface it first and in reading order.
const INTRO_SEQUENCE = [
  'dont-be-scared-of-the-terminal',
  'installing-claude-code',
  'deep-research-competitor-analysis',
  'claude-code-tricks-i-wish-id-known-sooner',
  'obsidian-as-your-second-brain',
  'giving-claude-code-superpowers-with-mcp-servers',
  'what-are-skills',
];

// Order the category sections from foundational to advanced.
const CATEGORY_ORDER = [
  ['Getting Started', 'Getting started'],
  ['Concepts', 'Concepts'],
  ['Use Cases', 'Use cases'],
  ['Tips and Techniques', 'Tips and techniques'],
];

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const byId = new Map(posts.map((p) => [p.id, p]));

  const url = (path) => new URL(path, context.site).href;
  const postLine = (post) =>
    `- [${post.data.title}](${url(`/blog/${post.id}/`)}): ${post.data.description}`;

  const sections = [];

  // Start here — the intro sequence, in course order.
  const introPosts = INTRO_SEQUENCE.map((id) => byId.get(id)).filter(Boolean);
  sections.push(
    '## Start here\n\n' +
      'The intro sequence — a seven-part foundation for marketers brand new to Claude Code:\n\n' +
      introPosts.map(postLine).join('\n')
  );

  // Everything else, grouped by category, newest first, deduped against the sequence.
  const introIds = new Set(INTRO_SEQUENCE);
  const remaining = posts
    .filter((p) => !introIds.has(p.id))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  for (const [key, heading] of CATEGORY_ORDER) {
    const inCategory = remaining.filter((p) =>
      (p.data.categories ?? []).includes(key)
    );
    if (inCategory.length === 0) continue;
    sections.push(`## ${heading}\n\n` + inCategory.map(postLine).join('\n'));
  }

  // Optional — useful but skippable if an LLM is short on context.
  sections.push(
    '## Optional\n\n' +
      `- [About](${url('/about/')}): Who's behind the site and why it exists.\n` +
      `- [Start: the free email course](${url('/start/')}): The intro sequence delivered as a guided email course.\n` +
      `- [RSS feed](${url('/rss.xml')}): Subscribe to new posts.`
  );

  const body = [
    '# Claude Code for Marketers',
    '',
    '> Learn to use Claude Code for real marketing work. No programming experience required.',
    '',
    'Claude Code for Marketers teaches marketers — people with zero programming experience — how to use Claude Code (Anthropic\'s command-line AI tool) for everyday marketing work: competitor research, content repurposing, landing pages, automations, and more. Every post is written first-person from real experience by Keanan Koppenhaver.',
    '',
    sections.join('\n\n'),
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
