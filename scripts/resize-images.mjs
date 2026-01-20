/**
 * Pre-build script to resize images larger than 1600px wide.
 * Ensures images are appropriately sized for the content area (800px max, 2x for retina).
 */

import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';

const MAX_WIDTH = 1600;
const IMAGE_DIR = 'src/assets/images';

async function getImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  return entries
    .filter(e => e.isFile() && /\.(png|jpe?g)$/i.test(e.name))
    .map(e => path.join(e.parentPath || e.path, e.name));
}

async function resizeImages() {
  const images = await getImages(IMAGE_DIR);

  let resizedCount = 0;

  for (const imagePath of images) {
    const image = sharp(imagePath);
    const metadata = await image.metadata();

    if (metadata.width && metadata.width > MAX_WIDTH) {
      console.log(`Resizing ${path.basename(imagePath)}: ${metadata.width}px → ${MAX_WIDTH}px`);

      await image
        .resize(MAX_WIDTH)
        .toBuffer()
        .then(buffer => sharp(buffer).toFile(imagePath));

      resizedCount++;
    }
  }

  if (resizedCount > 0) {
    console.log(`\n✓ Resized ${resizedCount} image(s)`);
  } else {
    console.log('✓ All images already ≤1600px wide');
  }
}

resizeImages().catch(console.error);
