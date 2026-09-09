export interface IFBWasherCardConfig {
  type: string;
  entity?: string;
  name?: string;
  show_icon?: boolean;
  theme?: 'default' | 'material_you' | string;
  layout?: 'default' | 'compact' | string;
  full_layout?: 'default' | 'google_home' | string;
  accent_color?: string;
  main_color?: string;

  // Optional manual entity overrides
  power_switch?: string;
  start_button?: string;
  pause_button?: string;
  cancel_button?: string;
  program_select?: string;
  spin_select?: string;
  temperature_select?: string;
  delay_select?: string;
  child_lock_switch?: string;
  time_remaining_sensor?: string;
  program_duration_sensor?: string;
  cycle_progress_sensor?: string;
  machine_state_sensor?: string;
  tub_temp_sensor?: string;
  motor_speed_sensor?: string;
  door_locked_sensor?: string;
}
