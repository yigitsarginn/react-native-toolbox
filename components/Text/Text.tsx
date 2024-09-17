import React, { type ReactElement } from 'react';
import { type TextProps as RNTextProps, Text as RnText } from 'react-native';

import {
  type Colors,
  type FontWeightOptions,
  type Fonts,
  colors,
  fontFamily,
  fontWeights,
  fonts,
} from '@/theme';

import { styles } from './Text.styles';

export interface TextProps extends RNTextProps {
  variant?: Fonts;
  weight?: FontWeightOptions;
  color?: Colors;
  isItalic?: boolean;
  center?: boolean;
  letterSpacing?: number;
}

export const Text = ({
  variant = 'body',
  color = 'black',
  isItalic,
  weight,
  center,
  letterSpacing = 0,
  style,
  ...rest
}: TextProps): ReactElement => (
  <RnText
    style={[
      {
        fontFamily: isItalic ?? false ? fontFamily.italic : fontFamily.regular,
        fontSize: fonts[variant].fontSize,
        color: colors[color],
        fontWeight:
          weight !== undefined
            ? fontWeights[weight]
            : fonts[variant].fontWeight,
        lineHeight: fonts[variant].lineHeight,
        letterSpacing,
      },
      (center ?? false) && styles.center,
      style,
    ]}
    {...rest}
  />
);
