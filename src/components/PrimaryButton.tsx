import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, View } from 'react-native';
import { Icon } from './Icon';

interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;
  iconName?: string;
  className?: string;
}

export function PrimaryButton({ title, iconName, className = '', ...props }: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      className={`bg-primary-fixed-dim rounded-full py-4 px-8 flex-row items-center justify-center gap-2 shadow-lg shadow-primary-fixed-dim/30 ${className}`}
      activeOpacity={0.8}
      {...props}
    >
      {iconName && <Icon name={iconName} size={20} color="#0d1515" fill={true} />}
      <Text className="text-background font-label-caps text-label-caps uppercase">{title}</Text>
    </TouchableOpacity>
  );
}
