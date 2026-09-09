import { LitElement, html, nothing, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { IFBWasherCardConfig } from './types';
import { styles } from './styles';

export class IFBWasherCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: IFBWasherCardConfig;
  @state() private _expanded = false;
  @state() private _openPanel: 'program' | 'temp' | 'spin' | 'delay' | null = null;
  @state() private _ghDropdown: 'program' | 'spin' | 'temp' | 'delay' | null = null;

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
          required: true,
          label: 'Washer Entity',
          selector: { entity: { domain: ['select', 'switch'] } },
        },
        { name: 'name', label: 'Custom Title', selector: { text: {} } },
        {
          name: 'theme',
          label: 'Theme',
          selector: {
            select: {
              options: [
                { label: 'Default HA Theme', value: 'default' },
                { label: 'Material You', value: 'material_you' },
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
            { name: 'start_button', label: 'Start Button', selector: { entity: { domain: 'button' } } },
            { name: 'pause_button', label: 'Pause Button', selector: { entity: { domain: 'button' } } },
            { name: 'cancel_button', label: 'Cancel Button', selector: { entity: { domain: 'button' } } },
            { name: 'child_lock_switch', label: 'Child Lock Switch', selector: { entity: { domain: 'switch' } } },
          ],
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
      ],
    };
  }

  public static getStubConfig(hass?: HomeAssistant, entities?: string[], entitiesFallback?: string[]) {
    let entity = '';
    if (entities && entities.length) {
      entity =
        entities.find((e) => e.startsWith('select.') && (e.includes('program') || e.includes('ifb_washer'))) ||
        entities.find((e) => e.startsWith('switch.') && (e.includes('power') || e.includes('ifb_washer'))) ||
        entities.find((e) => e.includes('ifb_washer')) ||
        '';
    }
    if (!entity && entitiesFallback && entitiesFallback.length) {
      entity = entitiesFallback.find((e) => e.includes('ifb_washer')) || '';
    }
    if (!entity && hass?.states) {
      entity =
        Object.keys(hass.states).find(
          (e) => e.startsWith('select.') && (e.includes('program') || e.includes('ifb_washer'))
        ) ||
        Object.keys(hass.states).find(
          (e) => e.startsWith('switch.') && (e.includes('power') || e.includes('ifb_washer'))
        ) ||
        Object.keys(hass.states).find((e) => e.includes('ifb_washer')) ||
        '';
    }
    return {
      type: 'custom:ifb-washer-card',
      entity,
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

  /* ── Entity Auto-Discovery & Prefix Resolution ── */
  private _resolveEntities() {
    const rawId = this._config?.entity || '';
    const c = this._config || ({} as IFBWasherCardConfig);

    let power = c.power_switch;
    let start = c.start_button;
    let pause = c.pause_button;
    let cancel = c.cancel_button;
    let program = c.program_select;
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
    let problem = '';

    if (!rawId) {
      return {
        power: power || '',
        start: start || '',
        pause: pause || '',
        cancel: cancel || '',
        program: program || '',
        spin: spin || '',
        temp: temp || '',
        delay: delay || '',
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
    if (reg && reg[rawId]) {
      const deviceId = reg[rawId].device_id;
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
          if (!spin && (u.endsWith('_spin_speed_select') || t === 'spin_speed_select')) spin = id;
          if (!temp && (u.endsWith('_temperature_select') || t === 'temperature_select')) temp = id;
          if (!delay && (u.endsWith('_delay_start_select') || t === 'delay_start_select')) delay = id;
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
      '_spin_speed_select',
      '_temperature_select',
      '_delay_start_select',
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
      power: power || `switch.${prefix}_power`,
      start: start || `button.${prefix}_start`,
      pause: pause || `button.${prefix}_pause`,
      cancel: cancel || `button.${prefix}_cancel`,
      program: program || `select.${prefix}_program_select`,
      spin: spin || `select.${prefix}_spin_speed_select`,
      temp: temp || `select.${prefix}_temperature_select`,
      delay: delay || `select.${prefix}_delay_start_select`,
      childLock: childLock || `switch.${prefix}_child_lock_switch`,
      state: state || `sensor.${prefix}_machine_state`,
      remaining: remaining || `sensor.${prefix}_time_remaining`,
      progress: progress || `sensor.${prefix}_cycle_progress`,
      tubTemp: tubTemp || `sensor.${prefix}_tub_temperature`,
      rpm: rpm || `sensor.${prefix}_motor_speed`,
      door: door || `binary_sensor.${prefix}_door_locked`,
      problem: problem || `binary_sensor.${prefix}_problem`,
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

    if (!this._config.entity) {
      return html`
        <ha-card class="ifb-washer-card">
          <div style="padding: 24px; text-align: center; color: var(--appliance-text-2, #8e8e93);">
            <ha-icon icon="mdi:washing-machine" style="--mdc-icon-size: 40px; margin-bottom: 8px; opacity: 0.6;"></ha-icon>
            <div style="font-weight: 500; font-size: 15px; color: var(--appliance-text-1, inherit);">IFB Washer Card</div>
            <div style="font-size: 13px; margin-top: 4px;">Please select a Washer Entity in the card configuration editor.</div>
          </div>
        </ha-card>
      `;
    }

    const entities = this._resolveEntities();
    const powerState = this.hass.states[entities.power];
    const machineStateObj = this.hass.states[entities.state];
    const remainingObj = this.hass.states[entities.remaining];
    const progressObj = this.hass.states[entities.progress];
    const programObj = this.hass.states[entities.program];
    const spinObj = this.hass.states[entities.spin];
    const tempObj = this.hass.states[entities.temp];
    const delayObj = this.hass.states[entities.delay];
    const childLockObj = this.hass.states[entities.childLock];
    const tubTempObj = this.hass.states[entities.tubTemp];
    const rpmObj = this.hass.states[entities.rpm];
    const doorObj = this.hass.states[entities.door];
    const problemObj = this.hass.states[entities.problem];

    const isOnline = Boolean(
      powerState && powerState.state !== 'unavailable' && powerState.state !== 'unknown'
    );
    const isOn = isOnline && powerState.state === 'on';

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

    const title =
      this._config.name ||
      powerState?.attributes?.friendly_name?.replace(/ Power$/, '') ||
      'IFB Washing Machine';

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

    const programOptions = (programObj?.attributes?.options as string[]) || [];
    const spinOptions = (spinObj?.attributes?.options as string[]) || [];
    const tempOptions = (tempObj?.attributes?.options as string[]) || [];
    const delayOptions = (delayObj?.attributes?.options as string[]) || [];

    const isCompact = this._config.layout === 'compact';

    if (isCompact && !this._expanded) {
      return this._renderCompactCard(
        entities,
        title,
        subtitle,
        isOnline,
        isOn,
        isRunning,
        isPaused,
        machineState,
        remMinutes,
        progressPct
      );
    }

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
        spinOptions,
        tempOptions,
        delayOptions
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
              <ha-icon class="header-icon" icon="mdi:washing-machine"></ha-icon>
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
          spinOptions,
          tempOptions,
          delayOptions
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
          •
          <div
            class="footer-item interactive"
            title="${!isOnline
              ? 'Device is offline'
              : !isOn
              ? 'Turn on the washer to toggle child lock'
              : 'Toggle Child Lock'}"
            @click=${() => this._toggleChildLock(entities.childLock, isOnline, isOn)}
          >
            <ha-icon icon="${isChildLockActive ? 'mdi:account-lock' : 'mdi:account-lock-open-outline'}"></ha-icon>
            <span>Child Lock ${isChildLockActive ? 'On' : 'Off'}</span>
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

  /* ── Compact Card Rendering ── */
  private _renderCompactCard(
    entities: ReturnType<typeof this._resolveEntities>,
    title: string,
    subtitle: string,
    isOnline: boolean,
    isOn: boolean,
    isRunning: boolean,
    isPaused: boolean,
    machineState: string,
    remMinutes: number,
    progressPct: number
  ) {
    return html`
      <ha-card
        class="compact-card"
        style="cursor: pointer;"
        @click=${() => {
          this._haptic('selection');
          this._expanded = true;
        }}
      >
        <div class="header" style="margin-bottom: 8px;">
          <div class="header-left">
            <div class="title-row">
              <ha-icon class="header-icon" icon="mdi:washing-machine"></ha-icon>
              <div class="title">${title}</div>
            </div>
            <div class="subtitle">${subtitle}</div>
          </div>
          <div class="header-right">
            <button
              class="collapse-btn collapsed"
              title="Expand Card"
              @click=${(e: Event) => {
                e.stopPropagation();
                this._haptic('light');
                this._expanded = true;
              }}
            >
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </button>
            <button
              class="power-btn ${isOn ? 'on' : ''} ${!isOnline ? 'disabled' : ''}"
              title="${!isOnline ? 'Device is offline' : isOn ? 'Turn Off' : 'Turn On'}"
              @click=${(e: Event) => {
                e.stopPropagation();
                this._togglePower(entities, isOnline);
              }}
            >
              <ha-icon icon="mdi:power"></ha-icon>
            </button>
          </div>
        </div>
        ${this._renderCompactBody(
          entities,
          isOnline,
          isOn,
          isRunning,
          isPaused,
          machineState,
          remMinutes,
          progressPct
        )}
      </ha-card>
    `;
  }

  /* ── Compact Body Rendering ── */
  private _renderCompactBody(
    entities: ReturnType<typeof this._resolveEntities>,
    isOnline: boolean,
    isOn: boolean,
    isRunning: boolean,
    isPaused: boolean,
    machineState: string,
    remMinutes: number,
    progressPct: number
  ) {
    return html`
      <div class="compact-view">
        <div class="compact-info">
          <div class="compact-title">
            ${isRunning
              ? `${this._formatRemaining(remMinutes)} remaining (${progressPct}%)`
              : machineState}
          </div>
          <div class="compact-state">${isRunning ? machineState : isOn ? 'Ready' : 'Standby'}</div>
        </div>
        <div class="compact-actions">
          ${isRunning
            ? html`
                <button
                  class="compact-action-icon ${!isOnline || !isOn ? 'disabled' : ''}"
                  title="Pause Cycle"
                  @click=${() => this._triggerButton(entities.pause, isOnline, isOn)}
                >
                  <ha-icon icon="mdi:pause"></ha-icon>
                </button>
                <button
                  class="compact-action-icon ${!isOnline || !isOn ? 'disabled' : ''}"
                  title="Cancel Cycle"
                  @click=${() => this._triggerButton(entities.cancel, isOnline, isOn)}
                >
                  <ha-icon icon="mdi:stop"></ha-icon>
                </button>
              `
            : html`
                <button
                  class="compact-action-icon primary ${!isOnline || !isOn ? 'disabled' : ''}"
                  title="${isPaused ? 'Resume Cycle' : 'Start Cycle'}"
                  @click=${() => this._triggerButton(entities.start, isOnline, isOn)}
                >
                  <ha-icon icon="mdi:play"></ha-icon>
                </button>
              `}
        </div>
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
    delayOptions: string[]
  ) {
    const displayValue = isRunning
      ? this._formatRemaining(remMinutes)
      : !isOn
      ? 'Off'
      : isComplete
      ? 'Done'
      : 'Ready';

    return html`
      <ha-card class="gh-full-card">
        <!-- Header -->
        <div class="gh-header">
          <div class="gh-header-left">
            <ha-icon class="gh-icon" icon="mdi:washing-machine"></ha-icon>
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

        <!-- Center Hero Display -->
        <div class="gh-center">
          <div class="gh-value-large">${displayValue}</div>
          <div class="gh-subtitle-large">
            <div>
              ${machineState}${tubTemp > 0 ? ` • ${tubTemp}°C` : ''}${motorRpm > 0 ? ` • ${motorRpm} RPM` : ''}
            </div>
            ${isOn
              ? html`
                  <div class="gh-mode-pill">
                    ${isRunning ? machineState : currentProgram || 'Standby'}
                  </div>
                `
              : nothing}
          </div>
        </div>

        <!-- Action Row (Circular Buttons: Start, Pause, Cancel) -->
        <div class="gh-action-row">
          <button
            class="gh-circular-btn primary ${!isOnline || !isOn || isRunning ? 'disabled' : ''}"
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
            <span class="gh-circular-label">${isPaused ? 'Resume' : 'Start'}</span>
          </button>

          <button
            class="gh-circular-btn ${isPaused ? 'active' : ''} ${!isOnline || !isOn || !isRunning ? 'disabled' : ''}"
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
            <span class="gh-circular-label">Pause</span>
          </button>

          <button
            class="gh-circular-btn ${!isOnline || !isOn || (!isRunning && !isPaused) ? 'disabled' : ''}"
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
            <span class="gh-circular-label">Cancel</span>
          </button>
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
        </div>

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
          •
          <div
            class="footer-item interactive"
            title="${!isOnline
              ? 'Device is offline'
              : !isOn
              ? 'Turn on the washer to toggle child lock'
              : 'Toggle Child Lock'}"
            @click=${() => this._toggleChildLock(entities.childLock, isOnline, isOn)}
          >
            <ha-icon icon="${isChildLockActive ? 'mdi:account-lock' : 'mdi:account-lock-open-outline'}"></ha-icon>
            <span>Child Lock ${isChildLockActive ? 'On' : 'Off'}</span>
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
    delayOptions: string[]
  ) {
    const isSpinningFast = motorRpm > 400;

    return html`
      <!-- Porthole & Radial Progress Ring -->
      <div class="porthole-container">
        <div class="porthole-ring-wrapper">
          <svg class="porthole-svg" viewBox="0 0 164 164">
            <circle class="ring-track" cx="82" cy="82" r="${radius}" />
            ${isRunning || isComplete
              ? html`
                  <circle
                    class="ring-progress"
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
              ? html`<div class="drum-baffles ${isSpinningFast ? 'fast-spin' : 'spinning'}"></div>`
              : nothing}
            <div class="porthole-content">
              <div class="porthole-hero-time">
                ${isRunning
                  ? this._formatRemaining(remMinutes)
                  : !isOn
                  ? 'Off'
                  : isComplete
                  ? 'Done'
                  : '00:00'}
              </div>
              <div class="porthole-phase">
                ${!isOn ? 'Standby' : hasProblem ? 'Fault' : machineState}
              </div>
              ${motorRpm > 0 || tubTemp > 0
                ? html`
                    <div class="porthole-submetrics">
                      ${motorRpm > 0 ? `${motorRpm} RPM` : ''}
                      ${motorRpm > 0 && tubTemp > 0 ? ' • ' : ''}
                      ${tubTemp > 0 ? `${tubTemp}°C` : ''}
                    </div>
                  `
                : nothing}
            </div>
          </div>
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
      </div>

      <!-- Expandable Options Picker Panel -->
      ${this._openPanel === 'program'
        ? html`
            <div class="picker-panel">
              ${(programOptions.length > 0
                ? programOptions
                : ['Mix / Daily', 'Cotton', 'Express 15', 'Tub Clean']
              ).map((prog) => {
                const isSelected = currentProgram === prog;
                return html`
                  <button
                    class="picker-opt ${isSelected ? 'sel' : ''}"
                    @click=${() => {
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
                : ['No Spin', '400', '600', '800', '1000', '1200', '1400 RPM']
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
    `;
  }
}

customElements.define('ifb-washer-card', IFBWasherCard);

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'ifb-washer-card',
  name: 'IFB Washer Card',
  description: 'A custom Lovelace card for IFB washing machines and washer dryers.',
  preview: true,
});
