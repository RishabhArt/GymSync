import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { GlassPanel } from '../../components/GlassPanel';
import { Icon } from '../../components/Icon';
import { useRouter } from 'expo-router';
import { EXERCISES } from '../../data/exercises';

export default function WorkoutLibraryScreen() {
  const router = useRouter();
  
  return (
    <View className="flex-1 bg-background">
      {/* Ambient Spotlights */}
      <View className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <View className="absolute -top-[20%] -left-[10%] w-[60%] aspect-square rounded-full bg-primary/10" style={{ filter: 'blur(100px)' }} />
        <View className="absolute top-[40%] -right-[20%] w-[50%] aspect-square rounded-full bg-tertiary-container/5" style={{ filter: 'blur(100px)' }} />
      </View>

      <ScrollView className="flex-1 z-10" contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Top App Bar */}
        <View className="flex-row items-center justify-between px-gutter py-4 mt-8 z-50">
          <View className="w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-surface-container-high">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkyx7XNJeEhom7PUc7Ki64qhtwLoex-U1E8a_dXEitvBKoeiwvRg61ZjTpFb5PSz-tR8pyr2y6Is2tDA-4kDwT9OdvIKasv9SLLkWywJT5LAZKosGV3WDL1RdcLZGZpbKsxYlRrIk5aeA7poTZvmgBm0zGPC-mZ-xgxprZHDqcBJZsOvISBpy1w1cm7-eM0AtJMIkMBkCvxRXEk-fkyAeet7gQVW5H7lK9I1Jvrl8qlUm6MTxqVQPbH21jVNNwk5-GQETFDzb4rVan' }}
              className="w-full h-full"
            />
          </View>
          <Text className="font-hero-display text-[24px] md:text-[32px] tracking-tighter text-primary font-bold">GYMSYNC</Text>
          <TouchableOpacity className="p-2 text-on-surface-variant hover:text-primary transition-colors hover:opacity-80 active:scale-95">
            <Icon name="search" size={24} color="#b9cacb" />
          </TouchableOpacity>
        </View>

        <View className="px-container-margin flex-col gap-8 mt-4">
          {/* Search & Filter Section */}
          <View className="flex-col gap-6">
            {/* Search Bar */}
            <GlassPanel className="rounded-full flex-row items-center px-6 py-4 shadow-lg focus-within:ring-1 focus-within:ring-primary/50">
              <Icon name="search" size={20} color="#b9cacb" style={{ marginRight: 12 }} />
              <TextInput 
                className="bg-transparent border-none text-on-surface placeholder:text-on-surface-variant flex-1 font-body-md outline-none" 
                placeholder="Search exercises, programs..." 
                placeholderTextColor="#b9cacb"
              />
            </GlassPanel>

            {/* Categories Horizontal Scroll */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-container-margin px-container-margin" contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}>
              <TouchableOpacity className="px-6 py-2 rounded-full bg-primary shadow-lg shadow-primary-fixed-dim/20 justify-center">
                <Text className="text-on-primary font-label-caps text-label-caps font-bold">All</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-6 py-2 rounded-full bg-white/5 border border-white/10 justify-center">
                <Text className="text-on-surface font-label-caps text-label-caps font-bold">Chest</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-6 py-2 rounded-full bg-white/5 border border-white/10 justify-center">
                <Text className="text-on-surface font-label-caps text-label-caps font-bold">Back</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-6 py-2 rounded-full bg-white/5 border border-white/10 justify-center">
                <Text className="text-on-surface font-label-caps text-label-caps font-bold">Shoulders</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-6 py-2 rounded-full bg-white/5 border border-white/10 justify-center">
                <Text className="text-on-surface font-label-caps text-label-caps font-bold">Legs</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-6 py-2 rounded-full bg-white/5 border border-white/10 justify-center">
                <Text className="text-on-surface font-label-caps text-label-caps font-bold">Arms</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-6 py-2 rounded-full bg-white/5 border border-white/10 justify-center">
                <Text className="text-on-surface font-label-caps text-label-caps font-bold">Core</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* Categorized Exercises */}
          <View className="flex-col gap-8">
            {Array.from(new Set(EXERCISES.map(e => e.bodyPart))).map(part => (
              <View key={part} className="flex-col gap-4">
                <Text className="font-headline-lg-mobile text-[22px] text-primary font-bold tracking-tight px-1">{part} Exercises</Text>
                {EXERCISES.filter(e => e.bodyPart === part).map(exercise => (
                  <TouchableOpacity key={exercise.id} onPress={() => router.push(`/exercise/${exercise.id}`)}>
                    <GlassPanel className="rounded-xl p-3 flex-row gap-4 items-center">
                      <View className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-surface-container-high relative justify-center items-center">
                        <Image 
                          source={{ uri: exercise.imageUri }}
                          className="absolute inset-0 w-full h-full"
                        />
                        <View className="absolute inset-0 bg-black/30" />
                        <Icon name="play_circle_outline" size={28} color="white" />
                      </View>
                      <View className="flex-1 flex-col gap-1">
                        <Text className="font-headline-lg-mobile text-[18px] text-on-surface font-bold tracking-tight">{exercise.name}</Text>
                        <Text className="font-body-md text-on-surface-variant text-[14px]">{exercise.category}</Text>
                        <View className="flex-row items-center gap-2 mt-1">
                          <View className={`px-2 py-1 rounded-sm border ${exercise.level === 'BEGINNER' ? 'border-primary-fixed-dim/30 bg-primary-fixed-dim/10' : exercise.level === 'INTERMEDIATE' ? 'border-tertiary-fixed-dim/30 bg-tertiary-fixed-dim/10' : 'border-error/30 bg-error/10'}`}>
                            <Text className={`font-label-caps text-[10px] font-bold tracking-wider ${exercise.level === 'BEGINNER' ? 'text-primary-fixed-dim' : exercise.level === 'INTERMEDIATE' ? 'text-tertiary-fixed-dim' : 'text-error'}`}>{exercise.level}</Text>
                          </View>
                        </View>
                      </View>
                      <TouchableOpacity className="p-2">
                        <Icon name="bookmark_border" size={24} color="#b9cacb" />
                      </TouchableOpacity>
                    </GlassPanel>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>

          {/* AI Diet Chart (Gemini) */}
          <View className="mt-8 mb-4 relative">
            <View className="absolute top-[-25%] left-[-25%] w-[150%] h-[150%] bg-tertiary-fixed-dim/10 rounded-full z-0 pointer-events-none" style={{ filter: 'blur(50px)' }} />
            <GlassPanel className="relative z-10 rounded-2xl p-6 border border-tertiary-fixed-dim/20">
              <View className="flex-row items-center gap-3 mb-6">
                <View className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-white/5">
                  <Icon name="auto_awesome" size={20} color="#71f1c7" />
                </View>
                <View className="flex-1">
                  <Text className="font-headline-lg-mobile text-[20px] font-semibold text-on-surface tracking-tight">AI Diet Chart</Text>
                  <Text className="text-[12px] text-tertiary-fixed-dim font-mono">Generated by Gemini</Text>
                </View>
              </View>

              <View className="flex-col gap-6">
                {/* Ectomorph */}
                <View className="flex-col gap-2">
                  <View className="flex-row items-center justify-between">
                    <Text className="font-semibold text-on-surface text-[16px]">Ectomorph</Text>
                    <Text className="font-label-caps text-[10px] text-on-surface-variant tracking-wider">HARD GAINER</Text>
                  </View>
                  <Text className="text-sm text-on-surface-variant font-body-md leading-relaxed">Fast metabolism. Focus on high carbohydrates (55%), moderate protein (25%), and low fat (20%). Eat 5-6 calorie-dense meals daily.</Text>
                  <View className="h-1.5 w-full flex-row rounded-full overflow-hidden mt-1 bg-surface-container-highest">
                    <View className="h-full bg-primary-fixed-dim w-[55%]" />
                    <View className="h-full bg-tertiary-fixed-dim w-[25%]" />
                    <View className="h-full bg-error w-[20%]" />
                  </View>
                </View>

                {/* Mesomorph */}
                <View className="flex-col gap-2">
                  <View className="flex-row items-center justify-between">
                    <Text className="font-semibold text-on-surface text-[16px]">Mesomorph</Text>
                    <Text className="font-label-caps text-[10px] text-on-surface-variant tracking-wider">ATHLETIC</Text>
                  </View>
                  <Text className="text-sm text-on-surface-variant font-body-md leading-relaxed">Balanced metabolism. Even macronutrient split: Carbs (40%), Protein (30%), Fat (30%). Time carbs around workouts.</Text>
                  <View className="h-1.5 w-full flex-row rounded-full overflow-hidden mt-1 bg-surface-container-highest">
                    <View className="h-full bg-primary-fixed-dim w-[40%]" />
                    <View className="h-full bg-tertiary-fixed-dim w-[30%]" />
                    <View className="h-full bg-error w-[30%]" />
                  </View>
                </View>

                {/* Endomorph */}
                <View className="flex-col gap-2">
                  <View className="flex-row items-center justify-between">
                    <Text className="font-semibold text-on-surface text-[16px]">Endomorph</Text>
                    <Text className="font-label-caps text-[10px] text-on-surface-variant tracking-wider">EASY GAINER</Text>
                  </View>
                  <Text className="text-sm text-on-surface-variant font-body-md leading-relaxed">Slower metabolism. Focus on higher protein (40%) and fat (40%), with lower carbohydrates (20%) from fibrous veggies.</Text>
                  <View className="h-1.5 w-full flex-row rounded-full overflow-hidden mt-1 bg-surface-container-highest">
                    <View className="h-full bg-primary-fixed-dim w-[20%]" />
                    <View className="h-full bg-tertiary-fixed-dim w-[40%]" />
                    <View className="h-full bg-error w-[40%]" />
                  </View>
                </View>

                {/* Legend */}
                <View className="flex-row justify-center mt-2 items-center gap-4">
                  <View className="flex-row items-center gap-1.5">
                    <View className="w-2 h-2 rounded-full bg-primary-fixed-dim" />
                    <Text className="text-[10px] text-on-surface-variant font-mono">CARBS</Text>
                  </View>
                  <View className="flex-row items-center gap-1.5">
                    <View className="w-2 h-2 rounded-full bg-tertiary-fixed-dim" />
                    <Text className="text-[10px] text-on-surface-variant font-mono">PROTEIN</Text>
                  </View>
                  <View className="flex-row items-center gap-1.5">
                    <View className="w-2 h-2 rounded-full bg-error" />
                    <Text className="text-[10px] text-on-surface-variant font-mono">FAT</Text>
                  </View>
                </View>
              </View>
            </GlassPanel>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
