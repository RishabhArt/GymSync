import React from 'react';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon } from '../../components/Icon';

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#00dbe7', // primary-fixed-dim
        tabBarInactiveTintColor: '#b9cacb', // on-surface-variant
        tabBarStyle: {
          backgroundColor: 'rgba(25, 33, 34, 0.8)', // surface-container/80
          borderTopColor: 'rgba(255, 255, 255, 0.1)',
          borderTopWidth: 1,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: (Platform.OS === 'ios' ? 88 : 70) + insets.bottom,
          paddingBottom: (Platform.OS === 'ios' ? 24 : 12) + insets.bottom,
          paddingTop: 12,
        },
        tabBarLabelStyle: {
          fontFamily: 'Geist-Medium', // Using Geist for caps labels
          fontSize: 12,
          marginTop: 4,
          letterSpacing: 0.8,
        },
      }}
    >
      <Tabs.Screen
        name="workout"
        options={{
          title: 'Workout',
          tabBarIcon: ({ color }) => <Icon name="fitness_center" color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Metrics',
          tabBarIcon: ({ color }) => <Icon name="monitoring" color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="coach"
        options={{
          title: 'AI Coach',
          tabBarIcon: ({ color }) => <Icon name="bolt" color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Icon name="person" color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}
