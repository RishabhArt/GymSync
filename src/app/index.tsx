import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-background items-center justify-center relative overflow-hidden">
      {/* Ambient Background Lighting */}
      <View className="absolute inset-0 pointer-events-none z-0">
        <View className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary-fixed-dim/20 rounded-full blur-3xl opacity-50" />
        <View className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-tertiary-container/10 rounded-full blur-3xl opacity-50" />
      </View>

      <View className="relative z-10 flex-col items-center justify-center flex-1 w-full px-container-margin">
        {/* Logo Area */}
        <View className="relative items-center justify-center mb-8">
          <View className="absolute inset-0 bg-primary-fixed-dim/30 rounded-full blur-2xl" />
          <Image
            source={require('../../assets/images/gym_sync_welcome_logo.png')}
            style={{ width: 120, height: 120, borderRadius: 24, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' }}
            className="bg-surface-container/50"
            resizeMode="contain"
          />
        </View>

        {/* Typography */}
        <View className="items-center space-y-4">
          <Text className="font-hero-display text-hero-display text-on-surface tracking-tight">
            Gym Sync
          </Text>
          <Text className="font-body-md text-body-md text-on-surface-variant tracking-wide mt-2">
            Premium AI Fitness Coach
          </Text>
        </View>

        {/* Manual Navigation Button (Fallback) */}
        <View className="absolute bottom-20 w-full px-8">
          <TouchableOpacity 
            className="w-full bg-primary-fixed-dim/20 border border-primary-fixed-dim/50 rounded-full py-4 items-center justify-center backdrop-blur-md"
            onPress={() => router.replace('/(auth)/login')}
          >
            <Text className="text-primary-fixed-dim font-label-caps uppercase tracking-widest">Tap to Continue</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View className="absolute bottom-8 w-full items-center">
        <Text className="font-label-caps text-label-caps text-on-surface-variant/50 uppercase tracking-[3px]">
          By AI Dynamics
        </Text>
      </View>
    </View>
  );
}
