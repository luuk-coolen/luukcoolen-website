const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const projects = path.join(root, 'public', 'projects');
const output = path.join(projects, 'focusflow-personal-portfolio-overview-v2');
const width = 2400;
const height = 1600;

const escape = (value) => value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[char]));
const text = (x, y, value, size, weight = 400, color = '#10213d', extra = '') =>
  `<text x="${x}" y="${y}" font-family="Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}" ${extra}>${escape(value)}</text>`;

const svg = (content) => Buffer.from(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">${content}</svg>`);

const source = (name) => path.join(projects, name);

async function fitImage(name, boxWidth, boxHeight) {
  return sharp(source(name))
    .resize(boxWidth, boxHeight, { fit: 'contain', background: '#ffffff' })
    .png()
    .toBuffer();
}

async function main() {
  const background = `
    <rect width="2400" height="1600" fill="#f8fafc"/>
    <circle cx="2300" cy="88" r="220" fill="#e6f0ff" opacity="0.78"/>
    <circle cx="210" cy="1510" r="240" fill="#e9f7f0" opacity="0.72"/>
    <rect x="36" y="36" width="510" height="1528" rx="30" fill="#ffffff" stroke="#dce6f1"/>
    ${text(74, 112, 'PORTFOLIO CASE · 2026', 21, 700, '#3775e8', 'letter-spacing="3"')}
    ${text(74, 204, 'FocusFlow', 68, 700)}
    ${text(74, 278, 'Personal', 68, 700)}
    <rect x="74" y="322" width="72" height="6" rx="3" fill="#3775e8"/>
    ${text(74, 402, 'Een persoonlijk ritme voor', 28, 400, '#465b78')}
    ${text(74, 442, 'plannen, focussen en', 28, 400, '#465b78')}
    ${text(74, 482, 'bewust terugkijken.', 28, 400, '#465b78')}
    <g fill="#3775e8">
      <circle cx="87" cy="578" r="8"/><circle cx="87" cy="656" r="8"/><circle cx="87" cy="734" r="8"/><circle cx="87" cy="812" r="8"/><circle cx="87" cy="890" r="8"/>
    </g>
    ${text(116, 588, 'Weekfocus als richting', 24, 600)}
    ${text(116, 666, 'Dagstart met een heldere Top 3', 24, 600)}
    ${text(116, 744, 'Werkmodus voor uitvoeren', 24, 600)}
    ${text(116, 822, 'Dag- en weekreflectie', 24, 600)}
    ${text(116, 900, 'Voortgang zonder druk', 24, 600)}
    <rect x="74" y="1014" width="432" height="1" fill="#dce6f1"/>
    ${text(74, 1070, 'VAN PLANNEN NAAR DOEN', 17, 700, '#71809a', 'letter-spacing="2"')}
    ${text(74, 1115, 'Eén vaste workflow helpt om', 22, 400, '#465b78')}
    ${text(74, 1148, 'keuzes klein en haalbaar te houden.', 22, 400, '#465b78')}
    <rect x="580" y="90" width="1080" height="830" rx="28" fill="#ffffff" stroke="#dce6f1"/>
    <rect x="1710" y="90" width="654" height="580" rx="28" fill="#ffffff" stroke="#dce6f1"/>
    <rect x="1710" y="720" width="654" height="744" rx="28" fill="#ffffff" stroke="#dce6f1"/>
    ${text(610, 134, 'WERKMODUS & VOORTGANG', 17, 700, '#3775e8', 'letter-spacing="2"')}
    ${text(1740, 134, 'WEEKREVIEW', 17, 700, '#3775e8', 'letter-spacing="2"')}
    ${text(1740, 764, 'DAGSTART: TOP 3', 17, 700, '#3775e8', 'letter-spacing="2"')}
    <rect x="580" y="956" width="1080" height="508" rx="28" fill="#10213d"/>
    ${text(622, 1022, 'HET PERSOONLIJKE RITME', 18, 700, '#9fb8ff', 'letter-spacing="2"')}
    ${text(622, 1096, 'Weekfocus → kiezen → uitvoeren', 35, 700, '#ffffff')}
    ${text(622, 1142, '→ terugkijken → opnieuw plannen', 35, 700, '#ffffff')}
    ${text(622, 1220, 'De schermen tonen afzonderlijke fases:', 22, 400, '#d4deee')}
    ${text(622, 1254, 'werkmodus, weekreview en dagstart.', 22, 400, '#d4deee')}
    <rect x="622" y="1322" width="800" height="1" fill="#425473"/>
    ${text(622, 1372, 'Fictieve demo-inhoud · geen persoonlijke data', 18, 600, '#b8c7df')}
  `;

  const [workmode, weekreview, top3] = await Promise.all([
    fitImage('focusflow-personal-workmodus-current-demo.png', 1032, 742),
    fitImage('focusflow-personal-weekreview-current-demo.png', 618, 500),
    fitImage('focusflow-personal-top3-current-demo.png', 618, 650),
  ]);

  await sharp(svg(background))
    .composite([
      { input: workmode, left: 604, top: 156 },
      { input: weekreview, left: 1728, top: 156 },
      { input: top3, left: 1728, top: 786 },
    ])
    .png()
    .toFile(`${output}.png`);

  await sharp(`${output}.png`).webp({ quality: 84, effort: 6 }).toFile(`${output}.webp`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
