import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ViewProps } from 'react-native';

const ICON_MAP: Record<string, keyof typeof MaterialCommunityIcons.glyphMap> = {
  // Navigation & Core
  'fitness_center': 'dumbbell',
  'monitoring': 'chart-line',
  'bolt': 'lightning-bolt',
  'person': 'account',
  'settings': 'cog',
  // Dashboard & Metrics
  'play_arrow': 'play',
  'play_circle_outline': 'play-circle-outline',
  'battery_charging_full': 'battery-charging',
  'health_and_safety': 'shield-check',
  // Actions
  'videocam': 'video',
  'restaurant': 'food-apple',
  'self_improvement': 'yoga',
  'add_circle': 'plus-circle',
  'add_circle_outline': 'plus-circle-outline',
  'arrow_upward': 'arrow-up',
  'arrow_back_ios': 'chevron-left',
  'arrow_back': 'arrow-left',
  'more_horiz': 'dots-horizontal',
  'bookmark_border': 'bookmark-outline',
  'bookmark': 'bookmark',
  'auto_awesome': 'star-four-points',
  // Settings
  'timer': 'timer-outline',
  'monitor_heart': 'heart-pulse',
  'smart_toy': 'robot-outline',
  'mic': 'microphone',
  'credit_card': 'credit-card-outline',
  'face': 'face-recognition',
  'help': 'help-circle-outline',
  'logout': 'logout',
  'dark_mode': 'weather-night',
  'language': 'web',
  'chevron_right': 'chevron-right',
  // Details
  'volume_up': 'volume-high',
  'fullscreen': 'fullscreen',
  'science': 'flask',
  'analytics': 'chart-bar',
  'bar_chart': 'chart-bar',
  // Profile
  'search': 'magnify',
  'verified': 'check-decagram',
  'workspace_premium': 'star-circle',
  'local_fire_department': 'fire',
  'emoji_events': 'trophy',
  'airline_seat_recline_extra': 'seat-recline-extra',
  'group': 'account-group',
  'person_search': 'account-search',
  'diversity_3': 'account-multiple',
  'manage_accounts': 'account-cog',
  'subscriptions': 'youtube-subscription',
  'sync': 'sync',
};

interface IconProps extends ViewProps {
  name: string;
  size?: number;
  color?: string;
  fill?: boolean;
}

export function Icon({ name, size = 24, color = 'inherit', fill = false, style, className = '', ...props }: IconProps) {
  // Map the material symbol name to MaterialCommunityIcons, fallback to passing it directly
  const mappedName = ICON_MAP[name] || (name as any);
  
  return (
    <MaterialCommunityIcons
      name={mappedName}
      size={size}
      color={color}
      style={style}
      className={className}
      {...props}
    />
  );
}
