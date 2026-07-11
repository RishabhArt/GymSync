import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PrimaryButton } from '../../components/PrimaryButton';
import { GlassPanel } from '../../components/GlassPanel';
import { Icon } from '../../components/Icon';

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    // Navigate to the main app dashboard
    router.replace('/(tabs)/dashboard');
  };

  return (
    <ScrollView 
      className="flex-1 bg-background"
      contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 40 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Ambient Background Lighting */}
      <View className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <View className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container opacity-5 rounded-full blur-[120px]" />
      </View>

      <View className="relative z-10 w-full max-w-md px-container-margin md:px-0">
        {/* Header */}
        <View className="items-center mb-section-gap">
          <View className="relative mb-6">
            <View className="absolute inset-0 bg-primary-container opacity-20 rounded-full blur-2xl" />
            <Image
              source={require('../../../assets/images/gym_sync_auth_logo.png')}
              style={{ width: 96, height: 96, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' }}
              className="relative z-10"
              resizeMode="contain"
            />
          </View>
          <Text className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary text-center">
            Welcome Back
          </Text>
          <Text className="text-on-surface-variant font-body-md mt-2 text-center">
            Sync your physical wellness.
          </Text>
        </View>

        {/* Login Form */}
        <View className="flex-col gap-4">
          <View className="relative justify-center h-14">
            <View className="absolute left-4 z-20 justify-center h-full">
              <Icon name="mail" size={20} color="#849495" />
            </View>
            <TextInput
              placeholder="Email or Username"
              placeholderTextColor="#849495"
              className="w-full h-full pl-12 pr-4 bg-[#192122]/50 border border-white/10 rounded-xl text-on-surface font-body-md"
            />
          </View>

          <View className="relative justify-center h-14 mt-2">
            <View className="absolute left-4 z-20 justify-center h-full">
              <Icon name="lock" size={20} color="#849495" />
            </View>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#849495"
              secureTextEntry
              className="w-full h-full pl-12 pr-4 bg-[#192122]/50 border border-white/10 rounded-xl text-on-surface font-body-md"
            />
          </View>

          <View className="items-end mt-2 mb-6">
            <TouchableOpacity>
              <Text className="font-label-caps text-label-caps text-on-surface-variant uppercase">Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <PrimaryButton title="Login" onPress={handleLogin} />
        </View>

        {/* Divider */}
        <View className="flex-row items-center gap-4 my-8">
          <View className="h-px bg-white/10 flex-1" />
          <Text className="font-label-caps text-label-caps text-on-surface-variant uppercase">OR CONTINUE WITH</Text>
          <View className="h-px bg-white/10 flex-1" />
        </View>

        {/* Social Logins */}
        <View className="flex-col gap-4">
          <TouchableOpacity activeOpacity={0.7}>
            <GlassPanel className="w-full h-14 flex-row items-center justify-center gap-3">
              <MaterialCommunityIcons name="apple" size={24} color="#dce4e4" />
              <Text className="font-headline-lg-mobile text-[16px] text-on-surface">Continue with Apple</Text>
            </GlassPanel>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <GlassPanel className="w-full h-14 flex-row items-center justify-center gap-3">
              <MaterialCommunityIcons name="google" size={24} color="#dce4e4" />
              <Text className="font-headline-lg-mobile text-[16px] text-on-surface">Continue with Google</Text>
            </GlassPanel>
          </TouchableOpacity>
        </View>

        {/* Sign Up Link */}
        <View className="mt-section-gap flex-row justify-center">
          <Text className="text-on-surface-variant font-body-md">Don't have an account? </Text>
          <TouchableOpacity>
            <Text className="text-primary font-bold font-body-md">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
