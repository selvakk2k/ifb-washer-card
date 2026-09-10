# IFB Washer Custom Lovelace Card (`ifb-washer-card`)

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=flat-square)](https://github.com/hacs/integration)
[![Stable](https://img.shields.io/github/v/release/selvakk2k/ifb-washer-card?label=Stable&style=flat-square)](https://github.com/selvakk2k/ifb-washer-card/releases/latest)
[![Beta](https://img.shields.io/github/v/release/selvakk2k/ifb-washer-card?include_prereleases&label=Beta&color=orange&style=flat-square)](https://github.com/selvakk2k/ifb-washer-card/releases)
[![AI-Assisted](https://img.shields.io/badge/AI%20Assisted-Antigravity%20%7C%20Claude-blueviolet?style=flat-square&logo=google)](https://github.com/selvakk2k)
[![AI Attribution](https://img.shields.io/badge/AI%20Attribution-AIA%20PAI%20Nc%20Hin-orange?style=flat-square)](https://aiattribution.github.io/interpret-attribution)

A custom Lovelace card for IFB front-load washing machines and washer dryers connected locally via the `ifb_washer_local` Home Assistant integration.

Adheres directly to the Smart Appliance Lovelace Design System, matching the styling, token architecture, and concentric geometry of `miraie-ac-card-in` and `superfan-card`.

---

## Features

* **Animated Drum Visual**: Radial porthole progress ring with dynamic spinning drum rotation during active wash and high-speed spin cycles.
* **Hero Telemetry Display**: Displays remaining cycle time, active cycle phase (Main Wash, Rinse, Spin, etc.), live motor speed (RPM), and tub water temperature.
* **Full Remote Actions**: One-touch Start, Pause, and Cancel controls with guarded state protection.
* **Segmented Controls**: Instant selection bars and custom dropdowns for wash programs, spin speed options, temperature settings, and delay start.
* **Washer-Dryer Controls**: Dedicated dry mode selectors (Cupboard Dry, Iron Dry, Eco Dry, Gentle Dry, Timed Dry) for combo models.
* **Cycle Modifiers**: Interactive toggle chips for Pre-wash, Soak, Extra Rinse (+1/+2/+3), Steam, Aroma, and Anti-Crease.
* **Auxiliary Status Chips**: Dedicated chips for Child Lock and Door Lock indicators.
* **Theme Support & Material You**: Seamless compatibility with default Home Assistant themes, custom color overrides, and dedicated Material You mode (optimized for the [Material 3 Theme by Merwyn](https://github.com/marcomow/ha-material-3-theme)).
* **Multiple Visual Layouts**: Seamless borderless Google Home layout and structured Classic card views with subtle ambient active glow indicators.
* **Symmetrical Header Controls**: Standardized 40px circular collapse chevron and power switch button with dual-layer ambient glow.
* **Guarded Interactions & Haptics**: Unavailable options are greyed out with sentence-case toast notifications and tactile haptics.

---

## Screenshots

| Google Home Style | Classic Card Style |
| :--- | :--- |
| **Full View**<br>*(Screenshot: Google Home Full View)* | **Full View**<br>*(Screenshot: Classic Full View)* |
| **Compact View**<br>*(Screenshot: Google Home Compact View)* | **Compact View**<br>*(Screenshot: Classic Compact View)* |

---

## Installation

### Option 1: HACS Custom Repository (Recommended)

1. Open **HACS** in your Home Assistant dashboard.
2. Navigate to **Frontend** > Top-right 3 dots > **Custom repositories**.
3. Add `https://github.com/selvakk2k/ifb-washer-card` with category **Lovelace**.
4. Click **Download**, then reload your browser resources.

### Option 2: Manual Installation

1. Download `ifb-washer-card.js` from the latest release.
2. Place the file in your Home Assistant configuration directory under `www/ifb-washer-card.js`.
3. Add the resource reference in **Settings** > **Dashboards** > **Resources**:
   * URL: `/local/ifb-washer-card.js`
   * Resource type: `JavaScript Module`

---

## Configuration

Add the card via the visual dashboard card picker by searching for **IFB Washer Card**, or use YAML:

```yaml
type: custom:ifb-washer-card
entity: switch.kitchen_ifb_washer_dryer_wd_executive_zxs_series_192_168_0_100_power
name: Kitchen Washer Dryer
theme: default
layout: default
```

### Configuration Options

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `entity` | `string` | **Required** | Primary washer entity (`switch.<device>_power` or any device entity). |
| `name` | `string` | Optional | Custom friendly title for the card header. |
| `theme` | `string` | `default` | `default` (Standard HA Theme) or `material_you` (Material You). |
| `layout` | `string` | `default` | `default` (Full Dashboard) or `compact` (Expandable single-row). |
| `accent_color` | `string` | Optional | Custom accent color override (e.g. `#00b4d8`). |
| `main_color` | `string` | Optional | Custom background surface color override. |

---

## Credits & License

### Project Contributors & AI Attribution
* **Lead Architecture & Hardware Validation**: [@selvakk2k](https://github.com/selvakk2k) — physical testing on hardware, architectural design, and domain requirements.
* **Code Implementation & Engineering**: **Antigravity** (Google DeepMind) — core algorithm development, Home Assistant platform migrations, async concurrency architecture, and automated test suites.
* **Pre-Release Code Review & Auditing**: **Claude** (Anthropic) — independent architectural review, edge-case analysis, and verification of upstream compatibility.

Licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
