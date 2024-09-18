import { StyleSheet } from 'react-native';

import { colors, normalizedSizes } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: normalizedSizes.medium,
    paddingHorizontal: normalizedSizes.large,
    borderRadius: normalizedSizes.extraGigantic,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: colors.white,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: -0.5,
    },
    shadowOpacity: 1,
    elevation: 5,
  },
  primary: {
    backgroundColor: colors.black,
  },
  secondary: {
    backgroundColor: colors.black,
  },
  textStyleprimary: {
    color: colors.black,
  },
  textStylesecondary: {
    color: colors.white,
  },
  content: {
    alignItems: 'center',
  },
  gradientContainer: {
    paddingVertical: normalizedSizes.medium,
    paddingHorizontal: normalizedSizes.large,
    borderRadius: normalizedSizes.extraGigantic,
  },
});
