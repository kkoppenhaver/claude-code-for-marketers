import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages: Object.fromEntries(
    posts.map((post) => [
      post.id,
      {
        title: post.data.title,
        description: post.data.description,
      },
    ])
  ),
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [[28, 25, 23]], // Terminal dark background #1C1917
    border: {
      color: [218, 119, 86], // Terracotta accent
      width: 20,
      side: 'inline-start',
    },
    padding: 60,
    font: {
      title: {
        color: [250, 250, 249], // Light text #FAFAF9
        size: 64,
        lineHeight: 1.2,
        families: ['JetBrains Mono'],
        weight: 'Bold',
      },
      description: {
        color: [168, 162, 158], // Muted text #a8a29e
        size: 32,
        lineHeight: 1.4,
        families: ['JetBrains Mono'],
      },
    },
    fonts: ['./public/fonts/JetBrainsMono-Bold.ttf'],
  }),
});
