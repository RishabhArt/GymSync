import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { GlassPanel } from '../components/GlassPanel';
import { Icon } from '../components/Icon';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SubscriptionScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-background">
      {/* Background Lighting */}
      <View className="absolute top-[-20%] left-[20%] w-[60%] aspect-square rounded-full bg-primary-fixed-dim/5" style={{ filter: 'blur(100px)' }} />
      <View className="absolute bottom-[-10%] right-[-20%] w-[70%] aspect-square rounded-full bg-tertiary-fixed-dim/5" style={{ filter: 'blur(100px)' }} />

      {/* Top Navigation */}
      <View className="flex-row items-center justify-between px-gutter h-16 z-50" style={{ marginTop: Math.max(insets.top, 32) }}>
        <TouchableOpacity 
          onPress={() => {
            if (router.canGoBack()) {
              router.back();
            } else {
              router.replace('/profile');
            }
          }} 
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 active:scale-95"
        >
          <Icon name="arrow_back_ios" size={20} color="#b9cacb" />
        </TouchableOpacity>
        <Text className="font-headline-lg-mobile text-[24px] font-bold text-primary tracking-tight">Plans</Text>
        <View className="w-10 h-10" />
      </View>

      <ScrollView className="flex-1 px-container-margin mt-4" contentContainerStyle={{ paddingBottom: 60, gap: 24 }}>
        
        {/* Basic Tier (Free) */}
        <View>
          <Text className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest pl-2">Current Plan</Text>
          <GlassPanel className="rounded-3xl p-6 border border-white/10">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="font-headline-lg-mobile text-[24px] font-bold text-on-surface">Basic</Text>
              <View className="bg-surface-container-high px-3 py-1 rounded-full border border-white/5">
                <Text className="font-label-caps text-on-surface-variant">Free</Text>
              </View>
            </View>
            <Text className="text-on-surface-variant font-body-md mb-6 leading-relaxed">
              Essential fitness tracking and limited access to standard exercise routines.
            </Text>
            
            <View className="flex-col gap-3">
              <View className="flex-row items-center gap-3">
                <Icon name="verified" size={20} color="#849495" />
                <Text className="text-on-surface font-body-sm">Standard Workout Logging</Text>
              </View>
              <View className="flex-row items-center gap-3">
                <Icon name="verified" size={20} color="#849495" />
                <Text className="text-on-surface font-body-sm">Basic AI Coach Responses</Text>
              </View>
              <View className="flex-row items-center gap-3">
                <Icon name="verified" size={20} color="#849495" />
                <Text className="text-on-surface font-body-sm">Limited Exercise Library</Text>
              </View>
            </View>
          </GlassPanel>
        </View>

        {/* Pro Tier (₹199/month) */}
        <View className="relative">
          {/* Glow effect for Pro */}
          <View className="absolute inset-0 bg-primary-fixed-dim/20 blur-2xl rounded-3xl z-0" />
          
          <GlassPanel className="rounded-3xl p-6 border-2 border-primary-fixed-dim relative z-10 overflow-hidden">
            <View className="absolute inset-0 bg-[#00dbe7] opacity-5" />
            
            <View className="flex-row items-center justify-between mb-4">
              <View className="flex-row items-center gap-2">
                <Icon name="workspace_premium" size={28} color="#00dbe7" fill />
                <Text className="font-headline-lg-mobile text-[28px] font-bold text-primary">GymSync Pro</Text>
              </View>
            </View>
            
            <View className="mb-6">
              <Text className="font-headline-lg-mobile text-[32px] font-bold text-on-surface">
                ₹199<Text className="text-[16px] text-on-surface-variant font-normal"> / month</Text>
              </Text>
              <Text className="text-on-surface-variant font-body-md mt-2">
                Unlock the ultimate AI-powered fitness experience tailored for the Indian market.
              </Text>
            </View>

            <View className="flex-col gap-4 mb-8">
              <View className="flex-row items-center gap-3">
                <View className="w-6 h-6 rounded-full bg-primary-fixed-dim/20 flex items-center justify-center">
                  <Icon name="bolt" size={16} color="#00dbe7" fill />
                </View>
                <Text className="text-on-surface font-body-md flex-1">Unlimited Advanced AI Coach Insights</Text>
              </View>
              <View className="flex-row items-center gap-3">
                <View className="w-6 h-6 rounded-full bg-tertiary-container/20 flex items-center justify-center">
                  <Icon name="restaurant" size={16} color="#ffb4ab" />
                </View>
                <Text className="text-on-surface font-body-md flex-1">Personalized Macro & Diet Generation</Text>
              </View>
              <View className="flex-row items-center gap-3">
                <View className="w-6 h-6 rounded-full bg-primary-fixed-dim/20 flex items-center justify-center">
                  <Icon name="fitness_center" size={16} color="#00dbe7" />
                </View>
                <Text className="text-on-surface font-body-md flex-1">Full Access to Extended Exercise Library</Text>
              </View>
              <View className="flex-row items-center gap-3">
                <View className="w-6 h-6 rounded-full bg-primary-fixed-dim/20 flex items-center justify-center">
                  <Icon name="analytics" size={16} color="#00dbe7" />
                </View>
                <Text className="text-on-surface font-body-md flex-1">Deep Biomechanical Video Breakdowns</Text>
              </View>
            </View>

            <TouchableOpacity className="w-full bg-primary-fixed-dim py-4 rounded-full items-center justify-center shadow-lg shadow-primary-fixed-dim/30 active:scale-[0.98]">
              <Text className="text-[#002022] font-label-caps font-bold text-lg tracking-wider">UPGRADE TO PRO</Text>
            </TouchableOpacity>
            <Text className="text-center text-[10px] text-on-surface-variant/50 mt-4 font-label-caps">
              RENEWS AUTOMATICALLY AT ₹199/MONTH. CANCEL ANYTIME.
            </Text>
          </GlassPanel>
        </View>

      </ScrollView>
    </View>
  );
}
