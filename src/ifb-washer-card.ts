import { LitElement, html, nothing, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { IFBWasherCardConfig } from './types';
import { styles } from './styles';

// Program Capabilities per Official Wash Guide Map (Pages 57-67)
// Program Capabilities per Official Wash Guide Map (Pages 57-67) & Dry Mode Gating
const PROGRAM_CAPABILITIES: Record<string, {
  allowedTemps?: string[];
  allowedSpins?: string[];
  allowedDryModes?: string[];
  supportsDry?: boolean;
  supportsSteam?: boolean;
  supportsPrewash?: boolean;
  supportsSoak?: boolean;
  supportsTimeSaver?: boolean;
  supportsExtraRinse?: boolean;
  supportsHotRinse?: boolean;
  supportsRinseHold?: boolean;
  supportsEco?: boolean;
  supportsAroma?: boolean;
  supportsAntiCrease?: boolean;
}> = {
  'Wash + Dry 2Hr': {
    allowedTemps: ['Cold', '30°C', '40°C'],
    allowedSpins: ['400 RPM', '600 RPM', '800 RPM', '1000 RPM', '1200 RPM'],
    allowedDryModes: [
      'No Dry', 'Cupboard Dry', 'Iron Dry', 'Eco Dry', 'Gentle Dry',
      '30 Minutes', '1 Hour', '1 Hour 30 Minutes', '2 Hours',
    ],
    supportsDry: true,
    supportsSteam: false,
    supportsPrewash: false,
    supportsSoak: false,
  },
  'Wash + Dry 4Hr': {
    allowedTemps: ['Cold', '30°C', '40°C'],
    allowedSpins: ['400 RPM', '600 RPM', '800 RPM', '1000 RPM', '1200 RPM', '1400 RPM'],
    allowedDryModes: [
      'No Dry', 'Cupboard Dry', 'Iron Dry', 'Eco Dry', 'Gentle Dry',
      '30 Minutes', '1 Hour', '1 Hour 30 Minutes', '2 Hours', '2 Hours 30 Minutes',
      '3 Hours', '3 Hours 30 Minutes', '4 Hours', '4 Hours 30 Minutes',
      '5 Hours', '5 Hours 30 Minutes', '6 Hours',
    ],
    supportsDry: true,
    supportsSteam: false,
    supportsPrewash: false,
    supportsSoak: false,
  },
  'Steam & Dry': {
    allowedTemps: ['Cold', '30°C', '40°C'],
    allowedSpins: ['400 RPM', '600 RPM', '800 RPM', '1000 RPM', '1200 RPM', '1400 RPM'],
    allowedDryModes: [
      'No Dry', 'Cupboard Dry', 'Iron Dry', 'Eco Dry', 'Gentle Dry',
      '30 Minutes', '1 Hour', '1 Hour 30 Minutes', '2 Hours', '2 Hours 30 Minutes',
      '3 Hours', '3 Hours 30 Minutes', '4 Hours',
    ],
    supportsDry: true,
    supportsSteam: true,
    supportsPrewash: false,
    supportsSoak: false,
  },
  'Refresh': {
    allowedTemps: ['Cold'],
    allowedSpins: ['No Spin'],
    allowedDryModes: ['No Dry'],
    supportsDry: false,
    supportsSteam: true,
    supportsPrewash: false,
    supportsSoak: false,
    supportsExtraRinse: false,
    supportsHotRinse: false,
    supportsRinseHold: false,
    supportsEco: false,
  },
  'Power Steam': {
    allowedTemps: ['Cold', '30°C', '40°C'],
    allowedSpins: ['No Spin', '400 RPM', '600 RPM', '800 RPM'],
    allowedDryModes: ['No Dry'],
    supportsDry: false,
    supportsSteam: true,
  },
  'CradleWash®': {
    allowedTemps: ['Cold', '30°C', '40°C'],
    allowedSpins: ['No Spin', '400 RPM', '600 RPM'],
    allowedDryModes: ['No Dry', 'Cradle Dry', '30 Minutes', '1 Hour'],
    supportsDry: true,
    supportsSteam: false,
    supportsPrewash: false,
    supportsSoak: false,
    supportsTimeSaver: false,
  },
  'Wool': {
    allowedTemps: ['Cold', '30°C', '40°C'],
    allowedSpins: ['No Spin', '400 RPM', '600 RPM', '800 RPM'],
    allowedDryModes: ['No Dry', 'Gentle Dry', '30 Minutes', '1 Hour'],
    supportsDry: true,
    supportsSteam: false,
    supportsPrewash: false,
    supportsSoak: false,
    supportsTimeSaver: false,
  },
  'Bulky': {
    allowedTemps: ['Cold', '40°C', '60°C'],
    allowedSpins: ['No Spin', '400 RPM', '600 RPM', '800 RPM'],
    allowedDryModes: [
      'No Dry', 'Cupboard Dry',
      '30 Minutes', '1 Hour', '1 Hour 30 Minutes', '2 Hours', '2 Hours 30 Minutes',
      '3 Hours', '3 Hours 30 Minutes', '4 Hours',
    ],
    supportsDry: true,
  },
  'Baby Wear': {
    allowedTemps: ['Cold', '40°C', '60°C'],
    allowedSpins: ['No Spin', '400 RPM', '600 RPM', '800 RPM'],
    allowedDryModes: [
      'No Dry', 'Cupboard Dry', 'Iron Dry',
      '30 Minutes', '1 Hour', '1 Hour 30 Minutes', '2 Hours',
    ],
    supportsDry: true,
    supportsSteam: true,
  },
  'Anti-Allergen': {
    allowedTemps: ['40°C', '60°C', '95°C'],
    allowedSpins: ['No Spin', '400 RPM', '600 RPM', '800 RPM', '1000 RPM'],
    allowedDryModes: [
      'No Dry', 'Cupboard Dry', 'Iron Dry',
      '30 Minutes', '1 Hour', '1 Hour 30 Minutes', '2 Hours', '2 Hours 30 Minutes', '3 Hours',
    ],
    supportsDry: true,
    supportsSteam: true,
  },
  'Synthetic': {
    allowedTemps: ['Cold', '30°C', '40°C', '60°C'],
    allowedSpins: ['No Spin', '400 RPM', '600 RPM', '800 RPM', '1000 RPM', '1200 RPM'],
    allowedDryModes: [
      'No Dry', 'Cupboard Dry', 'Iron Dry', 'Gentle Dry',
      '30 Minutes', '1 Hour', '1 Hour 30 Minutes', '2 Hours',
    ],
    supportsDry: true,
  },
  'Cotton': {
    allowedTemps: ['Cold', '30°C', '40°C', '60°C', '95°C'],
    allowedSpins: ['No Spin', '400 RPM', '600 RPM', '800 RPM', '1000 RPM', '1200 RPM', '1400 RPM'],
    allowedDryModes: [
      'No Dry', 'Cupboard Dry', 'Iron Dry', 'Eco Dry',
      '30 Minutes', '1 Hour', '1 Hour 30 Minutes', '2 Hours', '2 Hours 30 Minutes',
      '3 Hours', '3 Hours 30 Minutes', '4 Hours',
    ],
    supportsDry: true,
  },
  'Mix / Daily': {
    allowedTemps: ['Cold', '30°C', '40°C', '60°C'],
    allowedSpins: ['No Spin', '400 RPM', '600 RPM', '800 RPM', '1000 RPM', '1200 RPM'],
    allowedDryModes: [
      'No Dry', 'Cupboard Dry', 'Iron Dry', 'Eco Dry',
      '30 Minutes', '1 Hour', '1 Hour 30 Minutes', '2 Hours', '2 Hours 30 Minutes', '3 Hours',
    ],
    supportsDry: true,
  },
  'Express 15\'': {
    allowedTemps: ['Cold', '30°C', '40°C'],
    allowedSpins: ['No Spin', '400 RPM', '600 RPM', '800 RPM', '1000 RPM', '1200 RPM'],
    allowedDryModes: ['No Dry', '30 Minutes'],
    supportsDry: true,
    supportsPrewash: false,
    supportsSoak: false,
    supportsTimeSaver: false,
  },
  'Tub Clean': {
    allowedTemps: ['Cold', '60°C', '95°C'],
    allowedSpins: ['No Spin', '400 RPM', '600 RPM', '800 RPM'],
    allowedDryModes: ['No Dry'],
    supportsDry: false,
    supportsSteam: false,
    supportsPrewash: false,
    supportsSoak: false,
    supportsTimeSaver: false,
    supportsExtraRinse: false,
    supportsHotRinse: false,
    supportsRinseHold: false,
    supportsEco: false,
    supportsAroma: false,
    supportsAntiCrease: false,
  },
  'Spin Dry / Drain': {
    allowedTemps: ['Cold'],
    allowedSpins: ['No Spin', '400 RPM', '600 RPM', '800 RPM', '1000 RPM', '1200 RPM', '1400 RPM'],
    allowedDryModes: ['No Dry'],
    supportsDry: false,
    supportsSteam: false,
    supportsPrewash: false,
    supportsSoak: false,
    supportsTimeSaver: false,
    supportsExtraRinse: false,
    supportsHotRinse: false,
    supportsRinseHold: false,
    supportsEco: false,
    supportsAroma: false,
    supportsAntiCrease: false,
  },
  'Rinse + Spin': {
    allowedTemps: ['Cold'],
    allowedSpins: ['No Spin', '400 RPM', '600 RPM', '800 RPM', '1000 RPM', '1200 RPM', '1400 RPM'],
    allowedDryModes: ['No Dry'],
    supportsDry: false,
    supportsSteam: false,
    supportsPrewash: false,
    supportsSoak: false,
    supportsTimeSaver: false,
    supportsExtraRinse: true,
    supportsHotRinse: false,
    supportsRinseHold: true,
    supportsEco: false,
    supportsAroma: true,
    supportsAntiCrease: true,
  },
};

// Nominal cycle run times (minutes) from Official Wash Guide Map
const PROGRAM_DURATIONS: Record<string, number> = {
  'Mix / Daily': 72,
  'Cotton': 163,
  'Anti-Allergen': 155,
  'Baby Wear': 148,
  'Synthetic': 89,
  'Bulky': 85,
  'Wool': 50,
  'CradleWash®': 48,
  'Express 15\'': 15,
  'Power Steam': 105,
  'Refresh': 30,
  'Steam & Dry': 210,
  'Wash + Dry 4Hr': 240,
  'Wash + Dry 2Hr': 120,
  'Tub Clean': 90,
  'Spin Dry / Drain': 16,
  'Rinse + Spin': 28,
};

// Plain English descriptions for programs, modifiers, and dry modes
const HELP_DESCRIPTIONS: Record<string, string> = {
  // Programs
  'Mix / Daily': 'Everyday mixed colored cotton and synthetic garments (up to 4 kg). Nominal run time: 72 min.',
  'Cotton': 'Heavily soiled bedsheets, towels, jeans, shirts, whites, and colorfast linens. Nominal run time: 163 min.',
  'Anti-Allergen': 'Hot hygiene wash designed to neutralize house dust mites, pollen, pet dander, and bacterial spores. Nominal run time: 155 min.',
  'Baby Wear': 'Delicate yet hygienic wash for infant wear and soft fabrics. Nominal run time: 148 min.',
  'Synthetic': 'Non-iron garments made of polyester, nylon, acrylic, or blended synthetics. Nominal run time: 89 min.',
  'Bulky': 'Bulky single-item loads such as lightweight quilts, bedspreads, blankets, curtains, and bathrobes. Nominal run time: 85 min.',
  'Wool': 'Pure new wool garments labelled machine-washable. Nominal run time: 50 min.',
  'CradleWash®': 'Ultra-gentle cradle wash for silks, chiffons, delicate lace, and hand-wash-only garments. Nominal run time: 48 min.',
  'Express 15\'': 'Rapid refresh cycle for lightly soiled workout clothes or just-worn shirts (up to 1.5 kg). Nominal run time: 15 min.',
  'Power Steam': 'Intensive wash with deep steam infusion to sanitize and loosen tough grime. Nominal run time: 105 min.',
  'Refresh': 'Non-washing steam refresh cycle to eliminate stale wardrobe odors, smoke, and creases without water wash. Nominal run time: 30 min.',
  'Steam & Dry': 'Continuous wash, steam deodorization, and condensing drying cycle. Nominal run time: 210 min.',
  'Wash + Dry 4Hr': 'Complete automatic wash and high-capacity condensation dry cycle. Nominal run time: 240 min.',
  'Wash + Dry 2Hr': 'Fast turnaround wash and dry cycle for small loads (up to 2 kg). Nominal run time: 120 min.',
  'Tub Clean': 'Special 90°C high-heat sanitation cycle to sterilize drum and flush detergent residue. Nominal run time: 90 min.',
  'Spin Dry / Drain': 'Drain machine water and spin dry without wash or rinse. Nominal run time: 16 min.',
  'Rinse + Spin': 'Rinse garments with clean water and high-speed spin without washing. Nominal run time: 28 min.',

  // Modifiers
  'Pre-wash': 'Adds a preliminary soak and pre-rinse before the main wash cycle to loosen heavy surface dirt.',
  'Soak': 'Introduces a standing drum soak with detergent water before agitation starts.',
  'Steam': 'Injects pure steam into the drum during the cycle to sanitize fabrics and soften creases.',
  'Time Saver': 'Reduces overall cycle time by accelerating agitation and heating for lightly soiled garments.',
  'Eco': 'Optimizes energy and water consumption by slightly lowering temperature and extending gentle mechanical action.',
  'Extra Rinse': 'Adds additional freshwater rinse cycles (up to 3) to thoroughly purge detergent residue.',
  'Hot Rinse': 'Executes final rinse with warm water to relax fabric fibers and accelerate subsequent spin extraction.',
  'Rinse Hold': 'Holds laundry in final rinse water without draining or spinning to prevent creasing until ready.',
  'Aroma': 'Dispenses fabric softener at the ideal thermal window to maximize fresh scent retention.',
  'Anti-Crease': 'Intermittently rotates drum after cycle completes to keep clothes unwrinkled until unloaded.',
  'Child Lock': 'Locks physical machine control panel buttons and dial to prevent accidental interference.',

  // Dry Modes
  'No Dry': 'Washing only; condensation heater and dryer fan remain off.',
  'Cupboard Dry': 'Dries garments completely so they can be folded and stored directly into wardrobes.',
  'Iron Dry': 'Leaves a faint trace of residual moisture in fabrics for effortless steam ironing.',
  'Eco Dry': 'Low-energy condensing drying cycle using lower thermal temperatures for energy efficiency.',
  'Gentle Dry': 'Low-temperature gentle tumbling for temperature-sensitive delicate fabrics and synthetics.',
  'Cradle Dry': 'Ultra-gentle dry cycle exclusively calibrated for silks, wool, and delicate garments.',
  '30 Minutes': 'Timed condensation drying for 30 minutes.',
  '1 Hour': 'Timed condensation drying for 1 hour.',
  '1 Hour 30 Minutes': 'Timed condensation drying for 1 hour 30 minutes.',
  '2 Hours': 'Timed condensation drying for 2 hours.',
  '2 Hours 30 Minutes': 'Timed condensation drying for 2 hours 30 minutes.',
  '3 Hours': 'Timed condensation drying for 3 hours.',
  '3 Hours 30 Minutes': 'Timed condensation drying for 3 hours 30 minutes.',
  '4 Hours': 'Timed condensation drying for 4 hours.',
  '4 Hours 30 Minutes': 'Timed condensation drying for 4 hours 30 minutes.',
  '5 Hours': 'Timed condensation drying for 5 hours.',
  '5 Hours 30 Minutes': 'Timed condensation drying for 5 hours 30 minutes.',
  '6 Hours': 'Timed condensation drying for 6 hours.',
};

export class IFBWasherCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: IFBWasherCardConfig;
  @state() private _expanded = false;
  @state() private _openPanel: 'program' | 'temp' | 'spin' | 'delay' | 'extra_rinse' | 'dry_mode' | null = null;
  @state() private _ghDropdown: 'program' | 'spin' | 'temp' | 'delay' | 'extra_rinse' | 'dry_mode' | null = null;

  private _longPressTimer: any = null;
  private _isLongPress = false;

  private _handleTouchStart(text: string) {
    this._isLongPress = false;
    this._longPressTimer = setTimeout(() => {
      this._isLongPress = true;
      this._showToast(text);
      if (typeof navigator !== 'undefined' && (navigator as any).vibrate) {
        (navigator as any).vibrate(50);
      }
    }, 500);
  }

  private _handleTouchEnd() {
    if (this._longPressTimer) {
      clearTimeout(this._longPressTimer);
      this._longPressTimer = null;
    }
  }

  private _handleWindowClick = (e: MouseEvent) => {
    const path = e.composedPath();
    if ((this._ghDropdown || this._openPanel) && !path.includes(this)) {
      this._ghDropdown = null;
      this._openPanel = null;
    }
  };

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('click', this._handleWindowClick);
  }

  disconnectedCallback(): void {
    window.removeEventListener('click', this._handleWindowClick);
    super.disconnectedCallback();
  }

  static get styles() {
    return styles;
  }

  public setConfig(config: IFBWasherCardConfig): void {
    if (!config) {
      throw new Error('Please define a valid configuration');
    }
    this._config = {
      theme: 'default',
      layout: 'default',
      ...config,
    };
  }

  protected updated(changedProps: PropertyValues): void {
    super.updated(changedProps);
    if (changedProps.has('_config')) {
      const theme = this._config?.theme || 'default';
      if (theme === 'default') {
        this.removeAttribute('theme');
      } else {
        this.setAttribute('theme', theme);
      }

      if (this._config?.accent_color) {
        this.style.setProperty('--appliance-accent', this._config.accent_color);
      } else {
        this.style.removeProperty('--appliance-accent');
      }

      if (this._config?.main_color) {
        this.style.setProperty('--appliance-bg', this._config.main_color);
      } else {
        this.style.removeProperty('--appliance-bg');
      }
    }
  }

  public getCardSize(): number {
    return this._config?.layout === 'compact' && !this._expanded ? 2 : 5;
  }

  /* ── Native Visual Configuration Editor ── */
  public static getConfigForm() {
    return {
      schema: [
        {
          name: 'entity',
          label: 'Washing Machine Entity (Auto-Discovered if blank)',
          selector: {
            entity: {
              filter: [
                { domain: 'switch' },
                { domain: 'sensor' },
                { domain: 'select' },
              ],
            },
          },
        },
        { name: 'name', label: 'Custom Title (Auto-discovered if blank)', selector: { text: {} } },
        {
          name: 'theme',
          label: 'Theme',
          selector: {
            select: {
              options: [
                { label: 'Default HA Theme', value: 'default' },
                { label: 'Material You (Optimized for Material 3 Theme)', value: 'material_you' },
              ],
            },
          },
        },
        {
          name: 'layout',
          label: 'Card Layout',
          selector: {
            select: {
              options: [
                { label: 'Default (Full)', value: 'default' },
                { label: 'Compact (Expandable)', value: 'compact' },
              ],
            },
          },
        },
        {
          name: 'full_layout',
          label: 'Full View Style',
          selector: {
            select: {
              options: [
                { label: 'Classic', value: 'default' },
                { label: 'Google Home', value: 'google_home' },
              ],
            },
          },
        },
        {
          name: '',
          type: 'expandable',
          title: 'Theming & Colors',
          icon: 'mdi:palette',
          schema: [
            { name: 'accent_color', label: 'Accent Color Override', selector: { ui_color: {} } },
            { name: 'main_color', label: 'Background Color Override', selector: { ui_color: {} } },
          ],
        },
        {
          name: '',
          type: 'expandable',
          title: 'Display Sensors (Auto-Discovered if blank)',
          icon: 'mdi:thermometer',
          schema: [
            { name: 'tub_temp_sensor', label: 'Tub Temperature Sensor', selector: { entity: { domain: 'sensor' } } },
            { name: 'motor_speed_sensor', label: 'Motor Speed Sensor', selector: { entity: { domain: 'sensor' } } },
            { name: 'time_remaining_sensor', label: 'Time Remaining Sensor', selector: { entity: { domain: 'sensor' } } },
            { name: 'cycle_progress_sensor', label: 'Cycle Progress Sensor', selector: { entity: { domain: 'sensor' } } },
            { name: 'door_locked_sensor', label: 'Door Locked Sensor', selector: { entity: { domain: 'binary_sensor' } } },
            { name: 'machine_state_sensor', label: 'Machine State Sensor', selector: { entity: { domain: 'sensor' } } },
            { name: 'program_duration_sensor', label: 'Program Duration Sensor', selector: { entity: { domain: 'sensor' } } },
          ],
        },
        {
          name: '',
          type: 'expandable',
          title: 'Companion Controls (Auto-Discovered if blank)',
          icon: 'mdi:toggle-switch-outline',
          schema: [
            { name: 'power_switch', label: 'Power Switch', selector: { entity: { domain: 'switch' } } },
            { name: 'program_select', label: 'Program Select', selector: { entity: { domain: 'select' } } },
            { name: 'spin_select', label: 'Spin Speed Select', selector: { entity: { domain: 'select' } } },
            { name: 'temperature_select', label: 'Temperature Select', selector: { entity: { domain: 'select' } } },
            { name: 'delay_select', label: 'Delay Start Select', selector: { entity: { domain: 'select' } } },
            { name: 'extra_rinse_select', label: 'Extra Rinse Select', selector: { entity: { domain: 'select' } } },
            { name: 'dry_mode_select', label: 'Dry Mode Select', selector: { entity: { domain: 'select' } } },
            { name: 'start_button', label: 'Start Button', selector: { entity: { domain: 'button' } } },
            { name: 'pause_button', label: 'Pause Button', selector: { entity: { domain: 'button' } } },
            { name: 'cancel_button', label: 'Cancel Button', selector: { entity: { domain: 'button' } } },
            { name: 'child_lock_switch', label: 'Child Lock Switch', selector: { entity: { domain: 'switch' } } },
          ],
        },
      ],
    };
  }

  public static getStubConfig(hass?: HomeAssistant, entities?: string[], entitiesFallback?: string[]) {
    let entity = '';
    if (entities && entities.length) {
      entity = entities.find((e) => e.includes('machine_state') || e.includes('washer')) || entities[0] || '';
    }
    if (!entity && entitiesFallback && entitiesFallback.length) {
      entity = entitiesFallback.find((e) => e.includes('machine_state') || e.includes('washer')) || entitiesFallback[0] || '';
    }
    if (!entity && hass && hass.states) {
      entity = Object.keys(hass.states).find((e) => e.startsWith('sensor.') && e.endsWith('_machine_state')) || '';
    }
    return {
      type: 'custom:ifb-washer-card',
      entity: entity || undefined,
    };
  }

  /* ── Haptics & Feedback ── */
  private _haptic(type: 'light' | 'medium' | 'selection' | 'warning' = 'light'): void {
    window.dispatchEvent(new CustomEvent('haptic', { detail: type }));
  }

  private _showToast(message: string): void {
    this._haptic('warning');
    this.dispatchEvent(
      new CustomEvent('hass-notification', {
        bubbles: true,
        composed: true,
        detail: { message },
      })
    );
  }

  private _resolveStaticCapabilities(programName: string) {
    if (!programName) return {};
    const clean = programName.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (const [key, caps] of Object.entries(PROGRAM_CAPABILITIES)) {
      const cleanKey = key.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (cleanKey === clean || cleanKey.includes(clean) || clean.includes(cleanKey)) {
        return caps;
      }
    }
    return PROGRAM_CAPABILITIES[programName] || {};
  }


  /* ── Entity Auto-Discovery & Prefix Resolution ── */
  private _resolveEntities() {
    let rawId = this._config?.entity || '';
    const c = this._config || ({} as IFBWasherCardConfig);

    let power = c.power_switch;
    let start = c.start_button;
    let pause = c.pause_button;
    let cancel = c.cancel_button;
    let program = c.program_select;
    let programSensor = c.program_sensor;
    let spin = c.spin_select;
    let temp = c.temperature_select;
    let delay = c.delay_select;
    let childLock = c.child_lock_switch;
    let state = c.machine_state_sensor;
    let remaining = c.time_remaining_sensor;
    let progress = c.cycle_progress_sensor;
    let tubTemp = c.tub_temp_sensor;
    let rpm = c.motor_speed_sensor;
    let door = c.door_locked_sensor;
    let extraRinse = c.extra_rinse_select;
    let dryMode = c.dry_mode_select;
    let prewash = c.prewash_switch;
    let soak = c.soak_switch;
    let rinseHold = c.rinse_hold_switch;
    let timeSaver = c.time_saver_switch;
    let hotRinse = c.hot_rinse_switch;
    let eco = c.eco_switch;
    let steam = c.steam_switch;
    let aroma = c.aroma_switch;
    let antiCrease = c.anti_crease_switch;
    let problem = '';
    let deviceId = '';

    // If no entity was explicitly provided, auto-discover any IFB washer entity to anchor device discovery
    if (!rawId && this.hass?.states) {
      const stateKeys = Object.keys(this.hass.states);
      const reg = (this.hass as any)?.entities;
      rawId =
        (reg && stateKeys.find((id) => reg[id]?.platform === 'ifb_washer_local')) ||
        stateKeys.find((id) => id.startsWith('sensor.') && (id.endsWith('_machine_state') || id.includes('washing_machine_machine_state'))) ||
        stateKeys.find(
          (id) => id.startsWith('switch.') && (id.includes('washing_machine') || id.includes('ifb_washer'))
        ) ||
        stateKeys.find(
          (id) => id.startsWith('select.') && (id.includes('washing_machine') || id.includes('ifb_washer'))
        ) ||
        stateKeys.find((id) => id.includes('ifb_washer') || id.includes('washing_machine')) ||
        '';
    }

    if (!rawId && !power && !program && !state) {
      return {
        deviceId: '',
        power: power || '',
        start: start || '',
        pause: pause || '',
        cancel: cancel || '',
        program: program || '',
        programSensor: programSensor || '',
        spin: spin || '',
        temp: temp || '',
        delay: delay || '',
        extraRinse: extraRinse || '',
        dryMode: dryMode || '',
        prewash: prewash || '',
        soak: soak || '',
        rinseHold: rinseHold || '',
        timeSaver: timeSaver || '',
        hotRinse: hotRinse || '',
        eco: eco || '',
        steam: steam || '',
        aroma: aroma || '',
        antiCrease: antiCrease || '',
        childLock: childLock || '',
        state: state || '',
        remaining: remaining || '',
        progress: progress || '',
        tubTemp: tubTemp || '',
        rpm: rpm || '',
        door: door || '',
        problem: '',
      };
    }

    // Smart Device-Level Companion Discovery via Home Assistant Entity Registry
    const reg = (this.hass as any)?.entities;
    if (reg && rawId && reg[rawId]) {
      deviceId = reg[rawId].device_id || '';
      if (deviceId) {
        for (const [id, meta] of Object.entries<any>(reg)) {
          if (meta.device_id !== deviceId) continue;
          const u = meta.unique_id || '';
          const t = meta.translation_key || '';
          if (!power && (u.endsWith('_power_switch') || t === 'power')) power = id;
          if (!start && (u.endsWith('_start') || t === 'start')) start = id;
          if (!pause && (u.endsWith('_pause') || t === 'pause')) pause = id;
          if (!cancel && (u.endsWith('_cancel') || t === 'cancel')) cancel = id;
          if (!program && (u.endsWith('_program_select') || t === 'program_select')) program = id;
          if (!programSensor && (u.endsWith('_program') || t === 'program') && !u.endsWith('_program_select') && !u.endsWith('_program_duration')) programSensor = id;
          if (!spin && (u.endsWith('_spin_speed_select') || t === 'spin_speed_select')) spin = id;
          if (!temp && (u.endsWith('_temperature_select') || t === 'temperature_select')) temp = id;
          if (!delay && (u.endsWith('_delay_start_select') || t === 'delay_start_select')) delay = id;
          if (!extraRinse && (u.endsWith('_extra_rinse_select') || u.endsWith('_extra_rinse') || t === 'extra_rinse_select' || t === 'extra_rinse')) extraRinse = id;
          if (!dryMode && (u.endsWith('_dry_mode_select') || u.endsWith('_dry_mode') || t === 'dry_mode_select' || t === 'dry_mode')) dryMode = id;
          if (!prewash && (u.endsWith('_prewash') || t === 'prewash')) prewash = id;
          if (!soak && (u.endsWith('_soak') || t === 'soak')) soak = id;
          if (!rinseHold && (u.endsWith('_rinse_hold') || t === 'rinse_hold')) rinseHold = id;
          if (!timeSaver && (u.endsWith('_time_saver') || t === 'time_saver')) timeSaver = id;
          if (!hotRinse && (u.endsWith('_hot_rinse') || t === 'hot_rinse')) hotRinse = id;
          if (!eco && (u.endsWith('_eco') || t === 'eco')) eco = id;
          if (!steam && (u.endsWith('_steam') || t === 'steam')) steam = id;
          if (!aroma && (u.endsWith('_aroma') || t === 'aroma')) aroma = id;
          if (!antiCrease && (u.endsWith('_anti_crease') || t === 'anti_crease')) antiCrease = id;
          if (!childLock && (u.endsWith('_child_lock_switch') || t === 'child_lock_switch')) childLock = id;
          if (!state && (u.endsWith('_state') || t === 'machine_state')) state = id;
          if (!remaining && (u.endsWith('_time_remaining') || t === 'time_remaining')) remaining = id;
          if (!progress && (u.endsWith('_cycle_progress') || t === 'cycle_progress')) progress = id;
          if (!tubTemp && (u.endsWith('_tub_temperature') || t === 'tub_temperature')) tubTemp = id;
          if (!rpm && (u.endsWith('_motor_rpm') || t === 'motor_rpm' || u.endsWith('_motor_speed'))) rpm = id;
          if (!door && (u.endsWith('_door_locked') || t === 'door_locked')) door = id;
          if (!problem && (u.endsWith('_problem') || t === 'problem')) problem = id;
        }
      }
    }

    // Extract domain and object_id fallback
    const parts = rawId.split('.');
    const objectId = parts[1] || '';

    // Strip known platform suffixes to discover device prefix
    const suffixes = [
      '_power',
      '_power_switch',
      '_machine_state',
      '_running',
      '_time_remaining',
      '_program_duration',
      '_cycle_progress',
      '_start',
      '_pause',
      '_cancel',
      '_program_select',
      '_program',
      '_spin_speed_select',
      '_temperature_select',
      '_delay_start_select',
      '_extra_rinse_select',
      '_extra_rinse',
      '_dry_mode_select',
      '_dry_mode',
      '_prewash',
      '_soak',
      '_rinse_hold',
      '_time_saver',
      '_hot_rinse',
      '_eco',
      '_steam',
      '_aroma',
      '_anti_crease',
      '_child_lock_switch',
      '_tub_temperature',
      '_motor_speed',
      '_door_locked',
    ];

    let prefix = objectId;
    for (const s of suffixes) {
      if (prefix.endsWith(s)) {
        prefix = prefix.substring(0, prefix.length - s.length);
        break;
      }
    }

    return {
      deviceId,
      power: power || (prefix ? `switch.${prefix}_power` : ''),
      start: start || (prefix ? `button.${prefix}_start` : ''),
      pause: pause || (prefix ? `button.${prefix}_pause` : ''),
      cancel: cancel || (prefix ? `button.${prefix}_cancel` : ''),
      program: program || (prefix ? `select.${prefix}_program_select` : ''),
      programSensor: programSensor || (prefix ? `sensor.${prefix}_program` : ''),
      spin: spin || (prefix ? `select.${prefix}_spin_speed_select` : ''),
      temp: temp || (prefix ? `select.${prefix}_temperature_select` : ''),
      delay: delay || (prefix ? `select.${prefix}_delay_start_select` : ''),

      extraRinse: extraRinse || (prefix ? `select.${prefix}_extra_rinse_select` : ''),
      dryMode: dryMode || (prefix ? `select.${prefix}_dry_mode_select` : ''),
      prewash: prewash || (prefix ? `switch.${prefix}_prewash` : ''),
      soak: soak || (prefix ? `switch.${prefix}_soak` : ''),
      rinseHold: rinseHold || (prefix ? `switch.${prefix}_rinse_hold` : ''),
      timeSaver: timeSaver || (prefix ? `switch.${prefix}_time_saver` : ''),
      hotRinse: hotRinse || (prefix ? `switch.${prefix}_hot_rinse` : ''),
      eco: eco || (prefix ? `switch.${prefix}_eco` : ''),
      steam: steam || (prefix ? `switch.${prefix}_steam` : ''),
      aroma: aroma || (prefix ? `switch.${prefix}_aroma` : ''),
      antiCrease: antiCrease || (prefix ? `switch.${prefix}_anti_crease` : ''),
      childLock: childLock || (prefix ? `switch.${prefix}_child_lock_switch` : ''),
      state: state || (prefix ? `sensor.${prefix}_machine_state` : ''),
      remaining: remaining || (prefix ? `sensor.${prefix}_time_remaining` : ''),
      progress: progress || (prefix ? `sensor.${prefix}_cycle_progress` : ''),
      tubTemp: tubTemp || (prefix ? `sensor.${prefix}_tub_temperature` : ''),
      rpm: rpm || (prefix ? `sensor.${prefix}_motor_speed` : ''),
      door: door || (prefix ? `binary_sensor.${prefix}_door_locked` : ''),
      problem: problem || (prefix ? `binary_sensor.${prefix}_problem` : ''),
    };
  }

  /* ── Service Dispatch ── */
  private _callService(domain: string, service: string, serviceData: Record<string, any>): void {
    if (!this.hass) return;
    this.hass.callService(domain, service, serviceData);
  }

  private _togglePower(entities: ReturnType<typeof this._resolveEntities>, isOnline: boolean): void {
    if (!isOnline) {
      this._showToast('Device is offline');
      return;
    }
    this._haptic('medium');
    this._callService('switch', 'toggle', { entity_id: entities.power });
  }

  private _triggerButton(entityId: string, isOnline: boolean, isOn: boolean): void {
    if (!isOnline) {
      this._showToast('Device is offline');
      return;
    }
    if (!isOn) {
      this._showToast('Turn on the washer to start cycle');
      return;
    }
    this._haptic('light');
    this._callService('button', 'press', { entity_id: entityId });
  }

  private _selectOption(
    entityId: string,
    option: string,
    isOnline: boolean,
    isOn: boolean,
    isRunning: boolean,
    isProgramChange: boolean = false
  ): void {
    if (!isOnline) {
      this._showToast('Device is offline');
      return;
    }
    if (!isOn) {
      this._showToast('Turn on the washer to adjust settings');
      return;
    }
    if (isRunning && isProgramChange) {
      this._showToast('Pause cycle to change wash program');
      return;
    }
    this._haptic('selection');
    this._callService('select', 'select_option', {
      entity_id: entityId,
      option,
    });
  }

  private _toggleChildLock(entityId: string, isOnline: boolean, isOn: boolean): void {
    if (!isOnline) {
      this._showToast('Device is offline');
      return;
    }
    if (!isOn) {
      this._showToast('Turn on the washer to toggle child lock');
      return;
    }
    this._haptic('medium');
    this._callService('switch', 'toggle', { entity_id: entityId });
  }

  private _toggleSwitch(entityId: string, isOnline: boolean, isOn: boolean): void {
    if (!isOnline) {
      this._showToast('Device is offline');
      return;
    }
    if (!isOn) {
      this._showToast('Turn on the washer to change options');
      return;
    }
    this._haptic('medium');
    this._callService('switch', 'toggle', { entity_id: entityId });
  }

  /* ── Rendering Helpers ── */
  private _formatRemaining(minutes: number): string {
    if (!minutes || minutes <= 0) return '00:00';
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  }

  public render() {
    if (!this.hass || !this._config) {
      return nothing;
    }

    const entities = this._resolveEntities();
    const powerState = entities.power ? this.hass.states[entities.power] : undefined;
    const machineStateObj = entities.state ? this.hass.states[entities.state] : undefined;
    const remainingObj = entities.remaining ? this.hass.states[entities.remaining] : undefined;
    const progressObj = entities.progress ? this.hass.states[entities.progress] : undefined;
    const programObj =
      (entities.programSensor ? this.hass.states[entities.programSensor] : undefined) ||
      (entities.program ? this.hass.states[entities.program] : undefined);


    const spinObj = entities.spin ? this.hass.states[entities.spin] : undefined;
    const tempObj = entities.temp ? this.hass.states[entities.temp] : undefined;
    const delayObj = entities.delay ? this.hass.states[entities.delay] : undefined;
    const childLockObj = entities.childLock ? this.hass.states[entities.childLock] : undefined;
    const tubTempObj = entities.tubTemp ? this.hass.states[entities.tubTemp] : undefined;
    const rpmObj = entities.rpm ? this.hass.states[entities.rpm] : undefined;
    const doorObj = entities.door ? this.hass.states[entities.door] : undefined;
    const problemObj = entities.problem ? this.hass.states[entities.problem] : undefined;

    if (!powerState && !machineStateObj && !programObj) {
      const explicitId = this._config?.entity;
      return html`
        <ha-card class="ifb-washer-card">
          <div style="padding: 24px; text-align: center; color: var(--appliance-text-2, #8e8e93);">
            <ha-icon icon="mdi:washing-machine" style="--mdc-icon-size: 40px; margin-bottom: 8px; opacity: 0.6;"></ha-icon>
            <div style="font-weight: 500; font-size: 15px; color: var(--appliance-text-1, inherit);">IFB Washer Card</div>
            <div style="font-size: 13px; margin-top: 4px;">
              ${explicitId
                ? html`Washing Machine entity not found: <code>${explicitId}</code>`
                : 'No IFB Washer detected on your Home Assistant instance. Please select a washing machine entity in the card editor.'}
            </div>
          </div>
        </ha-card>
      `;
    }

    const isOnline = Boolean(
      powerState && powerState.state !== 'unavailable' && powerState.state !== 'unknown'
    );
    const isOn = isOnline && powerState?.state === 'on';

    const machineState = machineStateObj?.state || (isOn ? 'Standby' : 'Off');
    const isRunning =
      isOn &&
      Boolean(
        machineState &&
          !['Standby', 'Idle', 'Complete', 'Paused', 'Off', 'unknown', 'unavailable'].includes(
            machineState
          )
      );
    const isPaused = isOn && machineState === 'Paused';
    const isComplete = isOn && machineState === 'Complete';

    const remMinutes = remainingObj ? parseInt(remainingObj.state, 10) || 0 : 0;
    const progressPct = progressObj ? Math.min(100, Math.max(0, parseFloat(progressObj.state) || 0)) : 0;
    const currentProgram = programObj?.state || '';
    const currentSpin = spinObj?.state || '';
    const currentTemp = tempObj?.state || '';
    const currentDelay = delayObj?.state || 'No Delay';
    const isChildLockActive = childLockObj?.state === 'on';
    const isDoorLocked = doorObj?.state === 'off' || doorObj?.attributes?.door_locked === true;
    const hasProblem = problemObj?.state === 'on';
    const tubTemp = tubTempObj ? parseInt(tubTempObj.state, 10) || 0 : 0;
    const motorRpm = rpmObj ? parseInt(rpmObj.state, 10) || 0 : 0;

    // Resolve clean device title
    let autoTitle = '';
    if (entities.deviceId) {
      const dev = (this.hass as any)?.devices?.[entities.deviceId];
      if (dev?.name_by_user) {
        autoTitle = dev.name_by_user;
      } else if (dev?.name) {
        const m = dev.name.match(/\(([^)]+)\)/);
        autoTitle = m && !m[1].includes('.') ? m[1] : dev.model || dev.name.replace(/^IFB\s+/i, '').replace(/\s*\([^)]*\)$/, '');
      } else if (dev?.model) {
        autoTitle = dev.model;
      }
    }
    if (!autoTitle && powerState?.attributes?.friendly_name) {
      const fn = powerState.attributes.friendly_name.replace(/\s*Power$/i, '');
      const m = fn.match(/\(([^)]+)\)/);
      autoTitle = m && !m[1].includes('.') ? m[1] : fn.replace(/^IFB\s+/i, '').replace(/\s*\([^)]*\)$/, '');
    }

    const title = this._config.name || autoTitle || 'IFB Washing Machine';

    // Subtitle summary
    let subtitle = 'Off';
    if (!isOnline) {
      subtitle = 'Offline';
    } else if (hasProblem) {
      subtitle = 'Error / Attention Required';
    } else if (isComplete) {
      subtitle = 'Cycle Complete';
    } else if (isOn) {
      const parts = [currentProgram || machineState];
      if (currentTemp && currentTemp !== 'None') parts.push(currentTemp);
      if (currentSpin && currentSpin !== 'None') parts.push(currentSpin);
      subtitle = parts.join(' • ');
    }

    const programSelectObj = entities.program ? this.hass.states[entities.program] : undefined;
    const programSensorObj = entities.programSensor ? this.hass.states[entities.programSensor] : undefined;

    const programOptions = (programSelectObj?.attributes?.options as string[]) || (programObj?.attributes?.options as string[]) || [];

    const spinOptions = (spinObj?.attributes?.options as string[]) || [];
    const tempOptions = (tempObj?.attributes?.options as string[]) || [];
    const delayOptions = (delayObj?.attributes?.options as string[]) || [];

    const extraRinseObj = entities.extraRinse ? this.hass.states[entities.extraRinse] : undefined;
    const dryModeObj = entities.dryMode ? this.hass.states[entities.dryMode] : undefined;
    const currentExtraRinse = extraRinseObj?.state || '';
    const currentDryMode = dryModeObj?.state || '';
    const extraRinseOptions = (extraRinseObj?.attributes?.options as string[]) || [];
    const dryModeOptions = (dryModeObj?.attributes?.options as string[]) || [];

    // Capabilities per Official Wash Guide Map & Database
    const progCaps = (programSensorObj?.attributes || programSelectObj?.attributes || {}) as Record<string, any>;
    const staticCaps = this._resolveStaticCapabilities(currentProgram);
    const allowedTemps: string[] | undefined = (Array.isArray(progCaps.allowed_temps) && progCaps.allowed_temps.length > 0)
      ? progCaps.allowed_temps
      : staticCaps.allowedTemps;
    const allowedSpins: string[] | undefined = (Array.isArray(progCaps.allowed_spins) && progCaps.allowed_spins.length > 0)
      ? progCaps.allowed_spins
      : staticCaps.allowedSpins;
    const allowedDryModes: string[] | undefined = (Array.isArray(progCaps.allowed_dry_modes) && progCaps.allowed_dry_modes.length > 0)
      ? progCaps.allowed_dry_modes
      : staticCaps.allowedDryModes;
    const supportsDry: boolean = progCaps.supports_dry ?? (allowedDryModes ? allowedDryModes.length > 1 : staticCaps.supportsDry ?? true);
    const supportsSteam: boolean = progCaps.supports_steam ?? staticCaps.supportsSteam ?? true;
    const supportsPrewash: boolean = progCaps.supports_prewash ?? staticCaps.supportsPrewash ?? true;
    const supportsSoak: boolean = progCaps.supports_soak ?? staticCaps.supportsSoak ?? true;
    const supportsTimeSaver: boolean = progCaps.supports_time_saver ?? staticCaps.supportsTimeSaver ?? true;
    const supportsExtraRinse: boolean = progCaps.supports_extra_rinse ?? staticCaps.supportsExtraRinse ?? true;
    const hasExtraRinseSelected = currentExtraRinse !== '' && currentExtraRinse !== '0 (None)' && currentExtraRinse !== 'None';
    const supportsHotRinse: boolean = (progCaps.supports_hot_rinse ?? staticCaps.supportsHotRinse ?? true) && hasExtraRinseSelected;
    const supportsRinseHold: boolean = progCaps.supports_rinse_hold ?? staticCaps.supportsRinseHold ?? true;
    const supportsEco: boolean = progCaps.supports_eco ?? staticCaps.supportsEco ?? true;
    const supportsAroma: boolean = progCaps.supports_aroma ?? staticCaps.supportsAroma ?? true;
    const supportsAntiCrease: boolean = progCaps.supports_anti_crease ?? staticCaps.supportsAntiCrease ?? true;

    // Modifiers list
    const modifiers = [
      { key: 'prewash', label: 'Pre-wash', icon: 'mdi:water-plus', entityId: entities.prewash, supported: supportsPrewash },
      { key: 'soak', label: 'Soak', icon: 'mdi:timer-sand', entityId: entities.soak, supported: supportsSoak },
      { key: 'rinse_hold', label: 'Rinse Hold', icon: 'mdi:pause-circle-outline', entityId: entities.rinseHold, supported: supportsRinseHold },
      { key: 'time_saver', label: 'Time Saver', icon: 'mdi:clock-fast', entityId: entities.timeSaver, supported: supportsTimeSaver },
      {
        key: 'hot_rinse',
        label: 'Hot Rinse',
        icon: 'mdi:thermometer-water',
        entityId: entities.hotRinse,
        supported: supportsHotRinse,
        blockedReason: !hasExtraRinseSelected ? 'Hot Rinse requires Extra Rinse to be selected' : undefined,
      },
      { key: 'eco', label: 'Eco', icon: 'mdi:leaf', entityId: entities.eco, supported: supportsEco },
      { key: 'steam', label: 'Steam', icon: 'mdi:weather-fog', entityId: entities.steam, supported: supportsSteam },
      { key: 'aroma', label: 'Aroma', icon: 'mdi:flower-tulip-outline', entityId: entities.aroma, supported: supportsAroma },
      { key: 'anti_crease', label: 'Anti-Crease', icon: 'mdi:iron', entityId: entities.antiCrease, supported: supportsAntiCrease },
    ];

    const isCompact = this._config.layout === 'compact';

    if (isCompact && !this._expanded) {
      return this._renderCompactCard(
        entities,
        title,
        isOnline,
        isOn,
        isRunning,
        isPaused,
        machineState,
        remMinutes,
        progressPct,
        currentProgram,
        currentSpin,
        currentTemp
      );
    }

    const filteredTempOptions = allowedTemps && allowedTemps.length > 0
      ? tempOptions.filter((t) =>
          allowedTemps.some((at) => t.toLowerCase().replace(/[^a-z0-9]/g, '') === at.toLowerCase().replace(/[^a-z0-9]/g, ''))
        )
      : tempOptions;
    const filteredSpinOptions = allowedSpins && allowedSpins.length > 0
      ? spinOptions.filter((s) =>
          allowedSpins.some((as) => s.toLowerCase().replace(/[^a-z0-9]/g, '') === as.toLowerCase().replace(/[^a-z0-9]/g, ''))
        )
      : spinOptions;
    const filteredDryModeOptions = allowedDryModes && allowedDryModes.length > 0 && dryModeOptions.length > 0
      ? dryModeOptions.filter((d) =>
          allowedDryModes.some((ad) => d.toLowerCase().replace(/[^a-z0-9]/g, '') === ad.toLowerCase().replace(/[^a-z0-9]/g, ''))
        )
      : (allowedDryModes && allowedDryModes.length > 0 ? allowedDryModes : dryModeOptions);

    const effectiveTempOptions = (filteredTempOptions.length > 0 ? filteredTempOptions : allowedTemps) || tempOptions;
    const effectiveSpinOptions = (filteredSpinOptions.length > 0 ? filteredSpinOptions : allowedSpins) || spinOptions;
    const effectiveDryModeOptions: string[] = (filteredDryModeOptions.length > 0 ? filteredDryModeOptions : allowedDryModes) || (dryModeOptions.length > 0 ? dryModeOptions : ['No Dry']);


    if (this._config.full_layout === 'google_home') {
      return this._renderGoogleHomeFull(

        entities,
        title,
        isOn,
        isOnline,
        isRunning,
        isPaused,
        isComplete,
        machineState,
        remMinutes,
        progressPct,
        currentProgram,
        currentSpin,
        currentTemp,
        currentDelay,
        isChildLockActive,
        isDoorLocked,
        hasProblem,
        tubTemp,
        motorRpm,
        programOptions,
        effectiveSpinOptions,
        effectiveTempOptions,
        delayOptions,
        currentExtraRinse,
        extraRinseOptions,
        supportsExtraRinse,
        currentDryMode,
        effectiveDryModeOptions,
        supportsDry,
        modifiers
      );
    }

    // SVG Radial progress calculations
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progressPct / 100) * circumference;

    return html`
      <ha-card>
        <!-- Header -->
        <div class="header">
          <div class="header-left">
            <div class="title-row">
              <div class="title">${title}</div>
            </div>
            <div class="subtitle">${subtitle}</div>
          </div>
          <div class="header-right">
            ${isCompact
              ? html`
                  <button
                    class="collapse-btn"
                    title="Collapse Card"
                    @click=${(e: Event) => {
                      e.stopPropagation();
                      this._haptic('light');
                      this._expanded = false;
                    }}
                  >
                    <ha-icon icon="mdi:chevron-up"></ha-icon>
                  </button>
                `
              : nothing}
            <button
              class="power-btn ${isOn ? 'on' : ''} ${!isOnline ? 'disabled' : ''}"
              title="${!isOnline ? 'Device is offline' : isOn ? 'Turn Off' : 'Turn On'}"
              @click=${() => this._togglePower(entities, isOnline)}
            >
              <ha-icon icon="mdi:power"></ha-icon>
            </button>
          </div>
        </div>

        ${this._renderFullBody(
          entities,
          isOnline,
          isOn,
          isRunning,
          isPaused,
          isComplete,
          machineState,
          remMinutes,
          progressPct,
          radius,
          circumference,
          strokeDashoffset,
          currentProgram,
          currentSpin,
          currentTemp,
          currentDelay,
          isChildLockActive,
          isDoorLocked,
          hasProblem,
          tubTemp,
          motorRpm,
          programOptions,
          effectiveSpinOptions,
          effectiveTempOptions,
          delayOptions,
          currentExtraRinse,
          extraRinseOptions,
          supportsExtraRinse,
          currentDryMode,
          effectiveDryModeOptions,
          supportsDry,
          modifiers
        )}

        <!-- Diagnostics & Telemetry Footer -->
        <div class="footer">
          <div class="footer-item">
            <span class="footer-dot ${isOnline ? 'green' : 'red'}"></span>
            <span>Local LAN</span>
          </div>
          •
          <div class="footer-item">
            <span class="footer-dot ${isDoorLocked ? 'red' : 'green'}"></span>
            <span>${isDoorLocked ? 'Door Locked' : 'Door Unlocked'}</span>
          </div>
          ${tubTemp > 0
            ? html`
                •
                <div class="footer-item">
                  <ha-icon icon="mdi:thermometer"></ha-icon>
                  <span>Tub: ${tubTemp}°C</span>
                </div>
              `
            : nothing}
          ${motorRpm > 0
            ? html`
                •
                <div class="footer-item">
                  <ha-icon icon="mdi:speedometer"></ha-icon>
                  <span>${motorRpm} RPM</span>
                </div>
              `
            : nothing}
        </div>
      </ha-card>
    `;
  }

  /* ── Compact Card Rendering (Aligned with AC Card) ── */
  private _renderCompactCard(
    entities: ReturnType<typeof this._resolveEntities>,
    title: string,
    isOnline: boolean,
    isOn: boolean,
    isRunning: boolean,
    isPaused: boolean,
    machineState: string,
    remMinutes: number,
    progressPct: number,
    currentProgram: string,
    currentSpin: string,
    currentTemp: string
  ) {
    const layoutClass = this._config.full_layout === 'google_home' ? 'google-home' : 'classic';
    const displayValue = isRunning
      ? (remMinutes > 0 ? this._formatRemaining(remMinutes) : `${progressPct}%`)
      : (isPaused ? 'Paused' : isOn ? 'Standby' : 'Off');

    return html`
      <ha-card
        class="compact-card ${layoutClass}"
        @click=${() => {
          this._haptic('selection');
          this._expanded = true;
        }}
      >
        <div class="compact-header">
          <button
            class="compact-icon-btn ${isOn ? 'on' : ''} ${!isOnline ? 'disabled' : ''}"
            title="${!isOnline ? 'Device is offline' : isOn ? 'Turn Off' : 'Turn On'}"
            @click=${(e: Event) => {
              e.stopPropagation();
              this._togglePower(entities, isOnline);
            }}
          >
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <div class="compact-title">${title}</div>
          <ha-icon class="compact-chevron" icon="mdi:chevron-right"></ha-icon>
        </div>

        <div class="compact-center">
          <div class="compact-value">${displayValue}</div>
        </div>

        <div class="compact-footer">
          <button
            class="compact-action-btn ${isRunning ? 'active' : ''} ${!isOnline || !isOn ? 'disabled' : ''}"
            title="${isRunning ? 'Pause Cycle' : isPaused ? 'Resume Cycle' : 'Start Cycle'}"
            @click=${(e: Event) => {
              e.stopPropagation();
              if (isRunning) {
                this._triggerButton(entities.pause, isOnline, isOn);
              } else {
                this._triggerButton(entities.start, isOnline, isOn);
              }
            }}
          >
            <ha-icon icon="${isRunning ? 'mdi:pause' : 'mdi:play'}"></ha-icon>
          </button>

          <div class="compact-subtitle" style="display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.2;">
            <div style="display: flex; align-items: center; gap: 8px;">
              ${currentTemp
                ? html`
                    <span style="display: flex; align-items: center; gap: 3px;">
                      <ha-icon icon="mdi:thermometer" style="--mdc-icon-size: 13px;"></ha-icon>${currentTemp}
                    </span>
                  `
                : nothing}
              ${currentSpin
                ? html`
                    <span style="display: flex; align-items: center; gap: 3px;">
                      <ha-icon icon="mdi:speedometer" style="--mdc-icon-size: 13px;"></ha-icon>${currentSpin}
                    </span>
                  `
                : nothing}
            </div>
            <div style="font-size: 0.75rem; opacity: 0.7; margin-top: 2px;">
              ${currentProgram || machineState}
            </div>
          </div>

          <button
            class="compact-action-btn ${!isOnline || !isOn || (!isRunning && !isPaused) ? 'disabled' : ''}"
            title="Cancel Cycle"
            @click=${(e: Event) => {
              e.stopPropagation();
              this._triggerButton(entities.cancel, isOnline, isOn);
            }}
          >
            <ha-icon icon="mdi:stop"></ha-icon>
          </button>
        </div>
      </ha-card>
    `;
  }

  /* ── Cycle Modifiers Rendering ── */
  private _renderModifierChip(
    mod: {
      key: string;
      label: string;
      icon: string;
      entityId?: string;
      supported: boolean;
      blockedReason?: string;
    },
    isOnline: boolean,
    isOn: boolean,
    isRunning: boolean
  ) {
    const stateObj = mod.entityId ? this.hass.states[mod.entityId] : undefined;
    const isActive = stateObj?.state === 'on';
    const isSupported = mod.supported;
    const isBlocked = !!mod.blockedReason;
    const isDisabled = !isOnline || !isOn || !isSupported || isBlocked || isRunning;

    const desc = HELP_DESCRIPTIONS[mod.label] || HELP_DESCRIPTIONS[mod.key] || '';
    let tooltip = mod.label;
    if (desc) tooltip += ` — ${desc}`;
    if (!isOnline) tooltip = 'Device is offline';
    else if (!isOn) tooltip = 'Turn on washer to toggle modifiers';
    else if (isRunning) tooltip = 'Pause cycle to toggle modifiers';
    else if (isBlocked) tooltip = mod.blockedReason!;
    else if (!isSupported) tooltip = `${mod.label} is not supported by current program`;

    const helpMsg = desc || tooltip;

    return html`
      <button
        class="modifier-chip ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''}"
        title="${tooltip}"
        @touchstart=${() => this._handleTouchStart(helpMsg)}
        @touchend=${() => this._handleTouchEnd()}
        @touchcancel=${() => this._handleTouchEnd()}
        @click=${(e: Event) => {
          if (this._isLongPress) {
            this._isLongPress = false;
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          if (!isOnline) {
            this._showToast('Device is offline');
          } else if (!isOn) {
            this._showToast('Turn on washer to toggle modifiers');
          } else if (isRunning) {
            this._showToast('Pause cycle to toggle modifiers');
          } else if (isBlocked) {
            this._showToast(mod.blockedReason!);
          } else if (!isSupported) {
            this._showToast(`${mod.label} is not supported by current program`);
          } else if (mod.entityId) {
            this._toggleSwitch(mod.entityId, isOnline, isOn);
          }
        }}
      >
        <ha-icon icon="${mod.icon}"></ha-icon>
        <span>${mod.label}</span>
      </button>
    `;
  }

  private _renderModifiers(
    modifiers: Array<{
      key: string;
      label: string;
      icon: string;
      entityId?: string;
      supported: boolean;
      blockedReason?: string;
    }>,
    isOnline: boolean,
    isOn: boolean,
    isRunning: boolean
  ) {
    const activeModifiers = modifiers.filter((m) => !!m.entityId);
    if (activeModifiers.length === 0) return nothing;

    const washKeys = ['prewash', 'soak', 'steam', 'time_saver', 'eco'];
    const washModifiers = activeModifiers.filter((m) => washKeys.includes(m.key));
    const finishingModifiers = activeModifiers.filter((m) => !washKeys.includes(m.key));

    return html`
      <div class="modifiers-section">
        ${washModifiers.length > 0
          ? html`
              <div class="modifiers-group">
                <div class="modifiers-subheading">Wash Options</div>
                <div class="modifiers-grid">
                  ${washModifiers.map((mod) =>
                    this._renderModifierChip(mod, isOnline, isOn, isRunning)
                  )}
                </div>
              </div>
            `
          : nothing}
        ${finishingModifiers.length > 0
          ? html`
              <div class="modifiers-group">
                <div class="modifiers-subheading">Finishing Options</div>
                <div class="modifiers-grid">
                  ${finishingModifiers.map((mod) =>
                    this._renderModifierChip(mod, isOnline, isOn, isRunning)
                  )}
                </div>
              </div>
            `
          : nothing}
      </div>
    `;
  }

  /* ── Google Home Full Dashboard Rendering ── */
  private _renderGoogleHomeFull(
    entities: ReturnType<typeof this._resolveEntities>,
    title: string,
    isOn: boolean,
    isOnline: boolean,
    isRunning: boolean,
    isPaused: boolean,
    isComplete: boolean,
    machineState: string,
    remMinutes: number,
    progressPct: number,
    currentProgram: string,
    currentSpin: string,
    currentTemp: string,
    currentDelay: string,
    isChildLockActive: boolean,
    isDoorLocked: boolean,
    hasProblem: boolean,
    tubTemp: number,
    motorRpm: number,
    programOptions: string[],
    spinOptions: string[],
    tempOptions: string[],
    delayOptions: string[],
    currentExtraRinse: string,
    extraRinseOptions: string[],
    supportsExtraRinse: boolean,
    currentDryMode: string,
    dryModeOptions: string[],
    supportsDry: boolean,
    modifiers: Array<{
      key: string;
      label: string;
      icon: string;
      entityId?: string;
      supported: boolean;
      blockedReason?: string;
    }>
  ) {
    const programObj = entities.program ? this.hass.states[entities.program] : undefined;
    const nominalDuration =
      (programObj?.attributes?.program_duration as number) ||
      PROGRAM_DURATIONS[currentProgram] ||
      0;
    const flankLabel = isRunning ? 'Phase' : 'Status';
    const flankStatus = !isOn
      ? 'Off'
      : hasProblem
      ? 'Fault'
      : isPaused
      ? 'Paused'
      : isRunning
      ? machineState
      : isComplete
      ? 'Done'
      : 'Ready';

    const phaseIcon = !isOn
      ? 'mdi:power-off'
      : hasProblem
      ? 'mdi:alert-circle-outline'
      : isComplete
      ? 'mdi:check-circle-outline'
      : isPaused
      ? 'mdi:pause-circle-outline'
      : isRunning
      ? (machineState.toLowerCase().includes('spin')
          ? 'mdi:sync'
          : machineState.toLowerCase().includes('rinse')
          ? 'mdi:water-sync'
          : machineState.toLowerCase().includes('dry')
          ? 'mdi:heat-wave'
          : 'mdi:washing-machine')
      : 'mdi:progress-clock';

    const displayValue = isRunning
      ? this._formatRemaining(remMinutes)
      : !isOn
      ? 'Off'
      : isComplete
      ? 'Done'
      : nominalDuration > 0
      ? `${nominalDuration} min`
      : 'Standby';

    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progressPct / 100) * circumference;
    const isSpinningFast = motorRpm > 400;

    const programBadge = !isOn
      ? ''
      : (currentProgram || (isOn ? 'Select Program' : ''));

    const submetricsDisplay = (() => {
      if (!isOn) return null;
      const parts: string[] = [];
      if (currentTemp && currentTemp !== 'None' && currentTemp !== 'none') {
        parts.push(currentTemp);
      }
      if (isRunning && motorRpm > 0) {
        parts.push(`${motorRpm} RPM`);
      } else if (currentSpin && currentSpin !== 'None' && currentSpin !== 'none') {
        parts.push(currentSpin);
      }
      return parts.length > 0 ? parts.join(' • ') : null;
    })();

    return html`
      <ha-card class="gh-full-card ${!isOn ? 'is-off' : ''}">
        <!-- Header -->
        <div class="gh-header">
          <div class="gh-header-left">
            <div class="gh-title">${title}</div>
          </div>
          <div style="display: flex; gap: 8px; align-items: center;">
            ${this._config.layout === 'compact'
              ? html`
                  <button
                    class="gh-power-btn"
                    style="background: transparent; color: var(--appliance-text-2);"
                    title="Collapse card"
                    @click=${(e: Event) => {
                      e.stopPropagation();
                      this._haptic('light');
                      this._expanded = false;
                    }}
                  >
                    <ha-icon icon="mdi:chevron-up"></ha-icon>
                  </button>
                `
              : nothing}
            <button
              class="gh-power-btn ${isOn ? 'on' : ''} ${!isOnline ? 'disabled' : ''}"
              title="${!isOnline ? 'Device is offline' : isOn ? 'Turn Off' : 'Turn On'}"
              @click=${() => this._togglePower(entities, isOnline)}
            >
              <ha-icon icon="mdi:power"></ha-icon>
            </button>
          </div>
        </div>

        <!-- M3 Porthole & Radial Progress Dial with Flanks -->
        <div class="porthole-container ${!isOn ? 'disabled' : ''}">
          <!-- Left Flank: Child Lock -->
          <div
            class="dial-flank child-lock-flank ${isChildLockActive ? 'active' : ''} ${!isOnline || !isOn ? 'disabled' : ''}"
            title="${!isOnline
              ? 'Device is offline'
              : !isOn
              ? 'Turn on the washer to toggle child lock'
              : (HELP_DESCRIPTIONS['Child Lock'] || 'Toggle Child Lock')}"
            @touchstart=${() => this._handleTouchStart(HELP_DESCRIPTIONS['Child Lock'] || 'Locks machine control panel')}
            @touchend=${() => this._handleTouchEnd()}
            @touchcancel=${() => this._handleTouchEnd()}
            @click=${(e: Event) => {
              if (this._isLongPress) {
                this._isLongPress = false;
                e.preventDefault();
                e.stopPropagation();
                return;
              }
              this._toggleChildLock(entities.childLock, isOnline, isOn);
            }}
          >
            <div class="dial-flank-icon-btn ${isChildLockActive ? 'active' : ''}">
              <ha-icon icon="${isChildLockActive ? 'mdi:lock' : 'mdi:lock-open-variant-outline'}"></ha-icon>
            </div>
            <span class="dial-flank-label">Child Lock</span>
            <span class="dial-flank-status">${isChildLockActive ? 'Locked' : 'Unlocked'}</span>
          </div>

          <!-- Center: Porthole Ring Wrapper -->
          <div class="porthole-ring-wrapper">
            <svg class="porthole-svg" viewBox="0 0 164 164">
              <circle class="ring-track" cx="82" cy="82" r="${radius}" />
              ${isRunning || isComplete
                ? html`
                    <circle
                      class="ring-progress ${isRunning ? 'active' : ''}"
                      cx="82"
                      cy="82"
                      r="${radius}"
                      style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${strokeDashoffset};"
                    />
                  `
                : nothing}
            </svg>
            <div class="drum-porthole">
              ${isRunning
                ? html`
                    <div class="drum-water-swirl ${isSpinningFast ? 'fast-spin' : ''}"></div>
                    <div class="drum-baffles ${isSpinningFast ? 'fast-spin' : 'spinning'}">
                      <span class="baffle"></span>
                      <span class="baffle"></span>
                      <span class="baffle"></span>
                    </div>
                  `
                : isPaused
                ? html`
                    <div class="drum-baffles paused">
                      <span class="baffle"></span>
                      <span class="baffle"></span>
                      <span class="baffle"></span>
                    </div>
                  `
                : nothing}
              <div class="porthole-content">
                <div class="porthole-hero-time">
                  ${displayValue}
                </div>
                ${isOn && programBadge
                  ? html`<div class="porthole-phase">${programBadge}</div>`
                  : nothing}
                ${submetricsDisplay
                  ? html`
                      <div class="porthole-submetrics">
                        ${submetricsDisplay}
                      </div>
                    `
                  : nothing}
              </div>
            </div>
          </div>

          <!-- Right Flank: Cycle Phase / Status -->
          <div
            class="dial-flank phase-flank ${isRunning ? 'active' : ''} ${!isOnline || !isOn ? 'disabled' : ''}"
            title="Cycle status: ${flankStatus}"
          >
            <div class="dial-flank-icon-btn static ${isRunning ? 'active' : ''}">
              <ha-icon icon="${phaseIcon}"></ha-icon>
            </div>
            <span class="dial-flank-label">${flankLabel}</span>
            <span class="dial-flank-status">${flankStatus}</span>
          </div>
        </div>

        <!-- Action Row (M3 Circular Action Buttons with Clean Labels Below) -->
        <div class="gh-action-row">
          <div class="gh-action-col">
            <button
              class="gh-action-circle primary ${!isOnline || !isOn || isRunning ? 'disabled' : ''}"
              title="${!isOnline
                ? 'Device is offline'
                : !isOn
                ? 'Turn on the washer to start'
                : isRunning
                ? 'Cycle is already running'
                : 'Start Cycle'}"
              @click=${() => this._triggerButton(entities.start, isOnline, isOn)}
            >
              <ha-icon icon="mdi:play"></ha-icon>
            </button>
            <span class="gh-action-label">${isPaused ? 'Resume' : 'Start'}</span>
          </div>

          <div class="gh-action-col">
            <button
              class="gh-action-circle ${isPaused ? 'active' : ''} ${!isOnline || !isOn || !isRunning ? 'disabled' : ''}"
              title="${!isOnline
                ? 'Device is offline'
                : !isOn
                ? 'Turn on the washer'
                : !isRunning
                ? 'No cycle currently running'
                : 'Pause Cycle'}"
              @click=${() => this._triggerButton(entities.pause, isOnline, isOn)}
            >
              <ha-icon icon="mdi:pause"></ha-icon>
            </button>
            <span class="gh-action-label">Pause</span>
          </div>

          <div class="gh-action-col">
            <button
              class="gh-action-circle ${!isOnline || !isOn || (!isRunning && !isPaused) ? 'disabled' : ''}"
              title="${!isOnline
                ? 'Device is offline'
                : !isOn
                ? 'Turn on the washer'
                : !isRunning && !isPaused
                ? 'No active cycle to cancel'
                : 'Cancel Cycle'}"
              @click=${() => this._triggerButton(entities.cancel, isOnline, isOn)}
            >
              <ha-icon icon="mdi:stop"></ha-icon>
            </button>
            <span class="gh-action-label">Cancel</span>
          </div>
        </div>

        <!-- Dropdowns for Program, Spin, Temp, Delay -->
        <div class="gh-select-container">
          <!-- Program Dropdown -->
          <div class="gh-select-wrapper ${this._ghDropdown === 'program' ? 'active' : ''}">
            <button
              class="gh-custom-select ${!isOnline || !isOn ? 'disabled' : ''}"
              @click=${(e: Event) => {
                e.stopPropagation();
                if (!isOnline) this._showToast('Device is offline');
                else if (!isOn) this._showToast('Turn on the washer to adjust settings');
                else {
                  this._haptic('selection');
                  this._ghDropdown = this._ghDropdown === 'program' ? null : 'program';
                }
              }}
            >
              <span>Program: ${currentProgram || 'Select'}</span>
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </button>
            ${this._ghDropdown === 'program'
              ? html`
                  <div class="gh-dropdown-menu">
                    ${(programOptions.length > 0
                      ? programOptions
                      : ['Mix / Daily', 'Cotton', 'Express 15', 'Tub Clean']
                    ).map(
                      (prog) => html`
                        <button
                          class="gh-dropdown-item ${currentProgram === prog ? 'active' : ''}"
                          @click=${(e: Event) => {
                            e.stopPropagation();
                            this._ghDropdown = null;
                            this._selectOption(entities.program, prog, isOnline, isOn, isRunning, true);
                          }}
                        >
                          ${prog}
                        </button>
                      `
                    )}
                  </div>
                `
              : nothing}
          </div>

          <!-- Spin Speed Dropdown -->
          <div class="gh-select-wrapper ${this._ghDropdown === 'spin' ? 'active' : ''}">
            <button
              class="gh-custom-select ${!isOnline || !isOn ? 'disabled' : ''}"
              @click=${(e: Event) => {
                e.stopPropagation();
                if (!isOnline) this._showToast('Device is offline');
                else if (!isOn) this._showToast('Turn on the washer to adjust settings');
                else {
                  this._haptic('selection');
                  this._ghDropdown = this._ghDropdown === 'spin' ? null : 'spin';
                }
              }}
            >
              <span>Spin: ${currentSpin || 'Select'}</span>
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </button>
            ${this._ghDropdown === 'spin'
              ? html`
                  <div class="gh-dropdown-menu">
                    ${(spinOptions.length > 0
                      ? spinOptions
                      : ['No Spin', '400 RPM', '800 RPM', '1000 RPM', '1400 RPM']
                    ).map(
                      (sp) => html`
                        <button
                          class="gh-dropdown-item ${currentSpin === sp ? 'active' : ''}"
                          @click=${(e: Event) => {
                            e.stopPropagation();
                            this._ghDropdown = null;
                            this._selectOption(entities.spin, sp, isOnline, isOn, isRunning, false);
                          }}
                        >
                          ${sp}
                        </button>
                      `
                    )}
                  </div>
                `
              : nothing}
          </div>

          <!-- Temperature Dropdown -->
          <div class="gh-select-wrapper ${this._ghDropdown === 'temp' ? 'active' : ''}">
            <button
              class="gh-custom-select ${!isOnline || !isOn ? 'disabled' : ''}"
              @click=${(e: Event) => {
                e.stopPropagation();
                if (!isOnline) this._showToast('Device is offline');
                else if (!isOn) this._showToast('Turn on the washer to adjust settings');
                else {
                  this._haptic('selection');
                  this._ghDropdown = this._ghDropdown === 'temp' ? null : 'temp';
                }
              }}
            >
              <span>Temp: ${currentTemp || 'Select'}</span>
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </button>
            ${this._ghDropdown === 'temp'
              ? html`
                  <div class="gh-dropdown-menu">
                    ${(tempOptions.length > 0
                      ? tempOptions
                      : ['Cold', '20°C', '30°C', '40°C', '60°C', '95°C']
                    ).map(
                      (tp) => html`
                        <button
                          class="gh-dropdown-item ${currentTemp === tp ? 'active' : ''}"
                          @click=${(e: Event) => {
                            e.stopPropagation();
                            this._ghDropdown = null;
                            this._selectOption(entities.temp, tp, isOnline, isOn, isRunning, false);
                          }}
                        >
                          ${tp}
                        </button>
                      `
                    )}
                  </div>
                `
              : nothing}
          </div>

          <!-- Delay Start Dropdown -->
          <div class="gh-select-wrapper ${this._ghDropdown === 'delay' ? 'active' : ''}">
            <button
              class="gh-custom-select ${!isOnline || !isOn ? 'disabled' : ''}"
              @click=${(e: Event) => {
                e.stopPropagation();
                if (!isOnline) this._showToast('Device is offline');
                else if (!isOn) this._showToast('Turn on the washer to adjust settings');
                else {
                  this._haptic('selection');
                  this._ghDropdown = this._ghDropdown === 'delay' ? null : 'delay';
                }
              }}
            >
              <span>Delay: ${currentDelay || 'No Delay'}</span>
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </button>
            ${this._ghDropdown === 'delay'
              ? html`
                  <div class="gh-dropdown-menu">
                    ${(delayOptions.length > 0
                      ? delayOptions
                      : ['No Delay', '30 Minutes', '1 Hour', '2 Hours', '4 Hours']
                    ).map(
                      (dl) => html`
                        <button
                          class="gh-dropdown-item ${currentDelay === dl ? 'active' : ''}"
                          @click=${(e: Event) => {
                            e.stopPropagation();
                            this._ghDropdown = null;
                            this._selectOption(entities.delay, dl, isOnline, isOn, isRunning, false);
                          }}
                        >
                          ${dl}
                        </button>
                      `
                    )}
                  </div>
                `
              : nothing}
          </div>

          <!-- Extra Rinse Dropdown -->
          ${entities.extraRinse
            ? html`
                <div class="gh-select-wrapper ${this._ghDropdown === 'extra_rinse' ? 'active' : ''}">
                  <button
                    class="gh-custom-select ${!isOnline || !isOn || !supportsExtraRinse ? 'disabled' : ''}"
                    @click=${(e: Event) => {
                      e.stopPropagation();
                      if (!isOnline) this._showToast('Device is offline');
                      else if (!isOn) this._showToast('Turn on the washer to adjust settings');
                      else if (!supportsExtraRinse) this._showToast('Extra Rinse is not supported by current program');
                      else {
                        this._haptic('selection');
                        this._ghDropdown = this._ghDropdown === 'extra_rinse' ? null : 'extra_rinse';
                      }
                    }}
                  >
                    <span>Extra Rinse: ${currentExtraRinse || '0 (None)'}</span>
                    <ha-icon icon="mdi:chevron-down"></ha-icon>
                  </button>
                  ${this._ghDropdown === 'extra_rinse'
                    ? html`
                        <div class="gh-dropdown-menu">
                          ${(extraRinseOptions.length > 0
                            ? extraRinseOptions
                            : ['0 (None)', '1', '2', '3']
                          ).map(
                            (er) => html`
                              <button
                                class="gh-dropdown-item ${currentExtraRinse === er ? 'active' : ''}"
                                @click=${(e: Event) => {
                                  e.stopPropagation();
                                  this._ghDropdown = null;
                                  this._selectOption(entities.extraRinse, er, isOnline, isOn, isRunning, false);
                                }}
                              >
                                ${er}
                              </button>
                            `
                          )}
                        </div>
                      `
                    : nothing}
                </div>
              `
            : nothing}

          <!-- Dry Mode Dropdown -->
          ${entities.dryMode
            ? html`
                <div class="gh-select-wrapper ${this._ghDropdown === 'dry_mode' ? 'active' : ''}">
                  <button
                    class="gh-custom-select ${!isOnline || !isOn || !supportsDry ? 'disabled' : ''}"
                    @click=${(e: Event) => {
                      e.stopPropagation();
                      if (!isOnline) this._showToast('Device is offline');
                      else if (!isOn) this._showToast('Turn on the washer to adjust settings');
                      else if (!supportsDry) this._showToast('Dry is not supported by current program');
                      else {
                        this._haptic('selection');
                        this._ghDropdown = this._ghDropdown === 'dry_mode' ? null : 'dry_mode';
                      }
                    }}
                  >
                    <span>Dry: ${currentDryMode || 'No Dry'}</span>
                    <ha-icon icon="mdi:chevron-down"></ha-icon>
                  </button>
                  ${this._ghDropdown === 'dry_mode'
                    ? html`
                        <div class="gh-dropdown-menu">
                          ${(dryModeOptions.length > 0
                            ? dryModeOptions
                            : ['No Dry', 'Cupboard Dry', 'Iron Dry', '30 Minutes', '1 Hour', '2 Hours']
                          ).map(
                            (dm) => {
                              const dmDesc = HELP_DESCRIPTIONS[dm] || '';
                              return html`
                                <button
                                  class="gh-dropdown-item ${currentDryMode === dm ? 'active' : ''}"
                                  title="${dmDesc ? `${dm} — ${dmDesc}` : dm}"
                                  @click=${(e: Event) => {
                                    e.stopPropagation();
                                    this._ghDropdown = null;
                                    this._selectOption(entities.dryMode, dm, isOnline, isOn, isRunning, false);
                                  }}
                                >
                                  ${dm}
                                </button>
                              `;
                            }
                          )}
                        </div>
                      `
                    : nothing}
                </div>
              `
            : nothing}
        </div>

        <!-- Cycle Modifiers Section -->
        ${this._renderModifiers(modifiers, isOnline, isOn, isRunning)}

        <!-- Diagnostics & Telemetry Footer -->
        <div class="footer">
          <div class="footer-item">
            <span class="footer-dot ${isOnline ? 'green' : 'red'}"></span>
            <span>Local LAN</span>
          </div>
          •
          <div class="footer-item">
            <span class="footer-dot ${isDoorLocked ? 'red' : 'green'}"></span>
            <span>${isDoorLocked ? 'Door Locked' : 'Door Unlocked'}</span>
          </div>
          ${tubTemp > 0
            ? html`
                •
                <div class="footer-item">
                  <ha-icon icon="mdi:thermometer"></ha-icon>
                  <span>Tub: ${tubTemp}°C</span>
                </div>
              `
            : nothing}
          ${motorRpm > 0
            ? html`
                •
                <div class="footer-item">
                  <ha-icon icon="mdi:speedometer"></ha-icon>
                  <span>${motorRpm} RPM</span>
                </div>
              `
            : nothing}
        </div>
      </ha-card>
    `;
  }

  /* ── Full Dashboard Rendering ── */
  private _renderFullBody(
    entities: ReturnType<typeof this._resolveEntities>,
    isOnline: boolean,
    isOn: boolean,
    isRunning: boolean,
    isPaused: boolean,
    isComplete: boolean,
    machineState: string,
    remMinutes: number,
    progressPct: number,
    radius: number,
    circumference: number,
    strokeDashoffset: number,
    currentProgram: string,
    currentSpin: string,
    currentTemp: string,
    currentDelay: string,
    isChildLockActive: boolean,
    isDoorLocked: boolean,
    hasProblem: boolean,
    tubTemp: number,
    motorRpm: number,
    programOptions: string[],
    spinOptions: string[],
    tempOptions: string[],
    delayOptions: string[],
    currentExtraRinse: string,
    extraRinseOptions: string[],
    supportsExtraRinse: boolean,
    currentDryMode: string,
    dryModeOptions: string[],
    supportsDry: boolean,
    modifiers: Array<{
      key: string;
      label: string;
      icon: string;
      entityId?: string;
      supported: boolean;
      blockedReason?: string;
    }>
  ) {
    const isSpinningFast = motorRpm > 400;
    const programObj = entities.program ? this.hass.states[entities.program] : undefined;
    const nominalDuration =
      (programObj?.attributes?.program_duration as number) ||
      PROGRAM_DURATIONS[currentProgram] ||
      0;
    const flankLabel = isRunning ? 'Phase' : 'Status';
    const flankStatus = !isOn
      ? 'Off'
      : hasProblem
      ? 'Fault'
      : isPaused
      ? 'Paused'
      : isRunning
      ? machineState
      : isComplete
      ? 'Done'
      : 'Ready';

    const phaseIcon = !isOn
      ? 'mdi:power-off'
      : hasProblem
      ? 'mdi:alert-circle-outline'
      : isComplete
      ? 'mdi:check-circle-outline'
      : isPaused
      ? 'mdi:pause-circle-outline'
      : isRunning
      ? (machineState.toLowerCase().includes('spin')
          ? 'mdi:sync'
          : machineState.toLowerCase().includes('rinse')
          ? 'mdi:water-sync'
          : machineState.toLowerCase().includes('dry')
          ? 'mdi:heat-wave'
          : 'mdi:washing-machine')
      : 'mdi:progress-clock';

    const displayValue = isRunning
      ? this._formatRemaining(remMinutes)
      : !isOn
      ? 'Off'
      : isComplete
      ? 'Done'
      : nominalDuration > 0
      ? `${nominalDuration} min`
      : 'Standby';

    const programBadge = !isOn
      ? ''
      : (currentProgram || (isOn ? 'Select Program' : ''));

    const submetricsDisplay = (() => {
      if (!isOn) return null;
      const parts: string[] = [];
      if (currentTemp && currentTemp !== 'None' && currentTemp !== 'none') {
        parts.push(currentTemp);
      }
      if (isRunning && motorRpm > 0) {
        parts.push(`${motorRpm} RPM`);
      } else if (currentSpin && currentSpin !== 'None' && currentSpin !== 'none') {
        parts.push(currentSpin);
      }
      return parts.length > 0 ? parts.join(' • ') : null;
    })();

    return html`
      <!-- Porthole & Radial Progress Ring with Dial Flanks -->
      <div class="porthole-container ${!isOn ? 'disabled' : ''}">
        <!-- Left Flank: Child Lock -->
        <div
          class="dial-flank child-lock-flank ${isChildLockActive ? 'active' : ''} ${!isOnline || !isOn ? 'disabled' : ''}"
          title="${!isOnline
            ? 'Device is offline'
            : !isOn
            ? 'Turn on the washer to toggle child lock'
            : (HELP_DESCRIPTIONS['Child Lock'] || 'Toggle Child Lock')}"
          @touchstart=${() => this._handleTouchStart(HELP_DESCRIPTIONS['Child Lock'] || 'Locks machine control panel')}
          @touchend=${() => this._handleTouchEnd()}
          @touchcancel=${() => this._handleTouchEnd()}
          @click=${(e: Event) => {
            if (this._isLongPress) {
              this._isLongPress = false;
              e.preventDefault();
              e.stopPropagation();
              return;
            }
            this._toggleChildLock(entities.childLock, isOnline, isOn);
          }}
        >
          <div class="dial-flank-icon-btn ${isChildLockActive ? 'active' : ''}">
            <ha-icon icon="${isChildLockActive ? 'mdi:lock' : 'mdi:lock-open-variant-outline'}"></ha-icon>
          </div>
          <span class="dial-flank-label">Child Lock</span>
          <span class="dial-flank-status">${isChildLockActive ? 'Locked' : 'Unlocked'}</span>
        </div>

        <!-- Center: Porthole Ring Wrapper -->
        <div class="porthole-ring-wrapper">
          <svg class="porthole-svg" viewBox="0 0 164 164">
            <circle class="ring-track" cx="82" cy="82" r="${radius}" />
            ${isRunning || isComplete
              ? html`
                  <circle
                    class="ring-progress ${isRunning ? 'active' : ''}"
                    cx="82"
                    cy="82"
                    r="${radius}"
                    style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${strokeDashoffset};"
                  />
                `
              : nothing}
          </svg>
          <div class="drum-porthole">
            ${isRunning
              ? html`
                  <div class="drum-water-swirl ${isSpinningFast ? 'fast-spin' : ''}"></div>
                  <div class="drum-baffles ${isSpinningFast ? 'fast-spin' : 'spinning'}">
                    <span class="baffle"></span>
                    <span class="baffle"></span>
                    <span class="baffle"></span>
                  </div>
                `
              : isPaused
              ? html`
                  <div class="drum-baffles paused">
                    <span class="baffle"></span>
                    <span class="baffle"></span>
                    <span class="baffle"></span>
                  </div>
                `
              : nothing}
            <div class="porthole-content">
              <div class="porthole-hero-time">
                ${displayValue}
              </div>
              ${isOn && programBadge
                ? html`<div class="porthole-phase">${programBadge}</div>`
                : nothing}
              ${submetricsDisplay
                ? html`
                    <div class="porthole-submetrics">
                      ${submetricsDisplay}
                    </div>
                  `
                : nothing}
            </div>
          </div>
        </div>

        <!-- Right Flank: Cycle Phase / Status -->
        <div
          class="dial-flank phase-flank ${isRunning ? 'active' : ''} ${!isOnline || !isOn ? 'disabled' : ''}"
          title="Cycle status: ${flankStatus}"
        >
          <div class="dial-flank-icon-btn static ${isRunning ? 'active' : ''}">
            <ha-icon icon="${phaseIcon}"></ha-icon>
          </div>
          <span class="dial-flank-label">${flankLabel}</span>
          <span class="dial-flank-status">${flankStatus}</span>
        </div>
      </div>

      <!-- Cycle Action Buttons (Start, Pause, Cancel) -->
      <div class="cycle-actions-row">
        <button
          class="action-btn primary ${!isOnline || !isOn || isRunning ? 'disabled' : ''}"
          title="${!isOnline
            ? 'Device is offline'
            : !isOn
            ? 'Turn on the washer to start'
            : isRunning
            ? 'Cycle is already running'
            : 'Start Cycle'}"
          @click=${() => this._triggerButton(entities.start, isOnline, isOn)}
        >
          <ha-icon icon="mdi:play"></ha-icon>
          <span>${isPaused ? 'Resume' : 'Start'}</span>
        </button>

        <button
          class="action-btn ${!isOnline || !isOn || !isRunning ? 'disabled' : ''}"
          title="${!isOnline
            ? 'Device is offline'
            : !isOn
            ? 'Turn on the washer'
            : !isRunning
            ? 'No cycle currently running'
            : 'Pause Cycle'}"
          @click=${() => this._triggerButton(entities.pause, isOnline, isOn)}
        >
          <ha-icon icon="mdi:pause"></ha-icon>
          <span>Pause</span>
        </button>

        <button
          class="action-btn cancel ${!isOnline || !isOn || (!isRunning && !isPaused) ? 'disabled' : ''}"
          title="${!isOnline
            ? 'Device is offline'
            : !isOn
            ? 'Turn on the washer'
            : !isRunning && !isPaused
            ? 'No active cycle to cancel'
            : 'Cancel Cycle'}"
          @click=${() => this._triggerButton(entities.cancel, isOnline, isOn)}
        >
          <ha-icon icon="mdi:stop"></ha-icon>
          <span>Cancel</span>
        </button>
      </div>

      <!-- Wash Settings Tiles (Program, Temp, Spin, Delay) -->
      <div class="setting-tiles">
        <!-- Program Tile -->
        <div
          class="setting-tile ${this._openPanel === 'program' ? 'active' : ''} ${!isOnline || !isOn ? 'disabled' : ''}"
          title="${!isOnline
            ? 'Device is offline'
            : !isOn
            ? 'Turn on the washer to select program'
            : isRunning
            ? 'Pause cycle to change wash program'
            : 'Select wash program'}"
          @click=${() => {
            if (!isOnline) {
              this._showToast('Device is offline');
            } else if (!isOn) {
              this._showToast('Turn on the washer to select program');
            } else if (isRunning) {
              this._showToast('Pause cycle to change wash program');
            } else {
              this._openPanel = this._openPanel === 'program' ? null : 'program';
            }
          }}
        >
          <div class="setting-tile-label">
            <ha-icon icon="mdi:format-list-bulleted-type"></ha-icon>
            <span>Program</span>
          </div>
          <div class="setting-tile-value-row">
            <span class="setting-tile-value">${currentProgram || 'Default'}</span>
            <ha-icon class="setting-tile-chevron" icon="mdi:chevron-down"></ha-icon>
          </div>
        </div>

        <!-- Temperature Tile -->
        <div
          class="setting-tile ${this._openPanel === 'temp' ? 'active' : ''} ${!isOnline || !isOn ? 'disabled' : ''}"
          title="${!isOnline
            ? 'Device is offline'
            : !isOn
            ? 'Turn on the washer to adjust temperature'
            : 'Select water temperature'}"
          @click=${() => {
            if (!isOnline) {
              this._showToast('Device is offline');
            } else if (!isOn) {
              this._showToast('Turn on the washer to adjust temperature');
            } else {
              this._openPanel = this._openPanel === 'temp' ? null : 'temp';
            }
          }}
        >
          <div class="setting-tile-label">
            <ha-icon icon="mdi:thermometer-chevron-up"></ha-icon>
            <span>Temp</span>
          </div>
          <div class="setting-tile-value-row">
            <span class="setting-tile-value">${currentTemp || 'Cold'}</span>
            <ha-icon class="setting-tile-chevron" icon="mdi:chevron-down"></ha-icon>
          </div>
        </div>

        <!-- Spin Speed Tile -->
        <div
          class="setting-tile ${this._openPanel === 'spin' ? 'active' : ''} ${!isOnline || !isOn ? 'disabled' : ''}"
          title="${!isOnline
            ? 'Device is offline'
            : !isOn
            ? 'Turn on the washer to adjust spin speed'
            : 'Select spin speed'}"
          @click=${() => {
            if (!isOnline) {
              this._showToast('Device is offline');
            } else if (!isOn) {
              this._showToast('Turn on the washer to adjust spin speed');
            } else {
              this._openPanel = this._openPanel === 'spin' ? null : 'spin';
            }
          }}
        >
          <div class="setting-tile-label">
            <ha-icon icon="mdi:speedometer"></ha-icon>
            <span>Spin</span>
          </div>
          <div class="setting-tile-value-row">
            <span class="setting-tile-value">${currentSpin || 'No Spin'}</span>
            <ha-icon class="setting-tile-chevron" icon="mdi:chevron-down"></ha-icon>
          </div>
        </div>

        <!-- Delay Start Tile -->
        <div
          class="setting-tile ${this._openPanel === 'delay' ? 'active' : ''} ${!isOnline || !isOn ? 'disabled' : ''}"
          title="${!isOnline
            ? 'Device is offline'
            : !isOn
            ? 'Turn on the washer to set delay start'
            : isRunning
            ? 'Cannot set delay while cycle is running'
            : 'Select delay start'}"
          @click=${() => {
            if (!isOnline) {
              this._showToast('Device is offline');
            } else if (!isOn) {
              this._showToast('Turn on the washer to set delay start');
            } else if (isRunning) {
              this._showToast('Cannot set delay while cycle is running');
            } else {
              this._openPanel = this._openPanel === 'delay' ? null : 'delay';
            }
          }}
        >
          <div class="setting-tile-label">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            <span>Delay</span>
          </div>
          <div class="setting-tile-value-row">
            <span class="setting-tile-value">${currentDelay || 'No Delay'}</span>
            <ha-icon class="setting-tile-chevron" icon="mdi:chevron-down"></ha-icon>
          </div>
        </div>

        <!-- Extra Rinse Tile -->
        ${entities.extraRinse
          ? html`
              <div
                class="setting-tile ${this._openPanel === 'extra_rinse' ? 'active' : ''} ${!isOnline || !isOn || !supportsExtraRinse ? 'disabled' : ''}"
                title="${!isOnline
                  ? 'Device is offline'
                  : !isOn
                  ? 'Turn on the washer to adjust extra rinse'
                  : !supportsExtraRinse
                  ? 'Extra Rinse is not supported by current program'
                  : 'Select Extra Rinse'}"
                @click=${() => {
                  if (!isOnline) {
                    this._showToast('Device is offline');
                  } else if (!isOn) {
                    this._showToast('Turn on the washer to adjust extra rinse');
                  } else if (!supportsExtraRinse) {
                    this._showToast('Extra Rinse is not supported by current program');
                  } else {
                    this._openPanel = this._openPanel === 'extra_rinse' ? null : 'extra_rinse';
                  }
                }}
              >
                <div class="setting-tile-label">
                  <ha-icon icon="mdi:water-sync"></ha-icon>
                  <span>Rinse+</span>
                </div>
                <div class="setting-tile-value-row">
                  <span class="setting-tile-value">${currentExtraRinse || '0'}</span>
                  <ha-icon class="setting-tile-chevron" icon="mdi:chevron-down"></ha-icon>
                </div>
              </div>
            `
          : nothing}

        <!-- Dry Mode Tile -->
        ${entities.dryMode
          ? html`
              <div
                class="setting-tile ${this._openPanel === 'dry_mode' ? 'active' : ''} ${!isOnline || !isOn || !supportsDry ? 'disabled' : ''}"
                title="${!isOnline
                  ? 'Device is offline'
                  : !isOn
                  ? 'Turn on the washer to adjust dry mode'
                  : !supportsDry
                  ? 'Dry is not supported by current program'
                  : 'Select Dry Mode'}"
                @click=${() => {
                  if (!isOnline) {
                    this._showToast('Device is offline');
                  } else if (!isOn) {
                    this._showToast('Turn on the washer to adjust dry mode');
                  } else if (!supportsDry) {
                    this._showToast('Dry is not supported by current program');
                  } else {
                    this._openPanel = this._openPanel === 'dry_mode' ? null : 'dry_mode';
                  }
                }}
              >
                <div class="setting-tile-label">
                  <ha-icon icon="mdi:weather-sunny"></ha-icon>
                  <span>Dry</span>
                </div>
                <div class="setting-tile-value-row">
                  <span class="setting-tile-value">${currentDryMode || 'No Dry'}</span>
                  <ha-icon class="setting-tile-chevron" icon="mdi:chevron-down"></ha-icon>
                </div>
              </div>
            `
          : nothing}
      </div>

      <!-- Expandable Options Picker Panel -->
      ${this._openPanel === 'program'
        ? html`
            <div class="picker-panel">
              ${(programOptions.length > 0
                ? programOptions
                : ['Mix / Daily', 'Cotton', 'Express 15\'', 'Tub Clean', 'Spin Dry / Drain', 'Rinse + Spin']
              ).map((prog) => {
                const isSelected = currentProgram === prog;
                const progDesc = HELP_DESCRIPTIONS[prog] || '';
                return html`
                  <button
                    class="picker-opt ${isSelected ? 'sel' : ''}"
                    title="${progDesc ? `${prog} — ${progDesc}` : prog}"
                    @touchstart=${() => progDesc ? this._handleTouchStart(progDesc) : null}
                    @touchend=${() => this._handleTouchEnd()}
                    @touchcancel=${() => this._handleTouchEnd()}
                    @click=${(e: Event) => {
                      if (this._isLongPress) {
                        this._isLongPress = false;
                        e.preventDefault();
                        e.stopPropagation();
                        return;
                      }
                      this._selectOption(
                        entities.program,
                        prog,
                        isOnline,
                        isOn,
                        isRunning,
                        true
                      );
                      this._openPanel = null;
                    }}
                  >
                    ${prog}
                  </button>
                `;
              })}
            </div>
          `
        : nothing}

      ${this._openPanel === 'temp'
        ? html`
            <div class="picker-panel">
              ${(tempOptions.length > 0
                ? tempOptions
                : ['Cold', '20°C', '30°C', '40°C', '60°C', '95°C']
              ).map((temp) => {
                const isSelected = currentTemp === temp;
                return html`
                  <button
                    class="picker-opt ${isSelected ? 'sel' : ''}"
                    @click=${() => {
                      this._selectOption(entities.temp, temp, isOnline, isOn, false, false);
                      this._openPanel = null;
                    }}
                  >
                    ${temp}
                  </button>
                `;
              })}
            </div>
          `
        : nothing}

      ${this._openPanel === 'spin'
        ? html`
            <div class="picker-panel">
              ${(spinOptions.length > 0
                ? spinOptions
                : ['No Spin', '400 RPM', '600 RPM', '800 RPM', '1000 RPM', '1200 RPM', '1400 RPM']
              ).map((spin) => {
                const isSelected = currentSpin === spin;
                return html`
                  <button
                    class="picker-opt ${isSelected ? 'sel' : ''}"
                    @click=${() => {
                      this._selectOption(entities.spin, spin, isOnline, isOn, false, false);
                      this._openPanel = null;
                    }}
                  >
                    ${spin}
                  </button>
                `;
              })}
            </div>
          `
        : nothing}

      ${this._openPanel === 'delay'
        ? html`
            <div class="picker-panel">
              ${(delayOptions.length > 0
                ? delayOptions
                : ['No Delay', '30 min', '1 hr', '2 hr', '4 hr', '8 hr', '12 hr', '24 hr']
              ).map((delay) => {
                const isSelected = currentDelay === delay;
                return html`
                  <button
                    class="picker-opt ${isSelected ? 'sel' : ''}"
                    @click=${() => {
                      this._selectOption(
                        entities.delay,
                        delay,
                        isOnline,
                        isOn,
                        isRunning,
                        true
                      );
                      this._openPanel = null;
                    }}
                  >
                    ${delay}
                  </button>
                `;
              })}
            </div>
          `
        : nothing}

      ${this._openPanel === 'extra_rinse'
        ? html`
            <div class="picker-panel">
              ${(extraRinseOptions.length > 0
                ? extraRinseOptions
                : ['0 (None)', '1', '2', '3']
              ).map((er) => {
                const isSelected = currentExtraRinse === er;
                return html`
                  <button
                    class="picker-opt ${isSelected ? 'sel' : ''}"
                    @click=${() => {
                      this._selectOption(
                        entities.extraRinse,
                        er,
                        isOnline,
                        isOn,
                        isRunning,
                        false
                      );
                      this._openPanel = null;
                    }}
                  >
                    ${er}
                  </button>
                `;
              })}
            </div>
          `
        : nothing}

      ${this._openPanel === 'dry_mode'
        ? html`
            <div class="picker-panel">
              ${(dryModeOptions.length > 0
                ? dryModeOptions
                : ['No Dry', 'Cupboard Dry', 'Iron Dry', '30 Minutes', '1 Hour', '2 Hours']
              ).map((dm) => {
                const isSelected = currentDryMode === dm;
                const dmDesc = HELP_DESCRIPTIONS[dm] || '';
                return html`
                  <button
                    class="picker-opt ${isSelected ? 'sel' : ''}"
                    title="${dmDesc ? `${dm} — ${dmDesc}` : dm}"
                    @touchstart=${() => dmDesc ? this._handleTouchStart(dmDesc) : null}
                    @touchend=${() => this._handleTouchEnd()}
                    @touchcancel=${() => this._handleTouchEnd()}
                    @click=${(e: Event) => {
                      if (this._isLongPress) {
                        this._isLongPress = false;
                        e.preventDefault();
                        e.stopPropagation();
                        return;
                      }
                      this._selectOption(
                        entities.dryMode,
                        dm,
                        isOnline,
                        isOn,
                        isRunning,
                        false
                      );
                      this._openPanel = null;
                    }}
                  >
                    ${dm}
                  </button>
                `;
              })}
            </div>
          `
        : nothing}

      <!-- Modifiers Section -->
      ${this._renderModifiers(modifiers, isOnline, isOn, isRunning)}
    `;
  }
}

customElements.define('ifb-washer-card', IFBWasherCard);

const customCardEntry = {
  type: 'ifb-washer-card',
  name: 'IFB Washer Card',
  description: 'A custom Lovelace card for IFB washing machines and washer dryers.',
  preview: true,
  domain: 'sensor',
  domains: ['sensor', 'switch', 'select'],
  documentationURL: 'https://github.com/selvakk2k/ifb-washer-card',
};
(window as any).customCards = (window as any).customCards || [];
const existingCardIdx = (window as any).customCards.findIndex(
  (c: any) => c.type === 'ifb-washer-card' || c.type === 'custom:ifb-washer-card'
);
if (existingCardIdx >= 0) {
  (window as any).customCards[existingCardIdx] = customCardEntry;
} else {
  (window as any).customCards.push(customCardEntry);
}
