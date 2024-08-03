import { Stack } from 'expo-router';
import React from 'react';

export default function OnboardingLayout() {
  return (
    <Stack initialRouteName="step-1">
      <Stack.Screen name="step-1" />
      <Stack.Screen name="step-2" />
    </Stack>
  );
}
