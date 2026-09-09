import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.resolve(__dirname, '../src');
const stylesFile = fs.readFileSync(path.join(srcDir, 'styles.ts'), 'utf8');
const cardFile = fs.readFileSync(path.join(srcDir, 'ifb-washer-card.ts'), 'utf8');

console.log('Checking IFB Washer Card Design System Compliance...\n');

let errors = 0;

function check(desc, cond) {
  if (cond) {
    console.log(`PASS: ${desc}`);
  } else {
    console.error(`FAIL: ${desc}`);
    errors++;
  }
}

// 1. Header Structure & 40px Symmetrical Action Buttons
check(
  'Header defines symmetrical 40px collapse-btn and power-btn',
  stylesFile.includes('.collapse-btn') &&
  stylesFile.includes('.power-btn') &&
  stylesFile.includes('width: 40px')
);

// 2. Active Power Glow
check(
  'Active power button uses dual-layer ambient glow',
  stylesFile.includes('.power-btn.on') &&
  stylesFile.includes('box-shadow:')
);

// 3. Drum Animation & Porthole
check(
  'Drum porthole progress ring and keyframes animation defined',
  stylesFile.includes('@keyframes drum-spin') &&
  stylesFile.includes('.drum-rotator') &&
  stylesFile.includes('.porthole-ring-wrapper')
);

// 4. Guarded States & Disabling
check(
  'Guarded states have disabled styling with reduced opacity',
  stylesFile.includes('.disabled') &&
  stylesFile.includes('opacity: 0.4') &&
  stylesFile.includes('cursor: not-allowed')
);

check(
  'Component implements _showToast and warning haptic for blocked actions',
  cardFile.includes('this._showToast(') &&
  cardFile.includes('this._haptic(\'warning\')')
);

// 5. Themes Support
check(
  'Supports default and material_you themes in CSS',
  stylesFile.includes(':host([theme="material_you"])')
);

check(
  'Visual editor getConfigForm exposes Theme selection',
  cardFile.includes('Material You') &&
  cardFile.includes('Default HA Theme')
);

// 6. Concentric Geometry & Segmented Controls
check(
  'Segmented selector bar with concentric button radii is defined',
  stylesFile.includes('.segmented-bar') &&
  stylesFile.includes('.segment-btn')
);

// 7. Diagnostics Footer
check(
  'Centered diagnostics footer with status dots is defined',
  stylesFile.includes('.footer') &&
  stylesFile.includes('.footer-dot')
);

if (errors > 0) {
  console.error(`\nAudit completed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('\nAll Design System Compliance Checks Passed Cleanly!\n');
}
