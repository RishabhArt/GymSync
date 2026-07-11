import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import { GlassPanel } from '../../components/GlassPanel';
import { Icon } from '../../components/Icon';
import Svg, { Circle } from 'react-native-svg';

export default function DashboardScreen() {
  return (
    <View className="flex-1 bg-background">
      {/* Background Lighting Effect */}
      <View className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <View className="absolute top-[-20%] left-[-10%] w-[50%] aspect-square bg-primary-fixed-dim/10 rounded-full" style={{ filter: 'blur(100px)' }} />
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 120 }}>
        {/* TopAppBar */}
        <View className="flex-row justify-between items-center px-container-margin py-4 mt-8 z-50">
          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 rounded-full border border-white/10 overflow-hidden bg-surface-container/50">
              <Image
                source={require('../../../assets/images/logo-glow.png')}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
            <Text className="font-headline-lg-mobile text-[24px] font-bold text-on-surface">Gym Sync</Text>
          </View>
          <TouchableOpacity className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <Icon name="settings" size={24} color="#b9cacb" />
          </TouchableOpacity>
        </View>

        <View className="px-container-margin flex-col gap-8">
          {/* Hero: Today's Focus */}
          <View className="relative w-full rounded-3xl overflow-hidden border border-white/10">
            <ImageBackground 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1_Y07G88K0E5_C5C_56c_c8z_X4v9O79T3m-wO4u9y7L3-V5oN78j1L1D0j6q4f0B2W2B7Q8B2Z5x4W8q5T3L2D1w6B1x6t4s2q6h8C5X1I8R0y9R2Z9B8x2y7Y5O9F7V5b7Q1J6c1h8C3t2s8k3m3N1A2x9p0Z6I7W0L1J4s4' }} // Replaced with a valid placeholder from other designs or a generic one as the original is broken
              className="w-full"
              imageStyle={{ opacity: 0.4 }}
            >
              <View className="p-card-padding flex-col gap-6" style={{ backgroundColor: 'rgba(13, 21, 21, 0.4)' }}>
                <View className="flex-row justify-between items-start">
                  <View>
                    <Text className="font-label-caps text-label-caps text-primary-fixed-dim tracking-[2px] uppercase mb-2">Today's Focus</Text>
                    <Text className="font-headline-lg-mobile text-[28px] font-bold text-on-surface mb-1 shadow-black shadow-md">Strength & Power</Text>
                    <Text className="text-on-surface-variant font-body-md text-sm">Upper Body Focus • 45 Min • High Intensity</Text>
                  </View>
                  <Icon name="fitness_center" size={32} color="#00dbe7" />
                </View>
                
                <TouchableOpacity className="bg-primary-fixed-dim h-14 rounded-full flex-row items-center justify-center gap-2 mt-4 shadow-lg shadow-primary-fixed-dim/30">
                  <Icon name="play_arrow" size={20} color="#0d1515" fill />
                  <Text className="text-[#002022] font-label-caps text-label-caps uppercase font-bold">START WORKOUT</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* Metrics Grid */}
          <View className="flex-row flex-wrap justify-between gap-4">
            {/* Body Battery */}
            <GlassPanel className="p-5 flex-col justify-between w-[47%] aspect-square">
              <View className="flex-row justify-between items-start mb-4">
                <Icon name="battery_charging_full" size={24} color="#5adcb3" />
                <Text className="font-label-caps text-[10px] text-tertiary-fixed-dim uppercase tracking-wider">Battery</Text>
              </View>
              <View>
                <Text className="font-metric-xl text-[32px] text-on-surface mb-2">78<Text className="text-lg text-on-surface-variant">%</Text></Text>
                <View className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <View className="h-full bg-tertiary-fixed-dim w-[78%] rounded-full shadow-lg shadow-tertiary-fixed-dim/50" />
                </View>
              </View>
            </GlassPanel>

            {/* Recovery */}
            <GlassPanel className="p-5 flex-col justify-between w-[47%] aspect-square">
              <View className="flex-row justify-between items-start mb-4">
                <Icon name="health_and_safety" size={24} color="#00dbe7" />
                <Text className="font-label-caps text-[10px] text-primary-fixed-dim uppercase tracking-wider">Recovery</Text>
              </View>
              <View>
                <Text className="font-metric-xl text-[32px] text-on-surface mb-2">85<Text className="text-lg text-on-surface-variant">%</Text></Text>
                <Text className="text-sm text-on-surface-variant font-body-md">Optimal</Text>
              </View>
            </GlassPanel>

            {/* Heart Rate */}
            <GlassPanel className="p-5 flex-col justify-between w-full h-32 relative overflow-hidden">
              <View className="flex-row justify-between items-start mb-4 z-10">
                <Icon name="monitor_heart" size={24} color="#ffb4ab" />
                <Text className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider">Resting HR</Text>
              </View>
              <View className="z-10 flex-row items-end gap-2">
                <Text className="font-metric-xl text-[32px] text-on-surface leading-none">62</Text>
                <Text className="text-sm text-on-surface-variant mb-1 font-label-caps uppercase">BPM</Text>
              </View>
              {/* Abstract Sparkline using an SVG */}
              <View className="absolute bottom-0 left-0 right-0 h-1/2 opacity-40">
                <Svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <View style={StyleSheet.absoluteFillObject} className="bg-error/5" />
                  <Circle cx="80" cy="15" r="3" fill="#ffb4ab" />
                </Svg>
              </View>
            </GlassPanel>
          </View>

          {/* Activity Rings */}
          <GlassPanel className="p-card-padding flex-row items-center gap-6">
            <View className="w-28 h-28 relative items-center justify-center">
              <Svg width="112" height="112" viewBox="0 0 120 120" style={{ transform: [{ rotate: '-90deg' }] }}>
                {/* Background tracks */}
                <Circle cx="60" cy="60" r="50" stroke="rgba(255,255,255,0.05)" strokeWidth="10" fill="none" />
                <Circle cx="60" cy="60" r="36" stroke="rgba(255,255,255,0.05)" strokeWidth="10" fill="none" />
                <Circle cx="60" cy="60" r="22" stroke="rgba(255,255,255,0.05)" strokeWidth="10" fill="none" />
                
                {/* Progress tracks */}
                <Circle cx="60" cy="60" r="50" stroke="#71f1c7" strokeWidth="10" fill="none" strokeDasharray="314" strokeDashoffset="31" strokeLinecap="round" />
                <Circle cx="60" cy="60" r="36" stroke="#00dbe7" strokeWidth="10" fill="none" strokeDasharray="226" strokeDashoffset="56" strokeLinecap="round" />
                <Circle cx="60" cy="60" r="22" stroke="#dee1f7" strokeWidth="10" fill="none" strokeDasharray="138" strokeDashoffset="46" strokeLinecap="round" />
              </Svg>
            </View>
            
            <View className="flex-col gap-4 flex-1">
              <View className="flex-row items-center justify-between border-b border-white/5 pb-2">
                <View className="flex-row items-center gap-2">
                  <View className="w-3 h-3 rounded-full bg-tertiary-container" />
                  <Text className="font-label-caps text-label-caps text-on-surface-variant">Move</Text>
                </View>
                <Text className="font-body-md text-on-surface text-sm font-medium">540 <Text className="text-on-surface-variant text-xs">/ 600 cals</Text></Text>
              </View>
              <View className="flex-row items-center justify-between border-b border-white/5 pb-2">
                <View className="flex-row items-center gap-2">
                  <View className="w-3 h-3 rounded-full bg-primary-fixed-dim" />
                  <Text className="font-label-caps text-label-caps text-on-surface-variant">Exercise</Text>
                </View>
                <Text className="font-body-md text-on-surface text-sm font-medium">45 <Text className="text-on-surface-variant text-xs">/ 60 min</Text></Text>
              </View>
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-2">
                  <View className="w-3 h-3 rounded-full bg-secondary-fixed" />
                  <Text className="font-label-caps text-label-caps text-on-surface-variant">Stand</Text>
                </View>
                <Text className="font-body-md text-on-surface text-sm font-medium">8 <Text className="text-on-surface-variant text-xs">/ 12 hr</Text></Text>
              </View>
            </View>
          </GlassPanel>

          {/* AI Insights */}
          <GlassPanel className="p-5 flex-row items-start gap-4 relative overflow-hidden group">
            <View className="absolute inset-0 bg-gradient-to-r from-primary-fixed-dim/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <View className="bg-primary-fixed-dim/10 p-3 rounded-full border border-primary-fixed-dim/20 shadow-lg shadow-primary-fixed-dim/20">
              <Icon name="bolt" size={24} color="#00dbe7" />
            </View>
            <View className="flex-1 pt-1">
              <Text className="font-label-caps text-[10px] text-primary-fixed-dim uppercase mb-1 tracking-wider">AI Coach Insight</Text>
              <Text className="font-body-md text-on-surface leading-relaxed text-[15px]">"Your recovery is optimal. Today is a great day for heavy squats. Let's aim for 3 sets of 5."</Text>
            </View>
          </GlassPanel>

        </View>
      </ScrollView>
    </View>
  );
}
