import { getCollection } from 'astro:content';

// Same foundational ordering as llms.txt: intro sequence first, then newest.
const INTRO_SEQUENCE = [
  'dont-be-scared-of-the-terminal',
  'installing-claude-code',
  'deep-research-competitor-analysis',
  'claude-code-tricks-i-wish-id-known-sooner',
  'obsidian-as-your-second-brain',
  'giving-claude-code-superpowers-with-mcp-servers',
  'what-are-skills',
];

// MDX bodies carry import statements and component markup that add no value as
// plain text. Strip the imports; leave prose untouched.
function cleanBody(body) {
  return body
    .split('\n')
    .filter((line) => !/^\s*import\s.+from\s.+;?\s*$/.test(line))
    .join('\n')
    .trim();
}

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const byId = new Map(posts.map((p) => [p.id, p]));

  const introIds = new Set(INTRO_SEQUENCE);
  const ordered = [
    ...INTRO_SEQUENCE.map((id) => byId.get(id)).filter(Boolean),
    ...posts
      .filter((p) => !introIds.has(p.id))
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()),
  ];

  const url = (path) => new URL(path, context.site).href;

  const renderPost = (post) => {
    const { data } = post;
    const date = data.pubDate.toISOString().slice(0, 10);
    const meta = [
      `URL: ${url(`/blog/${post.id}/`)}`,
      `Published: ${date}`,
      data.updatedDate
        ? `Updated: ${data.updatedDate.toISOString().slice(0, 10)}`
        : null,
      `Description: ${data.description}`,
    ].filter(Boolean);

    return [`# ${data.title}`, '', meta.join('\n'), '', cleanBody(post.body)].join(
      '\n'
    );
  };

  const body = [
    '# Claude Code for Marketers — full content',
    '',
    '> Learn to use Claude Code for real marketing work. No programming experience required.',
    '',
    'This file contains the full text of every published post, intro sequence first, then newest to oldest. Written first-person from real experience by Keanan Koppenhaver.',
    '',
    ordered.map(renderPost).join('\n\n---\n\n'),
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
