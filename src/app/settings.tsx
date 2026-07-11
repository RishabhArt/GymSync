import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, Switch } from 'react-native';
import { GlassPanel } from '../components/GlassPanel';
import { Icon } from '../components/Icon';
import { useRouter, Link } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();
  
  const [healthSync, setHealthSync] = useState(true);
  const [voiceActive, setVoiceActive] = useState(false);
  const [faceId, setFaceId] = useState(true);

  return (
    <View className="flex-1 bg-background">
      {/* Background Lighting */}
      <View className="absolute top-[-20%] left-[20%] w-[60%] aspect-square rounded-full bg-primary-fixed-dim/5" style={{ filter: 'blur(100px)' }} />

      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Top Navigation */}
        <View className="flex-row items-center justify-between px-gutter h-16 mt-8 z-50">
          <TouchableOpacity 
            onPress={() => router.replace('/profile')} 
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 active:scale-95"
          >
            <Icon name="arrow_back_ios" size={20} color="#b9cacb" />
          </TouchableOpacity>
          <Text className="font-headline-lg-mobile text-[24px] font-bold text-primary tracking-tight">Settings</Text>
          <View className="w-10 h-10" />
        </View>

        <View className="px-container-margin mt-4 flex-col gap-8">
          
          {/* User Profile Quick Header */}
          <View className="flex-row items-center gap-4">
            <View className="w-16 h-16 rounded-full overflow-hidden border border-white/10 shadow-lg shadow-primary-fixed-dim/20">
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZZwXNwHO5xhMh4GNQRfiQ6IiS8c49_kRY0taOP61hKok_I0FW9PA42gFQdY0-0uXxFJxjb7RxKMqAXyedAqE4X63UwLSHrYsm9NbTClbKIQaEGySR_4GbQBlVScZZc_j4ZbwAJugf8AM5BtjYs_PoepA9SDR0SjkWW5B4V7iKEFBfnkQV61h5lwLrmlE57flXT3Jb6MxHdJ4y8B3bKprjB5XIQYQrhgOZHwvwC1yK0JTxJoBzcQIr7amx05kV4COgACQvgBO95q1h' }}
                className="w-full h-full"
              />
            </View>
            <View>
              <Text className="font-headline-lg-mobile text-xl text-primary font-bold">Alex Mercer</Text>
              <Text className="text-on-surface-variant text-sm mt-1 font-label-caps tracking-wider">PREMIUM MEMBER</Text>
            </View>
          </View>

          {/* Section: App Preferences */}
          <View className="flex-col">
            <Text className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest pl-2">App Preferences</Text>
            <GlassPanel className="rounded-xl overflow-hidden p-0">
              <TouchableOpacity className="flex-row items-center justify-between p-card-padding border-b border-white/5 hover:bg-white/5 active:scale-[0.98]">
                <View className="flex-row items-center gap-4">
                  <Icon name="dark_mode" size={24} color="#00dbe7" fill />
                  <Text className="text-on-surface font-body-md text-[16px]">Appearance</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Text className="text-on-surface-variant text-sm">Dark</Text>
                  <Icon name="chevron_right" size={20} color="#849495" />
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity className="flex-row items-center justify-between p-card-padding hover:bg-white/5 active:scale-[0.98]">
                <View className="flex-row items-center gap-4">
                  <Icon name="language" size={24} color="#00dbe7" />
                  <Text className="text-on-surface font-body-md text-[16px]">Language</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Text className="text-on-surface-variant text-sm">English</Text>
                  <Icon name="chevron_right" size={20} color="#849495" />
                </View>
              </TouchableOpacity>
            </GlassPanel>
          </View>

          {/* Section: Workout */}
          <View className="flex-col">
            <Text className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest pl-2">Workout</Text>
            <GlassPanel className="rounded-xl overflow-hidden p-0">
              <TouchableOpacity className="flex-row items-center justify-between p-card-padding border-b border-white/5 hover:bg-white/5 active:scale-[0.98]">
                <View className="flex-row items-center gap-4">
                  <Icon name="timer" size={24} color="#5adcb3" />
                  <Text className="text-on-surface font-body-md text-[16px]">Rest Timer Default</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Text className="text-on-surface-variant text-sm">60s</Text>
                  <Icon name="chevron_right" size={20} color="#849495" />
                </View>
              </TouchableOpacity>
              
              <View className="flex-row items-center justify-between p-card-padding">
                <View className="flex-row items-center gap-4">
                  <Icon name="monitor_heart" size={24} color="#5adcb3" fill />
                  <Text className="text-on-surface font-body-md text-[16px]">Apple Health Sync</Text>
                </View>
                <Switch 
                  value={healthSync} 
                  onValueChange={setHealthSync} 
                  trackColor={{ false: '#2e3637', true: '#00dbe7' }}
                  thumbColor={'#ffffff'}
                />
              </View>
            </GlassPanel>
          </View>

          {/* Section: AI & Voice */}
          <View className="flex-col relative">
            <View className="absolute inset-0 bg-primary-fixed-dim/5 blur-3xl z-0 pointer-events-none rounded-xl" />
            <Text className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest pl-2 relative z-10">AI & Voice</Text>
            <GlassPanel className="rounded-xl overflow-hidden p-0 relative z-10">
              <TouchableOpacity className="flex-row items-center justify-between p-card-padding border-b border-white/5 hover:bg-white/5 active:scale-[0.98]">
                <View className="flex-row items-center gap-4">
                  <Icon name="smart_toy" size={24} color="#74f5ff" fill />
                  <Text className="text-on-surface font-body-md text-[16px]">Coach Personality</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Text className="text-on-surface-variant text-sm">Aggressive</Text>
                  <Icon name="chevron_right" size={20} color="#849495" />
                </View>
              </TouchableOpacity>
              
              <View className="flex-row items-center justify-between p-card-padding">
                <View className="flex-row items-center gap-4">
                  <Icon name="mic" size={24} color="#74f5ff" />
                  <Text className="text-on-surface font-body-md text-[16px]">Voice Activation</Text>
                </View>
                <Switch 
                  value={voiceActive} 
                  onValueChange={setVoiceActive} 
                  trackColor={{ false: '#2e3637', true: '#00dbe7' }}
                  thumbColor={'#ffffff'}
                />
              </View>
            </GlassPanel>
          </View>

          {/* Section: Account & Security */}
          <View className="flex-col">
            <Text className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest pl-2">Account & Security</Text>
            <GlassPanel className="rounded-xl overflow-hidden p-0">
              <TouchableOpacity className="flex-row items-center justify-between p-card-padding border-b border-white/5 hover:bg-white/5 active:scale-[0.98]">
                <View className="flex-row items-center gap-4">
                  <Icon name="person" size={24} color="#c2c6db" />
                  <Text className="text-on-surface font-body-md text-[16px]">Personal Information</Text>
                </View>
                <Icon name="chevron_right" size={20} color="#849495" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={() => {
                  console.log('Navigating to subscription...');
                  router.push('/subscription');
                }}
                className="flex-row items-center justify-between p-card-padding border-b border-white/5 hover:bg-white/5 active:scale-[0.98]"
              >
                <View className="flex-row items-center gap-4">
                  <Icon name="credit_card" size={24} color="#c2c6db" />
                  <Text className="text-on-surface font-body-md text-[16px]">Subscription</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Text className="text-on-surface-variant text-sm">Free</Text>
                  <Icon name="chevron_right" size={20} color="#849495" />
                </View>
              </TouchableOpacity>

              <View className="flex-row items-center justify-between p-card-padding">
                <View className="flex-row items-center gap-4">
                  <Icon name="face" size={24} color="#c2c6db" />
                  <Text className="text-on-surface font-body-md text-[16px]">Face ID Unlocking</Text>
                </View>
                <Switch 
                  value={faceId} 
                  onValueChange={setFaceId} 
                  trackColor={{ false: '#2e3637', true: '#00dbe7' }}
                  thumbColor={'#ffffff'}
                />
              </View>
            </GlassPanel>
          </View>

          {/* Section: Support */}
          <View className="flex-col">
            <Text className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest pl-2">Support</Text>
            <GlassPanel className="rounded-xl overflow-hidden p-0">
              <TouchableOpacity className="flex-row items-center justify-between p-card-padding hover:bg-white/5 active:scale-[0.98]">
                <View className="flex-row items-center gap-4">
                  <Icon name="help" size={24} color="#849495" />
                  <Text className="text-on-surface font-body-md text-[16px]">Help Center</Text>
                </View>
                <Icon name="chevron_right" size={20} color="#849495" />
              </TouchableOpacity>
            </GlassPanel>
          </View>

          {/* Log Out Button */}
          <View className="mb-12 flex-row justify-center mt-4">
            <TouchableOpacity 
              onPress={() => router.replace('/')}
              className="px-8 py-3 rounded-full border border-error/30 flex-row items-center gap-2 active:scale-95"
            >
              <Icon name="logout" size={16} color="#ffb4ab" />
              <Text className="text-error font-label-caps text-label-caps uppercase font-bold">LOG OUT</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}
