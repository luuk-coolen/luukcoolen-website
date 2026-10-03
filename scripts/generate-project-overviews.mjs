import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { projectStories } from '../src/config/projectStories.ts';

// Run with: node --import tsx scripts/generate-project-overviews.mjs
// sharp may be supplied by the desktop runtime through NODE_PATH.
const require = createRequire(import.meta.url);
const sharp = require('sharp');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const projects = path.join(root, 'public', 'projects');
const width = 2400;
const height = 1600;

const captions = {
  'focusflow-bewind': ['Inboxscan', 'Cliëntvoorbereiding', 'Weekplanning'],
  'focusflow-personal': ['Dagstart / Top 3', 'Werkmodus', 'Weekreview'],
  woonbuddy: ['Woonstart', 'Activiteiten', 'Contact & Hulp'],
  mindflow: ['Dashboard', 'Profiel / VAKOG', 'Verdieping & oefeningen'],
};

const escape = (value) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
})[character]);

const text = (x, y, value, size, color = '#0f172a', family = 'Arial', weight = 400) =>
  `<text x="${x}" y="${y}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${color}">${escape(value)}</text>`;

async function render(story) {
  if (!captions[story.slug] || story.media.examples.length !== 3) {
    throw new Error(`Expected three reviewed demo screens for ${story.slug}`);
  }

  // Workmode is the most informative large view for Personal; gallery order is unchanged.
  const order = story.slug === 'focusflow-personal' ? [1, 0, 2] : [0, 1, 2];
  const panels = [
    { x: 64, y: 390, w: 1456, h: 1090 },
    { x: 1552, y: 390, w: 784, h: 529 },
    { x: 1552, y: 951, w: 784, h: 529 },
  ];

  const summary = await sharp({
    text: { text: escape(story.summary), font: 'Arial 34', width: 2208, dpi: 72, rgba: true, spacing: 12 },
  }).png().toBuffer();
  const summaryMetadata = await sharp(summary).metadata();
  if (summaryMetadata.height > 110) throw new Error(`Summary exceeds header space: ${story.slug}`);

  const background = `
    <rect width="${width}" height="${height}" fill="#f8fafc"/>
    <rect x="64" y="54" width="72" height="6" rx="3" fill="#0d9488"/>
    ${text(156, 65, 'LEERPORTFOLIO · L U U K  C O O L E N', 23, '#0f766e', 'Arial', 700)}
    <rect x="2040" y="40" width="296" height="54" rx="27" fill="#f0fdfa" stroke="#99f6e4"/>
    ${text(2070, 76, 'LEERPROTOTYPE', 23, '#0f766e', 'Arial', 700)}
    ${text(64, 174, story.label, 82, '#0f172a', 'Georgia', 700)}
    <line x1="64" y1="342" x2="2336" y2="342" stroke="#e2e8f0" stroke-width="2"/>
    ${panels.map((panel, index) => `
      <rect x="${panel.x}" y="${panel.y}" width="${panel.w}" height="${panel.h}" rx="24" fill="#ffffff" stroke="#cbd5e1"/>
      <circle cx="${panel.x + 40}" cy="${panel.y + 42}" r="18" fill="#f0fdfa"/>
      ${text(panel.x + 29, panel.y + 50, String(index + 1).padStart(2, '0'), 20, '#0f766e', 'Arial', 700)}
      ${text(panel.x + 74, panel.y + 52, captions[story.slug][order[index]], 28, '#334155', 'Arial', 700)}
    `).join('')}
    ${text(64, 1544, 'Bestaande demoschermen · afzonderlijk te vergroten in de galerij', 25, '#64748b')}
    ${text(2075, 1544, 'LuukCoolen.nl', 25, '#0f766e', 'Arial', 700)}
  `;

  const layers = await Promise.all(panels.map(async (panel, index) => {
    const source = path.resolve(root, 'public', `.${story.media.examples[order[index]].src}`);
    if (!source.startsWith(`${projects}${path.sep}`)) throw new Error('Source must be a local project screenshot');
    return {
      input: await sharp(source)
        .resize(panel.w - 48, panel.h - 112, { fit: 'contain', background: '#ffffff', withoutEnlargement: true })
        .png().toBuffer(),
      left: panel.x + 24,
      top: panel.y + 88,
    };
  }));

  const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${background}</svg>`);
  const output = path.join(projects, `${story.slug}-portfolio-overview-d1`);
  const png = await sharp(svg).composite([{ input: summary, left: 64, top: 224 }, ...layers])
    .png({ compressionLevel: 9, adaptiveFiltering: true }).toBuffer();
  await fs.writeFile(`${output}.png`, png);
  await sharp(png).webp({ lossless: true, effort: 6 }).toFile(`${output}.webp`);
  console.log(`${story.slug}: ${width} × ${height}, PNG + lossless WebP`);
}

for (const story of projectStories) await render(story);
