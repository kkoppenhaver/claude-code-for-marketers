import type { APIRoute } from 'astro';
import { generateOgImage } from '../../utils/ogImage';

export const GET: APIRoute = async () => {
  const png = await generateOgImage({
    title: 'Get Started with Claude Code',
    description: 'New to Claude Code? Start here, from zero to productive.',
  });

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
