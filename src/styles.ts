import { css } from 'lit';

export const styles = css`
  /* ──────────────────────────────────────────────────────────
     Default Token Layer (Standard Home Assistant Theme)
     ────────────────────────────────────────────────────────── */
  :host {
    display: block;
    --appliance-accent:         var(--primary-color, #00b4d8);

    /* Surfaces */
    --appliance-bg:             var(--ha-card-background, var(--card-background-color, var(--lovelace-background, #1e1e24)));
    --appliance-surface:        color-mix(in srgb, var(--primary-text-color, #000) 10%, var(--ha-card-background, var(--card-background-color, #fff)));
    --appliance-surface-hover:  color-mix(in srgb, var(--primary-text-color, #000) 18%, var(--appliance-surface));
    --appliance-border:         color-mix(in srgb, var(--primary-text-color, #000) 24%, transparent);

    /* Text */
    --appliance-text:           var(--primary-text-color, #ffffff);
    --appliance-text-2:         color-mix(in srgb, var(--primary-text-color, #000) 75%, transparent);
    --appliance-on-accent:      var(--text-primary-color, #ffffff);

    /* Active state */
    --appliance-active-bg:      color-mix(in srgb, var(--appliance-accent) 22%, var(--appliance-surface));
    --appliance-active-border:  color-mix(in srgb, var(--appliance-accent) 75%, transparent);
  }

  /* ──────────────────────────────────────────────────────────
     Material You Token Layer (Activated via Config)
     ────────────────────────────────────────────────────────── */
  :host([theme="material_you"]) {
    --appliance-accent:         var(--md-sys-color-primary, var(--primary-color, #00b4d8));

    --appliance-bg:             var(--md-sys-color-surface-variant, var(--md-sys-color-surface, var(--ha-card-background, var(--card-background-color, #1e1e24))));
    --appliance-surface:        var(--md-sys-color-surface, color-mix(in srgb, var(--primary-text-color, #000) 10%, var(--ha-card-background, var(--card-background-color, #fff))));
    --appliance-surface-hover:  color-mix(in srgb, var(--md-sys-color-on-surface, var(--appliance-text)) 18%, var(--appliance-surface));
    --appliance-border:         var(--md-sys-color-outline-variant, var(--md-sys-color-outline, color-mix(in srgb, var(--primary-text-color, #000) 24%, transparent)));

    /* Text */
    --appliance-text:           var(--md-sys-color-on-surface, var(--primary-text-color, #111111));
    --appliance-text-2:         var(--md-sys-color-on-surface-variant, color-mix(in srgb, var(--primary-text-color, #000) 75%, transparent));
    --appliance-on-accent:      var(--md-sys-color-on-primary, var(--text-primary-color, var(--appliance-bg)));

    /* Active state */
    --appliance-active-bg:      var(--md-sys-color-secondary-container, color-mix(in srgb, var(--appliance-accent) 22%, var(--appliance-surface)));
    --appliance-active-border:  var(--md-sys-color-secondary, color-mix(in srgb, var(--appliance-accent) 75%, transparent));
  }

  ha-card {
    background: var(--appliance-bg);
    border: 1px solid var(--appliance-border);
    border-radius: var(--ha-card-border-radius, 20px);
    padding: 20px 18px 16px;
    box-shadow: var(--ha-card-box-shadow, 0 4px 20px rgba(0, 0, 0, 0.15));
    box-sizing: border-box;
    font-family: var(--paper-font-body1_-_font-family, inherit);
    color: var(--appliance-text);
    overflow: hidden;
    position: relative;
    user-select: none;
  }

  /* ── Header ── */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .header-left {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }
  .title-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .header-icon {
    --mdc-icon-size: 24px;
    color: var(--appliance-accent);
    flex-shrink: 0;
  }
  .title {
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .subtitle {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--appliance-text-2);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  /* 40px Symmetrical Action Buttons */
  .collapse-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--appliance-border);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--appliance-surface);
    color: var(--appliance-text-2);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
  }
  .collapse-btn:hover {
    background: var(--appliance-surface-hover);
    color: var(--appliance-text);
  }
  .collapse-btn ha-icon {
    --mdc-icon-size: 20px;
    transition: transform 0.25s ease;
  }
  .collapse-btn.collapsed ha-icon {
    transform: rotate(180deg);
  }

  .power-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--appliance-border);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--appliance-surface);
    color: var(--appliance-text);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
  }
  .power-btn:hover:not(.disabled) {
    background: var(--appliance-surface-hover);
  }
  .power-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .power-btn.on {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
    border-color: var(--appliance-accent);
    box-shadow: 0 4px 14px color-mix(in srgb, var(--appliance-accent) 40%, transparent);
  }
  .power-btn ha-icon {
    --mdc-icon-size: 20px;
  }

  /* ── Porthole & Drum Progress Ring ── */
  .porthole-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 12px 0 16px;
    position: relative;
  }
  .porthole-ring-wrapper {
    position: relative;
    width: 164px;
    height: 164px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .porthole-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }
  .ring-track {
    fill: none;
    stroke: color-mix(in srgb, var(--appliance-border) 60%, transparent);
    stroke-width: 6;
  }
  .ring-progress {
    fill: none;
    stroke: var(--appliance-accent);
    stroke-width: 6;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .ring-progress.active {
    filter: drop-shadow(0 0 6px color-mix(in srgb, var(--appliance-accent) 60%, transparent));
  }
  .drum-porthole {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: var(--appliance-surface);
    border: 1px solid var(--appliance-border);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  /* Drum rotation baffles - mechanical wash animation without arrows */
  .drum-baffles {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    opacity: 0.12;
  }
  .drum-baffles.spinning {
    animation: drum-spin 2.5s linear infinite;
  }
  .drum-baffles.fast-spin {
    animation: drum-spin 0.7s linear infinite;
  }
  .drum-baffles::before,
  .drum-baffles::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 84%;
    background: var(--appliance-text-1);
    border-radius: 2px;
  }
  .drum-baffles::after {
    transform: rotate(60deg);
  }

  @keyframes drum-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .porthole-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 6px;
  }
  .porthole-hero-time {
    font-size: 1.85rem;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.5px;
  }
  .porthole-phase {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-top: 4px;
    color: var(--appliance-accent);
    padding: 2px 8px;
    border-radius: 12px;
    background: color-mix(in srgb, var(--appliance-accent) 15%, transparent);
  }
  .porthole-submetrics {
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--appliance-text-2);
    margin-top: 3px;
  }

  /* ── Cycle Action Buttons (Start, Pause, Cancel) ── */
  .cycle-actions-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 16px;
    width: 100%;
  }
  .action-btn {
    flex: 1;
    max-width: 120px;
    height: 42px;
    border-radius: 14px;
    border: 1px solid var(--appliance-border);
    background: var(--appliance-surface);
    color: var(--appliance-text);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
  }
  .action-btn:hover:not(.disabled) {
    background: var(--appliance-surface-hover);
    border-color: color-mix(in srgb, var(--appliance-text) 30%, transparent);
  }
  .action-btn.primary {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
    border-color: var(--appliance-accent);
    box-shadow: 0 2px 10px color-mix(in srgb, var(--appliance-accent) 35%, transparent);
  }
  .action-btn.primary:hover:not(.disabled) {
    box-shadow: 0 4px 14px color-mix(in srgb, var(--appliance-accent) 50%, transparent);
  }
  .action-btn.cancel:hover:not(.disabled) {
    background: color-mix(in srgb, #ef4444 15%, var(--appliance-surface));
    color: #ef4444;
    border-color: #ef4444;
  }
  .action-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .action-btn ha-icon {
    --mdc-icon-size: 18px;
  }

  /* ── Section Dividers & Headers ── */
  .section-label {
    font-size: 0.74rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: var(--appliance-text-2);
    margin: 12px 0 6px 2px;
  }

  /* ── Segmented Selector Bar ── */
  .segmented-bar {
    display: flex;
    align-items: center;
    background: rgba(128, 128, 128, 0.08);
    border: 1px solid var(--appliance-border);
    border-radius: 16px;
    padding: 3px;
    gap: 3px;
    overflow-x: auto;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    margin-bottom: 10px;
  }
  .segmented-bar::-webkit-scrollbar {
    display: none;
  }
  .segmented-bar.scrollable {
    justify-content: flex-start;
  }
  .segmented-bar.scrollable .segment-btn {
    flex: 0 0 auto;
    min-width: max-content;
    padding: 0 16px;
  }
  .segment-btn {
    flex: 1;
    min-width: 58px;
    height: 36px;
    border-radius: 11px;
    border: none;
    background: transparent;
    color: var(--appliance-text-2);
    font-size: 0.78rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    outline: none;
    padding: 0 8px;
  }
  .segment-btn:hover:not(.disabled) {
    background: rgba(128, 128, 128, 0.12);
    color: var(--appliance-text);
  }
  .segment-btn.active {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
    font-weight: 700;
    box-shadow: 0 0 16px color-mix(in srgb, var(--appliance-accent) 55%, transparent),
                0 2px 8px color-mix(in srgb, var(--appliance-accent) 35%, transparent);
  }
  .segment-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* ── Auxiliary Chips Row ── */
  .chips-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 12px 0 6px;
  }
  .chip-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 18px;
    border: 1px solid var(--appliance-border);
    background: var(--appliance-surface);
    color: var(--appliance-text);
    font-size: 0.76rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    outline: none;
  }
  .chip-btn:hover:not(.disabled) {
    background: var(--appliance-surface-hover);
  }
  .chip-btn.active {
    background: var(--appliance-active-bg);
    color: var(--appliance-accent);
    border-color: var(--appliance-active-border);
  }
  .chip-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .chip-btn ha-icon {
    --mdc-icon-size: 16px;
  }

  /* ── Diagnostics & Telemetry Footer ── */
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 14px;
    padding-top: 10px;
    border-top: 1px solid var(--appliance-border);
    font-size: 0.73rem;
    font-weight: 600;
    color: var(--appliance-text-2);
    flex-wrap: wrap;
    text-align: center;
  }
  .footer-item {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
  .footer-item ha-icon {
    --mdc-icon-size: 15px;
    color: var(--appliance-text-2);
  }
  .footer-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    display: inline-block;
  }
  .footer-dot.green {
    background: #10b981;
  }
  .footer-dot.red {
    background: #ef4444;
  }
  .footer-dot.warning {
    background: #f59e0b;
  }

  /* ── Compact View ── */
  .compact-view {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .compact-info {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  .compact-title {
    font-size: 0.95rem;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .compact-state {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--appliance-accent);
  }
  .compact-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }
  .compact-action-icon {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid var(--appliance-border);
    background: var(--appliance-surface);
    color: var(--appliance-text);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    transition: all 0.2s ease;
  }
  .compact-action-icon:hover:not(.disabled) {
    background: var(--appliance-surface-hover);
  }
  .compact-action-icon.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .compact-action-icon.on {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
    border-color: var(--appliance-accent);
  }
  .compact-action-icon ha-icon {
    --mdc-icon-size: 18px;
  }

  /* ──────────────────────────────────────────────────────────
     Google Home Full View
     ────────────────────────────────────────────────────────── */
  .gh-full-card {
    background: var(--appliance-bg);
    border-radius: 28px;
    border: none;
    box-shadow: none;
    padding: 16px;
    box-sizing: border-box;
  }
  .gh-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
  }
  .gh-header-left {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }
  .gh-icon {
    color: var(--appliance-text-2);
    --mdc-icon-size: 22px;
    flex-shrink: 0;
  }
  .gh-title {
    font-weight: 500;
    font-size: 1.05rem;
    color: var(--appliance-text-1);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .gh-power-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: var(--appliance-text-2);
    cursor: pointer;
    transition: 0.2s;
    outline: none;
    flex-shrink: 0;
  }
  .gh-power-btn:hover {
    background: rgba(128, 128, 128, 0.15);
  }
  .gh-power-btn.on {
    background: var(--appliance-active-bg, rgba(38, 166, 154, 0.2));
    color: var(--appliance-accent);
  }
  .gh-power-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .gh-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
  }
  .gh-value-large {
    font-size: 4.6rem;
    font-weight: 400;
    line-height: 1.1;
    color: var(--appliance-text-1);
    letter-spacing: -1px;
  }
  .gh-subtitle-large {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--appliance-text-2);
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .gh-mode-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 14px;
    border-radius: 20px;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--appliance-on-accent, #ffffff);
    background: var(--appliance-accent);
    letter-spacing: 0.02em;
  }
  .gh-action-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 16px 0 24px 0;
  }
  .gh-circular-btn {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgba(128, 128, 128, 0.15);
    border: none;
    color: var(--appliance-text-1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s;
    outline: none;
    gap: 2px;
  }
  .gh-circular-btn:hover:not(.disabled) {
    background: rgba(128, 128, 128, 0.25);
  }
  .gh-circular-btn.primary {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
  }
  .gh-circular-btn.active {
    background: var(--appliance-active-bg, rgba(38, 166, 154, 0.25));
    color: var(--appliance-accent);
    border: 1px solid var(--appliance-accent);
  }
  .gh-circular-btn.disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
  .gh-circular-btn ha-icon {
    --mdc-icon-size: 26px;
  }
  .gh-circular-label {
    font-size: 0.68rem;
    font-weight: 600;
  }
  .gh-select-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-bottom: 12px;
  }
  .gh-select-wrapper {
    flex: 1 1 calc(50% - 8px);
    min-width: 130px;
    position: relative;
  }
  .gh-select-wrapper.active {
    z-index: 100;
  }
  .gh-custom-select {
    width: 100%;
    background: rgba(128, 128, 128, 0.15);
    border-radius: 20px;
    border: none;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px 0 16px;
    color: var(--appliance-text-1);
    font-size: 0.92rem;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    user-select: none;
    box-sizing: border-box;
    transition: background 0.2s ease;
  }
  .gh-custom-select:hover:not(.disabled) {
    background: rgba(128, 128, 128, 0.22);
  }
  .gh-custom-select.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .gh-custom-select ha-icon {
    --mdc-icon-size: 18px;
    color: var(--appliance-text-2);
  }
  .gh-dropdown-menu {
    position: absolute;
    bottom: calc(100% + 4px);
    left: 0;
    right: 0;
    background: var(--appliance-surface, #232328);
    border: 1px solid var(--appliance-border);
    border-radius: 18px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    max-height: 220px;
    overflow-y: auto;
    z-index: 1000;
    padding: 6px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .gh-dropdown-item {
    background: transparent;
    border: none;
    color: var(--appliance-text-1);
    font-size: 0.88rem;
    padding: 10px 14px;
    border-radius: 12px;
    text-align: left;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.15s ease;
  }
  .gh-dropdown-item:hover {
    background: rgba(128, 128, 128, 0.15);
  }
  .gh-dropdown-item.active {
    background: color-mix(in srgb, var(--appliance-accent) 20%, transparent);
    color: var(--appliance-accent);
    font-weight: 600;
  }
`;
