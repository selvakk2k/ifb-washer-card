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
  'Drum porthole progress ring and keyframes animation defined with clean drum-baffles',
  stylesFile.includes('@keyframes drum-spin') &&
  stylesFile.includes('.drum-baffles') &&
  stylesFile.includes('.porthole-ring-wrapper') &&
  !cardFile.includes('mdi:rotate-right')
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
  'Visual editor getConfigForm exposes Theme selection with Default HA Theme and Material You',
  cardFile.includes('Material You') &&
  cardFile.includes('Default HA Theme')
);

// 6. Concentric Geometry & Segmented Controls
check(
  'Segmented selector bar with concentric button radii and scrollable style is defined',
  stylesFile.includes('.segmented-bar') &&
  stylesFile.includes('.segment-btn') &&
  stylesFile.includes('.segmented-bar.scrollable')
);

// 7. Diagnostics Footer
check(
  'Centered diagnostics footer with red and green status dots and simple telemetry icons is defined',
  stylesFile.includes('.footer') &&
  stylesFile.includes('.footer-dot.green') &&
  stylesFile.includes('.footer-dot.red') &&
  cardFile.includes('mdi:thermometer') &&
  cardFile.includes('mdi:speedometer')
);

// 8. Companion Entity Auto-Discovery
check(
  'Automatic companion discovery resolves entities using device_id and translation keys',
  cardFile.includes('reg[rawId].device_id') &&
  cardFile.includes('meta.device_id !== deviceId') &&
  cardFile.includes('_power_switch') &&
  cardFile.includes('_program_select')
);

// 9. Card Picker Preview & Stub Config
check(
  'Card implements getStubConfig and safe setConfig for Home Assistant card picker preview',
  cardFile.includes('static getStubConfig') &&
  cardFile.includes('Please define a valid configuration') &&
  cardFile.includes('preview: true')
);

// 10. Google Home Full Layout
check(
  'Full View Style supports Classic and Google Home layouts with custom dropdowns',
  cardFile.includes('Google Home') &&
  cardFile.includes('_renderGoogleHomeFull') &&
  stylesFile.includes('.gh-full-card') &&
  stylesFile.includes('.gh-circular-btn') &&
  stylesFile.includes('.gh-custom-select')
);

// 11. Classic Setting Tiles & Picker Panel
check(
  'Classic layout uses setting tiles dropdowns for program, temp, spin, and delay',
  stylesFile.includes('.setting-tiles') &&
  stylesFile.includes('.setting-tile') &&
  stylesFile.includes('.picker-panel') &&
  cardFile.includes('mdi:format-list-bulleted-type') &&
  cardFile.includes('mdi:timer-outline')
);

// 12. Telemetry Footer Tub Label & Child Lock
check(
  'Telemetry footer explicitly labels Tub temperature and includes interactive Child Lock',
  cardFile.includes('Tub: ${tubTemp}°C') &&
  cardFile.includes('this._toggleChildLock(entities.childLock') &&
  stylesFile.includes('.footer-item.interactive')
);

// 13. Visual Editor Companion & Sensor Selectors
check(
  'Visual editor getConfigForm exposes Display Sensors and Companion Controls expandable sections',
  cardFile.includes('Display Sensors (Auto-Discovered if blank)') &&
  cardFile.includes('Companion Controls (Auto-Discovered if blank)') &&
  cardFile.includes('tub_temp_sensor') &&
  cardFile.includes('child_lock_switch')
);

// 14. Device-Level Auto-Discovery & Clean Device Title
check(
  'Auto-discovers washer device without required entity and resolves clean device title',
  !cardFile.includes("name: 'entity',") &&
  cardFile.includes('entities.deviceId') &&
  cardFile.includes('name_by_user') &&
  !stylesFile.includes('.collapse-btn.collapsed ha-icon')
);

if (errors > 0) {
  console.error(`\nAudit completed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('\nAll Design System Compliance Checks Passed Cleanly!\n');
}
