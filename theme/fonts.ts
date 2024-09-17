import type { TextStyle } from 'react-native';

import { moderateScale } from '@/utils/layout-utils';

export type Fonts =
  | 'largeTitle4'
  | 'largeTitle5'
  | 'largeTitle'
  | 'largeTitle2'
  | 'semiLargeTitle2'
  | 'largeTitle3'
  | 'semiTitle'
  | 'title'
  | 'title2'
  | 'title3'
  | 'title3Plus'
  | 'title4'
  | 'headline'
  | 'headline2'
  | 'body'
  | 'callout'
  | 'callout2'
  | 'subhead'
  | 'footnote'
  | 'caption'
  | 'caption2'
  | 'caption3';

export type FontWeightOptions =
  | 'light' // 300
  | 'regular' // 400
  | 'medium' // 500
  | 'semibold' // 600
  | 'bold' // 700
  | 'extraBold' // 800
  | 'black'; // 900

export type FontWeightValue = TextStyle['fontWeight'];

export type FontProps = {
  [key in Fonts]: {
    fontSize: number;
    fontWeight: FontWeightValue;
    lineHeight: number;
  };
};

export type FontWeightStyles = {
  [key in FontWeightOptions]: FontWeightValue;
};

export const fontFamily = {
  regular: 'SF Pro',
  italic: 'SFPro-RegularItalic',
};

export const fonts: FontProps = {
  largeTitle3: {
    fontWeight: '400',
    fontSize: moderateScale(57),
    lineHeight: moderateScale(68),
  },
  largeTitle4: {
    fontWeight: '400',
    fontSize: moderateScale(32),
    lineHeight: moderateScale(38),
  },
  largeTitle5: {
    fontWeight: '400',
    fontSize: moderateScale(30),
    lineHeight: moderateScale(38),
  },
  largeTitle: {
    fontWeight: '400',
    fontSize: moderateScale(34),
    lineHeight: moderateScale(41),
  },
  semiLargeTitle2: {
    fontWeight: '400',
    fontSize: moderateScale(38),
    lineHeight: moderateScale(45),
  },
  largeTitle2: {
    fontWeight: '400',
    fontSize: moderateScale(42),
    lineHeight: moderateScale(50),
  },
  title: {
    fontWeight: '400',
    fontSize: moderateScale(28),
    lineHeight: moderateScale(34),
  },
  semiTitle: {
    fontWeight: '400',
    fontSize: moderateScale(24),
    lineHeight: moderateScale(28),
  },
  title2: {
    fontWeight: '400',
    fontSize: moderateScale(22),
    lineHeight: moderateScale(28),
  },
  title3: {
    fontWeight: '400',
    fontSize: moderateScale(20),
    lineHeight: moderateScale(24),
  },
  title3Plus: {
    fontWeight: '400',
    fontSize: moderateScale(19),
    lineHeight: moderateScale(23),
  },
  title4: {
    fontWeight: '400',
    fontSize: moderateScale(18),
    lineHeight: moderateScale(22),
  },
  headline: {
    fontWeight: '400',
    fontSize: moderateScale(18),
    lineHeight: moderateScale(22),
  },
  headline2: {
    fontWeight: '400',
    fontSize: moderateScale(17),
    lineHeight: moderateScale(22),
  },
  body: {
    fontWeight: '400',
    fontSize: moderateScale(17),
    lineHeight: moderateScale(22),
  },
  callout: {
    fontWeight: '400',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(21),
  },
  callout2: {
    fontWeight: '400',
    fontSize: moderateScale(15.5),
    lineHeight: moderateScale(21),
  },

  subhead: {
    fontWeight: '400',
    fontSize: moderateScale(15),
    lineHeight: moderateScale(20),
  },
  footnote: {
    fontWeight: '400',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(18),
  },
  caption: {
    fontWeight: '400',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(16),
  },
  caption2: {
    fontWeight: '400',
    fontSize: moderateScale(12),
    lineHeight: moderateScale(16),
  },
  caption3: {
    fontWeight: '400',
    fontSize: moderateScale(11),
    lineHeight: moderateScale(14),
  },
};

export const fontWeights: FontWeightStyles = {
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
};
