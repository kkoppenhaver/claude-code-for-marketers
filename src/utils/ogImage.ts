import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFile } from 'fs/promises';

// Cache font in memory
let fontData: ArrayBuffer | null = null;

async function loadFont(): Promise<ArrayBuffer> {
  if (fontData) return fontData;
  const buffer = await readFile('./public/fonts/JetBrainsMono-Bold.ttf');
  fontData = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
  return fontData;
}

interface OgImageOptions {
  title: string;
  description: string;
}

export async function generateOgImage({ title, description }: OgImageOptions): Promise<Buffer> {
  const font = await loadFont();

  // Dynamic font size based on title length
  let titleSize = 64;
  if (title.length > 50) titleSize = 56;
  if (title.length > 70) titleSize = 48;
  if (title.length > 90) titleSize = 42;

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: '#1C1917',
        },
        children: [
          // Left border accent
          {
            type: 'div',
            props: {
              style: {
                width: '20px',
                height: '100%',
                backgroundColor: '#DA7756',
              },
            },
          },
          // Main content area
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: 1,
                padding: '60px',
                height: '100%',
              },
              children: [
                // Top section: Title and description
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                    },
                    children: [
                      // Title
                      {
                        type: 'div',
                        props: {
                          style: {
                            color: '#FAFAF9',
                            fontSize: `${titleSize}px`,
                            fontWeight: 700,
                            lineHeight: 1.2,
                            marginBottom: '24px',
                          },
                          children: title,
                        },
                      },
                      // Description
                      {
                        type: 'div',
                        props: {
                          style: {
                            color: '#a8a29e',
                            fontSize: '28px',
                            lineHeight: 1.4,
                          },
                          children: description,
                        },
                      },
                    ],
                  },
                },
                // Bottom section: URL
                {
                  type: 'div',
                  props: {
                    style: {
                      color: '#FAFAF9',
                      fontSize: '52px',
                      fontWeight: 700,
                    },
                    children: 'claudecodeformarketers.com',
                  },
                },
              ],
            },
          },
        ],
      },
    } as any,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'JetBrains Mono',
          data: font,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );

  // Convert SVG to PNG
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1200,
    },
  });

  const pngData = resvg.render();
  return pngData.asPng();
}
