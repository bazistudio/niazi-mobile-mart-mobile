import React from 'react';
import { Text, TextProps } from 'react-native';
import { theme } from '../../design/theme';

interface AppTextProps extends TextProps {
  variant?: keyof typeof theme.typography.sizes;
  weight?: keyof typeof theme.typography.weights;
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export const AppText: React.FC<AppTextProps> = ({
  children,
  variant = 'md',
  weight = 'regular',
  color = theme.colors.textPrimary,
  align = 'auto',
  style,
  ...rest
}) => {
  return (
    <Text
      style={[
        {
          fontSize: theme.typography.sizes[variant],
          fontWeight: theme.typography.weights[weight],
          color,
          textAlign: align,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};
