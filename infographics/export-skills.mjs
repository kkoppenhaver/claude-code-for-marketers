import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');

const inputFile = join(repoRoot, 'src/assets/images/blog/claude-code-skills-for-marketers-featured.html');
const outputFile = join(repoRoot, 'public/images/blog/claude-code-skills-for-marketers.png');

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();

await page.goto('file://' + inputFile);
await page.waitForLoadState('networkidle');
await page.waitForTimeout(600);

const card = page.locator('#card');
await card.screenshot({ path: outputFile });

await browser.close();
console.log(`Wrote ${outputFile}`);
