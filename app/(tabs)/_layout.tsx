/* eslint-disable react/no-unstable-nested-components */
import { Tabs } from 'expo-router';
import { type ReactNode } from 'react';

import { colors, fontFamily, normalizedSizes } from '@/theme';
import { t } from '@/lang';
import { SettingsIcon } from '@/assets/icons/SettingsIcon';

export default function TabsLayout(): ReactNode {
  return (
    <>
      <Tabs
        initialRouteName="home"
        screenOptions={{
          tabBarActiveTintColor: colors.dark,
          tabBarInactiveTintColor: colors.lightGrey,
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: fontFamily.regular,
            fontSize: normalizedSizes.small,
            fontWeight: '500',
            paddingTop: normalizedSizes.tiny,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: t('hello'),
            tabBarIcon: ({ color }) => (
              <SettingsIcon
                color={color}
                width={normalizedSizes.hugeMassive}
                height={normalizedSizes.hugeMassive}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="other"
          options={{
            title: t('hello'),
            tabBarIcon: ({ color }) => (
              <SettingsIcon
                color={color}
                width={normalizedSizes.hugeMassive}
                height={normalizedSizes.hugeMassive}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: t('hello'),
            tabBarIcon: ({ color }) => (
              <SettingsIcon
                color={color}
                width={normalizedSizes.hugeMassive}
                height={normalizedSizes.hugeMassive}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
