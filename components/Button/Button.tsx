import { LinearGradient } from 'expo-linear-gradient';
import React, { type ReactElement } from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  type TouchableOpacityProps,
  type ViewProps,
} from 'react-native';

import { rgba } from '@/theme';

import { Box } from '../Box/Box';
import { Text, type TextProps } from '../Text/Text';
import { styles } from './Button.styles';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary';
  title: string;
  textProps?: TextProps;
  loading?: boolean;
  leftElement?: ReactElement;
  rightElement?: ReactElement;
}

type GradientButtonProps = Omit<ButtonProps, 'variant'> & {
  gradientStyle?: ViewProps['style'];
  contentStyle?: ViewProps['style'];
};

export const Button = ({
  variant = 'primary',
  title,
  textProps,
  style,
  leftElement,
  rightElement,
  loading = false,
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <TouchableOpacity
      style={[styles.container, styles[variant], styles.shadow, style]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <Box row center>
          {leftElement !== null && <Box>{leftElement}</Box>}
          <Text
            color="black"
            variant="headline2"
            weight="semibold"
            style={[styles[`textStyle${variant}`], textProps?.style]}
            numberOfLines={1}
          >
            {title}
          </Text>
          {rightElement !== null && <Box>{rightElement}</Box>}
        </Box>
      )}
    </TouchableOpacity>
  );
};

export const GradientButton = ({
  title,
  textProps,
  contentStyle,
  style,
  leftElement,
  rightElement,
  gradientStyle,
  loading = false,
  ...rest
}: GradientButtonProps): ReactElement => {
  return (
    <TouchableOpacity style={style} {...rest}>
      <LinearGradient
        colors={[rgba('white', 0.1), rgba('white', 0.2), rgba('white', 0.1)]}
        start={{ x: 0.35, y: 0 }}
        end={{ x: 0.7, y: 1 }}
        locations={[0, 0.5, 1]}
        style={[styles.gradientContainer, gradientStyle]}
      >
        {loading ? (
          <ActivityIndicator size="small" />
        ) : (
          <Box row style={[styles.content, contentStyle]}>
            {leftElement !== null && <Box>{leftElement}</Box>}
            <Text
              color="white"
              variant="headline2"
              weight="semibold"
              numberOfLines={1}
              style={textProps?.style}
            >
              {title}
            </Text>
            {rightElement !== null && <Box>{rightElement}</Box>}
          </Box>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};
