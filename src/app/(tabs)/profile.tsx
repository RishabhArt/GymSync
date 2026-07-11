import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { GlassPanel } from '../../components/GlassPanel';
import { Icon } from '../../components/Icon';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-background">
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 120 }}>
        
        {/* TopAppBar (Mobile) */}
        <View className="flex-row items-center justify-between px-gutter py-4 mt-8 z-50">
          <View className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi4TO5r6rl-7S24Eud_pNIcCZqwiBs1ZEG2xssIlOW0cLefp9EIcgD5tkE6rzjvDtoSc5r6ww1Xs_8eEjmWRJlA_9lKQHsB5YCQk327GvROqUIUNF_HcobbiRjWhEwLNZ1cSin5zfMCsE_2gVJOUu7uwhkiFb7mjmwQoQLZUw3ClqE8-kpmhqDmecLi4MCC6MdZIsm862Araq_2FDDef-oKybe-Os8tV9t8ppiO4maLeUDV8A5gMKtupitjnEtHfeJSrBPG6E-QNDo' }}
              className="w-full h-full"
            />
          </View>
          <Text className="font-hero-display text-[20px] font-bold tracking-tighter text-primary">GYMSYNC</Text>
          <TouchableOpacity className="w-8 h-8 flex items-center justify-center text-primary">
            <Icon name="search" size={24} color="#e1fdff" />
          </TouchableOpacity>
        </View>

        <View className="px-container-margin flex-col gap-6 mt-4">
          
          {/* Profile Header Card */}
          <GlassPanel className="rounded-3xl p-6 relative overflow-hidden flex-col md:flex-row items-center gap-6 shadow-lg shadow-primary-container/20 border-primary-fixed-dim/20">
            {/* Decorative gradient orb behind avatar */}
            <View className="absolute -top-10 -left-10 w-40 h-40 bg-primary-container rounded-full opacity-20" style={{ filter: 'blur(30px)' }} />
            
            <View className="relative w-28 h-28 shrink-0">
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiIsK97LaOyqf4kTDGoWb1nDwYHTVk7zulfGMjP-Z4lbNmX6-bCVTttRkXlpJkQXTyNnsLWtnkWjjuq1NZ-0H39siOWI0qeuNKDt7plinQq0PTAOphV691ZR8o5j8zHm5i4sA2csHGhkGYGylwdL_7QguGpnrJiI_VsNx7vgVJ0M2muQSsxCQZCD9JQRENUaWfnkm_LyPDsnAP5ZcbzQUWptdn48u4GuR4EVLAi4fbeqefCbIkY71AgqRNbUC4gD_2GnavbrMuv11s' }}
                className="w-full h-full object-cover rounded-full border-2 border-primary-container"
              />
              <View className="absolute bottom-0 right-0 bg-primary-container p-1 rounded-full border-2 border-surface">
                <Icon name="verified" size={16} color="#00363a" />
              </View>
            </View>
            
            <View className="flex-1 items-center z-10">
              <Text className="font-headline-lg-mobile text-[28px] font-bold text-primary mb-1">Alex Rivers</Text>
              <View className="flex-row items-center gap-1.5 px-3 py-1 bg-surface-container-highest rounded-full border border-outline-variant">
                <Icon name="workspace_premium" size={14} color="#00f2ff" />
                <Text className="font-label-caps text-label-caps text-on-surface-variant font-bold">ELITE MEMBER</Text>
              </View>
            </View>
            
            <View className="flex-row gap-3 z-10 mt-4">
              <TouchableOpacity className="bg-primary-container px-6 py-2 rounded-full shadow-lg shadow-primary-container/40 justify-center">
                <Text className="text-[#00363a] font-label-caps text-label-caps font-bold">Edit Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('/settings')} className="w-10 h-10 items-center justify-center rounded-full bg-white/5 border border-outline-variant">
                <Icon name="settings" size={20} color="#dce4e4" />
              </TouchableOpacity>
            </View>
          </GlassPanel>

          {/* Horizontal Stats Row */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-container-margin px-container-margin" contentContainerStyle={{ gap: 16 }}>
            {/* Stat Card 1 */}
            <GlassPanel className="rounded-2xl p-4 w-32 flex-col justify-between">
              <View className="flex-row items-center gap-2 mb-4">
                <Icon name="local_fire_department" size={20} color="#00dbe7" />
                <Text className="font-label-caps text-[10px] text-on-surface-variant font-bold">STREAK</Text>
              </View>
              <View className="flex-row items-baseline gap-1">
                <Text className="font-metric-xl text-metric-xl text-primary">14</Text>
                <Text className="font-body-md text-sm text-on-surface-variant">days</Text>
              </View>
            </GlassPanel>

            {/* Stat Card 2 */}
            <GlassPanel className="rounded-2xl p-4 w-36 flex-col justify-between relative overflow-hidden">
              <View className="absolute inset-0 bg-primary-container/10 opacity-50" />
              <View className="flex-row items-center gap-2 mb-4 z-10">
                <Icon name="fitness_center" size={20} color="#00dbe7" />
                <Text className="font-label-caps text-[10px] text-on-surface-variant font-bold">VOLUME</Text>
              </View>
              <View className="flex-row items-baseline gap-1 z-10">
                <Text className="font-metric-xl text-metric-xl text-primary">124</Text>
                <Text className="font-body-md text-sm text-on-surface-variant">k kg</Text>
              </View>
            </GlassPanel>

            {/* Stat Card 3 */}
            <GlassPanel className="rounded-2xl p-4 w-36 flex-col justify-between">
              <View className="flex-row items-center gap-2 mb-4">
                <Icon name="bolt" size={20} color="#5adcb3" />
                <Text className="font-label-caps text-[10px] text-tertiary-fixed-dim font-bold">AI SCORE</Text>
              </View>
              <View className="flex-row items-baseline gap-1">
                <Text className="font-metric-xl text-metric-xl text-primary">94</Text>
                <Text className="font-body-md text-sm text-on-surface-variant">/100</Text>
              </View>
            </GlassPanel>
          </ScrollView>

          {/* Grouped List Sections */}
          <View className="flex-col gap-6">
            
            {/* Activity Summary */}
            <GlassPanel className="rounded-2xl overflow-hidden p-0">
              <View className="p-4 border-b border-white/5 flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <Icon name="monitoring" size={16} color="#00dbe7" />
                </View>
                <Text className="font-headline-lg-mobile text-[18px] font-semibold text-primary">Activity Summary</Text>
              </View>
              <View className="p-6">
                <View className="h-24 flex-row items-end gap-1 opacity-80 justify-between">
                  {/* Simulated Heatmap bars */}
                  <View className="flex-1 bg-surface-container h-[30%] rounded-sm" />
                  <View className="flex-1 bg-primary-container h-[50%] rounded-sm opacity-60" />
                  <View className="flex-1 bg-surface-container h-[60%] rounded-sm" />
                  <View className="flex-1 bg-primary-container h-full rounded-sm shadow-lg shadow-primary-container/50" />
                  <View className="flex-1 bg-primary-container h-[40%] rounded-sm opacity-40" />
                  <View className="flex-1 bg-surface-container h-[80%] rounded-sm" />
                  <View className="flex-1 bg-primary-container h-[60%] rounded-sm opacity-80" />
                </View>
                <View className="flex-row justify-between mt-3">
                  <Text className="text-on-surface-variant font-label-caps text-[10px] w-6 text-center">MON</Text>
                  <Text className="text-on-surface-variant font-label-caps text-[10px] w-6 text-center">TUE</Text>
                  <Text className="text-on-surface-variant font-label-caps text-[10px] w-6 text-center">WED</Text>
                  <Text className="text-primary-container font-label-caps text-[10px] w-6 text-center">THU</Text>
                  <Text className="text-on-surface-variant font-label-caps text-[10px] w-6 text-center">FRI</Text>
                  <Text className="text-on-surface-variant font-label-caps text-[10px] w-6 text-center">SAT</Text>
                  <Text className="text-on-surface-variant font-label-caps text-[10px] w-6 text-center">SUN</Text>
                </View>
              </View>
            </GlassPanel>

            {/* Personal Records */}
            <GlassPanel className="rounded-2xl overflow-hidden p-0">
              <View className="p-4 border-b border-white/5 flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <Icon name="emoji_events" size={16} color="#00dbe7" />
                </View>
                <Text className="font-headline-lg-mobile text-[18px] font-semibold text-primary">Personal Records</Text>
              </View>
              
              <View className="border-b border-white/5 p-4 flex-row items-center justify-between">
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-outline-variant">
                    <Icon name="fitness_center" size={20} color="#b9cacb" />
                  </View>
                  <View>
                    <Text className="font-medium text-on-surface text-[16px]">Deadlift</Text>
                    <Text className="font-body-md text-sm text-on-surface-variant">1RM • Today</Text>
                  </View>
                </View>
                <View className="items-end">
                  <Text className="font-metric-xl text-[24px] text-primary leading-none">180</Text>
                  <Text className="text-[12px] text-on-surface-variant font-body-md">kg</Text>
                </View>
              </View>

              <View className="p-4 flex-row items-center justify-between">
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-outline-variant">
                    <Icon name="airline_seat_recline_extra" size={20} color="#b9cacb" />
                  </View>
                  <View>
                    <Text className="font-medium text-on-surface text-[16px]">Bench Press</Text>
                    <Text className="font-body-md text-sm text-on-surface-variant">3RM • Sep 12</Text>
                  </View>
                </View>
                <View className="items-end">
                  <Text className="font-metric-xl text-[24px] text-primary leading-none">105</Text>
                  <Text className="text-[12px] text-on-surface-variant font-body-md">kg</Text>
                </View>
              </View>
            </GlassPanel>

            {/* Social */}
            <GlassPanel className="rounded-2xl overflow-hidden p-0">
              <View className="p-4 border-b border-white/5 flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <Icon name="group" size={16} color="#00dbe7" />
                </View>
                <Text className="font-headline-lg-mobile text-[18px] font-semibold text-primary">Social</Text>
              </View>
              <View className="p-2">
                <TouchableOpacity className="flex-row items-center justify-between p-3 rounded-xl">
                  <View className="flex-row items-center gap-3">
                    <Icon name="person_search" size={20} color="#b9cacb" />
                    <Text className="text-on-surface font-body-md text-[16px]">Find Friends</Text>
                  </View>
                  <Icon name="chevron_right" size={20} color="#b9cacb" />
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center justify-between p-3 rounded-xl">
                  <View className="flex-row items-center gap-3">
                    <Icon name="diversity_3" size={20} color="#b9cacb" />
                    <Text className="text-on-surface font-body-md text-[16px]">Groups & Challenges</Text>
                  </View>
                  <Icon name="chevron_right" size={20} color="#b9cacb" />
                </TouchableOpacity>
              </View>
            </GlassPanel>

            {/* Account */}
            <GlassPanel className="rounded-2xl overflow-hidden p-0">
              <View className="p-4 border-b border-white/5 flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <Icon name="manage_accounts" size={16} color="#00dbe7" />
                </View>
                <Text className="font-headline-lg-mobile text-[18px] font-semibold text-primary">Account</Text>
              </View>
              <View className="p-2">
                <TouchableOpacity className="flex-row items-center justify-between p-3 rounded-xl">
                  <View className="flex-row items-center gap-3">
                    <Icon name="subscriptions" size={20} color="#b9cacb" />
                    <Text className="text-on-surface font-body-md text-[16px]">Subscription</Text>
                  </View>
                  <View className="flex-row items-center gap-2">
                    <Text className="text-sm text-primary-fixed-dim font-body-md">Pro Active</Text>
                    <Icon name="chevron_right" size={20} color="#b9cacb" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center justify-between p-3 rounded-xl">
                  <View className="flex-row items-center gap-3">
                    <Icon name="sync" size={20} color="#b9cacb" />
                    <Text className="text-on-surface font-body-md text-[16px]">Connected Apps</Text>
                  </View>
                  <Icon name="chevron_right" size={20} color="#b9cacb" />
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center justify-between p-3 rounded-xl mt-2 border-t border-white/5 pt-4">
                  <View className="flex-row items-center gap-3">
                    <Icon name="logout" size={20} color="#ffb4ab" />
                    <Text className="text-error font-body-md text-[16px]">Sign Out</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </GlassPanel>

          </View>
        </View>
      </ScrollView>
    </View>
  );
}
