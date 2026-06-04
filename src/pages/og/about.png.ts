import type { APIRoute } from 'astro';
import { generateOgImage } from '../../utils/ogImage';

export const GET: APIRoute = async () => {
  const png = await generateOgImage({
    title: 'About Claude Code for Marketers',
    description: 'Meet Keanan, the developer and marketer behind the site.',
  });

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
