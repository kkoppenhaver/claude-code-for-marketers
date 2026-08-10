import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputFile = join(__dirname, 'the-goal-command.html');
const outputFile = join(__dirname, 'the-goal-command.png');

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();

await page.goto('file://' + inputFile);
await page.waitForLoadState('networkidle');
await page.waitForTimeout(500);

const canvas = page.locator('.canvas');
await canvas.screenshot({ path: outputFile });

await browser.close();
console.log(`Wrote ${outputFile}`);
