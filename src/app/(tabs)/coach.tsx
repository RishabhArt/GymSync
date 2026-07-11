import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { GlassPanel } from '../../components/GlassPanel';
import { Icon } from '../../components/Icon';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export default function CoachScreen() {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <KeyboardAvoidingView 
      className="flex-1 bg-background" 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={90}
    >
      {/* Spotlights */}
      <View className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <View className="absolute top-[-20%] left-[-10%] w-[50%] aspect-square rounded-full bg-primary-fixed-dim/5" style={{ filter: 'blur(100px)' }} />
        <View className="absolute bottom-[-10%] right-[-10%] w-[60%] aspect-square rounded-full bg-tertiary-fixed-dim/5" style={{ filter: 'blur(100px)' }} />
      </View>

      {/* TopAppBar */}
      <View className="flex-row justify-between items-center px-container-margin py-4 mt-8 z-50">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-full border border-white/10 overflow-hidden bg-surface-container-high">
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvpXgG0GfD8NbtIB4S7qYHOlEawUHhD6tukIXLjbrjQtvT7dyDXJ6UUms6uywXG9KVTAA-a3tL13ZrJuUzHvx7q58CFvWbWupJ_5cMmhXLdkK7cc4rh5oyRqXVwFcRWBWEAXDIzE8WgRMbABEUVzwVeVMWkvpuOwIwd5zQY9wtrMwdoz8n_Oxt9Y5Ju7pRAjS5oYfH1yAwB6kcyQISEoW1fjzbOVMzl205-Z13qXiwMvtqlRCbRJq-58er_m2t9dvPg3keXkPbTjYq' }}
              className="w-full h-full"
            />
          </View>
          <Text className="font-headline-lg-mobile text-[24px] font-bold text-on-surface">Gym Sync</Text>
        </View>
        <TouchableOpacity className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <Icon name="settings" size={24} color="#b9cacb" />
        </TouchableOpacity>
      </View>

      {/* Main Chat Canvas */}
      <ScrollView className="flex-1 z-10 px-container-margin" contentContainerStyle={{ paddingBottom: 24 }}>
        
        {/* Header / Status */}
        <View className="flex-col items-center justify-center mb-8 gap-2 mt-4">
          <View className="relative">
            <View className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-primary-fixed-dim/30">
              <Icon name="bolt" size={24} color="#00dbe7" fill />
            </View>
          </View>
          <Text className="font-headline-lg-mobile text-[24px] font-bold text-on-surface text-center">AI Coach</Text>
          <View className="flex-row items-center gap-1.5 bg-surface-container-high px-3 py-1 rounded-full border border-white/5">
            <View className="w-2 h-2 rounded-full bg-tertiary-container" />
            <Text className="font-label-caps text-label-caps text-on-surface-variant">ONLINE</Text>
          </View>
        </View>

        {/* Chat History */}
        <View className="flex-col gap-6">
          
          {/* Date Divider */}
          <View className="flex-row justify-center">
            <Text className="font-label-caps text-label-caps text-on-surface-variant/50 uppercase tracking-widest">Today</Text>
          </View>

          {/* AI Message */}
          <View className="flex-col gap-2 max-w-[85%] self-start">
            <GlassPanel className="rounded-2xl rounded-tl-sm p-4 text-on-surface relative overflow-hidden">
              <Text className="font-body-md text-on-surface leading-relaxed">
                Good morning! Your resting heart rate is slightly elevated today. Ready for a lighter recovery session, or do you want to push through the planned heavy lifts?
              </Text>
            </GlassPanel>
            <Text className="font-label-caps text-[10px] text-on-surface-variant/50 ml-1">08:15 AM</Text>
          </View>

          {/* User Message */}
          <View className="flex-col gap-2 max-w-[85%] self-end">
            <View className="bg-primary-fixed-dim rounded-2xl rounded-tr-sm p-4 shadow-lg shadow-primary-fixed-dim/20">
              <Text className="font-body-md text-[#002022] font-medium leading-relaxed">
                Let's stick to the heavy lifts. I feel good. Can you review my squat form from yesterday first?
              </Text>
            </View>
            <Text className="font-label-caps text-[10px] text-on-surface-variant/50 mr-1 self-end">08:17 AM</Text>
          </View>

          {/* AI Message with Attachment */}
          <View className="flex-col gap-2 max-w-[85%] self-start">
            <GlassPanel className="rounded-2xl rounded-tl-sm p-4 text-on-surface">
              <Text className="font-body-md text-on-surface leading-relaxed mb-4">
                Analyzing yesterday's squat data... Your depth is excellent, but your bar path shifts forward slightly out of the hole.
              </Text>
              
              {/* Nested Data Card */}
              <View className="bg-surface-container-high rounded-xl p-3 border border-white/5 flex-row gap-3 items-center">
                <View className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center">
                  <Icon name="bar_chart" size={24} color="#71f1c7" />
                </View>
                <View className="flex-col flex-1">
                  <Text className="font-label-caps text-[10px] text-on-surface-variant">BAR PATH ANALYSIS</Text>
                  <Text className="text-sm font-medium text-on-surface">3.2cm Forward Deviation</Text>
                </View>
              </View>
            </GlassPanel>
            <Text className="font-label-caps text-[10px] text-on-surface-variant/50 ml-1">08:18 AM</Text>
          </View>
        </View>

      </ScrollView>

      {/* Bottom Input Area */}
      <View className="px-container-margin py-4 z-50 bg-background/90" style={{ paddingBottom: tabBarHeight + 10 }}>
        
        {/* Quick Actions */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4" contentContainerStyle={{ gap: 8 }}>
          <TouchableOpacity className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex-row items-center gap-2">
            <Icon name="videocam" size={16} color="#00dbe7" />
            <Text className="text-sm font-medium text-on-surface">Form Check</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex-row items-center gap-2">
            <Icon name="restaurant" size={16} color="#71f1c7" />
            <Text className="text-sm font-medium text-on-surface">Meal Idea</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex-row items-center gap-2">
            <Icon name="self_improvement" size={16} color="#dee1f7" />
            <Text className="text-sm font-medium text-on-surface">Recovery Tip</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Input Field */}
        <View className="flex-row items-end gap-2 bg-surface-container-high rounded-3xl p-2 border border-white/10">
          <TouchableOpacity className="w-10 h-10 rounded-full flex items-center justify-center">
            <Icon name="add_circle_outline" size={24} color="#b9cacb" />
          </TouchableOpacity>
          <TextInput 
            className="flex-1 bg-transparent border-none text-on-surface py-3 font-body-md"
            placeholder="Ask your coach..."
            placeholderTextColor="#b9cacb80"
            multiline
            style={{ minHeight: 44, maxHeight: 120 }}
          />
          <TouchableOpacity className="w-10 h-10 rounded-full bg-primary-fixed-dim items-center justify-center shadow-lg shadow-primary-fixed-dim/40">
            <Icon name="arrow_upward" size={24} color="#002022" />
          </TouchableOpacity>
        </View>

      </View>
    </KeyboardAvoidingView>
  );
}
