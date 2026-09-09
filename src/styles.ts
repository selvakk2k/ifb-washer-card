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

  /* ── Material Design 3 Porthole & Drum Progress Ring ── */
  .porthole-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 14px 0 18px;
    position: relative;
    width: 100%;
  }
  .dial-flank {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 72px;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .dial-flank.runtime-flank {
    cursor: default;
  }
  .dial-flank.disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
  .dial-flank-icon-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1.5px solid var(--appliance-border);
    background: var(--appliance-surface);
    color: var(--appliance-text-2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  .dial-flank-icon-btn ha-icon {
    --mdc-icon-size: 20px;
  }
  .dial-flank:hover:not(.disabled):not(.runtime-flank) .dial-flank-icon-btn {
    background: var(--appliance-surface-hover);
    color: var(--appliance-text);
  }
  .dial-flank:active:not(.disabled):not(.runtime-flank) .dial-flank-icon-btn {
    transform: scale(0.94);
  }
  .dial-flank-icon-btn.active {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
    border-color: var(--appliance-accent);
    box-shadow: 0 4px 14px color-mix(in srgb, var(--appliance-accent) 40%, transparent);
  }
  .dial-flank-label {
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--appliance-text-2);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: 2px;
  }
  .dial-flank-status {
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--appliance-text);
  }
  .dial-flank.active .dial-flank-status {
    color: var(--appliance-accent);
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
    border: 1.5px solid var(--appliance-border);
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
    font-size: 1.95rem;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--appliance-text);
  }
  .porthole-phase {
    font-size: 0.74rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-top: 4px;
    color: var(--appliance-accent);
    padding: 2px 8px;
    border-radius: 10px;
    background: color-mix(in srgb, var(--appliance-accent) 15%, transparent);
  }
  .porthole-submetrics {
    font-size: 0.72rem;
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

  /* ── Wash Program, Temp, Spin & Delay Setting Tiles ── */
  .setting-tiles {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-bottom: 8px;
  }
  .setting-tile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px solid var(--appliance-border);
    background: var(--appliance-surface);
    cursor: pointer;
    transition: all 0.18s ease;
    text-align: left;
    min-width: 0;
  }
  .setting-tile:hover:not(:disabled):not(.disabled) {
    background: var(--appliance-surface-hover);
    border-color: color-mix(in srgb, var(--appliance-accent) 40%, var(--appliance-border));
  }
  .setting-tile.active {
    background: var(--appliance-active-bg);
    border-color: var(--appliance-active-border);
  }
  .setting-tile:disabled, .setting-tile.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .setting-tile-label {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.68rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--appliance-text-2);
  }
  .setting-tile-label ha-icon {
    --mdc-icon-size: 13px;
    color: var(--appliance-text-2);
  }
  .setting-tile-value-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 6px;
  }
  .setting-tile-value {
    font-size: 0.92rem;
    font-weight: 800;
    color: var(--appliance-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .setting-tile-chevron {
    --mdc-icon-size: 14px;
    color: var(--appliance-text-2);
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }
  .setting-tile.active .setting-tile-chevron {
    transform: rotate(180deg);
    color: var(--appliance-accent);
  }

  /* ── Picker panel (setting options) ── */
  .picker-panel {
    margin-bottom: 12px;
    border-radius: 14px;
    background: var(--appliance-surface);
    border: 1px solid var(--appliance-border);
    padding: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    animation: slideDown 0.15s ease;
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .picker-opt {
    padding: 8px 14px;
    border-radius: 16px;
    border: 1px solid var(--appliance-border);
    background: transparent;
    color: var(--appliance-text-2);
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s;
    outline: none;
  }
  .picker-opt:hover {
    background: var(--appliance-surface-hover);
    color: var(--appliance-text);
  }
  .picker-opt.sel {
    background: var(--appliance-active-bg);
    border-color: var(--appliance-active-border);
    color: var(--appliance-accent);
    font-weight: 700;
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
  .footer-item.interactive {
    cursor: pointer;
    transition: color 0.15s ease;
  }
  .footer-item.interactive:hover {
    color: var(--appliance-text);
  }
  .footer-item.interactive:hover ha-icon {
    color: var(--appliance-accent);
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

  /* ── Compact Card (Material You / Classic aligned with AC card) ── */
  .compact-card {
    background: var(--appliance-bg);
    border: 1px solid var(--appliance-border);
    border-radius: var(--ha-card-border-radius, 20px);
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;
    cursor: pointer;
  }
  .compact-card.classic {
    border-radius: 16px;
  }
  .compact-card.classic .compact-icon-btn {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    border: 1px solid var(--appliance-border);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--appliance-surface);
    color: var(--appliance-text);
    transition: all 0.2s ease;
    flex-shrink: 0;
  }
  .compact-card.classic .compact-icon-btn.on {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
    border-color: var(--appliance-accent);
    box-shadow: 0 4px 14px color-mix(in srgb, var(--appliance-accent) 40%, transparent);
  }
  .compact-card.classic .compact-action-btn {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    border: 1px solid var(--appliance-border);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--appliance-surface);
    color: var(--appliance-text);
    transition: all 0.2s ease;
    flex-shrink: 0;
  }
  .compact-card.classic .compact-value {
    font-size: 2.4rem;
    font-weight: 800;
    color: var(--appliance-text);
  }

  /* Google Home Compact */
  .compact-card.google-home {
    background: var(--appliance-bg);
    border-radius: 28px;
    border: none;
    box-shadow: none;
    padding: 16px;
  }
  .compact-card.google-home .compact-icon-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(128, 128, 128, 0.15);
    color: var(--appliance-text-2);
    transition: all 0.2s ease;
    flex-shrink: 0;
  }
  .compact-card.google-home .compact-icon-btn.on {
    background: var(--appliance-active-bg);
    color: var(--appliance-accent);
    box-shadow: 0 0 14px color-mix(in srgb, var(--appliance-accent) 35%, transparent);
  }
  .compact-card.google-home .compact-action-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(128, 128, 128, 0.15);
    color: var(--appliance-text);
    transition: all 0.2s ease;
    flex-shrink: 0;
  }
  .compact-card.google-home .compact-value {
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--appliance-text);
  }

  .compact-header {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .compact-title {
    font-size: 1rem;
    font-weight: 600;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--appliance-text);
  }
  .compact-chevron {
    color: var(--appliance-text-2);
    opacity: 0.7;
    --mdc-icon-size: 22px;
  }
  .compact-center {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
  }
  .compact-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4px;
  }
  .compact-icon-btn:hover {
    background: var(--appliance-surface-hover);
  }
  .compact-icon-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .compact-action-btn:hover {
    background: var(--appliance-surface-hover);
  }
  .compact-action-btn:disabled,
  .compact-action-btn.disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  .compact-subtitle {
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--appliance-text-2);
    text-align: center;
  }

  /* ── Modifier Chips Row ── */
  /* ── Modifier Chips Layout ── */
  .modifiers-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 14px;
  }
  .modifiers-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .modifiers-subheading {
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--appliance-text-2);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .modifiers-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 100%;
  }
  .modifier-chip {
    flex: 1 1 calc(33.333% - 8px);
    min-width: 95px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 0 10px;
    border-radius: 12px;
    border: 1px solid var(--appliance-border);
    background: var(--appliance-surface);
    color: var(--appliance-text);
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-sizing: border-box;
    text-align: center;
  }
  .modifier-chip:hover:not(.disabled) {
    background: var(--appliance-surface-hover);
    border-color: color-mix(in srgb, var(--appliance-accent) 40%, var(--appliance-border));
  }
  .modifier-chip.active {
    background: var(--appliance-active-bg);
    color: var(--appliance-accent);
    border-color: var(--appliance-active-border);
    box-shadow: 0 2px 8px color-mix(in srgb, var(--appliance-accent) 25%, transparent);
  }
  .modifier-chip.disabled {
    opacity: 0.38;
    cursor: not-allowed;
  }
  .modifier-chip ha-icon {
    --mdc-icon-size: 16px;
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
  /* ── M3 Open Circular Dial in Google Home View ── */
  .gh-full-card .drum-porthole {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }
  .gh-full-card .ring-track {
    stroke: color-mix(in srgb, var(--appliance-text) 10%, transparent);
    stroke-width: 6;
  }
  .gh-full-card .ring-progress {
    stroke: var(--appliance-accent);
    stroke-width: 6;
    stroke-linecap: round;
  }
  .gh-full-card .dial-flank-icon-btn {
    border: none;
    background: color-mix(in srgb, var(--appliance-text) 8%, transparent);
    color: var(--appliance-text-2);
    box-shadow: none;
  }
  .gh-full-card .dial-flank:hover:not(.disabled):not(.runtime-flank) .dial-flank-icon-btn {
    background: color-mix(in srgb, var(--appliance-text) 16%, transparent);
    color: var(--appliance-text);
  }
  .gh-full-card .dial-flank-icon-btn.active {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
    box-shadow: 0 4px 14px color-mix(in srgb, var(--appliance-accent) 40%, transparent);
  }
  .gh-full-card .porthole-phase {
    border-radius: 12px;
    padding: 3px 10px;
    font-size: 0.74rem;
    letter-spacing: 0.04em;
    background: color-mix(in srgb, var(--appliance-accent) 18%, transparent);
    color: var(--appliance-accent);
  }
  .gh-full-card .porthole-hero-time {
    font-size: 2.1rem;
    font-weight: 500;
    color: var(--appliance-text);
  }
  .gh-full-card.is-off .porthole-hero-time {
    color: var(--appliance-text-2);
    opacity: 0.6;
  }
  .gh-full-card.is-off .dial-flank {
    opacity: 0.35;
    pointer-events: none;
  }
  .porthole-container.disabled {
    opacity: 0.7;
  }
  .porthole-container.disabled .dial-flank {
    opacity: 0.35;
    pointer-events: none;
  }
  .gh-action-row {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 28px;
    padding: 6px 0 20px 0;
  }
  .gh-action-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }
  .gh-action-circle {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background: color-mix(in srgb, var(--appliance-text) 8%, transparent);
    border: none;
    color: var(--appliance-text);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  .gh-action-circle:hover:not(.disabled) {
    background: color-mix(in srgb, var(--appliance-text) 16%, transparent);
    transform: translateY(-1px);
  }
  .gh-action-circle:active:not(.disabled) {
    transform: scale(0.94);
  }
  .gh-action-circle.primary {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
    box-shadow: 0 4px 14px color-mix(in srgb, var(--appliance-accent) 40%, transparent);
  }
  .gh-action-circle.active {
    background: var(--appliance-active-bg, color-mix(in srgb, var(--appliance-accent) 25%, transparent));
    color: var(--appliance-accent);
    border: 1.5px solid var(--appliance-accent);
  }
  .gh-action-circle.disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
  .gh-action-circle ha-icon {
    --mdc-icon-size: 24px;
  }
  .gh-action-label {
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--appliance-text-2);
    letter-spacing: 0.02em;
    text-transform: capitalize;
  }
  .gh-circular-btn {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background: color-mix(in srgb, var(--appliance-text) 8%, transparent);
    border: none;
    color: var(--appliance-text);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
    gap: 2px;
  }
  .gh-circular-btn.primary {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
    box-shadow: 0 4px 14px color-mix(in srgb, var(--appliance-accent) 40%, transparent);
  }
  .gh-circular-btn ha-icon {
    --mdc-icon-size: 24px;
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
