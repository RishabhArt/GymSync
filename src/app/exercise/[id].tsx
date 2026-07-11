import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { GlassPanel } from '../../components/GlassPanel';
import { Icon } from '../../components/Icon';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { EXERCISES } from '../../data/exercises';

export default function ExerciseDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  
  const exercise = EXERCISES.find(e => e.id === id);

  if (!exercise) {
    return (
      <View className="flex-1 bg-background justify-center items-center">
        <Text className="text-on-surface text-lg font-bold">Exercise not found</Text>
        <TouchableOpacity onPress={() => router.back()} className="mt-4 bg-primary-fixed-dim px-6 py-2 rounded-full">
          <Text className="text-[#002022] font-bold">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-background relative">
      {/* Ambient Background Lighting */}
      <View className="absolute top-0 left-[20%] w-[60%] aspect-square bg-primary/5 rounded-full z-0 pointer-events-none" style={{ filter: 'blur(120px)', opacity: 0.3 }} />

      {/* Top Navigation */}
      <View className="absolute top-0 w-full z-50 flex-row items-center justify-between px-gutter h-16 pt-8 bg-surface/60 border-b border-white/5">
        <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 active:scale-95">
          <Icon name="arrow_back" size={24} color="#dce4e4" />
        </TouchableOpacity>
        <Text className="font-headline-lg-mobile text-[20px] font-semibold text-on-surface tracking-tight" numberOfLines={1}>{exercise.name}</Text>
        <TouchableOpacity className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 active:scale-95">
          <Icon name="more_horiz" size={24} color="#dce4e4" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 z-10" contentContainerStyle={{ paddingTop: 96, paddingBottom: 150 }}>
        
        {/* Cinematic Video Player Section */}
        <View className="relative w-full h-[350px] bg-black">
          <Image 
            source={{ uri: exercise.videoUri || exercise.imageUri }}
            className="w-full h-full object-cover opacity-80"
          />
          {/* Video Controls Overlay */}
          <View className="absolute inset-0 flex-col justify-between p-container-margin pt-10" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
            <View className="flex-row justify-end">
              <GlassPanel className="px-3 py-1.5 rounded-full flex-row items-center gap-2">
                <Icon name="volume_up" size={16} color="#00dbe7" fill />
                <Text className="font-label-caps text-label-caps text-on-surface">Voiceover Active</Text>
              </GlassPanel>
            </View>
            <TouchableOpacity className="absolute top-1/2 left-1/2 -ml-8 -mt-8 w-16 h-16 rounded-full flex items-center justify-center border border-white/20 active:scale-95" style={{ backgroundColor: 'rgba(25, 33, 34, 0.6)' }}>
              <Icon name="play_arrow" size={32} color="#00dbe7" fill />
            </TouchableOpacity>
            <GlassPanel className="w-full rounded-xl p-3 flex-row items-center gap-4 mt-auto">
              <Text className="text-xs font-mono text-on-surface-variant">0:00</Text>
              <View className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden relative">
                <View className="absolute top-0 left-0 h-full bg-primary-fixed-dim w-1/3 rounded-full shadow-lg shadow-primary-fixed-dim/50" />
              </View>
              <Text className="text-xs font-mono text-on-surface-variant">1:45</Text>
              <TouchableOpacity>
                <Icon name="fullscreen" size={20} color="#b9cacb" />
              </TouchableOpacity>
            </GlassPanel>
          </View>
        </View>

        <View className="px-container-margin mt-8 flex-col gap-12">
          
          {/* Scientific Explanation */}
          <View className="relative">
            <View className="absolute top-[-25%] left-[-25%] w-[150%] h-[150%] bg-primary-fixed-dim/5 rounded-full z-0 pointer-events-none" style={{ filter: 'blur(50px)' }} />
            <GlassPanel className="relative z-10 rounded-2xl p-6">
              <View className="flex-row items-center gap-3 mb-4">
                <View className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="science" size={20} color="#00dbe7" />
                </View>
                <Text className="font-headline-lg-mobile text-[20px] font-semibold tracking-tight text-on-surface">Scientific Mechanics</Text>
              </View>
              <Text className="text-on-surface-variant leading-relaxed mb-6 font-body-md">
                {exercise.description}
              </Text>
              <View className="flex-row flex-wrap gap-4">
                <View className="flex-1 min-w-[45%] bg-surface-container-low rounded-xl p-3 border border-white/5">
                  <Text className="font-label-caps text-[10px] text-on-surface-variant block mb-1">Mechanic</Text>
                  <Text className="font-semibold text-on-surface">{exercise.mechanic}</Text>
                </View>
                <View className="flex-1 min-w-[45%] bg-surface-container-low rounded-xl p-3 border border-white/5">
                  <Text className="font-label-caps text-[10px] text-on-surface-variant block mb-1">Force</Text>
                  <Text className="font-semibold text-on-surface">{exercise.force}</Text>
                </View>
                <View className="flex-1 min-w-[45%] bg-surface-container-low rounded-xl p-3 border border-white/5">
                  <Text className="font-label-caps text-[10px] text-on-surface-variant block mb-1">Level</Text>
                  <Text className="font-semibold text-on-surface capitalize">{exercise.level.toLowerCase()}</Text>
                </View>
                <View className="flex-1 min-w-[45%] bg-surface-container-low rounded-xl p-3 border border-white/5">
                  <Text className="font-label-caps text-[10px] text-on-surface-variant block mb-1">Utility</Text>
                  <Text className="font-semibold text-on-surface">{exercise.utility}</Text>
                </View>
              </View>
            </GlassPanel>
          </View>

          {/* Muscles Involved */}
          <View className="flex-col">
            <Text className="font-label-caps text-label-caps text-on-surface-variant mb-4 ml-1">Muscles Engaged</Text>
            <GlassPanel className="rounded-2xl p-6 flex-col items-center gap-8">
              {/* 3D Body Map Placeholder */}
              <View className="w-[200px] h-[200px] rounded-full bg-surface/50 border border-white/5 overflow-hidden flex items-center justify-center">
                <Image 
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIhSMHDgzqvLIwypNAyHC3SRqw6jBQg1x0ouToaoGcIhUFCEC304ReuUBf7MemXRiLo5rnzNQ6XP-epum7Qau-wcQ6AesPP3A0KveYEBpRekmJjQadhpRr3i7b-1MPs17V0aWsNtUO88rc16xpFsPaTXNSO-Egu-XcOi_ZbfvTzDBL1FWHMTchdjCpslqfUcc9nYSrSbT9g6dbNANoZKsUZaJXNOYLGuJAi9br6crFaUNfVTqw1nIr-TOpnJo2cL9IpZfIFUfyha3p' }}
                  className="w-full h-full object-cover"
                  style={{ mixBlendMode: 'screen' }}
                />
              </View>
              
              <View className="w-full space-y-4 gap-4">
                {/* Primary */}
                <View>
                  <View className="flex-row justify-between items-end mb-2">
                    <Text className="font-semibold text-on-surface">{exercise.primaryMuscle}</Text>
                    <Text className="font-label-caps text-[12px] text-primary-fixed-dim">Primary</Text>
                  </View>
                  <View className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <View className="h-full bg-primary-fixed-dim w-[90%] shadow-lg shadow-primary-fixed-dim/50" />
                  </View>
                </View>
                
                {/* Secondary */}
                {exercise.secondaryMuscles.map(muscle => (
                  <View key={muscle}>
                    <View className="flex-row justify-between items-end mb-2">
                      <Text className="font-medium text-on-surface">{muscle}</Text>
                      <Text className="font-label-caps text-[10px] tracking-wider text-on-surface-variant uppercase">Secondary</Text>
                    </View>
                    <View className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                      <View className="h-full bg-tertiary-fixed-dim w-[65%]" />
                    </View>
                  </View>
                ))}
              </View>
            </GlassPanel>
          </View>

          {/* Technical Tips */}
          <View className="flex-col">
            <Text className="font-label-caps text-label-caps text-on-surface-variant mb-4 ml-1">Form & Technique</Text>
            <View className="flex-col gap-3">
              {exercise.tips.map((tip, index) => (
                <GlassPanel key={tip.title} className="rounded-xl p-4 flex-row gap-4 items-start">
                  <View className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border border-white/10 mt-0.5">
                    <Text className="font-label-caps text-[12px] text-on-surface">0{index + 1}</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="font-semibold text-on-surface mb-1 text-[16px]">{tip.title}</Text>
                    <Text className="text-sm text-on-surface-variant font-body-md">{tip.description}</Text>
                  </View>
                </GlassPanel>
              ))}
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Docked Action Button */}
      <View className="absolute bottom-0 w-full p-container-margin pb-8 pt-12 z-50 pointer-events-none" style={{ backgroundColor: 'rgba(13, 21, 21, 0.9)' }}>
        <TouchableOpacity className="pointer-events-auto w-full h-14 bg-primary-fixed-dim rounded-xl flex-row items-center justify-center gap-2 active:scale-95 shadow-lg shadow-primary-fixed-dim/30">
          <Icon name="fitness_center" size={20} color="#002022" fill />
          <Text className="text-[#002022] font-bold text-[16px]">Start Exercise</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
