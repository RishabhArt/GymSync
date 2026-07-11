import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { PrimaryButton } from '../../components/PrimaryButton';
import { GlassPanel } from '../../components/GlassPanel';
import { Icon } from '../../components/Icon';
import { useSignIn, useSignUp, useOAuth, useAuth } from '@clerk/clerk-expo';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    if (Platform.OS !== 'web') {
      void WebBrowser.warmUpAsync();
      return () => {
        void WebBrowser.coolDownAsync();
      };
    }
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
  const router = useRouter();
  
  // Canonical Clerk Hooks
  const { signIn, setActive: setSignInActive, isLoaded: isSignInLoaded } = useSignIn();
  const { signUp, setActive: setSignUpActive, isLoaded: isSignUpLoaded } = useSignUp();
  const { signOut } = useAuth(); // For the reset button

  const [mode, setMode] = useState<'signIn' | 'signUp'>('signIn');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [code, setCode] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // OAuth Setup
  const { startOAuthFlow: startGoogleOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  const { startOAuthFlow: startAppleOAuthFlow } = useOAuth({ strategy: 'oauth_apple' });

  const handleOAuth = React.useCallback(async (strategy: 'google' | 'apple') => {
    try {
      setLoading(true);
      setError('');
      
      const startFlow = strategy === 'google' ? startGoogleOAuthFlow : startAppleOAuthFlow;
      
      const { createdSessionId, setActive, signIn, signUp } = await startFlow({
        redirectUrl: Linking.createURL('/(auth)/login', { scheme: 'gymsync' }),
      });

      if (createdSessionId) {
        await setActive!({ session: createdSessionId });
        // After activating the session, we manually navigate to the dashboard
        // to bypass any layout guard latency.
        router.replace('/(tabs)/dashboard');
      } else {
        if (signUp?.status === 'missing_requirements') {
          setError('OAuth requires additional info (like a password). Please use Email Sign Up.');
        } else {
          setError('OAuth flow was incomplete.');
        }
      }
    } catch (err: any) {
      console.error('OAuth error', err);
      setError(err.errors?.[0]?.longMessage || err.message || 'Failed to authenticate.');
    } finally {
      setLoading(false);
    }
  }, []);

  const onSignInPress = async () => {
    if (!isSignInLoaded) return;
    setLoading(true);
    setError('');

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (completeSignIn.status === 'complete') {
        await setSignInActive({ session: completeSignIn.createdSessionId });
        router.replace('/(tabs)/dashboard');
      } else {
        setError('Sign in incomplete. Please check your credentials.');
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setError(err.errors?.[0]?.longMessage || err.errors?.[0]?.message || 'Sign In Error');
    } finally {
      setLoading(false);
    }
  };

  const onSignUpPress = async () => {
    if (!isSignUpLoaded) return;
    setLoading(true);
    setError('');

    try {
      const completeSignUp = await signUp.create({
        emailAddress,
        password,
        firstName: firstName || undefined,
        lastName: lastName || undefined,
      });

      if (completeSignUp.status === 'complete') {
        await setSignUpActive({ session: completeSignUp.createdSessionId });
        router.replace('/(tabs)/dashboard');
      } else {
        // Prepare email verification if Clerk still requires it
        await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
        setPendingVerification(true);
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setError(err.errors?.[0]?.longMessage || err.errors?.[0]?.message || 'Sign Up Error');
    } finally {
      setLoading(false);
    }
  };

  const onPressVerify = async () => {
    if (!isSignUpLoaded) return;
    setLoading(true);
    setError('');

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({ code });
      
      if (completeSignUp.status === 'complete') {
        await setSignUpActive({ session: completeSignUp.createdSessionId });
        router.replace('/(tabs)/dashboard');
      } else if (completeSignUp.status === 'missing_requirements') {
        const missing = completeSignUp.missingFields?.join(', ') || 'Unknown';
        setError(`Clerk is missing fields: ${missing}. Please disable them in Clerk Dashboard.`);
      } else {
        setError(`Verification incomplete. Status: ${completeSignUp.status}`);
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setError(err.errors?.[0]?.longMessage || err.errors?.[0]?.message || 'Invalid code');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView 
      className="flex-1 bg-background"
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 24 }}
      keyboardShouldPersistTaps="handled"
    >
      <View className="w-full max-w-[400px] self-center">
        {/* Header */}
        <View className="items-center mb-section-gap">
          <View className="w-16 h-16 bg-primary/20 rounded-2xl items-center justify-center mb-6">
            <Icon name="fitness_center" size={32} color="#00dbe7" />
          </View>
          <Text className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary text-center">
            {pendingVerification ? 'Verify Email' : mode === 'signIn' ? 'Welcome Back' : 'Create Account'}
          </Text>
          <Text className="text-on-surface-variant font-body-md mt-2 text-center">
            {pendingVerification ? 'Enter the code sent to your email.' : 'Sync your physical wellness.'}
          </Text>
        </View>

        {error ? (
          <View className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 mb-4 mx-2">
            <Text className="text-red-400 font-body-md text-center">{error}</Text>
          </View>
        ) : null}

        {!pendingVerification ? (
          <View className="flex-col gap-4">
            
            {mode === 'signUp' && (
              <View className="flex-row gap-4">
                <View className="flex-1 relative justify-center h-14">
                  <View className="absolute left-4 z-20 justify-center h-full">
                    <Icon name="person" size={20} color="#849495" />
                  </View>
                  <TextInput
                    value={firstName}
                    onChangeText={setFirstName}
                    placeholder="First Name"
                    placeholderTextColor="#849495"
                    className="w-full h-full pl-12 pr-4 bg-[#192122]/50 border border-white/10 rounded-xl text-on-surface font-body-md"
                  />
                </View>
                <View className="flex-1 relative justify-center h-14">
                  <TextInput
                    value={lastName}
                    onChangeText={setLastName}
                    placeholder="Last Name"
                    placeholderTextColor="#849495"
                    className="w-full h-full px-4 bg-[#192122]/50 border border-white/10 rounded-xl text-on-surface font-body-md"
                  />
                </View>
              </View>
            )}

            <View className="relative justify-center h-14">
              <View className="absolute left-4 z-20 justify-center h-full">
                <Icon name="mail" size={20} color="#849495" />
              </View>
              <TextInput
                value={emailAddress}
                onChangeText={setEmailAddress}
                placeholder="Email Address"
                placeholderTextColor="#849495"
                keyboardType="email-address"
                autoCapitalize="none"
                className="w-full h-full pl-12 pr-4 bg-[#192122]/50 border border-white/10 rounded-xl text-on-surface font-body-md"
              />
            </View>

            <View className="relative justify-center h-14">
              <View className="absolute left-4 z-20 justify-center h-full">
                <Icon name="lock" size={20} color="#849495" />
              </View>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                placeholderTextColor="#849495"
                secureTextEntry
                textContentType={mode === 'signUp' ? 'newPassword' : 'password'}
                passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
                className="w-full h-full pl-12 pr-4 bg-[#192122]/50 border border-white/10 rounded-xl text-on-surface font-body-md"
              />
            </View>

            <PrimaryButton 
              title={loading ? "Loading..." : mode === 'signIn' ? "Login" : "Sign Up"} 
              onPress={mode === 'signIn' ? onSignInPress : onSignUpPress} 
            />

            <View className="flex-row items-center my-6 gap-4">
              <View className="flex-1 h-[1px] bg-white/10" />
              <Text className="text-on-surface-variant font-label-md">OR</Text>
              <View className="flex-1 h-[1px] bg-white/10" />
            </View>

            <View className="flex-row gap-4">
              <TouchableOpacity 
                onPress={() => handleOAuth('google')}
                className="flex-1 h-14 bg-[#192122]/80 border border-white/10 rounded-xl flex-row items-center justify-center gap-3"
              >
                <Icon name="google" size={24} color="#b9cacb" />
                <Text className="text-on-surface font-label-lg">Google</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => handleOAuth('apple')}
                className="flex-1 h-14 bg-[#192122]/80 border border-white/10 rounded-xl flex-row items-center justify-center gap-3"
              >
                <Icon name="apple" size={24} color="#b9cacb" />
                <Text className="text-on-surface font-label-lg">Apple</Text>
              </TouchableOpacity>
            </View>

            {/* Toggle Mode */}
            <View className="mt-section-gap flex-row justify-center">
              <Text className="text-on-surface-variant font-body-md">
                {mode === 'signIn' ? "Don't have an account? " : "Already have an account? "}
              </Text>
              <TouchableOpacity onPress={() => { setMode(mode === 'signIn' ? 'signUp' : 'signIn'); setError(''); }}>
                <Text className="text-primary font-bold font-body-md">
                  {mode === 'signIn' ? 'Sign Up' : 'Login'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View className="flex-col gap-4">
            <View className="relative justify-center h-14">
              <View className="absolute left-4 z-20 justify-center h-full">
                <Icon name="lock" size={20} color="#849495" />
              </View>
              <TextInput
                value={code}
                onChangeText={setCode}
                placeholder="6-digit code"
                placeholderTextColor="#849495"
                keyboardType="numeric"
                maxLength={6}
                className="w-full h-full pl-12 pr-4 bg-[#192122]/50 border border-white/10 rounded-xl text-on-surface font-body-md tracking-[0.5em]"
              />
            </View>
            
            <View className="items-end mt-2 mb-6">
              <TouchableOpacity onPress={() => { setPendingVerification(false); setError(''); setCode(''); }}>
                <Text className="font-label-caps text-label-caps text-primary uppercase">Go back</Text>
              </TouchableOpacity>
            </View>

            <PrimaryButton 
              title={loading ? "Verifying..." : "Verify Code"} 
              onPress={onPressVerify} 
            />
          </View>
        )}

        {/* --- DANGER ZONE FOR DEBUGGING --- */}
        <View className="mt-16 items-center border-t border-white/10 pt-4">
          <TouchableOpacity 
            onPress={async () => {
              await signOut();
              setError('Session forcefully cleared! You can now test properly.');
            }}
          >
            <Text className="text-on-surface-variant font-body-sm underline">Reset Login State (Fix Stuck Sessions)</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}
