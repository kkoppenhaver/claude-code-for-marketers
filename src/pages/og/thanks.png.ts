import type { APIRoute } from 'astro';
import { generateOgImage } from '../../utils/ogImage';

export const GET: APIRoute = async () => {
  const png = await generateOgImage({
    title: "You're booked!",
    description: 'Your consultation has been scheduled. See you soon.',
  });

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
