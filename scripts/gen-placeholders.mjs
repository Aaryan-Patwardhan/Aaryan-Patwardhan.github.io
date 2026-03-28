import fs from 'fs';
import path from 'path';
import { createCanvas } from 'canvas';

const projects = [
  'sentinel-mesh', 'ghost-admin', 'ppe-detection',
  'upwork-pipeline', 'ecommerce', 'pocket-lawyer', 'attendance'
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function genImage(filename, width, height, text) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = '#0d1520';
  ctx.fillRect(0, 0, width, height);
  
  // Text
  ctx.fillStyle = '#ffffff';
  ctx.font = '40px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);
  
  ensureDir(path.dirname(filename));
  fs.writeFileSync(filename, canvas.toBuffer('image/png'));
  console.log(`Created ${filename} (${width}x${height})`);
}

// Generate project placeholders
projects.forEach(p => {
  genImage(`public/projects/${p}/cover.png`, 600, 400, `${p} cover`);
  genImage(`public/projects/${p}/og.png`, 1200, 630, `${p} open graph`);
  
  // Also create a dummy architecture diagram for the case studies
  genImage(`public/projects/${p}/architecture.png`, 1920, 1080, `${p} architecture`);
  genImage(`public/projects/${p}/dashboard.png`, 1920, 1080, `${p} dashboard`);
  genImage(`public/projects/${p}/mape-k.png`, 1920, 1080, `${p} mape-k loop`);
  genImage(`public/projects/${p}/detection.png`, 1920, 1080, `${p} detection output`);
  genImage(`public/projects/${p}/pipeline.png`, 1920, 1080, `${p} pipeline`);
  genImage(`public/projects/${p}/app-screen.png`, 1080, 1920, `${p} app screen`);
});

// Generate main OG image
genImage('public/og-image.png', 1200, 630, 'Aaryan Patwardhan - AI Systems Engineer');
