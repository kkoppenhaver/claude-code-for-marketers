import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputFile = join(__dirname, 'solo-marketer-stack.html');
const outputFile = join(__dirname, 'solo-marketer-stack.png');

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2, // 2x for crisp output
});
const page = await context.newPage();

await page.goto('file://' + inputFile);
await page.waitForLoadState('networkidle');
// Give fonts an extra beat to render
await page.waitForTimeout(500);

const canvas = page.locator('.canvas');
await canvas.screenshot({ path: outputFile });

await browser.close();
console.log(`Wrote ${outputFile}`);
