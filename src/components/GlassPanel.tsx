import React from 'react';
import { View, ViewProps, Platform } from 'react-native';

interface GlassPanelProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassPanel({ children, className = '', style, ...props }: GlassPanelProps) {
  // Use explicit tailwind classes for the glass effect to ensure it works across all platforms
  const webBlur = Platform.OS === 'web' ? 'backdrop-blur-3xl' : '';

  return (
    <View
      className={`bg-[#192122]/40 border border-white/10 rounded-[24px] overflow-hidden ${webBlur} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </View>
  );
}
